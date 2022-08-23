import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';

const Meals = ({route}) => {
  const {meal} = route.params;
  const {data, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`,
  );

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  const renderMeals = ({item}) => <MealCard meal={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
