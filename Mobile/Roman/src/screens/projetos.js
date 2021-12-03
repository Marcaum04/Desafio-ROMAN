import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
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
              <Image
              style={styles.headerImage}
              source={require('../../assets/img/header-logo.png')}/>
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
                <Text style={styles.flatItemTitle}>{item.nomeProjeto} :</Text>
                <Text style={styles.flatItemInfo}
                numberOfLines={1}>{item.descricao}</Text>
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
    headerImage: {
      width: '100%',
      flex: 1,
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
  
    // conteúdo do body
    mainBody: {
      flex: 4,
    },
    // conteúdo da lista
    mainBodyContent: {
      paddingRight: 10,
      paddingLeft: 10,
    },
    // dados do evento de cada item da lista (ou seja, cada linha da lista)
    flatItemRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      marginTop: 20,
    },
    flatItemContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    flatItemTitle: {
      fontSize: 16,
      color: '#333',
    },
    flatItemInfo: {
      fontSize: 14,
      color: '#555',
      lineHeight: 16,
      width: '75%',
      marginLeft: 8
    },
  });

export default Projetos;