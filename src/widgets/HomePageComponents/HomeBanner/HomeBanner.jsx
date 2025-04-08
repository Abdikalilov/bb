import image from '../../../shared/homeImages/image.png';
import vector from '../../../shared/homeImages/vector.png';
import "./homeBanner.scss";

export function HomeBanner() {
  const banner = {
    images: [
      {
        id: 1,
        image: 'https://s3-alpha-sig.figma.com/img/1441/e5e0/3badb165df3f27e0af668f64d5a1ab74?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lDGONWq5la7FPrj9OTLYIO7~Qva-vaw5N6HW-wb5doTIm0zCMLKLcrNoiS9jlu5JAeCf~u6BWtvQlI2yLKc0cQZlR6gMLrZhQz605JeWb1ObROlTiOexM0rLXa639kTriYT7Xe4O9qdx7D3qR8R4fjDnq4TDjUOB3KF1-ZXv4W75wWsRZcYiOLybUY10JTpbLqfMBDJVGKqNzFmnTv2VDMF4HOIDUumNjtJc~QuJGIdDKMicaLzJ8hDyE2jM5tv0eSbv8TjvSjvlW3OkJxvpn-KbLA1ArLXgau-MtZEVCPotj0vqVqEoZMH7nR1PEGmszMPFD2jK0fThtFmr4sdtOw__'
      },
      {
        id: 2,
        image: 'https://s3-alpha-sig.figma.com/img/4428/bde9/e8512862074605d54569a76ee480fd11?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jdm4Y8gF89Qeyl8T0smeHvT63FJncJBIx0ebTTjCiBakUrFvRr5KeiuciaSL6zz9ZfRm7DgCF4WrrY6GA1V7ywT-9DxZsW7dN-8lZWqGo64NV5IRC62eLxWWgOc9aeFCN8P92J6BFJ7a4mIOt2RvyKjGQVF1IyFL-NTxAIKXJ26tMbTzMVWvJ9TtmcBUH-d2iiQ8p6lh6hPlQDJaPOke8ajnNSoY8ObVa0leKuP1Qf56IbVrwXAsupKOiERiEtA5VlMx0jG-zkQUYG~WfhylkteSW9Ds6uXx73S8ZL6unLmuZHMjaXojJExMn9cU~KKYkVDAt4e0CCxoDr4vB5tPoA__'
      },
      {
        id: 3,
        image: 'https://s3-alpha-sig.figma.com/img/7957/dd12/c7d4260cdc54e3969af677b1c4039f9f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N-ySj-9nmgpGIbKlNGiawwQ97nhX-3gNzGfEWvfGUNuH67hqQO4cvtpPUO49niH2xu4ryDXifwkvGArFD-M02iPz-2uE08N9PqBzGLuKBzedR7ehTer1YwoqWujZy6kU5yUQtMriOlcWVCZx6Iu7FcW4jsiHmn9Q-JjSwZWcJngYdF~rcLQbRzhnxVXCzG8Qbr962GqZ8PUFv9qrjvUj4hiZj5KJNJ6gwwBfcWm37OgOGIMR263TCQD8zgP~opGK1LQB-mu~x5oyPss5VIO727hVyviXIa31YjLEPNgq2J6kr6D3dg9SPyJOX0BoJKChz0iXCn4Jb-1DtOZAmuEKmQ__'
      },
      {
        id: 4,
        image: 'https://s3-alpha-sig.figma.com/img/25de/e48d/b4c4a249b000ccce4ca4076e9d15e5ca?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UuoN7BBUArjiqUdZ~iO1YyqN2Y1fwudx9lWXZwjAN9aoIJfFGled9X52zPhjqpsG1buszn16YbewgaXwzQ6dXOi4IAxTbM6TP7AwA0ysrKVuEByQcoyZn2D1HSSDUnJsy8k3C5zLi2YrVtmlGXct-RDkL1SSpwcGoLxxBzYKYb9dqpxi-C9c2RDla4Arhz5TNifkKhRefFK3hckw~6llCPbHU-SeOu5TAcF4lYL9bhQjXfhkBLvDs5dw~pUd-IDryiOTrG-uMRTmHOUDxCKKdUlzvVsTDsZ49~imVZEwWo806aO~diIHyqrrFE28kUSxuYSKDG5EPzMbh7REJjJRcA__'
      },
      {
        id: 5,
        image: 'https://s3-alpha-sig.figma.com/img/8463/881c/fe3eb830f89a7341025b279c3d4dfbf3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p48ohMNHRUb8MfHpGGjYKaYk7l4-lFHOF8myfEi29ei5GtrQycSLmk29IdA6N~37MCIbuTWx5p4qLLO9Nl0WxH-LLyz~QmkaHryhMyJXQn4pu67pe4BM0YI5U~rZqD8GaM3TuTbZgntYtpkDZdXg0T9kXgFzJHIn7Czd2eixx-UydoDQDcsuFk~OOuj6T7AvC~AcqHuFUpWm3wpzlj~Uqnv~5mXeZKd4yLUCFdIvercLGEWzA8ySVkNXxE6TzHbO5B6AIp9E9rnxtgk2MhcbeGj4TfrzLtKM3QRLr-9SaGGEA1vRzwNZ~Xo8JQUx6UR3wFuDNlxzTotLS68b-qAatQ__'
      },
    ],
    texts: [
      {
        id: 1,
        title: 'ОТКРЫВАЙ КНИГУ – ОТКРЫВАЙ МИР',
        description: `Добро пожаловать в библиотеку имени Токтогула Сатылганова – место, где книги
          открывают двери в мир знаний и вдохновения. Наш фонд включает разнообразную
          литературу – от классики до современных бестселлеров, а также электронные ресурсы
          для учебы и досуга. Мы создаем уютное пространство для чтения, развития и
          творчества, регулярно проводим лекции, мастер-классы и встречи с авторами. Каждая
          книга – это ключ к новым открытиям, и мы рады делиться ими с вами!
          `
      }
    ]
  };


  return (
    <div className="home-banner">
      <div className="container">
        <div className="home-banner-images">
          {
            banner.images.map((item) => (
              <div className="home-banner-images-box" key={item.id}>
                <img className='home-banner-images-box-img' src={item.image} alt="image" />
                {/* <img className='home-banner-images-box-vector' src={vector} alt="vector" /> */}
              </div>
            ))
          }
        </div>
        <div className="home-banner-text">
          {
            banner.texts.map((item) => (
              <div className='home-banner-text-block' key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default HomeBanner;