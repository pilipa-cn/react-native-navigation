# Android 安装

!> 确保您使用的 **react-native** 版本 >= 0.43. 建议 npm 版本 >= 3.

1. 安装 `react-native-navigation` 最新稳定版本.

  ```sh
  yarn add react-native-navigation@latest
  ```

2. 向 `android/settings.gradle`中添加内容.

  ```groovy
  include ':react-native-navigation'
  project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/android/app/')
  ```

3. 在 `android/app/build.gradle`中更新依赖.
  ```groovy
  android {
  	compileSdkVersion 25
  	buildToolsVersion "25.0.1"
  	...
  }

  dependencies {
  	compile fileTree(dir: "libs", include: ["*.jar"])
  	compile "com.android.support:appcompat-v7:23.0.1"
  	compile "com.facebook.react:react-native:+"
  	compile project(':react-native-navigation')
  }
  ```

4. 类文件 `MainActivity.java` 应该继承自 `com.reactnativenavigation.controllers.SplashActivity` , 而不再继承自原来的 `ReactActivity`.

  通常这个文件放在这个位置 `android/app/src/main/java/com/yourproject/`.

  > 建议使用Androd Studio打开项目来编辑(译注)

  ```java
  import com.reactnativenavigation.controllers.SplashActivity;

  public class MainActivity extends SplashActivity {

  }
  ```

  如果调用了任何 **react-native** 相关的方法, 可以安全的进行删除.

5. 在 `MainApplication.java`, 中添加下列内容
  ```java
  import com.reactnativenavigation.NavigationApplication;

  public class MainApplication extends NavigationApplication {

  	@Override
  	public boolean isDebug() {
  		// Make sure you are using BuildConfig from your own application
  		return BuildConfig.DEBUG;
  	}

  	protected List<ReactPackage> getPackages() {
  		// Add additional packages you require here
  		// No need to add RnnPackage and MainReactPackage
  		return Arrays.<ReactPackage>asList(
  			// eg. new VectorIconsPackage()
  		);
  	}

  	@Override
  	public List<ReactPackage> createAdditionalReactPackages() {
  		return getPackages();
  	}
  }
  ```

  确保实现了 `isDebug` 和 `createAdditionalReactPackages` 方法.

6. 更新 `AndroidManifest.xml` 并设置 **android:name** 的值为 `.MainApplication`
  ```xml
  <application
  	android:name=".MainApplication"
  	...
  />
  ```


