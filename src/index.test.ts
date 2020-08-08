import fs from "fs";
import path from "path";
import { getMetadataForHtml, getMetadataForUrl } from "./";

const mockHtml = fs.readFileSync(
  path.resolve(__dirname, "../docs/mockpage.html"),
  "utf8"
);

const expectedMetadata = {
  "og:site_name": "YouTube",
  "og:url": "https://www.youtube.com/watch?v=jNQXAC9IVRw",
};

describe("getMetadataFromHtml", () => {
  it("parses html to return metadata", () => {
    expect(getMetadataForHtml(mockHtml)).toMatchObject(expectedMetadata);
  });
});

describe("getMetadataForUrl", () => {
  it("returns metadata from html document at given URL", async () => {
    await expect(
      getMetadataForUrl("https://metamodal.github.io/link-preview/mockpage")
    ).resolves.toMatchObject(expectedMetadata);
  });
});
