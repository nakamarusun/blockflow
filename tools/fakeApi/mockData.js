const notes = [
  {
    id: "4fs89a",
    title: "My name Jeff",
    content: "I'ts actually Corey House lol",
    authorId: 1,
  },
  {
    id: "8fa75b",
    title: "Learn my javascript course",
    content: "I'ts actually good please learn from it",
    authorId: 1,
  },
  {
    id: "a8f92j",
    title: "🌈",
    content: "Gay Declaration Day to blockflow.web.app",
    authorId: 3,
  },
  {
    id: "j6489a",
    title: "My experience as a trash picker",
    content: "It's not that bad actually",
    authorId: 2,
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Elisa Harmon" },
  { id: 3, name: "Adit Homo" }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  notes,
  authors
};
