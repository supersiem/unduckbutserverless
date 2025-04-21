
let c = "https://google.com/search?q={{{s}}}";

let b = new URL(window.location.href.toString());
let q = b.searchParams.get("q");
let q2 = q.split(" ");
q2.forEach(split => {
    if (split.startsWith("!")) {
        kagi_bangs.forEach(bang => {
            if (split.toLocaleLowerCase() == "!" + bang.t.toLocaleLowerCase()) {
                c = bang.u;
                // voor in het begin/midden van de url
                q = q.replace(split + " ", "");
                // voor het einde van de url
                q = q.replace(split, "");
            }
        });
    }
});

window.location.href = c.replaceAll("{{{s}}}", q);