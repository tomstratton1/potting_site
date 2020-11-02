var data = {
    maximum: 99,
    products : [
    {
        "id": "1",
        "name": "Geometric 'fifty shades' pot",
        "description": "Geometric shapes that look great in any setting.",
        "price": "6.99",
        "image": "images/clean/geo_M_blue.png"
        },
     {
       "id": "2",
       "name": "Drip style pot",
       "description": "A modern contemporary design.",
       "price": "5.99",
       "image": "images/clean/geo_M_blue.png"
     },
     {
        "id": "3",
        "name": "Geometric rainbow pot",
        "description": "A large geometric design pot.",
        "price": "14.99",
        "image": "images/clean/geo_M_blue.png"
      }
    ]
   }
   
   var app = new Vue({
    el: '#app',
    data: data
   });

   var apptest = new Vue({
    el: '#apptest',
    data: {
      message: 'Hello Vue!'
    }
  })
   