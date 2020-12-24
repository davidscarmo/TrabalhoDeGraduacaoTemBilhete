import React, { useState, useEffect } from 'react'; 
import { View} from 'react-native';


import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import api from '../../Services/api';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../Components/PageHeader';

import MessageItem from '../../Components/MessagesItem';

interface ScrapsProps 
{
    id: number; 
    subject: string; 
    message: string; 
    status: string; 
    studentClass_id: number;
}


const Scraps = () => 
{
    const [scraps, setScraps] = useState([]); 
    const [id, setId] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [teste, setTeste] = useState(false); 
    const {goBack, navigate} = useNavigation(); 
 
    const getData = async () => {
        if(id.length !== 9)
        {

        try {

          const value = await AsyncStorage.getItem('teste')
          if(value !== null) {
              setId(value);
              console.log(value);
              setTeste(true);
          }
        } catch(e) {
            alert(e);
        }
        }
      } 
    const handleLoadScraps = async ()=>
    {
        if(id != '')
        try
        {
            
            const response = await api.get('scraps', 
            {
                params:
                {
                    id,
                
                }
            });
    
            setScraps(response.data);
            setTeste(false);
        }
        catch(err)
        {
            setTeste(true);  
        }
    }; 

   
    useEffect(() =>
    {
        getData();
       
    }, [])

    useEffect(() =>
    {
        handleLoadScraps();
    }, [teste === true]); 
    return(
        <View style={styles.container}>
           <PageHeader barTitle='Recados' headerTitle='Confira aqui os recados do aluno.' />

        <ScrollView style={styles.scrollView} >
            {scraps.map((scrap: ScrapsProps, index) =>
            {
                let iconImg = 'mail'; 
                if(scrap.status == 'yes')
                {
                    iconImg = 'check';
                }
                return(
                    <MessageItem 
                        key={scrap.id} 
                        status={scrap.status}
                        id={scrap.id}
                        icon={iconImg}
                        title={`Recado #${index + 1}`} 
                        subject={scrap.subject} 
                        message={scrap.message} />
           
                )
            })}     
        </ScrollView>
           
    </View>
    ); 
}

export default Scraps;