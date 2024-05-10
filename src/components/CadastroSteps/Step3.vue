<template>
    <div class="absolute top-0 left-0 w-full h-screen backdrop-blur-sm flex items-center justify-center">
        <section class="flex flex-col items-center justify-center p-5 rounded bg-white shadow-md w-[30rem] gap-5">
            <v-icon name="hi-arrow-right" class="text-lightblue-sync self-end font-bold cursor-pointer" @click="onNextStep"/>
            <p class="text-text-gray text-2xl font-bold text-center">Adicionar imagem de perfil ou manter padrão?</p> 
            <img src="/src/assets/default-avatar.png" class="rounded-full"/>
            <div class="flex justify-between gap-5 mb-3 w-full">
                <button
                    class="bg-light-gray text-blue-sync font-bold text-md py-2 px-5 w-full rounded hover:brightness-95 transition-all duration-500"
                    @click="defaultImg"
                    >
                    Manter padrão
                </button>
                <input type="file" name="avatar" id="avatar" @change="handleFileChange" class="hidden"/>
                <label htmlFor="avatar" class="bg-blue-sync text-white font-bold text-md py-2 px-5 w-full rounded hover:brightness-105 transition-all duration-500 cursor-pointer text-center">
                    Adicionar Imagem
                </label>
            </div>
        </section>
    </div>
</template>
<script setup>
import { defineEmits, toRefs } from "vue";

const props = defineProps({
  cadastro: Object
});

const { cadastro } = toRefs(props)

const emit = defineEmits(['previousStep', 'nextStep']);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  cadastro.value.avatar = file
  onNextStep()
};

const defaultImg = () => {
  cadastro.value.avatar = "/src/assets/default-avatar.png"
  onNextStep()
};

const onNextStep = () => {
  emit('nextStep');
};
const onPreviosStep = () => {
  emit('previousStep');
};
</script>
<style>
    
</style>