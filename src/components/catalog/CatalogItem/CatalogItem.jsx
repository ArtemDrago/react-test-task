import React from 'react';
import './CatalogItem.css';
import { Link } from 'react-router-dom';

function CatalogSections({ section }) {
   return (
      <>
         {
            section.colors && section.colors.map((el) => {
               return (
                  <Link
                     to={`/catalog/${section.id}/${el.id}`}
                     className="product"
                     key={el.id
                     }>
                     <div className="product-image">
                        {
                           (el.images.length != 0) ?
                              <>
                                 {
                                    el.images.map((img, index) => {
                                       return (
                                          <img
                                             className={(index === 0) ? 'img active' : 'img'}
                                             src={img}
                                             alt=""
                                             data-img={index}
                                             key={`img-${index}`}
                                          />
                                       )
                                    })
                                 }
                                 {
                                    el.images.map((img, index) => {
                                       return (
                                          <span
                                             className={(index === 0) ? 'picture active' : 'picture'}
                                             data-id={index}
                                             key={`position-${index}`}
                                             style={{ 'width': `calc(100%/${el.images.length})` }}
                                          ></span>
                                       )
                                    })
                                 }
                              </>
                              :
                              <>no image</>
                        }
                     </div>
                     <div className="product-content">
                        <h4>{section.name} цвет: {el.name}</h4>
                        {
                           (!!el.description && el.description.length != 0) ?
                              <div className="product-description">
                                 {el.description}
                              </div>
                              :
                              <></>
                        }
                        {
                           (!!el.price && el.price.length != 0) ?
                              <div className="product-price__wrapper">
                                 <div className="product-price">
                                    {el.price} &#8381;
                                 </div>
                              </div>
                              :
                              <></>
                        }
                     </div>
                  </Link>
               );
            })
         }
      </>
   );
}

export default CatalogSections;