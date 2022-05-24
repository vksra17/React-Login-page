
import Input from "./input.js"
import CustomerForm  from './form';
import Get from './get';
import Second from './second';
import Form from './FormV';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Apk } from "./FormM.js";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/v" exact element ={<Input/>}/>
        <Route path="/vk" exact element ={<CustomerForm/>}/>
        <Route path="/vks" exact element ={<Get/>}/>
        <Route path="/vksr" exact element ={<Second/>}/>
        <Route path="/vksra" exact element ={<Form/>}/>
        <Route path="/vksras" exact element ={<Apk/>}/>
      </Routes>
    </Router>
    
    </>
   );
}

export default App;
