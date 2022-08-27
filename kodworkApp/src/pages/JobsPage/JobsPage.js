import React from 'react';
import {View, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';

const JobsPage = () => {
  const {loading, data, error} = useFetch(
    'https://www.themuse.com/api/public/jobs?page=1',
  );

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>JobsPage</Text>
    </View>
  );
};

export default JobsPage;
