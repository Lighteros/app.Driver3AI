(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185, 9391],
  {
    79391: function () {},
    99296: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 66402)),
        Promise.resolve().then(n.t.bind(n, 35846, 23)),
        Promise.resolve().then(n.bind(n, 33069)),
        Promise.resolve().then(n.bind(n, 72798)),
        Promise.resolve().then(n.bind(n, 30769)),
        Promise.resolve().then(n.bind(n, 98856)),
        Promise.resolve().then(n.bind(n, 61123)),
        Promise.resolve().then(n.bind(n, 34082));
    },
    33069: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return i;
          },
        });
      var a = n(6272),
        r = n(8627),
        s = n(74939),
        o = n(48335);
      async function l() {
        return await (0, o.U2)("/usercenter/account/ip_info");
      }
      var i = () => {
        let [e, t] = (0, r.useState)(!1);
        return ( 
          (0, r.useEffect)(() => {
            l().then((e) => {
              t((null == e ? void 0 : e.checked) === !1);
            });
          }, []),
          (0, a.jsx)(s.QH, {
            title: "Access Restricted",
            open: e,
            onOpenChange: t,
            closable: !1,
            children: (0, a.jsx)("div", {
              className: "text-xs md:text-[13px]",
              children:
                "Claiming the airdrop is not available in your country.",
            }),
          })
        );
      };
    },
    98856: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(6272);
      n(8627);
      var r = n(53970);
      t.default = (e) => (0, a.jsx)(r.zt, { children: e.children });
    },
    19863: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return d;
        },
      });
      var a = n(6272),
        r = n(8627),
        s = n(4203),
        o = n(1411),
        l = n(38820),
        i = n(16723);
      let c = (0, o.j)(
          (0, l.cn)(
            "inline-flex items-center justify-center",
            "text-sm whitespace-nowrap cursor-pointer",
            "focus-visible:outline-none select-none",
            "disabled:hover:cursor-not-allowed"
          ),
          {
            variants: {
              variant: {
                default:
                  "bg-[linear-gradient(270.23deg,#48BDFF_0.04%,#786CFF_47.76%,#BD00FF_99.64%)] enabled:hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)),linear-gradient(270.23deg,#48BDFF_04%,#786CFF_47.76%,#BD00FF_99.64%)] disabled:opacity-50",
                secondary:
                  "bg-[#BC87FF] [&:not]:disabled:hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.25),rgba(0,0,0,0.25)),linear-gradient(0deg,#B084E9,#B084E9)] disabled:opacity-50",
                outline:
                  "outline outline-1 outline-[#B084E9] enabled:hover:bg-[#B084E9]",
                "secondary-outline":
                  "text-base-contrast-50 border border-base-contrast-20 enabled:hover:bg-base-contrast-100 enabled:hover:border-transparent enabled:hover:text-[rgb(0,0,0)] disabled:opacity-50",
                third:
                  "text-primary-50 border border-primary-20 disabled:opacity-50 enabled:hover:text-[#000000] enabled:hover:bg-primary",
                link: "text-base-contrast underline-offset-4 enabled:hover:underline",
              },
              size: {
                lg: "h-[40px] px-[20px] py-[12px]",
                default: "h-[32px] px-[20px] py-[12px]",
              },
              rounded: { true: "rounded-full", false: "rounded-0" },
              disabled: { true: "opacity-50 cursor-not-allowed" },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
              rounded: !0,
            },
          }
        ),
        d = r.forwardRef((e, t) => {
          let {
              className: n,
              variant: r,
              size: o,
              asChild: d = !1,
              rounded: u,
              children: x,
              loading: p,
              disabled: f,
              ...b
            } = e,
            m = d ? s.g7 : "button";
          return (0, a.jsx)(m, {
            className: (0, l.cn)(
              c({ variant: r, size: o, className: n, rounded: u, disabled: f }),
              p && "cursor-not-allowed",
              "outline" === r && p && "bg-primary-light"
            ),
            ref: t,
            disabled: f,
            ...b,
            children: p ? (0, a.jsx)(i.Z, {}) : x,
          });
        });
      d.displayName = "Button";
    },
    30908: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return i;
        },
      });
      var a = n(6272),
        r = n(18536),
        s = n(8627),
        o = n(38820),
        l = n(19863);
      let i = (e) => {
        let [t, n] = (0, s.useState)(!1),
          i = (0, s.useMemo)(() => {
            if (void 0 !== e.footer) return e.footer;
            if (!e.onCancel && !e.onOk) return null;
            let s = [];
            return (
              "function" == typeof e.onCancel &&
                s.push(
                  (0, a.jsx)(
                    l.z,
                    {
                      className:
                        "flex-1 border-base-contrast-12 text-base-contrast-54 hover:text-base-contrast",
                      variant: "outline",
                      onClick: e.onCancel,
                      ...e.cancelButtonProps,
                      children: e.cancelText || "Cancel",
                    },
                    "cancel"
                  )
                ),
              "function" == typeof e.onOk &&
                s.push(
                  (0, a.jsx)(
                    l.z,
                    {
                      className: "flex-1",
                      variant: "secondary",
                      onClick: () => {
                        var t;
                        n(!0),
                          null === (t = e.onOk) ||
                            void 0 === t ||
                            t.call(e).finally(() => n(!1));
                      },
                      loading: t,
                      ...e.okButtonProps,
                      children: e.okText || "Confirm",
                    },
                    "confirm"
                  )
                ),
              (0, a.jsx)(r.cN, {
                className: (0, o.cn)(
                  s.length > 1 && "gap-x-[10px]",
                  e.footerClassName
                ),
                children: s,
              })
            );
          }, [
            e.onCancel,
            e.onOk,
            e.cancelText,
            e.okText,
            t,
            e.footer,
            e.cancelButtonProps,
            e.okButtonProps,
          ]);
        return (0, a.jsx)(r.Vq, {
          open: e.open,
          onOpenChange: e.onOpenChange,
          children: (0, a.jsxs)(r.cZ, {
            onOpenAutoFocus: (e) => e.preventDefault(),
            onInteractOutside: (e) => e.preventDefault(),
            className: (0, o.cn)(e.contentClassName),
            closable: e.closable,
            children: [
              e.title &&
                (0, a.jsx)(r.fK, {
                  children: (0, a.jsx)(r.$N, { children: e.title }),
                }),
              (0, a.jsx)(r.a7, {
                className: (0, o.cn)(
                  "text-sm leading-[24px] text-base-contrast-50",
                  e.bodyClassName
                ),
                children: e.children,
              }),
              i,
            ],
          }),
        });
      };
    },
    18536: function (e, t, n) {
      "use strict";
      n.d(t, {
        $N: function () {
          return b;
        },
        Vq: function () {
          return i;
        },
        a7: function () {
          return x;
        },
        cN: function () {
          return f;
        },
        cZ: function () {
          return u;
        },
        fK: function () {
          return p;
        },
      });
      var a = n(6272),
        r = n(8627),
        s = n(70307),
        o = n(38820),
        l = n(68495);
      let i = s.fC;
      s.xz;
      let c = s.h_;
      s.x8;
      let d = r.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, a.jsx)(s.aV, {
          ref: t,
          className: (0, o.cn)(
            "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            n
          ),
          ...r,
        });
      });
      d.displayName = s.aV.displayName;
      let u = r.forwardRef((e, t) => {
        let { className: n, children: r, closable: i = !0, ...u } = e;
        return (0, a.jsxs)(c, {
          children: [
            (0, a.jsx)(d, {}),
            (0, a.jsxs)(s.VY, {
              ref: t,
              className: (0, o.cn)(
                "fixed border border-white/[0.08] left-[50%] top-[50%] z-50 grid w-full max-w-[300px] md:max-w-[440px] translate-x-[-50%] translate-y-[-50%] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                "bg-[rgb(25,14,44)] rounded-[12px]",
                n
              ),
              ...u,
              children: [
                r,
                i &&
                  (0, a.jsxs)(s.x8, {
                    className:
                      "absolute right-[20px] top-[20px] text-base-contrast-54 hover:text-base-contrast disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                    children: [
                      (0, a.jsx)(l.Z, { className: "w-[24px] h-[24px]" }),
                      (0, a.jsx)("span", {
                        className: "sr-only",
                        children: "Close",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      });
      u.displayName = s.VY.displayName;
      let x = (e) => {
        let { children: t, className: n } = e;
        return (0, a.jsx)("div", {
          className: (0, o.cn)("p-[20px]", n),
          children: t,
        });
      };
      x.displayName = "DialogBody";
      let p = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, o.cn)(
            "h-[64px] flex items-center px-[20px]",
            "text-base text-white",
            "border-b border-b-white/[0.08]",
            t
          ),
          ...n,
        });
      };
      p.displayName = "DialogHeader";
      let f = (e) => {
        let { className: t, ...n } = e;
        return (0, a.jsx)("div", {
          className: (0, o.cn)("flex p-[20px]", t),
          ...n,
        });
      };
      f.displayName = "DialogFooter";
      let b = r.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, a.jsx)(s.Dx, {
          ref: t,
          className: (0, o.cn)("text-lg  leading-none tracking-tight", n),
          ...r,
        });
      });
      (b.displayName = s.Dx.displayName),
        (r.forwardRef((e, t) => {
          let { className: n, ...r } = e;
          return (0, a.jsx)(s.dk, {
            ref: t,
            className: (0, o.cn)("text-sm", n),
            ...r,
          });
        }).displayName = s.dk.displayName);
    },
    74939: function (e, t, n) {
      "use strict";
      n.d(t, {
        $N: function () {
          return a.$N;
        },
        QH: function () {
          return r.Q;
        },
        Vq: function () {
          return a.Vq;
        },
        a7: function () {
          return a.a7;
        },
        cN: function () {
          return a.cN;
        },
        cZ: function () {
          return a.cZ;
        },
        fK: function () {
          return a.fK;
        },
      });
      var a = n(18536),
        r = n(30908);
    },
    16723: function (e, t, n) {
      "use strict";
      var a = n(6272);
      n(8627);
      var r = n(38820);
      t.Z = () => {
        let e = "w-[4px] h-[4px] rounded-full";
        return (0, a.jsxs)("div", {
          className: "flex items-center gap-x-[4px]",
          children: [
            (0, a.jsx)("div", {
              className: (0, r.cn)(e, "button-loading-circle-1"),
            }),
            (0, a.jsx)("div", {
              className: (0, r.cn)(e, "button-loading-circle-2"),
            }),
            (0, a.jsx)("div", {
              className: (0, r.cn)(e, "button-loading-circle-3"),
            }),
          ],
        });
      };
    },
    30769: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Toaster: function () {
            return o;
          },
        });
      var a = n(6272),
        r = n(66402);
      n(8627);
      var s = n(68495);
      let o = (e) =>
        (0, a.jsx)(r.Toaster, {
          toastOptions: {
            duration: 2500,
            success: {
              iconTheme: {
                primary: "rgba(123, 220, 138, 1)",
                secondary: "rgba(25, 14, 44, 1)",
              },
              style: {
                color: "rgba(123, 220, 138, 1)",
                background: "rgba(25, 27, 36, 1)",
              },
              className: "text-xs md:text-base",
            },
            error: {
              iconTheme: {
                primary: "rgba(217, 91, 129, 1)",
                secondary: "rgba(25, 14, 44, 1)",
              },
              style: { color: "#D95B81", background: "#220E23" },
              className: "text-xs md:text-base",
            },
          },
          ...e,
          children: (e) =>
            (0, a.jsx)(r.ToastBar, {
              toast: e,
              style: {
                ...e.style,
                color: "rgba(255, 255, 255, 0.8)",
                background: "rgba(25, 14, 44, 1)",
                borderRadius: "12px",
                padding: "16px",
                wordBreak: "break-all",
                maxWidth: 800,
              },
              children: (t) => {
                let { icon: n, message: o } = t;
                return (0, a.jsxs)(a.Fragment, {
                  children: [
                    n,
                    o,
                    "loading" !== e.type &&
                      (0, a.jsx)("button", {
                        onClick: () => r.toast.dismiss(e.id),
                        children: (0, a.jsx)(s.Z, {
                          className:
                            "w-[24px] h-[24px] text-base-contrast-54 ml-[16px] hidden md:inline",
                        }),
                      }),
                  ],
                });
              },
            }),
        });
    },
    61123: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var a = n(6272),
        r = n(58977),
        s = n(84266),
        o = n(80029),
        l = n(48339),
        i = n(59637),
        c = n(93715),
        d = n(83282),
        u = n(42242),
        x = n(8627),
        p = n(49638),
        f = n(10088),
        b = n(59580);
      function m(e) {
        let { children: t } = e,
          n = (0, x.useMemo)(
            () => ("prod" === (0, b.dU)() ? o.Q.Mainnet : o.Q.Devnet),
            []
          ),
          m = (0, x.useMemo)(() => (0, u.Wf)(n), [n]),
          h = (e) => (
            console.log("-- mobile wallet adapter", e),
            Promise.reject("wallet not ready")
          ),
          g = (0, x.useMemo)(
            () => [
              new l.O(),
              new i.e(),
              new p.o(),
              new c.A(),
              new f.lX({
                addressSelector: (0, f.RH)(),
                appIdentity: {
                  uri: "".concat(location.protocol, "//").concat(location.host),
                },
                authorizationResultCache: (0, f.YS)(),
                chain: n,
                onWalletNotFound: h,
              }),
            ],
            [n]
          );
        return (0, a.jsx)(r.U, {
          endpoint: m,
          children: (0, a.jsx)(s.n, {
            wallets: g,
            onError: (e, t) => {
              console.log("-- solanan error", e),
                console.log("-- solana adapter", t);
            },
            children: (0, a.jsx)(d.s, {
              className: "pointer-events-auto",
              children: t,
            }),
          }),
        });
      }
      n(55774);
    },
    68495: function (e, t, n) {
      "use strict";
      var a = n(6272);
      n(8627),
        (t.Z = (e) =>
          (0, a.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, a.jsx)("mask", {
                id: "mask0_1797_9748",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "24",
                height: "24",
                children: (0, a.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "#D9D9D9",
                }),
              }),
              (0, a.jsx)("g", {
                mask: "url(#mask0_1797_9748)",
                children: (0, a.jsx)("path", {
                  d: "M8.4 17L7 15.6L10.6 12L7 8.42499L8.4 7.02499L12 10.625L15.575 7.02499L16.975 8.42499L13.375 12L16.975 15.6L15.575 17L12 13.4L8.4 17Z",
                }),
              }),
            ],
          }));
    },
    35846: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        2278, 6578, 186, 9022, 9602, 3e3, 307, 6598, 683, 5412, 4082, 7039,
        1278, 1744,
      ],
      function () {
        return e((e.s = 99296));
      }
    ),
      (_N_E = e.O());
  },
]);
