<template>
      <div class="ajustement_contenent">
        <div class="cadre">
            <!-- <h1>{{ User.firstname }}</h1> -->
            <form @submit.prevent="handleSubmit" action="" method="post">
                <div class="cadreInputName">
                    <div class="cadreInputFirstName">
                        <input
                        type="text"
                        v-model="user"
                        class="inputCadre tailleInput"
                        name="user"
                        placeholder="First name"
                        autocomplete="off"
                        required
                        />
                    </div>
                    <div class="cadreInputLastName">
                        <input
                        type="text"
                        v-model="user"
                        class="inputCadre tailleInput"
                        name="user"
                        placeholder="Last name"
                        autocomplete="off"
                        required
                        />
                    </div>
                </div>
                <div class="cadreInput">
                    <input
                    type="text"
                    v-model="user"
                    class="inputCadre tailleInput"
                    name="user"
                    placeholder="E-mail"
                    autocomplete="off"
                    required
                    />
                </div>
                <br />
                <div class="cadreInput">
                    <input
                    type="password"
                    v-model="password"
                    class="inputCadre tailleInput"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    autocomplete="off"
                    required
                    />
                </div>
                <div class="unButton">
                    <button value="" class="designButton" type="submit">
                        Register now
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
