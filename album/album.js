const photoSets = {
  2025: Array.from({ length: 18 }, (_, index) => `../img/album/2025/${String(index + 1).padStart(2, '0')}.jpg`),
  2024: Array.from({ length: 19 }, (_, index) => `../img/album/2024/${String(index + 1).padStart(2, '0')}.jpg`),
};

document.querySelectorAll('.album-generated[data-year], .album-year#2025 .album-grid').forEach((gallery) => {
  const year = gallery.dataset.year || gallery.closest('.album-year').id;
  const photos = photoSets[year] || [];
  gallery.innerHTML = Array.from({ length: 20 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const src = photos[index] || `../img/album/${year}/${number}.jpg`;
    return `<figure><img src="${src}" alt="HackWell ${year} photo ${number}"><figcaption>${number}</figcaption></figure>`;
  }).join('');
});

document.querySelectorAll('.album-grid img').forEach((image) => {
  image.addEventListener('error', () => image.removeAttribute('src'), { once: true });
});
