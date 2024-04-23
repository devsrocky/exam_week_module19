import React from 'react';
import NavBar from '../component/NavBar';

const PageNotFound = () => {
    return (
        <div className='d-flex'>
            <NavBar/>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 not-Found">
                        404 PAGE NOT FOUND
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PageNotFound;