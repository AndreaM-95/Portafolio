import experience from '../../Data/experience.json';

export default function Experiences(){
    return(
        <section className='w-4/5 flex flex-wrap justify-around'>
            <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold m-5'>Experiencia</h2>

            {experience.map((e)=>(
                <div key={e.empresa} className='w-1/4 dark:text-gray-300 text-gray-900 dark:bg-[#1F1F1F] bg-[#68cbe9] p-4 rounded-md'>
                    <h3 className='text-2xl font-bold mb-2'>{e.cargo}</h3>
                    <h4 className='text-xl mb-4'>{e.empresa} | {e.tiempo}</h4>
                    <ul>
                        <li className='text-base list-disc'>{e.tareas}</li>
                    </ul>
                    <div className='flex flex-wrap py-2'>
                        <p className='w-24 p-1.5 dark:bg-[#292929] text-center text-sm rounded-md'>{e.tags}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}