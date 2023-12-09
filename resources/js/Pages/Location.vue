<template>
    <Head>
        <title>Mobile Tyre Fitting & Repair | Top Quality Cheap Tyres | Roadside24</title>
        <meta name="description" content="Discover Roadside24 – Your 24/7 mobile tyre service. Swift tire fitting, puncture repair, and more, anytime, anywhere. Stay on the road with our expert team. Reliable, efficient, and ready to assist – because your journey never waits. Contact us for on-the-go tyre solutions.">
        <link rel="canonical" href="https://roadside24.co.uk/">
    </Head>


    <LocationCarousel :area="location">
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
    </LocationCarousel>

    <OurServices/>

    <Container class="pt-8">
        <div class="flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between">
            <div class="lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center">
                <div class="">
                    <p class="xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat">Why choose mobile tyre fitting?</p>

                    <ul class="xl:pl-4 pl-0 mt-10 space-y-4">
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Cost-effective solution for your tyre needs</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Quick response, so you don't wait for breakdown services</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Keeps you and your car safe</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                            </svg>
                            <span class="xl:text-xl sm:text-lg text-base">Fitted at your convenience, you choose the time & place.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <AreasWeCover class="lg:w-1/2 w-full"/>
        </div>
    </Container>

    <Container class="pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" id="about">
        <div class="sm:px-0 px-4">

            <h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase">Welcome to Roadside24 in <span class="text-site-700" v-text="location"></span></h1>
            <h2 class="md:text-xl sm:text-lg text-base mb-10">We bring the garage to your car, so you don't have to.</h2>
            <p class="text-sm">
                Discover top-notch mobile tyre fitting and repair services in {{location}} with Roadside24.
                We are your reliable 24/7 solution for on-the-go tire needs, ensuring you stay on the road without a hitch.
            </p>
            <br>
            <p class="text-sm">
                Whether you're at home, work or on the roadside, you're guaranteed to receive exceptional mobile tyre fitting service when you choose <b>Roadside24</b>
            </p>
            <br>

            <div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4">
                <div class="md:hidden block">
                    <img src="/images/mobile-tyre-fitter.jpg" alt="">
                </div>

                <div class="col-span-7">
                    <h2 class="lg:text-3xl text-2xl font-semibold">Mobile Tyre Fitting</h2>
                    <br>
                    <p class="text-sm">
                        At Roadside24 in {{location}}, our mobile tyre fitting service is designed to bring convenience to your doorstep.
                        Whether you're at home, work, or stranded on the roadside, our skilled technicians will swiftly replace or fit new tyres,
                        ensuring your vehicle is roadworthy in no time.
                    </p>
                    <br>
                    <ul class="list-disc text-sm pl-6">
                        <li><b>On-the-Spot Fitting:</b> No need to visit a garage. We come to you for hassle-free tyre fitting.</li>
                        <li><b>Wide Range of Tyres:</b> Choose from our selection of quality tyres to suit your vehicle's needs.</li>
                        <li><b>Expert Technicians:</b> Our experienced team ensures precision and efficiency in every fitting.</li>
                    </ul>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07939485548">07939 485548</a> for a prompt service</span>
                    </p>
                </div>
                <div class="md:block hidden col-span-5">
                    <img src="/images/mobile-tyre-fitter.jpg" alt="">
                </div>

                <div class="col-span-5">
                    <img src="/images/24-hour-assistance.jpg" alt="">
                </div>
                <div class="col-span-7">
                    <h2 class="lg:text-3xl text-2xl font-semibold">24/7 Emergency Tyre Assistance</h2>
                    <br>
                    <p class="text-sm">
                        Life doesn't always follow a schedule, and neither do tyre issues. That's why our emergency tyre assistance in {{location}} is available 24/7.
                        Whether it's a flat tyre, a blowout, or any other unexpected tyre problem, Roadside24 is just a call away.
                    </p>
                    <br>
                    <p class="text-sm">What Sets Us Apart:</p>
                    <br>
                    <ul class="list-disc text-sm pl-6">
                        <li><b>Rapid Response Time:</b> We understand the urgency of tyre emergencies. Expect prompt response and quick assistance.</li>
                        <li><b>Comprehensive Solutions:</b> From simple puncture repairs to complex tyre issues, we handle it all on the spot.</li>
                        <li><b>Safety First:</b> Your safety is our priority. Our team ensures that your vehicle is safe to drive before you hit the road again.</li>
                    </ul>
                    <br>
                    <p class="text-sm flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                        <span>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07939485548">07939 485548</a> for a prompt service</span>
                    </p>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
import MainLayout from '../Layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';
import LocationCarousel from "../Components/LocationCarousel.vue"
import OurServices from "../Components/OurServices.vue"
import AreasWeCover from "../Components/AreasWeCover.vue"
import Container from "../Components/Container.vue"

defineProps({
    location: String,
    slug: String,
})
</script>
