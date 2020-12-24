import React from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import Logo from '../../Assets/Images/TemBilheteLogo.png'; 
import { useNavigation } from '@react-navigation/native';
import MenuItem from '../../Components/MenuItems'; 
const Home = ()=> 
{
    const {navigate} = useNavigation();

    
    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.topBarArea1}>
                    <RectButton onPress={()=>{navigate('Login');}}>
                        <Text style={styles.exitApp}> Sair</Text>
                    </RectButton>
                </View>
                <View style={styles.topBarArea2}>
                    <Text style={styles.topBarTitle}>Home</Text>
                </View>
                <Image source={Logo} resizeMode='contain' style={styles.topBarArea3}/>
            </View>
            <View style={styles.headerContent}>
                <Text style={styles.headerContentText}>
                O seu app para 
                comunicação escolar.
                </Text>
            </View>

            <ScrollView>
                <View style={styles.optionsRowArea}>
                    <MenuItem 
                        navigateTo='Scraps' 
                        title='Tem Recado?' 
                        icon='message-circle' 
                        subtitle='ver recados'/>
                    <MenuItem 
                        navigateTo='SendScrap' 
                        title='Mandar Recado' 
                        icon='send' 
                        subtitle='enviar recado'/>
                </View>
                <View style={styles.optionsRowArea}>
                <MenuItem 
                        navigateTo='Announcements' 
                        title='Comunicados' 
                        icon='bell' 
                        subtitle='ver comunicados'/>
                <MenuItem navigateTo='DocumentRequest' 
                title='Documentos'
                icon='paperclip'
                subtitle='pedir documento' />
                </View>
            </ScrollView>
        </View>
    )
}

export default Home; 