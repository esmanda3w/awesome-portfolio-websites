/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "Battle of Escardia",
        authors : "C#, Unity",
        conferences : "Battle of Escardia is a strategic action game that requires players to think and react quickly.",
        researchYr : "May – July 2020",
        citebox : "popup1",
        image : "assets/images/research-page/escardia.png",
        citation: {
            vancouver: "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 1",
        absbox: "absPopup1"
    },

    {
        title : "Bikini Bot",
        authors : "Java, JavaFX",
        conferences : "Bikini Bot is a CLI chatbot with an integrated GUI, to provide users ease in managing and keeping track of their daily tasks.",
        researchYr : "Aug – September 2020",
        citebox : "popup2",
        image : "assets/images/research-page/bikini.png",
        citation: {
            vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2"
    },

    {
        title : "PIVOT",
        authors : "Java, JavaFX, JUnit, Gradle",
        conferences : "PIVOT is a CLI desktop application into an organisational tool to assist police investigators in keeping track of their investigations and relevant information.",
        researchYr : "September – November 2020",
        citebox : "popup3",
        image : "assets/images/research-page/pivot.png",
        citation: {
            vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "absPopup3"
    }
];
   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
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
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            BIBTEX
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

