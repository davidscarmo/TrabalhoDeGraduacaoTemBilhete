import {StyleSheet} from 'react-native'; 


const styles = StyleSheet.create(
    {
        optionBlock:
        {
            borderWidth: 2,
            borderRadius: 8,
            borderColor: '#3062DB',
            height: 125,
            width: 165,
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center', 
            paddingHorizontal:10
        },
        optionBlockTitle:
        {
             fontSize: 16,
             textAlign: 'center', 
             fontWeight: 'bold', 
             marginVertical: 5,
        },
        optionButton: 
        {
            marginVertical:10
        }, 
        optionBlockSubtitle: 
        {
            textAlign: 'center'
        }
    }
    
); 

export default styles;
