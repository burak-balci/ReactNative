import React from 'react';
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './JobDetail.style';

const JobDetail = ({route}) => {
  const {id, data} = route.params;
  const filtered = data.results.filter(item => item.id === id);

  const source = {
    html: filtered[0].contents,
  };

  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <View style={styles.introductory}>
          <Text style={styles.title}>Implementation Consultant</Text>
          <View style={styles.inner_container}>
            <Text style={styles.key}>Locations:</Text>
            <Text style={styles.value}>{filtered[0].locations[0].name}</Text>
          </View>
          <View style={styles.inner_container}>
            <Text style={styles.key}>Job Level:</Text>
            <Text style={styles.value}>{filtered[0].levels[0].name}</Text>
          </View>
          <Text style={styles.subtitle}>Job Detail</Text>
        </View>
        <View style={styles.desc}>
          <RenderHTML contentWidth={width} source={source} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default JobDetail;
