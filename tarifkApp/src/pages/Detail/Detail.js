import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import DetailCard from '../../components/DetailCard';

const Detail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  if (loading) {
    return <Text>Loading</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      <DetailCard data={data} />
    </View>
  );
};

export default Detail;
