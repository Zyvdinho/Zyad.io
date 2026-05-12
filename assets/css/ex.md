/**
* Template Name: iPortfolio
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/* ===================================
   PALETTE DE COULEURS ÉLÉGANTE
   - Bleu nuit (#0a192f)
   - Vert menthe (#64ffda)
   - Gris clair (#ccd6f6)
   - Gris moyen (#8892b0)
   - Blanc (#e6f1ff)
=================================== */

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #8892b0;
  background-color: #0a192f;
}

a {
  color: #64ffda;
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: #64ffda;
  text-decoration: underline;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
  color: #ccd6f6;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #64ffda;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #0a192f;
  line-height: 0;
}

.back-to-top:hover {
  background: #52e0c4;
  color: #0a192f;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  transition: all ease-in-out 0.5s;
  z-index: 9997;
  transition: all 0.5s;
  padding: 0 15px;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(100, 255, 218, 0.1);
  overflow-y: auto;
}

#header .profile img {
  margin: 15px auto;
  display: block;
  width: 120px;
  height: 120px;
  border: 8px solid rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  object-fit:cover;
  object-position: center 50%;
}

#header .profile h1 {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  -moz-text-align-last: center;
  text-align-last: center;
  font-family: "Poppins", sans-serif;
  color: #ccd6f6;
}

#header .profile h1 a,
#header .profile h1 a:hover {
  color: #ccd6f6;
  text-decoration: none;
}

#header .profile .social-links a {
  font-size: 18px;
  display: inline-block;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#header .profile .social-links a:hover {
  background: #64ffda;
  color: #0a192f;
  text-decoration: none;
}

#main {
  margin-left: 300px;
}

.container,
.container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}

@media (max-width: 1199px) {
  #header {
    left: -300px;
    background: #0a192f;
  }

  #main {
    margin-left: 0;
  }

  .container,
  .container-fluid {
    padding-left: 12px;
    padding-right: 12px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu {
  padding: 30px 0 0 0;
}

.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu>ul>li {
  position: relative;
  white-space: nowrap;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #8892b0;
  padding: 12px 15px;
  margin-bottom: 8px;
  transition: 0.3s;
  font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 24px;
  padding-right: 8px;
  color: #64ffda;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover>a {
  text-decoration: none;
  color: #64ffda;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover>a i {
  color: #64ffda;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  background-color: #64ffda;
  color: #0a192f;
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  border-radius: 50px;
  cursor: pointer;
}

.mobile-nav-active {
  overflow: hidden;
}

.mobile-nav-active #header {
  left: 0;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  width: 100%;
  height: 100vh;
  background: 
    radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(100, 255, 218, 0.05) 0%, transparent 50%),
    linear-gradient(135deg, #0a192f 0%, #112240 100%),
    url("../img/tech_bg2.jpg") top center;
  background-size: cover;
  background-blend-mode: overlay;
}

#hero:before {
  content: "";
  background: rgba(10, 25, 47, 0.3);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

#hero .hero-container {
  position: relative;
  z-index: 2;
  min-width: 300px;
}

#hero h1 {
  margin: 0 0 10px 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 56px;
  color: #ccd6f6;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
}

#hero p {
  color: #8892b0;
  margin-bottom: 50px;
  font-size: 26px;
  font-family: "Poppins", sans-serif;
}

#hero p span {
  color: #64ffda;
  padding-bottom: 4px;
  letter-spacing: 1px;
  border-bottom: 3px solid #64ffda;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #hero p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background: rgba(17, 34, 64, 0.3);
}

.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #ccd6f6;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: #64ffda;
  bottom: 0;
  left: 0;
}

.section-title p {
  margin-bottom: 0;
  color: #8892b0;
}

/*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #ccd6f6;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.about .content ul strong {
  margin-right: 10px;
  color: #ccd6f6;
}

.about .content ul i {
  font-size: 16px;
  margin-right: 5px;
  color: #64ffda;
  line-height: 0;
}

.about .content p:last-child {
  margin-bottom: 0;
  color: #8892b0;
}

/*--------------------------------------------------------------
# Facts
--------------------------------------------------------------*/
.facts {
  padding-bottom: 30px;
}

.facts .count-box {
  padding: 30px;
  width: 100%;
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.facts .count-box:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
}

.facts .count-box i {
  display: block;
  font-size: 44px;
  color: #64ffda;
  float: left;
  line-height: 0;
}

.facts .count-box span {
  font-size: 48px;
  line-height: 40px;
  display: block;
  font-weight: 700;
  color: #ccd6f6;
  margin-left: 60px;
}

.facts .count-box p {
  padding: 15px 0 0 0;
  margin: 0 0 0 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #8892b0;
}

.facts .count-box a {
  font-weight: 600;
  display: block;
  margin-top: 20px;
  color: #64ffda;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  transition: ease-in-out 0.3s;
}

.facts .count-box a:hover {
  color: #52e0c4;
}

/* Style pour les logos des entreprises */
.company-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

.company-logo {
  max-height: 70px;
  width: auto;
  object-fit: contain;
}

.company-title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Supprimer la barre sous les titres */
.company-title-wrapper h2::after {
  display: none;
}

/* Style pour le bouton "Voir le site" */
.btn-visit-site {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  background-color: transparent;
  color: #64ffda;
  text-decoration: none;
  border: 2px solid #64ffda;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  width: fit-content;
}

.btn-visit-site:hover {
  background-color: #64ffda;
  color: #0a192f;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
}

.btn-visit-site i {
  font-size: 0.8rem;
}

/* Pour les écrans mobiles */
@media (max-width: 768px) {
  .company-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
  }
  
  .company-logo {
    max-height: 60px;
  }
  
  .company-title-wrapper {
    align-items: center;
  }
}

/*--------------------------------------------------------------
# Skills
--------------------------------------------------------------*/
.skills .progress {
  height: 60px;
  display: block;
  background: none;
  border-radius: 0;
}

.skills .progress .skill {
  padding: 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #ccd6f6;
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
  color: #64ffda;
}

.skills .progress-bar-wrap {
  background: rgba(100, 255, 218, 0.1);
  height: 10px;
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: 0.9s;
  background-color: #64ffda;
}

/*--------------------------------------------------------------
# Resume
--------------------------------------------------------------*/
.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ccd6f6;
}

.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #64ffda;
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #ccd6f6;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(100, 255, 218, 0.1);
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
  color: #64ffda;
  border-radius: 4px;
}

.resume .resume-item ul {
  padding-left: 20px;
}

.resume .resume-item ul li {
  padding-bottom: 10px;
  color: #8892b0;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #0a192f;
  border: 2px solid #64ffda;
}

/* CV Buttons */
.cv-buttons-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.cyber-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cyber-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);
  transition: 0.5s;
}

.cyber-btn:hover {
  background: #64ffda;
  color: #0a192f;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
}

.cyber-btn:hover::before {
  left: 100%;
}

.cyber-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cyber-btn i {
  font-size: 18px;
}

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio .portfolio-item {
  margin-bottom: 30px;
}

.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 35px auto;
  list-style: none;
  text-align: center;
  background: rgba(10, 25, 47, 0.8);
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px 8px 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  color: #8892b0;
  margin-bottom: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 30px;
}

.portfolio #portfolio-flters li:hover {
  color: #64ffda;
  background: rgba(100, 255, 218, 0.1);
}

.portfolio #portfolio-flters li.filter-active {
  background: #64ffda;
  color: #0a192f;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px;
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
}

.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
  opacity: 1;
  left: 0;
  right: 0;
  bottom: -60px;
  z-index: 3;
  position: absolute;
  transition: all ease-in-out 0.3s;
  display: flex;
  justify-content: center;
}

.portfolio .portfolio-wrap .portfolio-links a {
  color: #0a192f;
  font-size: 28px;
  text-align: center;
  background: rgba(100, 255, 218, 0.9);
  transition: 0.3s;
  width: 50%;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  background: #64ffda;
}

.portfolio .portfolio-wrap .portfolio-links a+a {
  border-left: 1px solid rgba(100, 255, 218, 0.5);
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-links {
  opacity: 1;
  bottom: 0;
}

.portfolio .portfolio-wrap img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #64ffda;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #64ffda;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(5, 13, 24, 0.08);
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
  color: #ccd6f6;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
  color: #8892b0;
}

