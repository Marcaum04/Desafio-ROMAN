import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const bottomTab = createBottomTabNavigator();

import Cadastro from './cadastro';
import Projetos from './projetos';
import LogOut from './logOut';

class Main extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='Projetos'
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Cadastro') {
                  return(
                    <Image
                      source={require('../../assets/img/post.png')}
                      style={styles.iconeC}
                    />
                  )
                }
                if (route.name === 'Projetos') {
                  return(
                    <Image
                      source={require('../../assets/img/projetos.png')}
                      style={styles.iconeP}
                    />
                  )
                }
                if (route.name === 'LogOut') {
                  return(
                    <Image
                      source={require('../../assets/img/logout.png')}
                      style={styles.iconeS}
                    />
                  )
                }
              },

              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#30253FB5',
              tabBarInactiveBackgroundColor: '#30253F',
              tabBarStyle: { height: 60 },
                         
            }) }
          >
            <bottomTab.Screen name="Projetos" component={Projetos} />
            <bottomTab.Screen name="Cadastro" component={Cadastro} />
            <bottomTab.Screen name="LogOut" component={LogOut} />
          </bottomTab.Navigator>        

      </View>
    );
  }
  
};

const styles = StyleSheet.create({

  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },

  // estilo dos ícones da tabBar
  iconeC: {
    width: 45,
    height: 45,   
  },

  iconeP: {
    width: 50,
    height: 50   
  },

  iconeS: {
    width: 55,
    height: 55   
  },

});

export default Main;