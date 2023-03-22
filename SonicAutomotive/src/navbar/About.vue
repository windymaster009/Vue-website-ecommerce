<template>
    <!-- Team-->
    <section class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/nav-Logo/SRUNNOOBIE.png" alt="..." />
                        <h4>SRUNNOOBIE</h4>
                        <p class="text-muted">FrontEnd Designer</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Instagram Profile"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Youtube Profile"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/nav-Logo/Posidon.png" alt="..." />
                        <h4>POSIDON</h4>
                        <p class="text-muted">API Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Instagram Profile"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Youtube Profile"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="../assets/nav-Logo/Windy.png" alt="..." />
                        <h4>WINDY</h4>
                        <p class="text-muted">Admin Panel Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Instagram Profile"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Youtube Profile"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="https://image.similarpng.com/very-thumbnail/2020/12/Colorful-google-logo-design-on-transparent-PNG-1.png" alt="..." />
                        <h4>Mr Google</h4>
                        <p class="text-muted">Supporter</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.google.com/" aria-label="Larry Parker Google Profile"><i class="fab fa-google"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="data:image/png;base64,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" alt="..." />
                        <h4>GITHUB</h4>
                        <p class="text-muted">Lead Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Instagram Profile"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="https://th.bing.com/th/id/OIP.s6mD_san5Xt0TsLF2zGmBgHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7" alt="..." />
                        <h4>Mr Youtube</h4>
                        <p class="text-muted">Supporter</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.youtube.com/" aria-label="Larry Parker Youtube Profile"><i class="fab fa-youtube"></i></a>
                        
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">That's our team if you want to know more please contact us contact or our social.</p></div>
            </div>
        </div>
    </section>
    </template>
    <script>
    
    </script>
    
    <style>
    .page-section{
        padding-top: 10%;
    }
    .timeline:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 40px;
      width: 2px;
      margin-left: -1.5px;
      background-color: #e9ecef;
    }
    .timeline > li {
      position: relative;
      min-height: 50px;
      margin-bottom: 50px;
    }
    .timeline > li:after, .timeline > li:before {
      display: table;
      content: " ";
    }
    .timeline > li:after {
      clear: both;
    }
    .timeline > li .timeline-panel {
      position: relative;
      float: right;
      width: 100%;
      padding: 0 20px 0 100px;
      text-align: left;
    }
    .timeline > li .timeline-panel:before {
      right: auto;
      left: -15px;
      border-right-width: 15px;
      border-left-width: 0;
    }
    .timeline > li .timeline-panel:after {
      right: auto;
      left: -14px;
      border-right-width: 14px;
      border-left-width: 0;
    }
    .timeline > li .timeline-image {
      position: absolute;
      z-index: 100;
      left: 0;
      width: 80px;
      height: 80px;
      margin-left: 0;
      text-align: center;
      color: white;
      border: 7px solid #e9ecef;
      border-radius: 100%;
      background-color: #ffc800;
    }
    .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
      font-size: 10px;
      line-height: 14px;
      margin-top: 12px;
    }
    .timeline > li.timeline-inverted > .timeline-panel {
      float: right;
      padding: 0 20px 0 100px;
      text-align: left;
    }
    .timeline > li.timeline-inverted > .timeline-panel:before {
      right: auto;
      left: -15px;
      border-right-width: 15px;
      border-left-width: 0;
    }
    .timeline > li.timeline-inverted > .timeline-panel:after {
      right: auto;
      left: -14px;
      border-right-width: 14px;
      border-left-width: 0;
    }
    .timeline > li:last-child {
      margin-bottom: 0;
    }
    .timeline .timeline-heading h4, .timeline .timeline-heading .h4 {
      margin-top: 0;
      color: inherit;
    }
    .timeline .timeline-heading h4.subheading, .timeline .timeline-heading .subheading.h4 {
      text-transform: none;
    }
    .timeline .timeline-body > ul,
    .timeline .timeline-body > p {
      margin-bottom: 0;
    }
    
    @media (min-width: 768px) {
      .timeline:before {
        left: 50%;
      }
      .timeline > li {
        min-height: 100px;
        margin-bottom: 100px;
      }
      .timeline > li .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
      }
      .timeline > li .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
      }
      .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
        font-size: 13px;
        line-height: 18px;
        margin-top: 16px;
      }
      .timeline > li.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
      }
    }
    @media (min-width: 992px) {
      .timeline > li {
        min-height: 150px;
      }
      .timeline > li .timeline-panel {
        padding: 0 20px 20px;
      }
      .timeline > li .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
      }
      .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
        font-size: 18px;
        line-height: 26px;
        margin-top: 30px;
      }
      .timeline > li.timeline-inverted > .timeline-panel {
        padding: 0 20px 20px;
      }
    }
    @media (min-width: 1200px) {
      .timeline > li {
        min-height: 170px;
      }
      .timeline > li .timeline-panel {
        padding: 0 20px 20px 100px;
      }
      .timeline > li .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
      }
      .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
        margin-top: 40px;
      }
      .timeline > li.timeline-inverted > .timeline-panel {
        padding: 0 100px 20px 20px;
      }
    }
    .team-member {
      margin-bottom: 3rem;
      text-align: center;
    }
    .team-member img {
      width: 14rem;
      height: 14rem;
      border: 0.5rem solid rgba(0, 0, 0, 0.1);
    }
    .team-member h4, .team-member .h4 {
      margin-top: 1.5rem;
      margin-bottom: 0;
    }
    
    .img-brand {
      height: 2.75rem;
    }
    
    </style>