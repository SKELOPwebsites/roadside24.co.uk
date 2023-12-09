<template>
    <Head>
        <title>Sitemap | Tyres Anywhere LTD</title>
        <meta name="description" content="Sitemap of our site tyresanywhere.com. This includes a list of all the pages in Tyres Anywhere LTD's website.">
        <link rel="canonical" href="https://tyresanywhere.com/sitemap">
    </Head>

    <MainCarousel>
        <template v-slot:img_1>
            <img
                src="/images/carousel/1.webp"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre fitting"
            >
        </template>
        <template v-slot:img_2>
            <img
                src="/images/carousel/2.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_3>
            <img
                src="/images/carousel/3.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_4>
            <img
                src="/images/carousel/4.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
        <template v-slot:img_5>
            <img
                src="/images/carousel/5.jpg"
                class="object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile tyre repair"
            >
        </template>
    </MainCarousel>

    <Container>
        <div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8">
            <h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6">Roadside24 Site Map</h1>

            <div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8">
                <div class="xl:col-span-3 col-span-6">
                    <p class="md:text-lg text-base font-semibold">Roadside24</p>
                    <div class="flex flex-col items-start mt-4 space-y-2">
                        <Link href="/" class="md:text-base text-sm text-blue-600 hover:underline">Home</Link>
                        <Link href="/mobile-tyre-fitting" class="md:text-base text-sm text-blue-500 hover:underline">Mobile Tyre Fitting</Link>
                        <Link href="/mobile-tyre-repair" class="md:text-base text-sm text-blue-600 hover:underline">Mobile Tyre Repair</Link>
                        <Link href="/van-mobile-tyre-fitting" class="md:text-base text-sm text-blue-600 hover:underline">Van Mobile Tyre Fitting</Link>
                        <Link href="/branded-tyres" class="md:text-base text-sm text-blue-600 hover:underline">Branded Tyres</Link>
                        <Link href="/contact" class="md:text-base text-sm text-blue-600 hover:underline">Contact</Link>
                        <Link href="/privacy-policy" class="md:text-base text-sm text-blue-600 hover:underline">Privacy Policy</Link>
                    </div>
                </div>
                <div class="xl:col-span-9 col-span-12">
                    <p class="md:text-lg text-base font-semibold">Coverage</p>
                    <div class="grid grid-cols-12 gap-2 items-start mt-4">
                        <div
                            v-for="area in areas"
                            class="col-span-4"
                        >
                            <Link
                                :href="'/locations/'+area.slug"
                                class="md:text-base text-sm text-blue-600 hover: capitalize"
                                v-text="area.area"
                            ></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>


<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { Link, Head } from "@inertiajs/vue3";
import Container from "../Components/Container.vue"
import MainCarousel from "../Components/MainCarousel.vue"

defineProps({
    areas: Object,
})
</script>

<style scoped>

</style>
