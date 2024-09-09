import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft }from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react'

type Project = {
    titulo: string;
    descripcion: string;
    fotos: string[];
    video: string;
    estado: string;
    tags: string[];
    funciones: string[];
    sitio: string;
  };
  
  const DescProjects: React.FC<{ project: Project }> = ({ project }) => {
    const slider = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (slider.current) {
            const imageWidth = slider.current.querySelector('img')?.clientWidth || 0;
            slider.current.scrollLeft -= imageWidth; // Mueve el carrusel una imagen completa hacia la izquierda
        }
    };

    const scrollRight = () => {
        if (slider.current) {
            const imageWidth = slider.current.querySelector('img')?.clientWidth || 0;
            slider.current.scrollLeft += imageWidth; // Mueve el carrusel una imagen completa hacia la derecha
        }
    };


    const OpenPage = (url: string) => {
      window.open(url, '_blank');
    };
  
    return (
        <section id='desc-projects' className='w-[80%] flex flex-wrap justify-center mb-9 dark:bg-[#1F1F1F] dark:text-gray-300 text-gray-900 p-10 rounded'>
            <h1 className="dark:text-gray-200 text-gray-900 text-3xl font-bold mb-4 mt-6 w-full">{project.titulo}</h1>
            <p className='w-full text-base mb-6'>{project.descripcion}</p>
            
            <div className='flex justify-around w-full mb-5'>
                <div className='w-[45%] dark:bg-[#292929] rounded'>
                    <div className='flex items-center justify-center w-full h-full p-2 '>
                        <button className='mx-2' onClick={scrollLeft}>
                            <FontAwesomeIcon icon={faArrowLeft} size="1x" className="ml-2" />
                        </button>

                        <div
                            ref={slider}
                            className='snap-x overflow-hidden scroll-smooth h-full flex items-center justify-start  content-center'
                        >
                            {project.fotos.map((e, i) => (
                                <div key={i} className='snap-start flex flex-shrink-0 w-full mx-4 content-center'>
                                    <img
                                        src={e}
                                        alt={`images${i}`}
                                        className='w-80 h-80 object-cover rounded'
                                    />
                                </div>
                            ))}
                        </div>

                        <button className='mx-2' onClick={scrollRight}>
                            <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-2" />
                        </button>
                    </div>
                </div>

                <video src={project.video} controls className="w-[45%] rounded"></video>
            </div>
            
    
            <p className='w-full text-base mb-4 text-center italic'>{project.estado}</p>
            
            <div className='w-full flex flex-wrap p-2 gap-2 justify-center items-center'>
                {project.tags.map((tag: string, idx: number) => (
                    <p key={idx} className='p-2 dark:bg-[#292929] text-center text-sm rounded-md'>{tag}</p>
                ))}
            </div>
    
            <div className='mt-10'>
                <h2 className='text-xl font-semibold mb-4'>Mi participación en el proyecto</h2>
                <ul>
                    {project.funciones.map((a, ind) => (
                        <li key={ind} className='list-disc ml-4'>{a}</li>
                    ))}
                </ul>
            </div>
    
            <div className="w-full flex justify-center my-6">
                <button 
                    className="text-gray-700 dark:text-[#1BD8AA] hover:font-bold"
                    onClick={() => OpenPage(project.sitio)}
                >Visitar página
                    <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-2" />
                </button>
            </div>
        </section>
    );
  };
  
  export default DescProjects;