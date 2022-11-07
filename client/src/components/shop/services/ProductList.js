import React, { Fragment } from "react";
// import Installation from "./Installation";
import LoginSignup from "../auth/LoginSignup";
import { CartModal, Footer, Navber } from "../partials";
function ProductList() {
  return (
    <Fragment>
      <div className="flex-grow ">
        <Navber />
        <LoginSignup />
        <CartModal />
      </div>
      {/* <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">instalation</p>
              <a href="/instalation" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">reparation</p>
              <a href="reparation" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </Fragment>
  );
}

export default ProductList;
