"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9960],
  {
    62823: function (e, t, n) {
      var s, a, l, r;
      n.d(t, {
        A: function () {
          return s;
        },
        C: function () {
          return a;
        },
      }),
        ((l = s || (s = {}))[(l.needApprove = 0)] = "needApprove"),
        (l[(l.insufficientBalance = 1)] = "insufficientBalance"),
        (l[(l.valid = 2)] = "valid"),
        (l[(l.invalid = 3)] = "invalid"),
        ((r = a || (a = {}))[(r.NEED_UNSTAKE = 0)] = "NEED_UNSTAKE"),
        (r[(r.WAIT_UNSTAKE = 1)] = "WAIT_UNSTAKE"),
        (r[(r.NEED_CLAIM = 2)] = "NEED_CLAIM");
    },
    25491: function (e, t, n) {
      n.d(t, {
        E: function () {
          return S;
        },
        B: function () {
          return R;
        },
      });
      var s = n(6272),
        a = n(8627),
        l = n(62587),
        r = n(48335);
      async function i() {
        return (0, r.U2)("/v1/staking/overview");
      }
      async function c(e) {
        return (0, r.U2)("/v1/staking/balance", { address: e });
      }
      async function o(e) {
        return (0, r.U2)("/v1/staking/unstake_details", { address: e });
      }
      async function d() {
        return (0, r.U2)("/v1/staking/valor/pool_info");
      }
      async function u(e) {
        return (0, r.U2)("/v1/staking/valor/redeem", { address: e });
      }
      var m = n(6468),
        x = n.n(m),
        f = n(2945),
        h = n(23540),
        g = n(73739);
      let v = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "June",
        "July",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec.",
      ];
      async function p(e) {
        let { address: t, is_vesting: n } = e;
        return (0, r.U2)("/v1/staking/esorder/vesting_list", {
          address: t,
          is_vesting: n,
        });
      }
      var j = n(6347),
        w = n(38820),
        C = n(84244),
        N = n(34082),
        b = n(70329),
        k = n(59580);
      let y = "30%+",
        _ = (0, a.createContext)({
          allowance: void 0,
          getOrderAllowance: () => {},
          balance: void 0,
          getOrderBalance: () => {},
          userValor: void 0,
          getUserValor: () => {},
          stakeBalance: void 0,
          unstakeDetails: void 0,
          getStakeBalance: () => {},
          getUnstakeDetail: () => {},
          totalStake: void 0,
          stakeAPR: "",
          getStakeDetail: () => {},
          redeemInfo: void 0,
          getRedeemInfo: () => {},
          poolInfo: void 0,
          getPoolInfo: () => {},
          updateStakeInfoByContract: () => {},
          updateUserUnstakeInfoByContract: () => {},
          vestingEsOrder: void 0,
          vestingEsOrderList: void 0,
          getVestingEsOrder: () => {},
        }),
        S = (e) => {
          let { children: t } = e,
            n = (0, a.useRef)(void 0),
            [r, m] = (0, a.useState)(void 0),
            [S, R] = (0, a.useState)(void 0),
            {
              currentChain: E,
              isNotSupportChain: O,
              walletAdapter: A,
            } = (0, N.useWalletAdapterContext)(),
            F = null == A ? void 0 : A.userAddress,
            [q, U] = (0, a.useState)(void 0),
            [B, D] = (0, a.useState)(y),
            [z, V] = (0, a.useState)(),
            [I, P] = (0, a.useState)(void 0),
            [M, Z] = (0, a.useState)(void 0),
            [T, H] = (0, a.useState)(void 0),
            [W, K] = (0, a.useState)(!0),
            [L, J] = (0, a.useState)(void 0),
            [Y, $] = (0, a.useState)(void 0),
            {
              queryOrderAllowance: Q,
              queryOrderBalance: G,
              queryUserValor: X,
              getStakingInfoByContract: ee,
              getUserPendingUnstakeByContract: et,
              getOrderAvailableToWithdrawByContract: en,
              queryValorContract: es,
            } = (0, l.Z)(),
            [ea, el] = (0, a.useState)(void 0),
            er = (0, a.useCallback)(() => {
              F &&
                Q().then((e) => {
                  console.log("--- allownace -----", e), R(e);
                });
            }, [Q, R, F]),
            ei = (0, a.useCallback)(() => {
              F &&
                G().then((e) => {
                  console.log("--- balance", e), m(e);
                });
            }, [F, G]),
            ec = (0, a.useCallback)(async () => {
              F && V(await X());
            }, [F]),
            eo = (0, a.useCallback)(() => {
              i().then((e) => {
                if ((U(e.total_stake), e.rows.length)) {
                  let t = e.rows.reduce(
                      (e, t) => (e += new (x())(t.usd_reward).toNumber()),
                      0
                    ),
                    n = e.rows[0],
                    s = new (x())(t)
                      .div(e.rows.length)
                      .div(n.total_staked_usd)
                      .mul(365)
                      .mul(100)
                      .toNumber();
                  D(
                    "".concat(
                      new (x())(s).todp(2, x().ROUND_DOWN).toString(),
                      "%"
                    )
                  );
                } else D(y);
              });
            }, []),
            ed = (0, a.useCallback)(() => {
              F &&
                Promise.all([
                  es("getUserVestingRequests", [F]),
                  p({ address: F }),
                ]).then((e) => {
                  let [t, n] = e;
                  if (!t || !n || !n.rows.length) {
                    $([]), J(0);
                    return;
                  }
                  let s = 0,
                    a = new Date().getTime(),
                    l = 15 * w.u3,
                    r = new Map();
                  for (let e of t) {
                    let t = Number(BigInt(e[0]).toString()),
                      n = new (x())(BigInt(e[2]).toString())
                        .mul(1e3)
                        .toNumber();
                    r.set(t, {
                      total_vest_amount: new (x())((0, C.dF)(e[1])).toNumber(),
                      unlockTime: n,
                      vest_start_time: n - 15 * w.u3,
                      vest_end_time: n + 75 * w.u3,
                    });
                  }
                  console.log("-- vestingIdmap", r);
                  let i = [];
                  n.rows.forEach((e) => {
                    let t = e.vest_request_id;
                    if (!r.has(t)) return;
                    r.delete(t);
                    let n = e.vest_start_time,
                      c = e.vest_end_time,
                      o = e.total_vest_amount,
                      d = 0,
                      u = j.i.Frozen,
                      m = 0;
                    a >= c
                      ? ((u = j.i.Success), (m = o))
                      : n + l < a && a < c
                      ? ((u = j.i.Processing),
                        (m =
                          ((d =
                            50 * (1 + (a - (n + 15 * w.u3)) / (75 * w.u3))) /
                            100) *
                          o))
                      : a <= n + l && ((u = j.i.Frozen), (m = 0)),
                      i.push({
                        vest_request_id: t,
                        vest_start_time: n,
                        vest_end_time: c,
                        total_vest_amount: o,
                        status: u,
                        claimableAmount: m,
                        percent: d,
                        unvestedAmount: o - m,
                      }),
                      (s += o);
                  }),
                    r.forEach((e, t) => {
                      let n = e.vest_start_time,
                        r = e.vest_end_time,
                        c = e.total_vest_amount,
                        o = 0,
                        d = j.i.Frozen,
                        u = 0;
                      a >= r
                        ? ((d = j.i.Success), (u = c))
                        : n + l < a && a < r
                        ? ((d = j.i.Processing),
                          (u =
                            ((o =
                              50 * (1 + (a - (n + 15 * w.u3)) / (75 * w.u3))) /
                              100) *
                            c))
                        : a <= n + l && ((d = j.i.Frozen), (u = 0)),
                        i.unshift({
                          vest_request_id: t,
                          vest_start_time: n,
                          vest_end_time: r,
                          total_vest_amount: c,
                          status: d,
                          claimableAmount: u,
                          percent: o,
                          unvestedAmount: c - u,
                        }),
                        (s += c);
                    }),
                    J(s),
                    $(i);
                });
            }, [F]),
            eu = (0, a.useCallback)(() => {
              F &&
                u(F).then((e) => {
                  let t = new (x())(0),
                    n = new (x())(0),
                    s = new Map();
                  e.chain_details
                    .filter((e) => {
                      let t = b.m0;
                      return (
                        (0, k.H0)() || t.push(...b.AH.map((e) => e.chain_id)),
                        t.includes(e.chain_id)
                      );
                    })
                    .forEach((e) => {
                      (t = new (x())(e.available_usdc).plus(t)),
                        (n = new (x())(e.pending_usdc).plus(n)),
                        s.set(e.chain_id, {
                          pending: e.pending_usdc,
                          available: e.available_usdc,
                        });
                    }),
                    el({
                      valor: e.redeeming_valor_amount,
                      availableTotal: t.toNumber(),
                      pendingTotal: n.toNumber(),
                      chainDetails: s,
                    });
                });
            }, [F]),
            em = (0, a.useCallback)(() => {
              F &&
                d().then((e) => {
                  e.next_settlement_date &&
                    (e.nextSettlementDateString = (function (e) {
                      if (!e) return "";
                      let [t, n] = (0, h.WU)(new g.e(e), "M/dd").split("/");
                      return "".concat(v[parseInt(t) - 1], " ").concat(n);
                    })(e.next_settlement_date)),
                    H(e);
                });
            }, [F]),
            ex = (0, a.useCallback)(() => {
              F &&
                c(F).then((e) => {
                  P(e);
                });
            }, [F, c]),
            ef = (0, a.useCallback)(() => {
              F &&
                o(F).then((e) => {
                  Z(e);
                });
            }, [F]),
            eh = (0, a.useCallback)(() => {
              console.log("-- update stake info by contract"),
                F &&
                  ee().then((e) => {
                    e &&
                      (I
                        ? P({
                            ...I,
                            total_staked_order: e.order,
                            total_staked_esorder: e.esOrder,
                          })
                        : P({
                            total_staked_order: e.order,
                            total_staked_balance: 0,
                            total_staked_esorder: e.esOrder,
                          }));
                  });
            }, [F, ee]),
            eg = (0, a.useCallback)(() => {
              et().then((e) => {
                if (!e) return;
                let { num: t, time: n } = e;
                Z({ total_unstake_order: t, unstaked_end_time: n });
              });
            }, [F, et]);
          (0, a.useCallback)(() => {
            en().then((e) => {});
          }, [F, en]);
          let ev = () => {
            ec(), ed(), eu(), em(), ex(), eo(), ef();
          };
          (0, a.useEffect)(() => {
            if (!O && F)
              return (
                console.log("-- inint stake data", F),
                ev(),
                () => {
                  console.log("-----33333"),
                    n.current && window.clearInterval(n.current);
                }
              );
          }, [F, O]),
            (0, a.useEffect)(
              () => (
                n.current && window.clearInterval(n.current),
                (n.current = window.setInterval(() => {
                  ec(), eu(), em(), eo();
                }, 3e3)),
                () => {
                  window.clearInterval(n.current);
                }
              ),
              []
            ),
            (0, a.useEffect)(() => {
              O || (console.log("-- query order balance"), er(), ei());
            }, [F, O, E]),
            (function (e) {
              var t;
              let n,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                l =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 300,
                r = (0, a.useRef)(),
                i = (0, a.useRef)(),
                c = (0, a.useCallback)(e, s);
              i.current = c;
              let o = (0, a.useCallback)(
                ((t = () => {
                  var e;
                  r.current =
                    null === (e = i.current) || void 0 === e
                      ? void 0
                      : e.call(i);
                }),
                () => {
                  n && window.clearTimeout(n),
                    (n = window.setTimeout(() => {
                      (n = null), t();
                    }, l));
                }),
                []
              );
              (0, a.useEffect)(o, s),
                (0, a.useEffect)(
                  () => () => {
                    r.current instanceof Function && r.current();
                  },
                  []
                );
            })(() => {
              K(!1);
            }, [F]);
          let ep = (0, a.useMemo)(
            () => ({
              allowance: S,
              getOrderAllowance: er,
              balance: r,
              getOrderBalance: ei,
              userValor: z,
              getUserValor: ec,
              stakeBalance: I,
              unstakeDetails: M,
              getStakeBalance: ex,
              getUnstakeDetail: ef,
              totalStake: q,
              stakeAPR: B,
              getStakeDetail: eo,
              redeemInfo: ea,
              getRedeemInfo: eu,
              poolInfo: T,
              getPoolInfo: em,
              updateStakeInfoByContract: eh,
              updateUserUnstakeInfoByContract: eg,
              vestingEsOrder: L,
              vestingEsOrderList: Y,
              getVestingEsOrder: ed,
            }),
            [
              S,
              er,
              r,
              ei,
              z,
              ec,
              I,
              M,
              ex,
              ef,
              q,
              B,
              eo,
              ea,
              eu,
              T,
              em,
              eh,
              eg,
              L,
              Y,
              ed,
            ]
          );
          return (0, s.jsx)(_.Provider, {
            value: ep,
            children: (0, s.jsx)(f.S, { loading: W, children: t }),
          });
        },
        R = () => (0, a.useContext)(_);
    },
    56187: function (e, t, n) {
      n.d(t, {
        q: function () {
          return p;
        },
        w: function () {
          return j;
        },
      });
      var s = n(6272),
        a = n(8627),
        l = n(74939),
        r = n(16723),
        i = n(38820),
        c = n(59580),
        o = n(79807);
      let d = (e) => {
        let { txHash: t } = e,
          n = "https://"
            .concat((0, c.H0)() ? "" : "testnet.", "layerzeroscan.com/tx/")
            .concat(t);
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col gap-[10px] items-center justify-center mt-[10px] leading-none",
          children: [
            (0, s.jsx)("div", {
              className: "text-white/80 text-base  font-['Articulat CF']",
              children: "Wait for confirmation",
            }),
            (0, s.jsxs)("button", {
              className:
                "flex text-sm text-[#B084E9] fill-[#B084E9] cursor-pointer",
              onClick: () => window.open(n),
              disabled: !1,
              children: [
                (0, s.jsx)("div", { children: "View transaction" }),
                (0, s.jsx)(o.Z, {}),
              ],
            }),
            (0, s.jsx)("div", {
              className: "h-[24px] flex items-center",
              children: (0, s.jsx)(r.Z, {}),
            }),
          ],
        });
      };
      function u(e) {
        let { open: t, onOpenChange: n, txHash: a, onSuccess: r } = e;
        return (0, s.jsx)(l.QH, {
          open: t,
          okText: "OK",
          onOpenChange: n,
          contentClassName: "w-[260px] md:w-[320px] border border-white/[.08] ",
          closable: !1,
          children: (0, s.jsxs)("div", {
            className: "flex flex-col items-center mt-[20px]",
            children: [
              (0, s.jsx)("img", {
                className: (0, i.cn)("w-[120px] h-[120px]"),
                src: "/orderly-logo.png",
              }),
              (0, s.jsx)(d, { txHash: a }),
            ],
          }),
        });
      }
      var m = n(34877),
        x = n(39250);
      let f = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return new Promise((t) => setTimeout(t, e));
      };
      async function h(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e3,
          s = (0, x.eI)(e);
        for (;;) {
          try {
            let { messages: e } = await s.getMessagesBySrcTxHash(t),
              n = e[0];
            if (e.length > 1)
              return Promise.reject(Error("More than one message"));
            if ((null == n ? void 0 : n.status) === "FAILED")
              return Promise.reject(
                Error("Message failed ".concat(n.dstTxError))
              );
            if ((null == n ? void 0 : n.status) === "DELIVERED") return n;
          } catch (e) {
            throw e;
          }
          console.log("-- poolinterval", n), await f(n);
        }
      }
      var g = n(56060);
      let v = (0, a.createContext)({ setTxHash: (e) => {} }),
        p = (e) => {
          let { children: t, onSuccess: n } = e,
            [l, r] = (0, a.useState)(""),
            [i, o] = (0, a.useState)(!1),
            { checkTransactionReceipt: d } = (0, g.h)(),
            x = (0, a.useMemo)(() => ({ setTxHash: r }), [r]);
          return (
            (0, a.useEffect)(() => {
              if (!l) {
                o(!1);
                return;
              }
              o(!0),
                d(l).then((e) => {
                  if (1 !== e.status)
                    return o(!1), (0, m.Z)(Error("transaction failed"));
                  h((0, c.H0)() ? "mainnet" : "testnet", l, 3e3).then((e) => {
                    if (
                      "DELIVERED" === e.status &&
                      (r(""), console.log("-- lz message", e), n)
                    ) {
                      n();
                      return;
                    }
                  });
                });
            }, [l]),
            (0, s.jsxs)(v.Provider, {
              value: x,
              children: [
                t,
                (0, s.jsx)(u, {
                  open: i,
                  onOpenChange: o,
                  txHash: l,
                  onSuccess: n,
                }),
              ],
            })
          );
        },
        j = () => (0, a.useContext)(v);
    },
    62587: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var s,
        a,
        l = n(56060),
        r = n(32288),
        i = n(84244),
        c = n(84696),
        o = n(80856),
        d = n(69381),
        u = n(6468),
        m = n.n(u),
        x = n(60866),
        f = n(26365),
        h = n(8627),
        g = n(87682),
        v = n(34082);
      function p() {
        let { currentChain: e, walletAdapter: t } = (0,
          v.useWalletAdapterContext)(),
          n = null == t ? void 0 : t.userAddress,
          [{ wallet: s }] = (0, f.Or)(),
          { call: a, sendTransaction: u } = (0, l.h)(),
          {
            orderTokenAddress: p,
            orderTokenAddressOnEthereum: j,
            contract: w,
            contractABI: C,
            orderlyChainRpcUrl: N,
            orderlyContract: b,
            orderlyContractABI: k,
          } = (0, r.Js)(),
          y = (0, h.useMemo)(() => {
            var t;
            return e
              ? [1, 11155111].includes(
                  parseInt(null !== (t = e.chain_id) && void 0 !== t ? t : "0")
                )
                ? j
                : p
              : void 0;
          }, [e, j, p]),
          _ = (0, h.useCallback)(async () => {
            if (n && y)
              return a(y, "allowance", [n, w], { abi: g })
                .then(
                  (e) => (
                    console.log("-- allownace ", e, (0, i.dF)(e)),
                    new (m())((0, i.dF)(e)).toNumber()
                  )
                )
                .catch((e) => {
                  console.error("get allowance error", e);
                });
          }, [n, a, y, w]),
          S = (0, h.useCallback)(async () => {
            if (n && y)
              return a(y, "balanceOf", [n], { abi: g })
                .then((e) => new (m())((0, i.dF)(e)).toNumber())
                .catch((e) => {
                  console.error("get balance error", e);
                });
          }, [n, a, y]),
          R = (0, h.useCallback)(() => {
            if (!n) return Promise.resolve(void 0);
            let e = c.y(N);
            return new o.CH(b, k, e).getStakingInfo
              .apply(null, [n])
              .then(
                (e) => (
                  console.log("-- get staking info[esorder and order]", e),
                  {
                    order: new (m())((0, i.dF)(e[0])).toNumber(),
                    esOrder: new (m())((0, i.dF)(e[1])).toNumber(),
                  }
                )
              )
              .catch((e) => {
                console.log("get staking info error", e);
              });
          }, [n, b, k, N]),
          E = (0, h.useCallback)(() => {
            if (!n) return Promise.resolve(void 0);
            let e = c.y(N);
            return new o.CH(b, k, e).userPendingUnstake
              .apply(null, [n])
              .then((e) => {
                if ((console.log("-- user pending unstake", e), !e)) return;
                let t = {
                  num: new (m())((0, i.dF)(e[0])).toNumber(),
                  time: 1e3 * parseInt(e[1]),
                };
                return console.log("-- info", t), t;
              })
              .catch((e) => {
                console.log("userPendingUnstake error", e);
              });
          }, [n, b, k, N]),
          O = (0, h.useCallback)(() => {
            if (!n) return Promise.resolve(void 0);
            let e = c.y(N);
            return new o.CH(b, k, e).getOrderAvailableToWithdraw
              .apply(null, [n])
              .then((e) => {
                if ((console.log("-- available to withdraw", e), e))
                  return new (m())((0, i.dF)(e)).toNumber();
              })
              .catch((e) => {
                console.log("getOrderAvailableToWithdraw error", e);
              });
          }, [n, b, k, N]),
          A = (0, h.useCallback)(
            async (e) => {
              let t = e ? (0, i.vz)(e.toString()) : d.Bz.toString();
              return n && y
                ? u(
                    y,
                    "approve",
                    { from: n, to: y, data: [w, t], value: (0, i.vz)("0") },
                    { abi: g }
                  )
                : Promise.reject(Error("no address"));
            },
            [n, y, w, u]
          ),
          F = (0, h.useCallback)(
            async (e, t) => {
              if (!n) return;
              let s = c.y(N);
              return new o.CH(b, k, s)[e]
                .apply(null, null != t ? t : [])
                .catch((t) => {
                  console.log("get ".concat(e, " data error:"), t);
                });
            },
            [n, b, k, N]
          ),
          q = (0, h.useCallback)(
            async () =>
              F("getUserValor", [n]).then((e) => {
                if (e)
                  return Promise.resolve(new (m())((0, i.dF)(e)).toNumber());
              }),
            [F, n]
          ),
          U = (e, t) =>
            a(w, "quoteStakeOrder", [e, n], { abi: C })
              .then((e) => (console.log("res", e), e))
              .catch((e) => {
                throw (console.log("lz fee error", e), Error(e));
              }),
          B = (e, t) =>
            a(w, "quoteSendUserRequest", [e, n, t], { abi: C })
              .then((e) => (console.log("res", e), e))
              .catch((e) => {
                throw (console.log("lz fee error", e), Error(e));
              }),
          D = async (e, t, s) => {
            let a = s ? BigInt(e) : (0, i.vz)(e.toString());
            if (!n) return Promise.reject(Error("no address"));
            let l = await B(a, t);
            return u(
              w,
              "sendUserRequest",
              { from: n, to: w, data: [a, t], value: (0, x.t2)(l) },
              { abi: C }
            );
          };
        return {
          approveOrderRequest: A,
          queryOrderAllowance: _,
          queryOrderBalance: S,
          queryUserValor: q,
          queryValorContract: F,
          stakeOrderRequest: async (e) => {
            let t = (0, i.vz)(e.toString());
            if (!n) return Promise.reject(Error("no address"));
            let s = await U(t, !1);
            return u(
              w,
              "stakeOrder",
              { from: n, to: w, data: [t], value: (0, x.t2)(s) },
              { abi: C }
            );
          },
          unstakeOrderRequest: async (e) => D(e, 2),
          redeemRequest: async (e) => D(e, 9),
          cancelUnstakeRequest: async (e) => D(e, 3),
          claimOrderRequest: async (e) => D(e, 4),
          claimUSDCRequest: async (e) => D(e, 10),
          getStakingInfoByContract: R,
          getUserPendingUnstakeByContract: E,
          getOrderAvailableToWithdrawByContract: O,
          queryContract: (0, h.useCallback)(
            async (e, t) => {
              if (!n) return;
              let s = c.y(N);
              return new o.CH(b, k, s)[e]
                .apply(null, null != t ? t : [])
                .then((t) => (console.log("get ".concat(e, " data:"), t), t))
                .catch((t) => {
                  console.log("get ".concat(e, " data error:"), t);
                });
            },
            [n, b, k, N]
          ),
          cancelVestingRequest: async (e) => D(e, 6, !0),
          esOrderUnstakeAndVestRequest: async (e) => D(e, 5),
          claimVestingRequest: async (e) => D(e, 8, !0),
        };
      }
      ((s = a || (a = {}))[(s.ClaimReward = 0)] = "ClaimReward"),
        (s[(s.Stake = 1)] = "Stake"),
        (s[(s.CreateOrderUnstakeRequest = 2)] = "CreateOrderUnstakeRequest"),
        (s[(s.CancelOrderUnstakeRequest = 3)] = "CancelOrderUnstakeRequest"),
        (s[(s.WithdrawOrder = 4)] = "WithdrawOrder"),
        (s[(s.EsOrderUnstakeAndVest = 5)] = "EsOrderUnstakeAndVest"),
        (s[(s.CancelVestingRequest = 6)] = "CancelVestingRequest"),
        (s[(s.CancelAllVestingRequests = 7)] = "CancelAllVestingRequests"),
        (s[(s.ClaimVestingRequest = 8)] = "ClaimVestingRequest"),
        (s[(s.RedeemValor = 9)] = "RedeemValor"),
        (s[(s.ClaimUsdcRevenue = 10)] = "ClaimUsdcRevenue"),
        (s[(s.ClaimRewardBackward = 11)] = "ClaimRewardBackward"),
        (s[(s.WithdrawOrderBackward = 12)] = "WithdrawOrderBackward"),
        (s[(s.ClaimVestingRequestBackward = 13)] =
          "ClaimVestingRequestBackward"),
        (s[(s.ClaimUsdcRevenueBackward = 14)] = "ClaimUsdcRevenueBackward");
    },
    2523: function (e, t, n) {
      var s = n(6272),
        a = n(38820);
      let l = (e) => {
        let { className: t, children: n } = e;
        return (0, s.jsx)("div", {
          className: (0, a.cn)(
            "w-full border border-solid border-white/[.06] rounded-[20px] md:rounded-[12px] p-5 md:p-8 bg-[#170B29] mb-[20px] flex flex-col gap-5",
            t
          ),
          children: n,
        });
      };
      (l.Title = (e) => {
        let { title: t, rightNode: n } = e;
        return (0, s.jsxs)("div", {
          className: "flex items-center justify-between",
          children: [
            (0, s.jsx)("div", {
              className: "text-base lg:text-lg w-full",
              children: t,
            }),
            n && (0, s.jsx)("div", { children: n }),
          ],
        });
      }),
        (l.Content = (e) => {
          let { className: t, children: n } = e;
          return (0, s.jsx)("div", {
            className: (0, a.cn)("flex flex-col", t),
            children: n,
          });
        }),
        (t.Z = l);
    },
    82179: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = n(6272),
        a = n(38820);
      n(8627);
      var l = (e) =>
          (0, s.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("mask", {
                id: "mask0_1785_11168",
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "16",
                height: "16",
                children: (0, s.jsx)("rect", {
                  width: "16",
                  height: "16",
                  fill: "#D9D9D9",
                }),
              }),
              (0, s.jsx)("g", {
                mask: "url(#mask0_1785_11168)",
                children: (0, s.jsx)("path", {
                  d: "M7.9966 11.2C8.1656 11.2 8.30843 11.1428 8.4251 11.0285C8.54176 10.9142 8.6001 10.7725 8.6001 10.6035C8.6001 10.4345 8.54293 10.2917 8.4286 10.175C8.31426 10.0583 8.1726 10 8.0036 10C7.8346 10 7.69176 10.0572 7.5751 10.1715C7.45843 10.2858 7.4001 10.4275 7.4001 10.5965C7.4001 10.7655 7.45726 10.9083 7.5716 11.025C7.68593 11.1417 7.8276 11.2 7.9966 11.2ZM7.4001 8.80001H8.6001V4.80001H7.4001V8.80001ZM8.00476 14.4C7.12388 14.4 6.29454 14.2333 5.51676 13.9C4.73899 13.5667 4.05843 13.1083 3.4751 12.525C2.89176 11.9417 2.43343 11.2613 2.1001 10.484C1.76676 9.70667 1.6001 8.87612 1.6001 7.99234C1.6001 7.10856 1.76676 6.28056 2.1001 5.50834C2.43343 4.73612 2.89176 4.05834 3.4751 3.47501C4.05843 2.89167 4.73876 2.43334 5.5161 2.10001C6.29343 1.76667 7.12399 1.60001 8.00776 1.60001C8.89154 1.60001 9.71954 1.76667 10.4918 2.10001C11.264 2.43334 11.9418 2.89167 12.5251 3.47501C13.1084 4.05834 13.5668 4.73734 13.9001 5.51201C14.2334 6.28678 14.4001 7.11456 14.4001 7.99534C14.4001 8.87623 14.2334 9.70556 13.9001 10.4833C13.5668 11.2611 13.1084 11.9417 12.5251 12.525C11.9418 13.1083 11.2628 13.5667 10.4881 13.9C9.71332 14.2333 8.88554 14.4 8.00476 14.4ZM8.0001 13.2C9.44454 13.2 10.6723 12.6945 11.6834 11.6833C12.6945 10.6722 13.2001 9.44445 13.2001 8.00001C13.2001 6.55556 12.6945 5.32778 11.6834 4.31667C10.6723 3.30556 9.44454 2.80001 8.0001 2.80001C6.55565 2.80001 5.32788 3.30556 4.31676 4.31667C3.30565 5.32778 2.8001 6.55556 2.8001 8.00001C2.8001 9.44445 3.30565 10.6722 4.31676 11.6833C5.32788 12.6945 6.55565 13.2 8.0001 13.2Z",
                  fill: "#D95B81",
                }),
              }),
            ],
          }),
        r = n(62823),
        i = n(26566),
        c = n(6468),
        o = n.n(c);
      function d(e) {
        let {
          balance: t,
          value: n,
          decimal: c = 8,
          setValue: d,
          valueValidStatus: u,
          tokenInfo: m,
          className: x,
          isShowTokenInfo: f = !0,
          isShowErrorTip: h = !0,
        } = e;
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className: (0, a.cn)(
                "bg-[#221733] p-5 rounded-xl flex flex-col gap-1 border border-transparent",
                x,
                h && u === r.A.insufficientBalance && "border-[#D95B81]"
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-start gap-1",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex-1",
                      children: (0, s.jsx)(i.h3, {
                        className: (0, a.cn)(
                          "bg-transparent outline-0 text-base md:text-[22px] placeholder-primary-50 w-full font-manrope tabular-nums",
                          !h &&
                            u === r.A.insufficientBalance &&
                            "text-[#D95B81]"
                        ),
                        value: n,
                        onValueChange: (e) => {
                          d(e.floatValue ? e.floatValue.toString() : "");
                        },
                        decimalScale: c,
                        placeholder: "0",
                        thousandSeparator: !0,
                      }),
                    }),
                    f
                      ? (0, s.jsxs)("div", {
                          className: "flex items-center gap-1",
                          children: [
                            (0, s.jsx)("img", {
                              src: m.tokenImage,
                              alt: "order",
                              className: "h-4 w-4 md:h-5 md:w-5",
                            }),
                            (0, s.jsx)("div", {
                              className: "text-sm md:text-base ",
                              children: m.tokenName,
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center justify-start gap-1 text-[11px]  md:text-xs ",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "text-primary-50",
                      children: [
                        "Balance\xa0",
                        (0, s.jsx)("span", {
                          className: "font-manrope",
                          children: (0, a.uf)(t, { decimal: c }),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "text-[#BC87FF] cursor-pointer",
                      onClick: () => {
                        d(new (o())(null != t ? t : "0").todp(c, 1).toString());
                      },
                      children: "Max",
                    }),
                  ],
                }),
              ],
            }),
            h
              ? u === r.A.insufficientBalance &&
                (0, s.jsxs)("div", {
                  className:
                    "flex justify-start items-center gap-1 text-[#D95B81] text-[13px] mt-2 px-2 py-1 bg-[rgba(217,91,129,0.1)] rounded ",
                  children: [(0, s.jsx)(l, {}), "Insufficient balance"],
                })
              : null,
          ],
        });
      }
    },
    6347: function (e, t, n) {
      n.d(t, {
        i: function () {
          return a;
        },
        Z: function () {
          return S;
        },
      });
      var s,
        a,
        l = n(6272),
        r = n(8627),
        i = n(38820),
        c = n(19863),
        o = n(66402),
        d = n(98035),
        u = n(74939),
        m = n(42020),
        x = n(6468),
        f = n.n(x),
        h = n(62587),
        g = n(34877),
        v = n(56187);
      function p(e) {
        let { open: t, setOpen: n, onOk: s, loading: a, unvestedAmount: r } = e;
        return (0, l.jsx)(u.Vq, {
          open: t,
          onOpenChange: n,
          children: (0, l.jsxs)(u.cZ, {
            className: "",
            children: [
              (0, l.jsx)(u.fK, {
                children: (0, l.jsx)(u.$N, { children: "Confirm claiming" }),
              }),
              (0, l.jsx)(u.a7, {
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
                          children: "You currently have ",
                        }),
                        (0, l.jsxs)("span", {
                          className:
                            "text-white/95 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children: [
                            (0, i.uf)(r, { decimal: 2 }),
                            " unvested esDRAI",
                          ],
                        }),
                        (0, l.jsx)("span", {
                          className:
                            "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children:
                            " in this vesting. Claiming at this time will result in the esDRAI being burned.",
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                      children: "Are you sure you want to continue to claim?",
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(u.cN, {
                children: (0, l.jsxs)("div", {
                  className:
                    "w-full justify-start items-start gap-2.5 inline-flex",
                  children: [
                    (0, l.jsx)(c.z, {
                      variant: "outline",
                      onClick: () => n(!1),
                      className: "flex-1",
                      children: "Cancel",
                    }),
                    (0, l.jsx)(c.z, {
                      variant: "secondary",
                      className: "flex-1",
                      onClick: s,
                      loading: a,
                      disabled: a,
                      children: "Claim",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function j(e) {
        let {
            open: t,
            setOpen: n,
            status: s,
            unvestedAmount: o,
            total: d,
            vestingId: x,
          } = e,
          [j, w] = (0, r.useState)(!1),
          [C, N] = (0, r.useState)(!1),
          { claimVestingRequest: b } = (0, h.Z)(),
          { setTxHash: k } = (0, v.w)(),
          y = (0, r.useMemo)(
            () =>
              new (f())(null != d ? d : 0).minus(null != o ? o : 0).toNumber(),
            [o, d]
          ),
          _ = async () => {
            try {
              N(!0);
              let e = await b(x);
              console.log("---claimVestingRequest res", e),
                k(e.hash),
                w(!1),
                n(!1);
            } catch (e) {
              (0, g.Z)(e);
            } finally {
              N(!1);
            }
          };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(u.Vq, {
              open: t,
              onOpenChange: n,
              children: (0, l.jsxs)(u.cZ, {
                className: "",
                children: [
                  (0, l.jsx)(u.fK, {
                    children: (0, l.jsx)(u.$N, {
                      children: (0, l.jsx)("span", { children: "Claim DRAI" }),
                    }),
                  }),
                  (0, l.jsx)(u.a7, {
                    children: (0, l.jsxs)("div", {
                      className:
                        "rounded-lg flex-col justify-center items-start gap-4 flex",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "self-stretch justify-start items-center gap-0.5 inline-flex",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "grow shrink basis-0 text-white/50 text-base font-medium font-['Articulat CF'] leading-tight",
                              children: "Claiming",
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "text-white text-base font-medium font-['Manrope'] leading-tight",
                              children: (0, i.uf)(y, { decimal: 2 }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "text-white/50 text-base font-medium font-['Manrope'] leading-tight",
                              children: "DRAI",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "self-stretch justify-start items-center gap-1 inline-flex",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "grow shrink basis-0 text-white/50 text-base font-medium font-['Articulat CF'] leading-tight",
                              children: "Claim network",
                            }),
                            (0, l.jsx)("div", {
                              className: "justify-start items-center flex",
                              onFocusCapture: (e) => {
                                e.stopPropagation();
                              },
                              children: (0, l.jsx)(m.Z, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)(u.cN, {
                    children: (0, l.jsxs)("div", {
                      className:
                        "w-full justify-start items-start gap-4 flex flex-col",
                      children: [
                        s === a.Processing
                          ? (0, l.jsxs)("div", {
                              className:
                                "w-full text-[#f6ae1d] text-sm font-medium font-['Articulat CF'] leading-[21px]",
                              children: [
                                "Please note that you can only claim once. Claiming now will end the vesting immediately and burn the unvested portion (",
                                (0, i.uf)(o, { decimal: 2 }),
                                " esDRAI).",
                              ],
                            })
                          : null,
                        s === a.Processing
                          ? (0, l.jsx)(c.z, {
                              variant: "secondary",
                              className: "w-full",
                              onClick: () => w(!0),
                              children: "End vesting and claim",
                            })
                          : (0, l.jsx)(c.z, {
                              variant: "secondary",
                              className: "w-full",
                              onClick: _,
                              disabled: C,
                              loading: C,
                              children: "Claim",
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsx)(p, {
              open: j,
              setOpen: w,
              loading: C,
              onOk: _,
              unvestedAmount: o,
            }),
          ],
        });
      }
      function w(e) {
        let { open: t, setOpen: n, total: s, vesting_id: a } = e,
          [o, d] = (0, r.useState)(!1),
          { setTxHash: m } = (0, v.w)(),
          { cancelVestingRequest: x } = (0, h.Z)(),
          f = async () => {
            try {
              d(!0);
              let e = await x(Number(a));
              m(e.hash), n(!1);
            } catch (e) {
              console.log("e", e), (0, g.Z)(e);
            } finally {
              d(!1);
            }
          };
        return (0, l.jsx)(u.Vq, {
          open: t,
          onOpenChange: n,
          children: (0, l.jsxs)(u.cZ, {
            className: "",
            children: [
              (0, l.jsx)(u.fK, {
                children: (0, l.jsx)(u.$N, { children: "Cancel vesting" }),
              }),
              (0, l.jsx)(u.a7, {
                children: (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("span", {
                      className:
                        "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                      children:
                        "Are you sure you want to cancel the vesting process ",
                    }),
                    (0, l.jsx)("span", {
                      className:
                        "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                      children: "of ",
                    }),
                    (0, l.jsxs)("div", {
                      className: "inline-block",
                      children: [
                        (0, l.jsxs)("span", {
                          className:
                            "text-white/95 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children: [(0, i.uf)(s, { decimal: 2 }), " esDRAI"],
                        }),
                        (0, l.jsx)("span", {
                          className:
                            "text-white/50 text-sm font-medium font-['Articulat CF'] leading-normal",
                          children: "?",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(u.cN, {
                children: (0, l.jsxs)("div", {
                  className:
                    "w-full justify-start items-start gap-2.5 inline-flex",
                  children: [
                    (0, l.jsx)(c.z, {
                      variant: "outline",
                      onClick: () => n(!1),
                      className: "flex-1",
                      children: "No",
                    }),
                    (0, l.jsx)(c.z, {
                      variant: "secondary",
                      className: "flex-1",
                      onClick: f,
                      disabled: o,
                      loading: o,
                      children: "Yes",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var C = n(9064);
      function N(e) {
        return (0, l.jsx)(u.QH, {
          open: e.open,
          onOpenChange: e.setOpen,
          children: (0, l.jsxs)("div", {
            className: "flex flex-col items-center mt-[20px]",
            children: [
              (0, l.jsx)("img", {
                className: (0, i.cn)("w-[120px] h-[120px]"),
                src: "/orderly-logo.png",
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex flex-col gap-[10px] items-center justify-center mt-[10px] leading-none",
                children: [
                  (0, l.jsx)("div", {
                    className: "text-white/80 text-base  font-['Articulat CF']",
                    children: "Claimed successfully",
                  }),
                  (0, l.jsxs)(c.z, {
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
                      (0, l.jsx)("div", { children: "Stake DRAI" }),
                      (0, l.jsx)(C.Z, {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var b = n(25491);
      function k(e) {
        let { data: t } = e,
          [n, s] = (0, r.useState)(!1),
          [u, m] = (0, r.useState)(!1),
          [x, f] = (0, r.useState)(!1),
          { status: h } = t,
          { updateStakeInfoByContract: g, getVestingEsOrder: p } = (0, b.B)(),
          C = (0, r.useMemo)(() => {
            let e = t.vest_start_time + 15 * i.u3;
            return (0, i.p6)(e);
          }, [t.vest_start_time]);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)("div", {
              className: "justify-start items-center gap-2 flex max-md:w-full",
              children: [
                h === a.Success
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(c.z, {
                          variant: "third",
                          className:
                            "max-md:w-full opacity-0 pointer-events-none max-md:hidden",
                          onClick: () => s(!0),
                          children: "Cancel",
                        }),
                        (0, l.jsx)(c.z, {
                          variant: "outline",
                          className: "max-md:w-full",
                          onClick: () => m(!0),
                          children: "Claim",
                        }),
                      ],
                    })
                  : null,
                h === a.Processing
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(c.z, {
                          variant: "third",
                          className: "max-md:w-full",
                          onClick: () => s(!0),
                          children: "Cancel",
                        }),
                        (0, l.jsx)(c.z, {
                          variant: "outline",
                          className: "max-md:w-full",
                          onClick: () => m(!0),
                          children: "Claim",
                        }),
                      ],
                    })
                  : null,
                h === a.Frozen
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(c.z, {
                          variant: "third",
                          className: "max-md:w-1/2",
                          onClick: () => s(!0),
                          children: "Cancel",
                        }),
                        (0, l.jsx)("div", {
                          className: "max-md:w-1/2",
                          children: (0, l.jsx)(d.default, {
                            content:
                              "This vesting is still in the freeze period. You will be able to claim it starting from ".concat(
                                C,
                                "."
                              ),
                            children: (0, l.jsxs)("div", {
                              className: "relative",
                              children: [
                                (0, l.jsx)(c.z, {
                                  className: "max-md:w-full",
                                  variant: "outline",
                                  disabled: h === a.Frozen,
                                  children: "Claim",
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "absolute top-0 left-0 right-0 bottom-0",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, l.jsx)(v.q, {
              onSuccess: () => {
                f(!0),
                  (0, i.LE)(() => {
                    p();
                  });
              },
              children: (0, l.jsx)(j, {
                open: u,
                setOpen: m,
                status: h,
                unvestedAmount: t.unvestedAmount,
                total: t.total_vest_amount,
                vestingId: t.vest_request_id,
              }),
            }),
            (0, l.jsx)(v.q, {
              onSuccess: () => {
                o.toast.success("Cancelled vesting successfully."),
                  (0, i.LE)(() => {
                    p(), g();
                  });
              },
              children: (0, l.jsx)(w, {
                open: n,
                setOpen: s,
                total: t.total_vest_amount,
                vesting_id: t.vest_request_id,
              }),
            }),
            (0, l.jsx)(N, { open: x, setOpen: f }),
          ],
        });
      }
      ((s = a || (a = {})).Processing = "isProcessing"),
        (s.Success = "isSuccess"),
        (s.Frozen = "isFroze");
      let y = (e) => {
          let { content: t, className: n, status: s } = e,
            a = "from-[#1deef6] to-[#86e9ed]";
          return (
            "isSuccess" === s && (a = "from-[#1df6b5] to-[#86ed92]"),
            "isProcessing" === s && (a = "from-[#1deef6] to-[#86e9ed]"),
            "isFroze" === s && (a = "from-[#f6ad1d] to-[#edca86]"),
            (0, l.jsx)("div", {
              className: (0, i.cn)(
                "px-2 py-0.5 bg-gradient-to-t rounded-tl-lg rounded-br-lg justify-start items-center gap-2.5 inline-flex",
                a,
                n
              ),
              children: (0, l.jsx)("div", {
                className:
                  "text-[#170b29] text-[11px] font-medium font-['Manrope'] leading-[13.20px]",
                children: t,
              }),
            })
          );
        },
        _ = (e) => {
          let { label: t, content: n, classname: s } = e;
          return (0, l.jsxs)("div", {
            className: (0, i.cn)(
              "flex-col justify-center items-start gap-1 inline-flex",
              s
            ),
            children: [
              (0, l.jsx)("div", {
                className:
                  "text-white/50 text-xs font-medium font-['Articulat CF'] leading-[14.40px]",
                children: t,
              }),
              (0, l.jsx)("div", {
                className: "justify-start items-center gap-1 inline-flex",
                children: n,
              }),
            ],
          });
        };
      function S(e) {
        let {
            status: t,
            percent: n,
            total_vest_amount: s,
            unvestedAmount: a,
            claimableAmount: r,
            vest_start_time: c,
            vest_end_time: o,
          } = e,
          d = {
            isProcessing: "".concat(parseInt(String(n)), "%"),
            isSuccess: "100%",
            isFroze: "Freeze",
          }[t];
        return (0, l.jsxs)("div", {
          className:
            "relative px-5 pt-7 pb-5 bg-[#1e122f] rounded-lg flex-col justify-center items-start gap-5 inline-flex",
          children: [
            (0, l.jsx)(y, {
              className: "absolute top-0 left-0",
              content: d,
              status: t,
            }),
            (0, l.jsxs)("div", {
              className:
                "self-stretch justify-start items-start gap-5 flex flex-col md:flex-row w-full lg:items-center",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 flex-1 w-full",
                  children: [
                    (0, l.jsx)(_, {
                      label: "Start time",
                      content: (0, i.p6)(c),
                      classname: "order-1 md:order-4 lg:order-1",
                    }),
                    (0, l.jsx)(_, {
                      label: " Fully vested time",
                      content: (0, i.p6)(o),
                      classname: "order-2 md:order-5 lg:order-2",
                    }),
                    (0, l.jsx)(_, {
                      label: "Original amount",
                      classname: "order-3 md:-order-1 lg:order-3",
                      content: (0, l.jsxs)("div", {
                        className:
                          "justify-start items-center gap-1 inline-flex",
                        children: [
                          (0, l.jsx)("img", {
                            className: "w-4 h-4 md:w-5 md:h-5",
                            src: "/images/esDRAI.png",
                            alt: "order",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-white text-sm font-medium font-['Manrope'] leading-[16.80px]",
                            children: (0, i.uf)(s, { decimal: 2 }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(_, {
                      label: "Unvested",
                      classname: "order-4 md:-order-1 lg:order-4",
                      content: (0, l.jsxs)("div", {
                        className:
                          "justify-start items-center gap-1 inline-flex",
                        children: [
                          (0, l.jsx)("img", {
                            className: "w-4 h-4 md:w-5 md:h-5",
                            src: "/images/esDRAI.png",
                            alt: "order",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-white text-sm font-medium font-['Manrope'] leading-[16.80px]",
                            children: (0, i.uf)(a, { decimal: 2 }),
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)(_, {
                      label: "Claimable now",
                      classname: "order-5 md:-order-1 lg:order-5",
                      content: (0, l.jsxs)("div", {
                        className:
                          "justify-start items-center gap-1 inline-flex",
                        children: [
                          (0, l.jsx)("img", {
                            className: "w-4 h-4 md:w-5 md:h-5",
                            src: "/images/DRAI.png",
                            alt: "order",
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-white text-sm font-medium font-['Manrope'] leading-[16.80px]",
                            children: (0, i.uf)(r, { decimal: 2 }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(k, { data: e }),
              ],
            }),
          ],
        });
      }
    },
    21837: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = n(6272),
        a = n(34082);
      function l(e) {
        var t;
        let { onConnect: n } = (0, a.useWalletAdapterContext)();
        return (0, s.jsx)("div", {
          className: "flex flex-col items-center justify-center gap-3 md:gap-5",
          children: (0, s.jsx)("div", {
            className: "text-primary-54 text-xs md:text-sm text-center",
            children:
              null !== (t = e.text) && void 0 !== t
                ? t
                : "Staking on Solana is currently not supported, please connect to a supported EVM network.",
          }),
        });
      }
      n(70329);
    },
    79434: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var s,
        a,
        l = n(6272);
      n(8627);
      var r = n(38820),
        i = n(2766),
        c = n(25090);
      ((s = a || (a = {})).Connect = "connect"),
        (s.WrongNetwork = "wrongNetwork"),
        (t.Z = (e) =>
          (0, l.jsxs)("div", {
            className: (0, r.cn)(
              "flex flex-col justify-center items-center",
              "h-[324px] md:h-[264px] lg:h-full",
              e.className
            ),
            children: [
              "connect" === e.type
                ? (0, l.jsx)(i.Z, {
                    className: "px-[24px] md:px-[24px] h-[32px] md:h-[40px]",
                    children: "Connect",
                  })
                : (0, l.jsx)(c.Z, {
                    className:
                      "px-[24px] md:px-[24px] text-sm h-[32px] md:h-[40px]",
                  }),
              (0, l.jsx)("div", {
                className:
                  "text-xs md:text-sm text-primary-54 mt-3 md:mt-5 text-center",
                children: e.content,
              }),
            ],
          }));
    },
  },
]);
