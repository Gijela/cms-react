# note
## 路由
> 终端处安装 react-router-dom
在 **react-router-dom 6版本**中，使用的是 Routes 组件包裹route 而不是 Switch
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

### 在页面的方法中控制怎么 路由跳转

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


### 怎么设置子路由(嵌套路由)
在 react-router-dom 6.x 中，可以使用 `<Routes>` 组件来定义子路由。需要在父级路由的 `path` 属性中添加 `*`，表示该路由下有子路由。然后在 `<Routes>` 组件中添加子路由的定义。

示例代码：

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/*" element={<Posts />} />
      </Routes>
    </div>
  );
}

function Posts() {
  return (
    <div>
      <h2>Posts</h2>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}
```

在上面的例子中，`/posts/*` 表示该路由下有子路由，即 `/posts/1`、`/posts/2` 等。然后在 `Posts` 组件中使用 `<Routes>` 组件来定义子路由。子路由的 `path` 属性中不需要包含父级路由的路径，因为已经在父级路由的 `path` 属性中定义过了。

举例：
![举例](https://api2.mubu.com/v3/document_image/a1cfd1ea-2d30-4688-b41d-88be966dcd4f-11752736.jpg)


> 推荐文章：[通过 React Router V6 源码，掌握前端路由](https://juejin.cn/post/7205023631167422522#heading-16)
## antd5
在终端处安装组件，然后就可以直接在组件tsx文件中按需引入antd的组件使用，不需要其他配置。
`import { Button, Checkbox, Form, Input } from 'antd';`

## scss
怎么给项目中应用上 scss？
1. 安装相应的loader和依赖

在终端中运行以下命令：

```js
npm install sass-loader node-sass css-loader style-loader --save-dev
```
> 这里的 node-sass 可能会报错版本过高，降低一下版本即可。

2. 在webpack配置文件中添加loader

在webpack配置文件中添加以下代码：

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  }
}
```

3. 在代码中导入scss文件

在代码中导入scss文件，webpack会自动将其编译成css文件并注入到HTML页面中。

```javascript
import './styles.scss';
```

## react-redux 8.x 
### 引入 react-redux 8.x 并且只定义一个全局变量
React-Redux 8.x版本是一个React框架的状态管理库，它提供了一个可预测的状态容器，使得React应用程序的状态管理更加简单和可维护。下面是一个简单的例子来说明React-Redux 8.x版本的用法。

首先，我们需要安装React-Redux 8.x版本和Redux库：

```bash
pnpm install react-redux@8 redux
```

接着，我们需要创建一个Redux store来存储应用程序的状态。在这个例子中，我们将创建一个计数器应用程序的store：

```javascript
import { createStore } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
```

然后，我们需要将store与React应用程序连接起来。我们可以使用`<Provider>`组件将store传递给React组件：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

在这个例子中，`<App>`组件是我们要渲染的根组件。我们使用`<Provider>`组件将store作为props传递给`<App>`组件。

最后，我们需要在React组件中使用Redux store。我们可以使用`useSelector`和`useDispatch`钩子来访问store和dispatch action。例如，我们可以在`<App>`组件中创建两个按钮，一个用于增加计数器的值，另一个用于减少计数器的值：

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
    </div>
  );
}

export default App;
```

在这个例子中，我们使用`useSelector`钩子来从store中获取当前计数器的值。然后，我们使用`useDispatch`钩子来获取dispatch函数，并在按钮的`onClick`事件中调用它来触发对应的action。

这就是React-Redux 8.x版本的基本用法。通过使用Redux store和React-Redux提供的钩子，我们可以更方便地管理React应用程序的状态。
### 定义两个全局变量 (大于2个也一样)
创建一个store文件夹，并在其中创建一个index.js文件，用于创建store：

```javascript
import { createStore, combineReducers } from 'redux';

const initialState = {
  username: '',
  counter: 0
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

// 这里就是和定义一个全局变量不同的地方
const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer
});

const store = createStore(rootReducer);

export default store;
```

在这里，我们定义了两个reducer，一个用于保存用户名，一个用于计数器。我们将它们合并到一个rootReducer中，并创建一个store。

然后，在我们的登录组件中，我们可以通过dispatch一个action来更新store中的状态：

```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // 登录逻辑
    dispatch({ type: 'SET_USERNAME', payload: username });
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default Login;
```

在这里，我们使用useState来保存用户名，然后在handleLogin函数中，dispatch一个action来更新store中的username状态。

最后，我们可以在任何组件中使用useSelector来获取store中的状态：

```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); // ⚠️注意：获取的是 counter
  const username = useSelector(state => state.user.username); // 注意：获取的是 user 下的 username

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <p>{username}的计数器：{counter}</p>
      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default Counter;
```

在这里，我们使用useSelector来获取store中的counter和username状态，并在handleIncrement函数中dispatch一个action来更新store中的counter状态。

这样，我们就可以实现在登陆成功之后将用户名保存到全局，并且同时保存实现一个计数器。

## 