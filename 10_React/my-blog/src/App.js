import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

// 일반적으로 라우팅은 App 컴포넌트에 구현하게 되는데
// App 컴포넌트가 가장 처음으로 렌더링되는 최상위 컴포넌트이기 때문
function App() {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/post-write" element={<PostWritePage/>} />
        <Route path="/post/:postId" element={<PostViewPage/>} />
        {/* 여기서 :postId는 동적으로 변하는 파라미터(변수)를 위한 값 => URL 파라미터 */}
        {/* 경로에 이렇게 콜론(:)을 사용하고 파라미터명을 입력하면
        실제 컴포넌트에서 useParams() Hook을 사용해 postId로 해당 값을 가져올 수 있음 */}

        {/* URL 파라미터를 여러개 쓰고 싶다면..> */}
        {/* <Route path="/post/:postId/:otherValue/:anotherValue" element={<PostViewPage/>} /> */}
        {/* 필수가 아닌 옵션값으로 처리하고 싶다면..? Optional Segments */}
        {/* 파라미터명 뒤에 ? 입력, 해당 파라미터는 옵션값으로 처리됨 */}
        <Route path="/post/:postId/:otherValue?/:anotherValue?" element={<PostViewPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
