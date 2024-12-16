import {Input} from "@/components/ui/input";
import { NavigationTile } from "@/components/ui/navigation-tile"
import { ImageTile } from "@/components/ui/image-tile";
import BlogArticleGrid from "@/components/BlogArticleGrid";
import { ActionTile } from "@/components/ui/action-tile"
import { Heading } from "@/components/ui/typography"
import { getLatestBlogArticles } from "@/lib/api";

export default async function Home() {
    const latestPosts = await getLatestBlogArticles(3);

    return (
        <>
            <div className={"bg-white mt-4 lg:mt-8 rounded-lg border-2 overflow-hidden"}>
                <div className="p-8 lg:p-16">
                    <Heading level={1} variant="hero">
                        Dein Informationsportal für die IT-Ausbildung.
                    </Heading>
                    <p className="lg:px-32 text-base lg:text-xl font-normal leading-7 text-center mt-3 break-words hyphens-auto">
                        Willkommen bei Ausbildung in der IT, deine Anlaufstelle für die duale Ausbildung der IT-Berufe in Deutschland. 
                        Egal ob mittendrin, weit in der Zukunft geplant oder längst abgeschlossen: hier findest du, was du brauchst.
                    </p>
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


            <Heading variant="section" className="mt-16 mb-3">IT-Berufe</Heading>
            
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 hyphens-auto break-words">
                <ImageTile
                className="aspect-square"
                    title="Fachinformatiker"
                    href="/fachinformatiker"
                    imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <ImageTile 
                    title="IT-Systemelektroniker"
                    href="/it-systemelektroniker"
                    imageUrl="https://images.unsplash.com/photo-1642980701123-09a5a63ce1b9?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
                <ImageTile 
                    title="Kaufleute für IT-System-Management"
                    href="/kaufleute-fuer-it-system-management"
                    imageUrl="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
                <ImageTile 
                    title="Kaufleute für Digitalisierungsmanagement"
                    href="/kaufleute-fuer-digitalisierungsmanagement"
                    imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
            </div>

            <Heading variant="section" className="mt-16 mb-3">Prüfungsvorbereitung</Heading>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
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
                    title="Termine"
                />
            </div>

            <Heading variant="section" className="mt-16 mb-3">Neueste Blogartikel</Heading>
            <BlogArticleGrid articles={latestPosts} />
        </>
    );
}
