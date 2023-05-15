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

##