.portfolio-details .portfolio-info ul li+li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ccd6f6;
}

.portfolio-details .portfolio-description p {
  padding: 0;
  color: #8892b0;
}

/*--------------------------------------------------------------
# Veille Technologique
--------------------------------------------------------------*/
.veille-card {
  background: rgba(17, 34, 64, 0.5);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
}

.veille-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 35px rgba(100, 255, 218, 0.15);
  border-color: #64ffda;
}

/* Conteneur image */
.veille-card .card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: rgba(10, 25, 47, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image */
.veille-card .card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Contenu texte */
.veille-card .card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.veille-card .card-content h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ccd6f6;
}

.veille-card .card-content p {
  font-size: 14px;
  color: #8892b0;
  flex-grow: 1;
  margin-bottom: 15px;
}

/* Bouton */
.btn-learn-more {
  font-size: 14px;
  font-weight: 500;
  color: #64ffda;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border: 1px solid #64ffda;
  border-radius: 4px;
  width: fit-content;
}

.btn-learn-more:hover {
  background: #64ffda;
  color: #0a192f;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(100, 255, 218, 0.2);
}

/* Downloads Section */
.downloads-section {
  margin-top: 40px;
}

.downloads-section .section-title {
  margin-bottom: 25px;
  font-weight: 600;
  color: #ccd6f6;
}

.download-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border-radius: 12px;
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  text-decoration: none;
  color: #ccd6f6;
  transition: all 0.3s ease;
  height: 100%;
}

.download-card i {
  font-size: 2rem;
  color: #64ffda;
}

.download-card span {
  font-weight: 500;
}

.download-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(100, 255, 218, 0.2);
  background-color: rgba(100, 255, 218, 0.1);
  border-color: #64ffda;
}

/* Responsive pour les cartes veille */
@media (max-width: 768px) {
  .veille-card {
    margin-bottom: 20px;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-content h3 {
    min-height: auto;
    font-size: 1.3rem;
  }
}

/*--------------------------------------------------------------
# Testimonials
--------------------------------------------------------------*/
.testimonials .testimonials-carousel,
.testimonials .testimonials-slider {
  overflow: hidden;
}

.testimonials .testimonial-item {
  box-sizing: content-box;
  text-align: center;
  min-height: 320px;
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50%;
  margin: 0 auto;
  border: 3px solid rgba(100, 255, 218, 0.3);
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
  color: #ccd6f6;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: #8892b0;
  margin: 0;
}

.testimonials .testimonial-item .quote-icon-left,
.testimonials .testimonial-item .quote-icon-right {
  color: rgba(100, 255, 218, 0.5);
  font-size: 26px;
}

.testimonials .testimonial-item .quote-icon-left {
  display: inline-block;
  left: -5px;
  position: relative;
}

.testimonials .testimonial-item .quote-icon-right {
  display: inline-block;
  right: -5px;
  position: relative;
  top: 10px;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 15px 15px 15px;
  padding: 20px;
  background: rgba(10, 25, 47, 0.8);
  position: relative;
  margin-bottom: 35px;
  border-radius: 6px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  color: #8892b0;
}

.testimonials .testimonial-item p::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 20px solid rgba(10, 25, 47, 0.8);
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 20px);
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #64ffda;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #64ffda;
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact {
  padding-bottom: 130px;
}

.contact .info {
  padding: 30px;
  background: rgba(17, 34, 64, 0.5);
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
}

.contact .info i {
  font-size: 20px;
  color: #64ffda;
  float: left;
  width: 44px;
  height: 44px;
  background: rgba(100, 255, 218, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #ccd6f6;
}

.contact .info p {
  padding: 0 0 10px 60px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #8892b0;
}

.contact .info .email p {
  padding-top: 5px;
}

.contact .info .social-links {
  padding-left: 60px;
}

.contact .info .social-links a {
  font-size: 18px;
  display: inline-block;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  line-height: 1;
  padding: 8px 0;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
  margin-right: 10px;
}

.contact .info .social-links a:hover {
  background: #64ffda;
  color: #0a192f;
}

.contact .info .email:hover i,
.contact .info .address:hover i,
.contact .info .phone:hover i {
  background: #64ffda;
  color: #0a192f;
}

.contact .php-email-form {
  width: 100%;
  padding: 30px;
  background: rgba(17, 34, 64, 0.5);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .validate {
  display: none;
  color: #ff6b6b;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ff6b6b;
  text-align: left;
  padding: 15px;
  font-weight: 600;
  border-radius: 4px;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #2ecc71;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  border-radius: 4px;
}

.contact .php-email-form .loading {
  display: none;
  background: rgba(17, 34, 64, 0.8);
  text-align: center;
  padding: 15px;
  border-radius: 4px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #64ffda;
  border-top-color: rgba(100, 255, 218, 0.2);
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form .form-group {
  margin-bottom: 15px;
}

.contact .php-email-form label {
  padding-bottom: 8px;
  color: #ccd6f6;
  font-weight: 500;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #8892b0;
  padding: 10px 15px;
  transition: all 0.3s ease;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #64ffda;
  box-shadow: 0 0 0 0.2rem rgba(100, 255, 218, 0.25);
  outline: none;
  background: rgba(10, 25, 47, 0.7);
  color: #ccd6f6;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 15px;
  min-height: 150px;
  resize: vertical;
}

.contact .php-email-form button[type=submit] {
  background: #64ffda;
  border: 0;
  padding: 12px 30px;
  color: #0a192f;
  transition: 0.4s;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact .php-email-form button[type=submit]:hover {
  background: #52e0c4;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  padding: 15px;
  color: #8892b0;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 9999;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

#footer .copyright {
  text-align: center;
}

#footer .credits {
  padding-top: 5px;
  text-align: center;
  font-size: 13px;
  color: #8892b0;
}

@media (max-width: 1199px) {
  #footer {
    position: static;
    width: auto;
    padding: 20px 15px;
    background: #0a192f;
  }
}

/*--------------------------------------------------------------
# Custom Styles
--------------------------------------------------------------*/

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a192f;
}

::-webkit-scrollbar-thumb {
  background: #64ffda;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #52e0c4;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.glow {
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

/* Effets de brillance pour les titres */
.section-title h2 {
  position: relative;
}

.section-title h2::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #64ffda, transparent);
  border-radius: 3px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-bg {
    background: transparent;
  }
  
  .veille-card {
    backdrop-filter: none;
  }
  
  .portfolio #portfolio-flters {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    border-radius: 15px;
  }
  
  .portfolio #portfolio-flters li {
    margin: 5px 0;
    width: 100%;
  }
  
  .cv-buttons-container {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cyber-btn {
    width: 100%;
    text-align: center;
  }
}

/* Style pour les très petits écrans */
@media (max-width: 480px) {
  .btn-visit-site {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  .company-logo {
    max-height: 50px;
  }
  
  .section-title h2 {
    font-size: 24px;
  }
}

/* Transition globale pour les hover effects */
.portfolio .portfolio-wrap,
.veille-card,
.facts .count-box,
.download-card,
.cyber-btn,
.btn-visit-site,
.btn-learn-more {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effet de pulse pour le bouton back-to-top */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
}

.back-to-top:hover {
  animation: pulse 1.5s infinite;
}

/* Style pour les liens actifs dans la navigation */
.nav-menu .active {
  position: relative;
}

.nav-menu .active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: #64ffda;
  border-radius: 0 3px 3px 0;
}

/* Amélioration de la visibilité du texte */
p, li, span:not(.typed, .purecounter) {
  color: #8892b0;
}

/* Style pour les puces */
ul li::marker {
  color: #64ffda;
}

/* Style pour les bordures des sections */
section:not(#hero) {
  border-bottom: 1px solid rgba(100, 255, 218, 0.05);
}

/* Dernière section sans bordure */
section:last-of-type {
  border-bottom: none;
}

