import { IconAnaliytics, IconChat, IconCrosschair, IconDataAnaliytics, IconDocument, IconInstagram, IconSocial, IconSpeech, IconStrategy, IconTab } from "@/icons";

interface Steps {
  id: number;
  desc: string;
  icon: any;
  color: string;
}

export const steps: Steps[] = [
  {
    id: 1,
    desc: "Внедряемся в ваш бизнес и делаем анализ",
    icon: IconAnaliytics,
    color: "#ff9469",
  },
  {
    id: 2,
    desc: "Определяем главные показатели KPI",
    icon: IconStrategy,
    color: "#ff9469",
  },
  {
    id: 3,
    desc: "Разрабатываем концепцию",
    icon: IconSpeech,
    color: "#ff9469",
  },
  {
    id: 4,
    desc: "Составляем moodboard, проводим фотосессию",
    icon: IconInstagram,
    color: "#ff5280",
  },
  {
    id: 5,
    desc: "Создаем уникальный контент и разрабатываем контент-план",
    icon: IconTab,
    color: "#51c277",
  },
  {
    id: 6,
    desc: "Собираем визуал",
    icon: IconSocial,
    color: "#51c277",
  },
  {
    id: 7,
    desc: "Занимаемся контролем и ведением аккаунта",
    icon: IconDocument,
    color: "#51c277",
  },
  {
    id: 8,
    desc: "Обеспечиваем обратную связь с Вашими подписчиками",
    icon: IconCrosschair,
    color: "#ff5280",
  },
  {
    id: 9,
    desc: "Разрабатываем стратегию продвижения",
    icon: IconChat,
    color: "#a652ff",
  },
  {
    id: 10,
    desc: "Предоставляем ежемесячный отчет о проделанной работе",
    icon: IconDataAnaliytics,
    color: "#a652ff",
  },
];
