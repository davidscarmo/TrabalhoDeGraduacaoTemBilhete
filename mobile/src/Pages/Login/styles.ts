import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create(
    {
        container: 
        {
            flex: 1, 
            backgroundColor: '#EBEBEE',
        },
        headerLanding: 
        {
            backgroundColor: '#3062DB',
            justifyContent: 'center', 
            alignItems: 'center', 
            flex: 2,
        }, 
        headerLogo: 
        {
            height: 180,
            width: 210,
        },
        loginArea: 
        {
            flex: 1.8, 
            justifyContent: 'center', 
            alignItems: 'center', 
        },
        inputArea: 
        {
          top: -30,  
        } 
        ,
        textLabel: 
        {
            fontSize: 16, 
            color: '#3062DB'
        },
        inputLogin: 
        {
            height: 54, 
            width: 250,
            backgroundColor: '#FFF',
            borderColor: '#5686F9',
            borderWidth: 2,
            borderRadius: 8, 
            marginVertical: 10,
            textAlign: 'center',
        }, 
        loginButton:
        {
            top: -30,
            height: 40,
            width: 175, 
            backgroundColor: '#3062DB',
            borderRadius: 6,
            alignItems: 'center', 
            justifyContent: 'center',
        }, 
        loginButtonText: 
        {
            color: '#FFF',
        },
    }
)

export default styles;