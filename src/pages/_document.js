import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  const siteTitle = "Wedding Invitation Dhody & Arisa";
  const siteDesc =
    "12 Februari 2024 - Desa Panjerejo - Rejotangan - Tulungagung - Jawa Timur";
  const siteKey =
    "dhody, arisa, wedding, invitation";

  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{siteTitle}</title>
        <meta property="title" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta name="keywords" content={siteKey} />
        <meta
          property="og:image"
          content="https://dyuan.my.id/assets/gallery/DSC07639.jpg"
        />
        <meta property="og:image:alt" content="dyuanarisa" />
        <meta property="og:url" content="https://dyuan.my.id/" />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
