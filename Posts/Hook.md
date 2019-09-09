# HOOK

이번에 16.7?에 들어갈거라는 새로운 기능인 바로 `hook`
</br>

애초에 React는 예전부터 함수형 프로그래밍으로 가는 부진한 노력을 했으며 지금도 충분히 진행을 하고 있다.
</br>

추가될 릴리즈는 함수형 컴포넌트에 희소식이 될 것으로 생각이 된다.
</br>

`2018-11-09` 현 시점에서 정식릴리즈는 `16.6` 까지 올라왔으며 새로운 기능인 Hook은 `React v16.7.0-alpha` 버전에서만 사용이 가능하다.
</br>

`16.7.0-alpha` 를 사용하기위해서는 `react` 와 `react-dom` 을 `@next` 버전으로 설치해야 한다.
</br>

```
$ npx create-react-app react-hooks-sample
$ cd react-hooks-sample
$ yarn add react@next react-dom@nextState Hook: useState
```

</br>
</br>

## useState

State Hook은 함수형 컴포넌트에서 변화 할 수 있는 상태를 사용 할 수 있게 해줍니다.
</br>

### 카운터 구현하기

한번 useState 라는 Hook 함수를 사용해서 카운터를 함수형 컴포넌트로 구현.
Counter.js 라는 파일을 만들어서 다음 코드를 작성해보세요.

```js
const [value, setValue] = useState(0);
```

위에 코드를 자세히 살펴보게 되면 `useState()` 를 사용해서 값을 반환해오고 있다.
</br>

> 먼저 Function 이름은 `useState`로 이 이름은 차후에 변경이 이루어질수도 있을 것 같다.
</br>

`useState` 의 인수로 `0`이 들어가있다. `useState` 의 첫번째 인수로는 **초기값을 넣는다.**
</br>

`const` 로 배열에 담겨있던 2개의 반환값을 각각 `value, setValue` 라는 이름을 붙여서 넣었다.
</br>

```js
const array =useState(0);
const value = array[0];
const setValue= array[1];
```

</br>

위와 같은 코드가 되는 것이다.
</br>

각각 `value` 는 만든 `hook` 의 값을 가져오는 변수이고 `setValue` 는 이름 그대로 변수를 `Setting` 하는 함수가 된다.
</br>

즉 변수하나와 함수하나를 반환한다.</br>
그렇다면 초기에 `useState(0)`로 만들게 되면 `value`에는 `0`이 담기게 되고 `setValue`는 `value`를 `Setting`할 수 있는 함수가 반환되는 것이다.
</br>

여러개를 만들때도 간단하다.
</br>

```js
const [name, setName] = useState('');
const [description, setDescription] = useState('');Effect 
```

</br>
</br>

## useEffect

컴포넌트가 **마운트 되거나 리렌더링**이 마치고 나서 실행됩니다.
</br>

`componentDidMount` 와 `componentDidUpdate` 와 비슷하다.
</br>

`useEffect` 넣은 함수는 컴포넌트가 `render` 를 마친 다음에 실행됩니다. 그러면, 이걸 사용해서 어떤 작업을 할 수 있을까?
</br>

가끔씩은, 우리가 똑같은 작업을 `componentDidMount` 와 `componentDidUpdate` 에서 구현해야 할 때가 있습니다.
</br>

`useEffect` 를 사용 하실 때 주의하실 점
</br>

우리가 설정해준 함수가 `render`가 될 때마다 실행된다.
</br>

즉, `props` 나 `state` 가 바뀌지 않고 **부모컴포넌트가 리렌더링 될 때에도 호출이 됩니다.**
</br>

만약에 특정 상황에만 이 함수가 실행되게끔 하고 싶다면, useEffect 의 두번째 파라미터로 주시하고 싶은 값들을 배열 형태로 전달해주면 됩니다.
</br>

```js
useEffect(() => {
    // 이 함수는 render 가 마치고 난 다음에 실행됩니다!
    console.log('rendered:', value);
  }, [value]);
```

</br>

이렇게 하면, `value` 값이 바뀔 때만 `useEffect` 가 호출됩니다.
</br>
</br>

## useEffect

```js
const context = useContext(Context);
```

useContext 는 Context API 를 Hook 을 통해 사용 할 수 있게 해줍니다. 

## Hooks 의 사용 규칙

리액트 매뉴얼에서는 Hooks 사용에 있어서 두가지 준수해야 할 규칙을 규정하였습니다.

1. Hooks 를 컴포넌트의 `Top-level` 에서만 사용 할 것

> Hooks 는 반복문이나, 조건문이나, 감싸진 함수에선 사용하면 안됩니다.

2. 리액트 함수에서만 사용 할 것

`Hooks` 는 리액트 함수형 컴포넌트 내부에서만 사용하셔야 합니다. 일반 `JavaScript` 함수에서는 사용하면 안됩니다. 하지만, `Custom Hook` 에서는 괜찮습니다.

</br>
</br>

## Custom Hook

우리가 방금 배운 `useState` 와 `useEffect` 를 활용하면, 정말 다양한 작업들을 할 수 있습니다. 그리고 재사용 되는 로직들은 우리가 따로 `Custom Hook` 으로 만들어서 우리들만의 `Hook` 을 만들어서 사용 할 수있습니다.

```js
import { useEffect, useState } from 'react';
import axios from 'axios';

function useRequest(url) {
  // loading, response, error 값을 다루는 hooks
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // 렌더링 될 때, 그리고 url 이 바뀔때만 실행됨
  useEffect(
    async () => {
      setError(null); // 에러 null 처리
      try {
        setLoading(true); // 로딩중
        const res = await axios.get(url); // 실제 요청
        setResponse(res); // response 설정
      } catch (e) {
        setError(e); // error 설정
      }
      setLoading(false); // 로딩 끝
    },
    [url] // url 이 바뀔때만 실행됨
  );
  return [response, loading, error]; // 현재 값들을 배열로 반환
}

export default useRequest;
```

```js
import React from 'react';
import useRequest from './hooks/useRequest';

const Post = () => {
  const [response, loading, error] = useRequest(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  if (loading) {
    return <div>로딩중..</div>;
  }

  if (error) {
    return <div>에러 발생!</div>;
  }

  /*
    컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
    loading 이 false 이면서 response 도 null 이기에
    response null 체킹 필요 
  */
  if (!response) return null;

  const { title, body } = response.data;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
```

## 참고

- [React-Hook](https://reactjs.org/docs/hooks-state.html)
- [velopert-Hook](https://velog.io/@velopert/react-hooks)
