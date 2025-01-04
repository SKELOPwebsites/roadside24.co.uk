<template>
    <Header />

    <slot></slot>

    <Footer />

    <WhatsappIcon  name="Roadside24" phoneNumber="+447442980101"/>
</template>

<script setup>
import Header from "../Components/Header.vue"
import Footer from "../Components/Footer.vue"
import WhatsappIcon from "../Components/WhatsappIcon.vue"

</script>

<style scoped>

</style>
