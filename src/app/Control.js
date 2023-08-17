"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>Update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(process.env.NEXT_PUBLIC_API_URL + `topics/` + id, options) // delete일떄도 이 fetch가 왜필요하지? >> 가져와서 지워야 하니까
                  .then((res) => res.json())
                  .then((result) => {
                    router.refresh();
                    router.push("/");
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
