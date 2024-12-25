(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7704],
  {
    92114: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 29299));
    },
    29299: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return ea;
          },
        });
      var i,
        l = s(6272),
        a = s(47243),
        n = s(18780),
        r = s(20933),
        d = s(8627),
        c = s(79807),
        x = s(9064),
        o = s(41157);
      let m = () =>
          (0, l.jsx)(o.default, {
            href: "/staking",
            className: "text-white/40 hover:text-primary-50",
            children: (0, l.jsxs)("div", {
              className: "flex justify-start items-center gap-2",
              children: [
                (0, l.jsx)(x.Z, { size: 16, className: "rotate-180" }),
                (0, l.jsx)("div", {
                  className:
                    "text-base font-medium font-['Articulat CF'] leading-tight",
                  children: "Back to Staking",
                }),
              ],
            }),
          }),
        f = () =>
          (0, l.jsx)("div", {
            className:
              "text-[32px] md:text-[40px]  bg-gradient-to-b from-white via-white to-[#cfbefd] bg-clip-text text-transparent font-semibold",
            children: "Vesting",
          }),
        u = () =>
          (0, l.jsx)("div", {
            className:
              "text-[13px] md:text-base flex justify-start items-start flex-col text-primary-50 gap-1",
            children: (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)("div", {
                  className: "leading-5",
                  children: "Vest your staked esDRAI and convert it to DRAI.",
                }),
                (0, l.jsx)("div", {
                  className: "leading-5",
                  children:
                    "The vesting period ranges from 15 to 90 days, with 50% converted at day 15 and the rest vested linearly until full vesting at day 90. Each vesting is claimable once from day 15, with unvested esDRAI burned.",
                }),
                (0, l.jsxs)("div", {
                  className: "flex justify-start items-center leading-5",
                  children: [
                  ],
                }),
              ],
            }),
          }),
        h = (0, d.memo)(() =>
          (0, l.jsxs)("div", {
            className:
              "text-sm my-[40px] md:max-w-[688px] lg:max-w-[738px] flex justify-start items-start flex-col gap-3",
            children: [(0, l.jsx)(m, {}), (0, l.jsx)(f, {}), (0, l.jsx)(u, {})],
          })
        );
      var g = s(79434),
        j = s(25491),
        p = s(41356),
        v = s(2523),
        N = s(74205),
        b = s(68495),
        w = s(28640),
        y = s(65663),
        C = function (e) {
          var t = (0, d.useRef)(e);
          t.current = (0, d.useMemo)(
            function () {
              return e;
            },
            [e]
          );
          var s = (0, d.useRef)();
          return (
            s.current ||
              (s.current = function () {
                for (var e = [], s = 0; s < arguments.length; s++)
                  e[s] = arguments[s];
                return t.current.apply(this, e);
              }),
            s.current
          );
        },
        k =
          ((i = d.useEffect),
          function (e, t) {
            var s = (0, d.useRef)(!1);
            i(function () {
              return function () {
                s.current = !1;
              };
            }, []),
              i(function () {
                if (s.current) return e();
                s.current = !0;
              }, t);
          }),
        R = !!window.document && !!window.document.createElement,
        A = function (e, t) {
          void 0 === t && (t = {});
          var s,
            i = t.onError,
            l =
              void 0 === i
                ? function (e) {
                    console.error(e);
                  }
                : i;
          try {
            s = R ? localStorage : void 0;
          } catch (e) {
            l(e);
          }
          function a() {
            try {
              var i = null == s ? void 0 : s.getItem(e);
              if (i) return t.deserializer ? t.deserializer(i) : JSON.parse(i);
            } catch (e) {
              l(e);
            }
            return (0, y.mf)(t.defaultValue)
              ? t.defaultValue()
              : t.defaultValue;
          }
          var n = (0, w.CR)((0, d.useState)(a), 2),
            r = n[0],
            c = n[1];
          return (
            k(
              function () {
                c(a());
              },
              [e]
            ),
            [
              r,
              C(function (i) {
                var l = (0, y.mf)(i) ? i(r) : i;
                if ((c(l), (0, y.G7)(l))) null == s || s.removeItem(e);
                else
                  try {
                    null == s ||
                      s.setItem(
                        e,
                        t.serializer ? t.serializer(l) : JSON.stringify(l)
                      );
                  } catch (e) {
                    console.error(e);
                  }
              }),
            ]
          );
        },
        F = s(38820),
        E = (0, d.memo)(() => {
          let e = (0, N.a)("(min-width: 768px)"),
            [t, s] = A("order-vest-periods-close", { defaultValue: !1 }),
            [i, a] = (0, d.useState)(!1);
          return t
            ? (0, l.jsx)(l.Fragment, {})
            : (0, l.jsx)(r.Z, {
                className: (0, F.cn)(
                  "w-full flex flex-col md:flex-row md:gap-5  transition-all duration-500 ease-in-out",
                  i ? "opacity-0" : "opacity-100"
                ),
                children: (0, l.jsxs)(v.Z, {
                  children: [
                    (0, l.jsx)(v.Z.Title, {
                      title: (0, l.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, l.jsx)("span", { children: "Vesting periods" }),
                          (0, l.jsx)(b.Z, {
                            className:
                              "text-primary-50 cursor-pointer w-6 h-6 hover:text-primary-80",
                            onClick: () => {
                              a(!0),
                                setTimeout(() => {
                                  a(!1), s(!0);
                                }, 500);
                            },
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(v.Z.Content, {
                      children: e
                        ? (0, l.jsxs)("div", {
                            className:
                              "h-[108px] flex-col justify-start items-start gap-2 inline-flex",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "self-stretch justify-between items-start inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#f6ad1d] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "Start vesting",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#1deef6] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "50% vested",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#1df6b5] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "100% vested",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "self-stretch justify-start items-start inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-0.5 h-[60px] bg-gradient-to-t from-[#f6ad1d] to-[#edca86]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "grow shrink basis-0 self-stretch px-10 bg-gradient-to-b from-[#865b24] to-[#170a28] flex-col justify-center items-center gap-1 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#f6ad1d] to-[#edca86] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Freeze",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#f6ad1d] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                        children: "Unclaimable",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-0.5 h-[60px] bg-gradient-to-t from-[#1deef6] to-[#86e9ed]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "grow shrink basis-0 self-stretch px-10 bg-gradient-to-b from-[#1a7b8e] to-[#170a28] flex-col justify-center items-center gap-1 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#1deef6] to-[#86e9ed] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Linear vesting",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#1deef6] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                        children: "Partially claimable",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-0.5 h-[60px] bg-gradient-to-t from-[#1df6b5] to-[#86ed92]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "grow shrink basis-0 self-stretch px-10 bg-gradient-to-b from-[#1a7e6e] to-[#170a28] rounded-tr-lg rounded-br-lg flex-col justify-center items-center gap-1 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#1df6b5] to-[#86ed92] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Completion",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#1df6b5] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                        children: "Fully claimable",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "self-stretch justify-between items-start inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#f6ad1d] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "Day 0",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#1deef6] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "Day 16",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "grow shrink basis-0 text-[#1df6b5] text-[13px] font-medium font-['Articulat CF'] leading-none",
                                    children: "Day 91",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, l.jsxs)("div", {
                            className:
                              "h-[246px] justify-start items-start gap-2 inline-flex",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "w-20 self-stretch flex-col justify-start items-end inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-8 grow shrink basis-0 text-[#f6ad1d] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "Day 0",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-[35px] grow shrink basis-0 text-[#1deef6] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "Day 16",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-[39px] grow shrink basis-0 text-[#1df6b5] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "Day 91",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "grow shrink basis-0 flex-col justify-start items-start inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-0.5 bg-gradient-to-t from-[#f6ad1d] to-[#edca86]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "self-stretch h-20 px-10 bg-gradient-to-b from-[#865b24] to-[#170a28] flex-col justify-center items-center gap-1 flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#f6ad1d] to-[#edca86] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Freeze",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#f6ad1d] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                        children: "Unclaimable",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-0.5 bg-gradient-to-t from-[#1deef6] to-[#86e9ed]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "self-stretch h-20 px-10 bg-gradient-to-b from-[#1a7b8e] to-[#170a28] flex-col justify-center items-center gap-1 flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#1deef6] to-[#86e9ed] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Linear vesting",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#1deef6] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                        children: "Partially claimable",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-0.5 bg-gradient-to-t from-[#1df6b5] to-[#86ed92]",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "self-stretch h-20 px-10 bg-gradient-to-b from-[#1a7e6e] to-[#170a28] rounded-bl-lg rounded-br-lg flex-col justify-center items-center gap-1 flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "px-1.5 py-0.5 bg-gradient-to-t from-[#1df6b5] to-[#86ed92] rounded-[45px] justify-center items-center gap-2.5 inline-flex",
                                        children: (0, l.jsx)("div", {
                                          className:
                                            "text-center text-[#170b29] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                          children: "Completion",
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-center text-[#1df6b5] text-[10px] font-medium font-['Articulat CF'] leading-3",
                                        children: "Fully claimable",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "w-20 self-stretch flex-col justify-start items-start inline-flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-[70px] grow shrink basis-0 text-[#f6ad1d] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "Start vesting",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-[63px] grow shrink basis-0 text-[#1deef6] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "50% vested",
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-[68px] grow shrink basis-0 text-[#1df6b5] text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                                    children: "100% vested",
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              });
        }),
        Z = s(98035),
        D = s(15495),
        O = s(82179),
        V = s(62823),
        _ = s(6468),
        S = s.n(_),
        B = s(19863),
        M = s(74939),
        z = s(62587),
        H = s(66402),
        L = s(56187),
        T = s(34877);
      function I(e) {
        let { open: t, onClose: s, value: i } = e,
          [a, n] = (0, d.useState)(!1),
          { esOrderUnstakeAndVestRequest: r } = (0, z.Z)(),
          { setTxHash: c } = (0, L.w)(),
          x = (0, d.useCallback)(async () => {
            try {
              if (!i) return;
              n(!0);
              let e = await r(Number(i));
              c(e.hash), s(!1);
            } catch (e) {
              console.log("esOrderUnstakeAndVestRequest:", e), (0, T.Z)(e);
            } finally {
              n(!1);
            }
          }, [i]);
        return (0, l.jsx)(M.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, l.jsxs)(M.cZ, {
            className: "",
            children: [
              (0, l.jsx)(M.fK, {
                children: (0, l.jsx)(M.$N, { children: "Confirm vesting" }),
              }),
              (0, l.jsx)(M.a7, {
                children: (0, l.jsxs)("div", {
                  className:
                    "flex-col justify-start items-start gap-5 inline-flex",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "self-stretch",
                      children: [
                        (0, l.jsx)("span", {
                          className:
                            "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children: "By proceeding, ",
                        }),
                        (0, l.jsxs)("span", {
                          className:
                            "text-white/95 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children: [
                            (0, F.uf)(i || void 0, { decimal: 2 }),
                            " esDRAI",
                          ],
                        }),
                        (0, l.jsx)("span", {
                          className:
                            "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children:
                            " will vest to DRAI over a period of 15 to 90 days. You may cancel the vesting process at any time before completion.",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                      children: "Are you sure you want to continue to vest?",
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(M.cN, {
                children: (0, l.jsxs)("div", {
                  className:
                    "w-full justify-start items-start gap-2.5 inline-flex",
                  children: [
                    (0, l.jsx)(B.z, {
                      variant: "outline",
                      onClick: () => s(!1),
                      className: "flex-1",
                      children: "Cancel",
                    }),
                    (0, l.jsx)(B.z, {
                      variant: "secondary",
                      disabled: a,
                      loading: a,
                      onClick: x,
                      className: "flex-1",
                      children: "Vest",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function q(e) {
        let { disabled: t = !1, value: s, onSuccess: i } = e,
          [a, n] = (0, d.useState)(!1),
          { updateStakeInfoByContract: r, getVestingEsOrder: c } = (0, j.B)();
        return (0, l.jsxs)(L.q, {
          onSuccess: () => {
            (0, F.LE)(() => {
              r(), c();
            }),
              H.toast.success("Started vesting successfully."),
              i && i();
          },
          children: [
            (0, l.jsx)(B.z, {
              variant: "secondary",
              disabled: t,
              onClick: () => n(!0),
              className: "max-md:w-full",
              children: "Vest",
            }),
            (0, l.jsx)(I, { open: a, onClose: n, value: s }),
          ],
        });
      }
      let P = (e) => {
          let { data: t, description: s } = e;
          return (0, l.jsx)("div", {
            className:
              "w-full h-full p-5 bg-[#1e122f] rounded-xl flex-col justify-center items-start gap-5 inline-flex",
            children: (0, l.jsx)("div", {
              className:
                "self-stretch grow shrink basis-0 flex-col justify-between items-start flex",
              children: (0, l.jsxs)("div", {
                className:
                  "self-stretch grow shrink basis-0 flex-col justify-center items-center gap-1 flex",
                children: [
                  (0, l.jsxs)("div", {
                    className: "justify-start items-center gap-1 inline-flex",
                    children: [
                      (0, l.jsx)("img", {
                        className: "w-4 h-4 md:w-5 md:h-5",
                        src: "/staking/esDRAI.png",
                        alt: "order",
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "text-white text-base font-medium font-['Manrope'] leading-tight",
                        children: t,
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "text-white/50 text-[13px] font-medium font-['Articulat CF'] leading-none",
                    children: s,
                  }),
                ],
              }),
            }),
          });
        },
        U = () => {
          let [e, t] = (0, d.useState)(""),
            {
              stakeBalance: s,
              updateStakeInfoByContract: i,
              updateUserUnstakeInfoByContract: a,
            } = (0, j.B)(),
            n = (0, d.useMemo)(
              () =>
                !e || Number.isNaN(e)
                  ? V.A.invalid
                  : !(null == s ? void 0 : s.total_staked_esorder) ||
                    new (S())(e).gt(null == s ? void 0 : s.total_staked_esorder)
                  ? V.A.insufficientBalance
                  : V.A.valid,
              [null == s ? void 0 : s.total_staked_order, e]
            );
          return (0, l.jsxs)("div", {
            className:
              "h-full w-full p-5 bg-[#1e122f] rounded-xl flex-col justify-center items-start gap-3 inline-flex",
            children: [
              (0, l.jsx)("div", {
                className: "justify-start items-start gap-1 inline-flex",
                children: (0, l.jsx)("div", {
                  className:
                    "text-white text-base font-medium font-['Articulat CF'] leading-tight",
                  children: "Vest esDRAI",
                }),
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full p-5 bg-[#221733] rounded-xl justify-between items-start md:items-center gap-5 hidden md:inline-flex ",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex",
                    children: (0, l.jsx)("div", {
                      className: "w-full",
                      children: (0, l.jsx)(O.Z, {
                        balance: null == s ? void 0 : s.total_staked_esorder,
                        value: e,
                        decimal: 2,
                        setValue: t,
                        valueValidStatus: n,
                        tokenInfo: {
                          tokenName: "esDRAI",
                          tokenImage: "/staking/esDRAI.png",
                        },
                        className: "w-full p-0",
                        isShowTokenInfo: !1,
                        isShowErrorTip: !1,
                      }),
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "h-5 justify-start items-center gap-1 inline-flex",
                    children: [
                      (0, l.jsx)("img", {
                        className: "w-4 h-4 md:w-5 md:h-5",
                        src: "/staking/esDRAI.png",
                        alt: "order",
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "text-white text-base font-medium font-['Articulat CF']",
                        children: "esDRAI",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "h-10 w-[0px] border border-white/10 hidden md:block",
                  }),
                  (0, l.jsx)(q, {
                    value: e,
                    disabled: !e || n !== V.A.valid,
                    onSuccess: () => t(""),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full p-3 bg-[#221733] rounded-xl flex-col justify-center items-end gap-5 inline-flex md:hidden",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "self-stretch justify-end items-center gap-5 inline-flex",
                    children: (0, l.jsx)("div", {
                      className:
                        "grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex",
                      children: (0, l.jsx)("div", {
                        className: "w-full",
                        children: (0, l.jsx)(O.Z, {
                          balance: null == s ? void 0 : s.total_staked_esorder,
                          value: e,
                          decimal: 2,
                          setValue: t,
                          valueValidStatus: n,
                          tokenInfo: {
                            tokenName: "esDRAI",
                            tokenImage: "/staking/esDRAI.png",
                          },
                          className: "w-full p-0",
                          isShowErrorTip: !1,
                        }),
                      }),
                    }),
                  }),
                  (0, l.jsx)(q, {
                    value: e,
                    disabled: !e || n !== V.A.valid,
                    onSuccess: () => t(""),
                  }),
                ],
              }),
            ],
          });
        };
      function J() {
        let { stakeBalance: e, vestingEsOrder: t } = (0, j.B)();
        return (0, l.jsx)(r.Z, {
          className: "flex flex-col md:flex-row md:gap-5",
          children: (0, l.jsxs)(v.Z, {
            children: [
              (0, l.jsx)(v.Z.Title, {
                title: (0, l.jsxs)("div", {
                  className: "flex items-center justify-start gap-1",
                  children: [
                    (0, l.jsx)("span", { children: "esDRAI" }),
                    (0, l.jsx)(Z.default, {
                      content:
                        "esDRAI is the escrowed DRAI token. Starting from epoch 11, users who earn trading rewards and market making rewards will receive esDRAI instead of liquid DRAI token.",
                      children: (0, l.jsx)("div", {
                        children: (0, l.jsx)(D.Z, {
                          className: "w-[16px] h-[16px] text-primary-50",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(v.Z.Content, {
                children: (0, l.jsxs)("div", {
                  className: "flex flex-col lg:flex-row gap-5",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col gap-5 md:flex-row lg:flex-col lg:w-[280px] xl:w-[400px] h-full",
                      children: [
                        (0, l.jsx)(P, {
                          data: (0, F.uf)(
                            null == e ? void 0 : e.total_staked_esorder,
                            { decimal: 2 }
                          ),
                          description: "My staked esDRAI",
                        }),
                        (0, l.jsx)(P, {
                          data: (0, F.uf)(t, { decimal: 2 }),
                          description: "My vesting esDRAI",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "flex-1",
                      children: (0, l.jsx)(U, {}),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var W = s(6347);
      function G(e) {
        let { vestingData: t } = e;
        return (0, l.jsx)("div", {
          className: "flex flex-col gap-5 text-sm",
          children: t.map((e) =>
            (0, d.createElement)(W.Z, { ...e, key: e.vest_request_id })
          ),
        });
      }
      var K = (0, d.memo)((e) => {
        let { description: t } = e;
        return (0, l.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center h-full w-full text-center text-white/50 text-sm font-medium font-['Articulat CF'] leading-[16.80px] gap-3",
          children: [
            (0, l.jsxs)("svg", {
              width: "60",
              height: "60",
              viewBox: "0 0 60 60",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, l.jsxs)("g", {
                  "clip-path": "url(#clip0_3254_9020)",
                  children: [
                    (0, l.jsx)("path", {
                      d: "M12.5 20.0001H47.5V25.0001H12.5V20.0001ZM60 56.5001L55.5 52.0001C56.75 50.0001 57.5 47.5001 57.5 45.0001C57.5 38.0001 52 32.5001 45 32.5001C38 32.5001 32.5 38.0001 32.5 45.0001C32.5 52.0001 38 57.5001 45 57.5001C47.5 57.5001 50 56.7501 52 55.5001L56.5 60.0001L60 56.5001ZM45 52.5001C40.75 52.5001 37.5 49.2501 37.5 45.0001C37.5 40.7501 40.75 37.5001 45 37.5001C49.25 37.5001 52.5 40.7501 52.5 45.0001C52.5 49.2501 49.25 52.5001 45 52.5001Z",
                      fill: "#906BC1",
                    }),
                    (0, l.jsx)("path", {
                      d: "M28.235 50.0001H15V40.0001H28.235C28.7725 38.1926 29.595 36.5101 30.65 35.0001H15V10.0001H45V27.5001C46.7375 27.5001 48.415 27.7626 50 28.2351V10.0001C50 7.23756 47.7625 5.00006 45 5.00006H15C12.2375 5.00006 10 7.23756 10 10.0001V50.0001C10 52.7626 12.2375 55.0001 15 55.0001H30.65C29.595 53.4901 28.7725 51.8076 28.235 50.0001Z",
                      fill: "#906BC1",
                    }),
                    (0, l.jsx)("path", {
                      opacity: "0.3",
                      d: "M27.5 45C27.5 35.335 35.335 27.5 45 27.5C45.85 27.5 46.6825 27.5825 47.5 27.7V7.5H12.5V52.5H29.2075C28.125 50.225 27.5 47.6875 27.5 45Z",
                      fill: "#906BC1",
                    }),
                  ],
                }),
                (0, l.jsx)("defs", {
                  children: (0, l.jsx)("clipPath", {
                    id: "clip0_3254_9020",
                    children: (0, l.jsx)("rect", {
                      width: "60",
                      height: "60",
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className:
                "text-center text-white/50 text-sm font-medium font-['Articulat CF'] leading-[16.80px]",
              children: null != t ? t : "No ongoing vesting",
            }),
          ],
        });
      });
      let Y = (e) => {
          let { className: t } = e;
          return (0, l.jsx)("div", {
            className: (0, F.cn)(
              "px-2 py-0.5 bg-gray-300 animate-pulse rounded-tl-lg rounded-br-lg justify-start items-center gap-2.5 inline-flex",
              t
            ),
            children: (0, l.jsx)("div", {
              className:
                "bg-gray-300 text-transparent text-[11px] font-medium font-['Manrope'] leading-[13.20px]",
              children: "Loading",
            }),
          });
        },
        $ = (e) => {
          let { className: t } = e;
          return (0, l.jsxs)("div", {
            className: (0, F.cn)(
              "flex-col justify-center items-start gap-1 inline-flex",
              t
            ),
            children: [
              (0, l.jsx)("div", {
                className: "bg-gray-300 animate-pulse w-20 h-4 rounded",
              }),
              (0, l.jsx)("div", {
                className: "justify-start items-center gap-1 inline-flex",
                children: (0, l.jsx)("div", {
                  className: "bg-gray-300 animate-pulse w-24 h-4 rounded",
                }),
              }),
            ],
          });
        },
        Q = () =>
          (0, l.jsxs)("div", {
            className:
              "relative px-5 pt-7 pb-5 bg-[#1e122f] rounded-lg flex-col justify-center items-start gap-5 inline-flex",
            children: [
              (0, l.jsx)(Y, { className: "absolute top-0 left-0" }),
              (0, l.jsxs)("div", {
                className:
                  "self-stretch justify-start items-start gap-5 flex flex-col md:flex-row w-full lg:items-center",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 flex-1 w-full",
                    children: [
                      (0, l.jsx)(
                        $,
                        { className: "order-1 md:order-4 lg:order-1" },
                        "1"
                      ),
                      (0, l.jsx)(
                        $,
                        { className: "order-2 md:order-5 lg:order-2" },
                        "2"
                      ),
                      (0, l.jsx)(
                        $,
                        { className: "order-3 md:-order-1 lg:order-3" },
                        "3"
                      ),
                      (0, l.jsx)(
                        $,
                        { className: "order-4 md:-order-1 lg:order-4" },
                        "4"
                      ),
                      (0, l.jsx)(
                        $,
                        { className: "order-5 md:-order-1 lg:order-5" },
                        "5"
                      ),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "h-8 w-full md:w-24  bg-gray-300 animate-pulse rounded",
                  }),
                ],
              }),
            ],
          }),
        X = (e) => {
          let { className: t } = e;
          return (0, l.jsx)("div", {
            className: "flex flex-col gap-5",
            children: Array.from({ length: 3 }, (e, t) => t).map((e) =>
              (0, l.jsx)(Q, {}, e)
            ),
          });
        };
      var ee = s(72798);
      function et() {
        let { address: e } = (0, ee.useAppContext)(),
          { vestingEsOrder: t, vestingEsOrderList: s } = (0, j.B)();
        return (0, l.jsx)(r.Z, {
          className: "flex flex-col md:flex-row md:gap-5",
          children: (0, l.jsxs)(v.Z, {
            children: [
              (0, l.jsx)(v.Z.Title, {
                title: (0, l.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex items-center justify-start gap-1",
                      children: [
                        (0, l.jsx)("span", { children: "My vesting" }),
                        (0, l.jsx)(Z.default, {
                          content:
                            "The vesting period ranges from 15 to 90 days, with 50% converted at day 15 and the rest vested linearly until full vesting at day 90. Each vesting is claimable once from day 15, with unvested esDRAI burned.",
                          children: (0, l.jsx)("div", {
                            children: (0, l.jsx)(D.Z, {
                              className: "w-[16px] h-[16px] text-primary-50",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "max-md:hidden justify-start items-baseline gap-1.5 inline-flex ml-[]",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "text-right text-white/50 text-sm font-medium font-['Articulat CF'] leading-[16.80px]",
                          children: "My vesting esDRAI",
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "text-right text-white text-sm font-medium font-['Manrope'] leading-[16.80px]",
                          children: (0, F.uf)(t, { decimal: 2 }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)(v.Z.Content, {
                children: [
                  void 0 === s && (0, l.jsx)(X, {}),
                  void 0 !== s &&
                    s.length > 0 &&
                    (0, l.jsx)(G, { vestingData: s }),
                  void 0 !== s &&
                    0 === s.length &&
                    (0, l.jsx)("div", {
                      className: "text-center py-10 text-primary-50",
                      children: (0, l.jsx)(K, {}),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      var es = s(21837),
        ei = s(34082);
      let el = (e) => {
        let { children: t } = e,
          { walletAdapter: s, isNotSupportChain: i } = (0,
          ei.useWalletAdapterContext)();
        return s && s.connected
          ? "SOL" === s.namespace
            ? (0, l.jsx)(r.Z, {
                children: (0, l.jsx)("div", {
                  className:
                    "w-full border border-solid border-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                  children: (0, l.jsx)(es.Z, {
                    text: "Vesting on Solana is currently not supported, please connect to a supported EVM network.",
                  }),
                }),
              })
            : i
            ? (0, l.jsx)(r.Z, {
                children: (0, l.jsx)("div", {
                  className:
                    "w-full outline outline-[1px] outline-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                  children: (0, l.jsx)(g.Z, {
                    content:
                      "Please switch to a supported network to view your staking details.",
                    type: g.B.WrongNetwork,
                  }),
                }),
              })
            : (0, l.jsx)("div", {
                className: "pb-[40px] md:pb-[60px]",
                children: t,
              })
          : (0, l.jsx)(r.Z, {
              children: (0, l.jsx)("div", {
                className:
                  "w-full border border-solid border-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                children: (0, l.jsx)(g.Z, {
                  content: "Connect wallet to view your staking details.",
                  type: g.B.Connect,
                }),
              }),
            });
      };
      function ea() {
        return (0, l.jsx)(j.E, {
          children: (0, l.jsxs)(p.u, {
            children: [
              (0, l.jsx)(a.Z, {}),
              (0, l.jsxs)("div", {
                className: "relative ",
                children: [
                  (0, l.jsx)(n.default, { navClassName: "" }),
                  (0, l.jsx)(r.Z, { children: (0, l.jsx)(h, {}) }),
                  (0, l.jsx)(E, {}),
                  (0, l.jsxs)(el, {
                    children: [(0, l.jsx)(J, {}), (0, l.jsx)(et, {})],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        2278, 6578, 9022, 9602, 3e3, 5018, 1334, 6817, 9255, 5618, 4244, 307,
        6112, 3091, 4082, 8780, 8133, 6217, 9960, 7039, 1278, 1744,
      ],
      function () {
        return e((e.s = 92114));
      }
    ),
      (_N_E = e.O());
  },
]);
