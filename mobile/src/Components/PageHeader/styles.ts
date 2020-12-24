import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        topBar: 
        {
            height: 90,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#3062DB',
        },
        logo:
        {
            height:40,
            marginTop: 20,
        },
       topBarArea1: 
       {
           flex: 1,
           height: 50,
           marginTop: 20,
           alignItems: 'center',
           justifyContent: 'center',
       },
       topBarArea2: 
       {
           flex: 2,
           height: 50,
           marginTop: 20,
           alignItems: 'center',
           justifyContent: 'center',
       },
       topBarArea3: 
       {
           flex: 1,
           height: 50,
           marginTop: 20,
       },
       topBarTitle: 
       {
           color: '#FFFFFF',
           fontSize: 18,
       }, 
       headerContent:
       {
           height: 250,
           backgroundColor: '#5686F9',
           flexDirection: 'column',
           justifyContent: 'center', 
           alignItems: 'center',
           paddingHorizontal: 13,
           paddingBottom: 10,
       },
       headerContentText: 
       {
           color: '#ffffff',
           fontSize: 25,
       }, 
    }
); 

export default styles; 