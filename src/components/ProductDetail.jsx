import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  let { productid } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productid}`
    );
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    if (productid && productid !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productid]);
  return (
    <div className="ui placeholder segment">
      <div className="ui two column stackable center aligned grid">
        <div className="middle aligned row">
          <div className="column lp">
            <img className="ui " height={"700px"} src={image} alt={title} />
          </div>
          <div className="column rp">
            <h1>{title}</h1>
            <h2>
              <a href=" " className="ui teal tag label">
                ₹{price}
              </a>
            </h2>
            <h3
              className="ui brown block header"
              style={{ height: "90px", padding: "5px" }}
            >
              {category}
            </h3>
            <p>{description}</p>
            <div className="ui verticle animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
