import { SafeAreaView, StyleSheet, Text, ImageBackground, FlatList, View, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.container}>
      <ImageBackground source={require("../assets/fundo-Home.jpg")} style={estilo.background}>
        <Text style={estilo.titulo}>Playstation</Text>

        <ScrollView contentContainerStyle={estilo.scrollContainer}>
          <View style={estilo.textoContainer}>
           
          </View>

          <View><Image style={estilo.img} source={require('../assets/black.jpg')} /></View>

          <Text style={estilo.black}>Conheça nossa linha Midnight Black</Text>

          <Text style={estilo.ps5}>Conheça os consoles da Playstation</Text>
          
          <FlatList
            data={playstation}
            keyExtractor={(item) => item.uid.toString()}
            renderItem={({ item }) => (
              <View style={estilo.card}>
                <Image style={estilo.foto} source={item.foto} />
                <Text style={estilo.descricao}>{item.descricao}</Text>
              </View>
            )}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const playstation = [
  {
    uid: 1,
    titulo: 'Playstation 5',
    descricao: 'PlayStation5-pro.',
    foto: require('../assets/Consoles/ps5-pro.jpg'),
  },
  {
    uid: 2,
    titulo: 'Playstation 5',
    descricao: 'PlayStation5 Slim.',
    foto: require('../assets/Consoles/PlayStation-5-Slim.jpg'),
  },
  {
    uid: 3,
    titulo: 'Playstation 5',
    descricao: 'PlayStation5 Standard-Edition.',
    foto: require('../assets/Consoles/PlayStation-5-Standard-Edition.jpg'),
  },
  {
    uid: 4,
    titulo: 'Playstation 5',
    descricao: 'PlayStation5 Digital-Edition.',
    foto: require('../assets/Consoles/PlayStation-5-Digital-Edition.jpg'),
  },
  {
    uid: 5,
    titulo: 'Playstation 5',
    descricao: 'PlayStation 4 pro.',
    foto: require('../assets/Consoles/PlayStation-4-Pro-(PS4-Pro).jpg'),
  },
  {
    uid: 6,
    titulo: 'Playstation 5',
    descricao: 'PlayStation 4 Slim.',
    foto: require('../assets/Consoles/PS4-Slim.jpg'),
  },
  {
    uid: 7,
    titulo: 'Playstation 4',
    descricao: 'PlayStation 4.',
    foto: require('../assets/Consoles/PlayStation-4-(PS4).jpg'),
  },
  {
    uid: 8,
    titulo: 'Playstation 5',
    descricao: 'PlayStation 3-Slim.',
    foto: require('../assets/Consoles/PS3-Slim.jpg'),
  },
  {
    uid: 9,
    titulo: 'Playstation 5',
    descricao: 'PlayStation 3.',
    foto: require('../assets/Consoles/PlayStation-3-(PS3).jpg'),
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'black', 
  },

  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'flex-start', 
    opacity: 0.8, 
  },

  titulo: {
    marginTop: 50,
    fontSize: 45,
    color: 'white', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },

  black: {
    color: '#6495ED', 
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 50,
    marginRight: 45,
    marginTop: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 150,
  },

  scrollContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },

  textoContainer: {
    marginVertical: 40,  
    paddingHorizontal: 20, 
    alignItems: 'center',
  },

  img: {
    borderRadius: 15,
    width: 320, 
    height: 350,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },

  ps5: {
    color: 'pink',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Roboto-Medium',
  },

  card: {
    borderRadius: 15,
    width: 320, 
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    elevation: 10,
    marginBottom: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },

  foto: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginVertical: 10,
  },

  descricao: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 25,
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
  },
});

