import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faItchIo} from '@fortawesome/free-brands-svg-icons';
import './about-me.css';

export default function Description({functionDescription}) {
    return(
        <section className="dark:bg-[#121212] flex md:flex-row items-center my-10 flex-wrap justify-center animate-fade-down">
            <div className=" w-[40%] ">
                <h1 className="nombre sm:text-4xl text-3xl mb-4 font-medium">Andrea Mejia</h1>
                <h2 className='text-2xl italic dark:text-gray-400 text-gray-900 mb-2'>Desarrolladora de software</h2>
                <p className="mb-8 w-[90%] dark:text-gray-300 text-gray-900 text-base">Soy una desarrolladora con una sólida formación en UX/UI y un enfoque en la creación de experiencias interactivas y responsivas. Egresé de los programas Full Stack de Talento Tech y Desarrollo de Videojuegos en Unity, lo que me ha permitido dominar tanto el desarrollo de aplicaciones web con herramientas modernas como React, Tailwind, y Bootstrap, como el uso avanzado del motor gráfico Unity para la creación de videojuegos. Mi objetivo es seguir creciendo como desarrolladora, combinando creatividad y precisión técnica en cada proyecto, ya sea en el ámbito web o en el desarrollo de videojuegos.</p>
                <div className="flex space-x-4 w-3/4">
                    <a href="/path/to/your/document.pdf" target="_blank" rel="noopener noreferrer" className='text-gray-700 dark:text-[#1BD8AA] hover:text-sky-500 dark:hover:text-teal-100'>
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                    <a href="https://github.com/AndreaM-95" target="_blank" rel="noopener noreferrer" className='text-gray-700 dark:text-[#1BD8AA] hover:text-sky-500 dark:hover:text-teal-100'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/andrea-mejia95/" target="_blank" rel="noopener noreferrer" className='text-gray-700 dark:text-[#1BD8AA] hover:text-sky-500 dark:hover:text-teal-100'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://andreamejia.itch.io/" target="_blank" rel="noopener noreferrer" className='text-gray-700 dark:text-[#1BD8AA] hover:text-sky-500 dark:hover:text-teal-100'>
                        <FontAwesomeIcon icon={faItchIo} size="2x" />
                    </a>
                    <button onClick={functionDescription} className='text-gray-700 dark:text-[#1BD8AA] hover:text-sky-500 dark:hover:text-teal-100 hover:font-medium'> Ver más
                        <FontAwesomeIcon icon={faArrowRight} size="1x"  className='ml-2'/>
                    </button>
                </div>
            </div>

            <div className="colaboradores-box3">
                <div className="colab-box1">
                    <img src="/src/assets/Foto.png" className='img_colab1'></img>
                </div>
            </div>
        </section>
    )
}