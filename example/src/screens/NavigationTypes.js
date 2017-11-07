import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Row from '../components/Row';

class NavigationTypes extends React.Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'DeepLink') {
      const parts = event.link.split('/');
      if (parts[0] === 'tab1') {
        this.props.navigator.push({
          screen: parts[1]
        });
      }
    }
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'example.Types.Push',
      title: '新页面',
    });
  };

  pushListScreen = () => {
    console.log('RANG', 'pushListScreen');
    this.props.navigator.push({
      screen: 'example.Types.ListScreen',
      title: '列表页面',
    });
  };

  pushCustomTopBarScreen = () => {
    this.props.navigator.push({
      screen: 'example.Types.CustomTopBarScreen'
    });
  };

  pushCustomButtonScreen = () => {
    this.props.navigator.push({
      screen: 'example.Types.CustomButtonScreen',
      title: '自定义按钮'
    });
  };

  pushTopTabsScreen = () => {
    this.props.navigator.push({
      screen: 'example.Types.TopTabs',
      title: '顶部标签页',
      topTabs: [{
        screenId: 'example.Types.TopTabs.TabOne',
        title: 'Tab One',
      }, {
        screenId: 'example.Types.TopTabs.TabTwo',
        title: 'Tab Two',
      }],
    });
  };

  showModal = () => {
    this.props.navigator.showModal({
      screen: 'example.Types.Modal',
      title: '模态窗口',
    });
  };

  showLightBox = () => {
    this.props.navigator.showLightBox({
      screen: "example.Types.LightBox",
      passProps: {
        title: '遮罩弹窗',
        content: ' 我是遮罩弹窗 :D',
        onClose: this.dismissLightBox,
      },
      style: {
        backgroundBlur: 'dark',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        tapBackgroundToDismiss: true
      }
    });
  };

  dismissLightBox = () => {
    this.props.navigator.dismissLightBox();
  };

  showInAppNotification = () => {
    this.props.navigator.showInAppNotification({
      screen: 'example.Types.Notification',
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'切换抽屉'} onPress={this.toggleDrawer}/>
        <Row title={'跳转到屏幕'} testID={'pushScreen'} onPress={this.pushScreen}/>
        <Row title={'跳转到列表屏幕'} testID={'pushListScreen'} onPress={this.pushListScreen}/>
        <Row title={'自定义顶栏'} onPress={this.pushCustomTopBarScreen}/>
        <Row title={'自定义顶部按钮'} onPress={this.pushCustomButtonScreen}/>
        <Row title={'顶部标签页页面'} onPress={this.pushTopTabsScreen} platform={'android'}/>
        <Row title={'显示 模态窗口'} onPress={this.showModal}/>
        <Row title={'显示 遮罩弹窗'} onPress={this.showLightBox}/>
        <Row title={'显示 应用内通知'} onPress={this.showInAppNotification}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    height: 48,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.054)',
  },
  text: {
    fontSize: 16,
  },
});

export default NavigationTypes;
