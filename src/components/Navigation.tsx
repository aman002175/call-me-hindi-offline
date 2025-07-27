import { Home, MessageSquare, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", label: "होम", icon: Home },
    { id: "messages", label: "संदेश", icon: MessageSquare },
    { id: "notifications", label: "सूचनाएं", icon: Bell },
    { id: "settings", label: "सेटिंग्स", icon: Settings }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-strong z-50">
      <div className="grid grid-cols-4 gap-1 p-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant={currentView === item.id ? "default" : "ghost"}
            className={`flex flex-col items-center gap-1 h-16 ${
              currentView === item.id 
                ? "bg-gradient-primary text-primary-foreground shadow-soft" 
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => onViewChange(item.id)}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;