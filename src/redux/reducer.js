const searchReducer = (state = {searchUrl: `https://rickandmortyapi.com/api` }, action) =>{
    switch(action.type){
        case 'SEARCH':
            return {...state, searchUrl: action.query}
        default: 
            return state
    }
}

export default searchReducer