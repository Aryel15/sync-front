<template>
  <div class="flex flex-col max-w-full mx-auto md:max-w-full">
    <div class="flex gap-0 items-center justify-center flex-wrap md:flex-nowrap md:gap-4">
      <div class="flex flex-col w-full">
        <label htmlFor="Nome" class="text-text-gray">Nome:</label>
        <input type="text" class="rounded border-2 border-gray p-1 mb-3 outline-none" id="Nome"
          v-model="formData.nome" />
      </div>
      <div class="flex flex-col w-full">
        <label htmlFor="Idade" class="text-text-gray">Idade:</label>
        <input type="number" class="rounded border-2 border-gray p-1 mb-3 outline-none" id="Idade"
          v-model="formData.idade" />
      </div>
    </div>
    <div class="flex gap-0 items-center justify-center flex-wrap md:flex-nowrap md:gap-4">
      <div class="flex flex-col w-full">
        <label htmlFor="Rua" class="text-text-gray">Rua:</label>
        <input type="text" class="rounded border-2 border-gray p-1 mb-3 outline-none" id="Rua" v-model="formData.rua" />
      </div>
      <div class="flex flex-col w-full">
        <label htmlFor="Bairro" class="text-text-gray">Bairro:</label>
        <input type="text" class="rounded border-2 border-gray p-1 mb-3 outline-none" id="Bairro"
          v-model="formData.bairro" />
      </div>
      <div class="flex flex-col w-full">
        <label htmlFor="Estado" class="text-text-gray">Estado:</label>
        <select v-model="formData.estado" class="rounded border-2 border-gray p-1 mb-3 outline-none">
          <option :value="estado.sigla" v-for="(estado) in estados" :key="estado.sigla">{{ estado.sigla }}</option>
        </select>
      </div>
    </div>

    <label htmlFor="Biografia" class="text-text-gray">Biografia:</label>
    <textarea type="number" class="rounded border-2 border-gray p-1 mb-3 h-32 resize-none outline-none" id="Biografia"
      v-model="formData.biografia"></textarea>
    <div class="flex justify-between flex-wrap md:flex-nowrap">
      <button
        class="w-full bg-blue-sync text-white font-bold text-md p-2 rounded mb-5 hover:brightness-105 transition-all duration-500 md:w-56"
        @click="saveUser">
        Salvar
      </button>
      <button
        class="bg-light-gray text-blue-sync font-bold text-md py-2 px-10 w-full rounded mb-5 hover:brightness-95 transition-all duration-500 md:w-56"
        @click="logout">
        Sair
      </button>
    </div>
  </div>
</template>
<script setup>
import { toRefs, onMounted, ref } from "vue";
import axios from "axios";
import router from "../router";
import { api } from "../utils/api";
const id = window.localStorage.getItem('id')

const estados = ref([])

onMounted(() => {
  axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then((response) => {
      estados.value = response.data;
      console.log(response.data)
    })
})

const emit = defineEmits(['handleEditarPerfil'])

const changePerfil = () => {
  emit('handleEditarPerfil')
}

const props = defineProps({
  user: Object
})
const formData = {
  nome: props.user.nome,
  rua: props.user.rua,
  avatar: props.user.avatar,
  idade: props.user.idade,
  bairro: props.user.bairro,
  estado: props.user.estado,
  biografia: props.user.biografia,
  email: props.user.email,
  _id: props.user._id,
};

const logout = () => {
  api.post('/logout')
    .then((response) => {
      router.push('/')
    })
    .catch((error) => {
      console.log(error);
    })
}

const saveUser = () => {
  api.put(`/${props.user._id}`, formData)
    .then((response) => {
      changePerfil()
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    })
}
</script>
<style></style>