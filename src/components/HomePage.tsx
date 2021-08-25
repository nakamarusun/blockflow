import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <div>
    <h4>This is my homeee</h4>
    <Link to="about">About</Link>
  </div>
);

export default HomePage;