import './Banner.scss';
import BannerImg from '../../images/banner.jpeg';



function Banner() {
    return (
        <div className="banner">
            <img src={BannerImg} alt="banner" />
            <h2>Let's plan the day..!</h2>
        </div>
    )
}

export default Banner
