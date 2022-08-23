import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  const handleClick = meal => {
    navigation.navigate('Meals', {meal});
  };

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleClick(item.strCategory)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
