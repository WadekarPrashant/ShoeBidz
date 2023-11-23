import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src='https://images.unsplash.com/photo-1696552886384-8484bc131b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' />
        {/* !st row */}
        <div className='home_row'>
          {/* Product 1 */}
          <Product title='The Air force' price={29.99} image="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" rating={5} />

          {/* Product 2 */}
          <Product title='Jordan 1X' price={39.99} image="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" rating={4} />

          {/* Product 3 */}
          <Product title='North Face X2' price={49.99} image="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={3} />

          {/* Product 4 */}
          <Product title='Jordan 2X' price={49.99} image="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" rating={4} />
        </div>

        {/* 2nd row */}
        <div className='home_row'>
          {/* Product 1 */}
          <Product title='Adidas X' price={19.99} image="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={4} />

          {/* Product 2 */}
          <Product title='The Air force 3' price={55.99} image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={5} />
        </div>

        {/* 3rd row */}
        <div className='home_row'>
          {/* Product 1 */}
          <Product title='Nike ' price={23.99} image="https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={3} />

          {/* Product 2 */}
          <Product title='The Air force 3' price={49.99} image="https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={4} />

          {/* Product 3 */}
          <Product title='The Air force 4' price={49.99} image="https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={5} />

          {/* Product 4 */}
          <Product title='The Air force 3' price={49.99} image="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" rating={4} />
        </div>

      </div>
    </div>
  );
}

export default Home;
