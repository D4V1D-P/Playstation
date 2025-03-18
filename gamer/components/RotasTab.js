import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';


import Jogos from './Jogos'
import Acessorios from './Acessorios'
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ actveTintColor:"#00ff00",}}>

     <Tab.Screen name='Acessorios' component={Acessorios} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="headset" size={24} color="black" />
        ),
        headerShown:false,
       }}
      />

      

     <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color, size }) => (<Fontisto name="playstation" size={24} color="black" />
        ),
        headerShown:false,
       }}
      />

      

     <Tab.Screen name='Jogos' component={Jogos} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name="game-controller-sharp" size={24} color="black" />
        ),
        headerShown:false,
       }}
      />

      
      
        </Tab.Navigator>
    )
}