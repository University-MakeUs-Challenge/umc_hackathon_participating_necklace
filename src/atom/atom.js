import { atom } from 'recoil';

export const name = atom({
  key: 'name', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const nickname = atom({
  key: 'nickname', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
export const part = atom({
  key: 'part', // unique ID (with respect to other atoms/selectors)
  default: 'Node.JS Developer', // default value (aka initial value)
});
export const univ = atom({
  key: 'univ', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
