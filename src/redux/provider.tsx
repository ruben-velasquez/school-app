"use client";

import DataInitializer from "./data-initializer";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DataInitializer>{children}</DataInitializer>
    </Provider>
  );
}
