import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import FavoriteJobsCard from '../../components/FavoriteJobsCard';
import {useDispatch} from 'react-redux';

const FavoritedJobsPage = () => {
  const favoriteJob = useSelector(s => s.favoriteJob);
  const dispatch = useDispatch();

  const handleRemove = item => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {item}});
  };

  const renderFavoritedJobs = ({item}) => (
    <FavoriteJobsCard onClick={handleRemove} jobs={item} />
  );

  return (
    <View>
      <FlatList data={favoriteJob} renderItem={renderFavoritedJobs} />
    </View>
  );
};

export default FavoritedJobsPage;
