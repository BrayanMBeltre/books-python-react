import { pageFormats } from "@/constant";

type TBase = {
  id: number;
};

export type TBook = TBase & {
  title: string;
  author: string;
};

export type TPage = TBase & {
  book: number;
  number: number;
  txt?: string;
  html?: string;
};

export type TPageFormats = (typeof pageFormats)[number];
