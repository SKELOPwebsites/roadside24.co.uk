<template>
    <div class="fixed bottom-4 left-4 z-50">

        <button @click="textOpen = !textOpen">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WhatsApp" role="img"
                class="w-14 h-14"
                viewBox="0 0 512 512"><rect
                width="512" height="512"
                rx="15%"
                fill="#25d366"/><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z"/><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"/>
            </svg>
        </button>

        <Transition>
            <div
                v-show="textOpen"
                class="absolute -top-4 -translate-y-full bg-white border sm:w-96 w-72 rounded-xl overflow-hidden"
            >
                <div class="flex items-center relative p-4">
                    <div class="w-14 h-14 rounded-full relative">
                        <img src="/android-chrome-192x192.png" alt="VelocityTech" class="w-full h-full object-cover">
                        <div class="absolute h-2 w-2 bg-green-500 absolute bottom-0.5 right-0.5 rounded-full animate-pulse"></div>
                    </div>
                    <div class="flex flex-col ml-4">
                        <span class="font-medium">{{ name }}</span>
                        <span class="text-sm">Typically replies within 15 minutes</span>
                    </div>

                    <button @click="textOpen = false" class="absolute top-2 right-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div class="bg-whatsapp px-5 pt-5 pb-8">
                    <div class="relative py-1.5 px-3.5 bg-white rounded-b-full rounded-tr-full">
                        <span>How Can We Help?</span>
                        <span class="text-xs ml-3 text-gray-400">{{ time }}</span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="currentColor" class="absolute top-0 -left-[9px] text-white">
                            <path d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <div class="relative py-3 pl-5 pr-16">
                    <textarea
                        v-model="message"
                        ref="textarea"
                        area-required="false"
                        placeholder="Enter Your Message..."
                        inputmode="text"
                        class="h-auto border-0 outline-0 ring-0 focus:ring-0 resize-none w-full m-0 p-0 overflow-y-auto custom-scrollbar"
                        rows="1"
                        @input="adjustHeight"
                    ></textarea>

                    <a
                        :href="whatsappUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-green-500 hover:bg-green-400 rounded-full w-7 h-7 flex items-center justify-center transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, watch, nextTick } from "vue";

const props = defineProps({
    phoneNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const whatsappUrl = computed(() => {
    let baseUrl = 'https://wa.me/';
    let encodedMessage = encodeURIComponent(message.value);
    return `${baseUrl}${props.phoneNumber}?text=${encodedMessage}`;
})

const textOpen = ref(false)

let time = ''
onMounted(() => {
    let date = new Date()
    time = date.getHours() + ':' + date.getMinutes()
})

const message = ref('');
const textarea = ref(null);

const adjustHeight = () => {
    const el = textarea.value;
    if (!el) return;

    el.style.height = 'auto'; // Reset the height
    el.style.height = `${el.scrollHeight}px`; // Set the height to the scroll height

    const maxHeight = 3 * parseFloat(getComputedStyle(el).lineHeight); // Calculate the max height for 3 lines
    if (el.scrollHeight > maxHeight) {
        el.style.height = `${maxHeight}px`; // Set the height to the max height
        el.style.overflowY = 'auto'; // Enable vertical scroll
    } else {
        el.style.overflowY = 'hidden'; // Disable vertical scroll if within limit
    }
};

watch(textOpen, (newVal) => {
    if (newVal) {
        nextTick(() => {
            adjustHeight();
        });
    }
});

// Adjust height on mounted
onMounted(() => {
    nextTick(() => {
        adjustHeight();
    });
});

// Adjust height when the message changes
watch(message, () => {
    adjustHeight();
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition-property: opacity;
    transition:  0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.bg-whatsapp{
    background: url("/images/background-whatsapp.jpg") no-repeat center center;
    background-size: cover;
}

/* Custom thin scrollbar styles */
.custom-scrollbar::-webkit-scrollbar {
    width: 4px; /* Width of the scrollbar */
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2); /* Color of the scrollbar thumb */
    border-radius: 10px; /* Roundness of the scrollbar thumb */
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent; /* Color of the scrollbar track */
}
</style>
