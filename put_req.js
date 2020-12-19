const axios = require('axios');

axios.put('http://localhost:3000/authors/2/', {
    first_name: 'Abhinav',
    last_name: 'Chowdhary',
    post:57
}).then(resp => {

    console.log(resp.data);
}).catch(error => {

    console.log(error);
}); 