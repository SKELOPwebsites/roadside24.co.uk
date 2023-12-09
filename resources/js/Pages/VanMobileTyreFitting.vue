<template>
    <Head>
        <title>Van Mobile Tyre Fitting | Same Day at Home, Work or Roadside | Roadside24</title>
        <meta name="description" content="We also fit van tyres at your location. Get your van tyres fitted on the same day of your call.">
        <link rel="canonical" href="https://roadside24.co.uk/van-mobile-tyre-fitting">
    </Head>


    <div class="relative">
        <div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden">
            <img
                src="/images/van-mobile-tyre-fitting-showcase.jpg"
                class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile Tyre Fitting"
            >
        </div>

        <div class="absolute top-1/4 left-0 right-0">
            <Container>
                <p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2">We Come To You</p>
                <p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl">30-60 Minute Response</p>
                <h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg">Van Mobile Tyre Fitting - 24 Hours, 7 Days</h1>

                <div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3">
                    <a href="tel:07939485548" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        <span>07939 485548</span>
                    </a>
                </div>
            </Container>
        </div>

        <BrandLogoCarousel />
    </div>

    <OurServices />

    <Container class="pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4">
        <div class="sm:px-0 px-4">
            <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"><span class="text-site-700">Van Mobile Tyre Fitting</span></h1>
            <h2 class="md:text-xl sm:text-lg text-base mb-10">Yes, you heard right. Get your van tyres fitted at your convenience!</h2>

            <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                <div class="col-span-7">
                    <p class="text-sm">
                        <b>Roadside24</b>'s van mobile tyre fitting service is the most convenient solution for all of your van tyre needs.
                        You won't have to waste time or effort looking for a garage or tyre centre that can accommodate your van because our expert technicians will come to you.
                        Our team is equipped with the most up-to-date tools and technology to quickly and efficiently install new tyres on your van without disrupting your busy schedule.
                    </p>
                    <br>
                    <p class="text-sm">
                        With van mobile tyre fitting, you can get your van back on the road quickly without having to arrange transportation or pay for a tow truck.
                        We provide a diverse range of high-quality tyre brands and options to ensure that you get the right tyre for your specific van and driving needs.
                        With Roadside24, you can rest assured that your van's tyre fitting needs will be met professionally and efficiently.
                        So, for your next tyre change, why not go with van mobile tyre fitting from Roadside24?
                    </p>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07939485548">07939 485548</a> for a prompt service</span>
                    </p>
                </div>
                <div class="col-span-5">
                    <img src="/images/van-mobile-tyre-fitting.jpg" alt="">
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import BrandLogoCarousel from "../Components/BrandLogoCarousel.vue"
import OurServices from "../Components/OurServices.vue"
import Container from "../Components/Container.vue"

</script>

<style scoped>

</style>
