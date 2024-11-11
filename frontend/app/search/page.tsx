"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "@/store/userSlice";
import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  const [costOfLiving, setCostOfLiving] = useState("");

  const handleSearch = () => {
    console.log(
      "Searching for colleges in:",
      "with cost of living:",
      costOfLiving
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Search Colleges</h1>
      <div className="bg-white rounded shadow-md p-8 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Location</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter location (e.g., city, state)"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Cost of Living</label>
          <input
            type="text"
            value={costOfLiving}
            onChange={(e) => setCostOfLiving(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter estimated cost of living"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Search Colleges
        </button>
      </div>
    </div>
  );
};

export default Search;
