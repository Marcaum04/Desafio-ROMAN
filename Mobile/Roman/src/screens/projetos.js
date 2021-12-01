import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';

import api from '../services/api';

class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: []
        };
    };

    buscarProjetos = async () => {
        const resposta = await api.get('/Projetos');
        const dadosDaApi = resposta.data;
        this.setState({ listaProjetos: dadosDaApi });
    };

    componentDidMount() {
        this.buscarProjetos();
    }

    render() {
        return (
            <View style={styles.main}>
                {/* Cabeçalho - Header */}
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Text style={styles.mainHeaderText}>{'Projetos'.toUpperCase()}</Text>
                    </View>
                    <View style={styles.mainHeaderLine} />
                </View>

                {/* Corpo - Body */}
                <View style={styles.mainBody}>
                    <FlatList
                        contentContainerStyle={styles.mainBodyContent}
                        data={this.state.listaProjetos}
                        keyExtractor={item => item.idProjeto}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }

    renderItem = ({ item }) => (
        <View style={styles.flatItemRow}>
            <View style={styles.flatItemContainer}>
                <Text style={styles.flatItemTitle}>{item.nomeProjeto}</Text>
                <Text style={styles.flatItemInfo}>{item.descricao}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    // conteúdo da main
    main: {
      flex: 1,
      backgroundColor: '#FFF',
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
      color: '#999',
    },
    // linha de separação do cabeçalho
    mainHeaderLine: {
      width: 220,
      paddingTop: 10,
      borderBottomColor: '#999',
      borderBottomWidth: 1,
    },
  
    // conteúdo do body
    mainBody: {
      flex: 4,
    },
    // conteúdo da lista
    mainBodyContent: {
      paddingRight: 50,
      paddingLeft: 50,
    },
    // dados do evento de cada item da lista (ou seja, cada linha da lista)
    flatItemRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: 20,
    },
    flatItemContainer: {
      flex: 1,
    },
    flatItemTitle: {
      fontSize: 16,
      color: '#333',
    },
    flatItemInfo: {
      fontSize: 12,
      color: '#999',
      lineHeight: 24,
    },
    flatItemImg: {
      justifyContent: 'center',
    },
    flatItemImgIcon: {
      width: 26,
      height: 26,
      tintColor: '#B727FF',
    },
  });

export default Projetos;