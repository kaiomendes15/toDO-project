import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import './App.css'
import Container from './components/Container';
import MainContent from './components/MainContent';


const App = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet/>
      </MainContent>
    </Container>
  );
};


export default App