/* Style pour les images dans les projets */
.portfolio-wrap img {
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.portfolio-wrap:hover img {
  filter: grayscale(0%);
}

/* Style pour le texte typé */
.typed {
  color: #64ffda;
  font-weight: 600;
}

/* Style pour les citations dans les témoignages */
blockquote {
  border-left: 3px solid #64ffda;
  padding-left: 20px;
  margin: 20px 0;
  font-style: italic;
  color: #8892b0;
}

/* Style pour les alertes et messages */
.alert {
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  color: #64ffda;
  border-radius: 4px;
  padding: 15px;
  margin: 20px 0;
}

/* Style pour les badges */
.badge {
  background: linear-gradient(135deg, #64ffda, #52e0c4);
  color: #0a192f;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin: 2px;
}

/* Style pour les tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  color: #8892b0;
}

table th, table td {
  padding: 12px 15px;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

table th {
  background: rgba(100, 255, 218, 0.1);
  color: #ccd6f6;
  font-weight: 600;
}

table tr:nth-child(even) {
  background: rgba(100, 255, 218, 0.05);
}

/* Style pour les formulaires améliorés */
.form-control:focus {
  border-color: #64ffda;
  box-shadow: 0 0 0 0.2rem rgba(100, 255, 218, 0.25);
}

/* Style pour les boutons de soumission secondaires */
.btn-secondary {
  background: transparent;
  border: 1px solid #8892b0;
  color: #8892b0;
}

.btn-secondary:hover {
  background: #8892b0;
  color: #0a192f;
  border-color: #8892b0;
}

/* Style pour les modales */
.modal-content {
  background: #0a192f;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 10px;
}

.modal-header {
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
}

.modal-footer {
  border-top: 1px solid rgba(100, 255, 218, 0.2);
}

/* Style pour les tooltips */
.tooltip-inner {
  background: #64ffda;
  color: #0a192f;
  font-weight: 500;
}

.tooltip-arrow {
  border-top-color: #64ffda !important;
}

/* Style pour les progress bars personnalisées */
.progress {
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  height: 10px;
  margin: 10px 0;
}

.progress-bar {
  background: linear-gradient(90deg, #64ffda, #52e0c4);
  border-radius: 10px;
}

/* Style pour les listes de compétences */
.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.skill-item {
  background: rgba(100, 255, 218, 0.1);
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

/* Style pour les icônes de compétences */
.skill-icon {
  font-size: 2rem;
  color: #64ffda;
  margin-right: 10px;
  vertical-align: middle;
}

/* Style pour les séparateurs */
.separator {
  height: 2px;
  background: linear-gradient(90deg, transparent, #64ffda, transparent);
  margin: 40px auto;
  width: 100%;
  max-width: 200px;
}

/* Style pour les cards avec ombre portée */
.shadow-card {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.shadow-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Style pour les textes surlignés */
.highlight {
  background: linear-gradient(120deg, rgba(100, 255, 218, 0.3) 0%, rgba(100, 255, 218, 0) 100%);
  padding: 0 5px;
  border-radius: 3px;
}

/* Style pour les citations en bloc */
.quote-block {
  background: rgba(17, 34, 64, 0.5);
  border-left: 4px solid #64ffda;
  padding: 20px;
  margin: 30px 0;
  font-style: italic;
  border-radius: 0 8px 8px 0;
}

.quote-block cite {
  display: block;
  margin-top: 10px;
  text-align: right;
  font-style: normal;
  color: #8892b0;
  font-weight: 500;
}

/* Style pour les images avec légende */
.image-caption {
  position: relative;
  margin: 30px 0;
}

.image-caption figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(10, 25, 47, 0.8);
  color: #ccd6f6;
  padding: 10px;
  text-align: center;
  font-size: 0.9rem;
}

/* Style pour les listes de fonctionnalités */
.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: 10px 0;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.feature-list li:before {
  content: "✓";
  color: #64ffda;
  font-weight: bold;
  margin-right: 10px;
}

.feature-list li:last-child {
  border-bottom: none;
}

/* Style pour les timestamps */
.timestamp {
  font-size: 0.8rem;
  color: #8892b0;
  opacity: 0.8;
}

/* Style pour les badges de statut */
.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-badge.completed {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
}

.status-badge.in-progress {
  background: rgba(52, 152, 219, 0.2);
  color: #3498db;
}

.status-badge.planned {
  background: rgba(155, 89, 182, 0.2);
  color: #9b59b6;
}

/* Style pour les avatars */
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

/* Style pour les cartes de profil */
.profile-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.profile-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 15px;
  border: 3px solid rgba(100, 255, 218, 0.3);
}

/* Style pour les tags */
.tag {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border-radius: 15px;
  font-size: 0.85rem;
  margin: 2px;
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: translateY(-1px);
}

/* Style pour les cartes de statistiques */
.stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.stats-card .number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 10px;
}

.stats-card .label {
  color: #8892b0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Style pour les timeline */
.timeline {
  position: relative;
  padding-left: 30px;
  margin: 20px 0;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(100, 255, 218, 0.3);
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: -34px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64ffda;
  border: 2px solid #0a192f;
}

.timeline-date {
  color: #64ffda;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 5px;
}

/* Style pour les notifications */
.notification {
  background: rgba(17, 34, 64, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  position: relative;
  padding-left: 40px;
}

.notification:before {
  content: '!';
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background: #64ffda;
  color: #0a192f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

/* Style pour les code blocks */
.code-block {
  background: rgba(10, 25, 47, 0.8);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 6px;
  padding: 20px;
  margin: 20px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #64ffda;
  overflow-x: auto;
}

.code-block .keyword {
  color: #ff79c6;
}

.code-block .string {
  color: #f1fa8c;
}

.code-block .comment {
  color: #6272a4;
  font-style: italic;
}

.code-block .number {
  color: #bd93f9;
}

/* Style pour les boutons de navigation du carousel */
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background: rgba(100, 255, 218, 0.2);
  opacity: 1;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1) sepia(1) saturate(5) hue-rotate(140deg);
}

/* Style pour les indicateurs du carousel */
.carousel-indicators button {
  background-color: rgba(100, 255, 218, 0.5);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
}

.carousel-indicators button.active {
  background-color: #64ffda;
}

/* Style pour les cartes du carousel */
.carousel-item {
  padding: 20px;
}

.carousel-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  height: 100%;
}

/* Style pour les overlays */
.overlay {
  position: relative;
}

.overlay:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(10, 25, 47, 0.8));
  pointer-events: none;
}

/* Style pour les images en mode sombre */
.dark-image {
  filter: brightness(0.8) contrast(1.2);
}

/* Style pour les séparateurs de texte */
.text-separator {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 30px 0;
  color: #8892b0;
}

.text-separator:before,
.text-separator:after {
  content: '';
  flex: 1;
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
}

.text-separator:before {
  margin-right: 10px;
}

.text-separator:after {
  margin-left: 10px;
}

/* Style pour les légendes */
.caption {
  font-size: 0.9rem;
  color: #8892b0;
  text-align: center;
  margin-top: 10px;
  font-style: italic;
}

/* Style pour les badges de nouvelle fonctionnalité */
.new-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ff4757;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
  animation: pulse 2s infinite;
}

/* Style pour les messages de chargement */
.loading-spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(100, 255, 218, 0.3);
  border-radius: 50%;
  border-top-color: #64ffda;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Style pour les messages vides */
.empty-state {
  text-align: center;
  padding: 50px 20px;
  color: #8892b0;
}

.empty-state i {
  font-size: 3rem;
  color: rgba(100, 255, 218, 0.3);
  margin-bottom: 20px;
  display: block;
}

/* Style pour les onglets */
.nav-tabs {
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
}

