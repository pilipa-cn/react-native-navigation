import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Platform
} from 'react-native';

export default class CustomTopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity stye={styles.button} onPress={ () => Alert.alert(this.props.title, '谢谢你点了我 :)') }>
          <Text style={styles.text}>点我</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'green'
  },
  text: {
    alignSelf: 'center',
    color: 'white'
  }
});



