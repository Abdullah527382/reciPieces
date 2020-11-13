import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export function AddMovie(){

    const [title, setTitle] = useState('');
    const [yearReleased, setYearReleased] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [genres, setGenres] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form Submitted, title is : ${title}
                                year released: ${yearReleased}
                                image URL: ${imageURL}
                                genres: ${genres}`);
    };

    return (
        <div>
            <h1>Add a Movie</h1>
            <Card style={{width: 800}}>
                <form onSubmit={handleSubmit}>
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        
                        <TextField id="title" label="Title" variant="outlined" 
                        onChange={(event) => setTitle(event.target.value)}
                        style={{margin: 10, flexBasis: '70%'}}/>

                        <TextField id="year-released" label="Year Released" 
                        onChange={(event) => setYearReleased(event.target.value)}
                        variant="outlined" style={{margin: 10}}/>

                        <TextField id="image-url" label="Image URL" variant="outlined"
                        onChange={(event) => setImageURL(event.target.value)}                        
                        fullWidth style={{margin: 10}}/>  

                        <TextField id="genres" label="Genres" variant="outlined" 
                        onChange={(event) => setGenres(event.target.value)}                        
                        fullWidth style={{margin: 10}} />

                    </div>
                    <Button variant="contained" color="primary" style={{margin: 10}} type="submit">
                        Submit
                   </Button>
                    <Button variant="outlined" style={{margin: 10}}>
                        Cancel
                    </Button>
                </form>
            </Card>
        </div>
    );
}