'use strict';

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const lightbox = document.querySelector('#art-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const artworkImages = document.querySelectorAll('.art-card img');
let previouslyFocusedArtwork = null;

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  if (previouslyFocusedArtwork) previouslyFocusedArtwork.focus();
}

function openLightbox(image) {
  if (!lightbox || !lightboxImage || !lightboxCaption) return;
  previouslyFocusedArtwork = image;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.closest('.art-card')?.querySelector('figcaption')?.textContent || '';
  lightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  lightbox.querySelector('.lightbox-close')?.focus();
}

artworkImages.forEach(image => {
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', `Open ${image.alt} in larger view`);
  image.addEventListener('click', () => openLightbox(image));
  image.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(image);
    }
  });
});

lightbox?.querySelectorAll('[data-lightbox-close]').forEach(control => {
  control.addEventListener('click', closeLightbox);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeLightbox();
});
