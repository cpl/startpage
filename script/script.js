const Config = {
    name: "cpl",
    scale: 1,
    Links: [
        [
            "github",
            [
                ["trending", "https://github.com/trending"],
                ["stars", "https://github.com/"]
                ["repos",
                    [
                        ["awesome go", "https://github.com/avelino/awesome-go"],
                        ["build your own x", "https://github.com/danistefanovic/build-your-own-x"],
                        ["macOS security", "https://github.com/drduh/macOS-Security-and-Privacy-Guide"],
                        ["dev roadmap", "https://github.com/kamranahmedse/developer-roadmap"],
                        ["system design", "https://github.com/donnemartin/system-design-primer"],
                        ["api checklist", "https://github.com/shieldfy/API-Security-Checklist"],
                        ["datasets", "https://github.com/awesomedata/awesome-public-datasets"],
                        ["'free' tiers", "https://github.com/ripienaar/free-for-dev"],
                        ["practical projects", "https://github.com/karan/Projects"]
                    ]
                ]
            ]
        ],
        [
            "tools",
            [
                ["regex", "http://regexr.com/"],
                ["cryptii", "https://cryptii.com/pipes/enigma-machine"],
                ["hexed", "https://hexed.it/"],
                ["shell explain", "https://explainshell.com/"],
                ["json2go", "https://mholt.github.io/json-to-go/"],
                ["down detector", "https://downdetector.co.uk/"],
                ["domain history", "https://whoisrequest.com/history/"],
                ["draw.io", "https://app.diagrams.net/"],
                ["uptime calc", "https://tryhexadecimal.com/sla-uptime-calculator"],
                ["promlens", "https://promlens.com/"],
                ["random user", "https://www.randomuser.me/"],
                ["coolors", "https://coolors.com"],
                ["asciinema", "https://asciinema.org/"],
                ["quantumJS", "https://quantumjavascript.app/"]
            ]
        ],
        [
            "news",
            [
                ["lobsters", "https://lobste.rs/"],
                ["hacker", "https://news.ycombinator.com/"],
                ["cron.weekly", "https://ma.ttias.be/cronweekly/"],
                ["golang.weekly", "https://golangweekly.com/"]
            ]
        ],
        [
            "reads",
            [
                
            ]
        ],
        [
            "youtube",
            [
                ["microservices", "https://youtu.be/y8OnoxKotPQ"],
                ["overengineer", "https://youtu.be/-AQfQFcXac8"],
                ["the good book", "https://youtu.be/EIBRdBVkDHQ"],
                ["upsilon", "https://youtu.be/B01HWsilRqs"],
                ["yuri was right", "https://youtu.be/IQPsKvG6WMI"]
            ]
        ],
        [
            "scripts",
            [
                ["honk.sh", "http://cpl.li/honk.sh"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
