const configuredSiteUrl = import.meta.env["VITE_SITE_URL"] as string | undefined;

export const pageMeta = (title: string, description: string, path = "/") => {
  const canonical = configuredSiteUrl
    ? new URL(path, configuredSiteUrl.endsWith("/") ? configuredSiteUrl : `${configuredSiteUrl}/`)
        .href
    : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: "es_CO" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
};
