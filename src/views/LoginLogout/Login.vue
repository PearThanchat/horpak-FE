<template>
  <div class="flex h-[100vh]">
    <!-- Left Section -->
    <div class="bg-mainColor w-[70%] flex justify-center items-center">
      <img src="@/assets/img/login/groupofppt.png" alt="Login Image" class="max-w-[65%] h-auto" />
    </div>

    <!-- Right Section -->
    <div class="bg-white w-[35%] flex justify-center items-center">
      <div class="w-[80%] max-w-[400px] text-center">
        <h2 class="text-cbutton text-[24px] font-bold leading-6 text-left mb-[30px]">
          Welcome to ระบบจัดการหอพัก
        </h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input type="text" id="username" v-model="username" placeholder="Username" required />
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-[100%] p-[10px] bg-mainColor hover:bg-hoverButton shadow-indigo-500/50 rounded-[5px] text-white border-none cursor-pointer font-bold"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <!-- ปุ่มลืมรหัสผ่าน -->
        <div class="flex">
          <button
            class="block mt-[20px] mb-[0px] text-cbutton leading-[14px] cursor-pointer ml-auto"
            @click="showModalChangePassword = true"
          >
            ลืมรหัสผ่านคลิกที่นี่
          </button>

          <!-- เรียกใช้ Modal Component -->
          <ModalChangePassword
            v-if="showModalChangePassword"
            :isVisible="showModalChangePassword"
            @close="showModalChangePassword = false"
          />
        </div>

        <!-- Divider line -->
        <hr class="h-[1px] bg-fgray mt-[20px] mb-[20px]" />

        <!-- Footer Text -->
        <p class="text-cbutton">Megaprod Software Corporation</p>
        <p class="text-cbutton text-[15px]">Version 1</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// showModalChangePassword
import ModalChangePassword from '@/views/LoginLogout/Modal_ChangePassword.vue'
const showModalChangePassword = ref(false)

// Reactive variables for username and password
const username = ref('')
const password = ref('')

// Method to handle login
function handleLogin() {
  console.log('Logging in with:', username.value, password.value)
}
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  color: #333;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
