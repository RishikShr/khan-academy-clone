import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./Redux/store";
import axiosInstance from './instance/axiosinstance'

test("renders learn react link", () => {
  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper).toBeDefined();
});

import MockAdapter from "axios-mock-adapter";
import { cleanup } from "@testing-library/react";

const mock = new MockAdapter(axiosInstance, { onNoMatch: "throwException" });

beforeAll(() => {
  mock.reset();
});

afterEach(cleanup);
