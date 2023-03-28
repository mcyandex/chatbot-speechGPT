import { matcher } from '../matcher';

export const PLAIN_LINK_REG = /((?:https?|chrome|edge):\/\/[^ ]+)/;

const renderer = (rawStr: string) => {
  const matchResult = matcher(rawStr, PLAIN_LINK_REG);
  if (!matchResult) {
    return rawStr;
  }

  return (
    <a className="link" target="_blank" href={matchResult[1]}>
      {matchResult[1]}
    </a>
  );
};

export default {
  name: 'plain link',
  regexp: PLAIN_LINK_REG,
  renderer,
};
