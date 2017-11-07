import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: '导航',
  screen: 'example.Types',
  icon: require('../img/list.png'),
  title: '导航类型',
}, {
  label: '操作',
  screen: 'example.Actions',
  icon: require('../img/swap.png'),
  title: '导航操作',
}];

if (Platform.OS === 'android') {
  tabs.push({
    label: '跳转',
    screen: 'example.Transitions',
    icon: require('../img/transform.png'),
    title: 'Navigation Transitions',
  });
}

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  drawer: {
    left: {
      screen: 'example.Types.Drawer'
    }
  }
});
