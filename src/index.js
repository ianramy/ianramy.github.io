// src/index.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import styles from "./index.module.css";

// Get the root element from the HTML where we will mount our React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render our main App component inside the StrictMode for highlighting potential issues
root.render(
	<React.StrictMode>
		{/* 
      You can now apply any classes from index.module.css by using 'styles.className'
      For example, if you want to wrap App in a container defined in index.module.css, you can do:
      
    */}
		<div className={styles.container}>
			<App />
		</div>
	</React.StrictMode>
);

// Calling reportWebVitals function to measure performance and potentially log results
reportWebVitals();