.nav-tabs .nav-link {
  color: #8892b0;
  border: none;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link:hover {
  color: #64ffda;
  background: rgba(100, 255, 218, 0.1);
}

.nav-tabs .nav-link.active {
  color: #64ffda;
  background: rgba(100, 255, 218, 0.1);
  border-bottom: 2px solid #64ffda;
}

/* Style pour les accordéons */
.accordion-item {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  margin-bottom: 10px;
  border-radius: 8px;
}

.accordion-button {
  background: rgba(17, 34, 64, 0.5);
  color: #ccd6f6;
  font-weight: 600;
}

.accordion-button:not(.collapsed) {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.2rem rgba(100, 255, 218, 0.25);
}

.accordion-body {
  color: #8892b0;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 0 0 8px 8px;
}

/* Style pour les paginations */
.pagination .page-link {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  color: #8892b0;
  margin: 0 5px;
  border-radius: 4px;
}

.pagination .page-link:hover {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

.pagination .page-item.active .page-link {
  background: #64ffda;
  border-color: #64ffda;
  color: #0a192f;
}

/* Style pour les menus déroulants */
.dropdown-menu {
  background: #0a192f;
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.dropdown-item {
  color: #8892b0;
  padding: 8px 15px;
}

.dropdown-item:hover {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
}

/* Style pour les formulaires de recherche */
.search-form {
  position: relative;
}

.search-form input {
  padding-right: 40px;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.2);
  color: #8892b0;
}

.search-form button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  background: transparent;
  border: none;
  color: #64ffda;
  padding: 0 15px;
}

/* Style pour les notifications toast */
.toast {
  background: rgba(17, 34, 64, 0.95);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.toast-header {
  background: rgba(10, 25, 47, 0.8);
  border-bottom: 1px solid rgba(100, 255, 218, 0.2);
  color: #ccd6f6;
}

.toast-body {
  color: #8892b0;
}

/* Style pour les barres de progression animées */
@keyframes progress-animation {
  0% { width: 0%; }
  100% { width: var(--progress-width); }
}

.animated-progress {
  animation: progress-animation 1.5s ease-out forwards;
}

/* Style pour les cartes de prix */
.pricing-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}

.pricing-card.featured {
  border-color: #64ffda;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

.pricing-card .price {
  font-size: 2.5rem;
  color: #64ffda;
  font-weight: 700;
  margin: 20px 0;
}

.pricing-card .period {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les compteurs animés */
.counter {
  font-size: 2.5rem;
  font-weight: 700;
  color: #64ffda;
}

.counter .counter-suffix {
  font-size: 1rem;
  color: #8892b0;
}

/* Style pour les cartes de témoignage */
.testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.testimonial-card:before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  color: rgba(100, 255, 218, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-card .content {
  position: relative;
  z-index: 1;
}

/* Style pour les cartes de blog */
.blog-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.15);
}

.blog-card .image {
  height: 200px;
  overflow: hidden;
}

.blog-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .image img {
  transform: scale(1.05);
}

.blog-card .content {
  padding: 20px;
}

.blog-card .meta {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.blog-card .meta span {
  margin-right: 15px;
}

.blog-card .meta i {
  color: #64ffda;
  margin-right: 5px;
}

/* Style pour les cartes d'équipe */
.team-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
}

.team-card .avatar {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
}

.team-card .social-links {
  margin-top: 15px;
}

.team-card .social-links a {
  display: inline-block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border-radius: 50%;
  margin: 0 3px;
  transition: all 0.3s ease;
}

.team-card .social-links a:hover {
  background: #64ffda;
  color: #0a192f;
  transform: translateY(-3px);
}

/* Style pour les cartes de service */
.service-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
}

.service-card .icon {
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.service-card:hover .icon {
  background: #64ffda;
  color: #0a192f;
  transform: rotateY(180deg);
}

/* Style pour les cartes de statistiques circulaires */
.circle-stat {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
}

.circle-stat svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.circle-stat .circle-bg {
  fill: none;
  stroke: rgba(100, 255, 218, 0.1);
  stroke-width: 8;
}

.circle-stat .circle-progress {
  fill: none;
  stroke: #64ffda;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 314;
  stroke-dashoffset: calc(314 - (314 * var(--percentage)) / 100);
  transition: stroke-dashoffset 1.5s ease;
}

.circle-stat .percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
}

/* Style pour les cartes de comparaison */
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.comparison-table th,
.comparison-table td {
  padding: 15px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  text-align: center;
}

.comparison-table th {
  background: rgba(100, 255, 218, 0.1);
  color: #ccd6f6;
  font-weight: 600;
}

.comparison-table .feature {
  text-align: left;
  color: #8892b0;
}

.comparison-table .check {
  color: #64ffda;
  font-weight: bold;
}

.comparison-table .cross {
  color: #ff4757;
  font-weight: bold;
}

/* Style pour les cartes de chronologie verticale */
.vertical-timeline {
  position: relative;
  padding-left: 50px;
}

.vertical-timeline:before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(100, 255, 218, 0.3);
}

.vertical-timeline-item {
  position: relative;
  margin-bottom: 30px;
}

.vertical-timeline-item:before {
  content: '';
  position: absolute;
  left: 15px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64ffda;
  border: 2px solid #0a192f;
  z-index: 1;
}

.vertical-timeline-content {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px;
}

/* Style pour les cartes de métriques */
.metric-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
}

.metric-card:hover {
  border-color: #64ffda;
  transform: translateY(-3px);
}

.metric-card .icon {
  width: 50px;
  height: 50px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.5rem;
}

.metric-card .value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
}

.metric-card .label {
  color: #8892b0;
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Style pour les cartes de citation */
.quote-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.quote-card:before {
  content: '"';
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 6rem;
  color: rgba(100, 255, 218, 0.1);
  font-family: Georgia, serif;
  line-height: 1;
}

.quote-card .content {
  position: relative;
  z-index: 1;
}

.quote-card .author {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.quote-card .author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.quote-card .author-info h4 {
  margin: 0;
  font-size: 1rem;
}

.quote-card .author-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #8892b0;
}

/* Style pour les cartes de processus */
.process-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  position: relative;
  counter-increment: process;
}

.process-card:before {
  content: counter(process);
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #64ffda;
  color: #0a192f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.process-card .icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.5rem;
}

/* Style pour les cartes de données */
.data-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.data-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.data-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.data-card .trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.9rem;
}

.data-card .trend.up {
  color: #2ecc71;
}

.data-card .trend.down {
  color: #ff4757;
}

.data-card .value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 10px;
}

.data-card .description {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de navigation */
.nav-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
  display: block;
  transition: all 0.3s ease;
}

.nav-card:hover {
  border-color: #64ffda;
  transform: translateY(-3px);
  text-decoration: none;
  color: inherit;
}

.nav-card .icon {
  width: 50px;
  height: 50px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.nav-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 10px;
}

.nav-card .description {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.nav-card .arrow {
  color: #64ffda;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-card:hover .arrow {
  opacity: 1;
}

/* Style pour les cartes de fil d'actualité */
.feed-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
}

.feed-card .header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.feed-card .avatar {
  width: 40px;
  height: 40px;
}

.feed-card .user-info h4 {
  margin: 0;
  font-size: 1rem;
  color: #ccd6f6;
}

.feed-card .user-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #8892b0;
}

.feed-card .content {
  color: #8892b0;
  margin-bottom: 15px;
}

.feed-card .footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  color: #8892b0;
  font-size: 0.9rem;
}

.feed-card .actions {
  display: flex;
  gap: 15px;
}

.feed-card .actions a {
  color: #8892b0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.feed-card .actions a:hover {
  color: #64ffda;
}

/* Style pour les cartes de galerie */
.gallery-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
}

.gallery-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(10, 25, 47, 0.9));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.gallery-card:hover .overlay {
  opacity: 1;
}

.gallery-card .caption {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.gallery-card:hover .caption {
  transform: translateY(0);
}

/* Style pour les cartes de produit */
.product-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
}

.product-card .image {
  height: 200px;
  overflow: hidden;
}

.product-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .image img {
  transform: scale(1.05);
}

.product-card .content {
  padding: 20px;
}

.product-card .category {
  color: #64ffda;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.product-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 10px;
}

