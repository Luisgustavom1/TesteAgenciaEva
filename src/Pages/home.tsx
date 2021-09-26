import React, { useEffect, useState } from 'react';

import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import SectionCategories from '../components/SectionCategories';
import SectionIllustration from '../components/SectionIllustration';
import SlideForCategory from '../components/SlidesForCategory';

import { CategoriesType, OnlyProduct } from '../Types/types';

const Pages: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);
  const [allProducts, setAllProducts] = useState<OnlyProduct[]>([]);

  useEffect(() => {
    fetch('https://eva-test.herokuapp.com/categories')
      .then(async res => {
        const data = await res.json();
        setCategories(data);
      })
     
    fetch('https://eva-test.herokuapp.com/products')
      .then(async res => {
        const data: OnlyProduct[] = await res.json();
        const onlyFiveStarts = data.filter(product => product.stars === 5);        
        setAllProducts(onlyFiveStarts);
      })  
  }, []) 

  return(
    <>
      <Header />
      <Banner />
      <SectionIllustration />
      <SectionCategories />
      {/* <SlideForCategory
        numberOfProducts={allProducts.length}
      >
        {allProducts.map(product => (
          <Cards
            key={product.id}
            img={product.images[0].path}
            name={product.name}
            currentPrice={product.promotional_price}
            oldPrice={product.price}
            stars={product.stars}
            discount={product.category.bankslip_discount}
          />
        ))}
      </SlideForCategory> */}
      {
        categories.map(category => 

          category.product.length >= 4 &&
            <SlideForCategory
              key={category.id}
              category={category.name}
              numberOfProducts={category.product.length}
            >
              {category.product.map(product => (
                <Cards 
                  key={product.id}
                  img={product.images[0].path}
                  name={product.name}
                  currentPrice={product.promotional_price}
                  oldPrice={product.price}
                  stars={product.stars}
                  discount={category.bankslip_discount}
                  product={product}
                />
              ))}
            </SlideForCategory>
        ) 
      }
      <Newsletter />
      <Footer />
    </>
  );
}

export default Pages;