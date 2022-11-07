import React, { Fragment } from "react";
import LoginSignup from "../auth/LoginSignup";
import { CartModal, Footer, Navber } from "../partials";
import "./service.css";

function Installation() {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
      </div>

      <Fragment>
        <div className="flex-grow">
          <Navber />
          <LoginSignup />
          <CartModal />
        </div>
        {/* Bloc Slider */}

        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner slider_block">
            <div class="carousel-item active">
              <img class="d-block w-100" src="SIE.jpg" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="SIR.jpg" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="slider.jpg" alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* Bloc Slider */}
        <div class="d-inline-flex p-2 d-flex justify-content-around">
          <div class="row align-self-center ">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="text-center font-weight-bold">
                    Nos Service de Réparation
                  </p>

                  <br></br>
                  <img
                    src="installation.jpg"
                    className="h-80 object-fit rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
                    alt="Subscribe to get Email"
                  />
                  <div className=" text-center font-weight-normal">
                    <ul>
                      <li>
                        <h2>
                          <g>
                            <i>Réparation Informatique</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Systeme Du Surveillence</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Controle D'acces</i>
                          </g>
                        </h2>
                      </li>
                    </ul>
                  </div>

                  {/* <a href="/instalation" class="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="row align-self-center">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="text-center font-weight-bold">
                    Nos Service de Réparation
                  </p>

                  <br></br>
                  <img
                    src="installation.jpg"
                    className="h-80 object-fit rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
                    alt="Subscribe to get Email"
                  />
                  <div className=" text-center font-weight-normal">
                    <ul>
                      <li>
                        <h2>
                          <g>
                            <i>Réparation Informatique</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Systeme Du Surveillence</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Controle D'acces</i>
                          </g>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row align-self-center">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
                  <p class="text-center font-weight-bold">
                    Nos Service de Réparation
                  </p>

                  <br></br>
                  <img
                    src="installation.jpg"
                    className="h-80 object-fit rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
                    alt="Subscribe to get Email"
                  />
                  <div className=" text-center font-weight-normal">
                    <ul>
                      <li>
                        <h2>
                          <g>
                            <i>Réparation Informatique</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Systeme Du Surveillence</i>
                          </g>
                        </h2>
                        <h2>
                          <g>
                            <i>Réparation Controle D'acces</i>
                          </g>
                        </h2>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      <Footer />
    </Fragment>
  );
}

export default Installation;
