import './management.scss'
import managementImage from '../../../shared/libraryImages/464e7ee59a3467486b60ff531f7344a1.png'


export const Management = () => {
    return (
        <div className='management-container container'>
            <h1 className='management-container-title main__title' >РУКОВОДСТВО</h1>
            <div className='management-container-cards' >
                <div className='management-container-cards-card' >
                    <img className='management-container-cards-card-img' src={managementImage} alt="" />
                    <h3 className='management-title' >Директор библиотеки</h3>
                    <p className='management-description'>Иванова Елена Сергеевна</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementImage} alt="" />
                    <h3 className='management-title'>Заместитель Директора</h3>
                    <p className='management-description'>Петрова Мария Алексеевна</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementImage} alt="" />
                    <h3 className='management-title'>Главный Библиотекарь</h3>
                    <p className='management-description'>Смирнов Александр Владимирович</p>
                </div>
                <div className='management-container-cards-card'>
                    <img className='management-container-cards-card-img' src={managementImage} alt="" />
                    <h3 className='management-title'>Главный Библиотекарь</h3>
                    <p className='management-description'>Смирнов Александр Владимирович</p>
                </div>
            </div>
        </div>
    );
}

