import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Bell, 
  BellRing, 
  Volume2, 
  Vibrate, 
  Clock, 
  Check, 
  X,
  Settings as SettingsIcon,
  Phone,
  MessageSquare,
  AlertTriangle
} from "lucide-react";
import { useState } from "react";

const NotificationCenter = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [showPreview, setShowPreview] = useState(true);

  const notifications = [
    {
      id: 1,
      type: "call",
      title: "नया कॉल संदेश",
      message: "राहुल शर्मा से आपातकालीन बैठक के बारे में",
      time: "अभी",
      priority: "high",
      isRead: false,
      actions: ["call", "dismiss"]
    },
    {
      id: 2,
      type: "reminder",
      title: "रिमाइंडर",
      message: "प्रिया गुप्ता को डॉक्टर अपॉइंटमेंट के बारे में वापस कॉल करें",
      time: "10 मिनट पहले",
      priority: "medium",
      isRead: false,
      actions: ["call", "snooze", "dismiss"]
    },
    {
      id: 3,
      type: "system",
      title: "असिस्टेंट स्टेटस",
      message: "आपका कॉल असिस्टेंट सफलतापूर्वक सक्रिय है",
      time: "1 घंटा पहले",
      priority: "low",
      isRead: true,
      actions: ["dismiss"]
    },
    {
      id: 4,
      type: "call",
      title: "मिस्ड कॉल अलर्ट",
      message: "अमित कुमार से 2 कॉल्स मिस हुईं",
      time: "2 घंटे पहले",
      priority: "medium",
      isRead: true,
      actions: ["call", "dismiss"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "call": return <Phone className="w-4 h-4" />;
      case "reminder": return <Clock className="w-4 h-4" />;
      case "system": return <SettingsIcon className="w-4 h-4" />;
      default: return <Bell className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "call": return "text-primary";
      case "reminder": return "text-warning";
      case "system": return "text-muted-foreground";
      default: return "text-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen bg-background p-4 space-y-6 pb-20">
      {/* Header */}
      <div className="text-center space-y-2 py-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <Bell className="w-6 h-6 text-primary" />
          सूचनाएं
          {unreadCount > 0 && (
            <Badge variant="destructive" className="ml-2">
              {unreadCount}
            </Badge>
          )}
        </h1>
        <p className="text-muted-foreground">अलर्ट और रिमाइंडर</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          variant="outline" 
          className="h-12 border-primary/20 hover:bg-primary/5"
          onClick={() => {}}
        >
          <Check className="w-4 h-4 mr-2" />
          सभी पढ़ा गया मार्क करें
        </Button>
        <Button 
          variant="outline" 
          className="h-12 border-destructive/20 hover:bg-destructive/5"
          onClick={() => {}}
        >
          <X className="w-4 h-4 mr-2" />
          सभी साफ़ करें
        </Button>
      </div>

      {/* Notification Settings */}
      <Card className="border border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BellRing className="w-5 h-5 text-primary" />
            सूचना सेटिंग्स
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">आवाज़ सूचना</Label>
              <p className="text-xs text-muted-foreground">नए संदेशों के लिए ध्वनि बजाएं</p>
            </div>
            <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">वाइब्रेशन</Label>
              <p className="text-xs text-muted-foreground">सूचनाओं के लिए वाइब्रेट करें</p>
            </div>
            <Switch checked={vibrationEnabled} onCheckedChange={setVibrationEnabled} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-sm font-medium">संदेश प्रीव्यू</Label>
              <p className="text-xs text-muted-foreground">सूचना में संदेश का हिस्सा दिखाएं</p>
            </div>
            <Switch checked={showPreview} onCheckedChange={setShowPreview} />
          </div>
        </CardContent>
      </Card>

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <Card 
            key={notification.id} 
            className={`border transition-smooth hover:shadow-medium ${
              !notification.isRead 
                ? "border-primary/20 bg-primary/5 shadow-soft" 
                : "border-border shadow-soft"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {/* Type Icon */}
                <div className={`mt-1 ${getTypeColor(notification.type)}`}>
                  {getTypeIcon(notification.type)}
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {notification.title}
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <Badge variant={getPriorityColor(notification.priority)} className="text-xs">
                      {notification.priority === "high" ? "अत्यधिक" : 
                       notification.priority === "medium" ? "मध्यम" : "कम"}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-foreground leading-relaxed">
                    {notification.message}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    {notification.actions.includes("call") && (
                      <Button variant="outline" size="sm" className="h-8">
                        <Phone className="w-3 h-3 mr-1" />
                        कॉल करें
                      </Button>
                    )}
                    {notification.actions.includes("snooze") && (
                      <Button variant="outline" size="sm" className="h-8">
                        <Clock className="w-3 h-3 mr-1" />
                        स्नूज़
                      </Button>
                    )}
                    {notification.actions.includes("dismiss") && (
                      <Button variant="ghost" size="sm" className="h-8">
                        <X className="w-3 h-3 mr-1" />
                        खारिज करें
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {notifications.length === 0 && (
        <Card className="border border-border">
          <CardContent className="p-8 text-center">
            <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">कोई सूचना नहीं</h3>
            <p className="text-muted-foreground">आपके पास कोई नई सूचना नहीं है।</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NotificationCenter;