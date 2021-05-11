<template>
  <nav :style="{ background: background || '#333' }">
    <div class="header">
        <ul :style="{ background: background || '#333' }" ref="nav">
            <figure class="image-logo" @click="toggleNav">
                <img :src="imagePath" />
            </figure>
            <li
                v-for="(link, index) in navLinks"
                :key="index"
                @mouseenter="
                    $event.currentTarget.style.background = hoverBackground || '#fff'
                "
                @mouseleave="
                    $event.currentTarget.style.background = background || '#fff'
                "
            >
                <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
                    {{ link.text }}
                    <i :class="link.icon" />
                </router-link>
            </li>

        </ul>
        <div class="image-obstacle">
            <figure class="image-obstacle">
                <router-link 
                    :to="'/'"
                >
                    <img src="../assets/images/logoObstacle.png" />
                </router-link>
            </figure>
        </div>
        <div class="profile_header_icon">
            <router-link 
                :to="'Profile'"
            >
                <img src="../assets/images/exempleProfil.jpg" />
            </router-link>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: [
    "navLinks",
    "background",
    "linkColor",
    "hoverBackground",
    "imagePath",
    "imageProfile",
    "home",
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
    returnHome() {
        // const 
        // nav.contains("active") ? nav.remove("active") : nav.add("active");
    }
  },
};
</script>