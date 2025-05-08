const BASE_URL = "https://api.tcgdex.net/v2/en";

export interface CardBrief {
  id: string;
  name: string;
  image?: string;
  imageUrl?: string;
}

export interface Card {
  id: string;
  name: string;
  image?: string;
  imageUrl?: string;
  category: string;
  illustrator?: string;
  localId?: string;
  rarity: string;
  set: {
    id: string;
    name: string;
    logo?: string;
    logoUrl?: string;
    symbol?: string;
    cardCount: {
      total: number;
      official: number;
    };
  };
  variants?: {
    firstEdition?: boolean;
    holo?: boolean;
    normal?: boolean;
    reverse?: boolean;
    wPromo?: boolean;
  };
  hp?: number;
  types?: string[];
  evolveFrom?: string;
  description?: string;
  stage?: string;
  attacks?: {
    cost: string[];
    name: string;
    effect: string;
    damage?: number;
  }[];
  weaknesses?: {
    type: string;
    value: string;
  }[];
  retreat?: number;
  regulationMark?: string;
  legal?: {
    standard: boolean;
    expanded: boolean;
  };
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

export const fetchSomeCards = async (
  page: number,
  itemsPerPage: number
): Promise<CardBrief[]> => {
  const response = await fetch(
    `${BASE_URL}/cards?pagination:page=${page}&pagination:itemsPerPage=${itemsPerPage}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const cards = await response.json();

  cards.forEach((card: CardBrief) => {
    if (card.image) {
      card.imageUrl = formatImageUrl(card.image);
    }
  });

  return cards;
};

export const searchCards = async (searchParams: Record<string, string>): Promise<CardBrief[]> => {
  const queryParams = new URLSearchParams();
  
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, value);
    }
  });

  const response = await fetch(`${BASE_URL}/cards?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const cards = await response.json();

  cards.forEach((card: CardBrief) => {
    if (card.image) {
      card.imageUrl = formatImageUrl(card.image);
    }
  });

  return cards;
};
