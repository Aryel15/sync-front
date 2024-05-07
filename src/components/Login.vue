<template>
    <div class="p-10 flex flex-col items-stretch justify-center w-full mx-2">
        <h1 class="text-blue-sync text-2xl font-bold text-center mb-2">Faça login</h1>
        <form @submit.prevent>
            <div class="flex flex-col items-stretch max-w-full mx-auto md:max-w-[35rem]">
                <label htmlFor="Email" class="text-text-gray">Email:</label>
                <input type="email" class="rounded border-2 border-gray p-1 mb-3 outline-none" v-model="login.email" />
                <label htmlFor="Senha" class="text-text-gray">Senha:</label>
                <div class="rounded border-2 border-gray p-1 mb-3 justify-between">
                    <input :type="viewPassword ? 'text' : 'password'" class="w-[92%] outline-none" v-model="login.senha" @input="validatePassword(login.senha)"/>
                    <button @click="changeViewPassword">
                        <v-icon name="bi-eye-slash" v-show="!viewPassword" class="cursor-pointer text-text-gray" />
                        <v-icon name="bi-eye" v-show="viewPassword" class="cursor-pointer text-text-gray" />
                    </button>
                </div>
                <div class="flex items-center justify-start gap-1">
                    <div v-for="(color, index) in colors" :key="index" :class="`bg-${color} h-2 w-1/5`"></div>
                </div>
                <span v-if="passwordMessages" class="text-xs text-red-600 my-2 w-44"><pre class="break-words">{{ passwordMessages }}</pre></span>
                <button class="bg-blue-sync text-white font-bold text-md p-2 rounded mb-5 hover:brightness-105 transition-all duration-500" @click="handleLogin">Login</button>

            </div>
        </form>
    </div>

</template>
<script setup>
import { ref, reactive } from 'vue'
import * as z from 'zod';
import { api } from '../utils/api';

const passwordMessages = ref('')

const login = reactive({
    email:'',
    senha:''
})

const colors = ref(['gray-300', 'red-500', 'orange-400', 'yellow-300', 'green-500']);

const StrongPasswordSchema = z
  .string()
  .min(8, 'A senha deve ter pelo menos 8 caracteres')
  .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
  .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
  .regex(/[^a-zA-Z0-9]/, 'A senha deve conter pelo menos um caractere especial');


const validatePassword = (password) => {
  try {
    StrongPasswordSchema.parse(password);
    passwordMessages.value = ''
    return true;
  } catch (error) {
    passwordMessages.value = JSON.parse(error.message).map((erro) => erro.message).join('\n')
    return false;
  }
};


const viewPassword = ref(false)

const changeViewPassword = () =>{
    viewPassword.value = !viewPassword.value
}

const handleLogin = async () =>{
    var formData = new FormData();
    formData.append("email", login.email)
    formData.append("senha", login.senha)
    try{
        const response = await api.post('/login', formData)
        console.log(response.data);

    }catch(error){
        console.log(error);
    }
    
}



</script>
<style lang="">
    
</style>