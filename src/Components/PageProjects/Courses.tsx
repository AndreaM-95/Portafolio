import courses from '../../Data/courses.json';

export default function Course(){
    return(
        <section className='w-4/5'>
            <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold m-5'>Cursos complementarios</h2>
            <ul  className=' p-3 h-[150px] flex flex-col flex-wrap justify-evenly content-around'>
                {courses.map((e)=>(
                    <li key={e.curso} className='w-1/4 dark:text-gray-300 text-gray-900 text-base list-disc mr-5'>{e.curso}</li>
                ))}
            </ul>
        </section>
    )
}
