
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/Home"
import About from "./page/about/About"
import Events from "./page/events/Events"
import Faq from "./page/contact/Faq"
import JoinUs from "./components/join us/JoinUs"
import Talents from "./page/talents/Talents"

import ListStudent from "./liststudent/ListStudent"
import CreateStudent from "./createstudent/CreateStudent"









export default function App() {
  return (
     <>
      <BrowserRouter>
         
         
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}  />
            <Route path="/events" element={<Events/>} />
            <Route path="/talents" element={<Talents/>} />
            <Route path="/contact" element={<Faq/>}  />
            <Route path="/join" element={<JoinUs/>} />
            <Route path="/createstudent" element={<CreateStudent/>} />
        <Route  path="/liststudent"  element= { <ListStudent/>} />
         </Routes>
      </BrowserRouter>
      </>
  )
}
