# Shopify demo

This is a demo for shopify. You can view the demo by going to (https://coconutclothinc.myshopify.com/index.html) and submitting the password "unaigg"

## Setup

Setup was easy enough. After creating a Shopify partners account I was able to create a development store. Once I had, all that was needed to do was to download a CLI utility called "Theme kit" and run a command to create a new theme and then select it in the admin panel of the online store. I also found that I can create dummy data from the Shopify Developer Tools.

## Layout

This is a mobile swipe layout that I created custom for phones and was partially adapted for Desktop as well. I think it looks best on your mobile device, so check it out there if you haven't. Ultimately I thought it would be easiest if you could add items from one page, proceed to cart, and then checkout. It eliminates long click throughs, so that the user can view and order items faster. When I originally came up with this layout, I thought it'd be perfect for an online store. So I decided to adapt it for this project.

## Design

I'm not much of a designer, but I created a simple logo for this project, as well as some card styles and button styles. I like the floating elements, and I made sure to have drop shadows match actual "height". I added some icons and google fonts, but didn't really know what to do with the input elements. I wound up leaving them alone. 

## My thoughts on Liquid

Liquid seems very similar to other templating languages and some javascript frameworks. In particular, using conitional statements ({% if ... %}) or loops ({% for ... in ... %}) for dynamic rendering. What I find is missing is some sort of asynchoronous calls or template loading. 

What this app needs most to be streamlined is for an async call when adding products to the cart. That way the user doesn't have to be navigated away from the product selection every time. They could simply check off the items they'd like and purchase & proceed to cart. I thought about ways to fake this within the Liquid system, but since templates are rendered by the server, it could prove difficult. I tried intercepting the POST data from the cart as well as considering rendering separate templates in iframes or making direct fetch calls to those pages in the background, and parsing out the page contents. However I didn't want to waste time chasing something that might not be possible, so I refitted the design to simply show products with their default functionality.

All in all I was able to take a pre-existing layout I had made and got it to work within Liquid's system, so I'm happy. I'd like to see if there's some API support, so that I can make more dynamic apps with this as previously mentioned. However Liquid as is, is perfectly usable, with solid and simple hooks for both Javascript and Theme kit provides a watch function to automatically preprocess Scss. 

Anyway, thanks for reading.