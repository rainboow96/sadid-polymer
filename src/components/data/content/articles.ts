
import { hydrofixGuideContent } from "../content/hydrofix-guide";
import { layflatPunchingGuideContent } from "../content/layflat-punching";
import { seedlingBagGuideContent } from "../content/seedling-bag-guide";
import { layflatLdpeVsPvcContent } from "../content/layflat-ldpe-vs-pvc";

export interface ArticlePoint {
    title: string;
    description: string;
}

export interface ArticleSection {
    id: string;
    title: string;
    description?: string;
    paragraphs?: string[];
    points?: ArticlePoint[];
    callout?: {
        type?: "tip" | "info" | "warning";
        title: string;
        text: string;
    };
}

export interface ComparisonRow {
    feature: string;
    ldpe: string;
    hdpe: string;
    pvc: string;
}

export interface ComparisonTable {
    headers: {
        feature: string;
        ldpe: string;
        hdpe: string;
        pvc: string;
    };
    rows: ComparisonRow[];
}


export interface ArticleContent {
    slug: string;
    title: string;
    subtitle: string;
    image: string; 
    category?: string;
    readingTime: string;
    publishedAt: string;
    heroExcerpt: string;
    introParagraphs: string[];
    sections: ArticleSection[];
    comparisonTable?: ComparisonTable; 
    conclusion: {
        title: string;
        paragraphs: string[];
    };
}

export const articles: ArticleContent[] = [
    hydrofixGuideContent,
    layflatPunchingGuideContent,
    seedlingBagGuideContent,
    layflatLdpeVsPvcContent,
];

export function getArticleBySlug(slug: string): ArticleContent | undefined {
    return articles.find((article) => article.slug === slug);
}
