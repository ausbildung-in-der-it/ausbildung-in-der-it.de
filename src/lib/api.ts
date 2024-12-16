// API Konfiguration
const API_BASE_URL = 'http://localhost:8000/api';
const API_CREDENTIALS = btoa("api@ausbildung-in-der-it.de:test1234");

// Types für die API-Responses
export interface BlogArticle {
    id: string;
    title: string;
    url: string;
    date: string;
    author: string;
    slug: string;
    content: {
        title: string;
        date: string;
        author: string;
        blocks: string;
        uuid: string;
    };
}

export interface PageData {
    title: string;
    slug: string;
    breadcrumb: string[];
    content: {
        title: string;
        text: string;
        blocks: string;
        uuid: string;
        layout: "article" | "overview";
    };
    children: string[];
    layout?: string;
}

// API Helper Funktion
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
    try {
        const res = await fetch(`${API_BASE_URL}${endpoint}`, {
            headers: {
                "Authorization": `Basic ${API_CREDENTIALS}`,
                ...options?.headers,
            },
            ...options,
        });

        if (!res.ok) {
            console.error(`API Error: ${res.status} ${res.statusText}`);
            return null;
        }

        return res.json();
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

// API Funktionen
export async function getPageData(slugParts: string[]): Promise<PageData | null> {
    const path = slugParts.join('/');
    return fetchApi<PageData>(`/page?path=${path}`, {
        next: { revalidate: 60 }
    });
}

export async function getAllPages(): Promise<string[]> {
    const pages = await fetchApi<string[]>('/all-pages');
    return pages || [];
}

export async function getLatestBlogArticles(limit: number = 3): Promise<BlogArticle[]> {
    const articles = await fetchApi<BlogArticle[]>('/blog-articles');
    if (!articles) return [];
    
    // Sortiere nach Datum und nimm die neuesten n Artikel
    return articles
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
} 