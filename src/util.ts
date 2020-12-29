export const changePageTitle = (title: string) => {
  document.title = 'José Sánchez Aranda | ' + title;
};

export const hideMenu = () => {
  document.documentElement.style.setProperty('--menu-width-desktop', '0px');
  document.documentElement.style.setProperty('--menu-width-mobile', '0px');
  document.documentElement.style.setProperty('--menu-padding', '0px');
};

export const showMenu = () => {
  document.documentElement.style.setProperty('--menu-width-desktop', '300px');
  document.documentElement.style.setProperty('--menu-width-mobile', '60px');
  document.documentElement.style.setProperty('--menu-padding', '8px');
};