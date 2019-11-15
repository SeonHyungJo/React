# State VS Props

항상 그렇듯 state와 props를 비교하기 전에 각각에 대해서 간단하게 알아보자.

## state란?

state는 컴포넌트의 변경될 수 있는 정보를 가지고 있는 객체이다.

기본적으로 컴포넌트는 state를 가지고 있지 않다. 
컴포넌트가 렌더링간의 정보를 추적해야하는 경우에 컴포넌트에서 state를 작성, 업데이트 및 사용할 수 있다.

### state는 컴포넌트 내부에서 만들어진다.

```js
constructor() {
  super();
  this.state = {
    count: 0,
  };
}
```

위의 코드는 state가 초기 데이터를 선언하는 것이다. 초기 데이터는 하드코딩 될 수 있지만 props에서 가져올 수 있다.
props를 바꿀 수는 없지만 컴포넌트가 받는 데이터에 대해 작업을 수행하는 것은 가능하다. **즉, props에서 받아온 데이터를 state에 선언을 한 후 state의 값을 수정하는 것은 가능하다.**

### state는 변경가능하다.

```js
updateCount() {
  this.setState((prevState, props) => {
    return { count: prevState.count + 1 }
  });
}
```

총 클릭 수를 추적하도록 state를 변경하는 코드이다. 중요한 부분은 setState이다. setState가 비동기적으로 실행될 수 있기 때문에 setState는 함수를 받는다. 항상 state를 직접 업데이트하는 대신 콜백 함수를 사용해야한다. 

콜백 내에서 prevState에 대한 접근 권한이 있다. 

state가 다른 곳에서 이미 업데이트된 경우에도 이전 state가 포함된다.

그러나 React에서는 한단계를 더 나아가 **setState는 state 객체를 업데이트하고 컴포넌트를 자동으로 다시 렌더링한다.**

### setState 경고 1

state값을 직접 변경하는 것은 리렌더링을 일으키지 않는다.

### setState 경고 2

```js
// DO NOT USE
this.setState({
  count: this.state.count + 1
});
```

위의 코드는 에러를 발생시키지 않지만 잘못되었다. setState에서 사용하는 비동기식 처리의 특성을 고려하지 않았으며 동기화 상태 데이터와 함께 오류가 발생할 수 있다.

![stateprops](https://user-images.githubusercontent.com/24274424/68212492-f81dac80-001c-11ea-9647-38078a4ed2f8.png)

## props란?

props는 컴포넌트에 대한 입력으로 HTML 태그 속성과 같은 작명 규칙을 사용하여 컴포넌트에 전달되는 단일 값 혹는 객체이다.
props는 부모 컴포넌트에서 자식 컴포넌트로 전달된다.

React에서 props의 주목적은 다음과 같은 컴포넌트의 기능들을 제공하는 것이다.

1. 데이터를 컴포넌트로 전달한다.
2. state의 변경을 일으킨다.
3. 컴포넌트의 `render()` 메서드 내에서 `this.props.reactProp`을 통해서 사용된다.

예를 들어 reactProp 요소를 가진 엘리먼트를 만들어보자.

```jsx
<Element reactProp={'1'} />
```

`reactProp`는 React를 사용하여 생성된 모든 컴포넌트에 원래 존재하는 props 객체의 속성이 된다.

```js
props.reactProp
```

### props는 변경 불가능

예전에는 setProps 및 replaceProps를 사용하여 Props를 변경할 수 있었지만(나도 몰랐다) 더 이상 사용되지 않는다.

컴포넌트의 생명주기동안 props는 변경되어서는 안된다.

props가 전달되고 변경될 수 없기 때문에 props만 사용하는 React 컴포넌트를 pure 하다라고 생각할 수 있다. 즉, 동일한 입력이 주어지면 항상 동일한 출력을 렌더링한다. 이렇게 하면 테스트하기가 좋아진다.

## state와 props의 공통점은?

- 둘 다 순수 자바스크립트 객체이다.
- 둘 다 render update를 일으킨다.
- 컴포넌트가 동일한 props와 state에 대해서 다른 결과 값을 생성하면 잘못된 것이다.

## state와 props의 차이점은?

tl;dr: 컴포넌트가 어떤 시점에서 그 속성 중 하나를 변경해야 하는 경우, 그 속성은 state의 일부가 되어야 하며, 그렇지 않으면 컴포넌트를 위한 props가 되어야 한다.

- props

properties의 줄임말로 컴포넌트의 구성 요소이며, 원하는 경우 사용가능한다. props를 받는 컴포넌트의 위에서 내려오며 불변하다.

컴포넌트는 props를 변경할 수 없지만 자식 컴포넌트의 props를 구성하는 것과 관련이 있다.

- state

state는 컴포넌트가 마운트될 때 기본값으로 시작한 다음 시간이 지남에 따라 변하게 된다.

컴포넌트는 자체 state를 내부적으로 관리하지만 초기 state 설정 외에는 하위 상태를 다루는 비즈니스이 없다. 이에 우리는 *state는 private하다* 라고 말할 수 있다.

**props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다.**

## 컴포넌트에 state가 있어야 하나?

state 값는 option이다.

state를 가지게 되면 **복잡성이 증가하며 예측 가능성을 감소**시킨다. 이에 state가 없는 컴포넌트가 사용하는 것이 좋다. 인액티브 앱에서 state가 없으면 명확하게 할 수 없지만, stateful 컴포넌트가 많으면 좋지 않다.

### 컴포넌트 종류(이후에 추가예정)

- Stateless Component

    props만 있고 state가 없다. render() 함수 외에는 별다른게 없으며 모든 로직은 받은 props를 중심으로 돌아간다.

    이렇게 하면 추적하기 매우 쉬워지며  문제를 테스트할 수 있다. 

- Stateful Component

    props와 state 모두 있다. 클라이언트-서버 통신(XHR, 웹 소켓 등)을 담당하고 데이터를 처리하고 사용자 이벤트에 응답한다.

    이러한 종류의 로직은 적당한 수의 stateful 컴포넌트로 캡슐화해야하며 모든 시각화 및 형식 지정 논리가 가능한 한 많은 Stateless 컴포넌트로 다운 스트림되어야 한다.

#### Reference

- [props-vs-state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md#props-vs-state)
- [ReactJS: Props vs. State](https://lucybain.com/blog/2016/react-state-vs-pros/)