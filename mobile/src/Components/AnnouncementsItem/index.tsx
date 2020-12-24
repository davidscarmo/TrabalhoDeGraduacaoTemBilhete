import React, { useEffect, useState } from 'react'; 
import styles from './styles'; 
import { View, Text } from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../Services/api';
interface AnnouncementsProps 
{
    icon: string, 
    title: string, 
    subject: string, 
    message: string, 
}

const AnnouncementsItem: React.FC<AnnouncementsProps> = ({icon, title, subject, message}) => 
{
    return (
        <View style={styles.scrapContent}>
                    <View style={styles.scrapHeader}>
                        <Icon name={icon} size={24} color="#3062DB"/>
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
            </View>
    ); 
}

export default AnnouncementsItem; 