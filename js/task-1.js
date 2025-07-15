const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elements = item.querySelectorAll('ul li').length;

    console.log(`Catergory: ${title}`);
    console.log(`Elements: ${elements}`)
});