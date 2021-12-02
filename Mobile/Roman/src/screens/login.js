import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'adm@adm',
      senha: 'adm',
    };
  };

  realizarLogin = async () => {
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/Login', {
      email: this.state.email,
      senha: this.state.senha,
    });

    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    if (resposta.status == 200) {
      console.warn("teste")
      this.props.navigation.navigate('Projetos');
    }

    console.warn(token);
  };

  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.header}
          source={require('../../assets/img/Header.png')} />
        <Image
          style={styles.logo}
          source={require('../../assets/img/logo.png')} />
        <View style={styles.div}>
          <TextInput
            style={styles.inputLogin}
            placeholder="Email"
            placeholderTextColor="#BBB"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="Senha"
            placeholderTextColor="#BBB"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={senha => this.setState({ senha })}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.realizarLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flex: 0.45,
    width: '100%'
  },
  logo: {
    flex: 0.25,
    width: '35%'
  },
  div: {
    marginBottom: 80
  },
  inputLogin: {
    width: 240,
    fontSize: 18,
    color: '#000',
    borderBottomColor: '#BBB',
    borderBottomWidth: 2,
    marginBottom: 15,
  },
  btnLoginText: {
    fontSize: 18,
    fontFamily: 'Open Sans Light',
    color: '#FFFFFF', 
    letterSpacing: 6, 
    textTransform: 'uppercase', 
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 38,
    width: 240,
    backgroundColor: '#30253F',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {height: 1, width: 1},
  },
});

export default Login;