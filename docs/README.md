
<h1 align="center">
  <img src="_images/logo.png"/><br>
  React Native Navigation中文文档
</h1>

App范围内的 100% 原生导航支持, 并提供易用的跨平台功能接口.

----

## 重要
最新稳定版是 `1.1.x` , 在 npm 中以tag `latest`发布. 支持 react-native 0.43 及更高版本.
<br><br>我们当前正在重新设计重写当前项目, 使用的分支是 `v2`.
<br>因此, 当前稳定版的新功能和拉取请求通常会多消耗一些时间.

## 为什么要使用这个包

 React Native核心功能中没有提供的其中很重要一个就是全功能的本地导航. 导航功能一般包含App的完整骨架及关键组件如导航条, 标签栏, 侧边菜单.

如果您正想开发一款不输市面上最好的那些原生App的用户体验, 就不能简单的去用JS的组件来模拟这些功能.

例如,这个包替换了原生的  [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html) 类, 这个包已经被官方 [抛弃](https://facebook.github.io/react-native/docs/navigator-comparison.html), 只因为 JS版本的解决方案更容易维护. 更多深入讨论可以看 [这里](https://github.com/wix/react-native-controllers#why-do-we-need-this-package).

