const axios = require('axios');

axios.post('http://localhost:3000/posts', {
    id: 2,
  title: "title2",
  author: "CommerceIQ",
  authorId: 1,
  views: 55,
  reviews: 30
}).then(resp => {
    console.log(resp.data);
}).catch(error => {
    console.log(error);
}); 