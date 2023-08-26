const categories = {
    "历史学": ["古代历史", "现代历史", "中世纪历史"],
    "哲学": ["东方哲学", "西方哲学", "现代哲学"],
    "工学": ["机械", "自动化", "材料"],
    "理学": ["物理", "化学", "生物"]
};

function getRandomCategory() {
    const keys = Object.keys(categories);
    return keys[Math.floor(Math.random() * keys.length)];
}

function getRandomSubCategory(category) {
    const subCategories = categories[category];
    return subCategories[Math.floor(Math.random() * subCategories.length)];
}

function runSlotMachine() {
    const firstSlot = document.getElementById('slot1');
    const secondSlot = document.getElementById('slot2');
    const thirdSlot = document.getElementById('slot3');

    const result1 = getRandomCategory();
    firstSlot.textContent = result1;

    const result2 = getRandomSubCategory(result1);
    secondSlot.textContent = result2;

    const result3 = getRandomSubCategory(result2);
    thirdSlot.textContent = result3;  
}