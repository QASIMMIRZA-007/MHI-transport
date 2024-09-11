import React, { useEffect, useState } from "react";

import "./orderCompleteCard.scss";
import { useNavigate } from "react-router-dom";
const OrderCompleteCard = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    const storedPayload = localStorage.getItem("formPayload");
    if (storedPayload) {
      setPayload(JSON.parse(storedPayload));
    }
  }, []);
  return (
    <div className="order-complete">
      <div className="order-card">
        <div className="order-card-content">
          <div className="order-emoji" role="img" aria-label="Party popper">
            🎉
          </div>
          <h1 className="order-title">Your order is complete!</h1>
          <p className="order-message">
            You will be receiving a confirmation email with order details.
          </p>
          <div className="order-summary">
            <h2>Your order summary</h2>
            {payload ? (
              <>
                <p>
                  <strong>Name: </strong> {payload.name}
                </p>
                <p>
                  <strong>Company Name:</strong> {payload.companyName}
                </p>
                <p>
                  <strong>Email:</strong> {payload.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {payload.phoneNumber}
                </p>
                <p>
                  <strong>Job Title:</strong> {payload.jobTitle}
                </p>
                <p>
                  <strong>Truck Name:</strong> {payload.truckName}
                </p>
                <p>
                  <strong>Truck Type:</strong> {payload.truckType}
                </p>
                <p>
                  <strong>Truck Size:</strong> {payload.truckSize}
                </p>
              </>
            ) : (
              <p>No payload found.</p>
            )}
          </div>
          <button onClick={() => navigate("/")} className="order-button">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleteCard;
