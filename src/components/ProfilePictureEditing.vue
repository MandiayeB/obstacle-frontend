<template>
    <div class="profile_input_file_div">
        <input class="custom-file-input" type="file" ref="file" @change="onFileSelected">
        <img v-if="firstname" id="img_profile_editing" :src="profilePicture" :alt="firstname"/>
        <div class="profile_editing_button_div">
            <button class="custom_file_button" @click="onUpload"><img id="custom_img_file_button" src="../assets/images/cameraEditingProfile.png" alt=""></button>
        </div>
    </div>
    <span v-if="displayError" id="span_error_file_upload">{{ this.error }}</span>
</template>

<script>
export default {
    name:'ProfilePictureEditing',
    props:{
        profilePicture: String,
        firstname: String,
    }
}
</script>