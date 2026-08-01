export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function filterByCategory(items, category) {
  if (!category || category === "all") return items;
  return items.filter((item) => item.category === category);
}
