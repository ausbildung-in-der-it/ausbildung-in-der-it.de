import Link from "next/link";
import {Input} from "@/components/ui/input";
import {ArrowRight, ChevronRight} from "lucide-react";
import { NavigationTile } from "@/components/ui/navigation-tile"
import ImageGrid from "@/components/ImageGrid";
import BlogArticleGrid from "@/components/BlogArticleGrid";

export default function Home() {
    return (
        <>
            <div className={"bg-white mt-8 rounded-lg border-2 overflow-hidden"}>
                <div className="p-8 lg:p-16">
                    <h1 className="text-2xl lg:text-4xl tracking-tight text-center font-bold">Dein Informationsportal
                        für die
                        IT-Ausbildung.</h1>
                    <h2 className={"lg:px-32 text-lg lg:text-xl leading-7 text-center mt-3"}>Willkommen bei Ausbildung
                        in der IT,
                        deine
                        Anlaufstelle für die duale Ausbildung der IT-Berufe in Deutschland. Egal ob mittendrin, weit
                        in der Zukunft geplant oder längst abgeschlossen: hier findest du, was du brauchst.</h2>
                    <Input className={"bg-gray-50 border-2 lg:w-96 py-6 mx-auto mt-6"} type="email"
                           placeholder="Suche nach einem Thema"/>
                </div>

                <div className={"grid lg:grid-cols-3"}>
                    <NavigationTile
                        href="/test-123"
                        title="Über die Ausbildung informieren"
                    />
                    <NavigationTile
                        href="#"
                        title="Prüfungsvorbereitung"
                    />
                    <NavigationTile
                        href="#"
                        title="Nach der Ausbildung"
                        className="border-r-0"
                    />
                </div>
            </div>


            <h2 className={"mt-16 mb-3 text-4xl font-extrabold font-mono"}>IT-Berufe</h2>
            <ImageGrid/>


            {/* <div className="grid grid-cols-3 gap-3 mt-3">
                <div className={"bg-[#AA8F62] rounded pl-1 pb-1 pr-6 pt-6"}>
                    <div className={"text-white text-3xl tracking-tight font-bold"}>
                        Über die Ausbildung informieren
                    </div>
                </div>
                <Link href={"#"} className="h-full">
                    <div
                        className={"bg-[#AA8F62] border-[#947d56] border-2 rounded pl-1 pb-1 pr-6 pt-6 flex justify-start items-end h-full"}>
                        <div className={"text-white text-3xl tracking-tight font-bold"}>
                            Prüfungsvorbereitung
                        </div>
                    </div>
                </Link>
                <Link href={"#"} className="h-full">
                    <div
                        className={"bg-[#AA8F62] border-[#947d56] hover:bg-[#947D56] transition border-2 rounded pl-1 pb-1 pr-6 pt-6 flex justify-start items-end h-full"}>
                        <div className={"text-white text-3xl tracking-tight font-bold"}>
                            Nach der Ausbildung
                        </div>
                    </div>
                </Link>
            </div> */}

            <h2 className={"mt-16 mb-3 text-4xl font-extrabold font-mono"}>Prüfungsvorbereitung</h2>

            <div className="grid grid-cols-4 gap-3">
                <div className={"rounded-lg flex items-end shadow bg-zinc-700 text-zinc-100 px-3 pb-3 pt-12 group"}>
                    <div className={"flex items-center justify-between w-full"}>
                        <h3 className={"text-2xl font-bold tracking-tight m-0"}>AP Teil 1</h3>
                        <ChevronRight className={"w-8 h-8 font-bold group-hover:translate-x-2 transition"}/>
                    </div>
                </div>
                <div className={"rounded-lg border-2 bg-zinc-700 text-zinc-100 p-6 pt-12"}>
                    <h3 className={"text-2xl font-bold tracking-tight"}>AP Teil 2</h3>
                </div>
                <div className={"rounded-lg border-2 bg-zinc-700 text-zinc-100 p-6 pt-12"}>
                    <h3 className={"text-2xl font-bold tracking-tight"}>Projektarbeit</h3>
                </div>
                <div className={"rounded-lg border-2 bg-zinc-700 text-zinc-100 p-6 pt-12"}>
                    <h3 className={"text-2xl font-bold tracking-tight"}>AP Teil 1</h3>
                </div>
            </div>

            <h2 className={"mt-16 mb-3 text-4xl font-extrabold font-mono"}>Neueste Blogartikel</h2>
            <BlogArticleGrid />
        </>
    );
}
