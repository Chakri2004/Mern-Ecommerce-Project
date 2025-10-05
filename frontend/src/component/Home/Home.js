import React, { Fragment, useEffect } from "react";
import { FaStar } from "react-icons/fa"; 
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import HeroBanner from "./HeroBanner";
import FeaturedProducts from "./FeaturedProducts";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="AURA.Keep Going.AURA.World " />

          <div className="banner">
            <p>AURA</p>
          </div>
          <div>
            <HeroBanner />
            <FeaturedProducts />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
