import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardFhdt.scss";

export const  CardFhdt = () => {
  const [mobile, setMObile] = useState(window.innerWidth < 460)
  
  useEffect(() => {
    const resizeMobile = () => {
      setMObile(window.innerWidth <= 460)
    }
    window.addEventListener('resize', resizeMobile)
    return () => {
      window.removeEventListener('resize', resizeMobile)
    }

  }, []);
  const cards = [
    {
      title: "КАТАЛОГИ",
      description:
        "Электронные и печатные каталоги содержат широкий выбор книг, научных изданий и цифровых ресурсов.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/2a67/945e/7716749eb276a025f6717346cb1ef647?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSjKgMnnttqiujshXK9l98-q1l-9biq3YszJjlXznorUzWfOKXlAuv0Ze~rZscvaKIpB7FcqOtElMm8CNf6Hu-Xus0LHUh6skPS-fpC1957Ozgc8O89~CDF9u6gsuBsEh99Juz7uZn1VmV9yRf9DWB7wvScEhjIYvi7qUK4t7~0--dVBDCGQqnX4IyiBl9VXOpi92jGSbv27y4tfBm6m-RAeEPw9iCTw-RB5thnZwY1RqxzrKp9pCOfUViIZhY05guLL3redEi5ydNswVnFCzMS4JXVj-W4rBIvbhXOa7YpNDmOS5WFUneVjIudDzeoW65-MvjyZFYcnJcW1MtfBvg__",
      alt: "Каталоги",
      link: '/catalog'
    },
    {
      title: "ЭЛЕКТРОННАЯ БИБЛИОТЕКА",
      description:
        "Доступ к тысячам электронных книг, научных публикаций и архивных документов в удобном формате.",
      imgSrc: "https://s3-alpha-sig.figma.com/img/2a67/945e/7716749eb276a025f6717346cb1ef647?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JSjKgMnnttqiujshXK9l98-q1l-9biq3YszJjlXznorUzWfOKXlAuv0Ze~rZscvaKIpB7FcqOtElMm8CNf6Hu-Xus0LHUh6skPS-fpC1957Ozgc8O89~CDF9u6gsuBsEh99Juz7uZn1VmV9yRf9DWB7wvScEhjIYvi7qUK4t7~0--dVBDCGQqnX4IyiBl9VXOpi92jGSbv27y4tfBm6m-RAeEPw9iCTw-RB5thnZwY1RqxzrKp9pCOfUViIZhY05guLL3redEi5ydNswVnFCzMS4JXVj-W4rBIvbhXOa7YpNDmOS5WFUneVjIudDzeoW65-MvjyZFYcnJcW1MtfBvg__",
      alt: "Электронная библиотека",
      link: '/electronic'
    },
  ];

  return (
    <div className="container">
   <div className="card-fhdt__container">
        <div className="card-fhdt__list">
          {cards.map((item, index) => (
            <div className="card-fhdt__item" key={index}>
              <h2 className="card-fhdt__title">{item.title}</h2>
              <div className="card-fhdt__card">
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="card-fhdt__card-image"
                />
                <div className="card-fhdt__card-content">
                  <div className="card-fhdt__card-content-left">
                    <h3 className="card-fhdt__card-title">{item.title}</h3>
                    <p className="card-fhdt__card-description">
                      {mobile
                    ? item.description.substr(0, 30 ).trim() + '...'
                    : item.description
                    }</p>
                  </div>
                  <div className="card-fhdt__card-content-right">
                    <Link to={item.link} className="card-fhdt__card-button">Подробнее</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
  );
}