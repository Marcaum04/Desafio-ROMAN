import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import api from '../services/api';
import {parseJWT} from '../services/auth';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InputMultiple = (props) => {
    return (
        <TextInput
            {...props}
            editable
        />
    );
}

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idTema: 0,
            nomeProjeto: '',
            idUsuario: parseJWT().Jti,
            Descricao: ''
        }
    }

    Cadastrar = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.post('/projetos',
                {
                    idTema: this.state.idTema,
                    nomeProjeto: this.state.nomeProjeto,
                    idUsuario: this.state.idUsuario,
                    descricao: this.state.descricao
                },
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    }
                });

            if (resposta.status == 201) {
                console.warn("Projeto cadastrado")
                this.setState({
                    idTema: 0,
                    nomeProjeto: '',
                    descricao: ''
                })
                console.warn(this.state.idUsuario)
            }
        } catch (error) {
            console.warn(error);
        }


    }

    render() {
        return (
            <View style={styles.pagina}>
                <ScrollView style={styles.ScrollView} >
                    <Image
                        style={styles.headerImage}
                        source={require('../../assets/img/header-logo.png')} />
                    <View style={styles.mainHeader}>
                        <View style={styles.mainHeaderRow}>
                            <Text style={styles.mainHeaderText}>{'Cadastro de Projetos'.toUpperCase()}</Text>
                        </View>
                        <View style={styles.mainHeaderLine} />
                    </View>
                    <View style={styles.main}>
                        <TextInput
                            style={styles.input}
                            onChangeText={nomeProjeto => this.setState({ nomeProjeto })}
                            value={this.state.nomeProjeto}
                            placeholder="Titulo do projeto"
                            keyboardType="default"
                        />
                        <Picker
                            selectedValue={this.state.idTema}
                            onValueChange={(itemValue) => this.setState({ idTema: itemValue })}
                            style={styles.picker}>
                            <Picker.Item label="Tema do Projeto" value="0" />
                            <Picker.Item label="Banco de Dados" value="1" />
                            <Picker.Item label="Back-End" value="2" />
                            <Picker.Item label="UI/UX" value="3" />
                            <Picker.Item label="Front-End" value="4" />
                            <Picker.Item label="Mobile" value="5" />
                            <Picker.Item label="NoSQL" value="6" />
                        </Picker>
                        <View style={styles.bordapicker}></View>
                        <InputMultiple
                            multiline
                            numberOfLines={4}
                            onChangeText={descricaoProjeto => this.setState({ descricaoProjeto })}
                            value={this.state.descricaoProjeto}
                            style={styles.inputMultiple}
                            placeholder="Descrição do projeto"
                        />
                        <TouchableOpacity
                            title="Cadastro"
                            style={styles.btn}
                            onPress={() => this.Cadastrar()}
                        >
                            <Text style={styles.btnText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    };

};

const styles = StyleSheet.create({
    pagina: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center'
    },
    ScrollView: {
        width: '100%'
    },

    headerImage: {
        width: '100%',
        flex: 1,
        marginBottom: 30
    },
    // cabeçalho
    mainHeader: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainHeaderRow: {
        flexDirection: 'row',
    },
    // texto do cabeçalho
    mainHeaderText: {
        fontSize: 16,
        letterSpacing: 5,
        color: '#333',
    },

    // linha de separação do cabeçalho
    mainHeaderLine: {
        width: 220,
        paddingTop: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
      },

    // estilo dos ícones da tabBar
    main: {
        flex: 2,
        marginTop: 40,
        width: '100%',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
    },

    picker: {
        width: '87%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        marginTop: 20
    },

    bordapicker: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    },

    inputMultiple: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: '#FFF',
        marginTop: 20,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        width: 240,
        backgroundColor: '#30253F',
        borderWidth: 1,
        borderRadius: 4,
        shadowOffset: { height: 1, width: 1 },
        marginTop: 30
    },

    btnText: {
        fontSize: 18,
        fontFamily: 'Open Sans Light',
        color: '#FFFFFF',
        letterSpacing: 3,
        textTransform: 'uppercase',
    }
});

export default Cadastro;