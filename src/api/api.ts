import axios, { AxiosResponse } from "axios";
import MockAdapter from "axios-mock-adapter";
import { mock_Data } from "../config/config";
import axiosinstance from "../instance/axiosinstance";

export const fetchApiData = async () => {
  let response: any = null;
  let mock_status: boolean = mock_Data;

  try {
    response = {};
    var mock = new MockAdapter(axios);
    if (!mock_status) {
      const response: AxiosResponse<any> = await axiosinstance.get(
        "/7543d76c-2483-4d12-a135-43364d120ffa"
      );
     
      return response.data;
    } else {
      mock.onGet("/class").reply(200, {
        class: "11",
        subject: "maths",
        chapters: [
          {
            annotation: "Chapter1",
            name: "Set",
            points_to_earn: 1000,
            id: "klmansfkj",
            topics: [
              {
                annotation: "",
                name: "MOCK_DATA",
                points_to_earn: 100,
                id: "xyz",
              },
              {
                annotation: "",
                name: "Application of Set",

                points_to_earn: 150,
                id: "abc",
              },
            ],
          },
          {
            annotation: "Chapter2",
            name: "Relations and functions",
            points_to_earn: 1000,
            id: "klmansfkj",
            topics: [
              {
                annotation: "",
                name: "Introduction to Relations and functions",
                points_to_earn: 100,
                id: "xyz",
              },
              {
                annotation: "",
                name: "Application of Relations and functions",

                points_to_earn: 150,
                id: "abc",
              },
            ],
          },
          {
            annotation: "Chapter3",
            name: "Trigonometric functions",
            points_to_earn: 1000,
            id: "klmansfkj",
            topics: [
              {
                annotation: "",
                name: "Introduction to Trigonometric functions",
                points_to_earn: 100,
                id: "xyz",
              },
              {
                annotation: "",
                name: "Application of Trigonometric functions",

                points_to_earn: 150,
                id: "abc",
              },
            ],
          },
          {
            annotation: "Chapter4",
            name: "Complex numbers",
            points_to_earn: 1000,
            id: "klmansfkj",
            topics: [
              {
                annotation: "",
                name: "Introduction to Complex numbers",
                points_to_earn: 100,
                id: "xyz",
              },
              {
                annotation: "",
                name: "Application of Complex numbers",

                points_to_earn: 150,
                id: "abc",
              },
            ],
          },
        ],
      });
      const response: AxiosResponse<any> = await axios.get("/class");
      
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
  }
  return response;
};

export const ProgressSideBarApi = async () => {
  let response: any = null;
  let mock_status: boolean = mock_Data;

  try {
    response = {};
    var mock = new MockAdapter(axios);
    if (!mock_status) {
      const response: AxiosResponse<any> = await axiosinstance.get(
        "/45faa5a6-cdd4-4404-a9db-081b626d70e3"
      );
      
      return response.data;
    } else {
      mock.onGet("/chapter").reply(200, {
        chapter: [
          { ChapterName: "Mock_set", ChapterProgress: 0 },

          { ChapterName: "Relations and functions", ChapterProgress: 0 },
          { ChapterName: "Trigonometric functions", ChapterProgress: 0 },
          { ChapterName: "Complex numbers", ChapterProgress: 0 },
          { ChapterName: "Linear inequalities", ChapterProgress: 0 },
          { ChapterName: "Permutations and combinations", ChapterProgress: 0 },
        ],
      });
      const response: AxiosResponse<any> = await axios.get("/chapter");
      
      return response.data;
    }
  } catch (error) {
    
  }
  return response;
};
