import React from "react";
import classes from './detail.module.css'
import Image1 from "../assets/product2of1.jpg"
import Image2 from "../assets/product2of2.jpg"
function SecondDetails() {
  return (
    <div>

      <div>
        <div>
          <div className={classes.img}>
            <img
              src={Image1}
              alt="img1"
              width="250px"
              height="250px"
              draggable="true"
            ></img>
            <img
              src={Image2}
              alt="img2"
              width="250px"
              height="250px"
              draggable="true"
            ></img>

            <ul>
              {" "}
              <h6>Allen Solly</h6>
              <div>
                <h6>Men's Slim Fit Shirt</h6>
              </div>
              <p style={{ color: "green" }}>
                {" "}
                <small>Special price</small>
              </p>
              <small>
                <del>₹1,999</del>{" "}
                <sapn style={{ color: "green" }}> 75% off</sapn>
              </small>{" "}
              <h5>₹500 </h5>
              <p>
                {" "}
                <span className={classes.star}>
                  4 <span className={classes.starin}>*</span>
                </span>{" "}
                11,644 ratings and 733 reviews
              </p>
            </ul>
          </div>

          <div>
            <p>Available offers</p>
            <span>
              <ul>
                <li>Special Price Get at flat ₹339 T&C</li>
                <li>
                  Partner OfferPurchase now & get a surprise cashback coupon for
                  January / February 2023 Know More
                </li>

                <li>
                  Partner OfferSign up for Flipkart Pay Later and get Flipkart
                  Gift Card worth up to ₹500* Know More
                </li>
                <li>
                  {" "}
                  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min
                  Order Value ₹1000. Valid once per Paytm account T&C
                </li>
              </ul>
            </span>
          </div>

          <div className={classes.img}>
            <ul>
              <h3>Ratings & Reviews</h3>
              <span>
                <p>
                  {" "}
                  <span className={classes.star}>
                    5 <span className={classes.starin}>*</span>
                  </span>{" "}
                  so super t-shirt 👌👌
                  <div>Ritu Jan, 2022</div>
                  Certified Buyer, nagercoil.
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    5 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Nice product 👍
                  <div>Chaitali Saha Jan, 2021</div>
                  Certified Buyer, Maldah District
                </p>

                <p>
                  {" "}
                  <span className={classes.star}>
                    3 <span className={classes.starin}>*</span>
                  </span>{" "}
                  Nice product I love
                  <div>Ashraf Jan, 2021</div>
                  Certified Buyer, Bengaluru
                </p>
              </span>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SecondDetails;