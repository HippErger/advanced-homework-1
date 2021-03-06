import React from "react";
import PropTypes from "prop-types";
import Reviews from "./Reviews";
import CreateStars from "./CreateStars";


function ProductInfo(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4 {this.props.inner.key}" >
      <div className="thumbnail">
        <img src={props.inner.imgUrl} alt=""
          onClick={props.onClick} />
        <div className="caption">
          <h4 className="pull-right">
            {props.inner.price}
          </h4>
          <h4>
            <a href="#">{props.inner.name}</a>
          </h4>
          <p>
            {props.inner.description}
            <a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">{props.inner.reviews}</p>
          <CreateStars starsSent={props.inner.rating} />
          <div>
            <Reviews snips={props.inner.comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  imageToUse: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inner: PropTypes.shape({
    comments: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired
  })
};

export default ProductInfo;
