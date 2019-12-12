# Ref

Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공한다.

일반적으로 React의 데이터 플로우에서 props는 부모 컴포넌트가 자식과 상호작용할 수 있는 유일한 수단이다. 그래서 자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링하여야 한다.

그러나 일반적인 데이터 플로우에서 벗어나 직접적으로 자식을 수정해야 하는 경우도 있다. 수정할 자식이 React 컴포넌트의 인스턴스일 수도 있고, Dom Element일 수도 있다.

## Ref를 사용해야 하는 경우

- focus, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때
- 애니메이션을 직접적으로 실행시킬때
- 서드 파티 DOM 라이브러리를 React와 같이 사용할 때

선언적으로 해결될 수 있는 문제에서는 `ref` 사용을 지양해야한다. 결국 기본적으로 우리가 알고 있는 props를 사용해서 변경하는 방법을 생각하고 그래도 되지 않는다면 생각해야한다.

### React.createRef

React.createRef는 React 엘리먼트에 ref 어트리뷰트로 붙일 수 있는 ref를 생성합니다.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}
```

### React.forwardRef

React.forwardRef는 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달하는 React 컴포넌트를 생성합니다. 이 기법은 잘 사용되지 않지만, 아래의 두 시나리오에서는 특히 유용합니다.

- DOM 엘리먼트로 ref 전달하기
- 고차 컴포넌트(Higher Order Component)로 ref 전달하기

React.forwardRef는 렌더링에 사용될 함수를 인자로 받을 수 있습니다. React는 이 함수를 두 개 인자 props와 ref를 사용하여 호출하고, 이 함수는 React 노드를 반환합니다.

```jsx
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

위의 예시에서 React는 `<FancyButton ref={ref}>` 엘리먼트에 주어진 ref를 React.forwardRef 호출시 렌더링 함수에 2번째 인자로 전달합니다. 이 렌더링 함수는 ref를 `<button ref={ref}>` 엘리먼트에 전달합니다.

따라서 React가 해당 ref를 붙이고 난 뒤, ref.current는 `<button>` DOM 엘리먼트 인스턴스를 직접 가리키게 됩니다.

자세한 정보는 ref 전달하기에서 확인할 수 있습니다.

