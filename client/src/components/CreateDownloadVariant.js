import buttondata from './button-data'

const myOtherData = [
    {
        favicon: "https://bitesites.net/assets/favicon.png",
        username: "BiteSites",
        imgurl: "https://www.letsgetready.org/wp-content/uploads/2020/07/blank-300x300.png",
        iframe: ``,
        nickname: "Centralize what matters most.",
        email: "example@gmail.com",
        topgradientcolor: "rgba(12, 5, 56, 0.548)",
    },
]

export default function downloadFile(myPageProperties) {
    // if (!myPageProperties) {
    //     let myPageProperties = 
    // }
    console.log("we're closer!",myPageProperties);
    const repeatFunction = () => {
        let outLinkTags = "";
        for (let i = 0; i < myPageProperties.social.length; i++) {
            let socialIconURL = ''
            // switch statement to get the right link associated with the button image
            switch (myPageProperties.social[i]) {
                case "Applemusic":
                    socialIconURL = "https://bitesites.net/logos/apple-music.png";
                    break
                case "Snapchat":
                    socialIconURL = "https://bitesites.net/logos/snapchat.png";
                    break;
                case "Facebook":
                    socialIconURL = "https://bitesites.net/logos/facebook.png";
                    break;
                case "Pinterest":
                    socialIconURL = "https://bitesites.net/logos/pinterest.png";
                    break;
                case "Whatsapp":
                    socialIconURL = "https://bitesites.net/logos/whatsapp.png";
                    break;
                case "Soundcloud":
                    socialIconURL = "https://bitesites.net/logos/soundcloud.png";
                    break;
                case "YouTube":
                    socialIconURL = "https://bitesites.net/logos/youtube.png";
                    break;
                case "Instagram":
                    socialIconURL = "https://bitesites.net/logos/instagram.png";
                    break;
                case "Twitter":
                    socialIconURL = "https://bitesites.net/logos/twitter.png";
                    break;
                case "tikTok":
                    socialIconURL = "https://bitesites.net/logos/tiktok.png";
                    break;
                case "Spotify":
                    socialIconURL = "https://bitesites.net/logos/spotify.png";
                    break;
                default:
                    socialIconURL = "https://bitesites.net/logos/other.png";
                    break;
            }

            outLinkTags += (
                `<button style="border-radius:30px;width:180px;" onclick="window.open('${myPageProperties.socialURL[i]}','_blank')" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mt-5 mx-24 platformbuttons displaynone">
            <img class="h-20 mx-auto platform mt-3 mb-2" src=${socialIconURL}></img>
            ${myPageProperties.social[i]}
        </button>`
            )
            // console.log(outLinkTags)

        }
        return (outLinkTags)
    }
    let embed = `<div style="display:flex;justify-content:center;margin-left:10%;margin-right:10%;border-radius:15px;">
   ${myPageProperties.imagePlusNameplate[2]}
</div>`
    const buttons = repeatFunction();
    const templateString = `<!DOCTYPE html>
        <html class="background" style="background-color:black;" lang="en">
        <head>
            <link rel="shortcut icon" type="image/png" href="${myOtherData.favicon}"/>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${myPageProperties.imagePlusNameplate[0]}</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://bitesites.net/style.css?3">
            <style>
            .background:after {
                background-image: linear-gradient(0deg, rgba(0, 0, 2, 0.989), ${myPageProperties.imagePlusNameplate[4]});
            }
        </style>
        </head>
        <body style="opacity:0.85;">
            <main>
                <div class="flex justify-center">
                </div>
                <div class="h-4"></div>
                <img id="pfp" style="width:200px;" class="mx-auto mt-5 mb-3" src="${myPageProperties.imagePlusNameplate[1]}"></img>
                <div class="h-4"></div>
                <div class="flex justify-center">
                    <p style="color:white;" class="font-light text-3xl">${myPageProperties.imagePlusNameplate[0]}</p>
                    
        
                </div>
                <div class="h-4"></div>
        <div class="flex justify-center show">
            <button id="show" style="border-radius:15px;min-height:30px;width:200px;border-color:white;border-width:1px;" class="pop hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24">
                Show Links
            </button>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;">
        ${buttons}
        </div>
            <div class="h-10"></div>
            ${embed}
            <div class="h-10"></div>
            <p class="text-gray-300 font-light flex justify-center">"${myPageProperties.imagePlusNameplate[3]}"</p>
                <div class="h-10"></div>
                <a href="mailto:${myOtherData.email}"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">Site courtesy of BITESITES.NET</p></a>
                <a href="mailto:${myOtherData.email}"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">click here to contact the web developer</p></a>
                <div class="h-10"></div>
            </main>
            <script src="https://bitesites.net/script.js"></script>
        
            </body>
        </html>`

    const element = document.createElement('a');
    const file = new Blob([templateString], {
        type: "text/plain;charset-utf-8"
    });
    element.href = URL.createObjectURL(file);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();
}
