import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import MessageLog from "@/components/MessageLog";
import Settings from "@/components/Settings";
import NotificationCenter from "@/components/NotificationCenter";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "messages":
        return <MessageLog />;
      case "notifications":
        return <NotificationCenter />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Hero Background for Dashboard */}
      {currentView === "dashboard" && (
        <div 
          className="fixed inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {/* Main Content */}
      <div className="relative z-10 pb-20">
        {renderCurrentView()}
      </div>
      
      {/* Navigation */}
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
};

export default Index;
