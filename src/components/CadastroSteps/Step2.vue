<template>
    <div class="flex flex-col max-w-full mx-auto md:max-w-[35rem]">
        <label htmlFor="Email" class="text-text-gray">Email:</label>
        <input type="email" class="rounded border-2 border-gray p-1 mb-3 outline-none" v-model="cadastro.email" />
        <label htmlFor="Senha" class="text-text-gray">Senha:</label>
        <div class="rounded border-2 border-gray p-1 mb-3 justify-between">
            <input :type="viewPassword ? 'text' : 'password'" class="w-[92%] outline-none" v-model="cadastro.senha" />
            <button @click="changeViewPassword">
                <v-icon name="bi-eye-slash" v-show="!viewPassword" class="cursor-pointer text-text-gray" />
                <v-icon name="bi-eye" v-show="viewPassword" class="cursor-pointer text-text-gray" />
            </button>
        </div>
        <div class="flex justify-between gap-5">
            <button
                class="bg-light-gray text-blue-sync font-bold text-md py-2 px-10 w-full rounded mb-5 hover:brightness-95 transition-all duration-500"
                @click="onPreviosStep">
                Voltar
            </button>
            <button
                class="bg-blue-sync text-white font-bold text-md py-2 px-10  w-full rounded mb-5 hover:brightness-105 transition-all duration-500"
                @click="onNextStep">
                Avançar
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from "vue";

const viewPassword = ref(false)

const changeViewPassword = () =>{
    viewPassword.value = !viewPassword.value
}

const props = defineProps({
  cadastro: Object
});

const emit = defineEmits(['previousStep', 'nextStep']);

const onNextStep = () => {
  emit('nextStep');
};
const onPreviosStep = () => {
  emit('previousStep');
};
</script>
<style></style>