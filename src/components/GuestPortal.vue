<script setup lang="ts">
import { ref } from 'vue'
import { MapPinIcon } from '@heroicons/vue/24/outline'
import type {GuestInfo, RsvpChoice, Location, ScheduleEvent} from '@/types'

const guestInfo = ref<GuestInfo>({
  guest1: {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "(555) 123-4567",
    address: "123 Main St, New York, NY 10001"
  },
  guest2: {
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "(555) 987-6543",
    address: "123 Main St, New York, NY 10001"
  },
  hotel: {
    name: "The Leeway",
    address: "5191 NY-28, Mt Tremper, NY 12457",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Leeway+5191+NY-28+Mt+Tremper+NY+12457",
    roommates: [
      {
        name: "Alex Johnson",
        email: "alex.j@email.com",
        phone: "(555) 234-5678"
      },
      {
        name: "Sam Wilson",
        email: "sam.w@email.com",
        phone: "(555) 345-6789"
      }
    ],
    floorPlanUrl: "https://images.squarespace-cdn.com/content/v1/5c6d5c2c3560c36d9d432d8e/1550694886263-YRZQR69R6HVPNQ5ZXVZ4/Leeway+Floor+Plan.jpg"
  }
})

// const nightOrder = ['friday', 'saturday', 'sunday', 'monday'] as const
//
// type NightSelectionState = {
//   friday: boolean
//   saturday: boolean
//   sunday: boolean
//   monday: boolean
// }
//
// const selectedNights = ref<NightSelectionState>({
//   friday: false,
//   saturday: false,
//   sunday: false,
//   monday: false
// })
//
// // Compute the first selected night's index
// const firstSelectedNightIndex = computed(() => {
//   return nightOrder.findIndex(night => selectedNights.value[night])
// })
//
// // Compute the last selected night's index
// const lastSelectedNightIndex = computed(() => {
//   return nightOrder.findIndex(night => selectedNights.value[night])
// })
//
// // Compute whether a night should be disabled
// const isNightDisabled = computed(() => {
//   return (night: keyof NightSelection) => {
//     const nightIndex = nightOrder.indexOf(night)
//
//     // If no nights are selected, all nights are available
//     if (firstSelectedNightIndex.value === -1) return false
//
//     // If this night is already selected, it's not disabled
//     if (selectedNights.value[night]) return false
//
//     // If this night is before the first selected night, it's disabled
//     if (nightIndex < firstSelectedNightIndex.value) return true
//
//     // If this night is after the last selected night and not adjacent, it's disabled
//     if (nightIndex > lastSelectedNightIndex.value + 1) return true
//
//     // If this night creates a gap between selected nights, it's disabled
//     if (nightIndex > firstSelectedNightIndex.value) {
//       // Check if all nights between first selected and this night are selected
//       for (let i = firstSelectedNightIndex.value; i < nightIndex; i++) {
//         if (!selectedNights.value[nightOrder[i]]) return true
//       }
//     }
//
//     return false
//   }
// })
//
// const handleNightSelection = (night: keyof NightSelection) => {
//   const nightIndex = nightOrder.indexOf(night)
//
//   if (!selectedNights.value[night]) {
//     // When deselecting a night
//     // If this night is between two selected nights, deselect all nights after it
//     if (nightIndex < lastSelectedNightIndex.value) {
//       for (let i = nightIndex; i <= lastSelectedNightIndex.value; i++) {
//         selectedNights.value[nightOrder[i]] = false
//       }
//     } else {
//       // Just deselect this night
//       selectedNights.value[night] = false
//     }
//   } else {
//     // When selecting a night
//     // Only allow selection if the night is not disabled
//     if (!isNightDisabled.value(night)) {
//       selectedNights.value[night] = true
//     } else {
//       // Prevent the selection if the night is disabled
//       selectedNights.value[night] = false
//     }
//   }
// }

