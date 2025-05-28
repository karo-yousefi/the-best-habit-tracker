import {
  Code, Book, Pen, Laptop, FileText,
  Dumbbell, HeartPulse, Droplet, Bed,
  Brain, Sunrise, Moon, ScanHeart,
  Music, Palette,
  MonitorSmartphone, Mail, Users,
  Home, ShoppingCart,
  Target, Smile, CircleEllipsis,
} from "lucide-react";


const daysOfWeek = { // Not a good solution, works for now tho
	"sun": ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
	"mon": ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
	"tue": ["tue", "wed", "thu", "fri", "sat", "sun", "mon"],
	"wed": ["wed", "thu", "fri", "sat", "sun", "mon", "tue"],
	"thu": ["thu", "fri", "sat", "sun", "mon", "tue", "wed"],
	"fri": ["fri", "sat", "sun", "mon", "tue", "wed", "thu"],
	"sat": ["sat", "sun", "mon", "tue", "wed", "thu", "fri"],
};


const flameColors = [
  "#3B82F6", // starting color | day 1
  "#06B6D4", // early progress | day 2-3
  "#10B981", // gaining momentum | day 4-6
  "#22C55E", // healthy streak | day 7-9
  "#EAB308", // heating up | day 10-14
  "#F59E0B", // hot | day 15-18
  "#EF4444", // intense | day 19-23
  "#DC2626", // on fire | day 24-27
  "#EA580C", // blazing | day 28-32
  "#F97316", // full flame | day 33+
];


const availableIcons = [
	{ id: 0, icon: <Code size={20} />, label: "Code" },
  { id: 1, icon: <Book />, label: "Read" },
  { id: 2, icon: <Pen />, label: "Write" },
  { id: 3, icon: <Laptop />, label: "Work" },
  { id: 4, icon: <FileText />, label: "Note Taking" },
  { id: 5, icon: <Dumbbell />, label: "Exercise" },
  { id: 6, icon: <HeartPulse />, label: "Health" },
  { id: 7, icon: <Droplet />, label: "Hydration" },
  { id: 8, icon: <Bed />, label: "Sleep" },
  { id: 9, icon: <Brain />, label: "Meditate" },
  { id: 10, icon: <Sunrise />, label: "Morning Routine" },
  { id: 11, icon: <Moon />, label: "Evening Routine" },
  { id: 12, icon: <ScanHeart />, label: "Self-Care" },
  { id: 13, icon: <Music />, label: "Music" },
  { id: 14, icon: <Palette />, label: "Art" },
  { id: 15, icon: <MonitorSmartphone />, label: "Limit Screen Time" },
  { id: 16, icon: <Mail />, label: "Checking Mails" },
  { id: 17, icon: <Users />, label: "Social Time" },
  { id: 18, icon: <Home />, label: "Home Chores" },
  { id: 19, icon: <ShoppingCart />, label: "Groceries" },
  { id: 20, icon: <Target />, label: "Goals" },
  { id: 21, icon: <Smile />, label: "Gratitude" },
  { id: 22, icon: <CircleEllipsis />, label: "Other"},
];

const defaultSettings = {
  theme: "dark",
  firstDayOfWeek: "sun",
}

export {
	daysOfWeek,
	flameColors,
	availableIcons,
  defaultSettings,
};