import { Link } from "react-router-dom"
import "./cardProjects.scss"
export const CardProjects = ({ image, title, description, id }) => {
    return (
        <div className='projects container'>
            <div className='projects-grid'>
                <div className='projects-grid-items'>
                    <div className="projects-grid-items-left">
                        <img className='projects-grid-items-left-img' src={image} alt="" />
                    </div>
                        <div className='projects-grid-items-text'>
                            <h3 className='projects-grid-items-text-title'>{title}</h3>
                            <p className='projects-grid-items-text-description'>
                            {description.substr(0, 350).trim() + '...' }
                            </p>
                            <button className='projects-grid-items-text-button'><Link to={`/project-detail/${id}`}>Подробнее</Link></button>
                        </div>
                </div>
            </div>
        </div>
    )
}
