import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Main from './pages/main';

export default function Routes () {
    return (
        <NavigationContainer>

            <AppStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#da552f',
                    },
                    headerTintColor: '#fff',
                    headerShown: true,
                    title: 'JSHunt',
                    headerTitleAlign: 'center',
                }}
            >
                <AppStack.Screen name="Main" component={Main} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}