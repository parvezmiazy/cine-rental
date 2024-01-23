const data = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once upon a time in hollywood",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi non velit nihil excepturi quam dignissimos voluptates dolorem consequatur nesciunt facilis eligendi voluptas ipsam et modi ex doloribus quasi impedit",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-story.jpg",
    title: "Marriage Story",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi non velit nihil excepturi quam dignissimos voluptates dolorem consequatur nesciunt facilis eligendi voluptas ipsam et modi ex doloribus quasi impedit",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain And Gain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi non velit nihil excepturi quam dignissimos voluptates dolorem consequatur nesciunt facilis eligendi voluptas ipsam et modi ex doloribus quasi impedit",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi non velit nihil excepturi quam dignissimos voluptates dolorem consequatur nesciunt facilis eligendi voluptas ipsam et modi ex doloribus quasi impedit",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi non velit nihil excepturi quam dignissimos voluptates dolorem consequatur nesciunt facilis eligendi voluptas ipsam et modi ex doloribus quasi impedit",
    genre: "Comedy/Drama",
    rating: 4,
    price: 140,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };
