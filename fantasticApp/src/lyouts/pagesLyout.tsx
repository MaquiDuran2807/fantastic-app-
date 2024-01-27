import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const PagesLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='container-fluid'>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default PagesLayout;
