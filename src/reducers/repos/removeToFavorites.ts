export default function removeToFavorites(
  favorites: { [p: string]: number },
  action: { type: 'REMOVE_FROM_FAVORITES'; id: number }
) {
  const newState = { ...favorites };
  delete newState[String(action.id)];
  return newState;
}
