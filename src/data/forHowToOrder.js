import "./forHowToOrder.css";
import { Link } from "react-router-dom";
import pic1 from "../assets/step-pic-1.jpg";
import pic2 from "../assets/step-pic-2.jpg";
import pic3 from "../assets/step-pic-3.jpg";
import pic4 from "../assets/step-pic-4.jpg";

const steps = [
  {
    stepHeader: "Go to Products page",
    stepBody: (
      <div className="steps-to-order">
        <h1>
          1. First move to the <Link to="/products">products</Link> page
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum,
          fugit atque tempora quasi, laudantium nisi, maiores eaque sequi
          corrupti distinctio accusantium molestias molestiae reiciendis
          dignissimos quo obcaecati libero! Natus!
        </p>
        <img src={pic1} alt="shows where is the link to products" />
      </div>
    ),
  },
  {
    stepHeader: "Choose Liked Product",
    stepBody: (
      <div className="steps-to-order">
        <h1>1. Choose the product from the Product list</h1>
        <p>
          Moreover to choose use filters which is located at the left of the
          page. And Sort by price and discount at the top, below navbar.
        </p>
        <img src={pic2} alt="showing product list" />
      </div>
    ),
  },
  {
    stepHeader: "Add to Cart",
    stepBody: (
      <div className="steps-to-order">
        <h1>4. Add the product to the cart</h1>
        <p>
          Before adding You need to choose color and size from avaiable sizes
          and colors. Or If your willing color is not present, then you can add
          to Favorites.
        </p>
        <img src={pic3} alt="showing where is the add to cart button" />
      </div>
    ),
  },
  {
    stepHeader: "proceed in cart page",
    stepBody: (
      <div className="steps-to-order">
        <h1>4. Order and fill properties</h1>
        <p>
          You can pay by card or, pay on delivery. Due to of undeveloped fintech
          in our country. People usually choose pay on delivery.
        </p>
        <img src={pic4} alt="show how to proceed in cart page" />
      </div>
    ),
  },
];

export default steps;
