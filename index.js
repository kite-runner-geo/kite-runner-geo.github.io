const link = document.getElementById("link");
const modal = document.getElementById("modal");
const pic_a = document.getElementById("pic_a");
const pic_b = document.getElementById("pic_b");
const title = document.getElementById("title");

const paths = [
    "Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Band-e_Amir_National_Park",
    "Salang_Pass", "Korangal_Valley", "Kajaki_Dam"
];
const names = [
    "Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Band-e-Amir National Park",
    "Salang Pass", "Korangal Valley", "Kajaki Dam"
];

function toggle(idx) {

    if (idx) {
        modal.style.display = "block";
        title.innerText = names[idx - 1];
        if (idx <= 4) {
            pic_a.src = `./assets/cities/img_${idx}_a.jpeg`;
            pic_b.src = `./assets/cities/img_${idx}_b.jpeg`;
        } else {
            pic_a.src = `./assets/landscapes/img_${idx - 4}_a.jpeg`;
            pic_b.src = `./assets/landscapes/img_${idx - 4}_b.jpeg`;
        }
        link.href = `https://en.wikipedia.org/wiki/${paths[idx - 1]}`;
    } else {
        modal.style.display = "none";
        link.href = "";
    }

}

window.addEventListener(
    "click",
    (ev) => {
        if (ev.target == modal) {
            toggle(0);
        }
    }
);
