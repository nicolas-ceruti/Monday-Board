import axios from "axios";

const api = axios.create({
    baseURL: "https://api.monday.com/v2",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token token="eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIzNTE2MzkyMywidWlkIjozOTE1Mzg1NywiaWFkIjoiMjAyMy0wMi0wN1QxNDoxOToyMy4yMzlaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTUwNzk1NDMsInJnbiI6InVzZTEifQ.0uSaFlqRYZ3rtmSiQR7rbFmvuMzUL13223B567TSQRU"`,
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 30000,
});

export default api;