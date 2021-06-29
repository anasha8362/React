import React, { Component } from 'react';
import './Context/PlantImage.css'
import 'tachyons';
import { Redirect, Router } from "react-router-dom";

import { useHistory } from 'react-router-dom';
import Plant from './Plant';
import { Form, Button, Container } from 'react-bootstrap'
import { FaCloudUploadAlt } from "react-icons/fa";

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            show: false
        };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
        this.setState({ show: !this.state.show })
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img id="image" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div id="image" className="previewText">Please select an Image for Preview</div>);
        }
      
        return (

            <div className="Main">

                <div className="handeler">
                    <div className="previewComponent">
                        <form onSubmit={(e) => this._handleSubmit(e)}>
                            <div class="uploadDiv file btn btn-xl btn-outline-light select">
                                <FaCloudUploadAlt />
                                Upload Image here
							<input id=" uploadImage" className="upload" type="file" name="file" onChange={(e) => this._handleImageChange(e)} />
                            </div>
                           
                            
                            <button className=" btn btn-xl btn-outline-light select submitButton"
                                type="submit"
                                onClick={(e) => this._handleSubmit(e)}  >Get Disease info </button>
                        </form>
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                    </div>


                </div>

                {
                    this.state.show ?
                      
                            <div id="FileUpload" class="FileUpload">
                            <div class="wrapper">
                                <div class="upload">
                                    <p>Comparing your Image </p>
                                </div>

                                <div class="uploaded uploaded--three">
                                    <i class="far fa-file-pdf"></i>
                                    <div class="file">
                                        <div class="file__name">
                                            <p>Checking for a Match </p>
                                            <i class="fas fa-times"></i>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>

                           
                         : null
                }
            </div>
        )
    }
}


