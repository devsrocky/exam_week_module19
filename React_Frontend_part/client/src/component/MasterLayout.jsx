import React from 'react';
import NavBar from './NavBar';


const MasterLayout = (proofs) => {
    return (
        <div className='d-flex'>
            <NavBar/>
            {proofs.children}
            
        </div>
        
    );
};

export default MasterLayout;