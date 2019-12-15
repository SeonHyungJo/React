# Ref

Ref는 엘리먼트에 대한 참조를 반환하는데 사용된다. 대부분의 경우에서 피하는 것이 좋지만, DOM 엘리먼트나 컴포넌트의 인스턴스에 직접 접근하는 경우 유용할 수 있다.

일반적으로 React의 데이터 플로우에서 props는 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단이다. 그래서 자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링하여야 한다.

일반적인 데이터 플로우에서 벗어나 직접적으로 자식을 수정해야 하는 경우도 있다. 수정할 자식이 React 컴포넌트의 인스턴스일 수도 있고, Dom Element일 수도 있다.

## Ref를 사용해야 하는 경우

- focus, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때
- 애니메이션을 직접적으로 실행시킬때
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때

선언적으로 해결될 수 있는 문제에서는 `ref` 사용을 지양해야한다. 결국 기본적으로 우리가 알고 있는 props를 사용해서 변경하는 방법을 생각하고 그래도 되지 않는다면 생각해야한다.

## Ref 사용방법

### React.createRef

`React.createRef`는 React 엘리먼트에 `ref` 어트리뷰트로 붙일 수 있는 `ref`를 생성한다.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(); // 이런식으로 ref를 만들고
  }

  render() {
    return <input type="text" ref={this.inputRef} />; // 해당 element를 바인딩 시킨다.
  }

  componentDidMount() {
    this.inputRef.current.focus(); // .current를 명시하여 사용한다.
  }
}
```

### React.forwardRef

`React.forwardRef`는 전달받은 `ref` 속성을 하부 트리 내의 다른 컴포넌트로 전달하는 React 컴포넌트를 생성합니다. 이 방법은 잘 사용되지 않지만, 아래의 두 경우에서는 유용하다.

- DOM 엘리먼트로 ref 전달하기
- 고차 컴포넌트(Higher Order Component)로 ref 전달하기

`React.forwardRef`는 렌더링에 사용될 함수를 인자로 받을 수 있다. React는 함수를 두 개 인자 `props`와 `ref`를 사용하여 호출하고, 해당 함수는 React 노드를 반환한다.

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
)); // 인자로 넘긴 ref를 바인딩 하여 React Node를 반환한다.

// 이제 DOM button에 직접 접근이 가능하다.
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

위의 예시에서 React는 `<FancyButton ref={ref}>` 엘리먼트에 주어진 `ref`를 `React.forwardRef` 호출시 렌더링 함수에 2번째 인자로 전달합니다. 이 렌더링 함수는 `ref`를 `<button ref={ref}>` 엘리먼트에 전달합니다.

React가 해당 `ref`를 붙이고 난 뒤, `ref.current`는 `<button> DOM 엘리먼트` 인스턴스를 가리키게 됩니다.

### useRef

```jsx
const refContainer = useRef(initialValue);
```

**useRef**는 `.current` 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 `ref` 객체를 반환한다. 반환된 객체는 컴포넌트의 전 생애주기를 통해 유지될 것입니다.

```jsx
function TextInputWithFocusButton() {
  const inputEl = useRef(null); // React의 Hook API를 사용해서 공간을 할당한다.
  const onButtonClick = () => {
    // `current`를 사용해서 접근한다.
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />  
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

DOM에 접근하는 방법은 기존의 refs과 비슷하다. 그러나 차이점이 있다면 `<div ref={myRef} />`를 사용하여 React로 `ref` 객체를 전달한다면, React는 모드가 변경될 때마다 변경된 DOM 노드에 그것의 `.current` 프로퍼티를 설정할 것입니다.

그렇지만, `ref` 속성보다 `useRef()`가 더 유용하다. 이 기능은 클래스에서 인스턴스 필드를 사용하는 방법과 다르게 가변값으로 유지하는데 편한다.

이것은 `useRef()`가 순수 자바스크립트 객체를 생성하기 때문이다. `useRef()`와 `{current: ...}` 객체 자체를 생성하는 것의 유일한 차이점이라면 useRef는 매번 렌더링을 할 때 동일한 `ref` 객체를 제공한다.

`.current` 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않는다. 만약 React가 DOM 노드에 `ref`를 attach하거나 detach할 때 어떤 코드를 실행하고 싶다면 대신 `callback ref`를 사용하면 된다.

## callback refs 및 findDOMNode()에서 선호되는 옵션은?

`findDOMNode()` API 대신 위에 `callback refs`를 사용하는 것이 좋다. `findDOMNode()`이 추후 React에서의 개선 사항을 방해하기 때문이다.

`findDOMNode`를 사용하는 legacy 접근법이다.

```jsx
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView()
  }

  render() {
    return <div />
  }
}
```

권장되는 접근법은 다음과 같다.

```jsx
class MyComponent extends Component {
  constructor(props){
    super(props);
    this.node = createRef();
  }
  componentDidMount() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />
  }
}
```

## String Refs가 왜 legacy인가?

React를 사용해보기 전이라면, 예전 API에서 `ref={'textInput'}`과 같은 `ref` 속성이 문자열인 것과 DOM node가 `this.refs.textInput`과 같이 액세스 되는 것에 익숙할 수 있다. 그러나 String Refs에 문제가 있어서 legacy로 간주하기 때문에 사용하지 않아야한다. String Refs는 React v16에서 제거되었다.

1. React가 현재 실행 중인 컴포넌트를 추적하도록 강제된다. 이는 react 모듈을 stateful하게 만들고, react 모듈이 번들에 복제될 때 이상한 오류를 유발하기 때문에 문제가 된다.
2. composable 하지 않다. — 라이브러리가 전달된 자식에 ref를 넣으면, 사용자는 다른 ref를 추가할 수 없다. Callback ref로는 완벽하게 가능하다.
3. Flow와 같은 정적 분석에서는 작동하지 않는다. Flow는 프레임워크가 String Refs를 `this.refs`에 표시하도록 하는 타입(다를 수 있음)을 추측할 수 없다. Callback ref는 정적 분석에 친숙하다.
4. 대부분의 사람이 생각하는 "render callback" 패턴으로 작동하지 않는다. (예). `<DataGrid renderRow={this.renderRow} />`)

```jsx
class MyComponent extends Component {
  renderRow = (index) => {
    // This won't work. Ref will get attached to DataTable rather than MyComponent:
    return <input ref={'input-' + index} />;

    // This would work though! Callback refs are awesome.
    return <input ref={input => this['input-' + index] = input} />;
  }

  render() {
    return <DataTable data={this.props.data} renderRow={this.renderRow} />
  }
}
```

---

#### Reference

- [Ref와 DOM - React 한국 공식페이지](https://ko.reactjs.org/docs/refs-and-the-dom.html)
- [Forwarding Refs - React 한국 공식페이지](https://ko.reactjs.org/docs/forwarding-refs.html#___gatsby)
- [React 최상위 API - React 한국 공식페이지](https://ko.reactjs.org/docs/react-api.html)
- [useRef - React 한국 공식페이지](https://ko.reactjs.org/docs/hooks-reference.html#useref)
- [SeonHyungJo/reactjs-interview-questions-korean](https://github.com/SeonHyungJo/reactjs-interview-questions-korean#refs%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94%EA%B0%80)