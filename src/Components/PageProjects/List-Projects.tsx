import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import projects from '../../Data/projects.json';

import DescProjects from './Desc-Projects'; // Importa el componente
import descProjects from '../../Data/desc-projects.json'; // Importamos el JSON de descripciones

type TabItem = {
  titulo: string;
  label: string;
  content: string;
  disabled?: boolean;
};

type Project = {
  titulo: string;
  descripcion: string,
  fotos: string[];
  video: string;
  estado: string;
  tags: string[];     
  areas: string[];
  funciones: string[];
  sitio:string;
};

const Tabs: React.FC<{ items: TabItem[] }> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index);
    }
  };

  return (
    <div id="projects" className="w-[65%] flex flex-wrap justify-around mb-9">
        <h1 className="dark:text-gray-200 text-gray-900 text-3xl font-bold mb-2 mt-14 w-full">Proyectos</h1>
        <div className="my-8">
            <ul className="-mb-px flex space-x-6 overflow-auto text-center text-base font-medium" role="tablist">
            {items.map((item, index) => (
                <li key={index} role="presentation">
                    <button
                        type="button"
                        aria-disabled={item.disabled}
                        className={`group inline-flex items-center justify-center whitespace-nowrap align-middle text-base leading-none disabled:cursor-not-allowed h-[38px] min-w-[38px] gap-2 transition-all duration-100 ease-in-out p-0 ${
                        activeIndex === index
                            ? 'font-semibold border-b-2 border-[#0B7C83] dark:border-[#1BD8AA] dark:text-[#1BD8AA] text-[#0B7C83]'
                            : 'border-b-2 border-transparent dark:text-gray-300 text-gray-700 dark:hover:text-[#1BD8AA] hover:text-teal-700'
                        } ${item.disabled ? 'disabled:stroke-slate-400 disabled:text-slate-400' : ''}`}
                        onClick={() => handleTabClick(index, item.disabled)}
                        id={`tab-${index}`}
                        role="tab"
                        aria-controls={`tab-panel-${index}`}
                        aria-selected={activeIndex === index}
                        tabIndex={activeIndex === index ? 0 : -1}
                        disabled={item.disabled}
                    >
                        <span>{item.label}</span>
                    </button>
                </li>
            ))}
            </ul>
        </div>
        <div id='allTabs' className='tabs'>
            {items.map((item, index) => (
            <div
                key={index}
                id={`tab-panel-${index}`}
                className={activeIndex === index ? '' : 'hidden'}
            >
                {item.content}
            </div>
            ))}
        </div>
    </div>
  );
};

const ListProjects: React.FC = () => {
  const allProjects = projects.map((project) => project.contenido).flat();

  const filterProjects = (type: string) => {
    if (type === 'Todos') {
      return allProjects;
    }
    const filtered = projects.find((project) => project.tipo === type.toLowerCase());
    return filtered ? filtered.contenido : [];
  };

  const tabs = [
    { label: 'Todos', content: renderProjects(filterProjects('Todos')), disabled: false },
    { label: 'Web', content: renderProjects(filterProjects('web')), disabled: false },
    { label: 'Juegos', content: renderProjects(filterProjects('juegos')), disabled: false },
    { label: '3D', content: renderProjects(filterProjects('3d')), disabled: false },
    { label: '2D', content: renderProjects(filterProjects('2d')), disabled: false },
  ];
  
  return <Tabs items={tabs} />;
};

const renderProjects = (projects: any[]) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Función para manejar el click en "Ver más"
  const handleViewMore = (titulo: string) => {
    const projectDetails = descProjects.find((project) => project.titulo === titulo);
    if (projectDetails) {
      setSelectedProject(projectDetails);
    }
  };

  // Función para manejar el click en "Volver"
  const handleBackClick = () => {
    setSelectedProject(null);
  };
  
  return (
    <>
      {selectedProject ? (
        <div className=' flex justify-center flex-wrap'>
          <div className="w-full flex justify-end my-4 pr-6">
            <button 
              className="text-gray-700 dark:text-[#1BD8AA] hover:font-bold"
              onClick={handleBackClick}
            ><FontAwesomeIcon icon={faArrowLeft} size="1x" className="mr-2" />
              Volver
            </button>
          </div>
          <DescProjects project={selectedProject} />
        </div>
        
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4 rounded-lg dark:bg-[#1F1F1F] bg-[#68cbe9] dark:text-gray-300 text-gray-900">
              <img src={project.imagen} alt={project.alt} className="object-cover w-full h-[220px] rounded-md mb-4" />
              <h3 className="text-lg font-bold">{project.titulo}</h3>
              <p className="text-sm py-2"><strong>Rol: </strong>{project.rol}</p>
              <div className='flex flex-wrap py-2 my-2 gap-2 items-center'>
                {project.tags.map((tag: string, idx: number) => (
                  <p key={idx} className='p-2 dark:bg-[#292929] text-center text-sm rounded-md'>{tag}</p>
                ))}
              </div>
              <button 
                className="text-gray-700 dark:text-[#1BD8AA] hover:font-bold"
                onClick={() => handleViewMore(project.titulo)}
              >
                Ver más
                <FontAwesomeIcon icon={faArrowRight} size="1x" className="ml-2"/>
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );  
};
export default ListProjects;