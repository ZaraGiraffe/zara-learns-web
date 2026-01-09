import './FileUploader.css';
import { useState } from 'react';

function ImagePreview({ file, onDelete }: { file: File; onDelete: () => void }) {
    return <div className='file-uploader-image-preview'>
        <img className='file-uploader-image' src={URL.createObjectURL(file)} alt={file.name} />
        <button type='button' onClick={onDelete} className='file-uploader-delete-button'>Delete</button>
    </div>
}

function FileUploader({ 
    onFilesChange 
}: { 
    onFilesChange?: (files: File[]) => void 
}) {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files || []);
        const allFiles = [...selectedFiles, ...newFiles];
        setSelectedFiles(allFiles);
        e.target.value = '';
        onFilesChange?.(allFiles);
    };

    const handleDelete = (index: number) => {
        const newFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(newFiles);
        onFilesChange?.(newFiles);
    };

    return <div>
        <label htmlFor='file-uploader-input' className='file-uploader-label'>Choose file</label>
        <input 
            id='file-uploader-input' 
            type='file' 
            accept='image/png, image/jpeg' 
            className='file-uploader-input'
            onChange={handleFileChange}
            multiple
        />
        <div className='file-uploader-images'>
            {selectedFiles.map((file, index) => (
                <ImagePreview 
                    key={`${file.name}-${index}`} 
                    file={file} 
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    </div>
}

export { FileUploader };
