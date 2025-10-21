import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import { useSelector } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/userAction";

import Header from "./component/layout/Header/Header";
import ScrollToTop from "./component/layout/ScrollToTop/ScrollToTop";
import Footer from "./component/layout/Footer/Footer";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";

import Home from "./component/Home/Home";
import Products from "./component/Product/Products";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search";
import Help from "./component/layout/Pages/Help";
import JoinUs from "./component/layout/Pages/JoinUs";
import ShopAppPage from "./component/layout/Pages/ShopAppPage";
import RunClubPage from "./component/layout/Pages/RunClubPage";
import TrainingClubPage from "./component/layout/Pages/TrainingClubPage";
import NotFound from "./component/layout/NotFound/NotFound";
import Wishlist from "./component/Cart/Wishlist";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import Orders from "./component/Cart/Orders";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";
import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import FindStore from "./component/layout/Pages/FindStore";
import NewFeatured from "./component/layout/Pages/NewFeatured";
import Mens from "./component/layout/Pages/Mens";
import Womens from "./component/layout/Pages/Womens";
import Kids from "./component/layout/Pages/Kids";
import Shoes from "./component/layout/Pages/Shoes";
import Laptops from "./component/layout/Pages/Laptops";

import BecomeMember from "./component/layout/Pages/BecomeMember";
import Careers from "./component/layout/Pages/Careers";
import Sustainability from "./component/layout/Pages/Sustainability";
import News from "./component/layout/Pages/News";
import Report from "./component/layout/Pages/Report";
import Support from "./component/layout/Pages/Support";
import About from "./component/layout/Pages/About";
import FAQs from "./component/layout/Pages/FAQs";
import Promotions from "./component/layout/Pages/Promotions";
import TrackOrder from "./component/layout/Pages/TrackOrder";
import TermsAndConditions from "./component/layout/Pages/TermsAndConditions";
import PrivacyPolicy from "./component/layout/Pages/PrivacyPolicy";
import Contact from "./component/layout/Pages/Contact";
import Feedback from "./component/layout/Pages/Feedback";
import Delivery from "./component/layout/Pages/Delivery";
import Returns from "./component/layout/Pages/Returns";
import OrderStatus from "./component/layout/Pages/OrderStatus";
import DispatchDelivery from "./component/layout/Pages/DispatchDelivery";
import TermsOfSale from "./component/layout/Pages/TermsOfSale";
import TermsOfUse from "./component/layout/Pages/TermsOfUse";
import LiveChatBot from "./component/layout/Pages/LiveChatBot";

import AuraVoyagerJerseyCollection from "./component/collection/AuraVoyagerJerseyCollection";
import AuraStellarCollection from "./component/collection/AuraStellarCollection";
import AuraEclipseCollection from "./component/collection/AuraEclipseCollection";
import AuraNovaCollection from "./component/collection/AuraNovaCollection";

import ShopBySport from "./component/Home/ShopBySport";
import Basketball from "./component/Sports/Basketball"
import Football from "./component/Sports/Football";
import Running from "./component/Sports/Running";
import Badminton from "./component/Sports/Badminton";
import Tennis from "./component/Sports/Tennis";
import Cricket from "./component/Sports/Cricket";
import Golf from "./component/Sports/Golf";
import Rugby from "./component/Sports/Rugby";
import Skateboarding from "./component/Sports/Skateboarding";

import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import SignInPage from "./component/User/SignInPage";
import SignUpPage from "./component/User/SignUpPage";
import VerifySignUpPage from "./component/User/VerifySignUpPage";

