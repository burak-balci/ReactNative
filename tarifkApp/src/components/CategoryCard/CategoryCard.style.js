import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 3,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: '#ECEFF1',
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  text: {
    marginLeft: 15,
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
