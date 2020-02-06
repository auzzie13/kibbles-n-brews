import React, {Component} from 'react';
import axios from "axios"

class ImageUploader extends Component {
  state = {
    selectedFile: null
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
    console.log(event.target.files[0])
  }

  fileUploadHandler= () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedFile); 
    axios.post("", fd)
    .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="ImageLoader">
        <img 
          style={{display: "none"}}
          type="file" 
          onChange={this.fileSelectedHandler}
          ref={fileInput => this.fileInput = fileInput} 
        />
        <button onClick={() => this.fileInput.click()}>Choose File</button>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default ImageUploader;