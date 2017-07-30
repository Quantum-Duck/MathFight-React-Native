import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class PlayerProfile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Image
        style={{width:300, height:40}}
        source={require('../Resources/PlayerProfileButton.png')}
      />
      <Text>
      Name       Rank
      Wins
      Other Stuff
      </Text>
      <Button
        title="Back"
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

export default PlayerProfile
