import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, } from 'react-native';
import Textbox from '../Components/Textbox';
import Slider from 'react-native-slider';
import DifficultySlider from '../Components/DifficultySlider'




class Addition extends React.Component {

  constructor(props) {
    super(props);
      let NumOne = this.randomNumber();
      let NumTwo = this.randomNumber();
    this.state = {
      text: '',
      score: 0,
      answer: NumOne + NumTwo,
      SliderValue: 0,
      myText: NumOne + '+' + NumTwo,
    };
  }
  randomNumber = () => {
    let ScaledSliderValue = this.state.SliderValue * 97
    return (Math.floor((Math.random()*(ScaledSliderValue)) + 3));
  }
  initialState = () => {
    let NumOne = this.randomNumber();
    let NumTwo = this.randomNumber();
    return{
      score: 0,
      timer: 30,
      SliderValue: 0,
      answer: NumOne + NumTwo,
      myText: NumOne + '+' + NumTwo,
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
      answer: NumOne + NumTwo,
      myText: NumOne + '+' + NumTwo, });
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
        <View style={{
          marginLeft: 10,
          marginRight: 10,
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
        <Slider
          value={this.state.SliderValue}
          onValueChange={(SliderValue) => this.setState({SliderValue})} />
        <Text>Value: {this.state.SliderValue}</Text>
        </View>
      </View>
    );
  }
}



export default Addition
