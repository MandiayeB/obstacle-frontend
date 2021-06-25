<template>
    <div>
            <div class="profile_picture">
                <img :src="remoteUrl" />
            </div>
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
            image: '',
            remoteUrl: '',
        }
    },
    methods:{
        onFileSelected(event){
            const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
            this.selectedFile = event.target.files[0];
            if(!allowedTypes.includes(this.selectedFile.type)){
                console.log("only images are required !");
            }
            if(this.selectedFile.size> 500000){
                console.log("Too large, max size allowed is 500KB");
            }
        },
        createBase64Image(fileObject) {
            const reader = new FileReader();

            reader.onload = (e) => {
                this.image = e.target.result;
                this.onUpload();
            };
            read.readAsDataURL(fileObject);
        },
        onUpload(){
            
            const picture = new FormData();
            picture.append('picture', this.selectedFile, this.selectedFile.name);
            console.log(picture.get('picture'));
            axios
                .put('http://localhost:3000/upload',
                        picture, 
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                        withCredentials: true,
                    }
                )
                .then(res => {
                    console.log(res.data.url);
                    this.remoteUrl = res.data.url;
                })
                .catch(error => console.log(error))
            
        },
        // onFileChange(e){

        // },
        // createImage(file){
        //     let image = new Image();
        //     let reader = new FileReader();
        //     var vm = this;

        //     read.onload = (e) => {
        //         vm.image = e.target.resuilt;
        //         vm.set('img');
        //     };
        //     reader.readAsDataURL(file);
        // }
    }
}
</script>