import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./form.stories"; // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary } = composeStories(stories);

test("renders primary button with default args", () => {
  const { container } = render(<Primary />);
  Primary.play({ canvasElement: container });
  const input = screen.getByRole('textbox') as HTMLInputElement;
  expect(input.value).toEqual('Hello world!');
});