const schedule: {
    day: string
    events: ScheduleEvent[]
}[] = [
  {
    day: "Friday",
    events: [
      { 
        time: "4:30 PM", 
        description: "Rehearsal",
        location: {
          name: "The Leeway",
          address: "5191 NY-28, Mt Tremper, NY 12457",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Leeway+5191+NY-28+Mt+Tremper+NY+12457",
          embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.0583493793174!2d-74.27392772346277!3d42.13835597124088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc5c3b9b3c8b67%3A0x7ed87ea21c6c7c15!2sThe%20Leeway!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
        }
      },
      { 
        time: "7:00 PM", 
        description: "Welcome Drinks",
        location: {
          name: "Phoenician Steakhouse",
          address: "10 Main St, Phoenicia, NY 12464",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Phoenician+Steakhouse+10+Main+St+Phoenicia+NY+12464",
          embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.5876493793174!2d-74.31392772346277!3d42.08335597124088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc5c3b9b3c8b67%3A0x7ed87ea21c6c7c15!2sPhoenician%20Steakhouse!5e0!3m2!1sen!2sus!4v1709901234567!5m2!1sen!2sus"
        }
      }
    ]
  },
  {
    day: "Saturday",
    events: [
      { time: "3:00 PM", description: "Wedding Ceremony" },
      { time: "4:00 PM", description: "Cocktail Hour" },
      { time: "5:00 PM", description: "Reception" }
    ]
  },
  {
    day: "Sunday",
    events: [
      { time: "10:00 AM", description: "Farewell Brunch" }
    ]
  },
  {
    day: "Monday",
    events: [
      { time: "12:00 PM", description: "Woodstock bar crawl" }
    ]
  }
]

const showEditModal = ref(false)
const showRsvpModal = ref(false)
const showLocationModal = ref(false)
const selectedLocation = ref<Location | null>(null)
const editingGuest = ref<'guest1' | 'guest2' | null>(null)
const editingGuestData = ref<GuestInfo['guest1']>({
  name: '',
  email: '',
  phone: '',
  address: ''
})
const rsvpSubmitted = ref(false)
const rsvpChoice = ref<RsvpChoice>('')
const customBudget = ref('')

const openEditModal = (guest: 'guest1' | 'guest2') => {
  editingGuest.value = guest
  editingGuestData.value = { ...guestInfo.value[guest] }
  showEditModal.value = true
}

const openLocationModal = (location: Location) => {
  selectedLocation.value = location
  showLocationModal.value = true
}

const saveGuestInfo = () => {
  if (editingGuest.value) {
    guestInfo.value[editingGuest.value] = { ...editingGuestData.value }
    showEditModal.value = false
  }
}

const submitRsvp = () => {
  rsvpSubmitted.value = true
  showRsvpModal.value = false
}

