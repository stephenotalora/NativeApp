/**
 * React Native Webpack Starter Kit
 * https://github.com/jhabdas/react-native-webpack-starter-kit
 */

import React, { PropTypes } from 'react-native';
import Title from './generic/Title';
import AppStyle from '../global_stylesheet/AppStyles';
import DisplayList from './generic/DisplayList';
import moment from 'moment';

// Symbolic constants
const { View, Text } = React;
const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Staturday'];

class App extends React.Component {
  static propTypes = {
    instructions: PropTypes.string
  };

  /**
   * life cycle
   * @returns {React Component}
   */
  render() {
    return (
      <View style={AppStyle.container}>
        <Title />
        <DisplayList arr={WEEK_DAYS} highLight={App.sortWeekDays()} />
      </View>
    );
  }

  static sortWeekDays() {
    return WEEK_DAYS.indexOf(moment().format('dddd'));
  }

  constructor(props) {
    super(props);
  }
}

export default App;
