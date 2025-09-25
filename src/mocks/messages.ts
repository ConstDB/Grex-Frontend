export type ChatImage = {
  id: string | number;
  src: string;
  alt?: string;
};

export const dummyImages: ChatImage[] = [
  { id: 1, src: "https://picsum.photos/id/1015/600/400", alt: "Mountain view" },
  { id: 2, src: "https://picsum.photos/id/1025/600/400", alt: "Dog portrait" },
  { id: 3, src: "https://picsum.photos/id/1035/600/400", alt: "Beach scenery" },
  { id: 4, src: "https://picsum.photos/id/1041/600/400", alt: "Forest trail" },
  { id: 5, src: "https://picsum.photos/id/1049/600/400", alt: "Snowy peak" },
  { id: 6, src: "https://picsum.photos/id/1052/600/400", alt: "City skyline" },
  { id: 7, src: "https://picsum.photos/id/1062/600/400", alt: "Bridge at night" },
  { id: 8, src: "https://picsum.photos/id/1074/600/400", alt: "Lake reflection" },
  { id: 9, src: "https://picsum.photos/id/1084/600/400", alt: "Foggy forest" },
  { id: 10, src: "https://picsum.photos/id/1080/600/400", alt: "Desert dunes" },
  { id: 11, src: "https://picsum.photos/id/109/600/400", alt: "Boats on water" },
  { id: 12, src: "https://picsum.photos/id/110/600/400", alt: "Countryside road" },
];
