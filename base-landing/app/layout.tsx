import type { Metadata } from 'next';
import Script from "next/script";
import GlobalConst from "./var-global";
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
  return {
    __html: `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": '${GlobalConst.domain}',
  "operatingSystem": "ANDROID",
  "applicationCategory": "GameApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "10394854"
  },
"review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
"author": {
          "@type": "Person",
          "name": '${GlobalConst.title}',
          "reviewBody": '${GlobalConst.desc}'
        }
      },
  "offers": {
    "@type": "Offer",
    "price": "10000",
    "priceCurrency": "IDR"
  }
}
`,
  };
}

function histats() {
  return {
    __html: `
      var _Hasync= _Hasync|| [];
      _Hasync.push(['Histats.start', '${GlobalConst.histats}']);
      _Hasync.push(['Histats.fasi', '1']);
      _Hasync.push(['Histats.track_hits', '']);
      (function() {
      var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
      hs.src = ('//s10.histats.com/js15_as.js');
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
      })();
    `,
  };
};

export const metadata: Metadata = {
  title: GlobalConst.title,
  description: GlobalConst.desc,
  keywords: GlobalConst.keywords,
  applicationName: GlobalConst.brandName,
  authors: [
    { name: GlobalConst.brandName, 
      url: GlobalConst.domain 
    }],
  category: 'slot',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  publisher: GlobalConst.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: GlobalConst.domain,
  },
  openGraph: {
    title: GlobalConst.title,
    description: GlobalConst.desc,
    images: [
      {
        url: GlobalConst.domain,
        width: '840',
        height: '480',
    },
  ],
    siteName: GlobalConst.brandName,
    url: GlobalConst.domain,
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: "summary",
    title: GlobalConst.title,
    description: GlobalConst.desc,
    creator: GlobalConst.brandName,
    images: GlobalConst.domain,
    site: GlobalConst.domain,
  },
  other: {
    'geo.region': 'ID',
    'geo.placename': 'Indonesia',
    'language': 'id-ID',
    'rating': 'general',
    'geo.country': 'ID',
    'page-locale': 'id,en',
    'copyright': GlobalConst.brandName,
    'HandheldFriendly': 'true',
    'MobileOptimized': 'width',
    'distribution': 'global',
  },verification: {
    google: GlobalConst.gsc,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <body className={`${inter.variable} antialiased`}>{children}</body>
      <Script id="histats" type="text/javascript" strategy="afterInteractive" dangerouslySetInnerHTML={histats()} />
      <Script id="rank" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
    </html>
  );
}
