
'use strict';

var React = require('react-native');
var Flix = require('./app/components/Flix');
var api = require('./app/helpers/api');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class react_photos_swiper extends React.Component {

  getInitialState() {
    return {
      loaded: false
    };
  }

  componentWillMount() {
    api.init().then((photo) => {
      this.setState({
        initialRoute: {
          title:'Photo swiper',
          component: Flix,
          passProps: {
            Photo: photo
          }
        },
        loaded: true
      });
    })
    .catch((err) => {
      alert(err);
    });
  }

  render() {
    if (this.state) {
      return (
        <NavigatorIOS
          style={styles.container}
          initialRoute={this.state.initialRoute}/>
      );
    } else {
      return (<Text style={styles.loading}>loading</Text>);
    }
  }
}

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111',
  },
  loading: {
    flex: 1,
    fontSize: 20,
    top: 200,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('react_photos_swiper', () => react_photos_swiper);
