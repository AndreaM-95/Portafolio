import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import descripcion from '../../Data/desc-projects.json';
  
export default function DescProjects() {
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
        <section className='w-1/2 flex flex-wrap justify-around mb-9'>
            {descripcion.map((d, index) => (
                <div>
                    <h1  key={index} className="dark:text-gray-200 text-gray-900 text-3xl font-bold mb-2 mt-14 w-full">{d.titulo}</h1>
                    <p>{d.descripcion}</p>
                    
                    <div className="contact-sld sm:w-11/12 md:w-7/12 lg:w-3/12 flex flex-col animate-fade-up justify-center">
                        <Slider {...settings} className=''>
                            {d.fotos.map((f, index) => (
                                <div key={index} className='flex flex-col items-center justify-center'>
                                    <img src={f} alt='Foto' className='w-28  mx-auto'></img>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    
                    <video src={d.video}></video>
                    <p>{d.estado}</p>
                    <div className='flex flex-wrap p-2 my-2 gap-2 items-center'>
                        {d.tags.map((tag: string, idx: number) =>(
                            <p key={idx} className='p-2 dark:bg-[#292929] text-center text-sm rounded-md'>{tag}</p>
                        ))}
                    </div>

                    <div>
                        {d.areas.map((a, ind)=>(
                            <div key={ind}>
                                <h3>{a}</h3>
                                {d.funciones.map((d, idx)=>(
                                    <p key={idx}>{d}</p>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div>
                        <table>
                            {d.equipo.map((e,i)=>(
                                <td key={i}>{e}</td>
                            ))}
                            {d.roles.map((e,i)=>(
                                <th key={i}>{e}</th>
                            ))}
                        </table>
                    </div>

                    <button className="text-gray-700 dark:text-[#1BD8AA]">
                        Visitar página
                        <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-2" />
                    </button>
                </div>
            ))}
        </section>
    );
}