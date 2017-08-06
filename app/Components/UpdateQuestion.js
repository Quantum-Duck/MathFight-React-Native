import React, { Component } from 'react'
import {
   Text,
   View,
   Button
} from 'react-native'

export default class Question extends Component {
   constructor() {
      super()
      this.state = {
         myText: 'The answer is 1'
      }
   }
   UpdateQuestion = () => {
      this.setState({myText: 'The answer is 2'})
   }
   render() {
      return (
        <View>
          <Button
          title="Next Question"
          onPress = {this.UpdateQuestion}
          />
          <Text>
            {this.state.myText}
          </Text>
        </View>
      );
   }
}
