import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Enter Answer' };
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}
export default Textbox
