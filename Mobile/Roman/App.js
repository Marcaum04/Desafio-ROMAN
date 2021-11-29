import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  };

  realizarLogin = async () => {
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/login', {
      email: this.state.email,
      senha: this.state.senha,
    });

    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    if (resposta.status == 200) {
      this.props.navigation.navigate('Main');
    }

    console.warn(token);
  };

  render() {
    return (
      <View style={styles.main}>
        <Image
          style={styles.header}
          source={require('./assets/img/Header.png')} />
        <Image
          style={styles.logo}
          source={require('./assets/img/logo.png')} />
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
    flex: 0.30,
    width: '100%'
  },
  logo: {
    flex: 0.15,
    width: '35%'
  },
  div: {
    
  },
  inputLogin: {
    width: 240,
    fontSize: 18,
    color: '#FFF',
    borderBottomColor: '#BBB',
    borderBottomWidth: 2,
  },
  btnLoginText: {
    fontSize: 18, //aumentar um pouco
    fontFamily: 'Open Sans Light', //troca de fonte
    color: '#FFFFFF', //mesma cor identidade
    letterSpacing: 6, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
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

export default App;
