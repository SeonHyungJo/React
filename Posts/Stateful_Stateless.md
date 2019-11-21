# Stateful VS Stateless

지난번 글에서 State와 Props에 대해서 간단하게 알아보았고, 이어서 관련이 있는 Stateful과 Stateless에 대해서 알아보자.

> [State와 Props](링크 추가하기)

이름에서 이미 느껴지듯이 어느 하나는 state가 엄청나게 가득할 것 같고, 다른 하나는 state 자체가 없을 것 같은 이름이다. 
그에 걸맞게 형태 역시 state가 있고 없는 컴포넌트로 나뉜다.

## **Stateful Component**

> 컴포넌트의 동작이 컴포넌트의 state에 따라 달라진다면 stateful 컴포넌트라고 할 수 있다. stateful 컴포넌트는 항상 class 컴포넌트 이며 constructor에서 초기화가 되어 state를 가지게 된다.

Stateful 컴포넌트는 항상 클래스 컴포넌트이다. 이럴게 아니라 그냥 Stateful하다는 것은 클래스 컴포넌트를 사용한다고 하자.

> 아직 예외적으로 클래스 컴포넌트이지만 state가 없는 경우는 아주아주 많다.(많은 분들이 사용하시기에)

> 또 다른 예외의 경우는 클래스 컴포넌트가 아닌데 state가 존재한다.(Hook이 나오고 나서 모든 것은 달라졌다.)

```jsx
class App extends Component {
  
  // Not required anymore
  constructor() {
      super();
      this.state = {
        count: 1
      }
  }
  
  handleCount(value) {
      this.setState((prevState) => ({count: prevState.count+value}));
  }
 
  render() {
    // omitted for brevity
  }
   
}
```

위의 예제를 보게 되면 Stateful 컴포넌트에는 생성자에서 state를 초기화하고 있다. 이렇게 우리가 사용할 state를 선언을 하고 다른 곳에서 `this.state`를 사용해서 사용하게 된다. 위와 같이 생성자에서 state를 초기화하는 방법도 있지만 [클래스 영역](https://github.com/tc39/proposal-class-fields)에서 보다 쉽게 호출하도록 제안된 대체 구문(syntax)가 있다. babel을 사용해서 위의 소스를 트랜스파일을 하게 되면 아래와 같은 형태가 나온다.

```jsx
class App extends Component {
  state = { count: 1 };
   
  handleCount(value) {
      this.setState((prevState) => ({count: prevState.count+value}));
  }
 
  render() {
    // omitted for brevity
  }
}
```

생성자를 선언하지않고 state object를 만들고 초기화를 할 수 있다. 

이제 `render()`를 포함한 클래스 메서드 안에 들어 있는 state에 접근 가능합니다. 현재 count 값을 보여주려고 `render()` 안에 클래스 메서드를 사용하려 한다면 다음과 같이 중괄호 안에 state를 위치시켜야 합니다.

여기에서 `this` 키워드는 현재 컴포넌트의 인스턴스를 참조합니다.

State를 초기화하는 것만으로 충분치 않겠죠. 상호작용하는 애플리케이션을 만들려면 state를 업데이트 할 수 있어야 합니다. 이것만으로 될 거라고 생각한다면, 아니예요. 되지 않아요.

React 컴포넌트에는 state를 업데이트하기 위해 setState라는 메서드가 있습니다. setState는 `count`의 새로운 state를 포함한 오브젝트를 받습니다.

`setState()`는 오브젝트를 하나의 입력으로서 받아들이고, 우리는 count의 이전 값에 1만큼 증가시킵니다. 예상했던 대로 동작합니다. 그런데 한 가지 문제가 있습니다. state의 이전 값을 읽어 새 값을 작성하는 setState 호출이 여러 번 있을 때는 아마도 경합 조건(race condition)으로 끝나버릴 것입니다. 무슨 의미인가 하면, 최종 결과에서 예상했던 값이 안 나올 거라는 뜻입니다.

여기 명확히 이해할 수 있는 예제가 있습니다. 위의 Codesandbox 스니펫에서 적용해 보세요.

100씩 셈이 더해지는 setState가 필요하고, 그 후에는 1씩 업데이트되며, 그러고 나서 이전에 더해진 100을 뺍니다. setState가 실제 순서대로 state 전환을 실행한다면, 예상된 동작을 볼 것입니다. 하지만 setState는 비동기식이라서 다수의 setState 호출은 더 나은 UI 경험과 실행을 위해 한꺼번에 배치될 것입니다. 고로 위의 코드는 우리의 예상과 다른 동작으로 동작하게 됩니다.

결과적으로 오브젝트를 직접 전달하는 것 대신에 특정한 업데이트 함수로 전달하게 됩니다.

prevState는 이전 state를 레퍼런스하며 최신 상태로 값을 유지해줍니다. props는 컴포넌트의 props이며, 여기에서 state를 업데이트하는 데 props가 필요하진 않습니다. 고로 신경쓰지 않아도 됩니다. 그러니 우리는 이를 state 업데이트 용으로 사용해 경합 조건을 피할 수 있습니다.

`setState()`는 컴포넌트를 다시 렌더링하며, stateful component가 동작하게 됩니다.

## **Stateless 컴포넌트**

> 동작이 state와 관련이 없는 경우 stateless 컴포넌트가 될 수 있다. function이나 class를 사용해서 stateless 컴포넌트를 만들 수 있다. 컴포넌트에서 라이프 사이클 훅을 사용해야 하는 경우가 아니라면 function 컴포넌트를 사용하는게 좋다. function 컴포넌트를 사용하면 여러 이점이 있는데, 쓰기, 이해 및 테스트하기가 쉽고 더 빠르며, this 키워드를 피할 수 있다.

stateless 컴포넌트를 만드는 데 함수형이나 클래스 컴포넌트를 사용하면 된다. 위에 간단히 언급되었듯이 단순하게 생성자를 사용하거나 state object를 초기화하지 않고 props로 넘겨받은 데이터를 단순히 보여주는 것으로만 사용하다면 Stateless한 컴포넌트인 것이다. 

함수형 컴포넌트를 사용하게 되면 `this` 키워드를 모두 적지 않아도 된다. 또한 함수형을 사용하게 되면 라이프사이클을 사용하지 못한다고 생각할 수 있지만, React Hook을 이용하면 사용가능하다.

### TODO

1. 이제는 지원이 되는 Hook으로 링크 추가하기

#### Reference 

- [Stateful and Stateless Components in React](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/)
- [React에서 Stateful 대 Stateless 함수형 컴포넌트](https://code.tutsplus.com/ko/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)