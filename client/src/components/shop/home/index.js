import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import "./style.css";

// import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
// import SingleProduct from "./SingleProduct";
import Iframe from "react-iframe";
export const HomeContext = createContext();
const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      <br></br>
      <h2 className="text_title_home">Nous Rejoindre</h2>
      <div class="row">
        <div className="flex items-center justify-center block_newsletter_home degrade-horizontal col-md-6">
          <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
            <div className="flex flex-col md:flex-row rounded-l-xl">
              <img
                src="phone.webp"
                className="h-80 object-fit rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-200"
                alt="Subscribe to get Email"
              />
              <div className="p-6 md:p-12">
                <h1 className="font-serif text-xl font-medium text-center text-white md:text-left">
                  Restons en Contact
                </h1>
                <p className="max-w-xs my-4 text-xs.leading-5.tracking-wide text-center text-white md:text-left">
                  Inscrivez-vous pour suivre nos nouveauté
                </p>

                <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center placeholder:md:text-left md:text-left focus:outline-none"
                  />

                  <button className="px-4 text-xs rounded-md text-white bg-orange-600	">
                    Abonnez-vous maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="col-md-6">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d282.5441535013512!2d10.007546826191753!3d33.95781692966437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12557b7e9aa3e619%3A0x8044297338666687!2sORANGE%20METOUIA!5e0!3m2!1sfr!2stn!4v1666980923590!5m2!1sfr!2stn"
            width="100%"
            height="450"
            // style="border:0;"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </section>
      </div>
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
