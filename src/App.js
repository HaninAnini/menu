import MealForm from "./components/MealForm";
import Menu from "./components/Menu";
import {useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import {MdAddCircle, MdOutlineRestaurantMenu} from 'react-icons/md'
import {FaHome} from 'react-icons/fa'

function App() {
  const [reFetch, setReFetch] = useState(true);

  return (
    <Router>
      <div className={"App"}>
        <Routes>
          <Route exact path={"/"} element={
            <section className={"home-page"}>
              <h1 className={"home-title"}>
                CREAT YOUR OWN MENU
              </h1>
              <img className={"home-image"}
                   src={"https://uybdantealighierisf.org.ar/wp-content/uploads/2017/09/visuel_menus.jpg"}
                   alt={""}
              />
            </section>
          }/>
          <Route exact path={"/meal/new"}
                 element={<MealForm
                   setReFetch={setReFetch}/>}/>
          <Route exact path={"/meal/:id"}
                 element={<MealForm
                   setReFetch={setReFetch}
                 />}/>
          <Route exact path={"/menu"}
                 element={<Menu
                   reFetch={reFetch}
                   setReFetch={setReFetch}/>}/>
        </Routes>
        <div className={"nav-buttons"}>
          <Link to={"/"}>
            <button className={"nav-button"}>
              <FaHome/> Home
            </button>
          </Link>
          <Link to={"/meal/new"}>
            <button className={"nav-button"}>
              <MdAddCircle/> Add Meal
            </button>
          </Link>
          <Link to={"/menu"}>
            <button className={"nav-button"}>
              <MdOutlineRestaurantMenu/> Menu
            </button>
          </Link>
        </div>
      </div>
    </Router>


  );
}

export default App;
