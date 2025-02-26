import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react";

export function SheetMenu() {
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="text-black">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Proviser - Chile</SheetTitle>
                    <SheetDescription>

                    </SheetDescription>
                </SheetHeader>
                <nav aria-label="Global">
                    <ul className="flex flex-col items-start font-bold gap-6 text-xl px-2.5">
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/"
                            >
                                Inicio
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Sectores"
                            >
                                Sectores
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Servicios"
                            >
                                Servicios y productos
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Sobre-nosotros"
                            >
                                Sobre nosotros
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="#"
                            >
                                Productos
                            </a>
                        </li>

                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Testimonios"
                            >
                                Testimonios
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Contacto"
                            >
                                Contacto
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                onClick={() => setOpen(false)}
                                href="/#Blog"
                            >
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}