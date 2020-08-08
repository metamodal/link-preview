import { getMetadataForHtml } from "./";

it("parses html to return metadata", () => {
  const mockHtml = `
    <html>

    <head>
      <meta property="og:site_name" content="YouTube">
      <meta property="og:url" content="https://www.youtube.com/watch?v=jNQXAC9IVRw">
    </head>

    </html>
  `;

  const expectedMetadata = {
    "og:site_name": "YouTube",
    "og:url": "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  };

  expect(getMetadataForHtml(mockHtml)).toMatchObject(expectedMetadata);
});
