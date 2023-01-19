import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button , { ButtonTypes } from '.';

export default {
  title: "Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button text={args.text} type={args.type} />;
}

export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Text',
  type: ButtonTypes.PRIMARY
}