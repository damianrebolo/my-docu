---
id: se-http-headers
title: HTTP Security Headers
sidebar_label: HTTP Headers
slug: /http-security-headers
---

Whenever you navigate to a website, your browser requests a web page, and the server responds with the content along with HTTP headers. Headers such as cache-control are used by the browser to determine how long to cache content for, others such as content-type are used to indicate the media type of a resource and therefore how to interpret such resource.

## What are security headers?

Security headers are a group of headers in the HTTP response from a server that tell your browser how to behave when handling your site’s content.

The following is a list of most common headers:

- **Strict Transport Security**: Is an HTTP header that notifies user agents to only connect to a given site over HTTPS, even if the scheme chosen was HTTP
- **Content-Security-Policy**: Is an HTTP header that allows site operators fine-grained control over where resources on their site can be loaded from.
- **X-Content-Type-Options**: Is a header supported by Internet Explorer, Chrome and Firefox 50+ that tells it not to load scripts and stylesheets unless the server indicates the correct MIME type.
- **X-Frame-Options**: Is an HTTP header that allows sites control over how your site may be framed within an iframe.
- **X-XSS-Protection**: Is a feature of Internet Explorer and Chrome that stops pages from loading when they detect reflected cross-site scripting (XSS) attacks.
- **Referrer-Policy**: HTTP Referrer Policy allows sites to have fine-grained control over how and when browsers transmit the HTTP Referer header

:::important
For more information check: [Web Security Cheat Sheet](https://wiki.mozilla.org/Security/Guidelines/Web_Security).
I use [Mozilla Observatory](https://observatory.mozilla.org/) to rate my website
:::
