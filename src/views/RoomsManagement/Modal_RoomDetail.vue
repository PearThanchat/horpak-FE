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
      <!-- Header section -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">ห้อง {{ room.code }}</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-line mb-6" />

      <!-- ข้อมูลห้อง section -->
      <div class="static border border-line rounded-md mb-6 p-4">
        <p class="text-ddgray">วันที่สามารถเข้าพักได้</p>
        <p clsss="text-sm">
          1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
        </p>
        <div class="flex items-center">
          <p class="text-ddgray">ประเภทห้อง<span class="text-red ml-1">*</span></p>
          <label class="inline-flex items-center mr-4 ml-5">
            <input type="radio" v-model="selectedRoomType" value="พัดลม" />
            <span class="ml-2 text-ddgray">ห้องพัดลม</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" v-model="selectedRoomType" value="แอร์" />
            <span class="ml-2 text-ddgray">ห้องแอร์</span>
          </label>
        </div>
      </div>

      <!-- เพิ่มผู้พัก section -->
      <div class="static border border-line rounded-md mb-6 p-4">
        <!-- ชื่ิอผู้เช่า -->
        <div class="flex">
          <div class="w-[110px] place-content-center">
            <p class="text-ddgray">ชื่อผู้เช่า<span class="text-red">*</span></p>
          </div>
          <select v-model="newTenantName" class="w-[395px] border border-line px-4 py-2 ml-5">
            <option>เลือกชื่อผู้เช่า</option>
            <option v-for="tenant in tenantList" :key="tenant.id" :value="tenant.name">
              {{ tenant.name }}
            </option>
          </select>
        </div>
        <!-- ช่วงวันที่เข้าพัก -->
        <div class="flex mt-3">
          <div class="w-[130px] place-content-center">
            <p class="text-ddgray">ช่วงวันที่เข้าพัก<span class="text-red">*</span></p>
          </div>
          <input
            placeholder="เลือกวันที่เข้าพัก"
            class="border border-line w-[300px] h-[47px] px-4 py-2"
            v-model="amount"
          />
        </div>
        <!-- ปุ่มเพิ่มผู้พัก -->
        <div class="flex justify-center mt-4">
          <button class="rounded-md px-6 py-3 bg-lgreen border-[1px] border-tGreen">
            <p>+ <span class="text-black font-normal">เพิ่มผู้พัก</span></p>
          </button>
        </div>
      </div>

      <!-- ข้อมูลผู้พักที่ถูกเพิ่ม section -->
      <div class="relative rounded-md mb-8 p-4 mt-3 bg-lgreen">
        <SVGBin class="absolute top-3 right-3 w-6 h-6 cursor-pointer" />
        <div class="flex">
          <p class="text-ddgray w-[170px]">ชื่อผู้เช่า</p>
          <p>นางเกวลิน วราณพัฒน์</p>
        </div>
        <div class="flex mt-1">
          <p class="text-ddgray w-[170px]">ช่วงวันที่เข้าพัก</p>
          <p>18 เม.ย. 2567 ถึง 30 เม.ย. 2567 (18 วัน)</p>
        </div>
        <div class="flex mt-1">
          <p class="text-ddgray w-[190px]">เอกสารที่เกี่ยวข้อง</p>
          <ul class="list-disc">
            <li>บิลค่าเช่า</li>
          </ul>
        </div>
        <!-- ... -->
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
      <!-- here-->
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// SVG components
import SVGClose from '@/components/SVG/Close.vue'
import SVGBin from '@/components/SVG/Bin.vue'

// Define props
const props = defineProps({
  isVisible: Boolean,
  room: {
    type: Array,
    required: true
  }
})

// Define emits
const emit = defineEmits(['close'])

// Method to close modal by emitting the 'close' event
function closeModal() {
  emit('close')
}
</script>
