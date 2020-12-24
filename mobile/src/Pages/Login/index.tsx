import React, { useState, ReactPropTypes } from 'react'; 
import {View, Text, Image, Alert} from 'react-native';
import styles from './styles';

import Logo from '../../Assets/Images/TemBilheteLogo.png';
import { Link, useNavigation } from '@react-navigation/native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import api from '../../Services/api';
import AsyncStorage from '@react-native-community/async-storage';


const Login = () => 
{
    const {navigate} = useNavigation();
    
    const [raInput, setRaInput ] = useState('');


    const storeRa = async (value: string ) => {
        try {
          await AsyncStorage.setItem('teste', value.toString()); 
        } catch (e) {
          
        }
      }
    
      const HandleLogin = async ()=>
    {
        
         await api.get('loginMobile', 
        {
            params:
            {
                ra: raInput,
            }   
        }).then( ()=>
        {   
              storeRa(raInput);
              navigate('Home'); 
        })
        .catch(() =>
        {
                Alert.alert('O RA informado não existe\nTente Novamente! '); 
        } ); 


    }
    return (
        <View style={styles.container}>
            <View style={styles.headerLanding}>
                <Image source={Logo}  style={styles.headerLogo}/>
            </View>

            <View style={styles.loginArea}> 
                <View style={styles.inputArea}>   
                    <Text style={styles.textLabel}> R.A do Aluno</Text>
                    <TextInput 
                    style={styles.inputLogin}
                    onChangeText={text => setRaInput(text)}
                    placeholder="Informe o R.A. do aluno"/>
                </View>               
                <RectButton 
                onPress={HandleLogin}
                style={styles.loginButton}>
                    <Text style={styles.loginButtonText}> Entrar</Text>    
                </RectButton>
            </View>
        </View>
    ); 
}

export default Login;