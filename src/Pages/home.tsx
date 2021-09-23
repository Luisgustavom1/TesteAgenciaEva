import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import SectionCategories from '../components/SectionCategories';
import SectionIllustration from '../components/SectionIllustration';
import SlideForCategory from '../components/SlidesForCategory';
import { CategoriesType } from '../Types/types';

const Pages: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    fetch('https://eva-test.herokuapp.com/categories')
      .then(async res => {
        const data = await res.json();
        setCategories(data);
      })
      console.log(categories);
      
  }, []) 
  return(
    <>
      <Header />
      <Banner />
      <SectionIllustration />
      <SectionCategories />
      {categories.map(category => 
        category.product.length >= 4 && (
          <SlideForCategory
            category={category.name}
            numberOfProducts={category.product.length}
          >
            {category.product.map(product => (
              <Cards 
                img={product.images[0].path}
                name={product.name}
                currentPrice={product.promotional_price}
                oldPrice={product.price}
                stars={product.stars}
                discount={category.bankslip_discount}
              />
            ))}
          </SlideForCategory>
        )
      ) }
      <Newsletter />
      <Footer />
    </>
  );
}

export default Pages;