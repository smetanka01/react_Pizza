import axios from "axios";

export const setPizzaLoader = (payload) => ({
   type: 'SET_PIZZA_LOADED',
   payload
})

export const fetchPizzas = (category, sortBy) => (dispatch) =>  {
   dispatch(setPizzaLoader(false))
   axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy}&_order=asc`).then(({data}) => {
      dispatch(setPizzas(data))
   })
}

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items
})
