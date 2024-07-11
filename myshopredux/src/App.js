import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './containers/Header';
import ProductComonent from './containers/ProductComonent';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import ErrorPage from './containers/ErrorPage';



function App() {
  return (

    <>
      <Router>
   <Header/>
        <Routes>
          <Route  exact path="/" element={<ProductListing/>}/>
          <Route  exact path="/ProductListing/:productId" element={<ProductDetails/>}/>
          <Route >404 error found</Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
