<template>
  <div class="m-20">
    <div>Webauthn (dev)</div>
   <button @click="activate" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Activate</button>
   <button @click="auth" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Auth</button>
   <div v-if="error">error</div>
  </div>
</template>

<script>
import { startRegistration } from '@simplewebauthn/browser';
import { ref } from '@vue/reactivity';
export default {

setup () {
        const error = ref(false)

        const authId = localStorage.getItem('authId')


        async function _fetch(url, data, method = 'POST') {
            const response = await fetch(url, {
            method,
            headers: {
            'Content-Type': 'application/json',
            'Authorization': authId
            }, 
            body: JSON.stringify(data) 
            });
            return response.json(); 
        }
        const activate = async () => {
            
            try {
                const credentials = await _fetch('http://192.168.1.102:8000/v2/manage/initwebauthn/createcredentials')
                const response = await startRegistration(credentials)
                

                const verified = await _fetch('http://192.168.1.102:8000/v2/manage/initwebauthn/savecredentials', response)
                console.log(verified)
            } catch (error) {
                console.log(error)
            }
            

            
        }

        const auth = () => {
            return
        }

    return {
        activate, auth, error
    }
}


}
</script>

<style>

</style>