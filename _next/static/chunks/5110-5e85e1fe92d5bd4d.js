"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5110],
  {
    55673: function (e, t, s) {
      s.d(t, {
        g: function () {
          return n;
        },
      });
      var l = s(6272),
        a = s(98035),
        r = s(15495),
        i = s(8627);
      let n = (e) => {
        let [t, s] = (0, i.useState)(!1);
        return (0, l.jsx)(a.default, {
          content: e.content,
          children: (0, l.jsx)("div", {
            children: (0, l.jsx)(r.Z, {
              className: "w-[16px] h-[16px] inline-block",
            }),
          }),
        });
      };
    },
    53600: function (e, t, s) {
      s.d(t, {
        Es: function () {
          return a;
        },
        yb: function () {
          return m;
        },
        YT: function () {
          return u;
        },
      });
      var l,
        a,
        r = s(6272),
        i = s(8627),
        n = s(62524),
        d = s(31960);
      let c = (e) => {
        let [t, s] = (0, i.useState)(void 0),
          [l, r] = (0, i.useState)(void 0),
          n = (0, i.useCallback)(() => {
            (e === a.normal ? (0, d.$s)() : (0, d.qT)()).then((e) => {
              let { rows: t, current_epoch: l } = e;
              if (Array.isArray(t)) {
                let e = t.map((e) => e);
                e.sort((e, t) => t.end_time - e.end_time);
                let a =
                    null == e ? void 0 : e.findIndex((e) => e.epoch_id === l),
                  i = e.find((e) => 1 === e.epoch_id);
                i && (null == i ? void 0 : i.start_time) > Date.now()
                  ? r(i)
                  : r(-1 !== a ? (null == e ? void 0 : e[a]) : void 0),
                  s(e);
              }
            });
          }, [e]);
        (0, i.useEffect)(() => {
          n();
        }, [e]);
        let c = (0, i.useMemo)(() => {
          let e = null == t ? void 0 : t.find((e) => 1 === e.epoch_id);
          return !e || e.start_time > Date.now();
        }, [t]);
        return { data: t, curEpochInfo: l, isUnstart: c, refresh: n };
      };
      var o = s(2945);
      ((l = a || (a = {})).normal = "normal"), (l.mm = "mm");
      let x = (0, i.createContext)({
          type: "normal",
          totalOrderClaimedReward: { data: void 0, refresh: () => {} },
          totalEsOrderClaimedReward: { data: void 0, refresh: () => {} },
          epochList: {
            data: void 0,
            curEpochInfo: void 0,
            isUnstart: !1,
            refresh: () => {},
          },
        }),
        m = (e) => {
          let { type: t } = e,
            s = (0, n.D)("mm" === t ? n.f.dmmOrder : n.f.order),
            l = (0, n.D)("mm" === t ? n.f.dmmEsOrder : n.f.esORder);
          (0, i.useEffect)(() => {
            let e =
              "mm" == t
                ? "MM reward | Drive3 AI"
                : "Trading reward | Drive3 AI";
            document.title = e;
          }, []);
          let a = c(t);
          return (0, r.jsx)(x.Provider, {
            value: {
              type: t,
              totalOrderClaimedReward: s,
              totalEsOrderClaimedReward: l,
              epochList: a,
            },
            children: (0, r.jsx)(o.S, {
              loading: void 0 === a.data,
              children: e.children,
            }),
          });
        };
      function u() {
        return (0, i.useContext)(x);
      }
    },
    12527: function (e, t, s) {
      s.d(t, {
        j: function () {
          return E;
        },
      });
      var l = s(6272),
        a = s(3404),
        r = s(54576),
        i = s(7541),
        n = s(38820),
        d = s(53970),
        c = s(8627),
        o = s(42701),
        x = s(74205),
        m = s(55673);
      let u = (e) => {
        var t;
        let s = (0, c.useMemo)(() => {
            let t = [...(e.data || [])];
            return (
              t.sort((e, t) => (t.r_account || 0) - (e.r_account || 0)),
              (t = t.filter((e) => 0 !== e.r_account && void 0 !== e.r_account))
            );
          }, [e.data]),
          [a, u] = (0, c.useState)(!1);
        if (!(0, x.a)("(min-width: 1024px)"))
          return (0, l.jsx)(m.g, {
            content:
              "Epoch rewards are distributed based on the builders' share of the paid base fee.",
          });
        let h = s.length >= 6;
        return (0, l.jsxs)(d.u, {
          delayDuration: 0,
          open: a,
          onOpenChange: u,
          children: [
            (0, l.jsx)(d.aJ, {
              children: (0, l.jsx)("div", {
                onClick: (e) => {
                  e.preventDefault(), u(!0);
                },
                children: (0, l.jsx)(i.s, {}),
              }),
            }),
            (0, l.jsx)(d._v, {
              side: "top",
              sideOffset: 10,
              align: "center",
              className: "z-[1]",
              children: (0, l.jsxs)("div", {
                className: (0, n.cn)(
                  "outline outline-1 outline-[#B084E9] rounded-md w-[242px] p-4 bg-[#170B29] text-xs lg:text-[13px] z-20",
                  h && "pb-0"
                ),
                children: [
                  (0, l.jsx)("div", {
                    className: "text-white/50 break-words",
                    children:
                      "Epoch rewards are distributed based on the builders' share of the paid base fee.",
                  }),
                  (0, l.jsx)(r.Z, { className: "my-2 lg:my-3" }),
                  (0, l.jsxs)("div", {
                    className: "flex justify-between text-primary",
                    children: [
                      (0, l.jsx)("div", { children: "Builder" }),
                      (0, l.jsx)("div", { children: "Rewards" }),
                    ],
                  }),
                  (0, l.jsx)(r.Z, { className: "mt-2 lg:mt-3" }),
                  (0, l.jsx)("div", {
                    className: (0, n.cn)(
                      h &&
                        "max-h-[160px] overflow-y-auto custom-scrollbar mr-[-8px]"
                    ),
                    children: s.map((e, t) => {
                      let a = t === s.length - 1;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: (0, n.cn)(
                            "flex my-2 lg:my-3 h-[16px] gap-2 lg:gap-3 justify-between text-primary",
                            h
                              ? (0, n.cn)("pr-2", a && "mb-4 lg:mb-4")
                              : a && "mb-0 lg:mb-0"
                          ),
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "flex-1 text-ellipsis overflow-hidden break-all line-clamp-1",
                              children: e.broker_name,
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "flex-shrink-0 flex gap-1 justify-end numberFont",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "",
                                  children: (0, n.uf)(e.r_account, {
                                    decimal: 2,
                                    removeEndZero: !1,
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "text-white/50",
                                  children: e.epoch_token,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  0 ===
                    ((null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.length) || 0) && (0, l.jsx)(o.B, {}),
                ],
              }),
            }),
          ],
        });
      };
      var h = s(6468),
        p = s.n(h);
      let f = (e) => {
        var t;
        let s = (0, c.useMemo)(() => {
            let t = [...(e.data || [])];
            return (
              t.sort((e, t) => t.rewards_allocation - e.rewards_allocation),
              t.filter((e) => 0 !== e.rewards_allocation),
              t
            );
          }, [null == e ? void 0 : e.data]),
          [a, u] = (0, c.useState)(!1);
        if (!(0, x.a)("(min-width: 1024px)"))
          return (0, l.jsx)(m.g, {
            content:
              "Epoch rewards are distributed based on the builders' share of the paid base fee.",
          });
        let h = s.length >= 6;
        return (0, l.jsxs)(d.u, {
          delayDuration: 0,
          open: a,
          onOpenChange: u,
          children: [
            (0, l.jsx)(d.aJ, {
              children: (0, l.jsx)("div", {
                onClick: (e) => {
                  e.preventDefault(), u(!0);
                },
                children: (0, l.jsx)(i.s, {}),
              }),
            }),
            (0, l.jsx)(d._v, {
              side: "top",
              sideOffset: 10,
              align: "center",
              className: "z-[1]",
              children: (0, l.jsxs)("div", {
                className: (0, n.cn)(
                  "outline outline-1 outline-[#B084E9] rounded-md w-[332px] lg:w-[397px] p-4 bg-[#170B29] text-xs lg:text-[13px] z-20",
                  h && "pb-0"
                ),
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "break-words text-white/50 text-[13px] leading-[15.6px]",
                    children:
                      "Epoch rewards are distributed based on the builders' share of the paid base fee.",
                  }),
                  (0, l.jsx)(r.Z, { className: "my-2 lg:my-3" }),
                  (0, l.jsxs)("div", {
                    className: "flex gap-2 lg:gap-3 text-primary",
                    children: [
                      (0, l.jsx)("div", {
                        className: "w-[90px]",
                        children: "Builder",
                      }),
                      (0, l.jsx)("div", {
                        className: "w-[70px]",
                        children: "Base fee%",
                      }),
                      (0, l.jsx)("div", {
                        className: "flex-1 text-right",
                        children: "Curr. rewards share",
                      }),
                    ],
                  }),
                  (0, l.jsx)(r.Z, { className: "mt-2 lg:mt-3" }),
                  (0, l.jsx)("div", {
                    className: (0, n.cn)(
                      h &&
                        "max-h-[160px] overflow-y-auto custom-scrollbar mr-[-8px]"
                    ),
                    children: s.map((e, t) => {
                      let a = t === s.length - 1;
                      return (0, l.jsxs)(
                        "div",
                        {
                          className: (0, n.cn)(
                            "flex my-2 lg:my-3 h-[16px] gap-2 lg:gap-3 text-primary",
                            h
                              ? (0, n.cn)("pr-2", a && "mb-4 lg:mb-4")
                              : a && "mb-0 lg:mb-0"
                          ),
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "w-[90px] text-ellipsis overflow-hidden break-all line-clamp-1",
                              children: e.broker_name,
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "w-[70px] flex gap-1 justify-start numberFont",
                              children:
                                (0, n.uf)(
                                  new (p())(
                                    (null == e ? void 0 : e.pct_allocation) || 0
                                  )
                                    .mul(100)
                                    .toString(),
                                  { decimal: 2 }
                                ) + "%",
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "flex-1 flex gap-1 justify-end numberFont",
                              children: [
                                (0, l.jsx)("div", {
                                  children: (0, n.uf)(
                                    null == e ? void 0 : e.rewards_allocation,
                                    { decimal: 2, removeEndZero: !1 }
                                  ),
                                }),
                                (0, l.jsx)("div", {
                                  className: "text-white/50",
                                  children: e.epoch_token,
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  0 ===
                    ((null === (t = e.data) || void 0 === t
                      ? void 0
                      : t.length) || 0) && (0, l.jsx)(o.B, {}),
                ],
              }),
            }),
          ],
        });
      };
      var v = s(33523),
        j = s(31960),
        g = s(72798);
      let w = () => {
          let [e, t] = (0, c.useState)(void 0),
            { address: s, brokers: l } = (0, g.useAppContext)();
          return (
            (0, c.useEffect)(() => {
              if (void 0 === s) {
                t(void 0);
                return;
              }
              (0, j.M1)(s).then((e) => {
                var s;
                t(
                  null == e
                    ? void 0
                    : null === (s = e.rows) || void 0 === s
                    ? void 0
                    : s.map(
                        (e) => (
                          (e.broker = e.broker.map((e) => ({
                            ...e,
                            broker_name: null == e ? void 0 : e.broker_id,
                          }))),
                          { epoch_id: e.epoch_id, broker: e.broker }
                        )
                      )
                );
              });
            }, [s]),
            {
              data: (0, c.useMemo)(() => {
                if (e) {
                  let t = [...e];
                  return (
                    t.forEach((e) => {
                      let t = e.broker;
                      for (let e = 0; e < t.length; e++) {
                        let s = l[t[e].broker_id];
                        t[e].broker_name = s || t[e].broker_name;
                      }
                    }),
                    t
                  );
                }
                return e;
              }, [e, l]),
            }
          );
        },
        C = () => {
          let [e, t] = (0, c.useState)(void 0),
            { brokers: s } = (0, g.useAppContext)();
          return (
            (0, c.useEffect)(() => {
              (0, j.LZ)().then((e) => {
                let { rows: s } = e;
                t(
                  null == s
                    ? void 0
                    : s.map((e) => ({
                        ...e,
                        rewards:
                          null == e
                            ? void 0
                            : e.rewards.map((e) => ({
                                ...e,
                                broker_name: e.broker_id,
                              })),
                      }))
                );
              });
            }, []),
            {
              data: (0, c.useMemo)(
                () =>
                  e
                    ? [...e].map((e) => ({
                        ...e,
                        rewards:
                          null == e
                            ? void 0
                            : e.rewards.map((e) => ({
                                ...e,
                                broker_name: s[e.broker_id] || e.broker_id,
                              })),
                      }))
                    : e,
                [e, s]
              ),
            }
          );
        };
      var b = s(53600),
        N = s(6288);
      let _ = () =>
          (0, l.jsxs)("svg", {
            width: "60",
            height: "60",
            viewBox: "0 0 60 60",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, l.jsxs)("g", {
                clipPath: "url(#clip0_787_1067)",
                children: [
                  (0, l.jsx)("path", {
                    d: "M12.5 20H47.5V25H12.5V20ZM60 56.5L55.5 52C56.75 50 57.5 47.5 57.5 45C57.5 38 52 32.5 45 32.5C38 32.5 32.5 38 32.5 45C32.5 52 38 57.5 45 57.5C47.5 57.5 50 56.75 52 55.5L56.5 60L60 56.5ZM45 52.5C40.75 52.5 37.5 49.25 37.5 45C37.5 40.75 40.75 37.5 45 37.5C49.25 37.5 52.5 40.75 52.5 45C52.5 49.25 49.25 52.5 45 52.5Z",
                    fill: "#906BC1",
                  }),
                  (0, l.jsx)("path", {
                    d: "M28.235 50H15V40H28.235C28.7725 38.1925 29.595 36.51 30.65 35H15V10H45V27.5C46.7375 27.5 48.415 27.7625 50 28.235V10C50 7.2375 47.7625 5 45 5H15C12.2375 5 10 7.2375 10 10V50C10 52.7625 12.2375 55 15 55H30.65C29.595 53.49 28.7725 51.8075 28.235 50Z",
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
                  id: "clip0_787_1067",
                  children: (0, l.jsx)("rect", {
                    width: "60",
                    height: "60",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
        y = (e) =>
          (0, l.jsxs)("div", {
            className: (0, n.cn)(
              "flex flex-col gap-3 items-center justify-center",
              e.className
            ),
            children: [
              (0, l.jsx)(_, {}),
              (0, l.jsx)("div", {
                className: "text-white/[.54]",
                children: "No data",
              }),
            ],
          });
      var k = s(34082);
      let E = () => {
          let {
              type: e,
              totalOrderClaimedReward: t,
              totalEsOrderClaimedReward: s,
              epochList: a,
            } = (0, b.YT)(),
            { data: i } = (0, v.Y)(e),
            { data: n, isUnstart: d } = a,
            { data: o } = w(),
            { data: x } = C(),
            { walletAdapter: m, isNotSupportChain: u } = (0,
            k.useWalletAdapterContext)(),
            h = null == m ? void 0 : m.namespace,
            f = (0, c.useMemo)(() => {
              if (d) return [];
              let e = [...(n || [])].map((e) => {
                let t = e.epoch_id,
                  s =
                    null == i
                      ? void 0
                      : i.rows.findIndex((e) => t === e.epoch_id);
                if (-1 !== s) {
                  var l;
                  return {
                    ...e,
                    info:
                      null == i
                        ? void 0
                        : null === (l = i.rows) || void 0 === l
                        ? void 0
                        : l[s],
                  };
                }
                return { ...e };
              });
              e.sort((e, t) => e.epoch_id - t.epoch_id);
              let { data: l } = t,
                { data: a } = s;
              if (void 0 !== l && void 0 !== a) {
                let t = new (p())(a).toDecimalPlaces(8, p().ROUND_DOWN),
                  s = new (p())(l).toDecimalPlaces(8, p().ROUND_DOWN),
                  i = new (p())(0);
                for (let l = 0; l < e.length; l++) {
                  var r, c, o;
                  let a = e[l];
                  if (void 0 === (null == a ? void 0 : a.info)) {
                    a.state = "";
                    continue;
                  }
                  let n =
                      null === (r = a.info) || void 0 === r
                        ? void 0
                        : r.reward_status,
                    d = new (p())(
                      null !==
                        (o =
                          null == a
                            ? void 0
                            : null === (c = a.info) || void 0 === c
                            ? void 0
                            : c.r_wallet) && void 0 !== o
                        ? o
                        : 0
                    ).toDecimalPlaces(8, p().ROUND_DOWN),
                    x = "DRAI" === a.info.epoch_token ? s : t;
                  "Confirmed" === n
                    ? (x.sub(d) >= i
                        ? (a.state = "Claimed")
                        : (a.state = "Claimable"),
                      "DRAI" === a.info.epoch_token
                        ? (s = s.sub(d))
                        : (t = t.sub(d)))
                    : "Pending" === n && (a.state = "Processing"),
                    "SOL" === h && (a.state = "Confirmed");
                }
              }
              e.sort((e, t) => t.epoch_id - e.epoch_id);
              let x = Date.now();
              return e.filter((e) => e.end_time <= x);
            }, [i, n, t, d, h]),
            j = (0, c.useCallback)(
              (e) => {
                let t =
                  null == x ? void 0 : x.findIndex((t) => t.epoch_id === e);
                if (void 0 !== x && void 0 !== t && -1 !== t)
                  return x[t].rewards;
              },
              [x]
            ),
            g = (0, c.useCallback)(
              (e) => {
                let t =
                  null == o ? void 0 : o.findIndex((t) => t.epoch_id === e);
                return void 0 !== o && void 0 !== t && -1 !== t
                  ? o[t].broker
                  : [];
              },
              [o]
            );
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-[28px] mb-[60px] max-h-[712px]",
            children: [
              (0, l.jsx)("div", {
                className: "text-[20px] md:text-[28px]",
                children: "Reward History",
              }),
              (0, l.jsx)("div", {
                className:
                  "overflow-hidden overflow-x-auto overflow-y-auto hide-scrollbar rounded-[20px] border border-[rgba(255,255,255,0.12)]",
                children: (0, l.jsx)("div", {
                  className: "h-[calc(100%-72px)] min-w-[900px]",
                  children: (0, l.jsxs)("div", {
                    className: "bg-[#170B29] text-sm ",
                    children: [
                      (0, l.jsx)("div", {
                        className: "px-8",
                        children: (0, l.jsx)(O, {}),
                      }),
                      (0, l.jsx)(r.Z, {}),
                      (0, l.jsx)("div", {
                        className: "px-8",
                        children:
                          null == f
                            ? void 0
                            : f.map((t, s) =>
                                (0, l.jsx)(
                                  R,
                                  {
                                    data: t,
                                    type: e,
                                    rewardsTooltipData: j,
                                    rewardsEarnedTooltipData: g,
                                  },
                                  t.epoch_id
                                )
                              ),
                      }),
                      0 === ((null == f ? void 0 : f.length) || 0) &&
                        (0, l.jsx)(y, { className: "h-[300px]" }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        O = () =>
          (0, l.jsxs)("div", {
            className:
              "text-sm flex py-5 items-center h-[64px] justify-between gap-5 sticky top-0 bg-[#170B29] text-white/50",
            children: [
              (0, l.jsx)("div", { className: "w-[100px]", children: "Epoch" }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: "Start / End date",
              }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: "Epoch rewards",
              }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: "Rewards earned",
              }),
              (0, l.jsx)("div", { className: "flex-1", children: "Status" }),
            ],
          }),
        R = (e) => {
          var t, s;
          let {
            data: r,
            type: i,
            rewardsTooltipData: d,
            rewardsEarnedTooltipData: c,
          } = e;
          return (0, l.jsxs)("div", {
            className:
              "text-sm flex py-5 items-center h-[86px] justify-between gap-5 text-white/80 tabular-nums",
            children: [
              (0, l.jsx)("div", {
                className: "w-[100px]",
                children: "Epoch ".concat(r.epoch_id),
              }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: (() => {
                  var e, t, s, a;
                  let i = S(r.start_time),
                    n = S(r.end_time);
                  return (0, l.jsxs)(
                    "div",
                    {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, l.jsx)("div", {
                              children:
                                null === (e = i.split("_")) || void 0 === e
                                  ? void 0
                                  : e[0],
                            }),
                            (0, l.jsx)("div", {
                              className: "text-white/50",
                              children:
                                null === (t = i.split("_")) || void 0 === t
                                  ? void 0
                                  : t[1],
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, l.jsx)("div", {
                              children:
                                null === (s = n.split("_")) || void 0 === s
                                  ? void 0
                                  : s[0],
                            }),
                            (0, l.jsx)("div", {
                              className: "text-white/50",
                              children:
                                null === (a = n.split("_")) || void 0 === a
                                  ? void 0
                                  : a[1],
                            }),
                          ],
                        }),
                      ],
                    },
                    r.epoch_id
                  );
                })(),
              }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: (0, l.jsxs)("div", {
                  className: "flex items-center gap-1 numberFont",
                  children: [
                    "order" === "".concat(r.epoch_token).toLowerCase()
                      ? (0, l.jsx)(a.x, {})
                      : (0, l.jsx)(N.K, {}),
                    (0, l.jsx)("div", {
                      children: (0, n.uf)(r.max_reward_amount, { decimal: 0 }),
                    }),
                    "normal" === i && (0, l.jsx)(f, { data: d(r.epoch_id) }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "flex-1",
                children: (0, l.jsxs)("div", {
                  className: "flex items-center gap-1 numberFont",
                  children: [
                    "order" ===
                    ""
                      .concat(
                        (null == r
                          ? void 0
                          : null === (t = r.info) || void 0 === t
                          ? void 0
                          : t.epoch_token) || r.epoch_token
                      )
                      .toLowerCase()
                      ? (0, l.jsx)(a.x, {})
                      : (0, l.jsx)(N.K, {}),
                    (0, l.jsx)("div", {
                      children: (0, n.uf)(
                        null === (s = r.info) || void 0 === s
                          ? void 0
                          : s.r_wallet,
                        { floor: !0 }
                      ),
                    }),
                    "normal" === i && (0, l.jsx)(u, { data: c(r.epoch_id) }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: (0, n.cn)(
                  "flex-1",
                  (() => {
                    switch (r.state || "") {
                      case "Claimed":
                        return "text-white/20";
                      case "Processing":
                        return "text-white/50";
                      case "Claimable":
                        return "text-[#7EF2A5]";
                    }
                  })()
                ),
                children: (0, l.jsx)("div", {
                  className: "flex",
                  children: r.state,
                }),
              }),
            ],
          });
        };
      function S(e) {
        if (void 0 === e) return "-";
        let t = new Date(e),
          s = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ][t.getUTCMonth()],
          l = t.getUTCDate().toString().padStart(2, "0"),
          a = t.getUTCFullYear(),
          r = t.getUTCHours(),
          i = t.getUTCMinutes(),
          n = (r % 12).toString().padStart(2, "0"),
          d = i.toString().padStart(2, "0");
        return ""
          .concat(s, " ")
          .concat(l, ", ")
          .concat(a, "_")
          .concat(n, ":")
          .concat(d, " ")
          .concat(r >= 12 ? "PM" : "AM");
      }
    },
    36866: function (e, t, s) {
      s.d(t, {
        a: function () {
          return ew;
        },
      });
      var l,
        a,
        r,
        i,
        n,
        d,
        c = s(6272),
        o = s(3404),
        x = s(8627),
        m = s(38820),
        u = s(6288),
        h = s(74939),
        p = s(59580),
        f = s(79807),
        v = s(19863),
        j = s(9064),
        g = s(72798),
        w = s(56060),
        C = s(32288),
        b = s(6468),
        N = s.n(b),
        _ = s(60866),
        y = s(45182);
      let k = () => {
        let { call: e, sendTransaction: t } = (0, w.h)();
        return {
          claimReward: (0, x.useCallback)(
            (e, s, l, a, r, i) => {
              let n = (0, C.Js)(),
                d = new (N())(i.toString()).mul(_.Ab).toFixed(0);
              return t(
                n.contract,
                "claimReward",
                {
                  from: r,
                  to: n.contract,
                  data: [e, (0, y.Hv)(s), l.neighbour_hash_hierarchy],
                  value: BigInt(d),
                },
                { abi: n.contractABI }
              );
            },
            [e]
          ),
          qouteClaimReward: (0, x.useCallback)(
            (t, s, l, a, r) => {
              let i = (0, C.Js)();
              return e(
                i.contract,
                "quoteClaimReward",
                [t, s, (0, y.Hv)(l), a.neighbour_hash_hierarchy],
                { abi: i.contractABI }
              );
            },
            [e]
          ),
        };
      };
      var E = s(62524),
        O = s(31960),
        R = s(53600),
        S = s(39250);
      ((l = i || (i = {})).NONE = "NONE"),
        (l.INFLIGHT = "INFLIGHT"),
        (l.DELIVERED = "DELIVERED"),
        (l.FAILED = "FAILED");
      let D = (e) => {
        let [t, s] = (0, x.useState)("NONE");
        return (
          (0, x.useEffect)(() => {
            if ((s("NONE"), void 0 === e)) return;
            let t = (0, p.H0)() ? 1 : 10001;
            (0, S.bO)(t, e.hash).then((e) => {
              s(e.status);
            });
          }, [e]),
          t
        );
      };
      var M = s(4531);
      ((a = n || (n = {}))[(a.waitSign = 0)] = "waitSign"),
        (a[(a.checkBlockState = 1)] = "checkBlockState"),
        (a[(a.claimedSuccessfully = 2)] = "claimedSuccessfully"),
        (a[(a.claimedFailed = 3)] = "claimedFailed"),
        ((r = d || (d = {}))[(r.none = 0)] = "none"),
        (r[(r.confirm = 1)] = "confirm"),
        (r[(r.claim = 2)] = "claim");
      let F = (e) => {
          let [t, s] = (0, x.useState)(!1),
            [l, a] = (0, x.useState)(!1),
            { address: r } = (0, g.useAppContext)(),
            { totalOrderClaimedReward: n, epochList: d, type: c } = (0, R.YT)(),
            [o, u] = (0, x.useState)(!1),
            [h, p] = (0, x.useState)(0),
            { claimReward: f, qouteClaimReward: v } = k(),
            [j, w] = (0, x.useState)(void 0),
            C = D(j);
          (0, x.useEffect)(() => {
            C === i.DELIVERED
              ? (p(2),
                (0, m.LE)(() => {
                  n.refresh(), d.refresh();
                }),
                u(!0))
              : C === i.FAILED && (p(3), N(1));
          }, [C]);
          let b = (0, x.useCallback)((e) => {
              switch (e) {
                case 1:
                  s(!1);
                  break;
                case 2:
                  a(!1);
              }
            }, []),
            N = (0, x.useCallback)((e) => {
              M.A.error("Something went wrong. Please try again later."), b(e);
            }, []),
            _ = (0, x.useCallback)((e) => {
              M.A.error("User rejected signature in wallet."), b(e);
            }, []),
            y = (0, x.useRef)(!1),
            S = (0, x.useCallback)(async () => {
              if (void 0 !== r && !y.current)
                try {
                  y.current = !0;
                  let t = c === R.Es.normal ? O.He : O.OB,
                    { cumulative_amount: s, merkle_proof: l } = await t(
                      r,
                      [E.f.esORder, E.f.dmmEsOrder].includes(e)
                        ? "esDRAI"
                        : "DRAI"
                    );
                  if (
                    void 0 === s ||
                    void 0 === l ||
                    null === s ||
                    null === l
                  ) {
                    N(1), console.log("get claim input failed");
                    return;
                  }
                  await F(r, s, l);
                } catch (e) {
                  console.log("call wallet sign error", e);
                } finally {
                  y.current = !1;
                }
            }, [r, e, y.current, c]),
            F = async (t, s, l) => {
              console.log("call qoute claim reward"),
                await v(e, t, s, l, !1)
                  .then(
                    async (e) => {
                      if ((console.log("call qoute claim success", e), e))
                        return await B(t, s, l, e);
                      N(1);
                    },
                    (e) => {
                      console.log("call qoute claim reject", e), N(1);
                    }
                  )
                  .catch((e) => {
                    console.log("call qoute claim error", e), N(1);
                  });
            },
            B = async (t, l, r, i) => {
              console.log("call claim reward"),
                await f(e, l, r, !1, t, i)
                  .then(
                    (e) => {
                      console.log("call claim reward success", e),
                        e ? (p(1), s(!1), a(!0), w(e)) : N(1);
                    },
                    (e) => {
                      console.log("call claim reward reject", e),
                        "object" == typeof e && "errorCode" in e
                          ? "REJECTED_TRANSACTION" === e.errorCode
                            ? _(1)
                            : "Gas_Insufficient" === e.errorCode &&
                              (M.A.error(
                                "Transaction failed due to insufficient gas."
                              ),
                              b(1))
                          : N(1);
                    }
                  )
                  .catch((e) => {
                    console.log("call claim reward error", e), N(1);
                  });
            };
          return {
            openConfirm: t,
            setOpenConfirm: s,
            openClaim: l,
            setOpenClaim: a,
            claimState: h,
            callWalletSign: S,
            transactionResponse: j,
          };
        },
        B = () => {
          let e = "w-[4px] h-[4px] rounded-full";
          return (0, c.jsxs)("div", {
            className: "flex items-center gap-x-[3px]",
            children: [
              (0, c.jsx)("div", {
                className: (0, m.cn)(e, "dialog-loading-circle-1"),
              }),
              (0, c.jsx)("div", {
                className: (0, m.cn)(e, "dialog-loading-circle-2"),
              }),
              (0, c.jsx)("div", {
                className: (0, m.cn)(e, "dialog-loading-circle-3"),
              }),
            ],
          });
        },
        A = () =>
          (0, c.jsxs)("div", {
            className:
              "flex flex-col gap-[10px] items-center justify-center mt-[10px] leading-none",
            children: [
              (0, c.jsx)("div", {
                className: "text-white/80 text-base  font-['Articulat CF']",
                children: "Confirm Claiming",
              }),
              (0, c.jsx)("div", {
                className: "text-white/50 text-xs",
                children: "Please sign in your wallet",
              }),
              (0, c.jsx)("div", {
                className: "h-[24px] flex items-center",
                children: (0, c.jsx)(B, {}),
              }),
            ],
          }),
        H = (e) => {
          let { transactionRes: t } = e;
          return (0, c.jsxs)("div", {
            className:
              "flex flex-col gap-[10px] items-center justify-center mt-[10px] leading-none",
            children: [
              (0, c.jsx)("div", {
                className: "text-white/80 text-base  font-['Articulat CF']",
                children: "Wait for confirmation",
              }),
              (0, c.jsxs)("button", {
                className:
                  "flex text-sm text-[#B084E9] fill-[#B084E9] cursor-pointer",
                onClick: () => {
                  if (
                    (console.log("xxxxview transaction", e.transactionRes), t)
                  ) {
                    let e = "https://"
                      .concat(
                        (0, p.H0)() ? "" : "testnet.",
                        "layerzeroscan.com/tx/"
                      )
                      .concat(t.hash);
                    window.open(e, "_blank");
                  }
                },
                disabled: !1,
                children: [
                  (0, c.jsx)("div", { children: "View transaction" }),
                  (0, c.jsx)(f.Z, {}),
                ],
              }),
              (0, c.jsx)("div", {
                className: "h-[24px] flex items-center",
                children: (0, c.jsx)(B, {}),
              }),
            ],
          });
        },
        L = (e) => {
          let { transactionRes: t } = e;
          return (0, c.jsxs)("div", {
            className:
              "flex flex-col gap-[10px] items-center justify-center mt-[10px] leading-none",
            children: [
              (0, c.jsx)("div", {
                className: "text-white/80 text-base  font-['Articulat CF']",
                children: e.isEsorder
                  ? "Staked successfully"
                  : "Claimed successfully",
              }),
              e.isEsorder
                ? (0, c.jsxs)("div", {
                    className:
                      "flex items-center justify-center text-xs mt-3 text-[#B084E9] cursor-pointer",
                    onClick: () => {
                      window.open(
                        "/staking",
                        "_blank"
                      ),
                        e.setOpen(!1);
                    },
                    children: [
                      (0, c.jsx)("div", { children: "Go to staking" }),
                      (0, c.jsx)(f.Z, { size: 16 }),
                    ],
                  })
                : (0, c.jsxs)(v.z, {
                    variant: "outline",
                    className: "flex items-center justify-center text-xs mt-3",
                    onClick: () => {
                      window.open(
                        "/staking",
                        "_blank"
                      ),
                        e.setOpen(!1);
                    },
                    children: [
                      (0, c.jsx)("div", { children: "Stake DRAI" }),
                      (0, c.jsx)(j.Z, {}),
                    ],
                  }),
            ],
          });
        };
      var Z = (e) => {
          let {
              claimState: t,
              open: s,
              setOpen: l,
              transactionResponse: a,
            } = e,
            r = (0, x.useMemo)(() => {
              switch (t) {
                case n.waitSign:
                  return (0, c.jsx)(A, {});
                case n.checkBlockState:
                  return (0, c.jsx)(H, { transactionRes: a });
                case n.claimedSuccessfully:
                  var s;
                  return (0, c.jsx)(L, {
                    setOpen: l,
                    isEsorder: null !== (s = e.isEsorder) && void 0 !== s && s,
                  });
                case n.claimedFailed:
                  return (0, c.jsx)(c.Fragment, {});
              }
            }, [t, a]);
          return (0, c.jsx)(h.QH, {
            open: s,
            okText: "OK",
            onOpenChange: l,
            contentClassName:
              "w-[260px] md:w-[320px] border border-white/[.08]",
            closable: t === n.claimedSuccessfully,
            children: (0, c.jsxs)("div", {
              className: "flex flex-col items-center mt-[20px]",
              children: [
                (0, c.jsx)("img", {
                  className: (0, m.cn)("w-[120px] h-[120px]"),
                  src: "/orderly-logo.png",
                }),
                r,
              ],
            }),
          });
        },
        T = s(30908),
        I = s(42020);
      let U = (e) => {
        let {
          open: t,
          setOpen: s,
          onConfirm: l,
          availableOrder: a,
          distributionId: r,
        } = e;
        return (0, c.jsx)(T.Q, {
          open: t,
          onOk: async () => {
            void 0 !== a && 0 !== a && (await l());
          },
          okText: "Claim",
          onOpenChange: s,
          title: "Confirm claiming",
          contentClassName: "w-[300px] md:w-[440px] border-none outline-none",
          okButtonProps: { disabled: void 0 === a || 0 === a },
          children: (0, c.jsxs)("div", {
            className: "text-white/50 text-xs md:text-sm",
            children: [
              (0, c.jsxs)("div", {
                className: "flex justify-between",
                children: [
                  (0, c.jsx)("div", { children: "Claiming" }),
                  (0, c.jsxs)("div", {
                    className: "flex gap-1 numberFont",
                    children: [
                      (0, c.jsx)("div", {
                        className: "text-primary",
                        children: (0, m.uf)(e.availableOrder, { decimal: 8 }),
                      }),
                      (0, c.jsx)("div", {
                        children:
                          r === E.f.esORder || r === E.f.dmmEsOrder
                            ? "esDRAI"
                            : "DRAI",
                      }),
                    ],
                  }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: "flex justify-between mt-4",
                children: [
                  (0, c.jsx)("div", { children: "Claim network" }),
                  (0, c.jsx)("div", {
                    className: "flex gap-1",
                    children: (0, c.jsx)(I.Z, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var P = s(34082),
        V = s(98035);
      let J = (e) => {
        let {
            openConfirm: t,
            setOpenConfirm: s,
            openClaim: l,
            setOpenClaim: a,
            claimState: r,
            callWalletSign: i,
            transactionResponse: n,
          } = F(e.distributionId),
          { walletAdapter: d } = (0, P.useWalletAdapterContext)(),
          o = null == d ? void 0 : d.namespace;
        return (0, c.jsxs)("div", {
          children: [
            "SOL" === o
              ? (0, c.jsx)(c.Fragment, {
                  children: (0, c.jsx)(V.default, {
                    content:
                      "Trading rewards on Solana will be available for claiming at the end of 2024.",
                    children: (0, c.jsxs)("div", {
                      className: "relative cursor-not-allowed",
                      children: [
                        (0, c.jsx)(v.z, {
                          className: "px-6 text-sm",
                          variant: "outline",
                          rounded: !0,
                          disabled: !0,
                          children: "Claim",
                        }),
                        (0, c.jsx)("div", {
                          className: "absolute top-0 left-0 right-0 bottom-0",
                        }),
                      ],
                    }),
                  }),
                })
              : (0, c.jsx)(v.z, {
                  className: "px-6 text-sm",
                  variant: "outline",
                  rounded: !0,
                  disabled:
                    void 0 === e.availableOrder || e.availableOrder <= 0,
                  onClick: () => {
                    s(!0);
                  },
                  children: "Claim",
                }),
            (0, c.jsx)(U, {
              open: t,
              setOpen: s,
              distributionId: e.distributionId,
              onConfirm: async () => {
                await i();
              },
              availableOrder: e.availableOrder,
            }),
            (0, c.jsx)(Z, {
              open: l,
              setOpen: a,
              claimState: r,
              transactionResponse: n,
            }),
          ],
        });
      };
      var z = s(34877);
      function W(e) {
        let {
            open: t,
            setOpen: s,
            availableOrder: l,
            distributionId: a,
            onSuccess: r,
          } = e,
          [i, n] = (0, x.useState)(!1),
          { claimReward: d, qouteClaimReward: o } = k(),
          { address: u } = (0, g.useAppContext)(),
          { totalOrderClaimedReward: p, epochList: f, type: j } = (0, R.YT)(),
          w = async () => {
            if (!u) return;
            n(!0);
            let e = j === R.Es.normal ? O.He : O.OB,
              { cumulative_amount: t, merkle_proof: s } = await e(
                u,
                [E.f.esORder, E.f.dmmEsOrder].includes(a) ? "esDRAI" : "DRAI"
              );
            if (void 0 === t || void 0 === s || null === t || null === s) {
              n(!1),
                M.A.error("Something went wrong. Please try again later."),
                console.log("get claim input failed");
              return;
            }
            try {
              let e = await o(a, u, t, s, !0);
              if ((console.log("-- fee", e), !e)) {
                n(!1),
                  M.A.error("Something went wrong. Please try again later.");
                return;
              }
              let l = await d(a, t, s, !0, u, e);
              console.log("-- claim esorder res", l), r && r(l);
            } catch (e) {
              (0, z.Z)(e);
            } finally {
              n(!1);
            }
          };
        return (0, c.jsx)(h.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, c.jsxs)(h.cZ, {
            className: "",
            children: [
              (0, c.jsx)(h.fK, {
                children: (0, c.jsx)(h.$N, { children: "Claim esDRAI" }),
              }),
              (0, c.jsxs)(h.a7, {
                children: [
                  (0, c.jsxs)("div", {
                    className:
                      "rounded-lg flex-col justify-center items-start gap-4 flex",
                    children: [
                      (0, c.jsxs)("div", {
                        className:
                          "self-stretch justify-start items-center gap-0.5 inline-flex",
                        children: [
                          (0, c.jsx)("div", {
                            className:
                              "grow shrink basis-0 text-white/50 text-base font-medium font-['Articulat CF'] leading-tight",
                            children: "Claiming",
                          }),
                          (0, c.jsx)("div", {
                            className:
                              "text-white text-base font-medium font-['Manrope'] leading-tight",
                            children: (0, m.uf)(l, { decimal: 2 }),
                          }),
                          (0, c.jsx)("div", {
                            className:
                              "text-white/50 text-base font-medium font-['Manrope'] leading-tight",
                            children: "esDRAI",
                          }),
                        ],
                      }),
                      (0, c.jsxs)("div", {
                        className: "text-sm text-primary-50 leading-[21px]",
                        children: [
                          "esDRAI is the escrowed version of DRAI and is non-transferable. Once it’s claimed, it will be automatically staked for the same benefits as staking DRAI. ",
                          (0, c.jsx)("span", {
                            onClick: () =>
                              window.open(
                                "https://orderly.network/docs/introduction/tokenomics/esorder "
                              ),
                            className: "cursor-pointer text-[#B084E9]",
                            children: "Learn more",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className:
                      "w-full justify-start items-start gap-4 flex flex-col mt-4",
                    children: (0, c.jsx)(v.z, {
                      variant: "secondary",
                      className: "w-full",
                      onClick: w,
                      loading: i,
                      disabled: i,
                      children: "Claim and stake",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Y(e) {
        let { totalEsOrderClaimedReward: t, epochList: s } = (0, R.YT)(),
          [l, a] = x.useState(!1),
          [r, d] = x.useState(!1),
          [o, u] = (0, x.useState)(),
          [h, p] = (0, x.useState)(n.waitSign),
          { walletAdapter: f } = (0, P.useWalletAdapterContext)(),
          j = null == f ? void 0 : f.namespace,
          g = D(o);
        return (
          (0, x.useEffect)(() => {
            g === i.DELIVERED
              ? (p(n.claimedSuccessfully),
                (0, m.LE)(() => {
                  t.refresh(), s.refresh();
                }))
              : g === i.FAILED && p(n.claimedFailed);
          }, [g]),
          (0, c.jsxs)(c.Fragment, {
            children: [
              "SOL" === j
                ? (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsx)(V.default, {
                      content:
                        "Trading rewards on Solana will be available for claiming at the end of 2024.",
                      children: (0, c.jsxs)("div", {
                        className: "relative cursor-not-allowed",
                        children: [
                          (0, c.jsx)(v.z, {
                            className: "px-6 text-sm",
                            variant: "outline",
                            rounded: !0,
                            disabled: !0,
                            children: "Claim",
                          }),
                          (0, c.jsx)("div", {
                            className: "absolute top-0 left-0 right-0 bottom-0",
                          }),
                        ],
                      }),
                    }),
                  })
                : (0, c.jsx)(v.z, {
                    className: "px-6 text-sm",
                    variant: "outline",
                    rounded: !0,
                    disabled:
                      void 0 === e.availableOrder || e.availableOrder <= 0,
                    onClick: () => a(!0),
                    children: "Claim",
                  }),
              (0, c.jsx)(W, {
                open: l,
                setOpen: a,
                distributionId: e.distributionId,
                availableOrder: e.availableOrder,
                onSuccess: (e) => {
                  a(!1), u(e), d(!0), p(n.checkBlockState);
                },
              }),
              (0, c.jsx)(Z, {
                open: r,
                setOpen: d,
                transactionResponse: o,
                claimState: h,
                isEsorder: !0,
              }),
            ],
          })
        );
      }
      let q = (e) => {
        var t, s;
        let {
            type: l,
            totalOrderClaimedReward: a,
            totalEsOrderClaimedReward: r,
          } = (0, R.YT)(),
          { data: i } = a,
          { data: n } = r,
          d =
            null === (t = e.data) || void 0 === t
              ? void 0
              : t.wallet_lifetime_trading_rewards_order,
          h =
            null === (s = e.data) || void 0 === s
              ? void 0
              : s.wallet_lifetime_trading_rewards_escrow,
          p = (0, x.useCallback)((e, t) => {
            if (void 0 !== t && void 0 !== e)
              return Number(new (N())(e).sub(t).toFixed(18, N().ROUND_DOWN));
          }, []),
          f = (0, x.useMemo)(() => p(d, i), [d, i, p]),
          v = (0, x.useMemo)(() => p(h, n), [h, n, p]);
        return (
          console.log(
            "lifetimeOrderReward",
            d,
            "orderClaimedRewardData",
            i,
            "availableOrder",
            f,
            "lifetimeEsOrderReward",
            h,
            "esOrderClaimedRewardData",
            n,
            "availableEsOrder",
            v
          ),
          (0, c.jsxs)("div", {
            className:
              "rounded-[20px] border border-[rgba(255,255,255,0.06)] flex-1 p-7 bg-[#170B29]",
            children: [
              (0, c.jsx)("div", {
                className: "text-base font-[Articulat_CF]",
                children: "Available to claim",
              }),
              (0, c.jsxs)("div", {
                className:
                  "bg-[rgba(255,255,255,0.03)] rounded-xl p-5 mt-5 flex flex-col md:flex-row md:items-center md:h-[85px]",
                children: [
                  (0, c.jsxs)("div", {
                    className: "flex-1 flex items-center justify-between",
                    children: [
                      (0, c.jsxs)("div", {
                        className: "flex flex-col gap-1 md:gap-2 lg:gap-1",
                        children: [
                          (0, c.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, c.jsx)(o.x, {}),
                              (0, c.jsx)("div", {
                                className:
                                  "text-[13px] md:text-base numberFont",
                                children: (0, m.uf)(f, { decimal: 2 }),
                              }),
                            ],
                          }),
                          (0, c.jsx)("div", {
                            className: "text-white/50 text-xs md:text-sm",
                            children: "DRAI",
                          }),
                        ],
                      }),
                      (0, c.jsx)(J, {
                        availableOrder: f,
                        distributionId:
                          l === R.Es.mm ? E.f.dmmOrder : E.f.order,
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className:
                      "w-full h-[1px] my-5 md:w-[1px] md:h-[49px] md:mx-5 bg-primary-8",
                  }),
                  (0, c.jsxs)("div", {
                    className: "flex-1 flex items-center justify-between",
                    children: [
                      (0, c.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, c.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [
                              (0, c.jsx)(u.K, {}),
                              (0, c.jsx)("div", {
                                className:
                                  "text-[13px] md:text-base numberFont",
                                children: (0, m.uf)(v, { decimal: 2 }),
                              }),
                            ],
                          }),
                          (0, c.jsx)("div", {
                            className: "text-white/50 text-xs md:text-sm",
                            children: "esDRAI",
                          }),
                        ],
                      }),
                      (0, c.jsx)(Y, {
                        distributionId:
                          l === R.Es.mm ? E.f.dmmEsOrder : E.f.esORder,
                        availableOrder: v,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var G = s(25090),
        K = s(23087),
        $ = s(33523);
      let Q = (e) => {
        let [t, s] = (0, x.useState)(void 0),
          { brokers: l } = (0, g.useAppContext)(),
          { walletAdapter: a, isNotSupportChain: r } = (0,
          P.useWalletAdapterContext)(),
          i = null == a ? void 0 : a.userAddress;
        return (
          (0, x.useEffect)(() => {
            if (void 0 === i || r) {
              s(void 0);
              return;
            }
            return (
              (e === R.Es.normal ? O.ql : O.ck)(i).then((e) => {
                var t;
                s({
                  ...e,
                  rows:
                    (null === (t = e.rows) || void 0 === t
                      ? void 0
                      : t.map((e) => ({ ...e, broker_name: e.broker_id }))) ||
                    [],
                  est_trading_volume:
                    (null == e ? void 0 : e.est_maker_volume) ||
                    (null == e ? void 0 : e.est_trading_volume),
                });
              }),
              () => {
                s(void 0);
              }
            );
          }, [i, e, r]),
          {
            data: (0, x.useMemo)(() => {
              if (t) {
                var e;
                let s = { ...t };
                return (
                  (s.rows =
                    null === (e = s.rows) || void 0 === e
                      ? void 0
                      : e.map((e) => ({
                          ...e,
                          broker_name: l[e.broker_id] || e.broker_id,
                        }))),
                  s
                );
              }
              return t;
            }, [t, l]),
          }
        );
      };
      var X = s(7541);
      let ee = () =>
        (0, c.jsxs)("svg", {
          width: "21",
          height: "20",
          viewBox: "0 0 21 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, c.jsx)("path", {
              d: "M17.4648 1.67319C17.3493 1.66263 17.2326 1.66487 17.1148 1.68132C15.2085 1.94877 11.1127 2.53806 6.91628 7.50001H4.72878L2.49896 9.82097C2.18896 10.131 2.09625 10.5935 2.26458 10.9994C2.43208 11.4052 2.82476 11.6667 3.26393 11.6667H5.31309C5.03805 11.9785 4.89793 12.3103 4.75644 12.6774C4.59974 13.084 4.46927 13.5267 4.36094 13.9437C4.14427 14.7777 4.01588 15.5208 4.01588 15.5208L3.80918 16.6911L4.97943 16.4844C4.97943 16.4844 5.72253 16.356 6.55657 16.1393C6.9736 16.031 7.41628 15.9005 7.82285 15.7438C8.18994 15.6023 8.52177 15.4622 8.83359 15.1872V17.2363C8.83359 17.6755 9.09508 18.069 9.50091 18.2357C9.63841 18.2932 9.78163 18.3187 9.92246 18.3187C10.1983 18.3187 10.465 18.2165 10.6516 18.029L13.0003 15.8887V13.584C17.9602 9.38807 18.5508 5.29175 18.8189 3.38543C18.8848 2.91209 18.73 2.44688 18.3925 2.10938C18.1388 1.85563 17.8112 1.70487 17.4648 1.67319ZM14.2503 5.00001C14.9403 5.00001 15.5003 5.56001 15.5003 6.25001C15.5003 6.94001 14.9403 7.50001 14.2503 7.50001C13.5603 7.50001 13.0003 6.94001 13.0003 6.25001C13.0003 5.56001 13.5603 5.00001 14.2503 5.00001ZM10.9169 8.33334C11.6069 8.33334 12.1669 8.89334 12.1669 9.58334C12.1669 10.2733 11.6069 10.8333 10.9169 10.8333C10.2269 10.8333 9.66693 10.2733 9.66693 9.58334C9.66693 8.89334 10.2269 8.33334 10.9169 8.33334ZM6.86745 12.4544L8.04583 13.6328L7.75612 13.9225C7.77122 13.9074 7.53468 14.0691 7.22227 14.1895C6.90985 14.3099 6.51557 14.4263 6.13665 14.5247C6.02828 14.5529 6.03363 14.5454 5.92995 14.5703C5.95487 14.4666 5.94737 14.472 5.97552 14.3636C6.07396 13.9847 6.1904 13.5904 6.31081 13.278C6.43122 12.9656 6.59283 12.729 6.57773 12.7441L6.86745 12.4544Z",
              fill: "#FF5F2D",
            }),
            (0, c.jsx)("path", {
              d: "M17.4648 1.67319C17.3493 1.66263 17.2326 1.66487 17.1148 1.68132C15.2085 1.94877 11.1127 2.53806 6.91628 7.50001H4.72878L2.49896 9.82097C2.18896 10.131 2.09625 10.5935 2.26458 10.9994C2.43208 11.4052 2.82476 11.6667 3.26393 11.6667H5.31309C5.03805 11.9785 4.89793 12.3103 4.75644 12.6774C4.59974 13.084 4.46927 13.5267 4.36094 13.9437C4.14427 14.7777 4.01588 15.5208 4.01588 15.5208L3.80918 16.6911L4.97943 16.4844C4.97943 16.4844 5.72253 16.356 6.55657 16.1393C6.9736 16.031 7.41628 15.9005 7.82285 15.7438C8.18994 15.6023 8.52177 15.4622 8.83359 15.1872V17.2363C8.83359 17.6755 9.09508 18.069 9.50091 18.2357C9.63841 18.2932 9.78163 18.3187 9.92246 18.3187C10.1983 18.3187 10.465 18.2165 10.6516 18.029L13.0003 15.8887V13.584C17.9602 9.38807 18.5508 5.29175 18.8189 3.38543C18.8848 2.91209 18.73 2.44688 18.3925 2.10938C18.1388 1.85563 17.8112 1.70487 17.4648 1.67319ZM14.2503 5.00001C14.9403 5.00001 15.5003 5.56001 15.5003 6.25001C15.5003 6.94001 14.9403 7.50001 14.2503 7.50001C13.5603 7.50001 13.0003 6.94001 13.0003 6.25001C13.0003 5.56001 13.5603 5.00001 14.2503 5.00001ZM10.9169 8.33334C11.6069 8.33334 12.1669 8.89334 12.1669 9.58334C12.1669 10.2733 11.6069 10.8333 10.9169 10.8333C10.2269 10.8333 9.66693 10.2733 9.66693 9.58334C9.66693 8.89334 10.2269 8.33334 10.9169 8.33334ZM6.86745 12.4544L8.04583 13.6328L7.75612 13.9225C7.77122 13.9074 7.53468 14.0691 7.22227 14.1895C6.90985 14.3099 6.51557 14.4263 6.13665 14.5247C6.02828 14.5529 6.03363 14.5454 5.92995 14.5703C5.95487 14.4666 5.94737 14.472 5.97552 14.3636C6.07396 13.9847 6.1904 13.5904 6.31081 13.278C6.43122 12.9656 6.59283 12.729 6.57773 12.7441L6.86745 12.4544Z",
              fill: "url(#paint0_linear_450_342)",
            }),
            (0, c.jsx)("defs", {
              children: (0, c.jsxs)("linearGradient", {
                id: "paint0_linear_450_342",
                x1: "7.36486",
                y1: "1.66675",
                x2: "6.61418",
                y2: "35.873",
                gradientUnits: "userSpaceOnUse",
                children: [
                  (0, c.jsx)("stop", { stopColor: "#FFAC5F" }),
                  (0, c.jsx)("stop", {
                    offset: "0.588542",
                    stopColor: "#A100EC",
                  }),
                  (0, c.jsx)("stop", { offset: "1", stopColor: "#5800C8" }),
                ],
              }),
            }),
          ],
        });
      var et = s(53970),
        es = s(55673),
        el = s(74205);
      let ea = (e) => {
          var t, s;
          let l = window.location.pathname,
            a = (0, x.useMemo)(() => {
              var t;
              let s =
                null === (t = e.data) || void 0 === t
                  ? void 0
                  : t.est_stake_boost;
              return null == s
                ? void 0
                : 0 === s
                ? s
                : new (N())(s)
                    .div(new (N())(10).pow(0.15))
                    .toDecimalPlaces(2, N().ROUND_DOWN)
                    .toString();
            }, [
              null == e
                ? void 0
                : null === (t = e.data) || void 0 === t
                ? void 0
                : t.est_stake_boost,
            ]),
            [r, i] = (0, x.useState)("/staking"),
            n = (0, x.useMemo)(() => {
              let e = "trading rewards";
              return (
                -1 !== l.indexOf("MMRewards") && (e = "market making rewards"),
                "Staking more than 10 $DRAI will accelerate your ".concat(
                  e,
                  " acquisition."
                )
              );
            }, [l]);
          return (
            (0, x.useEffect)(() => {
              i((0, p.ac)().stakeUrl);
            }, []),
            (0, c.jsxs)("div", {
              className: (0, m.cn)(
                "mt-5 rounded-[20px] border border-[rgba(255,255,255,0.06)] flex-1 p-7 bg-[#170B29]"
              ),
              children: [
                (0, c.jsxs)("div", {
                  className: "flex justify-between",
                  children: [
                    (0, c.jsx)("div", {
                      className: "text-base",
                      children: "Stake booster",
                    }),
                    (0, c.jsxs)("a", {
                      href: r,
                      target: "_blank",
                      className:
                        "text-sm text-[#B084E9] flex gap-1 items-center",
                      children: [
                        (0, c.jsx)("div", { children: "Stake now" }),
                        (0, c.jsx)(f.Z, { className: "mt-[2px]" }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: (0, m.cn)(
                    "flex flex-col md:flex-row",
                    "bg-[rgba(255,255,255,0.03)] rounded-xl p-5 mt-5"
                  ),
                  children: [
                    (0, c.jsx)("div", {
                      className: "flex-1 flex items-center justify-center",
                      children: (0, c.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, c.jsxs)("div", {
                            className: "flex items-center gap-1 justify-center",
                            children: [
                              (0, c.jsxs)("div", {
                                className: "flex w-[32px] h-[20px] relative",
                                children: [
                                  (0, c.jsx)("div", {
                                    className: " absolute right-0 top-0",
                                    children: (0, c.jsx)(u.K, {}),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: " absolute left-0 top-0 ",
                                    children: (0, c.jsx)(o.x, {}),
                                  }),
                                ],
                              }),
                              (0, c.jsx)("div", {
                                className:
                                  "text-[13px] md:text-base numberFont",
                                children: (0, m.uf)(
                                  null === (s = e.data) || void 0 === s
                                    ? void 0
                                    : s.est_avg_stake,
                                  { floor: !0 }
                                ),
                              }),
                            ],
                          }),
                          (0, c.jsxs)("div", {
                            className:
                              "text-white/50 text-xs md:text-sm flex gap-1 items-center",
                            children: [
                              (0, c.jsx)("div", {
                                children: "Avg. staked amount",
                              }),
                              (0, c.jsx)(er, {
                                hint: "Average staked amount calculated by random snapshots taken during the current Epoch.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className:
                        "w-full h-[1px] my-5 md:w-[1px] md:h-[49px] md:mx-5 bg-primary-8",
                    }),
                    (0, c.jsxs)("div", {
                      className:
                        "flex-1 flex flex-col gap-2 items-center justify-center",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "flex items-center gap-1 justify-center",
                          children: [
                            (0, c.jsx)(ee, {}),
                            (0, c.jsx)("div", {
                              className: (0, m.cn)(
                                "text-[13px] md:text-base numberFont",
                                "bg-gradient-to-b from-[#FFAC5F] from-[1.48%] via-[#A100EC] via-[119%] to-[#5800C8] to-[202%] bg-clip-text text-transparent"
                              ),
                              children: (0, m.uf)(a, { floor: !0 }) + "x",
                            }),
                          ],
                        }),
                        (0, c.jsxs)("div", {
                          className:
                            "text-white/50 text-xs md:text-sm items-center flex gap-1",
                          children: [
                            (0, c.jsx)("div", { children: "Booster" }),
                            (0, c.jsx)(er, { hint: n }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        er = (e) => {
          let [t, s] = (0, x.useState)(!1);
          return (0, el.a)("(min-width: 1024px)")
            ? (0, c.jsxs)(et.u, {
                delayDuration: 0,
                open: t,
                onOpenChange: s,
                children: [
                  (0, c.jsx)(et.aJ, {
                    children: (0, c.jsx)("div", {
                      onClick: (e) => {
                        e.preventDefault(), s(!0);
                      },
                      children: (0, c.jsx)(X.s, {}),
                    }),
                  }),
                  (0, c.jsx)(et._v, {
                    side: "top",
                    align: "center",
                    sideOffset: 4,
                    children: (0, c.jsx)("div", {
                      className:
                        "outline outline-1 outline-[#B084E9] rounded-md w-[242px] px-4 py-3 bg-[#170B29] text-xs lg:text-[13px] text-white",
                      children: e.hint,
                    }),
                  }),
                ],
              })
            : (0, c.jsx)(es.g, { content: e.hint });
        };
      var ei = s(54576);
      let en = () => {
        let [e, t] = (0, x.useState)(void 0),
          { address: s, brokers: l } = (0, g.useAppContext)();
        return (
          (0, x.useEffect)(() => {
            (0, O.uk)().then((e) => {
              let { rows: s } = e;
              t(
                null == s
                  ? void 0
                  : s.map((e) => ({ ...e, broker_name: e.broker_id }))
              );
            });
          }, [s]),
          {
            data: (0, x.useMemo)(
              () =>
                e
                  ? [...e].map((e) => ({
                      ...e,
                      broker_name: l[e.broker_id] || e.broker_name,
                    }))
                  : e,
              [e, l]
            ),
          }
        );
      };
      var ed = s(42701);
      let ec = (e) =>
          (0, el.a)("(min-width: 1024px)")
            ? (0, c.jsx)(eo, { ...e })
            : (0, c.jsx)(es.g, {
                content:
                  "Epoch rewards will be distributed based on the builders' share of the paid base fee in the current epoch and may continue to change until the end of the epoch.",
              }),
        eo = (e) => {
          let { data: t } = en(),
            [s, l] = (0, x.useState)(!1),
            a = (0, x.useMemo)(() => {
              let e = [...(t || [])];
              return (
                e.sort((e, t) => t.est_allocation - e.est_allocation),
                (e = e.filter((e) => 0 !== e.est_allocation))
              );
            }, [t]),
            r = a.length >= 6;
          return (0, c.jsxs)(et.u, {
            delayDuration: 0,
            open: s,
            onOpenChange: l,
            children: [
              (0, c.jsx)(et.aJ, { children: (0, c.jsx)(X.s, {}) }),
              (0, c.jsx)(et._v, {
                side: "right",
                align: "center",
                sideOffset: 4,
                className: "z-[1]",
                children: (0, c.jsxs)("div", {
                  className: (0, m.cn)(
                    "w-[332px] mr-2 lg:mr-0 lg:w-[367px] p-4",
                    "outline outline-1 outline-[#B084E9] rounded-md bg-[#170B29] text-xs lg:text-[13px]",
                    r && "pb-0"
                  ),
                  children: [
                    (0, c.jsxs)("div", {
                      className: "text-white/50 break-words",
                      children: [
                        "Epoch rewards will be distributed based on the ",
                        "builders'",
                        " share of the paid base fee in the current epoch and may continue to change until the end of the epoch.",
                      ],
                    }),
                    (0, c.jsx)(ei.Z, { className: " my-2 lg:my-3" }),
                    (0, c.jsxs)("div", {
                      className: "flex gap-2 lg:gap-3",
                      children: [
                        (0, c.jsx)("div", {
                          className: "w-[90px]",
                          children: "Builder",
                        }),
                        (0, c.jsx)("div", {
                          className: "w-[70px]",
                          children: "Base fee%",
                        }),
                        (0, c.jsx)("div", {
                          className: "flex-1 text-right",
                          children: "Curr. rewards share",
                        }),
                      ],
                    }),
                    (0, c.jsx)(ei.Z, { className: "mt-2 lg:mt-3" }),
                    (0, c.jsx)("div", {
                      className: (0, m.cn)(
                        r
                          ? "max-h-[160px] overflow-y-auto custom-scrollbar mr-[-8px]"
                          : "my-0 lg:my-0"
                      ),
                      children: a.map((t, s) => {
                        var l;
                        let r = s === a.length - 1;
                        return (0, c.jsxs)(
                          "div",
                          {
                            className: (0, m.cn)(
                              "flex my-2 lg:my-3 h-[16px] gap-2 lg:gap-3",
                              a
                                ? (0, m.cn)("pr-2", r && "mb-4 lg:mb-4")
                                : r && "mb-0 lg:mb-0"
                            ),
                            children: [
                              (0, c.jsx)("div", {
                                className:
                                  "w-[90px] text-ellipsis overflow-hidden break-all line-clamp-1",
                                children: t.broker_name,
                              }),
                              (0, c.jsx)("div", {
                                className: "w-[70px] text-left numberFont",
                                children:
                                  (0, m.uf)(
                                    new (N())(
                                      (null == t
                                        ? void 0
                                        : t.est_pct_allocation) || "0"
                                    )
                                      .mul(100)
                                      .toString(),
                                    { decimal: 2, floor: !0 }
                                  ) + "%",
                              }),
                              (0, c.jsxs)("div", {
                                className:
                                  "flex-1 flex gap-1 justify-end numberFont",
                                children: [
                                  (0, c.jsx)("div", {
                                    children: (0, m.uf)(t.est_allocation, {
                                      decimal: 2,
                                      removeEndZero: !1,
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "text-white/50",
                                    children:
                                      null !== (l = e.epochToken) &&
                                      void 0 !== l
                                        ? l
                                        : "DRAI",
                                  }),
                                ],
                              }),
                            ],
                          },
                          s
                        );
                      }),
                    }),
                    0 === ((null == t ? void 0 : t.length) || 0) &&
                      (0, c.jsx)(ed.B, {}),
                  ],
                }),
              }),
            ],
          });
        },
        ex = (e) => {
          let { targetTimestamp: t } = e,
            [s, l] = (0, x.useState)({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            });
          return (
            (0, x.useEffect)(() => {
              let e = setInterval(() => {
                if (void 0 === t) return;
                let s = t - new Date().getTime();
                s < 0
                  ? (clearInterval(e),
                    l({ days: 0, hours: 0, minutes: 0, seconds: 0 }))
                  : l({
                      days: Math.floor(s / 864e5),
                      hours: Math.floor((s % 864e5) / 36e5),
                      minutes: Math.floor((s % 36e5) / 6e4),
                      seconds: Math.floor((s % 6e4) / 1e3),
                    });
              }, 1e3);
              return () => clearInterval(e);
            }, [t]),
            (0, c.jsxs)("div", {
              className:
                "flex justify-center items-center gap-3 tabular-nums font-['Manrope']",
              children: [
                (0, c.jsxs)("div", {
                  className: "flex gap-1 items-end",
                  children: [
                    (0, c.jsx)("span", {
                      className: "text-base md:text-[20px]",
                      children: "".concat(s.days).padStart(2, "0"),
                    }),
                    (0, c.jsx)("span", {
                      className:
                        "text-xs md:text-[16px] text-white/50 mb-[1px]",
                      children: "D",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "flex gap-1 items-end",
                  children: [
                    (0, c.jsx)("span", {
                      className: "text-base md:text-[20px]",
                      children: "".concat(s.hours).padStart(2, "0"),
                    }),
                    (0, c.jsx)("span", {
                      className:
                        "text-xs md:text-[16px] text-white/50 mb-[1px]",
                      children: "H",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "flex gap-1 items-end",
                  children: [
                    (0, c.jsx)("span", {
                      className: "text-base md:text-[20px]",
                      children: "".concat(s.minutes).padStart(2, "0"),
                    }),
                    (0, c.jsx)("span", {
                      className:
                        "text-xs md:text-[16px] text-white/50 mb-[1px]",
                      children: "M",
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "flex gap-1 items-end",
                  children: [
                    (0, c.jsx)("span", {
                      className: "text-base md:text-[20px]",
                      children: "".concat(s.seconds).padStart(2, "0"),
                    }),
                    (0, c.jsx)("span", {
                      className:
                        "text-xs md:text-[16px] text-white/50 mb-[1px]",
                      children: "S",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        em = (e) => {
          var t;
          let s = (0, x.useMemo)(() => {
              let t = [...(e.rows || [])];
              return (
                t.sort((e, t) => t.est_r_account - e.est_r_account),
                t.filter((e) => 0 !== e.est_r_account),
                t
              );
            }, [e.rows]),
            [l, a] = (0, x.useState)(!1);
          if (!(0, el.a)("(min-width: 1024px)"))
            return (0, c.jsx)(es.g, {
              content:
                "Epoch rewards will be distributed based on the builders' share of the paid base fee in the current epoch and may continue to change until the end of the epoch.",
            });
          let r = s.length >= 6;
          return (0, c.jsxs)(et.u, {
            delayDuration: 0,
            open: l,
            onOpenChange: a,
            children: [
              (0, c.jsx)(et.aJ, {
                children: (0, c.jsx)("div", {
                  onClick: (e) => {
                    e.preventDefault(), a(!0);
                  },
                  children: (0, c.jsx)(X.s, {}),
                }),
              }),
              (0, c.jsx)(et._v, {
                side: "right",
                align: "center",
                sideOffset: 4,
                className: "z-[1]",
                children: (0, c.jsxs)("div", {
                  className: (0, m.cn)(
                    "outline outline-1 outline-[#B084E9] rounded-md w-[277px] ml-4 lg:ml-0 p-4 bg-[#170B29] text-xs lg:text-[13px]",
                    r && "pb-0"
                  ),
                  children: [
                    (0, c.jsx)("div", {
                      className: "break-words text-white/50",
                      children:
                        "Epoch rewards will be distributed based on the builders' share of the paid base fee in the current epoch and may continue to change until the end of the epoch.",
                    }),
                    (0, c.jsx)(ei.Z, { className: "my-2 lg:my-3" }),
                    (0, c.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, c.jsx)("div", {
                          className: "flex-1",
                          children: "Builder",
                        }),
                        (0, c.jsx)("div", {
                          className: " flex-shrink-0",
                          children: "Current est. rewards",
                        }),
                      ],
                    }),
                    (0, c.jsx)(ei.Z, { className: "mt-2 lg:mt-3" }),
                    (0, c.jsx)("div", {
                      className: (0, m.cn)(
                        r &&
                          "max-h-[160px] overflow-y-auto custom-scrollbar mr-[-8px]"
                      ),
                      children: s.map((t, l) => {
                        var a;
                        let i = l === s.length - 1;
                        return (0, c.jsxs)(
                          "div",
                          {
                            className: (0, m.cn)(
                              "flex my-2 lg:my-3 h-[16px] justify-between gap-2 lg:gap-3",
                              r
                                ? (0, m.cn)("pr-2", i && "mb-4 lg:mb-4")
                                : i && "mb-0 lg:mb-0"
                            ),
                            children: [
                              (0, c.jsx)("div", {
                                className:
                                  "flex-1 text-ellipsis overflow-hidden break-all line-clamp-1",
                                children: t.broker_name,
                              }),
                              (0, c.jsxs)("div", {
                                className:
                                  " flex-shrink-0 flex gap-1 numberFont",
                                children: [
                                  (0, c.jsx)("div", {
                                    children: (0, m.uf)(t.est_r_account, {
                                      decimal: 2,
                                      removeEndZero: !1,
                                    }),
                                  }),
                                  (0, c.jsx)("div", {
                                    className: "text-white/50",
                                    children:
                                      null !== (a = e.epochToken) &&
                                      void 0 !== a
                                        ? a
                                        : "DRAI",
                                  }),
                                ],
                              }),
                            ],
                          },
                          l
                        );
                      }),
                    }),
                    0 ===
                      ((null === (t = e.rows) || void 0 === t
                        ? void 0
                        : t.length) || 0) && (0, c.jsx)(ed.B, {}),
                  ],
                }),
              }),
            ],
          });
        },
        eu = (e) => {
          let { type: t } = e,
            { curEpochInfo: s, isUnstart: l } = e.epochList,
            { curEpochEstimate: a } = e;
          return (0, c.jsxs)("div", {
            className:
              "lg:w-[35%] bg-[#170B29] rounded-b-[20px] flex flex-col linear-graident-border",
            children: [
              (0, c.jsxs)("div", {
                className: (0, m.cn)(
                  "flex gap-1 h-[48px] rounded-t-[14px] items-center justify-center",
                  "bg-gradient-to-l from-[#48BDFF] via-[#786CFF] to-[#BD00FF]",
                  "text-sm md:text-base"
                ),
                children: [
                  (0, c.jsx)("div", { children: "Epoch rewards:" }),
                  (0, c.jsx)("div", {
                    className: "numberFont",
                    children: ""
                      .concat(
                        (0, m.uf)(null == s ? void 0 : s.max_reward_amount, {
                          decimal: 0,
                        }),
                        " "
                      )
                  }),
                  "normal" === t &&
                    (0, c.jsx)(ec, {
                      epochToken: null == s ? void 0 : s.epoch_token,
                    }),
                ],
              }),
              (0, c.jsxs)("div", {
                className: (0, m.cn)("flex-1", l && "flex flex-col"),
                children: [
                  (0, c.jsx)("div", {
                    className: "px-7 pt-8",
                    children: (0, c.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, c.jsx)("div", {
                          className: "text-sm lg:text-base",
                          children: "Epoch ".concat(
                            (null == s ? void 0 : s.epoch_id) || "-"
                          ),
                        }),
                        (0, c.jsx)("div", {
                          className: "text-[13px] text-white/50",
                          children: ""
                            .concat(
                              ef(null == s ? void 0 : s.start_time),
                              " - "
                            )
                            .concat(ef(null == s ? void 0 : s.end_time)),
                        }),
                      ],
                    }),
                  }),
                  l
                    ? (0, c.jsxs)("div", {
                        className: (0, m.cn)(
                          "mt-4 mb-[28px] mx-[28px] flex flex-col gap-5 items-center justify-center flex-1",
                          "bg-white/[0.03]",
                          "p-[40px] rounded-xl"
                        ),
                        children: [
                          (0, c.jsx)("div", { children: "Epoch starts in" }),
                          (0, c.jsx)(ex, {
                            targetTimestamp: null == s ? void 0 : s.start_time,
                          }),
                        ],
                      })
                    : (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)("div", {
                            className: "mt-[28px]",
                            children: (0, c.jsx)(ex, {
                              targetTimestamp: null == s ? void 0 : s.end_time,
                            }),
                          }),
                          (0, c.jsxs)("div", {
                            className: (0, m.cn)(
                              "flex flex-row justify-between items-center lg:flex-col",
                              "rounded-xl",
                              "py-[28px] md:py-[30px] px-[20px] md:px-[40px]",
                              "bg-white/[0.03]",
                              "mt-8 mx-7 md:mx-7 mb-8"
                            ),
                            children: [
                              (0, c.jsx)(eh, {
                                curEpochEstimate: a,
                                type: t,
                                curEpochInfo: s,
                              }),
                              (0, c.jsx)("div", {
                                className:
                                  "h-[34px] w-[1px] lg:hidden lg:h-[0px] lg:w-[0px] bg-white/[.05]",
                              }),
                              (0, c.jsx)(ep, { curEpochEstimate: a, type: t }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        },
        eh = (e) => {
          var t;
          let { curEpochEstimate: s, type: l, curEpochInfo: a } = e;
          return (0, c.jsxs)("div", {
            className:
              "w-1/2 lg:w-full flex flex-col gap-2 items-center justify-center",
            children: [
              (0, c.jsxs)("div", {
                className: "flex justify-center items-center gap-1",
                children: [
                  null != a
                    ? "DRAI" === a.epoch_token
                      ? (0, c.jsx)(o.x, {})
                      : (0, c.jsx)(u.K, {})
                    : (0, c.jsx)(c.Fragment, {}),
                  (0, c.jsx)("div", {
                    className: "text-[13px] md:text-lg numberFont",
                    children: (0, m.uf)(null == s ? void 0 : s.est_r_wallet, {
                      floor: !0,
                    }),
                  }),
                  "normal" === l &&
                    (0, c.jsx)(em, {
                      epochToken:
                        null === (t = e.curEpochInfo) || void 0 === t
                          ? void 0
                          : t.epoch_token,
                      rows: null == s ? void 0 : s.rows,
                    }),
                ],
              }),
              (0, c.jsx)("div", {
                className:
                  "flex justify-center text-xs md:text-sm text-white/[.54]",
                children: "My est. rewards",
              }),
            ],
          });
        },
        ep = (e) => {
          let { curEpochEstimate: t, type: s } = e;
          return (0, c.jsxs)("div", {
            className:
              "w-1/2 lg:w-full flex flex-col gap-2 lg:mt-8 items-center justify-center",
            children: [
              (0, c.jsxs)("div", {
                className: "flex justify-center items-center gap-1",
                children: [
                  "$",
                  (0, c.jsx)("div", {
                    className: "text-[13px] md:text-lg numberFont",
                    children: (0, m.uf)(
                      null == t ? void 0 : t.est_trading_volume,
                      { decimal: 0 }
                    ),
                  }),
                ],
              }),
              (0, c.jsx)("div", {
                className:
                  "flex justify-center text-xs md:text-sm text-white/[.54]",
                children:
                  "normal" === s ? "My trading volume" : "My maker volume",
              }),
            ],
          });
        },
        ef = (e) => {
          if (!e) return "";
          let t = new Date(e),
            s = [
              "Jan.",
              "Feb,",
              "Mar,",
              "Apr,",
              "May",
              "Jun.",
              "Jul.",
              "Aug.",
              "Sep.",
              "Oct.",
              "Nov.",
              "Dec.",
            ][t.getUTCMonth()],
            l = t.getUTCDate();
          return "".concat(s, " ").concat(l);
        },
        ev = () => {
          let { type: e, epochList: t } = (0, R.YT)(),
            { data: s } = Q(e);
          return (0, c.jsxs)("div", {
            className: "mt-[60px] flex flex-col gap-5 lg:flex-row lg:gap-5",
            children: [
              (0, c.jsx)(eu, { curEpochEstimate: s, epochList: t, type: e }),
              (0, c.jsx)(ej, { curEpochEstimate: s, type: e }),
            ],
          });
        },
        ej = (e) => {
          let { curEpochEstimate: t, type: s } = e,
            { walletAdapter: l, isNotSupportChain: a } = (0,
            P.useWalletAdapterContext)(),
            { data: r } = (0, $.Y)(s),
            i = null == l ? void 0 : l.connected,
            n = null == l ? void 0 : l.namespace,
            d = (0, x.useMemo)(
              () =>
                i
                  ? a
                    ? (0, c.jsxs)("div", {
                        className:
                          "flex flex-col items-center h-full justify-center bg-[#170B29] rounded-[20px] min-h-[385px] border border-[rgba(255,255,255,0.06)] ",
                        children: [
                          (0, c.jsx)(G.Z, { className: "w-[165px]" }),
                          (0, c.jsx)("div", {
                            className:
                              "w-auto lg:w-[212px] mt-5 text-white/50 text-xs text-center",
                            children:
                              "Please switch to a supported network to view your trading rewards.",
                          }),
                        ],
                      })
                    : "SOL" === n && "mm" === s
                    ? (0, c.jsx)("div", {
                        className:
                          "flex flex-col items-center h-full justify-center bg-[#170B29] rounded-[20px] min-h-[385px] border border-[rgba(255,255,255,0.06)] ",
                        children: (0, c.jsx)("div", {
                          className:
                            "w-[212px] text-center text-primary-50 text-sm",
                          children:
                            "Claiming rewards on Solana is coming soon.",
                        }),
                      })
                    : (0, c.jsxs)("div", {
                        children: [
                          (0, c.jsx)(q, { data: r }),
                          (0, c.jsx)(ea, { data: t }),
                        ],
                      })
                  : (0, c.jsxs)("div", {
                      className:
                        "flex flex-col items-center h-full justify-center bg-[#170B29] rounded-[20px] min-h-[385px] border border-[rgba(255,255,255,0.06)]",
                      children: [
                        (0, c.jsx)(K.Z, { children: "Connect" }),
                        (0, c.jsx)("div", {
                          className:
                            "w-auto lg:w-[212px] mt-5 text-white/50 text-xs text-center",
                          children:
                            "Please connect wallet to view your trading rewards.",
                        }),
                      ],
                    }),
              [i, t, a, r, n]
            );
          return (0, c.jsx)("div", {
            className: "lg:w-[65%] flex flex-col gap-5 ",
            children: d,
          });
        };
      var eg = (e) => {
        let { type: t } = e,
          s =
            "https://orderly.network/docs/introduction/tokenomics/trading-rewards",
          l =
            "https://orderly.network/docs/introduction/tokenomics/market-making-rewards",
          a = [
          ];
        return (0, c.jsx)("div", {
          className: "text-sm md:text-base text-white/50 leading-[1.2]",
          children: a.map((e, t) =>
            (0, c.jsx)(
              "span",
              {
                className: "".concat(
                  e.isLink
                    ? "text-[#B084E9] hover:underline cursor-pointer"
                    : ""
                ),
                dangerouslySetInnerHTML: { __html: e.content },
                onClick: () => e.isLink && window.open(e.href, "_blank"),
              },
              t
            )
          ),
        });
      };
      let ew = () => {
        let { type: e } = (0, R.YT)(),
          t = e === R.Es.normal ? "Trading Rewards" : "Market Making Rewards",
          s =
            e === R.Es.normal
              ? "Trade with Drive3AI’s builders to earn rewards."
              : "Provide liquidity to earn rewards.";
        return (0, c.jsxs)("div", {
          className: "my-[60px]",
          children: [
            (0, c.jsx)("div", {
              className:
                "text-[32px] md:text-[40px] bg-gradient-to-b from-[#fff] from-[53.18%] to-[#9975FF] to-[130.75%] bg-clip-text text-transparent font-semibold",
              children: t,
            }),
            (0, c.jsx)("div", {
              className:
                "text-sm md:text-base text-primary-50 my-1 mt-3 leading-[1.2]",
              children: s,
            }),
            (0, c.jsx)(eg, { type: e }),
            (0, c.jsx)(ev, {}),
          ],
        });
      };
    },
    42701: function (e, t, s) {
      s.d(t, {
        B: function () {
          return a;
        },
      });
      var l = s(6272);
      let a = () =>
        (0, l.jsx)("div", {
          className:
            "w-full h-[60px] flex-col justify-center items-center gap-3 inline-flex",
          children: (0, l.jsx)("div", {
            className:
              "text-center text-white/50 text-sm  font-['Articulat CF']",
            children: "No data",
          }),
        });
    },
    62524: function (e, t, s) {
      s.d(t, {
        D: function () {
          return m;
        },
        f: function () {
          return a;
        },
      });
      var l,
        a,
        r = s(84696),
        i = s(80856),
        n = s(8627),
        d = s(65921),
        c = s(32288),
        o = s(45182),
        x = s(34082);
      ((l = a || (a = {}))[(l.order = 0)] = "order"),
        (l[(l.esORder = 1)] = "esORder"),
        (l[(l.dmmOrder = 2)] = "dmmOrder"),
        (l[(l.dmmEsOrder = 3)] = "dmmEsOrder");
      let m = (e) => {
        let [t, s] = (0, n.useState)(0),
          l = (0, n.useRef)(void 0),
          a = (0, n.useRef)(void 0),
          m = (0, n.useRef)(void 0),
          { walletAdapter: u } = (0, x.useWalletAdapterContext)(),
          h = null == u ? void 0 : u.namespace,
          p = null == u ? void 0 : u.userAddress;
        (0, n.useEffect)(() => {
          let e = (0, c.Js)();
          (l.current = e.orderlyChainRpcUrl),
            (a.current = r.y(l.current)),
            (m.current = new i.CH(
              e.orderlyContract,
              e.orderlyContractABI,
              a.current
            ));
        }, []);
        let f = (0, n.useCallback)(() => {
          if ("SOL" === h) {
            s(0);
            return;
          }
          void 0 !== p &&
            void 0 !== l.current &&
            void 0 !== a.current &&
            void 0 !== m.current &&
            (console.log("get claimed", [e, p]),
            m.current.getClaimed
              .apply(null, [e, p])
              .catch((e) => {
                throw (0, d.r)(e);
              })
              .then((e) => {
                let t = (0, o.An)(e);
                console.log("get claimed", t), s(t);
              })
              .catch((e) => {}));
        }, [p, e, h]);
        return (
          (0, n.useEffect)(() => {
            f();
          }, [l.current, e, p, h]),
          { data: t, refresh: f }
        );
      };
    },
    33523: function (e, t, s) {
      s.d(t, {
        Y: function () {
          return n;
        },
      });
      var l = s(31960),
        a = s(8627),
        r = s(53600),
        i = s(34082);
      let n = (e) => {
        let [t, s] = (0, a.useState)(void 0),
          { walletAdapter: n, isNotSupportChain: d } = (0,
          i.useWalletAdapterContext)(),
          c = null == n ? void 0 : n.userAddress,
          o = null == n ? void 0 : n.namespace;
        return (
          (0, a.useEffect)(() => {
            void 0 === c || d
              ? s(void 0)
              : (e === r.Es.normal ? l.Us : l.IW)(c).then((e) => {
                  s({
                    wallet_lifetime_trading_rewards_order:
                      (null == e
                        ? void 0
                        : e.group_lifetime_mm_rewards_order) ||
                      ("SOL" === o
                        ? null == e
                          ? void 0
                          : e.wallet_pending_trading_rewards_order
                        : null == e
                        ? void 0
                        : e.wallet_lifetime_trading_rewards_order) ||
                      0,
                    wallet_lifetime_trading_rewards_escrow:
                      (null == e
                        ? void 0
                        : e.group_lifetime_mm_rewards_escrow) ||
                      ("SOL" === o
                        ? null == e
                          ? void 0
                          : e.wallet_pending_trading_rewards_escrow
                        : null == e
                        ? void 0
                        : e.wallet_lifetime_trading_rewards_escrow) ||
                      0,
                    rows: ((null == e ? void 0 : e.rows) || []).map((e) => ({
                      ...e,
                      r_wallet:
                        (null == e ? void 0 : e.total_reward) ||
                        (null == e ? void 0 : e.r_wallet),
                    })),
                  });
                });
          }, [c, d, o]),
          { data: t }
        );
      };
    },
    6288: function (e, t, s) {
      s.d(t, {
        K: function () {
          return a;
        },
      });
      var l = s(6272);
      let a = () =>
        (0, l.jsxs)("img", {
          src:"/images/esDRAIsm.png"
        });
    },
    3404: function (e, t, s) {
      s.d(t, {
        x: function () {
          return a;
        },
      });
      var l = s(6272);
      let a = () =>
        (0, l.jsxs)("img", {
          src: "/images/DRAIsm.png"
        });
    },
    7541: function (e, t, s) {
      s.d(t, {
        s: function () {
          return a;
        },
      });
      var l = s(6272);
      let a = () =>
        (0, l.jsxs)("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "white",
          opacity: 0.5,
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, l.jsx)("mask", {
              id: "mask0_4903_623",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "17",
              height: "16",
              children: (0, l.jsx)("rect", {
                x: "0.5",
                width: "16",
                height: "16",
                fill: "#D9D9D9",
              }),
            }),
            (0, l.jsx)("g", {
              mask: "url(#mask0_4903_623)",
              children: (0, l.jsx)("path", {
                d: "M7.83334 11.3333H9.16668V7.33331H7.83334V11.3333ZM8.50001 5.99998C8.6889 5.99998 8.84723 5.93609 8.97501 5.80831C9.10279 5.68053 9.16668 5.5222 9.16668 5.33331C9.16668 5.14442 9.10279 4.98609 8.97501 4.85831C8.84723 4.73054 8.6889 4.66665 8.50001 4.66665C8.31112 4.66665 8.15279 4.73054 8.02501 4.85831C7.89723 4.98609 7.83334 5.14442 7.83334 5.33331C7.83334 5.5222 7.89723 5.68053 8.02501 5.80831C8.15279 5.93609 8.31112 5.99998 8.50001 5.99998ZM8.50001 14.6666C7.57779 14.6666 6.71112 14.4916 5.90001 14.1416C5.0889 13.7916 4.38334 13.3166 3.78334 12.7166C3.18334 12.1166 2.70834 11.4111 2.35834 10.6C2.00834 9.78887 1.83334 8.9222 1.83334 7.99998C1.83334 7.07776 2.00834 6.21109 2.35834 5.39998C2.70834 4.58887 3.18334 3.88331 3.78334 3.28331C4.38334 2.68331 5.0889 2.20831 5.90001 1.85831C6.71112 1.50831 7.57779 1.33331 8.50001 1.33331C9.42223 1.33331 10.2889 1.50831 11.1 1.85831C11.9111 2.20831 12.6167 2.68331 13.2167 3.28331C13.8167 3.88331 14.2917 4.58887 14.6417 5.39998C14.9917 6.21109 15.1667 7.07776 15.1667 7.99998C15.1667 8.9222 14.9917 9.78887 14.6417 10.6C14.2917 11.4111 13.8167 12.1166 13.2167 12.7166C12.6167 13.3166 11.9111 13.7916 11.1 14.1416C10.2889 14.4916 9.42223 14.6666 8.50001 14.6666ZM8.50001 13.3333C9.9889 13.3333 11.25 12.8166 12.2833 11.7833C13.3167 10.75 13.8333 9.48887 13.8333 7.99998C13.8333 6.51109 13.3167 5.24998 12.2833 4.21665C11.25 3.18331 9.9889 2.66665 8.50001 2.66665C7.01112 2.66665 5.75001 3.18331 4.71668 4.21665C3.68334 5.24998 3.16668 6.51109 3.16668 7.99998C3.16668 9.48887 3.68334 10.75 4.71668 11.7833C5.75001 12.8166 7.01112 13.3333 8.50001 13.3333Z",
              }),
            }),
          ],
        });
    },
    45182: function (e, t, s) {
      s.d(t, {
        An: function () {
          return r;
        },
        Hv: function () {
          return i;
        },
      });
      var l = s(6468),
        a = s.n(l);
      function r(e) {
        return null === e || e === BigInt(0)
          ? e === BigInt(0)
            ? 0
            : void 0
          : Number(new (a())(e.toString()).div(1e18).toFixed(18));
      }
      function i(e) {
        if (void 0 !== e)
          return new (a())(e)
            .mul(new (a())("1000000000000000000"))
            .toDecimalPlaces(18)
            .toFixed(0);
      }
      a().set({ precision: 50 });
    },
  },
]);
