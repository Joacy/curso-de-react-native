import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/main';
import Product from './pages/product';

export default function Routes () {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={
                {
                    headerStyle: {
                        backgroundColor: '#da552f',
                    },
                    headerTintColor: '#fff',
                    headerShown: true,
                    title: 'JSHunt',
                    headerTitleAlign: 'center',
                }
            }>
                <AppStack.Screen name="JSHunt" component={Main} />
                <AppStack.Screen name="Product" component={Product} />
            </AppStack.Navigator>

        </NavigationContainer >
    );
}