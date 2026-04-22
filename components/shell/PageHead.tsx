import Head from "next/head";

interface Props {
  title: string;
  description: string;
  url?: string;
  image?: string;
  themeColor?: string;
}

export default function PageHead({
  title,
  description,
  url = "https://sharkfin.sh",
  image = "/brand/sharkfin-og.webp",
  themeColor = "#ffffff",
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={themeColor} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
