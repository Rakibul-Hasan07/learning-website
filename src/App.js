import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes/Router/Router';
import Header from './pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
