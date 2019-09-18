# 고차 컴포넌트(High Order Component)

React에서 Mixin 패턴을 지양하고 HOC를 지향하게된 이유

[왜 믹스인은 해로운가?](https://itmining.tistory.com/124)

고차 컴포넌트를 알기 전에 고차 함수에 대해서 알고 시작하면 좋다. 그러나 어렵고 많은 내용이 있기에 보지 않고 넘어가셔도 됩니다.

이와 관련된 아래의 글을 읽어보는 것을 추천한다.

> [고차함수(High Order Function)](https://github.com/Im-D/Dev-Docs/blob/master/Language/%EA%B3%A0%EC%B0%A8%ED%95%A8%EC%88%98(High%20Order%20Function).md)

고차 컴포넌트는 React에서 나온 API가 아니다. 컴포넌트 로직을 재사용하기 위한 하나의 패턴에 불과하다. 

고차 컴포넌트는 React의 컴포넌트적 성격에서 나타나는 패턴이다. 구체적으로는 고차 컴포넌트라는 것은 컴포넌트를 받아 새로운 컴포넌트를 반환하는 함수이다.

```js
// higherOrderComponent라는 고차 컴포넌트를 사용해서 WrappedComponent를 넣고 새로운 컴포넌트를 반환한다.
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

기존에는 컴포넌트가 UI를 props로 반환했다면, 고차 컴포넌트는 컴포넌트를 다른 컴포넌트로 변환해서 반환한다.

우리가 Redux에서 많이 보았던 `connect()`가 고차 컴포넌트 중 하나이다.

예전의 리액트에서는 **크로스 커팅**을 해결하기 위해서 Mixin 패턴(위에서 언급했던 내용)을 권장을 했었다. 현재는 Mixin 패턴이 적합하지 않다는 것을 깨닫고 더이상 권장하지 않는다.

한 가지 에를 들어 보자. 외부로부터 데이터를 구독하여 댓글 목록을 렌더링하는 CommenList 컴포넌트가 있다.

```js
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```

블로그 포스트 구독하기 기능을 비슷한 패턴으로 컴포넌트를 작성한다.

```js
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```

`CommentList`, `BlogPost` 두 컴포넌트는 DataSource에서 서로 다른 메서드를 호출하며 다른 렌더링 결과를 보여주고 있다. 

- 마운트되면, change 리스너를 DataSource 에 추가한다.
- 리스너 안에서, 데이터 소스가 변경되면 setState 를 호출한다.
- 마운트 해제되면 change 리스너를 제거한다.

큰 어플리케이션에서는 더더욱 DataSource를 구독하고 `setState` 를 호출하는 패턴이 동일하게 존재할 수 있다.

위의 로직을 한 곳에 정의하고 많은 컴포넌트에서 공유할 수 있도록 하는 추상화 하는 방법이 필요하다. 이럴 때 고차 컴포넌트가 최적이다.

DataSource를 구독하는 CommentList나 BlogPost 같은 컴포넌트를 생성하는 함수를 작성해보자. 

데이터를 prop으로 구독하여 전달받는 자식 컴포넌트를 파라미터 중 하나로 받는 함수를 만든다. 이 함수를 withSubscription 라고 하자.

```js
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```

첫번째 파라미터는 래핑될 컴포넌트이고, 두번째 파라미터는 데이터를 검색하는 로직이 된다. 여기서는 DataSource와 현재 props를 준다.

`CommentListWithSubscription` 과 `BlogPostWithSubscription` 가 렌더링될 때 CommentList 와 BlogPost 는 DataSource 에서 가장 최근에 검색된 데이터를 data prop으로 전달한다.

```js
// This function takes a component...
function withSubscription(WrappedComponent, selectData) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```

고차 컴포넌트는 입력 컴포넌트를 수정하지 않으며 상속을 사용하여 동작을 복사하지도 않는다. 오히려 고차 컴포넌트는 원래 컴포넌트를 컨테이너 컴포넌트로 래핑하여 조정한다.

고차 컴포넌트는 사이드 이펙트가 없는 순수 함수이다.

고차 컴포넌트는 데이터가 사용되는 이유 및 방법과 연관이 없으며 래핑된 컴포넌트는 데이터가 어디서부터 왔는지 연관이 없다.

withSubscription 는 일반 함수이기 때문에 원하는 갯수의 인수를 추가할 수 있다. 예를 들어 래핑된 컴포넌트로부터 고차 컴포넌트를 더 격리시키기 위해 data prop 이름을 설정 가능하게 만들 수 있는 것이다. 혹은 shouldComponentUpdate 설정을 위한 인수를 받게 하거나 데이터 소스를 설정하는 인수를 받게할 수 있는데. 고차 컴포넌트가 컴포넌트 정의 방법을 완전히 제어할 수 있기 때문에 이러한 작업들이 모두 가능하다.

컴포넌트와 마찬가지로 withSubscription과 래핑된 컴포넌트 간 맺음은 완전히 props 기반이다. 이렇게 래핑된 컴포넌트에 동일한 props를 제공한다면 다른 고차 컴포넌트를 쉽게 교차할 수 있다. 

### 주의사항

1. render 메서드 안에서 고차 컴포넌트를 사용해선 안된다.

React의 비교 알고리즘은 컴포넌트 ID를 사용하여 기존 서브트리를 업데이트 해야하는지 아니면 버리고 새로운 노드를 마운트해야 하는지를 결정하는데, render에서 반환된 컴포넌트가 이전 렌더링의 컴포넌트와 동일하다면 React가 새 트리와 비교하여 반복적으로 서브트리를 업데이트하고 동일하지 않다면 이전 서브트리는 완전히 마운트 해제된다.

보통 이것에 대해 생각할 필요가 없지만 컴포넌트의 렌더링 메서드 안에서 컴포넌트에 고차 컴포넌트를 적용할 수 없기 때문에 고차 컴포넌트에서 고려해야한다.

```js
render() {
  // A new version of EnhancedComponent is created on every render
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // That causes the entire subtree to unmount/remount each time!
  return <EnhancedComponent />;
}
```

문제는 성능상의 문제만이 아니다. 컴포넌트를 다시 마운트하면 컴포넌트의 state와 모든 하위 항목이 손실이 된다.

컴포넌트 정의 외부에서 고차 컴포넌트를 적용하여 결과 컴포넌트가 한번만 생성되도록 해야한다. 그런 다음 ID가 렌더링간에 일관되게 유지해야 한다.

간혹 고차 컴포넌트를 동적으로 적용해야하는 경우. 컴포넌트의 라이프사이클 메서드 또는 생성자 내에서 고차 컴포넌트를 수행할 수도 있다.

2. 정적 메서드는 복사해야합니다.

React 컴포넌트에서 정적 메서드를 정의하는 것이 유용할 때가 있다. 

고차 컴포넌트를 컴포넌트에 적용할 때 원본 컴포넌트는 컨테이너 컴포넌트에 감싸진다. 새로운 컴포넌트에는 원본 컴포넌트의 정적 메서드가 없는 것이다.

```js
// Define a static method
WrappedComponent.staticMethod = function() {/*...*/}
// Now apply a HOC
const EnhancedComponent = enhance(WrappedComponent);

// The enhanced component has no static method
typeof EnhancedComponent.staticMethod === 'undefined' // true
```

이 문제를 해결하기 위해 메서드를 반환하기 전에 컨테이너에 메서드를 복사하는 방법이다.

```js
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // Must know exactly which method(s) to copy :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
```

이렇게 하려면 어떤 메서드를 복사해야 하는지 정확히 알아야 한다. 모든 React가 아닌 정적 메서드를 자동으로 복사하기 위해 `hoist-non-react-statics`를 사용할 수 있다고 한다.

```js
import hoistNonReactStatic from 'hoist-non-react-statics';

function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  hoistNonReactStatic(Enhance, WrappedComponent);
  return Enhance;
}
```

다른 긍정적인 해결방법은 정적 메서드를 컴포넌트 자체와 별도로 내보내는 것입니다.

```js
// Instead of...
MyComponent.someFunction = someFunction;
export default MyComponent;

// ...export the method separately...
export { someFunction };

// ...and in the consuming module, import both
import MyComponent, { someFunction } from './MyComponent.js';
```

3. Refs는 전달할 수 없습니다.
   
고차 컴포넌트에 대한 컨벤션은 모든 props를 래핑된 컴포넌트로 전달하는 것이지만 refs를 전달하는 것은 불가능하다. 이유는 ref가 prop이 아니라 key처럼 React가 특별하게 처리되기 때문이다. 컴포넌트가 고차 컴포넌트의 결과인 요소에 대한 ref를 추가하면 ref는 래핑된 컴포넌트가 아닌 가장 바깥쪽 컨테이너 컴포넌트의 인스턴스를 참조하게 되어 버린다.

만약 이런 문제에 직면했을 때 가장 이상적인 해결방법은 ref를 사용하지 않는 방법을 찾는 것이다. 때로 React 패러다임에 익숙하지 않은 유저는 prop이 더 잘 작동하는 환경에서도 refs에 의존한다.

refs가 유효한 방법일 때도 있다. React는 그들을 다르게 지원하지 않을 것이다. 입력 필드에 포커스를 맞추는 것을 컴포넌트의 필수 제어가 필요한 경우로 예를 들 수 있습니다. 이 케이스에서 한가지 방법은 ref콜백을 일반 prop로써 전달하고, 다른 이름을 부여하는 것이다.

```js
function Field({ inputRef, ...rest }) {
  return <input ref={inputRef} {...rest} />;
}

// Wrap Field in a higher-order component
const EnhancedField = enhance(Field);

// Inside a class component's render method...
<EnhancedField
  inputRef={(inputEl) => {
    // This callback gets passed through as a regular prop
    this.inputEl = inputEl
  }}
/>

// Now you can call imperative methods
this.inputEl.focus();
```

어떤 방법으로도 완벽한 해결 방법은 없다. 문제를 해결할 수 있는 방법을 React에서 찾아보는 중이라고 한다.

--- 

#### Reference

- [공식문서](https://reactjs-kr.firebaseapp.com/docs/higher-order-components.html)