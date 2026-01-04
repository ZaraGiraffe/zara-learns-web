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
    
  </div>
}

function Content() {
  return <div className='content'>
    
  </div>
}
