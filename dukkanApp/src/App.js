import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useDispatch, useSelector} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const App = () => {
  const userSession = useSelector(s => s.user);
  const isAuthLoading = useSelector(s => s.isAuthLoading);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginPage"
            component={Login}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'Dükkan',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="white"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
            }}
            name="ProductsPage"
            component={Products}
          />
          <Stack.Screen
            options={{
              title: 'Detay',
              headerStyle: {backgroundColor: '#64b5f6'},
              headerTitleStyle: {color: 'white'},
              headerTintColor: 'white',
            }}
            name="DetailPage"
            component={Detail}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
