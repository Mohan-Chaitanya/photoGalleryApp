import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url])

    return (
        <div>{Math.round(progress)}%</div>
    )
}

export default ProgressBar;