// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import './app.scss';
import WelcomePage from '../WelcomePage';
import LoginPage from '../LoginPage';
import RedirectPage from '../RedirectPage';
import ProtectedPage from '../ProtectedPage';

export function App() {
  return (
    <div className='centered-div'>
      <h1>Welcome to my awesome website</h1>
      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/private" element={<ProtectedPage/>} />
        <Route path="/oauth2/idpresponse" element={<RedirectPage/>} />
      </Routes>
    </div>
  );
}

export default App;
