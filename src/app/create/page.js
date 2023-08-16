"use client";

import { useRouter } from "next/navigation"; // next/router는 next 12버전

export default function Create() {
  const router = useRouter(); // 클라이언트 컴포넌트에서만 사용
  return (
    // 사용자와 상호작용하는건 서버컴포넌트에서 하지않는다. use client 고고
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // title과 body값을 알기위해
        const title = e.target.title.value; // target은 form태그를 가리킴. name이 title인걸 가리킴
        const body = e.target.body.value;
        // 서버에 데이터를 전송해서 데이터 추가를 위해선 옵션이 필요.
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }), // json 타입으로 변환
        };
        fetch(`http://localhost:9999/topics`, options) // 2번쨰로 인자로 인해 서버쪽으로 데이터가 전송됨
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            router.refresh(); // 서버컴포넌트를 refresh
            // router로 방금 생성한 글로 리디렉션 할 수 있음
            router.push(`/read/${lastId}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
