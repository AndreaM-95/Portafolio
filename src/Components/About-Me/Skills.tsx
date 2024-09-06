import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import skills from '../../Data/skills.json';
import './about-me.css';

export default function Skills() {
  return(
    <section className='w-4/5 skills flex flex-wrap justify-between gap-4 px-6 my-9'>
        <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold my-5'>Habilidades</h2>
        {skills.map((s)=>(
            <div key={s.habilidad} className=' dark:text-gray-300 text-gray-900 my-3 w-full max-w-[220px] h-[200px]'>
                <h3 className='text-xl font-bold mb-2'>
                    <FontAwesomeIcon icon={faClipboardCheck} className='dark:text-gray-200 text-gray-900 text-xl mr-2'/>
                    {s.habilidad}
                </h3>
                <ul className='list-disc list-inside'>
                    {s.lista.map((li: string, index: number)=>(
                        <li key={index}>{li}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
  )
}