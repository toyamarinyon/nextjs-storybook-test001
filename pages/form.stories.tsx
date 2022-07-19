import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Form } from "./form";

const meta: ComponentMeta<typeof Form> = {
  component: Form,
};

export default meta;

type Story = ComponentStoryObj<typeof Form>;

export const Primary: Story = {
  play: async (context) => {
    const { getByRole, getByText } = within(context.canvasElement);
    const textbox = getByRole("textbox");
    await userEvent.type(textbox, "user@test.mstp.com");
    const button = getByRole("button");
    await userEvent.click(button);
    await waitFor(
      async () => await expect(getByText("Submit!!!")).toBeInTheDocument()
    );
    // await userEvent.type(textbox, "user@test.mstp.com!");
  },
};
