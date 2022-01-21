/**
 * @jest-environment jsdom
 */
 import React from "react";
 import { render } from "@testing-library/react";
 import "@testing-library/jest-dom/extend-expect";
import Searchbar from "../../src/components/Searchbar";
 
 describe("Renders searchbar", () => {
   it("renders the the searchbar components corectly", () => {
     render(
         <Searchbar/>
     );
   });
 });
 export {};
 