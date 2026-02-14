export const useBottomMenu = () => {
  return useState<boolean>("has-bottom-fixed-menu", () => false);
};