.product-card .description {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.product-card .price {
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

/* Style pour les cartes d'événement */
.event-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.event-card:hover {
  border-color: #64ffda;
  transform: translateY(-3px);
}

.event-card .date {
  text-align: center;
  min-width: 70px;
}

.event-card .day {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
}

.event-card .month {
  color: #8892b0;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.event-card .content {
  flex: 1;
}

.event-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 5px;
}

.event-card .location {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.event-card .description {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de témoignage vidéo */
.video-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.video-testimonial-card .video-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.video-testimonial-card .video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-testimonial-card .play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a192f;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.video-testimonial-card .play-button:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.video-testimonial-card .content {
  padding: 20px;
}

.video-testimonial-card .quote {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 15px;
  position: relative;
  padding-left: 20px;
}

.video-testimonial-card .quote:before {
  content: '"';
  position: absolute;
  left: 0;
  top: 0;
  color: #64ffda;
  font-size: 2rem;
  font-family: Georgia, serif;
  line-height: 1;
}

.video-testimonial-card .author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.video-testimonial-card .author img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.video-testimonial-card .author-info h4 {
  margin: 0;
  font-size: 1rem;
  color: #ccd6f6;
}

.video-testimonial-card .author-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #8892b0;
}

/* Style pour les cartes de statistiques horizontales */
.horizontal-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.horizontal-stats-card .icon {
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.horizontal-stats-card .stats {
  flex: 1;
}

.horizontal-stats-card .value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
}

.horizontal-stats-card .label {
  color: #8892b0;
  font-size: 0.9rem;
  margin-top: 5px;
}

.horizontal-stats-card .trend {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #2ecc71;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Style pour les cartes de citation avec image */
.quote-image-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.quote-image-card .image {
  height: 150px;
  overflow: hidden;
}

.quote-image-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote-image-card .content {
  padding: 20px;
  position: relative;
}

.quote-image-card .content:before {
  content: '"';
  position: absolute;
  top: -30px;
  right: 20px;
  font-size: 4rem;
  color: rgba(100, 255, 218, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.quote-image-card .quote {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 15px;
}

.quote-image-card .author {
  color: #64ffda;
  font-weight: 600;
}

/* Style pour les cartes de notification */
.notification-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  transition: all 0.3s ease;
}

.notification-card:hover {
  border-color: #64ffda;
  transform: translateX(5px);
}

.notification-card.unread {
  border-left: 4px solid #64ffda;
}

.notification-card .icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.notification-card .content {
  flex: 1;
}

.notification-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 5px;
}

.notification-card .message {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.notification-card .time {
  color: #8892b0;
  font-size: 0.8rem;
}

/* Style pour les cartes de profil étendu */
.extended-profile-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.extended-profile-card .cover {
  height: 100px;
  background: linear-gradient(135deg, #64ffda, #0a192f);
  position: relative;
}

.extended-profile-card .avatar {
  position: absolute;
  bottom: -40px;
  left: 20px;
  width: 100px;
  height: 100px;
  border: 4px solid #0a192f;
}

.extended-profile-card .content {
  padding: 60px 20px 20px;
}

.extended-profile-card .name {
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.extended-profile-card .title {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.extended-profile-card .bio {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.extended-profile-card .stats {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  padding-top: 20px;
}

.extended-profile-card .stat {
  text-align: center;
}

.extended-profile-card .stat .value {
  color: #64ffda;
  font-weight: 700;
  font-size: 1.5rem;
  display: block;
}

.extended-profile-card .stat .label {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de mise en avant */
.featured-card {
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(10, 25, 47, 0.8));
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.featured-card:before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
}

.featured-card .badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #64ffda;
  color: #0a192f;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.featured-card .content {
  position: relative;
  z-index: 1;
}

.featured-card .title {
  color: #ccd6f6;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.featured-card .description {
  color: #8892b0;
  margin-bottom: 20px;
}

/* Style pour les cartes de comparaison de fonctionnalités */
.feature-comparison-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.feature-comparison-card .feature {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.feature-comparison-card .feature:last-child {
  border-bottom: none;
}

.feature-comparison-card .feature-name {
  color: #8892b0;
}

.feature-comparison-card .feature-value {
  display: flex;
  gap: 20px;
}

.feature-comparison-card .value {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}

.feature-comparison-card .value.yes {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
}

.feature-comparison-card .value.no {
  background: rgba(255, 71, 87, 0.2);
  color: #ff4757;
}

.feature-comparison-card .value.partial {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
}

/* Style pour les cartes de chronologie d'étape */
.step-timeline-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
}

.step-timeline-card .step {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.step-timeline-card .step:last-child {
  margin-bottom: 0;
}

.step-timeline-card .step:not(:last-child):after {
  content: '';
  position: absolute;
  left: 29px;
  top: 60px;
  bottom: -40px;
  width: 2px;
  background: rgba(100, 255, 218, 0.3);
}

.step-timeline-card .step-number {
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-timeline-card .step-content {
  flex: 1;
}

.step-timeline-card .step-title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 10px;
}

.step-timeline-card .step-description {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques multiples */
.multi-metric-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.multi-metric-card .header {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.multi-metric-card .metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.multi-metric-card .metric {
  text-align: center;
}

.multi-metric-card .metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
  margin-bottom: 5px;
}

.multi-metric-card .metric-label {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de progression d'objectif */
.goal-progress-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.goal-progress-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.goal-progress-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.goal-progress-card .percentage {
  color: #64ffda;
  font-weight: 700;
  font-size: 1.2rem;
}

.goal-progress-card .progress-container {
  margin-bottom: 15px;
}

.goal-progress-card .progress {
  height: 10px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.goal-progress-card .progress-bar {
  background: linear-gradient(90deg, #64ffda, #52e0c4);
  border-radius: 5px;
  height: 100%;
}

.goal-progress-card .stats {
  display: flex;
  justify-content: space-between;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de tutoriel */
.tutorial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
}

.tutorial-card .image {
  height: 150px;
  overflow: hidden;
}

.tutorial-card .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tutorial-card:hover .image img {
  transform: scale(1.05);
}

.tutorial-card .content {
  padding: 20px;
}

.tutorial-card .level {
  color: #64ffda;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.tutorial-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 10px;
}

.tutorial-card .description {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.tutorial-card .meta {
  display: flex;
  justify-content: space-between;
  color: #8892b0;
  font-size: 0.9rem;
}

.tutorial-card .meta .duration,
.tutorial-card .meta .lessons {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Style pour les cartes de citation de client */
.client-quote-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.client-quote-card:before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  color: rgba(100, 255, 218, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.client-quote-card .content {
  position: relative;
  z-index: 1;
}

.client-quote-card .quote {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
}

.client-quote-card .client {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.client-quote-card .client-logo {
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.client-quote-card .client-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.client-quote-card .client-info h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
}

.client-quote-card .client-info p {
  margin: 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de statistiques de tableau de bord */
.dashboard-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.dashboard-stats-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dashboard-stats-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.dashboard-stats-card .trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 0.9rem;
}

.dashboard-stats-card .trend.up {
  color: #2ecc71;
}

.dashboard-stats-card .trend.down {
  color: #ff4757;
}

.dashboard-stats-card .value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 10px;
}

.dashboard-stats-card .description {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.dashboard-stats-card .chart {
  height: 60px;
  margin: 0 -20px -20px;
}

/* Style pour les cartes de fonctionnalité principale */
.main-feature-card {
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(10, 25, 47, 0.8));
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.main-feature-card:before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
}

.main-feature-card .icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 25px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
}

.main-feature-card .title {
  color: #ccd6f6;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.main-feature-card .description {
  color: #8892b0;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.main-feature-card .features {
  text-align: left;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.main-feature-card .features li {
  color: #8892b0;
  margin-bottom: 10px;
  padding-left: 25px;
  position: relative;
}

.main-feature-card .features li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #64ffda;
  font-weight: bold;
}

/* Style pour les cartes de comparaison de tarifs */
.pricing-comparison-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-comparison-card.featured {
  border-color: #64ffda;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}

.pricing-comparison-card .plan-name {
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.pricing-comparison-card .price {
  font-size: 3rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
  margin-bottom: 5px;
}

.pricing-comparison-card .period {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 30px;
}

.pricing-comparison-card .features {
  flex: 1;
  margin-bottom: 30px;
}

.pricing-comparison-card .features li {
  color: #8892b0;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.pricing-comparison-card .features li:last-child {
  border-bottom: none;
}

.pricing-comparison-card .features li.included {
  color: #64ffda;
}

.pricing-comparison-card .features li.not-included {
  color: #8892b0;
  opacity: 0.5;
  text-decoration: line-through;
}

.pricing-comparison-card .features li:before {
  content: '✓';
  color: #64ffda;
  font-weight: bold;
  margin-right: 10px;
}

.pricing-comparison-card .features li.not-included:before {
  content: '✗';
  color: #ff4757;
}

/* Style pour les cartes de statistiques de croissance */
.growth-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  position: relative;
}

.growth-stats-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.growth-stats-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.growth-stats-card .growth-rate {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
}

.growth-stats-card .growth-rate.positive {
  color: #2ecc71;
}

.growth-stats-card .growth-rate.negative {
  color: #ff4757;
}

.growth-stats-card .current-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 5px;
}

.growth-stats-card .previous-value {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.growth-stats-card .growth-chart {
  height: 80px;
  margin: 0 -20px -20px;
}

/* Style pour les cartes de témoignage d'expert */
.expert-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.expert-testimonial-card:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0 10px 0 100px;
}

.expert-testimonial-card .expert-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.expert-testimonial-card .expert-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(100, 255, 218, 0.3);
}

.expert-testimonial-card .expert-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.1rem;
}

.expert-testimonial-card .expert-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

.expert-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  position: relative;
  padding-left: 20px;
  border-left: 3px solid rgba(100, 255, 218, 0.3);
}

/* Style pour les cartes de métriques de performance */
.performance-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.performance-metrics-card .metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.performance-metrics-card .metric:last-child {
  border-bottom: none;
}

.performance-metrics-card .metric-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.performance-metrics-card .metric-icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
}

.performance-metrics-card .metric-name {
  color: #ccd6f6;
  font-weight: 500;
}

.performance-metrics-card .metric-value {
  color: #64ffda;
  font-weight: 700;
  font-size: 1.2rem;
}

/* Style pour les cartes de notification système */
.system-notification-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.system-notification-card .icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.system-notification-card.info .icon {
  background: rgba(52, 152, 219, 0.2);
  color: #3498db;
}

.system-notification-card.success .icon {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
}

.system-notification-card.warning .icon {
  background: rgba(241, 196, 15, 0.2);
  color: #f1c40f;
}

.system-notification-card.error .icon {
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
}

.system-notification-card .content {
  flex: 1;
}

.system-notification-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 5px;
}

.system-notification-card .message {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.system-notification-card .time {
  color: #8892b0;
  font-size: 0.8rem;
}

/* Style pour les cartes de statistiques de téléchargement */
.download-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.download-stats-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.download-stats-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.download-stats-card .download-count {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 20px;
}

.download-stats-card .platforms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 15px;
}

.download-stats-card .platform {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.download-stats-card .platform-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.download-stats-card .platform-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.download-stats-card .platform-count {
  color: #64ffda;
  font-weight: 600;
}

/* Style pour les cartes de métriques de temps */
.time-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.time-metrics-card .header {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.time-metrics-card .metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.time-metrics-card .metric:last-child {
  border-bottom: none;
}

.time-metrics-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
}

.time-metrics-card .metric-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 1.1rem;
}

.time-metrics-card .metric-trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
}

.time-metrics-card .metric-trend.up {
  color: #2ecc71;
}

.time-metrics-card .metric-trend.down {
  color: #ff4757;
}

/* Style pour les cartes de citation d'article */
.article-quote-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.article-quote-card:before {
  content: '❝';
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 4rem;
  color: rgba(100, 255, 218, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.article-quote-card:after {
  content: '❞';
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 4rem;
  color: rgba(100, 255, 218, 0.2);
  font-family: Georgia, serif;
  line-height: 1;
}

.article-quote-card .quote {
  color: #8892b0;
  font-size: 1.1rem;
  font-style: italic;
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

.article-quote-card .article-info {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.article-quote-card .article-title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 5px;
}

.article-quote-card .article-author {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de statistiques de satisfaction */
.satisfaction-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}

.satisfaction-stats-card .satisfaction-score {
  font-size: 3rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
  margin-bottom: 10px;
}

.satisfaction-stats-card .satisfaction-label {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.satisfaction-stats-card .satisfaction-stars {
  color: #ffd700;
  font-size: 1.5rem;
  margin-bottom: 20px;
  letter-spacing: 5px;
}

.satisfaction-stats-card .rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.satisfaction-stats-card .rating-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.satisfaction-stats-card .rating-stars {
  color: #ffd700;
  font-size: 0.9rem;
  width: 70px;
  text-align: left;
}

.satisfaction-stats-card .rating-bar {
  flex: 1;
  height: 6px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.satisfaction-stats-card .rating-fill {
  height: 100%;
  background: #ffd700;
  border-radius: 3px;
}

.satisfaction-stats-card .rating-count {
  color: #8892b0;
  font-size: 0.9rem;
  width: 40px;
  text-align: right;
}

/* Style pour les cartes de métriques de réseau */
.network-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.network-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.network-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.network-metrics-card .status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 0.9rem;
}

.network-metrics-card .status.online {
  color: #2ecc71;
}

.network-metrics-card .status.offline {
  color: #ff4757;
}

.network-metrics-card .metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
}

.network-metrics-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.network-metrics-card .metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 5px;
}

.network-metrics-card .metric-label {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de témoignage de partenaire */
.partner-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.partner-testimonial-card .partner-logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.partner-testimonial-card .partner-logo img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  filter: brightness(0.8) contrast(1.2);
}

.partner-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  flex: 1;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  border-left: 3px solid rgba(100, 255, 218, 0.3);
}

.partner-testimonial-card .partner-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.partner-testimonial-card .partner-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

.partner-testimonial-card .partner-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.partner-testimonial-card .partner-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de sécurité */
.security-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.security-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.security-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.security-metrics-card .security-level {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #2ecc71;
}

.security-metrics-card .metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
}

.security-metrics-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.security-metrics-card .metric:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #64ffda;
}

.security-metrics-card .metric.safe:before {
  background: #2ecc71;
}

.security-metrics-card .metric.warning:before {
  background: #f1c40f;
}

.security-metrics-card .metric.critical:before {
  background: #e74c3c;
}

.security-metrics-card .metric-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.security-metrics-card .metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
}

.security-metrics-card .metric.safe .metric-value {
  color: #2ecc71;
}

.security-metrics-card .metric.warning .metric-value {
  color: #f1c40f;
}

.security-metrics-card .metric.critical .metric-value {
  color: #e74c3c;
}

/* Style pour les cartes de statistiques d'engagement */
.engagement-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.engagement-stats-card .header {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.engagement-stats-card .engagement-metrics {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.engagement-stats-card .metric {
  display: flex;
  align-items: center;
  gap: 15px;
}

.engagement-stats-card .metric-icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.engagement-stats-card .metric-info {
  flex: 1;
}

.engagement-stats-card .metric-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.engagement-stats-card .metric-value {
  color: #64ffda;
  font-weight: 700;
  font-size: 1.2rem;
}

.engagement-stats-card .metric-trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.engagement-stats-card .metric-trend.up {
  color: #2ecc71;
}

.engagement-stats-card .metric-trend.down {
  color: #ff4757;
}

/* Style pour les cartes de citation de presse */
.press-quote-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.press-quote-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec);
  border-radius: 10px 10px 0 0;
}

.press-quote-card .publication-logo {
  height: 40px;
  margin-bottom: 20px;
}

.press-quote-card .publication-logo img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.press-quote-card .quote {
  color: #8892b0;
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
  border-left: 3px solid rgba(100, 255, 218, 0.3);
}

.press-quote-card .article-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.press-quote-card .article-title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.press-quote-card .article-date {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de performance système */
.system-performance-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.system-performance-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.system-performance-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.system-performance-card .system-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #2ecc71;
}

.system-performance-card .performance-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.system-performance-card .metric {
  text-align: center;
  padding: 20px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 10px;
}

.system-performance-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.system-performance-card .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 5px;
}

.system-performance-card .metric-label {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de témoignage d'utilisateur final */
.end-user-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 25px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.end-user-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  flex: 1;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
}

.end-user-testimonial-card .testimonial:before {
  content: '❝';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 2rem;
  color: rgba(100, 255, 218, 0.3);
  font-family: Georgia, serif;
  line-height: 1;
}

.end-user-testimonial-card .user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.end-user-testimonial-card .user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(100, 255, 218, 0.3);
}

.end-user-testimonial-card .user-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.end-user-testimonial-card .user-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

.end-user-testimonial-card .user-rating {
  color: #ffd700;
  font-size: 0.9rem;
  margin-top: 5px;
}

/* Style pour les cartes de statistiques de conversion */
.conversion-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.conversion-stats-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.conversion-stats-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.conversion-stats-card .conversion-rate {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 20px;
}

.conversion-stats-card .funnel {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.conversion-stats-card .funnel-stage {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.conversion-stats-card .funnel-stage:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--stage-width);
  background: rgba(100, 255, 218, 0.1);
  transition: width 1.5s ease;
}

.conversion-stats-card .stage-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
}

.conversion-stats-card .stage-value {
  color: #64ffda;
  font-weight: 600;
  position: relative;
  z-index: 1;
}

/* Style pour les cartes de métriques de qualité */
.quality-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.quality-metrics-card .header {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.quality-metrics-card .quality-score {
  text-align: center;
  margin-bottom: 30px;
}

.quality-metrics-card .score-circle {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
}

.quality-metrics-card .score-circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.quality-metrics-card .score-circle-bg {
  fill: none;
  stroke: rgba(100, 255, 218, 0.1);
  stroke-width: 8;
}

.quality-metrics-card .score-circle-progress {
  fill: none;
  stroke: #64ffda;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 314;
  stroke-dashoffset: calc(314 - (314 * var(--quality-score)) / 100);
  transition: stroke-dashoffset 1.5s ease;
}

.quality-metrics-card .score-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
}

.quality-metrics-card .score-label {
  color: #8892b0;
  font-size: 0.9rem;
}

.quality-metrics-card .quality-factors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.quality-metrics-card .factor {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.quality-metrics-card .factor-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.quality-metrics-card .factor-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
}

/* Style pour les cartes de témoignage d'industrie */
.industry-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.industry-testimonial-card:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0 0 0 150px;
}

.industry-testimonial-card .industry-icon {
  width: 60px;
  height: 60px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.industry-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.industry-testimonial-card .company-info {
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
  z-index: 1;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.industry-testimonial-card .company-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  background: white;
  border-radius: 8px;
  padding: 5px;
}

.industry-testimonial-card .company-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.industry-testimonial-card .company-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques d'innovation */
.innovation-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.innovation-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.innovation-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.innovation-metrics-card .innovation-index {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 20px;
}

.innovation-metrics-card .innovation-areas {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.innovation-metrics-card .area {
  display: flex;
  align-items: center;
  gap: 15px;
}

.innovation-metrics-card .area-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  width: 100px;
}

.innovation-metrics-card .area-progress {
  flex: 1;
  height: 8px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.innovation-metrics-card .area-fill {
  height: 100%;
  background: linear-gradient(90deg, #64ffda, #2eafec);
  border-radius: 4px;
  width: var(--area-progress);
  transition: width 1.5s ease;
}

.innovation-metrics-card .area-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 0.9rem;
  width: 40px;
  text-align: right;
}

/* Style pour les cartes de témoignage de leadership */
.leadership-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.leadership-testimonial-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #0a192f);
  border-radius: 10px 10px 0 0;
}

.leadership-testimonial-card .leadership-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(100, 255, 218, 0.3);
  margin: 0 auto 20px;
  display: block;
}

.leadership-testimonial-card .testimonial {
  color: #8892b0;
  text-align: center;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  padding: 0 20px;
}

.leadership-testimonial-card .leader-info {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.leadership-testimonial-card .leader-name {
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.leadership-testimonial-card .leader-title {
  color: #64ffda;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.leadership-testimonial-card .leader-company {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de statistiques de durabilité */
.sustainability-stats-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.sustainability-stats-card .header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.sustainability-stats-card .icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ecc71;
  font-size: 1.2rem;
}

.sustainability-stats-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.sustainability-stats-card .sustainability-score {
  text-align: center;
  margin-bottom: 30px;
}

.sustainability-stats-card .score {
  font-size: 3rem;
  font-weight: 700;
  color: #2ecc71;
  line-height: 1;
  margin-bottom: 10px;
}

.sustainability-stats-card .score-label {
  color: #8892b0;
  font-size: 0.9rem;
}

.sustainability-stats-card .sustainability-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.sustainability-stats-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.sustainability-stats-card .metric-icon {
  font-size: 1.5rem;
  color: #2ecc71;
  margin-bottom: 10px;
}

.sustainability-stats-card .metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 5px;
}

.sustainability-stats-card .metric-label {
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de témoignage de transformation */
.transformation-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.transformation-testimonial-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec, #0a192f);
}

.transformation-testimonial-card .transformation-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.transformation-testimonial-card .stat {
  text-align: center;
}

.transformation-testimonial-card .stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  display: block;
}

.transformation-testimonial-card .stat-label {
  color: #8892b0;
  font-size: 0.9rem;
}

.transformation-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
}

.transformation-testimonial-card .testimonial:before {
  content: '❝';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 2rem;
  color: rgba(100, 255, 218, 0.3);
  font-family: Georgia, serif;
  line-height: 1;
}

.transformation-testimonial-card .client-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.transformation-testimonial-card .client-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

.transformation-testimonial-card .client-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.transformation-testimonial-card .client-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de productivité */
.productivity-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.productivity-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.productivity-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.productivity-metrics-card .productivity-score {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
  text-align: center;
  margin-bottom: 20px;
}

.productivity-metrics-card .productivity-breakdown {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.productivity-metrics-card .breakdown-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.productivity-metrics-card .item-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  width: 120px;
}

.productivity-metrics-card .item-bar {
  flex: 1;
  height: 10px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.productivity-metrics-card .item-fill {
  height: 100%;
  background: linear-gradient(90deg, #64ffda, #2eafec);
  border-radius: 5px;
  width: var(--item-value);
  transition: width 1.5s ease;
}

.productivity-metrics-card .item-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 0.9rem;
  width: 50px;
  text-align: right;
}

/* Style pour les cartes de témoignage de partenariat stratégique */
.strategic-partnership-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.strategic-partnership-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec);
}

