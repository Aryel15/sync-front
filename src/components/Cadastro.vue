<template>
  <div class="p-10 flex flex-col items-stretch justify-center w-full mx-2">
    <h1 class="text-blue-sync text-2xl font-bold text-center mb-2">Cadastre-se</h1>
    <form @submit.prevent>
        <Step1 v-show="step === 0" :cadastro="cadastro" @nextStep="nextStep"/>
        <Step2 v-show="step > 0" :cadastro="cadastro" @nextStep="nextStep" @previousStep="previousStep"/>
        <Step3 v-show="step === 2" :cadastro="cadastro" @nextStep="nextStep" @previousStep="previousStep"/>
        </form>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import * as z from 'zod';
import Step1 from './CadastroSteps/Step1.vue'
import Step2 from './CadastroSteps/Step2.vue'
import Step3 from './CadastroSteps/Step3.vue'

const cadastro = reactive({
  avatar: "",
  nome: "",
  idade: "",
  rua: "",
  bairro: "",
  estado: "",
  biografia: "",
  email: "",
  senha: "",
});


const step = ref(0)

const nextStep = () =>{
    if(step.value === 0){
        const camposExcluidos = ['email', 'senha', 'avatar'];
        const todosCamposPreenchidos = Object.keys(cadastro).filter(key => !camposExcluidos.includes(key)).every(key => cadastro[key] !== '');

        if(todosCamposPreenchidos){
            step.value = 1
        }
    }else if(step.value === 1){
        const todosCamposPreenchidos = Object.keys(cadastro).filter(key => key !== 'avatar').every(key => cadastro[key] !== '');
        console.log(cadastro)

        if(todosCamposPreenchidos){
            step.value = 2
        }
    }else if(step.value === 2){
        if(Object.keys(cadastro).every(key => cadastro[key] !== '')){
            console.log(cadastro)
        }
    }
}
const previousStep = () =>{
    if(step.value === 1){
        step.value = 0
    }
}
</script>
<style lang=""></style>
