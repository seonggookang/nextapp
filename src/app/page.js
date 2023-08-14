import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome!</h2>
      Hello, Nextjs!
      <img src="/hello.png" /> {/* public 밑에 있는 png를 가리킴*/}
    </>
  );
}
