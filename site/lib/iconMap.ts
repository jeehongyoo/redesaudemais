import {
  Activity,
  Apple,
  Baby,
  Bike,
  Bone,
  Brain,
  ClipboardCheck,
  ClipboardList,
  Droplets,
  Flower2,
  Footprints,
  Handshake,
  Heart,
  HeartHandshake,
  HeartPulse,
  Moon,
  Scan,
  Sparkles,
  Stethoscope,
  Waves,
  Wind,
  Building2,
  type LucideIcon,
} from "lucide-react";

export const SPECIALTY_ICONS: Record<string, LucideIcon> = {
  "clinico-geral": Stethoscope,
  cardiologia: HeartPulse,
  neurologia: Brain,
  pediatria: Baby,
  ginecologia: Flower2,
  nutricao: Apple,
  dermatologia: Sparkles,
  endocrinologia: Activity,
  ortopedia: Bone,
  psiquiatria: HeartHandshake,
  urologia: Droplets,
};

export const EXAM_ICONS: Record<string, LucideIcon> = {
  "Mapa e Holter": Activity,
  "Ecodoppler de Carótidas e Vertebrais": Waves,
  Ecocardiograma: Heart,
  Ultrassonografia: Scan,
  "Teste Ergométrico Computadorizado": Bike,
  "Risco Cirúrgico": ClipboardCheck,
  Polissonografia: Moon,
  "Eletroencefalograma (EEG)": Brain,
  "Ecodoppler de MMII": Footprints,
  Ergoespirometria: Wind,
};

export const STAT_ICONS: LucideIcon[] = [Stethoscope, ClipboardList, Handshake, Building2];
