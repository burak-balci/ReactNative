import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  descContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    padding: 10,
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  price: {
    fontWeight: 'bold',
  },
  inStock: {
    fontWeight: 'bold',
    color: 'red',
  },
});
