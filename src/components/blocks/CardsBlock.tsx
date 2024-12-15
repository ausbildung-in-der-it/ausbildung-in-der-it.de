import { ActionTile } from "@/components/ui/action-tile";

interface Card {
  title: string;
  url: string;
}

interface CardsBlockContent {
  cards: Card[];
}

interface CardsBlockProps {
  block: {
    content: CardsBlockContent;
  };
}

export default function CardsBlock({ block }: CardsBlockProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 not-prose">
      {block.content.cards.map((card, index) => (
        <ActionTile
          key={`${card.url}-${index}`}
          href={card.url}
          title={card.title}
        />
      ))}
    </div>
  );
} 