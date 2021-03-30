import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";


function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>My Address</h5>
                    <address>
                        2545 Fulton Ave<br />
                        Sacramento, CA 95821<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+19163465380"><i className="fa fa-phone" /> 1-916-346-5380</a><br />
                    <a role="button" className="btn btn-link" href="mailto:sadatsayed92@gmail.com"><i className="fa fa-envelope-o" /> SadatSayed92@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contact;