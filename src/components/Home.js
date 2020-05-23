import React, { Component } from 'react';

export  class Home extends Component {
    render() {
        return(
            <div>
                {/* ======= Hero Section ======= */}
                <section id="hero">
                    <div className="hero-container">
                        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
                            <ol className="carousel-indicators" id="hero-carousel-indicators" />
                            <div className="carousel-inner" role="listbox">
                                {/* Slide 1 */}
                                <div className="carousel-item active" style={{background: 'url(assets/img/slide/slide-1.jpg)'}}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Grow Your Business</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <div>
                                                <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="carousel-item" style={{background: 'url(assets/img/slide/slide-2.jpg)'}}>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <div>
                                                <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Slide 3 */}
                                <div className="carousel-item" style={{background: 'url(assets/img/slide/slide-3.jpg)'}}>
                                    <div className="carousel-background"><img src="assets/img/slide/slide-3.jpg" alt="" /></div>
                                    <div className="carousel-container">
                                        <div className="carousel-content">
                                            <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
                                            <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                                            <div>
                                                <a href="#about" className="btn-get-started animated fadeInUp scrollto">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                                <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= About Section ======= */}
                    <section id="about" className="about">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
                                <div className="col-xl-7 pl-0 pl-lg-5 pr-lg-1 d-flex align-items-stretch">
                                    <div className="content d-flex flex-column justify-content-center">
                                        <h3>Voluptatem dignissimos provident quasi</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 icon-box">
                                                <i className="bx bx-receipt" />
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                            <div className="col-md-6 icon-box">
                                                <i className="bx bx-cube-alt" />
                                                <h4>Ullamco laboris nisi</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                            <div className="col-md-6 icon-box">
                                                <i className="bx bx-images" />
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                            <div className="col-md-6 icon-box">
                                                <i className="bx bx-shield" />
                                                <h4>Beatae veritatis</h4>
                                                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                            </div>
                                        </div>
                                    </div>{/* End .content*/}
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Section */}
                    {/* ======= Counts Section ======= */}
                    <section id="counts" className="counts">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="icofont-simple-smile" />
                                        <span data-toggle="counter-up">232</span>
                                        <p><strong>Happy Clients</strong> consequuntur quae</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="icofont-document-folder" />
                                        <span data-toggle="counter-up">521</span>
                                        <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="icofont-live-support" />
                                        <span data-toggle="counter-up">1,463</span>
                                        <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="icofont-users-alt-5" />
                                        <span data-toggle="counter-up">15</span>
                                        <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Counts Section */}
                    {/* ======= Clients Section ======= */}
                    <section id="clients" className="clients section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                                    <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>{/* End Clients Section */}
                    {/* ======= Services Section ======= */}
                    <section id="services" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Services</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-computer" /></div>
                                    <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-chart-bar-graph" /></div>
                                    <h4 className="title"><a href>Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-earth" /></div>
                                    <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-image" /></div>
                                    <h4 className="title"><a href>Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-settings" /></div>
                                    <h4 className="title"><a href>Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-tasks-alt" /></div>
                                    <h4 className="title"><a href>Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= Why Us Section ======= */}
                    <section id="why-us" className="why-us">
                        <div className="container">
                            <div className="section-title">
                                <h2>Why Us</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="box">
                                        <span>01</span>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box">
                                        <span>02</span>
                                        <h4>Repellat Nihil</h4>
                                        <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-4 mt-lg-0">
                                    <div className="box">
                                        <span>03</span>
                                        <h4> Ad ad velit qui</h4>
                                        <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Why Us Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="portfolio" className="portfolio">
                        <div className="container">
                            <div className="section-title">
                                <h2>Portfolio</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-card">Card</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 2</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 2</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 2</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>App 3</h4>
                                            <p>App</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 1</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Card 3</h4>
                                            <p>Card</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>Web 3</h4>
                                            <p>Web</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="portfolio-details.html" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Portfolio Section */}
                    {/* ======= Team Section ======= */}
                    <section id="team" className="team">
                        <div className="container">
                            <div className="section-title">
                                <h2>Team</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="member">
                                        <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Walter White</h4>
                                                <span>Chief Executive Officer</span>
                                                <div className="social">
                                                    <a href><i className="icofont-twitter" /></a>
                                                    <a href><i className="icofont-facebook" /></a>
                                                    <a href><i className="icofont-instagram" /></a>
                                                    <a href><i className="icofont-linkedin" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
                                    <div className="member">
                                        <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Sarah Jhonson</h4>
                                                <span>Product Manager</span>
                                                <div className="social">
                                                    <a href><i className="icofont-twitter" /></a>
                                                    <a href><i className="icofont-facebook" /></a>
                                                    <a href><i className="icofont-instagram" /></a>
                                                    <a href><i className="icofont-linkedin" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
                                    <div className="member">
                                        <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>William Anderson</h4>
                                                <span>CTO</span>
                                                <div className="social">
                                                    <a href><i className="icofont-twitter" /></a>
                                                    <a href><i className="icofont-facebook" /></a>
                                                    <a href><i className="icofont-instagram" /></a>
                                                    <a href><i className="icofont-linkedin" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
                                    <div className="member">
                                        <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                        <div className="member-info">
                                            <div className="member-info-content">
                                                <h4>Amanda Jepson</h4>
                                                <span>Accountant</span>
                                                <div className="social">
                                                    <a href><i className="icofont-twitter" /></a>
                                                    <a href><i className="icofont-facebook" /></a>
                                                    <a href><i className="icofont-instagram" /></a>
                                                    <a href><i className="icofont-linkedin" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Team Section */}
                    {/* ======= Pricing Section ======= */}
                    <section id="pricing" className="pricing">
                        <div className="container">
                            <div className="section-title">
                                <h2>Pricing</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="box">
                                        <h3>Free</h3>
                                        <h4><sup>$</sup>0<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li className="na">Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                    <div className="box recommended">
                                        <h3>Business</h3>
                                        <h4><sup>$</sup>19<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li className="na">Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="box">
                                        <h3>Developer</h3>
                                        <h4><sup>$</sup>29<span> / month</span></h4>
                                        <ul>
                                            <li>Aida dere</li>
                                            <li>Nec feugiat nisl</li>
                                            <li>Nulla at volutpat dola</li>
                                            <li>Pharetra massa</li>
                                            <li>Massa ultricies mi</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Pricing Section */}
                    {/* ======= Frequently Asked Questions Section ======= */}
                    <section id="faq" className="faq section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Frequently Asked Questions</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                            </div>
                            <div className="faq-list">
                                <ul>
                                    <li data-aos="fade-up">
                                        <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" className="collapse" href="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
                                            <p>
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={100}>
                                        <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="faq-list-2" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={200}>
                                        <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="faq-list-3" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={300}>
                                        <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="faq-list-4" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                            </p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={400}>
                                        <i className="bx bx-help-circle icon-help" /> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                        <div id="faq-list-5" className="collapse" data-parent=".faq-list">
                                            <p>
                                                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>{/* End Frequently Asked Questions Section */}

                </main>{/* End #main */}
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
export default Home