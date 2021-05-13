<template>
      <div class="ajustement_contenent">
        <div class="cadre">
            <!-- <h1>{{ User.firstname }}</h1> -->
            <div class="title_signin">
                <h5 class="h5_title_signin">
                    S’inscrire
                </h5>
            </div>
            <div class="separateur"></div>
            <form @submit.prevent="handleSubmit" action="" method="post">
                <div class="cadreInputName">
                    <div class="cadreInputFirstName">
                        <input
                        type="text"
                        v-model="firstname"
                        class="inputCadre tailleInput"
                        name="firstname"
                        placeholder="Prénom"
                        autocomplete="off"
                        required
                        />
                    </div>
                    <div class="cadreInputLastName">
                        <input
                        type="text"
                        v-model="lastname"
                        class="inputCadre tailleInput"
                        name="lastname"
                        placeholder="Nom"
                        autocomplete="off"
                        required
                        />
                    </div>
                </div>
                <div class="cadreInput">
                    <input
                    type="email"
                    v-model="email"
                    class="inputCadre tailleInput"
                    name="email"
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
                <div class="birthdate_signin">
                    <div class="label_date_signin">
                        <label for="date">Date de naissance</label>
                    </div>
                    <div class="cadreInputDate">
                        <select class="select_day_birth">
                            <option :key="day.id" v-for="day in 31" :value="day">{{ day }}</option>
                        </select>
                         <select class="select_month_birth">
                            <option :key="month.id" v-for="month in months" :value="month">{{ month }}</option>
                        </select>
                        <select class="select_year_birth">
                            <option :key="year.id" v-for="year in years" :value="year">{{ year }}</option>
                        </select>
                    </div>
                </div>
                <div class="gender_signin">
                    <div class="label_gender_signin">
                        <label for="gender">Genre</label>
                    </div>
                    <div class="div_select_gender">
                        <select class="select_gender" name="gender">
                            <option disabled selected>Genre</option>
                            <option value="Man">Homme</option>
                            <option value="Woman">Femme</option>
                            <option value="Others">Autres</option>
                        </select>
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
    name: 'Signin',
    data() {
        return{
            months: [ 'jan', 'fév', 'avr', 'mai', 'juin','juil','août','sept','oct','nov','dec' ],
        }
    },
    computed : {
        years () {
            const year = new Date().getFullYear();
            return Array.from({length: year - 1900}, (value, index) => 1901 + index).reverse();
        }
    }
}
</script>
