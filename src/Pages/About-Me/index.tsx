import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Description from "../../Components/About-Me/Description";
import Recognition from "../../Components/About-Me/Achievements";
import Course from "../../Components/About-Me/Courses";
import Experiences from "../../Components/About-Me/Experience";
import Skills from "../../Components/About-Me/Skills";
import Formation from "../../Components/About-Me/Formation";
import useToggleVisibility from '../../Hooks/More-Info';
import '../../Components/About-Me/about-me.css'
//import DescProjects from '../../Components/PageProjects/Desc-Projects';

export default function AboutMe() {
  const { toggleView } = useToggleVisibility();

  return (
    <main>
      {/* #description section */}
      <section id="description" className="flex justify-center flex-wrap">
        <Description functionDescription={toggleView}/>
        {/*<DescProjects />*/}
      </section>

      {/* #more-info section */}
      <section id="more-info" className="hidden flex justify-center flex-wrap animate-fade-left">
        <div className="w-4/5 flex justify-end my-6">
          <button className="text-gray-700 dark:text-[#1BD8AA]" onClick={toggleView}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" className="mr-2" />
            Volver
          </button>
        </div>
        <Experiences />
        <Skills />
        <Formation />
        <Course />
        <Recognition />
        <div className="w-4/5 flex justify-end my-6">
          <button className="text-gray-700 dark:text-[#1BD8AA]" onClick={toggleView}>
            <FontAwesomeIcon icon={faArrowLeft} size="1x" className="mr-2" />
            Volver
          </button>
        </div>
      </section>
    </main>
  );
}