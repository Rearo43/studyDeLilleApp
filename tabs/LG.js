import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Alert,
  Modal,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
// import { Data } from '../data.json';

function Cards({ arr }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(arr);
  return (
    <View>
      <View>
        {arr.map((x) => (
          <Card key={x.name}>
            <Card.Title>{x.name}</Card.Title>
            <Card.Divider />
            <Text>{x.qs}</Text>
            <Pressable
              onPress={() => {
                setModalVisible(true);
                setModalData(x);
              }}
              style={styles.try}
            >
              <Text
                style={[styles.buttonOpen, styles.boxShadow]}
                onClick={() => {
                  setModalData(x);
                  setModalIsOpen(true);
                }}
              >
                More Info
              </Text>
            </Pressable>
          </Card>
        ))}
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View>
            <View style={styles.modalView}>
              {/* If I want to switch to using button to go back move open Pressable tag down above Text Back "button" */}
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                onClick={() => setModalIsOpen(false)}
              >
                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  // colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.top}
                >
                  <View style={styles.img}>
                    <Image
                      style={styles.tinyLogo}
                      source={modalData.img}
                    />
                    <Text style={styles.name}>{modalData.name}</Text>
                    <Text style={styles.name}>AVA: {modalData.ava}</Text>
                  </View>
                </LinearGradient>

                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.middle}
                >
                  <View style={styles.img}>
                    <Text style={styles.text}>Here's some detail</Text>
                  </View>
                </LinearGradient>

                <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.bottom}
                >
                  <View>
                    <Text style={styles.exit}>Back</Text>
                  </View>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export const Wines = () => {
  return (
    <ScrollView>
      <Cards arr={Data} />
    </ScrollView>
  );
};
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  buttonOpen: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginTop: 15,
  },
  boxShadow: {
    shadowOffset: { width: 5, height: 2 },
    shadowOpacity: 0.5,
    width: '50%',
    marginLeft: '25%',
    height: 35,
    lineHeight: 35,
  },
  img: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'white',
  },
  top: {
    borderBottomStartRadius: 200,
    zIndex: 2,
    height: 340,
  },
  middle: {
    borderBottomEndRadius: 200,
    marginTop: -195,
    zIndex: 1,
    height: 705,
  },
  bottom: {
    marginTop: -190,
    zIndex: 0,
  },
  text: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160,
    color: 'white',
  },
  exit: {
    height: 400,
    marginTop: 140,
    marginRight: 20,
    color: 'white',
    textAlign: 'right',
  },
});

