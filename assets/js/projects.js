/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Battle of Escardia",
        authors : "C#, Unity",
        conferences : "Battle of Escardia is a strategic action game that requires players to think and react quickly.",
        researchYr : "May – July 2020",
        image : "assets/images/research-page/escardia.png",
        Previewlink: "https://simmer.io/@Esmanda/milestone3draft",
        Githublink: ""
    },
    {
        title : "PIVOT",
        authors : "Java, JavaFX, JUnit, Gradle",
        conferences : "PIVOT is a CLI desktop application into an organisational tool to assist police investigators in keeping track of their investigations and relevant information.",
        researchYr : "September – November 2020",
        image : "assets/images/research-page/pivot.png",
        Previewlink: "https://ay2021s1-cs2103-f09-2.github.io/tp/",
        Githublink: "https://github.com/AY2021S1-CS2103-F09-2/tp"
    },
    {
        title : "Bikini Bot",
        authors : "Java, JavaFX",
        conferences : "Bikini Bot is a CLI chatbot with an integrated GUI, to provide users ease in managing and keeping track of their daily tasks.",
        researchYr : "Aug – September 2020",
        image : "assets/images/research-page/bikini.png",
        Previewlink: "https://esmanda3w.github.io/ip/",
        Githublink: "https://github.com/esmanda3w/ip"
    }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, Previewlink, Githublink}) =>
        {if (Githublink === "") {
            output +=`
                <tr> 
                    <td class="imgCol"><img src="${image}" class="rImg"></td>
                    <td class = "researchTitleName">
                        <div>
                            <span class="imgResponsive">
                                <img src="${image}" class="imgRes">
                            </span>
                        </div>
                        <a href="#0" class="paperTitle"> ${title} </a> 
                        <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                            <div class="researchY">${researchYr}</div>
                        </div>
            
                        <!--CITE BUTTON-->
                        <div class="d-flex" style="margin-right:5%;">
                            <button class="button button-accent button-small text-right button-abstract " type="button" onclick="window.open('${Previewlink}')">
                                SEE LIVE
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </td>
                </tr>`
        } else {
            output +=`
                <tr> 
                    <td class="imgCol"><img src="${image}" class="rImg"></td>
                    <td class = "researchTitleName">
                        <div>
                            <span class="imgResponsive">
                                <img src="${image}" class="imgRes">
                            </span>
                        </div>
                        <a href="#0" class="paperTitle"> ${title} </a> 
                        <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                            <div class="researchY">${researchYr}</div>
                        </div>
            
                        <!--CITE BUTTON-->
                        <div class="d-flex" style="margin-right:5%;">
                            <button class="button button-accent button-small text-right button-abstract " type="button" onclick="window.open('${Previewlink}')">
                                SEE LIVE
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                            <button class="button button-accent button-small text-right button-abstract " type="button" onclick="window.open('${Githublink}')">
                                SOURCE CODE
                            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                    </td>
                </tr>`
        }}
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

