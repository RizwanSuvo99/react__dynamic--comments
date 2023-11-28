export const sessionStorageData = () => {
  let data = sessionStorage.getItem("inputs");
  return JSON.parse(data) || [];
};
