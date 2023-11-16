const info = document.getElementById("info");
const link = document.getElementById("link");
const modal = document.getElementById("modal");
const pic_a = document.getElementById("pic_a");
const pic_b = document.getElementById("pic_b");
const title = document.getElementById("title");

const information = [
    `
    Kabul, the capital city of Afghanistan, is a vibrant and historically rich metropolis nestled\
    in the country's central region. It is the largest city in Afghanistan. The city has witnessed\
    centuries of cultural influences, from the Silk Road era to the more recent impacts of\
    political conflict. Kabul is surrounded by many mountains, and is 1790 meters above sea\
    level. It is a hub of activity with bustling markets, diverse architecture, and a large\
    population. The city's culture reflects a blend of Afghan, Persian, and Asian influences.
    `,
    `
    Kandahar, located in southern Afghanistan, is the country's second-largest city and a\
    significant cultural and economic center. Nestled in a valley surrounded by mountains, it has a\
    strategic geographical position. Kandahar has a rich history, serving as a key center along the\
    ancient Silk Road and it has witnessing various rulers and empires. Kandahar's cultural heritage\
    is characterized by its historical landmarks, including the Kandahar Citadel.
    `,
    `
    Herat, situated in western Afghanistan near the Iranian border, is a city steeped in history\
    and known for its cultural heritage. It has served as a key center along the Silk Road,\
    facilitating the exchange of goods and ideas. Herat's architectural marvels, such as the Herat\
    Citadel and the historic Friday Mosque, reflect its rich past.
    `,
    `
    Mazar-i-Sharif, located in northern Afghanistan, is the country's fourth-largest city and a\
    center of cultural and economic significance. Known as the "Noble Shrine," it is home to the\
    historic Blue Mosque, a masterpiece of Islamic architecture and a major pilgrimage site.\
    Mazar-i-Sharif has a history dating back to ancient times, with a strategic location along\
    trade routes. Its vibrant bazaars, historical landmarks, and religious importance contribute to\
    Mazar-i-Sharif's unique charm and cultural prominence.
    `,
    `
    Band-e-Amir National Park, located in central Afghanistan, is the country's first national park\
    and a stunning natural wonder. The park is renowned for its series of six deep blue lakes,\
    formed by natural dams. These lakes are surrounded by dramatic cliffs and offer breathtaking\
    scenery against the backdrop of the Hindu Kush mountains. Band-e-Amir's unique geological\
    formations and vibrant ecosystem make it a haven for wildlife and a popular destination for\
    nature enthusiasts.
    `,
    `
    Salang Pass, situated in the Hindu Kush mountain range in Afghanistan, is a crucial mountain\
    pass connecting northern and southern parts of the country. It serves as a vital transportation\
    route, particularly the Salang Tunnel, which facilitates travel through the difficult terrain.\
    The pass is known for its challenging weather conditions, with heavy snowfall and harsh winters\
    affecting accessibility. Despite its difficulties, Salang Pass plays a strategic role in\
    maintaining connectivity and trade between different regions of Afghanistan.
    `,
    `
    The Korangal Valley, located in eastern Afghanistan, gained prominence during the conflict in\
    the region, particularly as the site of intense military engagements. Surrounded by rugged\
    mountains, the valley has a history of being a challenging terrain for both military operations\
    and local inhabitants. The valley has witnessed periods of revolt and has been a focal point in\
    understanding the dynamics of anti-revolutionary efforts in Afghanistan.
    `,
    `
    Kajaki Dam is an important infrastructure in Afghanistan, providing hydroelectric power and\
    water for irrigation. Located along the Helmand River, it has been a key resource for the\
    region. Despite the ongoing conflicts, Kajaki Dam continues to be a significant asset for\
    energy production and water management, contributing to the development of the surrounding\
    areas.
    `
];
const paths = [
    "Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Band-e_Amir_National_Park",
    "Salang_Pass", "Korangal_Valley", "Kajaki_Dam"
];
const names = [
    "Kabul", "Kandahar", "Herat", "Mazar-i-Sharif", "Band-e-Amir National Park",
    "Salang Pass", "Korangal Valley", "Kajaki Dam"
];

let toggled = false;

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
        info.innerText = information[idx - 1];
        toggled = true;
    } else {
        modal.style.display = "none";
        link.href = "";
        info.innerText = "";
        toggled = false;
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
window.addEventListener(
    "click",
    (ev) => {
        if (ev.target == document.body && toggled) {
            toggle(0);
        }
    }
);
