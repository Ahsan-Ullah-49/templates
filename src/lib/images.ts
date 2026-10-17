export interface GalleryImage {
  src: string;
  label: string;
}

const still = (n: number): GalleryImage => ({
  src: `/images/Still ${n}.png`,
  label: `Still ${n}`,
});

export const STILL_IMAGES: GalleryImage[] = [1, 2, 3, 4, 5, 6, 7, 8, 10].map(still);

export const PEOPLE_IMAGES: GalleryImage[] = [
  { src: '/images/Graham Cahill.jpg', label: 'Graham Cahill' },
  { src: '/images/founder.jpg', label: 'Founder' },
  { src: '/images/sasha.jpg', label: 'Sasha' },
  { src: '/images/shiro_nakamura.jpg', label: 'Shiro Nakamura' },
];

export const GALLERY_IMAGES: GalleryImage[] = [...STILL_IMAGES, ...PEOPLE_IMAGES];
