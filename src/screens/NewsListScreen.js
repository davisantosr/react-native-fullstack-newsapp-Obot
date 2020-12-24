import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Card from '../components/Card';
import * as newsActions from '../redux/actions/newsActions';

const NewsAppScreen = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.fetchArticles())

  }, [dispatch])

  const articles = useSelector(state => state.news.articles)
  console.log(articles)

  return (
    <FlatList 
      data={articles.articles}
      keyExtractor={item => item.url}
      renderItem={({item}) => (
        <Card navigation={props.navigation}/>
        
      ) }
    
    />
      
  )
}
const styles = StyleSheet.create({

});

export default NewsAppScreen;
