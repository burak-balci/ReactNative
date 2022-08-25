import React from 'react';
import {View, FlatList, Button} from 'react-native';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {useDispatch} from 'react-redux';

const Products = ({navigation}) => {
  const dispatch = useDispatch;
  const {loading, data, error} = useFetch(process.env.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <Button
        title="Log out"
        onPress={() => dispatch({type: 'SET_USER', payload: {user: null}})}
      />
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
