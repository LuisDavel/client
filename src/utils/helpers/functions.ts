export const yearDog = (old_date: string) => {
  const now = new Date();
  const dog = new Date(old_date);
  const resultYear = (dog.getFullYear() - now.getFullYear()) * -1;
  if (resultYear == 0) {
    const resultMonth = dog.getMonth() + 1;
    return resultMonth == 1 ? resultMonth + ' mês' : resultMonth + ' mesês';
  }

  return resultYear == 1 ? resultYear + ' ano' : resultYear + ' anos';
};
