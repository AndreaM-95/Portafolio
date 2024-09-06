import formation from '../../Data/formation.json';
import './about-me.css';

export default function Formation() {
  return(
    <section id="academica" className="w-4/5 px-6 flex flex-wrap justify-center gap-3 my-9">
        <h2 className='w-full dark:text-gray-200 text-gray-900 text-3xl font-bold my-5'>Formación</h2>
        {formation.map((f)=>(
            <div key={f.alt} className="formacion-box img-card">
                <div className="contenedor">
                    <figure>
                        <img src={f.logo} alt={f.alt}></img>
                        <div className="capa w-full h-full">
                            <ul className='ml-4 flex flex-col justify-center h-full w-[90%]'>
                                {f.estudios.map((e:string, index:number)=>(
                                    <li key={index} className='text-sm text-[#25002E]'>• {e}</li>
                                ))}
                                <p className='text-sm text-center mt-3 w-full font-medium'>{f.fecha}</p>
                            </ul>
                        </div>
                    </figure>
                </div>
            </div>
        ))}
    </section>
  )
}