const IMAGES = {
  home: "/GrowArea.jpg",
  story: "/SAM_0220.JPG",
  guest: "/GrowArea2.jpg",
  customer: "/SAM_0255.JPG",
  marketplace: "/SAM_0225.JPG",
  grower: "/SAM_0299.JPG",
  youth: "/SAM_0301.JPG",
  partners: "/SAM_0313.JPG",
};

function HeroImage({
  src,
  height = 420,
  dark = true,
}: {
  src: string;
  height?: number;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        height,
        borderRadius: 30,
        overflow: "hidden",
        position: "relative",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 25px 60px rgba(0,0,0,.18)",
      }}
    >
      {dark && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.42))",
          }}
        />
      )}
    </div>
  );
}
