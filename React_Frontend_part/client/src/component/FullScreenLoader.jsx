import React from 'react';

const FullScreenLoader = () => {
    return (
        <div>
            <div className="loader bg-white ">
                <div className="spinner-border text-info" role="status">
                     <span className="sr-only"></span>
                 </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;