import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";
import HeroBanner from "./HeroBanner";
import FeaturedProducts from "./FeaturedProducts";
import Loader from "../layout/Loader/Loader";
import ShopBySport from "../Home/ShopBySport";
import HomeBanner from "../Home/HomeBanner";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.products);

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

          <div>
            <HomeBanner />
          </div>
          <HeroBanner />
          <FeaturedProducts />
          <ShopBySport />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
