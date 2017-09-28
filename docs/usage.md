# 使用

如果你有阅读困难症, 可以直接跳转可运行的例子代码库:

* [example](https://github.com/wix/react-native-navigation/tree/master/example) - 示例项目, 演示了使用这个包的最佳实践. 演示了很多导航功能.
* [redux-example](https://github.com/wix/react-native-navigation/tree/master/old-example-redux) - (**已废弃** 请参考 [JuneDomingo/movieapp](https://github.com/JuneDomingo/movieapp/tree/feature/similar-movies)) , 在基于 [redux](https://github.com/reactjs/redux) 的项目中使用此包的最佳实践.

> 注意: redux 例子已废弃. 因为我们没有足够的时间和精力来维护两个示例项目, 最终决定停止维护 redux 例子项目. 但这并不是说 redux 不能在 react-native-navigation中使用 (事实上, 我们在 Wix 应用中使用了redux). 如果需要可以正常运行的 redux + RNN 项目, 请参考 [JuneDomingo/movieapp](https://github.com/JuneDomingo/movieapp).

#### 第1步  - 修改app的启动方式

这些代码通常放在 `index.ios.js`

```js
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // 注册App的所有页面

// 启动基于标签的App
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // 这是页面的注册名字
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'), // 仅支持 iOS
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'), // 仅支持 iOS
      title: 'Screen Two'
    }
  ]
});
```

#### 第2步 - Register all of your screen components

Every screen that you want to be able to place in a tab, push to the navigation stack or present modally needs to be registered. We recommend doing this in a central place, like [screens/index.js](https://github.com/wix/react-native-navigation/blob/master/example/src/screens/index.ios.js).

> Note: Since your screens will potentially be bundled with other packages, your registered name must be **unique**! Follow a namespacing convention like `packageName.ScreenName`.

```js
import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
}
```

#### Step 3 - That's it

If you want to do a navigation action like push a new screen over an existing one, take a look at the [Screen API](#screen-api). It would look something like this:

```js
// this would go inside the Component implementation of one of your screens, like FirstTabScreen.js
this.props.navigator.push({
  screen: 'example.PushedScreen',
  title: 'Pushed Screen'
});
```