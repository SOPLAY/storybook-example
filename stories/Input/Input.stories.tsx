import { ComponentMeta, ComponentStory } from '@storybook/react';
import tw from 'tailwind-styled-components';

const Input = tw.input`
text-red-500
`;
export default {
  title: 'Example/Button',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
