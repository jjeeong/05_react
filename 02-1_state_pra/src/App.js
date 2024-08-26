import { useState } from "react";

function App() {
  const [str, setStr] = useState("문자열");
  const [num, setNum] = useState(100);
  const changeValue = () => {
    setStr("문자열 변경");
    setNum(1000);
    console.log(str);
    console.log(num);
  };
  const [userList, setUserList] = useState([
    { name: "유저1", age: 10, addr: "서울시 강남구" },
    { name: "유저2", age: 20, addr: "서울시 영등포구" },
    { name: "유저3", age: 30, addr: "서울시 강서구" },
  ]);
  const [user, setUser] = useState({
    name: "",
    age: 20,
    addr: "",
  });

  const inputUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = { ...user, [name]: value };
    setUser(obj);
  };
  /*
  const inputUserAge = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = { ...user, [name]: value };
    setUser(obj);
  };
  const inputUserAddr = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const obj = { ...user, [name]: value };
    setUser(obj);
  };
  */

  //유저 등록에 사용하는 input에 연결할 state
  /*
  const [name, setName] = useState("");
  const [age, setAge] = useState(20);
  const [addr, setAddr] = useState("");

  const inputName = (e) => {
    //e.target -> 이벤트를 발생시킨 해당 요소
    setName(e.target.value);
  };
  const inputAge = (e) => {
    setAge(e.target.value);
  };
  const inputAddr = (e) => {
    setAddr(e.target.value);
  };
  */

  const registUser = () => {
    /*
    const nameInput = document.querySelector("#name");
    const ageInput = document.querySelector("#age");
    const addrInput = document.querySelector("#addr");
    const name = nameInput.value;
    const age = ageInput.value;
    const addr = addrInput.value;
    */
    //const user = { name: name, age: age, addr: addr };
    //const user = { name, age, addr }; //키값과 똑같으면 사용가능
    //newArr.push(user);
    const newArr = [...userList, user];

    setUserList(newArr);
    //setUserList([...userList, { name, age, addr }]);
    // nameInput.value = "";
    // ageInput.value = "";
    // addrInput.value = "";
    setUser({ name: "", age: 20, addr: "" });
    // setName("");
    // setAge(20);
    // setAddr("");
  };
  return (
    <div className="App">
      <h1>리액트 state 활용</h1>
      <hr />
      <p>{str}</p>
      <p>{num}</p>
      <button onClick={changeValue}>클릭</button>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>분류</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            const deleteUser = () => {
              // userList.splice(index, 1);
              // setUserList([...userList]);
              const newArr = userList.filter((user) => {
                return user !== item;
              });
              setUserList(newArr);
            };
            return (
              <tr key={"user" + index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.addr}</td>
                <td>
                  {
                    /* 
                    화면에 데이터를 표현하는데 if가 필요하다면 -> 삼항연산자
                    조건식?true일때 나올 데이터 : false일때 나올 데이터
                    item.age < 20 ? "미성년자" : "성인"
                    13세 이하면 어린이 / 20살보다 작으면 청소년 / 40살 이하면 청년 / 60살 이하면 중년 / 노인
                  */
                    item.age <= 13
                      ? "어린이 "
                      : item.age < 20
                      ? "청소년"
                      : item.age <= 40
                      ? "청년"
                      : item.age <= 60
                      ? "중년"
                      : "노인"
                  }
                </td>
                <td>
                  <button onClick={deleteUser}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="regist-wrap">
        <div>
          {/* input의 value에 state를 이용해서 데이터를 넣은 경우 -> 키보드 입력시 state를 변경하게 처리 */}
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={inputUser}
          />
        </div>
        <div>
          <label htmlFor="age">나이</label>
          <input
            type="text"
            id="age"
            name="age"
            value={user.age}
            onChange={inputUser}
          />
        </div>
        <div>
          <label htmlFor="addr">주소</label>
          <input
            type="text"
            id="addr"
            name="addr"
            value={user.addr}
            onChange={inputUser}
          />
        </div>
        <div>
          <button onClick={registUser}>회원정보 등록</button>
        </div>
      </div>
    </div>
  );
}

export default App;
