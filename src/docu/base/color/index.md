---
title: Color Palette
linktitle: Color Palette
description: TODO DESCRIPTION
categories: [base]
keywords: []
menu:
  main:
    parent: "base"
    weight: 30
weight: 30
draft: true
---

## Color Palette

This section displays all colors defined in the style guide. You can see the hex
code, an example of the color as well as the css class that can be used to color
backgrounds or text sections.

All default colors also exist as custom properties and can be used directly under the
designation `--color-{COLOR_NAME}`. The color shades were only added to the
[Class Colors](section-base.html#kssref-base-color-class).

Style Guide: base.color
Basic

The basic color, that always needed.

Colors TODO:

* transparent:  transparent - transparent color
* white:        #FFFFFF - the full white
* black:        #000000 - the full black

### Class

Class colors are color values that are assigned a meaning, which can change depending on the theme.
(try it, change the theme and you can see the other theme class colors : )

All class colors exist as custom properties including their shades.

The values are:

* CLASS: primary, secondary, success, info, warning, danger, light, dark, text

The structure of the custom properties names are:

* `--color-{CLASS}-lighter`
* `--color-{CLASS}-lighter-contrast`
* `--color-{CLASS}-light`
* `--color-{CLASS}-light-contrast`
* `--color-{CLASS}-default`
* `--color-{CLASS}-default-contrast`
* `--color-{CLASS}-dark`
* `--color-{CLASS}-dark-contrast`
* `--color-{CLASS}-darker`
* `--color-{CLASS}-darker-contrast`

Colors TODO:

* primary:   variable - changes depending on the theme
* secondary: variable - changes depending on the theme
* success:   variable - changes depending on the theme
* info:      variable - changes depending on the theme
* warning:   variable - changes depending on the theme
* danger:    variable - changes depending on the theme
* light:     variable - changes depending on the theme
* dark:      variable - changes depending on the theme
* text:      variable - the basic text color, changes depending on the theme

### Own Brands

A list of product branded colors for internal products.

Colors TODO:

* brand-finnet:       #093967 - finanzen.net primary color
* brand-finnet-red:   #D0021B - finanzen.net secondary color
* brand-fnb:          #1C8005 - finanzen.net Broker
* brand-oskar:        #20C997 - Oskar
* brand-ratgeber:     #F2871D - finanzen.net Ratgeber
* brand-zero-magenta: #E0146A - finanzen.net zero primary
* brand-zero-blue:    #5CA3EF - finanzen.net zero secondary

### External Brands

A list of product branded colors for external companies.

Colors TODO:

* brand-bsdex-crypto:  #6533FA - for bsdex crypto integration
* brand-facebook:      #3B5998 - Facebook
* brand-flowbank:      #DF013A - for flow bank integration
* brand-instagram:     #8A3AB9 - Instagram
* brand-julius-baer    #131C53 - for julius baer integration
* brand-linkedin:      #2867B2 - LinkedIn
* brand-rss:           #FFB829 - RSS
* brand-twitter:       #00ACEE - Twitter
* brand-xing:          #276768 - XING
* brand-youtube:       #BF2D27 - YouTube

### Gray

A list of gray colors.

Colors TODO:

* gray-100: #F8F9FA - gray shade 100
* gray-200: #E9ECEF - gray shade 200
* gray-300: #DEE2E6 - gray shade 300
* gray-400: #CED4DA - gray shade 400
* gray-500: #ADB5BD - gray shade 500
* gray-600: #6C757D - gray shade 600
* gray-700: #495057 - gray shade 700
* gray-800: #343A40 - gray shade 800
* gray-900: #212529 - gray shade 900

### Theme Default

A list of default colors.

Colors TODO:

* blue:       #0D6EFD - simple blue
* indigo:     #6610F2 - simple indigo
* purple:     #6F42C1 - simple purple
* pink:       #D63384 - simple pink
* red:        #DC3545 - simple red
* orange:     #FD7E14 - simple orange
* yellow:     #FFC107 - simple yellow
* green:      #198754 - simple green
* teal:       #20C997 - simple teal
* cyan:       #0DCAF0 - simple cyan
* light-gray: #E9ECEF - a lighter gray shade
* gray:       #6C757D - a simple gray shade
* dark-gray:  #343A40 - a darker gray shade

#### Default Class

Colors TODO:

* primary:   variable - same to $blue
* secondary: variable - same to $gray-600
* success:   variable - same to $green
* info:      variable - same to $cyan
* warning:   variable - same to $orange
* danger:    variable - same to $red
* light:     variable - same to $gray-100
* dark:      variable - same to $gray-900
* text:      variable - same to $black

### Theme finanzen.net

Special colors for finanzen.net

> In NET we reuse a lots of colors from default theme.

Colors TODO:

* de-positive-green:  #00AA7E - used for success class and buy action
* de-negative-red:    #FF3559 - used for danger class and sell action
* de-warning-yellow:  #FFB929 - used for warning class
* de-headline-gray:   #333333 - NO_DESCRIPTION
* de-text-gray:       #757575 - NO_DESCRIPTION
* de-divider-gray:    #D8D8D8 - NO_DESCRIPTION
* de-semi-light-gray: #F2F2F2 - NO_DESCRIPTION
* de-light-gray:      #F7F7F7 - NO_DESCRIPTION
* de-azure-blue:      #0084FF - NO_DESCRIPTION
* de-light-blue:      #C3DEF8 - NO_DESCRIPTION
* de-bronze:          #C17F2F - NO_DESCRIPTION
* de-midnight:        #02172D - NO_DESCRIPTION
* de-dim-green:       #CCEEE5 - NO_DESCRIPTION
* de-hover-green:     #008060 - NO_DESCRIPTION
* de-dark-green:      #004231 - NO_DESCRIPTION
* de-dim-red:         #FDAFBB - NO_DESCRIPTION
* de-red-orange:      #DE3720 - NO_DESCRIPTION
* de-violet:          #681867 - NO_DESCRIPTION
* de-athens-gray:     #EFF2F4 - NO_DESCRIPTION
* de-black-haze:      #F7F8F8 - NO_DESCRIPTION

#### finanzen.net Class

Colors TODO:

* de-primary:   variable - same to $brand-finnet
* de-secondary: variable - same to $brand-finnet-red
* de-success:   variable - same to $de-positive-green
* de-info:      variable - same to $de-light-blue
* de-warning:   variable - same to $de-warning-yellow
* de-danger:    variable - same to $de-negative-red
* de-light:     variable - same to $de-divider-gray
* de-dark:      variable - same to $de-headline-gray
* de-text:      variable - same to $de-midnight

### Theme finanzen.ch

Special colors for finanzen.ch.

> In CH we reuse a lots of colors from finanzen.net theme.

Colors TODO:

* ch-dark-blue:        #000333 - NO_DESCRIPTION
* ch-gray:             #D8D8D8 - NO_DESCRIPTION
* ch-white-blue:       #ECF6FF - NO_DESCRIPTION
* ch-tundora:          #ADADAD - NO_DESCRIPTION
* ch-grey98:           #FAFAFA - NO_DESCRIPTION
* ch-green-positive:   #00A87B - NO_DESCRIPTION
* ch-green-trading:    #349898 - NO_DESCRIPTION
* ch-ratgeber-orange:  #F2871D - NO_DESCRIPTION
* ch-viored:           #B62547 - NO_DESCRIPTION
* ch-red-orange:       #DF3620 - NO_DESCRIPTION
* ch-lila:             #AD00AB - NO_DESCRIPTION
* ch-dummy:            #FE0199 - A dummy color for placeholders
* ch-footer-top:       #F7F8F8 - NO_DESCRIPTION
* ch-footer-middle:    #F2F3F3 - NO_DESCRIPTION
* ch-footer-bottom:    #0B437F - NO_DESCRIPTION

#### finanzen.ch Class

Colors TODO:

* ch-primary:   variable - same to $brand-finnet
* ch-secondary: variable - same to $ch-dark-blue
* ch-success:   variable - same to $de-positive-green
* ch-info:      variable - same to $de-light-blue
* ch-warning:   variable - same to $de-warning-yellow
* ch-danger:    variable - same to $de-negative-red
* ch-light:     variable - same to $ch-gray
* ch-dark:      variable - same to $de-headline-gray
* ch-text:      variable - same to $de-midnight

### Theme Boerse Online

Special colors for boerse-online.de.

> In BO we reuse a lots of colors from finanzen.ch theme.

Colors TODO:

* bo-zambezi: #595959 - NO_DESCRIPTION
* bo-crimson: #CC0133 - NO_DESCRIPTION
* bo-carmine: #900024 - NO_DESCRIPTION

#### Boerse Online Class

Colors TODO:

* bo-primary:   variable - same to $brand-finnet
* bo-secondary: variable - same to $brand-finnet-red
* bo-success:   variable - same to $de-positive-green
* bo-info:      variable - same to $de-light-blue
* bo-warning:   variable - same to $de-warning-yellow
* bo-danger:    variable - same to $de-negative-red
* bo-light:     variable - same to $de-divider-gray
* bo-dark:      variable - same to $de-headline-gray
* bo-text:      variable - same to $black

### Theme Markets Insider

Special colors for markets.businessinsider.com.

> In MI we reuse a lots of colors from default theme.

Colors TODO:

* mi-text-black:     #111111 - NO_DESCRIPTION
* mi-cod-black:      #090909 - NO_DESCRIPTION
* mi-dark-gray:      #475154 - NO_DESCRIPTION
* mi-dim-gray:       #4A4A4A - NO_DESCRIPTION
* mi-gray:           #848F91 - NO_DESCRIPTION
* mi-mid-gray:       #D4D8D9 - NO_DESCRIPTION
* mi-light-gray:     #E8E9EA - NO_DESCRIPTION
* mi-bright-gray:    #F2F4F5 - NO_DESCRIPTION
* mi-gull-gray:      #97B1B5 - NO_DESCRIPTION
* mi-silver-sand:    #C3C4C5 - NO_DESCRIPTION
* mi-athens-gray:    #F9F9FA - NO_DESCRIPTION
* mi-blue:           #007EFF - NO_DESCRIPTION
* mi-dark-blue:      #0066CC - NO_DESCRIPTION
* mi-blumine:        #185F7D - NO_DESCRIPTION
* mi-blue-curious:   #299ECC - NO_DESCRIPTION
* mi-blue-dodger:    #3399FF - NO_DESCRIPTION
* mi-azure-radiance: #0076FF - NO_DESCRIPTION
* mi-green:          #18BB5C - NO_DESCRIPTION
* mi-red:            #FF433D - NO_DESCRIPTION
* mi-turquoise:      #DCEAEC - NO_DESCRIPTION
* mi-petrol:         #8CA8AC - NO_DESCRIPTION
* mi-orange:         #FF8003 - NO_DESCRIPTION

#### Markets Insider Class

Colors TODO:

* mi-primary:   variable - same to $mi-blue
* mi-secondary: variable - same to $mi-gray
* mi-success:   variable - same to $mi-green
* mi-info:      variable - same to $mi-blue-dodger
* mi-warning:   variable - same to $mi-orange
* mi-danger:    variable - same to $mi-red
* mi-light:     variable - same to $mi-turquoise
* mi-dark:      variable - same to $mi-dark-gray
* mi-text:      variable - same to $mi-text-black

### JavaScript

You have access to all default colors and all class colors and associated shades via
the following JavaScript command.

```javascript
const colors = styleGuide.Color.getColors();
console.log(colors['black']); // #000000
console.log(colors['brand-finnet']); // #093967
console.log(colors['danger']); // #DC3545
console.log(colors['success-darker']); // #082F1D
console.log(colors['warning-light-contrast']); // #FFFFFF
```

### SCSS

The following example explains how a simple color or color shading can be defined and queried.

```scss
/* ---- _color.scss ---- */

/// define a color shade
$blue: -define(
  $name:    blue,
  $lighter: -contrast(#71A9FD, $black),
  $light:   -contrast(#3F8BFD, $white),
  $default: -contrast(#0D6EFD, $white),
  $dark:    -contrast(#0256D4, $white),
  $darker:  -contrast(#0141A1, $white)
);

/// define a single color
$ch-lila: -define($name: ch-lila, $color: #AD00AB);

/* ---- _some-component.scss ---- */

@use 'color' as color;

/// use the color.get() function, to get the color values
color.get(color.$blue)                   => #0D6EFD
color.get(color.$ch-lila)                => #AD00AB

/// add the name key as second parameter, to get the color name
color.get(color.$blue,    name)          => blue
color.get(color.$ch-lila, name)          => ch-lila

/// add the shader keys as second parameter, to get the shades or the contrasts
color.get(color.$blue, lighter)          => #71A9FD
color.get(color.$blue, lighter-contrast) => #000000
color.get(color.$blue, light)            => #3F8BFD
color.get(color.$blue, light-contrast)   => #FFFFFF
color.get(color.$blue, default)          => #0D6EFD
color.get(color.$blue, default-contrast) => #FFFFFF
color.get(color.$blue, dark)             => #0256D4
color.get(color.$blue, dark-contrast)    => #FFFFFF
color.get(color.$blue, darker)           => #0141A1
color.get(color.$blue, darker-contrast)  => #FFFFFF

/// SCSS will raise an exception, if a color or a color key not exist
color.get(color.$stuff)                  => throws a COLOR NOT EXIST error
color.get(color.$ch-lila, darker)        => throws a COLOR NOT EXIST error
color.get(color.$ch-lila, dark-contrast) => throws a COLOR NOT EXIST error
```
