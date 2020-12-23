import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Card = props => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails')}>

      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image 
            // source={require('../../assets/news-icon.png')}
            source={{
              uri: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}}
            style={styles.image}
            />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Dummy Title</Text>
          <MaterialIcons name='favorite' color='#72bcd4' size={24} />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>This is a Dummy Description</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#ffffff', 
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 8,
    elevation: 5
  },
  imageWrapper:{
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'

  },
  titleWrapper:{
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,

  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20, 
  },
  descriptionWrapper:{
    paddingHorizontal: 15
  },
  description: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    marginTop: 10
  }
 
})

export default Card;