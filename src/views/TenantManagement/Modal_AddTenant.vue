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
        <h2 class="text-xl font-semibold">เพิ่มผู้เช่า</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- ชื่อ-นามสกุลผู้เช่า -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">ชื่อ-นามสกุล<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกชื่อ-นามสกุลผู้เช่า"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- เบอร์โทร -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">เบอร์โทร<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกเบอร์โทร"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- ห้อง -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">ห้อง<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกห้อง"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- มีรถยนต์ (คัน) -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">มีรถยนต์ (คัน)<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกจำนวนรถยนต์"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- มีมอไซต์ (คัน) -->
      <div class="flex items-center space-x-10 mb-3">
        <div class="w-[120px]">
          <p class="font-norma text-left">มีมอไซต์ (คัน)<span class="text-red"> *</span></p>
        </div>
        <input
          placeholder="กรอกจำนวนรถมอเตอร์ไซต์"
          class="border border-line w-[400px] h-[47px] px-4"
          v-model="amount"
        />
      </div>

      <!-- สัญญาเช่า -->
      <div class="flex items-center space-x-10">
        <div class="w-[120px]">
          <p class="font-norma text-left">สัญญาเช่า<span class="text-red"> *</span></p>
        </div>
        <div class="flex items-center border border-line w-[400px] h-[47px] px-4 ml-[150px]">
          <span class="truncate">{{ imageFileName || 'ยังไม่มีไฟล์ที่เลือก' }}</span>
          <button
            @click="uploadImage"
            class="ml-auto bg-lgreen border-dgreen border px-3 py-1 rounded-lg"
          >
            อัปโหลดใหม่
          </button>
        </div>
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
