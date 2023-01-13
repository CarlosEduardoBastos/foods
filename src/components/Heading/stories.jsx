import { Heading } from '.';
export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Heading',
    as: 'h2',
    size: 'big',
  },
};

export const Template = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
