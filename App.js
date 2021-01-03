import React from 'react';
import { StyleSheet, Text,View,ImageBackground,Header} from 'react-native';
import DovizApi from './utils/DovizApi';
import EmtiaApi from './utils/EmtiaApi';

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



//const DovizImage ={require('./assets/DovizTL.jpg')};

function DovizScreen() {
  return (
    <View style={{flex:3}}>
      <View style={styles.buyAndSent}>
        <Text style={styles.padding}>Alış</Text>
        <Text style={{color:'green',fontWeight:'bold'}}>Satış</Text>
      </View>
      
      <DovizApi></DovizApi>
     </View>
  );
}

function EmtiaScreen() {
  return (
    // 
    <View style={{flex:1, alignItems:'stretch',justifyContent:'center'}}>
      <View style={{flex:2}}>
      <ImageBackground source={require('./assets/AltınTL.jpg')} style={styles.image}></ImageBackground>
      <View style={{backgroundColor:'dodgerblue'}}>
      <View style={styles.buyAndSent}>
      
        <Text style={styles.padding}>Alış</Text>
        <Text style={{color:'green',fontWeight:'bold'}}>Satış</Text>
      </View>
      </View>
    </View>
      <EmtiaApi></EmtiaApi>
    </View>
  );
}
const Tabs=createBottomTabNavigator();
const DovizStack = createStackNavigator();
const EmtiaStack = createStackNavigator();

const DovizStackScreen=()=>(
  <DovizStack.Navigator screenOptions={{ headerStyle: {  backgroundColor: 'dodgerblue'}, headerTintColor:'white',headerTitleAlign:'center'}} >
    <DovizStack.Screen name="DOVİZ/TL" component={DovizScreen}/>
  </DovizStack.Navigator>
);
const EmtiaStackScreen=()=>(
  <EmtiaStack.Navigator screenOptions={{ headerStyle: {  backgroundColor: 'dodgerblue'}, headerTintColor:'white',headerTitleAlign:'center'}}>
    <EmtiaStack.Screen name="EMTİA" component={EmtiaScreen}/>
  </EmtiaStack.Navigator>
)

function MyTabs() {
  return (
    <Tabs.Navigator 
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
     
    }}>
      <Tabs.Screen name="DÖVİZ" component={DovizStackScreen}/>
      <Tabs.Screen name="EMTİA" component={EmtiaStackScreen}/>
    </Tabs.Navigator>
  );
}
export default function App() {


  return (
  
    <NavigationContainer >
      <MyTabs/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    
  },
  padding:{
    paddingRight:60,
    color:'red',
    fontWeight:'bold',
    paddingLeft:60,
  },
  buyAndSent:{
    justifyContent:'center',
    flexDirection:'row'
  },
  image: {
    flex:1,
    resizeMode: "stretch",
    justifyContent: "center"
  },
});
