import Link from "next/link";
import {Input} from "@/components/ui/input";
import {ArrowRight, ChevronRight} from "lucide-react";
import { NavigationTile } from "@/components/ui/navigation-tile"
import { ImageTile } from "@/components/ui/image-tile";
import BlogArticleGrid from "@/components/BlogArticleGrid";
import { ActionTile } from "@/components/ui/action-tile"

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
            <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-3 lg:mx-0 lg:max-w-none lg:grid-cols-4 hyphens-auto break-words">
                <ImageTile 
                    title="Fachinformatiker"
                    href="/fachinformatiker"
                    imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <ImageTile 
                    title="IT-Systemelektroniker"
                    href="/berufe/it-systemelektroniker"
                    imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                />
                <ImageTile 
                    title="Kaufleute für IT-System-Management"
                    href="/berufe/kaufleute-it-system-management"
                    imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                />
                <ImageTile 
                    title="Kaufleute für Digitalisierungsmanagement"
                    href="/berufe/kaufleute-digitalisierungsmanagement"
                    imageUrl="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
                />
            </div>

            <h2 className={"mt-16 mb-3 text-4xl font-extrabold font-mono"}>Prüfungsvorbereitung</h2>

            <div className="grid grid-cols-4 gap-3">
                <ActionTile 
                    href="/pruefung/ap1" 
                    title="AP Teil 1"
                />
                <ActionTile 
                    href="/pruefung/ap2" 
                    title="AP Teil 2"
                />
                <ActionTile 
                    href="/pruefung/projektarbeit" 
                    title="Projektarbeit"
                />
                <ActionTile 
                    href="/pruefung/ap1-alt" 
                    title="AP Teil 1"
                />
            </div>

            <h2 className={"mt-16 mb-3 text-4xl font-extrabold font-mono"}>Neueste Blogartikel</h2>
            <BlogArticleGrid />
        </>
    );
}
