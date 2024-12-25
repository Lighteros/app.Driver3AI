"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8133],
  {
    47243: function (e, r, t) {
      t.d(r, {
        Z: function () {
          return n;
        },
      });
      var s = t(6272);
      t(8627);
      var l = (e) =>
          (0, s.jsxs)("picture", {
            children: [
              (0, s.jsx)("source", {
                srcSet: e.src,
                media: "(min-width: 768px)",
              }),
              (0, s.jsx)("source", {
                srcSet: e.mobileSrc,
                media: "(min-width: 375px)",
              }),
              (0, s.jsx)("img", {
                style: e.style,
                className: e.className,
                src: e.src,
                alt: e.alt,
              }),
            ],
          }),
        i = t(38820),
        n = () =>
          (0, s.jsx)(l, {
            src: "/elixir/elixir-bg.png",
            mobileSrc: "/elixir/elixir-bg_375.png",
            alt: "elixir-bg",
            className: (0, i.cn)(
              "object-cover w-full absolute top-[122px] md:top-[150px] left-0",
              "md:h-[670px]",
              "lg:h-[794px]",
              "xl:h-[892px]",
              "2xl:h-[987px]"
            ),
          });
    },
    20933: function (e, r, t) {
      var s = t(6272),
        l = t(38820);
      t(8627),
        (r.Z = (e) =>
          (0, s.jsx)("div", {
            className: (0, l.cn)(
              "max-w-[1440px] mx-auto",
              "px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px]",
              e.className
            ),
            children: e.children,
          }));
    },
    54576: function (e, r, t) {
      var s = t(6272);
      t(8627);
      var l = t(38820);
      r.Z = (e) =>
        (0, s.jsx)("div", {
          className: (0, l.cn)("h-[1px] bg-primary-8", e.className),
        });
    },
    41356: function (e, r, t) {
      t.d(r, {
        u: function () {
          return p;
        },
      });
      var s = t(6272);
      t(8627);
      var l = t(38820),
        i = t(60866),
        n = (e) => {
          let { isMaintenance: r } = e;
          return (0, s.jsxs)("div", {
            className: (0, l.cn)(
              "flex items-center h-[35px] px-[12px] text-white text-xs leading-[12px] rounded-full",
              "border-[1px] border-solid",
              r
                ? "bg-[rgb(209,150,255,0.06)] border-[#D196FF33]"
                : (0, l.cn)(
                    "[background:linear-gradient(90deg,rgba(51,243,255,0.06)_-2.56%,rgba(0,220,154,0.06)_100%)]",
                    " border-[rgba(66,255,221,0.05)]"
                  )
            ),
            children: [
              (0, s.jsx)("div", {
                className: (0, l.cn)(
                  "w-[6px] h-[6px] mr-[6px] rounded-full",
                  r ? "bg-[#D196FF]" : "bg-[#24AD8F]"
                ),
              }),
              (0, s.jsx)("div", {
                className: "tracking-[0.05em]",
                children: r
                  ? "System under maintenance."
                  : "All systems operational.",
              }),
            ],
          });
        };
      let o = [
      ];
      var c = () =>
          (0, s.jsx)("div", {
            className: (0, l.cn)("flex"),
            children: o.map((e) =>
              (0, s.jsx)(
                "div",
                {
                  children: (0, s.jsx)("div", {
                    className: "flex flex-col ml-[16px]",
                    children: (0, s.jsx)(
                      "a",
                      {
                        href: e.url,
                        target: e.target,
                        className:
                          "text-primary-54 hover:text-primary-100 my-[8px]",
                        children: e.title,
                      },
                      e.url || e.title
                    ),
                  }),
                },
                e.title
              )
            ),
          }),
        d = t(54576);
      let a = [       
        {
          icon: (e) =>
            (0, s.jsxs)("svg", {
              width: "16",
              height: "17",
              viewBox: "0 0 16 17",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, s.jsx)("g", {
                  clipPath: "url(#clip0_4349_1200)",
                  children: (0, s.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 8.93961C16 13.3579 12.4183 16.9396 8 16.9396C3.58172 16.9396 0 13.3579 0 8.93961C0 4.52133 3.58172 0.939606 8 0.939606C12.4183 0.939606 16 4.52133 16 8.93961ZM8.28668 6.84556C7.50857 7.1692 5.95342 7.83907 3.62126 8.85515C3.24256 9.00575 3.04417 9.15308 3.02611 9.29714C2.99559 9.5406 3.30047 9.63647 3.71565 9.76702C3.77212 9.78478 3.83064 9.80318 3.89062 9.82268C4.29909 9.95545 4.84855 10.1108 5.13419 10.117C5.3933 10.1226 5.68249 10.0157 6.00176 9.7965C8.18077 8.32561 9.30559 7.58215 9.37621 7.56612C9.42603 7.55481 9.49507 7.54059 9.54184 7.58217C9.58862 7.62375 9.58402 7.70249 9.57907 7.72361C9.54886 7.85237 8.35208 8.965 7.73275 9.54079C7.53967 9.72029 7.40272 9.84762 7.37472 9.8767C7.312 9.94184 7.24809 10.0035 7.18665 10.0627C6.80718 10.4285 6.52261 10.7028 7.20241 11.1508C7.52909 11.3661 7.79051 11.5441 8.05131 11.7217C8.33612 11.9157 8.62019 12.1091 8.98774 12.35C9.08139 12.4114 9.17082 12.4752 9.25793 12.5373C9.58938 12.7736 9.88717 12.9859 10.2551 12.952C10.4688 12.9324 10.6896 12.7313 10.8018 12.1318C11.0668 10.715 11.5878 7.64524 11.7081 6.38025C11.7187 6.26943 11.7054 6.12759 11.6948 6.06532C11.6841 6.00306 11.6618 5.91434 11.5809 5.84867C11.4851 5.7709 11.3371 5.7545 11.2709 5.75566C10.97 5.76096 10.5084 5.92148 8.28668 6.84556Z",
                  }),
                }),
                (0, s.jsx)("defs", {
                  children: (0, s.jsx)("clipPath", {
                    id: "clip0_4349_1200",
                    children: (0, s.jsx)("rect", {
                      width: "16",
                      height: "16",
                      fill: "white",
                      transform: "translate(0 0.939606)",
                    }),
                  }),
                }),
              ],
            }),
          url: i.nW.Community.Telegram,
        },
        {
          icon: (e) => {
            let { size: r = 16, ...t } = e;
            return (0, s.jsx)("svg", {
              width: "".concat(r, "px"),
              height: "".concat(r, "px"),
              viewBox: "0 0 16 17",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              ...t,
              children: (0, s.jsx)("path", {
                d: "M12.2174 2.20898H14.4663L9.55298 7.82465L15.3332 15.4663H10.8073L7.26253 10.8317L3.20647 15.4663H0.956125L6.21146 9.45971L0.666504 2.20898H5.30724L8.51143 6.44521L12.2174 2.20898ZM11.428 14.1202H12.6742L4.6301 3.48441H3.29281L11.428 14.1202Z",
              }),
            });
          },
          url: i.nW.Community.Twitter,
        },         
      ];
      var x = (e) =>
        (0, s.jsxs)("div", {
          children: [
            (0, s.jsx)(d.Z, { className: "bg-[rgba(255,255,255,0.2)]" }),
            (0, s.jsxs)("div", {
              className: (0, l.cn)(
                "flex flex-col md:flex-row justify-between items-start md:items-center",
                "py-[20px] px-[20px] md:px-[40px] lg:px-[60px] xl:px-[80px] ",
                "h-[110px] md:h-[74px]",
                "max-w-[1440px] mx-auto",
                e.className
              ),
              children: [
                (0, s.jsx)(n, { isMaintenance: !1 }),
                (0, s.jsxs)("div", {
                  className: (0, l.cn)(
                    "flex items-center justify-between md:justify-start",
                    "w-full md:w-auto"
                  ),
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center text-xs text-[#8C8C8C] tracking-[0.05em] mr-[8px]",
                      children: [
                        (0, s.jsx)("div", { children: "\xa9 2024 Orderly" }),
                        (0, s.jsx)("div", {
                          className: "hidden md:block",
                          children: (0, s.jsx)(c, {}),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center",
                      children: a.map((e) => {
                        let r = e.icon;
                        return (0, s.jsx)(
                          "a",
                          {
                            className:
                              "text-primary-54 hover:text-primary-100 pl-[16px]",
                            href: e.url,
                            target: "_blank",
                            children: (0, s.jsx)(r, {}),
                          },
                          e.url
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      let p = (e) =>
        (0, s.jsxs)("div", {
          className: (0, l.cn)(
            "relative bg-[#110621] min-h-screen flex flex-col",
            e.className
          ),
          children: [
            e.children,
            (0, s.jsx)("div", { className: "flex-grow" }),
            (0, s.jsx)(x, {}),
          ],
        });
    },
    2945: function (e, r, t) {
      t.d(r, {
        S: function () {
          return n;
        },
      });
      var s = t(6272),
        l = t(38820),
        i = t(8627);
      let n = (e) => {
        let {
            loading: r,
            children: t,
            className: n,
            loadingClassName: o,
            delayHide: c = 1e3,
          } = e,
          [d, a] = (0, i.useState)(!r);
        return (
          (0, i.useEffect)(() => {
            r &&
              setTimeout(() => {
                a(!0);
              }, c);
          }, [r, c]),
          (0, i.useEffect)(() => {
            d
              ? (document.body.style.overflow = "auto")
              : (document.body.style.overflow = "hidden");
          }, [d]),
          (0, s.jsxs)("div", {
            children: [
              t,
              (0, s.jsx)("div", {
                className: (0, l.cn)(
                  "fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-[#110621]",
                  d ? "hidden" : "block z-[9999]",
                  n
                ),
                children: (0, s.jsx)("div", {
                  className:
                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  children: (0, s.jsx)("img", {
                    src: "/pageloading.gif",
                    alt: "Loading...",
                    className: (0, l.cn)("h-[150px] w-[150px]", o),
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    60866: function (e, r, t) {
      t.d(r, {
        Ab: function () {
          return o;
        },
        T2: function () {
          return d;
        },
        nW: function () {
          return n;
        },
        t2: function () {
          return c;
        },
      });
      var s = t(84244),
        l = t(6468),
        i = t.n(l);
      let n = {
          Developers: {
            Documentation:
              "https://orderly.network/docs/getting-started/what-is-orderly-network",
            GitHub: "https://github.com/OrderlyNetwork",
            OrderlySDK: "https://sdk.orderly.network/docs/hooks/overview",
          },
          Traders: {
            TradingdApps:
              "https://orderly.network/docs/trade-on-orderly/trading-guis",
            APITrading:
              "https://orderly.network/docs/trade-on-orderly/trade-on-orderly",
          },
          Ecosystem: {
            Partners: "/partners",
            Blog: "/blog",
            RadianceVentures: "https://radianceventures.io/",
          },
          About: {
            Team: "/team",
            PressKit:
              "https://drive.google.com/drive/folders/1iFFFquS_5DnQWrAuz8q_5tfcs_Wf8i3s?usp=sharing",
            Careers: "https://boards.greenhouse.io/orderlynetwork ",
          },
          SocialCarnival: {
            SocialQuest: "/carnival",
            Lottery: "https://lottery.orderly.network",
            Referral: "https://referral.orderly.network",
          },
          Legal: {
            PrivacyPolicy: "https://orderly.network/docs/privacy-policy",
            TermsOfService: "https://orderly.network/docs/terms-of-service",
          },
          Main: {
            BuildWithOrderly:
              "https://orderly.network/docs/getting-started/what-is-orderly-network",
            TradeOnOrderly:
              "https://orderly.network/docs/trade-on-orderly/trading-guis",
            ExploreDocs:
              "https://orderly.network/docs/build-on-evm/building-on-evm",
            ViewAuditReports: "https://github.com/OrderlyNetwork/Audits",
            ViewMore: "/partners",
            StartBuildingNow:
              "https://orderly.network/docs/build-on-evm/building-on-evm",
            DropUsALine: "mailto:hello@orderly.network",
          },
          Community: {
            Discord: "https://discord.com/invite/orderlynetwork",
            Twitter: "https://twitter.com/OrderlyNetwork",
            Medium: "https://medium.com/@orderlynetwork",
            Linkedin: "https://www.linkedin.com/company/orderly-network",
            Telegram: "https://t.me/OrderlyNetworkDiscussions",
          },
        },
        o = 1.2,
        c = (e) =>
          (0, s.vz)(new (i())((0, s.dF)(e)).mul(o).todp(18).toString()),
        d = "https://oss.orderly.network/static/network_logo/";
    },
  },
]);
