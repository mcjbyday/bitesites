import buttons from './button-data'
export default function downloadFile() {
    const repeatFunction = () => {
      let conCat = "";
      for (let i = 0; i < buttons.length; i++) {
    conCat += (
      `<div class="flex justify-center">
        <button style="border-radius:30px;width:180px;" onclick="window.location.href='${buttons[i].gotolink}'" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mt-5 mx-24 platformbuttons displaynone">
            <img class="h-20 mx-auto platform mt-3 mb-2" src="${buttons[i].piclink}"></img>
            ${buttons[i].buttontext}
        </button>
    </div>`
    )
    console.log(conCat)
    
    }
    return(conCat)
    }
    const buttonObject = repeatFunction();
        const button = buttonObject;
        const templateString = `<!DOCTYPE html>
        <html class="background" style="background-color:black;" lang="en">
        <head>
            <link rel="shortcut icon" type="image/jpg" href="ico2.jpg"/>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>BITE SITES</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link rel="stylesheet" href="https://trayskirrtfrixko.com/style.css">
            <style>
            
        </style>
        </head>
        <body style="opacity:0.65;">
            <main>
                <div class="flex justify-center">
                </div>
                <div class="h-4"></div>
                <img id="pfp" style="width:200px;" class="mx-auto mt-5 mb-3" src="https://www.letsgetready.org/wp-content/uploads/2020/07/blank-300x300.png"></img>
                <div class="h-4"></div>
                <div class="flex justify-center">
                    <p style="color:white;" class="font-light text-3xl">BITE SITES!</p>
                    
        
                </div>
                <div class="h-4"></div>
        <div class="flex justify-center show">
            <button id="show" style="border-radius:15px;min-height:30px;width:200px;border-color:white;border-width:1px;" class="pop hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24">
                Show Links
            </button>
        </div>
        ${button}
            <div class="h-10"></div>
            <p class="text-gray-300 font-light flex justify-center">"BITE SITE NICKNAME"</p>
                <div class="h-10"></div>
                <div class="h-10"></div>
                <a href="mailto:nick@getmighty.net"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">Site courtesy of GETMIGHTY.NET</p></a>
                <a href="mailto:nick@getmighty.net"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">click here to contact the web developer</p></a>
                <div class="h-10"></div>
            </main>
            <script src="https://trayskirrtfrixko.com/script.js"></script>
        
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
    