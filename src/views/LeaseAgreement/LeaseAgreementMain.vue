<template>
  <div>
    <AdminsAppbar />
    <AdminsMenuComponent />

    <!-- Section button -->
    <div class="flex justify-center space-x-4 mt-10">
      <!-- Download Button -->
      <button
        class="gap-2 w-[284px] h-[60.426px] flex items-center justify-center rounded border text-white bg-green border-green hover:bg-green-700"
      >
        <SVGWord class="w-[34px] h-[34px]" />
        ดาวน์โหลด
      </button>

      <!-- Print PDF Button -->
      <button
        class="gap-2 w-[284px] h-[60.426px] flex items-center justify-center rounded border text-white bg-mainColor border-mainColor hover:bg-green-700"
      >
        <SVGPrint class="w-[52px] h-[52px]" />
        พิมพ์ PDF
      </button>
    </div>

    <p
      class="m-4 text-center text-black text-[24px] font-normal leading-normal tracking-[-0.24px] underline"
      @click="showModal = true"
    >
      แก้ไขแบบฟอร์มสัญญาเช่า คลิก
    </p>

    <!-- เรียกใช้ Modal Component -->
    <Modal v-if="showModal" :isVisible="showModal" @close="showModal = false" />

    <!-- Section Pic -->
    <div class="flex items-center justify-center min-h-screen m-4">
      <div
        class="w-[1131px] h-[1538px] flex-shrink-0 border border-black bg-lightgray bg-cover bg-center"
        style="background-image: url('../src/assets/img/doc/lease-agreement.jpg')"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminsAppbar from '@/components/admins/AppbarComponent.vue'
import AdminsMenuComponent from '@/components/admins/MenuComponent.vue'
import SVGWord from '@/components/SVG/Word.vue'
import SVGPrint from '@/components/SVG/Print.vue'
import Modal from '@/views/LeaseAgreement/Modal_EditLeaseAgreement.vue'

const showModal = ref(false)
</script>
