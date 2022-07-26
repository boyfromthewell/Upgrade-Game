> _토이 프로젝트라고 하기도 뭐하지만 던전앤파이터 모바일을 즐겨해서 아무생각 없이 그냥 만들어 보았다._

***
## 초기화면
![](https://velog.velcdn.com/images/boyfromthewell/post/d2950e7a-1fec-4115-9852-bedf1189dcc5/image.png)

향수를 자극하는 BGM도 깔려있다

## 무기 선택창
![](https://velog.velcdn.com/images/boyfromthewell/post/1fc1ce07-1a89-4ad4-bb12-2d5c1b60ed31/image.png)

무기도 선택할수 있다.

## 시뮬레이터 플레이

![](https://velog.velcdn.com/images/boyfromthewell/post/0fd5739b-fbb4-4df3-b949-ca49864d67b1/image.png)

확률표 버튼을 클릭하면 토글로 각 강화 등급에 따른 확률을 확인 할 수 있다. 

![](https://velog.velcdn.com/images/boyfromthewell/post/5964971e-8f27-4ec0-b8fb-c4b8239465bf/image.gif)

강화하는거 같은 효과도 주었다

(새로고침 할 경우 강화수치가 당연히 다 날아간다 주의!!)

강화 성공, 실패 로직은 간단했다.  
0부터 100까지의 난수를 생성한뒤, 지정된 확률보다 작거나 같다면 강화 성공, 그렇지 않은 경우는 강화 실패이다.

![](https://velog.velcdn.com/images/boyfromthewell/post/678117f4-01c2-4705-80be-f7711dd85594/image.png)

15강 이상부턴 실패시 강화 수치가 한단계 감소한다 (데헷)

## 랭킹 등록하기

랭킹등록 버튼을 누르면 랭킹등록도 가능하다

![](https://velog.velcdn.com/images/boyfromthewell/post/cc0bfe38-b031-4619-a70e-a7b9415585fe/image.png)

## 랭킹 조회

랭킹보기 버튼을 클릭하면 다른 유저와 내 랭킹을 조회 가능하다.  
랭킹은 강화 등급 순, 강화등급이 같다면 더 오래된 데이터가 상위 순위이다.  
데이터베이스는 파이어베이스를 썼다

![](https://velog.velcdn.com/images/boyfromthewell/post/5738fb66-d1f0-455e-9ae2-974312efd861/image.png) 방금 플레이한 중구가 시키드나 닉네임이 2등이다 야호!

> **배포링크 : https://boyfromthewell.github.io/Upgrade-Game/**
