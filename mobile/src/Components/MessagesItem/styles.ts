import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create(
    {
        scrapContent:
        {
             backgroundColor: '#fff', 
             borderWidth: 1, 
             borderColor: '#e6e6f0',
             borderRadius: 8, 
             marginBottom: 36, 
             overflow: 'hidden',
            
             marginHorizontal: 20,
             
             padding: 15,
        }, 
        scrapHeader: 
        {
            height: 30,
            flexDirection: 'row',
            alignItems: 'center', 
            marginVertical: 10,
        }, 
        scrapHeaderText: 
        {
            color: '#3062DB',
            fontSize: 22,
            alignSelf: 'center',
            marginHorizontal: 70,
        }, 
        scrapHeaderSubject: 
        {
            marginVertical: 5,
            fontWeight: 'bold',
        }, 
        scrapButton:
        {
            marginTop: 10,
            height: 40,
            width: 175, 
            backgroundColor: '#3062DB',
            borderRadius: 6,
            alignSelf: 'center',
            alignItems: 'center', 
            justifyContent: 'center',
        }, 
        scrapButtonText: 
        {
            color: '#FFF',
        },
        scrapButtonDisable: 
        {
            backgroundColor: '#FFF',
         
        }
    }
); 

export default styles; 