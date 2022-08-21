import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';

const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator}></View>;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={music_data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;
