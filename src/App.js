import './App.css';
import MealForm from "./components/MealForm";
import Menu from "./components/Menu";
import {useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function App() {
  const [reFetch, setReFetch] = useState(true);

  return (
      <Router>
        <div className="container mt-5  w-100">
        <Routes>
          <Route exact path={"/"} element={<h1 className={"text-center"}>Creat your Menu</h1>}/>
          <Route exact path={"/meal/new"}
                 element={<MealForm
                   setReFetch={setReFetch} />}/>
          <Route exact path={"/meal/:mealId"}
                 element={<MealForm
                   setReFetch={setReFetch} />}/>
          <Route exact path={"Menu"}
                 element={<Menu
                   reFetch={reFetch}
                   setReFetch={setReFetch}/>}/>
        </Routes>
        <div className={"text-center"}>
            <Link to={"/"}><button className={"btn btn-outline-success  flex-grow-1"}>Home</button></Link>
            <Link to={"/meal/new"}><button className={"btn btn-outline-success  flex-grow-1"}>Add Meal</button></Link>
            <Link to={"Menu"}><button className={"btn btn-outline-success  flex-grow-1"}>Menu</button></Link>
        </div>
        </div>
      </Router>


  );
}

export default App;
