import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    padding: 4,
    borderRadius: 8,
    borderColor: '#BDBDBD',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 4,
  },
  location: {
    backgroundColor: '#EF5350',
    color: 'white',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 20,
    fontWeight: 'bold',
    fontSize: 13,
  },
  level: {
    color: '#EF5350',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    fontSize: 17,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EF5350',
    padding: 8,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
