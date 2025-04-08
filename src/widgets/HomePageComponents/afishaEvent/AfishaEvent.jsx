import { CardAfisha } from '../../../features';
import './afishaEvent.scss';
export const AfishaEvent = ({ tablet, mobile }) => {


  const events = [
    {
      id: 1,
      title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
      date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
      description:
        "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
      image: "https://s3-alpha-sig.figma.com/img/5ce3/b8fa/976b12c252b982f42c8c9f5f90affdd0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mbc~KvBz9EtUfHtZsnOgTiTIqvyaPE0nYaM7MGKUuc7tMvMQLDYYnAFo1lvOUu~sOjCbLtKxBc9~pX5EfZZOk5KhHr-rJjG71pKn9oI6Iq8y-wtDpOwY7HoP3SyDm6~9ci86cZ427LssaRnxlScccpAAFbkkZcJGmwCrAeexfJx2jlKSJ~zk8K8QDEtK3LbPxomP6liPlsdhCd~SPTb8seKCgXyYeAKqfV1qrwgAkAQ9wS4qzyN5QJfwZZLcbm-ofSMXd86hNlwXo2zEwTzMZXAfP23FV8NAE6YuDahqFbiTVv~AIVZDa2CgKY6NNKQrCQm972jf-nOmqUK6DTYZvw__",
    },
    {
      id: 2,
      title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
      date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
      description:
        "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
      image: "https://s3-alpha-sig.figma.com/img/5ce3/b8fa/976b12c252b982f42c8c9f5f90affdd0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mbc~KvBz9EtUfHtZsnOgTiTIqvyaPE0nYaM7MGKUuc7tMvMQLDYYnAFo1lvOUu~sOjCbLtKxBc9~pX5EfZZOk5KhHr-rJjG71pKn9oI6Iq8y-wtDpOwY7HoP3SyDm6~9ci86cZ427LssaRnxlScccpAAFbkkZcJGmwCrAeexfJx2jlKSJ~zk8K8QDEtK3LbPxomP6liPlsdhCd~SPTb8seKCgXyYeAKqfV1qrwgAkAQ9wS4qzyN5QJfwZZLcbm-ofSMXd86hNlwXo2zEwTzMZXAfP23FV8NAE6YuDahqFbiTVv~AIVZDa2CgKY6NNKQrCQm972jf-nOmqUK6DTYZvw__",
    },
    {
      id: 3,
      title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
      date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
      description:
        "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
      image: "https://s3-alpha-sig.figma.com/img/5ce3/b8fa/976b12c252b982f42c8c9f5f90affdd0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mbc~KvBz9EtUfHtZsnOgTiTIqvyaPE0nYaM7MGKUuc7tMvMQLDYYnAFo1lvOUu~sOjCbLtKxBc9~pX5EfZZOk5KhHr-rJjG71pKn9oI6Iq8y-wtDpOwY7HoP3SyDm6~9ci86cZ427LssaRnxlScccpAAFbkkZcJGmwCrAeexfJx2jlKSJ~zk8K8QDEtK3LbPxomP6liPlsdhCd~SPTb8seKCgXyYeAKqfV1qrwgAkAQ9wS4qzyN5QJfwZZLcbm-ofSMXd86hNlwXo2zEwTzMZXAfP23FV8NAE6YuDahqFbiTVv~AIVZDa2CgKY6NNKQrCQm972jf-nOmqUK6DTYZvw__",
    },
    {
      id: 4,
      title: "ВЫСТАВКА: КОД ЦИВИЛИЗАЦИЙ",
      date: "Время проведения: с 10 декабря 2024 года по 25 января 2025 года",
      description:
        "Токтогула Сатылганова – место, где книги открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную литературу – от классики до современных бестселлеров, а также электронные ресурсы для учебы и досуга. Мы создаем уютное пространство для чтения, развития и творчества, регулярно проводим лекции, мастер-классы и встречи с авторами.",
      image: "https://s3-alpha-sig.figma.com/img/5ce3/b8fa/976b12c252b982f42c8c9f5f90affdd0?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mbc~KvBz9EtUfHtZsnOgTiTIqvyaPE0nYaM7MGKUuc7tMvMQLDYYnAFo1lvOUu~sOjCbLtKxBc9~pX5EfZZOk5KhHr-rJjG71pKn9oI6Iq8y-wtDpOwY7HoP3SyDm6~9ci86cZ427LssaRnxlScccpAAFbkkZcJGmwCrAeexfJx2jlKSJ~zk8K8QDEtK3LbPxomP6liPlsdhCd~SPTb8seKCgXyYeAKqfV1qrwgAkAQ9wS4qzyN5QJfwZZLcbm-ofSMXd86hNlwXo2zEwTzMZXAfP23FV8NAE6YuDahqFbiTVv~AIVZDa2CgKY6NNKQrCQm972jf-nOmqUK6DTYZvw__",
    }
  ];
  return (
    <div className='container'>
      <h1 className="card-afisha__title main__title">АФИША МЕРОПРИЯТИЙ</h1>
      <div className="card-afisha__list">
        {events.map((item, index) => (
          <CardAfisha
            id={item.id}
            tablet={tablet}
            mobile={mobile}
            key={index}
            date={item.date}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>

  );
}

