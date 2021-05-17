import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderlist = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <div>
        <Link to={`/products/${id}`}>
          <div class="ui card" style={{ margin: "10px" }} key={id}>
            <div style={{ height: "310px", width: "310px" }}>
              <img src={image} height={"290px"} width={"280px"} alt={title} />
            </div>
            <div className="content">
              <a
                className="header"
                style={{ height: "80px", textAlign: "center" }}
                href=" "
              >
                {title}
              </a>
              <div className="meta">
                <span className="date" style={{ fontSize: "20px" }}>
                  ₹{price}
                </span>
              </div>
            </div>
            <div className="extra content">
              <a href=" ">
                <i className="user icon"></i>
                {category}
              </a>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderlist}</>;
};

export default ProductComponent;
