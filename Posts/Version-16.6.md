# React v16.6

October 23, 2018 리액트 블로그에 새로운 글이 올라왔다.
</br>

[**React v16.6.0: lazy, memo and contextType**](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)
</br>

> 너무 자주 릴리즈 하는거 같아...
</br>

이번에 새로운 내용들은 흥미롭다. 어떤 대단한 분이 정리해 놓은걸 빌려서 적어보겠다.

</br>
</br>

## React.memo :sunny:

:point_right: 기존의 **PureComponent**

- 속성과 상태를 얕은 비교를 통해서 **변경사항이 있을때에만** 다시 `Render` 한다.
- **shouldComponentUpdate** 라이프사이클 메소드가 이미 적용되어있는 것이다.

</br>
</br>

### Memoization

[memo는 아마도 Memoization이다.](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98)
</br>

함수 호출은 당연하게 Cost가 높다. 변경사항이 없는데 다시 렌더링을 한다는 것은 불필요한 Cost이다.
</br>

유사한 입력이 제공될대는 **캐싱된 결과**를 반환하는 것이 `Memoization`의 핵심이다. :thumbsup:
</br>
</br>

### :point_right: Example

```js
// function
const Count = React.memo(function Count(props) {
  return <div>{props.count}</div>;
});

// arrow function
const Count = React.memo((props) => {
  return <div>{props.count}</div>;
};

//wrapping
const Count = props => {
    return <div> {props.count} </div>;
}

const WrappedCount = React.memo(Count);
```

</br>
</br>

## React.Lazy :sunny:

**lazy** 는 `Suspense` 와 함께 `Code-Splitting` 을 제공 한다.
</br>

dynamic import 를 통해서 사용 할 수있다.

```js
const LazyCount = React.lazy(() => import("./LazyCount");

function MyComponent() {
  return (
    <div>
       <LazyCont />
    </div>
  );
};
```

</br>

이대로 사용하면 다음과 같은 에러가 발생 한다
</br>

> An update was suspended, but no placeholder UI was provided.

`LazyCount` 를 동적으로 가져오기 전에 `MyComponent` 가 렌더 되기 때문인데 로드될 때까지의 처리를 해줘야 한다. 이는 `Suspense` 를 통해서 처리 할 수 있다.

```js
const LazyCount = React.lazy(() => import("./LazyCount");

function MyComponent() {
  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <LazyCont />
      </React.Suspense>
    </div>
  );
};
```

</br>

또한 여러개의 `lazy` 컴포넌트들을 만들어 사용하는 중에 로드가 되지 않는 컴포넌트가 있다면, 다른 컴포넌트들도 렌더가 되지 않는다.
</br>

즉, 사용자측 입장에선 아무것도 표시되지 않는 하얀 화면을 보게 될 수 있다.
</br>

그렇기 때문에 `Suspense` 를 통해아직 로딩이 되지 않은 `lazy` 컴포넌트의 `fallback` 을 표시할수 있도록 해야 한다.
</br>
</br>

## ETC

나머지는 간단하게 살펴봐도 될 것 같다.

### getDerivedStateFromError

기본에 16.3버전에서 추가가 된 `componentDidCatch`은 commit 단계에서 호출이 되어서 사이드 이펙트가 허용이 되었지만 새로운 `getDerivedStateFromError`는 렌더 단계에서 호출이 되어 사이드 이펙트를 허용하지 않는다. 이후에는 `getDerivedStateFromError`를 사용해야 한다고 한다.

### contextType

기존에 추가가 개선이 된 `context`를 클래스 내부에서 사용을 쉽게 하기 위해 추가된 기능이다.
</br>

모든 라이프 사이클과 랜더 함수에서 참조 할 수 있다.
</br>

```js
class App extends React.Component {
  componentDidMount() {
    const { color } = this.context;
  }
  render() {
    const { color } = this.context;
  }
}
App.contextType = React.createContext({ color: 'gray' });
```

</br>
</br>

### StrictMode

16.3 에서 추가된 `StrictMode` 는 잠재적 문제를 식별해서 경고를 제공해주는 역할을 하고 있다.
</br>

여기에 경고를 발생시키는 2가지 요소가 추가되었다
</br>

1. `ReactDOM.findDOMNode()`: 대부분의 경우에서 이 API 를 쓸일이 없다고 한다. 따라서 StrictMode 가 쓰지말라 경고를 알릴것이다.
2. `contextTypes` 이나 `getChildContext` 를 사용하는 레거시 컨텍스트들 일부러 레거시 컨텍스트들에 성능저하를 했다고 한다. 그러면서,새로운 `contextAPI`로 업그레이드 할 것을 권고 하고 있다.