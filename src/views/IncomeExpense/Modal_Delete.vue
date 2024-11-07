<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="w-[615px] h-auto bg-white rounded-lg p-6 shadow-lg relative transition-transform duration-300 transform"
      :class="{ 'translate-y-4': !isVisible, 'translate-y-0': isVisible }"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">ยืนยันการลบ</h2>
        <!-- ปุ่มปิด Modal -->
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- เนื้อหา Modal -->
      <h2 class="text-2xl text-center">ต้องการยืนยันการลบใช่หรือไม่ ?</h2>
      <p class="text-[16px] text-gray-500 mt-2 text-center">การลบข้อมูลนี้ไม่สามารถกู้คืนได้</p>

      <!-- Action Buttons -->
      <div class="flex justify-center space-x-2 mt-6">
        <button @click="closeModal" class="px-4 py-2 bg-cbutton rounded text-white w-[108px]">
          ยกเลิก
        </button>
        <button @click="saveChanges" class="px-4 py-2 bg-secondColor text-white rounded w-[108px]">
          ยืนยัน
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import SVGClose from '@/components/SVG/Close.vue'

// Define props
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
