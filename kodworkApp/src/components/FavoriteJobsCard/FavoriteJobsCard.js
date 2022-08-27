import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './FavoriteJobsCard.style';

const JobsCard = ({jobs, onClick}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>{jobs[0].name}</Text>
        <Text style={styles.subtitle}>{jobs[0].company.name}</Text>
        <Text style={styles.location}>{jobs[0].locations[0].name}</Text>
        <Text style={styles.level}>{jobs[0].levels[0].name}</Text>
        <TouchableOpacity
          onPress={() => onClick(jobs[0])}
          style={styles.button}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobsCard;
