<template>
 
  <ul class="flex flex-row items-center justify-between text-2xl bg-white font-bold mx-2 p-4 h-20 w-auto">
    <li><router-link :to ="{name: 'logo'}"></router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'home'}">Home</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'products'}">Products</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'eplaza'}">E-Plaza</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'blog'}">Blog</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'support'}">Support</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'about'}">About</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'contact'}">Contact</router-link></li>
    <li class="text-violet-900 hover:text-blue-500"><router-link :to ="{name: 'jobs'}">Jobs</router-link></li>
  </ul>
  <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

