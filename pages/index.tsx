import tw from 'tailwind-styled-components';
const Div = tw.div`
  flex bg-red-500
`;

export default function Home() {
  return <Div>스토리북</Div>;
}
