import Link from "next/link";
import Image from "next/image";
export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Mais Agro House home"
      className={`brand ${light ? "brand-light" : ""}`}
    >
      <span className="brand-symbol" aria-hidden="true">
        <Image
          src="/images/mais-brand-emblem.webp"
          alt=""
          width={384}
          height={256}
          sizes="(min-width: 1120px) 88px, 64px"
        />
      </span>
      <span>
        <span className="brand-name">
          <span>MAIS</span>
          <span className="brand-name-detail">AGRO HOUSE</span>
        </span>
        <span className="brand-tagline">ROOTED IN TRUST. BUILT FOR LIFE.</span>
      </span>
    </Link>
  );
}
