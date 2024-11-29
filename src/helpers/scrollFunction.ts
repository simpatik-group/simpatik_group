interface IScrollMe {
  elem: HTMLElement | null;
  noSmooth?: boolean;
}
export const scrollMe = ({ elem, noSmooth }: IScrollMe) => {
  const header = document
    .querySelector('#header')
    ?.getBoundingClientRect().bottom;
  if (!elem) return;
  window.scroll({
    top: elem.offsetTop - (header || 0),
    behavior: noSmooth ? 'auto' : 'smooth',
  });
};
