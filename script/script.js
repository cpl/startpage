const Config = {
    name: "cpl",
    scale: 1,
    Links: [
        [
            "chat",
            [
                ["whatsapp", "https://web.whatsapp.com/"],
                ["telegram", "https://web.telegram.org/"]
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
