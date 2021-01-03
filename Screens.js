import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button,Text } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

export const Home =()=>(
    <ScreenContainer>
        <Text>Master List Screen</Text>
        <Button title="React Native by Example" onPress={() => alert("todo!")}/>
        <Button title=" React native School" onPress={()=> alert("todo!")}/>
    </ScreenContainer>
);
export const Profile =()=>(
    <ScreenContainer>
        <Text>Master List Screen</Text>
        <Button title="React Native by Example" onPress={() => alert("todo!")}/>
        <Button title=" React native School" onPress={()=> alert("todo!")}/>
    </ScreenContainer>
);