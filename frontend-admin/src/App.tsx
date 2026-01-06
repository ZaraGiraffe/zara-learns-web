import './App.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return <>
    <div className='main-page'>
      <LeftPanel />
      <div className='main-panel'>
        <Header />
        <Content />
      </div>
    </div>
  </>
}

export default App;

function LeftPanel() {
  return <div className='left-panel'>
    <Link to='/'>Home</Link>
    <Link to='/catalog'>Catalog</Link>
  </div>
}

function Header() {
  return <div className='header'>
    <img className='sidebar-icon' src='./sidebar.svg' alt='sidebar' onClick={handleSidebarIconClick} />
    <img src='./person.svg' alt='person' />
  </div>
}

function handleSidebarIconClick() {
  if (document.querySelector('.left-panel')?.classList.contains('sidebar-closed')) {
    document.querySelector('.left-panel')?.classList.remove('sidebar-closed');
  } else {
    document.querySelector('.left-panel')?.classList.add('sidebar-closed');
  }
}

function Content() {
  return <div className='content'>
    <Outlet />
  </div>
}