const Data = [
  {
    name: 'Le Dessein - 2020',
    qs: "Le Dessein is going to be a Mourvèdre dominant SMG blend. This is actually the lightest red blend DeLille carries. With this wine you're going to get notes of cranberry and cherry. We sold a lot around Thanksgiving and Christmas so that gives you a good idea of what pairs well, light proteins like chicken and turkey.",
    ava: 'Columbia Valley',
    varietal: 'Rhone',
    vineyard: ['Ciel du Cheval', 'Boushey'],
    pairings: '',
    rating: '',
    tastingNotes: ['Black Pepper', 'Cranberry', 'Meaty', 'Bacon Fat Component'],
    img: require('../imgs/ld20.png'),
  },
  {
    name: 'Roussanne - 2021',
    qs: "So with this wine our director of wine making Jason Gorski wanted to create a wine to pair with mild to spicy Asian dishes. You're going to get notes of lemongrass with a nice blend of acidity and savory with the back ended notes",
    ava: 'Red Mountain',
    varietal: 'Roussanne',
    vineyard: ['Ciel du Cheval'],
    pairings: '',
    rating: '',
    tastingNotes: [
      'Honey Like Texture',
      'Juicy Acididy/Savory Undertones',
      'Lemongrass',
      'Chamomile',
      'Granny Smith Apple',
    ],
    img: require('../imgs/rou21.png'),
  },
  {
    name: 'Rosé - 2020',
    qs: "Our 2021 Rosé was just released during our 30th anniversary weekend. With this Rosé you're going to get vibrant notes of Watermelon and nectarine. That light salmon pink color comes from our wine making team keeping the grape skins on for just about 20hrs.",
    ava: 'Columbia Valley',
    varietal: '',
    vineyard: ['Stone Tree', 'Boushey', "Angela's", 'Ciel du Cheval'],
    pairings: '',
    rating: '',
    tastingNotes: ['Watermelon Jolly Rancher', 'Passion Fruit', ''],
    img: require('../imgs/rose21.png'),
  },
  {
    name: 'Doyenne - 2019',
    qs: "Does anyone know the nickname for our Doyenne? We actually call it our 'Wedding Wine'. Our winemaker was making a wine for his wedding and his now wife likes Syrah and he likes Cabs so the wine is 60 - 40 in favor of her. Definitely a great way to start off the marriage. You're going to get notes of plum with almost a smoked brisket type of aspect. With that being said pairs great with grilled meat and red or chili peppers.",
    ava: 'Red Mountain',
    varietal: '',
    vineyard: ['Ciel du Cheval', 'Grand Ciel', 'Upchurch'],
    pairings: '',
    rating: '',
    tastingNotes: '',
    img: require('../imgs/doy19.png'),
  },
  {
    name: 'D2 - 2019',
    qs: "Here we have our most popular wine, if you've heard the name DeLille you've most likely hear of D2. D2 quite literally stands for DeLille Two. It's also the name of a road that runs through Bordeaux. D2's going to give you dark chocolate coffee notes with spurts of cranberry and even a little nutmeg. We also source from 15 wineries in the Columbia Valley area. So the saying, \"French inspired Washington grown\" fits here and that is because CV and Bordeaux are of the same line of longitude.",
    ava: 'Columbia Valley',
    varietal: 'Bordeaux',
    vineyard: [
      'Red Willow',
      'Harrison Hill',
      'Ciel du Cheval',
      'Klipsun',
      'Boushey',
      'DeBrul',
      'Upchurch',
      'Grand Ciel',
    ],
    pairings:
      'Anything BBQ, flank steak, bison, asian inspired food that include vinegar, sweet chili or garlic sauces.',
    rating: '',
    tastingNotes: [
      'Crannberry',
      'Coffee Beans',
      'Burnt Orange',
      'Nutmeg',
      'Dark Chocolate',
      'Clove',
    ],
    img: require('../imgs/d219.png'),
  },
  {
    name: 'Roofline Chardonnay - 2020',
    qs: "We've added another wine to our Roofline series. This is our first time producing a Chardonnay and it has really been a hit. This is going to be a little different than Chardonnays you may be used to especially from California but I think that is why we've had so much success.You're going to get very very light oaky notes that comes from the wine being partially aged in oak and then stainless steel. And then unlike other Chardonnays this wine is sharp crisp making grilled seafood and especially cheese a great pairing.",
    ava: 'Willamette Valley',
    varietal: 'Chardonnay',
    vineyard: [''],
    pairings: 'Grilled seafood, cheese plate.',
    rating: '',
    tastingNotes: ['Very slight oak notes'],
    img: require('../imgs/rlchar20.png'),
  },
  {
    name: 'Harrison Hill - 2019',
    qs: "Harrison Hill is a crowd favorite here. Harrison Hill Vineyard is actually on Snipes Mountain the second smallest AVA in Washington in front of Red Mountain. They have some of the oldest Cab vines in Washington planted in '62. Having access to these particular grapes gives this wine elegance with such a smooth almost silky finish.",
    ava: 'Snipes Mountain',
    varietal: 'Bordeaux',
    vineyard: ['Harrison Hill'],
    pairings: '',
    rating: '',
    tastingNotes: ['Silky Texture'],
    img: require('../imgs/hh19.png'),
  },
];
