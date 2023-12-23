import axios from "axios";

const API_KEY = 'c86a1666edmsh7b4e092ce01ecd2p10e7edjsn90739f26e8e9';

const headers = {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
};

export const fetchRestaurants = async () => {
    try {
        const response = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list`, {
            params: {
                location_id: '293919',
                restaurant_tagcategory: '10591',
                restaurant_tagcategory_standalone: '10591',
                currency: 'USD',
                lunit: 'km',
                limit: '30',
                open_now: 'false',
                lang: 'en_US'
            },
            headers: headers
        });
        if (Array.isArray(response.data.data)) {
            console.log(response.data.data);
            return response.data.data;
        } else {
            console.error("API response is not an array");
            return [];
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
