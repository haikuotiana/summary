module.exports = {
  lang: "zh-CN",
  port: "9000",
  // open: true,
  title: "咱们圈儿",
  description: "前端知识库网站",
  base: "/summary/",
  serviceWorker: true,
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/favicon.ico` },
    ],
    ["meta", { name: "description", content: "技术文章" }],
  ],
  themeConfig: {
    logo: "images/logo.png",
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
          },
        },
        navbar: [
          { text: "首页", link: "/" },
          {
            text: "基础",
            link: "/frontend/Javascript.html",
          },
          {
            text: "框架",
            children: ["/vue/", "/react/"],
          },
          {
            text: "文章",
            link: "/blog/Vue2.html",
          },
          {
            text: "关于我",
            children: [
              {
                text: "github",
                link: "https://github.com/haikuotiana",
              },
              {
                text: "源码",
                link: "https://github.com/haikuotiana/summary",
              }
            ],
          },
        ],
      },
    },
    sidebar: {
      "/frontend/": [
        {
          isGroup: true,
          text: "前端基础",
          children: [
            "/frontend/Javascript.md",
            "/frontend/Browser.md",
            "/frontend/Nodejs.md",
            "/frontend/Http.md",
          ],
        },
      ],
      "/vue/": [
        {
          isGroup: true,
          text: "vue",
          children: ["/vue/NextTick.md", "/vue/KeepAlive.md"],
        },
      ],
      "/react/": [
        {
          isGroup: true,
          text: "react",
          children: ["/react/hook.md", "/react/fiber.md"],
        },
      ],
      "/blog/": [
        {
          isGroup: true,
          text: "blog",
          children: [
            "/blog/Cache.md",
            "/blog/NextTick.md",
            "/blog/Element-Validate.md",
            "/blog/Function.md",
            "/blog/Bit.md",
            "/blog/Vue2.md",
            "/blog/Vue3.md",
          ],
        },
      ],
    },
  },
};
