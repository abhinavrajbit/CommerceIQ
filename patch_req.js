const axios = require('axios');

axios.patch('http://localhost:3000/posts/2/', {
    
    
    views :147
}).then(resp => {

    console.log(resp.data);
}).catch(error => {

    console.log(error);
}); 