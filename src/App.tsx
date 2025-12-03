import './App.css'

function HeaderPanel() {
    return <div className="header-panel">
        <img srcSet="/public/logo.svg" alt="logo" className="logo-image" />
        <div className="header-central-buttons">
            <div>Home</div>
            <div>Catalog</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div className="profile">Sign in</div>
    </div>
}

function App() {
    return (
        <>
            <HeaderPanel />
        </>
    )
}

export default App
