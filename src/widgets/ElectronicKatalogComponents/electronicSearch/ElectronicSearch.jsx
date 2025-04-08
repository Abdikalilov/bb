import { useState } from 'react';
import './ElectronicSearch.scss';
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { CardBook } from '../../../features/cardBook/CardBook';

export const ElectronicSearch = () => {
    const [authorFilter, setAuthorFilter] = useState('');
    const [titleFilter, setTitleFilter] = useState('');
    const [keywordFilter, setKeywordFilter] = useState('');
    const [showPopular, setShowPopular] = useState(false);
    const [isMenuOpen, setsMenuOpen] = useState(false);
    const [visibleCards, setVisibleCards] = useState(5);

    const cards = [
        {
            id: 1,
            title: "ПРОЩАЙ, ГУЛЬСАРЫ",
            author: "Чыңгыз Айтматов",
            description: "Роман рассказывает о жизни старого чабана Танабая и его верного коня Гульсары. Это история о дружбе, изменениях в обществе и воспоминаниях о прошлом, наполненная глубокими размышлениями о человеческой судьбе.",
            image: 'https://s1.livelib.ru/boocover/1000508825/200x305/3b0e/Proschaj_Gulsary.jpg', popular: false
        },
        {
            id: 2,
            title: "АННА КАРЕНИНА",
            author: "Лев Толстой",
            description: "История трагической любви Анны Карениной, её страсти к Вронскому и невозможности найти счастье в обществе, где царят строгие правила и лицемерие.",
            image: 'https://static.insales-cdn.com/r/r_ICj07CZPg/rs:fit:1000:0:1/q:100/plain/images/products/1/2753/580430529/1.jpg@jpg', popular: true
        },
        {
            id: 3,
            title: "ГАРРИ ПОТТЕР И ФИЛОСОФСКИЙ КАМЕНЬ",
            author: "Дж. К. Роулинг",
            description: "Первая книга о Гарри Поттере, мальчике, который узнаёт, что он волшебник, и отправляется в Хогвартс, чтобы раскрыть тайну своего прошлого и сразиться с темными силами.",
            image: 'https://cdn.azbooka.ru/cv/w1100/3f68a41d-d7ec-4f1b-ae7b-36376eb66430.jpg', popular: true
        },
        {
            id: 4,
            title: "УНЕСЁННЫЕ ВЕТРОМ",
            author: "Маргарет Митчелл",
            description: "Эпическая история любви и выживания во времена Гражданской войны в США. Скандально независимая Скарлетт О’Хара пытается сохранить свою жизнь и найти счастье.",
            image: 'https://static.insales-cdn.com/r/jn1JoGID1W0/rs:fit:1000:0:1/q:100/plain/images/products/1/7721/767237673/1.jpeg@jpeg', popular: true
        },
        {
            id: 5,
            title: "НОРВЕЖСКИЙ ЛЕС",
            author: "Харуки Мураками",
            description: "Глубокий роман о первой любви, утрате и поиске смысла жизни. История Тору Ватанабэ, вспоминающего свою юность и трагические события, изменившие его навсегда.",
            image: 'https://www.litres.ru/pub/c/cover/10858418.jpg', popular: false
        },
        {
            id: 6,
            title: "ДЖЕЙН ЭЙР",
            author: "Шарлотта Бронте",
            description: "Роман о сложных отношениях между Джейн Эйр и Эдвардом Рочестером, который скрывает мрачные тайны своего прошлого.",
            image: 'https://i.pinimg.com/474x/1a/c6/4d/1ac64de8d7499a3fce00305d62f9b699.jpg', popular: false
        },
        {
            id: 7,
            title: "ВИНОВАТЫ ЗВЁЗДЫ",
            author: "Джон Грин",
            description: "История любви двух подростков, которые борются с раком и сталкиваются с тяжёлыми вопросами жизни и смерти.",
            image: 'https://i.pinimg.com/736x/ea/69/76/ea697629b7028a067e0c2c170aad54f5.jpg', popular: true
        },
        {
            id: 8,
            title: "В КОНЦЕ ОНИ ОБА УМРУТ",
            author: "Адам Силвер",
            description: "Два подростка узнают, что им осталось жить всего несколько дней, и решают прожить их, не оглядываясь назад.",
            image: 'https://i.pinimg.com/736x/0c/97/eb/0c97eb82c32ad60cacd82d753c6f236c.jpg', popular: false
        },
        {
            id: 9,
            title: "МАЛЕНЬКИЕ ЖЕНЩИНЫ",
            author: "Луиза Мэй",
            description: "История о четырёх сестрах, которые взрослеют, сталкиваются с трудностями и учат друг друга важности семьи и любви.",
            image: 'https://i.pinimg.com/736x/46/f2/cc/46f2ccd2c5ccb81313f130fa131e48f4.jpg', popular: true
        },
        {
            id: 10,
            title: "МАЛЕНЬКИЙ ПРИНЦ",
            author: "Антуан де Сент-Экзюпери",
            description: "Философская сказка о маленьком принце, который путешествует по планетам, встречая различные персонажи, каждый из которых представляет собой аспект человеческой природы.",
            image: 'https://i.pinimg.com/474x/fc/aa/18/fcaa18b5bd45f8c584f1b2e85699e34b.jpg', popular: true
        }
    ];

    const filteredCards = cards.filter((card) => {
        return (
            card.author.toLowerCase().includes(authorFilter.toLowerCase()) &&
            card.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
            card.description.toLowerCase().includes(keywordFilter.toLowerCase())
        );
    });

    const displayedCards = showPopular ? filteredCards.filter(card => card.popular) : filteredCards;

    const toggleModal = () => setsMenuOpen(!isMenuOpen);

    const loadMoreCards = () => {
        setVisibleCards(visibleCards + 5);
    };

    const hideCards = () => {
        setVisibleCards(5);
    };

    return (
        <div className="electronicSearch container">
            <h1 className="electronicSearch_title ">электронный  каталог</h1>
            <div className="electronicSearch_filters">
                <div className="electronicSearch_filters_btns">
                <div className="electronicSearch_filters_btn">
                    <button className={` ${!showPopular ? "electronicSearch_filters_btn_allactive" : "electronicSearch_filters_btn_all"}`} onClick={() => setShowPopular(false)}>Все</button>
                    <button className={` ${showPopular ? "electronicSearch_filters_btn_popularActive" : "electronicSearch_filters_btn_popular"}`} onClick={() => setShowPopular(true)}>Популярные</button>
                </div>
                </div>
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Автор"
                    value={authorFilter}
                    onChange={(e) => setAuthorFilter(e.target.value)}
                />
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Название документа"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                />
                <input
                    className="electronicSearch_filters_inp"
                    type="text"
                    placeholder="Ключевое слово"
                    value={keywordFilter}
                    onChange={(e) => setKeywordFilter(e.target.value)}
                />
                <div className="electronicSearch_filters-burger">
                    <button onClick={() => {
                        toggleModal()
                    }}>
                        <HiAdjustmentsHorizontal />
                    </button>
                </div>
            </div>

            <div className='modall'>
                {
                    isMenuOpen && (

                        <div className='modal_content'>
                            <button onClick={() => {
                                toggleModal()
                            }}>
                                <IoCloseSharp />
                            </button>
                            <h2 className="modal_content-title">Расширенный поиск</h2>
                            <input
                                className="modal_content-inputs"
                                type="text"
                                placeholder="Автор"
                                value={authorFilter}
                                onChange={(e) => setAuthorFilter(e.target.value)}
                            />
                            <input
                                className="modal_content-inputs"
                                type="text"
                                placeholder="Название документа"
                                value={titleFilter}
                                onChange={(e) => setTitleFilter(e.target.value)}
                            />
                            <input
                                className="modal_content-inputs"
                                type="text"
                                placeholder="Ключевое слово"
                                value={keywordFilter}
                                onChange={(e) => setKeywordFilter(e.target.value)}
                            />

                        </div>
                    )
                }
            </div>

            <div className="electronicSearch_info">
                {displayedCards.slice(0, visibleCards).map((card) => (
                    <CardBook key={card.id}
                        image={card.image}
                        author={card.author}
                        description={card.description}
                        title={card.title}

                    />
                ))}
                <div className="electronicSearch_button">
                    {visibleCards < displayedCards.length && (
                        <button className="electronicSearch_button-more" onClick={loadMoreCards}>Ещё</button>
                    )}
                    {visibleCards > 5 && (
                        <button className="electronicSearch_button-more" onClick={hideCards}>Скрыть</button>
                    )}
                </div>
            </div>
        </div>
    );
};







