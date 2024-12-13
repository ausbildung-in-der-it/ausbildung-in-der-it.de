import {ChevronRight} from "lucide-react";

const articles = [
    {
        title: "Warum du eine Ausbildung zum Fachinformatiker machen solltest"
    },
    {
        title: "Die Lernfelder für den Fachinformatiker erklärt"
    },
    {
        title: "Ein weiterer Blogartikel für dich zum Lesen"
    }
];

export default function BlogArticleGrid() {
    return (
        <div className={"grid grid-cols-3 gap-3"}>
            {articles.map(article => (
                <article className={"bg-white rounded border p-6"} key={article.title}>
                    <h4 className={"text-lg font-semibold tracking-tight"}>{article.title}</h4>
                    <div className={"text-md mt-1 text-gray-400 tracking-tight font-semibold"}>12.12.2024, Noel Lang</div>
                    <p className={"mt-3 text-gray-700"}>Das hier ist eine Beschreibung des Blogartikels. Hier solle stehen, was dich in dem folgenden Text erwarten wird, damit du entscheiden kannst, ob du ihn liest oder nicht.</p>
                    <div className={"flex justify-start items-center mt-3 gap-3"}>
                        <span className={"font-bold uppercase tracking-tight text-sm"}>Weiterlesen</span>
                        <ChevronRight className={"w-4 h-4"} />
                    </div>
                </article>
            ))}
        </div>
    )
}