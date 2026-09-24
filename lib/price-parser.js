const SYMBOL_TO_CODE = {
  "$": "USD",
  "€": "EUR",
  "£": "GBP",
  "¥": "JPY",
  "₹": "INR",
  "₩": "KRW",
  "₽": "RUB",
  "R$": "BRL",
  "CHF": "CHF",
  "kr": "SEK"
};

const PRICE_PATTERN =
  /(?:([A-Z]{2,3}|R\$|CHF|kr)\s?)?([$€£¥₹₩₽])?\s?(\d{1,3}(?:[.,\s]\d{3})*(?:[.,]\d{1,2})?|\d+(?:[.,]\d{1,2})?)\s?(kr|CHF|[A-Z]{2,3})?/;


function parsePriceFromText(text) {
  if (!text || typeof text !== "string") return null;

  const cleaned = text.replace(/\s+/g, " ").trim();
  const match = cleaned.match(PRICE_PATTERN);
  if (!match) return null;

  const [raw, prefixCode, symbol, numberPart, suffixCode] = match;
  if (!numberPart) return null;

  const amount = normalizeNumber(numberPart);
  if (amount === null || Number.isNaN(amount)) return null;

}