import Comment from "./Comment";

// 댓글 데이터를 별도의 객체로 분리하고 반복 가능한 베열에 담기
const comments = [
  {
    name:'원아현',
    content:'안녕하세요. 원아현입니다.'
  },
  {
    name:'유재석',
    content:'리액트 재미있어요~!'
  },
  {
    name:'이이경',
    content:'저도 리액트 배워보고 싶어요!!'
  },
  {
    name:'이미주',
    content:'리액트 너무 어려워'
  },

];

// 댓글들을 포함하는 CommentList 컴포넌트
function CommentList(props) {
  return (
    <div>
      {/* Quiz: props를 추가하여 name과 content 값 전달 */}
      {/* <Comment name="원아현" content="안녕하세요1"/>
      <Comment name="남궁윤정" content="안녕하세요22"/>
      <Comment name="임예빈" content="안녕하세요333"/> */}

      {/* 배열을 동적으로 렌더링해야 할 때에는 배열의 map()함수를 사용
      (map(): 배열 안에 있는 각 요소를 변환하여 새로운 배열을 만듦)
      앞으로 리액트에서 배열을 동적으로 렌더링해야 할 때는 map() 함수를 사용하여
      일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 됨*/}
      {comments.map((comment, index) => {
        return (
          <Comment name={comment.name} content={comment.content} />
        );
      })}

      {/* 코드 간소화 */}
      {comments.map(comment => <Comment name={comment.name} content={comment.content} />)}

      {/* map() 함수의 결과 */}
      {[
        <Comment name={'원아현'} content={'안녕하세요. 원아현입니다.'} />,
        <Comment name={'유재석'} content={'리액트 재미있어요~!'} />,
        <Comment name={'이이경'} content={'저도 리액트 배워보고 싶어요!!'} />,
        <Comment name={'이미주'} content={'리액트 너무 어려워'} />
      ]}
    
    </div>
  );
}
export default CommentList;