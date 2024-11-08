import Head from "next/head";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "../config/config.js";

export default function Layout({
  children,
  pageTitle,
  description,
  categories,
}) {
  const defaultTitle = SITE_NAME;
  const defaultDescription = SITE_DESCRIPTION;
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Head>
        <title>
          {pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle}
        </title>
        <meta name="description" content={description || defaultDescription} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Add additional meta tags or links here */}
      </Head>

      {/* Header */}
      <Header />
      <div className="flex flex-grow">
        <Sidebar categories={categories} />
        <main className="flex-grow px-4 py-8">{children}</main>
      </div>
      {/* Main Content */}
      {/* <main className="container mx-auto px-4 py-8 flex-grow">{children}</main> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
