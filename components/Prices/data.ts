interface Prices {
  id: number;
  name: string;
  desc: string;
  price: number | string;
  isSupport: boolean
}


export const prices: Prices[] = [
  {
    id: 1,
    name: "Branding",
    desc: "More power for small teams create project plans with confidence",
    price: "Free",
    isSupport: false
  },
  {
    id: 2,
    name: "Branding",
    desc: "More power for small teams create project plans with confidence",
    price: 20,
    isSupport: true
  },
  {
    id: 3,
    name: "Branding",
    desc: "More power for small teams create project plans with confidence",
    price: 20,
    isSupport: false
  },
  {
    id: 4,
    name: "Branding",
    desc: "More power for small teams create project plans with confidence",
    price: "Custom",
    isSupport: false
  },
]