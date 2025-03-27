import { Link } from "react-router-dom"
import "./cardProjects.scss"
export const CardProjects = ({ img, title, description, id }) => {

    console.log(id)
    return (
        <div>
           <Link to={`/project-detail/${id}`}> <div className="cardProjects">
                <img src={img} alt="" />
                <h4>{title}  
                </h4>
                <p>{description}</p>
            </div>
            </Link>
        </div>
    )
}
