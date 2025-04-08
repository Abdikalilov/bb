import './banner.scss'
import img from '../../../shared/eventsImg/Rectangle 679 (1).png'
import { Link } from 'react-router-dom';

export const Banner = () => {
    const bannerData = [
        {
            title: "История, которая продолжает жить веками",
            text: "Библиотека имени Токтогула Сатылганова – это культурный и образовательный центр, предлагающий широкие возможности для обучения, саморазвития и культурного обмена. Мы стремимся быть местом, где каждый может найти ресурсы, которые помогут развиваться, учиться и получать новые знания.",
            buttonText: "Подробнее",
            buttonLink: "/about",
            image: img
        }
    ];

    return (
        <div className="banner container">
            {bannerData.map((item, index) => (
                <div key={index} className="banner_row">
                    <div className="banner_text">

                        <h1 className='banner_text_title'>{item.title}</h1>
                        <p className='banner_text_description'>{item.text}</p>
                        <button className='banner_text_btn'>
                            <Link to={item.buttonLink}>{item.buttonText}</Link>
                        </button>
                    </div>

                    <div className="banner_img">

                        <img src={item.image} alt="banner" style={{ borderRadius: "inherit" }} />
                    </div>
                </div>
            ))}
        </div>
    );
}


