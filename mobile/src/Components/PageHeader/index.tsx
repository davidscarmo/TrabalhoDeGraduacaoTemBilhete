import React from 'react'; 
import {View, Text, Image} from 'react-native';
import Logo from '../../Assets/Images/TemBilheteLogo.png'; 
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles'; 
interface HeaderProps 
{
    barTitle: string, 
    headerTitle: string
}

const PageHeader: React.FC<HeaderProps> = ({barTitle, headerTitle}) => 
{
    const {goBack, navigate} = useNavigation(); 
    return( 
    <>
            <View style={styles.topBar}>
                <View style={styles.topBarArea1}>
                    <RectButton onPress={() => goBack()}>
                        <Icon name='arrow-left' size={36} color="#ffffff"/>
                    </RectButton>
                </View>
                <View style={styles.topBarArea2}>
                    <Text style={styles.topBarTitle}>{barTitle}</Text>
                </View>
                <Image source={Logo} resizeMode='contain' style={styles.topBarArea3}/>
            </View>
            <View style={styles.headerContent}>
                <Text style={styles.headerContentText}>
                    {headerTitle}
                </Text>
            </View>
      </>
    ); 
}

export default PageHeader; 