import "./component/layout/Pages/Pages.css";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    WebFont.load({ google: { families: ["Roboto", "Droid Sans", "Chilanka"] } });
    store.dispatch(loadUser());
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <ScrollToTop />
      {isLoggedIn ? (
        <>
          <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} user={user} />
          {isAuthenticated && <UserOptions user={user} />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/help" component={Help} />
            <Route path="/order-status" component={OrderStatus} />
            <Route path="/dispatch-delivery" component={DispatchDelivery} />
            <Route path="/terms-of-sale" component={TermsOfSale} />
            <Route path="/terms-of-use" component={TermsOfUse} />
            <Route exact path="/join-us" component={JoinUs} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/verify-signup" component={VerifySignUpPage} />
            <Route exact path="/shop-app" component={ShopAppPage} />
            <Route exact path="/run-club" component={RunClubPage} />
            <Route exact path="/training-club" component={TrainingClubPage} />
            <Route exact path="/search/:keyword?" component={Search} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:keyword" component={Products} />
            <Route exact path="/search" component={Search} />

            <Route exact path="/collection/aura-voyager-jersey-collection" component={AuraVoyagerJerseyCollection} />
            <Route exact path="/collection/aura-stellar-collection" component={AuraStellarCollection} />
            <Route exact path="/collection/aura-eclipse-collection" component={AuraEclipseCollection} />
            <Route exact path="/collection/aura-nova-collection" component={AuraNovaCollection} />

            <Route exact path="/shop-by-sport" element={<ShopBySport />} />
            <Route exact path="/collection/basketball" component={Basketball} />
            <Route exact path="/collection/football" component={Football} />
            <Route exact path="/collection/running" component={Running} />
            <Route exact path="/collection/badminton" component={Badminton} />
            <Route exact path="/collection/tennis" component={Tennis} />
            <Route exact path="/collection/cricket" component={Cricket} />
            <Route exact path="/collection/golf" component={Golf} />
            <Route exact path="/collection/rugby-shoes" component={Rugby} />
            <Route exact path="/collection/skateboarding-shoes" component={Skateboarding} />

            <ProtectedRoute exact path="/account" component={Profile} />
            <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
            <ProtectedRoute exact path="/password/update" component={UpdatePassword} />
            <Route exact path="/password/forgot" component={ForgotPassword} />
            <Route exact path="/password/reset/:token" component={ResetPassword} />

            <Route exact path="/wishlist" component={Wishlist} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/order/confirm" component={ConfirmOrder} />
            <Route exact path="/process/payment" component={Payment} />
            <Route exact path="/order-success" component={OrderSuccess} />
            <Route exact path="/orders" component={Orders} />
            <ProtectedRoute exact path="/orders" component={MyOrders} />
            <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

            <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} isAdmin />
            <ProtectedRoute exact path="/admin/products" component={ProductList} isAdmin />
            <ProtectedRoute exact path="/admin/product" component={NewProduct} isAdmin />
            <ProtectedRoute exact path="/admin/product/:id" component={UpdateProduct} isAdmin />
            <ProtectedRoute exact path="/admin/orders" component={OrderList} isAdmin />
            <ProtectedRoute exact path="/admin/order/:id" component={ProcessOrder} isAdmin />
            <ProtectedRoute exact path="/admin/users" component={UsersList} isAdmin />
            <ProtectedRoute exact path="/admin/user/:id" component={UpdateUser} isAdmin />
            <ProtectedRoute exact path="/admin/reviews" component={ProductReviews} isAdmin />

            <Route exact path="/find-store" component={FindStore} />
            <Route exact path="/new-featured" component={NewFeatured} />
            <Route exact path="/mens" component={Mens} />
            <Route exact path="/womens" component={Womens} />
            <Route exact path="/kids" component={Kids} />
            <Route exact path="/shoes" component={Shoes} />
            <Route exact path="/laptops" component={Laptops} />
            <Route exact path="/become-member" component={BecomeMember} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/sustainability" component={Sustainability} />
            <Route exact path="/news" component={News} />
            <Route exact path="/report" component={Report} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/LiveChatBot" component={LiveChatBot} />
            <Route exact path="/about" component={About} />
            <Route path="/support" component={Support} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/promotions" component={Promotions} />
            <Route path="/track-order" component={TrackOrder} />
            <Route path="/termsandconditions" component={TermsAndConditions} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/returns" component={Returns} />

            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
      ) : (
        <Switch>
          <Route
            exact
            path="/signin"
            render={(props) => <SignInPage {...props} handleLogin={handleLogin} />}
          />
          <Route
            path="*"
            render={(props) => <SignInPage {...props} handleLogin={handleLogin} />}
          />
        </Switch>
      )}
    </Router>
  );
}

export default App;