.strategic-partnership-card .partnership-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 25px;
}

.strategic-partnership-card .logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.strategic-partnership-card .logo img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.strategic-partnership-card .partnership-symbol {
  font-size: 1.5rem;
  color: #64ffda;
}

.strategic-partnership-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  padding: 0 20px;
}

.strategic-partnership-card .partnership-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.strategic-partnership-card .company-info {
  text-align: left;
}

.strategic-partnership-card .company-name {
  color: #ccd6f6;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.strategic-partnership-card .company-role {
  color: #64ffda;
  font-size: 0.8rem;
}

/* Style pour les cartes de métriques de fiabilité */
.reliability-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.reliability-metrics-card .header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.reliability-metrics-card .icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ecc71;
  font-size: 1.2rem;
}

.reliability-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.reliability-metrics-card .reliability-score {
  text-align: center;
  margin-bottom: 25px;
}

.reliability-metrics-card .score {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2ecc71;
  line-height: 1;
  margin-bottom: 10px;
}

.reliability-metrics-card .uptime {
  color: #8892b0;
  font-size: 0.9rem;
}

.reliability-metrics-card .reliability-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 15px;
}

.reliability-metrics-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.reliability-metrics-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.reliability-metrics-card .metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #64ffda;
}

.reliability-metrics-card .metric.high .metric-value {
  color: #2ecc71;
}

