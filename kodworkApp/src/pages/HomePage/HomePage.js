import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import JobsPage from '../JobsPage';
import FavoritedJobsPage from '../FavoritedJobsPage';

const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerTitle: 'Jobs',
          headerTitleStyle: {color: '#EF5350'},
          headerTitleAlign: 'center',
        }}
        name="Jobs"
        component={JobsPage}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Favorited Jobs"
        component={FavoritedJobsPage}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
