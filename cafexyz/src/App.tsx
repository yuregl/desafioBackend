import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CreateAccount } from "./pages/CreateAccount";


function App() {
  return (

    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/account/new" component={CreateAccount} />
    </BrowserRouter>
  );
}

export default App;
