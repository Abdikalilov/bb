import img from '../../../shared/image/banner2.png'
import img3 from '../../../shared/image/Banner.png'
import "./projectbanner.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectData } from "../../../app/store/reducers/projectSlice";

export const ProjectBanner = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.project);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjectData());
    }
  }, [dispatch, status]);

  return (
    <section className='projectBanner'>
        <h1>Наши проекты: читаем, учимся, развиваемся</h1>
       
        <img className='projectbanner_img1' src={img} alt="Project" />

        <div className="rotating-wrapper">
          <svg id="rotatingText" viewBox="0 0 200 200" >
            <defs>
              <path id="circle" d="M 100, 100 m -70, 0 a 70,70 0 1,0 140,0 a 70,70 0 1,0 -140,0"></path>
            </defs>
            <text>
              <textPath className="text" href="#circle" startOffset="0%">
             </textPath>
            </text>
          </svg>
        </div>

        <img className='projectbanner_img2' src={img3} alt="Project" />
      
    </section>
  )
}
