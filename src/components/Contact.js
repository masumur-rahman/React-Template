import React, {Component} from 'react';

export class Contact extends Component {
    render() {
        return (
            <div>

                {/* ======= Contact Section ======= */}
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row contact-info">
                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="icofont-google-map"/>
                                    <h3>Address</h3>
                                    <address>A108 Adam Street, NY 535022, USA</address>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="icofont-phone"/>
                                    <h3>Phone Number</h3>
                                    <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="icofont-envelope"/>
                                    <h3>Email</h3>
                                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="form">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="form-row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name"
                                               placeholder="Your Name" data-rule="minlen:4"
                                               data-msg="Please enter at least 4 chars"/>
                                        <div className="validate"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <input type="email" className="form-control" name="email" id="email"
                                               placeholder="Your Email" data-rule="email"
                                               data-msg="Please enter a valid email"/>
                                        <div className="validate"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="subject" id="subject"
                                           placeholder="Subject" data-rule="minlen:4"
                                           data-msg="Please enter at least 8 chars of subject"/>
                                    <div className="validate"/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" rows={5} data-rule="required"
                                              data-msg="Please write something for us" placeholder="Message"
                                              defaultValue={""}/>
                                    <div className="validate"/>
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"/>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* End Contact Section */}
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="footer-info">
                                        <h3>Groovin</h3>
                                        <p>
                                            A108 Adam Street <br />
                                            NY 535022, BD<br /><br />
                                            <strong>Phone:</strong> +1 555 4444 55<br />
                                            <strong>Email:</strong> info@example.com<br />
                                        </p>
                                        <div className="social-links mt-3">
                                            <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                                            <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                                            <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                                            <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                                            <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-6 footer-links">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 footer-links">
                                    <h4>Our Services</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                                        <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-md-6 footer-newsletter">
                                    <h4>Our Newsletter</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                    <form action method="post">
                                        <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            © Copyright <strong><span>Business</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/groovin-free-bootstrap-theme/ */}
                            Designed by <a href="https://bootstrapmade.com/">masumur.me</a>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}
                <a href="#" className="back-to-top"><i className="icofont-simple-up" /></a>
            </div>
        )
    }
}

export default Contact