import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, } from 'react-native';
import Textbox from '../Components/Textbox';
import RightWrongImage from '../Components/RightWrongImage'




class Subtraction extends React.Component {


  randomNumber = () => {
    return (Math.floor((Math.random()*(100)) + 0));
  }
  initialState = () => {
    let NumOne = this.randomNumber();
    let NumTwo = this.randomNumber();
    return{
      score: 0,
      timer: 30,
      answer: NumOne - NumTwo,
      myText: NumOne + '-' + NumTwo,
    }
  }
  CheckAnswer = () => {
    if (this.state.text == this.state.answer) {
      this.setState({score: this.state.score + 1})
    } else {
      this.setState({score: this.state.score - 0.5})
        }
      }
    UpdateQuestion = () => {
      NumOne = this.randomNumber();
      NumTwo = this.randomNumber();
      this.setState ({
      text: '',
      answer: NumOne - NumTwo,
      myText: NumOne + '-' + NumTwo, });
    }
  constructor(props) {
    super(props);
    let NumOne = this.randomNumber();
    let NumTwo = this.randomNumber();
    this.state = {
    text: '',
    score: 0,
    answer: NumOne - NumTwo,
    myText: NumOne + '-' + NumTwo, };
  }
  SubmitButton = () => {
    this.CheckAnswer();
    this.UpdateQuestion();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#dab',

      }}>
        <Text style = {{fontSize: 40}}>
          Score: {this.state.score}
        </Text>

        <Text style = {{fontSize: 80}}>
          {this.state.myText}
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
        title="Submit"
        onPress = {this.SubmitButton}
        />
      </View>
    );
  }
}



export default Subtraction
