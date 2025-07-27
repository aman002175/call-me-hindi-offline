import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Volume2, 
  Mic, 
  Phone, 
  Bell, 
  Shield, 
  Clock,
  MessageSquare,
  Languages,
  Battery,
  HardDrive
} from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [isAssistantEnabled, setIsAssistantEnabled] = useState(true);
  const [autoAnswer, setAutoAnswer] = useState(true);
  const [voiceVolume, setVoiceVolume] = useState([75]);
  const [micSensitivity, setMicSensitivity] = useState([60]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const settingsGroups = [
    {
      title: "असिस्टेंट सेटिंग्स",
      icon: Mic,
      items: [
        {
          type: "switch",
          label: "कॉल असिस्टेंट सक्रिय करें",
          description: "कॉल्स को स्वचालित रूप से संभालने के लिए असिस्टेंट को चालू करें",
          value: isAssistantEnabled,
          onChange: setIsAssistantEnabled
        },
        {
          type: "switch",
          label: "स्वचालित उत्तर",
          description: "कॉल्स का स्वचालित रूप से उत्तर दें",
          value: autoAnswer,
          onChange: setAutoAnswer
        },
        {
          type: "select",
          label: "रिंग्स के बाद उत्तर दें",
          description: "कितनी रिंग्स के बाद असिस्टेंट उत्तर दे",
          options: [
            { value: "2", label: "2 रिंग्स" },
            { value: "3", label: "3 रिंग्स" },
            { value: "4", label: "4 रिंग्स" },
            { value: "5", label: "5 रिंग्स" }
          ]
        }
      ]
    },
    {
      title: "आवाज़ और भाषा",
      icon: Languages,
      items: [
        {
          type: "slider",
          label: "आवाज़ की आवाज़",
          description: "असिस्टेंट की आवाज़ का वॉल्यूम",
          value: voiceVolume,
          onChange: setVoiceVolume,
          min: 0,
          max: 100
        },
        {
          type: "slider",
          label: "माइक्रोफ़ोन संवेदनशीलता",
          description: "कॉलर की आवाज़ कैप्चर करने की संवेदनशीलता",
          value: micSensitivity,
          onChange: setMicSensitivity,
          min: 0,
          max: 100
        },
        {
          type: "select",
          label: "बोली का स्वर",
          description: "असिस्टेंट का बोलने का स्वर",
          options: [
            { value: "formal", label: "औपचारिक" },
            { value: "friendly", label: "मित्रवत" },
            { value: "professional", label: "व्यावसायिक" }
          ]
        }
      ]
    },
    {
      title: "संदेश सेटिंग्स",
      icon: MessageSquare,
      items: [
        {
          type: "number",
          label: "अधिकतम रिकॉर्डिंग समय",
          description: "कॉलर के संदेश की अधिकतम लंबाई (सेकंड में)",
          placeholder: "60"
        },
        {
          type: "switch",
          label: "स्वचालित ट्रांसक्रिप्शन",
          description: "आवाज़ को टेक्स्ट में बदलें",
          value: true,
          onChange: () => {}
        },
        {
          type: "textarea",
          label: "स्वागत संदेश",
          description: "कॉलर को सुनाया जाने वाला संदेश",
          placeholder: "नमस्कार, मैं उपलब्ध नहीं हूं। कृपया अपना संदेश छोड़ें।"
        }
      ]
    },
    {
      title: "सूचनाएं",
      icon: Bell,
      items: [
        {
          type: "switch",
          label: "सूचनाएं सक्रिय करें",
          description: "नए संदेशों के लिए सूचनाएं प्राप्त करें",
          value: notificationsEnabled,
          onChange: setNotificationsEnabled
        },
        {
          type: "select",
          label: "प्राथमिकता फ़िल्टर",
          description: "किस प्राथमिकता के संदेशों के लिए सूचना दें",
          options: [
            { value: "all", label: "सभी संदेश" },
            { value: "high", label: "केवल अत्यधिक महत्वपूर्ण" },
            { value: "high-medium", label: "अत्यधिक और मध्यम महत्वपूर्ण" }
          ]
        },
        {
          type: "select",
          label: "शांत समय",
          description: "इस समय के दौरान सूचनाएं न दें",
          options: [
            { value: "none", label: "कोई शांत समय नहीं" },
            { value: "night", label: "रात 10 बजे से सुबह 7 बजे तक" },
            { value: "custom", label: "कस्टम समय" }
          ]
        }
      ]
    },
    {
      title: "गोपनीयता और सुरक्षा",
      icon: Shield,
      items: [
        {
          type: "switch",
          label: "स्थानीय भंडारण",
          description: "सभी डेटा केवल डिवाइस पर स्टोर करें",
          value: true,
          onChange: () => {}
        },
        {
          type: "switch",
          label: "ऑटो डिलीट",
          description: "30 दिन बाद पुराने संदेश स्वचालित रूप से हटाएं",
          value: false,
          onChange: () => {}
        },
        {
          type: "select",
          label: "डेटा एन्क्रिप्शन",
          description: "संदेशों की एन्क्रिप्शन लेवल",
          options: [
            { value: "basic", label: "बेसिक एन्क्रिप्शन" },
            { value: "advanced", label: "एडवांस्ड एन्क्रिप्शन" }
          ]
        }
      ]
    }
  ];

  const renderSettingItem = (item: any, index: number) => {
    switch (item.type) {
      case "switch":
        return (
          <div key={index} className="flex items-center justify-between py-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <Switch checked={item.value} onCheckedChange={item.onChange} />
          </div>
        );
      
      case "slider":
        return (
          <div key={index} className="space-y-3 py-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <div className="flex items-center space-x-3">
              <Slider
                value={item.value}
                onValueChange={item.onChange}
                max={item.max}
                min={item.min}
                step={1}
                className="flex-1"
              />
              <span className="text-sm font-medium w-12 text-right">
                {item.value[0]}%
              </span>
            </div>
          </div>
        );
      
      case "select":
        return (
          <div key={index} className="space-y-2 py-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="चुनें..." />
              </SelectTrigger>
              <SelectContent>
                {item.options?.map((option: any) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      
      case "number":
        return (
          <div key={index} className="space-y-2 py-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <Input type="number" placeholder={item.placeholder} />
          </div>
        );
      
      case "textarea":
        return (
          <div key={index} className="space-y-2 py-4">
            <div className="space-y-1">
              <Label className="text-sm font-medium">{item.label}</Label>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
            <Textarea placeholder={item.placeholder} rows={3} />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2 py-4">
        <h1 className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <SettingsIcon className="w-6 h-6 text-primary" />
          सेटिंग्स
        </h1>
        <p className="text-muted-foreground">अपने कॉल असिस्टेंट को कस्टमाइज़ करें</p>
      </div>

      {/* Settings Groups */}
      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <Card key={groupIndex} className="border border-border shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <group.icon className="w-5 h-5 text-primary" />
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-border">
                {group.items.map((item, itemIndex) => renderSettingItem(item, itemIndex))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Storage Info */}
      <Card className="border border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <HardDrive className="w-5 h-5 text-primary" />
            भंडारण जानकारी
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <Battery className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">156</div>
              <div className="text-sm text-muted-foreground">कुल संदेश</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <HardDrive className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">45 MB</div>
              <div className="text-sm text-muted-foreground">स्टोरेज उपयोग</div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <HardDrive className="w-4 h-4 mr-2" />
              डेटा एक्सपोर्ट करें
            </Button>
            <Button variant="destructive" className="flex-1">
              सभी डेटा साफ़ करें
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button className="w-full h-12 bg-gradient-primary shadow-soft hover:shadow-medium transition-smooth">
        सेटिंग्स सेव करें
      </Button>
    </div>
  );
};

export default Settings;