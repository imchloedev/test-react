import { useLocation, useSearchParams } from "react-router-dom";

export default function About() {
  const query = useLocation();
  console.log(query);
  const detail = query.search;


  return (
    <>
    <h1>소개</h1>
    <p>라우더 기초
      {detail && <span>추가적인 정보... </span>}
    </p>
    </>
  );
}
