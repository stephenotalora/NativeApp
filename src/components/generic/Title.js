/**
 * Created by jono on 2015-12-02.
 */
import React from 'react-native';
import AppStyles from '../../global_stylesheet/AppStyles';

const {
  Text,
  View
} = React;

class Title extends React.Component {
  // renders a title
  render() {
    return (
      <View style={AppStyles.content}>
        <Text style={AppStyles.titles}>Day of The Week: </Text>
      </View>
    );
  }
}

export default Title;
