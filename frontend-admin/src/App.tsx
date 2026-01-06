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
  let leftPanelTailwindClasses = 'hover:bg-sky-600 active:bg-sky-700'
  return <nav className='left-panel bg-sky-500 text-white'>
    <ul className='left-panel-buttons-list'>
      <Link to='/'><li className={'left-panel-button ' + leftPanelTailwindClasses}>Home</li></Link>
      <Link to='/catalog'><li className={'left-panel-button ' + leftPanelTailwindClasses}>Catalog</li></Link>
    </ul>
  </nav>
} 

function Header() {
  let headerTailwindClasses = 'hover:bg-blue-900 active:bg-blue-950'
  return <nav className='header bg-blue-800'>
    <img className={'sidebar-icon header-button ' + headerTailwindClasses} src='./sidebar.svg' alt='sidebar' onClick={handleSidebarIconClick} />
    <img className={'header-button ' + headerTailwindClasses} src='./person.svg' alt='person' />
  </nav>
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
