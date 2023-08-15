# js-fiat-currency-to-NFT-payment

##### on-and-off payment doc

- https://docs.google.com/presentation/d/1PhCrVT-KK9IhnI_Qbi8H7eHCw-_wOFzk/edit?usp=sharing&ouid=107378890688530163202&rtpof=true&sd=true

##### Banxa Overview

Suggest Edits
Banxa powers the largest digital asset platforms by providing payment infrastructure and regulatory compliance across global markets. Our mission and vision are to build the bridge that provides people in every part of the world access to a fairer and more equitable financial system.

There are two ways to integrate Banxa Checkout. Using a Live Link or using the Banxa APIs.

Referral Link
This option is the fastest and easiest way to integrate Banxa On-Ramp. We will provide you with a Referral URL which you can make available on your site. When your customers click on this link they will be redirected to Banxa's hosted checkout. Alternatively, you may also use the Referral URL to initiate the Banxa checkout widget on your site.

Use this integration option if you do not require webhooks, HMAC authentication, and quote comparison within your site.

You can either redirect to Banxa Checkout or use an iFrame to embed Banxa Checkout into your application.

Learn more about using the Referral Method.

Banxa APIs
This is a more technical integration option, however, allows more control of the checkout flow. Banxa offers powerful JSON REST APIs that support a range of financial, cryptocurrency, and KYC streamlining services. Using the API allows you to build a UI to build a quotation journey for the user before redirecting them to Banxa checkout.

You can either redirect to Banxa Checkout or use an iFrame to embed Banxa Checkout into your application.

We offer five sets of distinct API functionality:

🔀 Order API
The Order API enables you to securely create orders for your customer from your website/application. By redirecting your customers to Banxa to complete an order, you are leveraging Banxa's powerful KYC, payments and liquidity infrastructure to fulfil customer orders.

🏷️ Prices API
The Prices API enables you to retrieve current quotes for an order. The order can be of any supported cryptocurrency, fiat and payment method. This allows your customers to view the most update to date quote and understand prices paid and amounts received before placing an order.

💳 Payment Methods API
The Payment Methods API enables you to easily retrieve all possible payment methods that is available to your customers. This list will progressively grow bigger as Banxa continues to expand it's geographical footprint and build new partnerships with global and local payment providers!

🌎 Countries API
The Countries API enables you to easily retrieve all possible countries that your customers can create orders from. We are growing this list all the time!

🪙 Currencies API
The Currencies API enables you to easily retrieve all possible fiat currencies and cryptocurrencies that is available to your customers.

🆔 Customer Identity Registration API
The Customer Identity Registration API is a versatile API that allows you more ways to streamline KYC. You will be able to pass through to Banxa, KYC documentation that you have already captured from your customers so that when they enter the Banxa checkout flow, they will not need to upload KYC information again. This improves conversion greatly. Please note that Banxa will continue to verify KYC documentation and request more information from the customer if required by Banxa KYC processes.

If you use Sumbsub as your KYC provider, this API will allow you to pass a Subsub token to us, which will mean that customers will be able to skip KYC entirely!

API Host
The environments can be accessed via the API hosts below.

Environment	API Host
```
Sandbox	https://[YOUR-COMPANY-NAME].banxa-sandbox.com
Production	https://[YOUR-COMPANY-NAME].banxa.com
```

###### reference link

- https://docs.banxa.com/docs
