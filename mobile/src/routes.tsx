import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native'; 
import {createStackNavigator} from '@react-navigation/stack'; 

const{Navigator, Screen } = createStackNavigator(); 

import Scraps from './Pages/Scraps'; 
import Login from './Pages/Login';
import Home from './Pages/Home'
import SendScrap from './Pages/SendScrap'; 
import Announcements from './Pages/Announcements'; 
import DocumentRequests from './Pages/DocumentRequests'; 
const Routes = () => 
{
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="Scraps" component={Scraps} />
                <Screen name="SendScrap" component={SendScrap} />
                <Screen name="Announcements" component={Announcements}/>
                <Screen name="DocumentRequest" component={DocumentRequests}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes; 