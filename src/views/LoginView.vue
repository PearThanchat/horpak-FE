<template>
  <div class="flex h-dvh">
    <div class="h-full w-[65%] bg-login grid place-content-center text-center">
      <img
        src="../assets/img/login/groupofppt.png"
        alt="login"
        class="w-[801px] h-auto text-center"
      />
    </div>

    <!-- login form -->
    <form class="bg-white p-8 w-96">
      <h2 class="text-2xl font-sarabun mb-8">Welcome To ระบบจัดการหอพัก</h2>
      <div class="mb-4">
        <input
          type="text"
          v-model="username"
          placeholder="Username"
          required
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div class="mb-6">
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div>
        <input
          type="submit"
          value="Log In"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>
