
let c = "https://google.com/search?q={{{s}}}";

let b = new URL(window.location.href.toString());
let q = b.searchParams.get("q");
let q2 = q.split(" ");
q2.forEach(split => {
    if (split.startsWith("!")) {
        kagi_bangs.forEach(element => {
            if (split.replaceAll("!", "") == element.t) {
                c = element.u;
                q = q.replaceAll(split, "");
            }
        });
    }
});

window.location.href = c.replaceAll("{{{s}}}", q);