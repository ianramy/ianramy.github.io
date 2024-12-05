// src/pages/NotFound.js
import React from "react";

const NotFound = () => {
	return (
	  <div className="container text-center mt-5">
		<div className="alert alert-warning" role="alert">
		  <h1 className="display-1">404</h1>
		  <p className="lead">Page Not Found</p>
		  <p>The page you are looking for does not exist.</p>
		  <a href="/" className="btn btn-primary mt-3">Go Back to Home</a>
		</div>
	  </div>
	);
  };
  
  export default NotFound;
