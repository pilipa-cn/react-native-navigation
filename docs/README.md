
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

If you're trying to deliver a user experience that's on par with the best native apps out there, you simply can't compromise on JS-based components trying to fake the real thing.

For example, this package replaces the native [NavigatorIOS](https://facebook.github.io/react-native/docs/navigatorios.html) that has been [abandoned](https://facebook.github.io/react-native/docs/navigator-comparison.html) in favor of JS-based solutions that are easier to maintain. For more details see in-depth discussion [here](https://github.com/wix/react-native-controllers#why-do-we-need-this-package).

