[스타일 이슈]

* [ ] # 스타일: 리스트 간의 간격 개선
    리스트 간의 간격을 10px 정도 주기 (좌우 주면 안되고 하단만 주기)

[로직 이슈]

* [ ] # 로직: 영화 상세정보 토글 만들기
    * 리스트를 클릭하면 a 태그로 이동하는 것이 아니라 리스트 아래쪽에, 이하 정보들의 표시를 토글로 on off한다.
    타이틀: title_long
    장르: genres
    런타임: runtime
    평점: rating
    시놉시스: synopsis
    토렌트 다운로드 링크: torrents
    * 선택한 id만 나올 필요는 일단 없지만, 상세정보 컴포넌트는 분리해서 관리한다.

[리팩토링 이슈]

* [ ] # 리팩토링: 메뉴 제목의 컴포넌트화
    const [menu, setMenu] = useState('무비 리스트') 로 기존 제목을 {menu} 스테이트로 변경
    App.js의 <h1>무비 리스트</h1> 부분을 Title.js 만들어서 
    <Title menu={menu} /> 로 컴포넌트화해서 분리시키기 (프롭도 줄것 menu)
* [ ] # 리팩토링: MovieList 컴포넌트화
* [ ] # 리팩토링: 컴포넌트 쪼개기
퍼포먼스튜닝: MovieList 컴포넌트 랜더링 최적화

[옵션]
* [ ] # 리팩토링: TodoList API를 불러와서 투두리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/todos
* [ ] # 리팩토링: UserList API를 불러와서 유저리스트 메뉴 및 컴포넌트 구현
    API: https://jsonplaceholder.typicode.com/users
퍼포먼스튜닝: TodoList 컴포넌트 랜더링 최적화
퍼포먼스튜닝: UserList 컴포넌트 랜더링 최적화
