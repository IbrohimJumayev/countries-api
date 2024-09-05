export const saveToLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLocalStorage = (name: string) => {
  const country = localStorage.getItem(name);
  return country ? JSON.parse(country) : null;
};
