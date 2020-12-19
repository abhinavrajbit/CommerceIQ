const axios = require('axios');

axios.get('http://localhost:3000/posts')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
            console.log(`${e.title}, ${e.author}, ${e.views}, ${e.reviews}`);
        });
    })
    .catch(error => {
        console.log(error);
    });