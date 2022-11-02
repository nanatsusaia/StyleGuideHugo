---
title: Accordion
linktitle: Accordion
description: TODO DESCRIPTION
categories: [components]
keywords: []
menu:
  main:
    parent: "components"
    weight: 10
weight: 10
draft: true
---

## Accordion

Accordions are useful when you want to toggle between hiding and showing large amount of content.

Markup: accordion.hbs
{{< example link="/components/accordion/accordion-basic/" name="accordion-basic" >}}

### Open Initial

When you add the attribute `open` to an `.accordion__item`, then item will opened even on page load.

{{< example link="/components/accordion/accordion-initial-active/" name="accordion-initial-active" >}}

### Toggler

With the modifier `.accordion--toggler` that will append to the `.accordion` block you can change
the behavior of the accordion. While opening a content, all other contents will close.

{{< example link="/components/accordion/accordion-toggler/" name="accordion-toggler" >}}
