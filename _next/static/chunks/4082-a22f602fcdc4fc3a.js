"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4082],
  {
    72798: function (e, t, r) {
      r.r(t),
        r.d(t, {
          AppContext: function () {
            return h;
          },
          AppProvider: function () {
            return v;
          },
          useAppContext: function () {
            return m;
          },
        });
      var n = r(6272),
        o = r(8627),
        c = r(70329),
        a = r(26365),
        l = r(86526),
        i = r(46615),
        s = r(61818),
        u = r(59580);
      async function d() {
        var e;
        let t = {
            version: 2,
            projectId: "93dba83e8d9915dc6a65ffd3ecfd19fd",
            requiredChains: [1],
            optionalChains: [1, 10, 42161, 137, 8453],
            dappUrl:
              null === (e = window) || void 0 === e ? void 0 : e.location.host,
          },
          r = (0, l.ZP)(),
          n = (0, i.Z)(t),
          o = [
            {
              id: "0x".concat("a4b1"),
              token: "ETH",
              label: "Arbitrum",
              rpcUrl: "https://arb1.arbitrum.io/rpc",
            },
            {
              id: "0x".concat("a"),
              token: "ETH",
              label: "Optimism",
              rpcUrl: "https://mainnet.optimism.io",
            },
            {
              id: "0x".concat("89"),
              token: "MATIC",
              label: "Polygon",
              rpcUrl: "https://rpc-mainnet.matic.network",
            },
            {
              id: "0x".concat("2105"),
              label: "Base",
              token: "ETH",
              rpcUrl: "https://base-mainnet.diamondswap.org/rpc",
            },
            {
              id: "0x".concat("a86a"),
              label: "Avalanche",
              token: "AVAX",
              rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
            },
            {
              id: "0x".concat("1"),
              label: "Ethereum",
              token: "ETH",
              rpcUrl:
                "https://mainnet.infura.io/v3/9155d40884554acdb17699a18a1fe348",
            },
            {
              id: "0x".concat("38"),
              label: "BNB Chain",
              token: "BNB",
              rpcUrl: "https://bsc-dataseed1.binance.org/",
            },
          ],
          c = [
            {
              id: "0x".concat("66eee"),
              token: "ETH",
              label: "Arbitrum Sepolia",
              rpcUrl: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
            },
            {
              id: "0x".concat("116c"),
              token: "ETH",
              label: "Orderly Network Testnet",
              rpcUrl:
                "https://rpc-orderly-l2-4460-sepolia-8tc3sd7dvy.t.conduit.xyz",
            },
            {
              id: "0x".concat("aa36a7"),
              label: "Sepolia",
              token: "SepoliaETH",
              rpcUrl: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
            },
            {
              id: "0x".concat("a869"),
              label: "Avalanche Fuji Testnet",
              rpcUrl: "https://api.zan.top/avax-fuji/ext/bc/C/rpc",
              token: "AVAX",
              blockExplorerUrl: "https://testnet.snowscan.xyz",
            },
          ],
          d = (0, s.Z)({ options: { lng: "en" } });
        return Promise.resolve().then(() =>
          (0, a.S1)({
            apiKey: "a2c206fa-686c-466c-9046-433ea1bf5fa6",
            wallets: [r, n, d],
            chains: [...o, ...((0, u.H0)() ? [] : c)],
            appMetadata: {
              name: "Orderly",
              description: "Orderly",
              icon: "/orderly.svg",
            },
            theme: {
              "--w3o-background-color": "#1b112c",
              "--w3o-foreground-color": "#28183e",
              "--w3o-text-color": "#ffffff",
              "--w3o-border-color": "#3a2b50",
              "--w3o-action-color": "#b084e9",
              "--w3o-border-radius": "16px",
              "--w3o-font-family": "Manrope, sans-serif",
            },
            accountCenter: {
              desktop: { enabled: !1 },
              mobile: { enabled: !1 },
            },
            connect: { autoConnectLastWallet: !0 },
          })
        );
      }
      var p = r(31960);
      let f = () => {
          let [e, t] = (0, o.useState)({});
          return (
            (0, o.useEffect)(() => {
              (0, p.Lx)().then((e) => {
                let { rows: r } = e;
                t(
                  null == r
                    ? void 0
                    : r
                        .map((e) => ({ [e.broker_id]: e.broker_name }))
                        .reduce((e, t) => ({ ...e, ...t }), {})
                );
              });
            }, []),
            e
          );
        },
        h = (0, o.createContext)({
          connected: !1,
          setConnected: (e) => {},
          setCurrentChain: (e) => {},
          switchChain: { current: void 0 },
          isNotSupportChain: !1,
          setAddress: (e) => {},
          initWallet: !1,
          bannerHeight: 0,
          setBannerHeight: (e) => {},
          brokers: {},
        }),
        v = (e) => {
          let [t, r] = (0, o.useState)(!1),
            [a, l] = (0, o.useState)(!1),
            [i, s] = (0, o.useState)(c.jd),
            [u, p] = (0, o.useState)(),
            [v, m] = (0, o.useState)(0),
            b = (0, o.useRef)(),
            w = (0, c.C$)(),
            _ = f(),
            g = (0, o.useMemo)(() => {
              let e = null == i ? void 0 : i.chain_id,
                t =
                  null == w
                    ? void 0
                    : w.find((t) => parseInt(t.chain_id) === parseInt(e));
              return a && !!e && !t;
            }, [i, a, w]);
          return (
            (0, o.useEffect)(() => {
              d().then((e) => {
                r(!0);
              });
            }, []),
            (0, o.useEffect)(() => {
              let e = document.createElement("script");
              (e.src =
                "https://www.googletagmanager.com/gtag/js?id=G-SNRR8JX208"),
                (e.async = !0),
                document.head.appendChild(e);
              let t = document.createElement("script");
              return (
                (t.innerHTML =
                  "\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag('js', new Date());\n      gtag('config', 'G-SNRR8JX208');\n    "),
                document.head.appendChild(t),
                () => {
                  document.head.removeChild(e), document.head.removeChild(t);
                }
              );
            }, []),
            (0, n.jsx)(h.Provider, {
              value: {
                initWallet: t,
                connected: a,
                setConnected: l,
                currentChain: i,
                setCurrentChain: s,
                switchChain: b,
                isNotSupportChain: g,
                chains: w,
                address: u,
                setAddress: p,
                bannerHeight: v,
                setBannerHeight: m,
                brokers: _,
              },
              children: t && e.children,
            })
          );
        };
      function m() {
        return (0, o.useContext)(h);
      }
    },
    70329: function (e, t, r) {
      r.d(t, {
        AH: function () {
          return d;
        },
        C$: function () {
          return p;
        },
        jd: function () {
          return s;
        },
        m0: function () {
          return i;
        },
        oK: function () {
          return o;
        },
      });
      var n,
        o,
        c = r(8627),
        a = r(48335),
        l = r(59580);
      ((n = o || (o = {})).ETHEREUM = "1"),
        (n.ARBITRUM = "42161"),
        (n.OPTIMISM = "10"),
        (n.POLYGON = "137"),
        (n.BASE = "8453"),
        (n.ARBITRUM_SEPOLIA = "421614"),
        (n.SEPOLIA = "11155111"),
        (n.SOLANA_DEVNET = "901901901"),
        (n.SOLANA_MAINNET = "900900900"),
        (n.FUJI_TESTNET = "43113"),
        (n.AVAX = "43114");
      let i = ["1", "42161", "10", "137", "8453", "900900900", "43114"],
        s = {
          name: "Ethereum",
          public_rpc_url: "https://ethereum-rpc.publicnode.com",
          chain_id: "1",
          currency_symbol: "ETH",
          explorer_base_url: "https://etherscan.io/",
          vault_address: "0x816f722424b49cf1275cc86da9840fbd5a6167e9",
        },
        u = [
          {
            name: "Arbitrum",
            public_rpc_url: "https://arb1.arbitrum.io/rpc",
            chain_id: "42161",
            currency_symbol: "ETH",
            explorer_base_url: "https://arbiscan.io",
            vault_address: "0x816f722424B49Cf1275cc86DA9840Fbd5a6167e9",
          },
          {
            name: "Optimism",
            public_rpc_url: "https://optimism.publicnode.com",
            chain_id: "10",
            currency_symbol: "ETH",
            explorer_base_url: "https://optimistic.etherscan.io/",
            vault_address: "0x816f722424b49cf1275cc86da9840fbd5a6167e9",
          },
          {
            name: "Polygon",
            public_rpc_url: "https://polygon-bor.publicnode.com",
            chain_id: "137",
            currency_symbol: "MATIC",
            explorer_base_url: "https://polygonscan.com/",
            vault_address: "0x816f722424b49cf1275cc86da9840fbd5a6167e9",
          },
          s,
          {
            name: "Solana",
            public_rpc_url: "",
            chain_id: "900900900",
            currency_symbol: "SOL",
            explorer_base_url: "",
            vault_address: "",
          },
        ],
        d = [
          {
            name: "Arbitrum-Sepolia",
            public_rpc_url:
              "https://arbitrum-sepolia.blockpi.network/v1/rpc/public",
            chain_id: "421614",
            currency_symbol: "ETH",
            explorer_base_url: "https://sepolia.arbiscan.io",
            vault_address: "0xB15a3a4D451311e03e34d9331C695078Ad5Cf5F1",
            broker_ids: ["woofi_dex", "woofi_pro", "rkqa_dex"],
          },
          {
            name: "Sepolia",
            public_rpc_url: "https://sepolia.infura.io/v3",
            chain_id: "11155111",
            currency_symbol: "ETH",
            explorer_base_url: "https://sepolia.etherscan.io",
            vault_address: "0xB15a3a4D451311e03e34d9331C695078Ad5Cf5F1",
            broker_ids: ["woofi_dex", "woofi_pro", "rkqa_dex"],
          },
          {
            name: "Solana Devnet",
            public_rpc_url: "",
            chain_id: "901901901",
            currency_symbol: "SOL",
            explorer_base_url: "",
            vault_address: "",
          },
          {
            name: "Avalanche Fuji Testnet",
            public_rpc_url: "https://api.avax-test.network/ext/bc/c/rpc",
            chain_id: "43113",
            currency_symbol: "AVAX",
            explorer_base_url: "https://testnet.snowscan.xyz",
            vault_address: "0x816f722424B49Cf1275cc86DA9840Fbd5a6167e9",
          },
        ];
      function p() {
        let [e, t] = (0, c.useState)([]);
        return (
          (0, c.useEffect)(() => {
            (0, a.U2)("https://api-evm.orderly.org/v1/public/chain_info")
              .then((e) => {
                let r =
                  null == e
                    ? void 0
                    : e.rows.filter((e) => i.includes(e.chain_id));
                t(() => ((0, l.H0)() ? r : [...r, ...d]));
              })
              .catch((e) => t(u));
          }, []),
          e
        );
      }
    },
    34082: function (e, t, r) {
      r.r(t),
        r.d(t, {
          WalletAdapterContextProvider: function () {
            return g;
          },
          useWalletAdapterContext: function () {
            return y;
          },
        });
      var n = r(6272),
        o = r(8627),
        c = r(26365),
        a = r(38820),
        l = r(94528),
        i = r(10671),
        s = r(30963),
        u = r(27537),
        d = r(75443),
        p = r(66402),
        f = r(74205),
        h = r(59580),
        v = r(70329),
        m = r(31313),
        b = r(72798);
      let w = {
          namespace: "EVM",
          setNamespace: () => {},
          walletAdapter: void 0,
          currentChain: v.jd,
          setCurrentChain: () => {},
          onConnect: () => Promise.resolve(),
          isNotSupportChain: !1,
        },
        _ = (0, o.createContext)(w),
        g = (e) => {
          let { children: t } = e,
            { chains: r } = (0, b.useAppContext)(),
            w = (function () {
              let [{ wallet: e }, t, r] = (0, c.Or)(),
                [{ connectedChain: n }, l] = (0, c.Um)(),
                i = (0, o.useMemo)(() => !!e && !!e.accounts, [e]),
                s = (0, o.useMemo)(() => {
                  if (e && e.accounts) return e.accounts[0].address;
                }, [e]);
              return {
                connected: i,
                connect: t,
                disconnect: (0, o.useCallback)(() => {
                  console.log("-- disconnect evm", e),
                    e && r({ label: null == e ? void 0 : e.label }).then();
                }, [r, e]),
                userAddress: s,
                changeChain: (e) => l({ chainId: (0, a.Rf)(e.chain_id) }),
                namespace: "EVM",
                connectedChain: n ? (0, a._i)(n.id).toString() : void 0,
              };
            })(),
            g = (function () {
              let { setVisible: e, visible: t } = (0, l.h)(),
                { connection: r } = (0, i.R)(),
                n = (0, o.useMemo)(
                  () =>
                    "prod" === (0, h.dU)()
                      ? v.oK.SOLANA_MAINNET
                      : v.oK.SOLANA_DEVNET,
                  []
                ),
                {
                  signMessage: c,
                  sendTransaction: a,
                  publicKey: m,
                  wallet: b,
                  connect: w,
                  disconnect: _,
                  connecting: g,
                } = (0, s.O)(),
                y = (0, o.useRef)(!1),
                [k, U] = (0, o.useState)(!1),
                x = (0, o.useRef)(!1),
                S = (0, o.useRef)({
                  walletSelect: null,
                  connect: null,
                  walletSelectResolve: () => {},
                  walletSelectReject: () => {},
                  connectReject: () => {},
                  connectResolve: () => {},
                }),
                E = () => {
                  console.log("-- init solana promise"),
                    (S.current.walletSelectResolve = () => {}),
                    (S.current.walletSelectReject = () => {}),
                    (S.current.connectReject = () => {}),
                    (S.current.connectReject = () => {}),
                    (S.current.connect = null),
                    (S.current.walletSelect = null),
                    (S.current.walletSelect = new Promise((e, t) => {
                      (S.current.walletSelectResolve = e),
                        (S.current.walletSelectReject = t);
                    })),
                    (S.current.connect = new Promise((e, t) => {
                      (S.current.connectResolve = e),
                        (S.current.connectReject = t);
                    }));
                },
                C = (0, f.a)("(min-width: 1024px)"),
                A = (0, o.useMemo)(() => {
                  if (m) return m.toBase58();
                }, [m]),
                R = (e) => {
                  console.log("solan connect error", e),
                    e instanceof u.OZ &&
                      (console.log("-- need toast wallet not ready"),
                      p.toast.error(
                        "Please open the wallet app and use the in-app browser."
                      )),
                    _().then();
                },
                M = async () => {
                  if ((E(), (x.current = !0), S.current)) {
                    if (b) {
                      if ((S.current.walletSelectResolve(b), m))
                        S.current.connectResolve({
                          userAddress: m.toBase58(),
                          signMessage: c,
                          sendTransaction: a,
                        });
                      else
                        try {
                          await w();
                        } catch (e) {
                          S.current.connectReject(e);
                        }
                    } else e(!0), (y.current = !0);
                    return (
                      console.log("-- connect fn", b, m),
                      Promise.all([S.current.walletSelect, S.current.connect])
                        .then((e) => {
                          let [
                            t,
                            {
                              userAddress: r,
                              signMessage: n,
                              sendTransaction: o,
                            },
                          ] = e;
                          return U(!0), [];
                        })
                        .catch(
                          (e) => (
                            console.log("connect solana error", e),
                            R(e),
                            Promise.reject(e)
                          )
                        )
                        .finally(() => {
                          x.current = !1;
                        })
                    );
                  }
                },
                T = async () => (
                  console.log("--- discconnect sol"), await _(), U(!1), []
                );
              return (
                (0, o.useEffect)(() => {
                  y.current &&
                    (t || b || !S.current
                      ? b && (y.current = !1)
                      : (console.log("-- select modal visible ref", y.current),
                        console.log("-- use reject solana select modal"),
                        S.current.walletSelectReject("user reject"),
                        (y.current = !1)));
                }, [t, b, S.current, y.current]),
                (0, o.useEffect)(() => {
                  if (!b || !m) {
                    console.log("--- not connect sol", b, m), U(!1);
                    return;
                  }
                  if (
                    (console.log("-- publick", {
                      publicKey: m.toBase58(),
                      isManual: x.current,
                    }),
                    x.current)
                  ) {
                    S.current &&
                      S.current.connectResolve({
                        userAddress: null == m ? void 0 : m.toBase58(),
                        signMessage: c,
                        sendTransaction: a,
                      });
                    return;
                  }
                  console.log("-- tt"), U(!0);
                }, [m, b, c, x, r, a]),
                (0, o.useEffect)(() => {
                  if (b) {
                    if (
                      (console.log("-- public key", m, { isMobile: C }),
                      C && b.readyState === d.i1.Loadable && !x.current)
                    ) {
                      _().then();
                      return;
                    }
                    console.log("-- solana refresh auto connect", b),
                      S.current && S.current.walletSelectResolve(b),
                      w()
                        .then((e) => {
                          console.log("-- connect res", e);
                        })
                        .catch((e) => {
                          S.current.connectReject(e), R(e);
                        });
                  }
                }, [b, w, m, _, R, C]),
                {
                  connected: k,
                  connect: M,
                  disconnect: T,
                  userAddress: A,
                  namespace: "SOL",
                  connectedChain: n,
                }
              );
            })(),
            [y, k] = (0, o.useState)(v.jd),
            [U, x] = (0, o.useState)("EVM"),
            S = (0, o.useRef)("EVM"),
            E =
              "EVM" === U && w.connected
                ? w
                : "SOL" === U && g.connected
                ? g
                : void 0,
            C = (0, o.useMemo)(
              () =>
                !!r &&
                !!r.length &&
                null != E &&
                !!E.connectedChain &&
                !r.find((e) => e.chain_id === E.connectedChain),
              [null == E ? void 0 : E.connectedChain, r]
            ),
            A = (0, o.useCallback)(
              async (e) => {
                let t = null != e ? e : y;
                try {
                  if (m.d.includes(t.chain_id)) {
                    S.current = "SOL";
                    let e = await g.connect();
                    console.log("-- [wallet adapter] solana connect res ", e);
                  } else {
                    S.current = "EVM";
                    let e = await w.connect();
                    if (
                      (console.log(
                        "-- [wallet adapter] web3-onboard connect res",
                        e
                      ),
                      !e || !e.length)
                    )
                      return;
                    if (w.changeChain) return w.changeChain(t);
                  }
                } catch (e) {
                  console.log("--  connect error", e);
                }
              },
              [g, w, y]
            );
          (0, o.useEffect)(() => {
            if (!r || !r.length) return;
            let e = r[0];
            E &&
              E.connectedChain &&
              (e =
                null == r
                  ? void 0
                  : r.find((e) => e.chain_id === E.connectedChain)),
              k(null != e ? e : r[0]);
          }, [U, E, r]),
            (0, o.useEffect)(() => {
              if (
                (console.log("--- change connecter", g, w, S.current),
                w.connected && g.connected)
              ) {
                "EVM" === S.current ? g.disconnect() : w.disconnect();
                return;
              }
              w.connected && x("EVM"), g.connected && x("SOL");
            }, [S, g.connected, w.disconnect, g.disconnect, w.connected]);
          let R = (0, o.useMemo)(
            () => ({
              namespace: U,
              setNamespace: x,
              walletAdapter: E,
              currentChain: y,
              setCurrentChain: k,
              onConnect: A,
              isNotSupportChain: C,
            }),
            [U, x, E, y, k, A, C]
          );
          return (0, n.jsx)(_.Provider, { value: R, children: t });
        },
        y = () => (0, o.useContext)(_);
    },
    74205: function (e, t, r) {
      r.d(t, {
        a: function () {
          return o;
        },
      });
      var n = r(8627);
      function o(e) {
        let t = (e) => window.matchMedia(e).matches,
          [r, o] = (0, n.useState)(t(e));
        function c() {
          o(t(e));
        }
        return (
          (0, n.useEffect)(() => {
            var t, r;
            let n =
              null === (t = window) || void 0 === t ? void 0 : t.matchMedia(e);
            return (
              c(),
              (null == n ? void 0 : n.addListener)
                ? null == n || n.addListener(c)
                : null == n ||
                  null === (r = n.addEventListener) ||
                  void 0 === r ||
                  r.call(n, "change", c),
              () => {
                if (null == n ? void 0 : n.removeListener)
                  null == n || n.removeListener(c);
                else {
                  var e;
                  null == n ||
                    null === (e = n.removeEventListener) ||
                    void 0 === e ||
                    e.call(n, "change", c);
                }
              }
            );
          }, [e]),
          r
        );
      }
    },
    31313: function (e, t, r) {
      r.d(t, {
        d: function () {
          return n;
        },
      });
      let n = ["900900900", "901901901"];
    },
    59580: function (e, t, r) {
      r.d(t, {
        H0: function () {
          return a;
        },
        Y9: function () {
          return n;
        },
        _b: function () {
          return i;
        },
        ac: function () {
          return l;
        },
        dU: function () {
          return c;
        },
        nk: function () {
          return o;
        },
      });
      let n = {
          prod: {
            apiBaseUrl: "https://api-evm.orderly.org",
            publicWsUrl: "wss://ws-evm.orderly.org",
            privateWsUrl: "wss://ws-private-evm.orderly.org",
            operatorUrl: "https://operator-evm.orderly.org",
            apyUrl:
              "https://w5u8gvnzy2.execute-api.ap-northeast-1.amazonaws.com/mainnet",
            orderlyRpc: "https://rpc.orderly.network",
            stakeUrl: "/staking",
            airdropUrl: "https://airdrop.orderly.network",
          },
          staging: {
            apiBaseUrl: "https://testnet-api-evm.orderly.org",
            publicWsUrl: "wss://testnet-ws-evm.orderly.org",
            privateWsUrl: "wss://testnet-ws-private-evm.orderly.org",
            operatorUrl: "https://testnet-operator-evm.orderly.org",
            apyUrl:
              "https://w5u8gvnzy2.execute-api.ap-northeast-1.amazonaws.com/mainnet",
            airdropUrl: "https://staging-airdrop.orderly.network",
            orderlyRpc: "https://testnet-rpc.orderly.org",
            stakeUrl: "/staking",
          },
          dev: {
            apiBaseUrl: "https://dev-api-iap-v2.orderly.org",
            publicWsUrl: "wss://dev-ws-v2.orderly.org",
            privateWsUrl: "wss://dev-ws-private-v2.orderly.org",
            operatorUrl: "https://dev-operator-v2.orderly.network",
            apyUrl:
              "https://vpy7ops99f.execute-api.ap-northeast-1.amazonaws.com/testnet",
            airdropUrl: "https://dev-airdrop.orderly.network",
            orderlyRpc: "https://testnet-rpc.orderly.org",
            stakeUrl: "https://dev-app.orderly.network/staking",
          },
          qa: {
            apiBaseUrl: "https://qa-api-evm.orderly.org",
            publicWsUrl: "wss://qa-ws-evm.orderly.org",
            privateWsUrl: "wss://qa-ws-private-evm.orderly.org",
            operatorUrl: "https://qa-operator-evm.orderly.network",
            apyUrl:
              "https://vpy7ops99f.execute-api.ap-northeast-1.amazonaws.com/testnet",
            orderlyRpc: "https://testnet-rpc.orderly.org",
            stakeUrl: "https://qa-app.orderly.network/staking",
            airdropUrl: "https://qa-airdrop.orderly.network",
          },
        },
        o = {
          "dev-app.orderly.network": "dev",
          "qa-app.orderly.network": "qa",
          "staging-app.orderly.network": "staging",
          "app.orderly.network": "prod",
          localhost: "qa",
        };
      function c() {
        return o[window.location.hostname] || "prod";
      }
      function a() {
        return "prod" === c();
      }
      function l() {
        return n[c()];
      }
      function i() {
        return l().orderlyRpc;
      }
    },
    48335: function (e, t, r) {
      r.d(t, {
        U2: function () {
          return c;
        },
      });
      var n = r(59580);
      async function o(e, t) {
        return new Promise((r, n) =>
          fetch(e, t)
            .then((e) => e.json())
            .then((e) => {
              e.success ? r(e.data) : n(null == e ? void 0 : e.message);
            })
            .catch((e) => {
              n(e);
            })
        );
      }
      async function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = n.Y9[n.nk[window.location.hostname] || "prod"];
        return o(
          (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = Object.keys(t)
                .map((e) => (t[e] ? "".concat(e, "=").concat(t[e]) : null))
                .filter((e) => !!e)
                .join("&");
            return r ? "".concat(e, "?").concat(r) : e;
          })(e.includes("http") ? e : "".concat(r.apiBaseUrl).concat(e), t),
          { method: "GET" }
        );
      }
    },
    38820: function (e, t, r) {
      r.d(t, {
        LE: function () {
          return _;
        },
        Rf: function () {
          return u;
        },
        Tg: function () {
          return v;
        },
        _i: function () {
          return d;
        },
        cn: function () {
          return s;
        },
        h2: function () {
          return m;
        },
        p6: function () {
          return h;
        },
        u3: function () {
          return w;
        },
        uf: function () {
          return p;
        },
      });
      var n = r(28063),
        o = r(1411),
        c = r(23540),
        a = r(73739),
        l = r(6468),
        i = r.n(l);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.m6)((0, o.cx)(...t));
      }
      function u(e) {
        let t = e;
        return (
          "string" == typeof e && (t = parseInt(e)), "0x".concat(t.toString(16))
        );
      }
      let d = (e) => parseInt(e);
      function p(e, t) {
        let {
          floor: r,
          decimal: n,
          rounding: o,
          removeEndZero: c = !0,
        } = t || {};
        if (void 0 !== e) {
          if (void 0 !== n) {
            let t = new (i())(e)
                .todp(n, null != o ? o : i().ROUND_DOWN)
                .toNumber(),
              a = f(r ? b(t) : t, c);
            if (c) return a;
            if (a.includes(".")) {
              let e = a.split(".");
              return e[0] + "." + e[1].padEnd(n, "0");
            }
            return a;
          }
          return f(r ? b(e) : e, c);
        }
        return null != e ? e : "--";
      }
      let f = (e, t) => {
        let r;
        if (void 0 === e) return "--";
        var n = e.toString().split(".");
        let o = n[0],
          c = n[1],
          a = e.toString().endsWith(".") && e.toString().length > 1,
          l =
            o.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
            (c ? "." + c : a ? "." : "");
        return !1 === t
          ? l
          : (r = l.replace(/(\.[0-9]*[1-9])0+$/, "$1")).match(/\.\d*0+$/)
          ? r.replace(/\.\d*0+$/, "")
          : r;
      };
      function h(e) {
        let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
          r = "MMM dd, hh:mm a";
        return "string" == typeof e
          ? (0, c.WU)(t ? new a.e(e) : new Date(e), r)
          : (0, c.WU)(t ? new a.e(e) : e, r);
      }
      function v(e) {
        return (null == e ? void 0 : e.startsWith("0x")) || e.length > 8
          ? ""
              .concat(null == e ? void 0 : e.slice(0, 4), "...")
              .concat(null == e ? void 0 : e.slice(-4))
          : e;
      }
      function m() {
        return [
          "localhost",
          "dev-app.orderly.network",
          "qa-app.orderly.network",
        ].includes(window.location.hostname);
      }
      function b(e) {
        var t;
        return 0 === (e = Number(e)) || isNaN(e)
          ? "0.00"
          : e
          ? Number.isInteger(e)
            ? "".concat(e, ".00")
            : /^\d+\.\d{1}$/g.test(e.toString())
            ? "".concat(e, "0")
            : null === (t = e.toString().match(/^\d+(?:\.\d{0,2})?/)) ||
              void 0 === t
            ? void 0
            : t[0]
          : e;
      }
      let w = 864e5;
      function _(e) {
        e();
        let t = 0,
          r = setInterval(() => {
            e(), 4 === (t += 1) && clearInterval(r);
          }, 5e3);
        setTimeout(() => {
          e();
        }, t);
      }
    },
    31960: function (e, t, r) {
      r.d(t, {
        $s: function () {
          return o;
        },
        He: function () {
          return h;
        },
        IW: function () {
          return l;
        },
        LZ: function () {
          return f;
        },
        Lx: function () {
          return p;
        },
        M1: function () {
          return d;
        },
        OB: function () {
          return v;
        },
        Us: function () {
          return a;
        },
        ck: function () {
          return s;
        },
        qT: function () {
          return c;
        },
        ql: function () {
          return i;
        },
        uk: function () {
          return u;
        },
      });
      var n = r(48335);
      async function o() {
        return (0, n.U2)("/v1/public/trading_rewards/epoch_info");
      }
      async function c() {
        return (0, n.U2)("/v1/public/market_making_rewards/epoch_info");
      }
      async function a(e, t) {
        return void 0 !== t
          ? (0, n.U2)(
              "/v1/public/trading_rewards/wallet_rewards_history?address="
                .concat(e, "&broker_id=")
                .concat(t)
            )
          : (0, n.U2)(
              "/v1/public/trading_rewards/wallet_rewards_history?address=".concat(
                e
              )
            );
      }
      async function l(e, t) {
        return void 0 !== t
          ? (0, n.U2)(
              "/v1/public/market_making_rewards/group_rewards_history?address="
                .concat(e, "&broker_id=")
                .concat(t)
            )
          : (0, n.U2)(
              "/v1/public/market_making_rewards/group_rewards_history?address=".concat(
                e
              )
            );
      }
      async function i(e) {
        return (0, n.U2)(
          "/v1/public/trading_rewards/current_epoch_estimate?address=".concat(e)
        );
      }
      async function s(e) {
        return (0, n.U2)(
          "/v1/public/market_making_rewards/current_epoch_estimate?address=".concat(
            e
          )
        );
      }
      async function u() {
        return (0, n.U2)(
          "/v1/public/trading_rewards/current_epoch_broker_estimate"
        );
      }
      async function d(e) {
        return (0, n.U2)(
          "/v1/public/trading_rewards/account_rewards_history?address=".concat(
            e
          )
        );
      }
      async function p() {
        return (0, n.U2)("/v1/public/broker/name");
      }
      async function f() {
        return (0, n.U2)(
          "/v1/public/trading_rewards/broker_allocation_history"
        );
      }
      async function h(e, t) {
        return (0, n.U2)(
          "/v1/public/trading_rewards/claim_input?address="
            .concat(e, "&token=")
            .concat(t)
        );
      }
      async function v(e, t) {
        return (0, n.U2)(
          "/v1/public/market_making_rewards/claim_input?address="
            .concat(e, "&token=")
            .concat(t)
        );
      }
    },
  },
]);
