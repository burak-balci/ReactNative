import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleStyle: {color: '#FFA500'},
            headerTitleAlign: 'center',
          }}
          name="Categories"
          component={Categories}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Meals" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
