const entries = {
    "minecraft-dev-category": [
        {
            "title": "Server Plugins",
            "description": "I have been using the Spigot/Paper API (In Java) for almost 3 years now, I can do anything ranging from simple commands to complex procedural world generation. I have made multiple small servers entirely using custom plugins but my best one so far is called CityMiner, you can take a look by joining CityMiner.minehut.gg (Hosted on minehut), It has procedurally generated cities, custom bosses & entities, special weapons and items and much more... The project is still active to this day.",
            "image": "./assets/CITYMINER.png"
        },
        {
            "title": "Mods",
            "description": "I have been making forge mods for on and off for around a year. It is far from being one of my strong points thought.",
            "image": "./assets/forge-logo.jpg"
        },
        {
            "title": "Skript",
            "description": "I used Skript in a lot of projects and have a good understanding of how it works, even thought I highly prefer using java over it.",
            "image": "./assets/skript-logo.jpg"
        }
    ],
    "web-dev-category": [
        {
            "title": "Web Servers & APIs",
            "description": "I have been using NodeJS for over a year now and can make high performance, scalable web servers and APIs. This includes websites with advanced functionalities such as authentification, user data saving...",
            "image": "./assets/nodejs-logo.png"
        },
        {
            "title": "Web Pages",
            "description": "I am good at front end development and have experience with HTML, CSS and JavaScript. Allowing me to make good looking user interfaces.",
            "image": "./assets/html-logo.avif"
        }
    ],
    "minecraft-building-category": [
        {
            "title": "Skills",
            "description": "I have been an active minecraft builder for over 4 years, during which i gained experience in most aspects of building. I use WorldEdit as building tool and also know how to use WorldPainter. I would say my strongest area is terraforming and natural themed builds. You can see some of my past builds bellow.",
            "image": ""
        },
        {
            "title": "Faction Spawn",
            "description": "This spawn build was made for a small factions server back in 2022, the server is now long gone.",
            "image": "./assets/5.png"
        },
        {
            "title": "Server Hub",
            "description": "This hub build was for a network that used to be active around 2022, the build is much bigger but this is the only screenshot that I still have.",
            "image": "./assets/1.png"
        },
        {
            "title": "Floating Islands",
            "description": "This small build was made back in 2021 as an experiment to see if I could make good looking floating islands, the result turned out alright.",
            "image": "./assets/4.png"
        }
    ],
    "graphic-design-category": [
        {
            "title": "Skills",
            "description": "I have always liked art and graphic design, and I have been practicing my skills for almost 6 years now. Here are some of the designs I made in the past.",
            "image": ""
        },
        {
            "title": "CityMiner Logo",
            "description": "CityMiner is a big project of mine that is still active to this day, its logo design is simple but eye-catching.",
            "image": "./assets/new-CM-logo.png"
        },
        {
            "title": "Frost Network Logo",
            "description": "Frost Network was a small pation project that sadly never found success, this is the logo I had made for it.",
            "image": "./assets/logo.png"
        },
        {
            "title": "Koros Network Logo",
            "description": "Koros Network was a small project I was a part of, I think that the logo turned out great.",
            "image": "./assets/koros logo.png"
        },
        {
            "title": "FN Logo",
            "description": "This logo was a comission for a server owner.",
            "image": "./assets/FN_normal.png"
        }
    ]
}
var previousCategory = null;


function selectCategory(id) {
    const category = document.getElementById(id)
    if (previousCategory == category) return;

    // Change category bg color
    category.style.backgroundColor = '#0a1f4a'
    if (previousCategory) previousCategory.style.backgroundColor = '#040e22'


    // Display entries
    const entriesElement = document.getElementById("entries")
    entriesElement.style.visibility = 'visible'
    entriesElement.innerHTML = ""
    const categoryEntries = entries[category.id]
    if (categoryEntries) {
        categoryEntries.forEach(entry => {
            entriesElement.appendChild(createEntry(
                entry.title,
                entry.image,
                entry.description
            ))
        });
    }

    previousCategory = category;
}




function createEntry(title, img_path, description) {
    const entry = document.createElement("div")
    entry.className = "entry"

    const title_e = document.createElement("p")
    title_e.className = "title"
    title_e.textContent = title
    entry.appendChild(title_e)

    const description_e = document.createElement("p")
    description_e.className = "description"
    description_e.textContent = description
    entry.appendChild(description_e)

    const img_e = document.createElement("img")
    img_e.className = "image"
    img_e.src = img_path
    entry.appendChild(img_e)

    return entry
}