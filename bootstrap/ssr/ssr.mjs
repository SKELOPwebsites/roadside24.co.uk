import { useSSRContext, mergeProps, ref, onMounted, onUnmounted, watch, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, toDisplayString, createTextVNode, withDirectives, vModelText, createCommentVNode, renderSlot, Transition, vShow, computed, nextTick, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { Link, Head, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl lg:px-0 px-2" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Container.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Container = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$k = {
  __name: "BrandLogoCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = ["Bridgestone", "Continental", "Michelin", "Pirelli", "Goodyear", "Dunlop", "Avon", "Hankook", "Yokohama"];
    const container = ref(null);
    const tray = ref(null);
    const width = ref(0);
    let interval2 = null;
    let num = 5;
    let count = 0;
    onMounted(() => {
      getWidth();
      window.addEventListener("resize", getWidth);
      interval2 = setInterval(() => {
        count++;
        if (count + num > container.value.children[0].children.length)
          count = 0;
        tray.value.style.transform = "TranslateX(-" + width.value * count + "px)";
      }, 2500);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", getWidth);
      clearInterval(interval2);
    });
    watch(width, (value) => {
      for (let i = 0; i < container.value.children[0].children.length; i++) {
        container.value.children[0].children[i].style.width = value + "px";
      }
    });
    function getWidth() {
      if (window.innerWidth >= 1280) {
        num = 5;
      } else if (window.innerWidth < 1280 && window.innerWidth >= 1024) {
        num = 4;
      } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        num = 3;
      } else if (window.innerWidth < 768 && window.innerWidth >= 450) {
        num = 2;
      } else {
        num = 1;
      }
      width.value = container.value.clientWidth / num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute bottom-0 left-0 right-0 w-full bg-white/50 z-10 py-2 px-3" }, _attrs))}>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-start overflow-hidden"${_scopeId}><div class="flex items-center transition ease duration-700"${_scopeId}><!--[-->`);
            ssrRenderList(logos, (logo) => {
              _push2(`<div class="shrink-0 h-16 flex items-center justify-center"${_scopeId}><img${ssrRenderAttr("src", "/images/logo/" + logo.toLowerCase() + ".webp")}${ssrRenderAttr("alt", logo + " Logo")}${_scopeId}></div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "flex items-center justify-start overflow-hidden",
                ref_key: "container",
                ref: container
              }, [
                createVNode("div", {
                  class: "flex items-center transition ease duration-700",
                  ref_key: "tray",
                  ref: tray
                }, [
                  (openBlock(), createBlock(Fragment, null, renderList(logos, (logo) => {
                    return createVNode("div", { class: "shrink-0 h-16 flex items-center justify-center" }, [
                      createVNode("img", {
                        src: "/images/logo/" + logo.toLowerCase() + ".webp",
                        alt: logo + " Logo"
                      }, null, 8, ["src", "alt"])
                    ]);
                  }), 64))
                ], 512)
              ], 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BrandLogoCarousel.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        image_url: "/images/services/mobile-tyre-fitting.webp",
        name: "Mobile Tyre Fitting",
        desc: "At home, work or roadside",
        href: "/mobile-tyre-fitting",
        component: "MobileTyreFitting"
      },
      {
        image_url: "/images/services/mobile-tyre-repair.webp",
        name: "Mobile Tyre Repair",
        desc: "Securely seal your punctured tyre",
        href: "/mobile-tyre-repair",
        component: "MobileTyreRepair"
      },
      {
        image_url: "/images/services/van-mobile-tyre-fitting.webp",
        name: "Van Mobile Tyre Fitting",
        desc: "Van tyres fitted at your convenience",
        href: "/van-mobile-tyre-fitting",
        component: "VanMobileTyreFitting"
      },
      {
        image_url: "/images/services/branded-tyres.webp",
        name: "Branded Tyres",
        desc: "High quality and performant tyres",
        href: "/branded-tyres",
        component: "BrandedTyres"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Container, mergeProps({
        class: "pt-12",
        id: "our-services"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center text-2xl font-montserrat font-bold mb-8"${_scopeId}>Our Services</p><div class="w-full mx-auto grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-4 lg:gap-x-3 gap-x-4 xl:gap-y-0 gap-y-3 items-center justify-center"${_scopeId}><!--[-->`);
            ssrRenderList(services, (service) => {
              _push2(ssrRenderComponent(unref(Link), {
                class: ["col-span-1", _ctx.$page.component === service.component ? "pointer-events-none" : ""],
                href: service.href
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="group w-full 2xl:h-48 md:h-44 h-36 relative border border-gray-600 rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out"${_scopeId2}><img class="absolute inset-0 w-full h-full brightness-[0.5] object-cover object-center"${ssrRenderAttr("src", service.image_url)}${ssrRenderAttr("alt", service.name)}${_scopeId2}><div class="${ssrRenderClass([_ctx.$page.component === service.component ? "bg-site-500/20" : "", "z-10 w-full h-full flex flex-col items-center justify-center group-hover:bg-site-500/30 transition duration-300 ease-in-out"])}"${_scopeId2}><div class="${ssrRenderClass([_ctx.$page.component === service.component ? "-translate-y-1" : "", "group-hover:-translate-y-1 transition duration-300 ease-in-out"])}"${_scopeId2}><h2 class="md:text-lg sm:text-base text-lg text-center text-white whitespace-nowrap font-montserrat font-bold uppercase"${_scopeId2}>${ssrInterpolate(service.name)}</h2><h2 class="md:text-sm sm:text-xs text-sm text-center text-gray-300 whitespace-nowrap font-montserrat"${_scopeId2}>${ssrInterpolate(service.desc)}</h2></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "group w-full 2xl:h-48 md:h-44 h-36 relative border border-gray-600 rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out" }, [
                        createVNode("img", {
                          class: "absolute inset-0 w-full h-full brightness-[0.5] object-cover object-center",
                          src: service.image_url,
                          alt: service.name
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", {
                          class: ["z-10 w-full h-full flex flex-col items-center justify-center group-hover:bg-site-500/30 transition duration-300 ease-in-out", _ctx.$page.component === service.component ? "bg-site-500/20" : ""]
                        }, [
                          createVNode("div", {
                            class: ["group-hover:-translate-y-1 transition duration-300 ease-in-out", _ctx.$page.component === service.component ? "-translate-y-1" : ""]
                          }, [
                            createVNode("h2", {
                              class: "md:text-lg sm:text-base text-lg text-center text-white whitespace-nowrap font-montserrat font-bold uppercase",
                              textContent: toDisplayString(service.name)
                            }, null, 8, ["textContent"]),
                            createVNode("h2", {
                              class: "md:text-sm sm:text-xs text-sm text-center text-gray-300 whitespace-nowrap font-montserrat",
                              textContent: toDisplayString(service.desc)
                            }, null, 8, ["textContent"])
                          ], 2)
                        ], 2)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("p", { class: "text-center text-2xl font-montserrat font-bold mb-8" }, "Our Services"),
              createVNode("div", { class: "w-full mx-auto grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-4 lg:gap-x-3 gap-x-4 xl:gap-y-0 gap-y-3 items-center justify-center" }, [
                (openBlock(), createBlock(Fragment, null, renderList(services, (service) => {
                  return createVNode(unref(Link), {
                    class: ["col-span-1", _ctx.$page.component === service.component ? "pointer-events-none" : ""],
                    href: service.href
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "group w-full 2xl:h-48 md:h-44 h-36 relative border border-gray-600 rounded flex flex-col items-center justify-center hover:shadow-xl transition duration-300 ease-in-out" }, [
                        createVNode("img", {
                          class: "absolute inset-0 w-full h-full brightness-[0.5] object-cover object-center",
                          src: service.image_url,
                          alt: service.name
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", {
                          class: ["z-10 w-full h-full flex flex-col items-center justify-center group-hover:bg-site-500/30 transition duration-300 ease-in-out", _ctx.$page.component === service.component ? "bg-site-500/20" : ""]
                        }, [
                          createVNode("div", {
                            class: ["group-hover:-translate-y-1 transition duration-300 ease-in-out", _ctx.$page.component === service.component ? "-translate-y-1" : ""]
                          }, [
                            createVNode("h2", {
                              class: "md:text-lg sm:text-base text-lg text-center text-white whitespace-nowrap font-montserrat font-bold uppercase",
                              textContent: toDisplayString(service.name)
                            }, null, 8, ["textContent"]),
                            createVNode("h2", {
                              class: "md:text-sm sm:text-xs text-sm text-center text-gray-300 whitespace-nowrap font-montserrat",
                              textContent: toDisplayString(service.desc)
                            }, null, 8, ["textContent"])
                          ], 2)
                        ], 2)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "href"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OurServices.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "BrandedTyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>High Quality and Performant Tyres Available | Roadside24</title><meta name="description" content="Explore our wide range of branded tyres for cars and vans. Quality tyres from top brands, available with mobile fitting services in Oxfordshire and Buckinghamshire."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/branded-tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "High Quality and Performant Tyres Available | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Explore our wide range of branded tyres for cars and vans. Quality tyres from top brands, available with mobile fitting services in Oxfordshire and Buckinghamshire."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/branded-tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/branded-tyres-showcase-400.webp" srcset="/images/branded-tyres-showcase.webp 1024w,
                        /images/branded-tyres-showcase-800.webp 800w,
                        /images/branded-tyres-showcase-400.webp 400w" sizes="100vw" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Our range of high quality and cheap tyres for mobile tyre fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Large range of quality brands available</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Large range of quality brands available"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Branded Tyres</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We stock high quality and performant tyres from leading tyre brands</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>Roadside24</b> branded tyres are the ideal choice for those who value safety, performance, and quality. From high-performance sports tyres to reliable all-season options, our selection of leading tyre brands has something to suit every need and budget. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Branded tyres are built to the highest standards, using cutting-edge technology and materials to provide superior handling, grip, and durability. Whether you want better fuel efficiency, a smoother and quieter ride, or better handling in bad weather, you can find the right tyre for your needs among our branded tyre options. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With Roadside24, you can have peace of mind knowing that you&#39;re investing in high-quality tyres that will improve your vehicle&#39;s safety, performance, and lifespan. So, for your next tyre change, why not go with branded tyres from Roadside24 and see the difference that quality makes? </p></div><div class="col-span-5"${_scopeId}><img src="/images/branded-tyres.webp" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Branded Tyres")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We stock high quality and performant tyres from leading tyre brands"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(" branded tyres are the ideal choice for those who value safety, performance, and quality. From high-performance sports tyres to reliable all-season options, our selection of leading tyre brands has something to suit every need and budget. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Branded tyres are built to the highest standards, using cutting-edge technology and materials to provide superior handling, grip, and durability. Whether you want better fuel efficiency, a smoother and quieter ride, or better handling in bad weather, you can find the right tyre for your needs among our branded tyre options. "),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " With Roadside24, you can have peace of mind knowing that you're investing in high-quality tyres that will improve your vehicle's safety, performance, and lifespan. So, for your next tyre change, why not go with branded tyres from Roadside24 and see the difference that quality makes? ")
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/branded-tyres.webp",
                      alt: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BrandedTyres.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const ContactUs_vue_vue_type_style_index_0_scoped_b100bddd_lang = "";
const _sfc_main$h = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      comments: null
    });
    function submit() {
      form.post("/contact", {
        preserveScroll: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-b100bddd${_scopeId}>Contact the Team | Roadside24</title><meta name="description" content="Get in touch with Roadside24 for mobile tyre fitting, repairs, and more. Contact us today for expert service in Oxfordshire, Buckinghamshire, and surrounding areas." data-v-b100bddd${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/contact" data-v-b100bddd${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contact the Team | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Get in touch with Roadside24 for mobile tyre fitting, repairs, and more. Contact us today for expert service in Oxfordshire, Buckinghamshire, and surrounding areas."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/contact"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative" data-v-b100bddd><div class="relative h-[40vh] max-h-[550px] md:min-h-[440px] sm:min-h-[340px] min-h-[300px] md:w-full overflow-hidden" data-v-b100bddd><img src="/images/contact-us-400.webp" srcset="/images/contact-us.webp 1024w,
                        /images/contact-us-800.webp 800w,
                        /images/contact-us-400.webp 400w" sizes="100vw" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Contact the mobile tyre fitting team" data-v-b100bddd></div><div class="absolute top-1/4 left-0 right-0" data-v-b100bddd>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" data-v-b100bddd${_scopeId}>Let&#39;s start a conversation</h1><h2 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" data-v-b100bddd${_scopeId}>Need to contact us for a particular reason? No problem!</h2><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" data-v-b100bddd${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition" data-v-b100bddd${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor" data-v-b100bddd${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" data-v-b100bddd${_scopeId}></path></svg><span data-v-b100bddd${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("h1", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "Let's start a conversation"),
              createVNode("h2", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Need to contact us for a particular reason? No problem!"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, { class: "py-16" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col-reverse md:items-start items-center w-full pb-5" data-v-b100bddd${_scopeId}><div class="md:w-5/12 w-full md:text-left text-center md:m-0 mt-12 mb-6" data-v-b100bddd${_scopeId}><h3 class="text-3xl mb-8" data-v-b100bddd${_scopeId}>Points of Contact</h3><div class="mb-6" data-v-b100bddd${_scopeId}><p class="text-lg font-bold mb-2" data-v-b100bddd${_scopeId}>Support &amp; Inquiries</p><p data-v-b100bddd${_scopeId}>info@roadside24.co.uk</p></div><div data-v-b100bddd${_scopeId}><p class="text-lg font-bold mb-2" data-v-b100bddd${_scopeId}>Telephone</p><p data-v-b100bddd${_scopeId}>07386 315315</p></div></div><div class="md:w-7/12 w-full" data-v-b100bddd${_scopeId}><div class="bg-white shadow-xl px-6 py-4 rounded-lg" data-v-b100bddd${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<!--[--><p class="uppercase font-medium tracking-wide" data-v-b100bddd${_scopeId}>Message sent successfully</p><p class="text-sm mt-2" data-v-b100bddd${_scopeId}>Hold tight for our response soon!</p>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/",
                class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Back to home`);
                  } else {
                    return [
                      createTextVNode("Back to home")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!--[--><p class="text-sm text-gray-400 mb-4" data-v-b100bddd${_scopeId}>Note: * fields are required</p><div class="mb-4" data-v-b100bddd${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="fname" data-v-b100bddd${_scopeId}> First Name <span class="text-red-500" data-v-b100bddd${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).first_name)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="fname" autocomplete="given-name" type="text" data-v-b100bddd${_scopeId}>`);
              if (_ctx.$page.props.errors.first_name) {
                _push2(`<span class="text-xs text-red-500" data-v-b100bddd${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.first_name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-b100bddd${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="lname" data-v-b100bddd${_scopeId}> Last Name <span class="text-red-500" data-v-b100bddd${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).last_name)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="lname" autocomplete="family-name" type="text" data-v-b100bddd${_scopeId}>`);
              if (_ctx.$page.props.errors.last_name) {
                _push2(`<span class="text-xs text-red-500" data-v-b100bddd${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.last_name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-b100bddd${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="email" data-v-b100bddd${_scopeId}> E-mail Address <span class="text-red-500" data-v-b100bddd${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).email)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="email" autocomplete="email" type="email" data-v-b100bddd${_scopeId}>`);
              if (_ctx.$page.props.errors.email) {
                _push2(`<span class="text-xs text-red-500" data-v-b100bddd${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.email)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-b100bddd${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="phone" data-v-b100bddd${_scopeId}> Phone Number </label><input${ssrRenderAttr("value", unref(form).phone)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="phone" type="text" data-v-b100bddd${_scopeId}>`);
              if (_ctx.$page.props.errors.phone) {
                _push2(`<span class="text-xs text-red-500" data-v-b100bddd${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.phone)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-b100bddd${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="comments" data-v-b100bddd${_scopeId}> Comments <span class="text-red-500" data-v-b100bddd${_scopeId}>*</span></label><textarea id="comments" class="w-full py-2 px-3 block mt-1 min-h-[6rem] rounded shadow-sm outline-0 border border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25" data-v-b100bddd${_scopeId}>${ssrInterpolate(unref(form).comments)}</textarea>`);
              if (_ctx.$page.props.errors.comments) {
                _push2(`<span class="text-xs text-red-500" data-v-b100bddd${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.comments)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end" data-v-b100bddd${_scopeId}><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "button--loading": unref(form).processing }, "relative w-full h-[42px] bg-site-600 border border-transparent rounded-md hover:bg-site-500 active:bg-site-700 focus:outline-none focus:bg-site-700 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150"])}" data-v-b100bddd${_scopeId}>`);
              if (!unref(form).processing) {
                _push2(`<span class="font-semibold text-sm text-white uppercase tracking-widest" data-v-b100bddd${_scopeId}>SEND INQUIRY</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</button></div><!--]-->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex md:flex-row flex-col-reverse md:items-start items-center w-full pb-5" }, [
                createVNode("div", { class: "md:w-5/12 w-full md:text-left text-center md:m-0 mt-12 mb-6" }, [
                  createVNode("h3", { class: "text-3xl mb-8" }, "Points of Contact"),
                  createVNode("div", { class: "mb-6" }, [
                    createVNode("p", { class: "text-lg font-bold mb-2" }, "Support & Inquiries"),
                    createVNode("p", null, "info@roadside24.co.uk")
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold mb-2" }, "Telephone"),
                    createVNode("p", null, "07386 315315")
                  ])
                ]),
                createVNode("div", { class: "md:w-7/12 w-full" }, [
                  createVNode("div", { class: "bg-white shadow-xl px-6 py-4 rounded-lg" }, [
                    _ctx.$page.props.success ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("p", { class: "uppercase font-medium tracking-wide" }, "Message sent successfully"),
                      createVNode("p", { class: "text-sm mt-2" }, "Hold tight for our response soon!"),
                      createVNode(unref(Link), {
                        href: "/",
                        class: "block bg-gray-200 w-fit px-4 py-1.5 border border-gray-300 text-gray-600 mt-4 rounded-md text-sm uppercase hover:text-gray-800 hover:border-gray-800 transition duration-150"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Back to home")
                        ]),
                        _: 1
                      })
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("p", { class: "text-sm text-gray-400 mb-4" }, "Note: * fields are required"),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          class: "block font-medium sm:text-sm text-xs text-gray-700",
                          for: "fname"
                        }, [
                          createTextVNode(" First Name "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                          class: "py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1",
                          id: "fname",
                          autocomplete: "given-name",
                          type: "text"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).first_name]
                        ]),
                        _ctx.$page.props.errors.first_name ? (openBlock(), createBlock("span", {
                          key: 0,
                          textContent: toDisplayString(_ctx.$page.props.errors.first_name),
                          class: "text-xs text-red-500"
                        }, null, 8, ["textContent"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          class: "block font-medium sm:text-sm text-xs text-gray-700",
                          for: "lname"
                        }, [
                          createTextVNode(" Last Name "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                          class: "py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1",
                          id: "lname",
                          autocomplete: "family-name",
                          type: "text"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).last_name]
                        ]),
                        _ctx.$page.props.errors.last_name ? (openBlock(), createBlock("span", {
                          key: 0,
                          textContent: toDisplayString(_ctx.$page.props.errors.last_name),
                          class: "text-xs text-red-500"
                        }, null, 8, ["textContent"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          class: "block font-medium sm:text-sm text-xs text-gray-700",
                          for: "email"
                        }, [
                          createTextVNode(" E-mail Address "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          class: "py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1",
                          id: "email",
                          autocomplete: "email",
                          type: "email"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).email]
                        ]),
                        _ctx.$page.props.errors.email ? (openBlock(), createBlock("span", {
                          key: 0,
                          textContent: toDisplayString(_ctx.$page.props.errors.email),
                          class: "text-xs text-red-500"
                        }, null, 8, ["textContent"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          class: "block font-medium sm:text-sm text-xs text-gray-700",
                          for: "phone"
                        }, " Phone Number "),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          class: "py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1",
                          id: "phone",
                          type: "text"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).phone]
                        ]),
                        _ctx.$page.props.errors.phone ? (openBlock(), createBlock("span", {
                          key: 0,
                          textContent: toDisplayString(_ctx.$page.props.errors.phone),
                          class: "text-xs text-red-500"
                        }, null, 8, ["textContent"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          class: "block font-medium sm:text-sm text-xs text-gray-700",
                          for: "comments"
                        }, [
                          createTextVNode(" Comments "),
                          createVNode("span", { class: "text-red-500" }, "*")
                        ]),
                        withDirectives(createVNode("textarea", {
                          "onUpdate:modelValue": ($event) => unref(form).comments = $event,
                          id: "comments",
                          class: "w-full py-2 px-3 block mt-1 min-h-[6rem] rounded shadow-sm outline-0 border border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(form).comments]
                        ]),
                        _ctx.$page.props.errors.comments ? (openBlock(), createBlock("span", {
                          key: 0,
                          textContent: toDisplayString(_ctx.$page.props.errors.comments),
                          class: "text-xs text-red-500"
                        }, null, 8, ["textContent"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex items-center justify-end" }, [
                        createVNode("button", {
                          onClick: submit,
                          disabled: unref(form).processing,
                          class: ["relative w-full h-[42px] bg-site-600 border border-transparent rounded-md hover:bg-site-500 active:bg-site-700 focus:outline-none focus:bg-site-700 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150", { "button--loading": unref(form).processing }]
                        }, [
                          !unref(form).processing ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "font-semibold text-sm text-white uppercase tracking-widest"
                          }, "SEND INQUIRY")) : createCommentVNode("", true)
                        ], 10, ["disabled"])
                      ])
                    ], 64))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-b100bddd"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactUs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "NavLinkMob",
  __ssrInlineRender: true,
  props: {
    component: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        class: ["w-full py-4 pl-4 border-gray-200 text-sm", _ctx.$page.component === __props.component ? "text-site-600 font-bold" : "text-gray-400"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLinkMob.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Header_vue_vue_type_style_index_0_scoped_1e2a6816_lang = "";
const _sfc_main$f = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const otherServicesOpen = ref(false);
    const mobileNavShow = ref(false);
    const sliding = ref(false);
    function hideMobileNav() {
      if (sliding.value)
        return;
      mobileNavShow.value = false;
      setSliding();
    }
    function setSliding() {
      sliding.value = true;
      setTimeout(() => {
        sliding.value = false;
      }, 500);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 right-0 w-full z-50" }, _attrs))} data-v-1e2a6816>`);
      _push(ssrRenderComponent(Container, { class: "relative select-none flex flex-row items-center justify-between pt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[300px]" data-v-1e2a6816${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full" src="/images/logo-light.webp" alt="Roadside24 Logo" data-v-1e2a6816${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/logo-light.webp",
                      alt: "Roadside24 Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="font-montserrat font-bold text-sm md:flex hidden flex-row space-x-4 lg:ml-12 lg:mt-0 mt-2 uppercase" data-v-1e2a6816${_scopeId}><a href="/" class="sm:block hidden text-white hover:text-site-300" data-v-1e2a6816${_scopeId}>HOME</a><a href="/#our-services" class="sm:block hidden text-white hover:text-site-300" data-v-1e2a6816${_scopeId}>SERVICE</a><a href="/#coverage" class="sm:block hidden text-white hover:text-site-300" data-v-1e2a6816${_scopeId}>COVERAGE</a><a href="/#about" class="sm:block hidden text-white hover:text-site-300" data-v-1e2a6816${_scopeId}>ABOUT</a><a href="/contact" class="sm:block hidden text-white hover:text-site-300" data-v-1e2a6816${_scopeId}>CONTACT</a></div><div class="md:hidden block" data-v-1e2a6816${_scopeId}><button class="menu-btn text-white border-0 outline-0 text-xl flex items-center justify-center" data-v-1e2a6816${_scopeId}><span class="font-montserrat font-semibold text-sm" data-v-1e2a6816${_scopeId}>MENU</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-1e2a6816${_scopeId}><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-1e2a6816${_scopeId}></path></svg></button></div><div style="${ssrRenderStyle(mobileNavShow.value ? null : { display: "none" })}" class="md:hidden block bg-gray-100 w-72 fixed top-0 right-0 z-50" data-v-1e2a6816${_scopeId}><div class="h-screen overflow-y-scroll" data-v-1e2a6816${_scopeId}><button class="w-full flex items-center justify-center h-14 bg-gray-200 text-site-600 font-semibold text-lg" type="button" data-v-1e2a6816${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-1e2a6816${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-1e2a6816${_scopeId}></path></svg> CLOSE </button><div class="flex flex-col" data-v-1e2a6816${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/",
              component: "Home",
              class: "border-b flex items-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-1e2a6816${_scopeId2}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-1e2a6816${_scopeId2}></path></svg> HOME `);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 mr-1",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
                    ])),
                    createTextVNode(" HOME ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400" data-v-1e2a6816${_scopeId}><span class="flex items-center" data-v-1e2a6816${_scopeId}> Our Services <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-1e2a6816${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-1e2a6816${_scopeId}></path></svg></span><div style="${ssrRenderStyle(otherServicesOpen.value ? null : { display: "none" })}" class="flex flex-col space-y-2 mt-2" data-v-1e2a6816${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/mobile-tyre-fitting",
              component: "MobileTyreFitting",
              title: "Mobile Tyre Fitting",
              class: "border-l-2 border-dotted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/mobile-tyre-repair",
              component: "MobileTyreRepair",
              title: "Mobile Tyre Repair",
              class: "border-l-2 border-dotted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/van-mobile-tyre-fitting",
              component: "VanMobileTyreFitting",
              title: "Van Mobile Tyre Fitting",
              class: "border-l-2 border-dotted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Van Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Van Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/branded-tyres",
              component: "BrandedTyres",
              title: "Branded Tyres",
              class: "border-l-2 border-dotted"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Branded Tyres`);
                } else {
                  return [
                    createTextVNode("Branded Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/contact",
              component: "ContactUs",
              title: "Contact Us",
              class: "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a data-v-1e2a6816${_scopeId2}>Contact Us</a>`);
                } else {
                  return [
                    createVNode("a", null, "Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$g, {
              href: "/privacy-policy",
              component: "PrivacyPolicy",
              title: "Privacy Policy",
              class: "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a data-v-1e2a6816${_scopeId2}>Privacy Policy</a>`);
                } else {
                  return [
                    createVNode("a", null, "Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-[300px]" }, [
                createVNode(unref(Link), { href: "/" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/logo-light.webp",
                      alt: "Roadside24 Logo"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "font-montserrat font-bold text-sm md:flex hidden flex-row space-x-4 lg:ml-12 lg:mt-0 mt-2 uppercase" }, [
                createVNode("a", {
                  href: "/",
                  class: "sm:block hidden text-white hover:text-site-300"
                }, "HOME"),
                createVNode("a", {
                  href: "/#our-services",
                  class: "sm:block hidden text-white hover:text-site-300"
                }, "SERVICE"),
                createVNode("a", {
                  href: "/#coverage",
                  class: "sm:block hidden text-white hover:text-site-300"
                }, "COVERAGE"),
                createVNode("a", {
                  href: "/#about",
                  class: "sm:block hidden text-white hover:text-site-300"
                }, "ABOUT"),
                createVNode("a", {
                  href: "/contact",
                  class: "sm:block hidden text-white hover:text-site-300"
                }, "CONTACT")
              ]),
              createVNode("div", { class: "md:hidden block" }, [
                createVNode("button", {
                  onClick: ($event) => mobileNavShow.value = !mobileNavShow.value,
                  class: "menu-btn text-white border-0 outline-0 text-xl flex items-center justify-center"
                }, [
                  createVNode("span", { class: "font-montserrat font-semibold text-sm" }, "MENU"),
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "h-6 w-6 ml-1",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ], 8, ["onClick"])
              ]),
              createVNode(Transition, { name: "mobile-nav" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("div", { class: "md:hidden block bg-gray-100 w-72 fixed top-0 right-0 z-50" }, [
                    createVNode("div", { class: "h-screen overflow-y-scroll" }, [
                      createVNode("button", {
                        onClick: hideMobileNav,
                        class: "w-full flex items-center justify-center h-14 bg-gray-200 text-site-600 font-semibold text-lg",
                        type: "button"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          class: "h-5 w-5 mr-1",
                          viewBox: "0 0 20 20",
                          fill: "currentColor"
                        }, [
                          createVNode("path", {
                            "fill-rule": "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            "clip-rule": "evenodd"
                          })
                        ])),
                        createTextVNode(" CLOSE ")
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode(_sfc_main$g, {
                          href: "/",
                          component: "Home",
                          class: "border-b flex items-start"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-5 w-5 mr-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" })
                            ])),
                            createTextVNode(" HOME ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400" }, [
                          createVNode("span", {
                            onClick: ($event) => otherServicesOpen.value = !otherServicesOpen.value,
                            class: "flex items-center"
                          }, [
                            createTextVNode(" Our Services "),
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "h-4 w-4 ml-1",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ], 8, ["onClick"]),
                          withDirectives(createVNode("div", { class: "flex flex-col space-y-2 mt-2" }, [
                            createVNode(_sfc_main$g, {
                              href: "/mobile-tyre-fitting",
                              component: "MobileTyreFitting",
                              title: "Mobile Tyre Fitting",
                              class: "border-l-2 border-dotted"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Mobile Tyre Fitting")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$g, {
                              href: "/mobile-tyre-repair",
                              component: "MobileTyreRepair",
                              title: "Mobile Tyre Repair",
                              class: "border-l-2 border-dotted"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Mobile Tyre Repair")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$g, {
                              href: "/van-mobile-tyre-fitting",
                              component: "VanMobileTyreFitting",
                              title: "Van Mobile Tyre Fitting",
                              class: "border-l-2 border-dotted"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Van Mobile Tyre Fitting")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$g, {
                              href: "/branded-tyres",
                              component: "BrandedTyres",
                              title: "Branded Tyres",
                              class: "border-l-2 border-dotted"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Branded Tyres")
                              ]),
                              _: 1
                            })
                          ], 512), [
                            [vShow, otherServicesOpen.value]
                          ])
                        ]),
                        createVNode(_sfc_main$g, {
                          href: "/contact",
                          component: "ContactUs",
                          title: "Contact Us",
                          class: "border-b"
                        }, {
                          default: withCtx(() => [
                            createVNode("a", null, "Contact Us")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$g, {
                          href: "/privacy-policy",
                          component: "PrivacyPolicy",
                          title: "Privacy Policy",
                          class: "border-b"
                        }, {
                          default: withCtx(() => [
                            createVNode("a", null, "Privacy Policy")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ], 512), [
                    [vShow, mobileNavShow.value]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Header.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-1e2a6816"]]);
const _sfc_main$e = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="hidden sm:block h-14 w-full bg-site-800 text-white">`);
      _push(ssrRenderComponent(Container, { class: "flex h-full items-center justify-center items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xl text-center"${_scopeId}><b${_scopeId}>Need help?</b> `);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact",
              class: "underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact us`);
                } else {
                  return [
                    createTextVNode("Contact us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`, or call us on <a href="tel:07386315315" class="underline"${_scopeId}>07386 315315</a></p>`);
          } else {
            return [
              createVNode("p", { class: "text-xl text-center" }, [
                createVNode("b", null, "Need help?"),
                createTextVNode(),
                createVNode(unref(Link), {
                  href: "/contact",
                  class: "underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Contact us")
                  ]),
                  _: 1
                }),
                createTextVNode(", or call us on "),
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "underline"
                }, "07386 315315")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-stone-800">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-4 lg:gap-x-12 lg:gap-y-0 gap-y-8 lg:px-0 px-8 py-10"${_scopeId}><div class="lg:col-span-1 col-span-4"${_scopeId}><img class="w-48" src="/images/logo-light.webp" alt="Roadside24 Logo"${_scopeId}><p class="mt-6 text-gray-500 text-sm"${_scopeId}> Roadside24 is your 24/7 solution for on-the-go tyre fitting, puncture repairs, and emergency assistance. Our experienced technicians bring expertise to your doorstep, ensuring you stay on the road safely. Contact us anytime – we&#39;re here to keep you moving. </p></div><div class="lg:col-span-1 col-span-4"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white"${_scopeId}>SERVICES</p><div class="space-y-3 flex flex-col items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/mobile-tyre-fitting",
              title: "Mobile Tyre Fitting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/mobile-tyre-repair",
              title: "Mobile Tyre Repair"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/van-mobile-tyre-fitting",
              title: "Van Mobile Tyre Fitting"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Van Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Van Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/branded-tyres",
              title: "Branded Tyres"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Branded Tyres`);
                } else {
                  return [
                    createTextVNode("Branded Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="lg:col-span-1 col-span-4"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white"${_scopeId}>HELP</p><div class="space-y-3 flex flex-col items-start"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/#coverage",
              title: "Our Coverage"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Our Coverage`);
                } else {
                  return [
                    createTextVNode("Our Coverage")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/contact",
              title: "Contact Us"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact Us`);
                } else {
                  return [
                    createTextVNode("Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/privacy-policy",
              title: "Privacy Policy"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              class: "text-sm text-gray-500 underline hover:text-gray-300",
              href: "/sitemap",
              title: "Sitemap"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sitemap`);
                } else {
                  return [
                    createTextVNode("Sitemap")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="lg:col-span-1 col-span-4"${_scopeId}><p class="text-xl tracking-wide mb-2 text-white text-center"${_scopeId}>SECURE PAYMENTS</p><div class="space-y-3 flex items-center justify-center flex-wrap"${_scopeId}><img class="w-20" src="/images/card/visa.webp" alt="Visa"${_scopeId}><img class="w-20" src="/images/card/mastercard.webp" alt="Mastercard"${_scopeId}><img class="w-20" src="/images/card/discover.webp" alt="Discover"${_scopeId}><img class="w-20" src="/images/card/apple-pay.webp" alt="Apple Pay"${_scopeId}><img class="w-20" src="/images/card/google-pay.webp" alt="Google Pay"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-4 lg:gap-x-12 lg:gap-y-0 gap-y-8 lg:px-0 px-8 py-10" }, [
                createVNode("div", { class: "lg:col-span-1 col-span-4" }, [
                  createVNode("img", {
                    class: "w-48",
                    src: "/images/logo-light.webp",
                    alt: "Roadside24 Logo"
                  }),
                  createVNode("p", { class: "mt-6 text-gray-500 text-sm" }, " Roadside24 is your 24/7 solution for on-the-go tyre fitting, puncture repairs, and emergency assistance. Our experienced technicians bring expertise to your doorstep, ensuring you stay on the road safely. Contact us anytime – we're here to keep you moving. ")
                ]),
                createVNode("div", { class: "lg:col-span-1 col-span-4" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white" }, "SERVICES"),
                  createVNode("div", { class: "space-y-3 flex flex-col items-start" }, [
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/mobile-tyre-fitting",
                      title: "Mobile Tyre Fitting"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Mobile Tyre Fitting")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/mobile-tyre-repair",
                      title: "Mobile Tyre Repair"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Mobile Tyre Repair")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/van-mobile-tyre-fitting",
                      title: "Van Mobile Tyre Fitting"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Van Mobile Tyre Repair")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/branded-tyres",
                      title: "Branded Tyres"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Branded Tyres")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-1 col-span-4" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white" }, "HELP"),
                  createVNode("div", { class: "space-y-3 flex flex-col items-start" }, [
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/#coverage",
                      title: "Our Coverage"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Our Coverage")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/contact",
                      title: "Contact Us"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Contact Us")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/privacy-policy",
                      title: "Privacy Policy"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Privacy Policy")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Link), {
                      class: "text-sm text-gray-500 underline hover:text-gray-300",
                      href: "/sitemap",
                      title: "Sitemap"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Sitemap")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "lg:col-span-1 col-span-4" }, [
                  createVNode("p", { class: "text-xl tracking-wide mb-2 text-white text-center" }, "SECURE PAYMENTS"),
                  createVNode("div", { class: "space-y-3 flex items-center justify-center flex-wrap" }, [
                    createVNode("img", {
                      class: "w-20",
                      src: "/images/card/visa.webp",
                      alt: "Visa"
                    }),
                    createVNode("img", {
                      class: "w-20",
                      src: "/images/card/mastercard.webp",
                      alt: "Mastercard"
                    }),
                    createVNode("img", {
                      class: "w-20",
                      src: "/images/card/discover.webp",
                      alt: "Discover"
                    }),
                    createVNode("img", {
                      class: "w-20",
                      src: "/images/card/apple-pay.webp",
                      alt: "Apple Pay"
                    }),
                    createVNode("img", {
                      class: "w-20",
                      src: "/images/card/google-pay.webp",
                      alt: "Google Pay"
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-stone-900">`);
      _push(ssrRenderComponent(Container, { class: "flex lg:flex-row lg:space-y-0 space-y-2 flex-col items-center justify-between py-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-sm text-center text-gray-500"${_scopeId}>© 2022 Roadside24 | All Rights Reserved</p><p class="text-gray-300 text-center text-sm"${_scopeId}>Website by: <a class="text-white hover:underline" href="https://skelop.com" target="_blank" rel="noreferrer"${_scopeId}>SKELOP Website Design &amp; Development</a></p>`);
          } else {
            return [
              createVNode("p", { class: "text-sm text-center text-gray-500" }, "© 2022 Roadside24 | All Rights Reserved"),
              createVNode("p", { class: "text-gray-300 text-center text-sm" }, [
                createTextVNode("Website by: "),
                createVNode("a", {
                  class: "text-white hover:underline",
                  href: "https://skelop.com",
                  target: "_blank",
                  rel: "noreferrer"
                }, "SKELOP Website Design & Development")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></footer>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const WhatsappIcon_vue_vue_type_style_index_0_scoped_4c603380_lang = "";
const _sfc_main$d = {
  __name: "WhatsappIcon",
  __ssrInlineRender: true,
  props: {
    phoneNumber: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const whatsappUrl = computed(() => {
      let baseUrl = "https://wa.me/";
      let encodedMessage = encodeURIComponent(message.value);
      return `${baseUrl}${props.phoneNumber}?text=${encodedMessage}`;
    });
    const textOpen = ref(false);
    let time = "";
    onMounted(() => {
      let date = new Date();
      time = date.getHours() + ":" + date.getMinutes();
    });
    const message = ref("");
    const textarea = ref(null);
    const adjustHeight = () => {
      const el = textarea.value;
      if (!el)
        return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
      const maxHeight = 3 * parseFloat(getComputedStyle(el).lineHeight);
      if (el.scrollHeight > maxHeight) {
        el.style.height = `${maxHeight}px`;
        el.style.overflowY = "auto";
      } else {
        el.style.overflowY = "hidden";
      }
    };
    watch(textOpen, (newVal) => {
      if (newVal) {
        nextTick(() => {
          adjustHeight();
        });
      }
    });
    onMounted(() => {
      nextTick(() => {
        adjustHeight();
      });
    });
    watch(message, () => {
      adjustHeight();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-4 left-4 z-50" }, _attrs))} data-v-4c603380><button data-v-4c603380><svg xmlns="http://www.w3.org/2000/svg" aria-label="WhatsApp" role="img" class="w-14 h-14" viewBox="0 0 512 512" data-v-4c603380><rect width="512" height="512" rx="15%" fill="#25d366" data-v-4c603380></rect><path fill="#25d366" stroke="#ffffff" stroke-width="26" d="M123 393l14-65a138 138 0 1150 47z" data-v-4c603380></path><path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" data-v-4c603380></path></svg></button><div style="${ssrRenderStyle(textOpen.value ? null : { display: "none" })}" class="absolute -top-4 -translate-y-full bg-white border sm:w-96 w-72 rounded-xl overflow-hidden" data-v-4c603380><div class="flex items-center relative p-4" data-v-4c603380><div class="w-14 h-14 rounded-full relative" data-v-4c603380><img src="/android-chrome-192x192.png" alt="VelocityTech" class="w-full h-full object-cover" data-v-4c603380><div class="absolute h-2 w-2 bg-green-500 absolute bottom-0.5 right-0.5 rounded-full animate-pulse" data-v-4c603380></div></div><div class="flex flex-col ml-4" data-v-4c603380><span class="font-medium" data-v-4c603380>${ssrInterpolate(__props.name)}</span><span class="text-sm" data-v-4c603380>Typically replies within 15 minutes</span></div><button class="absolute top-2 right-2 text-gray-500" data-v-4c603380><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" data-v-4c603380><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" data-v-4c603380></path></svg></button></div><div class="bg-whatsapp px-5 pt-5 pb-8" data-v-4c603380><div class="relative py-1.5 px-3.5 bg-white rounded-b-full rounded-tr-full" data-v-4c603380><span data-v-4c603380>How Can We Help?</span><span class="text-xs ml-3 text-gray-400" data-v-4c603380>${ssrInterpolate(unref(time))}</span><svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="currentColor" class="absolute top-0 -left-[9px] text-white" data-v-4c603380><path d="M0.772965 3.01404C-0.0113096 1.68077 0.950002 0 2.49683 0H9V17L0.772965 3.01404Z" fill="currentColor" data-v-4c603380></path></svg></div></div><div class="relative py-3 pl-5 pr-16" data-v-4c603380><textarea area-required="false" placeholder="Enter Your Message..." inputmode="text" class="h-auto border-0 outline-0 ring-0 focus:ring-0 resize-none w-full m-0 p-0 overflow-y-auto custom-scrollbar" rows="1" data-v-4c603380>${ssrInterpolate(message.value)}</textarea><a${ssrRenderAttr("href", whatsappUrl.value)} target="_blank" rel="noopener noreferrer" class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-green-500 hover:bg-green-400 rounded-full w-7 h-7 flex items-center justify-center transition" data-v-4c603380><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" data-v-4c603380><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" data-v-4c603380></path></svg></a></div></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/WhatsappIcon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const WhatsappIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-4c603380"]]);
const _sfc_main$c = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Header, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(ssrRenderComponent(WhatsappIcon, {
        name: "Roadside24",
        phoneNumber: "+447442980101"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-[65vh] max-h-[550px] min-h-[480px] md:w-full overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Carousel.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender]]);
const CarouselSlide_vue_vue_type_style_index_0_scoped_71fae043_lang = "";
const _sfc_main$a = {
  __name: "CarouselSlide",
  __ssrInlineRender: true,
  props: {
    visibleSlide: Number,
    index: Number,
    direction: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.visibleSlide === __props.index ? null : { display: "none" },
        class: "absolute inset-0"
      }, _attrs))} data-v-71fae043>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CarouselSlide.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-71fae043"]]);
const slidesLen$1 = 5;
const interval$1 = 10;
const _sfc_main$9 = {
  __name: "MainCarousel",
  __ssrInlineRender: true,
  setup(__props) {
    const isSliding = ref(false);
    const visibleSlide = ref(0);
    const direction = ref("left");
    const slideTimer = ref(interval$1);
    watch(slideTimer, () => {
      if (slideTimer.value === 0) {
        slideTimer.value = interval$1;
        next();
      } else {
        setTimeout(() => {
          slideTimer.value--;
        }, 1e3);
      }
    }, { immediate: true });
    function next() {
      if (isSliding.value)
        return;
      if (visibleSlide.value >= slidesLen$1 - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value += 1;
      }
      direction.value = "left";
      setSliding();
    }
    function prev() {
      if (isSliding.value)
        return;
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen$1 - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = "right";
      setSliding();
    }
    function setSliding() {
      isSliding.value = true;
      setTimeout(() => {
        isSliding.value = false;
      }, 600);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(Carousel, {
        onNext: next,
        onPrev: prev
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 0,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_1", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_1")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 1,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_2", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_2")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 2,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_3", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_3")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 3,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_4", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_4")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 4,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_5", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_5")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(CarouselSlide, {
                index: 0,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_1")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 1,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_2")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 2,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_3")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 3,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_4")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 4,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_5")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center font-light text-white xl:text-4xl md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="text-center font-bold text-gray-200 xl:text-6xl md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="text-center font-light text-gray-200 xl:text-4xl md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex sm:flex-row flex-col items-center justify-center sm:space-x-6 sm:space-y-0 space-y-4 sm:mt-10 mt-6"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="xl:h-12 md:h-8 xl:w-12 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "block text-white bg-site-500 font-medium md:px-8 md:py-4 px-6 py-4 uppercase hover:bg-site-300 transition cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mobile Tyre Fitting `);
                } else {
                  return [
                    createTextVNode(" Mobile Tyre Fitting ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "text-center font-light text-white xl:text-4xl md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "text-center font-bold text-gray-200 xl:text-6xl md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "text-center font-light text-gray-200 xl:text-4xl md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Fitting - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex sm:flex-row flex-col items-center justify-center sm:space-x-6 sm:space-y-0 space-y-4 sm:mt-10 mt-6" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "xl:h-12 md:h-8 xl:w-12 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ]),
                createVNode(unref(Link), {
                  href: "/mobile-tyre-fitting",
                  class: "block text-white bg-site-500 font-medium md:px-8 md:py-4 px-6 py-4 uppercase hover:bg-site-300 transition cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Mobile Tyre Fitting ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MainCarousel.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "AreasWeCover",
  __ssrInlineRender: true,
  setup(__props) {
    const areasWeCover = [
      {
        name: "Aylesbury",
        slug: "aylesbury"
      },
      {
        name: "Beaconsfield",
        slug: "beaconsfield"
      },
      {
        name: "Birmingham",
        slug: "birmingham"
      },
      {
        name: "Bradford",
        slug: "bradford"
      },
      {
        name: "Bristol",
        slug: "bristol"
      },
      {
        name: "High Wycombe",
        slug: "high-wycombe"
      },
      {
        name: "Leeds",
        slug: "leeds"
      },
      {
        name: "Leicester",
        slug: "leicester"
      },
      {
        name: "Liverpool",
        slug: "liverpool"
      },
      {
        name: "London",
        slug: "london"
      },
      {
        name: "Manchester",
        slug: "manchester"
      },
      {
        name: "Oxford",
        slug: "oxford"
      },
      {
        name: "Reading",
        slug: "reading"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "xl:h-[330px] md:h-[288px] sm:h-[250px] h-fit min-h-[300px] relative select-none",
        id: "coverage"
      }, _attrs))}><img src="/images/areas-we-cover.webp" class="absolute inset-0 object-center object-cover h-full w-full brightness-[0.4]" alt="Roadside24 Coverage Zone"><div class="absolute right-4 left-4 top-5 md:pt-8 sm:pt-4 pb-5 text-white text-center"><div class="mb-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div><h3 class="text-center sm:text-3xl text-2xl font-extrabold font-montserrat">Areas We Cover</h3><div class="flex items-center justify-center flex-row flex-wrap mt-6 space-y-1 space-x-1.5 xl:text-base text-sm"><!--[-->`);
      ssrRenderList(areasWeCover, (area) => {
        _push(ssrRenderComponent(unref(Link), {
          href: "/coverage/" + area.slug,
          class: "flex items-center hover:text-site-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 fill-site-100" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg> ${ssrInterpolate(area.name)}`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-4 w-4 mr-1 fill-site-100",
                  viewBox: "0 0 20 20"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                    "clip-rule": "evenodd"
                  })
                ])),
                createTextVNode(" " + toDisplayString(area.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/sitemap",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`&amp; More!`);
          } else {
            return [
              createTextVNode("& More!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AreasWeCover.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting &amp; Repair | Top Quality Cheap Tyres | Roadside24</title><meta name="description" content="Roadside24 provides 24/7 mobile tyre fitting and mobile tyre repair. Fast, reliable, and efficient service to keep you moving anytime, anywhere."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting & Repair | Top Quality Cheap Tyres | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Roadside24 provides 24/7 mobile tyre fitting and mobile tyre repair. Fast, reliable, and efficient service to keep you moving anytime, anywhere."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, {
        img_1: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-1-400.webp" srcset="/images/carousel/mobile-tyre-fitting-1.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre fitting and repair"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-1-400.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-1.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre fitting and repair"
              })
            ];
          }
        }),
        img_2: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-2.webp" srcset="/images/carousel/mobile-tyre-fitting-2.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair at home, work or roadside" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-2.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-2.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair at home, work or roadside",
                loading: "lazy"
              })
            ];
          }
        }),
        img_3: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-3.webp" srcset="/images/carousel/mobile-tyre-fitting-3.webp 1024w,
                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Roadside mobile tyre fitting" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-3.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-3.webp 1024w,\n                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Roadside mobile tyre fitting",
                loading: "lazy"
              })
            ];
          }
        }),
        img_4: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-4.webp" srcset="/images/carousel/mobile-tyre-fitting-4.webp 1024w,
                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre services at home, work or roadside" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-4.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-4.webp 1024w,\n                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre services at home, work or roadside",
                loading: "lazy"
              })
            ];
          }
        }),
        img_5: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-5.webp" srcset="/images/carousel/mobile-tyre-fitting-5.webp 1024w,
                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="24/7 Mobile Tyre Services" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-5.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-5.webp 1024w,\n                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "24/7 Mobile Tyre Services",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between"${_scopeId}><div class="lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center"${_scopeId}><div class=""${_scopeId}><p class="xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat"${_scopeId}>Why choose mobile tyre fitting?</p><ul class="xl:pl-4 pl-0 mt-10 space-y-4"${_scopeId}><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Cost-effective solution for your tyre needs</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Quick response, so you don&#39;t wait for breakdown services</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Keeps you and your car safe</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Fitted at your convenience, you choose the time &amp; place.</span></li></ul></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$8, { class: "lg:w-1/2 w-full" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between" }, [
                createVNode("div", { class: "lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("p", { class: "xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat" }, "Why choose mobile tyre fitting?"),
                    createVNode("ul", { class: "xl:pl-4 pl-0 mt-10 space-y-4" }, [
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Cost-effective solution for your tyre needs")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Quick response, so you don't wait for breakdown services")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Keeps you and your car safe")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Fitted at your convenience, you choose the time & place.")
                      ])
                    ])
                  ])
                ]),
                createVNode(_sfc_main$8, { class: "lg:w-1/2 w-full" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, {
        class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4",
        id: "about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}>Welcome to <span class="text-site-700"${_scopeId}>Roadside24</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We bring the garage to your car, so you don&#39;t have to.</h2><p class="text-sm"${_scopeId}> When it comes to when we may encounter a flat tyre, no person knows. It can happen anytime, anywhere and there is nothing as annoying as spending your precious leisure time. That is why at <b${_scopeId}>Roadside24</b>, we have a mobile tyre fitting and repair service that you should never hesitate to reach out to. We have several experienced tyre fitters on the stand-by in 30-60 minutes they will be at your place; putting your new tyre. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Whether you&#39;re at home, work or on the roadside, you&#39;re guaranteed to receive exceptional mobile tyre fitting service when you choose <b${_scopeId}>Roadside24</b></p><br${_scopeId}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="md:hidden block"${_scopeId}><img src="/images/24-hour-assistance.webp" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>24 Hour Assistance</h2><br${_scopeId}><p class="text-sm"${_scopeId}> Indeed, we grasp that tyre problems might take place at any moment. That&#39;s why we offer round-the-clock emergency aid. Whether late-night or weekend, we&#39;ll stand by to support you. Relax, knowing with <b${_scopeId}>Roadside24</b> you can hit the road fast, irrespective of your predicament. </p><br${_scopeId}><p class="text-sm"${_scopeId}> At <b${_scopeId}>Roadside24</b>, customer service is our priority. We&#39;re speedy and skillful. Whether you&#39;re near or far, we&#39;re there fast. Flat tyre? Puncture? Any tyre problem? We&#39;re on it in no time. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div><div class="md:block hidden col-span-5"${_scopeId}><img src="/images/24-hour-assistance.webp" alt=""${_scopeId}></div><div class="col-span-5"${_scopeId}><img src="/images/high-quality-tyres.webp" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>Ultimate Performance Tyres</h2><br${_scopeId}><p class="text-sm"${_scopeId}> At <b${_scopeId}>Roadside24</b>, our dedication lies in delivering top-tier tyres sourced from industry-leading brands. Be it high-performance tyres for sports cars or durable, trustworthy options for family vehicles, we’ve got you covered. Our inventory solely features tyres from esteemed manufacturers such as Michelin, Goodyear, Continental, and more, guaranteeing the optimal choice for your vehicle. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Rest assured that our team of tyre specialists boasts extensive knowledge and expertise. They are dedicated to assisting you in selecting the optimal tyres that align with your requirements and driving preferences. When you choose <b${_scopeId}>Roadside24</b>, you can place your trust in the fact that you are procuring the finest quality tyres on the market. Our unwavering dedication to ensuring customer contentment underpins this assurance. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createTextVNode("Welcome to "),
                  createVNode("span", { class: "text-site-700" }, "Roadside24")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring the garage to your car, so you don't have to."),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" When it comes to when we may encounter a flat tyre, no person knows. It can happen anytime, anywhere and there is nothing as annoying as spending your precious leisure time. That is why at "),
                  createVNode("b", null, "Roadside24"),
                  createTextVNode(", we have a mobile tyre fitting and repair service that you should never hesitate to reach out to. We have several experienced tyre fitters on the stand-by in 30-60 minutes they will be at your place; putting your new tyre. ")
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Whether you're at home, work or on the roadside, you're guaranteed to receive exceptional mobile tyre fitting service when you choose "),
                  createVNode("b", null, "Roadside24")
                ]),
                createVNode("br"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "md:hidden block" }, [
                    createVNode("img", {
                      src: "/images/24-hour-assistance.webp",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Assistance"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Indeed, we grasp that tyre problems might take place at any moment. That's why we offer round-the-clock emergency aid. Whether late-night or weekend, we'll stand by to support you. Relax, knowing with "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(" you can hit the road fast, irrespective of your predicament. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" At "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(", customer service is our priority. We're speedy and skillful. Whether you're near or far, we're there fast. Flat tyre? Puncture? Any tyre problem? We're on it in no time. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "md:block hidden col-span-5" }, [
                    createVNode("img", {
                      src: "/images/24-hour-assistance.webp",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/high-quality-tyres.webp",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Ultimate Performance Tyres"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" At "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(", our dedication lies in delivering top-tier tyres sourced from industry-leading brands. Be it high-performance tyres for sports cars or durable, trustworthy options for family vehicles, we’ve got you covered. Our inventory solely features tyres from esteemed manufacturers such as Michelin, Goodyear, Continental, and more, guaranteeing the optimal choice for your vehicle. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Rest assured that our team of tyre specialists boasts extensive knowledge and expertise. They are dedicated to assisting you in selecting the optimal tyres that align with your requirements and driving preferences. When you choose "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(", you can place your trust in the fact that you are procuring the finest quality tyres on the market. Our unwavering dedication to ensuring customer contentment underpins this assurance. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const slidesLen = 5;
const interval = 10;
const _sfc_main$6 = {
  __name: "LocationCarousel",
  __ssrInlineRender: true,
  props: {
    area: String
  },
  setup(__props) {
    const isSliding = ref(false);
    const visibleSlide = ref(0);
    const direction = ref("left");
    const slideTimer = ref(interval);
    watch(slideTimer, () => {
      if (slideTimer.value === 0) {
        slideTimer.value = interval;
        next();
      } else {
        setTimeout(() => {
          slideTimer.value--;
        }, 1e3);
      }
    }, { immediate: true });
    function next() {
      if (isSliding.value)
        return;
      if (visibleSlide.value >= slidesLen - 1) {
        visibleSlide.value = 0;
      } else {
        visibleSlide.value += 1;
      }
      direction.value = "left";
      setSliding();
    }
    function prev() {
      if (isSliding.value)
        return;
      if (visibleSlide.value <= 0) {
        visibleSlide.value = slidesLen - 1;
      } else {
        visibleSlide.value--;
      }
      direction.value = "right";
      setSliding();
    }
    function setSliding() {
      isSliding.value = true;
      setTimeout(() => {
        isSliding.value = false;
      }, 600);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(Carousel, {
        onNext: next,
        onPrev: prev
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 0,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_1", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_1")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 1,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_2", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_2")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 2,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_3", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_3")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 3,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_4", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_4")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(CarouselSlide, {
              index: 4,
              visibleSlide: visibleSlide.value,
              direction: direction.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "img_5", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "img_5")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(CarouselSlide, {
                index: 0,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_1")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 1,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_2")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 2,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_3")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 3,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_4")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"]),
              createVNode(CarouselSlide, {
                index: 4,
                visibleSlide: visibleSlide.value,
                direction: direction.value
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img_5")
                ]),
                _: 3
              }, 8, ["visibleSlide", "direction"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center font-light text-white xl:text-4xl md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="text-center font-bold text-gray-200 xl:text-6xl md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="text-center font-light text-gray-200 xl:text-4xl md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Fitting in ${ssrInterpolate(__props.area)}</h1><div class="flex sm:flex-row flex-col items-center justify-center sm:space-x-6 sm:space-y-0 space-y-4 sm:mt-10 mt-6"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="xl:h-12 md:h-8 xl:w-12 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "block text-white bg-site-500 font-medium md:px-8 md:py-4 px-6 py-4 uppercase hover:bg-site-300 transition cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mobile Tyre Fitting `);
                } else {
                  return [
                    createTextVNode(" Mobile Tyre Fitting ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "text-center font-light text-white xl:text-4xl md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "text-center font-bold text-gray-200 xl:text-6xl md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "text-center font-light text-gray-200 xl:text-4xl md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Fitting in " + toDisplayString(__props.area), 1),
              createVNode("div", { class: "flex sm:flex-row flex-col items-center justify-center sm:space-x-6 sm:space-y-0 space-y-4 sm:mt-10 mt-6" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "xl:h-12 md:h-8 xl:w-12 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ]),
                createVNode(unref(Link), {
                  href: "/mobile-tyre-fitting",
                  class: "block text-white bg-site-500 font-medium md:px-8 md:py-4 px-6 py-4 uppercase hover:bg-site-300 transition cursor-pointer"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Mobile Tyre Fitting ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LocationCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Location",
  __ssrInlineRender: true,
  props: {
    location: String,
    slug: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting &amp; Repair in ${ssrInterpolate(__props.location)} | Top Quality Cheap Tyres | Roadside24</title><meta name="description"${ssrRenderAttr("content", "Roadside24 offers 24/7 mobile tyre fitting and repair in " + __props.location + ". Fast, reliable, and efficient service to keep you moving anytime, anywhere.")}${_scopeId}><link rel="canonical"${ssrRenderAttr("href", "https://roadside24.co.uk/coverage/" + __props.slug)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting & Repair in " + toDisplayString(__props.location) + " | Top Quality Cheap Tyres | Roadside24", 1),
              createVNode("meta", {
                name: "description",
                content: "Roadside24 offers 24/7 mobile tyre fitting and repair in " + __props.location + ". Fast, reliable, and efficient service to keep you moving anytime, anywhere."
              }, null, 8, ["content"]),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/coverage/" + __props.slug
              }, null, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, { area: __props.location }, {
        img_1: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-1-400.webp" srcset="/images/carousel/mobile-tyre-fitting-1.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]"${ssrRenderAttr("alt", "Mobile tyre fitting in " + __props.location)}${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-1-400.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-1.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre fitting in " + __props.location
              }, null, 8, ["alt"])
            ];
          }
        }),
        img_2: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-2.webp" srcset="/images/carousel/mobile-tyre-fitting-2.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]"${ssrRenderAttr("alt", "Mobile tyre repair in " + __props.location)} loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-2.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-2.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair in " + __props.location,
                loading: "lazy"
              }, null, 8, ["alt"])
            ];
          }
        }),
        img_3: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-3.webp" srcset="/images/carousel/mobile-tyre-fitting-3.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Roadside mobile tyre fitting and repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-3.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-3.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Roadside mobile tyre fitting and repair",
                loading: "lazy"
              })
            ];
          }
        }),
        img_4: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-4.webp" srcset="/images/carousel/mobile-tyre-fitting-4.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Van mobile tyre services" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-4.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-4.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Van mobile tyre services",
                loading: "lazy"
              })
            ];
          }
        }),
        img_5: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-5.webp" srcset="/images/carousel/mobile-tyre-fitting-5.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-5.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-5.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between"${_scopeId}><div class="lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center"${_scopeId}><div class=""${_scopeId}><p class="xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat"${_scopeId}>Why choose mobile tyre fitting?</p><ul class="xl:pl-4 pl-0 mt-10 space-y-4"${_scopeId}><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Cost-effective solution for your tyre needs</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Quick response, so you don&#39;t wait for breakdown services</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Keeps you and your car safe</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Fitted at your convenience, you choose the time &amp; place.</span></li></ul></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$8, { class: "lg:w-1/2 w-full" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between" }, [
                createVNode("div", { class: "lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center" }, [
                  createVNode("div", { class: "" }, [
                    createVNode("p", { class: "xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat" }, "Why choose mobile tyre fitting?"),
                    createVNode("ul", { class: "xl:pl-4 pl-0 mt-10 space-y-4" }, [
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Cost-effective solution for your tyre needs")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Quick response, so you don't wait for breakdown services")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Keeps you and your car safe")
                      ]),
                      createVNode("li", { class: "flex items-start" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "currentColor",
                          class: "sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0",
                          viewBox: "0 0 16 16"
                        }, [
                          createVNode("path", { d: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" })
                        ])),
                        createVNode("span", { class: "xl:text-xl sm:text-lg text-base" }, "Fitted at your convenience, you choose the time & place.")
                      ])
                    ])
                  ])
                ]),
                createVNode(_sfc_main$8, { class: "lg:w-1/2 w-full" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, {
        class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4",
        id: "about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}>Welcome to Roadside24 in <span class="text-site-700"${_scopeId}>${ssrInterpolate(__props.location)}</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We bring the garage to your car, so you don&#39;t have to.</h2><p class="text-sm"${_scopeId}> Discover top-notch mobile tyre fitting and repair services in ${ssrInterpolate(__props.location)} with Roadside24. We are your reliable 24/7 solution for on-the-go tire needs, ensuring you stay on the road without a hitch. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Whether you&#39;re at home, work or on the roadside, you&#39;re guaranteed to receive exceptional mobile tyre fitting service when you choose <b${_scopeId}>Roadside24</b></p><br${_scopeId}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="md:hidden block"${_scopeId}><img src="/images/mobile-tyre-fitter.webp"${ssrRenderAttr("alt", "Mobile tyre repair in " + __props.location)}${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>Mobile Tyre Fitting</h2><br${_scopeId}><p class="text-sm"${_scopeId}> At Roadside24 in ${ssrInterpolate(__props.location)}, our mobile tyre fitting service is designed to bring convenience to your doorstep. Whether you&#39;re at home, work, or stranded on the roadside, our skilled technicians will swiftly replace or fit new tyres, ensuring your vehicle is roadworthy in no time. </p><br${_scopeId}><ul class="list-disc text-sm pl-6"${_scopeId}><li${_scopeId}><b${_scopeId}>On-the-Spot Fitting:</b> No need to visit a garage. We come to you for hassle-free tyre fitting.</li><li${_scopeId}><b${_scopeId}>Wide Range of Tyres:</b> Choose from our selection of quality tyres to suit your vehicle&#39;s needs.</li><li${_scopeId}><b${_scopeId}>Expert Technicians:</b> Our experienced team ensures precision and efficiency in every fitting.</li></ul><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div><div class="md:block hidden col-span-5"${_scopeId}><img src="/images/mobile-tyre-fitter.webp"${ssrRenderAttr("alt", "Mobile tyre repair in " + __props.location)}${_scopeId}></div><div class="col-span-5"${_scopeId}><img src="/images/24-hour-assistance.webp"${ssrRenderAttr("alt", "Mobile tyre fitting in " + __props.location)}${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>24/7 Emergency Tyre Assistance</h2><br${_scopeId}><p class="text-sm"${_scopeId}> Life doesn&#39;t always follow a schedule, and neither do tyre issues. That&#39;s why our emergency tyre assistance in ${ssrInterpolate(__props.location)} is available 24/7. Whether it&#39;s a flat tyre, a blowout, or any other unexpected tyre problem, Roadside24 is just a call away. </p><br${_scopeId}><p class="text-sm"${_scopeId}>What Sets Us Apart:</p><br${_scopeId}><ul class="list-disc text-sm pl-6"${_scopeId}><li${_scopeId}><b${_scopeId}>Rapid Response Time:</b> We understand the urgency of tyre emergencies. Expect prompt response and quick assistance.</li><li${_scopeId}><b${_scopeId}>Comprehensive Solutions:</b> From simple puncture repairs to complex tyre issues, we handle it all on the spot.</li><li${_scopeId}><b${_scopeId}>Safety First:</b> Your safety is our priority. Our team ensures that your vehicle is safe to drive before you hit the road again.</li></ul><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createTextVNode("Welcome to Roadside24 in "),
                  createVNode("span", {
                    class: "text-site-700",
                    textContent: toDisplayString(__props.location)
                  }, null, 8, ["textContent"])
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring the garage to your car, so you don't have to."),
                createVNode("p", { class: "text-sm" }, " Discover top-notch mobile tyre fitting and repair services in " + toDisplayString(__props.location) + " with Roadside24. We are your reliable 24/7 solution for on-the-go tire needs, ensuring you stay on the road without a hitch. ", 1),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Whether you're at home, work or on the roadside, you're guaranteed to receive exceptional mobile tyre fitting service when you choose "),
                  createVNode("b", null, "Roadside24")
                ]),
                createVNode("br"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "md:hidden block" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-fitter.webp",
                      alt: "Mobile tyre repair in " + __props.location
                    }, null, 8, ["alt"])
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Mobile Tyre Fitting"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " At Roadside24 in " + toDisplayString(__props.location) + ", our mobile tyre fitting service is designed to bring convenience to your doorstep. Whether you're at home, work, or stranded on the roadside, our skilled technicians will swiftly replace or fit new tyres, ensuring your vehicle is roadworthy in no time. ", 1),
                    createVNode("br"),
                    createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                      createVNode("li", null, [
                        createVNode("b", null, "On-the-Spot Fitting:"),
                        createTextVNode(" No need to visit a garage. We come to you for hassle-free tyre fitting.")
                      ]),
                      createVNode("li", null, [
                        createVNode("b", null, "Wide Range of Tyres:"),
                        createTextVNode(" Choose from our selection of quality tyres to suit your vehicle's needs.")
                      ]),
                      createVNode("li", null, [
                        createVNode("b", null, "Expert Technicians:"),
                        createTextVNode(" Our experienced team ensures precision and efficiency in every fitting.")
                      ])
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "md:block hidden col-span-5" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-fitter.webp",
                      alt: "Mobile tyre repair in " + __props.location
                    }, null, 8, ["alt"])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/24-hour-assistance.webp",
                      alt: "Mobile tyre fitting in " + __props.location
                    }, null, 8, ["alt"])
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24/7 Emergency Tyre Assistance"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Life doesn't always follow a schedule, and neither do tyre issues. That's why our emergency tyre assistance in " + toDisplayString(__props.location) + " is available 24/7. Whether it's a flat tyre, a blowout, or any other unexpected tyre problem, Roadside24 is just a call away. ", 1),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, "What Sets Us Apart:"),
                    createVNode("br"),
                    createVNode("ul", { class: "list-disc text-sm pl-6" }, [
                      createVNode("li", null, [
                        createVNode("b", null, "Rapid Response Time:"),
                        createTextVNode(" We understand the urgency of tyre emergencies. Expect prompt response and quick assistance.")
                      ]),
                      createVNode("li", null, [
                        createVNode("b", null, "Comprehensive Solutions:"),
                        createTextVNode(" From simple puncture repairs to complex tyre issues, we handle it all on the spot.")
                      ]),
                      createVNode("li", null, [
                        createVNode("b", null, "Safety First:"),
                        createTextVNode(" Your safety is our priority. Our team ensures that your vehicle is safe to drive before you hit the road again.")
                      ])
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Location.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "MobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting | Same Day at Home, Work or Roadside | Roadside24</title><meta name="description" content="Mobile tyre fitting in Oxfordshire and Buckinghamshire. Same-day service at work, home, or roadside. Fast and reliable tyre fitting to keep you moving anytime."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting | Same Day at Home, Work or Roadside | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Mobile tyre fitting in Oxfordshire and Buckinghamshire. Same-day service at work, home, or roadside. Fast and reliable tyre fitting to keep you moving anytime."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/mobile-tyre-fitting-showcase-400.webp" srcset="/images/mobile-tyre-fitting-showcase.webp 1024w,
                        /images/mobile-tyre-fitting-showcase-800.webp 800w,
                        /images/mobile-tyre-fitting-showcase-400.webp 400w" sizes="100vw" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting at your home or on the roadside"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Fitting - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Mobile Tyre Fitting</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We know visiting a garage can use up valuable free time, so use our Mobile Tyre Fitting service instead</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}> Mobile tyre fitting is the most convenient and stress-free way to replace your tyres. You won&#39;t have to take time out of your busy schedule to visit a garage or tyre centre with <b${_scopeId}>Roadside24</b>. Whether you&#39;re at home, work, or on the side of the road, our team of experts will come to you. This means that you can have your tyres fitted without having to disrupt your day or waste time travelling. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Mobile tyre fitting is also more cost-effective, as you won&#39;t have to pay for a tow truck or transportation to a tyre centre. With Roadside24, you can have peace of mind knowing that your tyre fitting needs are taken care of quickly and efficiently, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre fitting and make your next tyre change a hassle-free experience with Roadside24. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/mobile-tyre-fitting.webp" alt=""${_scopeId}></div><div class="col-span-5"${_scopeId}><img src="/images/emergency-mobile-tyre-fitting.webp" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>Emergency Mobile Tyre Fitting</h2><br${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>Roadside24</b>&#39;s emergency mobile tyre fitting is the ideal solution for those unexpected tyre problems. Our team of experts is available 24 hours a day to assist you if you have a flat tyre on the side of the road, a puncture in the middle of the night, or any other tyre-related emergency. You won&#39;t have to wait long for assistance because of our quick response time, giving you peace of mind in a potentially stressful situation. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With our mobile tyre fitting services, you won&#39;t have to worry about finding a late-night garage or tyre centre, or paying for a tow truck to transport your vehicle. We come to you, making the process fast and easy. So, why not choose <b${_scopeId}>Roadside24</b> for your emergency mobile tyre fitting requirements and see the difference that our expert and efficient services can make? </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Mobile Tyre Fitting")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We know visiting a garage can use up valuable free time, so use our Mobile Tyre Fitting service instead"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Mobile tyre fitting is the most convenient and stress-free way to replace your tyres. You won't have to take time out of your busy schedule to visit a garage or tyre centre with "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(". Whether you're at home, work, or on the side of the road, our team of experts will come to you. This means that you can have your tyres fitted without having to disrupt your day or waste time travelling. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Mobile tyre fitting is also more cost-effective, as you won't have to pay for a tow truck or transportation to a tyre centre. With Roadside24, you can have peace of mind knowing that your tyre fitting needs are taken care of quickly and efficiently, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre fitting and make your next tyre change a hassle-free experience with Roadside24. "),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-fitting.webp",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/emergency-mobile-tyre-fitting.webp",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Emergency Mobile Tyre Fitting"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Roadside24"),
                      createTextVNode("'s emergency mobile tyre fitting is the ideal solution for those unexpected tyre problems. Our team of experts is available 24 hours a day to assist you if you have a flat tyre on the side of the road, a puncture in the middle of the night, or any other tyre-related emergency. You won't have to wait long for assistance because of our quick response time, giving you peace of mind in a potentially stressful situation. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" With our mobile tyre fitting services, you won't have to worry about finding a late-night garage or tyre centre, or paying for a tow truck to transport your vehicle. We come to you, making the process fast and easy. So, why not choose "),
                      createVNode("b", null, "Roadside24"),
                      createTextVNode(" for your emergency mobile tyre fitting requirements and see the difference that our expert and efficient services can make? ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreFitting.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "MobileTyreRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Repair | Same Day at Home, Work or Roadside | Roadside24</title><meta name="description" content="Get fast, reliable mobile tyre repair in Oxfordshire and Buckinghamshire. We repair punctures at work, home, or roadside, keeping you safely on the road."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/mobile-tyre-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Repair | Same Day at Home, Work or Roadside | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Get fast, reliable mobile tyre repair in Oxfordshire and Buckinghamshire. We repair punctures at work, home, or roadside, keeping you safely on the road."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/mobile-tyre-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/mobile-tyre-repair-showcase-400.webp" srcset="/images/mobile-tyre-repair-showcase.webp 1024w,
                        /images/mobile-tyre-repair-showcase-800.webp 800w,
                        /images/mobile-tyre-repair-showcase-400.webp 400w" sizes="100vw" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Repair at home"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Repair - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Repair - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Mobile Tyre Repair</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>Roadside24&#39;s most convenient and efficient service, in which a team of experts comes to you to repair your tyre issue.</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>Roadside24</b>&#39;s mobile tyre repair is the hassle-free solution to your tyre problems. You won&#39;t have to waste time or effort looking for a garage or tyre centre because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to repair your tyre on the spot, whether it&#39;s a puncture, a slow leak, or any other problem. This means you can have your tyre repaired quickly and efficiently, without interrupting your busy schedule. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Our mobile tyre repair service is also cost-effective, as you won&#39;t have to pay for a tow truck or transportation to a tyre centre. With Roadside24, you can have peace of mind knowing that your tyre repair needs are taken care of quickly and professionally, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre repair with Roadside24 for your next tyre issue. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/mobile-tyre-repair.webp" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Mobile Tyre Repair")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Roadside24's most convenient and efficient service, in which a team of experts comes to you to repair your tyre issue."),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Roadside24"),
                      createTextVNode("'s mobile tyre repair is the hassle-free solution to your tyre problems. You won't have to waste time or effort looking for a garage or tyre centre because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to repair your tyre on the spot, whether it's a puncture, a slow leak, or any other problem. This means you can have your tyre repaired quickly and efficiently, without interrupting your busy schedule. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Our mobile tyre repair service is also cost-effective, as you won't have to pay for a tow truck or transportation to a tyre centre. With Roadside24, you can have peace of mind knowing that your tyre repair needs are taken care of quickly and professionally, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre repair with Roadside24 for your next tyre issue. "),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-repair.webp",
                      alt: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreRepair.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Our Privacy Policy | Roadside24</title><meta name="description" content="Learn how we collect, use, and protect your personal data. Read our privacy policy for detailed information on data handling and your privacy rights."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/privacy-policy"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Our Privacy Policy | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Learn how we collect, use, and protect your personal data. Read our privacy policy for detailed information on data handling and your privacy rights."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/privacy-policy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[40vh] max-h-[550px] md:min-h-[440px] sm:min-h-[340px] min-h-[300px] md:w-full overflow-hidden"><div class="bg-black h-full"></div></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Privacy Policy</span></h1><p class="text-sm"${_scopeId}> Roadside24 respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Controller</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Roadside24 is the controller and responsible for your personal data. </p><br${_scopeId}><p class="text-sm"${_scopeId}> If you have any questions about this privacy notice, please contact the data privacy manager here <a class="text-blue-600 underline" href="mailto:info@roadside24.co.uk"${_scopeId}>info@roadside24.co.uk</a>. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Third-party links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Cookies</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Cookies are set by the services that we use: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc space-y-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Analytics</span> we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit <a class="text-blue-600 underline" href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" rel="noreferrer"${_scopeId}> https://policies.google.com/technologies/cookies?hl=en-US </a></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Advertising</span> We use Google Adsense to place adverts on our site. Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to Wheel Fit and/or other sites on the Internet. You can opt out of personalised ads by visiting <a class="text-blue-600 underline" href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noreferrer"${_scopeId}> https://myaccount.google.com/data-and-privacy </a></li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>The type of personal information we collect</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We currently collect and process the following information: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Identity data</span> (for example first name, last name, title, date of birth)</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Contact data</span> (for example address, email address, mobile number)</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How is the personal information collected?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Most of the personal information we process is directly provided by you for the following reasons: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>apply for services</li><li${_scopeId}>make an enquiry</li><li${_scopeId}>book an appointment</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How we use your personal data</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. </p><br${_scopeId}><b class="text-sm"${_scopeId}>Information provided by you:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to provide you with information/services that you request from us</li><li${_scopeId}>to comply with a legal or regulatory obligation</li></ul><br${_scopeId}><b class="text-sm"${_scopeId}>Information we automatically collect:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to administer our site including troubleshooting, testing, research and statistical purposes</li><li${_scopeId}>to improve our site to ensure that content is presented in the most effective manner for you and your computer</li><li${_scopeId}>to keep our site safe and secure</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Where is your data stored?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Your information is securely stored in our database </p><br${_scopeId}><p class="text-sm"${_scopeId}> We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Your data protection rights</h3><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right of access</span> - You have the right to ask us for copies of your personal information.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to rectification</span> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to erasure</span> - You have the right to ask us to erase your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to restriction of processing</span> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to object to processing</span> - You have the the right to object to the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to data portability</span> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li></ul><br${_scopeId}><p class="text-sm"${_scopeId}> You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Privacy Policy")
                ]),
                createVNode("p", { class: "text-sm" }, " Roadside24 respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Controller"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Roadside24 is the controller and responsible for your personal data. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" If you have any questions about this privacy notice, please contact the data privacy manager here "),
                  createVNode("a", {
                    class: "text-blue-600 underline",
                    href: "mailto:info@roadside24.co.uk"
                  }, "info@roadside24.co.uk"),
                  createTextVNode(". ")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Third-party links"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Cookies"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Cookies are set by the services that we use: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc space-y-2" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Analytics"),
                    createTextVNode(" we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://policies.google.com/technologies/cookies?hl=en-US",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://policies.google.com/technologies/cookies?hl=en-US ")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Google Advertising"),
                    createTextVNode(" We use Google Adsense to place adverts on our site. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to Wheel Fit and/or other sites on the Internet. You can opt out of personalised ads by visiting "),
                    createVNode("a", {
                      class: "text-blue-600 underline",
                      href: "https://myaccount.google.com/data-and-privacy",
                      target: "_blank",
                      rel: "noreferrer"
                    }, " https://myaccount.google.com/data-and-privacy ")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "The type of personal information we collect"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We currently collect and process the following information: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Identity data"),
                    createTextVNode(" (for example first name, last name, title, date of birth)")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Contact data"),
                    createTextVNode(" (for example address, email address, mobile number)")
                  ])
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How is the personal information collected?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Most of the personal information we process is directly provided by you for the following reasons: "),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "apply for services"),
                  createVNode("li", null, "make an enquiry"),
                  createVNode("li", null, "book an appointment")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "How we use your personal data"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. "),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information provided by you:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to provide you with information/services that you request from us"),
                  createVNode("li", null, "to comply with a legal or regulatory obligation")
                ]),
                createVNode("br"),
                createVNode("b", { class: "text-sm" }, "Information we automatically collect:"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, "to administer our site including troubleshooting, testing, research and statistical purposes"),
                  createVNode("li", null, "to improve our site to ensure that content is presented in the most effective manner for you and your computer"),
                  createVNode("li", null, "to keep our site safe and secure")
                ]),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Where is your data stored?"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " Your information is securely stored in our database "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Your data protection rights"),
                createVNode("br"),
                createVNode("ul", { class: "pl-4 text-sm list-disc" }, [
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right of access"),
                    createTextVNode(" - You have the right to ask us for copies of your personal information.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to rectification"),
                    createTextVNode(" - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to erasure"),
                    createTextVNode(" - You have the right to ask us to erase your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to restriction of processing"),
                    createTextVNode(" - You have the right to ask us to restrict the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to object to processing"),
                    createTextVNode(" - You have the the right to object to the processing of your personal information in certain circumstances.")
                  ]),
                  createVNode("li", null, [
                    createVNode("span", { class: "font-semibold" }, "Your right to data portability"),
                    createTextVNode(" - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.")
                  ])
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "Sitemap",
  __ssrInlineRender: true,
  props: {
    areas: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Sitemap | Tyres Anywhere LTD</title><meta name="description" content="Sitemap of our site roadside24.co.uk. This includes a list of all the pages in Roadside24 Mobile Tyre Fitting&#39;s website."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/sitemap"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Sitemap | Tyres Anywhere LTD"),
              createVNode("meta", {
                name: "description",
                content: "Sitemap of our site roadside24.co.uk. This includes a list of all the pages in Roadside24 Mobile Tyre Fitting's website."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/sitemap"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, {
        img_1: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-1-400.webp" srcset="/images/carousel/mobile-tyre-fitting-1.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-1-400.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-1.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-1-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-1-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre fitting"
              })
            ];
          }
        }),
        img_2: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-2.webp" srcset="/images/carousel/mobile-tyre-fitting-2.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-2.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-2.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-2-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-2-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair",
                loading: "lazy"
              })
            ];
          }
        }),
        img_3: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-3.webp" srcset="/images/carousel/mobile-tyre-fitting-3.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-3.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-3.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-3-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-3-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair",
                loading: "lazy"
              })
            ];
          }
        }),
        img_4: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-4.webp" srcset="/images/carousel/mobile-tyre-fitting-4.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-4.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-4.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-4-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-4-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair",
                loading: "lazy"
              })
            ];
          }
        }),
        img_5: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/mobile-tyre-fitting-5.webp" srcset="/images/carousel/mobile-tyre-fitting-5.webp 1000w,
                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,
                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w" sizes="100vw" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair" loading="lazy"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/mobile-tyre-fitting-5.webp",
                srcset: "/images/carousel/mobile-tyre-fitting-5.webp 1000w,\n                        /images/carousel/mobile-tyre-fitting-5-800.webp 800w,\n                        /images/carousel/mobile-tyre-fitting-5-400.webp 400w",
                sizes: "100vw",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair",
                loading: "lazy"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8"${_scopeId}><h1 class="sm:text-3xl text-2xl sm:mb-12 mb-6"${_scopeId}>Roadside24 Site Map</h1><div class="grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8"${_scopeId}><div class="xl:col-span-3 col-span-6"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Roadside24</p><div class="flex flex-col items-start mt-4 space-y-2"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Home`);
                } else {
                  return [
                    createTextVNode("Home")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-fitting",
              class: "md:text-base text-sm text-blue-500 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/mobile-tyre-repair",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Mobile Tyre Repair`);
                } else {
                  return [
                    createTextVNode("Mobile Tyre Repair")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/van-mobile-tyre-fitting",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Van Mobile Tyre Fitting`);
                } else {
                  return [
                    createTextVNode("Van Mobile Tyre Fitting")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/branded-tyres",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Branded Tyres`);
                } else {
                  return [
                    createTextVNode("Branded Tyres")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/contact",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact`);
                } else {
                  return [
                    createTextVNode("Contact")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: "/privacy-policy",
              class: "md:text-base text-sm text-blue-600 hover:underline"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Privacy Policy`);
                } else {
                  return [
                    createTextVNode("Privacy Policy")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="xl:col-span-9 col-span-12"${_scopeId}><p class="md:text-lg text-base font-semibold"${_scopeId}>Coverage</p><div class="grid grid-cols-12 gap-2 items-start mt-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.areas, (area) => {
              _push2(`<div class="col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: "/coverage/" + area.slug,
                class: "md:text-base text-sm text-blue-600 hover: capitalize"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "border-x border-gray-300 sm:px-8 px-2 pt-8 pb-8" }, [
                createVNode("h1", { class: "sm:text-3xl text-2xl sm:mb-12 mb-6" }, "Roadside24 Site Map"),
                createVNode("div", { class: "grid grid-cols-12 items-start justify-start sm:gap-x-4 gap-x-2 gap-y-8" }, [
                  createVNode("div", { class: "xl:col-span-3 col-span-6" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Roadside24"),
                    createVNode("div", { class: "flex flex-col items-start mt-4 space-y-2" }, [
                      createVNode(unref(Link), {
                        href: "/",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Home")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-fitting",
                        class: "md:text-base text-sm text-blue-500 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Fitting")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/mobile-tyre-repair",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Mobile Tyre Repair")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/van-mobile-tyre-fitting",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Van Mobile Tyre Fitting")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/branded-tyres",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Branded Tyres")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/contact",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Contact")
                        ]),
                        _: 1
                      }),
                      createVNode(unref(Link), {
                        href: "/privacy-policy",
                        class: "md:text-base text-sm text-blue-600 hover:underline"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Privacy Policy")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", { class: "xl:col-span-9 col-span-12" }, [
                    createVNode("p", { class: "md:text-lg text-base font-semibold" }, "Coverage"),
                    createVNode("div", { class: "grid grid-cols-12 gap-2 items-start mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.areas, (area) => {
                        return openBlock(), createBlock("div", { class: "col-span-4" }, [
                          createVNode(unref(Link), {
                            href: "/coverage/" + area.slug,
                            class: "md:text-base text-sm text-blue-600 hover: capitalize",
                            textContent: toDisplayString(area.area)
                          }, null, 8, ["href", "textContent"])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Sitemap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  __name: "VanMobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Van Mobile Tyre Fitting | Same Day at Home, Work or Roadside | Roadside24</title><meta name="description" content="Van mobile tyre fitting in Oxfordshire and Buckinghamshire. Same-day service at your home, work, or roadside. Expert fitting for vans, fast and reliable."${_scopeId}><link rel="canonical" href="https://roadside24.co.uk/van-mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Van Mobile Tyre Fitting | Same Day at Home, Work or Roadside | Roadside24"),
              createVNode("meta", {
                name: "description",
                content: "Van mobile tyre fitting in Oxfordshire and Buckinghamshire. Same-day service at your home, work, or roadside. Expert fitting for vans, fast and reliable."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://roadside24.co.uk/van-mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/van-mobile-tyre-fitting-showcase-400.webp" srcset="/images/van-mobile-tyre-fitting-showcase.webp 1024w,
                        /images/van-mobile-tyre-fitting-showcase-800.webp 800w,
                        /images/van-mobile-tyre-fitting-showcase-400.webp 400w" sizes="100vw" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Van Mobile Tyre Fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Van Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07386315315" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07386 315315</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Van Mobile Tyre Fitting - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07386315315",
                  class: "flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    class: "md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", { d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" })
                  ])),
                  createVNode("span", null, "07386 315315")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h2 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Van Mobile Tyre Fitting</span></h2><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>Yes, you heard right. Get your van tyres fitted at your convenience!</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>Roadside24</b>&#39;s van mobile tyre fitting service is the most convenient solution for all of your van tyre needs. You won&#39;t have to waste time or effort looking for a garage or tyre centre that can accommodate your van because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to quickly and efficiently install new tyres on your van without disrupting your busy schedule. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With van mobile tyre fitting, you can get your van back on the road quickly without having to arrange transportation or pay for a tow truck. We provide a diverse range of high-quality tyre brands and options to ensure that you get the right tyre for your specific van and driving needs. With Roadside24, you can rest assured that your van&#39;s tyre fitting needs will be met professionally and efficiently. So, for your next tyre change, why not go with van mobile tyre fitting from Roadside24? </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07386315315"${_scopeId}>07386 315315</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/van-mobile-tyre-fitting.webp" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h2", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Van Mobile Tyre Fitting")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, you heard right. Get your van tyres fitted at your convenience!"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "Roadside24"),
                      createTextVNode("'s van mobile tyre fitting service is the most convenient solution for all of your van tyre needs. You won't have to waste time or effort looking for a garage or tyre centre that can accommodate your van because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to quickly and efficiently install new tyres on your van without disrupting your busy schedule. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " With van mobile tyre fitting, you can get your van back on the road quickly without having to arrange transportation or pay for a tow truck. We provide a diverse range of high-quality tyre brands and options to ensure that you get the right tyre for your specific van and driving needs. With Roadside24, you can rest assured that your van's tyre fitting needs will be met professionally and efficiently. So, for your next tyre change, why not go with van mobile tyre fitting from Roadside24? "),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-4 w-4 mr-1",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        }),
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ])),
                      createVNode("span", null, [
                        createTextVNode("Need mobile tyre services ASAP?, please call us on "),
                        createVNode("a", {
                          class: "text-blue-600 underline",
                          href: "tel:07386315315"
                        }, "07386 315315"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/van-mobile-tyre-fitting.webp",
                      alt: ""
                    })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/VanMobileTyreFitting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/BrandedTyres.vue": __vite_glob_0_0, "./Pages/ContactUs.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/Location.vue": __vite_glob_0_3, "./Pages/MobileTyreFitting.vue": __vite_glob_0_4, "./Pages/MobileTyreRepair.vue": __vite_glob_0_5, "./Pages/PrivacyPolicy.vue": __vite_glob_0_6, "./Pages/Sitemap.vue": __vite_glob_0_7, "./Pages/VanMobileTyreFitting.vue": __vite_glob_0_8 });
      let page2 = pages[`./Pages/${name}.vue`];
      page2.default.layout = page2.default.layout || _sfc_main$c;
      return page2;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  }),
  3004
);
