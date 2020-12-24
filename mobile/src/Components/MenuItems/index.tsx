import React from 'react'; 
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather as Icon} from '@expo/vector-icons';


export interface MenuItemsProps
{
    navigateTo: string,
    title: string, 
    icon: string, 
    subtitle: string 
}



const MenuItem: React.FC<MenuItemsProps> = ({navigateTo, title, icon , subtitle}) => 
{
    const {navigate} = useNavigation();

    return (
     
    <RectButton style={styles.optionButton} onPress={()=> navigate(`${navigateTo}`)}>
                    <View style={styles.optionBlock}>
                    <Text style={styles.optionBlockTitle}>{title}</Text>
                            <Icon name={icon} size={36} color="#3062DB" />
                            <Text style={styles.optionBlockSubtitle}>{subtitle}</Text>
                    </View>
    </RectButton>          
    )
     
}

                   
export default MenuItem; 