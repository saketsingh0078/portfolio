interface Props {
  props: string;
}

export const HeaderItems = ({ props }: Props) => {
  return <li>{props}</li>;
};
