import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux'

import Card from '../components/Card';

const FavoriteScreen = props => {
  
  const favorites = useSelector(state => state.news.favorites)
  
  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.url}
      renderItem={({item}) => (
        <Card 
          navigation={props.navigation}
          title={item.title}
          image={item.urlToImage}
          description={item.description}
          url={item.url}
                    
        />
        
      ) }
    
    />
  )
}
const styles = StyleSheet.create({

});

export default FavoriteScreen;
