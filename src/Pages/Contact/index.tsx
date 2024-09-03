import Form from "../../Components/Contact/Form";
import Reference from "../../Components/Contact/Reference";
import '../../Components/Contact/contact.css'

export default function Contact() {
  return (
    <div id="contact" className="dark:bg-[#121212]">
      <Form />
      <Reference />
    </div>
  )
}