export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const ADD_FAVORITES = 'ADD_FAVORITES';


export const fetchArticles = () => {

  return async dispatch => {
    //logic to fetch
    const result = await fetch(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);

    const resultData = await result.json()


    dispatch({
      type: FETCH_ARTICLES,
      payload: resultData
    })
    
  }
}