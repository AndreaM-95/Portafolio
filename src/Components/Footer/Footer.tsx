import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className="dark:bg-[#1F1F1F] bg-[#CDB4DB] flex flex-wrap items-end justify-end">
            <div className='dark:text-gray-300 text-[#121212] w-3/4 flex justify-end flex-wrap'>
                <p className='w-full text-end'>Desarrollado por Andrea Mejia</p>
                <p className='w-full text-end'>© Copyright - 2024</p>
            </div>
            
            <div className="flex space-x-4 w-3/4 justify-end">
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
        </footer>
    )
}