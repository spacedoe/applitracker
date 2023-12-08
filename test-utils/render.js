import { render as testingLibraryRender } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";

import { theme } from "../theme";

// Object.defineProperty(window, "matchMedia", {
//   writable: true,
//   value: jest.fn().mockImplementation((query) => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // deprecated
//     removeListener: jest.fn(), // deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

export function render(ui) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
}
