import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';


export default function Description() {
    return(
        <section className="text-gray-600 body-font dark:bg-[#121212]">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Andrea Mejia</h1>
                <p className="mb-8 leading-relaxed">Soy una desarrolladora con una sólida formación en UX/UI y un enfoque en la creación de experiencias interactivas y responsivas. Egresé de los programas Full Stack de Talento Tech y Desarrollo de Videojuegos en Unity, lo que me ha permitido dominar tanto el desarrollo de aplicaciones web con herramientas modernas como React, Tailwind, y Bootstrap, como el uso avanzado del motor gráfico Unity para la creación de videojuegos. Mi objetivo es seguir creciendo como desarrolladora, combinando creatividad y precisión técnica en cada proyecto, ya sea en el ámbito web o en el desarrollo de videojuegos.</p>
                <div className="flex space-x-4 w-3/4 justify-end">
                    <a href="/path/to/your/document.pdf" target="_blank" rel="noopener noreferrer" className='dark:text-[#1BD8AA] text-[#A8DADC]'>
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                    <a href="https://github.com/AndreaM-95" target="_blank" rel="noopener noreferrer" className='dark:text-[#1BD8AA] text-[#A8DADC]'>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/andrea-mejia95/" target="_blank" rel="noopener noreferrer" className='dark:text-[#1BD8AA] text-[#A8DADC]'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://andreamejia.itch.io/" target="_blank" rel="noopener noreferrer" className='dark:text-[#1BD8AA] text-[#A8DADC]'>
                        <FontAwesomeIcon icon={faItchIo} size="2x" />
                    </a>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/src/assets/Foto.png" className='rounded-full'></img>
                </div>
            </div>
        

            
        </section>
    )
}