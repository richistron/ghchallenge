export default function addToFavorites(
  favorites: { [p: string]: number },
  action: { type: 'ADD_TO_FAVORITES'; id: number }
) {
  const newState = { ...favorites };
  newState[String(action.id)] = action.id;
  return newState;
}
