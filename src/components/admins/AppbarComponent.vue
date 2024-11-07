<template>
  <nav
    id="nav-bar-admin"
    class="flex justify-between items-center py-[0.5%] bg-mainColor text-white px-5 text-base font-normal leading-6"
  >
    <p class="text-left">ระบบจัดการหอพัก | หอพักแม่นวลศรี</p>
    <div class="flex items-center gap-4 capitalize">
      <p class="rounded-full py-1 px-4 bg-cGreen">Admin</p>
      <img src="@/assets/img/appbar/user.svg" height="20px" width="20px" alt="" />
      <p>ธัญญ์ฉัตร์ จันทร์ภักดิสกุล</p>
      <router-link to="#">คู่มือ</router-link>

      <p
        class="inline-flex items-center justify-center gap-[12.5px] bg-dblue rounded-full py-4 px-4 h-[28.235px] p-[7.5px] flex-shrink-0"
      >
        <img
          src="@/assets/img/appbar/notification.svg"
          height="20"
          width="20"
          alt="Notification Icon"
        />
      </p>

      <button
        @click="logout"
        class="bg-dblue text-white px-4 py-2 rounded-md shadow-[0px_3px_29.2px_rgba(0,0,0,0.25)]"
      >
        Logout
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
