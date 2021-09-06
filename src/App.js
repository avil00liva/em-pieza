import './App.css';
import React, {lazy, Suspense} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Spin from "./components/SpinLazy/spin"
const Home = lazy(()=> import("./pages"))
const Tareas = lazy(()=> import("./components/Tareas"))
const Navbar = lazy(()=> import("./components/navbar"))
const Consejos = lazy(()=> import("./pages/Consejos"))
const Footer = lazy(()=> import("./components/Footer"))
const Noticias = lazy(()=> import("./pages/Noticias"))
const Ejercicios = lazy(()=> import("./pages/Ejercicios"))
const Sintomas = lazy(()=> import("./components/Sintomas/Sintomas"))
const Error404 = lazy(()=> import("./components/Error404"))
const Referencias = lazy (()=> import("./pages/Referencias"))

function App() {

  return (
    <Router>
      <Suspense fallback={<Spin />}>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tareas" component={Tareas} />
            <Route exact path="/consejos" component={Consejos} />
            <Route exact path="/noticias" component={Noticias} />
            <Route exact path="/ejercicios" component={Ejercicios} />
            <Route exact path="/sintomas" component={Sintomas} />
            <Route exact path="/referencias" component={Referencias} />
            <Route path="*" component={Error404} />
          </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
