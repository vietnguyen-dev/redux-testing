import React,{ useEffect } from 'react';
import './App.css';
import SearchForm from './components/searchForm';
import { useSelector, useDispatch } from 'react-redux';
import { getSearch } from './redux/action';

const App = () =>{
    const search = useSelector(state => state.searchUrl)
    const dispatch = useDispatch()

    useEffect(() =>{
      const searchString = async() =>{
        try{
          const res = await fetch(search,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          const data = await res.json()
          console.log(data)
        } catch (err){
          console.err(err)
        }
      }
      searchString()
    }, [search])

    const setSearchStore = (searchString) =>{
      dispatch(getSearch(searchString))
    }

    return(
      <>
      <h1>{search}</h1>
      <SearchForm getSearch={setSearchStore}/>
      </>
    )
        }
export default App;
