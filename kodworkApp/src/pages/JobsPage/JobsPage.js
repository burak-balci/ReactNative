import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useFetch from '../../hooks/useFetch';
import JobsCard from '../../components/JobsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './JobsPage.style';

const JobsPage = ({navigation}) => {
  const [page, setPage] = useState(1);
  const {loading, data, error} = useFetch(
    `https://www.themuse.com/api/public/jobs?page=${page}`,
  );

  const handleProductSelect = id => {
    navigation.navigate('JobDetail', {id, data});
  };

  const renderJobs = ({item}) => (
    <JobsCard jobs={item} onSelect={() => handleProductSelect(item.id)} />
  );

  const handleClick = type => {
    switch (type) {
      case 'increase':
        return setPage(page + 1);
      case 'decrease':
        return setPage(page - 1);
      default:
        return page;
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderJobs} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleClick('decrease')}
          disabled={page === 1}
          style={styles.button}>
          <Text style={styles.buttonText}>Previous Page</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleClick('increase')}
          style={styles.button}>
          <Text style={styles.buttonText}>Next Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobsPage;
