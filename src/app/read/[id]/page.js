// 생각해야한다. 이페이지는 사용자와 상호작용 하는가?
// 아니다. 데이터를 읽어서 출력할 뿐 >> 이런건 서버 컴퍼넌트로 가면됨
export default async function Read(props) {
  const resp = await fetch(
    process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
    {
      cache: "no-store",
    }
  );
  const topic = await resp.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
      {/* parameters : {props.params.id} */}
    </>
  );
}
