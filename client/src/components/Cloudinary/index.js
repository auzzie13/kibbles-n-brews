import React, { useState } from 'react';
import dummy from "../../dummy.json";

export default function Main() {

    const [image, setImage] = useState();
    const uploadImage = () => {
			console.log(image)
			console.log(dummy)
        //({imageUrl: image.url})
    }
    const uploadWidget = () => {
        const config = {
            cloud_name: 'dtorrdy3z',
            upload_preset: 'dogApp', 
            tags:['dogs']
        };
        window.cloudinary.openUploadWidget(config, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result)
                setImage(result[0].url);
                uploadImage();
            }
        });
    };
    return (
        <div className="main">
            <img alt="Main" src={image} width="150" height="150" />
            <div className="upload" style={{"position": "absolute", "zIndex": "1"}}>
                <button onClick={uploadWidget} className="upload-button">
                    Upload Image
                </button>
            </div>
        </div>
    );
}
