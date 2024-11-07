<template>
  <div>
    <AdminsAppbar />
    <AdminsMenuComponent />

    <!-- Section search date -->
    <div class="text-center mt-[1%]">
      <!-- Section select time -->
      <div class="flex items-center justify-center gap-4">
        <p class="text-2xl">เลือกรอบบิล ปี</p>
        <select
          id="year"
          v-model="selectedYear"
          class="w-[157px] h-[40px] p-2 border border-dgreen bg-lgreen rounded-lg"
        >
          <option :value="currentYear">{{ currentYear }}</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>

        <p class="py-[1%] text-2xl">เดือน</p>
        <select
          id="month"
          v-model="selectedMonth"
          class="w-[157px] h-[40px] p-2 border border-dgreen bg-lgreen rounded-lg"
        ></select>
      </div>

      <!-- Section select day -->
      <div class="flex items-center justify-center gap-4">
        <p class="text-2xl">เลือกช่วงเวลาที่แสดง ตั้งแต่วันที่</p>
        <select
          id="year"
          v-model="selectedYear"
          class="w-[157px] h-[40px] p-2 border border-dgreen rounded-lg"
        >
          <option :value="currentYear">{{ currentYear }}</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>

        <p class="py-[o.5%] text-2xl">ถึงวันที่</p>
        <select
          id="month"
          v-model="selectedMonth"
          class="w-[157px] h-[40px] p-2 border border-dgreen rounded-lg"
        ></select>
      </div>
    </div>

    <!-- Section add button -->
    <div class="default-padding-y-10">
      <div class="flex px-[10%] mt-[2%] max-w-[1728px] items-center justify-center relative">
        <!-- ข้อความอยู่ตรงกลางหน้าจอ -->
        <p class="justify-center text-center text-[32px] w-full">
          รายรับ-รายจ่ายเดือน <span class="font-bold">มีนาคม 2567</span>
        </p>
        <!-- ปุ่มเพิ่มรายรับ ชิดขวา -->
        <button
          class="relative rounded-md w-[210px] h-[63px] bg-[#def6da] border border-[#89a784]"
          @click="showModal = true"
        >
          <p class="text-cGreen">+ <span class="text-black font-normal">เพิ่มรายรับ-จ่าย</span></p>
        </button>
        <!-- เรียกใช้ Modal Component -->
        <ModalAddIncomeExpense v-if="showModal" :isVisible="showModal" @close="showModal = false" />
      </div>
    </div>

    <!-- Section table -->
    <div
      class="max-w-[1728px] h-[710px] flex-shrink-0 rounded-lg border border-tline bg-white overflow-auto place-self-center mt-[1.5%]"
    >
      <table class="w-[auto] border-collapse text-center">
        <!-- table head -->
        <thead>
          <tr class="bg-white text-tline font-semibold">
            <th class="p-4 border-b border-gray-300 text-left">วันที่</th>
            <th class="border-b border-gray-300 text-left">เลขที่ใบเสร็จ</th>
            <th class="p-4 border-b border-gray-300 text-left">รายละเอียด</th>
            <th class="p-4 border-b border-gray-300">เลขห้อง</th>
            <th class="p-4 border-b border-gray-300">หมวดหมู่</th>
            <th class="border-b border-gray-300">จำนวนเงิน</th>
            <th class="border-b border-gray-300">บันทึกโดย</th>
            <th class="p-4 border-b border-gray-300"></th>
          </tr>
          <!-- table search -->
          <tr class="border-b border-llgray mt-0">
            <th class="py-2 text-left"></th>
            <th class="text-left">
              <input
                type="text"
                class="w-[174px] h-[37px] px-4 border rounded-lg font-normal border-lllgray text-black"
                placeholder="ค้นหาเลขที่"
              />
            </th>
            <th class="py-2 text-left">
              <input
                type="text"
                class="w-[235px] h-[37px] px-4 border rounded-lg font-normal border-lllgray text-black"
                placeholder="ค้นหารายละเอียด"
              />
            </th>
            <th class="px-2">
              <input
                type="text"
                class="w-[105px] h-[37px] px-4 border rounded-lg font-normal border-lllgray text-black"
                placeholder="เลขห้อง"
              />
            </th>
            <th class="px-2">
              <select
                class="w-[auto] h-[37px] px-4 border rounded-lg font-normal border-lllgray text-black"
                v-model="selectedCategory"
              >
                <option value="ทุกหมวด">ทุกหมวด</option>
                <option value="รายรับ">รายรับ</option>
                <option value="รายจ่าย">รายจ่าย</option>
              </select>
            </th>
            <th class="px-2">
              <input
                type="text"
                class="w-[120px] h-[37px] px-4 border rounded-lg font-normal border-lllgray text-black text-right"
                placeholder="จำนวนเงิน"
              />
            </th>
            <th class=""></th>
            <th class="px-4"></th>
          </tr>
        </thead>

        <!-- table detail -->
        <tbody>
          <tr v-for="(row, index) in rows" :key="index" class="border-b border-llgray">
            <td class="p-4 text-left">{{ row.date }}</td>
            <td class="text-left">{{ row.recieptid }}</td>
            <td class="text-left p-4">{{ row.detail }}</td>
            <td class="">{{ row.room }}</td>
            <td
              class=""
              :class="{
                ' text-tGreen': row.category === 'รายรับ',
                ' text-red': row.category === 'รายจ่าย'
              }"
            >
              {{ row.category }}
            </td>
            <td class="px-4 py-2">
              {{ formattedAmount(row.category, row.amount) }}
            </td>
            <td class="p-4 text-left">{{ row.recordedby }}</td>
            <td class="p-2 cursor-pointer" @click="showDeleteModal = true">
              <SCGDelete />
            </td>

            <!-- เรียกใช้ Delete Modal Component -->
            <ModalDelete
              v-if="showDeleteModal"
              :isVisible="showDeleteModal"
              @close="showDeleteModal = false"
            />
          </tr>

          <tr class="bg-gray">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="text-right p-4 font-bold">รวม</td>
            <td class="font-bold">{{ totalAmount }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import AdminsAppbar from '@/components/admins/AppbarComponent.vue'
import AdminsMenuComponent from '@/components/admins/MenuComponent.vue'

import SCGDelete from '@/components/SVG/Delete.vue'
// Modal Components
import ModalAddIncomeExpense from '@/views/IncomeExpense/Modal_AddIncomeExpense.vue'
import ModalDelete from '@/views/IncomeExpense/Modal_Delete.vue'

const showModal = ref(false)
const showDeleteModal = ref(false)

const selectedCategory = ref('ทุกหมวด')
const rows = ref([
  {
    date: '14 ก.พ. 2567',
    recieptid: 'RC202402000008 ',
    detail: 'ค่าเช่าเดือน กุมภาพันธ 2567',
    room: 'B203',
    category: 'รายรับ',
    amount: '5,790.00',
    recordedby: 'ธัญญฉัตร์',
    delete: ''
  },
  {
    date: '14 ก.พ. 2567',
    recieptid: ' ',
    detail: 'ฝักบัวห้อง A107',
    room: 'B203',
    category: 'รายจ่าย',
    amount: '2,850.00',
    recordedby: 'ธัญญฉัตร์',
    delete: ''
  }
])

// ฟังก์ชันเพื่อเพิ่ม "-" หน้า amount เมื่อเป็นรายจ่าย
function formattedAmount(category, amount) {
  return category === 'รายจ่าย' ? `- ${amount}` : amount
}

// ฟังก์ชันเพื่อคำนวณรวมจำนวนเงิน
const totalAmount = computed(() => {
  const total = rows.value.reduce((acc, row) => {
    console.log(`Current Accumulator: ${acc}`)
    console.log(`Current Row Amount: ${Number(replaceComma(row.amount))}`)

    const result =
      row.category === 'รายจ่าย'
        ? acc - parseFloat(replaceComma(row.amount))
        : acc + parseFloat(replaceComma(row.amount))

    return Number(result.toFixed(2))
  }, 0)

  const formattedTotal = total.toFixed(2)

  const result =
    formattedTotal >= 1000
      ? Number(total).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      : Number(formattedTotal).toFixed(2)

  return result
})

// ฟังก์ชันเพื่อลบ comma ใน amount
const replaceComma = (amount) => {
  return amount.replace(/,/g, '')
}
</script>

<style scoped></style>
