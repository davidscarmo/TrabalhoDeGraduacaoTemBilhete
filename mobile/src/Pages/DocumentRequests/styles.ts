import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create( 
    {
        container: 
        {
            flex: 1 , 
            backgroundColor: '#EBEBEE',
        }, 
        formBlock:
        {
            justifyContent: 'center',
            alignItems: 'center', 
        },
        formArea: 
        {
            width: 286, 
            height: 420,
            borderRadius: 8,
            padding: 20,
            marginVertical: 10,
            position: 'relative', 
            top: -50,
            backgroundColor: '#FFF', 
            justifyContent: 'center',
            alignItems: 'flex-start' 
        },
        formAreaTitle:
        {
            color: '#3062DB', 
            fontSize: 22,
            fontWeight: '600',
            alignSelf: 'center', 
            marginTop: -30,
            marginBottom: 5,
        }
        ,
        messageAreaLabel:
        {
            color: '#3062DB', 
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 5
        },
        inputAndroid: {
            fontSize: 16,
            width: 250, 
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: '#3062DB',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30, // to ensure the text is never behind the icon
          }
        ,
        messageAreaInput: 
        {
            width: 250,
            height: 100, 
            borderWidth: 1, 
            borderRadius: 5,
            borderColor: '#3062DB',
            paddingHorizontal: 10
        }
        ,
        sendButton:
        {
            height: 40,
            width: 175, 
            marginVertical: 20,
            backgroundColor: '#3062DB',
            borderRadius: 6,
            alignItems: 'center', 
            justifyContent: 'center',
            alignSelf: 'center', 
        }, 
        sendButtonText: 
        {
            color: '#FFF',
        }
    }
)

export default styles; 