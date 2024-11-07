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
        <h2 class="text-xl font-semibold">เพิ่มรายรับ-รายจ่าย</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- เนื้อหา Modal ที่นี่ -->
      <!-- ตัวเลือก Radio -->
      <div class="flex items-center space-x-4 mb-3">
        <div class="w-[125px]">
          <p class="font-normal">เลือกหมวดหมู่ <span class="text-red">*</span></p>
        </div>
        <div class="flex items-center space-x-4">
          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="รายรับ"
              v-model="selectedCategory"
              class="form-radio text-cGreen"
            />
            <span class="font-normal text-black">รายรับ</span>
          </label>

          <label class="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="รายจ่าย"
              v-model="selectedCategory"
              class="form-radio text-cGreen"
            />
            <span class="font-normal text-black">รายจ่าย</span>
          </label>
        </div>
      </div>

      <!-- รายละเอียด -->
      <div class="flex items-start space-x-10 mb-3">
        <div class="w-[100px]">
          <p class="font-normal">รายละเอียด <span class="text-red">*</span></p>
        </div>
        <textarea
          placeholder="กรอกรายละเอียด"
          class="border border-line w-[400px] h-[100px] px-4 truncate"
          v-model="details"
        ></textarea>
      </div>

      <!-- เลขห้อง -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[100px]">
          <p class="font-normal">เลขห้อง <span class="text-red">*</span></p>
        </div>
        <input
          placeholder="กรอกเลขห้อง"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="roomNumber"
        />
      </div>

      <!-- จำนวนเงิน -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[100px]">
          <p class="font-normal">จำนวนเงิน (บาท) <span class="text-red">*</span></p>
        </div>
        <input
          placeholder="กรอกจำนวนเงิน"
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
          เพิ่ม
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
