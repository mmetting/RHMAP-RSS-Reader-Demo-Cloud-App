# RSS Cloud App

This is the server side API for the RSS Reader Demo client apps. It offers a REST-enpoint to retrieve RSS feeds in the following format:

````
{
    "title": "Hello World",
    "image": "https://opensource.com/sites/default/files/images/life/weekly_news_roundup_tv.png",
    "teaser": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie."
}

The Cloud Application calls out to an MBaaS Service, which serves as the connector to the public RSS feeds.

The idea of the Cloud Application is, to be the public interface for mobile clients. Therefore server-side business logic could be implemented in it, to orchestrate or aggregate other service calls.
Additionally, the Cloud Application has access to all server-side APIs exposed by the RHMAP SDK, like Push Notifications, Data Storage, Caching, Forms or Synchronisation Support.

# Begin RHMAP Documentation Part
This part of the README.md makes the Cloud App testable from RHMAP's App Studio. Please ignore, since the formatting is optimized for RHMAP.

# Group RSS Feeds

# feeds [/feeds]

'RSS feeds' endpoint.

## feeds [GET] 

'RSS feeds' endpoint.

+ Response 200 (application/json)

    + Body
            [
                {
                    "title": "Hello World",
                    "image": "https://opensource.com/sites/default/files/images/life/weekly_news_roundup_tv.png",
                    "teaser": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw."
                },
                {
                    "title": "Hello World",
                    "image": "https://opensource.com/sites/default/files/images/life/weekly_news_roundup_tv.png",
                    "teaser": "Candy oat cake halvah ice cream icing bear claw brownie pie ice cream. Powder topping sugar plum lollipop brownie lollipop oat cake cookie. Lollipop dragée chocolate halvah biscuit. Dragée liquorice sweet. Candy canes dragée marshmallow muffin macaroon cheesecake apple pie bear claw bear claw."
                }
            ]
