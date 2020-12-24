import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import Card from '../components/Card';
import * as newsActions from '../redux/actions/newsActions';

const NewsAppScreen = props => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsActions.fetchArticles())

  }, [dispatch])

  return (
      <Card navigation={props.navigation}/>
      
  )
}
const styles = StyleSheet.create({

});

export default NewsAppScreen;
