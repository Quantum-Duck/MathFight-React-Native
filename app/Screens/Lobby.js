import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class Lobby extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Button
        title="Go to screen"
        onPress={() => navigate('Practice')}
      />
      <Button
        title="Cancel"
        onPress={() => navigate('MainScreen')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dab',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Lobby
