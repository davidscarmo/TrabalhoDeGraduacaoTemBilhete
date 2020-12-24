import React, { useState, useEffect } from 'react'; 
import { View} from 'react-native';


import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import api from '../../Services/api';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeader from '../../Components/PageHeader';

import AnnouncementsItem from '../../Components/AnnouncementsItem';

interface AnnouncementsProps 
{
    id: string, 
    subject: string, 
    message: string, 
}


const Announcements = () => 
{
    const [announcements, setAnnouncements] = useState([]); 
  
    const [teste, setTeste] = useState(false); 
 
    const handleLoadAnnouncements = async ()=>
    {
        try
        {
            
            const response = await api.get('announcements');
    
            setAnnouncements(response.data);
            setTeste(false);
        }
        catch(err)
        {
            setTeste(true);  
        }
    }; 


    useEffect(() =>
    {
        handleLoadAnnouncements();
    }, []); 
    return(
        <View style={styles.container}>
           <PageHeader barTitle='Comunicados' headerTitle='Confira aqui os comunicados da escola.' />

        <ScrollView style={styles.scrollView} >
            {announcements.map((announcement: AnnouncementsProps) =>
            {
                return(
                    <AnnouncementsItem 
                        key={announcement.id} 
                        icon='bell' 
                        title='Comunicado' 
                        subject={announcement.subject} 
                        message={announcement.message} />
           
                )
            })}     
        </ScrollView>
           
    </View>
    ); 
}

export default Announcements;