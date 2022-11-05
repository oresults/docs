---
slug: vítejte
title: Vítejte na
authors:
  - slorber
  - yangshun
tags:
  - facebook
  - hello
  - docusaurus
---

[Funkce blogu Docusaurus](https://docusaurus.io/docs/blog) jsou poháněny pluginem blogu [](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Stačí přidat soubory (nebo složky) Markdown do adresáře blogu ``.

Běžné autory blogu lze přidat do souboru `authors.yml`.

Datum příspěvku na blogu lze vyčíst z názvů souborů, například:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

Složka příspěvků na blogu může být vhodná pro umístění obrázků příspěvků na blogu:

![Docusaurus Plyšák](./docusaurus-plushie-banner.jpeg)

Blog podporuje také tagy!

**A pokud nechcete blog**: stačí tento adresář smazat a v konfiguraci Docusaurusu použít `blog: false` .
