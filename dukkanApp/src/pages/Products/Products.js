import React, {useState, useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Products = () => {
  const [data, setData] = useState([]);
  // const renderProduct = ({item}) => null;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: productData} = await axios.get(process.env.API_URL);
    setData(productData);
  };

  const renderProduct = ({item}) => <ProductCard product={item} />;

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
};

export default Products;
