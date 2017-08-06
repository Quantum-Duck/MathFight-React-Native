import React from 'react';
import MainScreen from './Screens/MainScreen';
import Lobby from './Screens/Lobby';
import {StackNavigator} from 'react-navigation';
import PlayerProfile from './Screens/PlayerProfile';
import RecentBattles from './Screens/RecentBattles';
import BattleScreen from './Screens/BattleScreen';
import ChooseScreen from './Screens/ChooseScreen';
import Addition from './Screens/Addition';
import Subtraction from './Screens/Subtraction';
import Multiplication from './Screens/Multiplication';
import Division from './Screens/Division';

export const MathFightApp = StackNavigator({
  MainScreen: {screen: MainScreen},
  Lobby: {screen: Lobby},
  PlayerProfile: {screen: PlayerProfile},
  BattleScreen: {screen: BattleScreen},
  ChooseScreen: {screen:ChooseScreen},
  Addition: {screen:Addition},
  Subtraction: {screen:Subtraction},
  Multiplication: {screen:Multiplication},
  Division: {screen:Division}
});
