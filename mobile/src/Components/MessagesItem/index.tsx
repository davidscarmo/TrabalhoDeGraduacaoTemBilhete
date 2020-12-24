import React, { useEffect, useState } from 'react'; 
import styles from './styles'; 
import { View, Text } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../Services/api';
interface MessageProps 
{
    id: number,
    icon: string, 
    title: string, 
    subject: string, 
    message: string, 
    status: string, 
}

const MessageItem: React.FC<MessageProps> = ({icon, title, subject, message, id, status}) => 
{
    const [styleButton, setStyleButton] = useState(true);  
    
    const checkStatus = () => 
    {
        if(status === 'no')
        {
            setStyleButton(true);
        }
        else if(status ==='yes')
        {
            setStyleButton(false); 
        }
    }
    const handleSawMessage = async(param: number) => 
    {
        
        try
        {
            const response = await api.put('scraps', 
            {
                params:
                {
                    id: param,
                
                }
            });
            console.log(response.data);
        setStyleButton(false);
        }
        catch(e)
        {
            console.log(e); 
        }
    }
    useEffect(()=> 
    {
        checkStatus(); 
    }, []);
    return (
        <View style={styles.scrapContent}>
                    <View style={styles.scrapHeader}>
                        <Icon name={styleButton ? icon : 'check'} size={24} color="#3062DB"/>
                        <Text style={styles.scrapHeaderText}>
                            {title}
                        </Text>
                    </View>
                    <Text style={styles.scrapHeaderSubject}>
                        {subject}
                    </Text>
                    <Text>
                    {message}
                    </Text>
                    <RectButton 
                    onPress={() => handleSawMessage(id)}
                    style={styleButton ? styles.scrapButton : styles.scrapButtonDisable}>
                    <Text style={styles.scrapButtonText}> Ok, eu vi o bilhete.</Text>    
                </RectButton>
            </View>
    ); 
}

export default MessageItem; 