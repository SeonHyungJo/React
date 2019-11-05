# State VS Props

항상 그렇듯 state와 props를 비교하기 전에 각각에 대해서 간단하게 알아보고 가자.

## React에서 state란?

컴포넌트의 state는 컴포넌트의 변경될 수 있는 정보를 보유하는 객체이다. 가능한 한 간단하게 상태를 만들고 statful 컴포넌트의 수를 최소화해야 한다. 

예제로 count state를 가진 `Counter` 컴포넌트를 만들어보자.

```jsx
class Counter extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      count : 0
    }
  }
   
  render() {
    return (
      <span>{this.state.count}</span>
    )
  }
}
```

![stateprops](https://user-images.githubusercontent.com/24274424/68212492-f81dac80-001c-11ea-9647-38078a4ed2f8.png)

state는 props와 비슷하지만 private하며 컴포넌트에 의해 제어된다. 즉, 상태는 이를 가지고 있거나 설정할 수 있는 컴포넌트 이외에는 접근이 불가능하다.

## React에서 props란?

props는 컴포넌트에 대한 입력으로 HTML 태그 속성과 같은 작명 규칙을 사용하여 컴포넌트에 전달되는 단일 값 혹는 객체이다.
props는 부모 컴포넌트에서 자식 컴포넌트로 전달된다.

React에서 props의 주목적은 다음과 같은 컴포넌트의 기능들을 제공하는 것이다.

1. Custom 데이터를 컴포넌트로 전달한다.
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

## 그렇다면 state와 props의 차이점은?

위에서 이미 설명을 하면서 차이점이 보였을 수 있다.

props와 state는 모두 순수 자바스트립트 객체이다. 둘다 렌더링 결과에 영향을 주는 정보를 가지고 있지만, 컴포넌트와 관련된 기능 면에서 다르다.

**props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다.**

