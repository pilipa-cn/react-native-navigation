import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Row from '../components/Row';

class Actions extends React.Component {

  constructor(props) {
    super(props);

    this._fab = false;
    this._rightButton = null;
    this._contextualMenu = false;
    this._toggleTabs = 'shown';
    this._toggleNavBar = 'shown';
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'contextualMenuDismissed') {
      this._contextualMenu = false;
    }
  }

  setTitle = () => {
    this.props.navigator.setTitle({
      title: '新标题!',
    });
  };

  setSubtitle = () => {
    this.props.navigator.setSubTitle({
      subtitle: '新子标题!',
      navigatorStyle: {
        navBarSubtitleColor: 'red'
      }
    });
  };

  toggleTabs = () => {
    const to = this._toggleTabs === 'shown' ? 'hidden' : 'shown';

    this.props.navigator.toggleTabs({
      to,
      animated: true,
    });
    this._toggleTabs = to;
  };

  setTabBadge = () => {
    this.props.navigator.setTabBadge({
      tabIndex: 1,
      badge: Math.floor(Math.random() * 20) + 1,
    });
  };

  switchToTab = () => {
    this.props.navigator.switchToTab({
      tabIndex: 0,
    });
  };

  toggleNavBar = () => {
    const to = this._toggleNavBar === 'shown' ? 'hidden' : 'shown';

    this.props.navigator.toggleNavBar({
      to,
      animated: true,
    });
    this._toggleNavBar = to;
  };

  showSnackbar = () => {
    this.props.navigator.showSnackbar({
      title: 'Woo Snacks!',
    });
  };

  toggleContextualMenu = () => {
    if (!this._contextualMenu) {
      this.props.navigator.showContextualMenu({
        rightButtons: [{
          title: 'Edit',
          icon: require('../../img/edit.png'),
        }, {
          title: 'Delete',
          icon: require('../../img/delete.png'),
        }],
        onButtonPressed: (index) => console.log(`Button ${index} tapped`)
      });
      this._contextualMenu = true;
    } else {
      this.props.navigator.dismissContextualMenu();
      this._contextualMenu = false;
    }

  };

  setButtons = () => {
    let title = '';

    if (!this._rightButton) {
      title = '你好';
    } else if (this._rightButton === '你好') {
      title = '是我, 别开枪';
    }

    this.props.navigator.setButtons({
      rightButtons: [{
        title,
        id: 'topRight',
      }],
      animated: true,
    });
    this._rightButton = title;
  };

  toggleFAB = () => {
    if (this._fab) {
      this.props.navigator.setButtons({
        fab: {},
      });
      this._fab = false;
    } else {
      this.props.navigator.setButtons({
        fab: {
          collapsedId: 'share',
          collapsedIcon: require('../../img/edit@1x.png'),
          expendedId: 'clear',
          expendedIcon: require('../../img/edit@1x.png'),
          backgroundColor: '#ff505c',
          actions: [
            {
              id: 'mail',
              icon: require('../../img/edit@1x.png'),
              backgroundColor: '#03A9F4'
            },
            {
              id: 'delete',
              icon: require('../../img/delete@1x.png'),
              backgroundColor: '#4CAF50'
            }
          ]
        },
        animated: true,
      });
      this._fab = true;
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Row title={'设置标题'} onPress={this.setTitle} />
        <Row title={'设置子标题'} onPress={this.setSubtitle} />
        <Row title={'切换标签页'} onPress={this.toggleTabs} />
        <Row title={'设置标签提示数字'} onPress={this.setTabBadge} />
        <Row title={'切换到第 0 个标签页'} onPress={this.switchToTab} />
        <Row title={'切换导航栏'} onPress={this.toggleNavBar} />
        <Row title={'切换 Snackbar'} onPress={this.showSnackbar} platform={'android'} />
        <Row title={'切换上下文菜单'} onPress={this.toggleContextualMenu} platform={'android'} />
        <Row title={'设置右侧按钮'} onPress={this.setButtons} />
        <Row title={'切换 FAB'} onPress={this.toggleFAB} platform={'android'} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default Actions;
