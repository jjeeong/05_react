import { useState } from "react";

function App() {
  const str1 = "문자열";
  const num1 = 100;
  const arr1 = [1, 2, "hi", "hello"];
  const obj1 = { name: "유저1", age: 20, addr: "서울시 영등포구" };

  function printArr1() {
    const arr = new Array();
    for (let i = 0; i < arr1.length; i++) {
      arr.push(<li key={"key1" + i}>{arr1[i]}</li>);
    }
    return arr;
  }
  //구조분해할당
  /*
  const [test1, test2, test3] = [1, "100", [1, 2, 3]];
  console.log(test1);
  console.log(test2);
  console.log(test3);
  */
  //state : react에서 유동적인 데이터를 다루기위한 객체
  //useState(data); userState() -> react hooks -> useState hooks은
  // -> 첫번째 getter / 두번째 setter
  //const [data, setData] = useState(100);
  //console.log(data);
  //const str2 = "문자열2";
  const [str2, setStr2] = useState("문자열2");
  //const num2 = 200;
  const [num2, setNum2] = useState(200);
  //const arr2 {100,200,300,400}
  const [arr2, setArr2] = useState([100, 200, 300, 400]);
  //const obj2 = {name:"유저2",age:30,addr:"서울시 강남구"}
  const [obj2, setObj2] = useState({
    name: "유저2",
    age: 30,
    addr: "서울시 강남구",
  });

  function testFunc1() {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  }
  const func2 = function () {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };
  const func3 = () => {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };
  const func4 = () => {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };
  let str3 = "일반 문자열";
  const changeStr3 = () => {
    str3 = "str3 변경!!";
    console.log(str3);
    const p1 = document.querySelector("#p1");
    p1.innerText = str3;
  };

  let [str4, setStr4] = useState("state문자열");
  let [str5, setStr5] = useState("state5");
  const changeStr4 = () => {
    setStr4("state문자열 변경");
    setStr5("11111111111");
    console.log(str4);
    /*
    useState() hooks을 이용해서 state를 생성하면 리턴되는 배열의 두번째에 들어있는값은 state를 변경하는 함수
    state를 변경하는 함수를 이용해서 state값을 변경하면 -> 해당 부분을 다시 rendering 
    -> state를 이용해서 화면을 표현했으면 해당부분이 변경된 값으로 자동으로 바뀜
    */
  };
  //////////////////////////////////////////
  // 변수와 state 비교

  const [num3, setNum3] = useState(1000);
  const changeNum3 = () => {
    const num = num3 + 1;
    setNum3(num);
  };
  const [arr3, setArr3] = useState([1000, 2000, 3000, 4000]);

  const changeArr1 = () => {
    const arr = [10, 20, 30, 40];
    setArr3(arr);
  };

  const changeArr2 = () => {
    arr3[2] = 300;
    const newArr = [...arr3];
    setArr3(newArr);
    /*
    //2
    const newArr = [...arr3]; //전개연산자 -> 깊은 복사
    newArr[2] = 300;
    setArr3(newArr);

    //1
    const newArr = new Array();
    for (let i = 0; i < arr3.length; i++) {
      newArr.push(arr3[i]);
    }
    console.log(arr3);
    console.log(newArr);
    newArr[2] = 300;
    setArr3(newArr);
    */
  };

  const changeArr3 = () => {
    const newArr = [...arr3, 5000];
    setArr3(newArr);
    /*
    const newArr = [...arr3];
    newArr.push(5000);
    setArr3(newArr);
    */
  };
  const [obj3, setObj3] = useState({
    name: "유저3",
    age: 25,
    addr: "서울시 강남구",
  });

  const changeObj = () => {
    const newObj = { ...obj3, name: "문정원" }; //name을 사용중이면 수정, 아니면 추가
    setObj3(newObj);
    /*
    obj3.name = "문정원";
    const newObj = { ...obj3 };
    setObj3(newObj);

    const newObj = { ...obj3 };
    obj3.name = "문정원";
    setObj3(newObj);
    */
  };

  return (
    <div className="App">
      <h1>javascript데이터를 HTML 화면에 표현하는 방법</h1>
      <hr />
      <p>표현하고싶은 값</p>
      {/*
      js변수에 있는 데이터를 화면에 출력하기위해서는 {}를 사용 -> mustache문법
      */}
      <p>{str1}</p>
      <p>{num1}</p>
      <ul>
        <li>{arr1[0]}</li>
        <li>{arr1[1]}</li>
        <li>{arr1[2]}</li>
        <li>{arr1[3]}</li>
      </ul>
      <ul>
        <li>{obj1.name}</li>
        <li>{obj1.age}</li>
        <li>{obj1.addr}</li>
      </ul>
      {/* jsx에서 js배열을 바로출력하면 데이터를 붙여서 화면에 보여줌 */}
      <div>{arr1}</div>
      {/* 객체는 내부에서 데이터를 반드시 꺼내서 화면에 표현해야 함 */}
      {/*<div>{obj1}</div>*/}
      <ul>{printArr1()}</ul>
      {/*map 함수를 이용해서 배열의 데이터를 화면에 출력 */}
      <ul>
        {arr1.map(function (item, index) {
          return <li key={"key2" + index}>{item}</li>;
        })}
      </ul>
      <hr />
      <h3>state를 화면에 출력</h3>
      <p>{str2}</p>
      <p>{num2}</p>
      <ul>
        {arr2.map(function (item, index) {
          return <li key={"key3" + index}>{item}</li>;
        })}
      </ul>
      <p>{obj2.name}</p>
      <p>{obj2.age}</p>
      <p>{obj2.addr}</p>
      <hr />
      <hr />
      <h2>JSX에서 클릭이벤트를 적용하는 방법</h2>
      <div id="div1">클릭이벤트 확인용 div</div>
      {/*1. inline이벤트 직접 로직 구현 */}
      <button
        onClick={function () {
          const div1 = document.querySelector("#div1");
          console.log(div1.innerText);
        }}
      >
        클릭확인용1
      </button>
      {/*2. inline이벤트 직접 로직 구현(arrow function 사용) 
        function () {}    -> () => {}
      */}
      <button
        onClick={() => {
          const div1 = document.querySelector("#div1");
          console.log(div1.innerText);
        }}
      >
        클릭확인용2
      </button>
      {/* 3. 선언함수를 실행하는 방법 */}
      <button
        onClick={() => {
          testFunc1();
        }}
      >
        클릭확인용3
      </button>
      {/* 4. 변수에 저장된 함수를 실행하는 방법 */}
      <button
        onClick={() => {
          func2();
        }}
      >
        클릭확인용4
      </button>
      {/* 5. 변수에 저장된 arrow function을 실행하는 방법 */}
      <button
        onClick={() => {
          func3();
        }}
      >
        클릭확인용5
      </button>
      {/* 
      6. 변수로 선언되어있는 함수를 사용
      -> 이벤트 적용은 onClick={함수} -> 함수자리에 미리 저장해둔 변수(함수가 저장되어있는 변수)를 적용
      */}
      <button onClick={func4}>클릭확인용6</button>
      <hr />
      <hr />
      <h3>일반 변수와 state 비교</h3>
      <p id="p1">{str3}</p>
      <p id="p2">{str4}</p>
      <p id="p3">{str5}</p>
      <button onClick={changeStr3}>str3 변경</button>
      <button onClick={changeStr4}>str4 변경</button>
      <p id="p4">{num3}</p>
      <button onClick={changeNum3}>num3값 변경</button>
      <ul>
        {arr3.map((item, index) => {
          return <li key={"arr4" + index}>{item}</li>;
        })}
      </ul>
      <button onClick={changeArr1}>배열 변경1</button>
      <button onClick={changeArr2}>배열 변경2</button>
      <button onClick={changeArr3}>배열 변경3</button>
      <ul>
        <li>이름 : {obj3.name}</li>
        <li>나이 : {obj3.age}</li>
        <li>주소 : {obj3.addr}</li>
      </ul>
      <button onClick={changeObj}>이름 변경</button>
    </div>
  );
}

export default App;