// const totalCost = computed(() => {
//   return rsvpChoice.value === 'budget' && customBudget.value ? parseInt(customBudget.value) : 450
// })
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <!-- Hero Image -->
    <div class="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
      <img 
        src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3"
        alt="Wedding couple"
        class="w-full h-full object-cover opacity-25"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <Card class="mb-8 bg-opacity-95">
        <template #title>
          <h1 class="text-3xl font-bold text-gray-900">
            Welcome, {{ guestInfo.guest1.name }} & {{ guestInfo.guest2.name }}!
          </h1>
        </template>
        
        <template #content>
          <!-- Guest Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Your Information</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Guest 1 Information -->
              <Card class="bg-gray-50">
                <template #title>
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">{{ guestInfo.guest1.name }}</h3>
                    <Button
                      icon="pi pi-pencil"
                      text
                      rounded
                      @click="openEditModal('guest1')"
                    />
                  </div>
                </template>
                <template #content>
                  <div class="space-y-2">
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Email:</span> {{ guestInfo.guest1.email }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Phone:</span> {{ guestInfo.guest1.phone }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Address:</span> {{ guestInfo.guest1.address }}
                    </p>
                  </div>
                </template>
              </Card>

              <!-- Guest 2 Information -->
              <Card class="bg-gray-50">
                <template #title>
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-medium text-gray-900">{{ guestInfo.guest2.name }}</h3>
                    <Button
                      icon="pi pi-pencil"
                      text
                      rounded
                      @click="openEditModal('guest2')"
                    />
                  </div>
                </template>
                <template #content>
                  <div class="space-y-2">
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Email:</span> {{ guestInfo.guest2.email }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Phone:</span> {{ guestInfo.guest2.phone }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <span class="font-medium">Address:</span> {{ guestInfo.guest2.address }}
                    </p>
                  </div>
                </template>
              </Card>
            </div>
          </div>

          <!-- Schedule -->
          <div class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Weekend Schedule</h2>
            <div class="space-y-6">
              <div v-for="day in schedule" :key="day.day" class="bg-gray-50 p-4 rounded-lg">
                <h3 class="font-medium text-gray-900 mb-2">{{ day.day }}</h3>
                <ul class="space-y-2">
                  <li v-for="event in day.events" :key="event.time" class="text-gray-600 flex items-center">
                    <span class="font-medium">{{ event.time }}:</span>
                    <span class="ml-1">{{ event.description }}</span>
                    <button 
                      v-if="event.location"
                      @click="openLocationModal(event.location)"
                      class="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <MapPinIcon class="h-5 w-5" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- RSVP Button -->
          <div v-if="!rsvpSubmitted" class="flex justify-center mb-8">
            <Button
              label="RSVP for Accommodation"
              severity="primary"
              size="large"
              @click="showRsvpModal = true"
            />
          </div>

          <!-- Accommodation Details (shown after RSVP) -->
          <div v-if="rsvpSubmitted" class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Your Accommodation Details</h2>
            <Card class="bg-gray-50">
              <template #content>
                <div class="space-y-4">
                  <div>
                    <h3 class="font-medium text-gray-900">{{ guestInfo.hotel.name }}</h3>
                    <p class="text-gray-600">{{ guestInfo.hotel.address }}</p>
                    <a 
                      :href="guestInfo.hotel.mapUrl" 
                      target="_blank"
                      class="text-primary hover:text-primary-700 mt-2 inline-block"
                    >
                      View on Google Maps
                    </a>
                  </div>

                  <div>
                    <h3 class="font-medium text-gray-900 mb-2">Your Roommates</h3>
                    <div class="space-y-2">
                      <div v-for="roommate in guestInfo.hotel.roommates" :key="roommate.name">
                        <p class="font-medium text-gray-800">{{ roommate.name }}</p>
                        <p class="text-sm text-gray-600">Email: {{ roommate.email }}</p>
                        <p class="text-sm text-gray-600">Phone: {{ roommate.phone }}</p>
                      </div>
                    </div>
                  </div>

<!--                  <div>-->
<!--                    <h3 class="font-medium text-gray-900 mb-2">Your Stay</h3>-->
<!--                    <div class="space-y-2">-->
<!--                      <ul class="mt-1 space-y-1">-->
<!--                        <template v-for="(isSelected, night) in selectedNights" :key="night">-->
<!--                          <li v-if="isSelected" class="text-gray-600 capitalize">-->
<!--                            {{ night }}-->
<!--                          </li>-->
<!--                        </template>-->
<!--                      </ul>-->
<!--                      <div class="mt-4">-->
<!--                        <p class="text-lg font-medium text-gray-900">-->
<!--                          Requested Contribution: ${{ totalCost }}-->
<!--                        </p>-->
<!--                        <p class="text-sm text-gray-600 mt-1">-->
<!--                          To contribute, please venmo Christina at @christinasvenmo-->
<!--                        </p>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Card>
    </div>

    <!-- Edit Modal -->
    <Dialog
      v-model:visible="showEditModal"
      :modal="true"
      :header="`Edit ${editingGuestData.name}'s Information`"
      class="max-w-md"
    >
      <div class="space-y-4">
        <div class="p-float-label">
          <InputText
            id="name"
            v-model="editingGuestData.name"
            class="w-full"
          />
          <label for="name">Name</label>
        </div>
        <div class="p-float-label">
          <InputText
            id="email"
            v-model="editingGuestData.email"
            type="email"
            class="w-full"
          />
          <label for="email">Email</label>
        </div>
        <div class="p-float-label">
          <InputText
            id="phone"
            v-model="editingGuestData.phone"
            type="tel"
            class="w-full"
          />
          <label for="phone">Phone</label>
        </div>
        <div class="p-float-label">
          <Textarea
            id="address"
            v-model="editingGuestData.address"
            rows="2"
            class="w-full"
          />
          <label for="address">Address</label>
        </div>
      </div>
      <template #footer>
        <Button
          label="Cancel"
          text
          @click="showEditModal = false"
        />
        <Button
          label="Save"
          @click="saveGuestInfo"
        />
      </template>
    </Dialog>

    <!-- Location Modal -->
    <Dialog
      v-model:visible="showLocationModal"
      :modal="true"
      :header="selectedLocation?.name"
      class="max-w-2xl"
    >
      <div class="space-y-6">
        <div class="text-center">
          <p class="text-lg text-gray-600 mb-4">{{ selectedLocation?.address }}</p>
          <Button
            label="Open in Google Maps"
            severity="primary"
            target="_blank"
          />
        </div>
        
        <!-- Embedded Google Map -->
        <div class="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            :src="selectedLocation?.embedUrl"
            width="100%"
            height="100%"
            style="border:0;"
            :allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Dialog>

    <!-- RSVP Modal -->
    <Dialog
      v-model:visible="showRsvpModal"
      :modal="true"
      header="Accommodation Details"
      class="max-w-3xl"
    >
      <div class="space-y-6">
        <div>
          <h4 class="text-lg font-medium text-gray-900 mb-2">{{ guestInfo.hotel.name }}</h4>
          <p class="text-gray-600 mb-4">{{ guestInfo.hotel.address }}</p>
          
          <!-- Floor Plan -->
          <div class="mb-4">
            <h4 class="text-lg font-medium text-gray-900 mb-2">Room Floor Plan</h4>
            <img 
              :src="guestInfo.hotel.floorPlanUrl" 
              alt="Room floor plan"
              class="w-full rounded-lg shadow-md"
            />
          </div>

          <!-- Roommates -->
          <div class="mb-6">
            <h4 class="text-lg font-medium text-gray-900 mb-2">Your Roommates</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="roommate in guestInfo.hotel.roommates" :key="roommate.name" class="p-4 bg-gray-50 rounded-lg">
                <p class="font-medium text-gray-900">{{ roommate.name }}</p>
              </div>
            </div>
          </div>

          <!-- Night Selection -->
<!--          <div class="mb-6">-->
<!--            <h4 class="text-lg font-medium text-gray-900 mb-2">Select Your Nights</h4>-->
<!--            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">-->
<!--              <div v-for="(night) in selectedNights" :key="night">-->
<!--                <label :for="'modal-' + night" class="night-selection-label">-->
<!--                  <Checkbox-->
<!--                    :id="'modal-' + night"-->
<!--                    v-model="selectedNights[night]"-->
<!--                    :binary="true"-->
<!--                    :disabled="isNightDisabled(night)"-->
<!--                    @change="() => handleNightSelection(night)"-->
<!--                  />-->
<!--                  <span class="ml-2 text-sm text-gray-900 capitalize">-->
<!--                    {{ night }} Night-->
<!--                  </span>-->
<!--                </label>-->
<!--              </div>-->
<!--            </div>-->
<!--            <p class="mt-2 text-sm text-gray-600">Requested Contribution: $450</p>-->
<!--          </div>-->

          <!-- RSVP Options -->
          <div class="space-y-4">
            <label for="option1" class="night-selection-label">
              <RadioButton
                id="option1"
                value="accept"
                v-model="rsvpChoice"
              />
              <span class="ml-2 text-sm text-gray-900">
                I'm into these accommodations
              </span>
            </label>
            
            <label for="option2" class="night-selection-label">
              <RadioButton
                id="option2"
                value="budget"
                v-model="rsvpChoice"
              />
              <span class="ml-2 text-sm text-gray-900">
                I love it, but I can only spend
                <InputText
                  v-model="customBudget"
                  :disabled="rsvpChoice !== 'budget'"
                  class="w-24 mx-2"
                  placeholder="$"
                /> for my weekend accommodations
              </span>
            </label>
            
            <label for="option3" class="night-selection-label">
              <RadioButton
                id="option3"
                value="decline"
                v-model="rsvpChoice"
              />
              <span class="ml-2 text-sm text-gray-900">
                I'd rather find my own accommodations
              </span>
            </label>
          </div>
        </div>
      </div>
      <template #footer>
        <Button
          label="Cancel"
          text
          @click="showRsvpModal = false"
        />
        <Button
          label="Submit"
          :disabled="!rsvpChoice"
          @click="submitRsvp"
        />
      </template>
    </Dialog>
  </div>
</template>