import React from 'react';
import MainScreen from './Screens/MainScreen';
import Lobby from './Screens/Lobby';
import {StackNavigator} from 'react-navigation';
import Practice from './Screens/Practice';
import PlayerProfile from './Screens/PlayerProfile'
import RecentBattles from './Screens/RecentBattles'
import BattleScreen from './Screens/BattleScreen'

export const MathFightApp = StackNavigator({
  MainScreen: {screen: MainScreen},
  Lobby: {screen: Lobby} ,
  Practice: {screen: Practice},
  PlayerProfile: {screen: PlayerProfile},
  BattleScreen: {screen: BattleScreen}
});
