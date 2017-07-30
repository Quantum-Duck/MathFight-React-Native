import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListView from '../Components/ListView';

class RecentBattles extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Recent Battles',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <ListView/>
      <Button
        title="Practice"
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

export default RecentBattles
