
//Libraries
import { Routes, Route } from 'react-router-dom';

//Components
import Login from './components/Login';
import Listado from './components/Listado';
import Header from './components/Header';
import Footer from './components/Footer';
import Detalle from './components/Detalle'
import PageNotFound from './components/PageNotFound';
import Resultados from './components/Resultados';
//Styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/app.css"




function App() {



    return (
        <>
            <Header />

            <div className='container mt-3'>
                <Routes>
                    <Route exact path="/" element={<Login></Login>} />
                    <Route path="/listado" element={<Listado></Listado>} />
                    <Route path="/detalle" element={<Detalle></Detalle>} />
                    <Route path="/resultados" element={<Resultados></Resultados>} />
                    <Route path="/resultados/:keyword" element={<Resultados></Resultados>} />


                    <Route path="*" element={<PageNotFound></PageNotFound>} />
                </Routes>
            </div>


            <Footer />
        </>
    );
}

export default App;
