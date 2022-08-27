import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobsCard.style';

const JobsCard = ({jobs, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>{jobs.name}</Text>
        <Text style={styles.subtitle}>{jobs.company.name}</Text>
        <Text style={styles.location}>{jobs.locations[0].name}</Text>
        <Text style={styles.level}>{jobs.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobsCard;
