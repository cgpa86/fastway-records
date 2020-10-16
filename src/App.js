// feature 1
import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

class App extends React.Component {
 
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>

       
      <div className="grid-container">
        <header>
          <Link to="/">FASTWAY RECORDS® | Discos de Colección </Link>
          <Link to="/admin" > Orders  </Link>
        
        </header>
        <main>
          <Route path ="/admin" component={AdminScreen} />
          <Route path="/" component={HomeScreen} exact  />
           
        
                        
        </main>
        <footer> FastWayRecords® 2020 Todos los Derechos Reservados - desarrollado por P.A.C.G

        </footer>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
