import { useSelector } from "react-redux/es/hooks/useSelector";
import {Home, Login, Public} from './pages/public/index'
import { Routes, Route } from "react-router-dom";
import path from './ultis/path'
import {getDataHome} from './store/action/home'
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataHome())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public></Public>}>
          <Route path={path.HOME} element={<Home></Home>}></Route>
          <Route path={path.LOGIN} element={<Login></Login>}></Route>
          <Route path={path.DOT} element={<Home></Home>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
