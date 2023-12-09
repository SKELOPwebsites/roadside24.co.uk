import { useSSRContext, mergeProps, ref, onMounted, onUnmounted, watch, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, unref, toDisplayString, createTextVNode, withDirectives, vModelText, createCommentVNode, renderSlot, Transition, vShow, createSSRApp, h } from "vue";
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
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full 2xl:max-w-7xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl lg:px-0 px-2" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Container.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Container = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$e = {
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BrandLogoCarousel.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "OurServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        image_url: "/images/services/mobile-tyre-fitting.jpg",
        name: "Mobile Tyre Fitting",
        desc: "At home, work or roadside",
        href: "/mobile-tyre-fitting",
        component: "MobileTyreFitting"
      },
      {
        image_url: "/images/services/mobile-tyre-repair.jpg",
        name: "Mobile Tyre Repair",
        desc: "Securely seal your punctured tyre",
        href: "/mobile-tyre-repair",
        component: "MobileTyreRepair"
      },
      {
        image_url: "/images/services/van-mobile-tyre-fitting.jpg",
        name: "Van Mobile Tyre Fitting",
        desc: "Van tyres fitted at your convenience",
        href: "/van-mobile-tyre-fitting",
        component: "VanMobileTyreFitting"
      },
      {
        image_url: "/images/services/branded-tyres.jpg",
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
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/OurServices.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "BrandedTyres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>High Quality and Performant Tyres Available | TyresGo</title><meta name="description" content="We stock high quality and performant tyres from the leading tyre manufacturers"${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/branded-tyres"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "High Quality and Performant Tyres Available | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "We stock high quality and performant tyres from the leading tyre manufacturers"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/branded-tyres"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/branded-tyres-showcase.jpg" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Large range of quality brands available</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Large range of quality brands available"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Branded Tyres</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We stock high quality and performant tyres from leading tyre brands</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>TyresGo</b> branded tyres are the ideal choice for those who value safety, performance, and quality. From high-performance sports tyres to reliable all-season options, our selection of leading tyre brands has something to suit every need and budget. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Branded tyres are built to the highest standards, using cutting-edge technology and materials to provide superior handling, grip, and durability. Whether you want better fuel efficiency, a smoother and quieter ride, or better handling in bad weather, you can find the right tyre for your needs among our branded tyre options. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With TyresGo, you can have peace of mind knowing that you&#39;re investing in high-quality tyres that will improve your vehicle&#39;s safety, performance, and lifespan. So, for your next tyre change, why not go with branded tyres from TyresGo and see the difference that quality makes? </p></div><div class="col-span-5"${_scopeId}><img src="/images/branded-tyres.jpg" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Branded Tyres")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We stock high quality and performant tyres from leading tyre brands"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(" branded tyres are the ideal choice for those who value safety, performance, and quality. From high-performance sports tyres to reliable all-season options, our selection of leading tyre brands has something to suit every need and budget. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Branded tyres are built to the highest standards, using cutting-edge technology and materials to provide superior handling, grip, and durability. Whether you want better fuel efficiency, a smoother and quieter ride, or better handling in bad weather, you can find the right tyre for your needs among our branded tyre options. "),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " With TyresGo, you can have peace of mind knowing that you're investing in high-quality tyres that will improve your vehicle's safety, performance, and lifespan. So, for your next tyre change, why not go with branded tyres from TyresGo and see the difference that quality makes? ")
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/branded-tyres.jpg",
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
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/BrandedTyres.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const ContactUs_vue_vue_type_style_index_0_scoped_fd0b0f28_lang = "";
const _sfc_main$b = {
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
            _push2(`<title data-v-fd0b0f28${_scopeId}>Contact the Team | TyresGo</title><meta name="description" content="Contact the team!" data-v-fd0b0f28${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/contact" data-v-fd0b0f28${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Contact the Team | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "Contact the team!"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/contact"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative" data-v-fd0b0f28><div class="relative h-[40vh] max-h-[550px] md:min-h-[440px] sm:min-h-[340px] min-h-[300px] md:w-full overflow-hidden" data-v-fd0b0f28><img src="/images/contact-us.jpg" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting" data-v-fd0b0f28></div><div class="absolute top-1/4 left-0 right-0" data-v-fd0b0f28>`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" data-v-fd0b0f28${_scopeId}>Let&#39;s start a conversation</h1><h2 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" data-v-fd0b0f28${_scopeId}>Need to contact us for a particular reason? No problem!</h2><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" data-v-fd0b0f28${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition" data-v-fd0b0f28${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor" data-v-fd0b0f28${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" data-v-fd0b0f28${_scopeId}></path></svg><span data-v-fd0b0f28${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("h1", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "Let's start a conversation"),
              createVNode("h2", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Need to contact us for a particular reason? No problem!"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Container, { class: "py-16" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex md:flex-row flex-col-reverse md:items-start items-center w-full pb-5" data-v-fd0b0f28${_scopeId}><div class="md:w-5/12 w-full md:text-left text-center md:m-0 mt-12 mb-6" data-v-fd0b0f28${_scopeId}><h3 class="text-3xl mb-8" data-v-fd0b0f28${_scopeId}>Points of Contact</h3><div class="mb-6" data-v-fd0b0f28${_scopeId}><p class="text-lg font-bold mb-2" data-v-fd0b0f28${_scopeId}>Support &amp; Inquiries</p><p data-v-fd0b0f28${_scopeId}>info@tyresgo.co.uk</p></div><div data-v-fd0b0f28${_scopeId}><p class="text-lg font-bold mb-2" data-v-fd0b0f28${_scopeId}>Telephone</p><p data-v-fd0b0f28${_scopeId}>07960 099241</p></div></div><div class="md:w-7/12 w-full" data-v-fd0b0f28${_scopeId}><div class="bg-white shadow-xl px-6 py-4 rounded-lg" data-v-fd0b0f28${_scopeId}>`);
            if (_ctx.$page.props.success) {
              _push2(`<!--[--><p class="uppercase font-medium tracking-wide" data-v-fd0b0f28${_scopeId}>Message sent successfully</p><p class="text-sm mt-2" data-v-fd0b0f28${_scopeId}>Hold tight for our response soon!</p>`);
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
              _push2(`<!--[--><p class="text-sm text-gray-400 mb-4" data-v-fd0b0f28${_scopeId}>Note: * fields are required</p><div class="mb-4" data-v-fd0b0f28${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="fname" data-v-fd0b0f28${_scopeId}> First Name <span class="text-red-500" data-v-fd0b0f28${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).first_name)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="fname" autocomplete="given-name" type="text" data-v-fd0b0f28${_scopeId}>`);
              if (_ctx.$page.props.errors.first_name) {
                _push2(`<span class="text-xs text-red-500" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.first_name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-fd0b0f28${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="lname" data-v-fd0b0f28${_scopeId}> Last Name <span class="text-red-500" data-v-fd0b0f28${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).last_name)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="lname" autocomplete="family-name" type="text" data-v-fd0b0f28${_scopeId}>`);
              if (_ctx.$page.props.errors.last_name) {
                _push2(`<span class="text-xs text-red-500" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.last_name)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-fd0b0f28${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="email" data-v-fd0b0f28${_scopeId}> E-mail Address <span class="text-red-500" data-v-fd0b0f28${_scopeId}>*</span></label><input${ssrRenderAttr("value", unref(form).email)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="email" autocomplete="email" type="email" data-v-fd0b0f28${_scopeId}>`);
              if (_ctx.$page.props.errors.email) {
                _push2(`<span class="text-xs text-red-500" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.email)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-fd0b0f28${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="phone" data-v-fd0b0f28${_scopeId}> Phone Number </label><input${ssrRenderAttr("value", unref(form).phone)} class="py-2 px-3 border outline-0 rounded shadow-sm border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25 w-full block mt-1" id="phone" type="text" data-v-fd0b0f28${_scopeId}>`);
              if (_ctx.$page.props.errors.phone) {
                _push2(`<span class="text-xs text-red-500" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.phone)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="mb-4" data-v-fd0b0f28${_scopeId}><label class="block font-medium sm:text-sm text-xs text-gray-700" for="comments" data-v-fd0b0f28${_scopeId}> Comments <span class="text-red-500" data-v-fd0b0f28${_scopeId}>*</span></label><textarea id="comments" class="w-full py-2 px-3 block mt-1 min-h-[6rem] rounded shadow-sm outline-0 border border-gray-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-25" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(unref(form).comments)}</textarea>`);
              if (_ctx.$page.props.errors.comments) {
                _push2(`<span class="text-xs text-red-500" data-v-fd0b0f28${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors.comments)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center justify-end" data-v-fd0b0f28${_scopeId}><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="${ssrRenderClass([{ "button--loading": unref(form).processing }, "relative w-full h-[42px] bg-site-600 border border-transparent rounded-md hover:bg-site-500 active:bg-site-700 focus:outline-none focus:bg-site-700 focus:ring ring-green-300 disabled:opacity-25 transition ease-in-out duration-150"])}" data-v-fd0b0f28${_scopeId}>`);
              if (!unref(form).processing) {
                _push2(`<span class="font-semibold text-sm text-white uppercase tracking-widest" data-v-fd0b0f28${_scopeId}>SEND INQUIRY</span>`);
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
                    createVNode("p", null, "info@tyresgo.co.uk")
                  ]),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-lg font-bold mb-2" }, "Telephone"),
                    createVNode("p", null, "07960 099241")
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ContactUs.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ContactUs = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-fd0b0f28"]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ContactUs
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLinkMob.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Header_vue_vue_type_style_index_0_scoped_d445a28c_lang = "";
const _sfc_main$9 = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute top-0 left-0 right-0 w-full z-50" }, _attrs))} data-v-d445a28c>`);
      _push(ssrRenderComponent(Container, { class: "relative select-none flex flex-row items-center justify-between pt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-[200px]" data-v-d445a28c${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { href: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-full" src="/images/logo-light.png" alt="TyresGo Logo" data-v-d445a28c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/logo-light.png",
                      alt: "TyresGo Logo"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="font-montserrat font-bold text-sm md:flex hidden flex-row space-x-4 lg:ml-12 lg:mt-0 mt-2 uppercase" data-v-d445a28c${_scopeId}><a href="/" class="sm:block hidden text-white hover:text-site-300" data-v-d445a28c${_scopeId}>HOME</a><a href="/#our-services" class="sm:block hidden text-white hover:text-site-300" data-v-d445a28c${_scopeId}>SERVICE</a><a href="/#coverage" class="sm:block hidden text-white hover:text-site-300" data-v-d445a28c${_scopeId}>COVERAGE</a><a href="/#about" class="sm:block hidden text-white hover:text-site-300" data-v-d445a28c${_scopeId}>ABOUT</a><a href="/contact" class="sm:block hidden text-white hover:text-site-300" data-v-d445a28c${_scopeId}>CONTACT</a></div><div class="md:hidden block" data-v-d445a28c${_scopeId}><button class="menu-btn text-white border-0 outline-0 text-xl flex items-center justify-center" data-v-d445a28c${_scopeId}><span class="font-montserrat font-semibold text-sm" data-v-d445a28c${_scopeId}>MENU</span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-d445a28c${_scopeId}><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" data-v-d445a28c${_scopeId}></path></svg></button></div><div style="${ssrRenderStyle(mobileNavShow.value ? null : { display: "none" })}" class="md:hidden block bg-gray-100 w-72 fixed top-0 right-0 z-50" data-v-d445a28c${_scopeId}><div class="h-screen overflow-y-scroll" data-v-d445a28c${_scopeId}><button class="w-full flex items-center justify-center h-14 bg-gray-200 text-site-600 font-semibold text-lg" type="button" data-v-d445a28c${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-d445a28c${_scopeId}><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d445a28c${_scopeId}></path></svg> CLOSE </button><div class="flex flex-col" data-v-d445a28c${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              href: "/",
              component: "Home",
              class: "border-b flex items-start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor" data-v-d445a28c${_scopeId2}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" data-v-d445a28c${_scopeId2}></path></svg> HOME `);
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
            _push2(`<div class="w-full py-4 pl-4 border-b border-[#ebebeb] text-sm text-gray-400" data-v-d445a28c${_scopeId}><span class="flex items-center" data-v-d445a28c${_scopeId}> Our Services <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" data-v-d445a28c${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-d445a28c${_scopeId}></path></svg></span><div style="${ssrRenderStyle(otherServicesOpen.value ? null : { display: "none" })}" class="flex flex-col space-y-2 mt-2" data-v-d445a28c${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
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
            _push2(ssrRenderComponent(_sfc_main$a, {
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
            _push2(ssrRenderComponent(_sfc_main$a, {
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
            _push2(ssrRenderComponent(_sfc_main$a, {
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
            _push2(ssrRenderComponent(_sfc_main$a, {
              href: "/contact",
              component: "ContactUs",
              title: "Contact Us",
              class: "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a data-v-d445a28c${_scopeId2}>Contact Us</a>`);
                } else {
                  return [
                    createVNode("a", null, "Contact Us")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              href: "/privacy-policy",
              component: "PrivacyPolicy",
              title: "Privacy Policy",
              class: "border-b"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a data-v-d445a28c${_scopeId2}>Privacy Policy</a>`);
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
              createVNode("div", { class: "w-[200px]" }, [
                createVNode(unref(Link), { href: "/" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "w-full",
                      src: "/images/logo-light.png",
                      alt: "TyresGo Logo"
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
                        createVNode(_sfc_main$a, {
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
                            createVNode(_sfc_main$a, {
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
                            createVNode(_sfc_main$a, {
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
                            createVNode(_sfc_main$a, {
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
                            createVNode(_sfc_main$a, {
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
                        createVNode(_sfc_main$a, {
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
                        createVNode(_sfc_main$a, {
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Header.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-[65vh] max-h-[550px] min-h-[480px] md:w-full overflow-hidden" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Carousel.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const CarouselSlide_vue_vue_type_style_index_0_scoped_71fae043_lang = "";
const _sfc_main$7 = {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CarouselSlide.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const CarouselSlide = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-71fae043"]]);
const slidesLen = 5;
const interval = 10;
const _sfc_main$6 = {
  __name: "MainCarousel",
  __ssrInlineRender: true,
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
            _push2(`<p class="text-center font-light text-white xl:text-4xl md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="text-center font-bold text-gray-200 xl:text-6xl md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="text-center font-light text-gray-200 xl:text-4xl md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex sm:flex-row flex-col items-center justify-center sm:space-x-6 sm:space-y-0 space-y-4 sm:mt-10 mt-6"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold xl:text-5xl md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="xl:h-12 md:h-8 xl:w-12 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a>`);
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
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
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
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MainCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "AreasWeCover",
  __ssrInlineRender: true,
  setup(__props) {
    const areasWeCover = [
      {
        name: "Aylesbury"
      },
      {
        name: "Bedford"
      },
      {
        name: "Bletchley"
      },
      {
        name: "Bicester"
      },
      {
        name: "Biggleswade"
      },
      {
        name: "Luton"
      },
      {
        name: "Leighton Buzzard"
      },
      {
        name: "Milton Keynes"
      },
      {
        name: "Northampton"
      },
      {
        name: "Shefford"
      },
      {
        name: "Stevenage"
      },
      {
        name: "Wolverton"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "xl:h-[330px] md:h-[288px] sm:h-[250px] h-fit min-h-[300px] relative select-none",
        id: "coverage"
      }, _attrs))}><img src="/images/areas-we-cover.jpg" class="absolute inset-0 object-center object-cover h-full w-full brightness-[0.4]" alt="TyresGo Coverage Zone"><div class="absolute right-4 left-4 top-5 md:pt-8 sm:pt-4 pb-5 text-white text-center"><div class="mb-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg></div><h3 class="text-center sm:text-3xl text-2xl font-extrabold font-montserrat">Areas We Cover</h3><div class="flex items-center justify-center flex-row flex-wrap mt-6 space-y-1 space-x-1.5 xl:text-base text-sm"><!--[-->`);
      ssrRenderList(areasWeCover, (area) => {
        _push(`<span class="flex items-center hover:text-site-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 fill-site-100" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> ${ssrInterpolate(area.name)}</span>`);
      });
      _push(`<!--]--><p>&amp; Surrounding Areas!</p></div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AreasWeCover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting | 30-60 Minute Response | TyresGo</title><meta name="description" content="TyresGo offers same day, 7 days a week emergency mobile tyre fitting service in and around Milton Keynes."${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting | 30-60 Minute Response | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "TyresGo offers same day, 7 days a week emergency mobile tyre fitting service in and around Milton Keynes."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, {
        img_1: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/1.webp" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/1.webp",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre fitting"
              })
            ];
          }
        }),
        img_2: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/2.jpg" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/2.jpg",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair"
              })
            ];
          }
        }),
        img_3: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/3.jpg" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/3.jpg",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair"
              })
            ];
          }
        }),
        img_4: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/4.jpg" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/4.jpg",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair"
              })
            ];
          }
        }),
        img_5: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/images/carousel/5.jpg" class="object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile tyre repair"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/images/carousel/5.jpg",
                class: "object-cover object-center w-full h-full brightness-[0.5]",
                alt: "Mobile tyre repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex lg:flex-row flex-col-reverse lg:space-y-0 items-start justify-between"${_scopeId}><div class="lg:w-1/2 w-full lg:mt-0 mt-10 flex items-center lg:justify-start justify-center"${_scopeId}><div class=""${_scopeId}><p class="xl:text-3xl sm:text-2xl text-xl font-semibold font-montserrat"${_scopeId}>Why choose mobile tyre fitting?</p><ul class="xl:pl-4 pl-0 mt-10 space-y-4"${_scopeId}><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Cost-effective solution for your tyre needs</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Quick response, so you don&#39;t wait for breakdown services</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Keeps you and your car safe</span></li><li class="flex items-start"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sm:w-6 sm:h-6 w-4 h-4 mr-2 mt-1 shrink-0" viewBox="0 0 16 16"${_scopeId}><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"${_scopeId}></path></svg><span class="xl:text-xl sm:text-lg text-base"${_scopeId}>Fitted at your convenience, you choose the time &amp; place.</span></li></ul></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, { class: "lg:w-1/2 w-full" }, null, _parent2, _scopeId));
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
                createVNode(_sfc_main$5, { class: "lg:w-1/2 w-full" })
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
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}>Welcome to <span class="text-site-700"${_scopeId}>TyresGo</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We bring the garage to your car, so you don&#39;t have to.</h2><p class="text-sm"${_scopeId}> No one knows when they may experience a flat tyre. It could happen at anytime or anyplace, and nothing is more frustrating than having your valuable free time wasted. That&#39;s why at <b${_scopeId}>TyresGo</b>, we can come to your rescue with our mobile tyre fitting and repair services. We have many professional tyre fitters on standby, ready to drive to your location within 30-60 minutes and have your new tyre fitted. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Whether you&#39;re at home, work or on the roadside, you&#39;re guaranteed to receive exceptional mobile tyre fitting service when you choose <b${_scopeId}>TyresGo</b></p><br${_scopeId}><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="md:hidden block"${_scopeId}><img src="/images/24-hour-assistance.jpg" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>24 Hour Assistance</h2><br${_scopeId}><p class="text-sm"${_scopeId}> At <b${_scopeId}>TyresGo</b>, we pride ourselves on providing fast and efficient service to our customers. Our quick response rate ensures that you will not have to wait long for assistance, regardless of where you are. We will respond as soon as possible if you have a flat tyre, a puncture, or any other tyre-related problem. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Furthermore, we understand that tyre issues can occur at any time, which is why we provide 24-hour emergency services. We will be there to assist you whether it is the middle of the night or the weekend. You can have peace of mind knowing that you can get back on the road quickly with <b${_scopeId}>TyresGo</b>, no matter what the situation is. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div><div class="md:block hidden col-span-5"${_scopeId}><img src="/images/24-hour-assistance.jpg" alt=""${_scopeId}></div><div class="col-span-5"${_scopeId}><img src="/images/high-quality-tyres.jpg" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>Ultimate Performance Tyres</h2><br${_scopeId}><p class="text-sm"${_scopeId}> At <b${_scopeId}>TyresGo</b>, we are committed to providing our customers with the highest quality tyres from the leading brands in the industry. Whether you need performance tyres for your sports car or reliable and long-lasting tyres for your family vehicle, we have you covered. We only stock tyres from reputable brands like Michelin, Goodyear, Continental, and many others, ensuring that you get the best product for your vehicle. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Our tyre experts are knowledgeable and experienced, and they will work with you to find the best tyre for your needs and driving style. With <b${_scopeId}>TyresGo</b>, you can be confident that you are receiving the highest quality tyres available, backed by our commitment to customer satisfaction. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createTextVNode("Welcome to "),
                  createVNode("span", { class: "text-site-700" }, "TyresGo")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We bring the garage to your car, so you don't have to."),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" No one knows when they may experience a flat tyre. It could happen at anytime or anyplace, and nothing is more frustrating than having your valuable free time wasted. That's why at "),
                  createVNode("b", null, "TyresGo"),
                  createTextVNode(", we can come to your rescue with our mobile tyre fitting and repair services. We have many professional tyre fitters on standby, ready to drive to your location within 30-60 minutes and have your new tyre fitted. ")
                ]),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" Whether you're at home, work or on the roadside, you're guaranteed to receive exceptional mobile tyre fitting service when you choose "),
                  createVNode("b", null, "TyresGo")
                ]),
                createVNode("br"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "md:hidden block" }, [
                    createVNode("img", {
                      src: "/images/24-hour-assistance.jpg",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "24 Hour Assistance"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" At "),
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(", we pride ourselves on providing fast and efficient service to our customers. Our quick response rate ensures that you will not have to wait long for assistance, regardless of where you are. We will respond as soon as possible if you have a flat tyre, a puncture, or any other tyre-related problem. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Furthermore, we understand that tyre issues can occur at any time, which is why we provide 24-hour emergency services. We will be there to assist you whether it is the middle of the night or the weekend. You can have peace of mind knowing that you can get back on the road quickly with "),
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(", no matter what the situation is. ")
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "md:block hidden col-span-5" }, [
                    createVNode("img", {
                      src: "/images/24-hour-assistance.jpg",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/high-quality-tyres.jpg",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Ultimate Performance Tyres"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" At "),
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(", we are committed to providing our customers with the highest quality tyres from the leading brands in the industry. Whether you need performance tyres for your sports car or reliable and long-lasting tyres for your family vehicle, we have you covered. We only stock tyres from reputable brands like Michelin, Goodyear, Continental, and many others, ensuring that you get the best product for your vehicle. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Our tyre experts are knowledgeable and experienced, and they will work with you to find the best tyre for your needs and driving style. With "),
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(", you can be confident that you are receiving the highest quality tyres available, backed by our commitment to customer satisfaction. ")
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "MobileTyreFitting",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Fitting | Same Day at Home, Work or Roadside | TyresGo</title><meta name="description" content="Mobile tyre fitting in and around Milton Keynes. Get your tyres fitted at work, home or roadside on the same day."${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Fitting | Same Day at Home, Work or Roadside | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "Mobile tyre fitting in and around Milton Keynes. Get your tyres fitted at work, home or roadside on the same day."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/mobile-tyre-fitting-showcase.jpg" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Fitting - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Mobile Tyre Fitting</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>We know visiting a garage can use up valuable free time, so use our Mobile Tyre Fitting service instead</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}> Mobile tyre fitting is the most convenient and stress-free way to replace your tyres. You won&#39;t have to take time out of your busy schedule to visit a garage or tyre centre with <b${_scopeId}>TyresGo</b>. Whether you&#39;re at home, work, or on the side of the road, our team of experts will come to you. This means that you can have your tyres fitted without having to disrupt your day or waste time travelling. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Mobile tyre fitting is also more cost-effective, as you won&#39;t have to pay for a tow truck or transportation to a tyre centre. With TyresGo, you can have peace of mind knowing that your tyre fitting needs are taken care of quickly and efficiently, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre fitting and make your next tyre change a hassle-free experience with TyresGo. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/mobile-tyre-fitting.jpg" alt=""${_scopeId}></div><div class="col-span-5"${_scopeId}><img src="/images/emergency-mobile-tyre-fitting.jpg" alt=""${_scopeId}></div><div class="col-span-7"${_scopeId}><h2 class="lg:text-3xl text-2xl font-semibold"${_scopeId}>Emergency Mobile Tyre Fitting</h2><br${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>TyresGo</b>&#39;s emergency mobile tyre fitting is the ideal solution for those unexpected tyre problems. Our team of experts is available 24 hours a day to assist you if you have a flat tyre on the side of the road, a puncture in the middle of the night, or any other tyre-related emergency. You won&#39;t have to wait long for assistance because of our quick response time, giving you peace of mind in a potentially stressful situation. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With our mobile tyre fitting services, you won&#39;t have to worry about finding a late-night garage or tyre centre, or paying for a tow truck to transport your vehicle. We come to you, making the process fast and easy. So, why not choose <b${_scopeId}>TyresGo</b> for your emergency mobile tyre fitting requirements and see the difference that our expert and efficient services can make? </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Mobile Tyre Fitting")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "We know visiting a garage can use up valuable free time, so use our Mobile Tyre Fitting service instead"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" Mobile tyre fitting is the most convenient and stress-free way to replace your tyres. You won't have to take time out of your busy schedule to visit a garage or tyre centre with "),
                      createVNode("b", null, "TyresGo"),
                      createTextVNode(". Whether you're at home, work, or on the side of the road, our team of experts will come to you. This means that you can have your tyres fitted without having to disrupt your day or waste time travelling. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Mobile tyre fitting is also more cost-effective, as you won't have to pay for a tow truck or transportation to a tyre centre. With TyresGo, you can have peace of mind knowing that your tyre fitting needs are taken care of quickly and efficiently, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre fitting and make your next tyre change a hassle-free experience with TyresGo. "),
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-fitting.jpg",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/emergency-mobile-tyre-fitting.jpg",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("h2", { class: "lg:text-3xl text-2xl font-semibold" }, "Emergency Mobile Tyre Fitting"),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "TyresGo"),
                      createTextVNode("'s emergency mobile tyre fitting is the ideal solution for those unexpected tyre problems. Our team of experts is available 24 hours a day to assist you if you have a flat tyre on the side of the road, a puncture in the middle of the night, or any other tyre-related emergency. You won't have to wait long for assistance because of our quick response time, giving you peace of mind in a potentially stressful situation. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, [
                      createTextVNode(" With our mobile tyre fitting services, you won't have to worry about finding a late-night garage or tyre centre, or paying for a tow truck to transport your vehicle. We come to you, making the process fast and easy. So, why not choose "),
                      createVNode("b", null, "TyresGo"),
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreFitting.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "MobileTyreRepair",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Mobile Tyre Repair | Same Day at Home, Work or Roadside | TyresGo</title><meta name="description" content="Our same day mobile tyre repair service offers a convenient solution to your tyre problem."${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/mobile-tyre-repair"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Mobile Tyre Repair | Same Day at Home, Work or Roadside | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "Our same day mobile tyre repair service offers a convenient solution to your tyre problem."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/mobile-tyre-repair"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/mobile-tyre-repair-showcase.jpg" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Mobile Tyre Repair - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Mobile Tyre Repair - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Mobile Tyre Repair</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>TyresGo&#39;s most convenient and efficient service, in which a team of experts comes to you to repair your tyre issue.</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>TyresGo</b>&#39;s mobile tyre repair is the hassle-free solution to your tyre problems. You won&#39;t have to waste time or effort looking for a garage or tyre centre because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to repair your tyre on the spot, whether it&#39;s a puncture, a slow leak, or any other problem. This means you can have your tyre repaired quickly and efficiently, without interrupting your busy schedule. </p><br${_scopeId}><p class="text-sm"${_scopeId}> Our mobile tyre repair service is also cost-effective, as you won&#39;t have to pay for a tow truck or transportation to a tyre centre. With TyresGo, you can have peace of mind knowing that your tyre repair needs are taken care of quickly and professionally, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre repair with TyresGo for your next tyre issue. </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/mobile-tyre-repair.jpg" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Mobile Tyre Repair")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "TyresGo's most convenient and efficient service, in which a team of experts comes to you to repair your tyre issue."),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "TyresGo"),
                      createTextVNode("'s mobile tyre repair is the hassle-free solution to your tyre problems. You won't have to waste time or effort looking for a garage or tyre centre because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to repair your tyre on the spot, whether it's a puncture, a slow leak, or any other problem. This means you can have your tyre repaired quickly and efficiently, without interrupting your busy schedule. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " Our mobile tyre repair service is also cost-effective, as you won't have to pay for a tow truck or transportation to a tyre centre. With TyresGo, you can have peace of mind knowing that your tyre repair needs are taken care of quickly and professionally, all while you relax and wait in the comfort of your own surroundings. So why not choose mobile tyre repair with TyresGo for your next tyre issue. "),
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/mobile-tyre-repair.jpg",
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MobileTyreRepair.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Our Privacy Policy | TyresGo</title><meta name="description" content="Our privacy policy"${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/privacy-policy"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Our Privacy Policy | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "Our privacy policy"
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/privacy-policy"
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
            _push2(`<div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Privacy Policy</span></h1><p class="text-sm"${_scopeId}> TyresGo respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Controller</h3><br${_scopeId}><p class="text-sm"${_scopeId}> TyresGo is the controller and responsible for your personal data. </p><br${_scopeId}><p class="text-sm"${_scopeId}> If you have any questions about this privacy notice, please contact the data privacy manager here <a class="text-blue-600 underline" href="mailto:info@tyresgo.co.uk"${_scopeId}>info@tyresgo.co.uk</a>. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Third-party links</h3><br${_scopeId}><p class="text-sm"${_scopeId}> This website may include links to third-party websites. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Cookies</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Cookies are set by the services that we use: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc space-y-2"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Analytics</span> we use Google Analytics to get performance data and tracking our website traffic. For more information, please visit <a class="text-blue-600 underline" href="https://policies.google.com/technologies/cookies?hl=en-US" target="_blank" rel="noreferrer"${_scopeId}> https://policies.google.com/technologies/cookies?hl=en-US </a></li><li${_scopeId}><span class="font-semibold"${_scopeId}>Google Advertising</span> We use Google Adsense to place adverts on our site. Google&#39;s use of advertising cookies enables it and its partners to serve ads based on your visit to Wheel Fit and/or other sites on the Internet. You can opt out of personalised ads by visiting <a class="text-blue-600 underline" href="https://myaccount.google.com/data-and-privacy" target="_blank" rel="noreferrer"${_scopeId}> https://myaccount.google.com/data-and-privacy </a></li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>The type of personal information we collect</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We currently collect and process the following information: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Identity data</span> (for example first name, last name, title, date of birth)</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Contact data</span> (for example address, email address, mobile number)</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How is the personal information collected?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Most of the personal information we process is directly provided by you for the following reasons: </p><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>apply for services</li><li${_scopeId}>make an enquiry</li><li${_scopeId}>book an appointment</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>How we use your personal data</h3><br${_scopeId}><p class="text-sm"${_scopeId}> We only use your personal data when the law allows us to. We will mostly use your personal data in the following circumstances. </p><br${_scopeId}><b class="text-sm"${_scopeId}>Information provided by you:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to provide you with information/services that you request from us</li><li${_scopeId}>to comply with a legal or regulatory obligation</li></ul><br${_scopeId}><b class="text-sm"${_scopeId}>Information we automatically collect:</b><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}>to administer our site including troubleshooting, testing, research and statistical purposes</li><li${_scopeId}>to improve our site to ensure that content is presented in the most effective manner for you and your computer</li><li${_scopeId}>to keep our site safe and secure</li></ul><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Where is your data stored?</h3><br${_scopeId}><p class="text-sm"${_scopeId}> Your information is securely stored in our database </p><br${_scopeId}><p class="text-sm"${_scopeId}> We keep personal data that you provide us, such as contact details, for as long as it is compulsory for us to do. We will then safely dispose your information by deleting the records from our database. </p><br${_scopeId}><br${_scopeId}><h3 class="text-2xl"${_scopeId}>Your data protection rights</h3><br${_scopeId}><ul class="pl-4 text-sm list-disc"${_scopeId}><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right of access</span> - You have the right to ask us for copies of your personal information.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to rectification</span> - You have the right to ask us to rectify personal information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to erasure</span> - You have the right to ask us to erase your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to restriction of processing</span> - You have the right to ask us to restrict the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to object to processing</span> - You have the the right to object to the processing of your personal information in certain circumstances.</li><li${_scopeId}><span class="font-semibold"${_scopeId}>Your right to data portability</span> - You have the right to ask that we transfer the personal information you gave us to another organisation, or to you, in certain circumstances.</li></ul><br${_scopeId}><p class="text-sm"${_scopeId}> You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you. </p></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Privacy Policy")
                ]),
                createVNode("p", { class: "text-sm" }, " TyresGo respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about what personal data is collected and processed when you visit our website and tell you about the privacy rights you have regarding your data. "),
                createVNode("br"),
                createVNode("br"),
                createVNode("h3", { class: "text-2xl" }, "Controller"),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, " TyresGo is the controller and responsible for your personal data. "),
                createVNode("br"),
                createVNode("p", { class: "text-sm" }, [
                  createTextVNode(" If you have any questions about this privacy notice, please contact the data privacy manager here "),
                  createVNode("a", {
                    class: "text-blue-600 underline",
                    href: "mailto:info@tyresgo.co.uk"
                  }, "info@tyresgo.co.uk"),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
            _push2(`<title${_scopeId}>Van Mobile Tyre Fitting | Same Day at Home, Work or Roadside | TyresGo</title><meta name="description" content="We also fit van tyres at your location. Get your van tyres fitted on the same day of your call."${_scopeId}><link rel="canonical" href="https://tyresgo.co.uk/van-mobile-tyre-fitting"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Van Mobile Tyre Fitting | Same Day at Home, Work or Roadside | TyresGo"),
              createVNode("meta", {
                name: "description",
                content: "We also fit van tyres at your location. Get your van tyres fitted on the same day of your call."
              }),
              createVNode("link", {
                rel: "canonical",
                href: "https://tyresgo.co.uk/van-mobile-tyre-fitting"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><div class="relative h-[65vh] max-h-[550px] md:min-h-[480px] sm:min-h-[400px] min-h-[350px] md:w-full overflow-hidden"><img src="/images/van-mobile-tyre-fitting-showcase.jpg" class="absolute inset-0 object-cover object-center w-full h-full brightness-[0.5]" alt="Mobile Tyre Fitting"></div><div class="absolute top-1/4 left-0 right-0">`);
      _push(ssrRenderComponent(Container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2"${_scopeId}>We Come To You</p><p class="sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl"${_scopeId}>30-60 Minute Response</p><h1 class="sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg"${_scopeId}>Van Mobile Tyre Fitting - 24 Hours, 7 Days</h1><div class="flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3"${_scopeId}><a href="tel:07960099241" class="flex items-end font-bold md:text-4xl sm:text-3xl text-xl text-site-500 hover:text-site-300 transition"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="md:h-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"${_scopeId}></path></svg><span${_scopeId}>07960 099241</span></a></div>`);
          } else {
            return [
              createVNode("p", { class: "sm:text-left text-center font-light text-white md:text-3xl sm:text-2xl text-lg sm:mb-4 mb-2" }, "We Come To You"),
              createVNode("p", { class: "sm:text-left text-center font-bold text-gray-200 md:text-5xl sm:text-4xl text-2xl" }, "30-60 Minute Response"),
              createVNode("h1", { class: "sm:text-left text-center font-light text-gray-200 md:text-3xl sm:text-2xl text-lg" }, "Van Mobile Tyre Fitting - 24 Hours, 7 Days"),
              createVNode("div", { class: "flex items-center sm:justify-start justify-center sm:space-x-6 sm:space-y-0 space-y-4 md:mt-10 sm:mt-6 mt-3" }, [
                createVNode("a", {
                  href: "tel:07960099241",
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
                  createVNode("span", null, "07960 099241")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$e, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(Container, { class: "pt-8 pb-8 md:mb-16 mb-8 sm:mt-8 mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:px-0 px-4"${_scopeId}><h1 class="font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase"${_scopeId}><span class="text-site-700"${_scopeId}>Van Mobile Tyre Fitting</span></h1><h2 class="md:text-xl sm:text-lg text-base mb-10"${_scopeId}>Yes, you heard right. Get your van tyres fitted at your convenience!</h2><div class="md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4"${_scopeId}><div class="col-span-7"${_scopeId}><p class="text-sm"${_scopeId}><b${_scopeId}>TyresGo</b>&#39;s van mobile tyre fitting service is the most convenient solution for all of your van tyre needs. You won&#39;t have to waste time or effort looking for a garage or tyre centre that can accommodate your van because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to quickly and efficiently install new tyres on your van without disrupting your busy schedule. </p><br${_scopeId}><p class="text-sm"${_scopeId}> With van mobile tyre fitting, you can get your van back on the road quickly without having to arrange transportation or pay for a tow truck. We provide a diverse range of high-quality tyre brands and options to ensure that you get the right tyre for your specific van and driving needs. With TyresGo, you can rest assured that your van&#39;s tyre fitting needs will be met professionally and efficiently. So, for your next tyre change, why not go with van mobile tyre fitting from TyresGo? </p><br${_scopeId}><p class="text-sm flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path><path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg><span${_scopeId}>Need mobile tyre services ASAP?, please call us on <a class="text-blue-600 underline" href="tel:07960099241"${_scopeId}>07960 099241</a> for a prompt service</span></p></div><div class="col-span-5"${_scopeId}><img src="/images/van-mobile-tyre-fitting.jpg" alt=""${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:px-0 px-4" }, [
                createVNode("h1", { class: "font-montserrat font-bold md:text-3xl sm:text-2xl text-xl mb-2 uppercase" }, [
                  createVNode("span", { class: "text-site-700" }, "Van Mobile Tyre Fitting")
                ]),
                createVNode("h2", { class: "md:text-xl sm:text-lg text-base mb-10" }, "Yes, you heard right. Get your van tyres fitted at your convenience!"),
                createVNode("div", { class: "md:grid grid-cols-12 gap-y-12 lg:gap-x-4 md:gap-x-8 md:space-y-0 space-y-12 md:mt-8 mt-4" }, [
                  createVNode("div", { class: "col-span-7" }, [
                    createVNode("p", { class: "text-sm" }, [
                      createVNode("b", null, "TyresGo"),
                      createTextVNode("'s van mobile tyre fitting service is the most convenient solution for all of your van tyre needs. You won't have to waste time or effort looking for a garage or tyre centre that can accommodate your van because our expert technicians will come to you. Our team is equipped with the most up-to-date tools and technology to quickly and efficiently install new tyres on your van without disrupting your busy schedule. ")
                    ]),
                    createVNode("br"),
                    createVNode("p", { class: "text-sm" }, " With van mobile tyre fitting, you can get your van back on the road quickly without having to arrange transportation or pay for a tow truck. We provide a diverse range of high-quality tyre brands and options to ensure that you get the right tyre for your specific van and driving needs. With TyresGo, you can rest assured that your van's tyre fitting needs will be met professionally and efficiently. So, for your next tyre change, why not go with van mobile tyre fitting from TyresGo? "),
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
                          href: "tel:07960099241"
                        }, "07960 099241"),
                        createTextVNode(" for a prompt service")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-5" }, [
                    createVNode("img", {
                      src: "/images/van-mobile-tyre-fitting.jpg",
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
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/BrandedTyres.vue": __vite_glob_0_0, "./Pages/ContactUs.vue": __vite_glob_0_1, "./Pages/Home.vue": __vite_glob_0_2, "./Pages/MobileTyreFitting.vue": __vite_glob_0_3, "./Pages/MobileTyreRepair.vue": __vite_glob_0_4, "./Pages/PrivacyPolicy.vue": __vite_glob_0_5, "./Pages/VanMobileTyreFitting.vue": __vite_glob_0_6 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
