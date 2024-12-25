"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8780],
  {
    18780: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        });
      var l = s(6272),
        r = s(8627),
        i = s(67589),
        n = (e) =>
          (0, l.jsxs)("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("mask", {
                id: "mask0_1975_93249",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                children: (0, l.jsx)("rect", {
                  width: "32",
                  height: "32",
                  fill: "#D9D9D9",
                }),
              }),
              (0, l.jsx)("g", {
                mask: "url(#mask0_1975_93249)",
                children: (0, l.jsx)("path", {
                  d: "M4.66675 23.5128V21.5128H27.3334V23.5128H4.66675ZM4.66675 16.9999V15H27.3334V16.9999H4.66675ZM4.66675 10.4871V8.48718H27.3334V10.4871H4.66675Z",
                }),
              }),
            ],
          }),
        a = (e) =>
          (0, l.jsxs)("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("mask", {
                id: "mask0_1975_92762",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "32",
                height: "32",
                children: (0, l.jsx)("rect", {
                  width: "32",
                  height: "32",
                  fill: "#D9D9D9",
                }),
              }),
              (0, l.jsx)("g", {
                mask: "url(#mask0_1975_92762)",
                children: (0, l.jsx)("path", {
                  d: "M8.53327 24.8717L7.12817 23.4666L14.5948 15.9999L7.12817 8.53327L8.53327 7.12817L15.9999 14.5948L23.4666 7.12817L24.8717 8.53327L17.405 15.9999L24.8717 23.4666L23.4666 24.8717L15.9999 17.405L8.53327 24.8717Z",
                }),
              }),
            ],
          }),
        d = s(63737),
        x = s(38820),
        c = s(2766),
        h = s(72798),
        o = s(19283),
        p = s(56464),
        m = (e) =>
          (0, l.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("mask", {
                id: "mask0_1691_14938",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "20",
                height: "20",
                children: (0, l.jsx)("rect", {
                  width: "20",
                  height: "20",
                  fill: "#D9D9D9",
                }),
              }),
              (0, l.jsx)("g", {
                mask: "url(#mask0_1691_14938)",
                children: (0, l.jsx)("path", {
                  d: "M8.9375 13L13.8958 8.0625L12.8333 7L8.9375 10.875L7.16667 9.125L6.10417 10.1875L8.9375 13ZM10 18C8.90278 18 7.86806 17.7917 6.89583 17.375C5.92361 16.9583 5.07292 16.3854 4.34375 15.6562C3.61458 14.9271 3.04167 14.0764 2.625 13.1042C2.20833 12.1319 2 11.0972 2 10C2 8.88889 2.20833 7.85069 2.625 6.88542C3.04167 5.92014 3.61458 5.07292 4.34375 4.34375C5.07292 3.61458 5.92361 3.04167 6.89583 2.625C7.86806 2.20833 8.90278 2 10 2C11.1111 2 12.1493 2.20833 13.1146 2.625C14.0799 3.04167 14.9271 3.61458 15.6562 4.34375C16.3854 5.07292 16.9583 5.92014 17.375 6.88542C17.7917 7.85069 18 8.88889 18 10C18 11.0972 17.7917 12.1319 17.375 13.1042C16.9583 14.0764 16.3854 14.9271 15.6562 15.6562C14.9271 16.3854 14.0799 16.9583 13.1146 17.375C12.1493 17.7917 11.1111 18 10 18Z",
                }),
              }),
            ],
          }),
        u = s(25090),
        C = s(29191),
        w = s(34082),
        j = s(31313),
        f = (0, r.memo)((e) => {
          let [t, s] = (0, r.useState)(!1),
            { chains: i } = (0, h.useAppContext)(),
            { isNotSupportChain: n } = (0, w.useWalletAdapterContext)(),
            {
              currentChain: a,
              setCurrentChain: d,
              walletAdapter: c,
              onConnect: f,
            } = (0, w.useWalletAdapterContext)();
          if (n) return (0, l.jsx)(u.Z, {});
          let g = async (e) => {
            if (c) {
              if ("SOL" === c.namespace) {
                if (!j.d.includes(e.chain_id)) return s(!1), f(e).then();
              } else {
                if (!j.d.includes(e.chain_id))
                  return c.changeChain(e).then((t) => {
                    t && d(e);
                  });
                s(!1),
                  setTimeout(() => {
                    f(e).then();
                  }, 0);
              }
            }
            d(e), s(!1);
          };
          return (0, l.jsx)("div", {
            className: "select-none",
            children: (0, l.jsxs)(p.h_, {
              open: t,
              onOpenChange: s,
              children: [
                (0, l.jsx)(p.$F, {
                  children:
                    a &&
                    (0, l.jsxs)("div", {
                      className: (0, x.cn)(
                        "flex items-center cursor-pointer",
                        "w-[56px] h-[28px] md:w-[80px] md:h-[40px]",
                        "bg-[rgba(255,255,255,0.08)] rounded-full",
                        e.className
                      ),
                      children: [
                        (0, l.jsx)(C.f, {
                          chainId: a.chain_id,
                          chainName: a.name,
                        }),
                        (0, l.jsx)(o.Z, {
                          className: (0, x.cn)(
                            "w-[16px] h-[16px] md:w-[24px] md:h-[24px]",
                            "text-primary ml-[4px]",
                            "transition-all duration-300",
                            t ? "rotate-180" : "rotate-0"
                          ),
                        }),
                      ],
                    }),
                }),
                (0, l.jsx)(p.AW, {
                  className: (0, x.cn)(
                    "bg-[#38235D33] backdrop-blur-[25px] max-h-[200px] overflow-auto custom-scrollbar z-30",
                    "p-[8px] md:p-[16px]",
                    "w-[150px] md:w-[220px]",
                    "mt-[8px] rounded-[8px]"
                  ),
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  align: "start",
                  children:
                    null == i
                      ? void 0
                      : i.map((e) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              className:
                                "flex justify-between items-center p-[8px] hover:bg-[rgba(255,255,255,0.08)] rounded-[8px] cursor-pointer",
                              onClick: () => g(e),
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, l.jsx)("img", {
                                      className:
                                        "w-[16px] h-[16px] md:w-[24px] md:h-[24px]",
                                      src: "https://oss.orderly.network/static/network_logo/".concat(
                                        e.chain_id,
                                        ".png"
                                      ),
                                      alt: e.name,
                                    }),
                                    (0, l.jsx)("div", {
                                      className:
                                        "text-xs md:text-sm leading-[18px] text-primary-54 ml-[8px]",
                                      children: e.name,
                                    }),
                                  ],
                                }),
                                (null == a ? void 0 : a.chain_id) ===
                                  e.chain_id &&
                                  (0, l.jsx)(m, {
                                    className:
                                      "text-[rgba(176,132,233,1)] w-[16px] h-[16px] md:w-[20px] md:h-[20px]",
                                  }),
                              ],
                            },
                            e.chain_id
                          )
                        ),
                }),
              ],
            }),
          });
        }),
        g = (e) => {
          let { isNotSupportChain: t } = (0, h.useAppContext)();
          return (0, l.jsxs)("div", {
            className: (0, x.cn)("relative", e.className),
            children: [
              !e.expanded &&
                (0, l.jsx)("div", {
                  className:
                    "bg-[rgba(56,35,93,0.2)] backdrop-blur-[25px] w-full h-full absolute",
                }),
              (0, l.jsxs)("div", {
                className: (0, x.cn)(
                  "flex justify-between items-center relative",
                  "h-[56px] md:h-[100px] px-[24px] text-white"
                ),
                children: [
                  (0, l.jsx)("a", {
                    href: "/",
                    className: "md:hidden",
                    children: (0, l.jsx)(i.Z, { size: 32 }),
                  }),
                  (0, l.jsx)("a", {
                    href: "/",
                    className: "hidden md:inline-block",
                    children: (0, l.jsx)(d.Z, {}),
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      e.expanded
                        ? null
                        : (0, l.jsxs)("div", {
                            className:
                              "flex relative items-center gap-2 md:gap-4 ",
                            children: [(0, l.jsx)(f, {}), (0, l.jsx)(c.Z, {})],
                          }),
                      (0, l.jsx)("div", {
                        onClick: e.toggleExpanded,
                        className: "ml-[8px] md:ml-[16px]",
                        children: e.expanded
                          ? (0, l.jsx)(a, {})
                          : (0, l.jsx)(n, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        v = [
          { title: "Staking", url: "/staking" },
          { title: "Rewards", url: "" }
        ],
        L = s(13021),
        N = s(53647),
        b = s(85356),
        k = s(53970),
        Z = s(41157);
      let M = (e) => {
          let [t, s] = r.useState(!1),
            {
              title: i,
              handleClick: n,
              isActive: a,
              pathname: d,
              toggleExpanded: c,
            } = e;
          return (
            console.log("pathname", d),
            (0, l.jsxs)(N.fC, {
              className: "w-full",
              open: t,
              onOpenChange: s,
              children: [
                (0, l.jsx)("div", {
                  className: "w-full",
                  children: (0, l.jsx)(N.xz, {
                    asChild: !0,
                    children: (0, l.jsxs)("button", {
                      className: (0, x.cn)(
                        "w-full flex justify-between fill-primary/[.54]",
                        (t || a) && "text-primary fill-primary"
                      ),
                      children: [
                        (0, l.jsx)("div", {
                          className: (0, x.cn)(t && "text-primary"),
                          children: "Rewards",
                        }),
                        (0, l.jsx)(b.d, {
                          className: (0, x.cn)(!t && " rotate-180"),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, l.jsx)(N.VY, {
                  className: "",
                  children: (0, l.jsxs)("div", {
                    className:
                      "flex flex-col gap-6 mt-6 text-[#8c8c8c] text-sm ",
                    children: [
                      (0, l.jsx)("button", {
                        onClick: (e) => {
                          s(!1),
                            "/tradingRewards" !== d
                              ? n("/tradingRewards")
                              : c(),
                            e.stopPropagation();
                        },
                        className: (0, x.cn)(
                          "px-2 text-start",
                          "/tradingRewards" === d && "text-primary"
                        ),
                        children: "Trading rewards",
                      }),
                      (0, l.jsx)("button", {
                        onClick: (e) => {
                          s(!1), n("/MMRewards"), e.stopPropagation();
                        },
                        className: (0, x.cn)(
                          "px-2 text-start",
                          "/MMRewardsPage" === d && "text-primary"
                        ),
                        children: "MM rewards",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        H = (e) => {
          let { title: t, handleClick: s } = e,
            [i, n] = (0, r.useState)(!1),
            [a, d] = (0, r.useState)(!1);
          return (
            (0, L.useRouter)(),
            (0, l.jsxs)(k.u, {
              delayDuration: 0,
              onOpenChange: d,
              children: [
                (0, l.jsx)(k.aJ, {
                  children: (0, l.jsxs)("div", {
                    className:
                      "h-[40px] flex fill-white/[.54] hover:fill-white items-center",
                    onMouseEnter: () => {
                      n(!0);
                    },
                    onMouseLeave: () => {
                      n(!1);
                    },
                    onClick: () => {
                      s("/tradingRewards");
                    },
                    children: [
                      t,
                      (0, l.jsx)(b.d, {
                        className: (0, x.cn)(!(a || i) && " rotate-180"),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)(k._v, {
                  className:
                    "w-[160px] bg-[#38235D33] rounded-lg p-2 mt-2  backdrop-blur-[25px]",
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, l.jsx)(Z.default, {
                        target: "",
                        href: "/tradingRewards",
                        onClick: () => {
                          s("/tradingRewards");
                        },
                        className:
                          "p-2 h-[42px] items-center flex text-sm hover:bg-white/[.08] rounded-lg text-white/50 hover:text-white",
                        children: "Trading rewards",
                      }),
                      (0, l.jsx)(Z.default, {
                        href: "/MMRewards",
                        onClick: () => {
                          s("/MMRewards");
                        },
                        className:
                          "p-2 h-[42px] items-center flex text-sm hover:bg-white/[.08] rounded-lg text-white/50 hover:text-white",
                        children: "MM rewards",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var y = r.memo((e) => {
          let t = (0, L.useRouter)(),
            s = (0, L.usePathname)(),
            { toggleExpanded: r } = e;
          return (0, l.jsx)("div", {
            className: (0, x.cn)(
              "flex flex-col select-none px-[20px] md:px-[40px] ",
              e.className
            ),
            children: v.map((e, i) => {
              let n = s === e.url;
              return (
                "" === e.url &&
                  ("/tradingRewards" === s || "/MMRewardsPage" === s) &&
                  (n = !0),
                (0, l.jsx)(
                  "div",
                  {
                    className: (0, x.cn)(
                      "text-primary-80 text-sm md:text-base py-[24px] cursor-pointer border-t-[1px] border-t-solid border-t-primary-8",
                      v.length === i + 1 &&
                        "border-b-[1px] border-b-solid border-b-primary-8"
                    ),
                    children: (0, l.jsx)("div", {
                      className: (0, x.cn)(
                        "flex justify-between items-center px-[24px]",
                        n ? "text-white" : "text-primary-54"
                      ),
                      onClick: () => {
                        t.push(e.url);
                      },
                      children:
                        "" === e.url
                          ? (0, l.jsx)(M, {
                              title: e.title,
                              isActive: n,
                              pathname: s,
                              toggleExpanded: r,
                              handleClick: (e) => {
                                t.push(e);
                              },
                            })
                          : e.title,
                    }),
                  },
                  e.title
                )
              );
            }),
          });
        }),
        _ = s(16010),
        R = (e) => {
          let { backdrop: t = !0 } = e,
            [s, i] = (0, r.useState)(!1),
            n = (function () {
              let [e, t] = (0, r.useState)(),
                { bannerHeight: s } = (0, h.useAppContext)(),
                { height: l } = (0, _.t)();
              return (
                (0, r.useEffect)(() => {
                  t(l - s);
                }, [l, s]),
                e
              );
            })();
          (0, r.useEffect)(() => {
            function e(e) {
              e.preventDefault();
            }
            return (
              s
                ? document.addEventListener("touchmove", e, { passive: !1 })
                : document.removeEventListener("touchmove", e),
              () => {
                document.removeEventListener("touchmove", e);
              }
            );
          }, [s]);
          let a = () => {
            i(!s);
          };
          return s
            ? (0, l.jsxs)("div", {
                style: { height: n },
                className: (0, x.cn)(
                  "relative bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] overflow-hidden",
                  e.className
                ),
                children: [
                  (0, l.jsx)("div", {
                    className: "pt-[20px] mx-[20px]",
                    children: (0, l.jsx)(g, { expanded: s, toggleExpanded: a }),
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full overflow-y-auto",
                    children: (0, l.jsx)(y, {
                      toggleExpanded: a,
                      className: "mt-[41px]",
                    }),
                  }),
                ],
              })
            : (0, l.jsx)("div", {
                className: t ? "pt-[20px] mx-[20px]" : "items-center py-0",
                children: (0, l.jsx)(g, { expanded: s, toggleExpanded: a }),
              });
        },
        V = s(79807),
        D = s(59580);
      let F = (e) => {
        let { url: t, title: s, router: r } = e,
          i = (e) => {
            e.includes("airdrop.orderly.network")
              ? window.open((0, D.ac)().airdropUrl, "_blank")
              : r.push(e);
          };
        return "Rewards" === s
          ? (0, l.jsx)(H, { title: s, handleClick: i })
          : (0, l.jsxs)(Z.default, {
              href: t,
              className: "flex items-center",
              onClick: (e) => {
                e.preventDefault(), i(t);
              },
              children: [
                s,
                t.includes("airdrop.orderly.network") &&
                  (0, l.jsx)(V.Z, { className: "ml-[2px] mt-[2px]" }),
              ],
            });
      };
      var E = (e) => {
          let t = (0, L.usePathname)(),
            s = (0, L.useRouter)();
          return (0, l.jsx)("div", {
            className: (0, x.cn)("flex items-center gap-[40px]", e.className),
            children: v.map((e) => {
              let r = t === e.url;
              return (
                "" === e.url &&
                  ("/tradingRewards" === t || "/MMRewardsPage" === t) &&
                  (r = !0),
                (0, l.jsx)(
                  "div",
                  {
                    className: (0, x.cn)(
                      "relative  z-10 cursor-pointer select-none text-primary-54 ",
                      r ? "text-primary-100" : "text-primary-54"
                    ),
                    children: (0, l.jsx)("div", {
                      className: "group",
                      children: (0, l.jsx)("div", {
                        className:
                          "flex items-center group-hover:text-primary-100 text-sm xl:text-base",
                        children: (0, l.jsx)(F, {
                          url: e.url,
                          title: e.title,
                          router: s,
                        }),
                      }),
                    }),
                  },
                  e.title
                )
              );
            }),
          });
        },
        A = (e) => {
          let { backdrop: t = !0 } = e;
          return (0, l.jsxs)("div", {
            className: (0, x.cn)("relative", e.className),
            children: [
              t &&
                (0, l.jsx)("div", {
                  className:
                    "bg-[rgba(56,35,93,0.2)] backdrop-blur-[25px] w-full h-full absolute rounded-full",
                }),
              (0, l.jsxs)("div", {
                className: (0, x.cn)(
                  "flex justify-between items-center",
                  t && "px-[24px] lg:px-[40px]"
                ),
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center h-[100px] relative gap-4",
                    children: [
                      (0, l.jsx)("a", {
                        href: "/",
                        className: "xl:hidden",
                        children: (0, l.jsx)(i.Z, { size: 32 }),
                      }),
                      (0, l.jsx)("a", {
                        href: "/",
                        className: "hidden xl:inline-block",
                        children: (0, l.jsx)(d.Z, {}),
                      }),
                      (0, l.jsx)(E, { className: "ml-[40px] xl:ml-[60px]" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex relative gap-2 md:gap-4",
                    children: [(0, l.jsx)(f, {}), (0, l.jsx)(c.Z, {})],
                  }),
                ],
              }),
            ],
          });
        },
        S = (e) =>
          (0, l.jsx)("div", {
            className:
              "w-full border border-x-0 border-t-0 border-b-1 border-[#FFFFFF14]",
            children: (0, l.jsxs)("div", {
              className: (0, x.cn)("max-w-[1440px] mx-auto", e.className),
              children: [
                (0, l.jsx)("div", {
                  className: (0, x.cn)("lg:hidden overflow-hidden"),
                  children: (0, l.jsx)(R, { backdrop: e.backdrop || !1 }),
                }),
                (0, l.jsx)("div", {
                  className: (0, x.cn)("hidden lg:block"),
                  children: (0, l.jsx)("div", {
                    className: (0, x.cn)(
                      "bg-[#110621] rounded-full",
                      "mx-[20px] md:mx-[40px] lg:mx-[60px] xl:mx-[80px]",
                      e.navClassName
                    ),
                    children: (0, l.jsx)(A, { backdrop: e.backdrop || !1 }),
                  }),
                }),
              ],
            }),
          });
    },
    86771: function (e, t, s) {
      var l = s(6272),
        r = s(8627),
        i = s(38820);
      let n = (0, r.forwardRef)((e, t) => {
        let { children: s, className: r, ...n } = e;
        return (0, l.jsx)("button", {
          ref: t,
          ...n,
          className: (0, i.cn)(
            "text-xs leading-[14px] md:text-base md:leading-[16px] ",
            "h-[28px] md:h-[40px] px-[12px] md:px-[20px]",
            "text-center font-semibold text-primary-100 rounded-full select-none",
            "bg-[linear-gradient(270.23deg,#48BDFF_0.04%,_#786CFF_47.76%,#BD00FF_99.64%)]",
            "hover:bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(270.23deg,#48BDFF_0.04%,_#786CFF_47.76%,#BD00FF_99.64%)]",
            r
          ),
          children: s,
        });
      });
      (n.displayName = "ConnectButton"), (t.Z = n);
    },
    23087: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return p;
        },
      });
      var l = s(6272),
        r = s(8627),
        i = s(26365),
        n = s(38820),
        a = s(56464),
        d = s(27048),
        x = s(92375),
        c = s(72798),
        h = s(86771),
        o = s(34082),
        p = (e) => {
          let { children: t, ...s } = e,
            [p, m] = (0, r.useState)(!1),
            { onConnect: u, walletAdapter: C } = (0,
            o.useWalletAdapterContext)(),
            [{ wallet: w }, j, f] = (0, i.Or)(),
            { setConnected: g, setAddress: v } = (0, c.useAppContext)(),
            [{ connectedChain: L }, N] = (0, i.Um)();
          (0, r.useEffect)(() => {
            var e, t;
            g(!!w),
              v(
                null == w
                  ? void 0
                  : null === (t = w.accounts) || void 0 === t
                  ? void 0
                  : null === (e = t[0]) || void 0 === e
                  ? void 0
                  : e.address
              );
          }, [w]),
            (function () {
              let [{ wallet: e }] = (0, i.Or)(),
                { setConnected: t, setAddress: s } = (0, c.useAppContext)();
              (0, r.useEffect)(() => {
                if (e) return;
                let l = new URLSearchParams(window.location.search).get(
                  "address"
                );
                l && (0, n.h2)() && (t(!0), s(l));
              }, [e]);
            })();
          let b = async () => {
            if (null == C ? void 0 : C.connected) return m(!0);
            u().then();
          };
          return (0, l.jsxs)(a.h_, {
            open: p,
            onOpenChange: (e) => {
              e || m(!1);
            },
            children: [
              (0, l.jsx)(a.$F, {
                asChild: !0,
                children: (0, l.jsx)(h.Z, { ...s, onClick: b, children: t }),
              }),
              (0, l.jsx)(a.AW, {
                className: (0, n.cn)(
                  "w-[124px] md:w-[160px]",
                  "bg-[#38235D33] backdrop-blur-[25px] rounded-[8px]",
                  "mt-[8px] mr-[-16px] z-10"
                ),
                onCloseAutoFocus: (e) => e.preventDefault(),
                children: (0, l.jsx)(d.Z, {
                  icon: (0, l.jsx)(x.R, {
                    className: "w-[16px] h-[16px] md:w-[24px] md:h-[24px]",
                  }),
                  title: "Disconnect",
                  onClick: () => {
                    null == C || C.disconnect(), m(!1);
                  },
                }),
              }),
            ],
          });
        };
    },
    2766: function (e, t, s) {
      var l = s(6272),
        r = s(8627),
        i = s(23087),
        n = s(86771),
        a = s(72798),
        d = s(38820),
        x = s(34082);
      t.Z = (e) => {
        let { children: t, ...s } = e,
          { initWallet: c, connected: h, address: o } = (0, a.useAppContext)(),
          { walletAdapter: p } = (0, x.useWalletAdapterContext)(),
          m = (0, r.useMemo)(
            () =>
              p && p.userAddress ? (0, d.Tg)(p.userAddress) : t || "Connect",
            [null == p ? void 0 : p.userAddress, t]
          ),
          u = (0, l.jsx)(n.Z, { ...s, children: m });
        return (
          c && (u = (0, l.jsx)(i.Z, { ...s, children: m })),
          (0, l.jsx)("div", { className: "", children: u })
        );
      };
    },
    27048: function (e, t, s) {
      var l = s(6272);
      t.Z = (e) =>
        (0, l.jsxs)("div", {
          className:
            "flex cursor-pointer items-center w-full p-[16px] text-primary-54 hover:text-primary-80",
          onClick: e.onClick,
          children: [
            e.icon,
            (0, l.jsx)("span", {
              className: "text-xs md:text-sm leading-[18px] pl-[8px] ",
              children: e.title,
            }),
          ],
        });
    },
    25090: function (e, t, s) {
      var l = s(6272);
      s(8627);
      var r = s(38820),
        i = s(70329),
        n = s(34082);
      t.Z = (e) => {
        let { walletAdapter: t } = (0, n.useWalletAdapterContext)();
        return (0, l.jsx)("button", {
          className: (0, r.cn)(
            "flex justify-center items-center",
            "h-[28px] md:h-[40px] px-[12px] md:px-[24px]",
            "text-xs leading-[12px] md:text-base md:leading-[16px]",
            "bg-[rgba(217,91,129,1)]  text-primary-100 rounded-full",
            e.className
          ),
          onClick: () => {
            t && t.changeChain && t.changeChain({ chain_id: i.oK.ETHEREUM });
          },
          children: "Wrong network",
        });
      };
    },
    16010: function (e, t, s) {
      s.d(t, {
        t: function () {
          return r;
        },
      });
      var l = s(8627);
      function r() {
        let [e, t] = (0, l.useState)(0),
          [s, r] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(() => {
            var e;
            t(window.innerWidth), r(window.innerHeight);
            let s = () => {
              r(window.innerHeight), t(window.innerWidth);
            };
            return (
              null === (e = window) ||
                void 0 === e ||
                e.addEventListener("resize", s),
              () => {
                var e;
                null === (e = window) ||
                  void 0 === e ||
                  e.removeEventListener("resize", s);
              }
            );
          }, []),
          { width: e, height: s }
        );
      }
    },
    79807: function (e, t, s) {
      var l = s(6272);
      s(8627),
        (t.Z = (e) => {
          let { size: t = 16, ...s } = e;
          return (0, l.jsxs)("svg", {
            width: "".concat(t, "px"),
            height: "".concat(t, "px"),
            viewBox: "0 0 16 16",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...s,
            children: [
              (0, l.jsx)("mask", {
                id: "mask0_2191_7528",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "16",
                height: "16",
                children: (0, l.jsx)("rect", {
                  width: "16",
                  height: "16",
                  fill: "#D9D9D9",
                }),
              }),
              (0, l.jsx)("g", {
                mask: "url(#mask0_2191_7528)",
                children: (0, l.jsx)("path", {
                  d: "M4.04995 12L3.19995 11.15L9.94995 4.4H3.99995V3.2H12V11.2H10.8V5.25L4.04995 12Z",
                }),
              }),
            ],
          });
        });
    },
    92375: function (e, t, s) {
      s.d(t, {
        R: function () {
          return r;
        },
      });
      var l = s(6272);
      s(8627);
      let r = (e) => {
        let { size: t = 24, ...s } = e;
        return (0, l.jsxs)("svg", {
          width: "".concat(t, "px"),
          height: "".concat(t, "px"),
          viewBox: "0 0 24 24",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...s,
          children: [
            (0, l.jsx)("g", {
              clipPath: "url(#clip0_3937_6642)",
              children: (0, l.jsx)("path", {
                clipRule: "evenodd",
                d: "M4.0451 2.98432L4.92899 3.8682L6.16642 2.63076C7.24036 1.55682 8.98157 1.55682 10.0555 2.63076L12.7072 5.28241L13.591 4.39853L14.6517 5.45919L12.7072 7.40373L14.6517 9.34828L13.591 10.4089L11.6465 8.46439L8.46452 11.6464L10.4091 13.5909L9.3484 14.6516L7.40386 12.707L5.45932 14.6516L4.39866 13.5909L5.28254 12.707L2.63089 10.0554C1.55695 8.98144 1.55695 7.24024 2.63089 6.1663L3.86833 4.92886L2.98444 4.04498L4.0451 2.98432ZM11.6465 6.34307L8.99485 3.69142C8.5067 3.20327 7.71524 3.20327 7.22708 3.69142L3.69155 7.22696C3.20339 7.71511 3.20339 8.50657 3.69155 8.99472L6.3432 11.6464L11.6465 6.34307ZM19.955 21.0155L19.0711 20.1317L17.8337 21.3691C16.7597 22.443 15.0185 22.443 13.9446 21.3691L11.2929 18.7174L10.4091 19.6013L9.3484 18.5407L18.5408 9.34828L19.6015 10.4089L18.7176 11.2928L21.3692 13.9445C22.4432 15.0184 22.4432 16.7596 21.3692 17.8336L20.1318 19.071L21.0157 19.9549L19.955 21.0155ZM12.3536 17.6568L15.0053 20.3084C15.4934 20.7966 16.2849 20.7966 16.773 20.3084L20.3086 16.7729C20.7967 16.2847 20.7967 15.4933 20.3086 15.0051L17.6569 12.3535L12.3536 17.6568Z",
              }),
            }),
            (0, l.jsx)("defs", {
              children: (0, l.jsx)("clipPath", {
                id: "clip0_3937_6642",
                children: (0, l.jsx)("rect", {
                  width: "24",
                  height: "24",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      };
    },
    19283: function (e, t, s) {
      var l = s(6272);
      s(8627),
        (t.Z = (e) =>
          (0, l.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, l.jsx)("mask", {
                id: "mask0_747_38605",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "24",
                height: "24",
                children: (0, l.jsx)("rect", { width: "24", height: "24" }),
              }),
              (0, l.jsx)("g", {
                mask: "url(#mask0_747_38605)",
                children: (0, l.jsx)("path", {
                  d: "M12.0001 14.4001L7.2001 9.6001H16.8001L12.0001 14.4001Z",
                }),
              }),
            ],
          }));
    },
    67589: function (e, t, s) {
      var l = s(6272);
      s(8627),
        (t.Z = (e) => {
          let { size: t = 40, ...s } = e;
          return (0, l.jsxs)("svg", {
            width: "".concat(t, "px"),
            height: "".concat(t, "px"),
            viewBox: "0 0 40 40",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...s,
            children: [
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.9539 -0.00585938L20.0489 -0.00585937C25.0634 0.00579215 29.6443 1.86063 33.1486 4.91627C33.3969 5.13279 33.2396 5.53015 32.91 5.53015L7.09278 5.53015C6.76316 5.53015 6.6059 5.13279 6.85421 4.91627C10.3585 1.86063 14.9394 0.00579141 19.9539 -0.00585938Z",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.2219 25.4085C12.0788 25.2047 11.8484 25.0767 11.5992 25.0767L1.25441 25.0767C0.954727 25.0767 0.736228 25.3605 0.821266 25.6475C3.27051 33.9141 10.9309 39.9455 20.0017 39.9455C29.0725 39.9455 36.7329 33.9141 39.1822 25.6475C39.2672 25.3605 39.0487 25.0767 38.749 25.0767L28.4045 25.0767C28.1552 25.0767 27.9248 25.2047 27.7817 25.4085C26.0643 27.8545 23.22 29.4536 20.0018 29.4536C16.7836 29.4536 13.9393 27.8545 12.2219 25.4085Z",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M27.5316 14.1925C27.7145 14.43 27.993 14.579 28.293 14.579L38.6608 14.579C38.9632 14.579 39.1823 14.2906 39.092 14.0022C38.3085 11.4988 37.0451 9.2071 35.4093 7.23466C35.2732 7.07047 35.0698 6.97779 34.8563 6.97779L5.14293 6.97778C4.92948 6.97778 4.7261 7.07047 4.58994 7.23466C2.95416 9.2071 1.69072 11.4988 0.907234 14.0022C0.816987 14.2906 1.03601 14.579 1.3385 14.579L11.7063 14.579C12.0063 14.579 12.2848 14.43 12.4676 14.1925C14.2036 11.9377 16.9317 10.4846 19.9996 10.4846C23.0676 10.4846 25.7957 11.9377 27.5316 14.1925Z",
              }),
              (0, l.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M29.1751 23.6315C28.9793 23.6315 28.8462 23.4321 28.9139 23.2486C29.2902 22.2275 29.4957 21.1239 29.4957 19.9723C29.4957 18.717 29.2515 17.5185 28.8079 16.4219C28.7331 16.237 28.8664 16.0303 29.0661 16.0303L39.2359 16.0303C39.4537 16.0303 39.6418 16.1837 39.6805 16.3977C39.8903 17.5576 39.9998 18.7524 39.9998 19.9726C39.9998 21.0915 39.9077 22.1888 39.7307 23.2575C39.6948 23.4746 39.5053 23.6315 39.285 23.6315L29.1751 23.6315ZM11.086 23.2486C11.1536 23.4321 11.0205 23.6315 10.8247 23.6315L0.714832 23.6314C0.494556 23.6314 0.305069 23.4746 0.269115 23.2575C0.0920909 22.1888 0 21.0915 0 19.9726C0 18.7524 0.10955 17.5576 0.319362 16.3977C0.358081 16.1837 0.546157 16.0303 0.763935 16.0303L10.9338 16.0303C11.1335 16.0303 11.2667 16.237 11.1919 16.4219C10.7484 17.5185 10.5042 18.7169 10.5042 19.9723C10.5042 21.1239 10.7096 22.2275 11.086 23.2486Z",
              }),
            ],
          });
        });
    },
    63737: function (e, t, s) {
      var l = s(6272);
      s(8627),
        (t.Z = (e) =>
          (0, l.jsxs)("img", {
            src:"/images/logo.png"
          }));
    },
    29191: function (e, t, s) {
      s.d(t, {
        f: function () {
          return i;
        },
      });
      var l = s(6272),
        r = s(38820);
      let i = (e) =>
        (0, l.jsx)("img", {
          className: (0, r.cn)(
            "w-[16px] h-[16px] md:w-[24px] md:h-[24px] ml-[12px] md:ml-[16px] rounded-full",
            e.className
          ),
          src: "https://oss.orderly.network/static/network_logo/".concat(
            e.chainId,
            ".png"
          ),
          alt: e.chainName,
        });
    },
    85356: function (e, t, s) {
      s.d(t, {
        d: function () {
          return r;
        },
      });
      var l = s(6272);
      let r = (e) =>
        (0, l.jsxs)("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          children: [
            (0, l.jsx)("mask", {
              id: "mask0_132_724",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "17",
              height: "16",
              children: (0, l.jsx)("rect", {
                x: "16.0012",
                y: "16",
                width: "16",
                height: "16",
                transform: "rotate(-180 16.0012 16)",
              }),
            }),
            (0, l.jsx)("g", {
              mask: "url(#mask0_132_724)",
              children: (0, l.jsx)("path", {
                d: "M8.00135 6.39998L11.2014 9.59998H4.80135L8.00135 6.39998Z",
              }),
            }),
          ],
        });
    },
  },
]);
