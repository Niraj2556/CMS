import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <div className="box-dark center">
            <p className="">© 2023 - All Rights Reserved.</p>
            <Link to={'https://sarahjobs.com/'} className="link"> 
                By Sarah Siqueira
            </Link>
        </div>
)};

export default Footer;