import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-4">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-12 text-center"> 
                        <p> {new Date().getFullYear()} Assil BOUASSIDA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
