"use client"
import { createContext, useContext, useState } from "react";
import { tour_packages } from "../constants/tours_package";
const TourContext = createContext();

export function UseTourState() {
  return useContext(TourContext);
}

export function TourContextProvider({ children }) {
  const [packages, setPackages] = useState(tour_packages);
  const [activeTab, setActiveTab] = useState("all");
  const categoryChangeHandler = (value = "all") => {
    const tabValue = value.toLowerCase();
    if (tabValue === "all") {
      setPackages(tour_packages);
      setActiveTab("all");
    } else {
      const filterPackages = tour_packages.filter(
        (item) => item.category === tabValue
      );
      if (filterPackages.length > 0) {
        setPackages(filterPackages);
        setActiveTab(tabValue);
      } else {
        setPackages(tour_packages);
        setActiveTab("all");
      }
    }
  };

  const contextObj = {
    categoryChangeHandler,
    packages,
    activeTab,
  };

  return (
    <TourContext.Provider value={contextObj}>{children}</TourContext.Provider>
  );
}
