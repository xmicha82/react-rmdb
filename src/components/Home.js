import React from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';

// hook
import { useHomeFetch } from '../hooks/useHomeFetch';

// image
import NoImage from '../images/no_image.jpg';

function Home() {

    const { state, loading, error } = useHomeFetch();

    console.log(state);

    try {
        return (
            <>
                {state.results[0] &&
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`} 
                        title={state.results[0].original_title}
                        text={state.results[0].overview} />
                }
                <Grid header="Popular movies">
                    {state.results.map(movie => (
                        <Thumb 
                            key={movie.id} 
                            image={
                                movie.poster_path 
                                    ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path 
                                    : NoImage
                            }
                            movieId={movie.id}
                            clickable
                        />
                    ))}
                </Grid>
                <Spinner/>
            </>
        )
    } catch (error){
        return null;
    }
}

export default Home;
