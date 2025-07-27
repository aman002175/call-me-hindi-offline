import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Search, Filter, Calendar, Clock, Play, Archive, MessageSquare } from "lucide-react";
import { useState } from "react";

const MessageLog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const messages = [
    {
      id: 1,
      caller: "राहुल शर्मा",
      phone: "+91 98765 43210",
      message: "आपातकालीन बैठक कल सुबह 10 बजे है। कृपया पुष्टि करें। यह बहुत महत्वपूर्ण है क्योंकि हमें नई परियोजना पर चर्चा करनी है।",
      time: "2024-01-15 14:30",
      duration: "45 सेकंड",
      priority: "high",
      status: "new",
      audioAvailable: true
    },
    {
      id: 2,
      caller: "प्रिया गुप्ता",
      phone: "+91 87654 32109",
      message: "डॉक्टर की अपॉइंटमेंट कल दोपहर 3 बजे रिशेड्यूल करनी है। मैं आज नहीं आ सकूंगी।",
      time: "2024-01-15 12:15",
      duration: "32 सेकंड",
      priority: "medium",
      status: "read",
      audioAvailable: true
    },
    {
      id: 3,
      caller: "अमित कुमार",
      phone: "+91 76543 21098",
      message: "परियोजना की अंतिम तिथि का विस्तार चाहिए। क्या हम अगले सप्ताह तक समय बढ़ा सकते हैं?",
      time: "2024-01-14 16:45",
      duration: "28 सेकंड",
      priority: "low",
      status: "read",
      audioAvailable: false
    },
    {
      id: 4,
      caller: "सुनीता वर्मा",
      phone: "+91 65432 10987",
      message: "आपके ऑर्डर की डिलीवरी आज शाम 5 बजे होगी। कृपया घर पर उपस्थित रहें।",
      time: "2024-01-14 11:20",
      duration: "38 सेकंड",
      priority: "medium",
      status: "archived",
      audioAvailable: true
    },
    {
      id: 5,
      caller: "विकास गुप्ता",
      phone: "+91 54321 09876",
      message: "सॉफ्टवेयर अपडेट के बारे में जानकारी चाहिए। कब तक यह उपलब्ध होगा?",
      time: "2024-01-13 09:30",
      duration: "41 सेकंड",
      priority: "low",
      status: "read",
      audioAvailable: true
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new": return <div className="w-2 h-2 bg-destructive rounded-full animate-pulse-glow"></div>;
      case "read": return <div className="w-2 h-2 bg-muted-foreground/50 rounded-full"></div>;
      case "archived": return <Archive className="w-3 h-3 text-muted-foreground" />;
      default: return null;
    }
  };

  const filteredMessages = messages.filter(message =>
    message.caller.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
    message.phone.includes(searchQuery)
  );

  const newMessages = filteredMessages.filter(msg => msg.status === "new");
  const readMessages = filteredMessages.filter(msg => msg.status === "read");
  const archivedMessages = filteredMessages.filter(msg => msg.status === "archived");

  const MessageCard = ({ message }: { message: typeof messages[0] }) => (
    <Card className="border border-border shadow-soft hover:shadow-medium transition-smooth">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {getStatusIcon(message.status)}
            <div>
              <h3 className="font-semibold text-foreground">{message.caller}</h3>
              <p className="text-sm text-muted-foreground">{message.phone}</p>
            </div>
          </div>
          <Badge variant={getPriorityColor(message.priority)} className="text-xs">
            {message.priority === "high" ? "अत्यधिक" : message.priority === "medium" ? "मध्यम" : "कम"}
          </Badge>
        </div>
        
        <p className="text-sm text-foreground mb-3 leading-relaxed bg-muted/30 p-3 rounded-md">
          {message.message}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(message.time).toLocaleDateString('hi-IN')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {message.duration}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {message.audioAvailable && (
              <Button variant="outline" size="sm" className="h-8">
                <Play className="w-3 h-3 mr-1" />
                ऑडियो सुनें
              </Button>
            )}
            <Button variant="outline" size="sm" className="h-8">
              <Phone className="w-3 h-3 mr-1" />
              कॉल करें
            </Button>
          </div>
          
          {message.status === "new" && (
            <Button variant="ghost" size="sm" className="h-8 text-xs">
              पढ़ा गया मार्क करें
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          संदेश लॉग
        </h1>
        <p className="text-muted-foreground">सभी कॉल संदेशों का रिकॉर्ड</p>
      </div>

      {/* Search and Filter */}
      <Card className="border border-border shadow-soft">
        <CardContent className="p-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="नाम, नंबर या संदेश खोजें..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Message Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">सभी ({filteredMessages.length})</TabsTrigger>
          <TabsTrigger value="new">नए ({newMessages.length})</TabsTrigger>
          <TabsTrigger value="read">पढ़े गए ({readMessages.length})</TabsTrigger>
          <TabsTrigger value="archived">संग्रहीत ({archivedMessages.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4 mt-6">
          {filteredMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </TabsContent>
        
        <TabsContent value="new" className="space-y-4 mt-6">
          {newMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </TabsContent>
        
        <TabsContent value="read" className="space-y-4 mt-6">
          {readMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </TabsContent>
        
        <TabsContent value="archived" className="space-y-4 mt-6">
          {archivedMessages.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))}
        </TabsContent>
      </Tabs>

      {filteredMessages.length === 0 && (
        <Card className="border border-border">
          <CardContent className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">कोई संदेश नहीं मिला</h3>
            <p className="text-muted-foreground">आपकी खोज के लिए कोई संदेश उपलब्ध नहीं है।</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MessageLog;