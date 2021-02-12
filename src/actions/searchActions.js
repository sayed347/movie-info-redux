import axios from 'axios';
import {SEARCH_MOVIE,FTECH_MOVIES,FETCH_MOVIE,LOADING} from './types';
import {APIKey, APIkey} from'../ApiKey';



export const searchMovie=text=>dispatch=>{
 dispatch({
     type:SEARCH_MOVIE,
     payload:text
 })
}  
export const fetchMovies=text=>dispatch=>{
axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=59489b9c&s=${text}`)
.then(response=>dispatch({
    type:FTECH_MOVIES,
    payload:response.data.Search
}))
.catch(err=>console.log(err))

}
export const fetchMovie=id=>dispatch=>{
axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=59489b9c&i=${id}`)
.then(response=>
    dispatch({
        type:FETCH_MOVIE,
        payload:response.data
    }))
    .catch(err=>console.log(err));
};
export const setLoading=()=>{
return {
    type:LOADING
}
}