import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from "./pages/AddEdit";


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addContact' element={<AddEdit />} />
        </Routes>




      </div>
    </BrowserRouter>

  );
}

export default App;
