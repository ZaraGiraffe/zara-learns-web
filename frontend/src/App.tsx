import './App.css'
import { Outlet } from 'react-router'
import { Link } from 'react-router'

function HeaderPanel() {
    return <div className="header-panel">
        <div className="header-buttons-group ">
            <Link to="/">
                <img srcSet="/logo.svg" alt="logo" className="logo-image header-button" />
            </Link>
        </div>
        <div className="header-buttons-group">
            <Link to="/home">
                <div className="header-button">Home</div>
            </Link>
            <Link to="/catalog">
                <div className="header-button">Catalog</div>
            </Link>
            <Link to="/about">
                <div className="header-button">About</div>
            </Link>
            <Link to="/contact">
                <div className="header-button">Contact</div>
            </Link>
        </div>
        <div className="header-buttons-group ">
            <Link to="/sign-in">
                <div className="header-button">Sign in</div>
            </Link>
        </div>
    </div>
}

function PageContentComponent() {
    return <div className="page-content">
        <Outlet />
    </div>
}

export function MockContentComponent({ randomWord }: { randomWord: string }) {
    let text = "";
    for (let i = 0; i < 1000; i++) {
        text += randomWord;
        text += " ";
    }
    return <p>
        {text}
    </p>
}

export function App() {
    return (
        <>
            <HeaderPanel />
            <PageContentComponent />
        </>
    )
}

export default App
