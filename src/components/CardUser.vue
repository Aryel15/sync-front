<template>
    <div class="w-full flex flex-col p-10 rounded-2xl bg-[#fcfcfc]">
        <div class="w-full flex gap-2 items-center justify-start mb-2">
            <img :src="`http://localhost:3001/api/v1/user/image/${user.avatar}`" :alt="`Usuário ${user.nome}`" class="w-20 h-20 rounded-full"/>
            <div class="w-full text-start">
                <h3 class="text-blue-sync font-bold text-xl">{{user.nome}}</h3>
                <p class="text-text-gray">{{ user.email }}</p>
            </div>
        </div>
        <p class="text-md text-text-gray font-light">{{ user.bairro }} - {{user.estado}}</p>
        <p class="text-md text-text-gray">{{ user.biografia }}</p>
    </div>
</template>
<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    user: Object
})

</script>
<style>
    
</style>