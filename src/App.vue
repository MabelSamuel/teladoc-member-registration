<script setup>
import RegistrationForm from './components/RegistrationForm.vue';
import NavBar from './components/NavBar.vue';
import Footerr from './components/Footerr.vue';
</script>

<template>
  <div>
    <NavBar />
  <main class="flex justify-center sm:flex-none sm:mx-5">
    <RegistrationForm/>
  </main>
    <Footerr/>
</div>
  
</template>


