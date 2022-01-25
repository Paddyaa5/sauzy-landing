import React from "react";
import { Route, Routes } from "react-router-dom";
//page components
import Landing from "./LandingPage";
import Cod from "./pages/Cod";
import Butter from "./pages/Butter";
import Bean from "./pages/Been";
import Beef from "./pages/Beef";
import Gun from "./pages/Gun";
import Persian from "./pages/Persian";
import Steak from "./pages/Steak";
import Tomato from "./pages/Tomato";

export default function LandingPage() {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/codharissa" element={<Cod />} />
            <Route exact path="/butterchicken" element={<Butter />} />
            <Route exact path="/steakpepper" element={<Steak />} />
            <Route exact path="/fierytomato" element={<Tomato />} />
            <Route exact path="/persiancurry" element={<Persian />} />
            <Route exact path="/beefystroganoff" element={<Beef />} />
            <Route exact path="/beanychilli" element={<Bean />} />
            <Route exact path="/gunpowderlamb" element={<Gun />} />
        </Routes>
    );
}
