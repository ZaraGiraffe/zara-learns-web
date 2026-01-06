import './Catalog.css';
import { Link } from 'react-router-dom';

function Catalog() {
    let buttonTailwindClasses = 'flex items-center justify-center px-2';
    return <div className='catalog-content'>
        <nav className='catalog-buttons bg-gray-200 text-white'>
            <div className='catalog-buttons-group p-1'>
                <Link to='/catalog/new' className={`catalog-button bg-green-500 hover:bg-green-600 active:bg-green-700 ${buttonTailwindClasses}`}>New</Link>
                <button className={`catalog-button bg-red-500 hover:bg-red-600 active:bg-red-700 ${buttonTailwindClasses}`}>Delete</button>
            </div>
            <div className='catalog-buttons-group'>
                
            </div>
        </nav>
        <div className='catalog-table'></div>
    </div>
}

function NewItem() {
    return <div>New Item</div>
}


export { NewItem, Catalog };
