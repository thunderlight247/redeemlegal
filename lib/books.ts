export type Book = {
  title: string;
  series?: string;
  author: string;
  blurb: string;
  publishedByRedeem?: boolean;
  cover?: { src: string; w: number; h: number };
};

export const books: Book[] = [
  {
    title: "Commissioners for Oaths Handbook",
    author: "Caleb Dickens",
    blurb: "A legal handbook written by Caleb Dickens for Commissioners for Oaths.",
    cover: { src: "/images/book-commissioners-handbook.jpg", w: 618, h: 882 },
  },
  {
    title: "Definition and Scope of Geography for Senior High School",
    series: "Redeem Series",
    author: "Caleb Dickens",
    blurb: "A Redeem Series geography title for senior high school students.",
    cover: { src: "/images/book-geography-scope.jpg", w: 437, h: 621 },
  },
  {
    title: "Introduction to Physical Geography for West African Senior High Schools",
    series: "Redeem Series",
    author: "Caleb Dickens",
    blurb:
      "A course book with notes and illustrations, questions and answers, and practice exercises, written as a supplementary textbook for SHS students offering Geography for WASSCE.",
    cover: { src: "/images/book-physical-geography.jpg", w: 512, h: 684 },
  },
  {
    title: "A Practical Approach and Hints on How to Answer Comprehension Questions",
    series: "Redeem Series",
    author: "Caleb Dickens",
    blurb:
      "Guidance on tackling unseen comprehension passages in school and examinations such as the BECE and WASSCE.",
  },
  {
    title: "Incisive B.E.C.E English Language Past Questions and Answers, 2013-2020",
    author: "Oppong Nana Alphonse",
    publishedByRedeem: true,
    blurb: "Past questions and answers for B.E.C.E English Language, including private candidates, for J.H.S 1, 2 and 3.",
    cover: { src: "/images/book-incisive-bece.jpg", w: 518, h: 763 },
  },
  {
    title: "Kidz Time with Jesus",
    author: "Caleb Dickens",
    blurb: "A children's Christian book.",
    cover: { src: "/images/book-kidz-time.jpg", w: 276, h: 438 },
  },
];
