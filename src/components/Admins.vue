<template>
    <div class="button_admin">
        <div :key="challenge" v-for="challenge in challenges">
            <Admin :challenge="challenge"/>
        </div>
    </div>
</template>

<script>
import Admin from './Admin';

export default {

    name: 'Admins',
    components: {
        Admin,
    },
    props: {
        challenges: { type: Object }
    },
}
</script>