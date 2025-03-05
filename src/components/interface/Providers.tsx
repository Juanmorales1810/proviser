import { Zap, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

interface Providers {
    logo: string;
}

const proveedores: Providers[] = [
    {
        logo: "/providers/logo-01.png",
    },
    {
        logo: "/providers/logo-02.png",
    },
    {
        logo: "/providers/logo-03.png",
    },
    {
        logo: "/providers/logo-04.png",
    },
    {
        logo: "/providers/logo-05.png",
    },
    {
        logo: "/providers/logo-06.png",
    },
];

export default function Providers() {
    return (
        <section id="Proveedores" className="relative py-32 px-2">
            <div className="container mx-auto flex flex-col items-center gap-4">
                <h2 className="text-center text-3xl font-semibold lg:text-4xl">
                    Conoce a nuestros proveedores
                </h2>
                <p className="text-center text-zinc-500 lg:text-lg">
                    Trabajamos con los mejores proveedores del mercado para
                    ofrecerte una experiencia de compra única y de calidad.
                </p>
            </div>
            <div className="lg:container mx-auto w-full">
                <div className="mt-16 lg:mt-24">
                    <Carousel
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            AutoScroll({
                                playOnInit: true,
                                stopOnInteraction: false,
                                speed: 1,
                            }),
                        ]}
                        className="relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-36 before:bg-gradient-to-r before:from-zinc-100  before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-36 after:bg-gradient-to-l after:from-zinc-100 after:to-transparent"
                    >
                        <CarouselContent className="">
                            {proveedores.map((providers, index) => (
                                <CarouselItem
                                    key={index}
                                    className=" basis-1/2 lg:basis-1/4"
                                >
                                    <TestimonialCard providers={providers} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ providers }: { providers: Providers }) {
    return (
        <article className="h-full flex justify-center items-center bg-transparent border-0 hover:bg-zinc-400 hover:border-zinc-50/20 transition-colors rounded-xl">
            <div className="p-6">
                <img
                    src={providers.logo}
                    alt="Logo de proveedores"
                    height={80}
                    width={135}
                />
            </div>
        </article>
    );
}
