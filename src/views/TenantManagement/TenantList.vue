<template>
  <div>
    <AdminsAppbar />
    <AdminsMenuComponent />
    <div class="text-center mt-[2%] flex gap-2 justify-center">
      <!-- search by name -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="ค้นหาจากชื่อ"
        class="text-center w-[615px] h-[63px] px-4 py-2 border border-mainColor bg-lblue rounded-lg"
      />

      <!-- search button -->
      <button
        @click="search"
        class="flex items-center justify-center gap-2 px-4 py-2 border w-[129px] h-[63px] border-mainColor bg-mainColor text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <SVGSearch class="text-white" /> ค้นหา
      </button>

      <!-- reset data button -->
      <button
        @click="reset"
        class="flex items-center justify-center gap-2 px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        <SVGReset /> รีเซ็ตข้อมูล
      </button>

      <button
        class="rounded-md px-6 py-3 w-[210px] h-[63px]"
        style="background-color: #def6da; border: 1px #89a784 solid"
        @click="showModal = true"
      >
        <p class="text-cGreen">+ <span class="text-black font-normal">เพิ่มผู้เช่า</span></p>
      </button>
      <!-- เรียกใช้ Modal Component -->
      <ModalAddTanant v-if="showModal" :isVisible="showModal" @close="showModal = false" />
    </div>
    <!-- Section list -->
    <div
      class="w-[auto] h-[710px] flex-shrink-0 rounded-lg border border-tline bg-white overflow-auto place-self-center mt-[1.5%]"
    >
      <table class="w-[1130px] border-collapse text-center">
        <!-- table head -->
        <thead>
          <tr class="bg-white text-tline font-semibold">
            <th class="p-4 border-b border-gray-300">ID</th>
            <th class="border-b border-gray-300 text-left">ชื่อ-นามสกุลผู้เช่า</th>
            <th class="p-4 border-b border-gray-300">เบอร์โทร</th>
            <th class="p-4 border-b border-gray-300">ห้อง</th>
            <th class="p-4 border-b border-gray-300">รถยนต์</th>
            <th class="p-4 border-b border-gray-300">มอไซต์</th>
            <th class="p-4 border-b border-gray-300">เชื่อมต่อระบบ</th>
            <th class="p-4 border-b border-gray-300">สถานะ</th>
            <th class="p-4 border-b border-gray-300">การอนุมัติ</th>
            <th class="p-4 border-b border-gray-300"></th>
            <th class="p-4 border-b border-gray-300"></th>
          </tr>
        </thead>
        <!-- table detail -->
        <tbody>
          <tr v-for="(row, index) in rows" :key="index" class="border-b border-llgray">
            <td class="p-4">{{ row.id }}</td>
            <td class="text-left">{{ row.fullName }}</td>
            <td class="">{{ row.phone }}</td>
            <td class="">{{ row.room }}</td>
            <td class="">{{ row.car }}</td>
            <td class="">{{ row.motorcycle }}</td>
            <td class="">{{ row.system }}</td>
            <td class="">
              <div
                class="px-4 py-1 rounded-lg"
                :class="{
                  'bg-lgreen text-tGreen': row.status === 'อนุมัติ',
                  'bg-lred text-red': row.status === 'ไม่อนุมัติ',
                  'bg-llgray text-dgray': row.status === 'รออนุมัติ'
                }"
              >
                {{ row.status }}
              </div>
            </td>

            <td class="py-3 px-1 flex gap-1 justify-center"><SVGApprove /><SVGNotApprove /></td>
            <td class="py-4 px-2 cursor-pointer" @click="showTenantDetail = true">ดู</td>
            <!-- เรียกใช้ Modal Component -->
            <ModalTenantDetail
              v-if="showTenantDetail"
              :isVisible="showTenantDetail"
              @close="showTenantDetail = false"
            />
            <td class="py-4 px-2">
              <button
                class="underline underline-offset-2 px-0 py-1 text-black bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                แก้ไข
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdminsAppbar from '@/components/admins/AppbarComponent.vue'
import AdminsMenuComponent from '@/components/admins/MenuComponent.vue'
import SVGSearch from '@/components/SVG/Search.vue'
import SVGReset from '@/components/SVG/Reset.vue'
import SVGApprove from '@/components/SVG/Approve.vue'
import SVGNotApprove from '@/components/SVG/NotApprove.vue'

// Modal Components
import ModalAddTanant from '@/views/TenantManagement/Modal_AddTenant.vue'
import ModalTenantDetail from '@/views/TenantManagement/Modal_TenantDetail.vue'

const showModal = ref(false)
const showTenantDetail = ref(false)

const rows = ref([
  {
    id: 1,
    fullName: 'นายสมชาย ใจดี',
    phone: '081-234-5678',
    room: 'A101',
    car: '1',
    motorcycle: '1',
    system: '01 ธ.ค. 2566',
    status: 'อนุมัติ',
    approval: 'อนุมัติแล้ว'
  },
  {
    id: 2,
    fullName: 'นายชื่อจริง นามสกุล',
    phone: '081-234-5678',
    room: 'A102',
    car: '0',
    motorcycle: '1',
    system: '01 ธ.ค. 2566',
    status: 'รออนุมัติ',
    approval: 'อนุมัติแล้ว'
  },
  {
    id: 3,
    fullName: 'ชื่อจริง นามสกุล2',
    phone: '081-234-5678',
    room: 'A103',
    car: '1',
    motorcycle: '0',
    system: '01 ธ.ค. 2566',
    status: 'ไม่อนุมัติ',
    approval: 'อนุมัติแล้ว'
  }
])
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
