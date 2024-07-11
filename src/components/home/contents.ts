import { TbBrandPython, TbBrandWindows } from "react-icons/tb";
import type { Contents } from "src/types/contents";

const contents: Contents = {
  title: "Kanaru's Portfolio 2.0",
  description: "A portfolio website for Kanaru",
  header: {
    text: "Kanaru",
    description: "the University of Electro-Communications",
  },
  about: {
    contents: [
      {
        title: "Introduction",
        body: [
          { text: "Kanaru" },
          { text: "電気通信大学情報理工学域 B2" },
          { text: "team411 代表" },
        ],
      },
      {
        title: "Profile",
        body: [{ text: "Since 2004" }],
      },
      {
        title: "Skills",
        body: [
          { text: "Python / PyTorch", Icon: TbBrandPython },
          { text: "C# / .NET Framework", Icon: TbBrandWindows },
          { text: "etc." },
        ],
      },
      {
        title: "Hobbies",
        body: [
          { text: "動画制作" },
          { text: "自宅鯖" },
          { text: "音楽ゲーム" },
        ],
      },
    ],
  },
  works: {
    contents: [
      {
        title: "Osansaku",
        body: [
          
        ]
      }
    ]
  }
};

export default contents;
