import './App.css'
import { Outlet } from 'react-router-dom'

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

export default App

function LeftPanel() {
  return <div className='left-panel'>

  </div>
}

function Header() {
  return <div className='header'>
    <img className='sidebar-icon' src='./sidebar.svg' alt='sidebar' onClick={handleSidebarIconClick} />
    <img src='./person.svg' alt='person' />
  </div>
}

function handleSidebarIconClick() {
  if (document.querySelector('.main-page')?.classList.contains('sidebar-closed')) {
    document.querySelector('.main-page')?.classList.remove('sidebar-closed');
  } else {
    document.querySelector('.main-page')?.classList.add('sidebar-closed');
  }
}

function Content() {
  return <div className='content'>
    
  </div>
}
