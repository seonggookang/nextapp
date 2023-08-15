import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      Hello, Nextjs!
      <br />
      <img src="/pic.jpg" width={"100px"} />
      {/* public 밑에 있는 jpg를 가리킴*/}
    </>
  );
}
