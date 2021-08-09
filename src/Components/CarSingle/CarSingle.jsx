import "./carsingle.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiUrl from "../../../apiConfig";

function CarSingle(props) {
  const [car, setCar] = useState(null);
  console.log(car);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(
          `${apiUrl}/cars/${props.match.params.id}`
        );
        setCar(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [props.match.params.id]);

  if (!car) {
    return <p>...loading</p>;
  }

  return (
    <div className="CarSingle">
      <div className="container">
        <div className="single-content">
          <h1>{car.model}</h1>
          <h2>{car.year}</h2>
          <p>{car.price}</p>
          <p>{car.preowned ? "Preowned" : "New"}</p>
          <Link to={"/contact"} className="contact-us-link">Contact us Now...</Link>
        </div>
        <div className="single-image">
          <img src={car.imageurl} alt="subaru" />
        </div>
      </div>
    </div>
  );
}

export default CarSingle;
