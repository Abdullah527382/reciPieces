//"use strict"
 export async function getMovies(){ //async func since we're using 'await' down there
     //use const if not planning to change the variable later on
     const response = await fetch( //adding 'await' bcos will take a while to fetch
        // 'https://asia-east2-csesocworkshop.cloudfunctions.net/api/getMovies');
        'http://localhost:5001/recipieces-920fb/asia-east2/api/getBooks');
        //fetch function for the csesoc API we're using, remember 'getMovies' is literally
         //the custom functions we coded up in backend workshop
    return await response.json();
 }