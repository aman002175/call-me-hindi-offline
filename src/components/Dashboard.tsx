import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageSquare, Settings, Bell, Mic, PhoneCall, Users, Clock } from "lucide-react";

const Dashboard = () => {
  const recentMessages = [
    {
      id: 1,
      caller: "राहुल शर्मा",
      phone: "+91 98765 43210",
      message: "आपातकालीन बैठक कल सुबह 10 बजे है। कृपया पुष्टि करें।",
      time: "2 घंटे पहले",
      priority: "high",
      status: "new"
    },
    {
      id: 2,
      caller: "प्रिया गुप्ता",
      phone: "+91 87654 32109",
      message: "डॉक्टर की अपॉइंटमेंट कल दोपहर 3 बजे रिशेड्यूल करनी है।",
      time: "4 घंटे पहले",
      priority: "medium",
      status: "read"
    },
    {
      id: 3,
      caller: "अमित कुमार",
      phone: "+91 76543 21098",
      message: "परियोजना की अंतिम तिथि का विस्तार चाहिए।",
      time: "1 दिन पहले",
      priority: "low",
      status: "read"
    }
  ];

  const stats = [
    { label: "आज के कॉल", value: "12", icon: Phone, color: "text-primary" },
    { label: "नए संदेश", value: "3", icon: MessageSquare, color: "text-success" },
    { label: "महत्वपूर्ण", value: "1", icon: Bell, color: "text-warning" },
    { label: "कुल संपर्क", value: "156", icon: Users, color: "text-muted-foreground" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <Mic className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Autometa
          </h1>
        </div>
        <p className="text-muted-foreground">आपका व्यक्तिगत कॉल सहायक</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-border shadow-soft transition-smooth hover:shadow-medium">
            <CardContent className="p-4 text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Messages */}
      <Card className="border border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            हाल के संदेश
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentMessages.map((message) => (
            <div key={message.id} className="p-4 bg-gradient-card rounded-lg border border-border transition-smooth hover:shadow-soft">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    {message.caller}
                    {message.status === "new" && (
                      <Badge variant="destructive" className="text-xs">नया</Badge>
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">{message.phone}</p>
                </div>
                <Badge variant={getPriorityColor(message.priority)} className="text-xs">
                  {message.priority === "high" ? "अत्यधिक" : message.priority === "medium" ? "मध्यम" : "कम"}
                </Badge>
              </div>
              <p className="text-sm text-foreground mb-2 leading-relaxed">{message.message}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {message.time}
                </span>
                <Button variant="outline" size="sm" className="h-8">
                  <PhoneCall className="w-3 h-3 mr-1" />
                  कॉल करें
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-16 bg-gradient-primary shadow-soft hover:shadow-medium transition-smooth">
          <div className="text-center">
            <Settings className="w-6 h-6 mx-auto mb-1" />
            <div className="text-sm">सेटिंग्स</div>
          </div>
        </Button>
        <Button variant="outline" className="h-16 border-primary/20 hover:bg-primary/5 transition-smooth">
          <div className="text-center">
            <Bell className="w-6 h-6 mx-auto mb-1" />
            <div className="text-sm">सूचनाएं</div>
          </div>
        </Button>
      </div>

      {/* Status Indicator */}
      <Card className="border border-success/20 bg-success/5">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-success">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
            <span className="font-medium">असिस्टेंट सक्रिय है</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            सभी कॉल स्वचालित रूप से संभाले जा रहे हैं
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;