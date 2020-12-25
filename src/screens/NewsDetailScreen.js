import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

const NewsDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}></Text>
      </View>
      <View>
        <ImageBackground style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.auth}></Text>
            <MaterialIcons />
          </View>
          
        </ImageBackground>
        
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}> </Text>
      </View>
  </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginVertical: 20
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  author: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    color: 'white'
  },
  description: {
    margin: 10
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Ubuntu'
  }
});


export default NewsDetailsScreen;
