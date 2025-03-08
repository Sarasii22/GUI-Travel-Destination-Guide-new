import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import people1 from "../../assets/people/Anna Martinez.jpg";
import people2 from "../../assets/people/John Doe.jpg";
import people3 from "../../assets/people/Emma Thompson.jpg";
import people4 from "../../assets/people/Jane Smith.jpg";
import people5 from "../../assets/people/Priya Sharma.jpg";
import people6 from "../../assets/people/Rajiv Patel.jpg";
import people7 from "../../assets/people/Sofia Russo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px", // No padding on edges, we’ll use CSS for gaps
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial">
      <div className="testimonial-title">
        <h4>Fans Love</h4>
        <h2>What Our Fans Say About Us</h2>
      </div>
      <Slider {...settings}>
        <div className="testimonial-card">
          <p>
            The trip was absolutely fantastic! Everything was perfectly organized, from transportation to accommodations. The guides were knowledgeable and made the experience truly memorable. I can’t wait to book my next adventure!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people1} alt="Anna Martinez" />
            <div className="testimonial-card-bottom-text">
              <h4>Anna Martinez</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            My family and I had a wonderful time exploring Sri Lanka with you. The itinerary was well thought out and the guides were friendly and knowledgeable. I would definitely recommend your services!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people2} alt="John Doe" />
            <div className="testimonial-card-bottom-text">
              <h4>John Doe</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            Our trip to Sri Lanka was truly amazing thanks to your services. The guides were attentive and made sure we had a great time. I highly recommend your services to anyone looking to explore Sri Lanka!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people3} alt="Emma Thompson" />
            <div className="testimonial-card-bottom-text">
              <h4>Emma Thompson</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            Thank you for the wonderful experience! The guides were friendly and knowledgeable, and the accommodations were top-notch. I can’t wait to book my next trip with you!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people4} alt="Jane Smith" />
            <div className="testimonial-card-bottom-text">
              <h4>Jane Smith</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            Our trip to Sri Lanka was truly unforgettable. The guides were friendly and knowledgeable, and the accommodations were excellent. I would definitely book with you again!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people5} alt="Priya Sharma" />
            <div className="testimonial-card-bottom-text">
              <h4>Priya Sharma</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            Thank you for the amazing experience! The guides were friendly and knowledgeable, and the accommodations were excellent. I can’t wait to book my next trip with you!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people6} alt="Rajiv Patel" />
            <div className="testimonial-card-bottom-text">
              <h4>Rajiv Patel</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <p>
            Our trip to Sri Lanka was truly unforgettable. The guides were friendly and knowledgeable, and the accommodations were excellent. I would definitely book with you again!
          </p>
          <div className="testimonial-card-bottom">
            <img src={people7} alt="Sofia Russo" />
            <div className="testimonial-card-bottom-text">
              <h4>Sofia Russo</h4>
              <p>Traveler</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;