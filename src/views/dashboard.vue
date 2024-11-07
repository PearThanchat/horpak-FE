<template>
  <div>
    <AdminsAppbar />
    <AdminsMenuComponent />
    <div id="roomMangement" class="default-padding-y-10">
      <div class="grid grid-cols-5 gap-4 px-[10%] my-[2%] overflow-x-auto">
        <div
          class="grid items-center bg-lblue hover:bg-lpurple rounded-md py-3 px-6 card-dash w-full"
        >
          <p class="title">จำนวนห้องทั้งหมด</p>
          <p class="text">
            {{ totalRooms }}
            <span>ห้อง</span>
          </p>
        </div>
        <div
          class="grid items-center bg-lblue hover:bg-lpurple rounded-md py-3 px-6 card-dash w-full"
        >
          <p class="title">ห้องที่ถูกเช่า</p>
          <p class="text">
            {{ alreadyRentRooms }}
            <span>ห้อง</span>
          </p>
        </div>
        <div
          class="grid items-center bg-lblue hover:bg-lpurple rounded-md py-3 px-6 card-dash w-full"
        >
          <p class="title">ห้องว่างวันนี้</p>
          <p class="text">
            {{ emptyRooms }}
            <span>ห้อง</span>
          </p>
        </div>
        <div
          class="grid items-center bg-lblue hover:bg-lpurple rounded-md py-3 px-6 card-dash w-full"
        >
          <p class="title">คำร้องรอดำเนินการ</p>
          <p class="text">
            {{ totalRequest }}
            <span>เรื่อง</span>
          </p>
        </div>
        <div
          class="grid items-center bg-lblue hover:bg-lpurple rounded-md py-3 px-6 card-dash w-full"
        >
          <p class="title">ย้ายออกเดือนนี้</p>
          <p class="text">
            {{ leaveInMonth }}
            <span>ห้อง</span>
          </p>
        </div>
      </div>
    </div>
    <div class="default-padding-y-10">
      <div class="flex items-end justify-between px-[10%] mt-[2%]">
        <p>ข้อมูลวันที่: 18 กรกรฎาคม 2567</p>
        <button
          class="rounded-md px-6 py-3"
          style="background-color: #def6da; border: 1px #89a784 solid"
        >
          <p class="text-cGreen">+ <span class="text-black">เพิ่ม/แก้ไขตึก</span></p>
        </button>
      </div>
    </div>
    <div class="default-padding-y-10">
      <div class="px-[10%] mt-1 mb-[2%]">
        <h4>คลิกเลขห้องเพื่อดู/แก้ไขข้อมูลห้อง</h4>
      </div>
      <div class="px-[10%] mt-1 mb-[2%]">
        <div
          v-for="(groups, groupsIndex) in groupRooms"
          :key="groupsIndex"
          class="my-[2%] p-[2%] bg-lpurple border border-secondColor rounded-md"
        >
          <div class="flex justify-between">
            <div class="flex gap-2">
              <h2
                class="text-center font-[700] leading-10"
                style="font-size: 20px; letter-spacing: -0.01em"
              >
                {{ groups[0].buildingName }}
              </h2>
              <button class="px-5 py-0 rounded-md bg-lgray">
                {{ normalTotalRooms }} ห้องพัดลม
              </button>
              <button class="px-5 py-0 rounded-md bg-lgray">{{ airTotalRooms }} ห้องแอร์</button>
            </div>

            <p
              style="
                font-family: Noto Sans Thai;
                font-size: 20px;
                font-weight: 400;
                line-height: 30.22px;
                letter-spacing: -0.01em;
                text-align: center;
              "
            >
              ห้องว่าง {{ emptyTotal(groups) }} ห้อง
            </p>
          </div>
          <div class="grid grid-cols-5 gap-2 py-[2%]">
            <div
              v-for="(item, index) in groups"
              :key="index"
              class="rounded-md p-5"
              :class="item.roomStatus === 'used' ? 'bg-secondColor' : 'bg-lgray'"
            >
              <!-- <p>{{ item.buildingType }}{{ item.floor }}{{ item.number }}</p> -->
              <p>{{ item.code }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
