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




// describe("fetchPatientSets function", () => {
//   test("should dispatch setSubject action with API response", async () => {
//     const mockResult = { data: { subject: "test subject" } };
//     const mockDispatch = jest.fn();
//     jest.spyOn(global, "fetch").mockResolvedValue({
//       json: jest.fn().mockResolvedValue(mockResult),
//     });

//     await fetchPatientSets()(mockDispatch);

//     expect(mockDispatch).toHaveBeenCalledWith(setSubject(mockResult.data.subject));
//     expect(global.fetch).toHaveBeenCalledWith("API_ENDPOINT_URL");
//   });

//   test("should log an error message if API call fails", async () => {
//     const mockError = new Error("API error");
//     const mockDispatch = jest.fn();
//     jest.spyOn(global, "fetch").mockRejectedValue(mockError);
//     jest.spyOn(console, "error").mockImplementation(() => {});

//     await fetchPatientSets()(mockDispatch);

//     expect(mockDispatch).not.toHaveBeenCalled();
//     expect(console.error).toHaveBeenCalledWith("Error ", mockError);
//   });
// });




