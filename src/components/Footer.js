import appstore from '../img/appstore.jpg';
import googleplay from '../img/googleplay.jpg';

export function Footer() {
    return (
        <div className="footer">
            <div className="row footer-top">
                <div className="logo">
                    <p className="primary-color">Tripma</p>
                </div>
                <div className="footer-col">
                    <h6>About Tripma</h6>
                    <a href="">How it works</a>
                    <a href="">Careers</a>
                    <a href="">Press</a>
                    <a href="">Blog</a>
                    <a href="">Forum</a>
                </div>
                <div className="footer-col">
                    <h6>Partner with us</h6>
                    <a href="">Partnership programs</a>
                    <a href="">Affiliate program</a>
                    <a href="">Connectivity partners</a>
                    <a href="">Promotions and events</a>
                    <a href="">Integrations</a>
                    <a href="">Community</a>
                    <a href="">Loyalty program</a>
                </div>
                <div className="footer-col">
                    <h6>Support</h6>
                    <a href="">Help Center</a>
                    <a href="">Contact us</a>
                    <a href="">Privacy policy</a>
                    <a href="">Terms of service</a>
                    <a href="">Trust and safety</a>
                    <a href="">Accessibility</a>
                </div>
                <div className="footer-col">
                    <h6>Get the app</h6>
                    <a href="">Tripma for Android</a>
                    <a href="">Tripma for iOS</a>
                    <a href="">Mobile site</a>
                   <div><a href="https://www.apple.com/app-store/"><img src={appstore} alt=""/></a></div>
                   <div><a href="https://play.google.com/store"><img src={googleplay} alt=""/></a></div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="icon">
                    <a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                </div>
                <div className="copy-right">
                    <p>© 2020 Tripma incorporated</p>
                </div>
            </div>
            
        </div>
    )
}