import React from 'react';
import {View, Text} from 'react-native';

const JobDetail = ({route}) => {
  const {id} = route.params;

  return (
    <View>
      <Text>JobDetail{id}</Text>
    </View>
  );
};

export default JobDetail;
