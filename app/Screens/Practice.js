import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import Textbox from '../Components/Textbox';
import UpdateQuestion from '../Components/UpdateQuestion'
class Practice extends React.Component {
  CheckAnswer = () =>{
    <UpdateQuestion/>
    let press = 1
    if (this.state.text == 1) {
    } else {
        }
    press += 1
      }
    constructor(props) {
      super(props);
      this.state = { text: 'Enter Answer' };
    }
  render() {
    const { navigate } = this.props.navigation;
    let picture = '../Resources/Checkbox.png'
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',

      }}>
        <Image
        source={require('../Resources/Checkbox.png')}
        style={{width:20, height:20}}/>
        <Image
        source={require('../Resources/Checkbox.png')}
        style={{width:20, height:20}}/>
        <Image
        source={require('../Resources/Checkbox.png')}
        style={{width:20, height:20}}/>
        <Image
        source={require('../Resources/Checkbox.png')}
        style={{width:20, height:20}}/>
        <Image
        source={require('../Resources/Checkbox.png')}
        style={{width:20, height:20}}/>
        <Text>If 1 = 5</Text>
        <Text>2 = 25,</Text>
        <Text>3 = 125</Text>
        <Text>and 4 = 625,</Text>
        <Text>what does 5 equal?</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        title="Submit"
        onPress = {this.CheckAnswer}
        />
      </View>
    );
  }
}



export default Practice
