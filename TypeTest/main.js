const mainText=document.querySelector(".paragraph p");
const input=document.querySelector("input");
const timer=document.querySelector(".number");
const container=document.querySelector(".container");
const main=document.querySelector(".main");
const body=document.querySelector("body");
const correctSound=document.querySelector(".correct-sound");
const incorrectSound=document.querySelector(".incorrect-sound");
const after=document.querySelector(".after");


const resultContainer=`
<div class="after">
<div class="main-box">
    <div class="result">Results</div>
    <div class="wpm-container"></div>
    <div class="acquracy-container"></div>
    <div class="again-button">
        <button>Start Again</button>
    </div>
</div>
</div>`






const textArr=[`Few animals on earth are as important as cows. They have been tamed and used by man for thousands of years. We mainly depend on them for our food. In some countries, people use cow's meat as a significant source of food. Cows are female cattle, and their male counterparts are known as a bull. They are domestic, bovine animals that feed on plants. The average size and color of a cow depending on its type of breed. There are many breeds of cows. Some of which are more popular like Jersey. The milk-producing capacity of cows is also dependent on its type of breed.Larger cows produce more milk, but it is not always true. Cows have excellent grazing capabilities. Due to this, certain protected grasslands have been declared as anti-grazing zones. Adult cows have a set of 32 teeth. There are no upper-level incisors’ or canines in a mature cow. Their teeth have smooth surfaces with moon-shaped ridges that have been specially designed for an herbivorous lifestyle. Cows chew their food all the time. They can even take it out from their gut to chew it again properly.`,
`To define Tree Plantation, we can say another name for planting trees is tree planting. Trees are very important for life. Our existence without trees is unimaginable. Trees are used in different ways in our daily lives. We need oxygen to survive. Trees provide us with this oxygen. It gives us food and fruit. From the fruit we get food. We get wood from trees. With the help of this wood, we make houses, furniture, boats, launches, ships, etc., if trees are planted on rivers and beaches, soil erosion can be prevented. It is helping to maintain and balance the environment. Without trees, the earth becomes a desert.Many medicines are made from the leaves, roots, and bark of trees. However, compared to the total area of our country, the vegetation and forests are insufficient. Also, some miserly people are destroying the forest by cutting down trees for their own selfishness. This destruction impacts our environment badly.And when the balance of the environment is disturbed, parasitic creatures like us gradually disappear. It is hoped that the government will conduct tree-planting campaigns every year in collaboration with various donor agencies. We need to be aware of the importance of planting trees as well as the government.`,
`The environment is very necessary to lead a healthy life. Our environment shapes a very important aspect of human life because that is where we find the requirements of life like air, water, and food. Due to global industrialization and modernization, there has been environmental pollution. Our lifestyle has also changed. The animals are on the verge of extinct day by day. The panda, the white tiger, Albatross are now not to be seen. They are few only and if environmental pollution continues then we are going to lose our animals in a few decades. The harmful and toxic gases which release 24 x 7 from the factories are mixing with air, thus causing air pollution. People dump all the waste materials in the river and sea, this way the water is also getting poisoned every day.The marine species like fish, whales, and dolphins are the worst sufferers. Their valuable lives are also lost. Soil erosion is one of the causes of soil pollution. We humans can save our Earth by planting trees. If we plant trees then once again our Earth will be green. We should not cut trees also, then it will make deforestation, and the top portion of the soil will be lost.`,
`Science began the moment humans learned to use common sense, even if it was a cave person. But when we look at the wonders of science made until now, we will see both sides of the coin. Science is both a blessing and a bane for us, but this depends on how we decide to use it.Science might have made our life easier by being a boon, but we are the ones who turn the discoveries of science into bane because of our greed. The advantages of science will certainly outnumber the disadvantages, and the elemental proof of that is a livable world. Science was the driving force behind evolution, and this might be one of the biggest wonders of science. The contribution of science in every field begins by observation and then experimentation, which ultimately results in a new invention.Science has, from the beginning, helped us overcome darkness by bringing light as well as discover the reason behind the existence of darkness simultaneously. But whenever science was used for morally wrong purposes, it always left adverse effects on us in one way or another. Hence, to be civilized means also using the wonders of science for the benefit of humankind.`,
`Folk music is music that belongs to a community and is not influenced by any sophisticated musical rules or any standard musical style. Folk music includes both religious and secular songs. The history of folk music composition dates back to the third century BC during the Gupta dynasty. Generations of poets and composers of the country have created a great tradition of Bengali folk music. Most of the folk songs are based on rural people, culture and environment which differ from region to region in Bangladesh. Folk music of Bangladesh is diverse. They are Bhatiali, Bhavaiya, Baul, Spiritual Songs, Jarigan, Sarigan, Murshidi etc. Bangladesh has its own good musical instruments. They are Dotara, Dhol, Basi, Mandir, Khajani, Hari, Kumkum, Zara etc. Some famous singers popularized the folk music of Bangladesh. They are Siraj Saia, Lalon Shah, Shah Abdul Karim, Hasan Raja, Abbas Uddin, Abdul Alim and Radha Roman who are notable folk artists of Bangladesh. Tribal customs, culture and lifestyle influence it. Folk songs can be sung solo or in chorus. Currently, the condition of folk music in our country is very bad. Today's rich traditional folk music is inevitably influenced by Western music and culture. So foreign songs should be avoided. Because we should not neglect our rich traditional folk music. We all need to come forward to protect our rich, ancient and significant folk music.`,
`My country's name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area.But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide.But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country.We have the longest sea beach in the world, cox's bazaar. The Sundarban is one of the biggest mangrove forests in the entire world and a huge source of beauty. You can find Royal Bengal Tiger there. I love my country very much. I am so lucky to born here.`,
`Books are essential in our life. They play a significant role in our daily life. So the importance of books is excellent. A book fair is where books are displayed for advertisement and sale. It is becoming popular day by day. Different organizations arrange book fairs on different occasions. Bangla Academy holds the most significant book fair on its premises on Shahid Day. Different publishers set up their stalls. All sorts of books, such as fiction, dramas, and children's books, are displayed here. A book fair reminds us of books' necessity in everyday life. Books change our outlook and widen our knowledge. They remove the darkness of ignorance in our maid. People are introduced to new books and new knowledge. It creates new poets and writers every year. People buy books according to their own choice. Book fair organizing committee usually arranges a discussion meeting when the fair goes on. Renowned writers, artists, and scientists assemble there. Thus a book fair venue becomes an important place in all respects. They allow us to come close to new books. It represents our national culture and tradition by raising people's awareness. So the government and private sectors should come forward and encourage them to expand it more and more.`,
`Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it's your turn and follow local guidance.The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.`,
`The endless source of knowledge, information, entertainment, and training are books. Before the age of the internet, books were the most dominating source of knowledge. But of course, with technology, the forms of books have changed, and books have become more accessible to everyone.Regardless of all other supplements of books, the contribution and role of books in our life are indispensable. In the education system, books are mostly followed to date for knowledge providing and gain. Books on several subjects enhance several aspects of education and learning. Writers can express their thoughts, views, and observations about any topic through their writings, which are published in books.For general knowledge about anything, we seek books like encyclopedias, atlas, and dictionaries. And then there are also those books that guide us while we are dealing with certain tasks like cookbooks, travel books, self-help books, etc.It is no news that books are a great source of entertainment as there are many kinds of readers, who are a fan of books like novels, poetry books, short stories, magazines, comics, etc. Sometimes reading also becomes an addiction, but in my opinion, it is a good kind of addiction that will only be beneficial for an individual.`,
`Riverbank Erosion is an endemic and recurrent natural hazard in  Bangladesh. When rivers enter the mature stage (as in the case with the three mighty rivers, the Mangas, the Gongas, the Bramaputra and The Meghna)  they become sluggish and meander or braid. These oscillations cause massive riverbank erosion. Every year, millions of people are affected by erosion that destroys standing crops, farmland and homestead land.It is estimated that about 5% of the total floodplain of Bangladesh is directly affected by erosion. Some researchers have reported that bank erosion is taking place in about 94 out of 489 upazilas of the country. A few other researchers have identified 56 upazilas with incidence of erosion. At present, bank erosion and flood hazards in nearly 100 upazilas have become almost a regular feature. Of these, 35 are severely affected. For example, A newspaper report stated that over 25,000 families were rendered homeless in June 1993 by riverbank erosion in 16 districts.Some rivers cause erosion in large scale and high frequency due to their unstable character. These rivers assume a braided pattern consisting of several channels separated by small islands in their courses. During the last 200 years or so, the channels have been swinging between the main valley walls. During the monsoon, extensive over bank spills, bank erosion and bank line shifts are typical. The gradual migration or shifting of channels of the major rivers in Bangladesh amount to anywhere between 60m to 1,600m annually. In a typical year, about 2,400 km of the bank line experiences major erosion. The unpredictable shifting behaviour of the rivers and their encroachments not only affect the rural floodplain population but also urban growth centers and infrastructures. No systemic pattern has yet been observed of the erosion hazards because of the involvement of a large number of variables in the process.The intensity of bank erosion varies widely from river to river as it depends on such characteristics as bank material, water level variations, near bank flow velocities, platform of the river and the supply of water and sediment into the river. For example, loosely packed, recently deposited bank materials, consisting of site and fine sand and are highly susceptible to erosion. Rapid recession of floods accelerates the rates of bank erosion in such matters.`]


