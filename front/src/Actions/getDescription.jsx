const getDescription = (ingredient) => {
  console.log(ingredient);
  const info = `${ingredient.info}`;
  const allerg = ingredient.allerg.lenght > 0 ? `Allergènes : ${ingredient.allerg}` : '';
  const portion = ingredient.portion ? `Giluna recommande une portion de ${ingredient.portion}` : '';

  if (allerg.length === 0) {
    if (portion.length === 0) {
      return `${info}`;
    }
    return `${info}
${portion}`;
  }
  if (portion.length === 0) {
    return `${info}
${allerg}`;
  }
  return `${info}
${allerg}
${portion}`;
};

export default getDescription;
