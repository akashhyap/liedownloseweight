import StoryblokClient from "storyblok-js-client";

export default async function sitemap() {
  const baseURL = "https://liedownloseweight.vercel.app";
  const Storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  });
  let links = await Storyblok.getAll("cdn/links", {
    version: "published",
  });
  const prefixUrl = baseURL;
  let sitemap_entries = links.map((link) => {
    if (link.is_folder) return;
    // using the translated_slug
    console.log("link", link);
    return {
      url: `${baseURL}${link.real_path}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...sitemap_entries
  ];
}
