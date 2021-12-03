import AsyncStorage from '@react-native-async-storage/async-storage';

export const usuarioAutenticacao = () => AsyncStorage.getItem('userToken') !== null;

export const parseJWT = async () => {

    let base64 = await AsyncStorage.getItem('userToken').split('.')[1];

    return JSON.parse(window.atob(base64));
}