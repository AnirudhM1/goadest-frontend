import {Route, Link, Switch} from "react-router-dom";
//import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {AnimatePresence} from 'framer-motion';
import Home from './home/Home';
import Blog from './blog/Blog';
import Location from './locations/Location';
import Map from './map/Map';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to='/'>
                    Home
                </Link>

                <ul>
                    <Link to='/blogs'>
                        <li>Blogs</li>
                    </Link>
                    <Link to='/locations'>
                        <li>Locations</li>
                    </Link>
                    <Link to='/maps'>
                        <li>Maps</li>
                    </Link>
                </ul>
            </nav>
            <AnimatePresence>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/blogs' component={Blog} />
                    <Route path='/locations' component={Location} />
                    <Route path='/maps' component={Map} />
                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default Nav
