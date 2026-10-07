import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Slide {
    eyebrow: string;
    title: string;
    highlight: string;
    text?: string;
    cta: string;
    href: string;
    img: string;
    // Banner styling (ignored by the hero variant)
    bg?: string;
    accent?: string;
    button?: string;
    reverse?: boolean;
}

const heroSlides: Slide[] = [
    {
        eyebrow: "Temporada alta en el Norte",
        title: "Tu operación no puede",
        highlight: "detenerse.",
        cta: "Cotiza ahora",
        href: "/#Contacto",
        img: "/web/slider-1-temporada-alta.webp",
    },
    {
        eyebrow: "Industrial · Ferretería · Riego · Sanitario · Suministros",
        title: "Un solo proveedor.",
        highlight: "Todo el abastecimiento.",
        cta: "Ver líneas",
        href: "/#Servicios",
        img: "/web/slider-2-un-solo-proveedor.webp",
    },
    {
        eyebrow: "EPP · Ferretería técnica · Riego",
        title: "Stock listo",
        highlight: "para tu faena.",
        cta: "Cotiza en línea",
        href: "/#Contacto",
        img: "/web/slider-3-stock-listo.webp",
    },
];

const bannerSlides: Slide[] = [
    {
        eyebrow: "Seguridad industrial · Temporada alta",
        title: "Sube el sol.",
        highlight: "Protege a tu equipo.",
        text: "Lentes UV, legionarios, guantes y calzado de seguridad para faenas del Norte.",
        cta: "Cotiza EPP",
        href: "/blog/epp-seguridad-industrial-norte-de-chile",
        img: "/web/banner-1-epp.webp",
        bg: "bg-[#06101f] text-white",
        accent: "text-sky-500",
        button: "bg-sky-500 text-[#06101f]",
    },
    {
        eyebrow: "Riego · Primavera",
        title: "Prepara tu riego",
        highlight: "antes del verano.",
        text: "Bombas, HDPE, fittings, solenoides y fertirriego con stock disponible.",
        cta: "Ver riego",
        href: "/blog/temporada-riego-region-de-coquimbo",
        img: "/web/banner-2-riego.webp",
        bg: "bg-blue-800 text-white",
        accent: "text-sky-300",
        button: "bg-white text-blue-800",
        reverse: true,
    },
    {
        eyebrow: "Despacho · Norte de Chile",
        title: "De Coquimbo a Iquique,",
        highlight: "sin demoras.",
        text: "La Serena · Coquimbo · Copiapó · Antofagasta · Calama · Iquique",
        cta: "Cotiza ahora",
        href: "/#Contacto",
        img: "/web/banner-3-despacho-norte.webp",
        bg: "bg-sky-500 text-[#06101f]",
        accent: "",
        button: "bg-[#06101f] text-white",
    },
];

const display = "font-display font-bold uppercase leading-[0.95]";

export default function PromoSlider({
    variant,
}: {
    variant: "hero" | "banner";
}) {
    const slides = variant === "hero" ? heroSlides : bannerSlides;
    const [ref, api] = useEmblaCarousel({ loop: true });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        api.on("select", onSelect);
        // ponytail: plain interval instead of embla-carousel-autoplay dependency
        const id = setInterval(() => api.scrollNext(), 6000);
        return () => {
            clearInterval(id);
            api.off("select", onSelect);
        };
    }, [api]);

    const dots = (
        <div className="flex items-center gap-3">
            {slides.map((_, i) => (
                <button
                    key={i}
                    aria-label={`Ir a la diapositiva ${i + 1}`}
                    onClick={() => api?.scrollTo(i)}
                    className={cn(
                        "h-1 transition-all",
                        i === current
                            ? "w-16 bg-sky-500"
                            : variant === "hero"
                              ? "w-8 bg-white/50"
                              : "w-8 bg-zinc-400",
                    )}
                />
            ))}
            <span
                className={cn(
                    "ml-4 font-mono text-sm tracking-widest",
                    variant === "hero" ? "text-white/80" : "text-zinc-500",
                )}
            >
                0{current + 1} / 0{slides.length}
            </span>
        </div>
    );

    return (
        <section
            className={cn(
                "relative overflow-hidden min-h-dvh",
                variant === "hero" ? "bg-[#0b1a33]" : "py-16",
            )}
            aria-roledescription="carrusel"
        >
            <div ref={ref} className="overflow-hidden">
                <div className="flex">
                    {slides.map((s, i) =>
                        variant === "hero" ? (
                            <HeroSlide key={i} slide={s} />
                        ) : (
                            <BannerSlide key={i} slide={s} />
                        ),
                    )}
                </div>
            </div>
            <div
                className={cn(
                    "container mx-auto px-6 md:px-16",
                    variant === "hero"
                        ? "absolute bottom-10 left-0 right-0"
                        : "mt-6",
                )}
            >
                {dots}
            </div>
        </section>
    );
}

function Cta({ slide, className }: { slide: Slide; className?: string }) {
    return (
        <a
            href={slide.href}
            className={cn(
                display,
                "inline-flex w-fit items-center gap-3 px-8 py-4 text-xl tracking-wide transition hover:brightness-110",
                className,
            )}
        >
            {slide.cta} <ArrowRight className="size-5" />
        </a>
    );
}

function Eyebrow({ text, className }: { text: string; className?: string }) {
    return (
        <p
            className={cn(
                "font-mono text-xs uppercase tracking-[0.3em] md:text-sm",
                className,
            )}
        >
            {text}
        </p>
    );
}

function HeroSlide({ slide }: { slide: Slide }) {
    return (
        <div className="relative min-w-0 shrink-0 grow-0 basis-full h-dvh min-h-130">
            <img
                src={slide.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#0b1a33] via-[#0b1a33]/75 to-transparent" />
            <div className="relative container mx-auto flex h-full flex-col justify-center gap-6 px-6 pt-16 md:px-16">
                <Eyebrow text={slide.eyebrow} className="text-sky-400" />
                <h2
                    className={cn(
                        display,
                        "max-w-4xl text-5xl text-white md:text-7xl lg:text-8xl",
                    )}
                >
                    {slide.title}{" "}
                    <span className="text-sky-500">{slide.highlight}</span>
                </h2>
                <Cta slide={slide} className="mt-4 bg-sky-500 text-[#0b1a33]" />
            </div>
        </div>
    );
}

function BannerSlide({ slide }: { slide: Slide }) {
    return (
        <div
            className={cn(
                "relative min-w-0 shrink-0 grow-0 basis-full flex flex-col md:flex-row md:h-120",
                slide.reverse && "md:flex-row-reverse",
                slide.bg,
            )}
        >
            <div className="relative z-10 flex flex-1 flex-col justify-center gap-5 px-6 py-10 md:px-16">
                <Eyebrow text={slide.eyebrow} className={slide.accent} />
                <h2 className={cn(display, "text-4xl md:text-6xl")}>
                    {slide.title}{" "}
                    <span className={slide.accent}>{slide.highlight}</span>
                </h2>
                {slide.text && (
                    <p className="text-base opacity-90 md:text-lg">
                        {slide.text}
                    </p>
                )}
                <Cta slide={slide} className={slide.button} />
            </div>
            <img
                src={slide.img}
                alt=""
                loading="lazy"
                className={cn(
                    "h-56 w-full object-cover md:h-full md:w-1/2",
                    slide.reverse
                        ? "md:mask-[linear-gradient(to_left,transparent,#000_35%)]"
                        : "md:mask-[linear-gradient(to_right,transparent,#000_35%)]",
                )}
            />
        </div>
    );
}
