import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import axiosinstance from "../../instance/axiosinstance";
import { fetchApiData, ProgressSideBarApi } from "../api";

const fetchmock = {
	"class" : "11",
	"subject" : "maths",
	"chapters" : [
		{
			"annotation" : "Chapter1",
			"name" : "Set",
			"points_to_earn" : 1000,
			"id" : "klmansfkj",
			"topics" : [{
				"annotation" : "",
				"name" : "Introduction to Set",
				"points_to_earn" : 100,
				"id" : "xyz"
			},{
				"annotation" : "",
				"name" : "Application of Set",
				
				"points_to_earn" : 150,
				"id" : "abc"
			}]
			
		},
		{
			"annotation" : "Chapter2",
			"name" : "Relations and functions",
			"points_to_earn" : 1000,
			"id" : "klmansfkj",
			"topics" : [{
				"annotation" : "",
				"name" : "Introduction to Relations and functions",
				"points_to_earn" : 100,
				"id" : "xyz"
			},{
				"annotation" : "",
				"name" : "Application of Relations and functions",
				
				"points_to_earn" : 150,
				"id" : "abc"
			}]
			
		},
		{
			"annotation" : "Chapter3",
			"name" : "Trigonometric functions",
			"points_to_earn" : 1000,
			"id" : "klmansfkj",
			"topics" : [{
				"annotation" : "",
				"name" : "Introduction to Trigonometric functions",
				"points_to_earn" : 100,
				"id" : "xyz"
			},{
				"annotation" : "",
				"name" : "Application of Trigonometric functions",
				
				"points_to_earn" : 150,
				"id" : "abc"
			}]
			
		},
		{
			"annotation" : "Chapter4",
			"name" : "Complex numbers",
			"points_to_earn" : 1000,
			"id" : "klmansfkj",
			"topics" : [{
				"annotation" : "",
				"name" : "Introduction to Complex numbers",
				"points_to_earn" : 100,
				"id" : "xyz"
			},{
				"annotation" : "",
				"name" : "Application of Complex numbers",
				
				"points_to_earn" : 150,
				"id" : "abc"
			}]
			
		}
	]
}

const progress_mock = {chapter: [
    { ChapterName: "Mock_set", ChapterProgress: 0 },

    { ChapterName: "Relations and functions", ChapterProgress: 0 },
    { ChapterName: "Trigonometric functions", ChapterProgress: 0 },
    { ChapterName: "Complex numbers", ChapterProgress: 0 },
    { ChapterName: "Linear inequalities", ChapterProgress: 0 },
    { ChapterName: "Permutations and combinations", ChapterProgress: 0 },
  ],}

describe('fetchApiData',()=>{
    let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });


  it('should return the response data from the API when mock_Data is false', async () => {
    
    const expectedData = fetchmock;
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet(`${axiosinstance}/7543d76c-2483-4d12-a135-43364d120ffa`).reply(200, expectedData);
    
    
    const actualData = await fetchApiData();
    
    
    expect(actualData).toEqual(expectedData);
  });

  it('should return mock data when mock_Data is true',async ()=>{
    const expectedData = fetchmock;
    const mockAxios = new MockAdapter(axios);
    mockAxios.onGet('/class').reply(200, expectedData);

    
    const actualData = await fetchApiData();

  
    expect(actualData).toEqual(expectedData);
  })
})

describe('ProgressSideBarApi', () => {
    it('should return the response data from the API when mock_Data is false', async () => {
      
      const expectedData = progress_mock;
      const mockAxios = new MockAdapter(axios);
      mockAxios.onGet('/45faa5a6-cdd4-4404-a9db-081b626d70e3').reply(200, expectedData);
      
      // Act
      const actualData = await ProgressSideBarApi();
      
      // Assert
      expect(actualData).toEqual(expectedData);
    });
  
    it('should return mock data when mock_Data is true', async () => {
     
      const expectedData = progress_mock
      const mockAxios = new MockAdapter(axios);
      mockAxios.onGet('/chapter').reply(200, expectedData);
  
      // Act
      const actualData = await ProgressSideBarApi();
  
      // Assert
      expect(actualData).toEqual(expectedData);
    });
  });
  
  
  
  
  