import React from 'react';
import "./homepage.css";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CakeIcon from "@mui/icons-material/Cake";
import RoomServiceIcon from "@mui/icons-material/RoomService";

const homepage = () => {
  return (
    <div>
    <div className="online">
      <div className="online__left">
        <h1>Domino's online ordering</h1>
        <p>Yummy pizza delivered fast & fresh</p>
        <button>Order online now</button>
        <img
          src="https://www.dominos.co.in/assets/banner_brand_20210922.jpg"
          alt="offer"
        />
      </div>
      <div className="online__right">
        <img src="https://www.dominos.co.in/assets/header_bg.png" alt="" />
      </div>
    </div>
    {/* coupon offers part */}
    <div className="offers">
      <h2>Coupons & Offers</h2>
      <marquee>
        <div className="offers__images">
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/amazon_home_20210412.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_Paytm_20210519.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_airtel_30082020.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_Freecharge_20210405.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Dominos_Mobi_Home_20210503.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_payzapp_20201029.jpg"
            alt=""
          />
          <img
            src="https://api.dominos.co.in/prod-olo-api/images/Home_au_20201029.jpg"
            alt=""
          />
        </div>
      </marquee>
    </div>
    {/* explorer part */}
    <div className="explore">
      <h2>Explore</h2>
      <div className="explore__card">
        <div className="explore__cardFirst">
          <MenuBookOutlinedIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>our menu</h2>
          <p>Explore our range of delicious Pizzas, delivered in 30 minutes!</p>
          <a href=" ">Discover Pizza</a>
        </div>
        <div className="explore__cardFirst">
          <StorefrontIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>nearby store</h2>
          <p>Find a Domino's Pizza restaurant near you</p>
          <a href=" ">find domino's store</a>
        </div>
        <div className="explore__cardFirst">
          <CakeIcon sx={{ fontSize: 90, color: "#191A19" }} className="icon" />
          <h2>birthday party</h2>
          <p>Celebrate the joy of borthday with Fresh & Hot pizzas</p>
          <a href=" ">book now</a>
        </div>
        <div className="explore__cardFirst">
          <RoomServiceIcon
            sx={{ fontSize: 90, color: "#191A19" }}
            className="icon"
          />
          <h2>catering</h2>
          <p>Live Domino's Kitchen for weddings/ corporate events</p>
          <a href=" ">book now</a>
        </div>
      </div>
    </div>
    {/* download part */}
    <div className="download">
      <div className="download__left">
        <img src="https://www.dominos.co.in/assets/new_app_img.png" alt="" />
      </div>
      <div className="download__right">
        <h2>Unlock Exclusive Offers</h2>
        <h3>
          For lightning fast ordering experience download the Domino’s app
        </h3>
        <div className="download__rightIcon">
          <img src="https://www.dominos.co.in/assets/play_store.png" alt="" />
          <img src="https://www.dominos.co.in/assets/app_store.png" alt="" />
        </div>
      </div>
    </div>
    {/* info part */}
    <div className="info">
      <div className="info__first">
        <h3>Domino's Pizza: Delivering Happiness</h3>
        <p>What’s better than having a crispy melty pizza, you ask?</p>
        <p>
          Having that crispy and melty pizza in the comfort of your own home
          with the ones you love, we say.
        </p>
        <p>
          With Domino's it is always “Rishton ka time”. Whether it's a treat for
          your promotion, a kid topping his class or winning the heart of your
          wife who is too tired to cook after a long day at work! A cheesy slice
          of the best pizza is all one needs to put things into perspective and
          start any celebration. Plus, you do not even need to rush to the
          restaurant to have one now. A call, a few clicks on our website or a
          few touches on the mobile screen is all you have to do to have that
          tempting, light-on-the-pocket pizza at your doorstep.
        </p>
        <p>
          There is something for everyone here. The vegetarians,
          non-vegetarians, the sides’ lovers and also the ones who love to have
          something sweet by the time they reach the last bite of the last slice
          of pizza slice.
        </p>
      </div>
      <div className="info__fourth">
        <h3>What We Need - More Choice. More Fun.</h3>
        <p>
          No matter what the situation, pizza always helps. Especially a pizza
          that gives you the freedom to choose your toppings - from paneer,
          crisp capsicum, onion, grilled mushroom, golden corn, black olives,
          fresh tomato, red paprika, jalapeno, paneer tikka and extra cheese to
          non-veg toppings such as pepper barbeque chicken, peri-peri chicken,
          grilled chicken rasher, chicken sausage or chicken tikka- the options
          are almost endless, anything and everything you can think of that too
          on top of the crust of your choice - New hand-tossed crust, wheat thin
          crust, cheese burst crust, classic hand-tossed crust or a fresh pan
          pizza. Because just like a pizza, Domino's understands you.
        </p>
        <p>
          And to shoo away those end-of-the-month blues while placing your order
          with our pizza restaurant, check out the everyday pizzas from pizza
          mania combos with everyday value offer of 2 pizzas starting at just
          ₹99 (regular size) and ₹199 (medium size) each.
        </p>
      </div>

      <div className="info__second">
        <h3>The Promise Of 30-Minute Delivery</h3>
        <p>
          The icing on the cake or more aptly the extra cheese on your already
          fabulous pizza is that Domino’s takes only half an hour for its pizza
          delivery service. Don’t believe us? Time it if you please. With 1250+
          stores present all over India, you can have a Domino’s pizza even
          while traveling on a train. Yes, you are reading it right, you can
          enjoy pizza on train too.
        </p>
        <p>
          So stop googling for the “pizza shops near me” and order from your
          nearest pizza outlet to have a hot box of pizza on your table in the
          next 30 minutes, or berth at the next halting station.
        </p>
      </div>
      <div className="info__third">
        <h3>Franchise Information</h3>
        <p>
          Jubilant FoodWorks Limited is the Master Franchisee of Domino’s Pizza
          in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive
          rights to own and operate Domino’s Pizza restaurants in these
          territories. For any franchise-related queries, kindly email us
          directly at dominos.franchise@jublfood.com
        </p>
        <p>
          We have come across a few instances of fraudsters posing as Jubilant
          FoodWorks and asking for payment from gullible investors against the
          promise of a Domino’s franchise. We therefore caution and urge all
          interested parties to be careful and vigilant and interact only with
          the email id mentioned above. Anyone dealing with such fraudsters
          shall be doing so on their own peril, risk and consequences.
        </p>
        <p>
          Neither Jubilant FoodWorks nor its Directors/Officers shall be
          responsible for any loss, harm, damage or fraud that occurs or may
          occur or arise to any person who decides to access such fake websites,
          or deal with them.
        </p>
      </div>
    </div>

    {/* all btn */}
    <div className="btn">
      <div className="first__row">
        <button>Menu</button>
        <button>Veg Pizza</button>
        <button>Chicken Pizza</button>
        <button>Pasta</button>
        <button>Pizza Crust</button>
        <button>Beverages</button>
        <button>Pizza Mania</button>
        <button>Burger Pizza</button>
        <button>Farm House pizza</button>
        <button>Veg Margherita Pizza</button>
        <button>Cheese Corn Pizza</button>
        <button>Double Cheese Margherita Pizza</button>
      </div>
      <div className="second__row">
        <button>Paneer Makhani Pizza</button>
        <button>Choco Lava Cake   </button>
        <button>Roasted Chicken Wings</button>
        <button>Garlic Bread</button>
        <button>Stuffed Garlic Bread</button>
        <button>Paneer Zingy Parcel</button>
        <button>Fresh Pan Pizza</button>
        <button>New Hand Tossed Pizza</button>
        <button>Classic Hand Tossed Pizza</button>
      </div>
    </div>
    </div>
  )
}

export default homepage