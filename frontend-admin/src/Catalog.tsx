import './Catalog.css';
import './Table.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FileUploader } from './FileUploader';
import { useState, useEffect } from 'react';

class Item {
    id: number;
    name: string;
    description: string;
    price: number;
    image_urls: string[];

    constructor(id: number, name: string, description: string, price: number, image_urls: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_urls = image_urls;
    }
}

const ITEMS_PER_PAGE = 10;

function Catalog() {
    let buttonTailwindClasses = 'flex items-center justify-center px-2';

    let [items, setItems] = useState<Item[]>([]);
    let [page, setPage] = useState<number>(0);
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/get-items?limit=${ITEMS_PER_PAGE}&offset=${page * ITEMS_PER_PAGE}`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching catalog:', error));
    }, [page]);
    
    return <div className='catalog-content'>
        <nav className='catalog-buttons bg-gray-200 text-white'>
            <div className='catalog-buttons-group p-1'>
                <Link to='/catalog/new' className={`catalog-button bg-green-500 hover:bg-green-600 active:bg-green-700 ${buttonTailwindClasses}`}>New</Link>
                <button className={`catalog-button bg-red-500 hover:bg-red-600 active:bg-red-700 ${buttonTailwindClasses}`}>Delete</button>
            </div>
            <div className='catalog-buttons-group'>
                
            </div>
        </nav>
        <table className='catalog-table'>
            <thead>
                <tr className='table-row'>
                    <th scope="col" className='table-cell text-center min-w-24'>ID</th>
                    <th scope="col" className='table-cell min-w-32'>Name</th>
                    <th scope="col" className='table-cell min-w-48'>Description</th>
                    <th scope="col" className='table-cell text-center min-w-24'>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id} className='table-row'>
                            <td scope="row" className='table-cell text-center'>{item.id}</td>
                            <td className='table-cell'>{item.name}</td>
                            <td className='table-cell'>{item.description}</td>
                            <td className='table-cell text-center'>{item.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='catalog-pagination'>

        </div>
    </div>
}

function NewItem() {
    let navigate = useNavigate();
    let [images, setImages] = useState<File[]>([]);

    async function handleNewItem(formData: FormData) {
        try {
            images.forEach((image) => {
                formData.append('images', image);
            });

            const response = await fetch('http://127.0.0.1:8000/api/create-item', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.info("Item created successfully:", data);
            
            // Navigate back to catalog on success
            navigate(-1);
            
        } catch (error) {
            console.error("Error creating item:", error);
            // TODO: Show error message to user
        }
    }

    return <form action={handleNewItem} className='content-page'>
        <h1 className='content-page-title'>New Item</h1>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Name: </label>
            <input name='name' type='text' placeholder='Name' className='content-page-text-input' required />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Description: </label>
            <input name='description' type='text' placeholder='Description' className='content-page-text-input' required />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Price: </label>
            <input name='price' type='number' placeholder='Price' className='content-page-number-input' required />
        </div>
        <div className='content-page-item'>
            <label className='content-page-input-label'>Image: </label>
            <FileUploader onFilesChange={setImages} />
        </div>
        <div className='content-page-item content-page-bottom-buttons'>
            <button type='submit' className='content-page-button bg-green-500 hover:bg-green-600 active:bg-green-700 text-white'>Create</button>
            <button type='button' onClick={() => navigate(-1)} className='content-page-button bg-red-500 hover:bg-red-600 active:bg-red-700 text-white'>Cancel</button>
        </div>
    </form>
}


export { NewItem, Catalog };
