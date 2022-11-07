import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <div id="parent">
        <p>FOLLOW US ON SOCIAL MEDIA</p>

        <div id="social_media">
           <a href="https://www.facebook.com/1formaticOrangemetouia">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fab fa-instagram"></i>
          </a>
          {/* </a>
          <a href="https://www.facebook.com/1formaticOrangemetouia">
            <i class="fab fa-pinterest"></i>
          </a> */}
        </div>
        <footer
          style={{ background: "white", color: "#87898A" }}
          className="z-10 py-6 px-4 md:px-12 text-center"
        >
          © Copyright 2022 © Created with
          <span role="img">{"🧡"}</span>
          by Achr@f All Rights Reserved {moment().format("YYYY")}
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
