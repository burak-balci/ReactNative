import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import JobDetail from './pages/JobDetail';
import UserProvider from './context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            options={{
              headerTitle: 'Implementation Consultant',
              headerTitleStyle: {color: '#EF5350'},
              headerTintColor: '#EF5350',
            }}
            name="JobDetail"
            component={JobDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
