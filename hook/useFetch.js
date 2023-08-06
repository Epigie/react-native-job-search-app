import { useState, useEffect } from "react";


import axios from "axios";


const useFetch = (endpoint, query) => {

    const apiKey = process.env.EXPO_PUBLIC_RAPID_API_KEY
    const apiUrl = process.env.EXPO_PUBLIC_RAPID_API_URL

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `${apiUrl}/${endpoint}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {

        try {
            const response = await axios.request(options);
            setData(response.data.data);

        } catch (error) {

            setError(error);
        }
        setIsLoading(false);
    };


    useEffect(() => {
        fetchData();
    },[]);


    return { data, isLoading, error };    
};

export default useFetch;

