import { news } from "@/data/mock";
import SectionTitle from "./SectionTitle";

function NewsCard({
  article,
  featured,
}: {
  article: (typeof news)[0];
  featured?: boolean;
}) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-bg-card transition-all hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20">
      {/* Image placeholder */}
      <div
        className={`flex items-center justify-center ${featured ? "h-56" : "h-32"}`}
        style={{
          background: `linear-gradient(135deg, hsl(${article.hue}, 35%, 18%), hsl(${article.hue}, 30%, 10%))`,
        }}
      >
        <svg
          width={featured ? 48 : 32}
          height={featured ? 48 : 32}
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        >
          <rect x="2" y="2" width="20" height="20" rx="2" />
          <circle cx="8" cy="8" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="absolute left-3 top-3 flex gap-1.5">
            {/* Positioned with parent relative */}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="mb-2 flex gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                tag === "Hot"
                  ? "bg-red/20 text-red"
                  : "bg-bg-accent/20 text-accent-light"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3
          className={`font-semibold leading-snug ${
            featured ? "text-lg mb-2" : "text-sm mb-1.5"
          }`}
        >
          {article.title}
        </h3>
        {featured && article.description && (
          <p className="mb-3 text-sm leading-relaxed text-text-secondary">
            {article.description}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-text-muted">
          {featured && (
            <span className="font-medium">by {article.author}</span>
          )}
          <span>{article.time}</span>
          <span className="ml-auto flex items-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
            {article.comments >= 1000
              ? `${(article.comments / 1000).toFixed(1)}k`
              : article.comments}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function NewsSection() {
  const featured = news.find((n) => n.featured);
  const rest = news.filter((n) => !n.featured);

  return (
    <section>
      <SectionTitle
        icon={
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6z" />
          </svg>
        }
      >
        Latest News
      </SectionTitle>

      {featured && <NewsCard article={featured} featured />}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
