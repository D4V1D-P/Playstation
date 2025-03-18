import { SafeAreaView, StyleSheet, Text, ImageBackground, FlatList, View,Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.container}>
      <ImageBackground source={require("../assets/fundo.jpg")} style={estilo.ImageBackground}>
        <Text style={estilo.titulo}>Acessorios</Text>
      
      <ScrollView>
      <FlatList
      data={Carros}
      keyExtractor={(item)=>{item.uid.toString();}}
      renderItem={({item}) => (
      <View style = {estilo.card}>
      <Image style={estilo.foto} source={item.foto}/>
      <Text style = {estilo.descricaoAcessorios}>{item.descricao}></Text>
      </View>
  )}
      />

     </ScrollView>
</ImageBackground>

    </SafeAreaView>
  );
}
const Carros = [
{
  uid: 1,
  descricao: 'Base-de-Carregamento-do-Dual-Sense​-PS5',
  foto: require('../assets/acessorios/Base.jpg'),
},
{
  uid: 2,
  descricao: 'Controle-Dual-Sense​-PS5',
  foto: require('../assets/acessorios/Controleps5.jpg',)
},
{
  uid: 2,
  descricao: 'Controle-de-midia-PS5',
  foto: require('../assets/acessorios/midia.jpg',)
},
{
  uid: 3,
  descricao: 'SSD-Samsung-980 Pro para PS5',
  foto: require('../assets/acessorios/PlayStation-VR.jpg',)
},
{
  uid: 3,
  descricao: 'Headset-ASTRO-Gaming-A40-TR​-PS5',
  foto: require('../assets/acessorios/Headset-ASTROps5.jpg',)
},
{
  uid: 4,
  descricao: 'Seagate-4TB-Game-Drive para PS 4/5',
  foto: require('../assets/acessorios/Seagate-4TB-Game-Drive.jpg',)
},
{
  uid: 5,
  descricao: 'Dualshock-4',
  foto: require('../assets/acessorios/Dualshock-4.jpg',)
},
{
  uid: 5,
  descricao: 'Logitech-G923-Racing-Wheel PS4',
  foto: require('../assets/acessorios/Logitech-G923-Racing-Wheel.jpg',)
},
{
  uid: 5,
  descricao: 'Headset-Wireless-Astro-A50 PS4',
  foto: require('../assets/acessorios/Headset-Wireless-Astro-A50.jpg',)
},
{
  uid: 5,
  descricao: 'Cabo-Av PS3',
  foto: require('../assets/acessorios/Cabo-Av.jpg',)
},
{
  uid: 5,
  descricao: 'Cabo-Carregador-USB-Controle PS3',
  foto: require('../assets/acessorios/Cabo-Carregador-USB-Controle.jpg',)
},
{
  uid: 5,
  descricao: 'PlayStation-VR para PS4',
  foto: require('../assets/acessorios/controller-ps3.jpg',)
},
]


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor:'#C0C0C0',

  },
 
  titulo: {
    marginTop:50,
    fontSize: 45,
    color: 'blue', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    textAlign:'center',
    marginLeft:'15',
    marginBottom: 30, 
  },
  card: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity:0.8,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 100,
    padding: 16,
    marginHorizontal: 10,
    marginLeft:60,
    marginRight:60,
  },
  foto: {
    width: 250, 
    height: 250,
    borderRadius: 10,
    marginBottom: 10, 
  },
  descricaoAcessorios: {
    fontSize:22,
    color: 'white',
    marginTop: 8,
    lineHeight: 30,
    fontFamily: 'Roboto-Regular',
    textAlign:'center',
  },
  
});
