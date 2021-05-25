import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="homeContainerOne">
      <p>Welcome to the NSA testing portal</p>
      <p>This is designed to help you keep track of the firearms that have been tested</p>
      <p>This will generate a report that will have all of the test results, and serial numbers, from that specific day</p>
      <p>Please begin by signing into the portal</p>
      <Link to="/Login"><button className="homepageLoginButton" type="submit">Login</button></Link> 
    </div>
  );
}
