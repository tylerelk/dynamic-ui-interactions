import './style.css';

const root = document.getElementById('root-div');

function renderPage() {
    const lists = document.querySelectorAll('ul');
    const items = document.querySelectorAll('li');

    lists.forEach(list => {
        let label = document.createElement('h4');
        label.textContent = `Level: ${list.classList[0]}`;
        list.insertBefore(label, list.firstChild);
    });

    items.forEach(item => {
        let label = document.createElement('h4');
        label.textContent = `Level: ${item.classList[0]}`;
        item.insertBefore(label, item.firstChild);
    });
}

root.appendChild(renderPage());