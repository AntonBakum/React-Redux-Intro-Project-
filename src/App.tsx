import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import MainLayout from './components/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="/" index element={<WelcomePage/>} />
      <Route path="/page1" element ={<PageOne />}/>
      <Route path="/page2" element ={<PageTwo />}/>
    </Route>
    
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
