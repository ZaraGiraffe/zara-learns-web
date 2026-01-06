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
  return <div className='left-panel bg-sky-500'>
    <Link to='/' className={leftPanelTailwindClasses}>Home</Link>
    <Link to='/catalog' className={leftPanelTailwindClasses}>Catalog</Link>
  </div>
}

function Header() {
  let headerTailwindClasses = 'hover:bg-green-600 active:bg-green-700'
  return <div className='header bg-green-500'>
    <img className={'sidebar-icon header-button ' + headerTailwindClasses} src='./sidebar.svg' alt='sidebar' onClick={handleSidebarIconClick} />
    <img className={'header-button ' + headerTailwindClasses} src='./person.svg' alt='person' />
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
