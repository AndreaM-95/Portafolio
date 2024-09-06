import Description from "../../Components/About-Me/Description";
import '../../Components/About-Me/about-me.css'
import Recognition from "../../Components/PageProjects/Achievements";
import Course from "../../Components/PageProjects/Courses";
import Experiences from "../../Components/PageProjects/Experience";

export default function AboutMe() {
  return (
    <main>
      <Description/>
      <section id="more-info" className="flex justify-center flex-wrap">
        <Experiences/>
        <Course />
        <Recognition/>
      </section>
    </main>
  )
}