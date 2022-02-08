import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import CartModal from './components/CartModal';

import Layout from './components/Layout';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Initialize Firebase

function App() {
  document.body.style = 'background: var(--color1);';

  return (
    <Layout>
      <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Main' />
          </Route>
          <Route path='/Main' exact>
            <MainScreen />
          </Route>
          <Route path='/Cart'>
            <CartModal />
          </Route>
          <Route path='*' >
            <p1>not found</p1>
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
