//-----------------------------------------------------------------------------
// src/screens/App/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  TouchableOpacity,
}                             from 'react-native'
import {
  FlatList,
  RectButton,
}                             from 'react-native-gesture-handler'
import Icon                   from 'react-native-vector-icons/Ionicons'

import AppleStyleSwipeableRow from '../../../components/AppleStyleSwipeableRow/AppleStyleSwipeableRow'
import GmailStyleSwipeableRow from '../../../components/GmailStyleSwipeableRow/GmailStyleSwipeableRow';
import styles                 from './styles'

const Row = ({item}) => (
  <RectButton style={styles.RectButton} onPress={() => alert(item.from)}>
    <Text styles={styles.fromText}>
      {item.from}
    </Text>
    <Text numberOfLines={2} style={styles.messageText}>
      {item.message}
    </Text>
    <Text style={styles.dateText}>
      {item.when} {'>'}
    </Text>
  </RectButton>
)

/**
 * Meant to toggle between Apple and Google styles for swipeable row
 * @param {*} param0 
 */
const SwipeableRow = ({item, index}) => {
  if (index % 2 === 0) {
    return (
      <AppleStyleSwipeableRow>
        <Row item={item} />
      </AppleStyleSwipeableRow>
    );
  } else {
    return (
      <GmailStyleSwipeableRow>
        <Row item={item} />
      </GmailStyleSwipeableRow>
    );
  }
}

/**
 * Home screen for the RNGestureHandlerDemo app. User can navigate to settings
 * by clicking on the gear icon.
 */
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Home',
      headerLeft:  (
        <TouchableOpacity onPress = { () => navigation.navigate('UserSettings')}>
          <Icon name='ios-settings' style={styles.headerIcon} />
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data  = {DATA}
          ItemSeparatorComponent  = {() => <View style={styles.separator} />}
          renderItem = { ({item, index}) =>(
            <SwipeableRow item={item} index={index} />
          )}
          keyExtractor = { (item, index) => `message ${index}` }
        />
      </View>
    )
  }
}

// Export the HomeScreen
export default HomeScreen

/**
 * Define the test data
 */
const DATA = [
  {
    from: "D'Artagnan",
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  {
    from: 'Athos',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
  {
    from: 'Porthos',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
  {
    from: 'Domestos',
    when: '2 days ago',
    message:
      'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 days ago',
    message:
      'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
  },
  {
    from: "D'Artagnan",
    when: 'Week ago',
    message:
      'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 weeks ago',
    message:
      'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
  },
];