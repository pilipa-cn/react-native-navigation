# iOS 安装

!> 确保使用的 **react-native** 版本 >= 0.43. 建议 npm 版本 >= 3

1. 安装 `react-native-navigation` 最新稳定版.

    ```sh
    yarn add react-native-navigation@latest
    ```

2. 在 Xcode中, 进入 Project Navigator (左侧面板), 右键点击 `Libraries` 选择菜单> `Add files to [project name]`. 添加 `./node_modules/react-native-navigation/ios/ReactNativeNavigation.xcodeproj` ([操作截图](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-1))

3. 在 Xcode中, 进入 Project Navigator (左侧面板), 点击你的项目 (顶部) 并选择 `Build Phases` 标签页 (右侧面板 ). 在 `Link Binary With Libraries` 区添加 `libReactNativeNavigation.a` ([操作截图](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-2))

4. 在 Xcode中, 进入 Project Navigator (左侧面板), 点击你的项目 (顶部) 并选择 `Build Settings` 标签页 (右侧面板 ). 在 `Header Search Paths` 区添加 `$(SRCROOT)/../node_modules/react-native-navigation/ios`. 确保在右侧将此路径标为递归 `recursive` ([操作截图](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#step-3))

5. 在 Xcode中, 项目源码中, 参照此 [例子](https://github.com/wix/react-native-navigation/blob/master/example/ios/example/AppDelegate.m)修改文件 `AppDelegate.m` .

