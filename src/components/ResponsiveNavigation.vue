<template>
  <nav :style="{ background: background || '#333' }">
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
        <transition name="fade" mode="out-in">
          <router-link :to="link.path" :style="{ color: linkColor || '#DDD' }">
            {{ link.text }}
            <i :class="link.icon" />
          </router-link>
        </transition>
      </li>
      <!--<figure class="profile" @click="toggleProfile">
        <img src="exempleProfil.jpg" height="200px" width="400px" />
      </figure>-->
    </ul>
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
  ],
  methods: {
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains("active") ? nav.remove("active") : nav.add("active");
    },
  },
};
</script>