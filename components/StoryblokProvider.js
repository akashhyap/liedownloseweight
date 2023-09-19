/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Blog from "./Blog";
import Hero from "./Hero";
import Grid from "./Grid";
import HtmlElements from "./HtmlElements";
import Title from "./Title";
import Button from "./Button";
import Config from "./Config";
import Menu from "./Menu";
import Submenu from "./Submenu";
import ImageBlock from "./ImageBlock";
import Section from "./Section";
import TextBlock from "./TextBlock";
import Contact from "./Contact";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    config: Config,
    menu: Menu,
    submenu: Submenu,
    page: Page,
    blog: Blog,
    hero: Hero,
    grid: Grid,
    htmlElements: HtmlElements,
    title: Title,
    button: Button,
    imageBlock: ImageBlock,
    section: Section,
    textBlock: TextBlock,
    contact: Contact,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
