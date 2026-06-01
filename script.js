const plants = [
  {
    name: "山地芳香灌木",
    latin: "Chamaebatia foliolosa",
    family: "蔷薇科 · Chamaebatia 属",
    text: "缪尔笔下如黄绿色毛毯般连绵数英里的主角。叶片三回羽状，像细密蕨叶；腺体会分泌树脂，散发强烈香气。白色小花与草莓花相似。",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Chamaebatia_foliolosa_2.jpg",
    x: 58, y: 72
  },
  {
    name: "华盛顿百合",
    latin: "Lilium washingtonianum",
    family: "百合科 · 百合属",
    text: "加州山地常见的高大百合。洁白花被片带紫色斑点，盛开后渐呈淡紫色。日记中，它偶尔从低矮灌木构成的“毯子”上探出头来。",
    image: "https://oregonflora.org/dbimages/OFPimages/OFPImages_big/2016/DIG43428.jpg",
    x: 82, y: 72
  },
  {
    name: "羽扇豆",
    latin: "Lupinus spp.",
    family: "豆科 · 羽扇豆属",
    text: "掌状复叶与层层排列的蝶形花很容易辨认。缪尔在阳光充足的河岸背后看见它们，与雀麦和紫罗兰一起构成春日野花带。",
    image: "https://cdn.mos.cms.futurecdn.net/g8sDNPq8MzBSgzxXsBcg9b-1600-80.jpg.webp",
    x: 71, y: 57
  },
  {
    name: "巨链蕨",
    latin: "Woodwardia fimbriata",
    family: "乌毛蕨科 · 狗脊属",
    text: "大型常绿蕨类，喜爱溪流和潮湿林地，叶片可以长得比人更高。它很可能对应译文里河岸边高达六英尺的“狗脊蕨”。",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Woodwardia_fimbriata_4.jpg?width=700",
    x: 25, y: 64
  },
  {
    name: "蕨",
    latin: "Pteridium aquilinum",
    family: "碗蕨科 · 蕨属",
    text: "适应力极强的蕨类，地下根茎可以在林缘和开阔坡地扩张。卷曲的新叶展开后，形成宽阔而轻盈的三角形叶片。",
    image: "https://www.gardenia.net/wp-content/uploads/2023/05/pteridium-aquilinum-780x520.webp",
    x: 37, y: 76
  },
  {
    name: "山地薄荷",
    latin: "Monardella odoratissima",
    family: "唇形科 · 山薄荷属",
    text: "北美西部山地的芳香多年生草本。揉搓叶片可闻到清凉的薄荷气味，淡紫色小花聚成紧密花序，吸引大量传粉昆虫。",
    image: "https://gardenoracle.com/images/assets-images/monardella-villosa-flower.jpg",
    x: 67, y: 79
  },
  {
    name: "雀麦",
    latin: "Bromus spp.",
    family: "禾本科 · 雀麦属",
    text: "缪尔把高大的雀麦写成风中摇摆的竹子。它们并不以单朵花取胜，而以轻盈花序和成片的节奏感塑造了河岸草地。",
    image: "https://portal.wiktrop.org/files-api/api/get/crop/img//Bromus%20catharticus/broca_20090702_210012.jpg?h=500",
    x: 51, y: 61
  },
  {
    name: "紫罗兰",
    latin: "Viola spp.",
    family: "堇菜科 · 堇菜属",
    text: "小型草本，常藏在草地与林缘较低的位置。花瓣并不总是紫色，但不对称的五瓣花和短距，是野外辨认的重要线索。",
    image: "https://costafarms.com/cdn/shop/articles/Viola-Annual-Flower-HERO-Costa-Farms_1000x1000.jpg?v=1680798941",
    x: 77, y: 85
  }
];

const hotspots = document.querySelector("#hotspots");
const plantList = document.querySelector("#plantList");
const card = document.querySelector("#plantCard");
let selectedIndex = 0;

function renderCard(index) {
  const plant = plants[index];
  card.innerHTML = `
    <img class="plant-card__image" src="${plant.image}" alt="${plant.name}" loading="lazy" />
    <div class="plant-card__body">
      <p class="plant-card__number">SPECIMEN ${String(index + 1).padStart(2, "0")}</p>
      <h3>${plant.name}<i>${plant.latin}</i></h3>
      <p class="plant-card__family">${plant.family}</p>
      <p class="plant-card__description">${plant.text}</p>
    </div>
  `;
  card.classList.add("is-visible");
  document.querySelectorAll(".hotspot, .index-item").forEach((item) => {
    item.classList.toggle("is-active", Number(item.dataset.index) === index);
  });
  selectedIndex = index;
}

plants.forEach((plant, index) => {
  const hotspot = document.createElement("button");
  hotspot.className = "hotspot";
  hotspot.type = "button";
  hotspot.dataset.index = index;
  hotspot.style.left = `${plant.x}%`;
  hotspot.style.top = `${plant.y}%`;
  hotspot.setAttribute("aria-label", `查看${plant.name}`);
  hotspot.addEventListener("mouseenter", () => renderCard(index));
  hotspot.addEventListener("focus", () => renderCard(index));
  hotspot.addEventListener("click", () => renderCard(index));
  hotspots.appendChild(hotspot);

  const item = document.createElement("button");
  item.className = "index-item";
  item.type = "button";
  item.dataset.index = index;
  item.innerHTML = `<span>${plant.name}</span><i>${String(index + 1).padStart(2, "0")}</i>`;
  item.addEventListener("mouseenter", () => renderCard(index));
  item.addEventListener("focus", () => renderCard(index));
  item.addEventListener("click", () => renderCard(index));
  plantList.appendChild(item);
});

renderCard(selectedIndex);
