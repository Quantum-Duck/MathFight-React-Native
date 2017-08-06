import React from 'react';
import { StyleSheet, Image } from 'react-native';



class RightWrongImage extends React.Component {
  render(){
    return(
      <Image
      style={{width:20, height:20}}
      source={this.props.imageName}/>
    );
  }
}

export default RightWrongImage
