# React

## React란 무엇인가?

**사용자 인터페이스를 구축하기 위한 선언적, 효율적이고 유연한 Javascript 라이브러리**

React에서 화면을 구성하는 작은 단위를 컴포넌트라고 부르며, 이 컴포넌트를 사용하여 복잡한 UI를 구성한다.

React는 여러 컴포넌트를 가지지만, 기본이 되는 `React.Component` 의 하위 클래스를 사용해보면 아래와 같다.

```jsx
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```

위의 코드를 보게 되면 XML과 유사한 태그를 사용한다. 이는 JSX라고 부르며 자세한 내용은 다음에 다루어 보도록 하자. 

우리는 컴포넌트로 React에게 화면에 표현하고 싶은 것이 무엇인지 알려주고 있다. 데이터가 변경될 때 React는 컴포넌트를 효율적으로 업데이트하고 다시 렌더링한다.

위의 코드에서 ShoppingList는 **React 컴포넌트 클래스** 또는 **React 컴포넌트 타입**이라고 한다. 이러한 개별 컴포넌트는 `props`라는 매개변수를 받으며, `render` 함수를 통해 표시할 뷰 계층 구조를 반환한다.

`render` 함수는 화면에서 표시하는 *내용*을 반환하는 것으로 React는 해당 내용을 전달받고 결과를 표시한다. 특히 `render`는 렌더링할 내용을 경량화한 React Elemnet를 반환한다. 다수의 React 개발자는 JSX 라는 특수한 문법을 사용하여 React 구조를 쉽게 작성한다. `<div />` 구문은 빌드하는 시점에서 `React.createElement('div')` 로 변환한다.

위의 예제를 변환하면 아래와 같이 된다.

```js
return React.createElement('div', {className: 'shopping-list'},
  // children
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

`createElemnt()`에 대해 더 알아보려면 [API 문서](https://ko.reactjs.org/docs/react-api.html#createelement)를 확인하면 된다. 

JSX는 Javascript의 강력한 기능을 가지고 있다. JSX 내부의 중괄호 안에서 *대개의* Javascript 표현식을 사용할 수 있다. React Element는 Javascript 객체이며 변수에 저장하거나 다른 프로그램으로 전달할 수 있다.

`ShoppingList` 컴포넌트는 `<div />`와 `<li />` 같은 DOM 컴포넌트만을 렌더링하지만 컴포넌트를 조합하여 커스텀 React 컴포넌트를 렌더링하는 것도 가능하다.

예를 들어 `<ShoppingList />`를 작성하여 모든 쇼핑 목록을 참조할 수 있다. React 컴포넌트는 캡슐화되어 독립적으로 동작할 수 있다.

이렇게 단순한 컴포넌트를 사용하여 복잡한 UI를 구현할 수 있다.