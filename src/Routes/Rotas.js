import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';
import Home from '../Pages/Home';
import Materias from '../Pages/Materias';
import Publicar from '../Pages/Publicar';
import Salvos from '../Pages/Salvos';
import PerfilAluno from '../Pages/PerfilAluno';
import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';
import PerfilProf from '../Pages/PerfilProfessor';


import Avaliacoes from '../Components/Avaliacoes';
import Generos from '../Components/GenerosTextuais';
import Gramatica from '../Components/Gramatica';
import Literatura from '../Components/Literatura';
import Redacao from '../Components/Redacao';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    /* const { logado } = useContext(AuthContext);
 
     if (!logado) {
         return (<Login />)
     }*/

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Materias"
                    component={Materias}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="book-open-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Publicar"
                    component={Publicar}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="pencil-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Salvos"
                    component={Salvos}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="PerfilAluno"
                    component={PerfilAluno}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="PerfilProf"
                    component={PerfilProf}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}