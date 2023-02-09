import { render ,screen} from "@testing-library/react"
import Navbar from "../navbar.component"
import React from "react"
describe('rendering navbar',()=>{
    test('check text',()=>{
        render(<Navbar />);
        expect(screen.getByText(`Khan Academy`)).toBeInTheDocument();
        expect(screen.getByText(`Donate`)).toBeInTheDocument();
        expect(screen.getByText(`Login`)).toBeInTheDocument();
        expect(screen.getByText(`Courses`)).toBeInTheDocument();
        expect(screen.getByText(`Signup`)).toBeInTheDocument();
        expect(screen.getByText(`Courses`)).toBeInTheDocument();
    })
    // test('check input',()=>{
    //     render(<Navbar/>);
    //     expect(screen.getByRole('input', )).toBe('test');
    // })
})

