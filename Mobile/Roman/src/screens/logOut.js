import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

class LogOut extends Component {

    realizarlogout = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            this.props.navigation.navigate('Login');
        } catch (error) {
            console.warn(error);
        }

    }



    render() {
        return (
            <View style={styles.pagina}>
                <Image source={require('../../assets/img/logout.png')}
                    style={styles.iconeS} />
                <TouchableOpacity
                    title="Logout"
                    style={styles.sair}
                    onPress={() => this.realizarlogout()}
                >
                    <Text style={styles.textosair}>Sair</Text>
                </TouchableOpacity>
            </View>
        )
    };

};

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: '#30253FB5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sair: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 240,
        backgroundColor: '#30253F',
        borderWidth: 1,
        borderRadius: 4,
        shadowOffset: { height: 1, width: 1 },
    },
    textosair: {
        fontSize: 18,
        fontFamily: 'Open Sans Light',
        color: '#FFFFFF',
        letterSpacing: 6,
        textTransform: 'uppercase',
    }

});

export default LogOut;