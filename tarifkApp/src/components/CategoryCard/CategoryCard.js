import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
      <Text style={styles.text}>{category.strCategory}</Text>
    </View>
  );
};

export default CategoryCard;
