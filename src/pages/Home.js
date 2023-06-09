import React, { useContext } from 'react';
import Product  from "../components/Product";
import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';
import '../glitch.css';

const Home = () => {

  const { products } = useContext(ProductContext);
// filter products
const filteredProducts = products.filter(item => {
  return (
    item.category === "men's clothing" || item.category === "women's clothing"
);
});

  return (
    <div className='back'>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map(product => {
              return <Product product={product} key={product.id}/>;
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
