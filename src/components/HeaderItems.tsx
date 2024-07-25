interface Props {
  props: string;
}

export const HeaderItems = ({ props }: Props) => {
  return (
    <li className="text-white text-[1.14vw] hover:text-gray-700 cursor-pointer bg-gray-600 rounded-full px-[0.7vw] py-[0.5vh]">
      {props}
    </li>
  );
};
