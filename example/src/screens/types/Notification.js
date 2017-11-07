import React from 'react';
import {StyleSheet, View, Text, Dimensions, Button} from 'react-native';

class Notification extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>应用内通知</Text>
        <Text style={styles.content}>您有 10 条未读通知!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#ff505c',
    padding: 16,
    margin: 10,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Notification;