const text=textArr[(Math.random()*10).toFixed(0)];
console.log(text)
const splitText=text.split("");
const letterLength=splitText.length;
const wordLength=text.split(" ").length;
const letterPerWord=letterLength/wordLength


for(var i=0; i<splitText.length;i++){
    mainText.innerHTML+=`<span>${splitText[i]}</span>`
}
const span = document.querySelectorAll("span")
input.focus()



let charIndex=0;
span[0].classList.add("blink");

var correct=0;
var incorrect=0;

let time=60;
let typeing=false;
let timeInerval= setInterval(setTime,1000)

document.addEventListener("keyup",eventListener,true);



function eventListener(e){
    if(e.keyCode !=16 && e.keyCode !=17 && e.keyCode !=18 && e.keyCode !=8 && e.keyCode !=13 && e.keyCode !=20 &&e.keyCode !=27){
        if(!typeing){typeing=true;}
        
        
        char=input.value.split('')[charIndex];
        charr=span[charIndex].innerText;

        if(char==charr){
            span[charIndex].classList.add("correct");
            span[charIndex+1].classList.add("blink")
            correct++;
        }
        else{
            span[charIndex].classList.add("incorrect");
            span[charIndex+1].classList.add("blink");
            incorrect++;
        }
        span[charIndex].classList.remove("blink");
        charIndex+=1;

    }
    else if(e.keyCode===8){
        charIndex-=1;
        span[charIndex].classList.remove("correct");
        span[charIndex].classList.remove("incorrect");
        span[charIndex].classList.add("blink");
        span[charIndex+1].classList.remove("blink");

    }
}


function setTime(){
    if(typeing){
        if(time>=0){
            timer.innerText=time;
            time--;
        }
        else{
            clearInterval(timeInerval);
            let wpm=(charIndex/letterPerWord).toFixed(0);
            let acquracy=((1-(incorrect/charIndex))*100).toFixed(0);

            container.style.background="rgba(0,0,0,.4)";
            document.removeEventListener("keyup",eventListener,true);
            after.style.opacity="1";
            container.style.filter="blur(5px)";
            const wpmContaier=document.querySelector(".wpm-container");
            const acquracyContaier=document.querySelector(".acquracy-container");
            const againButton=document.querySelector(".again-button")
            
            
            wpmContaier.innerHTML=`WPM : <b>${wpm}</b>`;
            acquracyContaier.innerHTML=`Acquracy : <b>${acquracy}%</b>`;
            againButton.addEventListener("click",playAgain);
            document.addEventListener("keyup",(e)=>{if(e.keyCode === 13){playAgain()}})
        }
    }
}

function playAgain(){
    document.location.reload();    
}


