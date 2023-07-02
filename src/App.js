import { useSelector } from "react-redux/es/hooks/useSelector";
import {Home, Login, Public} from './pages/public/index'
import { Routes, Route } from "react-router-dom";
import path from './ultis/path'
import {getApiDataHome} from './store/action/home'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PlayListDetail from "./components/PlayListDetail";

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getApiDataHome())
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public></Public>}>
          <Route path={path.HOME} element={<Home></Home>}></Route>
          <Route path={path.LOGIN} element={<Login></Login>}></Route>
          <Route path={path.DOT} element={<Home></Home>}></Route>
          <Route path={path.PLAYLIST__NAMESONG__IDSONG} element={<PlayListDetail></PlayListDetail>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
