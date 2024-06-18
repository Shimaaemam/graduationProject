import React, { useState, useEffect } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const [mainImage, setMainImage] = useState(
    "/images/703b2f6803273e0b15898a7e18b647ff.png"
  );
  const [quantity, setQuantity] = useState(1);
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchProductDetails();
  // }, []);

  // const fetchProductDetails = async () => {
  //   try {
  //     const response = await fetch('https://clean-green-agriculture.vercel.app/product/:productId'); // Replace with your API endpoint
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch product details');
  //     }
  //     const data = await response.json();
  //     setProduct(data);
  //     setMainImage(data.mainImage);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const handleQuantityChange = (operation) => {
    if (operation === "increase") {
      setQuantity(quantity + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!product) return null;

  return (
    <div className="product-page">
      <h1>Product Name</h1>
      <div className="product-container">
        <div className="left-part">
          <img src={mainImage} alt="Main product" />
          <div className="small-img">
            {/* {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={Product view ${index + 1}}
                onClick={() => handleImageClick(image)}
              />
            ))} */}
            <img
              src="/images/703b2f6803273e0b15898a7e18b647ff.png"
              alt="Product view 1"
              onClick={() =>
                handleImageClick("/images/703b2f6803273e0b15898a7e18b647ff.png")
              }
            />
            <img
              src="/images/703b2f6803273e0b15898a7e18b647ff.png"
              alt="Product view 2"
              onClick={() =>
                handleImageClick("/images/703b2f6803273e0b15898a7e18b647ff.png")
              }
            />
            <img
              src="/images/703b2f6803273e0b15898a7e18b647ff.png"
              alt="Product view 3"
              onClick={() =>
                handleImageClick("/images/703b2f6803273e0b15898a7e18b647ff.png")
              }
            />
          </div>
        </div>
        <div className="right-part">
          <h2>Product Name</h2>
          <p className="price">
           Price: £199.00
          </p>
          <p className="availability">
            Availability: Available
          </p>
          <div className="quantity-container">
            <span>Quantity:</span>
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange("decrease")}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange("increase")}
            >
              +
            </button>
          </div>
          <p className="stock-info">
            * In stock (15 units), ready to be shipped
          </p>
          <button className="add-to-cart">ADD TO CART</button>
          <button className="buy-now">BUY IT NOW</button>
          <button className="add-to-wishlist">♡ ADD TO WISHLIST</button>
          <hr />
          <div className="additional-info">
            <span>
              <i className="fas fa-truck"></i> Delivery
            </span>
            <span>
              <i className="fas fa-headset"></i> 27/4 Support
            </span>
            <span>
              <i className="fas fa-lock"></i> Secure Payment
            </span>
          </div>

          <div className="share">
            <span>Share:</span>
            <a href="#" className="share-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="share-icon pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" className="share-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        <p>
          The Bird of Paradise is considered the queen of the indoor plant
          world. This large, upright plant adds a rich, tropical flair to your
          space as its glossy, banana-shaped leaves fan out. It is relatively
          hardy and adapts to a wide spectrum of light conditions from direct
          sun to low, indirect light, but will flourish in a sunny spot.
        </p>
      </div>
      <button className="continue-shopping">CONTINUE SHOPPING</button>
    </div>
  );
}

export default ProductDetails;