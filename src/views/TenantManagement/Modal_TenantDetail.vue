<template>
  <div
    vv-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
  >
    <div
      class="w-[615px] h-auto bg-white rounded-lg p-6 shadow-lg relative transition-transform duration-300 transform"
      :class="{ 'translate-y-4': !isVisible, 'translate-y-0': isVisible }"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">รายละเอียดผู้เช่า</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- ชื่อ-นามสกุลผู้เช่า -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">ชื่อ-นามสกุล</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- เบอร์โทร -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">เบอร์โทร</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- ห้อง -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">ห้อง</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- มีรถยนต์ (คัน) -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">มีรถยนต์ (คัน)</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- มีมอไซต์ (คัน) -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">มีมอไซต์ (คัน)</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- สัญญาเช่า -->
      <div class="flex items-center space-x-10">
        <div class="w-[120px]">
          <p class="font-norma text-left">สัญญาเช่า</p>
        </div>
        <p>ชื่อ-นามสกุล</p>
      </div>

      <!-- Uploaded Image Preview -->
      <div class="flex items-center space-x-10">
        <div class="w-[120px]"></div>
        <div
          class="border border-line w-[217px] h-[285px] flex justify-center items-center overflow-hidden mt-4"
        >
          <template v-if="imagePreview">
            <img :src="imagePreview" alt="Uploaded Image" class="object-cover h-full w-auto" />
          </template>
          <p v-else class="text-center text-gray-500">ไม่มีรูปที่อัปโหลด</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-end space-x-2 mt-6">
        <button @click="closeModal" class="px-6 py-2 bg-cbutton text-white rounded w-auto">
          ปิดหน้าต่าง
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
  isVisible: Boolean
})

// Define emits
const emit = defineEmits(['close'])

// Close modal method
function closeModal() {
  emit('close')
}
</script>
