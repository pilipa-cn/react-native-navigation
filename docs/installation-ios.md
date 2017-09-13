# iOS 安装

!> 确保使用的 **react-native** 版本 >= 0.43. 建议 npm 版本 >= 3

1. 安装 `react-native-navigation` 最新稳定版.

    ```sh
    yarn add react-native-navigation@latest
    ```

2. 打开 Xcode, 进入 Project Navigator (左侧面板), 右键点击 `Libraries` 选择菜单> `Add files to [project name]`. 添加 `./node_modules/react-native-navigation/ios/ReactNativeNavigation.xcodeproj` ([screenshots](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-1))

3. 打开 Xcode, 进入 Project Navigator (左侧面板), 点击你的项目 (顶部) and select the `Build Phases` tab (right pane). In the `Link Binary With Libraries` section add `libReactNativeNavigation.a` ([screenshots](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-2))

4. In Xcode, in Project Navigator (left pane), click on your project (top) and select the `Build Settings` tab (right pane). In the `Header Search Paths` section add `$(SRCROOT)/../node_modules/react-native-navigation/ios`. Make sure on the right to mark this new path `recursive` ([screenshots](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-3))

5. In Xcode, under your project files, modify `AppDelegate.m` according to this [example](https://github.com/wix/react-native-navigation/blob/master/example/ios/example/AppDelegate.m)
