import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatPrice(
  price: number | string,
  options: {
    currency?: 'USD' | 'EUR' | 'GBP' | 'BDT' | 'INR'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'USD', notation = 'compact' } = options

  let numericPrice: number;

  if (typeof price === 'string') {
    if (price.endsWith('T')) {
      numericPrice = parseFloat(price.slice(0, -1)) * 1e12;
    } else {
      numericPrice = parseFloat(price);
    }
  } else {
    numericPrice = price;
  }

  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
}

