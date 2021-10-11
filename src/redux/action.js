const getSearch = query =>{
    return{
        type: 'SEARCH',
        query: query
    }
}

export default getSearch