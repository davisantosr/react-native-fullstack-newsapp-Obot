export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

import {API_KEY} from "@env"


export const fetchArticles = () => {

  return async dispatch => {
    //logic to fetch
    const result = await fetch(`http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`) 

    const resultData = await result.json()


    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData
    })
    
  }
}

export const toggleFavorite = url => {
  return {
    type: TOGGLE_FAVORITES,
    payload: url
  }

}