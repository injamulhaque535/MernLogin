import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <>
            <div className="notfoundpage">
                <div className="notfount">
                    <div className="notfount404">
                        <h1>404</h1>
                    </div>
                    <h2>The Page not is found!</h2>
                    <p>We are sorry, the page you are tring to visit does not exist</p>
                    <Link className='btn btn-primary rounded-pill' to="/">Back to Home</Link>
                </div>
            </div>
        </>
    )
}

export default Error