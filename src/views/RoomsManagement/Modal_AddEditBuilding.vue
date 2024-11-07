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
        <h2 class="text-xl font-semibold">เพิ่มและแก้ไขตึก</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-800">
          <SVGClose class="w-32px h-32px" />
        </button>
      </div>
      <hr class="border-spacing-2 border-line mb-6" />
      <!-- Table -->
      <table class="table-auto border border-collapse border-tgray w-full">
        <thead class="bg-gray-100">
          <tr class="text-left border border-tgray">
            <th class="p-2 border border-tgray"></th>
            <th class="p-2 border border-tgray">ชื่อตึก<span class="text-red">*</span></th>
            <th class="p-2 border border-tgray">จำนวนห้อง<span class="text-red">*</span></th>
            <th class="p-2 border border-tgray">จำนวนชั้น<span class="text-red">*</span></th>
            <th class="p-2 border border-tgray"></th>
            <th class="p-2 border border-tgray"></th>
            <th class="p-2 border border-tgray"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border border-tgray" v-for="(row, index) in rows" :key="index">
            <td class="p-2 border border-tgray">{{ index + 1 }}</td>

            <!-- Toggle between display text and input based on isEditing -->
            <!-- ชื่อตึก -->
            <td class="p-2 border border-tgray">
              <template v-if="row.isEditing">
                <input v-model="row.buildingName" class="w-full border rounded px-1" />
              </template>
              <template v-else>{{ row.buildingName }}</template>
            </td>
            <!-- จำนวนห้อง -->
            <td class="p-2 border border-tgray">
              <template v-if="row.isEditing">
                <input type="number" v-model="row.roomCount" class="w-full border rounded px-1" />
              </template>
              <template v-else>{{ row.roomCount }}</template>
            </td>
            <!-- จำนวนชั้น -->
            <td class="p-2 border border-tgray">
              <template v-if="row.isEditing">
                <input type="number" v-model="row.floorCount" class="w-full border rounded px-1" />
              </template>
              <template v-else>{{ row.floorCount }}</template>
            </td>
            <!-- Edit Buttons -->
            <td class="p-2 border border-tgray cursor-pointer" @click="toggleEdit(index)">
              <SVGEdit v-if="!row.isEditing" />
              <button type="button" v-else class="text-blue-500" @click="saveEdit(index)">
                บันทึก
              </button>
            </td>
            <!-- Delete Button -->
            <td class="p-2 border border-tgray cursor-pointer">
              <SVGBin @click="confirmDelete(index)" />
            </td>
            <td class="p-2 border border-tgray cursor-pointer">
              <SVGUpDown @click="swapRows(index)" />
            </td>
          </tr>
          <!-- Add new row -->
          <tr class="border border-tgray">
            <td class="p-2 border border-tgray"></td>
            <td class="p-2 border border-tgray">
              <input
                v-model="newBuilding.buildingName"
                placeholder="พิมพ์ชื่อตึก"
                class="outline-none"
              />
            </td>
            <td class="p-2 border border-tgray w-6">
              <input
                type="number"
                v-model="newBuilding.roomCount"
                placeholder="พิมพ์"
                class="w-14 outline-none"
              />
            </td>
            <td class="p-2 border border-tgray w-6">
              <input
                type="number"
                v-model="newBuilding.floorCount"
                placeholder="พิมพ์"
                class="w-14 outline-none"
              />
            </td>
            <td
              class="p-2 border border-white underline cursor-pointer"
              colspan="3"
              @click="addRow"
            >
              คลิกเพื่อเพิ่ม
            </td>
          </tr>
        </tbody>
      </table>

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
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'

// SVG
import SVGClose from '@/components/SVG/Close.vue'
import SVGEdit from '@/components/SVG/Edit.vue'
import SVGBin from '@/components/SVG/Bin.vue'
import SVGUpDown from '@/components/SVG/UpDown.vue'

const props = defineProps({
  isVisible: Boolean
})

// New row data
const newBuilding = ref({
  buildingName: '',
  roomCount: '',
  floorCount: ''
})

// Method to add a row
function addRow() {
  if (
    newBuilding.value.buildingName &&
    newBuilding.value.roomCount &&
    newBuilding.value.floorCount
  ) {
    rows.value.push({ ...newBuilding.value })
    newBuilding.value = { buildingName: '', roomCount: '', floorCount: '' } // Reset the form
  } else {
    alert('กรุณากรอกข้อมูลทั้งหมด')
  }
}
// Existing rows
const rows = ref([
  { id: 1, buildingName: 'ตึกเก่า', roomCount: 50, floorCount: 5, isEditing: false },
  { id: 2, buildingName: 'ตึกใหม่', roomCount: 80, floorCount: 8, isEditing: false }
])

// Toggle editing mode for a row
function toggleEdit(index) {
  rows.value[index].isEditing = !rows.value[index].isEditing
}

// Save changes and exit editing mode
function saveEdit(index) {
  rows.value[index].isEditing = false
}

// Define emits
const emit = defineEmits(['close'])

// Close modal method
function closeModal() {
  emit('close')
}

// Remove the row at the specified index
function deleteRow(index) {
  rows.value.splice(index, 1)
}

// Swap row with the next one
function swapRows(index) {
  if (index < rows.value.length - 1) {
    // Swap current row with the row below it
    const temp = rows.value[index]
    rows.value[index] = rows.value[index + 1]
    rows.value[index + 1] = temp
  } else if (index > 0) {
    // If last row, swap with the row above
    const temp = rows.value[index]
    rows.value[index] = rows.value[index - 1]
    rows.value[index - 1] = temp
  }
}

function confirmDelete(index) {
  const confirmDelete = window.confirm('คุณแน่ใจว่าจะลบข้อมูลนี้?')
  if (confirmDelete) {
    // หากผู้ใช้ยืนยันการลบ
    rows.value.splice(index, 1)
  }
}
</script>
