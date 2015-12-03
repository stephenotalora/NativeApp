import React, { PropTypes } from 'react-native';
import AppStyles from '../../global_stylesheet/AppStyles';

const {
  Text,
  View
} = React;

class DisplayList extends React.Component {
  static propTypes = {
    arr: PropTypes.array,
    highLight: PropTypes.number
  };

  render() {
    return (
      <View>
        {
          this.props.arr.map((item, index) => {
            return (
              <Text key={index} style={index === this.props.highLight ? AppStyles.heightlight : null}>
                {item}
              </Text>
            );
          })
        }
      </View>
    );
  }
}

export default DisplayList;
