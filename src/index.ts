import fetch from "node-fetch";
import cheerio from "cheerio";

type Metadata = {
  [key: string]: string;
};

const getHtml = async (url: string) => {
  const response = await fetch(url);

  const responseText = await response.text();

  return responseText;
};

const getMetadataForHtml = (html: string) => {
  const metadata: Metadata = {};

  const $ = cheerio.load(html);

  $("meta").each((_, element) => {
    const attribute = $(element).attr();

    metadata[attribute.property] = attribute.content;
  });

  return metadata;
};

const getMetadataForUrl = async (url: string) => {
  const html = await getHtml(url);

  return getMetadataForHtml(html);
};

export { getMetadataForHtml, getMetadataForUrl };
