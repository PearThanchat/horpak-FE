<template>
  <div class="default-padding-y-10" style="background-color: #00000007">
    <div class="flex justify-center items-center gap-2 text-center">
      <template v-for="(item, index) in menuList" :key="index">
        <router-link :to="{ name: item.route?.name }">
          <div
            class="flex flex-col items-center min-w-[100px] min-h-[85px] mt-1 py-[1.5%] cursor-pointer hover:text-mainColor transition duration-300 ease-in-out transform"
          >
            <component
              v-if="item?.component"
              :is="item?.component"
              class="h-[50px] w-[50px] object-fit hover:text-cGreen"
              height="100%"
              width="100%"
              :fill="isActive(item.route?.name) ? mainColor : null"
              :hover="hoverColor"
            />
            <p
              class="mt-1 font-normal text-[16px]"
              :class="{ 'text-mainColor': isActive(item.route?.name) }"
            >
              {{ item.name }}
            </p>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import SVGApartment from '@/components/SVG/Apartment.vue'
import SVGBilling from '@/components/SVG/Billing.vue'
import SVGContact from '@/components/SVG/Contact.vue'
import SVGElectric from '@/components/SVG/Electric.vue'
import SVGPayment from '@/components/SVG/Payment.vue'
import SVGReport from '@/components/SVG/Report.vue'
import SVGRoom from '@/components/SVG/Room.vue'
import SVGSetting from '@/components/SVG/Setting.vue'
import SVGStaff from '@/components/SVG/Staff.vue'
import SVGTalk from '@/components/SVG/Talk.vue'
import SVGTenant from '@/components/SVG/Tenant.vue'

const route = useRoute()

const mainColor = '#2253C8'
const hoverColor = '#32B900'

const isActive = (name) => {
  return route.name === name
}

const menuList = ref([
  {
    name: 'ภาพรวมกิจการ',
    component: SVGApartment
  },
  {
    name: 'ห้องพัก',
    component: SVGRoom,
    route: {
      name: 'RoomsManagement'
    }
  },
  {
    name: 'มิเตอร์น้ำ-ไฟ',
    component: SVGElectric
  },
  {
    name: 'ออกบิล',
    component: SVGBilling
  },
  {
    name: 'ผู้เช่า',
    component: SVGTenant,
    route: {
      name: 'TenantManagement'
    }
  },
  {
    name: 'บุคลากร',
    component: SVGStaff
  },
  {
    name: 'รายรับ-จ่าย',
    component: SVGPayment,
    route: {
      name: 'IncomeExpense'
    }
  },
  {
    name: 'รายงาน',
    component: SVGReport
  },
  {
    name: 'สัญญาเช่า',
    component: SVGContact,
    route: {
      name: 'LeaseAgreement'
    }
  },
  {
    name: 'คำร้อง',
    component: SVGTalk
  },
  {
    name: 'ตั้งค่า',
    component: SVGSetting
  }
])
</script>

<style scoped>
/* Add your scoped styles here */
</style>
