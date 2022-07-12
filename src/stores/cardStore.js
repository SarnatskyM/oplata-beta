import { writable } from "svelte/store";

export const cards = writable([]);

const CardFetch = async () => {
    const url = "http://127.0.0.1:5000/api/cards";
    const res = await fetch(url);
    const data = await res.json();
    const loadedCard = data.map(data => ({
		id: data.id,
		card_number: data.card_number,
		card_gg: data.card_gg,
        card_mm: data.card_mm,
        card_cvv: data.card_cvv
	}));
    cards.set(loadedCard);
}

CardFetch();