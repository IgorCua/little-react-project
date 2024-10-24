import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Header from './apps/header/Header';
import MainPage from './apps/mainPage/MainPage';
import SecondPage from './apps/SecondPage';
import ThirdPage from './apps/ThirdPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index path='home' element={<MainPage/>}/>
        <Route index path='second-page' element={<SecondPage/>}/>
        <Route index path='third-page' element={<ThirdPage/>}/>
        <Route path='*' element={<MainPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
