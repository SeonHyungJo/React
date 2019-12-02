# setState

React에서 데이터는 크게 2가지의 종류가 있다. props와 state

> 참고 [state vs props](https://github.com/SeonHyungJo/React-Dev-Note/blob/master/Posts/StateVSProps.md)

state와 props 중 props는 변경이 불가능하지만 state는 변경이 가능한데 state 데이터를 변경할 때 사용하는 메서드가 바로 `setState()`이다. 

`setState()`은 인자 값으로 `Object` 또는 `Callback`을 넘겨받으며 최신의 데이터로 변경하며, 리렌더링을 진행한다.

## 역할

`setState()`는 컴포넌트의 state 객체에 대한 업데이트를 실행한다. state가 변경되면, 관련된 컴포넌트는 리렌더링된다.

## state를 직접 update하면?

state를 직접 업데이트를 하게 되면 컴포넌트는 리렌더링하지 않는다.

```js
//Wrong
this.state.message = 'Hello world'
```

때문에 `setState()` 메소드를 사용한다. `setState()`는 컴포넌트의 state 객체에 대한 업데이트를 예약한다.

```js
//Correct
this.setState({ message: 'Hello World' })
```

> **Note:** *constructor*에서나 최신 Javascript의 class 선언 구문을 사용해서 state 객체에 직접 할당할 수 있다.

```js
setState({ name: 'John' }, () => console.log('The name has updated and component re-rendered'))
```

### 왜 `setState`가 잘못된 값을 주는 걸까요?

React에서 `this.props`와 `this.state`는 모두 *렌더링된* 값을 나타낸다. 다시 말해 현재 화면에 보이는 것을 말한다.

`setState` 호출은 비동기적으로 이루어지기 때문에 `setState` 호출 직후 새로운 값이 `this.state` 에 반영될 거라고 믿어서는 안된다. 만약 이전 state 값을 기준으로 값을 계산해야 한다면 객체 대신 updater 함수를 전달해서 사용해야한다.

예시 코드는 예상대로 동작하지 않는다.

```js
incrementCount() {
  // 주의: 이 코드는 예상대로 동작하지 *않을 것*입니다.
  this.setState({count: this.state.count + 1});
}

handleSomething() {
  // `this.state.count`가 0에서 시작한다고 해봅시다.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();
  // React가 컴포넌트를 리렌더링할 때 `this.state.count`는 3이 될 것 같은 예상과 달리 1이 됩니다.

  // 이것은 `incrementCount()` 함수가 `this.state.count`에서 값을 읽어 오는데
  // React는 컴포넌트가 리렌더링될 때까지 `this.state.count`를 갱신하지 않기 때문입니다.
  // 그러므로 `incrementCount()`는 매번 `this.state.count`의 값을 0으로 읽은 뒤에 이 값을 1로 설정합니다.

  // 이 문제의 해결 방법은 아래에 설명되어 있습니다.
}
```

## 이전 state 값을 기준으로 state 값을 업데이트하는 방법은?

항상 `setState` 가 가장 최신의 state 값을 사용하도록 보장하기 위해서는 `setState` 에 객체 대신 함수를 전달하여야한다.

```js
this.setState((prevState) => {
  // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
  return {count: prevState.count + 1}
});
```

## `setState`에 객체를 전달하는 것과 함수를 전달하는 것은 어떤 차이가 있나요?

updater 함수를 전달하면 updater 함수 안에서 이전 state 값에 접근할 수 있습니다. `setState` 호출은 일괄적으로 처리되기 때문에 여러 업데이트 사항이 충돌 없이 차례대로 반영되도록 합니다.

```js
incrementCount() {
  this.setState((state) => {
    // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.
    return {count: state.count + 1}
  });
}

handleSomething() {
  // `this.state.count`가 0에서 시작한다고 해봅시다.
  this.incrementCount();
  this.incrementCount();
  this.incrementCount();

  // 지금 `this.state.count` 값을 읽어 보면 이 값은 여전히 0일 것입니다.
  // 하지만 React가 컴포넌트를 리렌더링하게 되면 이 값은 3이 됩니다.
}
```

## React는 `this.state`를 동기적으로 업데이트하지 않은 이유는?

모든 컴포넌트가 자신의 이벤트 핸들러에서 `setState()`를 호출할 때까지 React는 리렌더링을 하지 않고 내부적으로 “기다리고 있다. 이를 통해 불필요한 렌더링을 방지하면서 성능을 향상시킨다.

그러나 왜 React는 리렌더링 대신 즉시 `this.state`를 업데이트하지 않는지 여전히 궁금해 하실 수도 있습니다.

두 가지 중요한 이유

- `props` 와 `state` 사이의 일관성을 해칠 수 있으며 이것은 디버깅하기 매우 힘든 이슈를 일으킬 수 있다.
- 현재 작업 중인 새로운 기능들을 구현하기 힘들게 만들 수 있다.