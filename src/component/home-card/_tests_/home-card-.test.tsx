import { render,screen } from "@testing-library/react";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { Provider } from "react-redux"
import { store } from "../../../Redux/store";
import HomeCard from "../home-card.component";

describe('rendering navbar',()=>{
  test('check text',()=>{
      render(<Provider store={store}>
        <HomeCard />
        </Provider>);
        expect(screen.getByText('maths')).toBeInTheDocument();
        screen.debug()
  })



  // test('check input',()=>{
  //     render(<Navbar/>);
  //     expect(screen.getByRole('input', )).toBe('test');
  // })
})
// const ReduxWrapper: JSXElementConstructor<any> = (children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined)=> (
//   <Provider store={store}>
//     {children}
//   </Provider>
// );

// it("render a div with text 'project name'", () => {
//   const { container, getByText } = render(
//     <HomeCard />,
//     { wrapper: ReduxWrapper },
//   );
//   expect(getByText("Class")).toBeInTheDocument()
// });
