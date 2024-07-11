import { IconType } from "react-icons";

interface HeaderContents {
  text: string;
  description: string;
}

interface IconText {
  text: string;
  Icon?: IconType;
}

interface CardContent {
  title: string;
  body: IconText[];
  color?: string;
}

interface About {
  contents: CardContent[];
}

interface Works {
  contents: CardContent[];
}

interface Contents {
  title: string;
  description: string;
  header: HeaderContents;
  about: About;
  works: Works;
}
