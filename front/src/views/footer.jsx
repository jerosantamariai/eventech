import React from "react"


const Footer = props => {
    return (
        <>
                <footer>
                    <div className="row">
                        <div className="col-md-6 col-xs-6" id="left-footer">
                            <h3>Quick Links</h3>
                            <p>
                                <ul>
                                    <li>
                                        <a className="active" to="#">Home</a>
                                    </li>
                                    <li>
                                        <a to="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a to="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a to="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="col-md-6 col-xs-6" id="right-footer">
                            <h3>Follow me on</h3>
                            <div id="social-media-footer">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p>This website is developed by JIM</p>
                        </div>
                    </div>
                </footer>

        </>
    )
}

export default Footer;  