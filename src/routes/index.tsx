import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from 'src/screens/SignIn';
import { Login } from 'src/screens/Login';
import { SignUp } from 'src/screens/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'src/screens/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="SignIn"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                     <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    );
}