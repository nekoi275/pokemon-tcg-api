const BASE_URL = "https://api.tcgdex.net/v2/en";

export interface Card {
  id: string;
  name: string;
  image?: string;
  imageUrl?: string;
  description: string;
}

function formatImageUrl(baseUrl: string): string {
  return `${baseUrl}/high.webp`;
}

const cardCache = new Map<string, Card>();

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
