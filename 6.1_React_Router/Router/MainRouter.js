import {
    createBrowserRouter,
} from 'react-router-dom'

// import {About, Contact, Footer, Github, Header, Home} from '../Components'
import Home from '../Components/Home/Home';

const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: < Home />
    }
])

export default mainRouter;