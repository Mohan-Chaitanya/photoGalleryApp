import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_change', (pic) => {
            const percentage = (pic.bytesTransferred / pic.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const createdAt = timeStamp;
            collectionRef.add({ url, createdAt })
        });
    }, [file])

    return { progress, error, url }

}

export default useStorage;