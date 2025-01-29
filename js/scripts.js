document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".box").forEach(function (box, index) {
        box.addEventListener("click", function () {
            handleBoxClick(index);
        });
    });
});

function handleBoxClick(i) {
    switch (i) {
        case 0:
            window.location.href = "instatips.html";
            break;
        case 1:
            alert("Currently we are reading the algorithm of YouTube , we will update you soon");
            break;
        case 2:
        case 3:
            alert("Currently we are reading the algorithm of Facebook , We will update you soon");
            break;
        default:
            alert("Currently we are reading the algorithm of Explurger , We will update you soon");
            break;
    }
}

const aboutTool = `In today’s fast-paced digital world, social media plays a crucial role in shaping online presence, personal branding, and business growth. Whether you are an influencer, a content creator, or a small business owner, engaging content is the key to increasing your reach and visibility. Social Tips is here to help you achieve that!
Social Tips is a one-stop destination for finding the latest and trending captions, hashtags, quotes, and post ideas tailored for platforms like Instagram, YouTube, Facebook, and Explurger. Our platform provides you with high-quality and engaging content ideas to boost your social media performance and help your posts go viral.`;

const whyTool = 'We understand that social media success depends on various factors, including captions that grab attention, trending hashtags that improve discoverability, and content that encourages engagement. Our platform is designed to provide all of this in one place, saving you time and effort.'

const noSpam = `No Spam and Fake Actions in Social Tips At Social Tips, we believe in organic growth and genuine engagement. Our platform does not promote or provide any tools for increasing followers, likes, or views through fake accounts, bots, or spammy techniques. We strictly focus on ethical and effective ways to enhance your social media presence using trending captions, hashtags, and content ideas. Social media success comes from real interactions, quality content, and consistency, not from shortcuts that violate platform policies. By using Social Tips, you are ensuring that your growth is authentic, long-lasting, and in compliance with social media guidelines. 🚀`;

document.getElementById("aboutTool").textContent = aboutTool;
document.getElementById("whyTool").textContent = whyTool;
document.getElementById("noSpam").textContent = noSpam;