import { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect 실행!!');

    document.title = `You Clicked ${count} times`;
    // }); // 처음 마운트 될 때 + 매번 업데이트 될 때 마다
    // },[]); // 처음 마운트 될 때만
  },[count]); // 처음 마운트 될 때 + count 값이 바뀔대만 실행
  
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button type="button"
        onClick={() => {
          setCount(count + 1);

          // document.title = `You Clicked ${count} times`;

          // onClick과 useEffect는 완전히 다른 용도
          // onClick 속성으로 넣어준 콜백 함수는 "클릭 시 호출되는" 함수이고,
          // useEffect 내부에 있는 콜백 함수는 "렌더링 시 (의존성 배열에 따라) 호출되는" 함수임
          // 어떻게 사용하는지에 따라 겹치는 결과도 있겠지만, 두 개는 완전히 다른 의도를 가짐!!
        }}
      >
        클릭
      </button>
    </div>
  );
}
export default CounterEffect;

