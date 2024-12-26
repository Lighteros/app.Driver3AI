"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6112],
  {
    65921: function (t, e, r) {
      r.d(e, {
        r: function () {
          return s;
        },
      });
      let n = {
          TRANSACTION_RAN_OUT_OF_GAS: "TRANSACTION_RAN_OUT_OF_GAS",
          TRANSACTION_UNDERPRICED: "TRANSACTION_UNDERPRICED",
          REJECTED_TRANSACTION: "REJECTED_TRANSACTION",
          CALL_REVERTED: "CALL_REVERTED",
          EXECUTION_REVERTED: "EXECUTION_REVERTED",
          NONCE_TOO_LOW: "NONCE_TOO_LOW",
          INSUFFICIENT_FUNDS_FOR_GAS: "INSUFFICIENT_FUNDS_FOR_GAS",
          MAX_PRIORITY_FEE_PER_GAS_HIGHER_THAN_MAX_FEE_PER_GAS:
            "MAX_PRIORITY_FEE_PER_GAS_HIGHER_THAN_MAX_FEE_PER_GAS",
          MAX_FEE_PER_GAS_LESS_THAN_BLOCK_BASE_FEE:
            "MAX_FEE_PER_GAS_LESS_THAN_BLOCK_BASE_FEE",
          UNKNOWN_ERROR: "UNKNOWN_ERROR",
        },
        a = {
          NONCE_EXPIRED: "NONCE_EXPIRED",
          UNPREDICTABLE_GAS_LIMIT: "UNPREDICTABLE_GAS_LIMIT",
          ACTION_REJECTED: "ACTION_REJECTED",
          CALL_EXCEPTION: "CALL_EXCEPTION",
        },
        i = {
          REJECTED_TRANSACTION: 4001,
          REQUIRE_TRANSACTION: -32603,
          ERROR_WHILE_FORMATTING_OUTPUT_FROM_RPC: -32603,
          TRANSACTION_UNDERPRICED: -32e3,
        };
      function s(t) {
        let e = t.error,
          r = (function (t) {
            if (t.code === a.NONCE_EXPIRED && void 0 !== t.transaction)
              return {
                errorCode: n.NONCE_TOO_LOW,
                context: t.transaction.nonce.toString(),
              };
            if (t.code === a.ACTION_REJECTED && "sendTransaction" === t.action)
              return { errorCode: n.REJECTED_TRANSACTION, context: t.message };
            if (t.code === a.CALL_EXCEPTION && void 0 !== t.reason)
              return { errorCode: n.CALL_REVERTED, context: t.reason };
            let e = (function (t) {
              if (t.code === a.UNPREDICTABLE_GAS_LIMIT) {
                if (
                  void 0 !== t.error &&
                  t.error.code === i.REQUIRE_TRANSACTION &&
                  void 0 !== t.error.data &&
                  void 0 !== t.error.data.message
                ) {
                  let e = t.error.data.message;
                  if (e.includes("execution reverted: "))
                    return {
                      errorCode: n.EXECUTION_REVERTED,
                      context: e.slice(20),
                    };
                }
                if (
                  void 0 !== t.error &&
                  void 0 !== t.error.error &&
                  void 0 !== t.error.error.error &&
                  t.error.error.error.code === i.TRANSACTION_UNDERPRICED &&
                  void 0 !== t.error.error.body
                )
                  try {
                    let e = JSON.parse(t.error.error.body);
                    if (void 0 !== e.error && void 0 !== e.error.message) {
                      if (
                        e.error.message.includes(
                          "gas required exceeds allowance (0)"
                        )
                      )
                        return {
                          errorCode: n.INSUFFICIENT_FUNDS_FOR_GAS,
                          context: void 0,
                        };
                      if (
                        e.error.message.includes(
                          "max priority fee per gas higher than max fee per gas"
                        )
                      )
                        return {
                          errorCode:
                            n.MAX_PRIORITY_FEE_PER_GAS_HIGHER_THAN_MAX_FEE_PER_GAS,
                          context: void 0,
                        };
                      if (
                        e.error.message.includes(
                          "max fee per gas less than block base fee"
                        )
                      )
                        return {
                          errorCode: n.MAX_FEE_PER_GAS_LESS_THAN_BLOCK_BASE_FEE,
                          context: void 0,
                        };
                    }
                  } catch (t) {
                    return;
                  }
              }
            })(t);
            if (void 0 !== e) return e;
          })(t);
        if (void 0 !== r) return r;
        if (void 0 !== e) {
          let t = (function (t) {
            let e = t.code,
              r = t.message;
            if (void 0 !== e) {
              if (void 0 !== r) {
                let t = (function (t, e) {
                  var r;
                  if (t !== i.ERROR_WHILE_FORMATTING_OUTPUT_FROM_RPC) return;
                  let a =
                    null == (r = e.split("RPC '")[1]) ? void 0 : r.slice(0, -1);
                  if (void 0 !== a)
                    try {
                      let t = JSON.parse(a);
                      if (void 0 === t.value || void 0 === t.value.data) return;
                      if (t.value.data.code === i.TRANSACTION_UNDERPRICED)
                        return {
                          errorCode: n.TRANSACTION_UNDERPRICED,
                          context: void 0,
                        };
                    } catch (t) {
                      return;
                    }
                })(e, r);
                if (void 0 !== t) return t;
              }
              if (e === i.REJECTED_TRANSACTION)
                return { errorCode: n.REJECTED_TRANSACTION, context: r };
              if (
                e === i.REQUIRE_TRANSACTION &&
                void 0 !== r &&
                r.includes("execution reverted: ")
              )
                return {
                  errorCode: n.EXECUTION_REVERTED,
                  context: r.slice(20),
                };
            }
          })(e);
          if (void 0 !== t) return t;
        }
        if (void 0 !== t.transaction && void 0 !== t.receipt) {
          let e = t.transaction.gasLimit;
          if (t.receipt.gasUsed.gte(e))
            return {
              errorCode: n.TRANSACTION_RAN_OUT_OF_GAS,
              context: t.transaction.gasLimit.toString(),
            };
        }
        return void 0 !== t.error && void 0 !== t.error.message
          ? { errorCode: n.UNKNOWN_ERROR, context: t.error.message }
          : void 0 !== t.code
          ? { errorCode: n.UNKNOWN_ERROR, context: t.code.toString() }
          : { errorCode: n.UNKNOWN_ERROR, context: void 0 };
      }
    },
    39250: function (t, e, r) {
      r.d(e, {
        bO: function () {
          return l;
        },
        eI: function () {
          return o;
        },
      });
      var n,
        a = r(49255),
        i =
          (((n = i || {}).INFLIGHT = "INFLIGHT"),
          (n.DELIVERED = "DELIVERED"),
          (n.FAILED = "FAILED"),
          n),
        s = {
          testnet: "https://api-testnet.layerzero-scan.com",
          mainnet: "https://api-mainnet.layerzero-scan.com",
          sandbox: "https://api-sandbox.layerzero-scan.com",
        },
        o = (t, e) => {
          let r = s[t];
          if (!r) throw Error("No endpoint for env ".concat(t));
          let n = a.Z.create({ baseURL: r });
          return {
            async getMessagesBySrcTxHash(t) {
              if (!t) throw Error("srcTxHash must be provided");
              let { data: e } = await n.get("/tx/".concat(t));
              return e;
            },
          };
        };
      async function l(t, e) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 3e3,
          n = o(
            (function (t) {
              if (t < 1e4) return "mainnet";
              if (t < 2e4) return "testnet";
              if (t < 3e4) return "sandbox";
              if (t < 4e4) return "mainnet";
              if (t < 5e4) return "testnet";
              if (t < 6e4) return "sandbox";
              throw Error("Unknown chainId ".concat(t));
            })(t)
          );
        for (;;) {
          try {
            let { messages: t } = await n.getMessagesBySrcTxHash(e),
              r = t[0];
            if (t.length > 1)
              return Promise.reject(Error("More than one message"));
            if ((null == r ? void 0 : r.status) === "FAILED")
              return Promise.reject(
                Error("Message failed ".concat(r.dstTxError))
              );
            if ((null == r ? void 0 : r.status) === "DELIVERED") return r;
          } catch (t) {}
          await c(r);
        }
      }
      var c = function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
        return new Promise((e) => setTimeout(e, t));
      };
    },
    13842: function (t, e, r) {
      r.d(e, {
        VY: function () {
          return G;
        },
        fC: function () {
          return F;
        },
        h_: function () {
          return L;
        },
        xz: function () {
          return U;
        },
      });
      var n = r(42582),
        a = r(8627),
        i = r(32251),
        s = r(60915),
        o = r(70982),
        l = r(14354),
        c = r(46840),
        u = r(27715),
        h = r(74035),
        f = r(77180),
        d = r(9150),
        p = r(69329),
        g = r(70735),
        m = r(4203),
        w = r(81318),
        y = r(42172),
        A = r(85571);
      let b = "Popover",
        [_, E] = (0, o.b)(b, [f.D7]),
        k = (0, f.D7)(),
        [P, N] = _(b),
        R = (0, a.forwardRef)((t, e) => {
          let { __scopePopover: r, ...o } = t,
            l = N("PopoverTrigger", r),
            c = k(r),
            u = (0, s.e)(e, l.triggerRef),
            h = (0, a.createElement)(
              g.WV.button,
              (0, n.Z)(
                {
                  type: "button",
                  "aria-haspopup": "dialog",
                  "aria-expanded": l.open,
                  "aria-controls": l.contentId,
                  "data-state": M(l.open),
                },
                o,
                { ref: u, onClick: (0, i.M)(t.onClick, l.onOpenToggle) }
              )
            );
          return l.hasCustomAnchor
            ? h
            : (0, a.createElement)(f.ee, (0, n.Z)({ asChild: !0 }, c), h);
        }),
        T = "PopoverPortal",
        [C, x] = _(T, { forceMount: void 0 }),
        O = "PopoverContent",
        I = (0, a.forwardRef)((t, e) => {
          let r = x(O, t.__scopePopover),
            { forceMount: i = r.forceMount, ...s } = t,
            o = N(O, t.__scopePopover);
          return (0, a.createElement)(
            p.z,
            { present: i || o.open },
            o.modal
              ? (0, a.createElement)(D, (0, n.Z)({}, s, { ref: e }))
              : (0, a.createElement)(B, (0, n.Z)({}, s, { ref: e }))
          );
        }),
        D = (0, a.forwardRef)((t, e) => {
          let r = N(O, t.__scopePopover),
            o = (0, a.useRef)(null),
            l = (0, s.e)(e, o),
            c = (0, a.useRef)(!1);
          return (
            (0, a.useEffect)(() => {
              let t = o.current;
              if (t) return (0, y.Ry)(t);
            }, []),
            (0, a.createElement)(
              A.Z,
              { as: m.g7, allowPinchZoom: !0 },
              (0, a.createElement)(
                S,
                (0, n.Z)({}, t, {
                  ref: l,
                  trapFocus: r.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0, i.M)(t.onCloseAutoFocus, (t) => {
                    var e;
                    t.preventDefault(),
                      c.current ||
                        null === (e = r.triggerRef.current) ||
                        void 0 === e ||
                        e.focus();
                  }),
                  onPointerDownOutside: (0, i.M)(
                    t.onPointerDownOutside,
                    (t) => {
                      let e = t.detail.originalEvent,
                        r = 0 === e.button && !0 === e.ctrlKey,
                        n = 2 === e.button || r;
                      c.current = n;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: (0, i.M)(
                    t.onFocusOutside,
                    (t) => t.preventDefault(),
                    { checkForDefaultPrevented: !1 }
                  ),
                })
              )
            )
          );
        }),
        B = (0, a.forwardRef)((t, e) => {
          let r = N(O, t.__scopePopover),
            i = (0, a.useRef)(!1),
            s = (0, a.useRef)(!1);
          return (0, a.createElement)(
            S,
            (0, n.Z)({}, t, {
              ref: e,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (e) => {
                var n, a;
                null === (n = t.onCloseAutoFocus) ||
                  void 0 === n ||
                  n.call(t, e),
                  e.defaultPrevented ||
                    (i.current ||
                      null === (a = r.triggerRef.current) ||
                      void 0 === a ||
                      a.focus(),
                    e.preventDefault()),
                  (i.current = !1),
                  (s.current = !1);
              },
              onInteractOutside: (e) => {
                var n, a;
                null === (n = t.onInteractOutside) ||
                  void 0 === n ||
                  n.call(t, e),
                  e.defaultPrevented ||
                    ((i.current = !0),
                    "pointerdown" !== e.detail.originalEvent.type ||
                      (s.current = !0));
                let o = e.target;
                (null === (a = r.triggerRef.current) || void 0 === a
                  ? void 0
                  : a.contains(o)) && e.preventDefault(),
                  "focusin" === e.detail.originalEvent.type &&
                    s.current &&
                    e.preventDefault();
              },
            })
          );
        }),
        S = (0, a.forwardRef)((t, e) => {
          let {
              __scopePopover: r,
              trapFocus: i,
              onOpenAutoFocus: s,
              onCloseAutoFocus: o,
              disableOutsidePointerEvents: h,
              onEscapeKeyDown: d,
              onPointerDownOutside: p,
              onFocusOutside: g,
              onInteractOutside: m,
              ...w
            } = t,
            y = N(O, r),
            A = k(r);
          return (
            (0, c.EW)(),
            (0, a.createElement)(
              u.M,
              {
                asChild: !0,
                loop: !0,
                trapped: i,
                onMountAutoFocus: s,
                onUnmountAutoFocus: o,
              },
              (0, a.createElement)(
                l.XB,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: h,
                  onInteractOutside: m,
                  onEscapeKeyDown: d,
                  onPointerDownOutside: p,
                  onFocusOutside: g,
                  onDismiss: () => y.onOpenChange(!1),
                },
                (0, a.createElement)(
                  f.VY,
                  (0, n.Z)(
                    {
                      "data-state": M(y.open),
                      role: "dialog",
                      id: y.contentId,
                    },
                    A,
                    w,
                    {
                      ref: e,
                      style: {
                        ...w.style,
                        "--radix-popover-content-transform-origin":
                          "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width":
                          "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height":
                          "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width":
                          "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height":
                          "var(--radix-popper-anchor-height)",
                      },
                    }
                  )
                )
              )
            )
          );
        });
      function M(t) {
        return t ? "open" : "closed";
      }
      let F = (t) => {
          let {
              __scopePopover: e,
              children: r,
              open: n,
              defaultOpen: i,
              onOpenChange: s,
              modal: o = !1,
            } = t,
            l = k(e),
            c = (0, a.useRef)(null),
            [u, d] = (0, a.useState)(!1),
            [p = !1, g] = (0, w.T)({ prop: n, defaultProp: i, onChange: s });
          return (0, a.createElement)(
            f.fC,
            l,
            (0, a.createElement)(
              P,
              {
                scope: e,
                contentId: (0, h.M)(),
                triggerRef: c,
                open: p,
                onOpenChange: g,
                onOpenToggle: (0, a.useCallback)(() => g((t) => !t), [g]),
                hasCustomAnchor: u,
                onCustomAnchorAdd: (0, a.useCallback)(() => d(!0), []),
                onCustomAnchorRemove: (0, a.useCallback)(() => d(!1), []),
                modal: o,
              },
              r
            )
          );
        },
        U = R,
        L = (t) => {
          let {
              __scopePopover: e,
              forceMount: r,
              children: n,
              container: i,
            } = t,
            s = N(T, e);
          return (0, a.createElement)(
            C,
            { scope: e, forceMount: r },
            (0, a.createElement)(
              p.z,
              { present: r || s.open },
              (0, a.createElement)(d.h, { asChild: !0, container: i }, n)
            )
          );
        },
        G = I;
    },
    7321: function (t, e, r) {
      r.d(e, {
        _: function () {
          return a;
        },
      });
      var n = r(31570);
      function a(t, e) {
        var r = (0, n.J)(t, e, "update");
        return (function (t, e) {
          if (e.set) {
            if (!e.get)
              throw TypeError("attempted to read set only private field");
            return (
              "__destrWrapper" in e ||
                (e.__destrWrapper = {
                  set value(v) {
                    e.set.call(t, v);
                  },
                  get value() {
                    return e.get.call(t);
                  },
                }),
              e.__destrWrapper
            );
          }
          if (!e.writable)
            throw TypeError("attempted to set read only private field");
          return e;
        })(t, r);
      }
    },
    39241: function (t, e, r) {
      r.d(e, {
        R: function () {
          return U;
        },
      });
      var n = r(8730),
        a = r(36284),
        i = r(25454),
        s = r(54400),
        o = r(15587),
        l = r(14755),
        c = r(25661);
      class u extends s.XI {
        defaultValue() {
          return "0x0000000000000000000000000000000000000000";
        }
        encode(t, e) {
          let r = c._.dereference(e, "string");
          try {
            r = (0, o.K)(r);
          } catch (t) {
            return this._throwError(t.message, e);
          }
          return t.writeValue(r);
        }
        decode(t) {
          return (0, o.K)((0, l.m9)(t.readValue(), 20));
        }
        constructor(t) {
          super("address", "address", t, !1);
        }
      }
      var h = r(63718);
      class f extends s.XI {
        defaultValue() {
          return this.coder.defaultValue();
        }
        encode(t, e) {
          return this.coder.encode(t, e);
        }
        decode(t) {
          return this.coder.decode(t);
        }
        constructor(t) {
          super(t.name, t.type, "_", t.dynamic), (this.coder = t);
        }
      }
      function d(t, e, r) {
        let n = [];
        if (Array.isArray(r)) n = r;
        else if (r && "object" == typeof r) {
          let t = {};
          n = e.map((e) => {
            let n = e.localName;
            return (
              (0, i.hu)(
                n,
                "cannot encode object for signature with missing names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: e }, value: r }
              ),
              (0, i.hu)(
                !t[n],
                "cannot encode object for signature with duplicate names",
                "INVALID_ARGUMENT",
                { argument: "values", info: { coder: e }, value: r }
              ),
              (t[n] = !0),
              r[n]
            );
          });
        } else (0, i.en)(!1, "invalid tuple value", "tuple", r);
        (0, i.en)(
          e.length === n.length,
          "types/value length mismatch",
          "tuple",
          r
        );
        let a = new s.QV(),
          o = new s.QV(),
          l = [];
        return (
          e.forEach((t, e) => {
            let r = n[e];
            if (t.dynamic) {
              let e = o.length;
              t.encode(o, r);
              let n = a.writeUpdatableValue();
              l.push((t) => {
                n(t + e);
              });
            } else t.encode(a, r);
          }),
          l.forEach((t) => {
            t(a.length);
          }),
          t.appendWriter(a) + t.appendWriter(o)
        );
      }
      function p(t, e) {
        let r = [],
          n = [],
          a = t.subReader(0);
        return (
          e.forEach((e) => {
            let s = null;
            if (e.dynamic) {
              let r = t.readIndex(),
                n = a.subReader(r);
              try {
                s = e.decode(n);
              } catch (t) {
                if ((0, i.VZ)(t, "BUFFER_OVERRUN")) throw t;
                ((s = t).baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type);
              }
            } else
              try {
                s = e.decode(t);
              } catch (t) {
                if ((0, i.VZ)(t, "BUFFER_OVERRUN")) throw t;
                ((s = t).baseType = e.name),
                  (s.name = e.localName),
                  (s.type = e.type);
              }
            if (void 0 == s) throw Error("investigate");
            r.push(s), n.push(e.localName || null);
          }),
          s.x4.fromItems(r, n)
        );
      }
      class g extends s.XI {
        defaultValue() {
          let t = this.coder.defaultValue(),
            e = [];
          for (let r = 0; r < this.length; r++) e.push(t);
          return e;
        }
        encode(t, e) {
          let r = c._.dereference(e, "array");
          Array.isArray(r) || this._throwError("expected array value", r);
          let n = this.length;
          -1 === n && ((n = r.length), t.writeValue(r.length)),
            (0, i.fG)(
              r.length,
              n,
              "coder array" + (this.localName ? " " + this.localName : "")
            );
          let a = [];
          for (let t = 0; t < r.length; t++) a.push(this.coder);
          return d(t, a, r);
        }
        decode(t) {
          let e = this.length;
          -1 === e &&
            ((e = t.readIndex()),
            (0, i.hu)(
              e * s.Bx <= t.dataLength,
              "insufficient data length",
              "BUFFER_OVERRUN",
              { buffer: t.bytes, offset: e * s.Bx, length: t.dataLength }
            ));
          let r = [];
          for (let t = 0; t < e; t++) r.push(new f(this.coder));
          return p(t, r);
        }
        constructor(t, e, r) {
          super(
            "array",
            t.type + "[" + (e >= 0 ? e : "") + "]",
            r,
            -1 === e || t.dynamic
          ),
            (0, h.h)(this, { coder: t, length: e });
        }
      }
      class m extends s.XI {
        defaultValue() {
          return !1;
        }
        encode(t, e) {
          let r = c._.dereference(e, "bool");
          return t.writeValue(r ? 1 : 0);
        }
        decode(t) {
          return !!t.readValue();
        }
        constructor(t) {
          super("bool", "bool", t, !1);
        }
      }
      var w = r(22110);
      class y extends s.XI {
        defaultValue() {
          return "0x";
        }
        encode(t, e) {
          return (e = (0, w.h_)(e)), t.writeValue(e.length) + t.writeBytes(e);
        }
        decode(t) {
          return t.readBytes(t.readIndex(), !0);
        }
        constructor(t, e) {
          super(t, t, e, !0);
        }
      }
      class A extends y {
        decode(t) {
          return (0, w.Dv)(super.decode(t));
        }
        constructor(t) {
          super("bytes", t);
        }
      }
      class b extends s.XI {
        defaultValue() {
          return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
            0,
            2 + 2 * this.size
          );
        }
        encode(t, e) {
          let r = (0, w.h_)(c._.dereference(e, this.type));
          return (
            r.length !== this.size &&
              this._throwError("incorrect data length", e),
            t.writeBytes(r)
          );
        }
        decode(t) {
          return (0, w.Dv)(t.readBytes(this.size));
        }
        constructor(t, e) {
          let r = "bytes" + String(t);
          super(r, r, e, !1), (0, h.h)(this, { size: t }, { size: "number" });
        }
      }
      let _ = new Uint8Array([]);
      class E extends s.XI {
        defaultValue() {
          return null;
        }
        encode(t, e) {
          return null != e && this._throwError("not null", e), t.writeBytes(_);
        }
        decode(t) {
          return t.readBytes(0), null;
        }
        constructor(t) {
          super("null", "", t, !1);
        }
      }
      let k = BigInt(0),
        P = BigInt(1),
        N = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      class R extends s.XI {
        defaultValue() {
          return 0;
        }
        encode(t, e) {
          let r = (0, l.yT)(c._.dereference(e, this.type)),
            n = (0, l.sS)(N, 8 * s.Bx);
          if (this.signed) {
            let t = (0, l.sS)(n, 8 * this.size - 1);
            (r > t || r < -(t + P)) &&
              this._throwError("value out-of-bounds", e),
              (r = (0, l.$j)(r, 8 * s.Bx));
          } else
            (r < k || r > (0, l.sS)(n, 8 * this.size)) &&
              this._throwError("value out-of-bounds", e);
          return t.writeValue(r);
        }
        decode(t) {
          let e = (0, l.sS)(t.readValue(), 8 * this.size);
          return this.signed && (e = (0, l._Y)(e, 8 * this.size)), e;
        }
        constructor(t, e, r) {
          let n = (e ? "int" : "uint") + 8 * t;
          super(n, n, r, !1),
            (0, h.h)(
              this,
              { size: t, signed: e },
              { size: "number", signed: "boolean" }
            );
        }
      }
      var T = r(45256);
      class C extends y {
        defaultValue() {
          return "";
        }
        encode(t, e) {
          return super.encode(t, (0, T.Y0)(c._.dereference(e, "string")));
        }
        decode(t) {
          return (0, T.ZN)(super.decode(t));
        }
        constructor(t) {
          super("string", t);
        }
      }
      class x extends s.XI {
        defaultValue() {
          let t = [];
          this.coders.forEach((e) => {
            t.push(e.defaultValue());
          });
          let e = this.coders.reduce((t, e) => {
            let r = e.localName;
            return r && (t[r] || (t[r] = 0), t[r]++), t;
          }, {});
          return (
            this.coders.forEach((r, n) => {
              let a = r.localName;
              a &&
                1 === e[a] &&
                ("length" === a && (a = "_length"),
                null == t[a] && (t[a] = t[n]));
            }),
            Object.freeze(t)
          );
        }
        encode(t, e) {
          let r = c._.dereference(e, "tuple");
          return d(t, this.coders, r);
        }
        decode(t) {
          return p(t, this.coders);
        }
        constructor(t, e) {
          let r = !1,
            n = [];
          t.forEach((t) => {
            t.dynamic && (r = !0), n.push(t.type);
          }),
            super("tuple", "tuple(" + n.join(",") + ")", e, r),
            (0, h.h)(this, { coders: Object.freeze(t.slice()) });
        }
      }
      var O = r(55653);
      let I = new Map();
      I.set(0, "GENERIC_PANIC"),
        I.set(1, "ASSERT_FALSE"),
        I.set(17, "OVERFLOW"),
        I.set(18, "DIVIDE_BY_ZERO"),
        I.set(33, "ENUM_RANGE_ERROR"),
        I.set(34, "BAD_STORAGE_DATA"),
        I.set(49, "STACK_UNDERFLOW"),
        I.set(50, "ARRAY_RANGE_ERROR"),
        I.set(65, "OUT_OF_MEMORY"),
        I.set(81, "UNINITIALIZED_FUNCTION_CALL");
      let D = new RegExp(/^bytes([0-9]*)$/),
        B = new RegExp(/^(u?int)([0-9]*)$/),
        S = null,
        M = 1024;
      var F = new WeakSet();
      class U {
        getDefaultValue(t) {
          return new x(
            t.map((t) => (0, n._)(this, F, L).call(this, O._R.from(t))),
            "_"
          ).defaultValue();
        }
        encode(t, e) {
          (0, i.fG)(e.length, t.length, "types/values length mismatch");
          let r = new x(
              t.map((t) => (0, n._)(this, F, L).call(this, O._R.from(t))),
              "_"
            ),
            a = new s.QV();
          return r.encode(a, e), a.data;
        }
        decode(t, e, r) {
          return new x(
            t.map((t) => (0, n._)(this, F, L).call(this, O._R.from(t))),
            "_"
          ).decode(new s.Ej(e, r, M));
        }
        static _setDefaultMaxInflation(t) {
          (0, i.en)(
            "number" == typeof t && Number.isInteger(t),
            "invalid defaultMaxInflation factor",
            "value",
            t
          ),
            (M = t);
        }
        static defaultAbiCoder() {
          return null == S && (S = new U()), S;
        }
        static getBuiltinCallException(t, e, r) {
          return (function (t, e, r, n) {
            let a = "missing revert data",
              s = null,
              l = null;
            if (r) {
              a = "execution reverted";
              let t = (0, w.Pw)(r);
              if (((r = (0, w.Dv)(r)), 0 === t.length))
                (a += " (no data present; likely require(false) occurred"),
                  (s = "require(false)");
              else if (t.length % 32 != 4)
                a += " (could not decode reason; invalid data length)";
              else if ("0x08c379a0" === (0, w.Dv)(t.slice(0, 4)))
                try {
                  (s = n.decode(["string"], t.slice(4))[0]),
                    (l = {
                      signature: "Error(string)",
                      name: "Error",
                      args: [s],
                    }),
                    (a += ": ".concat(JSON.stringify(s)));
                } catch (t) {
                  a += " (could not decode reason; invalid string data)";
                }
              else if ("0x4e487b71" === (0, w.Dv)(t.slice(0, 4)))
                try {
                  let e = Number(n.decode(["uint256"], t.slice(4))[0]);
                  (l = {
                    signature: "Panic(uint256)",
                    name: "Panic",
                    args: [e],
                  }),
                    (s = "Panic due to "
                      .concat(I.get(e) || "UNKNOWN", "(")
                      .concat(e, ")")),
                    (a += ": ".concat(s));
                } catch (t) {
                  a += " (could not decode panic code)";
                }
              else a += " (unknown custom error)";
            }
            let c = { to: e.to ? (0, o.K)(e.to) : null, data: e.data || "0x" };
            return (
              e.from && (c.from = (0, o.K)(e.from)),
              (0, i.wf)(a, "CALL_EXCEPTION", {
                action: t,
                data: r,
                reason: s,
                transaction: c,
                invocation: null,
                revert: l,
              })
            );
          })(t, e, r, U.defaultAbiCoder());
        }
        constructor() {
          (0, a._)(this, F);
        }
      }
      function L(t) {
        if (t.isArray())
          return new g(
            (0, n._)(this, F, L).call(this, t.arrayChildren),
            t.arrayLength,
            t.name
          );
        if (t.isTuple())
          return new x(
            t.components.map((t) => (0, n._)(this, F, L).call(this, t)),
            t.name
          );
        switch (t.baseType) {
          case "address":
            return new u(t.name);
          case "bool":
            return new m(t.name);
          case "string":
            return new C(t.name);
          case "bytes":
            return new A(t.name);
          case "":
            return new E(t.name);
        }
        let e = t.type.match(B);
        if (e) {
          let r = parseInt(e[2] || "256");
          return (
            (0, i.en)(
              0 !== r && r <= 256 && r % 8 == 0,
              "invalid " + e[1] + " bit length",
              "param",
              t
            ),
            new R(r / 8, "int" === e[1], t.name)
          );
        }
        if ((e = t.type.match(D))) {
          let r = parseInt(e[1]);
          return (
            (0, i.en)(0 !== r && r <= 32, "invalid bytes length", "param", t),
            new b(r, t.name)
          );
        }
        (0, i.en)(!1, "invalid type", "type", t.type);
      }
    },
    54400: function (t, e, r) {
      r.d(e, {
        Bx: function () {
          return f;
        },
        Ej: function () {
          return B;
        },
        QV: function () {
          return P;
        },
        XI: function () {
          return b;
        },
        x4: function () {
          return y;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(8730),
        o = r(36284),
        l = r(25454),
        c = r(14755),
        u = r(22110),
        h = r(63718);
      let f = 32,
        d = new Uint8Array(f),
        p = ["then"],
        g = {};
      function m(t, e) {
        let r = Error(
          "deferred error during ABI decoding triggered accessing ".concat(t)
        );
        throw ((r.error = e), r);
      }
      var w = new WeakMap();
      class y extends Array {
        toArray(t) {
          let e = [];
          return (
            this.forEach((r, n) => {
              r instanceof Error && m("index ".concat(n), r),
                t && r instanceof y && (r = r.toArray(t)),
                e.push(r);
            }),
            e
          );
        }
        toObject(t) {
          return (0, n._)(this, w).reduce((e, r, n) => {
            if (
              ((0, l.hu)(
                null != r,
                "value at index ${ index } unnamed",
                "UNSUPPORTED_OPERATION",
                { operation: "toObject()" }
              ),
              !(r in e))
            ) {
              let n = this.getValue(r);
              t && n instanceof y && (n = n.toObject(t)), (e[r] = n);
            }
            return e;
          }, {});
        }
        slice(t, e) {
          null == t && (t = 0),
            t < 0 && (t += this.length) < 0 && (t = 0),
            null == e && (e = this.length),
            e < 0 && (e += this.length) < 0 && (e = 0),
            e > this.length && (e = this.length);
          let r = [],
            a = [];
          for (let i = t; i < e; i++)
            r.push(this[i]), a.push((0, n._)(this, w)[i]);
          return new y(g, r, a);
        }
        filter(t, e) {
          let r = [],
            a = [];
          for (let i = 0; i < this.length; i++) {
            let s = this[i];
            s instanceof Error && m("index ".concat(i), s),
              t.call(e, s, i, this) &&
                (r.push(s), a.push((0, n._)(this, w)[i]));
          }
          return new y(g, r, a);
        }
        map(t, e) {
          let r = [];
          for (let n = 0; n < this.length; n++) {
            let a = this[n];
            a instanceof Error && m("index ".concat(n), a),
              r.push(t.call(e, a, n, this));
          }
          return r;
        }
        getValue(t) {
          let e = (0, n._)(this, w).indexOf(t);
          if (-1 === e) return;
          let r = this[e];
          return (
            r instanceof Error &&
              m("property ".concat(JSON.stringify(t)), r.error),
            r
          );
        }
        static fromItems(t, e) {
          return new y(g, t, e);
        }
        constructor(...t) {
          let e = t[0],
            r = t[1],
            n = (t[2] || []).slice(),
            s = !0;
          e !== g && ((r = t), (n = []), (s = !1)),
            super(r.length),
            (0, a._)(this, w, { writable: !0, value: void 0 }),
            r.forEach((t, e) => {
              this[e] = t;
            });
          let o = n.reduce(
            (t, e) => (
              "string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t
            ),
            new Map()
          );
          if (
            ((0, i._)(
              this,
              w,
              Object.freeze(
                r.map((t, e) => {
                  let r = n[e];
                  return null != r && 1 === o.get(r) ? r : null;
                })
              )
            ),
            !s)
          )
            return;
          return (
            Object.freeze(this),
            new Proxy(this, {
              get: (t, e, r) => {
                if ("string" == typeof e) {
                  if (e.match(/^[0-9]+$/)) {
                    let r = (0, c.Dx)(e, "%index");
                    if (r < 0 || r >= this.length)
                      throw RangeError("out of result range");
                    let n = t[r];
                    return n instanceof Error && m("index ".concat(r), n), n;
                  }
                  if (p.indexOf(e) >= 0) return Reflect.get(t, e, r);
                  let n = t[e];
                  if (n instanceof Function)
                    return function () {
                      for (
                        var e = arguments.length, a = Array(e), i = 0;
                        i < e;
                        i++
                      )
                        a[i] = arguments[i];
                      return n.apply(this === r ? t : this, a);
                    };
                  if (!(e in t))
                    return t.getValue.apply(this === r ? t : this, [e]);
                }
                return Reflect.get(t, e, r);
              },
            })
          );
        }
      }
      function A(t) {
        let e = (0, c.ot)(t);
        return (
          (0, l.hu)(e.length <= f, "value out-of-bounds", "BUFFER_OVERRUN", {
            buffer: e,
            length: f,
            offset: e.length,
          }),
          e.length !== f &&
            (e = (0, u.h_)((0, u.zo)([d.slice(e.length % f), e]))),
          e
        );
      }
      class b {
        _throwError(t, e) {
          (0, l.en)(!1, t, this.localName, e);
        }
        constructor(t, e, r, n) {
          (0, h.h)(
            this,
            { name: t, type: e, localName: r, dynamic: n },
            {
              name: "string",
              type: "string",
              localName: "string",
              dynamic: "boolean",
            }
          );
        }
      }
      var _ = new WeakMap(),
        E = new WeakMap(),
        k = new WeakSet();
      class P {
        get data() {
          return (0, u.zo)((0, n._)(this, _));
        }
        get length() {
          return (0, n._)(this, E);
        }
        appendWriter(t) {
          return (0, s._)(this, k, N).call(this, (0, u.h_)(t.data));
        }
        writeBytes(t) {
          let e = (0, u.h_)(t),
            r = e.length % f;
          return (
            r && (e = (0, u.h_)((0, u.zo)([e, d.slice(r)]))),
            (0, s._)(this, k, N).call(this, e)
          );
        }
        writeValue(t) {
          return (0, s._)(this, k, N).call(this, A(t));
        }
        writeUpdatableValue() {
          let t = (0, n._)(this, _).length;
          return (
            (0, n._)(this, _).push(d),
            (0, i._)(this, E, (0, n._)(this, E) + f),
            (e) => {
              (0, n._)(this, _)[t] = A(e);
            }
          );
        }
        constructor() {
          (0, o._)(this, k),
            (0, a._)(this, _, { writable: !0, value: void 0 }),
            (0, a._)(this, E, { writable: !0, value: void 0 }),
            (0, i._)(this, _, []),
            (0, i._)(this, E, 0);
        }
      }
      function N(t) {
        return (
          (0, n._)(this, _).push(t),
          (0, i._)(this, E, (0, n._)(this, E) + t.length),
          t.length
        );
      }
      var R = new WeakMap(),
        T = new WeakMap(),
        C = new WeakMap(),
        x = new WeakMap(),
        O = new WeakMap(),
        I = new WeakSet(),
        D = new WeakSet();
      class B {
        get data() {
          return (0, u.Dv)((0, n._)(this, R));
        }
        get dataLength() {
          return (0, n._)(this, R).length;
        }
        get consumed() {
          return (0, n._)(this, T);
        }
        get bytes() {
          return new Uint8Array((0, n._)(this, R));
        }
        subReader(t) {
          let e = new B(
            (0, n._)(this, R).slice((0, n._)(this, T) + t),
            this.allowLoose,
            (0, n._)(this, O)
          );
          return (0, i._)(e, x, this), e;
        }
        readBytes(t, e) {
          let r = (0, s._)(this, D, M).call(this, 0, t, !!e);
          return (
            (0, s._)(this, I, S).call(this, t),
            (0, i._)(this, T, (0, n._)(this, T) + r.length),
            r.slice(0, t)
          );
        }
        readValue() {
          return (0, c.Gh)(this.readBytes(f));
        }
        readIndex() {
          return (0, c.He)(this.readBytes(f));
        }
        constructor(t, e, r) {
          (0, o._)(this, I),
            (0, o._)(this, D),
            (0, a._)(this, R, { writable: !0, value: void 0 }),
            (0, a._)(this, T, { writable: !0, value: void 0 }),
            (0, a._)(this, C, { writable: !0, value: void 0 }),
            (0, a._)(this, x, { writable: !0, value: void 0 }),
            (0, a._)(this, O, { writable: !0, value: void 0 }),
            (0, h.h)(this, { allowLoose: !!e }),
            (0, i._)(this, R, (0, u.h_)(t)),
            (0, i._)(this, C, 0),
            (0, i._)(this, x, null),
            (0, i._)(this, O, null != r ? r : 1024),
            (0, i._)(this, T, 0);
        }
      }
      function S(t) {
        var e;
        if ((0, n._)(this, x))
          return (0, s._)((e = (0, n._)(this, x)), I, S).call(e, t);
        (0, i._)(this, C, (0, n._)(this, C) + t),
          (0, l.hu)(
            1 > (0, n._)(this, O) ||
              (0, n._)(this, C) <= (0, n._)(this, O) * this.dataLength,
            "compressed ABI data exceeds inflation ratio of ".concat(
              (0, n._)(this, O),
              " ( see: https://github.com/ethers-io/ethers.js/issues/4537 )"
            ),
            "BUFFER_OVERRUN",
            {
              buffer: (0, u.h_)((0, n._)(this, R)),
              offset: (0, n._)(this, T),
              length: t,
              info: {
                bytesRead: (0, n._)(this, C),
                dataLength: this.dataLength,
              },
            }
          );
      }
      function M(t, e, r) {
        let a = Math.ceil(e / f) * f;
        return (
          (0, n._)(this, T) + a > (0, n._)(this, R).length &&
            (this.allowLoose &&
            r &&
            (0, n._)(this, T) + e <= (0, n._)(this, R).length
              ? (a = e)
              : (0, l.hu)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                  buffer: (0, u.h_)((0, n._)(this, R)),
                  length: (0, n._)(this, R).length,
                  offset: (0, n._)(this, T) + a,
                })),
          (0, n._)(this, R).slice((0, n._)(this, T), (0, n._)(this, T) + a)
        );
      }
    },
    55653: function (t, e, r) {
      r.d(e, {
        HY: function () {
          return tr;
        },
        IC: function () {
          return ti;
        },
        QV: function () {
          return ts;
        },
        Xg: function () {
          return to;
        },
        YW: function () {
          return tc;
        },
        _R: function () {
          return tt;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(7321),
        o = r(8730),
        l = r(36284),
        c = r(14755),
        u = r(25454),
        h = r(63718),
        f = r(88909);
      function d(t) {
        let e = new Set();
        return t.forEach((t) => e.add(t)), Object.freeze(e);
      }
      let p = d("external public payable override".split(" ")),
        g =
          "constant external internal payable private public pure view override",
        m = d(g.split(" ")),
        w = "constructor error event fallback function receive struct",
        y = d(w.split(" ")),
        A = "calldata memory storage payable indexed",
        b = d(A.split(" ")),
        _ = d([w, A, "tuple returns", g].join(" ").split(" ")),
        E = {
          "(": "OPEN_PAREN",
          ")": "CLOSE_PAREN",
          "[": "OPEN_BRACKET",
          "]": "CLOSE_BRACKET",
          ",": "COMMA",
          "@": "AT",
        },
        k = RegExp("^(\\s*)"),
        P = RegExp("^([0-9]+)"),
        N = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
        R = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
        T = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
      var C = new WeakMap(),
        x = new WeakMap(),
        O = new WeakSet();
      class I {
        get offset() {
          return (0, n._)(this, C);
        }
        get length() {
          return (0, n._)(this, x).length - (0, n._)(this, C);
        }
        clone() {
          return new I((0, n._)(this, x));
        }
        reset() {
          (0, i._)(this, C, 0);
        }
        popKeyword(t) {
          let e = this.peek();
          if ("KEYWORD" !== e.type || !t.has(e.text))
            throw Error("expected keyword ".concat(e.text));
          return this.pop().text;
        }
        popType(t) {
          if (this.peek().type !== t) {
            let e = this.peek();
            throw Error(
              "expected "
                .concat(t, "; got ")
                .concat(e.type, " ")
                .concat(JSON.stringify(e.text))
            );
          }
          return this.pop().text;
        }
        popParen() {
          let t = this.peek();
          if ("OPEN_PAREN" !== t.type) throw Error("bad start");
          let e = (0, o._)(this, O, D).call(
            this,
            (0, n._)(this, C) + 1,
            t.match + 1
          );
          return (0, i._)(this, C, t.match + 1), e;
        }
        popParams() {
          let t = this.peek();
          if ("OPEN_PAREN" !== t.type) throw Error("bad start");
          let e = [];
          for (; (0, n._)(this, C) < t.match - 1; ) {
            let t = this.peek().linkNext;
            e.push((0, o._)(this, O, D).call(this, (0, n._)(this, C) + 1, t)),
              (0, i._)(this, C, t);
          }
          return (0, i._)(this, C, t.match + 1), e;
        }
        peek() {
          if ((0, n._)(this, C) >= (0, n._)(this, x).length)
            throw Error("out-of-bounds");
          return (0, n._)(this, x)[(0, n._)(this, C)];
        }
        peekKeyword(t) {
          let e = this.peekType("KEYWORD");
          return null != e && t.has(e) ? e : null;
        }
        peekType(t) {
          if (0 === this.length) return null;
          let e = this.peek();
          return e.type === t ? e.text : null;
        }
        pop() {
          let t = this.peek();
          return (0, s._)(this, C).value++, t;
        }
        toString() {
          let t = [];
          for (let e = (0, n._)(this, C); e < (0, n._)(this, x).length; e++) {
            let r = (0, n._)(this, x)[e];
            t.push("".concat(r.type, ":").concat(r.text));
          }
          return "<TokenString ".concat(t.join(" "), ">");
        }
        constructor(t) {
          (0, l._)(this, O),
            (0, a._)(this, C, { writable: !0, value: void 0 }),
            (0, a._)(this, x, { writable: !0, value: void 0 }),
            (0, i._)(this, C, 0),
            (0, i._)(this, x, t.slice());
        }
      }
      function D() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new I(
          (0, n._)(this, x)
            .slice(t, e)
            .map((e) =>
              Object.freeze(
                Object.assign({}, e, {
                  match: e.match - t,
                  linkBack: e.linkBack - t,
                  linkNext: e.linkNext - t,
                })
              )
            )
        );
      }
      function B(t) {
        let e = [],
          r = (e) => {
            let r = i < t.length ? JSON.stringify(t[i]) : "$EOI";
            throw Error(
              "invalid token ".concat(r, " at ").concat(i, ": ").concat(e)
            );
          },
          n = [],
          a = [],
          i = 0;
        for (; i < t.length; ) {
          let s = t.substring(i),
            o = s.match(k);
          o && ((i += o[1].length), (s = t.substring(i)));
          let l = {
            depth: n.length,
            linkBack: -1,
            linkNext: -1,
            match: -1,
            type: "",
            text: "",
            offset: i,
            value: -1,
          };
          e.push(l);
          let u = E[s[0]] || "";
          if (u) {
            if (((l.type = u), (l.text = s[0]), i++, "OPEN_PAREN" === u))
              n.push(e.length - 1), a.push(e.length - 1);
            else if ("CLOSE_PAREN" == u)
              0 === n.length && r("no matching open bracket"),
                (l.match = n.pop()),
                (e[l.match].match = e.length - 1),
                l.depth--,
                (l.linkBack = a.pop()),
                (e[l.linkBack].linkNext = e.length - 1);
            else if ("COMMA" === u)
              (l.linkBack = a.pop()),
                (e[l.linkBack].linkNext = e.length - 1),
                a.push(e.length - 1);
            else if ("OPEN_BRACKET" === u) l.type = "BRACKET";
            else if ("CLOSE_BRACKET" === u) {
              let t = e.pop().text;
              if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                let r = e.pop().text;
                (t = r + t), (e[e.length - 1].value = (0, c.Dx)(r));
              }
              if (0 === e.length || "BRACKET" !== e[e.length - 1].type)
                throw Error("missing opening bracket");
              e[e.length - 1].text += t;
            }
            continue;
          }
          if ((o = s.match(N))) {
            if (((l.text = o[1]), (i += l.text.length), _.has(l.text))) {
              l.type = "KEYWORD";
              continue;
            }
            if (l.text.match(T)) {
              l.type = "TYPE";
              continue;
            }
            l.type = "ID";
            continue;
          }
          if ((o = s.match(P))) {
            (l.text = o[1]), (l.type = "NUMBER"), (i += l.text.length);
            continue;
          }
          throw Error(
            "unexpected token "
              .concat(JSON.stringify(s[0]), " at position ")
              .concat(i)
          );
        }
        return new I(e.map((t) => Object.freeze(t)));
      }
      function S(t, e) {
        let r = [];
        for (let n in e.keys()) t.has(n) && r.push(n);
        if (r.length > 1)
          throw Error("conflicting types: ".concat(r.join(", ")));
      }
      function M(t, e) {
        if (e.peekKeyword(y)) {
          let r = e.pop().text;
          if (r !== t) throw Error("expected ".concat(t, ", got ").concat(r));
        }
        return e.popType("ID");
      }
      function F(t, e) {
        let r = new Set();
        for (;;) {
          let n = t.peekType("KEYWORD");
          if (null == n || (e && !e.has(n))) break;
          if ((t.pop(), r.has(n)))
            throw Error("duplicate keywords: ".concat(JSON.stringify(n)));
          r.add(n);
        }
        return Object.freeze(r);
      }
      function U(t) {
        let e = F(t, m);
        return (S(e, d("constant payable nonpayable".split(" "))),
        S(e, d("pure view payable nonpayable".split(" "))),
        e.has("view"))
          ? "view"
          : e.has("pure")
          ? "pure"
          : e.has("payable")
          ? "payable"
          : e.has("nonpayable")
          ? "nonpayable"
          : e.has("constant")
          ? "view"
          : "nonpayable";
      }
      function L(t, e) {
        return t.popParams().map((t) => tt.from(t, e));
      }
      function G(t) {
        if (t.peekType("AT")) {
          if ((t.pop(), t.peekType("NUMBER"))) return (0, c.yT)(t.pop().text);
          throw Error("invalid gas");
        }
        return null;
      }
      function Q(t) {
        if (t.length)
          throw Error(
            "unexpected tokens at offset "
              .concat(t.offset, ": ")
              .concat(t.toString())
          );
      }
      let H = new RegExp(/^(.*)\[([0-9]*)\]$/);
      function W(t) {
        let e = t.match(T);
        if (((0, u.en)(e, "invalid type", "type", t), "uint" === t))
          return "uint256";
        if ("int" === t) return "int256";
        if (e[2]) {
          let r = parseInt(e[2]);
          (0, u.en)(0 !== r && r <= 32, "invalid bytes length", "type", t);
        } else if (e[3]) {
          let r = parseInt(e[3]);
          (0, u.en)(
            0 !== r && r <= 256 && r % 8 == 0,
            "invalid numeric width",
            "type",
            t
          );
        }
        return t;
      }
      let j = {},
        J = Symbol.for("_ethers_internal"),
        V = "_ParamTypeInternal",
        K = "_ErrorInternal",
        z = "_EventInternal",
        Z = "_ConstructorInternal",
        q = "_FallbackInternal",
        Y = "_FunctionInternal",
        X = "_StructInternal";
      var $ = new WeakSet();
      class tt {
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t)) {
            let e = this.name || "";
            if (this.isArray()) {
              let t = JSON.parse(this.arrayChildren.format("json"));
              return (
                (t.name = e),
                (t.type += "[".concat(
                  this.arrayLength < 0 ? "" : String(this.arrayLength),
                  "]"
                )),
                JSON.stringify(t)
              );
            }
            let r = {
              type: "tuple" === this.baseType ? "tuple" : this.type,
              name: e,
            };
            return (
              "boolean" == typeof this.indexed && (r.indexed = this.indexed),
              this.isTuple() &&
                (r.components = this.components.map((e) =>
                  JSON.parse(e.format(t))
                )),
              JSON.stringify(r)
            );
          }
          let e = "";
          return (
            this.isArray()
              ? (e +=
                  this.arrayChildren.format(t) +
                  "[".concat(
                    this.arrayLength < 0 ? "" : String(this.arrayLength),
                    "]"
                  ))
              : this.isTuple()
              ? (e +=
                  "(" +
                  this.components
                    .map((e) => e.format(t))
                    .join("full" === t ? ", " : ",") +
                  ")")
              : (e += this.type),
            "sighash" !== t &&
              (!0 === this.indexed && (e += " indexed"),
              "full" === t && this.name && (e += " " + this.name)),
            e
          );
        }
        isArray() {
          return "array" === this.baseType;
        }
        isTuple() {
          return "tuple" === this.baseType;
        }
        isIndexable() {
          return null != this.indexed;
        }
        walk(t, e) {
          if (this.isArray()) {
            if (!Array.isArray(t)) throw Error("invalid array value");
            if (-1 !== this.arrayLength && t.length !== this.arrayLength)
              throw Error("array is wrong length");
            let r = this;
            return t.map((t) => r.arrayChildren.walk(t, e));
          }
          if (this.isTuple()) {
            if (!Array.isArray(t)) throw Error("invalid tuple value");
            if (t.length !== this.components.length)
              throw Error("array is wrong length");
            let r = this;
            return t.map((t, n) => r.components[n].walk(t, e));
          }
          return e(this.type, t);
        }
        async walkAsync(t, e) {
          let r = [],
            n = [t];
          return (
            (0, o._)(this, $, te).call(this, r, t, e, (t) => {
              n[0] = t;
            }),
            r.length && (await Promise.all(r)),
            n[0]
          );
        }
        static from(t, e) {
          if (tt.isParamType(t)) return t;
          if ("string" == typeof t)
            try {
              return tt.from(B(t), e);
            } catch (e) {
              (0, u.en)(!1, "invalid param type", "obj", t);
            }
          else if (t instanceof I) {
            let r = "",
              n = "",
              a = null;
            F(t, d(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN")
              ? ((n = "tuple"),
                (a = t.popParams().map((t) => tt.from(t))),
                (r = "tuple(".concat(a.map((t) => t.format()).join(","), ")")))
              : (n = r = W(t.popType("TYPE")));
            let i = null,
              s = null;
            for (; t.length && t.peekType("BRACKET"); ) {
              let e = t.pop();
              (i = new tt(j, "", r, n, null, a, s, i)),
                (s = e.value),
                (r += e.text),
                (n = "array"),
                (a = null);
            }
            let o = null;
            if (F(t, b).has("indexed")) {
              if (!e) throw Error("");
              o = !0;
            }
            let l = t.peekType("ID") ? t.pop().text : "";
            if (t.length) throw Error("leftover tokens");
            return new tt(j, l, r, n, o, a, s, i);
          }
          let r = t.name;
          (0, u.en)(
            !r || ("string" == typeof r && r.match(R)),
            "invalid name",
            "obj.name",
            r
          );
          let n = t.indexed;
          null != n &&
            ((0, u.en)(
              e,
              "parameter cannot be indexed",
              "obj.indexed",
              t.indexed
            ),
            (n = !!n));
          let a = t.type,
            i = a.match(H);
          if (i) {
            let e = parseInt(i[2] || "-1"),
              s = tt.from({ type: i[1], components: t.components });
            return new tt(j, r || "", a, "array", n, null, e, s);
          }
          if ("tuple" === a || a.startsWith("tuple(") || a.startsWith("(")) {
            let e =
              null != t.components ? t.components.map((t) => tt.from(t)) : null;
            return new tt(j, r || "", a, "tuple", n, e, null, null);
          }
          return new tt(j, r || "", (a = W(t.type)), a, n, null, null, null);
        }
        static isParamType(t) {
          return t && t[J] === V;
        }
        constructor(t, e, r, n, a, i, s, o) {
          if (
            ((0, l._)(this, $),
            (0, u.NK)(t, j, "ParamType"),
            Object.defineProperty(this, J, { value: V }),
            i && (i = Object.freeze(i.slice())),
            "array" === n)
          ) {
            if (null == s || null == o) throw Error("");
          } else if (null != s || null != o) throw Error("");
          if ("tuple" === n) {
            if (null == i) throw Error("");
          } else if (null != i) throw Error("");
          (0, h.h)(this, {
            name: e,
            type: r,
            baseType: n,
            indexed: a,
            components: i,
            arrayLength: s,
            arrayChildren: o,
          });
        }
      }
      function te(t, e, r, n) {
        var a;
        if (this.isArray()) {
          if (!Array.isArray(e)) throw Error("invalid array value");
          if (-1 !== this.arrayLength && e.length !== this.arrayLength)
            throw Error("array is wrong length");
          let a = this.arrayChildren,
            i = e.slice();
          i.forEach((e, n) => {
            (0, o._)(a, $, te).call(a, t, e, r, (t) => {
              i[n] = t;
            });
          }),
            n(i);
          return;
        }
        if (this.isTuple()) {
          let i;
          let s = this.components;
          if (Array.isArray(e)) i = e.slice();
          else {
            if (null == e || "object" != typeof e)
              throw Error("invalid tuple value");
            i = s.map((t) => {
              if (!t.name)
                throw Error("cannot use object value with unnamed components");
              if (!(t.name in e))
                throw Error("missing value for component ".concat(t.name));
              return e[t.name];
            });
          }
          if (i.length !== this.components.length)
            throw Error("array is wrong length");
          i.forEach((e, n) => {
            (0, o._)((a = s[n]), $, te).call(a, t, e, r, (t) => {
              i[n] = t;
            });
          }),
            n(i);
          return;
        }
        let i = r(this.type, e);
        i.then
          ? t.push(
              (async function () {
                n(await i);
              })()
            )
          : n(i);
      }
      class tr {
        static from(t) {
          if ("string" == typeof t) {
            try {
              tr.from(JSON.parse(t));
            } catch (t) {}
            return tr.from(B(t));
          }
          if (t instanceof I)
            switch (t.peekKeyword(y)) {
              case "constructor":
                return to.from(t);
              case "error":
                return ti.from(t);
              case "event":
                return ts.from(t);
              case "fallback":
              case "receive":
                return tl.from(t);
              case "function":
                return tc.from(t);
              case "struct":
                return tu.from(t);
            }
          else if ("object" == typeof t) {
            switch (t.type) {
              case "constructor":
                return to.from(t);
              case "error":
                return ti.from(t);
              case "event":
                return ts.from(t);
              case "fallback":
              case "receive":
                return tl.from(t);
              case "function":
                return tc.from(t);
              case "struct":
                return tu.from(t);
            }
            (0, u.hu)(
              !1,
              "unsupported type: ".concat(t.type),
              "UNSUPPORTED_OPERATION",
              { operation: "Fragment.from" }
            );
          }
          (0, u.en)(!1, "unsupported frgament object", "obj", t);
        }
        static isConstructor(t) {
          return to.isFragment(t);
        }
        static isError(t) {
          return ti.isFragment(t);
        }
        static isEvent(t) {
          return ts.isFragment(t);
        }
        static isFunction(t) {
          return tc.isFragment(t);
        }
        static isStruct(t) {
          return tu.isFragment(t);
        }
        constructor(t, e, r) {
          (0, u.NK)(t, j, "Fragment"),
            (r = Object.freeze(r.slice())),
            (0, h.h)(this, { type: e, inputs: r });
        }
      }
      class tn extends tr {
        constructor(t, e, r, n) {
          super(t, e, n),
            (0, u.en)(
              "string" == typeof r && r.match(R),
              "invalid identifier",
              "name",
              r
            ),
            (n = Object.freeze(n.slice())),
            (0, h.h)(this, { name: r });
        }
      }
      function ta(t, e) {
        return (
          "(" + e.map((e) => e.format(t)).join("full" === t ? ", " : ",") + ")"
        );
      }
      class ti extends tn {
        get selector() {
          return (0, f.id)(this.format("sighash")).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "error",
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = [];
          return (
            "sighash" !== t && e.push("error"),
            e.push(this.name + ta(t, this.inputs)),
            e.join(" ")
          );
        }
        static from(t) {
          if (ti.isFragment(t)) return t;
          if ("string" == typeof t) return ti.from(B(t));
          if (t instanceof I) {
            let e = M("error", t),
              r = L(t);
            return Q(t), new ti(j, e, r);
          }
          return new ti(j, t.name, t.inputs ? t.inputs.map(tt.from) : []);
        }
        static isFragment(t) {
          return t && t[J] === K;
        }
        constructor(t, e, r) {
          super(t, "error", e, r), Object.defineProperty(this, J, { value: K });
        }
      }
      class ts extends tn {
        get topicHash() {
          return (0, f.id)(this.format("sighash"));
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "event",
              anonymous: this.anonymous,
              name: this.name,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = [];
          return (
            "sighash" !== t && e.push("event"),
            e.push(this.name + ta(t, this.inputs)),
            "sighash" !== t && this.anonymous && e.push("anonymous"),
            e.join(" ")
          );
        }
        static getTopicHash(t, e) {
          return new ts(j, t, (e = (e || []).map((t) => tt.from(t))), !1)
            .topicHash;
        }
        static from(t) {
          if (ts.isFragment(t)) return t;
          if ("string" == typeof t)
            try {
              return ts.from(B(t));
            } catch (e) {
              (0, u.en)(!1, "invalid event fragment", "obj", t);
            }
          else if (t instanceof I) {
            let e = M("event", t),
              r = L(t, !0),
              n = !!F(t, d(["anonymous"])).has("anonymous");
            return Q(t), new ts(j, e, r, n);
          }
          return new ts(
            j,
            t.name,
            t.inputs ? t.inputs.map((t) => tt.from(t, !0)) : [],
            !!t.anonymous
          );
        }
        static isFragment(t) {
          return t && t[J] === z;
        }
        constructor(t, e, r, n) {
          super(t, "event", e, r),
            Object.defineProperty(this, J, { value: z }),
            (0, h.h)(this, { anonymous: n });
        }
      }
      class to extends tr {
        format(t) {
          if (
            ((0, u.hu)(
              null != t && "sighash" !== t,
              "cannot format a constructor for sighash",
              "UNSUPPORTED_OPERATION",
              { operation: "format(sighash)" }
            ),
            "json" === t)
          )
            return JSON.stringify({
              type: "constructor",
              stateMutability: this.payable ? "payable" : "undefined",
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = ["constructor".concat(ta(t, this.inputs))];
          return (
            this.payable && e.push("payable"),
            null != this.gas && e.push("@".concat(this.gas.toString())),
            e.join(" ")
          );
        }
        static from(t) {
          if (to.isFragment(t)) return t;
          if ("string" == typeof t)
            try {
              return to.from(B(t));
            } catch (e) {
              (0, u.en)(!1, "invalid constuctor fragment", "obj", t);
            }
          else if (t instanceof I) {
            F(t, d(["constructor"]));
            let e = L(t),
              r = !!F(t, p).has("payable"),
              n = G(t);
            return Q(t), new to(j, "constructor", e, r, n);
          }
          return new to(
            j,
            "constructor",
            t.inputs ? t.inputs.map(tt.from) : [],
            !!t.payable,
            null != t.gas ? t.gas : null
          );
        }
        static isFragment(t) {
          return t && t[J] === Z;
        }
        constructor(t, e, r, n, a) {
          super(t, e, r),
            Object.defineProperty(this, J, { value: Z }),
            (0, h.h)(this, { payable: n, gas: a });
        }
      }
      class tl extends tr {
        format(t) {
          let e = 0 === this.inputs.length ? "receive" : "fallback";
          return "json" === t
            ? JSON.stringify({
                type: e,
                stateMutability: this.payable ? "payable" : "nonpayable",
              })
            : "".concat(e, "()").concat(this.payable ? " payable" : "");
        }
        static from(t) {
          if (tl.isFragment(t)) return t;
          if ("string" == typeof t)
            try {
              return tl.from(B(t));
            } catch (e) {
              (0, u.en)(!1, "invalid fallback fragment", "obj", t);
            }
          else if (t instanceof I) {
            let e = t.toString(),
              r = t.peekKeyword(d(["fallback", "receive"]));
            if (
              ((0, u.en)(r, "type must be fallback or receive", "obj", e),
              "receive" === t.popKeyword(d(["fallback", "receive"])))
            ) {
              let e = L(t);
              return (
                (0, u.en)(
                  0 === e.length,
                  "receive cannot have arguments",
                  "obj.inputs",
                  e
                ),
                F(t, d(["payable"])),
                Q(t),
                new tl(j, [], !0)
              );
            }
            let n = L(t);
            n.length
              ? (0, u.en)(
                  1 === n.length && "bytes" === n[0].type,
                  "invalid fallback inputs",
                  "obj.inputs",
                  n.map((t) => t.format("minimal")).join(", ")
                )
              : (n = [tt.from("bytes")]);
            let a = U(t);
            if (
              ((0, u.en)(
                "nonpayable" === a || "payable" === a,
                "fallback cannot be constants",
                "obj.stateMutability",
                a
              ),
              F(t, d(["returns"])).has("returns"))
            ) {
              let e = L(t);
              (0, u.en)(
                1 === e.length && "bytes" === e[0].type,
                "invalid fallback outputs",
                "obj.outputs",
                e.map((t) => t.format("minimal")).join(", ")
              );
            }
            return Q(t), new tl(j, n, "payable" === a);
          }
          return "receive" === t.type
            ? new tl(j, [], !0)
            : "fallback" === t.type
            ? new tl(j, [tt.from("bytes")], "payable" === t.stateMutability)
            : void (0, u.en)(!1, "invalid fallback description", "obj", t);
        }
        static isFragment(t) {
          return t && t[J] === q;
        }
        constructor(t, e, r) {
          super(t, "fallback", e),
            Object.defineProperty(this, J, { value: q }),
            (0, h.h)(this, { payable: r });
        }
      }
      class tc extends tn {
        get selector() {
          return (0, f.id)(this.format("sighash")).substring(0, 10);
        }
        format(t) {
          if ((null == t && (t = "sighash"), "json" === t))
            return JSON.stringify({
              type: "function",
              name: this.name,
              constant: this.constant,
              stateMutability:
                "nonpayable" !== this.stateMutability
                  ? this.stateMutability
                  : void 0,
              payable: this.payable,
              gas: null != this.gas ? this.gas : void 0,
              inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
            });
          let e = [];
          return (
            "sighash" !== t && e.push("function"),
            e.push(this.name + ta(t, this.inputs)),
            "sighash" !== t &&
              ("nonpayable" !== this.stateMutability &&
                e.push(this.stateMutability),
              this.outputs &&
                this.outputs.length &&
                (e.push("returns"), e.push(ta(t, this.outputs))),
              null != this.gas && e.push("@".concat(this.gas.toString()))),
            e.join(" ")
          );
        }
        static getSelector(t, e) {
          return new tc(
            j,
            t,
            "view",
            (e = (e || []).map((t) => tt.from(t))),
            [],
            null
          ).selector;
        }
        static from(t) {
          if (tc.isFragment(t)) return t;
          if ("string" == typeof t)
            try {
              return tc.from(B(t));
            } catch (e) {
              (0, u.en)(!1, "invalid function fragment", "obj", t);
            }
          else if (t instanceof I) {
            let e = M("function", t),
              r = L(t),
              n = U(t),
              a = [];
            F(t, d(["returns"])).has("returns") && (a = L(t));
            let i = G(t);
            return Q(t), new tc(j, e, n, r, a, i);
          }
          let e = t.stateMutability;
          return (
            null != e ||
              ((e = "payable"),
              "boolean" == typeof t.constant
                ? ((e = "view"),
                  t.constant ||
                    ((e = "payable"),
                    "boolean" != typeof t.payable ||
                      t.payable ||
                      (e = "nonpayable")))
                : "boolean" != typeof t.payable ||
                  t.payable ||
                  (e = "nonpayable")),
            new tc(
              j,
              t.name,
              e,
              t.inputs ? t.inputs.map(tt.from) : [],
              t.outputs ? t.outputs.map(tt.from) : [],
              null != t.gas ? t.gas : null
            )
          );
        }
        static isFragment(t) {
          return t && t[J] === Y;
        }
        constructor(t, e, r, n, a, i) {
          super(t, "function", e, n),
            Object.defineProperty(this, J, { value: Y }),
            (a = Object.freeze(a.slice())),
            (0, h.h)(this, {
              constant: "view" === r || "pure" === r,
              gas: i,
              outputs: a,
              payable: "payable" === r,
              stateMutability: r,
            });
        }
      }
      class tu extends tn {
        format() {
          throw Error("@TODO");
        }
        static from(t) {
          if ("string" == typeof t)
            try {
              return tu.from(B(t));
            } catch (e) {
              (0, u.en)(!1, "invalid struct fragment", "obj", t);
            }
          else if (t instanceof I) {
            let e = M("struct", t),
              r = L(t);
            return Q(t), new tu(j, e, r);
          }
          return new tu(j, t.name, t.inputs ? t.inputs.map(tt.from) : []);
        }
        static isFragment(t) {
          return t && t[J] === X;
        }
        constructor(t, e, r) {
          super(t, "struct", e, r),
            Object.defineProperty(this, J, { value: X });
        }
      }
    },
    25661: function (t, e, r) {
      r.d(e, {
        _: function () {
          return d;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(25454),
        o = r(63718);
      let l = {};
      function c(t, e) {
        let r = !1;
        return (
          e < 0 && ((r = !0), (e *= -1)),
          new d(l, "".concat(r ? "" : "u", "int").concat(e), t, {
            signed: r,
            width: e,
          })
        );
      }
      function u(t, e) {
        return new d(l, "bytes".concat(e || ""), t, { size: e });
      }
      let h = Symbol.for("_ethers_typed");
      var f = new WeakMap();
      class d {
        format() {
          if ("array" === this.type || "dynamicArray" === this.type)
            throw Error("");
          return "tuple" === this.type
            ? "tuple(".concat(this.value.map((t) => t.format()).join(","), ")")
            : this.type;
        }
        defaultValue() {
          return 0;
        }
        minValue() {
          return 0;
        }
        maxValue() {
          return 0;
        }
        isBigInt() {
          return !!this.type.match(/^u?int[0-9]+$/);
        }
        isData() {
          return this.type.startsWith("bytes");
        }
        isString() {
          return "string" === this.type;
        }
        get tupleName() {
          if ("tuple" !== this.type) throw TypeError("not a tuple");
          return (0, n._)(this, f);
        }
        get arrayLength() {
          if ("array" !== this.type) throw TypeError("not an array");
          return !0 === (0, n._)(this, f)
            ? -1
            : !1 === (0, n._)(this, f)
            ? this.value.length
            : null;
        }
        static from(t, e) {
          return new d(l, t, e);
        }
        static uint8(t) {
          return c(t, 8);
        }
        static uint16(t) {
          return c(t, 16);
        }
        static uint24(t) {
          return c(t, 24);
        }
        static uint32(t) {
          return c(t, 32);
        }
        static uint40(t) {
          return c(t, 40);
        }
        static uint48(t) {
          return c(t, 48);
        }
        static uint56(t) {
          return c(t, 56);
        }
        static uint64(t) {
          return c(t, 64);
        }
        static uint72(t) {
          return c(t, 72);
        }
        static uint80(t) {
          return c(t, 80);
        }
        static uint88(t) {
          return c(t, 88);
        }
        static uint96(t) {
          return c(t, 96);
        }
        static uint104(t) {
          return c(t, 104);
        }
        static uint112(t) {
          return c(t, 112);
        }
        static uint120(t) {
          return c(t, 120);
        }
        static uint128(t) {
          return c(t, 128);
        }
        static uint136(t) {
          return c(t, 136);
        }
        static uint144(t) {
          return c(t, 144);
        }
        static uint152(t) {
          return c(t, 152);
        }
        static uint160(t) {
          return c(t, 160);
        }
        static uint168(t) {
          return c(t, 168);
        }
        static uint176(t) {
          return c(t, 176);
        }
        static uint184(t) {
          return c(t, 184);
        }
        static uint192(t) {
          return c(t, 192);
        }
        static uint200(t) {
          return c(t, 200);
        }
        static uint208(t) {
          return c(t, 208);
        }
        static uint216(t) {
          return c(t, 216);
        }
        static uint224(t) {
          return c(t, 224);
        }
        static uint232(t) {
          return c(t, 232);
        }
        static uint240(t) {
          return c(t, 240);
        }
        static uint248(t) {
          return c(t, 248);
        }
        static uint256(t) {
          return c(t, 256);
        }
        static uint(t) {
          return c(t, 256);
        }
        static int8(t) {
          return c(t, -8);
        }
        static int16(t) {
          return c(t, -16);
        }
        static int24(t) {
          return c(t, -24);
        }
        static int32(t) {
          return c(t, -32);
        }
        static int40(t) {
          return c(t, -40);
        }
        static int48(t) {
          return c(t, -48);
        }
        static int56(t) {
          return c(t, -56);
        }
        static int64(t) {
          return c(t, -64);
        }
        static int72(t) {
          return c(t, -72);
        }
        static int80(t) {
          return c(t, -80);
        }
        static int88(t) {
          return c(t, -88);
        }
        static int96(t) {
          return c(t, -96);
        }
        static int104(t) {
          return c(t, -104);
        }
        static int112(t) {
          return c(t, -112);
        }
        static int120(t) {
          return c(t, -120);
        }
        static int128(t) {
          return c(t, -128);
        }
        static int136(t) {
          return c(t, -136);
        }
        static int144(t) {
          return c(t, -144);
        }
        static int152(t) {
          return c(t, -152);
        }
        static int160(t) {
          return c(t, -160);
        }
        static int168(t) {
          return c(t, -168);
        }
        static int176(t) {
          return c(t, -176);
        }
        static int184(t) {
          return c(t, -184);
        }
        static int192(t) {
          return c(t, -192);
        }
        static int200(t) {
          return c(t, -200);
        }
        static int208(t) {
          return c(t, -208);
        }
        static int216(t) {
          return c(t, -216);
        }
        static int224(t) {
          return c(t, -224);
        }
        static int232(t) {
          return c(t, -232);
        }
        static int240(t) {
          return c(t, -240);
        }
        static int248(t) {
          return c(t, -248);
        }
        static int256(t) {
          return c(t, -256);
        }
        static int(t) {
          return c(t, -256);
        }
        static bytes1(t) {
          return u(t, 1);
        }
        static bytes2(t) {
          return u(t, 2);
        }
        static bytes3(t) {
          return u(t, 3);
        }
        static bytes4(t) {
          return u(t, 4);
        }
        static bytes5(t) {
          return u(t, 5);
        }
        static bytes6(t) {
          return u(t, 6);
        }
        static bytes7(t) {
          return u(t, 7);
        }
        static bytes8(t) {
          return u(t, 8);
        }
        static bytes9(t) {
          return u(t, 9);
        }
        static bytes10(t) {
          return u(t, 10);
        }
        static bytes11(t) {
          return u(t, 11);
        }
        static bytes12(t) {
          return u(t, 12);
        }
        static bytes13(t) {
          return u(t, 13);
        }
        static bytes14(t) {
          return u(t, 14);
        }
        static bytes15(t) {
          return u(t, 15);
        }
        static bytes16(t) {
          return u(t, 16);
        }
        static bytes17(t) {
          return u(t, 17);
        }
        static bytes18(t) {
          return u(t, 18);
        }
        static bytes19(t) {
          return u(t, 19);
        }
        static bytes20(t) {
          return u(t, 20);
        }
        static bytes21(t) {
          return u(t, 21);
        }
        static bytes22(t) {
          return u(t, 22);
        }
        static bytes23(t) {
          return u(t, 23);
        }
        static bytes24(t) {
          return u(t, 24);
        }
        static bytes25(t) {
          return u(t, 25);
        }
        static bytes26(t) {
          return u(t, 26);
        }
        static bytes27(t) {
          return u(t, 27);
        }
        static bytes28(t) {
          return u(t, 28);
        }
        static bytes29(t) {
          return u(t, 29);
        }
        static bytes30(t) {
          return u(t, 30);
        }
        static bytes31(t) {
          return u(t, 31);
        }
        static bytes32(t) {
          return u(t, 32);
        }
        static address(t) {
          return new d(l, "address", t);
        }
        static bool(t) {
          return new d(l, "bool", !!t);
        }
        static bytes(t) {
          return new d(l, "bytes", t);
        }
        static string(t) {
          return new d(l, "string", t);
        }
        static array(t, e) {
          throw Error("not implemented yet");
        }
        static tuple(t, e) {
          throw Error("not implemented yet");
        }
        static overrides(t) {
          return new d(l, "overrides", Object.assign({}, t));
        }
        static isTyped(t) {
          return (
            t &&
            "object" == typeof t &&
            "_typedSymbol" in t &&
            t._typedSymbol === h
          );
        }
        static dereference(t, e) {
          if (d.isTyped(t)) {
            if (t.type !== e)
              throw Error(
                "invalid type: expecetd ".concat(e, ", got ").concat(t.type)
              );
            return t.value;
          }
          return t;
        }
        constructor(t, e, r, n) {
          (0, a._)(this, f, { writable: !0, value: void 0 }),
            null == n && (n = null),
            (0, s.NK)(l, t, "Typed"),
            (0, o.h)(this, { _typedSymbol: h, type: e, value: r }),
            (0, i._)(this, f, n),
            this.format();
        }
      }
    },
    15587: function (t, e, r) {
      r.d(e, {
        K: function () {
          return h;
        },
      });
      var n = r(24536),
        a = r(22110),
        i = r(25454);
      let s = BigInt(0),
        o = BigInt(36);
      function l(t) {
        let e = (t = t.toLowerCase()).substring(2).split(""),
          r = new Uint8Array(40);
        for (let t = 0; t < 40; t++) r[t] = e[t].charCodeAt(0);
        let i = (0, a.Pw)((0, n.w)(r));
        for (let t = 0; t < 40; t += 2)
          i[t >> 1] >> 4 >= 8 && (e[t] = e[t].toUpperCase()),
            (15 & i[t >> 1]) >= 8 && (e[t + 1] = e[t + 1].toUpperCase());
        return "0x" + e.join("");
      }
      let c = {};
      for (let t = 0; t < 10; t++) c[String(t)] = String(t);
      for (let t = 0; t < 26; t++)
        c[String.fromCharCode(65 + t)] = String(10 + t);
      let u = (function () {
        let t = {};
        for (let e = 0; e < 36; e++)
          t["0123456789abcdefghijklmnopqrstuvwxyz"[e]] = BigInt(e);
        return t;
      })();
      function h(t) {
        if (
          ((0, i.en)("string" == typeof t, "invalid address", "address", t),
          t.match(/^(0x)?[0-9a-fA-F]{40}$/))
        ) {
          t.startsWith("0x") || (t = "0x" + t);
          let e = l(t);
          return (
            (0, i.en)(
              !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
              "bad address checksum",
              "address",
              t
            ),
            e
          );
        }
        if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
          (0, i.en)(
            t.substring(2, 4) ===
              (function (t) {
                let e = (t =
                  (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
                  .split("")
                  .map((t) => c[t])
                  .join("");
                for (; e.length >= 15; ) {
                  let t = e.substring(0, 15);
                  e = (parseInt(t, 10) % 97) + e.substring(t.length);
                }
                let r = String(98 - (parseInt(e, 10) % 97));
                for (; r.length < 2; ) r = "0" + r;
                return r;
              })(t),
            "bad icap checksum",
            "address",
            t
          );
          let e = (function (t) {
            t = t.toLowerCase();
            let e = s;
            for (let r = 0; r < t.length; r++) e = e * o + u[t[r]];
            return e;
          })(t.substring(4)).toString(16);
          for (; e.length < 40; ) e = "0" + e;
          return l("0x" + e);
        }
        (0, i.en)(!1, "invalid address", "address", t);
      }
    },
    33187: function (t, e, r) {
      r.d(e, {
        RC: function () {
          return i;
        },
        ru: function () {
          return o;
        },
      });
      var n = r(25454),
        a = r(15587);
      function i(t) {
        return t && "function" == typeof t.getAddress;
      }
      async function s(t, e) {
        let r = await e;
        return (
          (null == r || "0x0000000000000000000000000000000000000000" === r) &&
            ((0, n.hu)(
              "string" != typeof t,
              "unconfigured name",
              "UNCONFIGURED_NAME",
              { value: t }
            ),
            (0, n.en)(
              !1,
              "invalid AddressLike value; did not resolve to a value address",
              "target",
              t
            )),
          (0, a.K)(r)
        );
      }
      function o(t, e) {
        return "string" == typeof t
          ? t.match(/^0x[0-9a-f]{40}$/i)
            ? (0, a.K)(t)
            : ((0, n.hu)(
                null != e,
                "ENS resolution requires a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "resolveName" }
              ),
              s(t, e.resolveName(t)))
          : i(t)
          ? s(t, t.getAddress())
          : t && "function" == typeof t.then
          ? s(t, t)
          : void (0, n.en)(!1, "unsupported addressable value", "target", t);
      }
    },
    89251: function (t, e, r) {
      r.d(e, {
        N: function () {
          return n;
        },
      });
      let n = "0x0000000000000000000000000000000000000000";
    },
    80856: function (t, e, r) {
      r.d(e, {
        CH: function () {
          return tg;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(25661),
        o = r(8730),
        l = r(36284),
        c = r(24536),
        u = r(88909),
        h = r(63718),
        f = r(25454),
        d = r(22110),
        p = r(14755),
        g = r(39241),
        m = r(54400),
        w = r(55653);
      class y {
        constructor(t, e, r) {
          let n = t.name,
            a = t.format();
          (0, h.h)(this, {
            fragment: t,
            name: n,
            signature: a,
            topic: e,
            args: r,
          });
        }
      }
      class A {
        constructor(t, e, r, n) {
          let a = t.name,
            i = t.format();
          (0, h.h)(this, {
            fragment: t,
            name: a,
            args: r,
            signature: i,
            selector: e,
            value: n,
          });
        }
      }
      class b {
        constructor(t, e, r) {
          let n = t.name,
            a = t.format();
          (0, h.h)(this, {
            fragment: t,
            name: n,
            args: r,
            signature: a,
            selector: e,
          });
        }
      }
      class _ {
        static isIndexed(t) {
          return !!(t && t._isIndexed);
        }
        constructor(t) {
          (0, h.h)(this, { hash: t, _isIndexed: !0 });
        }
      }
      let E = {
          0: "generic panic",
          1: "assert(false)",
          17: "arithmetic overflow",
          18: "division or modulo by zero",
          33: "enum overflow",
          34: "invalid encoded storage byte array accessed",
          49: "out-of-bounds array access; popping on an empty array",
          50: "out-of-bounds access of an array or bytesN",
          65: "out of memory",
          81: "uninitialized function",
        },
        k = {
          "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: (t) =>
              "reverted with reason string ".concat(JSON.stringify(t)),
          },
          "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: (t) => {
              let e = "unknown panic code";
              return (
                t >= 0 && t <= 255 && E[t.toString()] && (e = E[t.toString()]),
                "reverted with panic code 0x"
                  .concat(t.toString(16), " (")
                  .concat(e, ")")
              );
            },
          },
        };
      var P = new WeakMap(),
        N = new WeakMap(),
        R = new WeakMap(),
        T = new WeakMap(),
        C = new WeakSet(),
        x = new WeakSet();
      class O {
        format(t) {
          let e = t ? "minimal" : "full";
          return this.fragments.map((t) => t.format(e));
        }
        formatJson() {
          return JSON.stringify(
            this.fragments
              .map((t) => t.format("json"))
              .map((t) => JSON.parse(t))
          );
        }
        getAbiCoder() {
          return g.R.defaultAbiCoder();
        }
        getFunctionName(t) {
          let e = (0, o._)(this, C, I).call(this, t, null, !1);
          return (0, f.en)(e, "no matching function", "key", t), e.name;
        }
        hasFunction(t) {
          return !!(0, o._)(this, C, I).call(this, t, null, !1);
        }
        getFunction(t, e) {
          return (0, o._)(this, C, I).call(this, t, e || null, !0);
        }
        forEachFunction(t) {
          let e = Array.from((0, n._)(this, R).keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            t((0, n._)(this, R).get(a), r);
          }
        }
        getEventName(t) {
          let e = (0, o._)(this, x, D).call(this, t, null, !1);
          return (0, f.en)(e, "no matching event", "key", t), e.name;
        }
        hasEvent(t) {
          return !!(0, o._)(this, x, D).call(this, t, null, !1);
        }
        getEvent(t, e) {
          return (0, o._)(this, x, D).call(this, t, e || null, !0);
        }
        forEachEvent(t) {
          let e = Array.from((0, n._)(this, N).keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            t((0, n._)(this, N).get(a), r);
          }
        }
        getError(t, e) {
          if ((0, d.A7)(t)) {
            let e = t.toLowerCase();
            if (k[e]) return w.IC.from(k[e].signature);
            for (let t of (0, n._)(this, P).values())
              if (e === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf("(")) {
            let e = [];
            for (let [r, a] of (0, n._)(this, P))
              r.split("(")[0] === t && e.push(a);
            if (0 === e.length)
              return "Error" === t
                ? w.IC.from("error Error(string)")
                : "Panic" === t
                ? w.IC.from("error Panic(uint256)")
                : null;
            if (e.length > 1) {
              let r = e.map((t) => JSON.stringify(t.format())).join(", ");
              (0, f.en)(
                !1,
                "ambiguous error description (i.e. ".concat(r, ")"),
                "name",
                t
              );
            }
            return e[0];
          }
          return "Error(string)" === (t = w.IC.from(t).format())
            ? w.IC.from("error Error(string)")
            : "Panic(uint256)" === t
            ? w.IC.from("error Panic(uint256)")
            : (0, n._)(this, P).get(t) || null;
        }
        forEachError(t) {
          let e = Array.from((0, n._)(this, P).keys());
          e.sort((t, e) => t.localeCompare(e));
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            t((0, n._)(this, P).get(a), r);
          }
        }
        _decodeParams(t, e) {
          return (0, n._)(this, T).decode(t, e);
        }
        _encodeParams(t, e) {
          return (0, n._)(this, T).encode(t, e);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getError(t);
            (0, f.en)(e, "unknown error", "fragment", t), (t = e);
          }
          return (
            (0, f.en)(
              (0, d.QB)(e, 0, 4) === t.selector,
              "data signature does not match error ".concat(t.name, "."),
              "data",
              e
            ),
            this._decodeParams(t.inputs, (0, d.QB)(e, 4))
          );
        }
        encodeErrorResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getError(t);
            (0, f.en)(e, "unknown error", "fragment", t), (t = e);
          }
          return (0, d.zo)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionData(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (
            (0, f.en)(
              (0, d.QB)(e, 0, 4) === t.selector,
              "data signature does not match function ".concat(t.name, "."),
              "data",
              e
            ),
            this._decodeParams(t.inputs, (0, d.QB)(e, 4))
          );
        }
        encodeFunctionData(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (0, d.zo)([t.selector, this._encodeParams(t.inputs, e || [])]);
        }
        decodeFunctionResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.en)(e, "unknown function", "fragment", t), (t = e);
          }
          let r = "invalid length for result data",
            a = (0, d.h_)(e);
          if (a.length % 32 == 0)
            try {
              return (0, n._)(this, T).decode(t.outputs, a);
            } catch (t) {
              r = "could not decode result data";
            }
          (0, f.hu)(!1, r, "BAD_DATA", {
            value: (0, d.Dv)(a),
            info: { method: t.name, signature: t.format() },
          });
        }
        makeError(t, e) {
          let r = (0, d.Pw)(t, "data"),
            a = g.R.getBuiltinCallException("call", e, r);
          if (
            a.message.startsWith("execution reverted (unknown custom error)")
          ) {
            let t = (0, d.Dv)(r.slice(0, 4)),
              e = this.getError(t);
            if (e)
              try {
                let t = (0, n._)(this, T).decode(e.inputs, r.slice(4));
                (a.revert = { name: e.name, signature: e.format(), args: t }),
                  (a.reason = a.revert.signature),
                  (a.message = "execution reverted: ".concat(a.reason));
              } catch (t) {
                a.message =
                  "execution reverted (coult not decode custom error)";
              }
          }
          let i = this.parseTransaction(e);
          return (
            i &&
              (a.invocation = {
                method: i.name,
                signature: i.signature,
                args: i.args,
              }),
            a
          );
        }
        encodeFunctionResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.en)(e, "unknown function", "fragment", t), (t = e);
          }
          return (0, d.Dv)((0, n._)(this, T).encode(t.outputs, e || []));
        }
        encodeFilterTopics(t, e) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          (0, f.hu)(
            e.length <= t.inputs.length,
            "too many arguments for ".concat(t.format()),
            "UNEXPECTED_ARGUMENT",
            { count: e.length, expectedCount: t.inputs.length }
          );
          let r = [];
          t.anonymous || r.push(t.topicHash);
          let a = (t, e) =>
            "string" === t.type
              ? (0, u.id)(e)
              : "bytes" === t.type
              ? (0, c.w)((0, d.Dv)(e))
              : ("bool" === t.type && "boolean" == typeof e
                  ? (e = e ? "0x01" : "0x00")
                  : t.type.match(/^u?int/)
                  ? (e = (0, p.m9)(e))
                  : t.type.match(/^bytes/)
                  ? (e = (0, d.SK)(e, 32))
                  : "address" === t.type &&
                    (0, n._)(this, T).encode(["address"], [e]),
                (0, d.U3)((0, d.Dv)(e), 32));
          for (
            e.forEach((e, n) => {
              let i = t.inputs[n];
              if (!i.indexed) {
                (0, f.en)(
                  null == e,
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + i.name,
                  e
                );
                return;
              }
              null == e
                ? r.push(null)
                : "array" === i.baseType || "tuple" === i.baseType
                ? (0, f.en)(
                    !1,
                    "filtering with tuples or arrays not supported",
                    "contract." + i.name,
                    e
                  )
                : Array.isArray(e)
                ? r.push(e.map((t) => a(i, t)))
                : r.push(a(i, e));
            });
            r.length && null === r[r.length - 1];

          )
            r.pop();
          return r;
        }
        encodeEventLog(t, e) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          let r = [],
            a = [],
            i = [];
          return (
            t.anonymous || r.push(t.topicHash),
            (0, f.en)(
              e.length === t.inputs.length,
              "event arguments/values mismatch",
              "values",
              e
            ),
            t.inputs.forEach((t, s) => {
              let o = e[s];
              if (t.indexed) {
                if ("string" === t.type) r.push((0, u.id)(o));
                else if ("bytes" === t.type) r.push((0, c.w)(o));
                else if ("tuple" === t.baseType || "array" === t.baseType)
                  throw Error("not implemented");
                else r.push((0, n._)(this, T).encode([t.type], [o]));
              } else a.push(t), i.push(o);
            }),
            { data: (0, n._)(this, T).encode(a, i), topics: r }
          );
        }
        decodeEventLog(t, e, r) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.en)(e, "unknown event", "eventFragment", t), (t = e);
          }
          if (null != r && !t.anonymous) {
            let e = t.topicHash;
            (0, f.en)(
              (0, d.A7)(r[0], 32) && r[0].toLowerCase() === e,
              "fragment/topic mismatch",
              "topics[0]",
              r[0]
            ),
              (r = r.slice(1));
          }
          let a = [],
            i = [],
            s = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.baseType ||
                "array" === t.baseType
                ? (a.push(w._R.from({ type: "bytes32", name: t.name })),
                  s.push(!0))
                : (a.push(t), s.push(!1))
              : (i.push(t), s.push(!1));
          });
          let o = null != r ? (0, n._)(this, T).decode(a, (0, d.zo)(r)) : null,
            l = (0, n._)(this, T).decode(i, e, !0),
            c = [],
            u = [],
            h = 0,
            p = 0;
          return (
            t.inputs.forEach((t, e) => {
              let r = null;
              if (t.indexed) {
                if (null == o) r = new _(null);
                else if (s[e]) r = new _(o[p++]);
                else
                  try {
                    r = o[p++];
                  } catch (t) {
                    r = t;
                  }
              } else
                try {
                  r = l[h++];
                } catch (t) {
                  r = t;
                }
              c.push(r), u.push(t.name || null);
            }),
            m.x4.fromItems(c, u)
          );
        }
        parseTransaction(t) {
          let e = (0, d.Pw)(t.data, "tx.data"),
            r = (0, p.yT)(null != t.value ? t.value : 0, "tx.value"),
            a = this.getFunction((0, d.Dv)(e.slice(0, 4)));
          if (!a) return null;
          let i = (0, n._)(this, T).decode(a.inputs, e.slice(4));
          return new A(a, a.selector, i, r);
        }
        parseCallResult(t) {
          throw Error("@TODO");
        }
        parseLog(t) {
          let e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new y(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
        }
        parseError(t) {
          let e = (0, d.Dv)(t),
            r = this.getError((0, d.QB)(e, 0, 4));
          if (!r) return null;
          let a = (0, n._)(this, T).decode(r.inputs, (0, d.QB)(e, 4));
          return new b(r, r.selector, a);
        }
        static from(t) {
          return t instanceof O
            ? t
            : new O(
                "string" == typeof t
                  ? JSON.parse(t)
                  : "function" == typeof t.formatJson
                  ? t.formatJson()
                  : "function" == typeof t.format
                  ? t.format("json")
                  : t
              );
        }
        constructor(t) {
          (0, l._)(this, C),
            (0, l._)(this, x),
            (0, a._)(this, P, { writable: !0, value: void 0 }),
            (0, a._)(this, N, { writable: !0, value: void 0 }),
            (0, a._)(this, R, { writable: !0, value: void 0 }),
            (0, a._)(this, T, { writable: !0, value: void 0 });
          let e = [];
          (e = "string" == typeof t ? JSON.parse(t) : t),
            (0, i._)(this, R, new Map()),
            (0, i._)(this, P, new Map()),
            (0, i._)(this, N, new Map());
          let r = [];
          for (let t of e)
            try {
              r.push(w.HY.from(t));
            } catch (e) {
              console.log(
                "[Warning] Invalid Fragment ".concat(JSON.stringify(t), ":"),
                e.message
              );
            }
          (0, h.h)(this, { fragments: Object.freeze(r) });
          let s = null,
            o = !1;
          (0, i._)(this, T, this.getAbiCoder()),
            this.fragments.forEach((t, e) => {
              let r;
              switch (t.type) {
                case "constructor":
                  if (this.deploy) {
                    console.log("duplicate definition - constructor");
                    return;
                  }
                  (0, h.h)(this, { deploy: t });
                  return;
                case "fallback":
                  0 === t.inputs.length
                    ? (o = !0)
                    : ((0, f.en)(
                        !s || t.payable !== s.payable,
                        "conflicting fallback fragments",
                        "fragments[".concat(e, "]"),
                        t
                      ),
                      (o = (s = t).payable));
                  return;
                case "function":
                  r = (0, n._)(this, R);
                  break;
                case "event":
                  r = (0, n._)(this, N);
                  break;
                case "error":
                  r = (0, n._)(this, P);
                  break;
                default:
                  return;
              }
              let a = t.format();
              r.has(a) || r.set(a, t);
            }),
            this.deploy ||
              (0, h.h)(this, { deploy: w.Xg.from("constructor()") }),
            (0, h.h)(this, { fallback: s, receive: o });
        }
      }
      function I(t, e, r) {
        if ((0, d.A7)(t)) {
          let e = t.toLowerCase();
          for (let t of (0, n._)(this, R).values())
            if (e === t.selector) return t;
          return null;
        }
        if (-1 === t.indexOf("(")) {
          let a = [];
          for (let [e, r] of (0, n._)(this, R))
            e.split("(")[0] === t && a.push(r);
          if (e) {
            let t = e.length > 0 ? e[e.length - 1] : null,
              r = e.length,
              n = !0;
            s._.isTyped(t) && "overrides" === t.type && ((n = !1), r--);
            for (let t = a.length - 1; t >= 0; t--) {
              let e = a[t].inputs.length;
              e === r || (n && e === r - 1) || a.splice(t, 1);
            }
            for (let t = a.length - 1; t >= 0; t--) {
              let r = a[t].inputs;
              for (let n = 0; n < e.length; n++)
                if (s._.isTyped(e[n])) {
                  if (n >= r.length) {
                    if ("overrides" === e[n].type) continue;
                    a.splice(t, 1);
                    break;
                  }
                  if (e[n].type !== r[n].baseType) {
                    a.splice(t, 1);
                    break;
                  }
                }
            }
          }
          if (1 === a.length && e && e.length !== a[0].inputs.length) {
            let t = e[e.length - 1];
            (null == t || Array.isArray(t) || "object" != typeof t) &&
              a.splice(0, 1);
          }
          if (0 === a.length) return null;
          if (a.length > 1 && r) {
            let e = a.map((t) => JSON.stringify(t.format())).join(", ");
            (0, f.en)(
              !1,
              "ambiguous function description (i.e. matches ".concat(e, ")"),
              "key",
              t
            );
          }
          return a[0];
        }
        return (0, n._)(this, R).get(w.YW.from(t).format()) || null;
      }
      function D(t, e, r) {
        if ((0, d.A7)(t)) {
          let e = t.toLowerCase();
          for (let t of (0, n._)(this, N).values())
            if (e === t.topicHash) return t;
          return null;
        }
        if (-1 === t.indexOf("(")) {
          let a = [];
          for (let [e, r] of (0, n._)(this, N))
            e.split("(")[0] === t && a.push(r);
          if (e) {
            for (let t = a.length - 1; t >= 0; t--)
              a[t].inputs.length < e.length && a.splice(t, 1);
            for (let t = a.length - 1; t >= 0; t--) {
              let r = a[t].inputs;
              for (let n = 0; n < e.length; n++)
                if (s._.isTyped(e[n]) && e[n].type !== r[n].baseType) {
                  a.splice(t, 1);
                  break;
                }
            }
          }
          if (0 === a.length) return null;
          if (a.length > 1 && r) {
            let e = a.map((t) => JSON.stringify(t.format())).join(", ");
            (0, f.en)(
              !1,
              "ambiguous event description (i.e. matches ".concat(e, ")"),
              "key",
              t
            );
          }
          return a[0];
        }
        return (0, n._)(this, N).get(w.QV.from(t).format()) || null;
      }
      var B = r(33187),
        S = r(44440),
        M = r(81948);
      class F extends S.Zb {
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
        constructor(t, e, r) {
          super(t, t.provider);
          let n = e.decodeEventLog(r, t.data, t.topics);
          (0, h.h)(this, { args: n, fragment: r, interface: e });
        }
      }
      class U extends S.Zb {
        constructor(t, e) {
          super(t, t.provider), (0, h.h)(this, { error: e });
        }
      }
      var L = new WeakMap();
      class G extends S.IX {
        get logs() {
          return super.logs.map((t) => {
            let e = t.topics.length
              ? (0, n._)(this, L).getEvent(t.topics[0])
              : null;
            if (e)
              try {
                return new F(t, (0, n._)(this, L), e);
              } catch (e) {
                return new U(t, e);
              }
            return t;
          });
        }
        constructor(t, e, r) {
          super(r, e),
            (0, a._)(this, L, { writable: !0, value: void 0 }),
            (0, i._)(this, L, t);
        }
      }
      var Q = new WeakMap();
      class H extends S.Mw {
        async wait(t, e) {
          let r = await super.wait(t, e);
          return null == r ? null : new G((0, n._)(this, Q), this.provider, r);
        }
        constructor(t, e, r) {
          super(r, e),
            (0, a._)(this, Q, { writable: !0, value: void 0 }),
            (0, i._)(this, Q, t);
        }
      }
      class W extends M.Z {
        async getBlock() {
          return await this.log.getBlock();
        }
        async getTransaction() {
          return await this.log.getTransaction();
        }
        async getTransactionReceipt() {
          return await this.log.getTransactionReceipt();
        }
        constructor(t, e, r, n) {
          super(t, e, r), (0, h.h)(this, { log: n });
        }
      }
      class j extends W {
        get eventName() {
          return this.fragment.name;
        }
        get eventSignature() {
          return this.fragment.format();
        }
        constructor(t, e, r, n, a) {
          super(t, e, r, new F(a, t.interface, n));
          let i = t.interface.decodeEventLog(n, this.log.data, this.log.topics);
          (0, h.h)(this, { args: i, fragment: n });
        }
      }
      let J = BigInt(0);
      function V(t) {
        return t && "function" == typeof t.call;
      }
      function K(t) {
        return t && "function" == typeof t.estimateGas;
      }
      function z(t) {
        return t && "function" == typeof t.resolveName;
      }
      function Z(t) {
        return t && "function" == typeof t.sendTransaction;
      }
      function q(t) {
        if (null != t) {
          if (z(t)) return t;
          if (t.provider) return t.provider;
        }
      }
      var Y = new WeakMap();
      class X {
        getTopicFilter() {
          return (0, n._)(this, Y);
        }
        constructor(t, e, r) {
          if (
            ((0, a._)(this, Y, { writable: !0, value: void 0 }),
            (0, h.h)(this, { fragment: e }),
            e.inputs.length < r.length)
          )
            throw Error("too many arguments");
          let n = $(t.runner, "resolveName"),
            s = z(n) ? n : null;
          (0, i._)(
            this,
            Y,
            (async function () {
              let n = await Promise.all(
                e.inputs.map((t, e) =>
                  null == r[e]
                    ? null
                    : t.walkAsync(r[e], (t, e) =>
                        "address" === t
                          ? Array.isArray(e)
                            ? Promise.all(e.map((t) => (0, B.ru)(t, s)))
                            : (0, B.ru)(e, s)
                          : e
                      )
                )
              );
              return t.interface.encodeFilterTopics(e, n);
            })()
          );
        }
      }
      function $(t, e) {
        return null == t
          ? null
          : "function" == typeof t[e]
          ? t
          : t.provider && "function" == typeof t.provider[e]
          ? t.provider
          : null;
      }
      function tt(t) {
        return null == t ? null : t.provider || null;
      }
      async function te(t, e) {
        let r = s._.dereference(t, "overrides");
        (0, f.en)(
          "object" == typeof r,
          "invalid overrides parameter",
          "overrides",
          t
        );
        let n = (0, S.kK)(r);
        return (
          (0, f.en)(
            null == n.to || (e || []).indexOf("to") >= 0,
            "cannot override to",
            "overrides.to",
            n.to
          ),
          (0, f.en)(
            null == n.data || (e || []).indexOf("data") >= 0,
            "cannot override data",
            "overrides.data",
            n.data
          ),
          n.from && (n.from = n.from),
          n
        );
      }
      async function tr(t, e, r) {
        let n = $(t, "resolveName"),
          a = z(n) ? n : null;
        return await Promise.all(
          e.map((t, e) =>
            t.walkAsync(r[e], (t, e) =>
              ((e = s._.dereference(e, t)), "address" === t)
                ? (0, B.ru)(e, a)
                : e
            )
          )
        );
      }
      let tn = Symbol.for("_ethersInternal_contract"),
        ta = new WeakMap();
      function ti(t) {
        return ta.get(t[tn]);
      }
      async function ts(t, e) {
        let r;
        let n = null;
        if (Array.isArray(e)) {
          let n = function (e) {
            if ((0, d.A7)(e, 32)) return e;
            let r = t.interface.getEvent(e);
            return (0, f.en)(r, "unknown fragment", "name", e), r.topicHash;
          };
          r = e.map((t) =>
            null == t ? null : Array.isArray(t) ? t.map(n) : n(t)
          );
        } else
          "*" === e
            ? (r = [null])
            : "string" == typeof e
            ? (0, d.A7)(e, 32)
              ? (r = [e])
              : ((n = t.interface.getEvent(e)),
                (0, f.en)(n, "unknown fragment", "event", e),
                (r = [n.topicHash]))
            : e &&
              "object" == typeof e &&
              "getTopicFilter" in e &&
              "function" == typeof e.getTopicFilter &&
              e.fragment
            ? (r = await e.getTopicFilter())
            : "fragment" in e
            ? (r = [(n = e.fragment).topicHash])
            : (0, f.en)(!1, "unknown event name", "event", e);
        return {
          fragment: n,
          tag: (r = r.map((t) => {
            if (null == t) return null;
            if (Array.isArray(t)) {
              let e = Array.from(
                new Set(t.map((t) => t.toLowerCase())).values()
              );
              return 1 === e.length ? e[0] : (e.sort(), e);
            }
            return t.toLowerCase();
          }))
            .map((t) =>
              null == t ? "null" : Array.isArray(t) ? t.join("|") : t
            )
            .join("&"),
          topics: r,
        };
      }
      async function to(t, e) {
        let { subs: r } = ti(t);
        return r.get((await ts(t, e)).tag) || null;
      }
      async function tl(t, e, r) {
        let n = tt(t.runner);
        (0, f.hu)(
          n,
          "contract runner does not support subscribing",
          "UNSUPPORTED_OPERATION",
          { operation: e }
        );
        let { fragment: a, tag: i, topics: s } = await ts(t, r),
          { addr: o, subs: l } = ti(t),
          c = l.get(i);
        if (!c) {
          let e = { address: o || t, topics: s },
            u = (e) => {
              let n = a;
              if (null == n)
                try {
                  n = t.interface.getEvent(e.topics[0]);
                } catch (t) {}
              if (n) {
                let i = n,
                  s = a ? t.interface.decodeEventLog(a, e.data, e.topics) : [];
                th(t, r, s, (n) => new j(t, n, r, i, e));
              } else th(t, r, [], (n) => new W(t, n, r, e));
            },
            h = [];
          (c = {
            tag: i,
            listeners: [],
            start: () => {
              h.length || h.push(n.on(e, u));
            },
            stop: async () => {
              if (0 == h.length) return;
              let t = h;
              (h = []), await Promise.all(t), n.off(e, u);
            },
          }),
            l.set(i, c);
        }
        return c;
      }
      let tc = Promise.resolve();
      async function tu(t, e, r, n) {
        await tc;
        let a = await to(t, e);
        if (!a) return !1;
        let i = a.listeners.length;
        return (
          (a.listeners = a.listeners.filter((e) => {
            let { listener: a, once: i } = e,
              s = Array.from(r);
            n && s.push(n(i ? null : a));
            try {
              a.call(t, ...s);
            } catch (t) {}
            return !i;
          })),
          0 === a.listeners.length && (a.stop(), ti(t).subs.delete(a.tag)),
          i > 0
        );
      }
      async function th(t, e, r, n) {
        try {
          await tc;
        } catch (t) {}
        let a = tu(t, e, r, n);
        return (tc = a), await a;
      }
      let tf = ["then"];
      class td {
        connect(t) {
          return new td(this.target, this.interface, t);
        }
        attach(t) {
          return new td(t, this.interface, this.runner);
        }
        async getAddress() {
          return await ti(this).addrPromise;
        }
        async getDeployedCode() {
          let t = tt(this.runner);
          (0, f.hu)(
            t,
            "runner does not support .provider",
            "UNSUPPORTED_OPERATION",
            { operation: "getDeployedCode" }
          );
          let e = await t.getCode(await this.getAddress());
          return "0x" === e ? null : e;
        }
        async waitForDeployment() {
          let t = this.deploymentTransaction();
          if (t) return await t.wait(), this;
          if (null != (await this.getDeployedCode())) return this;
          let e = tt(this.runner);
          return (
            (0, f.hu)(
              null != e,
              "contract runner does not support .provider",
              "UNSUPPORTED_OPERATION",
              { operation: "waitForDeployment" }
            ),
            new Promise((t, r) => {
              let n = async () => {
                try {
                  let r = await this.getDeployedCode();
                  if (null != r) return t(this);
                  e.once("block", n);
                } catch (t) {
                  r(t);
                }
              };
              n();
            })
          );
        }
        deploymentTransaction() {
          return ti(this).deployTx;
        }
        getFunction(t) {
          return (
            "string" != typeof t && (t = t.format()),
            (function (t, e) {
              let r = function () {
                  for (
                    var r = arguments.length, n = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  let i = t.interface.getFunction(e, n);
                  return (
                    (0, f.hu)(
                      i,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment", info: { key: e, args: n } }
                    ),
                    i
                  );
                },
                n = async function () {
                  for (
                    var e = arguments.length, n = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  let i = r(...n),
                    s = {};
                  if (
                    (i.inputs.length + 1 === n.length &&
                      (s = await te(n.pop())).from &&
                      (s.from = await (0, B.ru)(s.from, q(t.runner))),
                    i.inputs.length !== n.length)
                  )
                    throw Error(
                      "internal error: fragment inputs doesn't match arguments; should not happen"
                    );
                  let o = await tr(t.runner, i.inputs, n);
                  return Object.assign(
                    {},
                    s,
                    await (0, h.m)({
                      to: t.getAddress(),
                      data: t.interface.encodeFunctionData(i, o),
                    })
                  );
                },
                a = async function () {
                  for (
                    var t = arguments.length, e = Array(t), r = 0;
                    r < t;
                    r++
                  )
                    e[r] = arguments[r];
                  let n = await o(...e);
                  return 1 === n.length ? n[0] : n;
                },
                i = async function () {
                  for (
                    var e = arguments.length, r = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  let i = t.runner;
                  (0, f.hu)(
                    Z(i),
                    "contract runner does not support sending transactions",
                    "UNSUPPORTED_OPERATION",
                    { operation: "sendTransaction" }
                  );
                  let s = await i.sendTransaction(await n(...r)),
                    o = tt(t.runner);
                  return new H(t.interface, o, s);
                },
                s = async function () {
                  for (
                    var e = arguments.length, r = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  let i = $(t.runner, "estimateGas");
                  return (
                    (0, f.hu)(
                      K(i),
                      "contract runner does not support gas estimation",
                      "UNSUPPORTED_OPERATION",
                      { operation: "estimateGas" }
                    ),
                    await i.estimateGas(await n(...r))
                  );
                },
                o = async function () {
                  for (
                    var e = arguments.length, a = Array(e), i = 0;
                    i < e;
                    i++
                  )
                    a[i] = arguments[i];
                  let s = $(t.runner, "call");
                  (0, f.hu)(
                    V(s),
                    "contract runner does not support calling",
                    "UNSUPPORTED_OPERATION",
                    { operation: "call" }
                  );
                  let o = await n(...a),
                    l = "0x";
                  try {
                    l = await s.call(o);
                  } catch (e) {
                    if ((0, f.Hl)(e) && e.data)
                      throw t.interface.makeError(e.data, o);
                    throw e;
                  }
                  let c = r(...a);
                  return t.interface.decodeFunctionResult(c, l);
                },
                l = async function () {
                  for (
                    var t = arguments.length, e = Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  return r(...e).constant ? await a(...e) : await i(...e);
                };
              return (
                (0, h.h)(l, {
                  name: t.interface.getFunctionName(e),
                  _contract: t,
                  _key: e,
                  getFragment: r,
                  estimateGas: s,
                  populateTransaction: n,
                  send: i,
                  staticCall: a,
                  staticCallResult: o,
                }),
                Object.defineProperty(l, "fragment", {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    let r = t.interface.getFunction(e);
                    return (
                      (0, f.hu)(
                        r,
                        "no matching fragment",
                        "UNSUPPORTED_OPERATION",
                        { operation: "fragment", info: { key: e } }
                      ),
                      r
                    );
                  },
                }),
                l
              );
            })(this, t)
          );
        }
        getEvent(t) {
          return (
            "string" != typeof t && (t = t.format()),
            (function (t, e) {
              let r = function () {
                  for (
                    var r = arguments.length, n = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  let i = t.interface.getEvent(e, n);
                  return (
                    (0, f.hu)(
                      i,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment", info: { key: e, args: n } }
                    ),
                    i
                  );
                },
                n = function () {
                  for (
                    var e = arguments.length, n = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    n[a] = arguments[a];
                  return new X(t, r(...n), n);
                };
              return (
                (0, h.h)(n, {
                  name: t.interface.getEventName(e),
                  _contract: t,
                  _key: e,
                  getFragment: r,
                }),
                Object.defineProperty(n, "fragment", {
                  configurable: !1,
                  enumerable: !0,
                  get: () => {
                    let r = t.interface.getEvent(e);
                    return (
                      (0, f.hu)(
                        r,
                        "no matching fragment",
                        "UNSUPPORTED_OPERATION",
                        { operation: "fragment", info: { key: e } }
                      ),
                      r
                    );
                  },
                }),
                n
              );
            })(this, t)
          );
        }
        async queryTransaction(t) {
          throw Error("@TODO");
        }
        async queryFilter(t, e, r) {
          null == e && (e = 0), null == r && (r = "latest");
          let { addr: n, addrPromise: a } = ti(this),
            i = n || (await a),
            { fragment: s, topics: o } = await ts(this, t),
            l = { address: i, topics: o, fromBlock: e, toBlock: r },
            c = tt(this.runner);
          return (
            (0, f.hu)(
              c,
              "contract runner does not have a provider",
              "UNSUPPORTED_OPERATION",
              { operation: "queryFilter" }
            ),
            (await c.getLogs(l)).map((t) => {
              let e = s;
              if (null == e)
                try {
                  e = this.interface.getEvent(t.topics[0]);
                } catch (t) {}
              if (e)
                try {
                  return new F(t, this.interface, e);
                } catch (e) {
                  return new U(t, e);
                }
              return new S.Zb(t, c);
            })
          );
        }
        async on(t, e) {
          let r = await tl(this, "on", t);
          return r.listeners.push({ listener: e, once: !1 }), r.start(), this;
        }
        async once(t, e) {
          let r = await tl(this, "once", t);
          return r.listeners.push({ listener: e, once: !0 }), r.start(), this;
        }
        async emit(t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          return await th(this, t, r, null);
        }
        async listenerCount(t) {
          if (t) {
            let e = await to(this, t);
            return e ? e.listeners.length : 0;
          }
          let { subs: e } = ti(this),
            r = 0;
          for (let { listeners: t } of e.values()) r += t.length;
          return r;
        }
        async listeners(t) {
          if (t) {
            let e = await to(this, t);
            return e
              ? e.listeners.map((t) => {
                  let { listener: e } = t;
                  return e;
                })
              : [];
          }
          let { subs: e } = ti(this),
            r = [];
          for (let { listeners: t } of e.values())
            r = r.concat(
              t.map((t) => {
                let { listener: e } = t;
                return e;
              })
            );
          return r;
        }
        async off(t, e) {
          let r = await to(this, t);
          if (!r) return this;
          if (e) {
            let t = r.listeners
              .map((t) => {
                let { listener: e } = t;
                return e;
              })
              .indexOf(e);
            t >= 0 && r.listeners.splice(t, 1);
          }
          return (
            (null == e || 0 === r.listeners.length) &&
              (r.stop(), ti(this).subs.delete(r.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            let e = await to(this, t);
            if (!e) return this;
            e.stop(), ti(this).subs.delete(e.tag);
          } else {
            let { subs: t } = ti(this);
            for (let { tag: e, stop: r } of t.values()) r(), t.delete(e);
          }
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return await this.off(t, e);
        }
        static buildClass(t) {
          class e extends td {
            constructor(e, r = null) {
              super(e, t, r);
            }
          }
          return e;
        }
        static from(t, e, r) {
          return null == r && (r = null), new this(t, e, r);
        }
        constructor(t, e, r, n) {
          var a;
          let i;
          (0, f.en)(
            "string" == typeof t || (0, B.RC)(t),
            "invalid value for Contract target",
            "target",
            t
          ),
            null == r && (r = null);
          let s = O.from(e);
          (0, h.h)(this, { target: t, runner: r, interface: s }),
            Object.defineProperty(this, tn, { value: {} });
          let o = null,
            l = null;
          if (n) {
            let t = tt(r);
            l = new H(this.interface, t, n);
          }
          let c = new Map();
          if ("string" == typeof t) {
            if ((0, d.A7)(t)) (o = t), (i = Promise.resolve(t));
            else {
              let e = $(r, "resolveName");
              if (!z(e))
                throw (0, f.wf)(
                  "contract runner does not support name resolution",
                  "UNSUPPORTED_OPERATION",
                  { operation: "resolveName" }
                );
              i = e.resolveName(t).then((e) => {
                if (null == e)
                  throw (0, f.wf)(
                    "an ENS name used for a contract target must be correctly configured",
                    "UNCONFIGURED_NAME",
                    { value: t }
                  );
                return (ti(this).addr = e), e;
              });
            }
          } else
            i = t.getAddress().then((t) => {
              if (null == t) throw Error("TODO");
              return (ti(this).addr = t), t;
            });
          (a = { addrPromise: i, addr: o, deployTx: l, subs: c }),
            ta.set(this[tn], a);
          let u = new Proxy(
            {},
            {
              get: (t, e, r) => {
                if ("symbol" == typeof e || tf.indexOf(e) >= 0)
                  return Reflect.get(t, e, r);
                try {
                  return this.getEvent(e);
                } catch (t) {
                  if (!(0, f.VZ)(t, "INVALID_ARGUMENT") || "key" !== t.argument)
                    throw t;
                }
              },
              has: (t, e) =>
                tf.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : Reflect.has(t, e) || this.interface.hasEvent(String(e)),
            }
          );
          return (
            (0, h.h)(this, { filters: u }),
            (0, h.h)(this, {
              fallback:
                s.receive || s.fallback
                  ? (function (t) {
                      let e = async function (e) {
                          let r = await te(e, ["data"]);
                          (r.to = await t.getAddress()),
                            r.from &&
                              (r.from = await (0, B.ru)(r.from, q(t.runner)));
                          let n = t.interface,
                            a =
                              (0, p.yT)(r.value || J, "overrides.value") === J,
                            i = "0x" === (r.data || "0x");
                          !n.fallback ||
                            n.fallback.payable ||
                            !n.receive ||
                            i ||
                            a ||
                            (0, f.en)(
                              !1,
                              "cannot send data to receive or send value to non-payable fallback",
                              "overrides",
                              e
                            ),
                            (0, f.en)(
                              n.fallback || i,
                              "cannot send data to receive-only contract",
                              "overrides.data",
                              r.data
                            );
                          let s =
                            n.receive || (n.fallback && n.fallback.payable);
                          return (
                            (0, f.en)(
                              s || a,
                              "cannot send value to non-payable fallback",
                              "overrides.value",
                              r.value
                            ),
                            (0, f.en)(
                              n.fallback || i,
                              "cannot send data to receive-only contract",
                              "overrides.data",
                              r.data
                            ),
                            r
                          );
                        },
                        r = async function (r) {
                          let n = $(t.runner, "call");
                          (0, f.hu)(
                            V(n),
                            "contract runner does not support calling",
                            "UNSUPPORTED_OPERATION",
                            { operation: "call" }
                          );
                          let a = await e(r);
                          try {
                            return await n.call(a);
                          } catch (e) {
                            if ((0, f.Hl)(e) && e.data)
                              throw t.interface.makeError(e.data, a);
                            throw e;
                          }
                        },
                        n = async function (r) {
                          let n = t.runner;
                          (0, f.hu)(
                            Z(n),
                            "contract runner does not support sending transactions",
                            "UNSUPPORTED_OPERATION",
                            { operation: "sendTransaction" }
                          );
                          let a = await n.sendTransaction(await e(r)),
                            i = tt(t.runner);
                          return new H(t.interface, i, a);
                        },
                        a = async function (r) {
                          let n = $(t.runner, "estimateGas");
                          return (
                            (0, f.hu)(
                              K(n),
                              "contract runner does not support gas estimation",
                              "UNSUPPORTED_OPERATION",
                              { operation: "estimateGas" }
                            ),
                            await n.estimateGas(await e(r))
                          );
                        },
                        i = async (t) => await n(t);
                      return (
                        (0, h.h)(i, {
                          _contract: t,
                          estimateGas: a,
                          populateTransaction: e,
                          send: n,
                          staticCall: r,
                        }),
                        i
                      );
                    })(this)
                  : null,
            }),
            new Proxy(this, {
              get: (t, e, r) => {
                if ("symbol" == typeof e || e in t || tf.indexOf(e) >= 0)
                  return Reflect.get(t, e, r);
                try {
                  return t.getFunction(e);
                } catch (t) {
                  if (!(0, f.VZ)(t, "INVALID_ARGUMENT") || "key" !== t.argument)
                    throw t;
                }
              },
              has: (t, e) =>
                "symbol" == typeof e || e in t || tf.indexOf(e) >= 0
                  ? Reflect.has(t, e)
                  : t.interface.hasFunction(e),
            })
          );
        }
      }
      function tp() {
        return td;
      }
      class tg extends tp() {}
    },
    24536: function (t, e, r) {
      r.d(e, {
        w: function () {
          return l;
        },
      });
      var n = r(81762),
        a = r(22110);
      let i = !1,
        s = function (t) {
          return (0, n.fr)(t);
        },
        o = s;
      function l(t) {
        let e = (0, a.Pw)(t, "data");
        return (0, a.Dv)(o(e));
      }
      (l._ = s),
        (l.lock = function () {
          i = !0;
        }),
        (l.register = function (t) {
          if (i) throw TypeError("keccak256 is locked");
          o = t;
        }),
        Object.freeze(l);
    },
    77352: function (t, e, r) {
      r.d(e, {
        P: function () {
          return k;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776);
      let s =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
      var o = r(22110),
        l = r(14755),
        c = r(25454);
      let u = BigInt(0),
        h = BigInt(1),
        f = BigInt(2),
        d = BigInt(27),
        p = BigInt(28),
        g = BigInt(35),
        m = {};
      function w(t) {
        return (0, o.U3)((0, l.ot)(t), 32);
      }
      var y = new WeakMap(),
        A = new WeakMap(),
        b = new WeakMap(),
        _ = new WeakMap();
      let E = Symbol.for("nodejs.util.inspect.custom");
      class k {
        get r() {
          return (0, n._)(this, y);
        }
        set r(t) {
          (0, c.en)(32 === (0, o.M5)(t), "invalid r", "value", t),
            (0, i._)(this, y, (0, o.Dv)(t));
        }
        get s() {
          return (0, n._)(this, A);
        }
        set s(t) {
          (0, c.en)(32 === (0, o.M5)(t), "invalid s", "value", t);
          let e = (0, o.Dv)(t);
          (0, c.en)(
            8 > parseInt(e.substring(0, 3)),
            "non-canonical s",
            "value",
            e
          ),
            (0, i._)(this, A, e);
        }
        get v() {
          return (0, n._)(this, b);
        }
        set v(t) {
          let e = (0, l.Dx)(t, "value");
          (0, c.en)(27 === e || 28 === e, "invalid v", "v", t),
            (0, i._)(this, b, e);
        }
        get networkV() {
          return (0, n._)(this, _);
        }
        get legacyChainId() {
          let t = this.networkV;
          return null == t ? null : k.getChainId(t);
        }
        get yParity() {
          return 27 === this.v ? 0 : 1;
        }
        get yParityAndS() {
          let t = (0, o.Pw)(this.s);
          return this.yParity && (t[0] |= 128), (0, o.Dv)(t);
        }
        get compactSerialized() {
          return (0, o.zo)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, o.zo)([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
        }
        [E]() {
          return 'Signature { r: "'
            .concat(this.r, '", s: "')
            .concat(this.s, '", yParity: ')
            .concat(this.yParity, ", networkV: ")
            .concat(this.networkV, " }");
        }
        clone() {
          let t = new k(m, this.r, this.s, this.v);
          return this.networkV && (0, i._)(t, _, this.networkV), t;
        }
        toJSON() {
          let t = this.networkV;
          return {
            _type: "signature",
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this.s,
            v: this.v,
          };
        }
        static getChainId(t) {
          let e = (0, l.yT)(t, "v");
          return e == d || e == p
            ? u
            : ((0, c.en)(e >= g, "invalid EIP-155 v", "v", t), (e - g) / f);
        }
        static getChainIdV(t, e) {
          return (0, l.yT)(t) * f + BigInt(35 + e - 27);
        }
        static getNormalizedV(t) {
          let e = (0, l.yT)(t);
          return e === u || e === d
            ? 27
            : e === h || e === p
            ? 28
            : ((0, c.en)(e >= g, "invalid v", "v", t), e & h ? 27 : 28);
        }
        static from(t) {
          function e(e, r) {
            (0, c.en)(e, r, "signature", t);
          }
          if (null == t) return new k(m, s, s, 27);
          if ("string" == typeof t) {
            let r = (0, o.Pw)(t, "signature");
            if (64 === r.length) {
              let t = (0, o.Dv)(r.slice(0, 32)),
                e = r.slice(32, 64),
                n = 128 & e[0] ? 28 : 27;
              return (e[0] &= 127), new k(m, t, (0, o.Dv)(e), n);
            }
            if (65 === r.length) {
              let t = (0, o.Dv)(r.slice(0, 32)),
                n = r.slice(32, 64);
              e((128 & n[0]) == 0, "non-canonical s");
              let a = k.getNormalizedV(r[64]);
              return new k(m, t, (0, o.Dv)(n), a);
            }
            e(!1, "invalid raw signature length");
          }
          if (t instanceof k) return t.clone();
          let r = t.r;
          e(null != r, "missing r");
          let n = w(r),
            a = (function (t, r) {
              if (null != t) return w(t);
              if (null != r) {
                e((0, o.A7)(r, 32), "invalid yParityAndS");
                let t = (0, o.Pw)(r);
                return (t[0] &= 127), (0, o.Dv)(t);
              }
              e(!1, "missing s");
            })(t.s, t.yParityAndS);
          e((128 & (0, o.Pw)(a)[0]) == 0, "non-canonical s");
          let { networkV: u, v: h } = (function (t, r, n) {
              if (null != t) {
                let e = (0, l.yT)(t);
                return {
                  networkV: e >= g ? e : void 0,
                  v: k.getNormalizedV(e),
                };
              }
              if (null != r)
                return (
                  e((0, o.A7)(r, 32), "invalid yParityAndS"),
                  { v: 128 & (0, o.Pw)(r)[0] ? 28 : 27 }
                );
              if (null != n) {
                switch ((0, l.Dx)(n, "sig.yParity")) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                e(!1, "invalid yParity");
              }
              e(!1, "missing v");
            })(t.v, t.yParityAndS, t.yParity),
            f = new k(m, n, a, h);
          return (
            u && (0, i._)(f, _, u),
            e(
              null == t.yParity ||
                (0, l.Dx)(t.yParity, "sig.yParity") === f.yParity,
              "yParity mismatch"
            ),
            e(
              null == t.yParityAndS || t.yParityAndS === f.yParityAndS,
              "yParityAndS mismatch"
            ),
            f
          );
        }
        constructor(t, e, r, n) {
          (0, a._)(this, y, { writable: !0, value: void 0 }),
            (0, a._)(this, A, { writable: !0, value: void 0 }),
            (0, a._)(this, b, { writable: !0, value: void 0 }),
            (0, a._)(this, _, { writable: !0, value: void 0 }),
            (0, c.NK)(t, m, "Signature"),
            (0, i._)(this, y, e),
            (0, i._)(this, A, r),
            (0, i._)(this, b, n),
            (0, i._)(this, _, null);
        }
      }
    },
    88909: function (t, e, r) {
      r.d(e, {
        id: function () {
          return i;
        },
      });
      var n = r(24536),
        a = r(45256);
      function i(t) {
        return (0, n.w)((0, a.Y0)(t));
      }
    },
    78967: function (t, e, r) {
      let n, a, i, s, o, l, c, u, h, f, d, p, g, m, w;
      r.d(e, {
        u: function () {
          return eo;
        },
        P: function () {
          return tK;
        },
      });
      var y = r(4301),
        A = r(18654),
        b = r(8776),
        _ = r(7321),
        E = r(8730),
        k = r(36284),
        P = r(33187),
        N = r(15587),
        R = r(89251),
        T = r(80856),
        C = r(24536),
        x = r(25454),
        O = r(45256),
        I = r(22110);
      let D = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function B(t) {
        var e;
        let r;
        return (
          (e = (function (t) {
            let e = 0;
            function r() {
              return (t[e++] << 8) | t[e++];
            }
            let n = r(),
              a = 1,
              i = [0, 1];
            for (let t = 1; t < n; t++) i.push((a += r()));
            let s = r(),
              o = e;
            e += s;
            let l = 0,
              c = 0;
            function u() {
              return (
                0 == l && ((c = (c << 8) | t[e++]), (l = 8)), (c >> --l) & 1
              );
            }
            let h = 2147483648 - 1,
              f = 0;
            for (let t = 0; t < 31; t++) f = (f << 1) | u();
            let d = [],
              p = 0,
              g = 2147483648;
            for (;;) {
              let t = Math.floor(((f - p + 1) * a - 1) / g),
                e = 0,
                r = n;
              for (; r - e > 1; ) {
                let n = (e + r) >>> 1;
                t < i[n] ? (r = n) : (e = n);
              }
              if (0 == e) break;
              d.push(e);
              let s = p + Math.floor((g * i[e]) / a),
                o = p + Math.floor((g * i[e + 1]) / a) - 1;
              for (; ((s ^ o) & 1073741824) == 0; )
                (f = ((f << 1) & h) | u()),
                  (s = (s << 1) & h),
                  (o = ((o << 1) & h) | 1);
              for (; s & ~o & 536870912; )
                (f = (1073741824 & f) | ((f << 1) & (h >>> 1)) | u()),
                  (s = (s << 1) ^ 1073741824),
                  (o = ((1073741824 ^ o) << 1) | 1073741825);
              (p = s), (g = 1 + o - s);
            }
            let m = n - 4;
            return d.map((e) => {
              switch (e - m) {
                case 3:
                  return m + 65792 + ((t[o++] << 16) | (t[o++] << 8) | t[o++]);
                case 2:
                  return m + 256 + ((t[o++] << 8) | t[o++]);
                case 1:
                  return m + t[o++];
                default:
                  return e - 1;
              }
            });
          })(
            (function (t) {
              let e = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((t, r) => (e[t.charCodeAt(0)] = r));
              let r = t.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let a = 0, i = 0, s = 0, o = 0; a < r; a++)
                (o = (o << 6) | e[t.charCodeAt(a)]),
                  (s += 6) >= 8 && (n[i++] = o >> (s -= 8));
              return n;
            })(t)
          )),
          (r = 0),
          () => e[r++]
        );
      }
      function S(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = [];
        for (;;) {
          let n = t(),
            a = t();
          if (!a) break;
          e += n;
          for (let t = 0; t < a; t++) r.push(e + t);
          e += a + 1;
        }
        return r;
      }
      function M(t) {
        return U(() => {
          let e = S(t);
          if (e.length) return e;
        });
      }
      function F(t) {
        let e = [];
        for (;;) {
          let r = t();
          if (0 == r) break;
          e.push(
            (function (t, e) {
              let r = 1 + e(),
                n = e(),
                a = U(e);
              return L(a.length, 1 + t, e).flatMap((t, e) => {
                let [i, ...s] = t;
                return Array(a[e])
                  .fill()
                  .map((t, e) => {
                    let a = e * n;
                    return [i + e * r, s.map((t) => t + a)];
                  });
              });
            })(r, t)
          );
        }
        for (;;) {
          let r = t() - 1;
          if (r < 0) break;
          e.push(L(1 + t(), 1 + r, t).map((t) => [t[0], t.slice(1)]));
        }
        return e.flat();
      }
      function U(t) {
        let e = [];
        for (;;) {
          let r = t(e.length);
          if (!r) break;
          e.push(r);
        }
        return e;
      }
      function L(t, e, r) {
        let n = Array(t)
          .fill()
          .map(() => []);
        for (let a = 0; a < e; a++)
          (function (t, e) {
            let r = Array(t);
            for (let a = 0, i = 0; a < t; a++) {
              var n;
              r[a] = i += 1 & (n = e()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      function G(t) {
        return "{".concat(t.toString(16).toUpperCase().padStart(2, "0"), "}");
      }
      function Q(t) {
        let e = t.length;
        if (e < 4096) return String.fromCodePoint(...t);
        let r = [];
        for (let n = 0; n < e; )
          r.push(String.fromCodePoint(...t.slice(n, (n += 4096))));
        return r.join("");
      }
      function H(t, e) {
        let r = t.length,
          n = r - e.length;
        for (let a = 0; 0 == n && a < r; a++) n = t[a] - e[a];
        return n;
      }
      function W(t) {
        return (t >> 24) & 255;
      }
      function j(t) {
        return 16777215 & t;
      }
      function J(t) {
        return t >= 44032 && t < 55204;
      }
      function V(t) {
        n ||
          (function () {
            let t = B(
              "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"
            );
            for (let [e, r] of ((n = new Map(
              M(t).flatMap((t, e) => t.map((t) => [t, (e + 1) << 24]))
            )),
            (a = new Set(S(t))),
            (i = new Map()),
            (s = new Map()),
            F(t))) {
              if (!a.has(e) && 2 == r.length) {
                let [t, n] = r,
                  a = s.get(t);
                a || ((a = new Map()), s.set(t, a)), a.set(n, e);
              }
              i.set(e, r.reverse());
            }
          })();
        let e = [],
          r = [],
          o = !1;
        function l(t) {
          let r = n.get(t);
          r && ((o = !0), (t |= r)), e.push(t);
        }
        for (let n of t)
          for (;;) {
            if (n < 128) e.push(n);
            else if (J(n)) {
              let t = n - 44032,
                e = (t / 588) | 0,
                r = ((t % 588) / 28) | 0,
                a = t % 28;
              l(4352 + e), l(4449 + r), a > 0 && l(4519 + a);
            } else {
              let t = i.get(n);
              t ? r.push(...t) : l(n);
            }
            if (!r.length) break;
            n = r.pop();
          }
        if (o && e.length > 1) {
          let t = W(e[0]);
          for (let r = 1; r < e.length; r++) {
            let n = W(e[r]);
            if (0 == n || t <= n) {
              t = n;
              continue;
            }
            let a = r - 1;
            for (;;) {
              let r = e[a + 1];
              if (((e[a + 1] = e[a]), (e[a] = r), !a || (t = W(e[--a])) <= n))
                break;
            }
            t = W(e[r]);
          }
        }
        return e;
      }
      function K(t) {
        return (function (t) {
          let e = [],
            r = [],
            n = -1,
            a = 0;
          for (let i of t) {
            let t = W(i),
              o = j(i);
            if (-1 == n) 0 == t ? (n = o) : e.push(o);
            else if (a > 0 && a >= t)
              0 == t ? (e.push(n, ...r), (r.length = 0), (n = o)) : r.push(o),
                (a = t);
            else {
              let i = (function (t, e) {
                if (t >= 4352 && t < 4371 && e >= 4449 && e < 4470)
                  return 44032 + (t - 4352) * 588 + (e - 4449) * 28;
                if (J(t) && e > 4519 && e < 4547 && (t - 44032) % 28 == 0)
                  return t + (e - 4519);
                {
                  let r = s.get(t);
                  return r && (r = r.get(e)) ? r : -1;
                }
              })(n, o);
              i >= 0
                ? (n = i)
                : 0 == a && 0 == t
                ? (e.push(n), (n = o))
                : (r.push(o), (a = t));
            }
          }
          return n >= 0 && e.push(n, ...r), e;
        })(V(t));
      }
      let z = (t) => Array.from(t);
      function Z(t, e) {
        return t.P.has(e) || t.Q.has(e);
      }
      class q extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function Y() {
        let t, e;
        if (o) return;
        let r = B(
            "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"
          ),
          n = () => S(r),
          a = () => new Set(n()),
          i = (t, e) => e.forEach((e) => t.add(e));
        (o = new Map(F(r))),
          (l = a()),
          (c = n()),
          (u = new Set(n().map((t) => c[t]))),
          (c = new Set(c)),
          (h = a()),
          a();
        let s = M(r),
          y = r(),
          A = () => {
            let t = new Set();
            return n().forEach((e) => i(t, s[e])), i(t, n()), t;
          };
        (f = U((t) => {
          let e = U(r).map((t) => t + 96);
          if (e.length) {
            let n = t >= y;
            return (
              (e[0] -= 32),
              (e = Q(e)),
              0 && (e = "Restricted[".concat(e, "]")),
              { N: e, P: A(), Q: A(), M: !r(), R: n }
            );
          }
        })),
          (d = a()),
          (p = new Map());
        let b = n()
          .concat(z(d))
          .sort((t, e) => t - e);
        for (let { V: t, M: e } of (b.forEach((t, e) => {
          let n = r(),
            a = (b[e] = n ? b[e - n] : { V: [], M: new Map() });
          a.V.push(t), d.has(t) || p.set(t, a);
        }),
        new Set(p.values()))) {
          let r = [];
          for (let e of t) {
            let t = f.filter((t) => Z(t, e)),
              n = r.find((e) => {
                let { G: r } = e;
                return t.some((t) => r.has(t));
              });
            n || ((n = { G: new Set(), V: [] }), r.push(n)),
              n.V.push(e),
              i(n.G, t);
          }
          let n = r.flatMap((t) => z(t.G));
          for (let { G: t, V: a } of r) {
            let r = new Set(n.filter((e) => !t.has(e)));
            for (let t of a) e.set(t, r);
          }
        }
        g = new Set();
        let _ = new Set(),
          E = (t) => (g.has(t) ? _.add(t) : g.add(t));
        for (let t of f) {
          for (let e of t.P) E(e);
          for (let e of t.Q) E(e);
        }
        for (let t of g) p.has(t) || _.has(t) || p.set(t, 1);
        for (let n of (i(g, V(g).map(j)),
        (m = ((t = []),
        (e = S(r)),
        (function e(r, n, a) {
          let { S: i, B: s } = r;
          if (!(4 & i) || a !== n[n.length - 1])
            for (let r of (2 & i && (a = n[n.length - 1]),
            1 & i && t.push(n),
            s))
              for (let t of r.Q) e(r, [...n, t], a);
        })(
          (function t(n) {
            return {
              S: r(),
              B: U(() => {
                let n = S(r).map((t) => e[t]);
                if (n.length) return t(n);
              }),
              Q: n,
            };
          })([]),
          []
        ),
        t)
          .map((t) => q.from(t))
          .sort(H)),
        (w = new Map()),
        m)) {
          let t = [w];
          for (let e of n) {
            let r = t.map((t) => {
              let r = t.get(e);
              return r || ((r = new Map()), t.set(e, r)), r;
            });
            65039 === e ? t.push(...r) : (t = r);
          }
          for (let e of t) e.V = n;
        }
      }
      function X(t) {
        return (te(t) ? "" : "".concat($(tt([t])), " ")) + G(t);
      }
      function $(t) {
        return '"'.concat(t, '"‎');
      }
      function tt(t) {
        var e;
        let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : G,
          a = [];
        (e = t[0]),
          Y(),
          c.has(e) && a.push("◌"),
          t.length > r &&
            ((r >>= 1), (t = [...t.slice(0, r), 8230, ...t.slice(-r)]));
        let i = 0,
          s = t.length;
        for (let e = 0; e < s; e++) {
          let r = t[e];
          te(r) && (a.push(Q(t.slice(i, e))), a.push(n(r)), (i = e + 1));
        }
        return a.push(Q(t.slice(i, s))), a.join("");
      }
      function te(t) {
        return Y(), h.has(t);
      }
      function tr(t) {
        return Error("disallowed character: ".concat(X(t)));
      }
      function tn(t, e) {
        let r = X(e),
          n = f.find((t) => t.P.has(e));
        return (
          n && (r = "".concat(n.N, " ").concat(r)),
          Error("illegal mixture: ".concat(t.N, " + ").concat(r))
        );
      }
      function ta(t) {
        return Error("illegal placement: ".concat(t));
      }
      function ti(t) {
        return t.filter((t) => 65039 != t);
      }
      let ts = new Uint8Array(32);
      function to(t) {
        return (
          (0, x.en)(
            0 !== t.length,
            "invalid ENS name; empty component",
            "comp",
            t
          ),
          t
        );
      }
      function tl(t) {
        let e = (0, O.Y0)(
            (function (t) {
              try {
                var e;
                if (0 === t.length) throw Error("empty label");
                return (e = (function (t, e, r) {
                  if (!t) return [];
                  Y();
                  let n = 0;
                  return t.split(".").map((t) => {
                    let a = (function (t) {
                        let e = [];
                        for (let r = 0, n = t.length; r < n; ) {
                          let n = t.codePointAt(r);
                          (r += n < 65536 ? 1 : 2), e.push(n);
                        }
                        return e;
                      })(t),
                      i = { input: a, offset: n };
                    n += a.length + 1;
                    try {
                      let t,
                        n = (i.tokens = (function (t, e, r) {
                          let n = [],
                            a = [];
                          for (t = t.slice().reverse(); t.length; ) {
                            let i = (function (t, e) {
                              let r,
                                n = w,
                                a = t.length;
                              for (; a && (n = n.get(t[--a])); ) {
                                let { V: i } = n;
                                i &&
                                  ((r = i),
                                  e && e.push(...t.slice(a).reverse()),
                                  (t.length = a));
                              }
                              return r;
                            })(t);
                            if (i)
                              a.length && (n.push(e(a)), (a = [])),
                                n.push(r(i));
                            else {
                              let e = t.pop();
                              if (g.has(e)) a.push(e);
                              else {
                                let t = o.get(e);
                                if (t) a.push(...t);
                                else if (!l.has(e)) throw tr(e);
                              }
                            }
                          }
                          return a.length && n.push(e(a)), n;
                        })(a, e, r)),
                        s = n.length;
                      if (!s) throw Error("empty label");
                      let h = (i.output = n.flat());
                      if (
                        ((function (t) {
                          for (let e = t.lastIndexOf(95); e > 0; )
                            if (95 !== t[--e])
                              throw Error("underscore allowed only at start");
                        })(h),
                        !(i.emoji = s > 1 || n[0].is_emoji) &&
                          h.every((t) => t < 128))
                      )
                        (function (t) {
                          if (t.length >= 4 && 45 == t[2] && 45 == t[3])
                            throw Error(
                              'invalid label extension: "'.concat(
                                Q(t.slice(0, 4)),
                                '"'
                              )
                            );
                        })(h),
                          (t = "ASCII");
                      else {
                        let e = n.flatMap((t) => (t.is_emoji ? [] : t));
                        if (e.length) {
                          if (c.has(h[0])) throw ta("leading combining mark");
                          for (let t = 1; t < s; t++) {
                            let e = n[t];
                            if (!e.is_emoji && c.has(e[0]))
                              throw ta(
                                'emoji + combining mark: "'
                                  .concat(Q(n[t - 1]), " + ")
                                  .concat(tt([e[0]]), '"')
                              );
                          }
                          !(function (t) {
                            let e = t[0],
                              r = D.get(e);
                            if (r) throw ta("leading ".concat(r));
                            let n = t.length,
                              a = -1;
                            for (let i = 1; i < n; i++) {
                              e = t[i];
                              let n = D.get(e);
                              if (n) {
                                if (a == i)
                                  throw ta("".concat(r, " + ").concat(n));
                                (a = i + 1), (r = n);
                              }
                            }
                            if (a == n) throw ta("trailing ".concat(r));
                          })(h);
                          let r = z(new Set(e)),
                            [a] = (function (t) {
                              let e = f;
                              for (let r of t) {
                                let t = e.filter((t) => Z(t, r));
                                if (!t.length) {
                                  if (f.some((t) => Z(t, r))) throw tn(e[0], r);
                                  throw tr(r);
                                }
                                if (((e = t), 1 == t.length)) break;
                              }
                              return e;
                            })(r);
                          (function (t, e) {
                            for (let r of e) if (!Z(t, r)) throw tn(t, r);
                            if (t.M) {
                              let t = V(e).map(j);
                              for (let e = 1, r = t.length; e < r; e++)
                                if (u.has(t[e])) {
                                  let n = e + 1;
                                  for (let a; n < r && u.has((a = t[n])); n++)
                                    for (let r = e; r < n; r++)
                                      if (t[r] == a)
                                        throw Error(
                                          "duplicate non-spacing marks: ".concat(
                                            X(a)
                                          )
                                        );
                                  if (n - e > 4)
                                    throw Error(
                                      "excessive non-spacing marks: "
                                        .concat($(tt(t.slice(e - 1, n))), " (")
                                        .concat(n - e, "/")
                                        .concat(4, ")")
                                    );
                                  e = n;
                                }
                            }
                          })(a, e),
                            (function (t, e) {
                              let r;
                              let n = [];
                              for (let t of e) {
                                let e = p.get(t);
                                if (1 === e) return;
                                if (e) {
                                  let n = e.M.get(t);
                                  if (
                                    !(r = r ? r.filter((t) => n.has(t)) : z(n))
                                      .length
                                  )
                                    return;
                                } else n.push(t);
                              }
                              if (r) {
                                for (let e of r)
                                  if (n.every((t) => Z(e, t)))
                                    throw Error(
                                      "whole-script confusable: "
                                        .concat(t.N, "/")
                                        .concat(e.N)
                                    );
                              }
                            })(a, r),
                            (t = a.N);
                        } else t = "Emoji";
                      }
                      i.type = t;
                    } catch (t) {
                      i.error = t;
                    }
                    return i;
                  });
                })(t, K, ti))
                  .map((t) => {
                    let { input: r, error: n, output: a } = t;
                    if (n) {
                      let t = n.message;
                      throw Error(
                        1 == e.length
                          ? t
                          : "Invalid label "
                              .concat($(tt(r, 63)), ": ")
                              .concat(t)
                      );
                    }
                    return Q(a);
                  })
                  .join(".");
              } catch (e) {
                (0, x.en)(
                  !1,
                  "invalid ENS name (".concat(e.message, ")"),
                  "name",
                  t
                );
              }
            })(t)
          ),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let t = 0; t < e.length; t++)
          46 === e[t] && (r.push(to(e.slice(n, t))), (n = t + 1));
        return (
          (0, x.en)(
            n < e.length,
            "invalid ENS name; empty component",
            "name",
            t
          ),
          r.push(to(e.slice(n))),
          r
        );
      }
      function tc(t) {
        (0, x.en)(
          "string" == typeof t,
          "invalid ENS name; not a string",
          "name",
          t
        ),
          (0, x.en)(t.length, "invalid ENS name (empty label)", "name", t);
        let e = ts,
          r = tl(t);
        for (; r.length; ) e = (0, C.w)((0, I.zo)([e, (0, C.w)(r.pop())]));
        return (0, I.Dv)(e);
      }
      ts.fill(0);
      var tu = r(74764),
        th = r(63718),
        tf = r(59350),
        td = r(14755),
        tp = r(81948);
      let tg = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      BigInt(0);
      let tm = BigInt(58);
      function tw(t) {
        return (
          t.match(/^ipfs:\/\/ipfs\//i)
            ? (t = t.substring(12))
            : t.match(/^ipfs:\/\//i)
            ? (t = t.substring(7))
            : (0, x.en)(!1, "unsupported IPFS format", "link", t),
          "https://gateway.ipfs.io/ipfs/".concat(t)
        );
      }
      class ty {
        connect(t) {
          return this;
        }
        supportsCoinType(t) {
          return !1;
        }
        async encodeAddress(t, e) {
          throw Error("unsupported coin");
        }
        async decodeAddress(t, e) {
          throw Error("unsupported coin");
        }
        constructor(t) {
          (0, th.h)(this, { name: t });
        }
      }
      let tA = RegExp("^(ipfs)://(.*)$", "i"),
        tb = [
          RegExp("^(https)://(.*)$", "i"),
          RegExp("^(data):(.*)$", "i"),
          tA,
          RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
        ];
      var tv = new WeakMap(),
        t_ = new WeakMap(),
        tE = new WeakSet();
      class tk {
        async supportsWildcard() {
          return (
            null == (0, y._)(this, tv) &&
              (0, b._)(
                this,
                tv,
                (async () => {
                  try {
                    return await (0, y._)(this, t_).supportsInterface(
                      "0x9061b923"
                    );
                  } catch (t) {
                    if ((0, x.VZ)(t, "CALL_EXCEPTION")) return !1;
                    throw ((0, b._)(this, tv, null), t);
                  }
                })()
              ),
            await (0, y._)(this, tv)
          );
        }
        async getAddress(t) {
          if ((null == t && (t = 60), 60 === t))
            try {
              let t = await (0, E._)(this, tE, tP).call(this, "addr(bytes32)");
              if (null == t || t === R.N) return null;
              return t;
            } catch (t) {
              if ((0, x.VZ)(t, "CALL_EXCEPTION")) return null;
              throw t;
            }
          if (t >= 0 && t < 2147483648) {
            let e = t + 2147483648,
              r = await (0, E._)(this, tE, tP).call(
                this,
                "addr(bytes32,uint)",
                [e]
              );
            if ((0, I.A7)(r, 20)) return (0, N.K)(r);
          }
          let e = null;
          for (let r of this.provider.plugins)
            if (r instanceof ty && r.supportsCoinType(t)) {
              e = r;
              break;
            }
          if (null == e) return null;
          let r = await (0, E._)(this, tE, tP).call(
            this,
            "addr(bytes32,uint)",
            [t]
          );
          if (null == r || "0x" === r) return null;
          let n = await e.decodeAddress(t, r);
          if (null != n) return n;
          (0, x.hu)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
            operation: "getAddress(".concat(t, ")"),
            info: { coinType: t, data: r },
          });
        }
        async getText(t) {
          let e = await (0, E._)(this, tE, tP).call(
            this,
            "text(bytes32,string)",
            [t]
          );
          return null == e || "0x" === e ? null : e;
        }
        async getContentHash() {
          let t = await (0, E._)(this, tE, tP).call(
            this,
            "contenthash(bytes32)"
          );
          if (null == t || "0x" === t) return null;
          let e = t.match(
            /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
          );
          if (e) {
            let t = "e3010170" === e[1] ? "ipfs" : "ipns",
              r = parseInt(e[4], 16);
            if (e[5].length === 2 * r)
              return "".concat(t, "://").concat(
                (function (t) {
                  let e = (0, I.Pw)(t),
                    r = (0, td.Gh)(e),
                    n = "";
                  for (; r; ) (n = tg[Number(r % tm)] + n), (r /= tm);
                  for (let t = 0; t < e.length && !e[t]; t++) n = tg[0] + n;
                  return n;
                })("0x" + e[2])
              );
          }
          let r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
          if (r && 64 === r[1].length) return "bzz://".concat(r[1]);
          (0, x.hu)(
            !1,
            "invalid or unsupported content hash data",
            "UNSUPPORTED_OPERATION",
            { operation: "getContentHash()", info: { data: t } }
          );
        }
        async getAvatar() {
          return (await this._getAvatar()).url;
        }
        async _getAvatar() {
          let t = [{ type: "name", value: this.name }];
          try {
            let e = await this.getText("avatar");
            if (null == e)
              return (
                t.push({ type: "!avatar", value: "" }),
                { url: null, linkage: t }
              );
            t.push({ type: "avatar", value: e });
            for (let r = 0; r < tb.length; r++) {
              let n = e.match(tb[r]);
              if (null == n) continue;
              let a = n[1].toLowerCase();
              switch (a) {
                case "https":
                case "data":
                  return (
                    t.push({ type: "url", value: e }), { linkage: t, url: e }
                  );
                case "ipfs": {
                  let r = tw(e);
                  return (
                    t.push({ type: "ipfs", value: e }),
                    t.push({ type: "url", value: r }),
                    { linkage: t, url: r }
                  );
                }
                case "erc721":
                case "erc1155": {
                  let r = "erc721" === a ? "tokenURI(uint256)" : "uri(uint256)";
                  t.push({ type: a, value: e });
                  let i = await this.getAddress();
                  if (null == i)
                    return (
                      t.push({ type: "!owner", value: "" }),
                      { url: null, linkage: t }
                    );
                  let s = (n[2] || "").split("/");
                  if (2 !== s.length)
                    return (
                      t.push({
                        type: "!".concat(a, "caip"),
                        value: n[2] || "",
                      }),
                      { url: null, linkage: t }
                    );
                  let o = s[1],
                    l = new T.CH(
                      s[0],
                      [
                        "function tokenURI(uint) view returns (string)",
                        "function ownerOf(uint) view returns (address)",
                        "function uri(uint) view returns (string)",
                        "function balanceOf(address, uint256) view returns (uint)",
                      ],
                      this.provider
                    );
                  if ("erc721" === a) {
                    let e = await l.ownerOf(o);
                    if (i !== e)
                      return (
                        t.push({ type: "!owner", value: e }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "owner", value: e });
                  } else if ("erc1155" === a) {
                    let e = await l.balanceOf(i, o);
                    if (!e)
                      return (
                        t.push({ type: "!balance", value: "0" }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "balance", value: e.toString() });
                  }
                  let c = await l[r](o);
                  if (null == c || "0x" === c)
                    return (
                      t.push({ type: "!metadata-url", value: "" }),
                      { url: null, linkage: t }
                    );
                  t.push({ type: "metadata-url-base", value: c }),
                    "erc1155" === a &&
                      ((c = c.replace("{id}", (0, td.m9)(o, 32).substring(2))),
                      t.push({ type: "metadata-url-expanded", value: c })),
                    c.match(/^ipfs:/i) && (c = tw(c)),
                    t.push({ type: "metadata-url", value: c });
                  let u = {},
                    h = await new tf.gd(c).send();
                  h.assertOk();
                  try {
                    u = h.bodyJson;
                  } catch (e) {
                    try {
                      t.push({ type: "!metadata", value: h.bodyText });
                    } catch (r) {
                      let e = h.body;
                      e && t.push({ type: "!metadata", value: (0, I.Dv)(e) });
                    }
                    return { url: null, linkage: t };
                  }
                  if (!u)
                    return (
                      t.push({ type: "!metadata", value: "" }),
                      { url: null, linkage: t }
                    );
                  t.push({ type: "metadata", value: JSON.stringify(u) });
                  let f = u.image;
                  if ("string" != typeof f)
                    return (
                      t.push({ type: "!imageUrl", value: "" }),
                      { url: null, linkage: t }
                    );
                  if (f.match(/^(https:\/\/|data:)/i));
                  else {
                    let e = f.match(tA);
                    if (null == e)
                      return (
                        t.push({ type: "!imageUrl-ipfs", value: f }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "imageUrl-ipfs", value: f }), (f = tw(f));
                  }
                  return (
                    t.push({ type: "url", value: f }), { linkage: t, url: f }
                  );
                }
              }
            }
          } catch (t) {}
          return { linkage: t, url: null };
        }
        static async getEnsAddress(t) {
          let e = await t.getNetwork(),
            r = e.getPlugin("org.ethers.plugins.network.Ens");
          return (
            (0, x.hu)(
              r,
              "network does not support ENS",
              "UNSUPPORTED_OPERATION",
              { operation: "getEnsAddress", info: { network: e } }
            ),
            r.address
          );
        }
        static async fromName(t, e) {
          let r = e;
          for (;;) {
            if ("" === r || "." === r || ("eth" !== e && "eth" === r))
              return null;
            let n = await (!(function (t, e) {
              if (t !== e)
                throw TypeError("Private static access of wrong provenance");
            })(tk, tk),
            tN).call(tk, t, r);
            if (null != n) {
              let a = new tk(t, n, e);
              if (r !== e && !(await a.supportsWildcard())) return null;
              return a;
            }
            r = r.split(".").slice(1).join(".");
          }
        }
        constructor(t, e, r) {
          (0, k._)(this, tE),
            (0, A._)(this, tv, { writable: !0, value: void 0 }),
            (0, A._)(this, t_, { writable: !0, value: void 0 }),
            (0, th.h)(this, { provider: t, address: e, name: r }),
            (0, b._)(this, tv, null),
            (0, b._)(
              this,
              t_,
              new T.CH(
                e,
                [
                  "function supportsInterface(bytes4) view returns (bool)",
                  "function resolve(bytes, bytes) view returns (bytes)",
                  "function addr(bytes32) view returns (address)",
                  "function addr(bytes32, uint) view returns (bytes)",
                  "function text(bytes32, string) view returns (string)",
                  "function contenthash(bytes32) view returns (bytes)",
                ],
                t
              )
            );
        }
      }
      async function tP(t, e) {
        e = (e || []).slice();
        let r = (0, y._)(this, t_).interface;
        e.unshift(tc(this.name));
        let n = null;
        (await this.supportsWildcard()) &&
          ((n = r.getFunction(t)),
          (0, x.hu)(n, "missing fragment", "UNKNOWN_ERROR", {
            info: { funcName: t },
          }),
          (e = [
            (function (t, e) {
              let r = null != e ? e : 63;
              return (
                (0, x.en)(
                  r <= 255,
                  "DNS encoded label cannot exceed 255",
                  "length",
                  r
                ),
                (0, I.Dv)(
                  (0, I.zo)(
                    tl(t).map((e) => {
                      (0, x.en)(
                        e.length <= r,
                        "label "
                          .concat(JSON.stringify(t), " exceeds ")
                          .concat(r, " bytes"),
                        "name",
                        t
                      );
                      let n = new Uint8Array(e.length + 1);
                      return n.set(e, 1), (n[0] = n.length - 1), n;
                    })
                  )
                ) + "00"
              );
            })(this.name, 255),
            r.encodeFunctionData(n, e),
          ]),
          (t = "resolve(bytes,bytes)")),
          e.push({ enableCcipRead: !0 });
        try {
          let a = await (0, y._)(this, t_)[t](...e);
          if (n) return r.decodeFunctionResult(n, a)[0];
          return a;
        } catch (t) {
          if (!(0, x.VZ)(t, "CALL_EXCEPTION")) throw t;
        }
        return null;
      }
      async function tN(t, e) {
        let r = await tk.getEnsAddress(t);
        try {
          let n = new T.CH(
              r,
              ["function resolver(bytes32) view returns (address)"],
              t
            ),
            a = await n.resolver(tc(e), { enableCcipRead: !0 });
          if (a === R.N) return null;
          return a;
        } catch (t) {
          throw t;
        }
        return null;
      }
      var tR = r(12975),
        tT = r(77352),
        tC = r(31296);
      let tx = BigInt(0);
      function tO(t, e) {
        return function (r) {
          return null == r ? e : t(r);
        };
      }
      function tI(t, e) {
        return (r) => {
          if (e && null == r) return null;
          if (!Array.isArray(r)) throw Error("not an array");
          return r.map((e) => t(e));
        };
      }
      function tD(t, e) {
        return (r) => {
          let n = {};
          for (let a in t) {
            let i = a;
            if (e && a in e && !(i in r)) {
              for (let t of e[a])
                if (t in r) {
                  i = t;
                  break;
                }
            }
            try {
              let e = t[a](r[i]);
              void 0 !== e && (n[a] = e);
            } catch (e) {
              let t = e instanceof Error ? e.message : "not-an-error";
              (0, x.hu)(
                !1,
                "invalid value for value.".concat(a, " (").concat(t, ")"),
                "BAD_DATA",
                { value: r }
              );
            }
          }
          return n;
        };
      }
      function tB(t) {
        return (0, x.en)((0, I.A7)(t, !0), "invalid data", "value", t), t;
      }
      function tS(t) {
        return (0, x.en)((0, I.A7)(t, 32), "invalid hash", "value", t), t;
      }
      let tM = tD(
          {
            address: N.K,
            blockHash: tS,
            blockNumber: td.Dx,
            data: tB,
            index: td.Dx,
            removed: tO(function (t) {
              switch (t) {
                case !0:
                case "true":
                  return !0;
                case !1:
                case "false":
                  return !1;
              }
              (0,
              x.en)(!1, "invalid boolean; ".concat(JSON.stringify(t)), "value", t);
            }, !1),
            topics: tI(tS),
            transactionHash: tS,
            transactionIndex: td.Dx,
          },
          { index: ["logIndex"] }
        ),
        tF = tD(
          {
            hash: tO(tS),
            parentHash: tS,
            parentBeaconBlockRoot: tO(tS, null),
            number: td.Dx,
            timestamp: td.Dx,
            nonce: tO(tB),
            difficulty: td.yT,
            gasLimit: td.yT,
            gasUsed: td.yT,
            stateRoot: tO(tS, null),
            receiptsRoot: tO(tS, null),
            blobGasUsed: tO(td.yT, null),
            excessBlobGas: tO(td.yT, null),
            miner: tO(N.K),
            prevRandao: tO(tS, null),
            extraData: tB,
            baseFeePerGas: tO(td.yT),
          },
          { prevRandao: ["mixHash"] }
        ),
        tU = tD(
          {
            transactionIndex: td.Dx,
            blockNumber: td.Dx,
            transactionHash: tS,
            address: N.K,
            topics: tI(tS),
            data: tB,
            index: td.Dx,
            blockHash: tS,
          },
          { index: ["logIndex"] }
        ),
        tL = tD(
          {
            to: tO(N.K, null),
            from: tO(N.K, null),
            contractAddress: tO(N.K, null),
            index: td.Dx,
            root: tO(I.Dv),
            gasUsed: td.yT,
            blobGasUsed: tO(td.yT, null),
            logsBloom: tO(tB),
            blockHash: tS,
            hash: tS,
            logs: tI(function (t) {
              return tU(t);
            }),
            blockNumber: td.Dx,
            cumulativeGasUsed: td.yT,
            effectiveGasPrice: tO(td.yT),
            blobGasPrice: tO(td.yT, null),
            status: tO(td.Dx),
            type: tO(td.Dx, 0),
          },
          {
            effectiveGasPrice: ["gasPrice"],
            hash: ["transactionHash"],
            index: ["transactionIndex"],
          }
        );
      function tG(t) {
        t.to &&
          (0, td.yT)(t.to) === tx &&
          (t.to = "0x0000000000000000000000000000000000000000");
        let e = tD(
          {
            hash: tS,
            index: tO(td.Dx, void 0),
            type: (t) => ("0x" === t || null == t ? 0 : (0, td.Dx)(t)),
            accessList: tO(tC.z, null),
            blobVersionedHashes: tO(tI(tS, !0), null),
            blockHash: tO(tS, null),
            blockNumber: tO(td.Dx, null),
            transactionIndex: tO(td.Dx, null),
            from: N.K,
            gasPrice: tO(td.yT),
            maxPriorityFeePerGas: tO(td.yT),
            maxFeePerGas: tO(td.yT),
            maxFeePerBlobGas: tO(td.yT, null),
            gasLimit: td.yT,
            to: tO(N.K, null),
            value: td.yT,
            nonce: td.Dx,
            data: tB,
            creates: tO(N.K, null),
            chainId: tO(td.yT, null),
          },
          { data: ["input"], gasLimit: ["gas"], index: ["transactionIndex"] }
        )(t);
        if (
          (null == e.to &&
            null == e.creates &&
            (e.creates = (function (t) {
              let e = (0, N.K)(t.from),
                r = (0, td.yT)(t.nonce, "tx.nonce").toString(16);
              return (
                (r = "0" === r ? "0x" : r.length % 2 ? "0x0" + r : "0x" + r),
                (0, N.K)((0, I.QB)((0, C.w)((0, tR.e)([e, r])), 12))
              );
            })(e)),
          (1 === t.type || 2 === t.type) &&
            null == t.accessList &&
            (e.accessList = []),
          t.signature
            ? (e.signature = tT.P.from(t.signature))
            : (e.signature = tT.P.from(t)),
          null == e.chainId)
        ) {
          let t = e.signature.legacyChainId;
          null != t && (e.chainId = t);
        }
        return (
          e.blockHash && (0, td.yT)(e.blockHash) === tx && (e.blockHash = null),
          e
        );
      }
      var tQ = r(20475),
        tH = r(44440),
        tW = r(49859);
      let tj = BigInt(2);
      function tJ(t) {
        return t && "function" == typeof t.then;
      }
      function tV(t, e) {
        return (
          t +
          ":" +
          JSON.stringify(e, (t, e) => {
            if (null == e) return "null";
            if ("bigint" == typeof e) return "bigint:".concat(e.toString());
            if ("string" == typeof e) return e.toLowerCase();
            if ("object" == typeof e && !Array.isArray(e)) {
              let t = Object.keys(e);
              return t.sort(), t.reduce((t, r) => ((t[r] = e[r]), t), {});
            }
            return e;
          })
        );
      }
      class tK {
        start() {}
        stop() {}
        pause(t) {}
        resume() {}
        constructor(t) {
          (0, th.h)(this, { name: t });
        }
      }
      function tz(t) {
        return (t = Array.from(new Set(t).values())).sort(), t;
      }
      async function tZ(t, e) {
        if (null == t) throw Error("invalid event");
        if ((Array.isArray(t) && (t = { topics: t }), "string" == typeof t))
          switch (t) {
            case "block":
            case "debug":
            case "error":
            case "finalized":
            case "network":
            case "pending":
            case "safe":
              return { type: t, tag: t };
          }
        if ((0, I.A7)(t, 32)) {
          let e = t.toLowerCase();
          return { type: "transaction", tag: tV("tx", { hash: e }), hash: e };
        }
        if (t.orphan) {
          let e = t;
          return {
            type: "orphan",
            tag: tV("orphan", e),
            filter: JSON.parse(JSON.stringify(e)),
          };
        }
        if (t.address || t.topics) {
          let r = t,
            n = {
              topics: (r.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                  ? tz(t.map((t) => t.toLowerCase()))
                  : t.toLowerCase()
              ),
            };
          if (r.address) {
            let t = [],
              a = [],
              i = (r) => {
                (0, I.A7)(r)
                  ? t.push(r)
                  : a.push(
                      (async () => {
                        t.push(await (0, P.ru)(r, e));
                      })()
                    );
              };
            Array.isArray(r.address) ? r.address.forEach(i) : i(r.address),
              a.length && (await Promise.all(a)),
              (n.address = tz(t.map((t) => t.toLowerCase())));
          }
          return { filter: n, tag: tV("event", n), type: "event" };
        }
        (0, x.en)(!1, "unknown ProviderEvent", "event", t);
      }
      function tq() {
        return new Date().getTime();
      }
      let tY = { cacheTimeout: 250, pollingInterval: 4e3 };
      var tX = new WeakMap(),
        t$ = new WeakMap(),
        t0 = new WeakMap(),
        t1 = new WeakMap(),
        t2 = new WeakMap(),
        t4 = new WeakMap(),
        t3 = new WeakMap(),
        t8 = new WeakMap(),
        t5 = new WeakMap(),
        t6 = new WeakMap(),
        t7 = new WeakMap(),
        t9 = new WeakMap(),
        et = new WeakSet(),
        ee = new WeakSet(),
        er = new WeakSet(),
        en = new WeakSet(),
        ea = new WeakSet(),
        ei = new WeakSet(),
        es = new WeakSet();
      class eo {
        get pollingInterval() {
          return (0, y._)(this, t9).pollingInterval;
        }
        get provider() {
          return this;
        }
        get plugins() {
          return Array.from((0, y._)(this, t$).values());
        }
        attachPlugin(t) {
          if ((0, y._)(this, t$).get(t.name))
            throw Error("cannot replace existing plugin: ".concat(t.name, " "));
          return (0, y._)(this, t$).set(t.name, t.connect(this)), this;
        }
        getPlugin(t) {
          return (0, y._)(this, t$).get(t) || null;
        }
        get disableCcipRead() {
          return (0, y._)(this, t7);
        }
        set disableCcipRead(t) {
          (0, b._)(this, t7, !!t);
        }
        async ccipReadFetch(t, e, r) {
          if (this.disableCcipRead || 0 === r.length || null == t.to)
            return null;
          let n = t.to.toLowerCase(),
            a = e.toLowerCase(),
            i = [];
          for (let e = 0; e < r.length; e++) {
            let s = r[e],
              o = s.replace("{sender}", n).replace("{data}", a),
              l = new tf.gd(o);
            -1 === s.indexOf("{data}") && (l.body = { data: a, sender: n }),
              this.emit("debug", {
                action: "sendCcipReadFetchRequest",
                request: l,
                index: e,
                urls: r,
              });
            let c = "unknown error",
              u = await l.send();
            try {
              let t = u.bodyJson;
              if (t.data)
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadFetchResult",
                    request: l,
                    result: t,
                  }),
                  t.data
                );
              t.message && (c = t.message),
                this.emit("debug", {
                  action: "receiveCcipReadFetchError",
                  request: l,
                  result: t,
                });
            } catch (t) {}
            (0, x.hu)(
              u.statusCode < 400 || u.statusCode >= 500,
              "response not found during CCIP fetch: ".concat(c),
              "OFFCHAIN_FAULT",
              {
                reason: "404_MISSING_RESOURCE",
                transaction: t,
                info: { url: s, errorMessage: c },
              }
            ),
              i.push(c);
          }
          (0, x.hu)(
            !1,
            "error encountered during CCIP fetch: ".concat(
              i.map((t) => JSON.stringify(t)).join(", ")
            ),
            "OFFCHAIN_FAULT",
            {
              reason: "500_SERVER_ERROR",
              transaction: t,
              info: { urls: r, errorMessages: i },
            }
          );
        }
        _wrapBlock(t, e) {
          return new tH.gO(
            (function (t) {
              let e = tF(t);
              return (
                (e.transactions = t.transactions.map((t) =>
                  "string" == typeof t ? t : tG(t)
                )),
                e
              );
            })(t),
            this
          );
        }
        _wrapLog(t, e) {
          return new tH.Zb(tM(t), this);
        }
        _wrapTransactionReceipt(t, e) {
          return new tH.IX(tL(t), this);
        }
        _wrapTransactionResponse(t, e) {
          return new tH.Mw(tG(t), this);
        }
        _detectNetwork() {
          (0, x.hu)(
            !1,
            "sub-classes must implement this",
            "UNSUPPORTED_OPERATION",
            { operation: "_detectNetwork" }
          );
        }
        async _perform(t) {
          (0, x.hu)(
            !1,
            "unsupported method: ".concat(t.method),
            "UNSUPPORTED_OPERATION",
            { operation: t.method, info: t }
          );
        }
        async getBlockNumber() {
          let t = (0, td.Dx)(
            await (0, E._)(this, et, el).call(this, {
              method: "getBlockNumber",
            }),
            "%response"
          );
          return (0, y._)(this, t8) >= 0 && (0, b._)(this, t8, t), t;
        }
        _getAddress(t) {
          return (0, P.ru)(t, this);
        }
        _getBlockTag(t) {
          if (null == t) return "latest";
          switch (t) {
            case "earliest":
              return "0x0";
            case "finalized":
            case "latest":
            case "pending":
            case "safe":
              return t;
          }
          return (0, I.A7)(t)
            ? (0, I.A7)(t, 32)
              ? t
              : (0, td.B4)(t)
            : ("bigint" == typeof t && (t = (0, td.Dx)(t, "blockTag")),
              "number" == typeof t)
            ? t >= 0
              ? (0, td.B4)(t)
              : (0, y._)(this, t8) >= 0
              ? (0, td.B4)((0, y._)(this, t8) + t)
              : this.getBlockNumber().then((e) => (0, td.B4)(e + t))
            : void (0, x.en)(!1, "invalid blockTag", "blockTag", t);
        }
        _getFilter(t) {
          let e, r;
          let n = (t.topics || []).map((t) =>
              null == t
                ? null
                : Array.isArray(t)
                ? tz(t.map((t) => t.toLowerCase()))
                : t.toLowerCase()
            ),
            a = "blockHash" in t ? t.blockHash : void 0,
            i = (t, e, r) => {
              let i;
              switch (t.length) {
                case 0:
                  break;
                case 1:
                  i = t[0];
                  break;
                default:
                  t.sort(), (i = t);
              }
              if (a && (null != e || null != r)) throw Error("invalid filter");
              let s = {};
              return (
                i && (s.address = i),
                n.length && (s.topics = n),
                e && (s.fromBlock = e),
                r && (s.toBlock = r),
                a && (s.blockHash = a),
                s
              );
            },
            s = [];
          if (t.address) {
            if (Array.isArray(t.address))
              for (let e of t.address) s.push(this._getAddress(e));
            else s.push(this._getAddress(t.address));
          }
          return (
            "fromBlock" in t && (e = this._getBlockTag(t.fromBlock)),
            ("toBlock" in t && (r = this._getBlockTag(t.toBlock)),
            s.filter((t) => "string" != typeof t).length ||
              (null != e && "string" != typeof e) ||
              (null != r && "string" != typeof r))
              ? Promise.all([Promise.all(s), e, r]).then((t) =>
                  i(t[0], t[1], t[2])
                )
              : i(s, e, r)
          );
        }
        _getTransactionRequest(t) {
          let e = (0, tH.kK)(t),
            r = [];
          if (
            (["to", "from"].forEach((t) => {
              if (null == e[t]) return;
              let n = (0, P.ru)(e[t], this);
              tJ(n)
                ? r.push(
                    (async function () {
                      e[t] = await n;
                    })()
                  )
                : (e[t] = n);
            }),
            null != e.blockTag)
          ) {
            let t = this._getBlockTag(e.blockTag);
            tJ(t)
              ? r.push(
                  (async function () {
                    e.blockTag = await t;
                  })()
                )
              : (e.blockTag = t);
          }
          return r.length
            ? (async function () {
                return await Promise.all(r), e;
              })()
            : e;
        }
        async getNetwork() {
          if (null == (0, y._)(this, t2)) {
            let t = (async () => {
              try {
                let t = await this._detectNetwork();
                return this.emit("network", t, null), t;
              } catch (e) {
                throw ((0, y._)(this, t2) === t && (0, b._)(this, t2, null), e);
              }
            })();
            return (0, b._)(this, t2, t), (await t).clone();
          }
          let t = (0, y._)(this, t2),
            [e, r] = await Promise.all([t, this._detectNetwork()]);
          return (
            e.chainId !== r.chainId &&
              ((0, y._)(this, t4)
                ? (this.emit("network", r, e),
                  (0, y._)(this, t2) === t &&
                    (0, b._)(this, t2, Promise.resolve(r)))
                : (0, x.hu)(
                    !1,
                    "network changed: "
                      .concat(e.chainId, " => ")
                      .concat(r.chainId, " "),
                    "NETWORK_ERROR",
                    { event: "changed" }
                  )),
            e.clone()
          );
        }
        async getFeeData() {
          let t = await this.getNetwork(),
            e = async () => {
              let {
                  _block: e,
                  gasPrice: r,
                  priorityFee: n,
                } = await (0, th.m)({
                  _block: (0, E._)(this, ea, ef).call(this, "latest", !1),
                  gasPrice: (async () => {
                    try {
                      let t = await (0, E._)(this, et, el).call(this, {
                        method: "getGasPrice",
                      });
                      return (0, td.yT)(t, "%response");
                    } catch (t) {}
                    return null;
                  })(),
                  priorityFee: (async () => {
                    try {
                      let t = await (0, E._)(this, et, el).call(this, {
                        method: "getPriorityFee",
                      });
                      return (0, td.yT)(t, "%response");
                    } catch (t) {}
                    return null;
                  })(),
                }),
                a = null,
                i = null,
                s = this._wrapBlock(e, t);
              return (
                s &&
                  s.baseFeePerGas &&
                  ((i = null != n ? n : BigInt("1000000000")),
                  (a = s.baseFeePerGas * tj + i)),
                new tH.jW(r, a, i)
              );
            },
            r = t.getPlugin("org.ethers.plugins.network.FetchUrlFeeDataPlugin");
          if (r) {
            let t = new tf.gd(r.url),
              n = await r.processFunc(e, this, t);
            return new tH.jW(
              n.gasPrice,
              n.maxFeePerGas,
              n.maxPriorityFeePerGas
            );
          }
          return await e();
        }
        async estimateGas(t) {
          let e = this._getTransactionRequest(t);
          return (
            tJ(e) && (e = await e),
            (0, td.yT)(
              await (0, E._)(this, et, el).call(this, {
                method: "estimateGas",
                transaction: e,
              }),
              "%response"
            )
          );
        }
        async call(t) {
          let { tx: e, blockTag: r } = await (0, th.m)({
            tx: this._getTransactionRequest(t),
            blockTag: this._getBlockTag(t.blockTag),
          });
          return await (0, E._)(this, er, eu).call(
            this,
            (0, E._)(this, ee, ec).call(this, e, r, t.enableCcipRead ? 0 : -1)
          );
        }
        async getBalance(t, e) {
          return (0, td.yT)(
            await (0, E._)(this, en, eh).call(
              this,
              { method: "getBalance" },
              t,
              e
            ),
            "%response"
          );
        }
        async getTransactionCount(t, e) {
          return (0, td.Dx)(
            await (0, E._)(this, en, eh).call(
              this,
              { method: "getTransactionCount" },
              t,
              e
            ),
            "%response"
          );
        }
        async getCode(t, e) {
          return (0, I.Dv)(
            await (0, E._)(this, en, eh).call(this, { method: "getCode" }, t, e)
          );
        }
        async getStorage(t, e, r) {
          let n = (0, td.yT)(e, "position");
          return (0, I.Dv)(
            await (0, E._)(this, en, eh).call(
              this,
              { method: "getStorage", position: n },
              t,
              r
            )
          );
        }
        async broadcastTransaction(t) {
          let {
              blockNumber: e,
              hash: r,
              network: n,
            } = await (0, th.m)({
              blockNumber: this.getBlockNumber(),
              hash: this._perform({
                method: "broadcastTransaction",
                signedTransaction: t,
              }),
              network: this.getNetwork(),
            }),
            a = tu.Y.from(t);
          if (a.hash !== r)
            throw Error("@TODO: the returned hash did not match");
          return this._wrapTransactionResponse(a, n).replaceableTransaction(e);
        }
        async getBlock(t, e) {
          let { network: r, params: n } = await (0, th.m)({
            network: this.getNetwork(),
            params: (0, E._)(this, ea, ef).call(this, t, !!e),
          });
          return null == n ? null : this._wrapBlock(n, r);
        }
        async getTransaction(t) {
          let { network: e, params: r } = await (0, th.m)({
            network: this.getNetwork(),
            params: (0, E._)(this, et, el).call(this, {
              method: "getTransaction",
              hash: t,
            }),
          });
          return null == r ? null : this._wrapTransactionResponse(r, e);
        }
        async getTransactionReceipt(t) {
          let { network: e, params: r } = await (0, th.m)({
            network: this.getNetwork(),
            params: (0, E._)(this, et, el).call(this, {
              method: "getTransactionReceipt",
              hash: t,
            }),
          });
          if (null == r) return null;
          if (null == r.gasPrice && null == r.effectiveGasPrice) {
            let e = await (0, E._)(this, et, el).call(this, {
              method: "getTransaction",
              hash: t,
            });
            if (null == e)
              throw Error(
                "report this; could not find tx or effectiveGasPrice"
              );
            r.effectiveGasPrice = e.gasPrice;
          }
          return this._wrapTransactionReceipt(r, e);
        }
        async getTransactionResult(t) {
          let { result: e } = await (0, th.m)({
            network: this.getNetwork(),
            result: (0, E._)(this, et, el).call(this, {
              method: "getTransactionResult",
              hash: t,
            }),
          });
          return null == e ? null : (0, I.Dv)(e);
        }
        async getLogs(t) {
          let e = this._getFilter(t);
          tJ(e) && (e = await e);
          let { network: r, params: n } = await (0, th.m)({
            network: this.getNetwork(),
            params: (0, E._)(this, et, el).call(this, {
              method: "getLogs",
              filter: e,
            }),
          });
          return n.map((t) => this._wrapLog(t, r));
        }
        _getProvider(t) {
          (0, x.hu)(
            !1,
            "provider cannot connect to target network",
            "UNSUPPORTED_OPERATION",
            { operation: "_getProvider()" }
          );
        }
        async getResolver(t) {
          return await tk.fromName(this, t);
        }
        async getAvatar(t) {
          let e = await this.getResolver(t);
          return e ? await e.getAvatar() : null;
        }
        async resolveName(t) {
          let e = await this.getResolver(t);
          return e ? await e.getAddress() : null;
        }
        async lookupAddress(t) {
          let e = tc(
            (t = (0, N.K)(t)).substring(2).toLowerCase() + ".addr.reverse"
          );
          try {
            let r = await tk.getEnsAddress(this),
              n = new T.CH(
                r,
                ["function resolver(bytes32) view returns (address)"],
                this
              ),
              a = await n.resolver(e);
            if (null == a || a === R.N) return null;
            let i = new T.CH(
                a,
                ["function name(bytes32) view returns (string)"],
                this
              ),
              s = await i.name(e);
            if ((await this.resolveName(s)) !== t) return null;
            return s;
          } catch (t) {
            if (
              ((0, x.VZ)(t, "BAD_DATA") && "0x" === t.value) ||
              (0, x.VZ)(t, "CALL_EXCEPTION")
            )
              return null;
            throw t;
          }
          return null;
        }
        async waitForTransaction(t, e, r) {
          let n = null != e ? e : 1;
          return 0 === n
            ? this.getTransactionReceipt(t)
            : new Promise(async (e, a) => {
                let i = null,
                  s = async (r) => {
                    try {
                      let a = await this.getTransactionReceipt(t);
                      if (null != a && r - a.blockNumber + 1 >= n) {
                        e(a), i && (clearTimeout(i), (i = null));
                        return;
                      }
                    } catch (t) {
                      console.log("EEE", t);
                    }
                    this.once("block", s);
                  };
                null != r &&
                  (i = setTimeout(() => {
                    null != i &&
                      ((i = null),
                      this.off("block", s),
                      a(
                        (0, x.wf)("timeout", "TIMEOUT", { reason: "timeout" })
                      ));
                  }, r)),
                  s(await this.getBlockNumber());
              });
        }
        async waitForBlock(t) {
          (0, x.hu)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
            operation: "waitForBlock",
          });
        }
        _clearTimeout(t) {
          let e = (0, y._)(this, t6).get(t);
          e && (e.timer && clearTimeout(e.timer), (0, y._)(this, t6).delete(t));
        }
        _setTimeout(t, e) {
          null == e && (e = 0);
          let r = (0, _._)(this, t5).value++,
            n = () => {
              (0, y._)(this, t6).delete(r), t();
            };
          if (this.paused)
            (0, y._)(this, t6).set(r, { timer: null, func: n, time: e });
          else {
            let t = setTimeout(n, e);
            (0, y._)(this, t6).set(r, { timer: t, func: n, time: tq() });
          }
          return r;
        }
        _forEachSubscriber(t) {
          for (let e of (0, y._)(this, tX).values()) t(e.subscriber);
        }
        _getSubscriber(t) {
          switch (t.type) {
            case "debug":
            case "error":
            case "network":
              return new tK(t.type);
            case "block": {
              let t = new tW.tR(this);
              return (t.pollingInterval = this.pollingInterval), t;
            }
            case "safe":
            case "finalized":
              return new tW.ub(this, t.type);
            case "event":
              return new tW.H9(this, t.filter);
            case "transaction":
              return new tW.yq(this, t.hash);
            case "orphan":
              return new tW.wF(this, t.filter);
          }
          throw Error("unsupported event: ".concat(t.type));
        }
        _recoverSubscriber(t, e) {
          for (let r of (0, y._)(this, tX).values())
            if (r.subscriber === t) {
              r.started && r.subscriber.stop(),
                (r.subscriber = e),
                r.started && e.start(),
                null != (0, y._)(this, t0) && e.pause((0, y._)(this, t0));
              break;
            }
        }
        async on(t, e) {
          let r = await (0, E._)(this, es, ep).call(this, t);
          return (
            r.listeners.push({ listener: e, once: !1 }),
            r.started ||
              (r.subscriber.start(),
              (r.started = !0),
              null != (0, y._)(this, t0) &&
                r.subscriber.pause((0, y._)(this, t0))),
            this
          );
        }
        async once(t, e) {
          let r = await (0, E._)(this, es, ep).call(this, t);
          return (
            r.listeners.push({ listener: e, once: !0 }),
            r.started ||
              (r.subscriber.start(),
              (r.started = !0),
              null != (0, y._)(this, t0) &&
                r.subscriber.pause((0, y._)(this, t0))),
            this
          );
        }
        async emit(t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          let a = await (0, E._)(this, ei, ed).call(this, t, r);
          if (!a || 0 === a.listeners.length) return !1;
          let i = a.listeners.length;
          return (
            (a.listeners = a.listeners.filter((e) => {
              let { listener: n, once: a } = e,
                i = new tp.Z(this, a ? null : n, t);
              try {
                n.call(this, ...r, i);
              } catch (t) {}
              return !a;
            })),
            0 === a.listeners.length &&
              (a.started && a.subscriber.stop(),
              (0, y._)(this, tX).delete(a.tag)),
            i > 0
          );
        }
        async listenerCount(t) {
          if (t) {
            let e = await (0, E._)(this, ei, ed).call(this, t);
            return e ? e.listeners.length : 0;
          }
          let e = 0;
          for (let { listeners: t } of (0, y._)(this, tX).values())
            e += t.length;
          return e;
        }
        async listeners(t) {
          if (t) {
            let e = await (0, E._)(this, ei, ed).call(this, t);
            return e
              ? e.listeners.map((t) => {
                  let { listener: e } = t;
                  return e;
                })
              : [];
          }
          let e = [];
          for (let { listeners: t } of (0, y._)(this, tX).values())
            e = e.concat(
              t.map((t) => {
                let { listener: e } = t;
                return e;
              })
            );
          return e;
        }
        async off(t, e) {
          let r = await (0, E._)(this, ei, ed).call(this, t);
          if (!r) return this;
          if (e) {
            let t = r.listeners
              .map((t) => {
                let { listener: e } = t;
                return e;
              })
              .indexOf(e);
            t >= 0 && r.listeners.splice(t, 1);
          }
          return (
            (e && 0 !== r.listeners.length) ||
              (r.started && r.subscriber.stop(),
              (0, y._)(this, tX).delete(r.tag)),
            this
          );
        }
        async removeAllListeners(t) {
          if (t) {
            let {
              tag: e,
              started: r,
              subscriber: n,
            } = await (0, E._)(this, es, ep).call(this, t);
            r && n.stop(), (0, y._)(this, tX).delete(e);
          } else
            for (let [t, { started: e, subscriber: r }] of (0, y._)(this, tX))
              e && r.stop(), (0, y._)(this, tX).delete(t);
          return this;
        }
        async addListener(t, e) {
          return await this.on(t, e);
        }
        async removeListener(t, e) {
          return this.off(t, e);
        }
        get destroyed() {
          return (0, y._)(this, t1);
        }
        destroy() {
          for (let t of (this.removeAllListeners(), (0, y._)(this, t6).keys()))
            this._clearTimeout(t);
          (0, b._)(this, t1, !0);
        }
        get paused() {
          return null != (0, y._)(this, t0);
        }
        set paused(t) {
          !!t !== this.paused && (this.paused ? this.resume() : this.pause(!1));
        }
        pause(t) {
          if (((0, b._)(this, t8, -1), null != (0, y._)(this, t0))) {
            if ((0, y._)(this, t0) == !!t) return;
            (0, x.hu)(
              !1,
              "cannot change pause type; resume first",
              "UNSUPPORTED_OPERATION",
              { operation: "pause" }
            );
          }
          for (let e of (this._forEachSubscriber((e) => e.pause(t)),
          (0, b._)(this, t0, !!t),
          (0, y._)(this, t6).values()))
            e.timer && clearTimeout(e.timer), (e.time = tq() - e.time);
        }
        resume() {
          if (null != (0, y._)(this, t0))
            for (let t of (this._forEachSubscriber((t) => t.resume()),
            (0, b._)(this, t0, null),
            (0, y._)(this, t6).values())) {
              let e = t.time;
              e < 0 && (e = 0), (t.time = tq()), setTimeout(t.func, e);
            }
        }
        constructor(t, e) {
          if (
            ((0, k._)(this, et),
            (0, k._)(this, ee),
            (0, k._)(this, er),
            (0, k._)(this, en),
            (0, k._)(this, ea),
            (0, k._)(this, ei),
            (0, k._)(this, es),
            (0, A._)(this, tX, { writable: !0, value: void 0 }),
            (0, A._)(this, t$, { writable: !0, value: void 0 }),
            (0, A._)(this, t0, { writable: !0, value: void 0 }),
            (0, A._)(this, t1, { writable: !0, value: void 0 }),
            (0, A._)(this, t2, { writable: !0, value: void 0 }),
            (0, A._)(this, t4, { writable: !0, value: void 0 }),
            (0, A._)(this, t3, { writable: !0, value: void 0 }),
            (0, A._)(this, t8, { writable: !0, value: void 0 }),
            (0, A._)(this, t5, { writable: !0, value: void 0 }),
            (0, A._)(this, t6, { writable: !0, value: void 0 }),
            (0, A._)(this, t7, { writable: !0, value: void 0 }),
            (0, A._)(this, t9, { writable: !0, value: void 0 }),
            (0, b._)(this, t9, Object.assign({}, tY, e || {})),
            "any" === t)
          )
            (0, b._)(this, t4, !0), (0, b._)(this, t2, null);
          else if (t) {
            let e = tQ.Z.from(t);
            (0, b._)(this, t4, !1),
              (0, b._)(this, t2, Promise.resolve(e)),
              setTimeout(() => {
                this.emit("network", e, null);
              }, 0);
          } else (0, b._)(this, t4, !1), (0, b._)(this, t2, null);
          (0, b._)(this, t8, -1),
            (0, b._)(this, t3, new Map()),
            (0, b._)(this, tX, new Map()),
            (0, b._)(this, t$, new Map()),
            (0, b._)(this, t0, null),
            (0, b._)(this, t1, !1),
            (0, b._)(this, t5, 1),
            (0, b._)(this, t6, new Map()),
            (0, b._)(this, t7, !1);
        }
      }
      async function el(t) {
        let e = (0, y._)(this, t9).cacheTimeout;
        if (e < 0) return await this._perform(t);
        let r = tV(t.method, t),
          n = (0, y._)(this, t3).get(r);
        return (
          n ||
            ((n = this._perform(t)),
            (0, y._)(this, t3).set(r, n),
            setTimeout(() => {
              (0, y._)(this, t3).get(r) === n && (0, y._)(this, t3).delete(r);
            }, e)),
          await n
        );
      }
      async function ec(t, e, r) {
        (0, x.hu)(
          r < 10,
          "CCIP read exceeded maximum redirections",
          "OFFCHAIN_FAULT",
          {
            reason: "TOO_MANY_REDIRECTS",
            transaction: Object.assign({}, t, {
              blockTag: e,
              enableCcipRead: !0,
            }),
          }
        );
        let n = (0, tH.kK)(t);
        try {
          return (0, I.Dv)(
            await this._perform({ method: "call", transaction: n, blockTag: e })
          );
        } catch (t) {
          if (
            !this.disableCcipRead &&
            (0, x.Hl)(t) &&
            t.data &&
            r >= 0 &&
            "latest" === e &&
            null != n.to &&
            "0x556f1830" === (0, I.QB)(t.data, 0, 4)
          ) {
            let a;
            let i = t.data,
              s = await (0, P.ru)(n.to, this);
            try {
              a = (function (t) {
                let e = {
                  sender: "",
                  urls: [],
                  calldata: "",
                  selector: "",
                  extraData: "",
                  errorArgs: [],
                };
                (0, x.hu)(
                  (0, I.M5)(t) >= 160,
                  "insufficient OffchainLookup data",
                  "OFFCHAIN_FAULT",
                  { reason: "insufficient OffchainLookup data" }
                );
                let r = (0, I.QB)(t, 0, 32);
                (0, x.hu)(
                  (0, I.QB)(r, 0, 12) === (0, I.QB)(ey, 0, 12),
                  "corrupt OffchainLookup sender",
                  "OFFCHAIN_FAULT",
                  { reason: "corrupt OffchainLookup sender" }
                ),
                  (e.sender = (0, I.QB)(r, 12));
                try {
                  let r = [],
                    n = (0, td.Dx)((0, I.QB)(t, 32, 64)),
                    a = (0, td.Dx)((0, I.QB)(t, n, n + 32)),
                    i = (0, I.QB)(t, n + 32);
                  for (let t = 0; t < a; t++) {
                    let e = (function (t, e) {
                      try {
                        let r = eg(t, e);
                        if (r) return (0, O.ZN)(r);
                      } catch (t) {}
                      return null;
                    })(i, 32 * t);
                    if (null == e) throw Error("abort");
                    r.push(e);
                  }
                  e.urls = r;
                } catch (t) {
                  (0, x.hu)(
                    !1,
                    "corrupt OffchainLookup urls",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup urls" }
                  );
                }
                try {
                  let r = eg(t, 64);
                  if (null == r) throw Error("abort");
                  e.calldata = r;
                } catch (t) {
                  (0, x.hu)(
                    !1,
                    "corrupt OffchainLookup calldata",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup calldata" }
                  );
                }
                (0, x.hu)(
                  (0, I.QB)(t, 100, 128) === (0, I.QB)(ey, 0, 28),
                  "corrupt OffchainLookup callbaackSelector",
                  "OFFCHAIN_FAULT",
                  { reason: "corrupt OffchainLookup callbaackSelector" }
                ),
                  (e.selector = (0, I.QB)(t, 96, 100));
                try {
                  let r = eg(t, 128);
                  if (null == r) throw Error("abort");
                  e.extraData = r;
                } catch (t) {
                  (0, x.hu)(
                    !1,
                    "corrupt OffchainLookup extraData",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup extraData" }
                  );
                }
                return (
                  (e.errorArgs = "sender,urls,calldata,selector,extraData"
                    .split(/,/)
                    .map((t) => e[t])),
                  e
                );
              })((0, I.QB)(t.data, 4));
            } catch (t) {
              (0, x.hu)(!1, t.message, "OFFCHAIN_FAULT", {
                reason: "BAD_DATA",
                transaction: n,
                info: { data: i },
              });
            }
            (0, x.hu)(
              a.sender.toLowerCase() === s.toLowerCase(),
              "CCIP Read sender mismatch",
              "CALL_EXCEPTION",
              {
                action: "call",
                data: i,
                reason: "OffchainLookup",
                transaction: n,
                invocation: null,
                revert: {
                  signature:
                    "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                  name: "OffchainLookup",
                  args: a.errorArgs,
                },
              }
            );
            let o = await this.ccipReadFetch(n, a.calldata, a.urls);
            (0, x.hu)(
              null != o,
              "CCIP Read failed to fetch data",
              "OFFCHAIN_FAULT",
              {
                reason: "FETCH_FAILED",
                transaction: n,
                info: { data: t.data, errorArgs: a.errorArgs },
              }
            );
            let l = {
              to: s,
              data: (0, I.zo)([
                a.selector,
                (function (t) {
                  let e = [],
                    r = 0;
                  for (let n = 0; n < t.length; n++) e.push(ew), (r += 32);
                  for (let n = 0; n < t.length; n++) {
                    let a = (0, I.Pw)(t[n]);
                    (e[n] = em(r)),
                      e.push(em(a.length)),
                      e.push(
                        (function (t) {
                          if (t.length % 32 == 0) return t;
                          let e = new Uint8Array(32 * Math.ceil(t.length / 32));
                          return e.set(t), e;
                        })(a)
                      ),
                      (r += 32 + 32 * Math.ceil(a.length / 32));
                  }
                  return (0, I.zo)(e);
                })([o, a.extraData]),
              ]),
            };
            this.emit("debug", { action: "sendCcipReadCall", transaction: l });
            try {
              let t = await (0, E._)(this, ee, ec).call(this, l, e, r + 1);
              return (
                this.emit("debug", {
                  action: "receiveCcipReadCallResult",
                  transaction: Object.assign({}, l),
                  result: t,
                }),
                t
              );
            } catch (t) {
              throw (
                (this.emit("debug", {
                  action: "receiveCcipReadCallError",
                  transaction: Object.assign({}, l),
                  error: t,
                }),
                t)
              );
            }
          }
          throw t;
        }
      }
      async function eu(t) {
        let { value: e } = await (0, th.m)({
          network: this.getNetwork(),
          value: t,
        });
        return e;
      }
      async function eh(t, e, r) {
        let n = this._getAddress(e),
          a = this._getBlockTag(r);
        return (
          ("string" != typeof n || "string" != typeof a) &&
            ([n, a] = await Promise.all([n, a])),
          await (0, E._)(this, er, eu).call(
            this,
            (0, E._)(this, et, el).call(
              this,
              Object.assign(t, { address: n, blockTag: a })
            )
          )
        );
      }
      async function ef(t, e) {
        if ((0, I.A7)(t, 32))
          return await (0, E._)(this, et, el).call(this, {
            method: "getBlock",
            blockHash: t,
            includeTransactions: e,
          });
        let r = this._getBlockTag(t);
        return (
          "string" != typeof r && (r = await r),
          await (0, E._)(this, et, el).call(this, {
            method: "getBlock",
            blockTag: r,
            includeTransactions: e,
          })
        );
      }
      async function ed(t, e) {
        let r = await tZ(t, this);
        return (
          "event" === r.type &&
            e &&
            e.length > 0 &&
            !0 === e[0].removed &&
            (r = await tZ({ orphan: "drop-log", log: e[0] }, this)),
          (0, y._)(this, tX).get(r.tag) || null
        );
      }
      async function ep(t) {
        let e = await tZ(t, this),
          r = e.tag,
          n = (0, y._)(this, tX).get(r);
        return (
          !n &&
            ((n = {
              subscriber: this._getSubscriber(e),
              tag: r,
              addressableMap: new WeakMap(),
              nameMap: new Map(),
              started: !1,
              listeners: [],
            }),
            (0, y._)(this, tX).set(r, n)),
          n
        );
      }
      function eg(t, e) {
        if ("0x" === t) return null;
        try {
          let r = (0, td.Dx)((0, I.QB)(t, e, e + 32)),
            n = (0, td.Dx)((0, I.QB)(t, r, r + 32));
          return (0, I.QB)(t, r + 32, r + 32 + n);
        } catch (t) {}
        return null;
      }
      function em(t) {
        let e = (0, td.ot)(t);
        if (e.length > 32) throw Error("internal; should not happen");
        let r = new Uint8Array(32);
        return r.set(e, 32 - e.length), r;
      }
      let ew = new Uint8Array([]),
        ey =
          "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    84696: function (t, e, r) {
      r.d(e, {
        y: function () {
          return tO;
        },
      });
      var n = r(25454),
        a = r(59350),
        i = r(63718);
      let s = new Set();
      function o(t) {
        s.has(t) ||
          (s.add(t),
          console.log("========= NOTICE ========="),
          console.log(
            "Request-Rate Exceeded for ".concat(
              t,
              " (this message will not be repeated)"
            )
          ),
          console.log(""),
          console.log(
            "The default API keys for each service are provided as a highly-throttled,"
          ),
          console.log(
            "community resource for low-traffic projects and early prototyping."
          ),
          console.log(""),
          console.log(
            "While your application will continue to function, we highly recommended"
          ),
          console.log(
            "signing up for your own API keys to improve performance, increase your"
          ),
          console.log(
            "request rate/limit and enable other perks, such as metrics and advanced APIs."
          ),
          console.log(""),
          console.log("For more details: https://docs.ethers.org/api-keys/"),
          console.log("=========================="));
      }
      var l = r(20475),
        c = r(45565);
      let u =
        "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
      class h extends c.r6 {
        _getProvider(t) {
          try {
            return new h(t, this.apiKey);
          } catch (t) {}
          return super._getProvider(t);
        }
        static getRequest(t, e) {
          null == e && (e = u);
          let r = new a.gd(
            "https://"
              .concat(
                (function (t) {
                  switch (t) {
                    case "mainnet":
                      return "rpc.ankr.com/eth";
                    case "goerli":
                      return "rpc.ankr.com/eth_goerli";
                    case "sepolia":
                      return "rpc.ankr.com/eth_sepolia";
                    case "arbitrum":
                      return "rpc.ankr.com/arbitrum";
                    case "base":
                      return "rpc.ankr.com/base";
                    case "base-goerli":
                      return "rpc.ankr.com/base_goerli";
                    case "base-sepolia":
                      return "rpc.ankr.com/base_sepolia";
                    case "bnb":
                      return "rpc.ankr.com/bsc";
                    case "bnbt":
                      return "rpc.ankr.com/bsc_testnet_chapel";
                    case "matic":
                      return "rpc.ankr.com/polygon";
                    case "matic-mumbai":
                      return "rpc.ankr.com/polygon_mumbai";
                    case "optimism":
                      return "rpc.ankr.com/optimism";
                    case "optimism-goerli":
                      return "rpc.ankr.com/optimism_testnet";
                    case "optimism-sepolia":
                      return "rpc.ankr.com/optimism_sepolia";
                  }
                  (0, n.en)(!1, "unsupported network", "network", t);
                })(t.name),
                "/"
              )
              .concat(e)
          );
          return (
            (r.allowGzip = !0),
            e === u &&
              (r.retryFunc = async (t, e, r) => (o("AnkrProvider"), !0)),
            r
          );
        }
        getRpcError(t, e) {
          return (
            "eth_sendRawTransaction" === t.method &&
              e &&
              e.error &&
              "INTERNAL_ERROR: could not replace existing tx" ===
                e.error.message &&
              (e.error.message = "replacement transaction underpriced"),
            super.getRpcError(t, e)
          );
        }
        isCommunityResource() {
          return this.apiKey === u;
        }
        constructor(t, e) {
          null == t && (t = "mainnet");
          let r = l.Z.from(t);
          null == e && (e = u),
            super(h.getRequest(r, e), r, { polling: !0, staticNetwork: r }),
            (0, i.h)(this, { apiKey: e });
        }
      }
      let f = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
      class d extends c.r6 {
        _getProvider(t) {
          try {
            return new d(t, this.apiKey);
          } catch (t) {}
          return super._getProvider(t);
        }
        async _perform(t) {
          if ("getTransactionResult" === t.method) {
            let e;
            let { trace: r, tx: a } = await (0, i.m)({
              trace: this.send("trace_transaction", [t.hash]),
              tx: this.getTransaction(t.hash),
            });
            if (null == r || null == a) return null;
            let s = !1;
            try {
              (e = r[0].result.output), (s = "Reverted" === r[0].error);
            } catch (t) {}
            if (e)
              return (
                (0, n.hu)(
                  !s,
                  "an error occurred during transaction executions",
                  "CALL_EXCEPTION",
                  {
                    action: "getTransactionResult",
                    data: e,
                    reason: null,
                    transaction: a,
                    invocation: null,
                    revert: null,
                  }
                ),
                e
              );
            (0, n.hu)(!1, "could not parse trace result", "BAD_DATA", {
              value: r,
            });
          }
          return await super._perform(t);
        }
        isCommunityResource() {
          return this.apiKey === f;
        }
        static getRequest(t, e) {
          null == e && (e = f);
          let r = new a.gd(
            "https://"
              .concat(
                (function (t) {
                  switch (t) {
                    case "mainnet":
                      return "eth-mainnet.alchemyapi.io";
                    case "goerli":
                      return "eth-goerli.g.alchemy.com";
                    case "sepolia":
                      return "eth-sepolia.g.alchemy.com";
                    case "arbitrum":
                      return "arb-mainnet.g.alchemy.com";
                    case "arbitrum-goerli":
                      return "arb-goerli.g.alchemy.com";
                    case "arbitrum-sepolia":
                      return "arb-sepolia.g.alchemy.com";
                    case "base":
                      return "base-mainnet.g.alchemy.com";
                    case "base-goerli":
                      return "base-goerli.g.alchemy.com";
                    case "base-sepolia":
                      return "base-sepolia.g.alchemy.com";
                    case "matic":
                      return "polygon-mainnet.g.alchemy.com";
                    case "matic-amoy":
                      return "polygon-amoy.g.alchemy.com";
                    case "matic-mumbai":
                      return "polygon-mumbai.g.alchemy.com";
                    case "optimism":
                      return "opt-mainnet.g.alchemy.com";
                    case "optimism-goerli":
                      return "opt-goerli.g.alchemy.com";
                    case "optimism-sepolia":
                      return "opt-sepolia.g.alchemy.com";
                  }
                  (0, n.en)(!1, "unsupported network", "network", t);
                })(t.name),
                "/v2/"
              )
              .concat(e)
          );
          return (
            (r.allowGzip = !0),
            e === f && (r.retryFunc = async (t, e, r) => (o("alchemy"), !0)),
            r
          );
        }
        constructor(t, e) {
          null == t && (t = "mainnet");
          let r = l.Z.from(t);
          null == e && (e = f),
            super(d.getRequest(r, e), r, { staticNetwork: r }),
            (0, i.h)(this, { apiKey: e });
        }
      }
      function p(t) {
        switch (t) {
          case "mainnet":
            return "39f1d67cedf8b7831010a665328c9197";
          case "arbitrum":
            return "0550c209db33c3abf4cc927e1e18cea1";
          case "bnb":
            return "98b5a77e531614387366f6fc5da097f8";
          case "matic":
            return "cd9d4d70377471aa7c142ec4a4205249";
        }
        (0, n.en)(!1, "unsupported network", "network", t);
      }
      class g extends c.r6 {
        _getProvider(t) {
          try {
            return new g(t, this.apiKey);
          } catch (t) {}
          return super._getProvider(t);
        }
        isCommunityResource() {
          return this.apiKey === p(this._network.name);
        }
        static getRequest(t, e) {
          null == e && (e = p(t.name));
          let r = new a.gd(
            "https://"
              .concat(
                (function (t) {
                  switch (t) {
                    case "mainnet":
                      return "ethereum-mainnet.core.chainstack.com";
                    case "arbitrum":
                      return "arbitrum-mainnet.core.chainstack.com";
                    case "bnb":
                      return "bsc-mainnet.core.chainstack.com";
                    case "matic":
                      return "polygon-mainnet.core.chainstack.com";
                  }
                  (0, n.en)(!1, "unsupported network", "network", t);
                })(t.name),
                "/"
              )
              .concat(e)
          );
          return (
            (r.allowGzip = !0),
            e === p(t.name) &&
              (r.retryFunc = async (t, e, r) => (o("ChainstackProvider"), !0)),
            r
          );
        }
        constructor(t, e) {
          null == t && (t = "mainnet");
          let r = l.Z.from(t);
          null == e && (e = p(r.name)),
            super(g.getRequest(r, e), r, { staticNetwork: r }),
            (0, i.h)(this, { apiKey: e });
        }
      }
      class m extends c.r6 {
        constructor(t) {
          null == t && (t = "mainnet");
          let e = l.Z.from(t);
          (0, n.en)("mainnet" === e.name, "unsupported network", "network", t),
            super("https://cloudflare-eth.com/", e, { staticNetwork: e });
        }
      }
      var w = r(4301),
        y = r(18654),
        A = r(8776),
        b = r(39241),
        _ = r(80856),
        E = r(31296),
        k = r(74764),
        P = r(45256),
        N = r(14755),
        R = r(22110),
        T = r(78967);
      let C = ["enableCcipRead"],
        x = 1;
      var O = new WeakMap();
      class I extends T.u {
        getBaseUrl() {
          if ((0, w._)(this, O)) return (0, w._)(this, O).baseUrl;
          switch (this.network.name) {
            case "mainnet":
              return "https://api.etherscan.io";
            case "goerli":
              return "https://api-goerli.etherscan.io";
            case "sepolia":
              return "https://api-sepolia.etherscan.io";
            case "holesky":
              return "https://api-holesky.etherscan.io";
            case "arbitrum":
              return "https://api.arbiscan.io";
            case "arbitrum-goerli":
              return "https://api-goerli.arbiscan.io";
            case "bnb":
              return "https://api.bscscan.com";
            case "bnbt":
              return "https://api-testnet.bscscan.com";
            case "matic":
              return "https://api.polygonscan.com";
            case "matic-amoy":
              return "https://api-amoy.polygonscan.com";
            case "matic-mumbai":
              return "https://api-testnet.polygonscan.com";
            case "optimism":
              return "https://api-optimistic.etherscan.io";
            case "optimism-goerli":
              return "https://api-goerli-optimistic.etherscan.io";
          }
          (0, n.en)(!1, "unsupported network", "network", this.network);
        }
        getUrl(t, e) {
          let r = Object.keys(e).reduce((t, r) => {
              let n = e[r];
              return null != n && (t += "&".concat(r, "=").concat(n)), t;
            }, ""),
            n = this.apiKey ? "&apikey=".concat(this.apiKey) : "";
          return ""
            .concat(this.getBaseUrl(), "/api?module=")
            .concat(t)
            .concat(r)
            .concat(n);
        }
        getPostUrl() {
          return "".concat(this.getBaseUrl(), "/api");
        }
        getPostData(t, e) {
          return (e.module = t), (e.apikey = this.apiKey), e;
        }
        async detectNetwork() {
          return this.network;
        }
        async fetch(t, e, r) {
          let i = x++,
            s = r ? this.getPostUrl() : this.getUrl(t, e),
            l = r ? this.getPostData(t, e) : null;
          this.emit("debug", {
            action: "sendRequest",
            id: i,
            url: s,
            payload: l,
          });
          let c = new a.gd(s);
          c.setThrottleParams({ slotInterval: 1e3 }),
            (c.retryFunc = (t, e, r) => (
              this.isCommunityResource() && o("Etherscan"), Promise.resolve(!0)
            )),
            (c.processFunc = async (e, r) => {
              let n = r.hasBody() ? JSON.parse((0, P.ZN)(r.body)) : {},
                a =
                  ("string" == typeof n.result ? n.result : "")
                    .toLowerCase()
                    .indexOf("rate limit") >= 0;
              return (
                "proxy" === t
                  ? n &&
                    0 == n.status &&
                    "NOTOK" == n.message &&
                    a &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: i,
                      reason: "proxy-NOTOK",
                      error: n,
                    }),
                    r.throwThrottleError(n.result, 2e3))
                  : a &&
                    (this.emit("debug", {
                      action: "receiveError",
                      id: i,
                      reason: "null result",
                      error: n.result,
                    }),
                    r.throwThrottleError(n.result, 2e3)),
                r
              );
            }),
            l &&
              (c.setHeader(
                "content-type",
                "application/x-www-form-urlencoded; charset=UTF-8"
              ),
              (c.body = Object.keys(l)
                .map((t) => "".concat(t, "=").concat(l[t]))
                .join("&")));
          let u = await c.send();
          try {
            u.assertOk();
          } catch (t) {
            this.emit("debug", {
              action: "receiveError",
              id: i,
              error: t,
              reason: "assertOk",
            }),
              (0, n.hu)(!1, "response error", "SERVER_ERROR", {
                request: c,
                response: u,
              });
          }
          u.hasBody() ||
            (this.emit("debug", {
              action: "receiveError",
              id: i,
              error: "missing body",
              reason: "null body",
            }),
            (0, n.hu)(!1, "missing response", "SERVER_ERROR", {
              request: c,
              response: u,
            }));
          let h = JSON.parse((0, P.ZN)(u.body));
          return (
            "proxy" === t
              ? ("2.0" != h.jsonrpc &&
                  (this.emit("debug", {
                    action: "receiveError",
                    id: i,
                    result: h,
                    reason: "invalid JSON-RPC",
                  }),
                  (0, n.hu)(
                    !1,
                    "invalid JSON-RPC response (missing jsonrpc='2.0')",
                    "SERVER_ERROR",
                    { request: c, response: u, info: { result: h } }
                  )),
                h.error &&
                  (this.emit("debug", {
                    action: "receiveError",
                    id: i,
                    result: h,
                    reason: "JSON-RPC error",
                  }),
                  (0, n.hu)(!1, "error response", "SERVER_ERROR", {
                    request: c,
                    response: u,
                    info: { result: h },
                  })))
              : (0 == h.status &&
                  ("No records found" === h.message ||
                    "No transactions found" === h.message)) ||
                (1 == h.status &&
                  ("string" != typeof h.message || h.message.match(/^OK/))) ||
                (this.emit("debug", {
                  action: "receiveError",
                  id: i,
                  result: h,
                }),
                (0, n.hu)(!1, "error response", "SERVER_ERROR", {
                  request: c,
                  response: u,
                  info: { result: h },
                })),
            this.emit("debug", { action: "receiveRequest", id: i, result: h }),
            h.result
          );
        }
        _getTransactionPostData(t) {
          let e = {};
          for (let r in t) {
            if (C.indexOf(r) >= 0 || null == t[r]) continue;
            let n = t[r];
            ("type" !== r || 0 !== n) &&
              ("blockTag" !== r || "latest" !== n) &&
              ((n = {
                type: !0,
                gasLimit: !0,
                gasPrice: !0,
                maxFeePerGs: !0,
                maxPriorityFeePerGas: !0,
                nonce: !0,
                value: !0,
              }[r]
                ? (0, N.B4)(n)
                : "accessList" === r
                ? "[" +
                  (0, E.z)(n)
                    .map((t) =>
                      '{address:"'
                        .concat(t.address, '",storageKeys:["')
                        .concat(t.storageKeys.join('","'), '"]}')
                    )
                    .join(",") +
                  "]"
                : (0, R.Dv)(n)),
              (e[r] = n));
          }
          return e;
        }
        _checkError(t, e, r) {
          let a = "";
          if ((0, n.VZ)(e, "SERVER_ERROR")) {
            try {
              a = e.info.result.error.message;
            } catch (t) {}
            if (!a)
              try {
                a = e.info.message;
              } catch (t) {}
          }
          if (
            ("estimateGas" === t.method &&
              !a.match(/revert/i) &&
              a.match(/insufficient funds/i) &&
              (0, n.hu)(!1, "insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: t.transaction,
              }),
            ("call" === t.method || "estimateGas" === t.method) &&
              a.match(/execution reverted/i))
          ) {
            let r = "";
            try {
              r = e.info.result.error.data;
            } catch (t) {}
            let n = b.R.getBuiltinCallException(t.method, t.transaction, r);
            throw ((n.info = { request: t, error: e }), n);
          }
          if (a && "broadcastTransaction" === t.method) {
            let e = k.Y.from(t.signedTransaction);
            a.match(/replacement/i) &&
              a.match(/underpriced/i) &&
              (0, n.hu)(
                !1,
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: e }
              ),
              a.match(/insufficient funds/) &&
                (0, n.hu)(
                  !1,
                  "insufficient funds for intrinsic transaction cost",
                  "INSUFFICIENT_FUNDS",
                  { transaction: e }
                ),
              a.match(
                /same hash was already imported|transaction nonce is too low|nonce too low/
              ) &&
                (0, n.hu)(!1, "nonce has already been used", "NONCE_EXPIRED", {
                  transaction: e,
                });
          }
          throw e;
        }
        async _detectNetwork() {
          return this.network;
        }
        async _perform(t) {
          switch (t.method) {
            case "chainId":
              return this.network.chainId;
            case "getBlockNumber":
              return this.fetch("proxy", { action: "eth_blockNumber" });
            case "getGasPrice":
              return this.fetch("proxy", { action: "eth_gasPrice" });
            case "getPriorityFee":
              if ("mainnet" === this.network.name) return "1000000000";
              if ("optimism" === this.network.name) return "1000000";
              throw Error("fallback onto the AbstractProvider default");
            case "getBalance":
              return this.fetch("account", {
                action: "balance",
                address: t.address,
                tag: t.blockTag,
              });
            case "getTransactionCount":
              return this.fetch("proxy", {
                action: "eth_getTransactionCount",
                address: t.address,
                tag: t.blockTag,
              });
            case "getCode":
              return this.fetch("proxy", {
                action: "eth_getCode",
                address: t.address,
                tag: t.blockTag,
              });
            case "getStorage":
              return this.fetch("proxy", {
                action: "eth_getStorageAt",
                address: t.address,
                position: t.position,
                tag: t.blockTag,
              });
            case "broadcastTransaction":
              return this.fetch(
                "proxy",
                { action: "eth_sendRawTransaction", hex: t.signedTransaction },
                !0
              ).catch((e) => this._checkError(t, e, t.signedTransaction));
            case "getBlock":
              if ("blockTag" in t)
                return this.fetch("proxy", {
                  action: "eth_getBlockByNumber",
                  tag: t.blockTag,
                  boolean: t.includeTransactions ? "true" : "false",
                });
              (0, n.hu)(
                !1,
                "getBlock by blockHash not supported by Etherscan",
                "UNSUPPORTED_OPERATION",
                { operation: "getBlock(blockHash)" }
              );
            case "getTransaction":
              return this.fetch("proxy", {
                action: "eth_getTransactionByHash",
                txhash: t.hash,
              });
            case "getTransactionReceipt":
              return this.fetch("proxy", {
                action: "eth_getTransactionReceipt",
                txhash: t.hash,
              });
            case "call": {
              if ("latest" !== t.blockTag)
                throw Error(
                  "EtherscanProvider does not support blockTag for call"
                );
              let e = this._getTransactionPostData(t.transaction);
              (e.module = "proxy"), (e.action = "eth_call");
              try {
                return await this.fetch("proxy", e, !0);
              } catch (e) {
                return this._checkError(t, e, t.transaction);
              }
            }
            case "estimateGas": {
              let e = this._getTransactionPostData(t.transaction);
              (e.module = "proxy"), (e.action = "eth_estimateGas");
              try {
                return await this.fetch("proxy", e, !0);
              } catch (e) {
                return this._checkError(t, e, t.transaction);
              }
            }
          }
          return super._perform(t);
        }
        async getNetwork() {
          return this.network;
        }
        async getEtherPrice() {
          return "mainnet" !== this.network.name
            ? 0
            : parseFloat(
                (await this.fetch("stats", { action: "ethprice" })).ethusd
              );
        }
        async getContract(t) {
          var e;
          let r = this._getAddress(t);
          (e = r) && "function" == typeof e.then && (r = await r);
          try {
            let t = await this.fetch("contract", {
                action: "getabi",
                address: r,
              }),
              e = JSON.parse(t);
            return new _.CH(r, e, this);
          } catch (t) {
            return null;
          }
        }
        isCommunityResource() {
          return null == this.apiKey;
        }
        constructor(t, e) {
          super(), (0, y._)(this, O, { writable: !0, value: void 0 });
          let r = l.Z.from(t);
          (0, A._)(
            this,
            O,
            r.getPlugin("org.ethers.plugins.provider.Etherscan")
          ),
            (0, i.h)(this, { apiKey: null != e ? e : null, network: r }),
            this.getBaseUrl();
        }
      }
      let D = ("undefined" != typeof self ? self : window).WebSocket;
      var B = new WeakMap(),
        S = new WeakMap(),
        M = new WeakMap(),
        F = new WeakMap(),
        U = new WeakMap();
      class L {
        get filter() {
          return JSON.parse((0, w._)(this, S));
        }
        start() {
          (0, A._)(
            this,
            M,
            (0, w._)(this, B)
              .send("eth_subscribe", this.filter)
              .then((t) => ((0, w._)(this, B)._register(t, this), t))
          );
        }
        stop() {
          (0, w._)(this, M).then((t) => {
            (0, w._)(this, B).destroyed ||
              (0, w._)(this, B).send("eth_unsubscribe", [t]);
          }),
            (0, A._)(this, M, null);
        }
        pause(t) {
          (0, n.hu)(
            t,
            "preserve logs while paused not supported by SocketSubscriber yet",
            "UNSUPPORTED_OPERATION",
            { operation: "pause(false)" }
          ),
            (0, A._)(this, F, !!t);
        }
        resume() {
          (0, A._)(this, F, null);
        }
        _handleMessage(t) {
          if (null != (0, w._)(this, M) && null === (0, w._)(this, F)) {
            let e = (0, w._)(this, U);
            (e =
              null == e
                ? this._emit((0, w._)(this, B), t)
                : e.then(async () => {
                    await this._emit((0, w._)(this, B), t);
                  })),
              (0, A._)(
                this,
                U,
                e.then(() => {
                  (0, w._)(this, U) === e && (0, A._)(this, U, null);
                })
              );
          }
        }
        async _emit(t, e) {
          throw Error("sub-classes must implemente this; _emit");
        }
        constructor(t, e) {
          (0, y._)(this, B, { writable: !0, value: void 0 }),
            (0, y._)(this, S, { writable: !0, value: void 0 }),
            (0, y._)(this, M, { writable: !0, value: void 0 }),
            (0, y._)(this, F, { writable: !0, value: void 0 }),
            (0, y._)(this, U, { writable: !0, value: void 0 }),
            (0, A._)(this, B, t),
            (0, A._)(this, S, JSON.stringify(e)),
            (0, A._)(this, M, null),
            (0, A._)(this, F, null),
            (0, A._)(this, U, null);
        }
      }
      class G extends L {
        async _emit(t, e) {
          t.emit("block", parseInt(e.number));
        }
        constructor(t) {
          super(t, ["newHeads"]);
        }
      }
      class Q extends L {
        async _emit(t, e) {
          t.emit("pending", e);
        }
        constructor(t) {
          super(t, ["newPendingTransactions"]);
        }
      }
      var H = new WeakMap();
      class W extends L {
        get logFilter() {
          return JSON.parse((0, w._)(this, H));
        }
        async _emit(t, e) {
          t.emit(this.logFilter, t._wrapLog(e, t._network));
        }
        constructor(t, e) {
          super(t, ["logs", e]),
            (0, y._)(this, H, { writable: !0, value: void 0 }),
            (0, A._)(this, H, JSON.stringify(e));
        }
      }
      var j = new WeakMap(),
        J = new WeakMap(),
        V = new WeakMap();
      class K extends c.vH {
        _getSubscriber(t) {
          switch (t.type) {
            case "close":
              return new T.P("close");
            case "block":
              return new G(this);
            case "pending":
              return new Q(this);
            case "event":
              return new W(this, t.filter);
            case "orphan":
              if ("drop-log" === t.filter.orphan) return new T.P("drop-log");
          }
          return super._getSubscriber(t);
        }
        _register(t, e) {
          (0, w._)(this, J).set(t, e);
          let r = (0, w._)(this, V).get(t);
          if (r) {
            for (let t of r) e._handleMessage(t);
            (0, w._)(this, V).delete(t);
          }
        }
        async _send(t) {
          (0, n.en)(
            !Array.isArray(t),
            "WebSocket does not support batch send",
            "payload",
            t
          );
          let e = new Promise((e, r) => {
            (0, w._)(this, j).set(t.id, { payload: t, resolve: e, reject: r });
          });
          return (
            await this._waitUntilReady(),
            await this._write(JSON.stringify(t)),
            [await e]
          );
        }
        async _processMessage(t) {
          let e = JSON.parse(t);
          if (e && "object" == typeof e && "id" in e) {
            let t = (0, w._)(this, j).get(e.id);
            if (null == t) {
              this.emit(
                "error",
                (0, n.wf)("received result for unknown id", "UNKNOWN_ERROR", {
                  reasonCode: "UNKNOWN_ID",
                  result: e,
                })
              );
              return;
            }
            (0, w._)(this, j).delete(e.id), t.resolve(e);
          } else if (e && "eth_subscription" === e.method) {
            let t = e.params.subscription,
              r = (0, w._)(this, J).get(t);
            if (r) r._handleMessage(e.params.result);
            else {
              let r = (0, w._)(this, V).get(t);
              null == r && ((r = []), (0, w._)(this, V).set(t, r)),
                r.push(e.params.result);
            }
          } else {
            this.emit(
              "error",
              (0, n.wf)("received unexpected message", "UNKNOWN_ERROR", {
                reasonCode: "UNEXPECTED_MESSAGE",
                result: e,
              })
            );
            return;
          }
        }
        async _write(t) {
          throw Error("sub-classes must override this");
        }
        constructor(t, e) {
          let r = Object.assign({}, null != e ? e : {});
          (0, n.en)(
            null == r.batchMaxCount || 1 === r.batchMaxCount,
            "sockets-based providers do not support batches",
            "options.batchMaxCount",
            e
          ),
            (r.batchMaxCount = 1),
            null == r.staticNetwork && (r.staticNetwork = !0),
            super(t, r),
            (0, y._)(this, j, { writable: !0, value: void 0 }),
            (0, y._)(this, J, { writable: !0, value: void 0 }),
            (0, y._)(this, V, { writable: !0, value: void 0 }),
            (0, A._)(this, j, new Map()),
            (0, A._)(this, J, new Map()),
            (0, A._)(this, V, new Map());
        }
      }
      var z = new WeakMap(),
        Z = new WeakMap();
      class q extends K {
        get websocket() {
          if (null == (0, w._)(this, Z)) throw Error("websocket closed");
          return (0, w._)(this, Z);
        }
        async _write(t) {
          this.websocket.send(t);
        }
        async destroy() {
          null != (0, w._)(this, Z) &&
            ((0, w._)(this, Z).close(), (0, A._)(this, Z, null)),
            super.destroy();
        }
        constructor(t, e, r) {
          super(e, r),
            (0, y._)(this, z, { writable: !0, value: void 0 }),
            (0, y._)(this, Z, { writable: !0, value: void 0 }),
            "string" == typeof t
              ? ((0, A._)(this, z, () => new D(t)),
                (0, A._)(this, Z, (0, w._)(this, z).call(this)))
              : "function" == typeof t
              ? ((0, A._)(this, z, t), (0, A._)(this, Z, t()))
              : ((0, A._)(this, z, null), (0, A._)(this, Z, t)),
            (this.websocket.onopen = async () => {
              try {
                await this._start(), this.resume();
              } catch (t) {
                console.log("failed to start WebsocketProvider", t);
              }
            }),
            (this.websocket.onmessage = (t) => {
              this._processMessage(t.data);
            });
        }
      }
      let Y = "84842078b09946638c03157f83405213";
      class X extends q {
        isCommunityResource() {
          return this.projectId === Y;
        }
        constructor(t, e) {
          let r = new $(t, e),
            a = r._getConnection();
          (0, n.hu)(
            !a.credentials,
            "INFURA WebSocket project secrets unsupported",
            "UNSUPPORTED_OPERATION",
            { operation: "InfuraProvider.getWebSocketProvider()" }
          ),
            super(
              a.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/"),
              r._network
            ),
            (0, i.h)(this, {
              projectId: r.projectId,
              projectSecret: r.projectSecret,
            });
        }
      }
      class $ extends c.r6 {
        _getProvider(t) {
          try {
            return new $(t, this.projectId, this.projectSecret);
          } catch (t) {}
          return super._getProvider(t);
        }
        isCommunityResource() {
          return this.projectId === Y;
        }
        static getWebSocketProvider(t, e) {
          return new X(t, e);
        }
        static getRequest(t, e, r) {
          null == e && (e = Y), null == r && (r = null);
          let i = new a.gd(
            "https://"
              .concat(
                (function (t) {
                  switch (t) {
                    case "mainnet":
                      return "mainnet.infura.io";
                    case "goerli":
                      return "goerli.infura.io";
                    case "sepolia":
                      return "sepolia.infura.io";
                    case "arbitrum":
                      return "arbitrum-mainnet.infura.io";
                    case "arbitrum-goerli":
                      return "arbitrum-goerli.infura.io";
                    case "arbitrum-sepolia":
                      return "arbitrum-sepolia.infura.io";
                    case "base":
                      return "base-mainnet.infura.io";
                    case "base-goerlia":
                      return "base-goerli.infura.io";
                    case "base-sepolia":
                      return "base-sepolia.infura.io";
                    case "bnb":
                      return "bnbsmartchain-mainnet.infura.io";
                    case "bnbt":
                      return "bnbsmartchain-testnet.infura.io";
                    case "linea":
                      return "linea-mainnet.infura.io";
                    case "linea-goerli":
                      return "linea-goerli.infura.io";
                    case "linea-sepolia":
                      return "linea-sepolia.infura.io";
                    case "matic":
                      return "polygon-mainnet.infura.io";
                    case "matic-amoy":
                      return "polygon-amoy.infura.io";
                    case "matic-mumbai":
                      return "polygon-mumbai.infura.io";
                    case "optimism":
                      return "optimism-mainnet.infura.io";
                    case "optimism-goerli":
                      return "optimism-goerli.infura.io";
                    case "optimism-sepolia":
                      return "optimism-sepolia.infura.io";
                  }
                  (0, n.en)(!1, "unsupported network", "network", t);
                })(t.name),
                "/v3/"
              )
              .concat(e)
          );
          return (
            (i.allowGzip = !0),
            r && i.setCredentials("", r),
            e === Y &&
              (i.retryFunc = async (t, e, r) => (o("InfuraProvider"), !0)),
            i
          );
        }
        constructor(t, e, r) {
          null == t && (t = "mainnet");
          let n = l.Z.from(t);
          null == e && (e = Y),
            null == r && (r = null),
            super($.getRequest(n, e, r), n, { staticNetwork: n }),
            (0, i.h)(this, { projectId: e, projectSecret: r });
        }
      }
      let tt = "919b412a057b5e9c9b6dce193c5a60242d6efadb";
      class te extends c.r6 {
        _getProvider(t) {
          try {
            return new te(t, this.token);
          } catch (t) {}
          return super._getProvider(t);
        }
        isCommunityResource() {
          return this.token === tt;
        }
        static getRequest(t, e) {
          null == e && (e = tt);
          let r = new a.gd(
            "https://"
              .concat(
                (function (t) {
                  switch (t) {
                    case "mainnet":
                      return "ethers.quiknode.pro";
                    case "goerli":
                      return "ethers.ethereum-goerli.quiknode.pro";
                    case "sepolia":
                      return "ethers.ethereum-sepolia.quiknode.pro";
                    case "holesky":
                      return "ethers.ethereum-holesky.quiknode.pro";
                    case "arbitrum":
                      return "ethers.arbitrum-mainnet.quiknode.pro";
                    case "arbitrum-goerli":
                      return "ethers.arbitrum-goerli.quiknode.pro";
                    case "arbitrum-sepolia":
                      return "ethers.arbitrum-sepolia.quiknode.pro";
                    case "base":
                      return "ethers.base-mainnet.quiknode.pro";
                    case "base-goerli":
                      return "ethers.base-goerli.quiknode.pro";
                    case "base-spolia":
                      return "ethers.base-sepolia.quiknode.pro";
                    case "bnb":
                      return "ethers.bsc.quiknode.pro";
                    case "bnbt":
                      return "ethers.bsc-testnet.quiknode.pro";
                    case "matic":
                      return "ethers.matic.quiknode.pro";
                    case "matic-mumbai":
                      return "ethers.matic-testnet.quiknode.pro";
                    case "optimism":
                      return "ethers.optimism.quiknode.pro";
                    case "optimism-goerli":
                      return "ethers.optimism-goerli.quiknode.pro";
                    case "optimism-sepolia":
                      return "ethers.optimism-sepolia.quiknode.pro";
                    case "xdai":
                      return "ethers.xdai.quiknode.pro";
                  }
                  (0, n.en)(!1, "unsupported network", "network", t);
                })(t.name),
                "/"
              )
              .concat(e)
          );
          return (
            (r.allowGzip = !0),
            e === tt &&
              (r.retryFunc = async (t, e, r) => (o("QuickNodeProvider"), !0)),
            r
          );
        }
        constructor(t, e) {
          null == t && (t = "mainnet");
          let r = l.Z.from(t);
          null == e && (e = tt),
            super(te.getRequest(r, e), r, { staticNetwork: r }),
            (0, i.h)(this, { token: e });
        }
      }
      var tr = r(8730),
        tn = r(36284);
      let ta = BigInt("1"),
        ti = BigInt("2");
      function ts() {
        return new Date().getTime();
      }
      function to(t) {
        return JSON.stringify(t, (t, e) =>
          "bigint" == typeof e ? { type: "bigint", value: e.toString() } : e
        );
      }
      let tl = { stallTimeout: 400, priority: 1, weight: 1 },
        tc = {
          blockNumber: -2,
          requests: 0,
          lateResponses: 0,
          errorResponses: 0,
          outOfSync: -1,
          unsupportedEvents: 0,
          rollingDuration: 0,
          score: 0,
          _network: null,
          _updateNumber: null,
          _totalTime: 0,
          _lastFatalError: null,
          _lastFatalErrorTimestamp: 0,
        };
      async function tu(t, e) {
        for (
          ;
          (t.blockNumber < 0 || t.blockNumber < e) &&
          (t._updateNumber ||
            (t._updateNumber = (async () => {
              try {
                let e = await t.provider.getBlockNumber();
                e > t.blockNumber && (t.blockNumber = e);
              } catch (e) {
                (t.blockNumber = -2),
                  (t._lastFatalError = e),
                  (t._lastFatalErrorTimestamp = ts());
              }
              t._updateNumber = null;
            })()),
          await t._updateNumber,
          t.outOfSync++,
          !t._lastFatalError);

        );
      }
      function th(t) {
        if (null == t) return "null";
        if (Array.isArray(t)) return "[" + t.map(th).join(",") + "]";
        if ("object" == typeof t && "function" == typeof t.toJSON)
          return th(t.toJSON());
        switch (typeof t) {
          case "boolean":
          case "symbol":
            return t.toString();
          case "bigint":
          case "number":
            return BigInt(t).toString();
          case "string":
            return JSON.stringify(t);
          case "object": {
            let e = Object.keys(t);
            return (
              e.sort(),
              "{" +
                e
                  .map((e) =>
                    "".concat(JSON.stringify(e), ":").concat(th(t[e]))
                  )
                  .join(",") +
                "}"
            );
          }
        }
        throw (console.log("Could not serialize", t), Error("Hmm..."));
      }
      function tf(t) {
        if ("error" in t) {
          let e = t.error;
          return { tag: th(e), value: e };
        }
        let e = t.result;
        return { tag: th(e), value: e };
      }
      function td(t, e) {
        let r = new Map();
        for (let { value: t, tag: n, weight: a } of e) {
          let e = r.get(n) || { value: t, weight: 0 };
          (e.weight += a), r.set(n, e);
        }
        let n = null;
        for (let e of r.values())
          e.weight >= t && (!n || e.weight > n.weight) && (n = e);
        if (n) return n.value;
      }
      function tp(t, e) {
        let r = 0,
          n = new Map(),
          a = null,
          i = [];
        for (let { value: t, tag: s, weight: o } of e)
          if (t instanceof Error) {
            let e = n.get(s) || { value: t, weight: 0 };
            (e.weight += o),
              n.set(s, e),
              (null == a || e.weight > a.weight) && (a = e);
          } else i.push(BigInt(t)), (r += o);
        if (r < t) return a && a.weight >= t ? a.value : void 0;
        i.sort((t, e) => (t < e ? -1 : e > t ? 1 : 0));
        let s = Math.floor(i.length / 2);
        return i.length % 2 ? i[s] : (i[s - 1] + i[s] + ta) / ti;
      }
      function tg(t, e) {
        let r = td(t, e);
        if (void 0 !== r) return r;
        for (let t of e) if (t.value) return t.value;
      }
      var tm = new WeakMap(),
        tw = new WeakMap(),
        ty = new WeakMap(),
        tA = new WeakSet(),
        tb = new WeakSet(),
        tv = new WeakSet(),
        t_ = new WeakSet(),
        tE = new WeakSet();
      class tk extends T.u {
        get providerConfigs() {
          return (0, w._)(this, tm).map((t) => {
            let e = Object.assign({}, t);
            for (let t in e) "_" === t[0] && delete e[t];
            return e;
          });
        }
        async _detectNetwork() {
          return l.Z.from(
            (0, N.yT)(await this._perform({ method: "chainId" }))
          );
        }
        async _translatePerform(t, e) {
          switch (e.method) {
            case "broadcastTransaction":
              return await t.broadcastTransaction(e.signedTransaction);
            case "call":
              return await t.call(
                Object.assign({}, e.transaction, { blockTag: e.blockTag })
              );
            case "chainId":
              return (await t.getNetwork()).chainId;
            case "estimateGas":
              return await t.estimateGas(e.transaction);
            case "getBalance":
              return await t.getBalance(e.address, e.blockTag);
            case "getBlock": {
              let r = "blockHash" in e ? e.blockHash : e.blockTag;
              return await t.getBlock(r, e.includeTransactions);
            }
            case "getBlockNumber":
              return await t.getBlockNumber();
            case "getCode":
              return await t.getCode(e.address, e.blockTag);
            case "getGasPrice":
              return (await t.getFeeData()).gasPrice;
            case "getPriorityFee":
              return (await t.getFeeData()).maxPriorityFeePerGas;
            case "getLogs":
              return await t.getLogs(e.filter);
            case "getStorage":
              return await t.getStorage(e.address, e.position, e.blockTag);
            case "getTransaction":
              return await t.getTransaction(e.hash);
            case "getTransactionCount":
              return await t.getTransactionCount(e.address, e.blockTag);
            case "getTransactionReceipt":
              return await t.getTransactionReceipt(e.hash);
            case "getTransactionResult":
              return await t.getTransactionResult(e.hash);
          }
        }
        async _perform(t) {
          if ("broadcastTransaction" === t.method) {
            let e = (0, w._)(this, tm).map((t) => null),
              r = (0, w._)(this, tm).map(async (r, n) => {
                let { provider: a, weight: i } = r;
                try {
                  let r = await a._perform(t);
                  e[n] = Object.assign(tf({ result: r }), { weight: i });
                } catch (t) {
                  e[n] = Object.assign(tf({ error: t }), { weight: i });
                }
              });
            for (;;) {
              for (let { value: t } of e.filter((t) => null != t))
                if (!(t instanceof Error)) return t;
              let t = td(
                this.quorum,
                e.filter((t) => null != t)
              );
              if ((0, n.VZ)(t, "INSUFFICIENT_FUNDS")) throw t;
              let a = r.filter((t, r) => null == e[r]);
              if (0 === a.length) break;
              await Promise.race(a);
            }
            let a = tg(this.quorum, e);
            if (
              ((0, n.hu)(
                void 0 !== a,
                "problem multi-broadcasting",
                "SERVER_ERROR",
                {
                  request: "%sub-requests",
                  info: { request: t, results: e.map(to) },
                }
              ),
              a instanceof Error)
            )
              throw a;
            return a;
          }
          await (0, tr._)(this, tv, tR).call(this);
          let e = new Set(),
            r = 0;
          for (;;) {
            let n = (0, tr._)(this, tb, tN).call(this, e, t);
            if (null == n || (r += n.config.weight) >= this.quorum) break;
          }
          let a = await (0, tr._)(this, tE, tC).call(this, e, t);
          for (let t of e)
            t.perform && null == t.result && t.config.lateResponses++;
          return a;
        }
        async destroy() {
          for (let { provider: t } of (0, w._)(this, tm)) t.destroy();
          super.destroy();
        }
        constructor(t, e, r) {
          super(e, r),
            (0, tn._)(this, tA),
            (0, tn._)(this, tb),
            (0, tn._)(this, tv),
            (0, tn._)(this, t_),
            (0, tn._)(this, tE),
            (0, y._)(this, tm, { writable: !0, value: void 0 }),
            (0, y._)(this, tw, { writable: !0, value: void 0 }),
            (0, y._)(this, ty, { writable: !0, value: void 0 }),
            (0, A._)(
              this,
              tm,
              t.map((t) =>
                t instanceof T.u
                  ? Object.assign({ provider: t }, tl, tc)
                  : Object.assign({}, tl, t, tc)
              )
            ),
            (0, A._)(this, tw, -2),
            (0, A._)(this, ty, null),
            r && null != r.quorum
              ? (this.quorum = r.quorum)
              : (this.quorum = Math.ceil(
                  (0, w._)(this, tm).reduce((t, e) => (t += e.weight), 0) / 2
                )),
            (this.eventQuorum = 1),
            (this.eventWorkers = 1),
            (0, n.en)(
              this.quorum <=
                (0, w._)(this, tm).reduce((t, e) => t + e.weight, 0),
              "quorum exceed provider weight",
              "quorum",
              this.quorum
            );
        }
      }
      function tP(t) {
        let e = Array.from(t).map((t) => t.config),
          r = (0, w._)(this, tm).slice();
        for (let t of (!(function (t) {
          for (let e = t.length - 1; e > 0; e--) {
            let r = Math.floor(Math.random() * (e + 1)),
              n = t[e];
            (t[e] = t[r]), (t[r] = n);
          }
        })(r),
        r.sort((t, e) => t.priority - e.priority),
        r))
          if (!t._lastFatalError && -1 === e.indexOf(t)) return t;
        return null;
      }
      function tN(t, e) {
        let r = (0, tr._)(this, tA, tP).call(this, t);
        if (null == r) return null;
        let n = {
            config: r,
            result: null,
            didBump: !1,
            perform: null,
            staller: null,
          },
          a = ts();
        return (
          (n.perform = (async () => {
            try {
              r.requests++;
              let t = await this._translatePerform(r.provider, e);
              n.result = { result: t };
            } catch (t) {
              r.errorResponses++, (n.result = { error: t });
            }
            let t = ts() - a;
            (r._totalTime += t),
              (r.rollingDuration = 0.95 * r.rollingDuration + 0.05 * t),
              (n.perform = null);
          })()),
          (n.staller = (async () => {
            var t;
            await ((t = r.stallTimeout),
            new Promise((e) => {
              setTimeout(e, t);
            })),
              (n.staller = null);
          })()),
          t.add(n),
          n
        );
      }
      async function tR() {
        let t = (0, w._)(this, ty);
        if (!t) {
          let e = [];
          (0, w._)(this, tm).forEach((t) => {
            e.push(
              (async () => {
                await tu(t, 0),
                  t._lastFatalError ||
                    (t._network = await t.provider.getNetwork());
              })()
            );
          }),
            (0, A._)(
              this,
              ty,
              (t = (async () => {
                await Promise.all(e);
                let t = null;
                for (let e of (0, w._)(this, tm)) {
                  if (e._lastFatalError) continue;
                  let r = e._network;
                  null == t
                    ? (t = r.chainId)
                    : r.chainId !== t &&
                      (0, n.hu)(
                        !1,
                        "cannot mix providers on different networks",
                        "UNSUPPORTED_OPERATION",
                        { operation: "new FallbackProvider" }
                      );
                }
              })())
            );
        }
        await t;
      }
      async function tT(t, e) {
        let r = [];
        for (let e of t)
          if (null != e.result) {
            let { tag: t, value: n } = tf(e.result);
            r.push({ tag: t, value: n, weight: e.config.weight });
          }
        if (!(r.reduce((t, e) => t + e.weight, 0) < this.quorum)) {
          switch (e.method) {
            case "getBlockNumber": {
              -2 === (0, w._)(this, tw) &&
                (0, A._)(
                  this,
                  tw,
                  Math.ceil(
                    (0, N.Dx)(
                      tp(
                        this.quorum,
                        (0, w._)(this, tm)
                          .filter((t) => !t._lastFatalError)
                          .map((t) => ({
                            value: t.blockNumber,
                            tag: (0, N.Dx)(t.blockNumber).toString(),
                            weight: t.weight,
                          }))
                      )
                    )
                  )
                );
              let t = (function (t, e) {
                let r;
                if (1 === t) return (0, N.Dx)(tp(t, e), "%internal");
                let n = new Map(),
                  a = (t, e) => {
                    let r = n.get(t) || { result: t, weight: 0 };
                    (r.weight += e), n.set(t, r);
                  };
                for (let { weight: t, value: r } of e) {
                  let e = (0, N.Dx)(r);
                  a(e - 1, t), a(e, t), a(e + 1, t);
                }
                let i = 0;
                for (let { weight: e, result: a } of n.values())
                  e >= t &&
                    (e > i || (null != r && e === i && a > r)) &&
                    ((i = e), (r = a));
                return r;
              })(this.quorum, r);
              if (void 0 === t) return;
              return (
                t > (0, w._)(this, tw) && (0, A._)(this, tw, t),
                (0, w._)(this, tw)
              );
            }
            case "getGasPrice":
            case "getPriorityFee":
            case "estimateGas":
              return tp(this.quorum, r);
            case "getBlock":
              if ("blockTag" in e && "pending" === e.blockTag)
                return tg(this.quorum, r);
              return td(this.quorum, r);
            case "call":
            case "chainId":
            case "getBalance":
            case "getTransactionCount":
            case "getCode":
            case "getStorage":
            case "getTransaction":
            case "getTransactionReceipt":
            case "getLogs":
              return td(this.quorum, r);
            case "broadcastTransaction":
              return tg(this.quorum, r);
          }
          (0, n.hu)(!1, "unsupported method", "UNSUPPORTED_OPERATION", {
            operation: "_perform(".concat(to(e.method), ")"),
          });
        }
      }
      async function tC(t, e) {
        if (0 === t.size) throw Error("no runners?!");
        let r = [],
          a = 0;
        for (let e of t) {
          if ((e.perform && r.push(e.perform), e.staller)) {
            r.push(e.staller);
            continue;
          }
          !e.didBump && ((e.didBump = !0), a++);
        }
        let i = await (0, tr._)(this, t_, tT).call(this, t, e);
        if (void 0 !== i) {
          if (i instanceof Error) throw i;
          return i;
        }
        for (let r = 0; r < a; r++) (0, tr._)(this, tb, tN).call(this, t, e);
        return (
          (0, n.hu)(r.length > 0, "quorum not met", "SERVER_ERROR", {
            request: "%sub-requests",
            info: {
              request: e,
              results: Array.from(t).map((t) => to(t.result)),
            },
          }),
          await Promise.race(r),
          await (0, tr._)(this, tE, tC).call(this, t, e)
        );
      }
      let tx =
        "goerli kovan sepolia classicKotti optimism-goerli arbitrum-goerli matic-mumbai bnbt".split(
          " "
        );
      function tO(t, e) {
        null == e && (e = {});
        let r = (t) =>
          "-" !== e[t] &&
          ("string" == typeof e.exclusive
            ? t === e.exclusive
            : !Array.isArray(e.exclusive) || -1 !== e.exclusive.indexOf(t));
        if ("string" == typeof t && t.match(/^https?:/)) return new c.r6(t);
        if (
          ("string" == typeof t && t.match(/^wss?:/)) ||
          (t && "function" == typeof t.send && "function" == typeof t.close)
        )
          return new q(t);
        let a = null;
        try {
          a = l.Z.from(t);
        } catch (t) {}
        let i = [];
        if (
          (r("publicPolygon") &&
            a &&
            ("matic" === a.name
              ? i.push(
                  new c.r6("https://polygon-rpc.com/", a, { staticNetwork: a })
                )
              : "matic-amoy" === a.name &&
                i.push(
                  new c.r6("https://rpc-amoy.polygon.technology/", a, {
                    staticNetwork: a,
                  })
                )),
          r("alchemy"))
        )
          try {
            i.push(new d(t, e.alchemy));
          } catch (t) {}
        if (r("ankr") && null != e.ankr)
          try {
            i.push(new h(t, e.ankr));
          } catch (t) {}
        if (r("chainstack"))
          try {
            i.push(new g(t, e.chainstack));
          } catch (t) {}
        if (r("cloudflare"))
          try {
            i.push(new m(t));
          } catch (t) {}
        if (r("etherscan"))
          try {
            i.push(new I(t, e.etherscan));
          } catch (t) {}
        if (r("infura"))
          try {
            let r,
              n = e.infura;
            "object" == typeof n && ((r = n.projectSecret), (n = n.projectId)),
              i.push(new $(t, n, r));
          } catch (t) {}
        if (r("quicknode"))
          try {
            let r = e.quicknode;
            i.push(new te(t, r));
          } catch (t) {}
        if (
          ((0, n.hu)(
            i.length,
            "unsupported default network",
            "UNSUPPORTED_OPERATION",
            { operation: "getDefaultProvider" }
          ),
          1 === i.length)
        )
          return i[0];
        let s = Math.floor(i.length / 2);
        return (
          s > 2 && (s = 2),
          a && -1 !== tx.indexOf(a.name) && (s = 1),
          e && e.quorum && (s = e.quorum),
          new tk(i, void 0, { quorum: s })
        );
      }
    },
    20475: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return b;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(31296),
        o = r(14755),
        l = r(25454),
        c = r(63718);
      class u {
        clone() {
          return new u(this.name);
        }
        constructor(t) {
          (0, c.h)(this, { name: t });
        }
      }
      class h extends u {
        clone() {
          return new h(this.effectiveBlock, this);
        }
        constructor(t, e) {
          null == t && (t = 0),
            super("org.ethers.network.plugins.GasCost#".concat(t || 0));
          let r = { effectiveBlock: t };
          function n(t, n) {
            let a = (e || {})[t];
            null == a && (a = n),
              (0, l.en)(
                "number" == typeof a,
                "invalud value for ".concat(t),
                "costs",
                e
              ),
              (r[t] = a);
          }
          n("txBase", 21e3),
            n("txCreate", 32e3),
            n("txDataZero", 4),
            n("txDataNonzero", 16),
            n("txAccessListStorageKey", 1900),
            n("txAccessListAddress", 2400),
            (0, c.h)(this, r);
        }
      }
      class f extends u {
        clone() {
          return new f(this.address, this.targetNetwork);
        }
        constructor(t, e) {
          super("org.ethers.plugins.network.Ens"),
            (0, c.h)(this, {
              address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
              targetNetwork: null == e ? 1 : e,
            });
        }
      }
      var d = new WeakMap(),
        p = new WeakMap();
      class g extends u {
        get url() {
          return (0, n._)(this, d);
        }
        get processFunc() {
          return (0, n._)(this, p);
        }
        clone() {
          return this;
        }
        constructor(t, e) {
          super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"),
            (0, a._)(this, d, { writable: !0, value: void 0 }),
            (0, a._)(this, p, { writable: !0, value: void 0 }),
            (0, i._)(this, d, t),
            (0, i._)(this, p, e);
        }
      }
      let m = new Map();
      var w = new WeakMap(),
        y = new WeakMap(),
        A = new WeakMap();
      class b {
        toJSON() {
          return { name: this.name, chainId: String(this.chainId) };
        }
        get name() {
          return (0, n._)(this, w);
        }
        set name(t) {
          (0, i._)(this, w, t);
        }
        get chainId() {
          return (0, n._)(this, y);
        }
        set chainId(t) {
          (0, i._)(this, y, (0, o.yT)(t, "chainId"));
        }
        matches(t) {
          if (null == t) return !1;
          if ("string" == typeof t) {
            try {
              return this.chainId === (0, o.yT)(t);
            } catch (t) {}
            return this.name === t;
          }
          if ("number" == typeof t || "bigint" == typeof t) {
            try {
              return this.chainId === (0, o.yT)(t);
            } catch (t) {}
            return !1;
          }
          if ("object" == typeof t) {
            if (null != t.chainId) {
              try {
                return this.chainId === (0, o.yT)(t.chainId);
              } catch (t) {}
              return !1;
            }
            if (null != t.name) return this.name === t.name;
          }
          return !1;
        }
        get plugins() {
          return Array.from((0, n._)(this, A).values());
        }
        attachPlugin(t) {
          if ((0, n._)(this, A).get(t.name))
            throw Error("cannot replace existing plugin: ".concat(t.name, " "));
          return (0, n._)(this, A).set(t.name, t.clone()), this;
        }
        getPlugin(t) {
          return (0, n._)(this, A).get(t) || null;
        }
        getPlugins(t) {
          return this.plugins.filter((e) => e.name.split("#")[0] === t);
        }
        clone() {
          let t = new b(this.name, this.chainId);
          return (
            this.plugins.forEach((e) => {
              t.attachPlugin(e.clone());
            }),
            t
          );
        }
        computeIntrinsicGas(t) {
          let e =
              this.getPlugin("org.ethers.plugins.network.GasCost") || new h(),
            r = e.txBase;
          if ((null == t.to && (r += e.txCreate), t.data))
            for (let n = 2; n < t.data.length; n += 2)
              "00" === t.data.substring(n, n + 2)
                ? (r += e.txDataZero)
                : (r += e.txDataNonzero);
          if (t.accessList) {
            let n = (0, s.z)(t.accessList);
            for (let t in n)
              r +=
                e.txAccessListAddress +
                e.txAccessListStorageKey * n[t].storageKeys.length;
          }
          return r;
        }
        static from(t) {
          if (
            ((function () {
              k ||
                ((k = !0),
                t("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }),
                t("ropsten", 3, { ensNetwork: 3 }),
                t("rinkeby", 4, { ensNetwork: 4 }),
                t("goerli", 5, { ensNetwork: 5 }),
                t("kovan", 42, { ensNetwork: 42 }),
                t("sepolia", 11155111, { ensNetwork: 11155111 }),
                t("holesky", 17e3, { ensNetwork: 17e3 }),
                t("classic", 61, {}),
                t("classicKotti", 6, {}),
                t("arbitrum", 42161, { ensNetwork: 1 }),
                t("arbitrum-goerli", 421613, {}),
                t("arbitrum-sepolia", 421614, {}),
                t("base", 8453, { ensNetwork: 1 }),
                t("base-goerli", 84531, {}),
                t("base-sepolia", 84532, {}),
                t("bnb", 56, { ensNetwork: 1 }),
                t("bnbt", 97, {}),
                t("linea", 59144, { ensNetwork: 1 }),
                t("linea-goerli", 59140, {}),
                t("linea-sepolia", 59141, {}),
                t("matic", 137, {
                  ensNetwork: 1,
                  plugins: [E("https://gasstation.polygon.technology/v2")],
                }),
                t("matic-amoy", 80002, {}),
                t("matic-mumbai", 80001, {
                  altNames: ["maticMumbai", "maticmum"],
                  plugins: [
                    E("https://gasstation-testnet.polygon.technology/v2"),
                  ],
                }),
                t("optimism", 10, { ensNetwork: 1, plugins: [] }),
                t("optimism-goerli", 420, {}),
                t("optimism-sepolia", 11155420, {}),
                t("xdai", 100, { ensNetwork: 1 }));
              function t(t, e, r) {
                let n = function () {
                  let n = new b(t, e);
                  return (
                    null != r.ensNetwork &&
                      n.attachPlugin(new f(null, r.ensNetwork)),
                    n.attachPlugin(new h()),
                    (r.plugins || []).forEach((t) => {
                      n.attachPlugin(t);
                    }),
                    n
                  );
                };
                b.register(t, n),
                  b.register(e, n),
                  r.altNames &&
                    r.altNames.forEach((t) => {
                      b.register(t, n);
                    });
              }
            })(),
            null == t)
          )
            return b.from("mainnet");
          if (
            ("number" == typeof t && (t = BigInt(t)),
            "string" == typeof t || "bigint" == typeof t)
          ) {
            let e = m.get(t);
            if (e) return e();
            if ("bigint" == typeof t) return new b("unknown", t);
            (0, l.en)(!1, "unknown network", "network", t);
          }
          if ("function" == typeof t.clone) return t.clone();
          if ("object" == typeof t) {
            (0, l.en)(
              "string" == typeof t.name && "number" == typeof t.chainId,
              "invalid network object name or chainId",
              "network",
              t
            );
            let e = new b(t.name, t.chainId);
            return (
              (t.ensAddress || null != t.ensNetwork) &&
                e.attachPlugin(new f(t.ensAddress, t.ensNetwork)),
              e
            );
          }
          (0, l.en)(!1, "invalid network", "network", t);
        }
        static register(t, e) {
          "number" == typeof t && (t = BigInt(t));
          let r = m.get(t);
          r &&
            (0, l.en)(
              !1,
              "conflicting network for ".concat(JSON.stringify(r.name)),
              "nameOrChainId",
              t
            ),
            m.set(t, e);
        }
        constructor(t, e) {
          (0, a._)(this, w, { writable: !0, value: void 0 }),
            (0, a._)(this, y, { writable: !0, value: void 0 }),
            (0, a._)(this, A, { writable: !0, value: void 0 }),
            (0, i._)(this, w, t),
            (0, i._)(this, y, (0, o.yT)(e)),
            (0, i._)(this, A, new Map());
        }
      }
      function _(t, e) {
        let r = String(t);
        if (!r.match(/^[0-9.]+$/))
          throw Error("invalid gwei value: ".concat(t));
        let n = r.split(".");
        if ((1 === n.length && n.push(""), 2 !== n.length))
          throw Error("invalid gwei value: ".concat(t));
        for (; n[1].length < e; ) n[1] += "0";
        if (n[1].length > 9) {
          let t = BigInt(n[1].substring(0, 9));
          !n[1].substring(9).match(/^0+$/) && t++, (n[1] = t.toString());
        }
        return BigInt(n[0] + n[1]);
      }
      function E(t) {
        return new g(t, async (t, e, r) => {
          let n;
          r.setHeader("User-Agent", "ethers");
          try {
            let [e, a] = await Promise.all([r.send(), t()]),
              i = (n = e).bodyJson.standard;
            return {
              gasPrice: a.gasPrice,
              maxFeePerGas: _(i.maxFee, 9),
              maxPriorityFeePerGas: _(i.maxPriorityFee, 9),
            };
          } catch (t) {
            (0, l.hu)(
              !1,
              "error encountered with polygon gas station (".concat(
                JSON.stringify(r.url),
                ")"
              ),
              "SERVER_ERROR",
              { request: r, response: n, error: t }
            );
          }
        });
      }
      let k = !1;
    },
    50906: function (t, e, r) {
      r.d(e, {
        Q: function () {
          return c;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(25454),
        o = r(45565),
        l = new WeakMap();
      class c extends o.JU {
        async send(t, e) {
          return await this._start(), await super.send(t, e);
        }
        async _send(t) {
          (0, s.en)(
            !Array.isArray(t),
            "EIP-1193 does not support batch request",
            "payload",
            t
          );
          try {
            let e = await (0, n._)(this, l).call(
              this,
              t.method,
              t.params || []
            );
            return [{ id: t.id, result: e }];
          } catch (e) {
            return [
              {
                id: t.id,
                error: { code: e.code, data: e.data, message: e.message },
              },
            ];
          }
        }
        getRpcError(t, e) {
          switch ((e = JSON.parse(JSON.stringify(e))).error.code || -1) {
            case 4001:
              e.error.message = "ethers-user-denied: ".concat(e.error.message);
              break;
            case 4200:
              e.error.message = "ethers-unsupported: ".concat(e.error.message);
          }
          return super.getRpcError(t, e);
        }
        async hasSigner(t) {
          null == t && (t = 0);
          let e = await this.send("eth_accounts", []);
          return "number" == typeof t
            ? e.length > t
            : ((t = t.toLowerCase()),
              0 !== e.filter((e) => e.toLowerCase() === t).length);
        }
        async getSigner(t) {
          if ((null == t && (t = 0), !(await this.hasSigner(t))))
            try {
              await (0, n._)(this, l).call(this, "eth_requestAccounts", []);
            } catch (e) {
              let t = e.payload;
              throw this.getRpcError(t, { id: t.id, error: e });
            }
          return await super.getSigner(t);
        }
        constructor(t, e) {
          (0, s.en)(t && t.request, "invalid EIP-1193 provider", "ethereum", t),
            super(e, { batchMaxCount: 1 }),
            (0, a._)(this, l, { writable: !0, value: void 0 }),
            (0, i._)(this, l, async (e, r) => {
              let n = { method: e, params: r };
              this.emit("debug", { action: "sendEip1193Request", payload: n });
              try {
                let e = await t.request(n);
                return (
                  this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: e,
                  }),
                  e
                );
              } catch (e) {
                let t = Error(e.message);
                throw (
                  ((t.code = e.code),
                  (t.data = e.data),
                  (t.payload = n),
                  this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: t,
                  }),
                  t)
                );
              }
            });
        }
      }
    },
    45565: function (t, e, r) {
      r.d(e, {
        JU: function () {
          return tR;
        },
        vH: function () {
          return tk;
        },
        r6: function () {
          return tC;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(7321),
        o = r(8730),
        l = r(36284),
        c = r(39241),
        u = r(33187),
        h = r(15587),
        f = r(24536),
        d = r(22110),
        p = r(14755),
        g = r(25454),
        m = r(63718),
        w = r(88909);
      let y = new Uint8Array(32);
      y.fill(0);
      let A = BigInt(-1),
        b = BigInt(0),
        _ = BigInt(1),
        E = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        ),
        k = (0, p.m9)(_, 32),
        P = (0, p.m9)(b, 32),
        N = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        R = ["name", "version", "chainId", "verifyingContract", "salt"];
      function T(t) {
        return function (e) {
          return (
            (0, g.en)(
              "string" == typeof e,
              "invalid domain value for ".concat(JSON.stringify(t)),
              "domain.".concat(t),
              e
            ),
            e
          );
        };
      }
      let C = {
        name: T("name"),
        version: T("version"),
        chainId: function (t) {
          let e = (0, p.yT)(t, "domain.chainId");
          return ((0, g.en)(e >= 0, "invalid chain ID", "domain.chainId", t),
          Number.isSafeInteger(e))
            ? Number(e)
            : (0, p.B4)(e);
        },
        verifyingContract: function (t) {
          try {
            return (0, h.K)(t).toLowerCase();
          } catch (t) {}
          (0, g.en)(
            !1,
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t
          );
        },
        salt: function (t) {
          let e = (0, d.Pw)(t, "domain.salt");
          return (
            (0, g.en)(
              32 === e.length,
              'invalid domain value "salt"',
              "domain.salt",
              t
            ),
            (0, d.Dv)(e)
          );
        },
      };
      function x(t) {
        {
          let e = t.match(/^(u?)int(\d+)$/);
          if (e) {
            let r = "" === e[1],
              n = parseInt(e[2]);
            (0, g.en)(
              n % 8 == 0 && 0 !== n && n <= 256 && e[2] === String(n),
              "invalid numeric width",
              "type",
              t
            );
            let a = (0, p.sS)(E, r ? n - 1 : n),
              i = r ? (a + _) * A : b;
            return function (e) {
              let n = (0, p.yT)(e, "value");
              return (
                (0, g.en)(
                  n >= i && n <= a,
                  "value out-of-bounds for ".concat(t),
                  "value",
                  n
                ),
                (0, p.m9)(r ? (0, p.$j)(n, 256) : n, 32)
              );
            };
          }
        }
        {
          let e = t.match(/^bytes(\d+)$/);
          if (e) {
            let r = parseInt(e[1]);
            return (
              (0, g.en)(
                0 !== r && r <= 32 && e[1] === String(r),
                "invalid bytes width",
                "type",
                t
              ),
              function (e) {
                let n = (0, d.Pw)(e);
                return (
                  (0, g.en)(
                    n.length === r,
                    "invalid length for ".concat(t),
                    "value",
                    e
                  ),
                  (function (t) {
                    let e = (0, d.Pw)(t),
                      r = e.length % 32;
                    return r ? (0, d.zo)([e, y.slice(r)]) : (0, d.Dv)(e);
                  })(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, d.U3)((0, h.K)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? k : P;
            };
          case "bytes":
            return function (t) {
              return (0, f.w)(t);
            };
          case "string":
            return function (t) {
              return (0, w.id)(t);
            };
        }
        return null;
      }
      function O(t, e) {
        return "".concat(t, "(").concat(
          e
            .map((t) => {
              let { name: e, type: r } = t;
              return r + " " + e;
            })
            .join(","),
          ")"
        );
      }
      function I(t) {
        let e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
        return e
          ? {
              base: e[1],
              index: e[2] + e[4],
              array: {
                base: e[1],
                prefix: e[1] + e[2],
                count: e[5] ? parseInt(e[5]) : -1,
              },
            }
          : { base: t };
      }
      var D = new WeakMap(),
        B = new WeakMap(),
        S = new WeakMap(),
        M = new WeakSet();
      class F {
        get types() {
          return JSON.parse((0, n._)(this, D));
        }
        getEncoder(t) {
          let e = (0, n._)(this, S).get(t);
          return (
            e ||
              ((e = (0, o._)(this, M, U).call(this, t)),
              (0, n._)(this, S).set(t, e)),
            e
          );
        }
        encodeType(t) {
          let e = (0, n._)(this, B).get(t);
          return (
            (0, g.en)(e, "unknown type: ".concat(JSON.stringify(t)), "name", t),
            e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, f.w)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          if (x(t)) return r(t, e);
          let n = I(t).array;
          if (n)
            return (
              (0, g.en)(
                -1 === n.count || n.count === e.length,
                "array length mismatch; expected length ".concat(n.count),
                "value",
                e
              ),
              e.map((t) => this._visit(n.prefix, t, r))
            );
          let a = this.types[t];
          if (a)
            return a.reduce((t, n) => {
              let { name: a, type: i } = n;
              return (t[a] = this._visit(i, e[a], r)), t;
            }, {});
          (0, g.en)(!1, "unknown type: ".concat(t), "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new F(t);
        }
        static getPrimaryType(t) {
          return F.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return F.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          let e = [];
          for (let r in t) {
            if (null == t[r]) continue;
            let n = N[r];
            (0, g.en)(
              n,
              "invalid typed-data domain key: ".concat(JSON.stringify(r)),
              "domain",
              t
            ),
              e.push({ name: r, type: n });
          }
          return (
            e.sort((t, e) => R.indexOf(t.name) - R.indexOf(e.name)),
            F.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, d.zo)(["0x1901", F.hashDomain(t), F.from(e).hash(r)]);
        }
        static hash(t, e, r) {
          return (0, f.w)(F.encode(t, e, r));
        }
        static async resolveNames(t, e, r, n) {
          for (let e in (t = Object.assign({}, t))) null == t[e] && delete t[e];
          let a = {};
          t.verifyingContract &&
            !(0, d.A7)(t.verifyingContract, 20) &&
            (a[t.verifyingContract] = "0x");
          let i = F.from(e);
          for (let t in (i.visit(
            r,
            (t, e) => ("address" !== t || (0, d.A7)(e, 20) || (a[e] = "0x"), e)
          ),
          a))
            a[t] = await n(t);
          return (
            t.verifyingContract &&
              a[t.verifyingContract] &&
              (t.verifyingContract = a[t.verifyingContract]),
            (r = i.visit(r, (t, e) => ("address" === t && a[e] ? a[e] : e))),
            { domain: t, value: r }
          );
        }
        static getPayload(t, e, r) {
          F.hashDomain(t);
          let n = {},
            a = [];
          R.forEach((e) => {
            let r = t[e];
            null != r && ((n[e] = C[e](r)), a.push({ name: e, type: N[e] }));
          });
          let i = F.from(e),
            s = Object.assign({}, (e = i.types));
          return (
            (0, g.en)(
              null == s.EIP712Domain,
              "types must not contain EIP712Domain type",
              "types.EIP712Domain",
              e
            ),
            (s.EIP712Domain = a),
            i.encode(r),
            {
              types: s,
              domain: n,
              primaryType: i.primaryType,
              message: i.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/)) return (0, d.Dv)((0, d.Pw)(e));
                if (t.match(/^u?int/)) return (0, p.yT)(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      (0, g.en)(
                        "string" == typeof e,
                        "invalid string",
                        "value",
                        e
                      ),
                      e
                    );
                }
                (0, g.en)(!1, "unsupported type", "type", t);
              }),
            }
          );
        }
        constructor(t) {
          (0, l._)(this, M),
            (0, a._)(this, D, { writable: !0, value: void 0 }),
            (0, a._)(this, B, { writable: !0, value: void 0 }),
            (0, a._)(this, S, { writable: !0, value: void 0 }),
            (0, i._)(this, B, new Map()),
            (0, i._)(this, S, new Map());
          let e = new Map(),
            r = new Map(),
            s = new Map(),
            o = {};
          for (let n in (Object.keys(t).forEach((n) => {
            (o[n] = t[n].map((e) => {
              let { name: r, type: n } = e,
                { base: a, index: i } = I(n);
              return (
                "int" !== a || t.int || (a = "int256"),
                "uint" !== a || t.uint || (a = "uint256"),
                { name: r, type: a + (i || "") }
              );
            })),
              e.set(n, new Set()),
              r.set(n, []),
              s.set(n, new Set());
          }),
          (0, i._)(this, D, JSON.stringify(o)),
          o)) {
            let a = new Set();
            for (let i of o[n]) {
              (0, g.en)(
                !a.has(i.name),
                "duplicate variable name "
                  .concat(JSON.stringify(i.name), " in ")
                  .concat(JSON.stringify(n)),
                "types",
                t
              ),
                a.add(i.name);
              let s = I(i.type).base;
              (0, g.en)(
                s !== n,
                "circular type reference to ".concat(JSON.stringify(s)),
                "types",
                t
              ),
                x(s) ||
                  ((0, g.en)(
                    r.has(s),
                    "unknown type ".concat(JSON.stringify(s)),
                    "types",
                    t
                  ),
                  r.get(s).push(n),
                  e.get(n).add(s));
            }
          }
          let c = Array.from(r.keys()).filter((t) => 0 === r.get(t).length);
          for (let [a, i] of ((0, g.en)(
            0 !== c.length,
            "missing primary type",
            "types",
            t
          ),
          (0, g.en)(
            1 === c.length,
            "ambiguous primary types or unused types: ".concat(
              c.map((t) => JSON.stringify(t)).join(", ")
            ),
            "types",
            t
          ),
          (0, m.h)(this, { primaryType: c[0] }),
          !(function n(a, i) {
            for (let o of ((0, g.en)(
              !i.has(a),
              "circular type reference to ".concat(JSON.stringify(a)),
              "types",
              t
            ),
            i.add(a),
            e.get(a)))
              if (r.has(o)) for (let t of (n(o, i), i)) s.get(t).add(o);
            i.delete(a);
          })(this.primaryType, new Set()),
          s)) {
            let t = Array.from(i);
            t.sort(),
              (0, n._)(this, B).set(
                a,
                O(a, o[a]) + t.map((t) => O(t, o[t])).join("")
              );
          }
        }
      }
      function U(t) {
        {
          let e = x(t);
          if (e) return e;
        }
        let e = I(t).array;
        if (e) {
          let t = e.prefix,
            r = this.getEncoder(t);
          return (a) => {
            (0, g.en)(
              -1 === e.count || e.count === a.length,
              "array length mismatch; expected length ".concat(e.count),
              "value",
              a
            );
            let i = a.map(r);
            return (
              (0, n._)(this, B).has(t) && (i = i.map(f.w)),
              (0, f.w)((0, d.zo)(i))
            );
          };
        }
        let r = this.types[t];
        if (r) {
          let e = (0, w.id)((0, n._)(this, B).get(t));
          return (t) => {
            let a = r.map((e) => {
              let { name: r, type: a } = e,
                i = this.getEncoder(a)(t[r]);
              return (0, n._)(this, B).has(a) ? (0, f.w)(i) : i;
            });
            return a.unshift(e), (0, d.zo)(a);
          };
        }
        (0, g.en)(!1, "unknown type: ".concat(t), "type", t);
      }
      var L = r(31296),
        G = r(45256),
        Q = r(59350),
        H = r(78967),
        W = r(74764),
        j = r(44440);
      function J(t, e) {
        if (t.provider) return t.provider;
        (0, g.hu)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
          operation: e,
        });
      }
      async function V(t, e) {
        let r = (0, j.kK)(e);
        if ((null != r.to && (r.to = (0, u.ru)(r.to, t)), null != r.from)) {
          let e = r.from;
          r.from = Promise.all([t.getAddress(), (0, u.ru)(e, t)]).then((t) => {
            let [e, r] = t;
            return (
              (0, g.en)(
                e.toLowerCase() === r.toLowerCase(),
                "transaction from mismatch",
                "tx.from",
                r
              ),
              e
            );
          });
        } else r.from = t.getAddress();
        return await (0, m.m)(r);
      }
      class K {
        async getNonce(t) {
          return J(this, "getTransactionCount").getTransactionCount(
            await this.getAddress(),
            t
          );
        }
        async populateCall(t) {
          return await V(this, t);
        }
        async populateTransaction(t) {
          let e = J(this, "populateTransaction"),
            r = await V(this, t);
          null == r.nonce && (r.nonce = await this.getNonce("pending")),
            null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
          let n = await this.provider.getNetwork();
          if (null != r.chainId) {
            let e = (0, p.yT)(r.chainId);
            (0, g.en)(
              e === n.chainId,
              "transaction chainId mismatch",
              "tx.chainId",
              t.chainId
            );
          } else r.chainId = n.chainId;
          let a = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
          if (
            (null != r.gasPrice && (2 === r.type || a)
              ? (0, g.en)(
                  !1,
                  "eip-1559 transaction do not support gasPrice",
                  "tx",
                  t
                )
              : (0 === r.type || 1 === r.type) &&
                a &&
                (0, g.en)(
                  !1,
                  "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                  "tx",
                  t
                ),
            (2 === r.type || null == r.type) &&
              null != r.maxFeePerGas &&
              null != r.maxPriorityFeePerGas)
          )
            r.type = 2;
          else if (0 === r.type || 1 === r.type) {
            let t = await e.getFeeData();
            (0, g.hu)(
              null != t.gasPrice,
              "network does not support gasPrice",
              "UNSUPPORTED_OPERATION",
              { operation: "getGasPrice" }
            ),
              null == r.gasPrice && (r.gasPrice = t.gasPrice);
          } else {
            let t = await e.getFeeData();
            if (null == r.type) {
              if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas) {
                if (((r.type = 2), null != r.gasPrice)) {
                  let t = r.gasPrice;
                  delete r.gasPrice,
                    (r.maxFeePerGas = t),
                    (r.maxPriorityFeePerGas = t);
                } else
                  null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                    null == r.maxPriorityFeePerGas &&
                      (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
              } else
                null != t.gasPrice
                  ? ((0, g.hu)(
                      !a,
                      "network does not support EIP-1559",
                      "UNSUPPORTED_OPERATION",
                      { operation: "populateTransaction" }
                    ),
                    null == r.gasPrice && (r.gasPrice = t.gasPrice),
                    (r.type = 0))
                  : (0, g.hu)(
                      !1,
                      "failed to get consistent fee data",
                      "UNSUPPORTED_OPERATION",
                      { operation: "signer.getFeeData" }
                    );
            } else
              (2 === r.type || 3 === r.type) &&
                (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                null == r.maxPriorityFeePerGas &&
                  (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
          }
          return await (0, m.m)(r);
        }
        async estimateGas(t) {
          return J(this, "estimateGas").estimateGas(await this.populateCall(t));
        }
        async call(t) {
          return J(this, "call").call(await this.populateCall(t));
        }
        async resolveName(t) {
          let e = J(this, "resolveName");
          return await e.resolveName(t);
        }
        async sendTransaction(t) {
          let e = J(this, "sendTransaction"),
            r = await this.populateTransaction(t);
          delete r.from;
          let n = W.Y.from(r);
          return await e.broadcastTransaction(await this.signTransaction(n));
        }
        constructor(t) {
          (0, m.h)(this, { provider: t || null });
        }
      }
      var z = r(20475),
        Z = r(49859),
        q = new WeakMap(),
        Y = new WeakMap(),
        X = new WeakMap(),
        $ = new WeakMap(),
        tt = new WeakMap(),
        te = new WeakMap(),
        tr = new WeakSet(),
        tn = new WeakSet();
      class ta {
        _subscribe(t) {
          throw Error("subclasses must override this");
        }
        _emitResults(t, e) {
          throw Error("subclasses must override this");
        }
        _recover(t) {
          throw Error("subclasses must override this");
        }
        start() {
          (0, n._)(this, $) ||
            ((0, i._)(this, $, !0), (0, o._)(this, tr, ti).call(this, -2));
        }
        stop() {
          (0, n._)(this, $) &&
            ((0, i._)(this, $, !1),
            (0, i._)(this, te, !0),
            (0, o._)(this, tn, ts).call(this),
            (0, n._)(this, q).off("block", (0, n._)(this, X)));
        }
        pause(t) {
          t && (0, o._)(this, tn, ts).call(this),
            (0, n._)(this, q).off("block", (0, n._)(this, X));
        }
        resume() {
          this.start();
        }
        constructor(t) {
          (0, l._)(this, tr),
            (0, l._)(this, tn),
            (0, a._)(this, q, { writable: !0, value: void 0 }),
            (0, a._)(this, Y, { writable: !0, value: void 0 }),
            (0, a._)(this, X, { writable: !0, value: void 0 }),
            (0, a._)(this, $, { writable: !0, value: void 0 }),
            (0, a._)(this, tt, { writable: !0, value: void 0 }),
            (0, a._)(this, te, { writable: !0, value: void 0 }),
            (0, i._)(this, q, t),
            (0, i._)(this, Y, null),
            (0, i._)(this, X, (0, o._)(this, tr, ti).bind(this)),
            (0, i._)(this, $, !1),
            (0, i._)(this, tt, null),
            (0, i._)(this, te, !1);
        }
      }
      async function ti(t) {
        try {
          null == (0, n._)(this, Y) &&
            (0, i._)(this, Y, this._subscribe((0, n._)(this, q)));
          let t = null;
          try {
            t = await (0, n._)(this, Y);
          } catch (t) {
            if (
              !(0, g.VZ)(t, "UNSUPPORTED_OPERATION") ||
              "eth_newFilter" !== t.operation
            )
              throw t;
          }
          if (null == t) {
            (0, i._)(this, Y, null),
              (0, n._)(this, q)._recoverSubscriber(
                this,
                this._recover((0, n._)(this, q))
              );
            return;
          }
          let e = await (0, n._)(this, q).getNetwork();
          if (
            ((0, n._)(this, tt) || (0, i._)(this, tt, e),
            (0, n._)(this, tt).chainId !== e.chainId)
          )
            throw Error("chaid changed");
          if ((0, n._)(this, te)) return;
          let r = await (0, n._)(this, q).send("eth_getFilterChanges", [t]);
          await this._emitResults((0, n._)(this, q), r);
        } catch (t) {
          console.log("@TODO", t);
        }
        (0, n._)(this, q).once("block", (0, n._)(this, X));
      }
      function ts() {
        let t = (0, n._)(this, Y);
        t &&
          ((0, i._)(this, Y, null),
          t.then((t) => {
            (0, n._)(this, q).destroyed ||
              (0, n._)(this, q).send("eth_uninstallFilter", [t]);
          }));
      }
      var to = new WeakMap();
      class tl extends ta {
        _recover(t) {
          return new Z.H9(t, (0, n._)(this, to));
        }
        async _subscribe(t) {
          return await t.send("eth_newFilter", [(0, n._)(this, to)]);
        }
        async _emitResults(t, e) {
          for (let r of e)
            t.emit((0, n._)(this, to), t._wrapLog(r, t._network));
        }
        constructor(t, e) {
          super(t),
            (0, a._)(this, to, { writable: !0, value: void 0 }),
            (0, i._)(this, to, JSON.parse(JSON.stringify(e)));
        }
      }
      class tc extends ta {
        async _subscribe(t) {
          return await t.send("eth_newPendingTransactionFilter", []);
        }
        async _emitResults(t, e) {
          for (let r of e) t.emit("pending", r);
        }
      }
      let tu = "bigint,boolean,function,number,string,symbol".split(/,/g);
      function th(t) {
        if (
          null == t ||
          tu.indexOf(typeof t) >= 0 ||
          "function" == typeof t.getAddress
        )
          return t;
        if (Array.isArray(t)) return t.map(th);
        if ("object" == typeof t)
          return Object.keys(t).reduce((e, r) => ((e[r] = t[r]), e), {});
        throw Error(
          "should not happen: ".concat(t, " (").concat(typeof t, ")")
        );
      }
      function tf(t) {
        return t ? t.toLowerCase() : t;
      }
      function td(t) {
        return t && "number" == typeof t.pollingInterval;
      }
      let tp = {
        polling: !1,
        staticNetwork: null,
        batchStallTime: 10,
        batchMaxSize: 1048576,
        batchMaxCount: 100,
        cacheTimeout: 250,
        pollingInterval: 4e3,
      };
      class tg extends K {
        connect(t) {
          (0, g.hu)(
            !1,
            "cannot reconnect JsonRpcSigner",
            "UNSUPPORTED_OPERATION",
            { operation: "signer.connect" }
          );
        }
        async getAddress() {
          return this.address;
        }
        async populateTransaction(t) {
          return await this.populateCall(t);
        }
        async sendUncheckedTransaction(t) {
          let e = th(t),
            r = [];
          if (e.from) {
            let n = e.from;
            r.push(
              (async () => {
                let r = await (0, u.ru)(n, this.provider);
                (0, g.en)(
                  null != r && r.toLowerCase() === this.address.toLowerCase(),
                  "from address mismatch",
                  "transaction",
                  t
                ),
                  (e.from = r);
              })()
            );
          } else e.from = this.address;
          if (
            (null == e.gasLimit &&
              r.push(
                (async () => {
                  e.gasLimit = await this.provider.estimateGas({
                    ...e,
                    from: this.address,
                  });
                })()
              ),
            null != e.to)
          ) {
            let t = e.to;
            r.push(
              (async () => {
                e.to = await (0, u.ru)(t, this.provider);
              })()
            );
          }
          r.length && (await Promise.all(r));
          let n = this.provider.getRpcTransaction(e);
          return this.provider.send("eth_sendTransaction", [n]);
        }
        async sendTransaction(t) {
          let e = await this.provider.getBlockNumber(),
            r = await this.sendUncheckedTransaction(t);
          return await new Promise((t, n) => {
            let a = [1e3, 100],
              i = 0,
              s = async () => {
                try {
                  let n = await this.provider.getTransaction(r);
                  if (null != n) {
                    t(n.replaceableTransaction(e));
                    return;
                  }
                } catch (t) {
                  if (
                    (0, g.VZ)(t, "CANCELLED") ||
                    (0, g.VZ)(t, "BAD_DATA") ||
                    (0, g.VZ)(t, "NETWORK_ERROR")
                  ) {
                    null == t.info && (t.info = {}),
                      (t.info.sendTransactionHash = r),
                      n(t);
                    return;
                  }
                  if (
                    (0, g.VZ)(t, "INVALID_ARGUMENT") &&
                    (i++,
                    null == t.info && (t.info = {}),
                    (t.info.sendTransactionHash = r),
                    i > 10)
                  ) {
                    n(t);
                    return;
                  }
                  this.provider.emit(
                    "error",
                    (0, g.wf)(
                      "failed to fetch transation after sending (will try again)",
                      "UNKNOWN_ERROR",
                      { error: t }
                    )
                  );
                }
                this.provider._setTimeout(() => {
                  s();
                }, a.pop() || 4e3);
              };
            s();
          });
        }
        async signTransaction(t) {
          let e = th(t);
          if (e.from) {
            let r = await (0, u.ru)(e.from, this.provider);
            (0, g.en)(
              null != r && r.toLowerCase() === this.address.toLowerCase(),
              "from address mismatch",
              "transaction",
              t
            ),
              (e.from = r);
          } else e.from = this.address;
          let r = this.provider.getRpcTransaction(e);
          return await this.provider.send("eth_signTransaction", [r]);
        }
        async signMessage(t) {
          let e = "string" == typeof t ? (0, G.Y0)(t) : t;
          return await this.provider.send("personal_sign", [
            (0, d.Dv)(e),
            this.address.toLowerCase(),
          ]);
        }
        async signTypedData(t, e, r) {
          let n = th(r),
            a = await F.resolveNames(t, e, n, async (t) => {
              let e = await (0, u.ru)(t);
              return (
                (0, g.en)(
                  null != e,
                  "TypedData does not support null address",
                  "value",
                  t
                ),
                e
              );
            });
          return await this.provider.send("eth_signTypedData_v4", [
            this.address.toLowerCase(),
            JSON.stringify(F.getPayload(a.domain, e, a.value)),
          ]);
        }
        async unlock(t) {
          return this.provider.send("personal_unlockAccount", [
            this.address.toLowerCase(),
            t,
            null,
          ]);
        }
        async _legacySignMessage(t) {
          let e = "string" == typeof t ? (0, G.Y0)(t) : t;
          return await this.provider.send("eth_sign", [
            this.address.toLowerCase(),
            (0, d.Dv)(e),
          ]);
        }
        constructor(t, e) {
          super(t), (e = (0, h.K)(e)), (0, m.h)(this, { address: e });
        }
      }
      var tm = new WeakMap(),
        tw = new WeakMap(),
        ty = new WeakMap(),
        tA = new WeakMap(),
        tb = new WeakMap(),
        tv = new WeakMap(),
        t_ = new WeakMap(),
        tE = new WeakSet();
      class tk extends H.u {
        _getOption(t) {
          return (0, n._)(this, tm)[t];
        }
        get _network() {
          return (
            (0, g.hu)(
              (0, n._)(this, tv),
              "network is not available yet",
              "NETWORK_ERROR"
            ),
            (0, n._)(this, tv)
          );
        }
        async _perform(t) {
          if ("call" === t.method || "estimateGas" === t.method) {
            let e = t.transaction;
            if (
              e &&
              null != e.type &&
              (0, p.yT)(e.type) &&
              null == e.maxFeePerGas &&
              null == e.maxPriorityFeePerGas
            ) {
              let r = await this.getFeeData();
              null == r.maxFeePerGas &&
                null == r.maxPriorityFeePerGas &&
                (t = Object.assign({}, t, {
                  transaction: Object.assign({}, e, { type: void 0 }),
                }));
            }
          }
          let e = this.getRpcRequest(t);
          return null != e
            ? await this.send(e.method, e.args)
            : super._perform(t);
        }
        async _detectNetwork() {
          let t = this._getOption("staticNetwork");
          if (t) {
            if (!0 !== t) return t;
            if ((0, n._)(this, tv)) return (0, n._)(this, tv);
          }
          return (
            (0, n._)(this, t_) ||
              (this.ready
                ? (0, i._)(
                    this,
                    t_,
                    (async () => {
                      try {
                        let t = z.Z.from(
                          (0, p.yT)(await this.send("eth_chainId", []))
                        );
                        return (0, i._)(this, t_, null), t;
                      } catch (t) {
                        throw ((0, i._)(this, t_, null), t);
                      }
                    })()
                  )
                : (0, i._)(
                    this,
                    t_,
                    (async () => {
                      let t;
                      let e = {
                        id: (0, s._)(this, tw).value++,
                        method: "eth_chainId",
                        params: [],
                        jsonrpc: "2.0",
                      };
                      this.emit("debug", {
                        action: "sendRpcPayload",
                        payload: e,
                      });
                      try {
                        (t = (await this._send(e))[0]),
                          (0, i._)(this, t_, null);
                      } catch (t) {
                        throw (
                          ((0, i._)(this, t_, null),
                          this.emit("debug", {
                            action: "receiveRpcError",
                            error: t,
                          }),
                          t)
                        );
                      }
                      if (
                        (this.emit("debug", {
                          action: "receiveRpcResult",
                          result: t,
                        }),
                        "result" in t)
                      )
                        return z.Z.from((0, p.yT)(t.result));
                      throw this.getRpcError(e, t);
                    })()
                  )),
            await (0, n._)(this, t_)
          );
        }
        _start() {
          null != (0, n._)(this, tb) &&
            null != (0, n._)(this, tb).resolve &&
            ((0, n._)(this, tb).resolve(),
            (0, i._)(this, tb, null),
            (async () => {
              for (; null == (0, n._)(this, tv) && !this.destroyed; )
                try {
                  (0, i._)(this, tv, await this._detectNetwork());
                } catch (t) {
                  if (this.destroyed) break;
                  console.log(
                    "JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"
                  ),
                    this.emit(
                      "error",
                      (0, g.wf)(
                        "failed to bootstrap network detection",
                        "NETWORK_ERROR",
                        {
                          event: "initial-network-discovery",
                          info: { error: t },
                        }
                      )
                    ),
                    await new Promise((t) => {
                      setTimeout(t, 1e3);
                    });
                }
              (0, o._)(this, tE, tP).call(this);
            })());
        }
        async _waitUntilReady() {
          if (null != (0, n._)(this, tb))
            return await (0, n._)(this, tb).promise;
        }
        _getSubscriber(t) {
          return "pending" === t.type
            ? new tc(this)
            : "event" === t.type
            ? this._getOption("polling")
              ? new Z.H9(this, t.filter)
              : new tl(this, t.filter)
            : "orphan" === t.type && "drop-log" === t.filter.orphan
            ? new H.P("orphan")
            : super._getSubscriber(t);
        }
        get ready() {
          return null == (0, n._)(this, tb);
        }
        getRpcTransaction(t) {
          let e = {};
          return (
            [
              "chainId",
              "gasLimit",
              "gasPrice",
              "type",
              "maxFeePerGas",
              "maxPriorityFeePerGas",
              "nonce",
              "value",
            ].forEach((r) => {
              if (null == t[r]) return;
              let n = r;
              "gasLimit" === r && (n = "gas"),
                (e[n] = (0, p.B4)((0, p.yT)(t[r], "tx.".concat(r))));
            }),
            ["from", "to", "data"].forEach((r) => {
              null != t[r] && (e[r] = (0, d.Dv)(t[r]));
            }),
            t.accessList && (e.accessList = (0, L.z)(t.accessList)),
            e
          );
        }
        getRpcRequest(t) {
          switch (t.method) {
            case "chainId":
              return { method: "eth_chainId", args: [] };
            case "getBlockNumber":
              return { method: "eth_blockNumber", args: [] };
            case "getGasPrice":
              return { method: "eth_gasPrice", args: [] };
            case "getPriorityFee":
              return { method: "eth_maxPriorityFeePerGas", args: [] };
            case "getBalance":
              return {
                method: "eth_getBalance",
                args: [tf(t.address), t.blockTag],
              };
            case "getTransactionCount":
              return {
                method: "eth_getTransactionCount",
                args: [tf(t.address), t.blockTag],
              };
            case "getCode":
              return {
                method: "eth_getCode",
                args: [tf(t.address), t.blockTag],
              };
            case "getStorage":
              return {
                method: "eth_getStorageAt",
                args: [
                  tf(t.address),
                  "0x" + t.position.toString(16),
                  t.blockTag,
                ],
              };
            case "broadcastTransaction":
              return {
                method: "eth_sendRawTransaction",
                args: [t.signedTransaction],
              };
            case "getBlock":
              if ("blockTag" in t)
                return {
                  method: "eth_getBlockByNumber",
                  args: [t.blockTag, !!t.includeTransactions],
                };
              if ("blockHash" in t)
                return {
                  method: "eth_getBlockByHash",
                  args: [t.blockHash, !!t.includeTransactions],
                };
              break;
            case "getTransaction":
              return { method: "eth_getTransactionByHash", args: [t.hash] };
            case "getTransactionReceipt":
              return { method: "eth_getTransactionReceipt", args: [t.hash] };
            case "call":
              return {
                method: "eth_call",
                args: [this.getRpcTransaction(t.transaction), t.blockTag],
              };
            case "estimateGas":
              return {
                method: "eth_estimateGas",
                args: [this.getRpcTransaction(t.transaction)],
              };
            case "getLogs":
              return (
                t.filter &&
                  null != t.filter.address &&
                  (Array.isArray(t.filter.address)
                    ? (t.filter.address = t.filter.address.map(tf))
                    : (t.filter.address = tf(t.filter.address))),
                { method: "eth_getLogs", args: [t.filter] }
              );
          }
          return null;
        }
        getRpcError(t, e) {
          let { method: r } = t,
            { error: n } = e;
          if ("eth_estimateGas" === r && n.message) {
            let e = n.message;
            if (!e.match(/revert/i) && e.match(/insufficient funds/i))
              return (0, g.wf)("insufficient funds", "INSUFFICIENT_FUNDS", {
                transaction: t.params[0],
                info: { payload: t, error: n },
              });
          }
          if ("eth_call" === r || "eth_estimateGas" === r) {
            let e = (function t(e) {
                if (null == e) return null;
                if (
                  "string" == typeof e.message &&
                  e.message.match(/revert/i) &&
                  (0, d.A7)(e.data)
                )
                  return { message: e.message, data: e.data };
                if ("object" == typeof e) {
                  for (let r in e) {
                    let n = t(e[r]);
                    if (n) return n;
                  }
                  return null;
                }
                if ("string" == typeof e)
                  try {
                    return t(JSON.parse(e));
                  } catch (t) {}
                return null;
              })(n),
              a = c.R.getBuiltinCallException(
                "eth_call" === r ? "call" : "estimateGas",
                t.params[0],
                e ? e.data : null
              );
            return (a.info = { error: n, payload: t }), a;
          }
          let a = JSON.stringify(
            (function (t) {
              let e = [];
              return (
                !(function t(e, r) {
                  if (null != e) {
                    if (
                      ("string" == typeof e.message && r.push(e.message),
                      "object" == typeof e)
                    )
                      for (let n in e) t(e[n], r);
                    if ("string" == typeof e)
                      try {
                        return t(JSON.parse(e), r);
                      } catch (t) {}
                  }
                })(t, e),
                e
              );
            })(n)
          );
          if (
            "string" == typeof n.message &&
            n.message.match(/user denied|ethers-user-denied/i)
          )
            return (0, g.wf)("user rejected action", "ACTION_REJECTED", {
              action:
                {
                  eth_sign: "signMessage",
                  personal_sign: "signMessage",
                  eth_signTypedData_v4: "signTypedData",
                  eth_signTransaction: "signTransaction",
                  eth_sendTransaction: "sendTransaction",
                  eth_requestAccounts: "requestAccess",
                  wallet_requestAccounts: "requestAccess",
                }[r] || "unknown",
              reason: "rejected",
              info: { payload: t, error: n },
            });
          if ("eth_sendRawTransaction" === r || "eth_sendTransaction" === r) {
            let e = t.params[0];
            if (a.match(/insufficient funds|base fee exceeds gas limit/i))
              return (0, g.wf)(
                "insufficient funds for intrinsic transaction cost",
                "INSUFFICIENT_FUNDS",
                { transaction: e, info: { error: n } }
              );
            if (a.match(/nonce/i) && a.match(/too low/i))
              return (0, g.wf)("nonce has already been used", "NONCE_EXPIRED", {
                transaction: e,
                info: { error: n },
              });
            if (a.match(/replacement transaction/i) && a.match(/underpriced/i))
              return (0, g.wf)(
                "replacement fee too low",
                "REPLACEMENT_UNDERPRICED",
                { transaction: e, info: { error: n } }
              );
            if (a.match(/only replay-protected/i))
              return (0, g.wf)(
                "legacy pre-eip-155 transactions not supported",
                "UNSUPPORTED_OPERATION",
                { operation: r, info: { transaction: e, info: { error: n } } }
              );
          }
          let i = !!a.match(/the method .* does not exist/i);
          return (!i &&
            n &&
            n.details &&
            n.details.startsWith("Unauthorized method:") &&
            (i = !0),
          i)
            ? (0, g.wf)("unsupported operation", "UNSUPPORTED_OPERATION", {
                operation: t.method,
                info: { error: n, payload: t },
              })
            : (0, g.wf)("could not coalesce error", "UNKNOWN_ERROR", {
                error: n,
                payload: t,
              });
        }
        send(t, e) {
          if (this.destroyed)
            return Promise.reject(
              (0, g.wf)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: t }
              )
            );
          let r = (0, s._)(this, tw).value++,
            a = new Promise((a, i) => {
              (0, n._)(this, ty).push({
                resolve: a,
                reject: i,
                payload: { method: t, params: e, id: r, jsonrpc: "2.0" },
              });
            });
          return (0, o._)(this, tE, tP).call(this), a;
        }
        async getSigner(t) {
          null == t && (t = 0);
          let e = this.send("eth_accounts", []);
          if ("number" == typeof t) {
            let r = await e;
            if (t >= r.length) throw Error("no such account");
            return new tg(this, r[t]);
          }
          let { accounts: r } = await (0, m.m)({
            network: this.getNetwork(),
            accounts: e,
          });
          for (let e of ((t = (0, h.K)(t)), r))
            if ((0, h.K)(e) === t) return new tg(this, t);
          throw Error("invalid account");
        }
        async listAccounts() {
          return (await this.send("eth_accounts", [])).map(
            (t) => new tg(this, t)
          );
        }
        destroy() {
          for (let { payload: t, reject: e } of ((0, n._)(this, tA) &&
            (clearTimeout((0, n._)(this, tA)), (0, i._)(this, tA, null)),
          (0, n._)(this, ty)))
            e(
              (0, g.wf)(
                "provider destroyed; cancelled request",
                "UNSUPPORTED_OPERATION",
                { operation: t.method }
              )
            );
          (0, i._)(this, ty, []), super.destroy();
        }
        constructor(t, e) {
          super(t, e),
            (0, l._)(this, tE),
            (0, a._)(this, tm, { writable: !0, value: void 0 }),
            (0, a._)(this, tw, { writable: !0, value: void 0 }),
            (0, a._)(this, ty, { writable: !0, value: void 0 }),
            (0, a._)(this, tA, { writable: !0, value: void 0 }),
            (0, a._)(this, tb, { writable: !0, value: void 0 }),
            (0, a._)(this, tv, { writable: !0, value: void 0 }),
            (0, a._)(this, t_, { writable: !0, value: void 0 }),
            (0, i._)(this, tw, 1),
            (0, i._)(this, tm, Object.assign({}, tp, e || {})),
            (0, i._)(this, ty, []),
            (0, i._)(this, tA, null),
            (0, i._)(this, tv, null),
            (0, i._)(this, t_, null);
          {
            let t = null,
              e = new Promise((e) => {
                t = e;
              });
            (0, i._)(this, tb, { promise: e, resolve: t });
          }
          let r = this._getOption("staticNetwork");
          "boolean" == typeof r
            ? ((0, g.en)(
                !r || "any" !== t,
                "staticNetwork cannot be used on special network 'any'",
                "options",
                e
              ),
              r && null != t && (0, i._)(this, tv, z.Z.from(t)))
            : r &&
              ((0, g.en)(
                null == t || r.matches(t),
                "staticNetwork MUST match network object",
                "options",
                e
              ),
              (0, i._)(this, tv, r));
        }
      }
      function tP() {
        if ((0, n._)(this, tA)) return;
        let t =
          1 === this._getOption("batchMaxCount")
            ? 0
            : this._getOption("batchStallTime");
        (0, i._)(
          this,
          tA,
          setTimeout(() => {
            (0, i._)(this, tA, null);
            let t = (0, n._)(this, ty);
            for ((0, i._)(this, ty, []); t.length; ) {
              let e = [t.shift()];
              for (
                ;
                t.length && e.length !== (0, n._)(this, tm).batchMaxCount;

              )
                if (
                  (e.push(t.shift()),
                  JSON.stringify(e.map((t) => t.payload)).length >
                    (0, n._)(this, tm).batchMaxSize)
                ) {
                  t.unshift(e.pop());
                  break;
                }
              (async () => {
                let t = 1 === e.length ? e[0].payload : e.map((t) => t.payload);
                this.emit("debug", { action: "sendRpcPayload", payload: t });
                try {
                  let r = await this._send(t);
                  for (let { resolve: t, reject: n, payload: a } of (this.emit(
                    "debug",
                    { action: "receiveRpcResult", result: r }
                  ),
                  e)) {
                    if (this.destroyed) {
                      n(
                        (0, g.wf)(
                          "provider destroyed; cancelled request",
                          "UNSUPPORTED_OPERATION",
                          { operation: a.method }
                        )
                      );
                      continue;
                    }
                    let e = r.filter((t) => t.id === a.id)[0];
                    if (null == e) {
                      let t = (0, g.wf)(
                        "missing response for request",
                        "BAD_DATA",
                        { value: r, info: { payload: a } }
                      );
                      this.emit("error", t), n(t);
                      continue;
                    }
                    if ("error" in e) {
                      n(this.getRpcError(a, e));
                      continue;
                    }
                    t(e.result);
                  }
                } catch (t) {
                  for (let { reject: r } of (this.emit("debug", {
                    action: "receiveRpcError",
                    error: t,
                  }),
                  e))
                    r(t);
                }
              })();
            }
          }, t)
        );
      }
      var tN = new WeakMap();
      class tR extends tk {
        _getSubscriber(t) {
          let e = super._getSubscriber(t);
          return td(e) && (e.pollingInterval = (0, n._)(this, tN)), e;
        }
        get pollingInterval() {
          return (0, n._)(this, tN);
        }
        set pollingInterval(t) {
          if (!Number.isInteger(t) || t < 0) throw Error("invalid interval");
          (0, i._)(this, tN, t),
            this._forEachSubscriber((t) => {
              td(t) && (t.pollingInterval = (0, n._)(this, tN));
            });
        }
        constructor(t, e) {
          super(t, e), (0, a._)(this, tN, { writable: !0, value: void 0 });
          let r = this._getOption("pollingInterval");
          null == r && (r = tp.pollingInterval), (0, i._)(this, tN, r);
        }
      }
      var tT = new WeakMap();
      class tC extends tR {
        _getConnection() {
          return (0, n._)(this, tT).clone();
        }
        async send(t, e) {
          return await this._start(), await super.send(t, e);
        }
        async _send(t) {
          let e = this._getConnection();
          (e.body = JSON.stringify(t)),
            e.setHeader("content-type", "application/json");
          let r = await e.send();
          r.assertOk();
          let n = r.bodyJson;
          return Array.isArray(n) || (n = [n]), n;
        }
        constructor(t, e, r) {
          null == t && (t = "http://localhost:8545"),
            super(e, r),
            (0, a._)(this, tT, { writable: !0, value: void 0 }),
            "string" == typeof t
              ? (0, i._)(this, tT, new Q.gd(t))
              : (0, i._)(this, tT, t.clone());
        }
      }
    },
    44440: function (t, e, r) {
      r.d(e, {
        IX: function () {
          return E;
        },
        Mw: function () {
          return P;
        },
        Zb: function () {
          return A;
        },
        gO: function () {
          return y;
        },
        jW: function () {
          return p;
        },
        kK: function () {
          return g;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(63718),
        o = r(22110),
        l = r(14755),
        c = r(25454),
        u = r(31296);
      let h = BigInt(0);
      function f(t) {
        return null == t ? null : t;
      }
      function d(t) {
        return null == t ? null : t.toString();
      }
      class p {
        toJSON() {
          let { gasPrice: t, maxFeePerGas: e, maxPriorityFeePerGas: r } = this;
          return {
            _type: "FeeData",
            gasPrice: d(t),
            maxFeePerGas: d(e),
            maxPriorityFeePerGas: d(r),
          };
        }
        constructor(t, e, r) {
          (0, s.h)(this, {
            gasPrice: f(t),
            maxFeePerGas: f(e),
            maxPriorityFeePerGas: f(r),
          });
        }
      }
      function g(t) {
        let e = {};
        for (let r of (t.to && (e.to = t.to),
        t.from && (e.from = t.from),
        t.data && (e.data = (0, o.Dv)(t.data)),
        "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(
          /,/
        )))
          r in t &&
            null != t[r] &&
            (e[r] = (0, l.yT)(t[r], "request.".concat(r)));
        for (let r of "type,nonce".split(/,/))
          r in t &&
            null != t[r] &&
            (e[r] = (0, l.Dx)(t[r], "request.".concat(r)));
        return (
          t.accessList && (e.accessList = (0, u.z)(t.accessList)),
          "blockTag" in t && (e.blockTag = t.blockTag),
          "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead),
          "customData" in t && (e.customData = t.customData),
          "blobVersionedHashes" in t &&
            t.blobVersionedHashes &&
            (e.blobVersionedHashes = t.blobVersionedHashes.slice()),
          "kzg" in t && (e.kzg = t.kzg),
          "blobs" in t &&
            t.blobs &&
            (e.blobs = t.blobs.map((t) =>
              (0, o.Zq)(t) ? (0, o.Dv)(t) : Object.assign({}, t)
            )),
          e
        );
      }
      var m = new WeakMap();
      let w = Symbol.iterator;
      class y {
        get transactions() {
          return (0, n._)(this, m).map((t) =>
            "string" == typeof t ? t : t.hash
          );
        }
        get prefetchedTransactions() {
          let t = (0, n._)(this, m).slice();
          return 0 === t.length
            ? []
            : ((0, c.hu)(
                "object" == typeof t[0],
                "transactions were not prefetched with block request",
                "UNSUPPORTED_OPERATION",
                { operation: "transactionResponses()" }
              ),
              t);
        }
        toJSON() {
          let {
            baseFeePerGas: t,
            difficulty: e,
            extraData: r,
            gasLimit: n,
            gasUsed: a,
            hash: i,
            miner: s,
            prevRandao: o,
            nonce: l,
            number: c,
            parentHash: u,
            parentBeaconBlockRoot: h,
            stateRoot: f,
            receiptsRoot: p,
            timestamp: g,
            transactions: m,
          } = this;
          return {
            _type: "Block",
            baseFeePerGas: d(t),
            difficulty: d(e),
            extraData: r,
            gasLimit: d(n),
            gasUsed: d(a),
            blobGasUsed: d(this.blobGasUsed),
            excessBlobGas: d(this.excessBlobGas),
            hash: i,
            miner: s,
            prevRandao: o,
            nonce: l,
            number: c,
            parentHash: u,
            timestamp: g,
            parentBeaconBlockRoot: h,
            stateRoot: f,
            receiptsRoot: p,
            transactions: m,
          };
        }
        [w]() {
          let t = 0,
            e = this.transactions;
          return {
            next: () =>
              t < this.length
                ? { value: e[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get length() {
          return (0, n._)(this, m).length;
        }
        get date() {
          return null == this.timestamp ? null : new Date(1e3 * this.timestamp);
        }
        async getTransaction(t) {
          let e;
          if ("number" == typeof t) e = (0, n._)(this, m)[t];
          else {
            let r = t.toLowerCase();
            for (let t of (0, n._)(this, m)) {
              if ("string" == typeof t) {
                if (t !== r) continue;
                e = t;
                break;
              }
              if (t.hash !== r) {
                e = t;
                break;
              }
            }
          }
          if (null == e) throw Error("no such tx");
          return "string" == typeof e
            ? await this.provider.getTransaction(e)
            : e;
        }
        getPrefetchedTransaction(t) {
          let e = this.prefetchedTransactions;
          if ("number" == typeof t) return e[t];
          for (let r of ((t = t.toLowerCase()), e)) if (r.hash === t) return r;
          (0, c.en)(!1, "no matching transaction", "indexOrHash", t);
        }
        isMined() {
          return !!this.hash;
        }
        isLondon() {
          return !!this.baseFeePerGas;
        }
        orphanedEvent() {
          if (!this.isMined()) throw Error("");
          return { orphan: "drop-block", hash: this.hash, number: this.number };
        }
        constructor(t, e) {
          (0, a._)(this, m, { writable: !0, value: void 0 }),
            (0, i._)(
              this,
              m,
              t.transactions.map((t) =>
                "string" != typeof t ? new P(t, e) : t
              )
            ),
            (0, s.h)(this, {
              provider: e,
              hash: f(t.hash),
              number: t.number,
              timestamp: t.timestamp,
              parentHash: t.parentHash,
              parentBeaconBlockRoot: t.parentBeaconBlockRoot,
              nonce: t.nonce,
              difficulty: t.difficulty,
              gasLimit: t.gasLimit,
              gasUsed: t.gasUsed,
              blobGasUsed: t.blobGasUsed,
              excessBlobGas: t.excessBlobGas,
              miner: t.miner,
              prevRandao: f(t.prevRandao),
              extraData: t.extraData,
              baseFeePerGas: f(t.baseFeePerGas),
              stateRoot: t.stateRoot,
              receiptsRoot: t.receiptsRoot,
            });
        }
      }
      class A {
        toJSON() {
          let {
            address: t,
            blockHash: e,
            blockNumber: r,
            data: n,
            index: a,
            removed: i,
            topics: s,
            transactionHash: o,
            transactionIndex: l,
          } = this;
          return {
            _type: "log",
            address: t,
            blockHash: e,
            blockNumber: r,
            data: n,
            index: a,
            removed: i,
            topics: s,
            transactionHash: o,
            transactionIndex: l,
          };
        }
        async getBlock() {
          let t = await this.provider.getBlock(this.blockHash);
          return (
            (0, c.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransaction() {
          let t = await this.provider.getTransaction(this.transactionHash);
          return (
            (0, c.hu)(!!t, "failed to find transaction", "UNKNOWN_ERROR", {}), t
          );
        }
        async getTransactionReceipt() {
          let t = await this.provider.getTransactionReceipt(
            this.transactionHash
          );
          return (
            (0, c.hu)(
              !!t,
              "failed to find transaction receipt",
              "UNKNOWN_ERROR",
              {}
            ),
            t
          );
        }
        removedEvent() {
          return {
            orphan: "drop-log",
            log: {
              transactionHash: this.transactionHash,
              blockHash: this.blockHash,
              blockNumber: this.blockNumber,
              address: this.address,
              data: this.data,
              topics: Object.freeze(this.topics.slice()),
              index: this.index,
            },
          };
        }
        constructor(t, e) {
          this.provider = e;
          let r = Object.freeze(t.topics.slice());
          (0, s.h)(this, {
            transactionHash: t.transactionHash,
            blockHash: t.blockHash,
            blockNumber: t.blockNumber,
            removed: t.removed,
            address: t.address,
            data: t.data,
            topics: r,
            index: t.index,
            transactionIndex: t.transactionIndex,
          });
        }
      }
      var b = new WeakMap();
      let _ = Symbol.iterator;
      class E {
        get logs() {
          return (0, n._)(this, b);
        }
        toJSON() {
          let {
            to: t,
            from: e,
            contractAddress: r,
            hash: n,
            index: a,
            blockHash: i,
            blockNumber: s,
            logsBloom: o,
            logs: l,
            status: c,
            root: u,
          } = this;
          return {
            _type: "TransactionReceipt",
            blockHash: i,
            blockNumber: s,
            contractAddress: r,
            cumulativeGasUsed: d(this.cumulativeGasUsed),
            from: e,
            gasPrice: d(this.gasPrice),
            blobGasUsed: d(this.blobGasUsed),
            blobGasPrice: d(this.blobGasPrice),
            gasUsed: d(this.gasUsed),
            hash: n,
            index: a,
            logs: l,
            logsBloom: o,
            root: u,
            status: c,
            to: t,
          };
        }
        get length() {
          return this.logs.length;
        }
        [_]() {
          let t = 0;
          return {
            next: () =>
              t < this.length
                ? { value: this.logs[t++], done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        get fee() {
          return this.gasUsed * this.gasPrice;
        }
        async getBlock() {
          let t = await this.provider.getBlock(this.blockHash);
          if (null == t) throw Error("TODO");
          return t;
        }
        async getTransaction() {
          let t = await this.provider.getTransaction(this.hash);
          if (null == t) throw Error("TODO");
          return t;
        }
        async getResult() {
          return await this.provider.getTransactionResult(this.hash);
        }
        async confirmations() {
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        removedEvent() {
          return R(this);
        }
        reorderedEvent(t) {
          return (
            (0, c.hu)(
              !t || t.isMined(),
              "unmined 'other' transction cannot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "reorderedEvent(other)" }
            ),
            N(this, t)
          );
        }
        constructor(t, e) {
          (0, a._)(this, b, { writable: !0, value: void 0 }),
            (0, i._)(this, b, Object.freeze(t.logs.map((t) => new A(t, e))));
          let r = h;
          null != t.effectiveGasPrice
            ? (r = t.effectiveGasPrice)
            : null != t.gasPrice && (r = t.gasPrice),
            (0, s.h)(this, {
              provider: e,
              to: t.to,
              from: t.from,
              contractAddress: t.contractAddress,
              hash: t.hash,
              index: t.index,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              logsBloom: t.logsBloom,
              gasUsed: t.gasUsed,
              cumulativeGasUsed: t.cumulativeGasUsed,
              blobGasUsed: t.blobGasUsed,
              gasPrice: r,
              blobGasPrice: t.blobGasPrice,
              type: t.type,
              status: t.status,
              root: t.root,
            });
        }
      }
      var k = new WeakMap();
      class P {
        toJSON() {
          let {
            blockNumber: t,
            blockHash: e,
            index: r,
            hash: n,
            type: a,
            to: i,
            from: s,
            nonce: o,
            data: l,
            signature: c,
            accessList: u,
            blobVersionedHashes: h,
          } = this;
          return {
            _type: "TransactionResponse",
            accessList: u,
            blockNumber: t,
            blockHash: e,
            blobVersionedHashes: h,
            chainId: d(this.chainId),
            data: l,
            from: s,
            gasLimit: d(this.gasLimit),
            gasPrice: d(this.gasPrice),
            hash: n,
            maxFeePerGas: d(this.maxFeePerGas),
            maxPriorityFeePerGas: d(this.maxPriorityFeePerGas),
            maxFeePerBlobGas: d(this.maxFeePerBlobGas),
            nonce: o,
            signature: c,
            to: i,
            index: r,
            type: a,
            value: d(this.value),
          };
        }
        async getBlock() {
          let t = this.blockNumber;
          if (null == t) {
            let e = await this.getTransaction();
            e && (t = e.blockNumber);
          }
          if (null == t) return null;
          let e = this.provider.getBlock(t);
          if (null == e) throw Error("TODO");
          return e;
        }
        async getTransaction() {
          return this.provider.getTransaction(this.hash);
        }
        async confirmations() {
          if (null == this.blockNumber) {
            let { tx: t, blockNumber: e } = await (0, s.m)({
              tx: this.getTransaction(),
              blockNumber: this.provider.getBlockNumber(),
            });
            return null == t || null == t.blockNumber
              ? 0
              : e - t.blockNumber + 1;
          }
          return (await this.provider.getBlockNumber()) - this.blockNumber + 1;
        }
        async wait(t, e) {
          let r = null == t ? 1 : t,
            a = null == e ? 0 : e,
            i = (0, n._)(this, k),
            o = -1,
            l = -1 === i,
            u = async () => {
              if (l) return null;
              let { blockNumber: t, nonce: e } = await (0, s.m)({
                blockNumber: this.provider.getBlockNumber(),
                nonce: this.provider.getTransactionCount(this.from),
              });
              if (e < this.nonce) {
                i = t;
                return;
              }
              if (l) return null;
              let a = await this.getTransaction();
              if (!a || null == a.blockNumber)
                for (
                  -1 === o &&
                  (o = i - 3) < (0, n._)(this, k) &&
                  (o = (0, n._)(this, k));
                  o <= t;

                ) {
                  if (l) return null;
                  let e = await this.provider.getBlock(o, !0);
                  if (null == e) break;
                  for (let t of e) if (t === this.hash) return;
                  for (let n = 0; n < e.length; n++) {
                    let a = await e.getTransaction(n);
                    if (a.from === this.from && a.nonce === this.nonce) {
                      if (l) return null;
                      let e = await this.provider.getTransactionReceipt(a.hash);
                      if (null == e || t - e.blockNumber + 1 < r) return;
                      let n = "replaced";
                      a.data === this.data &&
                      a.to === this.to &&
                      a.value === this.value
                        ? (n = "repriced")
                        : "0x" === a.data &&
                          a.from === a.to &&
                          a.value === h &&
                          (n = "cancelled"),
                        (0, c.hu)(
                          !1,
                          "transaction was replaced",
                          "TRANSACTION_REPLACED",
                          {
                            cancelled: "replaced" === n || "cancelled" === n,
                            reason: n,
                            replacement: a.replaceableTransaction(i),
                            hash: a.hash,
                            receipt: e,
                          }
                        );
                    }
                  }
                  o++;
                }
            },
            f = (t) => {
              if (null == t || 0 !== t.status) return t;
              (0, c.hu)(
                !1,
                "transaction execution reverted",
                "CALL_EXCEPTION",
                {
                  action: "sendTransaction",
                  data: null,
                  reason: null,
                  invocation: null,
                  revert: null,
                  transaction: { to: t.to, from: t.from, data: "" },
                  receipt: t,
                }
              );
            },
            d = await this.provider.getTransactionReceipt(this.hash);
          if (0 === r) return f(d);
          if (d) {
            if ((await d.confirmations()) >= r) return f(d);
          } else if ((await u(), 0 === r)) return null;
          let p = new Promise((t, e) => {
            let n = [],
              s = () => {
                n.forEach((t) => t());
              };
            if (
              (n.push(() => {
                l = !0;
              }),
              a > 0)
            ) {
              let t = setTimeout(() => {
                s(), e((0, c.wf)("wait for transaction timeout", "TIMEOUT"));
              }, a);
              n.push(() => {
                clearTimeout(t);
              });
            }
            let o = async (n) => {
              if ((await n.confirmations()) >= r) {
                s();
                try {
                  t(f(n));
                } catch (t) {
                  e(t);
                }
              }
            };
            if (
              (n.push(() => {
                this.provider.off(this.hash, o);
              }),
              this.provider.on(this.hash, o),
              i >= 0)
            ) {
              let t = async () => {
                try {
                  await u();
                } catch (t) {
                  if ((0, c.VZ)(t, "TRANSACTION_REPLACED")) {
                    s(), e(t);
                    return;
                  }
                }
                l || this.provider.once("block", t);
              };
              n.push(() => {
                this.provider.off("block", t);
              }),
                this.provider.once("block", t);
            }
          });
          return await p;
        }
        isMined() {
          return null != this.blockHash;
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        removedEvent() {
          return (
            (0, c.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            R(this)
          );
        }
        reorderedEvent(t) {
          return (
            (0, c.hu)(
              this.isMined(),
              "unmined transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            (0, c.hu)(
              !t || t.isMined(),
              "unmined 'other' transaction canot be orphaned",
              "UNSUPPORTED_OPERATION",
              { operation: "removeEvent()" }
            ),
            N(this, t)
          );
        }
        replaceableTransaction(t) {
          (0, c.en)(
            Number.isInteger(t) && t >= 0,
            "invalid startBlock",
            "startBlock",
            t
          );
          let e = new P(this, this.provider);
          return (0, i._)(e, k, t), e;
        }
        constructor(t, e) {
          (0, a._)(this, k, { writable: !0, value: void 0 }),
            (this.provider = e),
            (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
            (this.blockHash = null != t.blockHash ? t.blockHash : null),
            (this.hash = t.hash),
            (this.index = t.index),
            (this.type = t.type),
            (this.from = t.from),
            (this.to = t.to || null),
            (this.gasLimit = t.gasLimit),
            (this.nonce = t.nonce),
            (this.data = t.data),
            (this.value = t.value),
            (this.gasPrice = t.gasPrice),
            (this.maxPriorityFeePerGas =
              null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
            (this.maxFeePerGas =
              null != t.maxFeePerGas ? t.maxFeePerGas : null),
            (this.maxFeePerBlobGas =
              null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null),
            (this.chainId = t.chainId),
            (this.signature = t.signature),
            (this.accessList = null != t.accessList ? t.accessList : null),
            (this.blobVersionedHashes =
              null != t.blobVersionedHashes ? t.blobVersionedHashes : null),
            (0, i._)(this, k, -1);
        }
      }
      function N(t, e) {
        return { orphan: "reorder-transaction", tx: t, other: e };
      }
      function R(t) {
        return { orphan: "drop-transaction", tx: t };
      }
    },
    49859: function (t, e, r) {
      r.d(e, {
        H9: function () {
          return B;
        },
        tR: function () {
          return p;
        },
        ub: function () {
          return E;
        },
        wF: function () {
          return P;
        },
        yq: function () {
          return R;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(8730),
        o = r(36284);
      function l(t) {
        return JSON.parse(JSON.stringify(t));
      }
      var c = new WeakMap(),
        u = new WeakMap(),
        h = new WeakMap(),
        f = new WeakMap(),
        d = new WeakSet();
      class p {
        get pollingInterval() {
          return (0, n._)(this, h);
        }
        set pollingInterval(t) {
          (0, i._)(this, h, t);
        }
        start() {
          (0, n._)(this, u) ||
            ((0, i._)(
              this,
              u,
              (0, n._)(this, c)._setTimeout(
                (0, s._)(this, d, g).bind(this),
                (0, n._)(this, h)
              )
            ),
            (0, s._)(this, d, g).call(this));
        }
        stop() {
          (0, n._)(this, u) &&
            ((0, n._)(this, c)._clearTimeout((0, n._)(this, u)),
            (0, i._)(this, u, null));
        }
        pause(t) {
          this.stop(), t && (0, i._)(this, f, -2);
        }
        resume() {
          this.start();
        }
        constructor(t) {
          (0, o._)(this, d),
            (0, a._)(this, c, { writable: !0, value: void 0 }),
            (0, a._)(this, u, { writable: !0, value: void 0 }),
            (0, a._)(this, h, { writable: !0, value: void 0 }),
            (0, a._)(this, f, { writable: !0, value: void 0 }),
            (0, i._)(this, c, t),
            (0, i._)(this, u, null),
            (0, i._)(this, h, 4e3),
            (0, i._)(this, f, -2);
        }
      }
      async function g() {
        try {
          let t = await (0, n._)(this, c).getBlockNumber();
          if (-2 === (0, n._)(this, f)) {
            (0, i._)(this, f, t);
            return;
          }
          if (t !== (0, n._)(this, f)) {
            for (let e = (0, n._)(this, f) + 1; e <= t; e++) {
              if (null == (0, n._)(this, u)) return;
              await (0, n._)(this, c).emit("block", e);
            }
            (0, i._)(this, f, t);
          }
        } catch (t) {}
        null != (0, n._)(this, u) &&
          (0, i._)(
            this,
            u,
            (0, n._)(this, c)._setTimeout(
              (0, s._)(this, d, g).bind(this),
              (0, n._)(this, h)
            )
          );
      }
      var m = new WeakMap(),
        w = new WeakMap(),
        y = new WeakMap();
      class A {
        async _poll(t, e) {
          throw Error("sub-classes must override this");
        }
        start() {
          (0, n._)(this, y) ||
            ((0, i._)(this, y, !0),
            (0, n._)(this, w).call(this, -2),
            (0, n._)(this, m).on("block", (0, n._)(this, w)));
        }
        stop() {
          (0, n._)(this, y) &&
            ((0, i._)(this, y, !1),
            (0, n._)(this, m).off("block", (0, n._)(this, w)));
        }
        pause(t) {
          this.stop();
        }
        resume() {
          this.start();
        }
        constructor(t) {
          (0, a._)(this, m, { writable: !0, value: void 0 }),
            (0, a._)(this, w, { writable: !0, value: void 0 }),
            (0, a._)(this, y, { writable: !0, value: void 0 }),
            (0, i._)(this, m, t),
            (0, i._)(this, y, !1),
            (0, i._)(this, w, (t) => {
              this._poll(t, (0, n._)(this, m));
            });
        }
      }
      var b = new WeakMap(),
        _ = new WeakMap();
      class E extends A {
        pause(t) {
          t && (0, i._)(this, _, -2), super.pause(t);
        }
        async _poll(t, e) {
          let r = await e.getBlock((0, n._)(this, b));
          null != r &&
            (-2 === (0, n._)(this, _)
              ? (0, i._)(this, _, r.number)
              : r.number > (0, n._)(this, _) &&
                (e.emit((0, n._)(this, b), r.number),
                (0, i._)(this, _, r.number)));
        }
        constructor(t, e) {
          super(t),
            (0, a._)(this, b, { writable: !0, value: void 0 }),
            (0, a._)(this, _, { writable: !0, value: void 0 }),
            (0, i._)(this, b, e),
            (0, i._)(this, _, -2);
        }
      }
      var k = new WeakMap();
      class P extends A {
        async _poll(t, e) {
          throw Error("@TODO");
        }
        constructor(t, e) {
          super(t),
            (0, a._)(this, k, { writable: !0, value: void 0 }),
            (0, i._)(this, k, l(e));
        }
      }
      var N = new WeakMap();
      class R extends A {
        async _poll(t, e) {
          let r = await e.getTransactionReceipt((0, n._)(this, N));
          r && e.emit((0, n._)(this, N), r);
        }
        constructor(t, e) {
          super(t),
            (0, a._)(this, N, { writable: !0, value: void 0 }),
            (0, i._)(this, N, e);
        }
      }
      var T = new WeakMap(),
        C = new WeakMap(),
        x = new WeakMap(),
        O = new WeakMap(),
        I = new WeakMap(),
        D = new WeakSet();
      class B {
        start() {
          (0, n._)(this, O) ||
            ((0, i._)(this, O, !0),
            -2 === (0, n._)(this, I) &&
              (0, n._)(this, T)
                .getBlockNumber()
                .then((t) => {
                  (0, i._)(this, I, t);
                }),
            (0, n._)(this, T).on("block", (0, n._)(this, x)));
        }
        stop() {
          (0, n._)(this, O) &&
            ((0, i._)(this, O, !1),
            (0, n._)(this, T).off("block", (0, n._)(this, x)));
        }
        pause(t) {
          this.stop(), t && (0, i._)(this, I, -2);
        }
        resume() {
          this.start();
        }
        constructor(t, e) {
          (0, o._)(this, D),
            (0, a._)(this, T, { writable: !0, value: void 0 }),
            (0, a._)(this, C, { writable: !0, value: void 0 }),
            (0, a._)(this, x, { writable: !0, value: void 0 }),
            (0, a._)(this, O, { writable: !0, value: void 0 }),
            (0, a._)(this, I, { writable: !0, value: void 0 }),
            (0, i._)(this, T, t),
            (0, i._)(this, C, l(e)),
            (0, i._)(this, x, (0, s._)(this, D, S).bind(this)),
            (0, i._)(this, O, !1),
            (0, i._)(this, I, -2);
        }
      }
      async function S(t) {
        if (-2 === (0, n._)(this, I)) return;
        let e = l((0, n._)(this, C));
        (e.fromBlock = (0, n._)(this, I) + 1), (e.toBlock = t);
        let r = await (0, n._)(this, T).getLogs(e);
        if (0 === r.length) {
          (0, n._)(this, I) < t - 60 && (0, i._)(this, I, t - 60);
          return;
        }
        for (let t of r)
          (0, n._)(this, T).emit((0, n._)(this, C), t),
            (0, i._)(this, I, t.blockNumber);
      }
    },
    31296: function (t, e, r) {
      r.d(e, {
        z: function () {
          return o;
        },
      });
      var n = r(15587),
        a = r(25454),
        i = r(22110);
      function s(t, e) {
        return {
          address: (0, n.K)(t),
          storageKeys: e.map(
            (t, e) => (
              (0, a.en)(
                (0, i.A7)(t, 32),
                "invalid slot",
                "storageKeys[".concat(e, "]"),
                t
              ),
              t.toLowerCase()
            )
          ),
        };
      }
      function o(t) {
        if (Array.isArray(t))
          return t.map((e, r) =>
            Array.isArray(e)
              ? ((0, a.en)(
                  2 === e.length,
                  "invalid slot set",
                  "value[".concat(r, "]"),
                  e
                ),
                s(e[0], e[1]))
              : ((0, a.en)(
                  null != e && "object" == typeof e,
                  "invalid address-slot set",
                  "value",
                  t
                ),
                s(e.address, e.storageKeys))
          );
        (0, a.en)(
          null != t && "object" == typeof t,
          "invalid access list",
          "value",
          t
        );
        let e = Object.keys(t).map((e) => {
          let r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return s(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
    },
    74764: function (t, e, r) {
      r.d(e, {
        Y: function () {
          return t_;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(8730),
        o = r(36284),
        l = r(15587),
        c = r(89251),
        u = r(76867),
        h = r(64313),
        f = r(91691),
        d = r(87196);
      let [p, g] = f.ZP.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        m = new Uint32Array(80),
        w = new Uint32Array(80);
      class y extends h.N {
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: a,
            Cl: i,
            Dh: s,
            Dl: o,
            Eh: l,
            El: c,
            Fh: u,
            Fl: h,
            Gh: f,
            Gl: d,
            Hh: p,
            Hl: g,
          } = this;
          return [t, e, r, n, a, i, s, o, l, c, u, h, f, d, p, g];
        }
        set(t, e, r, n, a, i, s, o, l, c, u, h, f, d, p, g) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | a),
            (this.Cl = 0 | i),
            (this.Dh = 0 | s),
            (this.Dl = 0 | o),
            (this.Eh = 0 | l),
            (this.El = 0 | c),
            (this.Fh = 0 | u),
            (this.Fl = 0 | h),
            (this.Gh = 0 | f),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | g);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (m[r] = t.getUint32(e)), (w[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | m[t - 15],
              r = 0 | w[t - 15],
              n =
                f.ZP.rotrSH(e, r, 1) ^
                f.ZP.rotrSH(e, r, 8) ^
                f.ZP.shrSH(e, r, 7),
              a =
                f.ZP.rotrSL(e, r, 1) ^
                f.ZP.rotrSL(e, r, 8) ^
                f.ZP.shrSL(e, r, 7),
              i = 0 | m[t - 2],
              s = 0 | w[t - 2],
              o =
                f.ZP.rotrSH(i, s, 19) ^
                f.ZP.rotrBH(i, s, 61) ^
                f.ZP.shrSH(i, s, 6),
              l =
                f.ZP.rotrSL(i, s, 19) ^
                f.ZP.rotrBL(i, s, 61) ^
                f.ZP.shrSL(i, s, 6),
              c = f.ZP.add4L(a, l, w[t - 7], w[t - 16]),
              u = f.ZP.add4H(c, n, o, m[t - 7], m[t - 16]);
            (m[t] = 0 | u), (w[t] = 0 | c);
          }
          let {
            Ah: r,
            Al: n,
            Bh: a,
            Bl: i,
            Ch: s,
            Cl: o,
            Dh: l,
            Dl: c,
            Eh: u,
            El: h,
            Fh: d,
            Fl: y,
            Gh: A,
            Gl: b,
            Hh: _,
            Hl: E,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                f.ZP.rotrSH(u, h, 14) ^
                f.ZP.rotrSH(u, h, 18) ^
                f.ZP.rotrBH(u, h, 41),
              k =
                f.ZP.rotrSL(u, h, 14) ^
                f.ZP.rotrSL(u, h, 18) ^
                f.ZP.rotrBL(u, h, 41),
              P = (u & d) ^ (~u & A),
              N = (h & y) ^ (~h & b),
              R = f.ZP.add5L(E, k, N, g[t], w[t]),
              T = f.ZP.add5H(R, _, e, P, p[t], m[t]),
              C = 0 | R,
              x =
                f.ZP.rotrSH(r, n, 28) ^
                f.ZP.rotrBH(r, n, 34) ^
                f.ZP.rotrBH(r, n, 39),
              O =
                f.ZP.rotrSL(r, n, 28) ^
                f.ZP.rotrBL(r, n, 34) ^
                f.ZP.rotrBL(r, n, 39),
              I = (r & a) ^ (r & s) ^ (a & s),
              D = (n & i) ^ (n & o) ^ (i & o);
            (_ = 0 | A),
              (E = 0 | b),
              (A = 0 | d),
              (b = 0 | y),
              (d = 0 | u),
              (y = 0 | h),
              ({ h: u, l: h } = f.ZP.add(0 | l, 0 | c, 0 | T, 0 | C)),
              (l = 0 | s),
              (c = 0 | o),
              (s = 0 | a),
              (o = 0 | i),
              (a = 0 | r),
              (i = 0 | n);
            let B = f.ZP.add3L(C, O, D);
            (r = f.ZP.add3H(B, T, x, I)), (n = 0 | B);
          }
          ({ h: r, l: n } = f.ZP.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: a, l: i } = f.ZP.add(0 | this.Bh, 0 | this.Bl, 0 | a, 0 | i)),
            ({ h: s, l: o } = f.ZP.add(0 | this.Ch, 0 | this.Cl, 0 | s, 0 | o)),
            ({ h: l, l: c } = f.ZP.add(0 | this.Dh, 0 | this.Dl, 0 | l, 0 | c)),
            ({ h: u, l: h } = f.ZP.add(0 | this.Eh, 0 | this.El, 0 | u, 0 | h)),
            ({ h: d, l: y } = f.ZP.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | y)),
            ({ h: A, l: b } = f.ZP.add(0 | this.Gh, 0 | this.Gl, 0 | A, 0 | b)),
            ({ h: _, l: E } = f.ZP.add(0 | this.Hh, 0 | this.Hl, 0 | _, 0 | E)),
            this.set(r, n, a, i, s, o, l, c, u, h, d, y, A, b, _, E);
        }
        roundClean() {
          m.fill(0), w.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
      }
      let A = (0, d.hE)(() => new y());
      var b = r(25454);
      let _ = "undefined" != typeof self ? self : window;
      function E(t) {
        switch (t) {
          case "sha256":
            return u.J.create();
          case "sha512":
            return A.create();
        }
        (0, b.en)(!1, "invalid hashing algorithm name", "algorithm", t);
      }
      _.crypto || _.msCrypto;
      var k = r(22110);
      let P = function (t) {
          return E("sha256").update(t).digest();
        },
        N = function (t) {
          return E("sha512").update(t).digest();
        },
        R = P,
        T = N,
        C = !1,
        x = !1;
      function O(t) {
        let e = (0, k.Pw)(t, "data");
        return (0, k.Dv)(R(e));
      }
      function I(t) {
        let e = (0, k.Pw)(t, "data");
        return (0, k.Dv)(T(e));
      }
      (O._ = P),
        (O.lock = function () {
          C = !0;
        }),
        (O.register = function (t) {
          if (C) throw Error("sha256 is locked");
          R = t;
        }),
        Object.freeze(O),
        (I._ = N),
        (I.lock = function () {
          x = !0;
        }),
        (I.register = function (t) {
          if (x) throw Error("sha512 is locked");
          T = t;
        }),
        Object.freeze(O);
      var D = r(77352),
        B = r(24536),
        S = r(75618),
        M = r(14755),
        F = new WeakMap();
      class U {
        get privateKey() {
          return (0, n._)(this, F);
        }
        get publicKey() {
          return U.computePublicKey((0, n._)(this, F));
        }
        get compressedPublicKey() {
          return U.computePublicKey((0, n._)(this, F), !0);
        }
        sign(t) {
          (0, b.en)(32 === (0, k.M5)(t), "invalid digest length", "digest", t);
          let e = S.kA.sign((0, k.h_)(t), (0, k.h_)((0, n._)(this, F)), {
            lowS: !0,
          });
          return D.P.from({
            r: (0, M.m9)(e.r, 32),
            s: (0, M.m9)(e.s, 32),
            v: e.recovery ? 28 : 27,
          });
        }
        computeSharedSecret(t) {
          let e = U.computePublicKey(t);
          return (0, k.Dv)(
            S.kA.getSharedSecret((0, k.h_)((0, n._)(this, F)), (0, k.Pw)(e), !1)
          );
        }
        static computePublicKey(t, e) {
          let r = (0, k.Pw)(t, "key");
          if (32 === r.length) {
            let t = S.kA.getPublicKey(r, !!e);
            return (0, k.Dv)(t);
          }
          if (64 === r.length) {
            let t = new Uint8Array(65);
            (t[0] = 4), t.set(r, 1), (r = t);
          }
          let n = S.kA.ProjectivePoint.fromHex(r);
          return (0, k.Dv)(n.toRawBytes(e));
        }
        static recoverPublicKey(t, e) {
          (0, b.en)(32 === (0, k.M5)(t), "invalid digest length", "digest", t);
          let r = D.P.from(e),
            n = S.kA.Signature.fromCompact((0, k.h_)((0, k.zo)([r.r, r.s]))),
            a = (n = n.addRecoveryBit(r.yParity)).recoverPublicKey(
              (0, k.h_)(t)
            );
          return (
            (0, b.en)(
              null != a,
              "invalid signautre for digest",
              "signature",
              e
            ),
            "0x" + a.toHex(!1)
          );
        }
        static addPoints(t, e, r) {
          let n = S.kA.ProjectivePoint.fromHex(
              U.computePublicKey(t).substring(2)
            ),
            a = S.kA.ProjectivePoint.fromHex(
              U.computePublicKey(e).substring(2)
            );
          return "0x" + n.add(a).toHex(!!r);
        }
        constructor(t) {
          (0, a._)(this, F, { writable: !0, value: void 0 }),
            (0, b.en)(
              32 === (0, k.M5)(t),
              "invalid private key",
              "privateKey",
              "[REDACTED]"
            ),
            (0, i._)(this, F, (0, k.Dv)(t));
        }
      }
      function L(t, e, r) {
        let n = 0;
        for (let a = 0; a < r; a++) n = 256 * n + t[e + a];
        return n;
      }
      function G(t, e, r, n) {
        let a = [];
        for (; r < e + 1 + n; ) {
          let i = Q(t, r);
          a.push(i.result),
            (r += i.consumed),
            (0, b.hu)(
              r <= e + 1 + n,
              "child data too short",
              "BUFFER_OVERRUN",
              { buffer: t, length: n, offset: e }
            );
        }
        return { consumed: 1 + n, result: a };
      }
      function Q(t, e) {
        (0, b.hu)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
          buffer: t,
          length: 0,
          offset: 1,
        });
        let r = (e) => {
          (0, b.hu)(
            e <= t.length,
            "data short segment too short",
            "BUFFER_OVERRUN",
            { buffer: t, length: t.length, offset: e }
          );
        };
        if (t[e] >= 248) {
          let n = t[e] - 247;
          r(e + 1 + n);
          let a = L(t, e + 1, n);
          return r(e + 1 + n + a), G(t, e, e + 1 + n, n + a);
        }
        if (t[e] >= 192) {
          let n = t[e] - 192;
          return r(e + 1 + n), G(t, e, e + 1, n);
        }
        if (t[e] >= 184) {
          let n = t[e] - 183;
          r(e + 1 + n);
          let a = L(t, e + 1, n);
          r(e + 1 + n + a);
          let i = (0, k.Dv)(t.slice(e + 1 + n, e + 1 + n + a));
          return { consumed: 1 + n + a, result: i };
        }
        if (t[e] >= 128) {
          let n = t[e] - 128;
          r(e + 1 + n);
          let a = (0, k.Dv)(t.slice(e + 1, e + 1 + n));
          return { consumed: 1 + n, result: a };
        }
        return {
          consumed: 1,
          result: (function (t) {
            let e = t.toString(16);
            for (; e.length < 2; ) e = "0" + e;
            return "0x" + e;
          })(t[e]),
        };
      }
      function H(t) {
        let e = (0, k.Pw)(t, "data"),
          r = Q(e, 0);
        return (
          (0, b.en)(
            r.consumed === e.length,
            "unexpected junk after rlp payload",
            "data",
            t
          ),
          r.result
        );
      }
      var W = r(12975),
        j = r(31296);
      let J = BigInt(0),
        V = BigInt(2),
        K = BigInt(27),
        z = BigInt(28),
        Z = BigInt(35),
        q = BigInt(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        );
      function Y(t, e) {
        let r = t.toString(16);
        for (; r.length < 2; ) r = "0" + r;
        return "0x" + (r += O(e).substring(4));
      }
      function X(t) {
        return "0x" === t ? null : (0, l.K)(t);
      }
      function $(t, e) {
        try {
          return (0, j.z)(t);
        } catch (r) {
          (0, b.en)(!1, r.message, e, t);
        }
      }
      function tt(t, e) {
        return "0x" === t ? 0 : (0, M.Dx)(t, e);
      }
      function te(t, e) {
        if ("0x" === t) return J;
        let r = (0, M.yT)(t, e);
        return (0, b.en)(r <= q, "value exceeds uint size", e, r), r;
      }
      function tr(t, e) {
        let r = (0, M.yT)(t, "value"),
          n = (0, M.ot)(r);
        return (
          (0, b.en)(n.length <= 32, "value too large", "tx.".concat(e), r), n
        );
      }
      function tn(t) {
        return (0, j.z)(t).map((t) => [t.address, t.storageKeys]);
      }
      function ta(t, e) {
        let r;
        try {
          if (((r = tt(e[0], "yParity")), 0 !== r && 1 !== r))
            throw Error("bad yParity");
        } catch (t) {
          (0, b.en)(!1, "invalid yParity", "yParity", e[0]);
        }
        let n = (0, k.U3)(e[1], 32),
          a = (0, k.U3)(e[2], 32),
          i = D.P.from({ r: n, s: a, yParity: r });
        t.signature = i;
      }
      var ti = new WeakMap(),
        ts = new WeakMap(),
        to = new WeakMap(),
        tl = new WeakMap(),
        tc = new WeakMap(),
        tu = new WeakMap(),
        th = new WeakMap(),
        tf = new WeakMap(),
        td = new WeakMap(),
        tp = new WeakMap(),
        tg = new WeakMap(),
        tm = new WeakMap(),
        tw = new WeakMap(),
        ty = new WeakMap(),
        tA = new WeakMap(),
        tb = new WeakMap(),
        tv = new WeakSet();
      class t_ {
        get type() {
          return (0, n._)(this, ti);
        }
        set type(t) {
          switch (t) {
            case null:
              (0, i._)(this, ti, null);
              break;
            case 0:
            case "legacy":
              (0, i._)(this, ti, 0);
              break;
            case 1:
            case "berlin":
            case "eip-2930":
              (0, i._)(this, ti, 1);
              break;
            case 2:
            case "london":
            case "eip-1559":
              (0, i._)(this, ti, 2);
              break;
            case 3:
            case "cancun":
            case "eip-4844":
              (0, i._)(this, ti, 3);
              break;
            default:
              (0, b.en)(!1, "unsupported transaction type", "type", t);
          }
        }
        get typeName() {
          switch (this.type) {
            case 0:
              return "legacy";
            case 1:
              return "eip-2930";
            case 2:
              return "eip-1559";
            case 3:
              return "eip-4844";
          }
          return null;
        }
        get to() {
          let t = (0, n._)(this, ts);
          return null == t && 3 === this.type ? c.N : t;
        }
        set to(t) {
          (0, i._)(this, ts, null == t ? null : (0, l.K)(t));
        }
        get nonce() {
          return (0, n._)(this, tl);
        }
        set nonce(t) {
          (0, i._)(this, tl, (0, M.Dx)(t, "value"));
        }
        get gasLimit() {
          return (0, n._)(this, tc);
        }
        set gasLimit(t) {
          (0, i._)(this, tc, (0, M.yT)(t));
        }
        get gasPrice() {
          let t = (0, n._)(this, tu);
          return null == t && (0 === this.type || 1 === this.type) ? J : t;
        }
        set gasPrice(t) {
          (0, i._)(this, tu, null == t ? null : (0, M.yT)(t, "gasPrice"));
        }
        get maxPriorityFeePerGas() {
          let t = (0, n._)(this, th);
          return null == t
            ? 2 === this.type || 3 === this.type
              ? J
              : null
            : t;
        }
        set maxPriorityFeePerGas(t) {
          (0, i._)(
            this,
            th,
            null == t ? null : (0, M.yT)(t, "maxPriorityFeePerGas")
          );
        }
        get maxFeePerGas() {
          let t = (0, n._)(this, tf);
          return null == t
            ? 2 === this.type || 3 === this.type
              ? J
              : null
            : t;
        }
        set maxFeePerGas(t) {
          (0, i._)(this, tf, null == t ? null : (0, M.yT)(t, "maxFeePerGas"));
        }
        get data() {
          return (0, n._)(this, to);
        }
        set data(t) {
          (0, i._)(this, to, (0, k.Dv)(t));
        }
        get value() {
          return (0, n._)(this, td);
        }
        set value(t) {
          (0, i._)(this, td, (0, M.yT)(t, "value"));
        }
        get chainId() {
          return (0, n._)(this, tp);
        }
        set chainId(t) {
          (0, i._)(this, tp, (0, M.yT)(t));
        }
        get signature() {
          return (0, n._)(this, tg) || null;
        }
        set signature(t) {
          (0, i._)(this, tg, null == t ? null : D.P.from(t));
        }
        get accessList() {
          let t = (0, n._)(this, tm) || null;
          return null == t
            ? 1 === this.type || 2 === this.type || 3 === this.type
              ? []
              : null
            : t;
        }
        set accessList(t) {
          (0, i._)(this, tm, null == t ? null : (0, j.z)(t));
        }
        get maxFeePerBlobGas() {
          let t = (0, n._)(this, tw);
          return null == t && 3 === this.type ? J : t;
        }
        set maxFeePerBlobGas(t) {
          (0, i._)(
            this,
            tw,
            null == t ? null : (0, M.yT)(t, "maxFeePerBlobGas")
          );
        }
        get blobVersionedHashes() {
          let t = (0, n._)(this, ty);
          return null == t && 3 === this.type ? [] : t;
        }
        set blobVersionedHashes(t) {
          if (null != t) {
            (0, b.en)(
              Array.isArray(t),
              "blobVersionedHashes must be an Array",
              "value",
              t
            ),
              (t = t.slice());
            for (let e = 0; e < t.length; e++)
              (0, b.en)(
                (0, k.A7)(t[e], 32),
                "invalid blobVersionedHash",
                "value[".concat(e, "]"),
                t[e]
              );
          }
          (0, i._)(this, ty, t);
        }
        get blobs() {
          return null == (0, n._)(this, tb)
            ? null
            : (0, n._)(this, tb).map((t) => Object.assign({}, t));
        }
        set blobs(t) {
          if (null == t) {
            (0, i._)(this, tb, null);
            return;
          }
          let e = [],
            r = [];
          for (let a = 0; a < t.length; a++) {
            let i = t[a];
            if ((0, k.Zq)(i)) {
              (0, b.hu)(
                (0, n._)(this, tA),
                "adding a raw blob requires a KZG library",
                "UNSUPPORTED_OPERATION",
                { operation: "set blobs()" }
              );
              let t = (0, k.Pw)(i);
              if (
                ((0, b.en)(
                  t.length <= 131072,
                  "blob is too large",
                  "blobs[".concat(a, "]"),
                  i
                ),
                131072 !== t.length)
              ) {
                let e = new Uint8Array(131072);
                e.set(t), (t = e);
              }
              let s = (0, n._)(this, tA).blobToKzgCommitment(t),
                o = (0, k.Dv)((0, n._)(this, tA).computeBlobKzgProof(t, s));
              e.push({
                data: (0, k.Dv)(t),
                commitment: (0, k.Dv)(s),
                proof: o,
              }),
                r.push(Y(1, s));
            } else {
              let t = (0, k.Dv)(i.commitment);
              e.push({
                data: (0, k.Dv)(i.data),
                commitment: t,
                proof: (0, k.Dv)(i.proof),
              }),
                r.push(Y(1, t));
            }
          }
          (0, i._)(this, tb, e), (0, i._)(this, ty, r);
        }
        get kzg() {
          return (0, n._)(this, tA);
        }
        set kzg(t) {
          (0, i._)(this, tA, t);
        }
        get hash() {
          return null == this.signature
            ? null
            : (0, B.w)((0, s._)(this, tv, tE).call(this, !0, !1));
        }
        get unsignedHash() {
          return (0, B.w)(this.unsignedSerialized);
        }
        get from() {
          var t, e, r;
          let n;
          return null == this.signature
            ? null
            : ((t = this.unsignedHash),
              (e = this.signature),
              (n =
                "string" == typeof (r = U.recoverPublicKey(t, e))
                  ? U.computePublicKey(r, !1)
                  : r.publicKey),
              (0, l.K)((0, B.w)("0x" + n.substring(4)).substring(26)));
        }
        get fromPublicKey() {
          return null == this.signature
            ? null
            : U.recoverPublicKey(this.unsignedHash, this.signature);
        }
        isSigned() {
          return null != this.signature;
        }
        get serialized() {
          return (0, s._)(this, tv, tE).call(this, !0, !0);
        }
        get unsignedSerialized() {
          return (0, s._)(this, tv, tE).call(this, !1, !1);
        }
        inferType() {
          let t = this.inferTypes();
          return t.indexOf(2) >= 0 ? 2 : t.pop();
        }
        inferTypes() {
          let t = null != this.gasPrice,
            e = null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
            r = null != this.accessList,
            a = null != (0, n._)(this, tw) || (0, n._)(this, ty);
          null != this.maxFeePerGas &&
            null != this.maxPriorityFeePerGas &&
            (0, b.hu)(
              this.maxFeePerGas >= this.maxPriorityFeePerGas,
              "priorityFee cannot be more than maxFee",
              "BAD_DATA",
              { value: this }
            ),
            (0, b.hu)(
              !e || (0 !== this.type && 1 !== this.type),
              "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
              "BAD_DATA",
              { value: this }
            ),
            (0, b.hu)(
              0 !== this.type || !r,
              "legacy transaction cannot have accessList",
              "BAD_DATA",
              { value: this }
            );
          let i = [];
          return (
            null != this.type
              ? i.push(this.type)
              : e
              ? i.push(2)
              : t
              ? (i.push(1), r || i.push(0))
              : r
              ? (i.push(1), i.push(2))
              : ((a && this.to) || (i.push(0), i.push(1), i.push(2)),
                i.push(3)),
            i.sort(),
            i
          );
        }
        isLegacy() {
          return 0 === this.type;
        }
        isBerlin() {
          return 1 === this.type;
        }
        isLondon() {
          return 2 === this.type;
        }
        isCancun() {
          return 3 === this.type;
        }
        clone() {
          return t_.from(this);
        }
        toJSON() {
          let t = (t) => (null == t ? null : t.toString());
          return {
            type: this.type,
            to: this.to,
            data: this.data,
            nonce: this.nonce,
            gasLimit: t(this.gasLimit),
            gasPrice: t(this.gasPrice),
            maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
            maxFeePerGas: t(this.maxFeePerGas),
            value: t(this.value),
            chainId: t(this.chainId),
            sig: this.signature ? this.signature.toJSON() : null,
            accessList: this.accessList,
          };
        }
        static from(t) {
          if (null == t) return new t_();
          if ("string" == typeof t) {
            let e = (0, k.Pw)(t);
            if (e[0] >= 127)
              return t_.from(
                (function (t) {
                  let e = H(t);
                  (0, b.en)(
                    Array.isArray(e) && (9 === e.length || 6 === e.length),
                    "invalid field count for legacy transaction",
                    "data",
                    t
                  );
                  let r = {
                    type: 0,
                    nonce: tt(e[0], "nonce"),
                    gasPrice: te(e[1], "gasPrice"),
                    gasLimit: te(e[2], "gasLimit"),
                    to: X(e[3]),
                    value: te(e[4], "value"),
                    data: (0, k.Dv)(e[5]),
                    chainId: J,
                  };
                  if (6 === e.length) return r;
                  let n = te(e[6], "v"),
                    a = te(e[7], "r"),
                    i = te(e[8], "s");
                  if (a === J && i === J) r.chainId = n;
                  else {
                    let t = (n - Z) / V;
                    t < J && (t = J),
                      (r.chainId = t),
                      (0, b.en)(
                        t !== J || n === K || n === z,
                        "non-canonical legacy v",
                        "v",
                        e[6]
                      ),
                      (r.signature = D.P.from({
                        r: (0, k.U3)(e[7], 32),
                        s: (0, k.U3)(e[8], 32),
                        v: n,
                      }));
                  }
                  return r;
                })(e)
              );
            switch (e[0]) {
              case 1:
                return t_.from(
                  (function (t) {
                    let e = H((0, k.Pw)(t).slice(1));
                    (0, b.en)(
                      Array.isArray(e) && (8 === e.length || 11 === e.length),
                      "invalid field count for transaction type: 1",
                      "data",
                      (0, k.Dv)(t)
                    );
                    let r = {
                      type: 1,
                      chainId: te(e[0], "chainId"),
                      nonce: tt(e[1], "nonce"),
                      gasPrice: te(e[2], "gasPrice"),
                      gasLimit: te(e[3], "gasLimit"),
                      to: X(e[4]),
                      value: te(e[5], "value"),
                      data: (0, k.Dv)(e[6]),
                      accessList: $(e[7], "accessList"),
                    };
                    return 8 === e.length || ta(r, e.slice(8)), r;
                  })(e)
                );
              case 2:
                return t_.from(
                  (function (t) {
                    let e = H((0, k.Pw)(t).slice(1));
                    (0, b.en)(
                      Array.isArray(e) && (9 === e.length || 12 === e.length),
                      "invalid field count for transaction type: 2",
                      "data",
                      (0, k.Dv)(t)
                    );
                    let r = {
                      type: 2,
                      chainId: te(e[0], "chainId"),
                      nonce: tt(e[1], "nonce"),
                      maxPriorityFeePerGas: te(e[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: te(e[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: te(e[4], "gasLimit"),
                      to: X(e[5]),
                      value: te(e[6], "value"),
                      data: (0, k.Dv)(e[7]),
                      accessList: $(e[8], "accessList"),
                    };
                    return 9 === e.length || ta(r, e.slice(9)), r;
                  })(e)
                );
              case 3:
                return t_.from(
                  (function (t) {
                    let e = H((0, k.Pw)(t).slice(1)),
                      r = "3",
                      n = null;
                    if (4 === e.length && Array.isArray(e[0])) {
                      r = "3 (network format)";
                      let t = e[1],
                        a = e[2],
                        i = e[3];
                      (0, b.en)(
                        Array.isArray(t),
                        "invalid network format: blobs not an array",
                        "fields[1]",
                        t
                      ),
                        (0, b.en)(
                          Array.isArray(a),
                          "invalid network format: commitments not an array",
                          "fields[2]",
                          a
                        ),
                        (0, b.en)(
                          Array.isArray(i),
                          "invalid network format: proofs not an array",
                          "fields[3]",
                          i
                        ),
                        (0, b.en)(
                          t.length === a.length,
                          "invalid network format: blobs/commitments length mismatch",
                          "fields",
                          e
                        ),
                        (0, b.en)(
                          t.length === i.length,
                          "invalid network format: blobs/proofs length mismatch",
                          "fields",
                          e
                        ),
                        (n = []);
                      for (let r = 0; r < e[1].length; r++)
                        n.push({ data: t[r], commitment: a[r], proof: i[r] });
                      e = e[0];
                    }
                    (0, b.en)(
                      Array.isArray(e) && (11 === e.length || 14 === e.length),
                      "invalid field count for transaction type: ".concat(r),
                      "data",
                      (0, k.Dv)(t)
                    );
                    let a = {
                      type: 3,
                      chainId: te(e[0], "chainId"),
                      nonce: tt(e[1], "nonce"),
                      maxPriorityFeePerGas: te(e[2], "maxPriorityFeePerGas"),
                      maxFeePerGas: te(e[3], "maxFeePerGas"),
                      gasPrice: null,
                      gasLimit: te(e[4], "gasLimit"),
                      to: X(e[5]),
                      value: te(e[6], "value"),
                      data: (0, k.Dv)(e[7]),
                      accessList: $(e[8], "accessList"),
                      maxFeePerBlobGas: te(e[9], "maxFeePerBlobGas"),
                      blobVersionedHashes: e[10],
                    };
                    n && (a.blobs = n),
                      (0, b.en)(
                        null != a.to,
                        "invalid address for transaction type: ".concat(r),
                        "data",
                        t
                      ),
                      (0, b.en)(
                        Array.isArray(a.blobVersionedHashes),
                        "invalid blobVersionedHashes: must be an array",
                        "data",
                        t
                      );
                    for (let e = 0; e < a.blobVersionedHashes.length; e++)
                      (0, b.en)(
                        (0, k.A7)(a.blobVersionedHashes[e], 32),
                        "invalid blobVersionedHash at index ".concat(
                          e,
                          ": must be length 32"
                        ),
                        "data",
                        t
                      );
                    return 11 === e.length || ta(a, e.slice(11)), a;
                  })(e)
                );
            }
            (0, b.hu)(
              !1,
              "unsupported transaction type",
              "UNSUPPORTED_OPERATION",
              { operation: "from" }
            );
          }
          let e = new t_();
          return (
            null != t.type && (e.type = t.type),
            null != t.to && (e.to = t.to),
            null != t.nonce && (e.nonce = t.nonce),
            null != t.gasLimit && (e.gasLimit = t.gasLimit),
            null != t.gasPrice && (e.gasPrice = t.gasPrice),
            null != t.maxPriorityFeePerGas &&
              (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
            null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
            null != t.maxFeePerBlobGas &&
              (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
            null != t.data && (e.data = t.data),
            null != t.value && (e.value = t.value),
            null != t.chainId && (e.chainId = t.chainId),
            null != t.signature && (e.signature = D.P.from(t.signature)),
            null != t.accessList && (e.accessList = t.accessList),
            null != t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes),
            null != t.kzg && (e.kzg = t.kzg),
            null != t.blobs && (e.blobs = t.blobs),
            null != t.hash &&
              ((0, b.en)(
                e.isSigned(),
                "unsigned transaction cannot define '.hash'",
                "tx",
                t
              ),
              (0, b.en)(e.hash === t.hash, "hash mismatch", "tx", t)),
            null != t.from &&
              ((0, b.en)(
                e.isSigned(),
                "unsigned transaction cannot define '.from'",
                "tx",
                t
              ),
              (0, b.en)(
                e.from.toLowerCase() === (t.from || "").toLowerCase(),
                "from mismatch",
                "tx",
                t
              )),
            e
          );
        }
        constructor() {
          (0, o._)(this, tv),
            (0, a._)(this, ti, { writable: !0, value: void 0 }),
            (0, a._)(this, ts, { writable: !0, value: void 0 }),
            (0, a._)(this, to, { writable: !0, value: void 0 }),
            (0, a._)(this, tl, { writable: !0, value: void 0 }),
            (0, a._)(this, tc, { writable: !0, value: void 0 }),
            (0, a._)(this, tu, { writable: !0, value: void 0 }),
            (0, a._)(this, th, { writable: !0, value: void 0 }),
            (0, a._)(this, tf, { writable: !0, value: void 0 }),
            (0, a._)(this, td, { writable: !0, value: void 0 }),
            (0, a._)(this, tp, { writable: !0, value: void 0 }),
            (0, a._)(this, tg, { writable: !0, value: void 0 }),
            (0, a._)(this, tm, { writable: !0, value: void 0 }),
            (0, a._)(this, tw, { writable: !0, value: void 0 }),
            (0, a._)(this, ty, { writable: !0, value: void 0 }),
            (0, a._)(this, tA, { writable: !0, value: void 0 }),
            (0, a._)(this, tb, { writable: !0, value: void 0 }),
            (0, i._)(this, ti, null),
            (0, i._)(this, ts, null),
            (0, i._)(this, tl, 0),
            (0, i._)(this, tc, J),
            (0, i._)(this, tu, null),
            (0, i._)(this, th, null),
            (0, i._)(this, tf, null),
            (0, i._)(this, to, "0x"),
            (0, i._)(this, td, J),
            (0, i._)(this, tp, J),
            (0, i._)(this, tg, null),
            (0, i._)(this, tm, null),
            (0, i._)(this, tw, null),
            (0, i._)(this, ty, null),
            (0, i._)(this, tb, null),
            (0, i._)(this, tA, null);
        }
      }
      function tE(t, e) {
        (0, b.hu)(
          !t || null != this.signature,
          "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
          "UNSUPPORTED_OPERATION",
          { operation: ".serialized" }
        );
        let r = t ? this.signature : null;
        switch (this.inferType()) {
          case 0:
            return (function (t, e) {
              let r = [
                  tr(t.nonce, "nonce"),
                  tr(t.gasPrice || 0, "gasPrice"),
                  tr(t.gasLimit, "gasLimit"),
                  t.to || "0x",
                  tr(t.value, "value"),
                  t.data,
                ],
                n = J;
              if (t.chainId != J)
                (n = (0, M.yT)(t.chainId, "tx.chainId")),
                  (0, b.en)(
                    !e || null == e.networkV || e.legacyChainId === n,
                    "tx.chainId/sig.v mismatch",
                    "sig",
                    e
                  );
              else if (t.signature) {
                let e = t.signature.legacyChainId;
                null != e && (n = e);
              }
              if (!e)
                return (
                  n !== J && (r.push((0, M.ot)(n)), r.push("0x"), r.push("0x")),
                  (0, W.e)(r)
                );
              let a = BigInt(27 + e.yParity);
              return (
                n !== J
                  ? (a = D.P.getChainIdV(n, e.v))
                  : BigInt(e.v) !== a &&
                    (0, b.en)(!1, "tx.chainId/sig.v mismatch", "sig", e),
                r.push((0, M.ot)(a)),
                r.push((0, M.ot)(e.r)),
                r.push((0, M.ot)(e.s)),
                (0, W.e)(r)
              );
            })(this, r);
          case 1:
            return (function (t, e) {
              let r = [
                tr(t.chainId, "chainId"),
                tr(t.nonce, "nonce"),
                tr(t.gasPrice || 0, "gasPrice"),
                tr(t.gasLimit, "gasLimit"),
                t.to || "0x",
                tr(t.value, "value"),
                t.data,
                tn(t.accessList || []),
              ];
              return (
                e &&
                  (r.push(tr(e.yParity, "recoveryParam")),
                  r.push((0, M.ot)(e.r)),
                  r.push((0, M.ot)(e.s))),
                (0, k.zo)(["0x01", (0, W.e)(r)])
              );
            })(this, r);
          case 2:
            return (function (t, e) {
              let r = [
                tr(t.chainId, "chainId"),
                tr(t.nonce, "nonce"),
                tr(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                tr(t.maxFeePerGas || 0, "maxFeePerGas"),
                tr(t.gasLimit, "gasLimit"),
                t.to || "0x",
                tr(t.value, "value"),
                t.data,
                tn(t.accessList || []),
              ];
              return (
                e &&
                  (r.push(tr(e.yParity, "yParity")),
                  r.push((0, M.ot)(e.r)),
                  r.push((0, M.ot)(e.s))),
                (0, k.zo)(["0x02", (0, W.e)(r)])
              );
            })(this, r);
          case 3:
            return (function (t, e, r) {
              let n = [
                tr(t.chainId, "chainId"),
                tr(t.nonce, "nonce"),
                tr(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                tr(t.maxFeePerGas || 0, "maxFeePerGas"),
                tr(t.gasLimit, "gasLimit"),
                t.to || c.N,
                tr(t.value, "value"),
                t.data,
                tn(t.accessList || []),
                tr(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
                (function (t, e) {
                  (0, b.en)(Array.isArray(t), "invalid ".concat(e), "value", t);
                  for (let e = 0; e < t.length; e++)
                    (0, b.en)(
                      (0, k.A7)(t[e], 32),
                      "invalid ${ param } hash",
                      "value[".concat(e, "]"),
                      t[e]
                    );
                  return t;
                })(t.blobVersionedHashes || [], "blobVersionedHashes"),
              ];
              return e &&
                (n.push(tr(e.yParity, "yParity")),
                n.push((0, M.ot)(e.r)),
                n.push((0, M.ot)(e.s)),
                r)
                ? (0, k.zo)([
                    "0x03",
                    (0, W.e)([
                      n,
                      r.map((t) => t.data),
                      r.map((t) => t.commitment),
                      r.map((t) => t.proof),
                    ]),
                  ])
                : (0, k.zo)(["0x03", (0, W.e)(n)]);
            })(this, r, e ? this.blobs : null);
        }
        (0, b.hu)(!1, "unsupported transaction type", "UNSUPPORTED_OPERATION", {
          operation: ".serialized",
        });
      }
    },
    81948: function (t, e, r) {
      r.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(63718),
        o = new WeakMap();
      class l {
        async removeListener() {
          null != (0, n._)(this, o) &&
            (await this.emitter.off(this.filter, (0, n._)(this, o)));
        }
        constructor(t, e, r) {
          (0, a._)(this, o, { writable: !0, value: void 0 }),
            (0, i._)(this, o, e),
            (0, s.h)(this, { emitter: t, filter: r });
        }
      }
    },
    59350: function (t, e, r) {
      r.d(e, {
        gd: function () {
          return W;
        },
      });
      var n = r(4301),
        a = r(18654),
        i = r(8776),
        s = r(8730),
        o = r(36284),
        l = r(22110),
        c = r(25454),
        u = r(63718),
        h = r(45256);
      function f(t) {
        return async function (t, e) {
          let r;
          let n = t.url.split(":")[0].toLowerCase();
          if (
            ((0, c.hu)(
              "http" === n || "https" === n,
              "unsupported protocol ".concat(n),
              "UNSUPPORTED_OPERATION",
              { info: { protocol: n }, operation: "request" }
            ),
            (0, c.hu)(
              "https" === n || !t.credentials || t.allowInsecureAuthentication,
              "insecure authorized connections unsupported",
              "UNSUPPORTED_OPERATION",
              { operation: "request" }
            ),
            e)
          ) {
            let t = new AbortController();
            (r = t.signal),
              e.addListener(() => {
                t.abort();
              });
          }
          let a = {
              method: t.method,
              headers: new Headers(Array.from(t)),
              body: t.body || void 0,
              signal: r,
            },
            i = await fetch(t.url, a),
            s = {};
          i.headers.forEach((t, e) => {
            s[e.toLowerCase()] = t;
          });
          let o = await i.arrayBuffer(),
            l = null == o ? null : new Uint8Array(o);
          return {
            statusCode: i.status,
            statusMessage: i.statusText,
            headers: s,
            body: l,
          };
        };
      }
      f({});
      let d = f(),
        p = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
        g = RegExp("^ipfs://(ipfs/)?(.*)$", "i"),
        m = !1;
      async function w(t, e) {
        try {
          var r;
          let e = t.match(p);
          if (!e) throw Error("invalid data");
          return new X(
            200,
            "OK",
            { "content-type": e[1] || "text/plain" },
            e[2]
              ? (function (t) {
                  t = atob(t);
                  let e = new Uint8Array(t.length);
                  for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
                  return (0, l.Pw)(e);
                })(e[3])
              : ((r = e[3]),
                (0, h.Y0)(
                  r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                    String.fromCharCode(parseInt(e, 16))
                  )
                ))
          );
        } catch (e) {
          return new X(
            599,
            "BAD REQUEST (invalid data: URI)",
            {},
            null,
            new W(t)
          );
        }
      }
      function y(t) {
        return async function (e, r) {
          try {
            let r = e.match(g);
            if (!r) throw Error("invalid link");
            return new W("".concat(t).concat(r[2]));
          } catch (t) {
            return new X(
              599,
              "BAD REQUEST (invalid IPFS URI)",
              {},
              null,
              new W(e)
            );
          }
        };
      }
      let A = { data: w, ipfs: y("https://gateway.ipfs.io/ipfs/") },
        b = new WeakMap();
      var _ = new WeakMap(),
        E = new WeakMap();
      class k {
        addListener(t) {
          (0, c.hu)(
            !(0, n._)(this, E),
            "singal already cancelled",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchCancelSignal.addCancelListener" }
          ),
            (0, n._)(this, _).push(t);
        }
        get cancelled() {
          return (0, n._)(this, E);
        }
        checkSignal() {
          (0, c.hu)(!this.cancelled, "cancelled", "CANCELLED", {});
        }
        constructor(t) {
          (0, a._)(this, _, { writable: !0, value: void 0 }),
            (0, a._)(this, E, { writable: !0, value: void 0 }),
            (0, i._)(this, _, []),
            (0, i._)(this, E, !1),
            b.set(t, () => {
              if (!(0, n._)(this, E)) {
                for (let t of ((0, i._)(this, E, !0), (0, n._)(this, _)))
                  setTimeout(() => {
                    t();
                  }, 0);
                (0, i._)(this, _, []);
              }
            });
        }
      }
      function P(t) {
        if (null == t) throw Error("missing signal; should not happen");
        return t.checkSignal(), t;
      }
      var N = new WeakMap(),
        R = new WeakMap(),
        T = new WeakMap(),
        C = new WeakMap(),
        x = new WeakMap(),
        O = new WeakMap(),
        I = new WeakMap(),
        D = new WeakMap(),
        B = new WeakMap(),
        S = new WeakMap(),
        M = new WeakMap(),
        F = new WeakMap(),
        U = new WeakMap(),
        L = new WeakMap(),
        G = new WeakMap(),
        Q = new WeakSet();
      let H = Symbol.iterator;
      class W {
        get url() {
          return (0, n._)(this, O);
        }
        set url(t) {
          (0, i._)(this, O, String(t));
        }
        get body() {
          return null == (0, n._)(this, I)
            ? null
            : new Uint8Array((0, n._)(this, I));
        }
        set body(t) {
          if (null == t) (0, i._)(this, I, void 0), (0, i._)(this, D, void 0);
          else if ("string" == typeof t)
            (0, i._)(this, I, (0, h.Y0)(t)), (0, i._)(this, D, "text/plain");
          else if (t instanceof Uint8Array)
            (0, i._)(this, I, t), (0, i._)(this, D, "application/octet-stream");
          else if ("object" == typeof t)
            (0, i._)(this, I, (0, h.Y0)(JSON.stringify(t))),
              (0, i._)(this, D, "application/json");
          else throw Error("invalid body");
        }
        hasBody() {
          return null != (0, n._)(this, I);
        }
        get method() {
          return (0, n._)(this, C)
            ? (0, n._)(this, C)
            : this.hasBody()
            ? "POST"
            : "GET";
        }
        set method(t) {
          null == t && (t = ""), (0, i._)(this, C, String(t).toUpperCase());
        }
        get headers() {
          let t = Object.assign({}, (0, n._)(this, T));
          return (
            (0, n._)(this, B) &&
              (t.authorization = "Basic ".concat(
                (function (t) {
                  let e = (0, l.Pw)(t),
                    r = "";
                  for (let t = 0; t < e.length; t++)
                    r += String.fromCharCode(e[t]);
                  return btoa(r);
                })((0, h.Y0)((0, n._)(this, B)))
              )),
            this.allowGzip && (t["accept-encoding"] = "gzip"),
            null == t["content-type"] &&
              (0, n._)(this, D) &&
              (t["content-type"] = (0, n._)(this, D)),
            this.body && (t["content-length"] = String(this.body.length)),
            t
          );
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        setHeader(t, e) {
          (0, n._)(this, T)[String(t).toLowerCase()] = String(e);
        }
        clearHeaders() {
          (0, i._)(this, T, {});
        }
        [H]() {
          let t = this.headers,
            e = Object.keys(t),
            r = 0;
          return {
            next: () => {
              if (r < e.length) {
                let n = e[r++];
                return { value: [n, t[n]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        get credentials() {
          return (0, n._)(this, B) || null;
        }
        setCredentials(t, e) {
          (0, c.en)(
            !t.match(/:/),
            "invalid basic authentication username",
            "username",
            "[REDACTED]"
          ),
            (0, i._)(this, B, "".concat(t, ":").concat(e));
        }
        get allowGzip() {
          return (0, n._)(this, R);
        }
        set allowGzip(t) {
          (0, i._)(this, R, !!t);
        }
        get allowInsecureAuthentication() {
          return !!(0, n._)(this, N);
        }
        set allowInsecureAuthentication(t) {
          (0, i._)(this, N, !!t);
        }
        get timeout() {
          return (0, n._)(this, x);
        }
        set timeout(t) {
          (0, c.en)(t >= 0, "timeout must be non-zero", "timeout", t),
            (0, i._)(this, x, t);
        }
        get preflightFunc() {
          return (0, n._)(this, S) || null;
        }
        set preflightFunc(t) {
          (0, i._)(this, S, t);
        }
        get processFunc() {
          return (0, n._)(this, M) || null;
        }
        set processFunc(t) {
          (0, i._)(this, M, t);
        }
        get retryFunc() {
          return (0, n._)(this, F) || null;
        }
        set retryFunc(t) {
          (0, i._)(this, F, t);
        }
        get getUrlFunc() {
          return (0, n._)(this, G) || d;
        }
        set getUrlFunc(t) {
          (0, i._)(this, G, t);
        }
        toString() {
          return "<FetchRequest method="
            .concat(JSON.stringify(this.method), " url=")
            .concat(JSON.stringify(this.url), " headers=")
            .concat(JSON.stringify(this.headers), " body=")
            .concat(
              (0, n._)(this, I) ? (0, l.Dv)((0, n._)(this, I)) : "null",
              ">"
            );
        }
        setThrottleParams(t) {
          null != t.slotInterval &&
            ((0, n._)(this, L).slotInterval = t.slotInterval),
            null != t.maxAttempts &&
              ((0, n._)(this, L).maxAttempts = t.maxAttempts);
        }
        send() {
          return (
            (0, c.hu)(
              null == (0, n._)(this, U),
              "request already sent",
              "UNSUPPORTED_OPERATION",
              { operation: "fetchRequest.send" }
            ),
            (0, i._)(this, U, new k(this)),
            (0, s._)(this, Q, j).call(
              this,
              0,
              $() + this.timeout,
              0,
              this,
              new X(0, "", {}, null, this)
            )
          );
        }
        cancel() {
          (0, c.hu)(
            null != (0, n._)(this, U),
            "request has not been sent",
            "UNSUPPORTED_OPERATION",
            { operation: "fetchRequest.cancel" }
          );
          let t = b.get(this);
          if (!t) throw Error("missing signal; should not happen");
          t();
        }
        redirect(t) {
          let e = this.url.split(":")[0].toLowerCase(),
            r = t.split(":")[0].toLowerCase();
          (0, c.hu)(
            "GET" === this.method &&
              ("https" !== e || "http" !== r) &&
              t.match(/^https?:/),
            "unsupported redirect",
            "UNSUPPORTED_OPERATION",
            {
              operation: "redirect("
                .concat(this.method, " ")
                .concat(JSON.stringify(this.url), " => ")
                .concat(JSON.stringify(t), ")"),
            }
          );
          let a = new W(t);
          return (
            (a.method = "GET"),
            (a.allowGzip = this.allowGzip),
            (a.timeout = this.timeout),
            (0, i._)(a, T, Object.assign({}, (0, n._)(this, T))),
            (0, n._)(this, I) &&
              (0, i._)(a, I, new Uint8Array((0, n._)(this, I))),
            (0, i._)(a, D, (0, n._)(this, D)),
            a
          );
        }
        clone() {
          let t = new W(this.url);
          return (
            (0, i._)(t, C, (0, n._)(this, C)),
            (0, n._)(this, I) && (0, i._)(t, I, (0, n._)(this, I)),
            (0, i._)(t, D, (0, n._)(this, D)),
            (0, i._)(t, T, Object.assign({}, (0, n._)(this, T))),
            (0, i._)(t, B, (0, n._)(this, B)),
            this.allowGzip && (t.allowGzip = !0),
            (t.timeout = this.timeout),
            this.allowInsecureAuthentication &&
              (t.allowInsecureAuthentication = !0),
            (0, i._)(t, S, (0, n._)(this, S)),
            (0, i._)(t, M, (0, n._)(this, M)),
            (0, i._)(t, F, (0, n._)(this, F)),
            (0, i._)(t, L, Object.assign({}, (0, n._)(this, L))),
            (0, i._)(t, G, (0, n._)(this, G)),
            t
          );
        }
        static lockConfig() {
          m = !0;
        }
        static getGateway(t) {
          return A[t.toLowerCase()] || null;
        }
        static registerGateway(t, e) {
          if ("http" === (t = t.toLowerCase()) || "https" === t)
            throw Error("cannot intercept ".concat(t, "; use registerGetUrl"));
          if (m) throw Error("gateways locked");
          A[t] = e;
        }
        static registerGetUrl(t) {
          if (m) throw Error("gateways locked");
          d = t;
        }
        static createGetUrlFunc(t) {
          return f(t);
        }
        static createDataGateway() {
          return w;
        }
        static createIpfsGatewayFunc(t) {
          return y(t);
        }
        constructor(t) {
          (0, o._)(this, Q),
            (0, a._)(this, N, { writable: !0, value: void 0 }),
            (0, a._)(this, R, { writable: !0, value: void 0 }),
            (0, a._)(this, T, { writable: !0, value: void 0 }),
            (0, a._)(this, C, { writable: !0, value: void 0 }),
            (0, a._)(this, x, { writable: !0, value: void 0 }),
            (0, a._)(this, O, { writable: !0, value: void 0 }),
            (0, a._)(this, I, { writable: !0, value: void 0 }),
            (0, a._)(this, D, { writable: !0, value: void 0 }),
            (0, a._)(this, B, { writable: !0, value: void 0 }),
            (0, a._)(this, S, { writable: !0, value: void 0 }),
            (0, a._)(this, M, { writable: !0, value: void 0 }),
            (0, a._)(this, F, { writable: !0, value: void 0 }),
            (0, a._)(this, U, { writable: !0, value: void 0 }),
            (0, a._)(this, L, { writable: !0, value: void 0 }),
            (0, a._)(this, G, { writable: !0, value: void 0 }),
            (0, i._)(this, O, String(t)),
            (0, i._)(this, N, !1),
            (0, i._)(this, R, !0),
            (0, i._)(this, T, {}),
            (0, i._)(this, C, ""),
            (0, i._)(this, x, 3e5),
            (0, i._)(this, L, { slotInterval: 250, maxAttempts: 12 }),
            (0, i._)(this, G, null);
        }
      }
      async function j(t, e, r, a, i) {
        var o, l, u;
        if (t >= (0, n._)(this, L).maxAttempts)
          return i.makeServerError("exceeded maximum retry limit");
        (0, c.hu)($() <= e, "timeout", "TIMEOUT", {
          operation: "request.send",
          reason: "timeout",
          request: a,
        }),
          r > 0 && (await new Promise((t) => setTimeout(t, r)));
        let h = this.clone(),
          f = (h.url.split(":")[0] || "").toLowerCase();
        if (f in A) {
          let t = await A[f](h.url, P((0, n._)(a, U)));
          if (t instanceof X) {
            let e = t;
            if (this.processFunc) {
              P((0, n._)(a, U));
              try {
                e = await this.processFunc(h, e);
              } catch (t) {
                (null == t.throttle || "number" != typeof t.stall) &&
                  e
                    .makeServerError("error in post-processing function", t)
                    .assertOk();
              }
            }
            return e;
          }
          h = t;
        }
        this.preflightFunc && (h = await this.preflightFunc(h));
        let d = await this.getUrlFunc(h, P((0, n._)(a, U))),
          p = new X(d.statusCode, d.statusMessage, d.headers, d.body, a);
        if (301 === p.statusCode || 302 === p.statusCode) {
          try {
            let r = p.headers.location || "";
            return (0, s._)((o = h.redirect(r)), Q, j).call(
              o,
              t + 1,
              e,
              0,
              a,
              p
            );
          } catch (t) {}
          return p;
        }
        if (
          429 === p.statusCode &&
          (null == this.retryFunc || (await this.retryFunc(h, p, t)))
        ) {
          let r = p.headers["retry-after"],
            i =
              (0, n._)(this, L).slotInterval *
              Math.trunc(Math.random() * Math.pow(2, t));
          return (
            "string" == typeof r &&
              r.match(/^[1-9][0-9]*$/) &&
              (i = parseInt(r)),
            (0, s._)((l = h.clone()), Q, j).call(l, t + 1, e, i, a, p)
          );
        }
        if (this.processFunc) {
          P((0, n._)(a, U));
          try {
            p = await this.processFunc(h, p);
          } catch (i) {
            (null == i.throttle || "number" != typeof i.stall) &&
              p
                .makeServerError("error in post-processing function", i)
                .assertOk();
            let r =
              (0, n._)(this, L).slotInterval *
              Math.trunc(Math.random() * Math.pow(2, t));
            return (
              i.stall >= 0 && (r = i.stall),
              (0, s._)((u = h.clone()), Q, j).call(u, t + 1, e, r, a, p)
            );
          }
        }
        return p;
      }
      var J = new WeakMap(),
        V = new WeakMap(),
        K = new WeakMap(),
        z = new WeakMap(),
        Z = new WeakMap(),
        q = new WeakMap();
      let Y = Symbol.iterator;
      class X {
        toString() {
          return "<FetchResponse status="
            .concat(this.statusCode, " body=")
            .concat(
              (0, n._)(this, z) ? (0, l.Dv)((0, n._)(this, z)) : "null",
              ">"
            );
        }
        get statusCode() {
          return (0, n._)(this, J);
        }
        get statusMessage() {
          return (0, n._)(this, V);
        }
        get headers() {
          return Object.assign({}, (0, n._)(this, K));
        }
        get body() {
          return null == (0, n._)(this, z)
            ? null
            : new Uint8Array((0, n._)(this, z));
        }
        get bodyText() {
          try {
            return null == (0, n._)(this, z)
              ? ""
              : (0, h.ZN)((0, n._)(this, z));
          } catch (t) {
            (0, c.hu)(
              !1,
              "response body is not valid UTF-8 data",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyText", info: { response: this } }
            );
          }
        }
        get bodyJson() {
          try {
            return JSON.parse(this.bodyText);
          } catch (t) {
            (0, c.hu)(
              !1,
              "response body is not valid JSON",
              "UNSUPPORTED_OPERATION",
              { operation: "bodyJson", info: { response: this } }
            );
          }
        }
        [Y]() {
          let t = this.headers,
            e = Object.keys(t),
            r = 0;
          return {
            next: () => {
              if (r < e.length) {
                let n = e[r++];
                return { value: [n, t[n]], done: !1 };
              }
              return { value: void 0, done: !0 };
            },
          };
        }
        makeServerError(t, e) {
          let r;
          t
            ? (r = "CLIENT ESCALATED SERVER ERROR ("
                .concat(this.statusCode, " ")
                .concat(this.statusMessage, "; ")
                .concat(t, ")"))
            : ((t = "".concat(this.statusCode, " ").concat(this.statusMessage)),
              (r = "CLIENT ESCALATED SERVER ERROR (".concat(t, ")")));
          let a = new X(
            599,
            r,
            this.headers,
            this.body,
            (0, n._)(this, Z) || void 0
          );
          return (0, i._)(a, q, { message: t, error: e }), a;
        }
        throwThrottleError(t, e) {
          null == e
            ? (e = -1)
            : (0, c.en)(
                Number.isInteger(e) && e >= 0,
                "invalid stall timeout",
                "stall",
                e
              );
          let r = Error(t || "throttling requests");
          throw ((0, u.h)(r, { stall: e, throttle: !0 }), r);
        }
        getHeader(t) {
          return this.headers[t.toLowerCase()];
        }
        hasBody() {
          return null != (0, n._)(this, z);
        }
        get request() {
          return (0, n._)(this, Z);
        }
        ok() {
          return (
            "" === (0, n._)(this, q).message &&
            this.statusCode >= 200 &&
            this.statusCode < 300
          );
        }
        assertOk() {
          if (this.ok()) return;
          let { message: t, error: e } = (0, n._)(this, q);
          "" === t &&
            (t = "server response "
              .concat(this.statusCode, " ")
              .concat(this.statusMessage));
          let r = null;
          this.request && (r = this.request.url);
          let a = null;
          try {
            (0, n._)(this, z) && (a = (0, h.ZN)((0, n._)(this, z)));
          } catch (t) {}
          (0, c.hu)(!1, t, "SERVER_ERROR", {
            request: this.request || "unknown request",
            response: this,
            error: e,
            info: {
              requestUrl: r,
              responseBody: a,
              responseStatus: ""
                .concat(this.statusCode, " ")
                .concat(this.statusMessage),
            },
          });
        }
        constructor(t, e, r, n, s) {
          (0, a._)(this, J, { writable: !0, value: void 0 }),
            (0, a._)(this, V, { writable: !0, value: void 0 }),
            (0, a._)(this, K, { writable: !0, value: void 0 }),
            (0, a._)(this, z, { writable: !0, value: void 0 }),
            (0, a._)(this, Z, { writable: !0, value: void 0 }),
            (0, a._)(this, q, { writable: !0, value: void 0 }),
            (0, i._)(this, J, t),
            (0, i._)(this, V, e),
            (0, i._)(
              this,
              K,
              Object.keys(r).reduce(
                (t, e) => ((t[e.toLowerCase()] = String(r[e])), t),
                {}
              )
            ),
            (0, i._)(this, z, null == n ? null : new Uint8Array(n)),
            (0, i._)(this, Z, s || null),
            (0, i._)(this, q, { message: "" });
        }
      }
      function $() {
        return new Date().getTime();
      }
    },
    12975: function (t, e, r) {
      r.d(e, {
        e: function () {
          return s;
        },
      });
      var n = r(22110);
      function a(t) {
        let e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      let i = "0123456789abcdef";
      function s(t) {
        let e = "0x";
        for (let r of (function t(e) {
          if (Array.isArray(e)) {
            let r = [];
            if (
              (e.forEach(function (e) {
                r = r.concat(t(e));
              }),
              r.length <= 55)
            )
              return r.unshift(192 + r.length), r;
            let n = a(r.length);
            return n.unshift(247 + n.length), n.concat(r);
          }
          let r = Array.prototype.slice.call((0, n.Pw)(e, "object"));
          if (1 === r.length && r[0] <= 127) return r;
          if (r.length <= 55) return r.unshift(128 + r.length), r;
          let i = a(r.length);
          return i.unshift(183 + i.length), i.concat(r);
        })(t))
          e += i[r >> 4] + i[15 & r];
        return e;
      }
    },
    45256: function (t, e, r) {
      r.d(e, {
        Y0: function () {
          return o;
        },
        ZN: function () {
          return l;
        },
      });
      var n = r(22110),
        a = r(25454);
      function i(t, e, r, n, a) {
        if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return "OVERRUN" === t ? r.length - e - 1 : 0;
      }
      let s = Object.freeze({
        error: function (t, e, r, n, i) {
          (0, a.en)(
            !1,
            "invalid codepoint at offset ".concat(e, "; ").concat(t),
            "bytes",
            r
          );
        },
        ignore: i,
        replace: function (t, e, r, n, s) {
          return "OVERLONG" === t
            ? ((0, a.en)(
                "number" == typeof s,
                "invalid bad code point for replacement",
                "badCodepoint",
                s
              ),
              n.push(s),
              0)
            : (n.push(65533), i(t, e, r, n, s));
        },
      });
      function o(t, e) {
        (0, a.en)("string" == typeof t, "invalid string value", "str", t),
          null != e && ((0, a.fA)(e), (t = t.normalize(e)));
        let r = [];
        for (let e = 0; e < t.length; e++) {
          let n = t.charCodeAt(e);
          if (n < 128) r.push(n);
          else if (n < 2048) r.push((n >> 6) | 192), r.push((63 & n) | 128);
          else if ((64512 & n) == 55296) {
            e++;
            let i = t.charCodeAt(e);
            (0, a.en)(
              e < t.length && (64512 & i) == 56320,
              "invalid surrogate pair",
              "str",
              t
            );
            let s = 65536 + ((1023 & n) << 10) + (1023 & i);
            r.push((s >> 18) | 240),
              r.push(((s >> 12) & 63) | 128),
              r.push(((s >> 6) & 63) | 128),
              r.push((63 & s) | 128);
          } else
            r.push((n >> 12) | 224),
              r.push(((n >> 6) & 63) | 128),
              r.push((63 & n) | 128);
        }
        return new Uint8Array(r);
      }
      function l(t, e) {
        return (function (t, e) {
          null == e && (e = s.error);
          let r = (0, n.Pw)(t, "bytes"),
            a = [],
            i = 0;
          for (; i < r.length; ) {
            let t = r[i++];
            if (t >> 7 == 0) {
              a.push(t);
              continue;
            }
            let n = null,
              s = null;
            if ((224 & t) == 192) (n = 1), (s = 127);
            else if ((240 & t) == 224) (n = 2), (s = 2047);
            else if ((248 & t) == 240) (n = 3), (s = 65535);
            else {
              (192 & t) == 128
                ? (i += e("UNEXPECTED_CONTINUE", i - 1, r, a))
                : (i += e("BAD_PREFIX", i - 1, r, a));
              continue;
            }
            if (i - 1 + n >= r.length) {
              i += e("OVERRUN", i - 1, r, a);
              continue;
            }
            let o = t & ((1 << (8 - n - 1)) - 1);
            for (let t = 0; t < n; t++) {
              let t = r[i];
              if ((192 & t) != 128) {
                (i += e("MISSING_CONTINUE", i, r, a)), (o = null);
                break;
              }
              (o = (o << 6) | (63 & t)), i++;
            }
            if (null !== o) {
              if (o > 1114111) {
                i += e("OUT_OF_RANGE", i - 1 - n, r, a, o);
                continue;
              }
              if (o >= 55296 && o <= 57343) {
                i += e("UTF16_SURROGATE", i - 1 - n, r, a, o);
                continue;
              }
              if (o <= s) {
                i += e("OVERLONG", i - 1 - n, r, a, o);
                continue;
              }
              a.push(o);
            }
          }
          return a;
        })(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : String.fromCharCode(
                  (((t -= 65536) >> 10) & 1023) + 55296,
                  (1023 & t) + 56320
                )
          )
          .join("");
      }
    },
  },
]);
