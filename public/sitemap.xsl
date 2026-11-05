<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap – GoReflexa</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #F8FAFC;
            color: #182230;
            padding: 30px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #E2E8F0;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }
          .header {
            padding: 28px 32px;
            background: #182230;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
          .brand {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .logo-badge {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: #ffffff;
            color: #182230;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 16px;
          }
          .logo-badge span {
            color: #6FAF91;
          }
          .title {
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.02em;
          }
          .tagline {
            font-size: 12px;
            color: #94A3B8;
            margin-top: 2px;
          }
          .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 9999px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            background: rgba(111, 175, 145, 0.15);
            color: #6FAF91;
            border: 1px solid rgba(111, 175, 145, 0.3);
          }
          .intro {
            padding: 20px 32px;
            background: #F1F5F9;
            border-bottom: 1px solid #E2E8F0;
            font-size: 13px;
            color: #475569;
          }
          .intro a {
            color: #182230;
            font-weight: 600;
            text-decoration: underline;
          }
          .table-wrap {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          th {
            background-color: #F8FAFC;
            color: #64748B;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            text-align: left;
            padding: 14px 24px;
            border-bottom: 1px solid #E2E8F0;
          }
          td {
            padding: 14px 24px;
            border-bottom: 1px solid #F1F5F9;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #F8FAFC;
          }
          a.loc-link {
            color: #182230;
            text-decoration: none;
            font-weight: 600;
          }
          a.loc-link:hover {
            color: #6FAF91;
            text-decoration: underline;
          }
          .pill {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 600;
            background: #EEF2F6;
            color: #334155;
          }
          .pill-green {
            background: rgba(111, 175, 145, 0.15);
            color: #2c5342;
          }
          .footer {
            padding: 16px 32px;
            background: #F8FAFC;
            border-top: 1px solid #E2E8F0;
            font-size: 11px;
            color: #94A3B8;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">
              <div class="logo-badge"><span>G</span>R</div>
              <div>
                <div class="title">GoReflexa XML Sitemap</div>
                <div class="tagline">"Break Your Limits. Build Your Life."</div>
              </div>
            </div>
            <div>
              <span class="badge">Valid XML Feed</span>
            </div>
          </div>
          <div class="intro">
            This XML Sitemap is indexed by search engines like <a href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview" target="_blank" rel="noopener">Google</a> and Bing to discover pages across <strong>goreflexa.com</strong>.
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style="width: 55%;">URL</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Change Freq</th>
                  <th style="width: 15%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}" class="loc-link">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span class="pill pill-green">
                        <xsl:value-of select="sitemap:priority"/>
                      </span>
                    </td>
                    <td>
                      <span class="pill">
                        <xsl:value-of select="sitemap:changefreq"/>
                      </span>
                    </td>
                    <td style="color: #64748B; font-size: 11px; font-family: monospace;">
                      <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
          <div class="footer">
            <span>Total URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            <span>Generated for Google Search Console • © GoReflexa Labs</span>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>