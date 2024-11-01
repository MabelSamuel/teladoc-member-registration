<script setup>
import RegistrationForm from './components/RegistrationForm.vue';
import NavBar from './components/NavBar.vue';
import Footerr from './components/Footerr.vue';
</script>

<template>
  <div>
  <header>
    <NavBar />
  </header>
  <main class="flex justify-center">
    <RegistrationForm/>
  </main>
    <Footerr/>
</div>
  
</template>


