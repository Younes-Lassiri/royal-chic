
const initialState = [
    {id:1,name:'Sunglasses',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-8-600x795.jpg',price:94,promo:false,new:false,sold:false},
    {id:2,name:'Boots',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-7-600x795.jpg',price:214,promo:false,new:true,sold:false},
    {id:3,name:'Green Pants',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-6-600x795.jpg',price:110,promo:false,new:false,sold:false},
    {id:4,name:'Purse',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-5-600x795.jpg',price:79,promo:false,new:false,sold:false},
    {id:5,name:'Sandals',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-4-600x795.jpg',price:173,promo:false,new:false,sold:false},
    {id:6,name:'Dress',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-3-600x795.jpg',price:790,promo:false,new:false,sold:false},
    {id:7,name:'Blouse',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-1-600x795.jpg',price:176,promo:true,oldPrice:198,new:false,sold:false,promoValue:11},
    {id:8,name:'Watch',thumbnail:'https://lacomete.qodeinteractive.com/wp-content/uploads/2019/04/shop-img-2-600x795.jpg',price:320,promo:false,new:false,sold:true},
    
  ]
  const ShopReducer = (state = { products: initialState}, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default ShopReducer;
  