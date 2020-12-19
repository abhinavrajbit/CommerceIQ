const axios = require('axios');

axios.get('http://localhost:3000/posts/0')
    .then(resp => {
        data = resp.data;
        console.log(`${data.title}, ${data.author}, ${data.views},${data.reviews}`);
    })
    .catch(error => {
        console.log(error);
    });