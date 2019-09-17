# 고차 컴포넌트(High Order Component)(작성 중)

[왜 믹스인은 해로운가?](https://itmining.tistory.com/124)

고차 컴포넌트는 컴포넌트 로직을 재사용하기 위한 기술이다. 고차 컴포넌트는 React의 컴포넌트적 성격에서 나타나는 패턴이다.

구체적으로는 고차 컴포넌트는 컴포넌트를 받아서 새로운 컴포넌트를 반환하는 함수이다.

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

기존의 우리가 사용하는 컴포넌트가 UI를 props로 반환한다면, 고차 컴포넌트는 컴포넌트를 다른 컴포넌트로 변환해서 반환한다.

우리가 Redux에서 많이 보았던 connect()가 바로 고차 컴포넌트 중 하나이다.

기존의 리액트에서는 크로스 커팅을 해결하기 위해서 Mixin 패턴을 권장을 했었다. 그러나 이것은 적합하지 않았다.

에를 들어

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

위와 같은 컴포넌트 CommentList, BlogPost 2개가 있다고 하자. 두 컴포넌트는 DataSource에서 서로 다른 메서드를 호출하며 다른 렌더링 결과를 보여준다. 

- 마운트되면, change 리스너를 DataSource 에 추가합니다.
- 리스너 안에서, 데이터 소스가 변경되면 setState 를 호출합니다.
- 마운트 해제되면 change 리스너를 제거합니다.

큰 어플리케이션에서 DataSource를 구독하고 setState 를 호출하는 동일한 패턴이 반복적으로 발생한다고 상상할 수 있다.


고차 컴포넌트는 입력 컴포넌트를 수정하지 않으며 상속을 사용하여 동작을 복사하지도 않는다. 오히려 고차 컴포넌트는 원래 컴포넌트를 컨테이너 컴포넌트에 래핑하여 조정한다.


--- 

#### Reference

- [공식문서](https://reactjs-kr.firebaseapp.com/docs/higher-order-components.html)