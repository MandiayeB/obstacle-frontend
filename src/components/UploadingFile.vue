<template>
        <div class="profile_picture_editing">
            <div class="profile_input_file_div">
                <input class="custom-file-input" type="file" ref="file" @change="onFileSelected">
                <img v-if="firstname" id="img_profile_editing" :src="remoteUrl" :alt="firstname"/>
                <div class="profile_editing_button_div">
                    <button class="custom_file_button" @click="browse">
                        <img id="custom_img_file_button" src="../assets/images/cameraEditingProfile.png" alt="">
                    </button>
                </div>
            </div>
            <span v-if="displayError" id="span_error_file_upload">{{ this.error }}</span>
        </div>
</template>

<script>
import axios from 'axios';
const FormData = require('form-data')
const path = require('path')

export default {
    name:'UploadingFile',
    data() {
        return {
            selectedFile: Object,
            selectedFileTest: false,
            image: String,
            error: String,
            displayError: false,
            remoteUrl: sessionStorage.getItem('picture'),
            
        }
    },
    props:{
        firstname: String,
    },
    mounted(){
        window.addEventListener('profilePicture-changed', (event) => {
            if (event.detail.profilePictureChanged){
                this.remoteUrl = sessionStorage.getItem('picture');
            }
        });
    },
    methods:{
        browse(){
            this.$refs.file.click();
        },
        onFileSelected(event){
            const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
            this.selectedFile = event.target.files[0];
            this.selectedFileTest = false;
            if(!allowedTypes.includes(this.selectedFile.type)){
                this.error = "* Nous ne prenons que les images.";
                this.displayError = true;
            } else if(this.selectedFile.size> 2000000){
                this.error = "* La taille max du fichier est de 2000KB.";
                this.displayError = true;
            } else if (this.selectedFile == Object) {
                this.error = "* Veuillez selectionner une photo."
                this.displayError = true;
            } else {
                this.onUpload();
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
            this.displayError = false;
            console.log(this.selectedFile);
            const picture = new FormData();
            picture.append('picture', this.selectedFile, this.selectedFile.name);
            axios
                .put('http://localhost:3000/upload',
                        picture, 
                    {
                        headers: { 'Content-Type': 'multipart/form-data' },
                        withCredentials: true,
                    }
                )
                .then(res => {
                    sessionStorage.setItem('picture', res.data.url);
                    this.remoteUrl = sessionStorage.getItem('picture');
                    window.dispatchEvent(new CustomEvent('profilePicture-changed', {
                        detail: {
                            profilePictureChanged: true
                        }
                    }));
                })
                .catch(error => console.log(error))
        },
    }
}
</script>