import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

class MainScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent:'center'
      }}>
      <TouchableOpacity onPress= {() => navigate('PlayerProfile')}>
        <Image
          style={{width:300, height:40}}
          source={require('../Resources/PlayerProfileButton.png')}
        />
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity onPress= {() => navigate('Practice')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/PracticeButton.png')}
        />
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress= {() => navigate('Practice')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/BattleButton.png')}
        />
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity onPress= {() => navigate('RecentBattles')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/RecentButton.png')}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

export default MainScreen
