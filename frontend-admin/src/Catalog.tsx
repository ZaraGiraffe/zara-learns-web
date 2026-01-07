import './Catalog.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
    let navigate = useNavigate();

    return <form className='content-page'>
        <h1 className='content-page-title'>New Item</h1>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Name: </label>
            <input type='text' placeholder='Name' className='content-page-text-input' />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Description: </label>
            <input type='text' placeholder='Description' className='content-page-text-input' />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Price: </label>
            <input type='number' placeholder='Price' className='content-page-number-input' />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Image: </label>
            <input type='file' placeholder='Image' accept='image/png, image/jpeg' className='content-page-file-input' />
        </div>
        <div className='content-page-item content-page-bottom-buttons'>
            <button type='submit' className='content-page-button bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Create</button>
            <button type='button' onClick={() => navigate(-1)} className='content-page-button bg-red-500 hover:bg-red-600 active:bg-red-700 text-white'>Cancel</button>
        </div>
    </form>
}


export { NewItem, Catalog };
