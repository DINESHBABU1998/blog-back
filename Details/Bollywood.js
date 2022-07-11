const get=(req,res)=>{
    res.send([
        {
            "id":"1",
            "Title": " Mahesh Bhatt on Alia Bhatt being a rare bird, Big B's generous letter & what he and Ranbir Kapoor bond over",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAULdp1.img?h=1438&w=1438&m=6&q=60&o=f&l=f&x=568&y=368",
            "BlogContent": "Alia Bhatt's father and filmmaker Mahesh Bhatt in a recent conversation with Barkha Dutt's Mojo Story has spoken highly of his daughter after her spectacular performance in Gangubai Kathiawadi. Speaking about her craft.",
            "Likes": "1000K"
        },
        {
            "id":"2",
            "Title": " Alia Bhatt to make Hollywood debut with Heart of Stone, also starring Gal Gadot, Jamie Dornan",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUuWm3.img?h=365&w=486&m=6&q=60&o=f&l=f&x=225&y=134",
            "BlogContent": "Alia Bhatt is all set to make her Hollywood debut in Netflix Original Heart of Stone, starring alongside Gal Gadot and Jamie Dornan.Tom Harper is directing the pic from a script by Greg Rucka and Allison Schroeder. ",
            "Likes": "700K"
        },
        {
            "id":"3",
            "Title": " You're an extraordinary human: Hrithik Roshan to rumoured girlfriend Saba Azad, here's how she reacted-ZEE News",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUIKjC.img?h=808&w=1438&m=6&q=60&o=f&l=f&x=454&y=171",
            "BlogContent": "Hrithik Roshan recently dropped a heartfelt comment below his rumoured girlfriend and singer Saba Azad's latest Instagram post and fans are even more curious to know if there is a romance brewing between the two",
            "Likes": "5000K"
        },
        {
            "id":"4",
            "Title": " Samantha says she looks possessed as she shares yet another intense workout video; WATCH - PINKVILLA",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://www.pinkvilla.com/files/styles/fbimagesection/public/samantha_workout_video_social.jpg?itok=MlF-0DMX",
            "BlogContent": "Samantha Ruth Prabhu has shared yet another intense workout video on her Instagram handle.",
            "Likes": "600"
        },
        {
            "id":"5",
            "Title": " Janhvi Kapoor, Clad in Kanjeevaram Saree, Visits Tirupati on Her 25th Birthday",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUICmy.img?h=959&w=1438&m=6&q=60&o=f&l=f&x=496&y=137",
            "BlogContent": "Bollywood diva Janhvi Kapoor celebrated her 25th birthday on March 6. On the day, fans and film industry colleagues of the actor wished her a happy birthday on social media. Meanwhile, Janhvi chose to celebrate her birthday with some of her close ones at the Tirupati Temple in Andhra Pradesh. The actor shared a handful of images from the shrine on Instagram.",
            "Likes": "1M"
        }
    ])
}

module.exports.apicontroller=get;