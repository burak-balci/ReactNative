import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import ProductCard from './components/productCard';
import product_data from '../product_data.json';

const App = () => {
  const [text, setText] = useState('');
  const renderProducts = ({item}) => <ProductCard products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput
        placeholder="Ara..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <FlatList
        numColumns={2}
        style={styles.flatlist}
        data={product_data}
        keyExtractor={product_data.id}
        renderItem={renderProducts}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#ECEFF1',
    borderRadius: 8,
    marginHorizontal: 5,
    padding: 10,
    marginTop: 5,
  },
});

export default App;
