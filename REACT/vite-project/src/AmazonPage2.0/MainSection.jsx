import ItemCard from "./ItemCard";
function MainSection() {
  	

const data = [
  {
    description:
      "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump Rop",
    amount: 1157,
    img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "BOOMIBOO Jump Rope, Adjustable Jump Ropes,Skipping Rope Tangle-Free Rapid Speed with Ball Bearings for Women ",
    amount: 697,
    img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Fitness and Exercise, Cardio, Boxing, and Weight Loss, Speed Rope, Men",
    amount: 774,
    img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    description:
      "JAMIEWIN Led Light Up Jump Rope for Kids Glow in the Dark Beaded Jump Rope | Adjustable, Colorful Soft Beaded Segmented",
    amount: 1679,
    img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
  },
];
 return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {data.map((doc, index) => (
        <ItemCard
          key={index}
          description={doc.description}
          amount={doc.amount}
          img={doc.img}
        />
      ))}
    </div>
  );
  
}
export default MainSection;
