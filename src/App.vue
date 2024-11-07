<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav> -->
  <div class="device-max-size"><RouterView /></div>

  <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
</template>
