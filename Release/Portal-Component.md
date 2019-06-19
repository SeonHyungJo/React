# Portal-Component

> Portal은 부모 컴포넌트의 DOM 계층 구조 바깥에 있는 DOM 노드로 자식을 렌더링하는 최고의 방법을 제공합니다. - 공식 홈페이지

```js
ReactDOM.createPortal(child, container)
```

첫 번째 인자는 React Child, 두 번째 인자(container)는 DOM Element이다.

---

간단하게 한줄로 정리를 하자면, 리액트 프로젝트에서 컴포넌트를 렌더링할 때, UI를 어디에 렝더링 시킬지 DOM을 사전에 선택하여 **부모 컴포넌트의 바깥쪽에 렌더링 할 수 있게 해주는 기능이다.**

Portal의 도입 시기는 v16 기존의 리액트 컴포넌트들은 자식들은 항상 부모 컴포넌트의 DOM 내부에 렌더링이 되어야 했다. 그러나 Portal을 사용하면 **모달이나 팝업 같은 창을 쉽게 구현**할 수 있다.

아래의 간단한 예제를 살펴보자

```js
  const Parent = ({ children }) => {
    return <div>{children}</div>;
  }
```

보통 컴포넌트 렌더링 메서드에서 엘리먼트를 반환할 때는 그 엘리먼트는 부모 노드에서 가장 가까운 자식으로 DOM에 마운트된다.

그러나 Portal를 사용하면 DOM의 계층 구조 시스템에 종속되지 않고 컴포넌트를 렌더링 할 수 있다.

```js
    const PortalComp = ({ children }) => {
      const el = document.getElementById('my-portal');
      return ReactDOM.createPortal(children, el);
    }
```

<br/>

### 예제로 보기

Portal을 통한 이벤트 버블링은 예제에서 확인이 가능하다.

[https://stackblitz.com/edit/portal-example?file=index.js](https://stackblitz.com/edit/portal-example?file=index.js)

<br/>

#### Reference

- [React 공식 홈페이지 - Portals](https://ko.reactjs.org/docs/portals.html)
- [https://velog.io/@velopert/react-portals](https://velog.io/@velopert/react-portals)