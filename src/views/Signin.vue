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
                        placeholder="Prénom"
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
                        placeholder="Nom"
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
                    placeholder="Mot De Passe"
                    autocomplete="off"
                    required
                    />
                </div>
                <br />
                <div class="genderDate">
                    <div class="div_select_gender">
                        <select class="select_gender">
                            <option disabled selected>Choix du Genre</option>
                            <option value="Man">Homme</option>
                            <option value="Woman">Femme</option>
                            <option value="Others">Autres</option>
                        </select>
                    </div>
                    <div class="cadreInputDate">
                        <input
                        type="date"
                        max="today"
                        v-model="date"
                        class="inputCadre tailleInput date"
                        name="date"
                        placeholder=""
                        autocomplete="off"
                        required
                        />
                    </div>
                </div>
                <div class="unButton">
                    <button value="" class="designButton" type="submit">
                        S'inscrire
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
