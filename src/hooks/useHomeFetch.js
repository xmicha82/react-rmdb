import { useState, useEffect, useRef } from "react";

import API from "../API"

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_result: 0
};

export const useHomeFetch = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);
            
            console.log("Fetching movies");
            const movies = await API.fetchMovies(searchTerm, page);
            console.log("Movies:", movies);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };


    // initial render
    useEffect(() => {
        fetchMovies(1);
    }, []);

    return { state, loading, error };
};