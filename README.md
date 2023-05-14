# note
## 路由
> 终端处安装 react-router-dom
在 react-router-dom 6版本中，使用的是 Routes 组件包裹route 而不是 Switch
```js
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './testRouter/login.tsx';
import Home from './testRouter/home.tsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 在页面中控制 路由跳转

在react-router-dom6版本中，可以使用`useNavigate`钩子来进行路由跳转。

首先，需要在组件中引入`useNavigate`钩子：

```import { useNavigate } from 'react-router-dom';```

然后，在需要进行路由跳转的地方，可以通过调用`useNavigate`钩子来获取`navigate`函数，然后使用该函数进行路由跳转。

例如，在点击按钮时进行路由跳转：

```tsx
const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/path/to/destination');
  };

  return (
    <button onClick={handleClick}>跳转到目标页面</button>
  );
};
```

在上述代码中，`navigate`函数接收一个字符串参数，该参数为目标页面的路径。

通过使用`useNavigate`钩子，可以方便地在组件中进行路由跳转，并且可以避免使用`history`对象等传统方式进行路由跳转时可能出现的一些问题。

ps: `const navigate = useNavigate();`必须在组件或者 hook 中使用。

## antd5
在终端处安装组件，然后就可以直接在组件tsx文件中按需引入antd的组件使用，不需要其他配置。
`import { Button, Checkbox, Form, Input } from 'antd';`

## 