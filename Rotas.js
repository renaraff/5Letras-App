import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';

import { AuthContext } from '../Context/AuthContext';
import Home from './AA.Pages/Home';
import Materias from './AA.Pages/Materias';
import Publicar from './AA.Pages/Publicar';
import Salvos from './AA.Pages/Salvos';
import Perfil from './AA.Pages/PerfilAluno';

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

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
                    name="Perfil"
                    component={Perfil}
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