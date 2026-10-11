document.querySelectorAll('.album-generated[data-year]').forEach((gallery) => {
  const year = gallery.dataset.year;
  gallery.className = 'album-grid';
  gallery.innerHTML = Array.from({ length: 20 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    return `<figure><img src="../img/album/${year}/${number}.jpg" alt="HackWell ${year} photo ${number}"><figcaption>${number}</figcaption></figure>`;
  }).join('');
});

document.querySelectorAll('.album-grid img').forEach((image) => {
  image.addEventListener('error', () => image.removeAttribute('src'), { once: true });
});
