// 개념 설명만을 위한 예제

// Context를 사용하면 모든 컴포넌트를 일일이 통하지 않고도
// 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있음
// 'light'를 기본값으로 하는 테마 Context를 만드는 코드
const ThemeContext = React.createContext('light');


function App(props) {
  // Provider를 이용해 하위 트리에 테마 값을 보내줌
  // 아무리 깊수히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있음
  // 아래 예시에서는 dark를 현재 테마값으로 보내고 있음
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  // Toolbar 컴포넌트는 테마 prop을 받아서 ThemedButton에 전달해야 함
  // 앱 안의 모든 버튼이 테마를 알아야 한다면 이 정보를 일일이 넘기는 과정은 비효율적임
  // 특히 트리의 구조가 깊어질수록 매우 비효율적
  // 이런 과정을 Prop Drilling 이라고 부름(프로퍼티 내리꽂기)
  return (
    // 이제 중간에 있는 컴포넌트가 일일이 테마를 넘겨줄 필요가 없음
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // React는 가장 가까이 있는 테마 provider를 찾아 그 값을 사용함
  // 만약 해당되는 Provider가 없을 경우 기본값(여기서는 'light')을 사용
  // 이 예시에서 현재 선택된 테마는 'dark'가 됨
  return (
    <ThemeContext.Consumer>
      {value => <Button theme={value}/>}
    </ThemeContext.Consumer>
  );
}