
import {SignupForm} from "./createone"
import {Loginpage} from "./loginpage"

import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage/>} />
      <Route path="signup" exact element={<SignupForm/>}  />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
  