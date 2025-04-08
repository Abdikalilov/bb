import './supportPartners.scss';
import Sponsors from '../../../shared/img/Sponsors.jpg';

export const SupportPartners = () => {
    return (
        <div>
            <div className="sponsor">
                <h1 className="title_sponsor ">Наши партнёры, главные спонсоры</h1>
                <img className="img_sponsor" src={Sponsors} alt="" />
            </div>
        </div>
    );
};