.reliability-metrics-card .metric.medium .metric-value {
  color: #f1c40f;
}

.reliability-metrics-card .metric.low .metric-value {
  color: #e74c3c;
}

/* Style pour les cartes de témoignage de réussite */
.success-story-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.success-story-card:hover {
  transform: translateY(-5px);
  border-color: #64ffda;
}

.success-story-card .story-image {
  height: 200px;
  overflow: hidden;
}

.success-story-card .story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.success-story-card:hover .story-image img {
  transform: scale(1.05);
}

.success-story-card .content {
  padding: 25px;
}

.success-story-card .achievement {
  color: #64ffda;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: 600;
}

.success-story-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.success-story-card .description {
  color: #8892b0;
  margin-bottom: 20px;
  font-size: 0.9rem;
}

.success-story-card .client-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.success-story-card .client-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

.success-story-card .client-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.success-story-card .client-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques d'efficacité */
.efficiency-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.efficiency-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.efficiency-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.efficiency-metrics-card .efficiency-score {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  text-align: center;
  margin-bottom: 25px;
}

.efficiency-metrics-card .efficiency-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.efficiency-metrics-card .detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.efficiency-metrics-card .detail-name {
  color: #8892b0;
  font-size: 0.9rem;
}

.efficiency-metrics-card .detail-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 1.1rem;
}

.efficiency-metrics-card .detail-change {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.efficiency-metrics-card .detail-change.up {
  color: #2ecc71;
}

.efficiency-metrics-card .detail-change.down {
  color: #ff4757;
}

/* Style pour les cartes de témoignage d'impact */
.impact-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.impact-testimonial-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec, #0a192f);
}

