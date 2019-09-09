# Context

## Context 배경

알고 있다시피 React는 데이터가 바뀌게 되면 화면이 바뀌는 구조로 되어있다. 그렇다 보니 해당 화면과 관련된 동일한 데이터가 여러 군데 있으면 약간 난감해진다.

어떻게 여기서 사용하는 데이터와 저~~기서 사용하는 데이터를 한 개로 관리를 하며 보내줄 수 있을까?

이러한 경우에서 처음 배운 것을 사용하자면 상위의 공통 부모에서 해당 데이터를 담을 공간(state)을 만들고 props를 사용하여 아래로 아래로 내려주어 해당 데이터를 사용하는 컴포넌트까지 도달하게 해주는 것이다.

이로써 동일한 데이터를 사용하는 컴포넌트에 전달은 되었으나 이 방법은 매우 비효율적이다.

한 곳에서 관리를 하고, props를 사용하지 않고 한번에 내려줄 수 없을까?

**그러하여 만들어진 것이 Context이다**

## 언제 사용해야 하나?

React 컴포넌트 트리 내에서 전역적으로 사용되는 데이터를 공유할 수 있도록 만들어진 기능이다.

전역으로 같이 사용하는 데이터를 담을 공간을 만들어 주고

```js
const MyContext = React.createContext(defaultValue);
```

전파를 할 컴포넌트를 정해주며, 공유할 데이터를 설정한다.

```js
this.state = {
  theme: themes.light,
  toggleTheme: this.toggleTheme
};

<MyContext.Provider value={this.state}>
```

위와 같이 보내는 곳을 설정하고 사용할 컴포넌트에서 

```js
MyClass.contextType = MyContext;
``` 

또는 

```js
<MyContext.Consumer>
    {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
```

처럼 사용할 수 있는 형태가 된다.

## 고려사항

모든 경우에서 context를 사용하여 개선할 수 있는 것이 아니다. 

여러 레벨에 걸쳐 props를 넘기는 것을 context로 대체하는 것보다는 컴포넌트 합성(`this.props.children`)이 더 간단하게 해결되는 경우도 있다.

**제어의 역전(inversion of control)을 이용하면 넘겨줘야 하는 props의 수는 줄고 최상위 컴포넌트의 제어력은 더욱 커져 깔끔하게 사용이 가능하다.**

## API

### `React.createContext`

```js
const MyContext = React.createContext(defaultValue);
```

- Context 객체를 만든다.
- React는 트리 상위에서 가장 가까이 있는 짝이 맞는 Privider부터 읽는다.
- 읽지 못하면 `defaultValue`를 사용한다.

### `Context.Provider`

```js
<MyContext.Provider value={/* 어떤 값 */}>
```

- Context를 구독하는 컴포넌트들에게 context의 변화를 알리는 역할을 한다.
- Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 바뀔 때마다 다시 렌더링된다.
- 이러한 전파는 `shouldComponentUpdate`의 영향을 받지 않기 때문에 중간에 있는 컴포넌트가 업데이트를 중지한다고 해도 트리 끝에 있는 컴포넌트까지 전달된다.
- [Object.is](http://object.is/)를 사용해서 이전값과 새로운 값을 비교해 측정된다.

### `Class.contextType`

```js
class MyClass extends React.Component {
    componentDidMount() {
    let value = this.context;
    /* MyContext의 값을 이용한 코드 */
    }
    componentDidUpdate() {
    let value = this.context;
    /* ... */
    }
    componentWillUnmount() {
    let value = this.context;
    /* ... */
    }
    render() {
    let value = this.context;
    /* ... */
    }
}
MyClass.contextType = MyContext;
```

- `React.createContext()`로 생성한 Context 객체를 원하는 클래스의 `contextType` 프로퍼티로 지정가능
- `this.context`를 이용해서 가장 가까운 provider를 찾아 값을 읽는다.

### `Context.Consumer`

```js
<MyContext.Consumer>
    {value => /* context 값을 이용한 렌더링 */}
</MyContext.Consumer>
```

- context 변화를 구독하는 React 컴포넌트 형태
- 함수 컴포넌트안에서 context를 읽기 위해서 쓸 수 있다.
- React 노드를 반환한다.

## 주의사항

다시 렌더링할지 여부를 정할 때 참조(reference)를 확인하기 때문에, Provider의 부모가 렌더링 될 때마다 불필요하게 하위 컴포넌트가 다시 렌더링 되는 문제가 생길 수도 있다. 

예를 들어 아래 코드는 value가 바뀔 때마다 매번 새로운 객체가 생성되므로 Provider가 렌더링 될 때마다 그 하위에서 구독하고 있는 컴포넌트 모두가 다시 렌더링 되는 것이다.

#### 예제

- [Context 예제](https://codesandbox.io/s/pensive-antonelli-y4l0h)
