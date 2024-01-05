import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="navigation">
      <h1>Homepage</h1>
    </div>
  );
};

export default Home;
