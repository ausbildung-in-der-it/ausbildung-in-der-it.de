import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogArticle } from "@/lib/api";

interface BlogArticleGridProps {
    articles: BlogArticle[];
}

export default function BlogArticleGrid({ articles }: BlogArticleGridProps) {
    return (
        <div className={"grid grid-cols-1 lg:grid-cols-3 gap-3"}>
            {articles.map(article => (
                <Link href={`/blog/${article.slug}`} key={article.id}>
                    <article className={"bg-white rounded border p-6 hover:shadow-md transition-shadow"}>
                        <h4 className={"text-lg font-semibold tracking-tight"}>{article.title}</h4>
                        <div className={"text-md mt-1 text-gray-400 tracking-tight font-semibold"}>
                            {new Date(article.date).toLocaleDateString('de-DE')}, {article.author}
                        </div>
                        <div className={"flex justify-start items-center mt-3 gap-3"}>
                            <span className={"font-bold uppercase tracking-tight text-sm"}>Weiterlesen</span>
                            <ChevronRight className={"w-4 h-4"} />
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}