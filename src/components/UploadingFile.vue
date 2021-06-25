<template>
        <div class="profile_picture">
            <ProfilePicture
                v-if="firstname"
                :profilePicture="remoteUrl"
                :firstname="firstname"
            />
        </div>
        <input type="file"  @change="onFileSelected">
        <button @click="onUpload">Upload</button>
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
            image: String,
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
            console.log(typeof(this.selectedFile));
            if(!allowedTypes.includes(this.selectedFile.type)){
                console.log("only images are required !");
            }
            if(this.selectedFile.size> 2000000){
                console.log("Too large, max size allowed is 2000KB");
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