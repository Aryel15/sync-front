<template>
  <main class="flex justify-between items-center">
    <section
      class="flex-col min-h-screen w-full flex items-stretch justify-center md:w-1/2"
    >
      <Cadastro v-show="!showLogin"/>
      <Login v-show="showLogin"/>
      <p class="text-text-gray text-center text-sm" v-show="!showLogin">
        Já possui conta?
        <b
          class="text-blue-sync underline font-medium cursor-pointer"
          @click="changeLogin"
          >Faça login</b
        >
      </p>
      <p class="text-text-gray text-center text-sm" v-show="showLogin">
        Não possui conta?
        <b class="text-blue-sync underline font-medium cursor-pointer" @click="changeLogin"
          >Cadastre-se</b
        >
      </p>
      <p class="text-text-gray text-center text-sm md:hidden">
        Ou 
        <b class="text-blue-sync underline font-medium cursor-pointer" 
          @click="handleDefaultLogin">Entrar sem login 
        </b>
      </p>
    </section>
    <aside
      class="hidden h-screen w-1/2 bg-[url(/src/assets/bg-aside.svg)] bg-right bg-no-repeat flex-col items-center justify-center gap-10 md:flex"
    >
      <h2 class="text-white font-bold text-2xl p-2">Entrar sem login</h2>
      <img src="/src/assets/img-cadastro.png" alt="Imagem de cadastro" />
      <button
        class="bg-white text-blue-sync font-bold text-md py-2 px-14 rounded mb-5 hover:bg-light-gray transition-all duration-500"
        @click="handleDefaultLogin"
      >
        Entrar
      </button>
    </aside>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Cadastro from "../components/Cadastro.vue";
import Login from "../components/Login.vue";
import { api } from "../utils/api";
import router from "../router";
import axios from "axios";

const showLogin = ref(false);

const changeLogin = () => {
  showLogin.value = !showLogin.value;
};


const handleDefaultLogin = async () =>{
    try{
        const response = await api.post('/login', {email:'dev@default.com', senha:'123'})
        if(response.status === 200){
          console.log(response);
          window.localStorage.setItem("id", response.data.id)
          router.push('/perfil')
        }

    }catch(error){
        console.log(error);
    }
    
}
</script>
<style></style>
