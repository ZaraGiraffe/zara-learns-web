import './App.css'

function HeaderPanel() {
    return <div className="header-panel">
        <img srcSet="/logo.svg" alt="logo" className="logo-image" />
        <div className="header-central-buttons">
            <div>Home</div>
            <div>Catalog</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div className="profile">Sign in</div>
    </div>
}

function PageContent() {
    return <div className="page-content"><MockContent /></div>
}

function MockContent() {
    let text = "";
    for (let i = 0; i < 1000; i++) {
        text += "Lorem ipsum";
    }
    return <p>
        {text}
    </p>
}

function App() {
    return (
        <>
            <HeaderPanel />
            <PageContent />
        </>
    )
}

export default App
