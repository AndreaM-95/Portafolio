import achievements from '../../Data/achievements.json';

export default function Recognition() {
  return(
    <section className='w-4/5 flex flex-wrap justify-around my-9'>
        <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold m-5'>Logros</h2>
        {achievements.map((e)=>(
            <figure key={e.texto} className='w-40 h-40 rounded-full dark:bg-[#1F1F1F] bg-[#68cbe9] flex flex-col justify-center items-center'>
                <img src={e.imagen} alt={e.alt}
                className='w-24'> 
                </img>
                <figcaption className='dark:text-gray-300 text-gray-900 text-center text-sm font-medium mt-2'>{e.texto}</figcaption>
            </figure>
        ))}
    </section>
  )
}
