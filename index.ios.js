
'use strict';

var React = require('react-native');
var Flix = require('./app/components/Flix');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var react_photos_swiper = React.createClass({
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Photo swiper',
          component: Flix

        }} 
      />
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('react_photos_swiper', () => react_photos_swiper);
