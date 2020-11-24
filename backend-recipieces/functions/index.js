const functions = require('firebase-functions');
const admin = require("firebase-admin"); //need this to access our database
const express = require("express"); //importing express library to help with
//networking code (we're not making a server)
const app = express(); //calling the express function here
admin.initializeApp();

const cors = require('cors'); //need this to  call it to our frontend 
app.use(cors({origin: true}));

app.get("/getBooks", (request, response) => {
    admin
    .firestore()
    .collection("books")
    .get()
    .then((data) => { //promise
        let books = []; //new Array();
        data.forEach((doc) => {
            books.push(doc.data());
        });
        return response.json({ books });
    })
    .catch((err) => response.status(500).json({ error: err.code }));
});

app.get("/book/:bookId", (request, response) => {
    admin
    .firestore()
    .collection("books")
    .doc(request.params.bookId)
    .get()
    .then((data) => {
        if (data.exists) {
            return response.json({ status: "Success", book: data.data() });
        } else {
            return response
                   .status(404)
                   .json({ status: "Failed", error: "Movie not found" });
        }
    });
});
app.post('/createNewBook', (request, response) => {
    const genres = request.body.genres.split(",");
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        yearReleased: parseInt(String(request.body.yearReleased)),
        imageURL: request.body.imageURL,
        genres: genres,
    };
    admin
    .firestore()
    .collection("books")
    .add(newBook)
    .then(data => {
        return response.json({
            status: "Success",
            details: `movie with ID ${data.id} added!`,
        });
    })
    .catch(err => response.status(500).json({ error: err.code }));
});
exports.api = functions.region("asia-east2").https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });
https://www.amazon.com/charts/2020-11-15/mostsold/nonfiction?ref=chrt_bk_dx_intra_sd_nf

NON-EXPRESS.JS CODE:

exports.getBooks = functions.https.onRequest((request, response) => {
    if (request.method !== "GET") { //make sure no other methods come
        return response.status(500).json({ error: "Method not allowed!" });
    }
    admin
    .firestore()
    .collection("books")
    .get()
    .then((data) => { //promise
        let books = []; //new Array();
        data.forEach((doc) => {
            books.push(doc.data());
        });
        return response.json({ books });
    })
    .catch((err) => response.status(500).json({ error: err.code }));
});









*/