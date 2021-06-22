<template>
    <div>
        <input type="file"  @change="onFileSelected">
        <button @click="onUpload">Upload</button>
    </div>
</template>

<script>
import axios from 'axios';
const FormData = require('form-data')
const fs = require('fs')
const path = require('path')

export default {
    name:'UploadingFile',
    data() {
        return {
            selectedFile: null,
        }
    },
    methods:{
        onFileSelected(event){
            this.selectedFile = event.target.files[0];
        },
        onUpload(){
            const picture = new FormData();
            picture.append('picture', this.selectedFile, this.selectedFile.name);
            console.log(picture.get('picture'));
            axios
                .post('http://localhost:3000/profile',
                        picture, 
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    }
                )
                .catch(error => console.log(error))
        }
    }
}
</script>