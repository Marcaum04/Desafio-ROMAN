import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    Image,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();



class Cadastrar extends Component {

    render() {
        return (
            <View style={styles.overlay}>
                <ImageBackground
                    source={require('../../assets/img/Header2.png')}
                    style={StyleSheet.absoluteFillObject}>
                    <View style={styles.main}>

                        <View style={styles.mainHeaderRow}>
                            <Text style={styles.mainHeaderText}>{'Cadastro de Projetos'()}</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }

};