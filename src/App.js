import React from "react";

import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

function App() {
   return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <Route path='/' component={Home} exact/>
            <Route path='/cart' component={Cart}/>
         </div>
      </div>
   )
}

export default App

// использовали redux с помощью классового компонента <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// class App extends React.Component{
//    componentDidMount() {
//       axios.get('http://localhost:3000/db.json').then(({data}) => {
//          // store.dispatch(setPizzas(data.pizzas))
//          this.props.setPizzas(data.pizzas)
//       })
//    }
//
//    render() {
//       return (
//          <div className="wrapper">
//             <Header/>
//             <div className="content">
//                <Route exact path='/' render={() => <Home items={this.props.items} />}/>
//                <Route path='/cart' component={Cart}/>
//             </div>
//          </div>
//       )
//    }
// }
//
// const mapStateToProps = (state) => {
//    return{
//       items: state.pizzas.items,
//       filters: state.filters
//    }
// }
//
// const mapDispatchToProps = (dispatch) => {
//    return{
//       setPizzas: (items) => dispatch(setPizzas(items))
//    }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
