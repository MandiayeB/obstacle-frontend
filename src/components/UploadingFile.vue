<template>
        <div class="profile_picture">
            <ProfilePicture
                v-if="firstname"
                :profilePicture="remoteUrl"
                :firstname="firstname"
            />
        </div>
        <div class="profile_file_button">
            <span v-if="displayError">{{ this.error }}</span>
            <input class="custom-file-input" type="file"  @change="onFileSelected">
            <button class="custom_file_button" @click="onUpload">Appliquer le changement</button>
        </div>
</template>

<script>
import axios from 'axios';
import ProfilePicture from './ProfilePicture.vue'
const FormData = require('form-data')
const fs = require('fs')
const path = require('path')

export default {
    name:'UploadingFile',
    components: { ProfilePicture },
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
        onFileSelected(event){
            const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
            this.selectedFile = event.target.files[0];
            if(!allowedTypes.includes(this.selectedFile.type)){
                this.error = "Nous ne prenons que les images.";
            } else if(this.selectedFile.size> 2000000){
                this.error = "La taille max du fichier est de 2000KB.";
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
            if(this.selectedFileTest){
                this.displayError = true;
            } else {
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
            }

        },
    }
}
</script>