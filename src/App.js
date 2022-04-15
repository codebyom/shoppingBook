import './App.css';
import Header from './components/Header';
import Aboutpage from './pages/Aboutpage';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {DataProvider} from './contexts/DataContext'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <DataProvider>
      <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
      <Footer/>    
      </Router>
      </DataProvider>
        
    </>
  );
}

export default App;
