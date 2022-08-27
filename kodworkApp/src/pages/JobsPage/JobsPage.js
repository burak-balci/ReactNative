import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobsCard from '../../components/JobsCard';

const JobsPage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {loading, data, error} = useFetch(
    `https://www.themuse.com/api/public/jobs?page=${page}`,
  );

  const handleProductSelect = id => {
    navigation.navigate('JobDetail', {id});
  };

  const renderJobs = ({item}) => (
    <JobsCard jobs={item} onSelect={() => handleProductSelect(item.id)} />
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
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default JobsPage;
