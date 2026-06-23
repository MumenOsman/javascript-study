// Team Links Logic

function createLinks(list) {
    const existing = document.getElementById("team-list-nav");
    const ul = document.createElement("ul");
    ul.id = "team-list-nav";
    ul.classList.add("team-links");

    list.forEach(team => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");

        li.style.backgroundColor = team.primary;
        
        a.href = team.url;
        a.textContent = team.name;
        a.style.color = team.secondary;

        span.textContent = "[copy]";
        span.addEventListener("click", (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(team.url);
        });

        li.appendChild(a);
        li.appendChild(span);
        ul.appendChild(li);
    });

    if (existing && existing.parentNode) {
        existing.parentNode.replaceChild(ul, existing);
    } else {
        document.body.appendChild(ul);
    }
}
