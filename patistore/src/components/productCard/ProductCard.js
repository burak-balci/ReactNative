import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ProductCard.styles';

const ProductCard = ({products}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: products.imgURL,
        }}
      />
      <View style={styles.descContainer}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {!products.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductCard;
