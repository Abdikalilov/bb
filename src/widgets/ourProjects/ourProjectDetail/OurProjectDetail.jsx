import { useParams } from 'react-router-dom';
import './ourprojectdetail.scss'
import DataProjects from '../MainProject/MainProjects'

export const OurProjectDetail = () => {
    const { id } = useParams();
    const project = DataProjects.find((item) => item.id === parseInt(id)); 
    const { img, title, description } = project;    
    return (
        <div className="ourProject">
            <div className="container">

                <h1 className='ourProject_title'>Выставка:  {title}</h1>
                <div className="ourProject_group">
                    <div className="ourProject_group_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="ourProject_group_text">
                        <h2>Описание</h2>
                        <div className='ourProject_group_text_description'>
                            <p className='ourProject_group_text_description_part'>{description}</p>

                            <p className='ourProject_group_text_description_part'>Планируется, что до конца года российские ученые, педагоги и разработчики современных средств обучения проведут в центре мастер-классы по физике, биологии, робототехнике для школьников и педагогов. Также будет проведен детский фестиваль научных экспериментов.</p>

                            <p className='ourProject_group_text_description_part'>Россотрудничество оснастило центр современной эргономичной мебелью. Для детей до 12 лет предусмотрена </p>
                        </div>
                        
                    </div>
                    <div className='ourProject_group_text-two'>
                            <p className='ourProject_group_text-two-description'>игровая зона с уникальными "говорящими" книгами и ручками "Знаток", электронными плакатами, интерактивным столиком и конструкторами</p>
                            
                            <p className='ourProject_group_text-two-description'>В открытии центра приняли участие заместитель министра культуры КР Гульбара Абдыкалыкова, замглавы Россотрудничества Павел Шевцов, библиотекари, учителя, а также лидеры движения соотечественников.</p>

                            <p className='ourProject_group_text-two-description'>Шевцов отметил, что идея создания центра принадлежит Россотрудничеству.</p>
                        
                        </div>

                </div>
            </div>
        </div>
    )
}




