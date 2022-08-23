import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: deviceSize.height / 4,
    borderRadius: 10,
  },
  body_container: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '103%',
  },
  text_container: {
    flex: 0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '97%',
    padding: 12,
    marginVertical: 10,
    alignItems: 'flex-end',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
