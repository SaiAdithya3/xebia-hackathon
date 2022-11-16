import React from 'react'
import "./style.css";

export default function Home() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <title>Avilon Bootstrap Template</title>
          <meta content name="description" />
          <meta content name="keywords" />
          {/* Favicons */}
          <link href="assets/img/favicon.png" rel="icon" />
          <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet" />
          {/* Vendor CSS Files */}
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          {/* Template Main CSS File */}
          
          {/* ======= Header ======= */}
          <header id="header" className="fixed-top d-flex align-items-center header-transparent">
            <div className="container d-flex justify-content-between align-items-center">
              <div id="logo">
                <h1><a href="index.html">Avilon</a></h1>
              </div>
              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#features">Features</a></li>
                  <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                  <li><a className="nav-link scrollto" href="#team">Team</a></li>
                  <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" />
              </nav>{/* .navbar */}
            </div>
          </header>{/* End Header */}
          {/* ======= Hero Section ======= */}
          <section id="hero">
            <div className="hero-text" data-aos="zoom-out">
              <h2>Welcome to Avilon</h2>
              <p>We are team of talented designers making websites with Bootstrap</p>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
            <div className="product-screens">
              <div className="product-screen-1" data-aos="fade-up" data-aos-delay={400}>
                <img src="assets/img/product-screen-1.png" alt="" />
              </div>
              <div className="product-screen-2" data-aos="fade-up" data-aos-delay={200}>
                <img src="assets/img/product-screen-2.png" alt="" />
              </div>
              <div className="product-screen-3" data-aos="fade-up">
                <img src="assets/img/product-screen-3.png" alt="" />
              </div>
            </div>
          </section>{/* End Hero Section */}
          <main id="main">
            {/* ======= About Section ======= */}
            <section id="about" className="section-bg">
              <div className="container-fluid" data-aos="fade-up">
                <div className="section-header">
                  <h3 className="section-title">About Us</h3>
                  <span className="section-divider" />
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br />
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-6 about-img" data-aos="fade-right" dat-aos-delay={100}>
                    <img src="assets/img/about-img.jpg" alt="" />
                  </div>
                  <div className="col-lg-6 content" data-aos="fade-left" dat-aos-delay={100}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate</h2>
                    <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul>
                      <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Libero justo laoreet sit amet cursus sit amet dictum sit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
                    </p>
                  </div>
                </div>
              </div>
            </section>{/* End About Section */}
            {/* ======= Featuress Section ======= */}
            <section id="features">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-8 offset-lg-4">
                    <div className="section-header">
                      <h3 className="section-title">Product Featuress</h3>
                      <span className="section-divider" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 features-img">
                    <img src="assets/img/product-features.png" alt="" data-aos="fade-right" />
                  </div>
                  <div className="col-lg-8 col-md-7 ">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                        <div className="icon"><i className="bi bi-briefcase" /></div>
                        <h4 className="title"><a href>Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.</p>
                      </div>
                      <div className="col-lg-6 col-md-6 box" data-aos="fade-up">
                        <div className="icon"><i className="bi bi-card-checklist" /></div>
                        <h4 className="title"><a href>Dolor Sitema</a></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                      </div>
                      <div className="col-lg-6 col-md-6 box" data-aos="fade-up" dat-aos-delay={100}>
                        <div className="icon"><i className="bi bi-binoculars" /></div>
                        <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur teleca starter sinode park ledo.</p>
                      </div>
                      <div className="col-lg-6 col-md-6 box" data-aos="fade-up" data-aos-delay={100}>
                        <div className="icon"><i className="bi bi-brightness-high" /></div>
                        <h4 className="title"><a href>Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dinoun trade capsule.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Featuress Section */}
            {/* ======= Advanced Featuress Section ======= */}
            <section id="advanced-features">
              <div className="features-row section-bg" data-aos="fade-up">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <img className="advanced-feature-img-right wow fadeInRight" src="assets/img/advanced-feature-1.jpg" alt="" />
                      <div>
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-row" data-aos="fade-up">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <img className="advanced-feature-img-left" src="assets/img/advanced-feature-2.jpg" alt="" />
                      <div>
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <i className="bi bi-calendar4-week" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <i className="bi bi-bar-chart" />
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <i className="bi bi-brightness-high" />
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features-row section-bg" data-aos="fade-up">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <img className="advanced-feature-img-right wow fadeInRight" src="assets/img/advanced-feature-3.jpg" alt="" />
                      <div>
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <i className="bi bi-binoculars" />
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Advanced Featuress Section */}
            {/* ======= Call To Action Section ======= */}
            <section id="call-to-action">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 text-center text-lg-start">
                    <h3 className="cta-title">Call To Action</h3>
                    <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                  <div className="col-lg-3 cta-btn-container text-center">
                    <a className="cta-btn align-middle" href="#">Call To Action</a>
                  </div>
                </div>
              </div>
            </section>{/* End Call To Action Section */}
            {/* ======= More Features Section ======= */}
            <section id="more-features" className="section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <h3 className="section-title">More Features</h3>
                  <span className="section-divider" />
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="icon"><i className="bi bi-briefcase" /></div>
                      <h4 className="title"><a href>Lorem Ipsum</a></h4>
                      <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="icon"><i className="bi bi-card-checklist" /></div>
                      <h4 className="title"><a href>Dolor Sitema</a></h4>
                      <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="icon"><i className="bi bi-bar-chart" /></div>
                      <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box">
                      <div className="icon"><i className="bi bi-binoculars" /></div>
                      <h4 className="title"><a href>Magni Dolores</a></h4>
                      <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End More Features Section */}
            {/* ======= Clients Section ======= */}
            <section id="clients">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-1.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-2.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-3.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-4.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-5.png" alt="" />
                  </div>
                  <div className="col-md-2">
                    <img src="assets/img/clients/client-6.png" alt="" />
                  </div>
                </div>
              </div>
            </section>{/* End Clients Section */}
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <h3 className="section-title">Pricing</h3>
                  <span className="section-divider" />
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="box">
                      <h3>Free</h3>
                      <h4><sup>$</sup>0<span> month</span></h4>
                      <ul>
                        <li><i className="bi bi-check-circle" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check-circle" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check-circle" /> Nulla at volutpat diam uteera</li>
                        <li><i className="bi bi-check-circle" /> Pharetra massa massa ultricies</li>
                        <li><i className="bi bi-check-circle" /> Massa ultricies mi quis hendrerit</li>
                      </ul>
                      <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box featured">
                      <h3>Business</h3>
                      <h4><sup>$</sup>29<span> month</span></h4>
                      <ul>
                        <li><i className="bi bi-check-circle" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check-circle" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check-circle" /> Nulla at volutpat diam uteera</li>
                        <li><i className="bi bi-check-circle" /> Pharetra massa massa ultricies</li>
                        <li><i className="bi bi-check-circle" /> Massa ultricies mi quis hendrerit</li>
                      </ul>
                      <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="box">
                      <h3>Developer</h3>
                      <h4><sup>$</sup>49<span> month</span></h4>
                      <ul>
                        <li><i className="bi bi-check-circle" /> Quam adipiscing vitae proin</li>
                        <li><i className="bi bi-check-circle" /> Nec feugiat nisl pretium</li>
                        <li><i className="bi bi-check-circle" /> Nulla at volutpat diam uteera</li>
                        <li><i className="bi bi-check-circle" /> Pharetra massa massa ultricies</li>
                        <li><i className="bi bi-check-circle" /> Massa ultricies mi quis hendrerit</li>
                      </ul>
                      <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Pricing Section */}
            {/* ======= Frequently Asked Questions Section ======= */}
            <section id="faq">
              <div className="container">
                <div className="section-header">
                  <h3 className="section-title">Frequently Asked Questions</h3>
                  <span className="section-divider" />
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <ul className="faq-list">
                  <li>
                    <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                      </p>
                    </div>
                  </li>
                  <li>
                    <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show" /><i className="bi bi-chevron-up icon-close" /></div>
                    <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>{/* End Frequently Asked Questions Section */}
            {/* ======= Team Section ======= */}
            <section id="team" className="section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-header">
                  <h3 className="section-title">Our Team</h3>
                  <span className="section-divider" />
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6">
                    <div className="member">
                      <div className="pic"><img src="assets/img/team/team-1.jpg" alt="" /></div>
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="member">
                      <div className="pic"><img src="assets/img/team/team-2.jpg" alt="" /></div>
                      <h4>Sarah Jhinson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="member">
                      <div className="pic"><img src="assets/img/team/team-3.jpg" alt="" /></div>
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="member">
                      <div className="pic"><img src="assets/img/team/team-4.jpg" alt="" /></div>
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href><i className="bi bi-twitter" /></a>
                        <a href><i className="bi bi-facebook" /></a>
                        <a href><i className="bi bi-instagram" /></a>
                        <a href><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Team Section */}
            {/* ======= Gallery Section ======= */}
            <section id="gallery">
              <div className="container-fluid" data-aos="fade-up">
                <div className="section-header">
                  <h3 className="section-title">Gallery</h3>
                  <span className="section-divider" />
                  <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row g-0">
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-1.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-1.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-2.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-2.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-3.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-3.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-4.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-4.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-5.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-5.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="gallery-item">
                      <a href="assets/img/gallery/gallery-6.jpg" data-gall="portfolioGallery" className="gallery-lightbox">
                        <img src="assets/img/gallery/gallery-6.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Gallery Section */}
            {/* ======= Contact Section ======= */}
            <section id="contact">
              <div className="container" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="contact-about">
                      <h3>Avilon</h3>
                      <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                      <div className="social-links">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="info">
                      <div>
                        <i className="bi bi-geo-alt" />
                        <p>A108 Adam Street<br />New York, NY 535022</p>
                      </div>
                      <div>
                        <i className="bi bi-envelope" />
                        <p>info@example.com</p>
                      </div>
                      <div>
                        <i className="bi bi-phone" />
                        <p>+1 5589 55488 55s</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-8">
                    <div className="form">
                      <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                          <div className="form-group col-lg-6">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                          </div>
                          <div className="form-group col-lg-6 mt-3 mt-lg-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        </div>
                        <div className="form-group mt-3">
                          <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                        </div>
                        <div className="my-3">
                          <div className="loading">Loading</div>
                          <div className="error-message" />
                          <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>{/* End Contact Section */}
          </main>{/* End #main */}
          {/* ======= Footer ======= */}
          <footer id="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 text-lg-start text-center">
                  <div className="copyright">
                    © Copyright <strong>Avilon</strong>. All Rights Reserved
                  </div>
                  <div className="credits">
                    {/*
              All the links in the footer should remain intact.
              You can delete the links only if you purchased the pro version.
              Licensing information: https://bootstrapmade.com/license/
              Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Avilon
            */}
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                    <a href="#intro" className="scrollto">Home</a>
                    <a href="#about" className="scrollto">About</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>{/* End  Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-chevron-up" /></a>
          {/* Vendor JS Files */}
          {/* Template Main JS File */}
        </div>
      );
    }


