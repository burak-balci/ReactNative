import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const {loading, data, error} = useFetch(process.env.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
