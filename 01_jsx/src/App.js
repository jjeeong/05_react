import "./test.css";

function App() {
  /*
  JSX 사용 시 주의사항
  1. 함수에서 JSX를 리턴하면 화면에 표현
    -> 리턴할때는 반드시 1개의 태그로 표현
    -> 여러개 태그를 리턴하고 싶으면 -> 1개의 태그로 감싸서 리턴
    
  에러발생코드 : h1태그와 h3 태그를 동시에 리턴하려고 해서 문제가 발생
  return(
    <h1>테스트1</h1>
    <h3>테스트2</h3>
  )
    -> 1개의 태그로 묶어서 리턴하는 방법 : 부모태그 하나를 사용
  return(
    <div>
    <h1>테스트1</h1>
    <h3>테스트2</h3>
    </div>
  )
    -> 1개의 태그로 묶어서 리턴하는 방법 : 감싸는 태그는 리턴하고싶지 않을때는 비어있는태그로 감쌈
  return(
    <br>
    <h1>테스트1</h1>
    <h3>테스트2</h3>
    </>
  )
  2. 모든 태그에는 닫는 태그가 존재
    -> html 에서는 닫는태그가 없는 태그도 존재(<br>,<hr>,<img>,<input>)
    -> html에서 닫는태그가 없는 태그도 jsx에서는 반드시 닫아야 함
      <br></br>
    -> 닫는태그를 생략하는 방법
      <br></br> -> <br />
  3. html에서 사용하던 속성중에 속성이름이 다른경우가 존재 -> 기존속성으로 사용하다가 무제없으면 그냥쓰셈 -> 경고 발생하면 변경
    -> <div class="test1"></div> -> <div className="test1"></div>
    -> <label for=""></label> -> <label htmlFor=""></label>
  4. css 적용하는 방법
    -> 외부파일에 작성 -> import
    -> style속성을 이용하여 inline으로 적용하는 경우 -> js 객체형식으로 처리
    -> <div style="background-color:blue; color:red">
      -> <div style={{backgroundColor:"blue", color:"red"}}>
  */
  return (
    <>
      <h1>안녕</h1>
      <h2>이제 곧 점심 예이~</h2>
      <hr></hr>
      <hr />
      <h3 style={{ backgroundColor: "blue", color: "#fff" }}>test</h3>
      <div id="abc" className="bbb">
        테스트div
      </div>
      <label htmlFor="abc">라벨테스트</label>
      <hr />
      <hr />
      {/*
        주석은 {} 내부에 자바스크립트 주석
      */}
      <div className="login-wrap">
        <h2 className="login-title">LOGIN</h2>
        <div className="input-wrap">
          <label htmlFor="userId">아이디</label>
          {/*input태그 사용할때에도 반드시 닫는 태그 사용 */}
          <input type="text" name="userId" id="userId" />
        </div>
        <div className="input-wrap">
          <label htmlFor="userPw">비밀번호</label>
          <input type="password" name="userPw" id="userPw" />
        </div>
        <div className="login-btn">
          <input type="submit" value="로그인" />
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      {/*
        회원가입
        회원가입항목 : 아이디/비밀번호/비밀번호확인/이름/전화번호/성별
      */}
      <div className="insert-wrap">
        <h2 className="insert-title">회원가입</h2>
        <div className="input-wrap">
          <label htmlFor="id">아이디</label>
          <input type="text" id="id" name="id" />
        </div>
        <div className="input-wrap">
          <label htmlFor="pw">비밀번호</label>
          <input type="password" id="pw" name="pw" />
        </div>
        <div className="input-wrap">
          <label htmlFor="pw-re">비밀번호 확인</label>
          <input type="password" id="pw-re" name="pw-re" />
        </div>
        <div className="input-wrap">
          <label htmlFor="user-name">이름</label>
          <input type="text" id="user-name" name="user-name" />
        </div>
        <div className="input-wrap">
          <label htmlFor="user-phone">전화번호</label>
          <input type="text" id="user-phone" name="user-phone" />
        </div>

        <div className="gender-wrap">
          <span>성별</span>
          <div>
            <label htmlFor="m">남자</label>
            <input type="radio" id="m" name="gender" defaultValue="m" />
            <label htmlFor="f">여자</label>
            <input type="radio" id="f" name="gender" defaultValue="f" />
          </div>
        </div>

        <div className="insert-btn">
          <input type="submit" value="회원가입" />
        </div>
      </div>
    </>
  );
}

export default App;
