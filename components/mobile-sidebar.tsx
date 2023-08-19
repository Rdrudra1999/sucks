'use client';
import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useState , useEffect } from "react";


const MobileSidebar = () => {
const [mounted, setMounted] = React.useState(false);
React.useEffect(() => setMounted(true), []);
if (!mounted) return null;
  return (
    <Sheet>
      <SheetTrigger>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
           <Sidebar /> 
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
