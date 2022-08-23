import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  body_container: {
    margin: 5,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 2.5,
  },
  title: {
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 25,
  },
  subtitle: {
    color: '#A52A2A',
    fontWeight: 'bold',
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
  },
  desc: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#FF0000',
    margin: 10,
    textAlign: 'center',
    borderRadius: 8,
  },
  button_text: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
