import Header from "./Components/Header"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from './Components/Footer'
import Main from "./Components/Main";

const App = () => {
  return (
    <Router>
        <div className="max-w-4xl mx-auto p-2">
        <Header/>
        <Main/>  
        <Footer />
        </div>
        
    </Router>
  )
}

export default App