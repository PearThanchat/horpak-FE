<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
  >
    <!-- เนื้อหาของ Modal -->
    <div
      class="w-[615px] h-auto bg-white rounded-lg p-6 shadow-lg relative transition-transform duration-300 transform"
      :class="{ 'translate-y-4': !isVisible, 'translate-y-0': isVisible }"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">เปลี่ยนรหัสผ่าน</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- ชื่อผู้ใช้งาน* -->
      <div class="flex items-center space-x-auto mb-3">
        <div class="w-[150px]">
          <p class="font-norma text-left">ชื่อผู้ใช้งาน<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกชื่อผู้ใช้งาน"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- เบอร์โทรที่ลงทะเบียน* -->
      <div class="flex items-center space-x-auto mb-3">
        <div class="w-[150px]">
          <p class="font-norma text-left">เบอร์โทรศัพย์<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกชื่อผู้ใช้งาน"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- รหัสผ่านใหม่* -->
      <div class="flex items-center space-x-auto mb-3">
        <div class="w-[150px]">
          <p class="font-norma text-left">รหัสผ่านใหม่<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกรหัสผ่านใหม่"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- ยืนยันรหัสผ่านใหม่* -->
      <div class="flex items-center space-x-auto mb-3">
        <div class="w-[150px]">
          <p class="font-norma text-left w-auto">
            ยืนยันรหัสผ่านใหม่<span class="text-red"> *</span>
          </p>
        </div>
        <input
          placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end space-x-2 mt-6">
        <button @click="closeModal" class="px-4 py-2 bg-cbutton rounded text-white w-[108px]">
          ยกเลิก
        </button>
        <button @click="saveChanges" class="px-4 py-2 bg-secondColor text-white rounded w-[108px]">
          บันทึก
        </button>
      </div>

      <!-- Others -->
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import SVGClose from '@/components/SVG/Close.vue'

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})

// Define emits
const emit = defineEmits(['close'])

// Close modal method
function closeModal() {
  emit('close')
}
</script>
