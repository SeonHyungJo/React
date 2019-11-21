# Stateful VS Stateless

지난번 글에서 State와 Props에 대해서 간단하게 알아보았으며, 이어서 Stateful과 Stateless에 대해서 알아보자.

> [State와 Props](https://github.com/SeonHyungJo/React-Dev-Note/blob/master/Posts/StateVSProps.md)

이름에서 이미 느껴지듯이 어느 하나는 state가 엄청나게 가득할 것 같고, 다른 하나는 state라는 게 없을 것 같은 이름이다. 

## **Stateful Component**

Stateful 컴포넌트는 항상 Class 컴포넌트이다. 이럴게 아니라 그냥 Stateful하다는 것은 Class 컴포넌트를 사용한다고 하자. 

그러나 Class 컴포넌트이지만 state가 없는 경우도 아주아주 많다. 그러나 뒤에서 언급이 될 내용이지만 그럴거면 Functional을 사용하자. 결국 Stateful하다는 것은 Class 컴포넌트이다.

> 다른 예외의 경우는 Class 컴포넌트가 아닌데 state가 존재한다.(Hook이 나오고 나서 모든 것은 달라졌다.)

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
 
  render() {}
}
```

위의 예제를 보게 되면 Class 컴포넌트의 생성자에서 state를 초기화하고 있다. 이렇게 우리가 사용할 state를 선언을 하고 다른 곳에서 `this.state`를 사용해서 사용하게 된다. 

위와 같이 생성자에서 state를 초기화하는 방법도 있지만 [Class 영역](https://github.com/tc39/proposal-class-fields)에서 보다 쉽게 호출하도록 제안된 대체 구문이 있다. Babel을 사용하여 위의 소스를 Transpile을 하게 되면 아래와 같은 형태가 나온다.

```jsx
class App extends Component {
  state = { count: 1 };
   
  handleCount(value) {
      this.setState((prevState) => ({count: prevState.count+value}));
  }
 
  render() {}
}
```

생성자를 선언하지않고 state object를 만들고 초기화를 할 수 있다.

이와 관련된 후에 Class 컴포넌트와 Functional 컴포넌트를 다룰 때 자세히 살펴보자.

### 결국

컴포넌트의 동작이 컴포넌트의 state에 따라 달라진다면 Stateful 컴포넌트라고 할 수 있다. Stateful 컴포넌트는 항상 Class 컴포넌트이며 constructor에서 초기화되어 state를 가지게 된다.

## **Stateless 컴포넌트**

Stateless 컴포넌트를 만드는데 Functional이나 Class 컴포넌트를 사용하면 된다. 위에 간단히 언급되었듯이 단순하게 생성자를 사용하거나 state object를 초기화하지 않고 props로 넘겨받은 데이터를 단순히 보여준다면 Stateless한 컴포넌트인 것이다. 

Functional 컴포넌트를 사용하게 되면 `this` 키워드를 모두 적지 않아도 된다. 또한 Functional을 사용하게 되면 Life Cycle을 사용하지 못한다고 생각할 수 있지만, React Hook을 이용하면 사용가능하다.

> [Hook에 대해서 알아보기](https://github.com/SeonHyungJo/React-Dev-Note/blob/master/Posts/Hook.md)

### 결국

동작이 state와 관련이 없는 경우 Stateless 컴포넌트가 될 수 있다. Function이나 Class를 사용해서 Stateless 컴포넌트를 만들 수 있다. 

Functional 컴포넌트를 사용하면 여러 이점이 있는데, 쓰기, 이해 및 테스트하기가 쉽고 더 빠르며, `this` 키워드를 피할 수 있다.

#### Reference 

- [Stateful and Stateless Components in React](https://programmingwithmosh.com/javascript/stateful-stateless-components-react/)
- [React에서 Stateful 대 Stateless 함수형 컴포넌트](https://code.tutsplus.com/ko/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
- [React Interview Questions & Answers](https://github.com/sudheerj/reactjs-interview-questions)