import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import Edit from './pages/edit/Edit';
import Listp from './pages/listprovinsi/Listp';
import Editp from './pages/editprovinsi/Editp';
import Newp from './pages/newp/Newp';
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
    console.log(user);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
              path="/login"
              element={
                !user ? <Login /> : <Navigate replace to="/" />
              }
            />
          <Route path='/'>
            <Route
              index
              element={
                user ? (
                <Home />
                ) : (
                <Navigate replace to="/login" />
                )
              }
            />
            {user && (
              <>
                <Route path='adat'>
                    <Route index element={<List/>} />
                    <Route path=':adatId' element={<Edit inputs = {userInputs} />} />
                    <Route 
                      path='new' 
                      element={<New inputs = {userInputs} title="Tambah Adat" />} 
                    />
                </Route>
                <Route path='provinsi'>
                    <Route index element={<Listp/>} />
                    <Route path=':provinsiId' 
                    element={<Editp inputs = {productInputs} title="Tambah Provinsi"/>} />
                    <Route 
                      path='new' 
                      element={<Newp inputs = {productInputs} title="Tambah Provinsi"/>} 
                    />
                </Route>
              </>
          )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
