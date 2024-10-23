import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './apps/header/Header';
import MainPage from './apps/mainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index path='home' element={<MainPage/>}/>
        <Route path='*' element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
