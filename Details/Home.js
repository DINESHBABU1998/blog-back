const get=(req,res)=>{
    res.send([
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
            "id":"2",
            "Title": " Alia Bhatt to make Hollywood debut with Heart of Stone, also starring Gal Gadot, Jamie Dornan",
            "CategoryName": "Bollywood",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUuWm3.img?h=365&w=486&m=6&q=60&o=f&l=f&x=225&y=134",
            "BlogContent": "Alia Bhatt is all set to make her Hollywood debut in Netflix Original Heart of Stone, starring alongside Gal Gadot and Jamie Dornan.Tom Harper is directing the pic from a script by Greg Rucka and Allison Schroeder. ",
            "Likes": "700K"
        },
        {
            "id":"1",
            "Title": " Pixel 6a: Specs, features, design, expected India price and all that we know so far",
            "CategoryName": "Technology",
            "PublishedDate": "March 8 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMI8S.img?h=274&w=486&m=6&q=60&o=f&l=f",
            "BlogContent": "Google is reportedly working on its affordable offering, the Pixel 6a. Previous leaks suggested that the phone could launch in May during Google IO 2022. However, a popular tipster now reveals that the launch of Pixel 6a may be delayed to July. The tipster states that the delay is due to chip shortage and supply chain issues.",
            "Likes": "800"
        },
        {
            "id":"3",
            "Title": " The all new Apple MacBook Pro: Gets the work done, without slowing down",
            "CategoryName": "Technology",
            "PublishedDate": "March 9 2022",
            "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMus7.img?h=758&w=1348&m=6&q=60&o=f&l=f",
            "BlogContent": "The ports making a comeback include full-size HDMI, card slot reader and the Mag Safe 3 charging port with magnetic connector, other than thunderbolt ports and audio port. While the comeback ports aren’t the most advanced ones but still support high-speed data transfer. I love the MagSafe connector as it prevents the laptop from falling if walked on the cord accidentally.",
            "Likes": "700"
        },
        {
            "id":"4",
            "Title": "Focus on fitness spurs Indians to smartwatches",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://www.thehindu.com/life-and-style/fitness/3cbade/article37845142.ece/alternates/FREE_660/5th-fit",
            "BlogContent": "The third quarter of 2021 was the biggest quarter for smartwatches,” said Anshika Jain, Senior Research Analyst at Counterpoint. “We have seen that because of COVID-19, there has been a change in customer preferences. People are shifting to smartwatches from traditional watches. ",
            "Likes": "1M"
        },
        {
            "id":"2",
            "Title": " Six at-home fitness challenges to help you reach your goals",
            "CategoryName": "Fitness",
            "PublishedDate": "March 10 2022",
            "ImageAsset": "https://images.indianexpress.com/2021/10/workout_1200_getty.jpg",
            "BlogContent": "It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest.",
            "Likes": "1M+"
        },
        {
            "id":"3",
            "Title": " Samara wants full biryani, takes control of Paradise Food Court",
            "CategoryName": "Food",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/12/biryani-16400956083x2.png?impolicy=website&width=510&height=356",
            "BlogContent": "Homegrown private equity fund Samara Capital has taken control of Paradise Food Court, acquiring most of the 51% stake held by the promoters in the restaurant chain known for its iconic Hyderabadi biryani. Samara, which already held a 49% stake,",
            "Likes": "400K"
        },
        {
            "id":"5",
            "Title": " The Dark Knight’s Epic ‘Look At Me’ Scene Of Joker Was Improvised By Heath Ledger, Thanks To Maggie Gyllenhaal",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/did-you-know-maggie-gyllenhaal-couldnt-look-at-heath-ledgers-joker-during-their-intense-scene-in-the-dark-knight-because-she-was-too-scared-01.jpg",
            "BlogContent": "Matt Reeves recently released The Batman starring Robert Pattinson has gained some massive attention and love from the DC fans. However, Christopher Nolan’s 2008 release ‘The Dark Knight’ starring Heath Ledger, Maggie Gyllenhaal, and Christian Bale still stays in our minds and hearts rent-free.",
            "Likes": "1M"
        },
        {
            "id":"3",
            "Title": " Pinocchio First Look: Tom Hanks Leaves Fans Gasping For Breath As Geppetto, We Are Surely In For A Treat!",
            "CategoryName": "Hollywood",
            "PublishedDate": "March 11 2022",
            "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/pinocchio-first-look-shows-scruffy-white-haired-tom-hanks-as-geppetto-001.jpg",
            "BlogContent": "The first look of Tom Hanks-starrer live-action film ‘Pinocchio’, a remake of the 1940 animated Disney film of the same name, was released recently, reports ‘Variety’.The 1940 animated film is itself adapted from Carlo Collodi’s children’s novel ‘The Adventures of Pinocchio’. The film features Hanks in the role of Geppetto, a childless woodworker desperate for a son.",
            "Likes": "2M"
        },
    ])
}

module.exports.apicontroller=get;