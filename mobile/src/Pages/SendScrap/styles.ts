import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create(
    {
        container:
        { 
            flex: 1, 
            backgroundColor: '#EBEBEE',
        },
 
    messageBlock:
    {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    messageArea: 
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
        alignItems: 'center' 
    },
    messageAreaTitle:
    {
        color: '#3062DB', 
        fontSize: 22,
        fontWeight: '600', 
        
    }
    ,
    messageAreaInput: 
    {
        width: 200,
        height: 280, 
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: '#3062DB',
        marginVertical: 10, 
        paddingHorizontal: 10
    }
    ,
    sendButton:
    {
        height: 40,
        width: 175, 
        backgroundColor: '#3062DB',
        borderRadius: 6,
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    sendButtonText: 
    {
        color: '#FFF',
    }
    }); 

    export default styles;