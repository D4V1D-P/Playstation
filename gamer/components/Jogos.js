import { SafeAreaView, StyleSheet, Text, ImageBackground, FlatList, View, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={estilo.container}>
      <ImageBackground source={require("../assets/jogos/fundo3.jpg")} style={estilo.background}>
        <Text style={estilo.titulo}>Jogos</Text>
      
        <ScrollView contentContainerStyle={estilo.scrollContainer}>
          <FlatList
            data={Jogos}
            keyExtractor={(item) => item.uid.toString()}
            renderItem={({ item }) => (
              <View style={estilo.card}>
                <Image style={estilo.foto} source={item.foto} />
                <Text style={estilo.descricaoJogos}>{item.descricao}</Text>
              </View>
            )}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const Jogos = [
  {
    uid: 1,
    descricao: 'Nioh-Collection',
    foto: require('../assets/jogos/Nioh-Collection.jpg'),
  },
  {
    uid: 2,
    descricao: 'Hogwarts-Legacy',
    foto: require('../assets/jogos/Hogwarts-Legacy.jpg'),
  },
  {
    uid: 3,
    descricao: 'Black-Myth-Wukong',
    foto: require('../assets/jogos/Black-Myth-Wukong.jpg'),
  },
  {
    uid: 4,
    descricao: 'Ghost-Of-Tsushima',
    foto: require('../assets/jogos/Ghost-Of-Tsushima.jpg'),
  },
  {
    uid: 5,
    descricao: 'God-Of-War-Hits',
    foto: require('../assets/jogos/God-Of-War-Hits.jpg'),
  },
  {
    uid: 6,
    descricao: 'The-Last-Of-Us-Part Ii',
    foto: require('../assets/jogos/Jogo.jpg'),
  },
  {
    uid: 7,
    descricao: 'Diablo-III',
    foto: require('../assets/jogos/Jogo-Seminovo-Diablo-Iii.jpg'),
  },
  {
    uid: 8,
    descricao: 'Uncharted-3-Drake-s',
    foto: require('../assets/jogos/Uncharted-3-Drake-s-Deception.jpg'),
  },
  {
    uid: 9,
    descricao: 'Battlefield 3 ',
    foto: require('../assets/jogos/Battlefield-3-Premium-Edition.jpg'),
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
    justifyContent: 'center',
  },

  titulo: {
    marginTop: 50,
    fontSize: 45,
    color: 'blue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    marginBottom: 30, 
  },

  scrollContainer: {
    paddingBottom: 20, 
    alignItems: 'center', 
  },

  card: {
    width: 230,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 30,
    marginHorizontal: 10,
  },

  foto: {
    height: 330, 
    borderRadius: 10,
    marginVertical: 10,
  },

  descricaoJogos: {
    fontSize: 22,
    color: 'white',
    marginTop: 8,
    lineHeight: 30,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
