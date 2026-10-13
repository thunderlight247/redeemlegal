export type Book = {
  title: string;
  series?: string;
  blurb: string;
  cover?: { src: string; w: number; h: number };
};

export const books: Book[] = [
  {
    title: "Introduction to Physical Geography for West African Senior High Schools",
    series: "Redeem Series",
    blurb:
      "A course book with notes and illustrations, questions and answers, and practice exercises, written as a supplementary textbook for SHS students offering Geography for WASSCE.",
    cover: { src: "/images/book-physical-geography.jpg", w: 512, h: 684 },
  },
  {
    title: "A Practical Approach and Hints on How to Answer Comprehension Questions",
    series: "Redeem Series",
    blurb:
      "Guidance on tackling unseen comprehension passages in school and examinations such as the BECE and WASSCE.",
  },
  {
    title: "Kidz Time with Jesus",
    blurb: "A children's Christian book.",
    cover: { src: "/images/book-kidz-time.jpg", w: 276, h: 438 },
  },
];
