const grid = document.createElement('div');
grid.className = 'grid';
document.body.appendChild(grid);
document.addEventListener('keydown', (event)=>{
    if (event.ctrlKey && event.code === 'KeyG') grid.classList.toggle('grid_visible');
});

//# sourceMappingURL=index.2e0393a7.js.map
