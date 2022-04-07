import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, PizzaBlock, PizzaBlockLoader, SortPopup} from "../components";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
   {name: 'популярности', type: 'popular'},
   {name: 'цене', type: 'price'},
   {name: 'алфавиту', type: 'alphabet'},
]

const Home = () => {
   const dispatch = useDispatch()
   const items = useSelector(({pizzas}) => pizzas.items)
   const loaderPizza = useSelector(({pizzas}) => pizzas.isLoaded)
   const {category, sortBy} = useSelector(({filters}) => filters)

   useEffect(() => {
      dispatch(fetchPizzas(category, sortBy))
   }, [category, sortBy])

   const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
   }, [])

   const onSelectSort = React.useCallback((type) => {
      dispatch(setSortBy(type))
   }, [])


   return (
      <div className="container">
         <div className="content__top">
            <Categories
               onClickCategory={onSelectCategory}
               activeCategory={category}
               categories={categoryNames}/>

            <SortPopup
               onClickSort={onSelectSort}
               activeSort={sortBy}
               sorts={sortItems}/>
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {loaderPizza
               ? items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
               : Array(12)
                  .fill(0)
                  .map((_, index) => <PizzaBlockLoader key={index}/>)
            }
         </div>
      </div>

   );
};

export default Home;
