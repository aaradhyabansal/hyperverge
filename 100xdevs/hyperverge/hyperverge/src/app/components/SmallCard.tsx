export default function SmallCard() {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <div>Briefy </div>
        <div>Your Ai Knowledge Assistant</div>
        <img src="savetime.jpg" alt="" className="object-cover h-25 w-25 ..." />
      </div>
      <div className="col-span-1  ">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FKolkata&bgcolor=%23ffffff&src=YWFyYWRoeWFhYmFuc2FsQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          className="border:solid 1px #777"
          height={350}
          width={450}
        ></iframe>
      </div>
      <div>
        <iframe
          className="border-radius:12px"
          src="https://open.spotify.com/embed/playlist/7J49McjYGxsS4YR4x29i2K?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
