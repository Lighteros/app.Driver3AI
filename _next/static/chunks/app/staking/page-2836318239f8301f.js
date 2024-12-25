(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8555],
  {
    45571: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 59796));
    },
    17954: function (e) {
      "use strict";
      var t, s, a, n, i, l, r, c, d, x, o, m, u, h, f, p, j, g, v, y, N, w;
      e.exports =
        ((t = "millisecond"),
        (s = "second"),
        (a = "minute"),
        (n = "hour"),
        (i = "week"),
        (l = "month"),
        (r = "quarter"),
        (c = "year"),
        (d = "date"),
        (x = "Invalid Date"),
        (o =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/),
        (m =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g),
        (u = function (e, t, s) {
          var a = String(e);
          return !a || a.length >= t
            ? e
            : "" + Array(t + 1 - a.length).join(s) + e;
        }),
        ((f = {})[(h = "en")] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              s = e % 100;
            return "[" + e + (t[(s - 20) % 10] || t[s] || "th") + "]";
          },
        }),
        (p = "$isDayjsObject"),
        (j = function (e) {
          return e instanceof N || !(!e || !e[p]);
        }),
        (g = function e(t, s, a) {
          var n;
          if (!t) return h;
          if ("string" == typeof t) {
            var i = t.toLowerCase();
            f[i] && (n = i), s && ((f[i] = s), (n = i));
            var l = t.split("-");
            if (!n && l.length > 1) return e(l[0]);
          } else {
            var r = t.name;
            (f[r] = t), (n = r);
          }
          return !a && n && (h = n), n || (!a && h);
        }),
        (v = function (e, t) {
          if (j(e)) return e.clone();
          var s = "object" == typeof t ? t : {};
          return (s.date = e), (s.args = arguments), new N(s);
        }),
        ((y = {
          s: u,
          z: function (e) {
            var t = -e.utcOffset(),
              s = Math.abs(t);
            return (
              (t <= 0 ? "+" : "-") +
              u(Math.floor(s / 60), 2, "0") +
              ":" +
              u(s % 60, 2, "0")
            );
          },
          m: function e(t, s) {
            if (t.date() < s.date()) return -e(s, t);
            var a = 12 * (s.year() - t.year()) + (s.month() - t.month()),
              n = t.clone().add(a, l),
              i = s - n < 0,
              r = t.clone().add(a + (i ? -1 : 1), l);
            return +(-(a + (s - n) / (i ? n - r : r - n)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (e) {
            return (
              {
                M: l,
                y: c,
                w: i,
                d: "day",
                D: d,
                h: n,
                m: a,
                s: s,
                ms: t,
                Q: r,
              }[e] ||
              String(e || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        }).l = g),
        (y.i = j),
        (y.w = function (e, t) {
          return v(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
        }),
        (w = (N = (function () {
          function e(e) {
            (this.$L = g(e.locale, null, !0)),
              this.parse(e),
              (this.$x = this.$x || e.x || {}),
              (this[p] = !0);
          }
          var u = e.prototype;
          return (
            (u.parse = function (e) {
              (this.$d = (function (e) {
                var t = e.date,
                  s = e.utc;
                if (null === t) return new Date(NaN);
                if (y.u(t)) return new Date();
                if (t instanceof Date) return new Date(t);
                if ("string" == typeof t && !/Z$/i.test(t)) {
                  var a = t.match(o);
                  if (a) {
                    var n = a[2] - 1 || 0,
                      i = (a[7] || "0").substring(0, 3);
                    return s
                      ? new Date(
                          Date.UTC(
                            a[1],
                            n,
                            a[3] || 1,
                            a[4] || 0,
                            a[5] || 0,
                            a[6] || 0,
                            i
                          )
                        )
                      : new Date(
                          a[1],
                          n,
                          a[3] || 1,
                          a[4] || 0,
                          a[5] || 0,
                          a[6] || 0,
                          i
                        );
                  }
                }
                return new Date(t);
              })(e)),
                this.init();
            }),
            (u.init = function () {
              var e = this.$d;
              (this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds());
            }),
            (u.$utils = function () {
              return y;
            }),
            (u.isValid = function () {
              return this.$d.toString() !== x;
            }),
            (u.isSame = function (e, t) {
              var s = v(e);
              return this.startOf(t) <= s && s <= this.endOf(t);
            }),
            (u.isAfter = function (e, t) {
              return v(e) < this.startOf(t);
            }),
            (u.isBefore = function (e, t) {
              return this.endOf(t) < v(e);
            }),
            (u.$g = function (e, t, s) {
              return y.u(e) ? this[t] : this.set(s, e);
            }),
            (u.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (u.valueOf = function () {
              return this.$d.getTime();
            }),
            (u.startOf = function (e, t) {
              var r = this,
                x = !!y.u(t) || t,
                o = y.p(e),
                m = function (e, t) {
                  var s = y.w(
                    r.$u ? Date.UTC(r.$y, t, e) : new Date(r.$y, t, e),
                    r
                  );
                  return x ? s : s.endOf("day");
                },
                u = function (e, t) {
                  return y.w(
                    r
                      .toDate()
                      [e].apply(
                        r.toDate("s"),
                        (x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                      ),
                    r
                  );
                },
                h = this.$W,
                f = this.$M,
                p = this.$D,
                j = "set" + (this.$u ? "UTC" : "");
              switch (o) {
                case c:
                  return x ? m(1, 0) : m(31, 11);
                case l:
                  return x ? m(1, f) : m(0, f + 1);
                case i:
                  var g = this.$locale().weekStart || 0,
                    v = (h < g ? h + 7 : h) - g;
                  return m(x ? p - v : p + (6 - v), f);
                case "day":
                case d:
                  return u(j + "Hours", 0);
                case n:
                  return u(j + "Minutes", 1);
                case a:
                  return u(j + "Seconds", 2);
                case s:
                  return u(j + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (u.endOf = function (e) {
              return this.startOf(e, !1);
            }),
            (u.$set = function (e, i) {
              var r,
                x = y.p(e),
                o = "set" + (this.$u ? "UTC" : ""),
                m = (((r = {}).day = o + "Date"),
                (r[d] = o + "Date"),
                (r[l] = o + "Month"),
                (r[c] = o + "FullYear"),
                (r[n] = o + "Hours"),
                (r[a] = o + "Minutes"),
                (r[s] = o + "Seconds"),
                (r[t] = o + "Milliseconds"),
                r)[x],
                u = "day" === x ? this.$D + (i - this.$W) : i;
              if (x === l || x === c) {
                var h = this.clone().set(d, 1);
                h.$d[m](u),
                  h.init(),
                  (this.$d = h.set(d, Math.min(this.$D, h.daysInMonth())).$d);
              } else m && this.$d[m](u);
              return this.init(), this;
            }),
            (u.set = function (e, t) {
              return this.clone().$set(e, t);
            }),
            (u.get = function (e) {
              return this[y.p(e)]();
            }),
            (u.add = function (e, t) {
              var r,
                d = this;
              e = Number(e);
              var x = y.p(t),
                o = function (t) {
                  var s = v(d);
                  return y.w(s.date(s.date() + Math.round(t * e)), d);
                };
              if (x === l) return this.set(l, this.$M + e);
              if (x === c) return this.set(c, this.$y + e);
              if ("day" === x) return o(1);
              if (x === i) return o(7);
              var m =
                  (((r = {})[a] = 6e4), (r[n] = 36e5), (r[s] = 1e3), r)[x] || 1,
                u = this.$d.getTime() + e * m;
              return y.w(u, this);
            }),
            (u.subtract = function (e, t) {
              return this.add(-1 * e, t);
            }),
            (u.format = function (e) {
              var t = this,
                s = this.$locale();
              if (!this.isValid()) return s.invalidDate || x;
              var a = e || "YYYY-MM-DDTHH:mm:ssZ",
                n = y.z(this),
                i = this.$H,
                l = this.$m,
                r = this.$M,
                c = s.weekdays,
                d = s.months,
                o = s.meridiem,
                u = function (e, s, n, i) {
                  return (e && (e[s] || e(t, a))) || n[s].slice(0, i);
                },
                h = function (e) {
                  return y.s(i % 12 || 12, e, "0");
                },
                f =
                  o ||
                  function (e, t, s) {
                    var a = e < 12 ? "AM" : "PM";
                    return s ? a.toLowerCase() : a;
                  };
              return a.replace(m, function (e, a) {
                return (
                  a ||
                  (function (e) {
                    switch (e) {
                      case "YY":
                        return String(t.$y).slice(-2);
                      case "YYYY":
                        return y.s(t.$y, 4, "0");
                      case "M":
                        return r + 1;
                      case "MM":
                        return y.s(r + 1, 2, "0");
                      case "MMM":
                        return u(s.monthsShort, r, d, 3);
                      case "MMMM":
                        return u(d, r);
                      case "D":
                        return t.$D;
                      case "DD":
                        return y.s(t.$D, 2, "0");
                      case "d":
                        return String(t.$W);
                      case "dd":
                        return u(s.weekdaysMin, t.$W, c, 2);
                      case "ddd":
                        return u(s.weekdaysShort, t.$W, c, 3);
                      case "dddd":
                        return c[t.$W];
                      case "H":
                        return String(i);
                      case "HH":
                        return y.s(i, 2, "0");
                      case "h":
                        return h(1);
                      case "hh":
                        return h(2);
                      case "a":
                        return f(i, l, !0);
                      case "A":
                        return f(i, l, !1);
                      case "m":
                        return String(l);
                      case "mm":
                        return y.s(l, 2, "0");
                      case "s":
                        return String(t.$s);
                      case "ss":
                        return y.s(t.$s, 2, "0");
                      case "SSS":
                        return y.s(t.$ms, 3, "0");
                      case "Z":
                        return n;
                    }
                    return null;
                  })(e) ||
                  n.replace(":", "")
                );
              });
            }),
            (u.utcOffset = function () {
              return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
            }),
            (u.diff = function (e, t, d) {
              var x,
                o = this,
                m = y.p(t),
                u = v(e),
                h = (u.utcOffset() - this.utcOffset()) * 6e4,
                f = this - u,
                p = function () {
                  return y.m(o, u);
                };
              switch (m) {
                case c:
                  x = p() / 12;
                  break;
                case l:
                  x = p();
                  break;
                case r:
                  x = p() / 3;
                  break;
                case i:
                  x = (f - h) / 6048e5;
                  break;
                case "day":
                  x = (f - h) / 864e5;
                  break;
                case n:
                  x = f / 36e5;
                  break;
                case a:
                  x = f / 6e4;
                  break;
                case s:
                  x = f / 1e3;
                  break;
                default:
                  x = f;
              }
              return d ? x : y.a(x);
            }),
            (u.daysInMonth = function () {
              return this.endOf(l).$D;
            }),
            (u.$locale = function () {
              return f[this.$L];
            }),
            (u.locale = function (e, t) {
              if (!e) return this.$L;
              var s = this.clone(),
                a = g(e, t, !0);
              return a && (s.$L = a), s;
            }),
            (u.clone = function () {
              return y.w(this.$d, this);
            }),
            (u.toDate = function () {
              return new Date(this.valueOf());
            }),
            (u.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (u.toISOString = function () {
              return this.$d.toISOString();
            }),
            (u.toString = function () {
              return this.$d.toUTCString();
            }),
            e
          );
        })()).prototype),
        (v.prototype = w),
        [
          ["$ms", t],
          ["$s", s],
          ["$m", a],
          ["$H", n],
          ["$W", "day"],
          ["$M", l],
          ["$y", c],
          ["$D", d],
        ].forEach(function (e) {
          w[e[1]] = function (t) {
            return this.$g(t, e[0], e[1]);
          };
        }),
        (v.extend = function (e, t) {
          return e.$i || (e(t, N, v), (e.$i = !0)), v;
        }),
        (v.locale = g),
        (v.isDayjs = j),
        (v.unix = function (e) {
          return v(1e3 * e);
        }),
        (v.en = f[h]),
        (v.Ls = f),
        (v.p = {}),
        v);
    },
    59796: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return e$;
          },
        });
      var a = s(6272),
        n = s(47243),
        i = s(18780),
        l = s(20933),
        r = s(79807),
        c = s(74205);
      let d =
          "https://orderly.network/docs/introduction/tokenomics/order-staking/staking",
        x = () =>
          (0, a.jsxs)("div", {
            className:
              "flex items-end md:items-center justify-start  text-xs leading-3 md:text-base text-primary-50 gap-1",
            children: [
              "Available on",
              (0, a.jsxs)("div", {
                className: "relative h-4 md:h-5 w-[100px]",
                children: [
                  (0, a.jsx)("img", {
                    className:
                      "absolute top-0 bottom-0 left-[54px] md:left-16 w-4 h-4 md:w-5 md:h-5",
                    src: "/staking/chains/arb.png",
                    alt: "chainImg",
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "absolute top-0 bottom-0 left-[40px] md:left-12 w-4 h-4 md:w-5 md:h-5",
                    src: "/staking/chains/base.png",
                    alt: "chainImg",
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "absolute top-0 bottom-0 left-[26px] md:left-8 w-4 h-4 md:w-5 md:h-5",
                    src: "/staking/chains/matic.png",
                    alt: "chainImg",
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "absolute top-0 bottom-0  left-[12px] md:left-4 w-4 h-4 md:w-5 md:h-5",
                    src: "/staking/chains/optimism.png",
                    alt: "chainImg",
                  }),
                  (0, a.jsx)("img", {
                    className:
                      "absolute top-0 bottom-0 left-0 w-4 h-4 md:w-5 md:h-5",
                    src: "/staking/chains/eth.png",
                    alt: "chainImg",
                  }),
                ],
              }),
            ],
          }),
        o = () =>
          (0, a.jsx)("div", {
            className:
              "text-[32px] md:text-[40px]  bg-gradient-to-b from-white via-white to-[#cfbefd] bg-clip-text text-transparent font-semibold",
            children: "Staking",
          }),
        m = () => {
          let e = (0, c.a)("(min-width: 768px)");
          return (0, a.jsx)("div", {
            className:
              "text-[13px] md:text-base flex justify-start items-start flex-col text-primary-50 gap-1",
            children: e
              ? (0, a.jsxs)(a.Fragment, {
                  children: [                    
                  ],
                })
              : (0, a.jsx)(a.Fragment, {
                  children: (0, a.jsxs)("div", {
                    className: "leading-5",
                    children: [
                      "Stake DRAI/esDRAI to acquire Valor and gain a share of Orderly’s treasury. VALOR can be redeemed for USDC. Learn more about staking in\xa0",
                      (0, a.jsxs)("div", {
                        className:
                          "inline text-[#B084E9] justify-start items-center leading-[19px]",
                        onClick: () => window.open(d),
                        children: [
                          "Tokenomics ",
                          (0, a.jsx)(r.Z, {
                            className: "inline-block",
                            size: 16,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          });
        };
      function u() {
        return (0, a.jsxs)("div", {
          className:
            "text-sm my-[40px] md:max-w-[688px] lg:max-w-[673px] xl:max-w-[649px] flex justify-start items-start flex-col gap-3",
          children: [(0, a.jsx)(x, {}), (0, a.jsx)(o, {}), (0, a.jsx)(m, {})],
        });
      }
      var h = s(8627),
        f = s(38820);
      function p(e) {
        let { className: t } = e;
        return (0, a.jsx)("div", {
          className: (0, f.cn)(" bg-primary-8 w-[1px]", t),
        });
      }
      function j(e) {
        let { className: t } = e;
        return (0, a.jsx)("div", {
          className: (0, f.cn)(" bg-primary-8 h-[1px]", t),
        });
      }
      var g = s(25491),
        v = s(98035),
        y = s(15495);
      function N() {
        let { totalStake: e, stakeAPR: t } = (0, g.B)();
        return (0, a.jsxs)("div", {
          className:
            "bg-[#1E122F] p-5 rounded-xl flex justify-between items-stretch w-full",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center  justify-between gap-1 w-2/4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-center gap-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative h-4 md:h-5 w-[24px] md:w-[32px]",
                      children: [
                        (0, a.jsx)("img", {
                          className:
                            "absolute left-[9px] md:left-[12px] top-0 w-4 h-4 md:w-5 md:h-5",
                          src: "/staking/esDRAI.png",
                          alt: "es order",
                        }),
                        (0, a.jsx)("img", {
                          className:
                            "absolute left-0 top-0 w-4 h-4 md:w-5 md:h-5",
                          src: "/staking/DRAI.png",
                          alt: "order",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "text-[13px] lg:text-base font-manrope",
                      children: (0, f.uf)(e, { decimal: 2 }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "text-xs lg:text-[13px] text-primary-50",
                  children: "Total staked",
                }),
              ],
            }),
            (0, a.jsx)(p, { className: "mx-5" }),
            (0, a.jsxs)("div", {
              className:
                "w-2/4 flex flex-col items-center  justify-between gap-1",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-start gap-1",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "text-[13px] lg:text-base  bg-[linear-gradient(270deg,#15DBDF_-1.41%,#D9FEFF_86.44%)]  bg-clip-text text-transparent font-manrope",
                      children: t,
                    }),
                    (0, a.jsx)(v.default, {
                      content:
                        "The APR calculation is based on Orderly's net revenue over the past 7 days and the previous day's price of DRAI.",
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(y.Z, {
                          className: "w-[16px] h-[16px] text-primary-50",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "text-xs lg:text-[13px] text-primary-50",
                  children: "Staking APR",
                }),
              ],
            }),
          ],
        });
      }
      var w = s(74939),
        b = s(6468),
        k = s.n(b),
        D = s(19863),
        C = s(62587),
        _ = s(34877),
        R = s(56060),
        O = s(56187),
        S = s(82179),
        E = s(62823);
      function $(e) {
        let { open: t, onOpenChange: s, onSuccess: n } = e,
          { setTxHash: i } = (0, O.w)(),
          {
            allowance: l,
            getOrderAllowance: r,
            balance: c,
            getOrderBalance: d,
            stakeAPR: x,
          } = (0, g.B)(),
          [o, m] = (0, h.useState)(""),
          { stakeOrderRequest: u, approveOrderRequest: f } = (0, C.Z)(),
          { checkTransactionReceipt: p } = (0, R.h)(),
          [j, v] = (0, h.useState)(!1),
          y = async () => {
            try {
              if (j) return;
              v(!0);
              let e = await f(Number(o));
              console.log("-- approve res", e);
              let t = await p(e.hash);
              console.log("-- approve recepit", t),
                1 === t.status
                  ? r()
                  : (0, _.Z)(Error("Transaction failed due to approve order"));
            } catch (e) {
              console.log("-- approve error", e), (0, _.Z)(e);
            } finally {
              v(!1);
            }
          },
          N = async () => {
            if (o && !j) {
              v(!0);
              try {
                let e = await u(Number(o));
                console.log("stake res", e), i(e.hash), s(!1);
              } catch (e) {
                (0, _.Z)(e);
              } finally {
                v(!1);
              }
            }
          },
          b = (0, h.useMemo)(
            () =>
              l
                ? !o || Number.isNaN(o)
                  ? E.A.invalid
                  : !c || new (k())(o).gt(c)
                  ? E.A.insufficientBalance
                  : !l || new (k())(o).gt(l)
                  ? E.A.needApprove
                  : E.A.valid
                : E.A.needApprove,
            [c, l, o]
          );
        return (
          (0, h.useEffect)(() => {
            t || (v(!1), m(""));
          }, [t]),
          (0, a.jsx)(w.Vq, {
            open: t,
            onOpenChange: s,
            children: (0, a.jsxs)(w.cZ, {
              className: "",
              children: [
                (0, a.jsx)(w.fK, {
                  children: (0, a.jsx)(w.$N, {
                    children: (0, a.jsxs)("div", {
                      className:
                        "text-sm md:text-base flex justify-start items-center  gap-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: " text-primary-80",
                          children: "Stake DRAI",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex justify-start items-center text-[10px] bg-[#221733] px-2 h-5 rounded-[53px] gap-1",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-primary-50",
                              children: "APR",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-[10px]   bg-[linear-gradient(270deg,#15DBDF_-1.41%,#D9FEFF_86.44%)]  bg-clip-text text-transparent font-manrope",
                              children: x,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsxs)(w.a7, {
                  children: [
                    (0, a.jsx)(S.Z, {
                      balance: c,
                      value: o,
                      setValue: m,
                      tokenInfo: {
                        tokenName: "DRAI",
                        tokenImage: "/staking/DRAI.png",
                      },
                      valueValidStatus: b,
                    }),
                    (0, a.jsx)("div", {
                      className: "flex flex-1 mt-5",
                      children:
                        b === E.A.needApprove
                          ? (0, a.jsx)(D.z, {
                              variant: "secondary",
                              className: "flex-1 h-[40px]",
                              loading: j,
                              disabled: j,
                              onClick: y,
                              children: "Approve DRAI",
                            })
                          : (0, a.jsx)(D.z, {
                              variant: "secondary",
                              disabled: b !== E.A.valid || j,
                              className: "flex-1 h-[40px]",
                              loading: j,
                              onClick: N,
                              children: "Stake",
                            }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var A = s(66402);
      function M() {
        let {
            balance: e,
            updateStakeInfoByContract: t,
            updateUserUnstakeInfoByContract: s,
            getOrderBalance: n,
          } = (0, g.B)(),
          [i, l] = (0, h.useState)(!1);
        return (0, a.jsxs)("div", {
          className:
            "bg-[#1E122F] p-5 rounded-xl flex justify-between items-center w-full",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col items-start justify-between gap-1 flex-1",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-start gap-1",
                  children: [
                    (0, a.jsx)("img", {
                      className: "w-4 h-4 md:w-5 md:h-5",
                      src: "/staking/DRAI.png",
                      width: "20",
                      height: "20",
                      alt: "order",
                    }),
                    (0, a.jsx)("div", {
                      className: "text-[13px] lg:text-base font-manrope",
                      children: (0, f.uf)(e, { decimal: 2 }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "text-xs lg:text-[13px] text-primary-50",
                  children: "Wallet balance",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "flex",
              children: (0, a.jsx)(D.z, {
                disabled: !e,
                onClick: () => {
                  e && e > 0 && l(!0);
                },
                children: "Stake",
              }),
            }),
            (0, a.jsx)(O.q, {
              onSuccess: () => {
                (0, f.LE)(() => {
                  console.log("current time", new Date().toTimeString()),
                    n(),
                    t(),
                    s();
                }),
                  A.toast.success("You have successfully staked DRAI.");
              },
              children: (0, a.jsx)($, { open: i, onOpenChange: l }),
            }),
          ],
        });
      }
      var Z = s(72798),
        T = s(2523);
      let I = [
        {
          name: "Uniswap",
          icon: "/staking/exchanges/uniswap.png",
          link: "https://app.uniswap.org/",
          chainIcon: "/staking/chain-icons/eth.png",
        },
        {
          name: "PancakeSwap",
          icon: "/staking/exchanges/pancake.png",
          link: "https://pancakeswap.finance/?chain=eth&outputCurrency=0xComingSoon&inputCurrency=ETH",
          chainIcon: "/staking/chain-icons/eth.png",
        }
      ];
      function U(e) {
        let { open: t, onOpenChange: s } = e,
          n = (e) => {
            let { exchange: t } = e;
            return (0, a.jsxs)("a", {
              href: t.link,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "bg-[#1E122F] md:p-4 p-5 rounded-xl flex items-center justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "relative",
                      children: [
                        t.chainIcon &&
                          (0, a.jsx)("img", {
                            src: t.chainIcon,
                            alt: "".concat(t.name),
                            width: 24,
                            height: 24,
                            className: "absolute -top-4 -left-4",
                          }),
                        (0, a.jsx)("img", {
                          src: t.icon,
                          alt: t.name,
                          width: 28,
                          height: 28,
                          className: "ml-3",
                        }),
                      ],
                    }),
                    (0, a.jsx)("span", {
                      className: "text-slate-100 text-sm",
                      children: t.name,
                    }),
                  ],
                }),
                (0, a.jsx)(r.Z, { className: "ml-2 w-5 h-5 text-[#8E5BB7]" }),
              ],
            });
          };
        return (0, a.jsx)(w.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(w.cZ, {
            className:
              " bg-[#190E2C] !max-w-[440px] md:!translate-y-[-50%] data-[state=open]:duration-300 data-[state=closed]:duration-200 md:data-[state=open]:!slide-in-from-top-[48%] md:data-[state=closed]:!slide-out-to-top-[48%]  !top-[unset] !bottom-0 !translate-y-0 !rounded-t-[12px] !rounded-b-none data-[state=open]:!slide-in-from-bottom-0 data-[state=closed]:!slide-out-to-bottom-full md:!top-[50%] md:!bottom-[unset] md:!rounded-[12px] ",
            children: [
              (0, a.jsx)(w.fK, {
                className: "md:border-b md:border-b-white/[0.08]",
                children: (0, a.jsx)(w.$N, {
                  className: "text-slate-300 text-2sm",
                  children: "Buy DRAI",
                }),
              }),
              (0, a.jsx)(w.a7, {
                className: "p-4",
                children: (0, a.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: I.map((e) =>
                    (0, a.jsx)(n, { exchange: e }, e.name)
                  ),
                }),
              }),
            ],
          }),
        });
      }
      function V() {
        let {
            connected: e,
            isNotSupportChain: t,
            address: s,
          } = (0, Z.useAppContext)(),
          [n, i] = (0, h.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(U, { open: n, onOpenChange: i }),
            (0, a.jsxs)(T.Z, {
              children: [
                (0, a.jsx)(T.Z.Title, {
                  title: "DRAI/esDRAI vault",
                  rightNode: (0, a.jsxs)("button", {
                    className:
                      "p-2 pr-0 text-[#B084E9] text-sm flex flex-nowrap whitespace-nowrap relative",
                    onClick: () => i(!0),
                    children: [
                      "Buy DRAI",
                      (0, a.jsx)(r.Z, { className: "w-4 h-4 ml-2" }),
                    ],
                  }),
                }),
                (0, a.jsxs)(T.Z.Content, {
                  className: "md:flex-row justify-between items-center gap-5",
                  children: [(0, a.jsx)(N, {}), e && !t && (0, a.jsx)(M, {})],
                }),
              ],
            }),
          ],
        });
      }
      var L = s(28640),
        B = s(17954),
        F = s.n(B),
        W = function (e) {
          var t = (0, h.useRef)(e);
          return (t.current = e), t;
        },
        z = s(65663),
        Y = function (e) {
          if (!e) return 0;
          var t = F()(e).valueOf() - Date.now();
          return t < 0 ? 0 : t;
        },
        H = function (e) {
          void 0 === e && (e = {});
          var t = e || {},
            s = t.leftTime,
            a = t.targetDate,
            n = t.interval,
            i = void 0 === n ? 1e3 : n,
            l = t.onEnd,
            r = (0, h.useMemo)(
              function () {
                return "leftTime" in e
                  ? (0, z.hj)(s) && s > 0
                    ? Date.now() + s
                    : void 0
                  : a;
              },
              [s, a]
            ),
            c = (0, L.CR)(
              (0, h.useState)(function () {
                return Y(r);
              }),
              2
            ),
            d = c[0],
            x = c[1],
            o = W(l);
          (0, h.useEffect)(
            function () {
              if (!r) {
                x(0);
                return;
              }
              x(Y(r));
              var e = setInterval(function () {
                var t,
                  s = Y(r);
                x(s),
                  0 === s &&
                    (clearInterval(e),
                    null === (t = o.current) || void 0 === t || t.call(o));
              }, i);
              return function () {
                return clearInterval(e);
              };
            },
            [r, i]
          );
          var m = (0, h.useMemo)(
            function () {
              return {
                days: Math.floor(d / 864e5),
                hours: Math.floor(d / 36e5) % 24,
                minutes: Math.floor(d / 6e4) % 60,
                seconds: Math.floor(d / 1e3) % 60,
                milliseconds: Math.floor(d) % 1e3,
              };
            },
            [d]
          );
          return [d, m];
        };
      function q(e) {
        return (0, a.jsx)("span", {
          className: (0, f.cn)("font-manrope tabular-nums", e.className),
          children: e.children,
        });
      }
      function K(e) {
        let { endDate: t, onEnd: s } = e,
          [, n] = H({ targetDate: t, onEnd: s });
        return (
          (0, c.a)("(max-width: 900px) and (min-width: 768px)"),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(v.default, {
                content: (0, a.jsxs)("div", {
                  className:
                    "flex flex-row md:flex-col lg:flex-row justify-between lg:justify-start text-xs lg:text-sm",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-primary-50 inline-block",
                      children: "Available in",
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-start gap-1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: (0, f.cn)(
                            "hidden text-primary",
                            n.days > 0 && "inline-block"
                          ),
                          children: [
                            (0, a.jsx)(q, { children: n.days }),
                            (0, a.jsx)("span", {
                              className: "text-primary-36 ml-0.5",
                              children: "D",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "inline-block text-primary",
                          children: [
                            (0, a.jsx)(q, { children: n.hours }),
                            (0, a.jsx)("span", {
                              className: "text-primary-36 ml-0.5",
                              children: "H",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "inline-block text-primary",
                          children: [
                            (0, a.jsx)(q, { children: n.minutes }),
                            (0, a.jsx)("span", {
                              className: "text-primary-36 ml-0.5",
                              children: "M",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: (0, f.cn)(
                            "hidden text-primary",
                            n.days <= 0 && "inline-block"
                          ),
                          children: [
                            (0, a.jsx)(q, { children: n.seconds }),
                            (0, a.jsx)("span", {
                              className: "text-primary-36 ml-0.5",
                              children: "S",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                children: (0, a.jsx)("div", {
                  className: "hidden max-[900px]:md:block",
                  children: (0, a.jsx)(y.Z, {
                    size: 16,
                    className: "text-primary-50",
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "max-[900px]:md:hidden flex flex-row md:flex-col lg:flex-row justify-between lg:justify-start  text-xs lg:text-sm",
                children: [
                  (0, a.jsx)("div", {
                    className: "text-primary-50 inline-block lg:mr-1",
                    children: "Available in",
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-start gap-1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: (0, f.cn)(
                          "hidden text-primary",
                          n.days > 0 && "inline-block"
                        ),
                        children: [
                          (0, a.jsx)(q, { children: n.days }),
                          (0, a.jsx)("span", {
                            className: "text-primary-36 ml-0.5",
                            children: "D",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "inline-block text-primary",
                        children: [
                          (0, a.jsx)(q, { children: n.hours }),
                          (0, a.jsx)("span", {
                            className: "text-primary-36 ml-0.5",
                            children: "H",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "inline-block text-primary",
                        children: [
                          (0, a.jsx)(q, { children: n.minutes }),
                          (0, a.jsx)("span", {
                            className: "text-primary-36 ml-0.5",
                            children: "M",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: (0, f.cn)(
                          "hidden text-primary",
                          n.days <= 0 && "inline-block"
                        ),
                        children: [
                          (0, a.jsx)(q, { children: n.seconds }),
                          (0, a.jsx)("span", {
                            className: "text-primary-36 ml-0.5",
                            children: "S",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function P(e) {
        let { open: t, onClose: s } = e,
          [n, i] = (0, h.useState)(!1),
          { setTxHash: l } = (0, O.w)(),
          { unstakeDetails: r } = (0, g.B)(),
          { cancelUnstakeRequest: c } = (0, C.Z)(),
          d = async () => {
            if (!n) {
              i(!0);
              try {
                let e = await c(
                  Number(null == r ? void 0 : r.total_unstake_order)
                );
                console.log("claim order res", e), l(e.hash), s(!1);
              } catch (e) {
                (0, _.Z)(e);
              } finally {
                i(!1);
              }
            }
          };
        return (0, a.jsx)(w.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(w.cZ, {
            className: "",
            children: [
              (0, a.jsx)(w.fK, {
                children: (0, a.jsx)(w.$N, {
                  children: (0, a.jsx)("div", {
                    className:
                      "flex justify-start items-center text-base gap-2",
                    children: (0, a.jsx)("div", {
                      className: " text-primary-80",
                      children: "Confirm cancellation",
                    }),
                  }),
                }),
              }),
              (0, a.jsx)(w.a7, {
                className: "pb-3",
                children: (0, a.jsx)("div", {
                  className:
                    "flex flex-col justify-start  gap-5 text-sm text-primary-50",
                  children: (0, a.jsx)("div", {
                    children:
                      "Are you sure you want to cancel the unstaking process?",
                  }),
                }),
              }),
              (0, a.jsxs)(w.cN, {
                className: "gap-[10px]",
                children: [
                  (0, a.jsx)(D.z, {
                    variant: "third",
                    className: "flex-1 h-[40px]",
                    onClick: () => s(!1),
                    children: "No",
                  }),
                  (0, a.jsx)(D.z, {
                    variant: "secondary",
                    loading: n,
                    className: "flex-1 h-[40px]",
                    onClick: () => d(),
                    children: "Yes",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var Q = () => {
        let [e, t] = (0, h.useState)(!1),
          { updateStakeInfoByContract: s, updateUserUnstakeInfoByContract: n } =
            (0, g.B)();
        return (0, a.jsxs)(O.q, {
          onSuccess: () => {
            (0, f.LE)(() => {
              n(), s();
            }),
              A.toast.success(
                "You have successfully cancelled the unstake process."
              );
          },
          children: [
            (0, a.jsx)(D.z, {
              variant: "third",
              onClick: () => t(!0),
              children: "Cancel",
            }),
            (0, a.jsx)(P, { open: e, onClose: t }),
          ],
        });
      };
      function J(e) {
        let { isDisable: t } = e,
          [s, n] = (0, h.useState)(!1),
          { unstakeDetails: i } = (0, g.B)(),
          { claimOrderRequest: l } = (0, C.Z)(),
          { setTxHash: r } = (0, O.w)(),
          c = async () => {
            if (!s) {
              n(!0);
              try {
                let e = await l(
                  Number(null == i ? void 0 : i.total_unstake_order)
                );
                console.log("claim order res", e), r(e.hash);
              } catch (e) {
                (0, _.Z)(e);
              } finally {
                n(!1);
              }
            }
          };
        return (0, a.jsx)(D.z, {
          variant: "outline",
          loading: s,
          disabled: t || s,
          onClick: c,
          children: "Claim",
        });
      }
      function X(e) {
        let { isDisable: t } = e,
          { updateUserUnstakeInfoByContract: s, updateStakeInfoByContract: n } =
            (0, g.B)();
        return (0, a.jsx)(O.q, {
          onSuccess: () => {
            (0, f.LE)(() => {
              n(), s();
            }),
              A.toast.success("You have successfully claimed DRAI.");
          },
          children: (0, a.jsx)(J, { isDisable: t }),
        });
      }
      function G() {
        let [e, t] = (0, h.useState)(E.C.NEED_UNSTAKE),
          { unstakeDetails: s } = (0, g.B)(),
          a = (0, h.useCallback)(
            () =>
              (null == s ? void 0 : s.total_unstake_order)
                ? (null == s ? void 0 : s.unstaked_end_time) &&
                  (null == s ? void 0 : s.unstaked_end_time) >
                    new Date().getTime()
                  ? t(E.C.WAIT_UNSTAKE)
                  : t(E.C.NEED_CLAIM)
                : t(E.C.NEED_UNSTAKE),
            [s]
          );
        return (
          (0, h.useEffect)(() => {
            a();
          }, [s, a]),
          { currentStatus: e }
        );
      }
      function ee() {
        let { address: e } = (0, Z.useAppContext)(),
          { unstakeDetails: t, updateUserUnstakeInfoByContract: s } = (0,
          g.B)(),
          { currentStatus: n } = G();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex md:hidden bg-[#1E122F] rounded-xl p-5 flex-col w-full ",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-center w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-1 leading-5",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-start gap-1 text-[13px] lg:text-base",
                          children: [
                            (0, a.jsx)("img", {
                              src: "/staking/DRAI.png",
                              className: "w-4 h-4 md:w-5 md:h-5",
                              alt: "order",
                            }),
                            (0, a.jsx)("div", {
                              className: "font-manrope",
                              children: (0, f.uf)(
                                null == t ? void 0 : t.total_unstake_order,
                                { decimal: 2 }
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-xs lg:text-[13px] text-primary-50 leading-4",
                          children:
                            n === E.C.WAIT_UNSTAKE
                              ? "Unstaking"
                              : "Claimable DRAI",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      children:
                        n === E.C.WAIT_UNSTAKE
                          ? (0, a.jsx)(Q, {})
                          : (0, a.jsx)(X, { isDisable: n !== E.C.NEED_CLAIM }),
                    }),
                  ],
                }),
                (0, a.jsx)(j, { className: "my-5" }),
                n === E.C.WAIT_UNSTAKE &&
                  (0, a.jsx)(K, {
                    endDate: t.unstaked_end_time,
                    onEnd: () => {
                      s();
                    },
                  }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "hidden md:flex bg-[#1E122F] rounded-xl p-5 justify-between items-center w-full ",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col  gap-1 leading-5",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-start gap-1 text-[13px] lg:text-base",
                      children: [
                        (0, a.jsx)("img", {
                          src: "/staking/DRAI.png",
                          className: "w-4 h-4 md:w-5 md:h-5",
                          alt: "order",
                        }),
                        (0, a.jsx)("div", {
                          className: "font-manrope",
                          children: (0, f.uf)(
                            null == t ? void 0 : t.total_unstake_order,
                            { decimal: 2 }
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children:
                        n === E.C.WAIT_UNSTAKE ? "Unstaking" : "Claimable DRAI",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-5 justify-end",
                  children: [
                    n === E.C.WAIT_UNSTAKE &&
                      (0, a.jsx)(K, {
                        endDate: t.unstaked_end_time,
                        onEnd: () => {
                          s();
                        },
                      }),
                    n === E.C.WAIT_UNSTAKE
                      ? (0, a.jsx)(Q, {})
                      : (0, a.jsx)(X, { isDisable: n !== E.C.NEED_CLAIM }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var et = (e) =>
        (0, a.jsxs)("svg", {
          width: "17",
          height: "16",
          viewBox: "0 0 17 16",
          fill: "white",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("mask", {
              id: "mask0_4903_623",
              maskUnits: "userSpaceOnUse",
              x: "0",
              y: "0",
              width: "17",
              height: "16",
              children: (0, a.jsx)("rect", {
                x: "0.5",
                width: "16",
                height: "16",
                fill: "#D9D9D9",
              }),
            }),
            (0, a.jsx)("g", {
              mask: "url(#mask0_4903_623)",
              children: (0, a.jsx)("path", {
                d: "M7.83334 11.3333H9.16668V7.33331H7.83334V11.3333ZM8.50001 5.99998C8.6889 5.99998 8.84723 5.93609 8.97501 5.80831C9.10279 5.68053 9.16668 5.5222 9.16668 5.33331C9.16668 5.14442 9.10279 4.98609 8.97501 4.85831C8.84723 4.73054 8.6889 4.66665 8.50001 4.66665C8.31112 4.66665 8.15279 4.73054 8.02501 4.85831C7.89723 4.98609 7.83334 5.14442 7.83334 5.33331C7.83334 5.5222 7.89723 5.68053 8.02501 5.80831C8.15279 5.93609 8.31112 5.99998 8.50001 5.99998ZM8.50001 14.6666C7.57779 14.6666 6.71112 14.4916 5.90001 14.1416C5.0889 13.7916 4.38334 13.3166 3.78334 12.7166C3.18334 12.1166 2.70834 11.4111 2.35834 10.6C2.00834 9.78887 1.83334 8.9222 1.83334 7.99998C1.83334 7.07776 2.00834 6.21109 2.35834 5.39998C2.70834 4.58887 3.18334 3.88331 3.78334 3.28331C4.38334 2.68331 5.0889 2.20831 5.90001 1.85831C6.71112 1.50831 7.57779 1.33331 8.50001 1.33331C9.42223 1.33331 10.2889 1.50831 11.1 1.85831C11.9111 2.20831 12.6167 2.68331 13.2167 3.28331C13.8167 3.88331 14.2917 4.58887 14.6417 5.39998C14.9917 6.21109 15.1667 7.07776 15.1667 7.99998C15.1667 8.9222 14.9917 9.78887 14.6417 10.6C14.2917 11.4111 13.8167 12.1166 13.2167 12.7166C12.6167 13.3166 11.9111 13.7916 11.1 14.1416C10.2889 14.4916 9.42223 14.6666 8.50001 14.6666ZM8.50001 13.3333C9.9889 13.3333 11.25 12.8166 12.2833 11.7833C13.3167 10.75 13.8333 9.48887 13.8333 7.99998C13.8333 6.51109 13.3167 5.24998 12.2833 4.21665C11.25 3.18331 9.9889 2.66665 8.50001 2.66665C7.01112 2.66665 5.75001 3.18331 4.71668 4.21665C3.68334 5.24998 3.16668 6.51109 3.16668 7.99998C3.16668 9.48887 3.68334 10.75 4.71668 11.7833C5.75001 12.8166 7.01112 13.3333 8.50001 13.3333Z",
              }),
            }),
          ],
        });
      function es(e) {
        let { open: t, onClose: s, onSuccess: n } = e,
          { address: i } = (0, Z.useAppContext)(),
          { stakeBalance: l, unstakeDetails: r, stakeAPR: c } = (0, g.B)(),
          {
            orderValue: d,
            setOrderValue: x,
            onUnstake: o,
            loading: m,
            setOpenConfirmUnstakeDialog: u,
            setOpenUnstakeDialog: f,
          } = el(),
          p = (0, h.useMemo)(
            () =>
              !d || Number.isNaN(d)
                ? E.A.invalid
                : !(null == l ? void 0 : l.total_staked_order) ||
                  new (k())(d).gt(null == l ? void 0 : l.total_staked_order)
                ? E.A.insufficientBalance
                : E.A.valid,
            [null == l ? void 0 : l.total_staked_order, d]
          );
        return (0, a.jsx)(w.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(w.cZ, {
            className: "",
            children: [
              (0, a.jsx)(w.fK, {
                children: (0, a.jsx)(w.$N, {
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex justify-start items-center text-base gap-2",
                    children: [
                      (0, a.jsx)("div", {
                        className: " text-primary-80",
                        children: "Unstake DRAI",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex justify-start items-center text-[10px] bg-[#221733] px-2 h-5 rounded-[53px] gap-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "text-primary-50",
                            children: "APR",
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "text-[10px]   bg-[linear-gradient(270deg,#15DBDF_-1.41%,#D9FEFF_86.44%)]  bg-clip-text text-transparent font-manrope",
                            children: c,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)(w.a7, {
                children: [
                  (0, a.jsx)(S.Z, {
                    balance: null == l ? void 0 : l.total_staked_order,
                    value: d,
                    setValue: x,
                    valueValidStatus: p,
                    tokenInfo: {
                      tokenName: "DRAI",
                      tokenImage: "/staking/DRAI.png",
                    },
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex justify-start items-start gap-1 text-[11px] md:text-[13px] mt-3 text-primary-50",
                    children: [
                      (0, a.jsx)(et, { fill: "rgba(255,255,255,0.5" }),
                      (0, a.jsx)("div", {
                        children:
                          "Your $DRAI will be available to claim 7 days after unstaking,",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "flex flex-1 mt-5",
                    children: (0, a.jsx)(D.z, {
                      variant: "secondary",
                      disabled: p !== E.A.valid || m,
                      loading: m,
                      className: "flex-1 h-[40px]",
                      onClick: () => {
                        !m &&
                          r &&
                          ((null == r ? void 0 : r.unstaked_end_time) > 0 &&
                          (null == r ? void 0 : r.unstaked_end_time) >
                            new Date().getTime()
                            ? (f(!1), u(!0))
                            : o().then());
                      },
                      children: "Unstake",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ea(e) {
        let { open: t, onClose: s, onSuccess: n } = e,
          { orderValue: i, setOrderValue: l, onUnstake: r, loading: c } = el();
        return (0, a.jsx)(w.Vq, {
          open: t,
          onOpenChange: s,
          children: (0, a.jsxs)(w.cZ, {
            children: [
              (0, a.jsx)(w.fK, {
                children: (0, a.jsx)(w.$N, {
                  children: (0, a.jsx)("div", {
                    className:
                      "flex justify-start items-center text-base gap-2",
                    children: (0, a.jsx)("div", {
                      className: " text-primary-80",
                      children: "Confirm unstaking",
                    }),
                  }),
                }),
              }),
              (0, a.jsx)(w.a7, {
                className: "pb-3",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-start  gap-5 text-sm text-primary-50",
                  children: [
                    (0, a.jsx)("div", {
                      children:
                        "You have an ongoing unstake request. Unstaking more now will reset the countdown to 7 days.",
                    }),
                    (0, a.jsx)("div", {
                      children: "Are you sure you want to continue to unstake?",
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)(w.cN, {
                className: "gap-[10px]",
                children: [
                  (0, a.jsx)(D.z, {
                    variant: "third",
                    className: "flex-1 h-[40px]",
                    onClick: () => s(!1),
                    children: "Cancel",
                  }),
                  (0, a.jsx)(D.z, {
                    variant: "secondary",
                    loading: c,
                    disabled: c,
                    className: "flex-1 h-[40px]",
                    onClick: () => r().then(),
                    children: "Unstake",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let en = (0, h.createContext)({
          orderValue: "",
          setOrderValue: () => {},
          loading: !1,
          onUnstake: async () => {},
          setOpenUnstakeDialog: () => {},
          setOpenConfirmUnstakeDialog: () => {},
        }),
        ei = (e) => {
          let { children: t } = e,
            [s, n] = (0, h.useState)(""),
            { unstakeOrderRequest: i } = (0, C.Z)(),
            [l, r] = (0, h.useState)(!1),
            { setTxHash: c } = (0, O.w)(),
            [d, x] = (0, h.useState)(!1),
            [o, m] = (0, h.useState)(!1),
            u = async () => {
              if (s && !l) {
                r(!0);
                try {
                  let e = await i(Number(s));
                  console.log("stake res", e),
                    m(!1),
                    x(!1),
                    n(""),
                    r(!1),
                    c(e.hash);
                } catch (e) {
                  (0, _.Z)(e);
                } finally {
                  r(!1);
                }
              }
            },
            f = (0, h.useMemo)(
              () => ({
                orderValue: s,
                setOrderValue: n,
                onUnstake: u,
                loading: l,
                setOpenUnstakeDialog: x,
                setOpenConfirmUnstakeDialog: m,
              }),
              [s, n, u, l, x, m]
            );
          return (0, a.jsxs)(en.Provider, {
            value: f,
            children: [
              t,
              (0, a.jsx)(es, { open: d, onClose: x }),
              (0, a.jsx)(ea, { open: o, onClose: m }),
            ],
          });
        },
        el = () => (0, h.useContext)(en);
      function er() {
        let { setOpenUnstakeDialog: e } = el(),
          { stakeBalance: t, unstakeDetails: s } = (0, g.B)(),
          { currentStatus: n } = G(),
          i = (0, h.useMemo)(
            () =>
              !!(
                s &&
                (null == s ? void 0 : s.total_unstake_order) > 0 &&
                (null == s ? void 0 : s.unstaked_end_time) &&
                (null == s ? void 0 : s.unstaked_end_time) <
                  new Date().getTime()
              ) ||
              !(
                (null == t ? void 0 : t.total_staked_order) &&
                t.total_staked_order > 0
              ),
            [t, s]
          );
        return (0, a.jsx)(a.Fragment, {
          children:
            n === E.C.NEED_CLAIM
              ? (0, a.jsx)(v.default, {
                  content: "Please claim your DRAI to proceed.",
                  children: (0, a.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, a.jsx)(D.z, {
                        variant: "outline",
                        disabled: !0,
                        className: "opacity-50",
                        children: "Unstake",
                      }),
                      (0, a.jsx)("div", {
                        className: "absolute top-0 left-0 right-0 bottom-0",
                      }),
                    ],
                  }),
                })
              : (0, a.jsx)(D.z, {
                  variant: "outline",
                  disabled: i,
                  onClick: () => e(!0),
                  children: "Unstake",
                }),
        });
      }
      function ec() {
        let {
          stakeBalance: e,
          updateStakeInfoByContract: t,
          updateUserUnstakeInfoByContract: s,
        } = (0, g.B)();
        return (0, a.jsxs)("div", {
          className:
            " flex flex-col justify-between items-stretch w-full gap-5",
          children: [
            (0, a.jsxs)("div", {
              className: "bg-[#1E122F] rounded-xl p-5  ",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-center w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col  gap-1 leading-5",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-start gap-1 text-base",
                          children: [
                            (0, a.jsx)("img", {
                              className: "w-4 h-4 md:w-5 md:h-5",
                              src: "/staking/DRAI.png",
                              alt: "order",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-[13px] lg:text-base font-manrope",
                              children: (0, f.uf)(
                                null == e ? void 0 : e.total_staked_order,
                                { decimal: 2 }
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-xs lg:text-[13px] text-primary-50 leading-4",
                          children: "My staked DRAI",
                        }),
                      ],
                    }),
                    (0, a.jsx)(O.q, {
                      onSuccess: () => {
                        (0, f.LE)(() => {
                          t(), s();
                        }),
                          A.toast.success(
                            "Unstaked successfully. Please come back in 7 days."
                          );
                      },
                      children: (0, a.jsx)(ei, {
                        children: (0, a.jsx)(er, {}),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(j, { className: "my-5" }),
                (0, a.jsxs)("div", {
                  className:
                    "text-[13px] text-primary-50 leading-4 flex items-center justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-start gap-1",
                      children: [
                        (0, a.jsx)(v.default, {
                          content:
                            "All unstaked DRAI will be available for claim after 7 days. If there is an ongoing unstake process, unstaking more will reset the countdown to 7 days.",
                          children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(y.Z, {
                              className: "w-[16px] h-[16px] inline-block",
                            }),
                          }),
                        }),
                        "Unstaking period",
                      ],
                    }),
                    (0, a.jsx)("div", { children: "7 days" }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(ee, {}),
          ],
        });
      }
      function ed() {
        return (0, a.jsxs)(T.Z, {
          children: [
            (0, a.jsx)(T.Z.Title, { title: "DRAI" }),
            (0, a.jsx)(T.Z.Content, {
              children: (0, a.jsx)(ei, { children: (0, a.jsx)(ec, {}) }),
            }),
          ],
        });
      }
      var ex = s(93373),
        eo = s(41157);
      function em() {
        let { stakeBalance: e, vestingEsOrder: t } = (0, g.B)();
        return (0, a.jsxs)("div", {
          className:
            " flex flex-col justify-between items-stretch w-full gap-5",
          children: [
            (0, a.jsxs)("div", {
              className: "bg-[#1E122F] rounded-xl p-5  ",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex justify-between items-center w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col  gap-1 leading-5",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-start gap-1 text-base",
                          children: [
                            (0, a.jsx)("img", {
                              className: "w-4 h-4 md:w-5 md:h-5",
                              src: "/staking/esDRAI.png",
                              alt: "order",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-[13px] lg:text-base font-manrope",
                              children: (0, f.uf)(
                                null == e ? void 0 : e.total_staked_esorder,
                                { decimal: 2 }
                              ),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-xs lg:text-[13px] text-primary-50 leading-4",
                          children: "My staked esDRAI",
                        }),
                      ],
                    }),
                    (0, a.jsx)(eo.default, {
                      href: "/vesting",
                      children: (0, a.jsxs)(D.z, {
                        variant: "outline",
                        className: "pl-4 pr-3 py-3",
                        children: ["Go to vest", (0, a.jsx)(ex.Z, {})],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(j, { className: "my-5" }),
                (0, a.jsxs)("div", {
                  className:
                    "text-[13px] text-primary-50 leading-4 flex items-center justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-start gap-1",
                      children: [
                        (0, a.jsx)(v.default, {
                          content:
                            "You can choose to claim your vested DRAI from day 16 after the minimum vesting period. On day 16, the vesting progress reaches 50% and is linearly vested to 100% on day 90. If you claim before day 90, your unvested DRAI will be burned.",
                          children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(y.Z, {
                              className: "w-[16px] h-[16px] inline-block",
                            }),
                          }),
                        }),
                        "Vesting period",
                      ],
                    }),
                    (0, a.jsx)("div", { children: "15-90 days" }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "bg-[#1E122F] rounded-xl p-5  flex justify-between items-center w-full ",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col  gap-1 leading-5",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-start gap-1 text-base",
                      children: [
                        (0, a.jsx)("img", {
                          className: "w-4 h-4 md:w-5 md:h-5",
                          src: "/staking/esDRAI.png",
                          alt: "order",
                        }),
                        (0, a.jsx)("div", {
                          className: "text-[13px] lg:text-base font-manrope",
                          children: (0, f.uf)(t, { decimal: 2 }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children: "Vesting esDRAI",
                    }),
                  ],
                }),
                (0, a.jsx)(eo.default, {
                  href: "/vesting",
                  children: (0, a.jsxs)(D.z, {
                    variant: "outline",
                    className: "pl-4 pr-3 py-3",
                    children: ["View details", (0, a.jsx)(ex.Z, {})],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eu() {
        return (0, a.jsxs)(T.Z, {
          children: [
            (0, a.jsx)(T.Z.Title, { title: "esDRAI" }),
            (0, a.jsx)(T.Z.Content, {
              className: "md:flex-row justify-between items-center gap-5",
              children: (0, a.jsx)(em, {}),
            }),
          ],
        });
      }
      var eh = s(60866),
        ef = s(34082);
      function ep(e) {
        let { open: t, onOpenChange: s, onSuccess: n } = e,
          { currentChain: i } = (0, ef.useWalletAdapterContext)(),
          { userValor: l, poolInfo: r } = (0, g.B)(),
          { redeemRequest: c } = (0, C.Z)(),
          [d, x] = (0, h.useState)(""),
          o = (0, h.useMemo)(
            () =>
              !d || Number.isNaN(d)
                ? E.A.invalid
                : !l || new (k())(d).gt(l)
                ? E.A.insufficientBalance
                : E.A.valid,
            [l, d]
          ),
          { setTxHash: m } = (0, O.w)(),
          [u, p] = (0, h.useState)(!1),
          y = async () => {
            if (d && !u) {
              p(!0);
              try {
                let e = await c(Number(d));
                console.log("redeem res", e), m(e.hash), s(!1);
              } catch (e) {
                (0, _.Z)(e);
              } finally {
                p(!1);
              }
            }
          },
          N = (0, h.useMemo)(
            () =>
              (null == r ? void 0 : r.valor_price_usdc) && d
                ? (0, f.uf)(new (k())(r.valor_price_usdc).mul(d).toNumber(), {
                    decimal: 2,
                  })
                : "--",
            [null == r ? void 0 : r.valor_price_usdc, d]
          );
        return (
          (0, h.useEffect)(() => {
            t || (x(""), p(!1));
          }, [t]),
          (0, a.jsx)(w.Vq, {
            open: t,
            onOpenChange: s,
            children: (0, a.jsxs)(w.cZ, {
              className: "",
              children: [
                (0, a.jsx)(w.fK, {
                  children: (0, a.jsx)(w.$N, {
                    children: (0, a.jsx)("div", {
                      className:
                        "flex justify-start items-center text-base gap-2",
                      children: (0, a.jsx)("div", {
                        className: " text-primary-80",
                        children: "Redeem VALOR",
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)(w.a7, {
                  children: [
                    (0, a.jsx)(S.Z, {
                      balance: l,
                      value: d,
                      setValue: x,
                      tokenInfo: {
                        tokenName: "VALOR",
                        tokenImage: "/staking/valor.svg",
                      },
                      valueValidStatus: o,
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-2 mt-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "text-[11px] md:text-[13px] text-primary-50 flex items-center justify-between",
                          children: [
                            (0, a.jsx)("div", {
                              children: "Receiving network",
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex items-center justify-end gap-1",
                              children: [
                                (0, a.jsx)("img", {
                                  className: "w-3 h-3",
                                  src: ""
                                    .concat(eh.T2)
                                    .concat(
                                      null == i ? void 0 : i.chain_id,
                                      ".png"
                                    ),
                                }),
                                null == i ? void 0 : i.name,
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "text-[11px] md:text-sm text-primary-50 flex justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                "Est.\xa0receiving",
                                (0, a.jsx)(v.default, {
                                  content:
                                    "The price of Valor is influenced by multiple factors, and the price on settlement day may differ from the current price. Therefore, the amount of USDC you receive may differ from the estimated value.",
                                  children: (0, a.jsx)("div", {
                                    className: "relative top-[1px]",
                                    children: (0, a.jsx)(et, {
                                      fill: "rgba(255,255,255,0.5)",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-primary font-manrope",
                                  children: N,
                                }),
                                " USDC",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(j, { className: "my-3" }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex justify-start items-start gap-1 text-[11px] md:text-[13px] mt-3 text-primary-50",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "leading-6 flex items-center justify-center",
                          children: [
                            (0, a.jsx)(et, {
                              fill: "rgba(255,255,255,0.5",
                              className: "flex-shrink-0",
                            }),
                            "\xa0",
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "leading-6",
                          children: [
                            "VALOR will be redeemed into USDC on the next settlement date,\xa0",
                            null == r ? void 0 : r.nextSettlementDateString,
                            ".\xa0Redeemed VALOR are permanently burned.",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex flex-1 mt-5",
                      children: (0, a.jsx)(D.z, {
                        variant: "secondary",
                        disabled: o !== E.A.valid || u,
                        className: "flex-1 h-[40px]",
                        loading: u,
                        onClick: y,
                        children: "Redeem",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var ej = s(84244);
      let eg = h.memo((e) => {
        let { title: t, value: s } = e;
        return (0, a.jsxs)("div", {
          className: "flex justify-between items-center",
          children: [
            (0, a.jsx)("div", {
              className: "text-xs text-primary-50 leading-4",
              children: t,
            }),
            (0, a.jsx)("div", {
              className: "text-xs text-primary",
              children: (0, f.uf)(s, { decimal: 2 }),
            }),
          ],
        });
      });
      function ev() {
        let [e, t] = (0, h.useState)(!1),
          { userValor: s, getUserValor: n, poolInfo: i } = (0, g.B)(),
          { queryValorContract: l } = (0, C.Z)(),
          [r, c] = (0, h.useState)(0),
          [d, x] = (0, h.useState)(0),
          [o, m] = (0, h.useState)(0);
        (0, h.useEffect)(() => {
          let e = async () => {
            let e = await l("getTotalValorEmitted");
            x(new (k())((0, ej.dF)(null != e ? e : 0)).toNumber());
          };
          (async () => {
            let e = await l("getTotalValorAmount");
            c(new (k())((0, ej.dF)(null != e ? e : 0)).toNumber());
          })(),
            e();
        }, []),
          (0, h.useEffect)(() => {
            m(d - r);
          }, [r, d]);
        let u = (0, h.useMemo)(
            () =>
              (null == i ? void 0 : i.valor_price_usdc) && s
                ? "$".concat(
                    (0, f.uf)(new (k())(i.valor_price_usdc).mul(s).toNumber(), {
                      decimal: 2,
                    })
                  )
                : "$0",
            [null == i ? void 0 : i.valor_price_usdc, s]
          ),
          N = (0, h.useMemo)(() => {
            if (!r || !s) return "< 0.0001%";
            let e = new (k())(s).div(r).mul(100);
            return e.lessThan(1e-4)
              ? "< 0.0001%"
              : "".concat(e.toFixed(4, k().ROUND_DOWN), "%");
          }, [r, s]);
        return (0, a.jsxs)("div", {
          className: "bg-[#1E122F] rounded-xl p-5 flex flex-col w-full",
          children: [
            (0, a.jsxs)("div", {
              className: "flex justify-between items-stretch",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center gap-1 w-2/4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "text-[13px] lg:text-base font-manrope flex items-center justify-start gap-1",
                      children: [
                        "$",
                        (0, f.uf)(null == i ? void 0 : i.treasury_pool_value, {
                          decimal: 0,
                        }),
                        (0, a.jsx)(v.default, {
                          content:
                            "60% of Orderly's net fees are added to the treasury daily.",
                          children: (0, a.jsx)("div", {
                            children: (0, a.jsx)(y.Z, {
                              className: "w-[16px] h-[16px] text-primary-50",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children: "Treasury value",
                    }),
                  ],
                }),
                (0, a.jsx)(p, { className: "mx-5" }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center gap-1 w-2/4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-[13px] lg:text-base font-manrope",
                      children: u,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children: "My est. share",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(j, { className: "my-5" }),
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsx)("div", {
                  className: "flex justify-start items-center flex-1 gap-5",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-start gap-1",
                        children: [
                          (0, a.jsx)("img", {
                            className:
                              "w-[16px] h-[18px] md:w-[17px] md:h-[20px]",
                            src: "/staking/valor.svg",
                            alt: "order",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-end justify-start text-[13px] lg:text-base  leading-5 gap-1 font-manrope",
                            children: [
                              (0, f.uf)(s, { decimal: 2 }),
                              (0, a.jsx)(v.default, {
                                content: (0, a.jsxs)("div", {
                                  className: "text-primary-50 space-y-3",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("div", {
                                          children:
                                            "Your VALOR balance entitles you to",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: "text-primary",
                                          children: [" ", N, " "],
                                        }),
                                        (0, a.jsx)("span", {
                                          children:
                                            "of the current protocol treasury. Check VALOR supply details below.",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "p-4 bg-[#201532] space-y-2.5",
                                      children: [
                                        (0, a.jsx)(eg, {
                                          title: "Emitted to date",
                                          value: d,
                                        }),
                                        (0, a.jsx)(eg, {
                                          title: "Burned",
                                          value: o,
                                        }),
                                        (0, a.jsx)(j, {}),
                                        (0, a.jsx)(eg, {
                                          title: "Current circ. supply",
                                          value: r,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                children: (0, a.jsxs)("div", {
                                  className: "text-primary-50 text-[13px]",
                                  children: [
                                    "(",
                                    (0, a.jsx)("span", {
                                      className: "underline decoration-dashed",
                                      children: "Details",
                                    }),
                                    ")",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "text-xs lg:text-[13px] text-primary-50 leading-4",
                        children: "My VALOR",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(D.z, {
                  variant: "outline",
                  disabled: !s,
                  onClick: () => {
                    s && s > 0 && t(!0);
                  },
                  children: "Redeem",
                }),
              ],
            }),
            (0, a.jsx)(j, { className: "my-5" }),
            (0, a.jsx)("div", {
              className:
                "text-[13px] text-primary-50 leading-4 flex items-center justify-between",
              children: (0, a.jsxs)("div", {
                className: "flex items-center justify-start gap-1",
                children: [
                  (0, a.jsx)(v.default, {
                    content:
                      "All redeemed VALOR will be settled into USDC at the end of each epoch. Redeemed VALOR are permanently burned.",
                    children: (0, a.jsx)("div", {
                      children: (0, a.jsx)(y.Z, {
                        className: "w-[16px] h-[16px] inline-block",
                      }),
                    }),
                  }),
                  "Redemption will be processed on ",
                  null == i ? void 0 : i.nextSettlementDateString,
                  ".",
                ],
              }),
            }),
            (0, a.jsx)(O.q, {
              onSuccess: () => {
                A.toast.success(
                  "Redemption request submitted. Please return after ".concat(
                    null == i ? void 0 : i.nextSettlementDateString,
                    "."
                  )
                );
              },
              children: (0, a.jsx)(ep, { open: e, onOpenChange: t }),
            }),
          ],
        });
      }
      eg.displayName = "DisplayValue";
      var ey = s(56464),
        eN = s(19283);
      function ew() {
        let [e, t] = (0, h.useState)([]),
          [s, a] = (0, h.useState)([]),
          { redeemInfo: n } = (0, g.B)();
        return (
          (0, h.useEffect)(() => {
            if (!(null == n ? void 0 : n.chainDetails)) {
              t([]), a([]);
              return;
            }
            let e = Array.from(n.chainDetails).map((e) => {
                let [t, s] = e;
                return { ...s, chainId: t };
              }),
              s = e
                .sort((e, t) => t.available - e.available)
                .map((e) => ({ chainId: e.chainId, usdc: e.available })),
              i = e
                .sort((e, t) => t.pending - e.pending)
                .map((e) => ({ chainId: e.chainId, usdc: e.pending }));
            e.some((e) => e.available > 0) && (s = s.filter((e) => e.usdc > 0)),
              e.some((e) => e.pending > 0) && (i = i.filter((e) => e.usdc > 0)),
              t(s),
              a(i);
          }, [n]),
          { availableList: e, pendingList: s }
        );
      }
      var eb = s(31313);
      function ek() {
        let [e, t] = h.useState(!1),
          {
            currentChain: s,
            walletAdapter: n,
            setCurrentChain: i,
            onConnect: l,
          } = (0, ef.useWalletAdapterContext)(),
          { availableList: r } = ew(),
          c = async (e) => {
            if ((console.log("chain", e), n)) {
              if ("SOL" === n.namespace) {
                if (!eb.d.includes(e.chain_id)) return t(!1), l(e).then();
              } else {
                if (!eb.d.includes(e.chain_id))
                  return n.changeChain(e).then((t) => {
                    t && i(e);
                  });
                t(!1),
                  setTimeout(() => {
                    l(e).then();
                  }, 0);
              }
            }
            i(e), t(!1);
          };
        return (0, a.jsx)("div", {
          className: "select-none",
          children: (0, a.jsxs)(ey.h_, {
            open: e,
            onOpenChange: t,
            children: [
              (0, a.jsx)(ey.$F, {
                children:
                  s &&
                  (0, a.jsxs)("div", {
                    className: (0, f.cn)(
                      "flex items-center cursor-pointer px-2 md:px-3 gap-1",
                      "w-[52px] h-[32px] md:w-[64px] md:h-[32px]",
                      "bg-[rgba(255,255,255,0.08)] rounded-full"
                    ),
                    children: [
                      (0, a.jsx)("img", {
                        className: "w-[16px] h-[16px] md:w-[20px] md:h-[20px] ",
                        src: "https://oss.orderly.network/static/network_logo/".concat(
                          s.chain_id,
                          ".png"
                        ),
                        alt: s.name,
                      }),
                      (0, a.jsx)(eN.Z, {
                        className: (0, f.cn)(
                          "w-[16px] h-[16px]",
                          "text-primary",
                          "transition-all duration-300",
                          e ? "rotate-180" : "rotate-0"
                        ),
                      }),
                    ],
                  }),
              }),
              (0, a.jsx)(ey.AW, {
                className: (0, f.cn)(
                  "bg-[rgba(56,35,93,0.2)] backdrop-blur-[25px] ",
                  "py-2",
                  " rounded-[8px]"
                ),
                onCloseAutoFocus: (e) => e.preventDefault(),
                align: "start",
                children: r.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: (0, f.cn)(
                        "flex justify-between items-center px-3 py-2 hover:bg-[rgba(255,255,255,0.08)] rounded-[8px] cursor-pointer gap-[18px]",
                        e.chainId !== (null == s ? void 0 : s.chain_id) &&
                          "opacity-50"
                      ),
                      onClick: () => c({ chain_id: e.chainId }),
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex items-center",
                          children: (0, a.jsx)("img", {
                            className:
                              "w-[16px] h-[16px] md:w-[20px] md:h-[20px]",
                            src: "https://oss.orderly.network/static/network_logo/".concat(
                              e.chainId,
                              ".png"
                            ),
                            alt: e.chainId,
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex justify-start items-center gap-0.5 text-[13px] ",
                          children: [
                            (0, a.jsx)(q, {
                              children: (0, f.uf)(e.usdc, { decimal: 2 }),
                            }),
                            (0, a.jsx)("span", {
                              className: "text-primary-50",
                              children: "USDC",
                            }),
                          ],
                        }),
                      ],
                    },
                    e.chainId
                  )
                ),
              }),
            ],
          }),
        });
      }
      function eD(e) {
        let [t, s] = (0, h.useState)(!1),
          { claimUSDCRequest: n } = (0, C.Z)(),
          { setTxHash: i } = (0, O.w)(),
          l = async () => {
            if (!t) {
              s(!0);
              try {
                var a;
                let t = await n(
                  null !== (a = e.availableUsdc) && void 0 !== a ? a : 0
                );
                console.log("claim usdc res", t), i(t.hash);
              } catch (e) {
                (0, _.Z)(e);
              } finally {
                s(!1);
              }
            }
          };
        return (0, a.jsx)(D.z, {
          variant: "outline",
          className: "secondary-outline",
          disabled: e.isDisabled || t,
          loading: t,
          onClick: l,
          children: "Claim",
        });
      }
      function eC(e) {
        return (0, a.jsx)(O.q, {
          onSuccess: () =>
            A.toast.success("You have successfully claimed USDC."),
          children: (0, a.jsx)(eD, { ...e }),
        });
      }
      function e_() {
        let { redeemInfo: e, poolInfo: t } = (0, g.B)(),
          { currentChain: s } = (0, ef.useWalletAdapterContext)(),
          n = (0, h.useMemo)(() => {
            var t;
            if (!s) return 0;
            let a =
              null == e
                ? void 0
                : e.chainDetails.get(null == s ? void 0 : s.chain_id);
            return null !== (t = null == a ? void 0 : a.available) &&
              void 0 !== t
              ? t
              : 0;
          }, [s, e]),
          { pendingList: i } = ew();
        return (0, a.jsxs)("div", {
          className: "bg-[#1E122F] rounded-xl p-5 flex flex-col w-full",
          children: [
            (0, a.jsxs)("div", {
              className: "flex justify-between items-stretch",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center gap-1 w-2/4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-[13px] lg:text-base font-manrope",
                      children: (0, f.uf)(null == e ? void 0 : e.valor, {
                        decimal: 2,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children: "Redeeming VALOR",
                    }),
                  ],
                }),
                (0, a.jsx)(p, { className: "mx-5" }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col justify-center items-center gap-1 w-2/4",
                  children: [
                    (0, a.jsx)("div", {
                      className: "text-[13px] lg:text-base font-manrope",
                      children: null == t ? void 0 : t.nextSettlementDateString,
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "text-xs lg:text-[13px] text-primary-50 leading-4",
                      children: "Next settlement",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(j, { className: "my-5" }),
            (0, a.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex justify-start items-center flex-1 gap-2 lg:gap-5",
                  children: [
                    (0, a.jsx)(ek, {}),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-start text-[13px] lg:text-base font-manrope",
                          children: [
                            (0, f.uf)(n, { decimal: 2 }),
                            (0, a.jsx)("div", {
                              className: "text-primary-50",
                              children: "\xa0USDC",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "text-xs lg:text-[13px] text-primary-50 leading-4",
                          children: "Available now",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(eC, { isDisabled: !n, availableUsdc: n }),
              ],
            }),
            (0, a.jsx)(j, { className: "my-5" }),
            (0, a.jsxs)("div", {
              className:
                "text-[13px] text-primary-50 leading-4 flex items-center justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-start gap-1",
                  children: [
                    (0, a.jsx)(v.default, {
                      content:
                        "USDC redeemed from VALOR will be available for claiming 2 days after the settlement.",
                      children: (0, a.jsx)("div", {
                        children: (0, a.jsx)(y.Z, {
                          className: "w-[16px] h-[16px] inline-block",
                        }),
                      }),
                    }),
                    "Pending assets",
                  ],
                }),
                (0, a.jsx)(v.default, {
                  className: "w-auto md:max-w-[400px]",
                  content: (0, a.jsx)("div", {
                    className: "flex flex-col gap-2.5",
                    children: i.map((e) =>
                      (0, a.jsxs)(
                        "div",
                        {
                          className:
                            "flex justify-between items-center gap-[18px]",
                          children: [
                            (0, a.jsx)("div", {
                              className: "flex items-center",
                              children: (0, a.jsx)("img", {
                                className:
                                  "w-[16px] h-[16px] md:w-[20px] md:h-[20px]",
                                src: "https://oss.orderly.network/static/network_logo/".concat(
                                  e.chainId,
                                  ".png"
                                ),
                                alt: e.chainId,
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "flex justify-start items-center gap-0.5 text-[13px] ",
                              children: [
                                (0, a.jsx)(q, {
                                  children: (0, f.uf)(e.usdc, { decimal: 2 }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-primary-50",
                                  children: "USDC",
                                }),
                              ],
                            }),
                          ],
                        },
                        e.chainId
                      )
                    ),
                  }),
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex underline-offset-4 underline decoration-dashed font-manrope",
                    children: [
                      (0, a.jsx)("div", {
                        className: "text-primary ",
                        children: (0, f.uf)(
                          null == e ? void 0 : e.pendingTotal,
                          { decimal: 2 }
                        ),
                      }),
                      "\xa0USDC",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eR() {
        return (0, a.jsxs)(T.Z, {
          className: "mb-[40px] md:mb-[60px]",
          children: [
            (0, a.jsx)(T.Z.Title, {
              title: (0, a.jsxs)("div", {
                className: "flex items-center justify-start gap-1",
                children: [
                  (0, a.jsx)("span", { children: "VALOR" }),
                  (0, a.jsx)(v.default, {
                    content:
                      "VALOR is emitted linearly to all DRAI/esDRAI stakers, representing a share of the Orderly protocol treasury. Redeeming it gives you the corresponding share of assets in the treasury, but you forfeit any Future protocol revenue on the redeemed VALOR.",
                    children: (0, a.jsx)("div", {
                      children: (0, a.jsx)(y.Z, {
                        className: "w-[16px] h-[16px] text-primary-50",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(T.Z.Content, {
              className: "md:flex-row justify-between items-center gap-5",
              children: [(0, a.jsx)(ev, {}), (0, a.jsx)(e_, {})],
            }),
          ],
        });
      }
      var eO = s(79434),
        eS = s(41356),
        eE = s(21837);
      function e$() {
        let { connected: e, address: t } = (0, Z.useAppContext)(),
          { walletAdapter: s, isNotSupportChain: r } = (0,
          ef.useWalletAdapterContext)();
        return (
          (0, h.useEffect)(() => {
            document.title = "Staking | Orderly Network";
          }, []),
          (0, a.jsx)(g.E, {
            children: (0, a.jsxs)(eS.u, {
              children: [
                (0, a.jsx)(n.Z, {}),
                (0, a.jsxs)("div", {
                  className: "relative ",
                  children: [
                    (0, a.jsx)(i.default, { navClassName: "" }),
                    (0, a.jsx)(l.Z, { children: (0, a.jsx)(u, {}) }),
                    (0, a.jsx)(l.Z, { children: (0, a.jsx)(V, {}) }),
                    s && s.connected
                      ? "SOL" === s.namespace
                        ? (0, a.jsx)(l.Z, {
                            children: (0, a.jsx)("div", {
                              className:
                                "w-full border border-solid border-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                              children: (0, a.jsx)(eE.Z, {}),
                            }),
                          })
                        : r
                        ? (0, a.jsx)(l.Z, {
                            children: (0, a.jsx)("div", {
                              className:
                                "w-full outline outline-[1px] outline-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                              children: (0, a.jsx)(eO.Z, {
                                content:
                                  "Please switch to a supported network to view your staking details.",
                                type: eO.B.WrongNetwork,
                              }),
                            }),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)(l.Z, {
                                className: "flex flex-col md:flex-row md:gap-5",
                                children: [
                                  (0, a.jsx)(ed, {}),
                                  (0, a.jsx)(eu, {}),
                                ],
                              }),
                              (0, a.jsx)(l.Z, { children: (0, a.jsx)(eR, {}) }),
                            ],
                          })
                      : (0, a.jsx)(l.Z, {
                          children: (0, a.jsx)("div", {
                            className:
                              "w-full border border-solid border-white/[.06] rounded-[12px] p-8 bg-[#170B29] mb-[60px] min-h-[420px] flex flex-col justify-center items-center gap-5",
                            children: (0, a.jsx)(eO.Z, {
                              content:
                                "Connect wallet to view your staking details.",
                              type: eO.B.Connect,
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    93373: function (e, t, s) {
      "use strict";
      var a = s(6272);
      s(8627),
        (t.Z = () =>
          (0, a.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 18 18",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsx)("mask", {
                id: "mask0_4004_7203",
                style: { maskType: "alpha" },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "18",
                height: "18",
                children: (0, a.jsx)("rect", {
                  width: "18",
                  height: "18",
                  fill: "#D9D9D9",
                }),
              }),
              (0, a.jsx)("g", {
                mask: "url(#mask0_4004_7203)",
                children: (0, a.jsx)("path", {
                  d: "M11.8125 9.67501H3.59998V8.32501H11.8125L8.04373 4.55626L8.99998 3.60001L14.4 9.00001L8.99998 14.4L8.04373 13.4438L11.8125 9.67501Z",
                }),
              }),
            ],
          }));
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
        return e((e.s = 45571));
      }
    ),
      (_N_E = e.O());
  },
]);
