function redirectToPortfolio() {
    window.location.href = 'portfolio.html';
}

function redirectToYoutube(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`);
}

document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    const detailContainer = document.getElementById('detail');

    const firstService = services[0];
    const serviceName = firstService.dataset.detail;
    const detailContent = getDetailContent(serviceName);
    detailContainer.innerHTML = detailContent;

    services.forEach(service => {
        service.addEventListener('click', function() {
            const serviceName = this.dataset.detail;
            const detailContent = getDetailContent(serviceName);

            detailContainer.innerHTML = detailContent;
        });
    });

    // Definujte detaily pre každú službu
    function getDetailContent(serviceName) {
        switch (serviceName) {
            case '4K Video':
                return '<h3>4K Video</h3><p>Prežite ohromujúcu kvalitu 4K videa, ktorá oživí váš obsah. </p><img src="assets/service1.png" alt="4K Video Detail">';
            case 'Dronové Zábery':
                return '<h3>Dronové Zábery</h3><p>Zachytite dychberúce pohľady z vzduchu s našimi profesionálnymi dronovými službami. </p><img src="assets/service2.png" alt="Dronové Zábery Detail">';
            case 'FPV':
                return '<h3>FPV</h3><p>Ponorte sa do vzrušenia zážitkov v pohľade z prvej osoby (FPV). </p><img src="assets/service3.png" alt="FPV">';
            case 'Fotografia':
                return '<h3>Fotografia</h3><p>Zachovajte svoje spomienky s našimi fotografickými službami vysokej kvality. </p><img src="assets/service4.png" alt="Fotografia Detail">';
            default:
                return '';
        }
    }
});

function sendEmail(e) {
    alert("Správa odoslaná!")
}

const images = document.querySelectorAll('.image');

  document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    images.forEach((image, index) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const centerX = left + width / 2;

      const distanceX = Math.abs(clientX - centerX);

      const scale = Math.max(-2 + (1 - (distanceX / windowWidth))*(1 - (distanceX / windowWidth)) * 10, 0);

      image.style.transform = `scale(${scale})`;
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Load comments from localStorage when the page is loaded
    loadComments();
});

function addComment() {
    let name = document.getElementById('name').value;
    let commentText = document.getElementById('comment').value;

    if (name.trim() === '' || commentText.trim() === '') {
        alert('Please enter both your name and comment before submitting.');
        return;
    }

    let commentList = document.getElementById('comment-list');
    let li = document.createElement('li');
    li.className = 'comment';
    li.innerHTML = `<strong>${name}:</strong> ${commentText}`;
    commentList.appendChild(li);

    // Save comments to localStorage
    saveComments();

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
}

function loadComments() {
    let commentList = document.getElementById('comment-list');
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    comments.forEach(function (comment) {
        let li = document.createElement('li');
        li.className = 'comment';
        li.innerHTML = comment;
        commentList.appendChild(li);
    });
}

function saveComments() {
    let commentNodes = document.querySelectorAll('.comment');
    let comments = Array.from(commentNodes).map(function (commentNode) {
        return commentNode.innerHTML;
    });

    localStorage.setItem('comments', JSON.stringify(comments));
}