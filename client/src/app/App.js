import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import CartItemsProvider from '../Context/CartItemsProvider';
import WishItemsProvider from '../Context/WishItemsProvider';
import ManageAccount from '../components/Account/ManageAccount/ManageAccount';
import MyAccount from '../components/Account/MyAccount/MyAccount';
import Login from '../components/Authentication/Login/Login';
import Register from '../components/Authentication/Register/Register';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Shop from '../components/Shop/Shop';
import Wishlist from '../components/Wishlist';
import CategoryView from '../routes/CategoryView';
import Home from '../routes/Home';
import ItemView from '../routes/ItemView';
import SearchView from '../routes/Search';
import './App.css';
// import DrawerNav from '../components/Nav/DrawerNav/DrawerNav';
// import Checkout from '../components/Checkout/Checkout';
import SearchProvider from '../Context/SearchProvider';

function App() {

  return (
   <CartItemsProvider>
      <WishItemsProvider>
        <SearchProvider>
          <Router >
            <Header />
            <Routes>
              <Route index element={<Home />}/>
              <Route path="/account">
                <Route path="me" element={<MyAccount/>}/>
                <Route path="manage" element={<ManageAccount/>}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Login />}/>
              </Route>
              <Route path="/shop" element={<Shop />}/>
              <Route path="/category">
                <Route path=":id" element={<CategoryView />}/>
              </Route>
              <Route path="/item">
                <Route path="/item/men">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/women">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/kids">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
                <Route path="/item/featured">
                  <Route path=":id" element={<ItemView />}/>
                </Route>
              </Route>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/search/*" element={<SearchView />} />
            </Routes>
            <Footer />
            <Routes>
            <Route path="/admin" element={<Wishlist />} />
            </Routes>
          </Router>
        </SearchProvider>
      </WishItemsProvider>
   </CartItemsProvider>
  );
}

export default App;