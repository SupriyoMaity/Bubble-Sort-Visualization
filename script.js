function generateRandomBars(count) {
    let barsHTML = '';
    for (let i = 0; i < count; i++) {
        let height = Math.floor(Math.random() * 300) + 50; // Random height between 50 and 350
        barsHTML += `<div class="bar" style="height: ${height}px; width: 20px;"></div>`;
    }
    document.getElementById('bars').innerHTML = barsHTML;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    let bars = document.querySelectorAll('.bar');
    let len = bars.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            let bar1 = bars[i];
            let bar2 = bars[i + 1];
            let height1 = parseInt(bar1.style.height);
            let height2 = parseInt(bar2.style.height);
            if (height1 > height2) {
                swapped = true;
                bar1.style.backgroundColor = 'red';
                bar2.style.backgroundColor = 'red';
                await sleep(100);
                // Swap heights
                bar1.style.height = height2 + 'px';
                bar2.style.height = height1 + 'px';
                await sleep(100);
                bar1.style.backgroundColor = '#007bff';
                bar2.style.backgroundColor = '#007bff';
            }
        }
    } while (swapped);
}

function startSorting() {
    bubbleSort();
}

window.onload = function () {
    generateRandomBars(20); // Generate 20 random bars on page load
};