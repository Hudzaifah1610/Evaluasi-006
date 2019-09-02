import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Navbar from '../components/Navbar';
import {Home, Makanan, Minuman, Contact} from '../container/index';


function Routes() {
    return(
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/makanan" component={Makanan}/>
            <Route path="/minuman" component={Minuman}/>
            <Route path="/contact" component={Contact}/>
        </Router>
    )
}
export default Routes;