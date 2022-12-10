
import { Button } from "../components/Button";


export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "One or more button variant combinations",
      options: ["primary", "secondary", "success", "danger", "warning", "info", "dark", "light", "link"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
} ;

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "lg",
};