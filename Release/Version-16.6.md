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

### Example

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

## React.Lazy

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

## ETC