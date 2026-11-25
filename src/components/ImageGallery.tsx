"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
export default function ImageGallery({
  images,
  title,
  fit = "cover",
}: {
  images: string[];
  title: string;
  fit?: "cover" | "contain";
}) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  function step(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
  }
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
  }
  return (
    <div className="gallery">
      <button
        className={`gallery-main${fit === "contain" ? " gallery-main-contain" : ""}`}
        aria-label={`Enlarge ${title} image ${index + 1}`}
        onClick={() => {
          dialog.current?.showModal();
          document.body.style.overflow = "hidden";
        }}
      >
        <Image
          src={images[index]}
          alt={`${title} — image ${index + 1}`}
          style={{ objectFit: fit }}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 70vw"
        />
        <span>
          <Expand size={17} />
          View gallery
        </span>
      </button>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={index === i}
              className={index === i ? "selected" : ""}
            >
              <Image
                src={src}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="gallery-dialog"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-label={`${title} image gallery`}
      >
        <button
          className="gallery-close"
          aria-label="Close gallery"
          onClick={close}
        >
          <X />
        </button>
        <div className="lightbox-image">
          <Image
            src={images[index]}
            alt={`${title} — image ${index + 1}`}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
        <div className="lightbox-controls">
          <button aria-label="Previous image" onClick={() => step(-1)}>
            <ChevronLeft />
          </button>
          <p>
            {index + 1} / {images.length}
          </p>
          <button aria-label="Next image" onClick={() => step(1)}>
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </div>
  );
}
