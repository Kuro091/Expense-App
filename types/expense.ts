export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "Grocery Shopping",
    amount: 152.35,
    date: new Date("2024-03-28"),
  },
  {
    id: "e7",
    description: "Movie Tickets",
    amount: 24.99,
    date: new Date("2024-04-01"),
  },
  {
    id: "e8",
    description: "Mobile Phone Bill",
    amount: 45.0,
    date: new Date("2024-04-03"),
  },
  {
    id: "e9",
    description: "Restaurant Dinner",
    amount: 78.5,
    date: new Date("2024-04-04"),
  },
  {
    id: "e10",
    description: "Gas Station",
    amount: 65.75,
    date: new Date("2024-04-05"),
  },
];

export type EXPENSE = (typeof DUMMY_EXPENSES)[0];
