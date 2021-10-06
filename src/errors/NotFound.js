import React from 'react';
import "./NotFound.css";

function NotFound() {
    return (
        <div id="notFound">
            <div className = "notFound">
                <div className="notFound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p className = "errorText">
                    The page you are looking for doesn't exist 
                    had its name changed or its temporarily unavailable.
                </p>
                
            </div>

        </div>
    );
}

export default NotFound;