# JSX

JSX는 ECMAScript를 위한 XML처럼 생긴 구문 확장자(JavaScript XML의 약어)이다. 기본적으로 Elements는 props에 있는 다른 Elements를 포함할 수 있다. React element를 만드는 것은 Cost가 적다. element가 만들어지면 절대 변경되지 않는다.

```js
const element = React.createElement(
  'div',
  {id: 'login-btn'},
  'Login'
)
```

위에서 언급한 바와 같이 이 문법은 JSX라고 불리며 자바스크립트의 문법 확장이다.

리액트 공식 홈페이지에서는 JSX를 리액트와 함께 사용하여 UI가 실제로 어떻게 보일지 설명하는 것을 권장한다.

이 문법은 템플릿 언어처럼 보일 수 있지만, 자바스크립트를 기반으로 하고 있다.

리액트는 렌더링 로직을 다른 UI 로직과 본질적으로 결합하여 있다는 사실과 이벤트 처리 방법, 시간에 따른 상태 변경 방법 및 데이터 표시 준비 방법을 포함하고 있다.

리액트는 별도의 파일에 마크업과 로직을 넣어 인위적으로 분리하는 것이 아닌, 두 가지를 포함하여 컴포넌트라고 부르며 느슨하게 연결된 유닛으로 관심사를 분리한다.

## JSX는 표현식

컴파일이 끝나면, JSX표현식이 정규 자바스크립트 함수 호출이 되고 자바스크립트 객체로 인식된다.

이는 if문이나 for반복 내에서 JSX를 사용할 수 있다는 것이며, 변수에 할당하거나 매개변수로 전달하거나 함수에서 반환할 수 있다는 것을 의미한다.

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## JSX 속성 정의

속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.

```js
const element = <div tabIndex="0"></div>;
```

속성에 중괄호를 이용해 자바스크립트 표현식을 포함시킬 수 있다.

```js
const element = <img src={user.avatarUrl}></img>;
```

속성에 자바스크립트 표현식을 작성할 때 중괄호를 따옴표로 감싸면 안 된다. 따옴표(문자열 값인 경우) 또는 중괄호(표현식인 경우) 중 하나를 사용해야 하며, 둘 다 같은 속성에 사용할 수 있는 것이 아니다.

JSX는 HTML이라기보다는 자바스크립트에 가깝기 때문에, React DOM은 HTML 속성 이름 대신 `cameCase` 속성 이름 컨벤션을 사용한다. 예를 들어, JSX에서 `class`는 `className`이 되며, `tabindex`는 `tabIndex`가 된다.

## JSX 자식 정의

태그안 쪽이 빈다면 XML처럼 `/>`를 사용하여 닫아야 한다.

```js
const element = <img src={user.avatarUrl} />;
```

JSX 태그는 자식을 가질 수 있다.

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## JSX 인젝션 공격 예방

JSX 내에서 입력을 하는 것이 안전하다.

```js
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;
```

기본적으로, React DOM은 렌더링 되기 전에 JSX 내에 포함된 모든 값을 이스케이핑 처리를 하므로 모든 것은 렌더링 되기 전에 문자열로 변환된다. 이렇게 하면 **XSS (cross-site-scripting)** 공격을 막을 수 있게 되는 것이다.

## JSX 객체 표현

Babel은 JSX를 `React.createElement()`로 컴파일한다.

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` 는 버그 없는 코드를 작성하는 데 도움을 주는 몇 가지 체크를 하지만 기본적으로는 아래와 같은 객체를 생성한다.

```js
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};
```

이 객체는 `React elements`라고 불린다. React는 이 객체를 읽어 들이고 사용하여 DOM을 구성하여 최신의 상태를 유지한다.