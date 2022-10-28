import MainLayout from "../components/MainLayout";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import WelcomePage from "../pages/WelcomePage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

  
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" index element={<WelcomePage/>} />
        <Route path="/page1" element ={<PageOne />}/>
        <Route path="/page2" element ={<PageTwo />}/>
      </Route>    
    ) 
);

