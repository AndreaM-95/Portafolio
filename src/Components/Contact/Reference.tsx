import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reference from '../../Data/reference.json';
import './contact.css';

export default function Reference() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false,
    };

    const OpenPage = (urlPag: string) => {
        window.open(urlPag, '_target');
    }

    return (
        <div className="contact-sld sm:w-11/12 md:w-7/12 lg:w-3/12 flex flex-col animate-fade-up justify-center">
            <Slider {...settings} className=''>
                {reference.map((d) => (
                    <div key={d.nombre} className='flex flex-col items-center justify-center'>
                        <img src={d.foto} alt='Foto' className='w-28 rounded-full mx-auto'></img>
                        <p className='text-lg font-semibold dark:text-gray-200 text-gray-900 text-center'>{d.nombre}</p>
                        <p className='text-base italic dark:text-gray-400 text-gray-900 text-center'>{d.area}</p>
                        <p className='text-[13px] text-center dark:text-gray-300 text-gray-900 text-justify'>"{d.recomendacion}"</p>
                        <button className='w-full sm:w-20 dark:bg-teal-700 bg-[#0B7C83] hover:font-bold py-1 rounded text-gray-200 mt-2' onClick={() => OpenPage(d.linkedin)}>Linkedin
                        </button>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

