const BASE_URL = "https://api.tcgdex.net/v2/en";

export interface CardBrief {
  id: string;
  name: string;
  image?: string;
  imageUrl?: string;
}

export interface SetBrief {
  id: string;
  name: string;
  logo?: string;
  logoUrl?: string;
  cardCount: {
    total: number;
    official: number;
  }
}

export interface Card extends CardBrief {
  category: string;
  rarity: string;
  set: SetBrief;
}

function formatImageUrl(baseUrl: string): string {
  return `${baseUrl}/high.webp`;
}

const cardCache = new Map<string, Card>();
const cardsCache = new Array<CardBrief>();

export const fetchCard = async (id: string): Promise<Card> => {
  if (cardCache.has(id)) {
    return cardCache.get(id)!;
  }
  const response = await fetch(`${BASE_URL}/cards/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const card = await response.json();
  if (card.image) {
    card.imageUrl = formatImageUrl(card.image);
  }
  cardCache.set(id, card);

  return card;
};

export const fetchAllCards = async (): Promise<CardBrief[]> => {
  if (cardsCache.length > 0) {
    return cardsCache;
  }
  
  const response = await fetch(`${BASE_URL}/cards`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const cards = await response.json();
  
  cards.forEach((card: CardBrief) => {
    if (card.image) {
      card.imageUrl = formatImageUrl(card.image);
    }
  });
  
  cardsCache.length = 0;
  cardsCache.push(...cards);

  return cards;
};
