<template>
  <div>
    <AdminsAppbar />
    <AdminsMenuComponent />

    <!-- Section search date -->
    <div class="text-center mt-[1%]">
      <!-- Section select time -->
      <div class="flex items-center justify-center gap-4">
        <p class="text-2xl">เลือกปี/เดือน ปี</p>
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
      <div class="flex items-end justify-between px-[10%] mt-[2%]">
        <div class="flex flex-col">
          <p class="font-bold text-2xl">ข้อมูลวันที่: 18 กรกฎาคม 2567</p>
          <h4 class="font-normal">คลิกเลขห้องเพื่อดู/แก้ไขข้อมูลห้อง</h4>
        </div>

        <!-- Add button -->
        <button
          class="rounded-md px-6 py-3"
          style="background-color: #def6da; border: 1px #89a784 solid"
          @click="showModalAddEditBuilting = true"
        >
          <p class="text-cGreen">+ <span class="text-black font-normal">เพิ่ม/แก้ไขตึก</span></p>
        </button>

        <!-- เรียกใช้ Modal Component -->
        <ModalAddEditBuilding
          v-if="showModalAddEditBuilting"
          :isVisible="showModalAddEditBuilting"
          @close="showModalAddEditBuilting = false"
        />
      </div>
    </div>
    <div class="default-padding-y-10">
      <div class="px-[10%] mt-1 mb-[2%]"></div>

      <!-- Section building -->
      <div class="px-[10%] mt-1 mb-[2%]">
        <!-- กรอบ -->
        <div
          v-for="(groups, groupsIndex) in groupRooms"
          :key="groupsIndex"
          class="mt-[-1%] mb-[3%] p-[2%] bg-lpurple border border-secondColor rounded-md"
        >
          <!-- ในกรอบ -->
          <div class="flex justify-between">
            <div class="flex gap-3">
              <h2
                class="text-center font-[700] text-xl leading-10"
                style="font-size: 20px; letter-spacing: -0.01em"
              >
                {{ groups[0].buildingName }}
              </h2>

              <!-- แสดงจำนวนพัดลม จำนวนห้องแอร์ -->
              <button class="rounded-md bg-lgray flex gap-2 items-center px-3">
                <SVGFan class="w-[30px] h-[30px]" />
                {{ normalTotalRooms }} ห้องพัดลม
              </button>
              <button class="rounded-md bg-lgray flex gap-2 items-center px-3">
                <SVGAir class="w-[25px] h-[25px]" />
                {{ airTotalRooms }} ห้องแอร์
              </button>
            </div>

            <p class="text-center font-[400] text-xl leading-10">
              ห้องว่าง {{ emptyTotal(groups) }} ห้อง
            </p>
          </div>
          <div class="flex flex-wrap gap-2 py-[2%]">
            <div
              v-for="(item, index) in groups"
              :key="index"
              class="rounded-md p-5 w-[102px] h-[78px] flex justify-center items-center"
              @click="setRoom(item)"
              :class="{
                'bg-secondColor text-white': item.roomStatus === 'used',
                'bg-lgray text-black': item.roomStatus !== 'used'
              }"
            >
              <p>{{ item.code }}</p>
            </div>
            <!-- เรียกใช้ Modal Component -->
            <ModalRoomDetail
              :room="selectedRoom"
              v-if="showModalRoomDetail"
              :isVisible="showModalRoomDetail"
              @close="showModalRoomDetail = false"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import AdminsAppbar from '@/components/admins/AppbarComponent.vue'
import AdminsMenuComponent from '@/components/admins/MenuComponent.vue'

import SVGFan from '@/components/SVG/Fan.vue'
import SVGAir from '@/components/SVG/Air.vue'

// Modal ModalAddEditBuilding
import ModalAddEditBuilding from '@/views/RoomsManagement/Modal_AddEditBuilding.vue'
const showModalAddEditBuilting = ref(false)

// Modal ModalRoomDetail
import ModalRoomDetail from '@/views/RoomsManagement/Modal_RoomDetail.vue'
const showModalRoomDetail = ref(false)
const selectedRoom = ref('')

const totalRooms = ref(34)
const alreadyRentRooms = ref(32)
const emptyRooms = ref(2)
const totalRequest = ref(23)
const leaveInMonth = ref(3)

const normalTotalRooms = ref(16)
const airTotalRooms = ref(5)

const totalEmpty = ref(2)

const groupRooms = ref(null)

const rooms = ref([
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '01',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '02',
    roomStatus: 'unused'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '03',
    roomStatus: 'unused'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '04',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '05',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '06',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '07',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '1',
    number: '08',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '01',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '02',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '03',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '04',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '05',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '06',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '07',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกเก่า',
    buildingType: 'A',
    floor: '2',
    number: '08',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '01',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '02',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '03',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '04',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '05',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '06',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '07',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '1',
    number: '08',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '01',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '02',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '03',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '04',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '05',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '06',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '07',
    roomStatus: 'used'
  },
  {
    buildingName: 'ตึกใหม่',
    buildingType: 'B',
    floor: '2',
    number: '08',
    roomStatus: 'unused'
  }
])

function setRoom(room) {
  selectedRoom.value = room
  showModalRoomDetail.value = true
}

const groupRoomsFunc = async (items) => {
  // Step 1: Group rooms by buildingType
  const groupedRooms = await items?.value.reduce((acc, item) => {
    const { buildingType } = item

    if (!acc[buildingType]) {
      acc[buildingType] = []
    }

    //   console.log("item", item.floor + item.number);
    item.code = item.buildingType + item.floor + item.number
    acc[buildingType].push(item)
    return acc
  }, {})

  console.log('groupedRooms', groupedRooms)

  // Step 2: Sort keys alphabetically
  const sortedKeys = await sortFunc(groupedRooms)
  console.log('sortedKeys', sortedKeys)

  // Step 3: Create an indexed array based on sorted keys
  const indexedGroups = sortedKeys.map((key) => {
    console.log('key', key)
    groupedRooms[key].sort((a, b) => a.code.localeCompare(b.code))
    return groupedRooms[key]
  })

  //   const indexedGroups = await groupCompare(sortedKeys);

  console.log('indexedGroups', indexedGroups)

  groupRooms.value = indexedGroups
}

const sortFunc = async (items) => {
  const sortedKeys = await Object.keys(items).sort()
  return sortedKeys
}

const groupCompare = async (groups) => {
  console.log('groups', groups)
  const indexedGroups = await groups.map((key) => {
    console.log('key', key)
    groupedRooms[key].sort((a, b) => a.code.localeCompare(b.code))
    return groupedRooms[key]
  })

  return indexedGroups
}

const emptyTotal = (groups) => {
  //   console.log("emptyTotal", groups);
  const unusedCount = groups.filter((room) => room.roomStatus === 'unused').length
  return unusedCount
}

groupRoomsFunc(rooms)
</script>

<style>
.card-dash .title {
  font-family: Sarabun;
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
  letter-spacing: 0.01em;
  text-align: left;
}

.card-dash .text {
  font-family: Open Sans;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.13px;
  letter-spacing: 0.01em;
  text-align: left;
}
.card-dash .text span {
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #949494;
  padding-left: 20px;
}
</style>
