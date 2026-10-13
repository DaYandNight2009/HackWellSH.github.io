const photoSets = {
  2024: [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell48-89i51SilpS4GcJiH6Kxr1tHdbGes2n.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell41-lBjMJnHYGRrr8HDBLomiSWSgwKVX53.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell42-dcZJanQ4QqYrUcxhsW3u3j88Mlrit9.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell49-Veu9Vc2qh101TNQiZNDWQH0M1tZS6I.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell40-LhNvqIRACHkMWgYEFpoIT0teeeThx2.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell45-mqMTrb8UpKe2wiqK3TZ0xKlcnfFHzf.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell43-536KOdERpP7N1zuNRBkeKdMebmvxSU.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell44-3y8ZCLIvJzUWMwRqqC4sIUDNLCS8Lf.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell46-6gDZeYMzj80pIxsjjj01L5mdg9uh8N.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell4-GQHYwcZ52Blut1jVMDHinQTUlkYE15.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell36-IVv7Fq0SWweVrsZIccTAa0zofwWqjA.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell34-IxtNIYtn1PCekSoDxNmVn61dYxwGJS.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell35-BQeQNvh6KSuvGsumRBEYSjVySSqigp.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell37-TeTJfaG8wmALCklE4ZRGkomRSQ1k19.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell3-OvuWLmEqm1DgYpQUmupqHhXioKpNdr.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell39-ekUPqGPg43jFoD5cblwbCx3FGL4W0m.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell38-vlAuLVWUBEQhUU0nwouqEtCmh62Gnh.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell28-3VnnBu4nVJO5HEG7aMfzvVuFq7YGsf.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20240921-22%20Hackwell37-fLjQ55LfTUUTPQATmUr3IWummz6CJk.jpg',
  ],
};

document.querySelectorAll('.album-generated[data-year]').forEach((gallery) => {
  const year = gallery.dataset.year;
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
