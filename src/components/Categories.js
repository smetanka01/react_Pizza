import React from 'react';
import PropTypes from 'prop-types'; // PLUGIN

const Categories = React.memo(({activeCategory, categories, onClickCategory}) => {

   return (
      <div className="categories">
         <ul>
            <li
               className={activeCategory === null ? 'active' : ''}
               onClick={() => onClickCategory (null)}
            >
               Все
            </li>
            {categories.map((name, index) => (
               <li
                  className={activeCategory === index ? 'active' : ''}
                  key={`${name}_${index}`}
                  onClick={() => onClickCategory(index)}
               >{name}
               </li>
            ))}
            
         </ul>
      </div>
   );
})

Categories.propTypes = {
   activeCategory: PropTypes.number,
   categories: PropTypes.array
}

Categories.defaultProps = {activeCategory: null, categories: []}

export default Categories;