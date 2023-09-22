import { Html, Head, Main, NextScript } from "next/document";
import { PWAConfig, HeadSeo } from "@hbarve1.com/react-pure-components";
import { siteConfig } from "../site.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <HeadSeo
          title={siteConfig.title}
          description={siteConfig.description}
          keywords={siteConfig.keywords}
          url={siteConfig.url}
          image={siteConfig.logo}
        /> */}
        {/*
        <PWAConfig
          icon={siteConfig.icon}
          meta={siteConfig.meta}
          links={siteConfig.links}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
