import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__first footer1">
        <h2>Menu</h2>
        <ul>
          <li>Veg Pizza</li>
          <li>Chicken Pizza</li>
          <li>Pasta</li>
          <li>Pizza Crust</li>
          <li>Beverages</li>
          <li>Pizza Mania</li>
          <li>Burger Pizza</li>
        </ul>
      </div>
      <div className="footer__second footer1">
        <h2>company</h2>
        <ul>
          <li>Blog</li>
          <li>Investor</li>
          <li>FeedBack</li>
          <li>Ads</li>
        </ul>
      </div>
      <div className="footer__second footer1">
        <h2>Pizza Restaurants</h2>
        <ul>
          <li>Restaurants Near Me</li>
          <li>Pizza Near Me</li>
          <li>Food Near Me</li>
          <li>Food Delivery</li>
          <li>Italian Food</li>
          <li>Order Food Online</li>
        </ul>
      </div>
      <div className="footer__third footer1">
        <h2>about</h2>
        <ul>
          <li>Gift card</li>
          <li>Card Balance Enquiry</li>
          <li>FAQ</li>
          <li>Virtual Pizza Party</li>
          <li>E-Gift Vouchers</li>
        </ul>
      </div>
      <div className="footer__fourth footer1">
        <h2>legal</h2>
        <ul>
          <li>Disclaimer</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer__fifth footer1 social">
        <h2>Social media</h2>
        <div className="footer__fifthIcons">
          <FacebookIcon sx={{ fontSize: 40 }} />
          <TwitterIcon sx={{ fontSize: 40 }} />
          <InstagramIcon sx={{ fontSize: 40 }} />
          <YouTubeIcon sx={{ fontSize: 40 }} />
        </div>
        <img
          src="https://www.dominos.co.in/assets/hello_dominos_20210615.png"
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Footer;
