// 자바스크립트에 타입 문법이 추가된 것
// 자바스크립트로 코드를 짤때 타입을 엄격하게 지정(정적 타입)
// 잘못된 타입의 데이터가 들어가는 것을 막아 타입 관련 버그들을 미연에 방지
// 변수에 타입 지정 가능
// 변수명: 타입명
// 타입스크립트에서 지원하는 기본 자료형
// boolean, number, string, Array, object, 튜플, enum, any, void, null과 undefined, never 등이 있음
// 1. boolean
// true 또는 false 값을 저장하는 타입
let active = true;
// 이 변수에는 boolean 타입만 들어올 수 있음
// active = 123; // Type 'number' is not assignable to type 'boolean'. 실수로 타입을 변경하면 에러 발생
// 2. number
// 숫자 데이터를 저장하는 타입
// 10진, 6진, 2진, 8진수 리터럴을 지원
let decimal = 10;
let hex = 0xa;
let binary = 0b1010;
let octal = 0o12;
// 이 변수에는 number 타입만 들어올 수 있음
console.log(decimal, hex, binary, octal);
// 3. string
// 문자열 데이터를 저장하는 타입
let message = 'Welcome';
// 이 변수에는 string 타입만 들어올 수 있음
// message = 123; // Type 'number' is not assignable to type 'string'. 실수로 타입을 변경하면 에러 발생
// 4. Array
// 배열의 타입을 정의하는 방법에는 2가지가 존재
// 1) 첫번째 방법: type[]
let firstArray = [1, 2, 3]; // 숫자만 가능한 배열
// 2) 두번째 방법(제네릭): Array<type>
let secondArray = [4, 5, 6]; // 숫자만 가능한 배열
// 제네릭: 타입을 파라미터로 입력하는 문법
// 5. object
let person = { a: 11, b: 'bb', c: true };
// 이 변수에는 원시 자료형이 아닌 모든 자료형 값이 들어올 수 있음(예: 객체, 배열, 함수 등)
person = [1, 2, 3];
person = () => { };
// 원시 자료형이란?
// person = 1;
// person = 'aa';
// person = true;
// person = undefined;
// person = null;
// (참고) https://hwani.dev/js-primitive-reference-types/
let person2 = { name: 'wonah', age: 25 };
// 이 변수에는 객체만 들어올 수 있는데 name은 string, age는 number 타입만 가능
let person3 = { name: 'wonah', age: 25 };
// ? 사용 시 job 속성은 옵셔널
// 어떤 함수의 매개변수가 객체 자료형을 받는다고 가정
function greetUser(user) {
    console.log(`hello ${user.name}`);
}
greetUser({ name: 'Goni', age: 35 });
// 객체의 모든 속성을 명시적으로 지정한 덕분에 코드를 보는 모든 사람이 
// 해당 객체로 무엇을 할 수 있고 무엇을 할 수 없는지 쉽게 알 수 있음
// Quiz
// Q1. 여러분의 직업(job), 하루 공부 시간(studyHours)을 변수로 각각 저장해보세요.
// 타입은 명시적으로 지정
let job = 'student';
let studyHours = 4;
// Q2. 여러분이 가장 좋아하는 곡과 가수 이름을 변수에 object 자료형으로 담아보세요.
// 객체 안에는 노래 제목과 가수이름이 들어가면 됩니다.
// 단, 제목과 가수는 문자만 들어올 수 있음
let favoriteMusic = { artist: '아이유', title: '마음' };
// Q3. 다음과 같이 생긴 자료의 타입 지정을 해보세요.
// let project = {
//   member: ['Kim', 'Park'],
//   days: 30,
//   started: true
// };
// project 변수 우측에 적으면 됩니다.
// member 속성은 문자로 이루어진 배열만 들어올 수 있고,
// days 속성은 숫자,
// started 속성은 true/false만 들어올 수 있음
let project = { member: ['kim', 'park'], days: 30, started: true };
// 6. 튜플(tuple)
// 튜플을 사용하면 배열의 요소에 자료형을 정의할 수 있다. (인덱스에 자료형 저장)
let myTuple = ['hi', 5, 'hello'];
// TS는 튜플에 정의된 인덱스의 자료형은 알고 있지만, 배열에 새롭게 추가되는 요소의 자료형은 알 수 없다.
// 예를 들어
myTuple.push(3);
myTuple.push('bye');
console.log(myTuple);
// 7. enum(enumerated type)
// 열거형 enum을 이용하면 숫자 집합에 부여할 수 있다
var Status;
(function (Status) {
    Status[Status["deleted"] = 0] = "deleted";
    Status[Status["pending"] = 1] = "pending";
    Status[Status["active"] = 2] = "active"; // 2
})(Status || (Status = {}));
const blogPostStatus = Status.active;
console.log(blogPostStatus);
// 열거형 내부의 값은 0부터 시작
// 블로그 게시물의 상태를 표현할 때 2가 아닌 active라고 하는 것이 가독성이 좋음
// 다음과 같이 시작값을 지정하여 열거형의 숫자를 원하는 값부터 할당할 수도 있음
var Week;
(function (Week) {
    Week[Week["MON"] = 1] = "MON";
    Week[Week["TUE"] = 2] = "TUE";
    Week[Week["WED"] = 3] = "WED";
    Week[Week["THU"] = 4] = "THU";
    Week[Week["FRI"] = 5] = "FRI";
    Week[Week["SAT"] = 6] = "SAT";
    Week[Week["SUN"] = 7] = "SUN";
})(Week || (Week = {}));
const todayWeek = Week.SUN; // 7
console.log(todayWeek);
// 반대로 숫자를 이용하여 열거형 값에 접근 가능
console.log(Week[5]);
// 8.any
// 어느, 어떤, 아무것이든 하나
// 이름에서 알 수 있듯이 any는 무엇이든 될 수 있음을 의미(모든 자료형이 다 들어올 수 있음)
let anyValue = 123;
anyValue = 'Won';
anyValue = true;
anyValue = [];
anyValue = {};
// 편하지만 타입스크립트를 쓰는 의미가 없어짐..(일반 JS 변수가 됨)
// 자바스크립트에서 기존 코드들을 활용하면서 부분적으로 타입스크립트를 적용할 때 사용
// 9. void
// 빈 공간, 하나도[전혀] 없는
// 이름에서 알 수 있듯이 void는 자료형이 없음을 의미
// 함수의 리턴 타입으로 자주 사용됨
function storeValueInDb(objectToStore) {
    // 데이터베이스에 값을 저장
}
// 이 함수는 객체를 받아서 데이터베이스에 저장하지만 아무것도 반환하지 않기 때문에 리턴 타입을 void로 지정
// 또는 화살표 함수 사용 시
const storeValueInDb2 = (objectToStore) => {
    // 데이터베이스에 값을 저장
};
// 10. null과 undefined
// null 또는 undefined 자료형의 변수르르 만드는 것을 유용하지 않음
// => null 및 undefined 값만 할당할 수 있기 때문
// 주로 유니언 자료형을 만들때 사용(에: string |(또는) undefined)
// 11. union type(타입을 2개 이상 합친 새로운 타입)
let unionValue = 'hi';
unionValue = 123;
// 이 변수에는 문자 또는 숫자가 들어올 수 있음
// 문자 또는 숫자가 가능한 Array 타입 지정은?
let unionValue2 = [1, '2', 3];
let unionValue22 = [1, '2', 3];
// let unionValue222: string | number[] = [1, 2, 3]; // string 이거나 number만 가능한 array
// let unionValue2222: string[] | number[] = ['a', 'b']; string만 가능한 array 이거나 number만 가능한 array
// 문자 또는 숫자가 가능한 object 타입 지정은?
let unionValue3 = { name: 'won' };
// (참고)
// 변수 선언과 초기화 과정에서 값을 할당하지 않으면 암시적으로 any 타입 지정
// 확인법: 변수에 마우스 커서 올려두면 뜸
let value;
value = 123;
value = 'd';
// 선언과 동시에 초기화 시 타입 지정은 자동으로 됨
let value2 = 123;
// value2 = 'dd'; // 이미 number 타입으로 지정되어 string 타입 불가
// Quiz
// Q4. 다음 변수 4개에 타입을 지정해보세요.
// let userName = 'Kim';
// let userAge = undefined;
// let married = false; 
// let userInfo = [userName, userAge, married];
// 단, userAge 변수엔 undefined 말고 숫자도 들어올 수 있음
let userName = 'Kim';
let userAge = undefined;
let married = false;
let userInfo = [userName, userAge, married];
// Q5. frontClass라는 변수에 타입을 지정해보세요.
// let frontClass = {
//   subject: ['html', 'css', 'js', false],
//   score: [100, 95, 85, 90],
//   teacher: 'Kim',
//   student: 'Lee'
// };
// frontClass.student = ['Lee', 'Park'];
// 타입 지정을 안해주면 터미널에 에러 발생
// 에러가 안나게 frontClass라는 변수에 타입 지정
let frontClass = {
    subject: ['html', 'css', 'js', false],
    score: [100, 95, 85, 90],
    teacher: 'Kim',
    student: 'Lee'
};
frontClass.student = ['Lee', 'Park'];
