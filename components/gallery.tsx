"use client";

type Img = { src: string; alt?: string };

const defaultImages: Img[] = [
  { src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=60&auto=format&fit=crop', alt: 'Stationery' },
  { src: 'https://images.unsplash.com/photo-1518546305921-9d3f4b39f1d7?w=1200&q=60&auto=format&fit=crop', alt: 'Office' },
  { src: 'https://images.unsplash.com/photo-1581091012184-7c3d15b35c4c?w=1200&q=60&auto=format&fit=crop', alt: 'Printing' },
  { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60&auto=format&fit=crop', alt: 'Design' },
];

export function Gallery({ images = defaultImages }: { images?: Img[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-lg border border-slate-200">
          <img loading="lazy" src={img.src} alt={img.alt || ''} className="h-36 w-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
