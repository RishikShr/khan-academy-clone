import { render } from "@testing-library/react"
import Navbar from "../navbar.component"
import React from "react"
describe('rendering navbar',()=>{
    test('check text',()=>{
        render(<Navbar/>)
    })
})