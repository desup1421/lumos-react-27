import React from 'react';
import heroImage from '../assets/image/hero-image.png';

const Home = () => {
  const service = [
    {
      title: 'Service 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore fugit rem ducimus dignissimos repellat ipsum aliquam maiores sequi doloribus sit cupiditate harum enim explicabo autem consectetur vitae! Ea, id.',
    },
    {
      title: 'Service 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore fugit rem ducimus dignissimos repellat ipsum aliquam maiores sequi doloribus sit cupiditate harum enim explicabo autem consectetur vitae! Ea, id.',
    },
    {
      title: 'Service 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore fugit rem ducimus dignissimos repellat ipsum aliquam maiores sequi doloribus sit cupiditate harum enim explicabo autem consectetur vitae! Ea, id.',
    },
  ];

  return (
    <div className='container'>
      <section className='d-flex justify-content-between align-items-center'>
        <div>
          <h2 className='text-primary fs-1 fw-bold'>Hero Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore fugit rem ducimus dignissimos repellat ipsum aliquam maiores sequi doloribus sit cupiditate harum enim explicabo autem consectetur vitae! Ea, id.</p>
        </div>
        <div>
          <img className='hero-image-cstm' src={heroImage} alt='hero' />
        </div>
      </section>
      <section>
        <h2 className='text-primary text-center my-5'>Our Service</h2>
        <div className='d-flex gap-2 shadow '>
          {service.map((item, index) => (
            <div className='card' key={index}>
              <div className='card-body p-4'>
                <h3 className='card-title text-primary'>{item.title}</h3>
                <p className='card-text'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
