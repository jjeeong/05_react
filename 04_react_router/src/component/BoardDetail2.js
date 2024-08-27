import { useParams } from "react-router-dom";

const BoardDetail2 = () => {
  //url(주소)를 통해서 보내준 데이터를 추출
  //useParams() : 리액트라우터를 통해서 주소장을 통해서 전송된 데이터를 추출하기위한 객체
  const params = useParams();
  const boardNo = params.boardNo;
  console.log(boardNo);
  //url로 받은 boardNo를 통해서 db의 boadr 상세정보를 조회한 후 화면에 출력
  return (
    <div>
      <h2>게시글 상세보기 페이지</h2>
    </div>
  );
};

export default BoardDetail2;
