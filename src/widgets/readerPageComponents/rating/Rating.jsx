import './rating.scss';
import img from '../../../shared/images/Foto.png';
import img2 from '../../../shared/images/Foto2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';


    
export const Rating = () => {


    const newsItems = [
        { date: "(01)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(02)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(03)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(04)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(05)", title: "Иван Иванов (75 книг за месяц)." },
        { date: "(06)", title: "Иван Иванов (75 книг за месяц)." },
    ];

    const books = [
        {
            date: "(01)",
            title: 'Книга: "История цивилизаций.',
            title2: 'Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(02)",
            title: 'Книга: "История цивилизаций.',
            title2: 'Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(03)",
            title: 'Книга: "История цивилизаций.',
            title2: 'Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
            date: "(04)",
            title: 'Книга: "История цивилизаций.',
            title2: 'Автор: Джон Доу.',
            take: 'Код цивилизаций" — 500 прочтений'
        },
        {
          date: "(05)",
          title: 'Книга: "История цивилизаций.',
          title2: 'Автор: Джон Доу.',
          take: 'Код цивилизаций" — 500 прочтений'
        },
        {
          date: "(06)",
          title: 'Книга: "История цивилизаций.',
          title2: 'Автор: Джон Доу.',
          take: 'Код цивилизаций" — 500 прочтений'
       }
    ];

    return (
        <div className='rating container'>
            <h1 className='rating-text1'>Рейтинг читателей (топ-10)</h1>

            <Swiper 
            spaceBetween={10} 
            slidesPerView={3.5} 
            grabCursor={true}
            breakpoints={{
                    1400: { slidesPerView:4},
                    1200: { slidesPerView:3.5},
                    992: { slidesPerView: 3},
                    890: { slidesPerView: 2.3, 
                         spaceBetween:50
                    },
                    670: { slidesPerView: 1.7},
                    570: { slidesPerView: 1.8},
                    565: { slidesPerView: 1.9},
                    450: { slidesPerView: 1.3} ,
                    350: { slidesPerView: 1.1},
                    320: { slidesPerView: 1}

                }}
             >
                {newsItems.map((news, index) => (
                    <SwiperSlide key={index}>
                        <div className="rating-row">
                            <div className='rating-img'>
                            <img  src={img} alt="" />
                            </div>
                            <div className='rating-col'>
                                <span className="rating-date">{news.date}</span>
                                <h3 className="rating-title">{news.title}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))} 
            </Swiper>

            <h1 className='rating-text2'>Рейтинг книг (топ-10)</h1>

            <Swiper 
            spaceBetween={10} 
            slidesPerView={3.5}  
            grabCursor={true}
            breakpoints={{
                1400: { slidesPerView:4},
                1200: { slidesPerView:3.5},
                992: { slidesPerView: 3},
                890: { slidesPerView: 2.3, 
                     spaceBetween:50
                },
                670: { slidesPerView: 1.7},
                570: { slidesPerView: 1.8},
                450: { slidesPerView: 1.3} ,
                350: { slidesPerView: 1.1},
                320: { slidesPerView: 1},

            }}
            >
                {books.map((book, index) => (
                    <SwiperSlide key={index}>
                        <div className="rating-box">
                            <div className='rating-img2'>
                               <img  src={img2} alt="" />
                            </div>
                            <div className="rating-col-1">
                                <span className="rating-data">{book.date}</span>
                                <h3 className='rating-title1'>{book.title}</h3>
                                <h3 className='rating-title'>{book.title2}</h3>
                                <br />
                                <h3 className='rating-take'>{book.take}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        
        </div>
    );
};