.impact-testimonial-card .impact-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.impact-testimonial-card .stat {
  text-align: center;
  padding: 15px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 8px;
}

.impact-testimonial-card .stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  display: block;
  line-height: 1;
}

.impact-testimonial-card .stat-label {
  color: #8892b0;
  font-size: 0.9rem;
  margin-top: 5px;
}

.impact-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
  position: relative;
  padding-left: 20px;
}

.impact-testimonial-card .testimonial:before {
  content: '❝';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 2rem;
  color: rgba(100, 255, 218, 0.3);
  font-family: Georgia, serif;
  line-height: 1;
}

.impact-testimonial-card .organization-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.impact-testimonial-card .organization-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: white;
  border-radius: 8px;
  padding: 5px;
}

.impact-testimonial-card .organization-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.impact-testimonial-card .organization-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de satisfaction client */
.customer-satisfaction-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.customer-satisfaction-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.customer-satisfaction-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.customer-satisfaction-card .csat-score {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  text-align: center;
  margin-bottom: 10px;
}

.customer-satisfaction-card .score-label {
  color: #8892b0;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 25px;
}

.customer-satisfaction-card .feedback-breakdown {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.customer-satisfaction-card .feedback-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.customer-satisfaction-card .category-name {
  color: #ccd6f6;
  font-size: 0.9rem;
  width: 100px;
}

.customer-satisfaction-card .category-rating {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
}

.customer-satisfaction-card .rating-stars {
  color: #ffd700;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.customer-satisfaction-card .rating-value {
  color: #64ffda;
  font-weight: 600;
  font-size: 0.9rem;
  width: 30px;
}

.customer-satisfaction-card .category-trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  width: 60px;
  text-align: right;
}

.customer-satisfaction-card .category-trend.up {
  color: #2ecc71;
}

.customer-satisfaction-card .category-trend.down {
  color: #ff4757;
}

/* Style pour les cartes de témoignage d'innovation */
.innovation-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
}

.innovation-testimonial-card:before {
  content: '💡';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
}

.innovation-testimonial-card .innovation-badge {
  display: inline-block;
  padding: 5px 15px;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.innovation-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 25px;
  font-size: 1.1rem;
}

.innovation-testimonial-card .innovator-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.innovation-testimonial-card .innovator-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(100, 255, 218, 0.3);
}

.innovation-testimonial-card .innovator-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.1rem;
}

.innovation-testimonial-card .innovator-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de croissance */
.growth-metrics-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.growth-metrics-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec);
}

.growth-metrics-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.growth-metrics-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.growth-metrics-card .growth-rate {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2ecc71;
}

.growth-metrics-card .growth-chart {
  height: 100px;
  margin: 0 -20px -20px;
  position: relative;
}

.growth-metrics-card .chart-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 25, 47, 0.9), transparent);
}

/* Style pour les cartes de témoignage de qualité */
.quality-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  position: relative;
}

.quality-testimonial-card:before {
  content: '🏆';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.2;
}

.quality-testimonial-card .quality-badge {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  font-size: 2rem;
}

.quality-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
}

.quality-testimonial-card .quality-metrics {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.quality-testimonial-card .metric {
  text-align: center;
}

.quality-testimonial-card .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  display: block;
}

.quality-testimonial-card .metric-label {
  color: #8892b0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.quality-testimonial-card .client-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.quality-testimonial-card .client-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(100, 255, 218, 0.3);
}

.quality-testimonial-card .client-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.quality-testimonial-card .client-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques d'engagement utilisateur */
.user-engagement-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.user-engagement-card .header {
  color: #ccd6f6;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.user-engagement-card .engagement-score {
  text-align: center;
  margin-bottom: 25px;
}

.user-engagement-card .score {
  font-size: 3rem;
  font-weight: 700;
  color: #64ffda;
  line-height: 1;
  margin-bottom: 10px;
}

.user-engagement-card .score-label {
  color: #8892b0;
  font-size: 0.9rem;
}

.user-engagement-card .engagement-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.user-engagement-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.user-engagement-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.user-engagement-card .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  margin-bottom: 5px;
}

.user-engagement-card .metric-change {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 600;
}

.user-engagement-card .metric-change.up {
  color: #2ecc71;
}

.user-engagement-card .metric-change.down {
  color: #ff4757;
}

/* Style pour les cartes de témoignage de collaboration */
.collaboration-testimonial-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.collaboration-testimonial-card:before {
  content: '🤝';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  opacity: 0.1;
}

.collaboration-testimonial-card .collaboration-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.collaboration-testimonial-card .stat {
  text-align: center;
}

.collaboration-testimonial-card .stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  display: block;
}

.collaboration-testimonial-card .stat-label {
  color: #8892b0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.collaboration-testimonial-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
}

.collaboration-testimonial-card .partner-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.collaboration-testimonial-card .partner-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: white;
  border-radius: 8px;
  padding: 5px;
}

.collaboration-testimonial-card .partner-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1rem;
}

.collaboration-testimonial-card .partner-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de performance opérationnelle */
.operational-performance-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.operational-performance-card .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.operational-performance-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.operational-performance-card .performance-score {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
  text-align: center;
  margin-bottom: 25px;
}

.operational-performance-card .performance-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
}

.operational-performance-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
  position: relative;
}

.operational-performance-card .metric:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #64ffda;
  border-radius: 8px 8px 0 0;
}

.operational-performance-card .metric.high:before {
  background: #2ecc71;
}

.operational-performance-card .metric.medium:before {
  background: #f1c40f;
}

.operational-performance-card .metric.low:before {
  background: #e74c3c;
}

.operational-performance-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.operational-performance-card .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
}

.operational-performance-card .metric.high .metric-value {
  color: #2ecc71;
}

.operational-performance-card .metric.medium .metric-value {
  color: #f1c40f;
}

.operational-performance-card .metric.low .metric-value {
  color: #e74c3c;
}

/* Style pour les cartes de témoignage de transformation digitale */
.digital-transformation-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;
}

.digital-transformation-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #64ffda, #2eafec, #0a192f);
}

.digital-transformation-card .digital-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.digital-transformation-card .stat {
  text-align: center;
}

.digital-transformation-card .stat-icon {
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 10px;
}

.digital-transformation-card .stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #64ffda;
  display: block;
}

.digital-transformation-card .stat-label {
  color: #8892b0;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.digital-transformation-card .testimonial {
  color: #8892b0;
  font-style: italic;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.digital-transformation-card .company-info {
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 20px;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.digital-transformation-card .company-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
  background: white;
  border-radius: 10px;
  padding: 8px;
}

.digital-transformation-card .company-details h4 {
  margin: 0;
  color: #ccd6f6;
  font-weight: 600;
  font-size: 1.1rem;
}

.digital-transformation-card .company-details p {
  margin: 5px 0 0;
  color: #8892b0;
  font-size: 0.9rem;
}

/* Style pour les cartes de métriques de sécurité avancée */
.advanced-security-card {
  background: rgba(17, 34, 64, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  padding: 20px;
  position: relative;
}

.advanced-security-card:before {
  content: '🔒';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  opacity: 0.2;
}

.advanced-security-card .header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.advanced-security-card .icon {
  width: 40px;
  height: 40px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ecc71;
  font-size: 1.2rem;
}

.advanced-security-card .title {
  color: #ccd6f6;
  font-weight: 600;
  margin: 0;
}

.advanced-security-card .security-status {
  text-align: center;
  margin-bottom: 25px;
}

.advanced-security-card .status {
  font-size: 2rem;
  font-weight: 700;
  color: #2ecc71;
  line-height: 1;
  margin-bottom: 10px;
}

.advanced-security-card .status-label {
  color: #8892b0;
  font-size: 0.9rem;
}

.advanced-security-card .security-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 15px;
}

.advanced-security-card .metric {
  text-align: center;
  padding: 15px;
  background: rgba(10, 25, 47, 0.5);
  border-radius: 8px;
}

.advanced-security-card .metric-name {
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.advanced-security-card .metric-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #64ffda;
}

.advanced-security-card .metric.good .metric-value {
  color: #2ecc71;
}

.advanced-security-card .metric.warning .metric-value {
  color: #f1c40f;
}

.advanced-security-card .metric.critical .metric-value {
  color: #e74c3c;
}

/* Fin du fichier CSS */