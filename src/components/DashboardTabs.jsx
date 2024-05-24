import React, { useState } from "react";

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("crops");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 font-semibold rounded ${
            activeTab === "crops"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("crops")}
        >
          Crops Dashboard
        </button>
        <button
          className={`px-4 py-2 font-semibold rounded ${
            activeTab === "livestock"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabClick("livestock")}
        >
          Livestock Dashboard
        </button>
      </div>
      <div>
        {activeTab === "crops" && (
          <iframe
            title="Crops Dashboard"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzU5ZjMyMDYtOTA2YS00MTI1LTliOGEtN2EyYmVjMzY3ZDZjIiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {activeTab === "Cooperatives" && (
          <iframe
            title="Cooperatives Dashboard"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiNzAxNzEzYjYtYTc0NS00M2MzLWFiN2QtYWM0NjFlNTQ3ZTg0IiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        {activeTab === "livestock" && (
          <iframe
            title="Livestock Dashboard"
            width="100%"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzgzNzA5YzAtMDYyYy00YmY1LTgwNWEtMjJiNTVmMmVmZDlkIiwidCI6IjMwY2JiODY1LTg2MDUtNGQ4NS1iZTA1LWU1ZjM0MjcyMTM5YyJ9"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default DashboardTabs;
