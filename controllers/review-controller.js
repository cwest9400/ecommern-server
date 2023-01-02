//2. incomplete - make product-controller first

// create and query products and reviews in MongoDB database.
const product = new Product({ name: 'Product 1', price: 100 });
product.reviews.push({ text: 'Great product!', date: new Date(), rating: 5 });
product.save((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Success!');
  }
});
