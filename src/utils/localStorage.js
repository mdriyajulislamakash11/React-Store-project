const getCoffeeCart = () => {
  const storeStringCart = localStorage.getItem("favorite");
  if (storeStringCart) {
    return JSON.parse(storeStringCart);
  }
  return [];
};

const addToLocalstorage = (coffee) => {
  const favorite = getCoffeeCart();

  const isExist = favorite.find((item) => item.id === coffee.id);

  if (isExist) return alert("item already exist");

  favorite.push(coffee);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  alert("successfully added");
};

const removeFavorite = (id) => {
  const remove = getCoffeeCart();

  const remaining = remove.filter((item) => item.id !== id);
  localStorage.setItem("favorite", JSON.stringify(remaining));
  alert("successfully deleted");
};
export { addToLocalstorage, getCoffeeCart, removeFavorite };
