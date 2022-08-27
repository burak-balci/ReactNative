import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
  },
  body: {
    flex: 0.9,
    backgroundColor: 'white',
  },
  introductory: {
    backgroundColor: '#F2F2F2',
    paddingBottom: 8,
  },
  inner_container: {
    padding: 2,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  key: {
    color: 'red',
    fontWeight: 'bold',
  },
  value: {
    fontWeight: 'bold',
  },
  footer: {
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#EF5350',
    width: width / 2.2,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  desc: {
    paddingHorizontal: 10,
  },
});
