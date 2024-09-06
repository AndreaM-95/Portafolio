import experience from '../../Data/experience.json';
  
export default function Experiences() {
    return (
        <section className='w-4/5 flex flex-wrap justify-around mb-9'>
            <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold m-5'>Experiencia</h2>
            {experience.map((e) => (
                <div key={e.empresa} className='w-[28%] dark:text-gray-300 text-gray-900 dark:bg-[#1F1F1F] bg-[#68cbe9] p-6 rounded-md'>
                    <h3 className='text-xl font-bold mb-2'>{e.cargo}</h3>
                    <h4 className='text-lg mb-4'>{e.empresa} | {e.tiempo}</h4>
                    <ul className='list-disc list-inside'>
                        {e.tareas.map((tarea: string, index: number) => (
                        <li key={index} className='text-base'>{tarea}</li>
                        ))}
                    </ul>
                    <div className='flex flex-wrap py-2 mt-2 gap-2 justify-center items-center'>
                        {e.tags.map((tag: string, index: number)=>(
                            <p key={index} className='w-24 p-1.5 dark:bg-[#292929] text-center text-sm rounded-md'>{tag}</p>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
  