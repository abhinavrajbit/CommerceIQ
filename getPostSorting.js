
const axios = require('axios');

axios.get('http://localhost:3000/posts?_sort=views&_order=asc')
    .then(resp => {
        data = resp.data;
        data.forEach(e => {
          console.log(`${e.title}, ${e.author}, ${e.views}, ${e.reviews}`);
      });
    
    })
    .catch(error => {
        console.log(error);
    });