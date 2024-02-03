---
title: "Intenship"
date: "4-12-2023"
author: "Joshua"
---

Ever since the pandemic started, I've noticed QR codes creeping into my daily life. Venue check-ins, digital menus at restaurants, and online payments.

I thought it'd be fun to explore the technology a little bit, so I've built a micro web-app that lets you save messages and view them later using a QR code. Sort of a "Hello World" QR code project.

In this post, I'll be sharing how I built this using Python and AWS free tier.


## What is a QR Code?

> This International Standard [...] specifies the QR Code symbology characteristics, data character encoding methods, symbol formats, dimensional characteristics, error correction rules [...]

As long an image respects these standard, it is a "QR code" and can be understood by most smartphone cameras. The image itself also has a kind of anatomy:


It is quite interesting, but ultimately these were the three things I cared about:

- We can store up to around 4000 alpha-numeric symbols in a standard sized QR code.
- QR codes can have a "URL" format, which will prompt phones to open it up in a browser when scanned.
- QR codes have error-correction capabilities, which allow it to remain function even if some parts of it is covered or removed—_I did not know this!_

