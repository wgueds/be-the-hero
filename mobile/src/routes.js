import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

/**
 * routes
 */
import Incidents from './pages/Incidents';
import Details from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incident' component={Incidents} />
                <AppStack.Screen name='Detail' component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}