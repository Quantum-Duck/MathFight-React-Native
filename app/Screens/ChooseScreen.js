import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';

class ChooseScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'springgreen',
        alignItems: 'center'
      }}>
      <TouchableOpacity onPress= {() => navigate('Addition')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/AdditionButton.png')}
        />
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity onPress= {() => navigate('Subtraction')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/SubtractionButton.png')}
        />
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress= {() => navigate('Multiplication')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/MultiplicationButton.png')}
        />
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity onPress= {() => navigate('Division')}>
        <Image
          style={{width:300, height:133.3}}
          source={require('../Resources/DivisionButton.png')}
        />
      </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default ChooseScreen
