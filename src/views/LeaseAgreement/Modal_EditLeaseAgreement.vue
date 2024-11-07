<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
    :class="{ 'opacity-0': !isVisible, 'opacity-100': isVisible }"
  >
    <div
      class="w-[615px] h-auto bg-white rounded-lg p-6 shadow-lg relative transition-transform duration-300 transform"
      :class="{ 'translate-y-4': !isVisible, 'translate-y-0': isVisible }"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">แก้ไขสัญญาเช่า</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />

      <!-- Upload Sections -->
      <div class="space-y-4">
        <!-- Upload Word -->
        <div class="flex items-center space-x-5">
          <div class="flex">
            <p class="font-normal mr-1">อัพโหลด Word</p>
            <p class="text-red">*</p>
          </div>

          <div class="flex items-center border border-line w-[400px] h-[47px] px-4 ml-[150px]">
            <span class="truncate">{{ wordFileName || 'ยังไม่มีไฟล์ที่เลือก' }}</span>
            <button
              @click="uploadWord"
              class="ml-auto bg-lgreen border-dgreen border px-3 py-1 rounded-lg"
            >
              อัปโหลดใหม่
            </button>
          </div>
        </div>

        <!-- Upload PDF -->
        <div class="flex items-center space-x-8">
          <div class="flex">
            <p class="font-normal mr-1">อัพโหลด PDF</p>
            <p class="text-red">*</p>
          </div>

          <div class="flex items-center border border-line w-[400px] h-[47px] px-4 ml-[150px]">
            <span class="truncate">{{ pdfFileName || 'ยังไม่มีไฟล์ที่เลือก' }}</span>
            <button
              @click="uploadPDF"
              class="ml-auto bg-lgreen border-dgreen border px-3 py-1 rounded-lg"
            >
              อัปโหลดใหม่
            </button>
          </div>
        </div>

        <!-- Upload Image -->
        <div class="flex items-center space-x-12">
          <div class="flex">
            <p class="font-normal mr-1">อัพโหลดรูป</p>
            <p class="text-red">*</p>
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
        <div
          class="flex justify-center items-center border border-line w-[217px] h-[285px] mt-4 overflow-hidden ml-[140px]"
        >
          <img
            v-if="imagePreview"
            :src="imagePreview"
            alt="Uploaded Image"
            class="object-cover h-full w-auto"
          />
          <p v-else class="mt-4">ไม่มีรูปที่อัปโหลด</p>
        </div>
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
