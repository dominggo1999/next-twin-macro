import tw, { styled } from 'twin.macro';


export const Container = styled.div`
  ${tw`
    bg-primary
    flex
    justify-center
    items-center
    w-full
    h-screen
    text-white
    flex-col
  `}
`;

export const Text = styled.div`
  ${tw`
    text-7xl
    mb-5
  `}
`;