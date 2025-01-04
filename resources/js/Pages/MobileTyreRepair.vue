<template>
    <Head>
        <title>Mobile Tyre Repair | Same Day at Home, Work or Roadside | Roadside24</title>
        <meta name="description" content="Get fast, reliable mobile tyre repair in Oxfordshire and Buckinghamshire. We repair punctures at work, home, or roadside, keeping you safely on the road.">
        <link rel="canonical" href="https://roadside24.co.uk/mobile-tyre-repair">
    </Head>


    <div class="relative">
        <div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden">
            <img
                src="/images/mobile-tyre-repair-showcase-400.webp"
                srcset="/images/mobile-tyre-repair-showcase.webp 1024w,
                        /images/mobile-tyre-repair-showcase-800.webp 800w,
                        /images/mobile-tyre-repair-showcase-400.webp 400w"
                sizes="100vw"
                class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]"
                alt="Mobile Tyre Repair at home"
            >
        </div>

        <div class="absolute top-1/4 left-0 right-0">
            <Container>
                <p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2">We Come To You</p>
                <p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl">30-60 Minute Response</p>
                <h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg">Mobile Tyre Repair - 24 Hours, 7 Days</h1>

                <div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3">
                    <a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                        <span>07386 315315</span>
                    </a>
                </div>
            </Container>
        </div>

        <BrandLogoCarousel />
    </div>

    <OurServices />

    <Container class="pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4">
        <div class="sm:px-0 px-4">
            <h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"><span class="text-site-700">Mobile Tyre Repair</span></h2>
            <h2 class="md:text-xl sm:text-lg text-base mb-10">Roadside24's most convenient and efficient service, in which a team of experts comes to you to repair your tyre issue.</h2>

            <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                <div class="col-span-7">
                    <p class="text-sm">
                        <b>Roadside24</b>'s mobile tyre repair is the hassle-free solution to your tyre problems.
                        You won't have to waste time or effort looking for a garage or tyre centre because our expert technicians will come to you.
                        Our team is equipped with the most up-to-date tools and technology to repair your tyre on the spot,
                        whether it's a puncture, a slow leak, or any other problem. This means you can have your tyre repaired quickly and efficiently,
                        without interrupting your busy schedule.
                    </p>
                    <br>
                    <p class="text-sm">
                        Our mobile tyre repair service is also cost-effective, as you won't have to pay for a tow truck or transportation to a tyre centre.
                        With Roadside24, you can have peace of mind knowing that your tyre repair needs are taken care of quickly and professionally,
                        all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre repair with Roadside24 for your next tyre issue.
                    </p>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315">07386 315315</a> for a prompt service</span>
                    </p>
                </div>
                <div class="col-span-5">
                    <img src="/images/mobile-tyre-repair.webp" alt="">
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
