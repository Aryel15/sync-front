<template>
  <div class="flex flex-col max-w-full mx-auto md:max-w-[35rem]">
    <label htmlFor="Nome" class="text-text-gray">Nome:</label>
    <input
      type="text"
      class="rounded border-2 border-gray p-1 mb-3 outline-none"
      id="Nome"
      v-model="cadastro.nome"
    />
    <label htmlFor="Rua" class="text-text-gray">Rua:</label>
    <input
      type="text"
      class="rounded border-2 border-gray p-1 mb-3 outline-none"
      id="Rua"
      v-model="cadastro.rua"
    />
    <div
      class="flex gap-0 items-center justify-center flex-wrap md:flex-nowrap md:gap-4"
    >
      <div class="flex flex-col w-full">
        <label htmlFor="Bairro" class="text-text-gray">Bairro:</label>
        <input
          type="text"
          class="rounded border-2 border-gray p-1 mb-3 outline-none"
          id="Bairro"
          v-model="cadastro.bairro"
        />
      </div>
      <div class="flex flex-col w-full">
        <label htmlFor="Estado" class="text-text-gray">Estado:</label>
        <select v-model="cadastro.estado" class="rounded border-2 border-gray p-1 mb-3 outline-none">
            <option :value="estado.sigla" v-for="(estado) in estados" :key="estado.sigla">{{estado.sigla}}</option>
        </select>
      </div>
    </div>
    <label htmlFor="Idade" class="text-text-gray">Idade:</label>
    <input
          type="number"
          class="rounded border-2 border-gray p-1 mb-3 outline-none"
          id="Idade"
          v-model="cadastro.idade"
    />
    <label htmlFor="Biografia" class="text-text-gray">Biografia:</label>
    <textarea
      type="number"
      class="rounded border-2 border-gray p-1 mb-3 h-32 resize-none outline-none"
      id="Biografia"
      v-model="cadastro.biografia"
    ></textarea>
    <button
      class="bg-blue-sync text-white font-bold text-md p-2 rounded mb-5 hover:brightness-105 transition-all duration-500"
      @click="onNextStep"
    >
      Avançar
    </button>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, onMounted, ref } from "vue";
import axios from "axios";

const estados = ref([])

onMounted(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => {
        estados.value = response.data;
        console.log(response.data)
    })
})

const props = defineProps({
  cadastro: Object,
});

const emit = defineEmits(["handleChange", "nextStep"]);

const onNextStep = () => {
  emit("nextStep");
};
</script>
<style></style>
