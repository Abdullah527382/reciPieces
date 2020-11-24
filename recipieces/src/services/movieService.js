//"use strict"
 export async function getMovies() { //async func since we're using 'await' down there
     //use const if not planning to change the variable later on
     const response = await fetch( //adding 'await' bcos will take a while to fetch
        // 'https://asia-east2-csesocworkshop.cloudfunctions.net/api/getMovies');
        //'http://localhost:5001/recipieces-920fb/asia-east2/api/getBooks');
        'https://asia-east2-recipieces-920fb.cloudfunctions.net/api/getbooks');
        //'http://localhost:5000/recipieces-920fb/asia-east2/api/getbooks');
        //fetch function for the csesoc API we're using, remember 'getMovies' is literally
         //the custom functions we coded up in backend workshop
    return await response.json();
 }

 export async function addMovie(data) {
    const response = await fetch(
       //'http://localhost:5000/recipieces-920fb/asia-east2/api/createNewBook', {
          'https://asia-east2-recipieces-920fb.cloudfunctions.net/api/createnewbook', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
             title: data.title,
             author: data.author,
             yearReleased: data.yearReleased,
             imageURL: data.imageURL,
             genres: data.genres,
          })
   });
   return await response.json();
 }