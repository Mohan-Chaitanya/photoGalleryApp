import React, { useState } from "react"
import ProgressBar from "./ProgressBar";

const UploadPhoto = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/jpeg', 'image/png'];

    const changeHandler = (e) => {
        let upLoaded = e.target.files[0];
        if (upLoaded && types.includes(upLoaded.type)) {
            setError('');
            setFile(upLoaded);
            console.log(upLoaded);
        } else {
            setFile(null);
            setError('Select an image file type like JPEG/PNG')
        }
    }
    return (
        <form className='fileUpload'>
            <input type='file' onChange={changeHandler} id='fileInput' />

            <label for='fileInput' id="uploadBtn"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z" clip-rule="evenodd"></path></svg>UploadFile</label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadPhoto;