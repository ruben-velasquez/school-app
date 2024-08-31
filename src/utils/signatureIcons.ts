import {
  BiLeaf,
  BiMath,
  BiQuestionMark,
  BiBasket,
  BiBookAlt,
  BiBrain,
  BiFootball,
  BiCodeAlt,
  BiLandscape,
  BiLineChart,
} from "react-icons/bi";
import { TbLanguage } from "react-icons/tb";
import { VscLaw } from "react-icons/vsc";

export const icons = {
  leaf: BiLeaf,
  math: BiMath,
  none: BiQuestionMark,
  basket: BiBasket,
  book: BiBookAlt,
  brain: BiBrain,
  football: BiFootball,
  code: BiCodeAlt,
  language: TbLanguage,
  law: VscLaw,
  landscape: BiLandscape,
  linechart: BiLineChart,
};

export function getIconByName(name: string) {
  return icons[name as keyof typeof icons] || BiQuestionMark;
}
