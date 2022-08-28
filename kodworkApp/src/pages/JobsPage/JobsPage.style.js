import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#EF5350',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: 8,
    width: width / 2.1,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});
