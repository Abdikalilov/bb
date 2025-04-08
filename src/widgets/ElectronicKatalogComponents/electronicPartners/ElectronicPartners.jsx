import './ElectronicPartners.scss';
import Sponsors from '../../../shared/img/Sponsors.jpg';


export const ElectronicPartners = () => {
    return (
        <div>
            <div className="eletronic__sponsors">
                <h1 className="sponsors_title main__title">сайты других электронных каталогов книг </h1>
                <img className="sponsors_img" src={Sponsors} alt="" />
            </div>
        </div>
    );
}

