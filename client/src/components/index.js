import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  Services,
  Installation,
  Reparation,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import { Product } from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ProductList } from "./shop";
// import SingleProduct from "./shop/product/SingleProduct";
/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/product" component={Product} />
        <Route path="/Services" component={Services} />
        <Route path="/instalation" component={Installation} />
        <Route path="/reparation" component={Reparation} />

        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}
        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        {/* Admin Routes End */}
        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}
        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
