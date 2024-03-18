
import {SignupForm} from "./createone"
import { Dashborad } from "./dashboard";
import { Editdashboard } from "./edit_dashborad";
import {Loginpage} from "./loginpage"

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Personalinfo } from "./personalinfo";
import { Editpersonalinfo } from "./edit_personalinfo";
import { Premec } from "./premec";
import { MECACADEMICS_1 } from "./mecacademics_1";
import { MECACADEMICS_2 } from "./mecacademics_2";
import { MECACADEMICS_3 } from "./mecacademics_3";
import { MECACADEMICS_4 } from "./mecacademics_4";
import { MECACADEMICS_5 } from "./mecacademics_5";
import { MECACADEMICS_6 } from "./mecacademics_6";
import { MECACADEMICS_7 } from "./mecacademics_7";
import { MECACADEMICS_8 } from "./mecacademics_8";
import { Cocuricular_1 } from "./coc_1";
import { Cocuricular_2 } from "./coc_2";
import { Cocuricular_3 } from "./coc_3";
import { Cocuricular_4 } from "./coc_4";
import { Cocuricular_5 } from "./coc_5";
import { Cocuricular_6 } from "./coc_6";
import { Cocuricular_7 } from "./coc_7";
import { Cocuricular_8 } from "./coc_8";
import { Projects } from "./projects";
import { Edit_premec } from "./edit_premec";
import { Edit_mecacademics } from "./edit_mecacademics";
import { Edit_Cocuricular } from "./edit_coc";
import { Edit_project } from "./edit_project";
function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>} />
      <Route path="signup" exact element={<SignupForm/>}  />
    </Routes>
    </BrowserRouter> */}
     <BrowserRouter>
    <Routes>
      <Route />
      <Route path="/" element={<Dashborad/>}/>
      <Route path="editdashboard" exact element={<Editdashboard/>}/>
      <Route path="personalinfo" exact element={<Personalinfo/>}/>
      <Route path="premec" exact element={<Premec/>}/>
      <Route path="mec1navigation" exact element={<MECACADEMICS_1/>}/>
      <Route path="cocnavigation" exact element={<Cocuricular_1/>}/>  
      <Route path="project" exact element={<Projects/>}/>
      <Route path="mecsem1" exact element={<MECACADEMICS_1/>}/>
      <Route path="mecsem2" exact element={<MECACADEMICS_2/>}/>
      <Route path="mecsem3" exact element={<MECACADEMICS_3/>}/>
      <Route path="mecsem4" exact element={<MECACADEMICS_4/>}/>
      <Route path="mecsem5" exact element={<MECACADEMICS_5/>}/>
      <Route path="mecsem6" exact element={<MECACADEMICS_6/>}/>
      <Route path="mecsem7" exact element={<MECACADEMICS_7/>}/>
      <Route path="mecsem8" exact element={<MECACADEMICS_8/>}/>
      <Route path="cocsem1" exact element={<Cocuricular_1/>}/>
      <Route path="cocsem2" exact element={<Cocuricular_2/>}/>
      <Route path="cocsem3" exact element={<Cocuricular_3/>}/>
      <Route path="cocsem4" exact element={<Cocuricular_4/>}/>
      <Route path="cocsem5" exact element={<Cocuricular_5/>}/>
      <Route path="cocsem6" exact element={<Cocuricular_6/>}/>
      <Route path="cocsem7" exact element={<Cocuricular_7/>}/>
      <Route path="cocsem8" exact element={<Cocuricular_8/>}/>
      <Route path="editpersonalinfo" exact element={<Editpersonalinfo/>}/>
      <Route path="editpremec" exact element={<Edit_premec/>}/>
      <Route path="editmecacademics" exact element={<Edit_mecacademics/>}/>
      <Route path="editcocurricular" exact element={<Edit_Cocuricular/>}/>
      <Route path="editproject" exact element ={<Edit_project/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
  