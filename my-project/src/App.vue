<template>
 
  <ul class="flex flex-row items-center justify-between text-xl bg-white font-bold mx-[25px] pl-10 h-20 w-auto">
    <li><router-link :to ="{name: 'logo'}"></router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'home'}">HOME</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'products'}">PRODUCTS</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'eplaza'}">E-PLAZA</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'blog'}">BLOG</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'support'}">SUPPORT</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name:'about'}">ABOUT US</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'contact'}">CONTACT US</router-link></li>
    <li class="text-violet-900 hover:text-blue-500 border-b-2 border-white hover:border-blue-500 transition duration-500"><router-link :to ="{name: 'jobs'}">JOBS</router-link></li>
    <li class="bg-white h-5 w-5"><router-link :to ="{name: 'search'}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-blue-900 w-60 h-60">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg></router-link></li>
  </ul>
  <router-view />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

