import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class Push extends Component {
    static navigatorStyle = {
        navBarHidden: false, // 隐藏默认的顶部导航栏
        navBarButtonColor: '#FF0000',
    };

  onPushAnother = () => {
    this.props.navigator.push({
      screen: 'example.Types.Push',
      title: `页面 ${this.props.count || 1}`,
      passProps: {
        count: this.props.count ? this.props.count + 1 : 2
      }
    });
  };

  onResetTo = () => {
    this.props.navigator.resetTo({
      label: 'Navigation',
      screen: 'example.Types',
      icon: require('../../../img/list.png'),
      title: 'Navigation Types'
    });
  };

  onPopToRoot = () => {
    this.props.navigator.popToRoot();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>跳转的页面</Text>
        <View style={styles.button}>
          <Button
            onPress={this.onPushAnother}
            title="再跳转一次"/>
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.onResetTo}
            title="重置导航栈"/>
        </View>
        <View style={styles.button}>
          <Button
            onPress={this.onPopToRoot}
            title="跳到根页面"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16
  }
});

export default Push;
