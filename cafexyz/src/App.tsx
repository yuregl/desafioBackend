import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Login } from './pages/Login';
import { CreateAccount } from "./pages/CreateAccount";

import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/account/new" component={CreateAccount} />
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
