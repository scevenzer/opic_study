const TOPICS = [
  {
    id: 1, emoji: "🏠", nameKo: "집",
    category: "선택주제",
    questions: [
      {
        id: 1,
        question: "I'd like to know where you live. Tell me about your home and different rooms in your home. What do they look like? What is your favorite room? Describe it in detail.",
        translation: "어디에 살고 있는지 말해 주세요. 집과 각 방을 설명해 주세요. 가장 좋아하는 방은 무엇인가요?",
        type: "장소묘사",
        structure: ["최근 이사 + 행복", "22층 → 2층 변화", "엘리베이터 고장 에피소드", "컴퓨터방 + 게임기/보드게임", "아들과 주말 게임", "만족감"],
        script: [
          { en: "Well, I recently moved into a new house, and it's actually a downtown apartment on the 2nd floor.", ko: "저는 최근에 새 집으로 이사했는데, 시내에 있는 2층 아파트예요." },
          { en: "Honestly, I'm really glad about that, because I used to live on the 22nd floor, and it was terrible whenever the elevator was out of service.", ko: "솔직히 그게 정말 다행인 게, 예전에는 22층에 살았는데 엘리베이터가 고장 날 때마다 정말 힘들었거든요." },
          { en: "I remember having to climb all those stairs — it was exhausting.", ko: "그 계단을 다 걸어 올라가야 했던 게 기억나는데, 정말 힘들었어요." },
          { en: "Anyway, my favorite room in my new house is the computer room.", ko: "아무튼 새 집에서 제가 가장 좋아하는 방은 컴퓨터방이에요." },
          { en: "It has a computer, a couple of game machines like a Nintendo Switch and a PlayStation, and a few board games as well.", ko: "컴퓨터 한 대, 닌텐도 스위치랑 플레이스테이션 같은 게임기 몇 대, 그리고 보드게임 몇 개가 있어요." },
          { en: "On weekends, I usually spend time there playing games with my son, and honestly, that time means a lot to me.", ko: "주말에는 보통 거기서 아들이랑 게임하며 시간을 보내는데, 솔직히 그 시간이 저에게 정말 의미가 커요." },
          { en: "It's one of my favorite parts of the week.", ko: "그게 제 한 주 중에서 가장 좋아하는 시간 중 하나예요." }
        ],
        pronunciation: [
          { en: "Well, I recently moved into a new house,", ko: "웰, 아이 리쓴틀리 무브딘투어 뉴 하우스" },
          { en: "and it's actually a downtown apartment on the 2nd floor.", ko: "앤 잇츠 액츄얼리어 다운타운 어파트먼트 온더 세컨 플로어" },
          { en: "Honestly, I'm really glad about that,", ko: "아너슬리, 아임 릴리 글래드 어바웃 댓" },
          { en: "because I used to live on the 22nd floor,", ko: "비커즈 아이 유스투 리브 온더 트웨니세컨 플로어" },
          { en: "and it was terrible whenever the elevator was out of service.", ko: "앤 잇 워즈 테러블 웬에버 디 엘리베이터 워즈 아우러브 서비스" },
          { en: "I remember having to climb all those stairs —", ko: "아이 리멤버 해빙투 클라임 올 도즈 스테어즈" },
          { en: "it was exhausting.", ko: "잇 워즈 이그저스팅" },
          { en: "Anyway, my favorite room in my new house is the computer room.", ko: "애니웨이, 마이 페이버릿 룸 인 마이 뉴 하우스 이즈 더 컴퓨터룸" },
          { en: "It has a computer, a couple of game machines", ko: "잇 해즈어 컴퓨터, 어 커펄어브 게임 머신즈" },
          { en: "like a Nintendo Switch and a PlayStation,", ko: "라이커 닌텐도 스위치 앤어 플레이스테이션" },
          { en: "and a few board games as well.", ko: "앤어 퓨 보드게임즈 애즈웰" },
          { en: "On weekends, I usually spend time there playing games with my son,", ko: "온 위켄즈, 아이 유주얼리 스펜 타임 데어 플레잉 게임즈 윗마이 선" },
          { en: "and honestly, that time means a lot to me.", ko: "앤 아너슬리, 댓 타임 민즈어 라러미" },
          { en: "It's one of my favorite parts of the week.", ko: "잇츠 원어브 마이 페이버릿 파츠 어브더 윅" }
        ],
        warnings: [
          { word: "used to", guide: "유스투" }, { word: "out of service", guide: "아우러브 서비스" },
          { word: "exhausting", guide: "이그저스팅" }, { word: "a couple of", guide: "어 커펄어브" },
          { word: "as well", guide: "애즈웰" }, { word: "a lot to", guide: "어 라러미" }
        ]
      },
      {
        id: 2,
        question: "Tell me about the activities that you and your family like to do at home. What do you usually do on weekdays? What do you do on weekends?",
        translation: "가족과 집에서 무엇을 하나요? 평일과 주말을 비교해서 말해 주세요.",
        type: "활동묘사",
        structure: ["도입: 가족 중심 생활", "평일 활동 (바쁨 + 저녁 루틴)", "주말 변화", "아들과 게임", "감정 마무리"],
        script: [
          { en: "Well, my family really enjoys spending time together at home.", ko: "우리 가족은 집에서 함께 시간을 보내는 것을 정말 좋아합니다." },
          { en: "On weekdays, we're usually busy with work and school, so we don't get to spend much time together.", ko: "평일에는 일과 학교 때문에 보통 바빠서 함께 많은 시간을 보내지는 못합니다." },
          { en: "After dinner, we sometimes watch TV or talk about our day, which is kind of our small routine.", ko: "저녁 식사 후에는 TV를 보거나 하루 동안 있었던 일을 이야기하는데, 그것이 우리만의 작은 일상입니다." },
          { en: "But on weekends, things are a bit different because we have more free time.", ko: "하지만 주말에는 시간이 조금 더 여유로워서 분위기가 다릅니다." },
          { en: "I usually play Pokémon on the Nintendo Switch or Minecraft with my son, and honestly, those moments feel really special to me.", ko: "저는 보통 아들과 닌텐도 스위치로 포켓몬이나 마인크래프트를 하는데, 그 순간들이 저에게 정말 특별하게 느껴집니다." },
          { en: "So yeah, spending time with my family at home is probably the happiest part of my week.", ko: "그래서 집에서 가족과 함께 보내는 시간이 제 일주일 중 가장 행복한 시간이라고 생각합니다." }
        ],
        pronunciation: [
          { en: "Well, my family really enjoys spending time together at home.", ko: "웰, 마이 패밀리 릴리 인조이즈 스펜딩 타임 투게더 앳홈" },
          { en: "On weekdays, we're usually busy with work and school,", ko: "온 위크데이즈, 위어 유주얼리 비지 윗 워크앤 스쿨" },
          { en: "so we don't get to spend much time together.", ko: "소 위 돈 겟투 스펜 머치 타임 투게더" },
          { en: "After dinner, we sometimes watch TV", ko: "애프터 디너, 위 썸타임즈 워치 티비" },
          { en: "or talk about our day, which is kind of our small routine.", ko: "오어 톡어바웃 아워 데이, 위치즈 카인더브 아워 스몰 루틴" },
          { en: "But on weekends, things are a bit different because we have more free time.", ko: "벗 온 위켄즈, 씽즈어러 빗 디퍼런트 비커즈 위 해브 모어 프리타임" },
          { en: "I usually play Pokémon on the Nintendo Switch or Minecraft with my son,", ko: "아이 유주얼리 플레이 포켓몬 온더 닌텐도 스위치 오어 마인크래프트 윗마이 선" },
          { en: "and honestly, those moments feel really special to me.", ko: "앤 아너슬리, 도즈 모먼츠 필 릴리 스페셜러미" },
          { en: "So yeah, spending time with my family at home is probably the happiest part of my week.", ko: "소 예, 스펜딩 타임 윗마이 패밀리 앳홈 이즈 프라벌리 더 해피어스트 파러브 마이 윅" }
        ],
        warnings: [
          { word: "usually", guide: "유주얼리" }, { word: "get to", guide: "겟투" },
          { word: "kind of", guide: "카인더브" }, { word: "probably", guide: "프라벌리" },
          { word: "happiest", guide: "해피어스트" }
        ]
      },
      {
        id: "1b",
        question: "Tell me about the house or the apartment where you grew up. What did the home or surrounding area look like when you were a child? How has it changed?",
        translation: "어릴 때 자란 집이나 아파트에 대해 말해 주세요. 어릴 때 그 집이나 주변 지역은 어떤 모습이었나요? 지금은 어떻게 변했나요?",
        type: "과거 비교",
        structure: ["어릴 때: 방2 부엌1 화장실1", "가구 별로 없음 + 침대 없이 바닥잠", "뻐근한 등으로 기상", "지금: 방3+거실+화장실 더 크고 화려", "침대 생김 + 붙박이장/서랍", "더 넓고 정돈된 느낌"],
        script: [
          { en: "My family used to live in a small apartment when I was a child.", ko: "저희 가족은 제가 어렸을 때 작은 아파트에 살았어요." },
          { en: "We just had two bedrooms, one kitchen, and one bathroom.", ko: "방 두 개, 부엌 하나, 화장실 하나가 다였어요." },
          { en: "Also, we did not have many pieces of furniture.", ko: "가구도 별로 없었어요." },
          { en: "I did not have a bed in my room, so I used to sleep on the floor.", ko: "제 방에 침대가 없어서 바닥에서 자곤 했어요." },
          { en: "Then, I would wake up with a stiff back the next morning.", ko: "그러면 다음 날 아침에 등이 뻐근한 채로 일어나곤 했어요." },
          { en: "Now, everything is different. I live in a bigger and fancier apartment.", ko: "지금은 모든 게 달라요. 저는 더 크고 화려한 아파트에 살아요." },
          { en: "It has three bedrooms, a kitchen, a living room, and a bathroom.", ko: "방 세 개, 부엌, 거실, 화장실이 있어요." },
          { en: "And guess what? We have beds now!", ko: "그리고 그거 알아요? 이제 침대가 있어요!" },
          { en: "I can get a more comfortable sleep on the bed than before.", ko: "예전보다 훨씬 편하게 잘 수 있어요." },
          { en: "Plus, we even have built-in furniture like walk-in closets and drawers.", ko: "게다가 붙박이 옷장이랑 서랍 같은 built-in 가구도 있어요." },
          { en: "So, my apartment looks neater and more spacious now.", ko: "그래서 지금 저희 집은 더 정돈되고 넓어 보여요." }
        ],
        pronunciation: [
          { en: "My family used to live in a small apartment when I was a child.", ko: "마이 패밀리 유스투 리브 인어 스몰 어파트먼트 웨나이 워저 차일드" },
          { en: "We just had two bedrooms, one kitchen, and one bathroom.", ko: "위 저스트 해드 투 베드룸즈, 원 키친, 앤 원 배쓰룸" },
          { en: "Also, we did not have many pieces of furniture.", ko: "얼소, 위 디든 해브 메니 피시즈 어브 퍼니처" },
          { en: "I did not have a bed in my room, so I used to sleep on the floor.", ko: "아이 디든 해버 베드 인 마이 룸, 소 아이 유스투 슬립 온더 플로어" },
          { en: "Then, I would wake up with a stiff back the next morning.", ko: "덴, 아이 우드 웨이컵 윗어 스티프 백 더 넥스트 모닝" },
          { en: "Now, everything is different.", ko: "나우, 에브리씽 이즈 디퍼런트" },
          { en: "I live in a bigger and fancier apartment.", ko: "아이 리브 인어 비거 앤 팬시어 어파트먼트" },
          { en: "It has three bedrooms, a kitchen, a living room, and a bathroom.", ko: "잇 해즈 쓰리 베드룸즈, 어 키친, 어 리빙룸, 앤 어 배쓰룸" },
          { en: "And guess what? We have beds now!", ko: "앤 게스왓? 위 해브 베즈 나우" },
          { en: "I can get a more comfortable sleep on the bed than before.", ko: "아이 캔 게러 모어 컴퍼러블 슬립 온더 베드 댄 비포어" },
          { en: "Plus, we even have built-in furniture like walk-in closets and drawers.", ko: "플러스, 위 이븐 해브 빌트인 퍼니처 라이크 워킨 클로짓츠 앤 드로어즈" },
          { en: "So, my apartment looks neater and more spacious now.", ko: "소, 마이 어파트먼트 룩스 니러 앤 모어 스페이셔스 나우" }
        ],
        warnings: [
          { word: "used to", guide: "유스투" }, { word: "stiff back", guide: "스티프 백" },
          { word: "guess what", guide: "게스왓" }, { word: "built-in", guide: "빌트인" },
          { word: "spacious", guide: "스페이셔스" }
        ]
      },
      {
        id: 44,
        question: "Tell me about one special family memory that placed at home. Maybe something funny or surprising happened. Tell me about that day or the moment that you remember when you think about spending time with your family.",
        translation: "집에서 있었던 특별한 가족 추억에 대해 말해 주세요. 재미있거나 놀라운 일이 있었을 수도 있어요. 가족과 시간을 보낼 때 떠오르는 그날이나 순간에 대해 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["작년 크리스마스 이브 추억", "휴가 기간", "집에서 파티 계획 + 가족·친구 초대", "닭곰탕 요리 결심", "처음 요리라 순조로웠음", "마지막에 설탕/소금 실수", "수습 실패", "결국 피자+치킨 배달", "아쉬운 크리스마스"],
        script: [
          { en: "Let me tell you about a memory from last Christmas Eve.", ko: "지난 크리스마스 이브의 추억에 대해 말씀드릴게요." },
          { en: "It was during my vacation.", ko: "휴가 기간이었어요." },
          { en: "At that time, I wanted to have a Christmas party at home, so I invited all of my family and friends.", ko: "그때 집에서 크리스마스 파티를 하고 싶어서, 가족이랑 친구들을 다 초대했어요." },
          { en: "I decided to cook hot chicken soup for the party, since it was cold and the food would make everybody warm.", ko: "파티를 위해 얼큰한 닭곰탕 같은 걸 요리하기로 했어요, 날씨가 추워서 그 음식이 다들 몸을 따뜻하게 해줄 것 같았거든요." },
          { en: "It was my first time cooking hot chicken soup, but everything was okay at first.", ko: "그 음식을 요리하는 게 처음이었는데, 처음엔 다 괜찮았어요." },
          { en: "However, at the last stage, I put in a lot of sugar instead of salt.", ko: "그런데 마지막 단계에서, 소금 대신 설탕을 많이 넣어버렸어요." },
          { en: "So, I tried to add salt to the soup, but it didn't work.", ko: "그래서 소금을 넣어서 수습해보려고 했는데, 안 되더라고요." },
          { en: "The dish was a disaster, and as a result, we had to get pizza and fried chicken delivered.", ko: "결국 요리를 완전히 망쳐서, 결국 피자랑 치킨을 배달시켜야 했어요." },
          { en: "It was a disappointing Christmas dinner.", ko: "정말 아쉬운 크리스마스 저녁이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about a memory from last Christmas Eve.", ko: "렛미 텔유 어바웃 어 메머리 프럼 래스트 크리스마스 이브" },
          { en: "It was during my vacation.", ko: "잇 워즈 듀링 마이 베케이션" },
          { en: "At that time, I wanted to have a Christmas party at home,", ko: "앳 댓 타임, 아이 원티드 투 해브어 크리스마스 파리 앳홈" },
          { en: "so I invited all of my family and friends.", ko: "소 아이 인바이티드 올어브 마이 패밀리 앤 프렌즈" },
          { en: "I decided to cook hot chicken soup for the party,", ko: "아이 디사이디드 투 쿡 핫 치킨 수프 퍼더 파리" },
          { en: "since it was cold and the food would make everybody warm.", ko: "신스 잇 워즈 콜드 앤 더 푸드 우드 메이크 에브리바디 웜" },
          { en: "It was my first time cooking hot chicken soup,", ko: "잇 워즈 마이 퍼스트 타임 쿠킹 핫 치킨 수프" },
          { en: "but everything was okay at first.", ko: "벗 에브리씽 워즈 오케이 앳 퍼스트" },
          { en: "However, at the last stage,", ko: "하우에버, 앳더 래스트 스테이지" },
          { en: "I put in a lot of sugar instead of salt.", ko: "아이 풋인 얼라러브 슈거 인스테더브 솔트" },
          { en: "So, I tried to add salt to the soup,", ko: "소, 아이 트라이드 투 애드 솔트 투더 수프" },
          { en: "but it didn't work.", ko: "벗 잇 디든 워크" },
          { en: "The dish was a disaster,", ko: "더 디쉬 워저 디재스터" },
          { en: "and as a result, we had to get pizza and fried chicken delivered.", ko: "앤 애저 리절트, 위 해드투 겟 피자 앤 프라이드 치킨 딜리버드" },
          { en: "It was a disappointing Christmas dinner.", ko: "잇 워저 디서포인팅 크리스마스 디너" }
        ],
        warnings: [
          { word: "disaster", guide: "디재스터" },
          { word: "instead of", guide: "인스테더브" },
          { word: "delivered", guide: "딜리버드" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 22, emoji: "👨‍👩‍👧", nameKo: "가족 (역할 분담)",
    category: "선택주제",
    questions: [
      {
        id: 60,
        question: "I'd like you to talk about where you live. Tell me about the different responsibilities in your home. Who is responsible for what and how do you get things done?",
        translation: "어디 사는지 말씀해 주세요. 집안의 여러 역할 분담에 대해 얘기해 주세요. 누가 무엇을 담당하고, 어떻게 처리하나요?",
        type: "역할 분담",
        structure: ["아내+아들 하나", "평일엔 다들 바빠서 함께 시간 적음", "저녁·TV도 거의 같이 못함", "주말엔 집안일 분담", "대부분은 아내가 담당", "식사·설거지·청소 등", "아내 항상 피곤함", "나는 쓰레기·분리수거 담당", "귀찮아도 아내 생각해서 함", "아들은 장난감 정리 담당", "힘들어도 가치 있음"],
        script: [
          { en: "I live together with my wife and one son.", ko: "저는 아내와 아들 하나와 함께 살고 있어요." },
          { en: "On weekdays, we don't do many things together because we're all busy.", ko: "평일에는 다들 바빠서 같이 하는 일이 많지 않아요." },
          { en: "We barely have dinner or watch TV together.", ko: "저녁 식사도 같이 하거나 TV를 같이 보는 일도 거의 없어요." },
          { en: "However, on weekends, we share the household chores.", ko: "하지만 주말에는 집안일을 나눠서 해요." },
          { en: "Actually, my wife does most of the household chores.", ko: "사실 집안일 대부분은 아내가 하고 있어요." },
          { en: "For example, she makes meals, does the dishes, cleans up the house, and so on.", ko: "예를 들면 아내가 식사를 준비하고, 설거지하고, 집 청소를 하는 등의 일을 해요." },
          { en: "So, she always feels tired and exhausted.", ko: "그래서 아내는 항상 피곤하고 지쳐 있어요." },
          { en: "I try to help her by taking out the garbage and recycling.", ko: "저는 쓰레기 버리기랑 분리수거를 하면서 아내를 도우려고 해요." },
          { en: "Sometimes, I want to skip them because they're annoying.", ko: "가끔은 귀찮아서 건너뛰고 싶을 때도 있어요." },
          { en: "But when I think of my wife, I have to do them.", ko: "하지만 아내를 생각하면 해야만 해요." },
          { en: "In my son's case, it's his responsibility to put away his toys.", ko: "아들의 경우에는 장난감을 정리하는 게 아들의 역할이에요." },
          { en: "Sometimes, doing household chores is tiring, but it's worth it.", ko: "가끔 집안일이 힘들 때도 있지만, 그럴 만한 가치가 있어요." }
        ],
        pronunciation: [
          { en: "I live together with my wife and one son.", ko: "아이 리브 투게더 윗마이 와이프 앤 원 선" },
          { en: "On weekdays, we don't do many things together", ko: "온 위크데이즈, 위 돈 두 메니 씽즈 투게더" },
          { en: "because we're all busy.", ko: "비커즈 위어 올 비지" },
          { en: "We barely have dinner or watch TV together.", ko: "위 베얼리 해브 디너 오어 왓치 티비 투게더" },
          { en: "However, on weekends, we share the household chores.", ko: "하우에버, 온 위켄즈, 위 셰어 더 하우스홀드 초어즈" },
          { en: "Actually, my wife does most of the household chores.", ko: "액츄얼리, 마이 와이프 더즈 모스트 어브더 하우스홀드 초어즈" },
          { en: "For example, she makes meals, does the dishes,", ko: "퍼 이그잼플, 쉬 메익스 밀즈, 더즈더 디쉬즈" },
          { en: "cleans up the house, and so on.", ko: "클린즈업 더 하우스, 앤 소온" },
          { en: "So, she always feels tired and exhausted.", ko: "소, 쉬 올웨이즈 필즈 타이어드 앤 이그저스티드" },
          { en: "I try to help her by taking out the garbage and recycling.", ko: "아이 트라이 투 헬프허 바이 테이킹아웃 더 가비지 앤 리사이클링" },
          { en: "Sometimes, I want to skip them because they're annoying.", ko: "썸타임즈, 아이 원투 스킵뎀 비커즈 데이어 어노잉" },
          { en: "But when I think of my wife, I have to do them.", ko: "벗 웬 아이 씽커브 마이 와이프, 아이 해브투 두뎀" },
          { en: "In my son's case, it's his responsibility to put away his toys.", ko: "인 마이 선즈 케이스, 잇츠 히즈 리스판서빌러티 투 푸러웨이 히즈 토이즈" },
          { en: "Sometimes, doing household chores is tiring, but it's worth it.", ko: "썸타임즈, 두잉 하우스홀드 초어즈 이즈 타이어링, 벗 잇츠 워쓰잇" }
        ],
        warnings: [
          { word: "household chores", guide: "하우스홀드 초어즈" },
          { word: "exhausted", guide: "이그저스티드" },
          { word: "responsibility", guide: "리스판서빌러티" },
          { word: "worth it", guide: "워쓰잇" }
        ]
      },
      {
        id: 61,
        question: "On a typical day, how do you handle your responsibilities?",
        translation: "평소에는 맡은 역할(집안일)을 어떻게 처리하나요?",
        type: "일상묘사",
        structure: ["평일엔 집안일 거의 안 함", "아침 루틴 + 출근 준비", "퇴근 후 아들과 시간", "주말에 분리수거", "수거 절차: 모으기 → 세척 → 지정장소 → 분리"],
        script: [
          { en: "On a typical day, I don't do much housework, especially on weekdays.", ko: "평소에는, 특히 평일에는 집안일을 많이 하지 않아요." },
          { en: "In the morning, I make the bed as soon as I get up.", ko: "아침에 일어나자마자 침대를 정리해요." },
          { en: "And I get ready for work.", ko: "그리고 출근 준비를 해요." },
          { en: "After work, when I get home, I play with my son.", ko: "퇴근 후 집에 오면 아들이랑 놀아줘요." },
          { en: "On weekends, as I said, I recycle, and I take a few steps to do it.", ko: "주말에는, 말씀드린 대로, 분리수거를 하는데 몇 단계를 거쳐요." },
          { en: "First, I gather all the recyclables such as plastic containers, cans, bottles, and food waste.", ko: "먼저, 플라스틱 용기, 캔, 병, 그리고 음식물 쓰레기 같은 재활용품을 모아요." },
          { en: "Then, for plastic containers, bottles and cans, I usually empty, rinse and dry them.", ko: "그다음, 플라스틱 용기나 병, 캔은 보통 비우고 헹구고 말려요." },
          { en: "After that, I take the recyclables out to the designated area.", ko: "그러고 나서, 재활용품을 지정된 장소로 가지고 나가요." },
          { en: "Finally, I separate them into different bins based on the type.", ko: "마지막으로, 종류별로 다른 통에 나눠 담아요." }
        ],
        pronunciation: [
          { en: "On a typical day, I don't do much housework,", ko: "온 어 티피컬 데이, 아이 돈 두 머치 하우스워크" },
          { en: "especially on weekdays.", ko: "이스페셜리 온 위크데이즈" },
          { en: "In the morning, I make the bed as soon as I get up.", ko: "인더 모닝, 아이 메이크더 베드 애즈 수너즈 아이 게럽" },
          { en: "And I get ready for work.", ko: "앤 아이 겟 레디 퍼 워크" },
          { en: "After work, when I get home, I play with my son.", ko: "애프터 워크, 웨나이 겟 홈, 아이 플레이 윗마이 선" },
          { en: "On weekends, as I said, I recycle,", ko: "온 위켄즈, 애즈 아이 세드, 아이 리사이클" },
          { en: "and I take a few steps to do it.", ko: "앤 아이 테이커 퓨 스텝스 투 두잇" },
          { en: "First, I gather all the recyclables", ko: "퍼스트, 아이 개더 올더 리사이클러블즈" },
          { en: "such as plastic containers, cans, bottles, and food waste.", ko: "서치애즈 플래스틱 컨테이너즈, 캔즈, 바를즈, 앤 푸드 웨이스트" },
          { en: "Then, for plastic containers, bottles and cans,", ko: "덴, 퍼 플래스틱 컨테이너즈, 바를즈 앤 캔즈" },
          { en: "I usually empty, rinse, and dry them.", ko: "아이 유주얼리 엠티, 린스, 앤 드라이 뎀" },
          { en: "After that, I take the recyclables out to the designated area.", ko: "애프터 댓, 아이 테익 더 리사이클러블즈 아웃 투더 데지그네이티드 에리아" },
          { en: "Finally, I separate them into different bins based on the type.", ko: "파이널리, 아이 세퍼레잇 뎀 인투 디퍼런트 빈즈 베이스돈 더 타입" }
        ],
        warnings: [
          { word: "typical", guide: "티피컬" },
          { word: "recyclables", guide: "리사이클러블즈" },
          { word: "designated", guide: "데지그네이티드" },
          { word: "separate", guide: "세퍼레잇" }
        ]
      },
      {
        id: 62,
        question: "Tell me about the responsibilities that you had at home when you were a child. What were you expected to do? How did you handle those responsibilities?",
        translation: "어릴 때 집에서 맡았던 역할에 대해 말해 주세요. 무엇을 하도록 기대받았고, 그 역할을 어떻게 처리했나요?",
        type: "과거 경험",
        structure: ["어릴 때 특별한 역할 없었음", "가끔 엄마 도와드림", "그땐 분리수거법 없어서 다들 그냥 버림", "엄마가 환경 중요하다며 시킴", "분류 도와드리고 고물상에 팔기도 함", "보상으로 용돈 받음", "지금은 법이라 철저히 분리", "안 하면 벌금"],
        script: [
          { en: "When I was a child, I didn't have any particular responsibilities at home.", ko: "어렸을 때는, 집에서 특별히 정해진 책임은 없었어요." },
          { en: "Sometimes, I just helped my mom recycle.", ko: "가끔 엄마가 분리수거하는 걸 도와드리는 정도였어요." },
          { en: "At that time, we didn't have any recycling laws, so many people just threw recyclables away along with regular garbage.", ko: "그때는 분리수거 법이 없어서, 많은 사람들이 재활용품을 그냥 일반 쓰레기랑 같이 버렸어요." },
          { en: "But my mom had me recycle since she thought recycling was very important for the environment.", ko: "하지만 저희 엄마는 분리수거가 환경에 정말 중요하다고 생각해서 저한테 시키셨어요." },
          { en: "I helped my mom separate recyclable items, and sometimes we sold them to a junk shop.", ko: "재활용품 분류하는 걸 도와드렸고, 가끔은 고물상에 팔기도 했어요." },
          { en: "After doing that, my mom gave me some coins as a reward.", ko: "그러고 나면, 엄마가 보상으로 동전을 좀 주셨어요." },
          { en: "Now, I'm still in charge of recycling, and I strictly separate the recyclables from general trash because it's the law.", ko: "지금도 여전히 제가 분리수거를 담당하고 있고, 법이니까 철저하게 재활용품이랑 일반쓰레기를 분리해요." },
          { en: "If I don't recycle, I have to pay a fine.", ko: "분리수거를 안 하면 벌금을 내야 하거든요." }
        ],
        pronunciation: [
          { en: "When I was a child,", ko: "웨나이 워저 차일드" },
          { en: "I didn't have any particular responsibilities at home.", ko: "아이 디든 해브 애니 파티큘러 리스판서빌러티즈 앳홈" },
          { en: "Sometimes, I just helped my mom recycle.", ko: "썸타임즈, 아이 저스트 헬프트 마이 맘 리사이클" },
          { en: "At that time, we didn't have any recycling laws,", ko: "앳 댓 타임, 위 디든 해브 애니 리사이클링 로즈" },
          { en: "so many people just threw recyclables away along with regular garbage.", ko: "소 메니 피플 저스트 쓰루 리사이클러블즈 어웨이 얼롱 윗 레귤러 가비지" },
          { en: "But my mom had me recycle", ko: "벗 마이 맘 해드미 리사이클" },
          { en: "since she thought recycling was very important for the environment.", ko: "신스 쉬 쏫 리사이클링 워즈 베리 임포턴트 퍼 디 인바이런먼트" },
          { en: "I helped my mom separate recyclable items,", ko: "아이 헬프트 마이 맘 세퍼레잇 리사이클러블 아이템즈" },
          { en: "and sometimes we sold them to a junk shop.", ko: "앤 썸타임즈 위 솔드 뎀 투어 정크 샵" },
          { en: "After doing that, my mom gave me some coins as a reward.", ko: "애프터 두잉 댓, 마이 맘 게이브미 썸 코인즈 애저 리워드" },
          { en: "Now, I'm still in charge of recycling,", ko: "나우, 아임 스틸 인 차지 어브 리사이클링" },
          { en: "and I strictly separate the recyclables from general trash because it's the law.", ko: "앤 아이 스트릭틀리 세퍼레잇 더 리사이클러블즈 프럼 제너럴 트래쉬 비커즈 잇츠 더 로" },
          { en: "If I don't recycle, I have to pay a fine.", ko: "이파이 돈 리사이클, 아이 해브투 페이어 파인" }
        ],
        warnings: [
          { word: "responsibilities", guide: "리스판서빌러티즈" },
          { word: "recyclables", guide: "리사이클러블즈" },
          { word: "environment", guide: "인바이런먼트" },
          { word: "strictly", guide: "스트릭틀리" }
        ]
      },
      {
        id: 63,
        question: "Do you remember a specific incident when you did not do your task that you were supposed to do in your childhood? I'd like to know all the details about what happened, what you were supposed to do and why you couldn't do it.",
        translation: "어릴 때 해야 할 일을 하지 않았던 특정 사건이 기억나나요? 무슨 일이 있었는지, 무엇을 해야 했는지, 왜 못했는지 자세히 알고 싶어요.",
        type: "기억에 남는 경험",
        structure: ["중학교 때", "엄마 할머니 댁 하루 출타", "음식물 쓰레기 대신 버려달라 부탁", "처음엔 괜찮았음 + 약속함", "TV 보다가 깜빡 + 잠들어버림", "다음날 집 냄새 심함", "엄마 화남 + 혼남", "이틀 더 냄새 견뎌야 했음", "끔찍한 경험"],
        script: [
          { en: "I had this kind of experience when I was in middle school.", ko: "중학교 때 이런 경험을 한 적이 있어요." },
          { en: "At that time, I was supposed to take out the food waste instead of my mom because she had to visit my grandmother and stay there for one night.", ko: "그때 엄마가 할머니 댁에 하루 가셔야 해서 제가 대신 음식물 쓰레기를 버려야 했어요." },
          { en: "It was a recycling day, so I had to take out the food waste that day.", ko: "마침 분리수거 날이라 그날 꼭 내놓아야 했어요." },
          { en: "At first, everything seemed fine — I promised my mom I would do it.", ko: "처음에는 다 괜찮아 보였어요 — 엄마한테 하겠다고 약속했어요." },
          { en: "However, as I watched my favorite TV show, I totally forgot my task and fell asleep.", ko: "그런데 좋아하는 TV 프로그램을 보다가 완전히 잊어버리고 잠들어 버렸어요." },
          { en: "The next day, when my mom arrived home, the whole house smelled really bad.", ko: "다음 날 엄마가 집에 오셨는데 집 전체에 냄새가 엄청 심했어요." },
          { en: "She got upset and scolded me for not doing it.", ko: "엄마가 화가 나셔서 안 했다고 저를 혼내셨어요." },
          { en: "I felt really sorry, and we had to put up with the smell for another two days.", ko: "정말 미안했고, 이틀을 더 그 냄새를 견뎌야 했어요." },
          { en: "It was a terrible experience.", ko: "정말 끔찍한 경험이었어요." }
        ],
        pronunciation: [
          { en: "I had this kind of experience when I was in middle school.", ko: "아이 해드 디스 카인더브 익스피어리언스 웨나이 워즈 인 미들 스쿨" },
          { en: "At that time, I was supposed to take out the food waste", ko: "앳 댓 타임, 아이 워즈 서포즈드 투 테이카웃 더 푸드 웨이스트" },
          { en: "instead of my mom because she had to visit my grandmother and stay there for one night.", ko: "인스테더브 마이 맘 비커즈 쉬 해드투 비짓 마이 그랜드머더 앤 스테이 데어 퍼 원 나잇" },
          { en: "It was a recycling day, so I had to take out the food waste that day.", ko: "잇 워저 리사이클링 데이, 소 아이 해드투 테이카웃 더 푸드 웨이스트 댓 데이" },
          { en: "At first, everything seemed fine —", ko: "앳 퍼스트, 에브리씽 씸드 파인" },
          { en: "I promised my mom I would do it.", ko: "아이 프라미스트 마이 맘 아이 우드 두잇" },
          { en: "However, as I watched my favorite TV show,", ko: "하우에버, 애즈 아이 워치트 마이 페이버릿 티비 쇼" },
          { en: "I totally forgot my task and fell asleep.", ko: "아이 토탈리 퍼갓 마이 태스크 앤 펠 어슬립" },
          { en: "The next day, when my mom arrived home,", ko: "더 넥스트 데이, 웬 마이 맘 어라이브드 홈" },
          { en: "the whole house smelled really bad.", ko: "더 홀 하우스 스멜드 릴리 배드" },
          { en: "She got upset and scolded me for not doing it.", ko: "쉬 갓 업셋 앤 스콜디드미 퍼 낫 두잉잇" },
          { en: "I felt really sorry, and we had to put up with the smell for another two days.", ko: "아이 펠트 릴리 소리, 앤 위 해드투 풋업 윗더 스멜 퍼 어나더 투 데이즈" },
          { en: "It was a terrible experience.", ko: "잇 워저 테러블 익스피어리언스" }
        ],
        warnings: [
          { word: "supposed to", guide: "서포즈드 투" },
          { word: "totally forgot", guide: "토탈리 퍼갓" },
          { word: "scolded", guide: "스콜디드" },
          { word: "put up with", guide: "풋업 윗" }
        ]
      }
    ]
  },
  {
    id: 3, emoji: "🎵", nameKo: "음악",
    category: "선택주제",
    questions: [
      {
        id: 7,
        question: "What is your favorite music genre? Tell me about your favorite singer.",
        translation: "좋아하는 음악 장르와 가수를 말해 주세요.",
        type: "취미묘사",
        structure: ["힙합 좋아함", "빠른 비트가 좋은 이유", "비트가 신나고 활기차게 만듦", "스트레스 해소·기분 전환", "좋아하는 가수: 박재범", "뛰어난 가창력", "훤칠한 외모+탄탄한 몸", "운동·건강식 즐김", "최근 건강 관련 책 출간"],
        script: [
          { en: "I like all kinds of music, but my favorite kind is hip-hop.", ko: "저는 모든 음악을 좋아하지만, 가장 좋아하는 장르는 힙합이에요." },
          { en: "I like it because of its fast-paced beat.", ko: "빠른 비트 때문에 좋아해요." },
          { en: "The beat makes the music exciting, energetic, and upbeat.", ko: "그 비트가 음악을 신나고 활기차고 경쾌하게 만들어줘요." },
          { en: "Also, whenever I listen to this kind of music, I can relieve stress and cheer myself up.", ko: "또 이런 음악을 들을 때마다 스트레스도 풀리고 기분도 좋아져요." },
          { en: "My favorite singer is Jay Park, who is a famous musician in Korea.", ko: "제가 가장 좋아하는 가수는 박재범인데, 한국에서 유명한 뮤지션이에요." },
          { en: "What I really like about him is that he has excellent singing skills.", ko: "그에 대해 정말 좋아하는 점은 노래 실력이 뛰어나다는 거예요." },
          { en: "Plus, I like his appearance — he's very tall and quite fit.", ko: "게다가 외모도 마음에 드는데, 키가 정말 크고 몸도 탄탄해요." },
          { en: "He enjoys working out and eating healthy food.", ko: "그는 운동하는 걸 좋아하고 건강한 음식을 먹어요." },
          { en: "I heard on the news that he recently published a book about healthy living.", ko: "최근에 건강한 삶에 관한 책을 출간했다는 뉴스를 봤어요." }
        ],
        pronunciation: [
          { en: "I like all kinds of music,", ko: "아이 라이크 올 카인즈 어브 뮤직" },
          { en: "but my favorite kind is hip-hop.", ko: "벗 마이 페이버릿 카인드 이즈 힙합" },
          { en: "I like it because of its fast-paced beat.", ko: "아이 라이킷 비커즈 어브 잇츠 패스트페이스트 비잇" },
          { en: "The beat makes the music exciting,", ko: "더 비잇 메익스 더 뮤직 익사이팅" },
          { en: "energetic, and upbeat.", ko: "에너제틱, 앤 업비잇" },
          { en: "Also, whenever I listen to this kind of music,", ko: "얼소, 웨네버 아이 리슨투 디스 카인드 어브 뮤직" },
          { en: "I can relieve stress and cheer myself up.", ko: "아이 캔 릴리브 스트레스 앤 치어 마이셀프 업" },
          { en: "My favorite singer is Jay Park,", ko: "마이 페이버릿 싱어 이즈 제이박" },
          { en: "who is a famous musician in Korea.", ko: "후이즈어 페이머스 뮤지션 인 코리아" },
          { en: "What I really like about him", ko: "왓 아이 릴리 라이크 어바웃힘" },
          { en: "is that he has excellent singing skills.", ko: "이즈 댓 히 해즈 엑설런트 싱잉 스킬즈" },
          { en: "Plus, I like his appearance —", ko: "플러스, 아이 라이크 히즈 어피어런스" },
          { en: "he's very tall and quite fit.", ko: "히즈 베리 톨 앤 콰이트 핏" },
          { en: "He enjoys working out", ko: "히 인조이즈 워킹아웃" },
          { en: "and eating healthy food.", ko: "앤 이팅 헬씨 푸드" },
          { en: "I heard on the news", ko: "아이 허드 온더 뉴즈" },
          { en: "that he recently published a book about healthy living.", ko: "댓 히 리쓴틀리 퍼블리쉬트어 북 어바웃 헬씨 리빙" }
        ],
        warnings: [
          { word: "fast-paced", guide: "패스트페이스트" },
          { word: "energetic", guide: "에너제틱" },
          { word: "appearance", guide: "어피어런스" },
          { word: "published", guide: "퍼블리쉬트" }
        ]
      },
      {
        id: 8,
        question: "When and where do you go to listen to music? Do you listen to music on the radio or do you go to concert? Tell me different ways to listen to music.",
        translation: "언제, 어디서 음악을 듣나요? 라디오로 듣나요, 아니면 콘서트에 가나요? 음악을 듣는 다양한 방법을 말해 주세요.",
        type: "활동패턴",
        structure: ["거의 매일 들음", "출근길 차 안에서 (약 30분)", "출퇴근 시간 지루함 → 음악이 해결", "자기 전 집에서도 들음", "습관이 됨, 음악 없인 잠 안 옴", "숙면에 도움", "1년에 한 번 아내와 콘서트", "둘 다 힙합 좋아함", "저녁 먹으며 콘서트 얘기"],
        script: [
          { en: "I listen to music almost every day.", ko: "저는 거의 매일 음악을 들어요." },
          { en: "I usually listen to music while I'm commuting to work in my car.", ko: "보통 차로 출근하면서 음악을 들어요." },
          { en: "It usually takes about thirty minutes to get to work, and this commuting time is sometimes really boring.", ko: "출근하는 데 보통 30분 정도 걸리는데, 이 출퇴근 시간이 가끔 정말 지루해요." },
          { en: "Music makes the time go by faster.", ko: "음악을 들으면 시간이 더 빨리 가요." },
          { en: "Sometimes, I listen to music at home before I go to sleep.", ko: "가끔은 자기 전에 집에서 음악을 들어요." },
          { en: "It's become one of my habits, and now I can't fall asleep without music.", ko: "이게 제 습관이 됐는데, 이제는 음악 없이는 잠들 수가 없어요." },
          { en: "I think music helps me fall asleep easily and sleep more deeply.", ko: "음악이 잠드는 데 도움이 되고 더 깊이 잘 수 있게 해주는 것 같아요." },
          { en: "Also, once a year, I go to a concert with my wife.", ko: "또 1년에 한 번은 아내랑 콘서트에 가요." },
          { en: "We both love hip-hop, so we go together.", ko: "둘 다 힙합을 좋아해서 같이 가요." },
          { en: "Afterward, we talk about the concert during dinner.", ko: "그 후에는 저녁을 먹으며 콘서트에 대해 얘기해요." },
          { en: "Yeah, that's about it.", ko: "네, 그게 다예요." }
        ],
        pronunciation: [
          { en: "I listen to music almost every day.", ko: "아이 리슨투 뮤직 올모스트 에브리 데이" },
          { en: "I usually listen to music while I'm commuting to work in my car.", ko: "아이 유주얼리 리슨투 뮤직 와일 아임 커뮤팅 투 워크 인 마이 카" },
          { en: "It usually takes about thirty minutes to get to work,", ko: "잇 유주얼리 테익스 어바웃 써리 미닛츠 투 겟투 워크" },
          { en: "and this commuting time is sometimes really boring.", ko: "앤 디스 커뮤팅 타임 이즈 썸타임즈 릴리 보링" },
          { en: "Music makes the time go by faster.", ko: "뮤직 메익스 더 타임 고바이 패스터" },
          { en: "Sometimes, I listen to music at home before I go to sleep.", ko: "썸타임즈, 아이 리슨투 뮤직 앳홈 비포어 아이 고투 슬립" },
          { en: "It's become one of my habits,", ko: "잇츠 비컴 원어브 마이 해빗츠" },
          { en: "and now I can't fall asleep without music.", ko: "앤 나우 아이 캔트 폴어슬립 위다웃 뮤직" },
          { en: "I think music helps me fall asleep easily and sleep more deeply.", ko: "아이 씽크 뮤직 헬프스미 폴어슬립 이질리 앤 슬립 모어 딥리" },
          { en: "Also, once a year,", ko: "얼소, 원서 이어" },
          { en: "I go to a concert with my wife.", ko: "아이 고투어 칸써트 윗마이 와이프" },
          { en: "We both love hip-hop, so we go together.", ko: "위 보쓰 러브 힙합, 소 위 고 투게더" },
          { en: "Afterward, we talk about the concert during dinner.", ko: "애프터워드, 위 토크 어바웃 더 칸써트 듀링 디너" },
          { en: "Yeah, that's about it.", ko: "예, 댓츠 어바웃 잇" }
        ],
        warnings: [
          { word: "commuting", guide: "커뮤팅" },
          { word: "habits", guide: "해빗츠" },
          { word: "fall asleep", guide: "폴어슬립" },
          { word: "afterward", guide: "애프터워드" }
        ]
      },
      {
        id: 9,
        question: "How did you first become interested in music? What kind of music did you like first? How has your interest in music developed from your childhood until today?",
        translation: "처음 음악에 관심을 갖게 된 계기는 무엇인가요? 처음엔 어떤 음악을 좋아했나요? 어릴 때부터 지금까지 음악에 대한 관심이 어떻게 변화했나요?",
        type: "과거 경험",
        structure: ["중학교 때 처음 관심", "그전엔 음악 잘 몰랐음", "루다가 힙합 콘서트 데려감", "처음엔 지루하고 어려웠음", "시간 지나며 재미+스트레스 해소", "그날 이후 힙합 즐겨 듣기 시작", "지금은 모든 장르 좋아함"],
        script: [
          { en: "I first became interested in music when I was in middle school.", ko: "처음 음악에 관심을 갖게 된 건 중학교 때였어요." },
          { en: "Until then, I didn't know much about music, and I didn't feel like I needed to learn about it.", ko: "그전까지는 음악에 대해 잘 몰랐고, 굳이 배워야겠다는 생각도 없었어요." },
          { en: "One day, my best friend 루다 took me to a hip-hop concert and suggested that I try listening to it.", ko: "어느 날 가장 친한 친구 루다가 힙합 콘서트에 데려가서 한번 들어보라고 권했어요." },
          { en: "At first, I thought it was boring and difficult.", ko: "처음에는 지루하고 어렵다고 생각했어요." },
          { en: "But after a while, I was able to have fun and relieve stress.", ko: "그런데 시간이 좀 지나니까 재밌기도 하고 스트레스도 풀리더라고요." },
          { en: "Since that day, I've enjoyed listening to hip-hop, and now I like all kinds of music, including hip-hop.", ko: "그날 이후로 힙합을 즐겨 듣게 됐고, 이제는 힙합을 포함해서 모든 종류의 음악을 좋아해요." }
        ],
        pronunciation: [
          { en: "I first became interested in music", ko: "아이 퍼스트 비케임 인터레스티드 인 뮤직" },
          { en: "when I was in middle school.", ko: "웨나이 워즈 인 미들 스쿨" },
          { en: "Until then, I didn't know much about music,", ko: "언틸 덴, 아이 디든 노우 머치 어바웃 뮤직" },
          { en: "and I didn't feel like I needed to learn about it.", ko: "앤 아이 디든 필 라이크 아이 니딧투 런 어바웃잇" },
          { en: "One day, my best friend 루다 took me to a hip-hop concert", ko: "원 데이, 마이 베스트 프렌드 루다 툭미 투어 힙합 칸써트" },
          { en: "and suggested that I try listening to it.", ko: "앤 서제스티드 댓 아이 트라이 리스닝 투잇" },
          { en: "At first, I thought it was boring and difficult.", ko: "앳 퍼스트, 아이 쏫 잇 워즈 보링 앤 디피컬트" },
          { en: "But after a while, I was able to have fun and relieve stress.", ko: "벗 애프터러 와일, 아이 워즈 에이블투 해브 펀 앤 릴리브 스트레스" },
          { en: "Since that day, I've enjoyed listening to hip-hop,", ko: "신스 댓 데이, 아이브 인조이드 리스닝 투 힙합" },
          { en: "and now I like all kinds of music, including hip-hop.", ko: "앤 나우 아이 라이크 올 카인즈 어브 뮤직, 인클루딩 힙합" }
        ],
        warnings: [
          { word: "interested", guide: "인터레스티드" },
          { word: "suggested", guide: "서제스티드" },
          { word: "difficult", guide: "디피컬트" },
          { word: "relieve", guide: "릴리브" }
        ]
      },
      {
        id: 10,
        question: "Could you think about a particularly memorable time when you heard a live music? Describe that experience in detail. When was it? Where were you? Who were you with? Who did you hear? What happened? What made that performance so memorable?",
        translation: "라이브 음악을 들었던 특별히 기억에 남는 순간을 떠올려 보세요. 그 경험을 자세히 설명해 주세요. 언제, 어디서, 누구와 있었나요? 누구의 노래였나요? 무슨 일이 있었고, 왜 그 공연이 그렇게 기억에 남았나요?",
        type: "기억에 남는 경험",
        structure: ["2년 전 동탄중앙공원", "혼자 조깅 중", "이상한 라이브 노랫소리 들림", "궁금해서 따라감", "직장 동료가 여친에게 노래 프러포즈", "당황+민망한 상황", "주변인들 웃음", "결국 프러포즈 성공", "공원 갈 때마다 생각남"],
        script: [
          { en: "About two years ago, I had a very memorable experience at Dongtan Central Park.", ko: "약 2년 전, 동탄 중앙공원에서 정말 기억에 남는 경험을 했어요." },
          { en: "At that time, I was jogging alone along the park trail.", ko: "그때 저는 공원 산책로를 따라 혼자 조깅하고 있었어요." },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "갑자기 끔찍한 라이브 노랫소리가 들렸어요." },
          { en: "It was so terrible that I couldn't stand it.", ko: "너무 끔찍해서 참을 수가 없었어요." },
          { en: "I was curious, so I followed the sound.", ko: "궁금해서 그 소리를 따라갔어요." },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "공원 한가운데서 누군가 여자친구에게 노래를 불러주고 있었어요." },
          { en: "And you know what? He was my colleague!", ko: "그런데 있잖아요? 그 사람은 제 직장 동료였어요!" },
          { en: "He was proposing to her by singing!", ko: "노래로 프러포즈를 하고 있었던 거예요!" },
          { en: "Poor her! She looked embarrassed, and I was very ashamed too.", ko: "불쌍한 그녀! 여자친구는 당황한 표정이었고, 저도 너무 민망했어요." },
          { en: "Some people around him were even laughing.", ko: "주변 사람들 중 몇몇은 웃기까지 했어요." },
          { en: "I didn't know why he chose singing as a proposal, but he got a 'yes' in the end.", ko: "왜 하필 노래를 프러포즈 방법으로 골랐는지는 모르겠지만, 결국 그는 '예스'를 받아냈어요." },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "그날 이후로 그 공원에 갈 때마다 그 재밌었던 순간이 떠올라요." }
        ],
        pronunciation: [
          { en: "About two years ago,", ko: "어바웃 투 이어즈어고" },
          { en: "I had a very memorable experience", ko: "아이 해더 베리 메머러블 익스피어리언스" },
          { en: "at Dongtan Central Park.", ko: "앳 동탄 센트럴 파크" },
          { en: "At that time, I was jogging alone", ko: "앳 댓 타임, 아이 워즈 조깅 얼론" },
          { en: "along the park trail.", ko: "얼롱 더 파크 트레일" },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "서든리, 아이 허더 테러블 라이브 뮤직 사운드" },
          { en: "It was so terrible that I couldn't stand it.", ko: "잇 워즈 소 테러블 댓 아이 쿠든트 스탠딧" },
          { en: "I was curious, so I followed the sound.", ko: "아이 워즈 큐리어스, 소 아이 팔로우드 더 사운드" },
          { en: "In the middle of the park,", ko: "인더 미들 어브더 파크" },
          { en: "someone was singing a song to his girlfriend.", ko: "썸원 워즈 싱잉어 송 투 히즈 걸프렌드" },
          { en: "And you know what?", ko: "앤 유 노우 왓" },
          { en: "He was my colleague!", ko: "히 워즈 마이 컬리그" },
          { en: "He was proposing to her by singing!", ko: "히 워즈 프러포징 투허 바이 싱잉" },
          { en: "Poor her!", ko: "푸어 허" },
          { en: "She looked embarrassed,", ko: "쉬 룩트 임배러스트" },
          { en: "and I was very ashamed too.", ko: "앤 아이 워즈 베리 어셰임드 투" },
          { en: "Some people around him were even laughing.", ko: "썸 피플 어라운드힘 워 이븐 래핑" },
          { en: "I didn't know why he chose singing as a proposal,", ko: "아이 디든 노우 와이 히 초우즈 싱잉 애저 프러포절" },
          { en: "but he got a 'yes' in the end.", ko: "벗 히 가더 예스 인디 엔드" },
          { en: "Since that day, whenever I visit the park,", ko: "신스 댓 데이, 웨네버 아이 비짓 더 파크" },
          { en: "I remember that funny moment.", ko: "아이 리멤버 댓 퍼니 모먼트" }
        ],
        warnings: [
          { word: "colleague", guide: "컬리그" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "ashamed", guide: "어셰임드" },
          { word: "proposing", guide: "프러포징" }
        ]
      }
    ]
  },
  {
    id: 17, emoji: "🎬", nameKo: "영화",
    category: "선택주제",
    questions: [
      {
        id: 43,
        question: "Which theater do you go to most often? Where is it located? What does it look like inside and outside? What kinds of movies are usually shown there?",
        translation: "가장 자주 가는 영화관은 어디인가요? 위치는 어디고, 안팎은 어떻게 생겼나요? 어떤 영화들이 주로 상영되나요?",
        type: "장소묘사",
        structure: ["아내와 자주 감상", "CGV, 집에서 5분 거리", "쇼핑몰 안 위치 + 외관 특별할 것 없음", "내부: 매표소 + 스낵바", "다양한 국가 영화 상영", "아내와 좋은 시간, 팝콘"],
        script: [
          { en: "I like all kinds of movies. I usually go to the cinema with my wife.", ko: "저는 모든 장르의 영화를 좋아해요. 보통 아내랑 영화관에 가요." },
          { en: "My favorite theater is CGV. It takes about five minutes on foot from my place.", ko: "제가 가장 좋아하는 영화관은 CGV예요. 저희 집에서 걸어서 5분 정도 걸려요." },
          { en: "It's inside a big shopping mall called Metapolis Mall, so there's not much to say about the outside.", ko: "메타폴리스몰이라는 큰 쇼핑몰 안에 있어서, 외관에 대해서는 딱히 할 말이 없어요." },
          { en: "The first thing you can see is the ticket counter, and a snack stand selling popcorn and other snacks.", ko: "제일 먼저 보이는 건 매표소이고, 팝콘이랑 다른 간식을 파는 스낵바가 있어요." },
          { en: "They show all sorts of movies, like American movies, Korean films, and animated movies.", ko: "미국 영화, 한국 영화, 애니메이션 등 다양한 영화를 상영해요." },
          { en: "My wife and I really enjoy the cinema. She's especially crazy about the popcorn.", ko: "저랑 아내는 영화관에 가는 걸 정말 좋아하는데, 아내는 특히 팝콘을 엄청 좋아해요." },
          { en: "We always have a great time there.", ko: "저희는 그곳에서 항상 좋은 시간을 보내요." }
        ],
        pronunciation: [
          { en: "I like all kinds of movies.", ko: "아이 라이크 올 카인즈 어브 무비즈" },
          { en: "I usually go to the cinema with my wife.", ko: "아이 유주얼리 고투더 시네마 윗마이 와이프" },
          { en: "My favorite theater is CGV.", ko: "마이 페이버릿 씨어터 이즈 씨지브이" },
          { en: "It takes about five minutes on foot from my place.", ko: "잇 테익스 어바웃 파이브 미닛츠 온풋 프럼 마이 플레이스" },
          { en: "It's inside a big shopping mall called Metapolis Mall,", ko: "잇츠 인사이더 빅 샤핑몰 콜드 메타폴리스 몰" },
          { en: "so there's not much to say about the outside.", ko: "소 데어즈 낫 머치 투 세이 어바웃 디 아웃사이드" },
          { en: "The first thing you can see is the ticket counter,", ko: "더 퍼스트 씽 유캔 씨 이즈 더 티켓 카운터" },
          { en: "and a snack stand selling popcorn and other snacks.", ko: "앤어 스낵 스탠드 셀링 팝콘 앤 아더 스낵스" },
          { en: "They show all sorts of movies,", ko: "데이 쇼우 올 소츠 어브 무비즈" },
          { en: "like American movies, Korean films, and animated movies.", ko: "라이크 어메리칸 무비즈, 코리안 필름즈, 앤 애니메이티드 무비즈" },
          { en: "My wife and I really enjoy the cinema.", ko: "마이 와이프 앤 아이 릴리 인조이 더 시네마" },
          { en: "She's especially crazy about the popcorn.", ko: "쉬즈 이스페셜리 크레이지 어바웃 더 팝콘" },
          { en: "We always have a great time there.", ko: "위 올웨이즈 해버 그레잇 타임 데어" }
        ],
        warnings: [
          { word: "on foot", guide: "온풋" },
          { word: "there's not much to say", guide: "데어즈 낫 머치 투 세이" },
          { word: "snack stand", guide: "스낵 스탠드" },
          { word: "especially crazy about", guide: "이스페셜리 크레이지 어바웃" }
        ]
      },
      {
        id: 46,
        question: "What do you usually do before you go to the movies? What do you do after watching a movie?",
        translation: "영화 보러 가기 전에 보통 무엇을 하나요? 영화를 본 후에는 무엇을 하나요?",
        type: "활동패턴",
        structure: ["한 달에 한 번, 주말", "평일엔 바빠서 시간 없음", "친구 LOODA와 함께", "가기 전 전화로 상의", "도착: 티켓+간식", "관람 후 카페에서 수다"],
        script: [
          { en: "I go to the movies about once a month, usually on weekends.", ko: "저는 한 달에 한 번 정도, 보통 주말에 영화를 보러 가요." },
          { en: "On weekdays, I'm busy working, so I don't have enough time to watch a movie.", ko: "평일에는 일하느라 바빠서 영화 볼 시간이 없어요." },
          { en: "I normally go with my best friend, LOODA, because we usually have the same free time.", ko: "보통 가장 친한 친구 루다랑 같이 가는데, 자유 시간이 비슷하기 때문이에요." },
          { en: "Before going to the cinema, I usually call her and discuss when to go, where to go, and what to do at the cinema.", ko: "영화관에 가기 전에 보통 전화해서 언제, 어디로 갈지, 영화관에서 뭘 할지 상의해요." },
          { en: "When we arrive there, we first get tickets and some snacks.", ko: "도착하면 먼저 티켓이랑 간식을 사요." },
          { en: "Then, we watch a movie for about two hours.", ko: "그러고 나서 약 두 시간 동안 영화를 봐요." },
          { en: "After that, we relax at a café, having a chat about the movie.", ko: "그 후에는 카페에서 쉬면서 영화 얘기를 해요." },
          { en: "As you can see, my time at the cinema is not that special, but I always enjoy it.", ko: "보시다시피 영화관에서의 시간이 특별하진 않지만, 항상 즐거워요." }
        ],
        pronunciation: [
          { en: "I go to the movies about once a month,", ko: "아이 고투더 무비즈 어바웃 원스어 먼쓰" },
          { en: "usually on weekends.", ko: "유주얼리 온 위켄즈" },
          { en: "On weekdays,", ko: "온 위크데이즈" },
          { en: "I'm busy working,", ko: "아임 비지 워킹" },
          { en: "so I don't have enough time to watch a movie.", ko: "소 아이 돈 해브 이너프 타임 투 왓치어 무비" },
          { en: "I normally go with my best friend,", ko: "아이 노멀리 고 윗마이 베스트 프렌드" },
          { en: "LOODA,", ko: "루다" },
          { en: "because we usually have the same free time.", ko: "비커즈 위 유주얼리 해브더 세임 프리타임" },
          { en: "Before going to the cinema,", ko: "비포어 고잉 투더 시네마" },
          { en: "I usually call her", ko: "아이 유주얼리 콜허" },
          { en: "and discuss when to go,", ko: "앤 디스커스 웬투고" },
          { en: "where to go,", ko: "웨어투고" },
          { en: "and what to do at the cinema.", ko: "앤 왓투두 앳더 시네마" },
          { en: "When we arrive there,", ko: "웬 위 어라이브 데어" },
          { en: "we first get tickets", ko: "위 퍼스트 겟 티켓츠" },
          { en: "and some snacks.", ko: "앤 썸 스낵스" },
          { en: "Then, we watch a movie", ko: "덴, 위 왓치어 무비" },
          { en: "for about two hours.", ko: "퍼러바웃 투아워즈" },
          { en: "After that, we relax at a café,", ko: "애프터댓, 위 릴랙스 앳어 카페이" },
          { en: "having a chat about the movie.", ko: "해빙어 챗 어바웃 더 무비" },
          { en: "As you can see,", ko: "애즈유캔씨" },
          { en: "my time at the cinema is not that special,", ko: "마이 타임 앳더 시네마 이즈낫 댓 스페셜" },
          { en: "but I always enjoy it.", ko: "벗아이 올웨이즈 인조이잇" }
        ],
        warnings: [
          { word: "once a month", guide: "원스어 먼쓰" },
          { word: "cinema", guide: "시네마 (강세: CI-네마)" },
          { word: "tickets", guide: "티켓츠 (강세: TICK-엣츠)" },
          { word: "café", guide: "카페이 (강세: 뒤 음절 FÉ)" }
        ]
      },
      {
        id: 47,
        question: "Tell me about the last time you went to a movie. What movie did you see, and who were you with? Tell me everything that happened before, during, and after the movie.",
        translation: "최근에 영화를 본 것에 대해 말해 주세요. 무슨 영화를 봤고 누구와 함께였나요? 영화 전후로 있었던 일을 자세히 말해 주세요.",
        type: "최근 경험",
        structure: ["2주 전, 친구 진우", "'Hope' 관람 결정", "메가박스 (회사 근처)", "붐벼서 약간 짜증", "티켓+간식 구매", "외계인 만나는 사람들 이야기", "특수효과에 감명", "카페에서 수다", "좋은 시간이었음"],
        script: [
          { en: "The last time I went to a movie was two weeks ago.", ko: "제가 마지막으로 영화를 본 건 2주 전이에요." },
          { en: "At that time, my friend 진우 wanted to do something fun, so we decided to watch a movie titled 'Hope.'", ko: "그때 친구 진우가 재미있는 걸 하고 싶어 해서 'Hope'라는 영화를 보기로 했어요." },
          { en: "We went to Megabox. It was near my company.", ko: "메가박스에 갔는데, 회사 근처에 있어요." },
          { en: "The cinema was very crowded, especially with many young people, so I was a bit annoyed.", ko: "영화관이 특히 젊은 사람들로 붐벼서 조금 짜증이 났어요." },
          { en: "As soon as we arrived there, we first got tickets and some snacks.", ko: "도착하자마자 먼저 티켓이랑 간식을 샀어요." },
          { en: "Then, we watched the movie for about two hours.", ko: "그러고 나서 약 두 시간 동안 영화를 봤어요." },
          { en: "It was about some people who encounter aliens.", ko: "외계인을 만나는 사람들에 관한 이야기였어요." },
          { en: "The movie was awesome! I was especially impressed by the amazing special effects.", ko: "영화가 정말 좋았어요! 특히 놀라운 특수효과에 감명받았어요." },
          { en: "After that, we relaxed at a café and chatted about the movie.", ko: "그 후에는 카페에서 쉬면서 영화 얘기를 나눴어요." },
          { en: "Well, it was such a great time!", ko: "정말 좋은 시간이었어요!" }
        ],
        pronunciation: [
          { en: "The last time I went to a movie was two weeks ago.", ko: "더 래스트 타임 아이 웬투어 무비 워즈 투 윅스어고" },
          { en: "At that time, my friend 진우 wanted to do something fun,", ko: "앳댓 타임, 마이 프렌드 진우 원티드 투두 썸씽 펀" },
          { en: "so we decided to watch a movie titled 'Hope.'", ko: "소 위 디사이디드 투 왓치어 무비 타이틀드 호프" },
          { en: "We went to Megabox.", ko: "위 웬투 메가박스" },
          { en: "It was near my company.", ko: "잇 워즈 니어 마이 컴퍼니" },
          { en: "The cinema was very crowded,", ko: "더 시네마 워즈 베리 크라우디드" },
          { en: "especially with many young people,", ko: "이스페셜리 윗 매니 영 피플" },
          { en: "so I was a bit annoyed.", ko: "소 아이 워저 빗 어노이드" },
          { en: "As soon as we arrived there,", ko: "애즈 순애즈 위 어라이브드 데어" },
          { en: "we first got tickets and some snacks.", ko: "위 퍼스트 갓 티켓츠 앤 썸 스낵스" },
          { en: "Then, we watched the movie for about two hours.", ko: "덴, 위 왓치트 더 무비 퍼러바웃 투아워즈" },
          { en: "It was about some people who encounter aliens.", ko: "잇 워즈 어바웃 썸 피플 후 인카운터 에일리언즈" },
          { en: "The movie was awesome!", ko: "더 무비 워즈 오섬" },
          { en: "I was especially impressed by the amazing special effects.", ko: "아이 워즈 이스페셜리 임프레스트 바이디 어메이징 스페셜 이펙츠" },
          { en: "After that, we relaxed at a café", ko: "애프터댓, 위 릴랙스트 앳어 카페이" },
          { en: "and chatted about the movie.", ko: "앤 챗티드 어바웃 더 무비" },
          { en: "Well, it was such a great time!", ko: "웰, 잇 워즈 서치어 그레잇 타임" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "encounter aliens", guide: "인카운터 에일리언즈" },
          { word: "special effects", guide: "스페셜 이펙츠" },
          { word: "impressed", guide: "임프레스트" }
        ]
      },
      {
        id: 48,
        question: "Have you heard about anything about your favorite actor from news or newspaper? It could be either harmful or good things to the actor or actress. What have you heard and how did you feel about that? Have your interest of the actor or actress changed after hearing that news?",
        translation: "가장 좋아하는 배우에 대해 뉴스나 신문에서 무언가를 들은 적이 있나요? 그 배우에게 해가 되는 것이든 좋은 것이든 상관없어요. 무엇을 들었고 그것에 대해 어떻게 느꼈나요? 그 뉴스를 들은 후 그 배우에 대한 관심이 변했나요?",
        type: "최근 소식",
        structure: ["가장 좋아하는 배우: 하정우", "영화 '황해' 보고 팬이 됨", "예전엔 외모 신경 안씀+통통했음", "최근 다이어트 소식 들음", "건강한 식단 노력", "하루 4시간 운동", "더 관심 갖고 존경하게 됨", "항상 응원할 것"],
        script: [
          { en: "I'd like to tell you about my favorite movie star, 하정우.", ko: "제가 가장 좋아하는 영화배우 하정우에 대해 말씀드리고 싶습니다." },
          { en: "I first became his fan when I watched his movie called 황해.", ko: "저는 처음에 그의 영화 황해를 보고 그의 팬이 되었습니다." },
          { en: "When he just started acting, he didn't care about his looks. He used to be a bit chubby.", ko: "막 연기를 시작했을 때, 그는 그의 외모에 신경 쓰지 않았어요. 그 사람은 원래 좀 통통했어요." },
          { en: "However, I heard he recently went on a diet.", ko: "하지만 최근에 다이어트를 시작했다고 들었어요." },
          { en: "The news said he tried to get in shape and eat healthy, balanced meals.", ko: "그 뉴스는 그가 건강을 유지하고 건강하고 균형 잡힌 음식을 먹으려고 노력했다고 말했습니다." },
          { en: "He also started exercising, working out for four hours a day.", ko: "운동도 시작했고, 하루에 4시간씩 운동을 했습니다." },
          { en: "After I heard the news, I became more interested in him and started admiring him.", ko: "그 뉴스를 들은 후, 저는 그에게 더 많은 관심을 갖게 되었고 그를 존경하기 시작했습니다." },
          { en: "I think I will always cheer for him no matter what he does.", ko: "저는 그가 무엇을 하든 항상 응원할 것이라고 생각합니다." }
        ],
        pronunciation: [
          { en: "I'd like to tell you about my favorite movie star, 하정우.", ko: "아이드 라익투 텔유 어바웃 마이 페이버릿 무비 스타, 하정우" },
          { en: "I first became his fan when I watched his movie called 황해.", ko: "아이 퍼스트 비케임 히즈 팬 웨나이 왓치트 히즈 무비 콜드 황해" },
          { en: "When he just started acting, he didn't care about his looks.", ko: "웬히 저스트 스타티드 액팅, 히 디든 케어 어바웃 히즈 룩스" },
          { en: "He used to be a bit chubby.", ko: "히 유스투비 어 빗 처비" },
          { en: "However, I heard he recently went on a diet.", ko: "하우에버, 아이 허드 히 리쓴틀리 웬 온어 다이엇" },
          { en: "The news said he tried to get in shape and eat healthy, balanced meals.", ko: "더 뉴즈 세드 히 트라이드 투 겟인 셰입 앤 잇 헬씨, 밸런스트 밀즈" },
          { en: "He also started exercising, working out for four hours a day.", ko: "히 얼소 스타티드 엑서사이징, 워킹아웃 퍼 포어 아워즈어 데이" },
          { en: "After I heard the news, I became more interested in him and started admiring him.", ko: "애프터 아이 허드 더 뉴즈, 아이 비케임 모어 인터레스티드 인힘 앤 스타티드 어드마이어링 힘" },
          { en: "I think I will always cheer for him no matter what he does.", ko: "아이 씽크 아이 윌 올웨이즈 치어 퍼힘 노 매러 왓 히 더즈" }
        ],
        warnings: [
          { word: "chubby", guide: "처비" },
          { word: "get in shape", guide: "겟인 셰입" },
          { word: "balanced", guide: "밸런스트" },
          { word: "admiring", guide: "어드마이어링" }
        ]
      }
    ]
  },
  {
    id: 2, emoji: "♻️", nameKo: "분리수거",
    category: "선택주제",
    questions: [
      {
        id: "5a",
        question: "Tell me about recycling in your country. How do people recycle? What are some things that are recycled in your country?",
        translation: "당신 나라의 재활용에 대해 말해 주세요. 사람들은 어떻게 재활용하나요? 어떤 것들을 재활용하나요?",
        type: "일반 설명",
        structure: ["한국은 재활용이 법", "플라스틱·종이·알루미늄·캔·유리 재활용", "라벨된 통에 분리해서 배출", "지역마다 시간·장소 다름", "음식물쓰레기도 재활용 (퇴비용 분리)", "재활용품은 회사로 가서 재생산됨", "환경보호를 위해 중요"],
        script: [
          { en: "In Korea, recycling is the law.", ko: "한국에서는 분리수거가 법으로 정해져 있어요." },
          { en: "As for recyclable items, we recycle plastic, paper, aluminum, cans and glass.", ko: "재활용 품목으로는 플라스틱, 종이, 알루미늄, 캔, 유리를 재활용해요." },
          { en: "We separate the materials carefully and put them in different labeled bins.", ko: "재료들을 꼼꼼하게 분류해서 라벨이 붙은 각기 다른 통에 넣어요." },
          { en: "Recycling time and place can be different depending on the areas.", ko: "재활용 시간과 장소는 지역마다 다를 수 있어요." },
          { en: "Also, we can recycle food waste in Korea.", ko: "또한 한국에서는 음식물 쓰레기도 재활용할 수 있어요." },
          { en: "We must separate it from other wastes for compost.", ko: "퇴비화를 위해 다른 쓰레기와 분리해야 해요." },
          { en: "The recycled things are delivered to different companies, and they are reproduced into other kinds of stuff that we can use in our lives.", ko: "재활용된 것들은 여러 회사로 보내져서, 우리가 생활에서 쓸 수 있는 다른 종류의 물건으로 재생산돼요." },
          { en: "I think recycling is very important because it is one of the ways to protect our environment.", ko: "분리수거가 환경을 보호하는 방법 중 하나라서 정말 중요하다고 생각해요." }
        ],
        pronunciation: [
          { en: "In Korea, recycling is the law.", ko: "인 코리아, 리사이클링 이즈 더 로" },
          { en: "As for recyclable items,", ko: "애즈 퍼 리사이클러블 아이템즈" },
          { en: "we recycle plastic, paper, aluminum, cans and glass.", ko: "위 리사이클 플래스틱, 페이퍼, 얼루미넘, 캔즈 앤 글래스" },
          { en: "We separate the materials carefully", ko: "위 세퍼레잇 더 머티리얼즈 케어풀리" },
          { en: "and put them in different labeled bins.", ko: "앤 풋뎀 인 디퍼런트 레이블드 빈즈" },
          { en: "Recycling time and place can be different depending on the areas.", ko: "리사이클링 타임 앤 플레이스 캔비 디퍼런트 디펜딩 온디 에리어즈" },
          { en: "Also, we can recycle food waste in Korea.", ko: "얼소, 위캔 리사이클 푸드 웨이스트 인 코리아" },
          { en: "We must separate it from other wastes for compost.", ko: "위 머스트 세퍼레잇 잇 프럼 아더 웨이스츠 퍼 컴포스트" },
          { en: "The recycled things are delivered to different companies,", ko: "더 리사이클드 씽즈 아 딜리버드 투 디퍼런트 컴퍼니즈" },
          { en: "and they are reproduced into other kinds of stuff that we can use in our lives.", ko: "앤 데이 아 리프로듀스트 인투 아더 카인즈 어브 스터프 댓 위 캔 유즈 인 아워 라이브즈" },
          { en: "I think recycling is very important", ko: "아이 씽크 리사이클링 이즈 베리 임포턴트" },
          { en: "because it is one of the ways to protect our environment.", ko: "비커즈 이리즈 원어브 더 웨이즈 투 프러텍트 아워 인바이런먼트" }
        ],
        warnings: [
          { word: "recyclable", guide: "리사이클러블" },
          { word: "aluminum", guide: "얼루미넘" },
          { word: "compost", guide: "컴포스트" },
          { word: "environment", guide: "인바이런먼트" }
        ]
      },
      {
        id: "5b",
        question: "(콤보 후속) Also, does recycling differ depending on where you live in your country?",
        translation: "(후속 질문) 나라마다 혹은 지역마다 재활용 방식이 다른가요?",
        type: "콤보 후속질문"
      },
      {
        id: 5,
        question: "How do you recycle? What do you usually recycle? Describe your typical routine for recycling at home.",
        translation: "어떻게 분리수거 하나요? 평소 절차를 설명해 주세요.",
        type: "일상묘사",
        structure: ["평일엔 집안일 거의 안 함", "아침 루틴 + 출근 준비", "퇴근 후 아들과 시간", "주말에 분리수거", "수거 절차: 모으기 → 세척 → 지정장소 → 분리"],
        script: [
          { en: "On a typical day, I don't do much housework, especially on weekdays.", ko: "평소에는, 특히 평일에는 집안일을 많이 하지 않아요." },
          { en: "In the morning, I make the bed as soon as I get up.", ko: "아침에 일어나자마자 침대를 정리해요." },
          { en: "And I get ready for work.", ko: "그리고 출근 준비를 해요." },
          { en: "After work, when I get home, I play with my son.", ko: "퇴근 후 집에 오면 아들이랑 놀아줘요." },
          { en: "On weekends, as I said, I recycle, and I take a few steps to do it.", ko: "주말에는, 말씀드린 대로, 분리수거를 하는데 몇 단계를 거쳐요." },
          { en: "First, I gather all the recyclables such as plastic containers, cans, bottles, and food waste.", ko: "먼저, 플라스틱 용기, 캔, 병, 그리고 음식물 쓰레기 같은 재활용품을 모아요." },
          { en: "Then, for plastic containers, bottles and cans, I usually empty, rinse and dry them.", ko: "그다음, 플라스틱 용기나 병, 캔은 보통 비우고 헹구고 말려요." },
          { en: "After that, I take the recyclables out to the designated area.", ko: "그러고 나서, 재활용품을 지정된 장소로 가지고 나가요." },
          { en: "Finally, I separate them into different bins based on the type.", ko: "마지막으로, 종류별로 다른 통에 나눠 담아요." }
        ],
        pronunciation: [
          { en: "On a typical day, I don't do much housework,", ko: "온 어 티피컬 데이, 아이 돈 두 머치 하우스워크" },
          { en: "especially on weekdays.", ko: "이스페셜리 온 위크데이즈" },
          { en: "In the morning, I make the bed as soon as I get up.", ko: "인더 모닝, 아이 메이크더 베드 애즈 수너즈 아이 게럽" },
          { en: "And I get ready for work.", ko: "앤 아이 겟 레디 퍼 워크" },
          { en: "After work, when I get home, I play with my son.", ko: "애프터 워크, 웨나이 겟 홈, 아이 플레이 윗마이 선" },
          { en: "On weekends, as I said, I recycle,", ko: "온 위켄즈, 애즈 아이 세드, 아이 리사이클" },
          { en: "and I take a few steps to do it.", ko: "앤 아이 테이커 퓨 스텝스 투 두잇" },
          { en: "First, I gather all the recyclables", ko: "퍼스트, 아이 개더 올더 리사이클러블즈" },
          { en: "such as plastic containers, cans, bottles, and food waste.", ko: "서치애즈 플래스틱 컨테이너즈, 캔즈, 바를즈, 앤 푸드 웨이스트" },
          { en: "Then, for plastic containers, bottles and cans,", ko: "덴, 퍼 플래스틱 컨테이너즈, 바를즈 앤 캔즈" },
          { en: "I usually empty, rinse, and dry them.", ko: "아이 유주얼리 엠티, 린스, 앤 드라이 뎀" },
          { en: "After that, I take the recyclables out to the designated area.", ko: "애프터 댓, 아이 테익 더 리사이클러블즈 아웃 투더 데지그네이티드 에리아" },
          { en: "Finally, I separate them into different bins based on the type.", ko: "파이널리, 아이 세퍼레잇 뎀 인투 디퍼런트 빈즈 베이스돈 더 타입" }
        ],
        warnings: [
          { word: "typical", guide: "티피컬" },
          { word: "recyclables", guide: "리사이클러블즈" },
          { word: "designated", guide: "데지그네이티드" },
          { word: "separate", guide: "세퍼레잇" }
        ]
      },
      {
        id: 6,
        question: "How is recycling when you were young different from what you do today? Are there any big differences? Are there any similarities? Tell me about how recycling has changed over the years.",
        translation: "어릴 때와 지금의 분리수거는 어떻게 다른가요? 큰 차이가 있나요? 비슷한 점도 있나요? 세월이 지나며 분리수거가 어떻게 변했는지 말해 주세요.",
        type: "과거 비교",
        structure: ["어릴 때 특별한 역할 없었음", "가끔 엄마 도와드림", "그땐 분리수거법 없어서 다들 그냥 버림", "엄마가 환경 중요하다며 시킴", "분류 도와드리고 고물상에 팔기도 함", "보상으로 용돈 받음", "지금은 법이라 철저히 분리", "안 하면 벌금"],
        script: [
          { en: "When I was a child, I didn't have any particular responsibilities at home.", ko: "어렸을 때는, 집에서 특별히 정해진 책임은 없었어요." },
          { en: "Sometimes, I just helped my mom recycle.", ko: "가끔 엄마가 분리수거하는 걸 도와드리는 정도였어요." },
          { en: "At that time, we didn't have any recycling laws, so many people just threw recyclables away along with regular garbage.", ko: "그때는 분리수거 법이 없어서, 많은 사람들이 재활용품을 그냥 일반 쓰레기랑 같이 버렸어요." },
          { en: "But my mom had me recycle since she thought recycling was very important for the environment.", ko: "하지만 저희 엄마는 분리수거가 환경에 정말 중요하다고 생각해서 저한테 시키셨어요." },
          { en: "I helped my mom separate recyclable items, and sometimes we sold them to a junk shop.", ko: "재활용품 분류하는 걸 도와드렸고, 가끔은 고물상에 팔기도 했어요." },
          { en: "After doing that, my mom gave me some coins as a reward.", ko: "그러고 나면, 엄마가 보상으로 동전을 좀 주셨어요." },
          { en: "Now, I'm still in charge of recycling, and I strictly separate the recyclables from general trash because it's the law.", ko: "지금도 여전히 제가 분리수거를 담당하고 있고, 법이니까 철저하게 재활용품이랑 일반쓰레기를 분리해요." },
          { en: "If I don't recycle, I have to pay a fine.", ko: "분리수거를 안 하면 벌금을 내야 하거든요." }
        ],
        pronunciation: [
          { en: "When I was a child,", ko: "웨나이 워저 차일드" },
          { en: "I didn't have any particular responsibilities at home.", ko: "아이 디든 해브 애니 파티큘러 리스판서빌러티즈 앳홈" },
          { en: "Sometimes, I just helped my mom recycle.", ko: "썸타임즈, 아이 저스트 헬프트 마이 맘 리사이클" },
          { en: "At that time, we didn't have any recycling laws,", ko: "앳 댓 타임, 위 디든 해브 애니 리사이클링 로즈" },
          { en: "so many people just threw recyclables away along with regular garbage.", ko: "소 메니 피플 저스트 쓰루 리사이클러블즈 어웨이 얼롱 윗 레귤러 가비지" },
          { en: "But my mom had me recycle", ko: "벗 마이 맘 해드미 리사이클" },
          { en: "since she thought recycling was very important for the environment.", ko: "신스 쉬 쏫 리사이클링 워즈 베리 임포턴트 퍼 디 인바이런먼트" },
          { en: "I helped my mom separate recyclable items,", ko: "아이 헬프트 마이 맘 세퍼레잇 리사이클러블 아이템즈" },
          { en: "and sometimes we sold them to a junk shop.", ko: "앤 썸타임즈 위 솔드 뎀 투어 정크 샵" },
          { en: "After doing that, my mom gave me some coins as a reward.", ko: "애프터 두잉 댓, 마이 맘 게이브미 썸 코인즈 애저 리워드" },
          { en: "Now, I'm still in charge of recycling,", ko: "나우, 아임 스틸 인 차지 어브 리사이클링" },
          { en: "and I strictly separate the recyclables from general trash because it's the law.", ko: "앤 아이 스트릭틀리 세퍼레잇 더 리사이클러블즈 프럼 제너럴 트래쉬 비커즈 잇츠 더 로" },
          { en: "If I don't recycle, I have to pay a fine.", ko: "이파이 돈 리사이클, 아이 해브투 페이어 파인" }
        ],
        warnings: [
          { word: "responsibilities", guide: "리스판서빌러티즈" },
          { word: "recyclables", guide: "리사이클러블즈" },
          { word: "environment", guide: "인바이런먼트" },
          { word: "strictly", guide: "스트릭틀리" }
        ]
      },
      {
        id: "6b",
        question: "Now, tell me about a memorable or an unexpected incident regarding recycling. What exactly happened and how did you deal with the situation? Tell me everything that you did from beginning to end.",
        translation: "분리수거와 관련한 기억에 남는 경험을 말해 주세요. 정확히 무슨 일이 있었고, 그 상황을 어떻게 해결했나요? 처음부터 끝까지 무엇을 했는지 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["중학교 때", "엄마 할머니 댁 하루 출타", "음식물 쓰레기 대신 버려달라 부탁", "처음엔 괜찮았음 + 약속함", "TV 보다가 깜빡 + 잠들어버림", "다음날 집 냄새 심함", "엄마 화남 + 혼남", "이틀 더 냄새 견뎌야 했음", "끔찍한 경험"],
        script: [
          { en: "I had this kind of experience when I was in middle school.", ko: "중학교 때 이런 경험을 한 적이 있어요." },
          { en: "At that time, I was supposed to take out the food waste instead of my mom because she had to visit my grandmother and stay there for one night.", ko: "그때 엄마가 할머니 댁에 하루 가셔야 해서 제가 대신 음식물 쓰레기를 버려야 했어요." },
          { en: "It was a recycling day, so I had to take out the food waste that day.", ko: "마침 분리수거 날이라 그날 꼭 내놓아야 했어요." },
          { en: "At first, everything seemed fine — I promised my mom I would do it.", ko: "처음에는 다 괜찮아 보였어요 — 엄마한테 하겠다고 약속했어요." },
          { en: "However, as I watched my favorite TV show, I totally forgot my task and fell asleep.", ko: "그런데 좋아하는 TV 프로그램을 보다가 완전히 잊어버리고 잠들어 버렸어요." },
          { en: "The next day, when my mom arrived home, the whole house smelled really bad.", ko: "다음 날 엄마가 집에 오셨는데 집 전체에 냄새가 엄청 심했어요." },
          { en: "She got upset and scolded me for not doing it.", ko: "엄마가 화가 나셔서 안 했다고 저를 혼내셨어요." },
          { en: "I felt really sorry, and we had to put up with the smell for another two days.", ko: "정말 미안했고, 이틀을 더 그 냄새를 견뎌야 했어요." },
          { en: "It was a terrible experience.", ko: "정말 끔찍한 경험이었어요." }
        ],
        pronunciation: [
          { en: "I had this kind of experience when I was in middle school.", ko: "아이 해드 디스 카인더브 익스피어리언스 웨나이 워즈 인 미들 스쿨" },
          { en: "At that time, I was supposed to take out the food waste", ko: "앳 댓 타임, 아이 워즈 서포즈드 투 테이카웃 더 푸드 웨이스트" },
          { en: "instead of my mom because she had to visit my grandmother and stay there for one night.", ko: "인스테더브 마이 맘 비커즈 쉬 해드투 비짓 마이 그랜드머더 앤 스테이 데어 퍼 원 나잇" },
          { en: "It was a recycling day, so I had to take out the food waste that day.", ko: "잇 워저 리사이클링 데이, 소 아이 해드투 테이카웃 더 푸드 웨이스트 댓 데이" },
          { en: "At first, everything seemed fine —", ko: "앳 퍼스트, 에브리씽 씸드 파인" },
          { en: "I promised my mom I would do it.", ko: "아이 프라미스트 마이 맘 아이 우드 두잇" },
          { en: "However, as I watched my favorite TV show,", ko: "하우에버, 애즈 아이 워치트 마이 페이버릿 티비 쇼" },
          { en: "I totally forgot my task and fell asleep.", ko: "아이 토탈리 퍼갓 마이 태스크 앤 펠 어슬립" },
          { en: "The next day, when my mom arrived home,", ko: "더 넥스트 데이, 웬 마이 맘 어라이브드 홈" },
          { en: "the whole house smelled really bad.", ko: "더 홀 하우스 스멜드 릴리 배드" },
          { en: "She got upset and scolded me for not doing it.", ko: "쉬 갓 업셋 앤 스콜디드미 퍼 낫 두잉잇" },
          { en: "I felt really sorry, and we had to put up with the smell for another two days.", ko: "아이 펠트 릴리 소리, 앤 위 해드투 풋업 윗더 스멜 퍼 어나더 투 데이즈" },
          { en: "It was a terrible experience.", ko: "잇 워저 테러블 익스피어리언스" }
        ],
        warnings: [
          { word: "supposed to", guide: "서포즈드 투" },
          { word: "totally forgot", guide: "토탈리 퍼갓" },
          { word: "scolded", guide: "스콜디드" },
          { word: "put up with", guide: "풋업 윗" }
        ]
      }
    ]
  },
  {
    id: 23, emoji: "🏘️", nameKo: "동네",
    category: "돌발주제",
    questions: [
      {
        id: 3,
        question: "Tell me about the problems that happened at your home. How did you resolve them?",
        translation: "집에서 생긴 문제와 해결 방법을 말해 주세요.",
        type: "문제 해결",
        structure: ["층간소음 문제 발생", "점점 불편해짐", "직접 이웃과 대화", "관리사무소 요청", "완벽하지 않지만 개선", "느낀 점"],
        script: [
          { en: "Well, one of the most memorable problems we had at home was noise from upstairs.", ko: "우리 집에서 가장 기억에 남는 문제는 위층 소음이었습니다." },
          { en: "After we moved in, we sometimes heard kids running around, and honestly, it started to bother us a little.", ko: "이사 온 이후로 아이들이 뛰는 소리가 가끔 들렸고, 솔직히 조금씩 신경이 쓰이기 시작했습니다." },
          { en: "At first, we tried not to make a big deal out of it, but over time, it became uncomfortable.", ko: "처음에는 크게 문제 삼지 않으려고 했지만, 시간이 지나면서 점점 불편해졌습니다." },
          { en: "So I decided to talk to my upstairs neighbor and tried to understand their situation too.", ko: "그래서 저는 위층 이웃에게 이야기를 나누고, 그들의 입장도 이해하려고 노력했습니다." },
          { en: "I also told the apartment office, and they made an announcement about the noise.", ko: "또한 관리사무소에 이야기했고, 그들이 소음에 대해 공지를 했습니다." },
          { en: "It wasn't a perfect solution, but things got a lot better after that.", ko: "완벽한 해결은 아니었지만, 이후로 상황이 많이 나아졌습니다." },
          { en: "Through that experience, I realized how important communication with neighbors really is.", ko: "그 경험을 통해 이웃과의 소통이 얼마나 중요한지 깨닫게 되었습니다." }
        ],
        pronunciation: [
          { en: "Well, one of the most memorable problems we had at home", ko: "웰, 원어브더 모스트 메머러블 프라블럼즈 위 해댓 홈" },
          { en: "was noise from upstairs.", ko: "워즈 노이즈 프럼 업스테어즈" },
          { en: "After we moved in, we sometimes heard kids running around,", ko: "애프터 위 무브딘, 위 썸타임즈 허드 키즈 러닝어라운" },
          { en: "and honestly, it started to bother us a little.", ko: "앤 아너슬리, 잇 스타러드러 바더러스 어 리럴" },
          { en: "At first, we tried not to make a big deal out of it,", ko: "앳 퍼스트, 위 트라잇 낫투 메이커 빅 디러라우러빗" },
          { en: "but over time, it became uncomfortable.", ko: "벗 오버타임, 잇 비케임 언컴퍼러블" },
          { en: "So I decided to talk to my upstairs neighbor", ko: "소 아이 디사이러투 톡투 마이 업스테어즈 네이버" },
          { en: "and tried to understand their situation too.", ko: "앤 트라잇투 언더스탠 데어 시츄에이션 투" },
          { en: "I also told the apartment office,", ko: "아이 얼소 톨더 어파트먼 오피스" },
          { en: "and they made an announcement about the noise.", ko: "앤 데이 메이던 어나운스먼트 어바웃 더 노이즈" },
          { en: "It wasn't a perfect solution, but things got a lot better after that.", ko: "잇 워즌터 퍼펙 솔루션, 벗 씽즈 가러 라러브 베러 애프터 댓" },
          { en: "Through that experience, I realized how important communication with neighbors really is.", ko: "쓰루 댓 익스피어리언스, 아이 리얼라이즈 하우 임포턴트 커뮤니케이션 윗 네이버즈 릴리 이즈" }
        ],
        warnings: [
          { word: "memorable", guide: "메머러블" }, { word: "bother", guide: "바더" },
          { word: "deal out of", guide: "디러라우러브" }, { word: "comfortable", guide: "컴퍼러블" },
          { word: "announcement", guide: "어나운스먼트" }, { word: "wasn't", guide: "워즌트" }
        ]
      },
      {
        id: 4,
        question: "What is your neighborhood like? Where is it located? What amenities are there?",
        translation: "동네는 어떤가요? 어디에 있나요? 어떤 편의시설이 있나요?",
        type: "장소묘사",
        structure: ["동탄 거주", "2층이라 아이와 다니기 편함", "조용한 주거 지역 + 편의시설", "공원 + 주말 아들과 산책", "회사 도보 15분", "살기 좋다는 마무리"],
        script: [
          { en: "Well, I live in Dongtan, which is a fairly new residential area south of Seoul.", ko: "저는 동탄에 살고 있는데, 서울 남쪽에 있는 꽤 새로운 주거 지역이에요." },
          { en: "I recently moved into a new house there, and honestly, living on the second floor makes things so much easier, especially with my son.", ko: "최근에 그곳에 새 집으로 이사했는데, 솔직히 2층이라 특히 아들이랑 드나들기 훨씬 편해요." },
          { en: "The neighborhood is pretty quiet and residential, but you know, it has everything you need for daily life.", ko: "동네는 꽤 조용한 주거 지역인데, 일상생활에 필요한 건 다 갖춰져 있어요." },
          { en: "There are convenience stores, a supermarket, and some nice cafes nearby.", ko: "근처에 편의점, 마트, 카페들이 있어요." },
          { en: "Plus, there's a park close by, so I often take my son there on weekends.", ko: "게다가 공원도 가까워서 주말에 아들 데리고 자주 나가요." },
          { en: "And honestly, my commute is great too — my office is about a 15-minute walk from home.", ko: "그리고 솔직히 출퇴근도 좋아요. 회사가 집에서 걸어서 15분 거리거든요." },
          { en: "Overall, I'd say it's a really comfortable and easy place to live.", ko: "전반적으로 정말 편하고 살기 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "Well, I live in Dongtan,", ko: "웰, 아이 리브 인 동탄" },
          { en: "which is a fairly new residential area south of Seoul.", ko: "위치즈어 페얼리 뉴 레지덴셜 에리아 사우쓰 어브 서울" },
          { en: "I recently moved into a new house there,", ko: "아이 리쓴틀리 무브딘투어 뉴 하우스 데어" },
          { en: "and honestly, living on the second floor makes things so much easier,", ko: "앤 아너슬리, 리빙 온더 세컨 플로어 메잌스 씽즈 소 머치 이지어" },
          { en: "especially with my son.", ko: "이스페셜리 윗마이 선" },
          { en: "The neighborhood is pretty quiet and residential,", ko: "더 네이버후드 이즈 프리리 콰이엇 앤 레지덴셜" },
          { en: "but you know, it has everything you need for daily life.", ko: "벗 유노우, 잇 해즈 에브리씽 유 니드 퍼 데일리 라이프" },
          { en: "There are convenience stores, a supermarket, and some nice cafes nearby.", ko: "데어러 컨비니언스 스토어즈, 어 수퍼마켓, 앤 썸 나이스 카페즈 니어바이" },
          { en: "Plus, there's a park close by,", ko: "플러스, 데어즈어 파크 클로즈바이" },
          { en: "so I often take my son there on weekends.", ko: "소 아이 오픈 테이크 마이 선 데어 온 위켄즈" },
          { en: "And honestly, my commute is great too —", ko: "앤 아너슬리, 마이 커뮤트 이즈 그레잇 투" },
          { en: "my office is about a 15-minute walk from home.", ko: "마이 오피스 이즈 어바웃 어 피프틴-미닛 워크 프럼 홈" },
          { en: "Overall, I'd say it's a really comfortable and easy place to live.", ko: "오버롤, 아이드 세이 잇츠어 릴리 컴퍼러블 앤 이지 플레이스 투 리브" }
        ],
        warnings: [
          { word: "residential", guide: "레지덴셜" },
          { word: "especially", guide: "이스페셜리" },
          { word: "neighborhood", guide: "네이버후드" },
          { word: "convenience", guide: "컨비니언스" },
          { word: "comfortable", guide: "컴퍼러블" }
        ]
      }
    ]
  },
  {
    id: 24, emoji: "☕", nameKo: "카페",
    category: "선택주제",
    questions: [
      {
        id: 70,
        question: "Tell me what cafes and coffee houses typically look like in your community.",
        translation: "우리 동네의 카페와 커피숍이 일반적으로 어떤 모습인지 말해 주세요.",
        type: "일반 설명",
        structure: ["한국 카페는 상업지역 위치", "스타벅스·커피빈·탐앤탐스 등 대형 체인", "좌석 많고 넓음", "카운터에서 주문+픽업", "카운터 뒤 메뉴판", "카운터 옆 디저트·스낵", "직원 친절 + 따뜻한 분위기"],
        script: [
          { en: "Cafes in Korea are usually located in commercial areas.", ko: "한국 카페는 주로 상업 지역에 위치해 있어요." },
          { en: "We have many major coffee chains like Starbucks, Coffee Bean, and Tom N Toms.", ko: "스타벅스, 커피빈, 탐앤탐스 같은 대형 커피 체인점이 많아요." },
          { en: "These cafes usually have a lot of seating, so you'll be surprised at how spacious they are.", ko: "이런 카페들은 좌석이 많아서 얼마나 넓은지 보면 놀랄 거예요." },
          { en: "When you enter a typical cafe, you'll first see the counter where you can order and pick up your coffee.", ko: "일반적인 카페에 들어가면 먼저 주문하고 픽업할 수 있는 카운터가 보여요." },
          { en: "Behind the counter, there are menu boards on the wall.", ko: "카운터 뒤에는 메뉴판이 벽에 걸려 있어요." },
          { en: "Next to the counter, you can find some desserts and snacks.", ko: "카운터 옆에는 디저트와 스낵도 있어요." },
          { en: "The staff always smiles and offers good service, so the overall atmosphere is very warm and friendly.", ko: "직원들이 항상 웃으며 좋은 서비스를 제공해서 전체적인 분위기가 따뜻하고 친근해요." }
        ],
        pronunciation: [
          { en: "Cafes in Korea are usually located in commercial areas.", ko: "카페즈 인 코리아 아 유주얼리 로케이티드 인 커머셜 에리어즈" },
          { en: "We have many major coffee chains like Starbucks, Coffee Bean, and Tom N Toms.", ko: "위 해브 메니 메이저 커피 체인즈 라이크 스타벅스, 커피빈, 앤 탐앤탐스" },
          { en: "These cafes usually have a lot of seating,", ko: "디즈 카페즈 유주얼리 해버 라러브 시팅" },
          { en: "so you'll be surprised at how spacious they are.", ko: "소 유일비 서프라이즈드 앳 하우 스페이셔스 데이 아" },
          { en: "When you enter a typical cafe,", ko: "웬유 엔터러 티피컬 카페" },
          { en: "you'll first see the counter where you can order and pick up your coffee.", ko: "유일 퍼스트 씨 더 카운터 웨어 유캔 오더 앤 픽업 유어 커피" },
          { en: "Behind the counter, there are menu boards on the wall.", ko: "비하인드 더 카운터, 데어라 메뉴 보즈 온더 월" },
          { en: "Next to the counter, you can find some desserts and snacks.", ko: "넥스트 투더 카운터, 유캔 파인 썸 디저츠 앤 스낵스" },
          { en: "The staff always smiles and offers good service,", ko: "더 스태프 올웨이즈 스마일즈 앤 오퍼즈 굿 서비스" },
          { en: "so the overall atmosphere is very warm and friendly.", ko: "소 디 오버롤 앳모스피어 이즈 베리 웜 앤 프렌들리" }
        ],
        warnings: [
          { word: "located", guide: "로케이티드" },
          { word: "commercial", guide: "커머셜" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "atmosphere", guide: "앳모스피어" }
        ]
      },
      {
        id: 71,
        question: "Tell me about one of your favorite cafes to visit. What does it look like?",
        translation: "자주 가는 카페 중 하나에 대해 말해 주세요. 어떻게 생겼나요?",
        type: "장소묘사",
        structure: ["집 근처 스타벅스", "100명 수용 가능한 큰 규모", "자주 가는 이유 몇 가지", "도보 10분 거리", "시설 좋음: 화장실·주차장·와이파이·인테리어", "가기 좋은 곳"],
        script: [
          { en: "The café I often go to is Starbucks, located near my house.", ko: "제가 자주 가는 카페는 집 근처에 있는 스타벅스예요." },
          { en: "It's big enough to accommodate about 100 people.", ko: "100명 정도는 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I keep going there.", ko: "제가 계속 그곳에 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it takes about 10 minutes on foot from my place.", ko: "우선, 저희 집에서 걸어서 10분 정도밖에 안 걸려요." },
          { en: "Also, the facilities are better than at other cafes — clean restrooms, a big parking lot, free Wi-Fi, and a nice interior.", ko: "또, 다른 카페보다 시설도 좋아요 — 깨끗한 화장실, 넓은 주차장, 무료 와이파이, 예쁜 인테리어까지요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 방문하기 정말 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The café I often go to is Starbucks, located near my house.", ko: "더 카페 아이 오픈 고투 이즈 스타벅스, 로케이티드 니어 마이 하우스" },
          { en: "It's big enough to accommodate about 100 people.", ko: "잇츠 빅 이너프 투 어카머데이트 어바웃 원헌드레드 피플" },
          { en: "There are a few reasons I keep going there.", ko: "데어라러 퓨 리즌즈 아이 킵 고잉 데어" },
          { en: "First, it takes about 10 minutes on foot from my place.", ko: "퍼스트, 잇 테익스 어바웃 텐미닛츠 온풋 프럼 마이 플레이스" },
          { en: "Also, the facilities are better than at other cafes —", ko: "얼소, 더 퍼실러티즈 아 베러 댄 앳 아더 카페이즈" },
          { en: "clean restrooms, a big parking lot, free Wi-Fi, and a nice interior.", ko: "클린 레스트룸즈, 어 빅 파킹랏, 프리 와이파이, 앤어 나이스 인테리어" },
          { en: "Overall, it's a great place to visit.", ko: "오버롤, 잇처 그레잇 플레이스 투 비짓" }
        ],
        warnings: [
          { word: "accommodate", guide: "어카머데이트" },
          { word: "facilities", guide: "퍼실러티즈" },
          { word: "restrooms", guide: "레스트룸즈" },
          { word: "interior", guide: "인테리어" }
        ]
      },
      {
        id: 72,
        question: "What do you usually do at your favorite café when you visit it?",
        translation: "자주 가는 카페에서 주로 무엇을 하나요?",
        type: "활동패턴",
        structure: ["주 1회 주말에 감", "평일엔 바빠서 못 감", "친한 친구랑 감 (쉬는날 맞음)", "도착하면 자리+메뉴 확인", "항상 아이스 아메리카노", "커피 마시며 수다(일/음악/영화 등)", "특별하진 않지만 즐거움"],
        script: [
          { en: "I usually go to a café once a week, on weekends.", ko: "보통 주 1회, 주말에 카페에 가요." },
          { en: "On weekdays, I'm too busy with work to visit one.", ko: "평일에는 일이 바빠서 갈 시간이 없어요." },
          { en: "I usually go with a close friend, and we often have the same free time.", ko: "친한 친구랑 자주 가는데, 보통 쉬는 날이 맞거든요." },
          { en: "When we arrive, we first find a table and check the menu.", ko: "도착하면 먼저 자리 잡고 메뉴를 봐요." },
          { en: "I always order an iced Americano — it's a must for me.", ko: "저는 항상 아이스 아메리카노를 시켜요. 이건 필수예요." },
          { en: "Then we just chat over coffee — about work, music, movies, and so on.", ko: "그러고 나서 커피 마시면서 수다를 떨어요. 일, 음악, 영화 얘기 등등이요." },
          { en: "It's nothing special, but I always enjoy it.", ko: "특별할 건 없지만 항상 즐거워요." }
        ],
        pronunciation: [
          { en: "I usually go to a café once a week, on weekends.", ko: "아이 유주얼리 고투어 카페 원스어 윅, 온 위켄즈" },
          { en: "On weekdays, I'm too busy with work to visit one.", ko: "온 위크데이즈, 아임 투 비지 윗 워크 투 비짓 원" },
          { en: "I usually go with a close friend,", ko: "아이 유주얼리 고 윗어 클로즈 프렌드" },
          { en: "and we often have the same free time.", ko: "앤 위 오픈 해브 더 세임 프리타임" },
          { en: "When we arrive, we first find a table and check the menu.", ko: "웬 위 어라이브, 위 퍼스트 파인더 테이블 앤 첵 더 메뉴" },
          { en: "I always order an iced Americano —", ko: "아이 올웨이즈 오더런 아이스트 아메리카노" },
          { en: "it's a must for me.", ko: "잇츠어 머스트 퍼미" },
          { en: "Then we just chat over coffee —", ko: "덴 위 저스트 챗 오버 커피" },
          { en: "about work, music, movies, and so on.", ko: "어바웃 워크, 뮤직, 무비즈, 앤 소온" },
          { en: "It's nothing special, but I always enjoy it.", ko: "잇츠 낫씽 스페셜, 벗 아이 올웨이즈 인조이잇" }
        ],
        warnings: [
          { word: "usually", guide: "유주얼리" },
          { word: "close friend", guide: "클로즈 프렌드" },
          { word: "a must", guide: "어 머스트" },
          { word: "nothing special", guide: "낫씽 스페셜" }
        ]
      },
      {
        id: 73,
        question: "How did you first find your favorite café? Did your friend recommend it? What made you want to keep going there?",
        translation: "가장 좋아하는 카페를 어떻게 처음 알게 됐나요? 친구가 추천했나요? 계속 가고 싶게 만든 이유는 무엇인가요?",
        type: "과거 경험",
        structure: ["15년 전 처음 방문", "친구 루다가 제안+데려감", "카페 규모에 놀람", "젊은사람·커플로 붐빔", "내부: 테이블+메뉴판+그림 (모던한 느낌)", "야외좌석이 가장 마음에 듦", "거리 풍경 감상", "지금까지 계속 다님"],
        script: [
          { en: "I first visited my favorite café, Starbucks, about 15 years ago.", ko: "제가 가장 좋아하는 카페인 스타벅스를 약 15년 전에 처음 방문했어요." },
          { en: "At the time, my best friend Looda suggested we grab coffee and took me there.", ko: "그때 가장 친한 친구 루다가 커피 한잔하자고 제안하며 저를 데려갔어요." },
          { en: "When I got there, I was surprised by how huge the café was.", ko: "도착했을 때, 카페가 정말 커서 놀랐어요." },
          { en: "It was really crowded, especially with young people and couples, and everyone looked excited.", ko: "특히 젊은 사람들과 커플들로 정말 붐볐고, 다들 신나 보였어요." },
          { en: "Inside, there were lots of tables and chairs, along with menu boards and pictures on the walls, which gave the place a fancy, modern feel.", ko: "내부에는 테이블과 의자가 많았고, 메뉴판과 그림도 벽에 걸려 있어서 화려하고 모던한 느낌이었어요." },
          { en: "What I liked most about it was the outdoor seating.", ko: "그중에서도 가장 마음에 든 건 야외 좌석이었어요." },
          { en: "Sitting at one of those tables, I could enjoy a beautiful view of the street.", ko: "그 테이블에 앉아서 아름다운 거리 풍경을 감상할 수 있었어요." },
          { en: "Overall, it was a great place to be, and that's why I still go there today.", ko: "전반적으로 정말 좋은 곳이었고, 그래서 지금도 계속 가고 있어요." }
        ],
        pronunciation: [
          { en: "I first visited my favorite café, Starbucks,", ko: "아이 퍼스트 비지티드 마이 페이버릿 카페, 스타벅스" },
          { en: "about 15 years ago.", ko: "어바웃 피프틴 이어즈 어고" },
          { en: "At the time, my best friend Looda suggested we grab coffee", ko: "앳더 타임, 마이 베스트 프렌드 루다 서제스티드 위 그랩 커피" },
          { en: "and took me there.", ko: "앤 툭미 데어" },
          { en: "When I got there, I was surprised by how huge the café was.", ko: "웬 아이 갓 데어, 아이 워즈 서프라이즈드 바이 하우 휴즈 더 카페 워즈" },
          { en: "It was really crowded, especially with young people and couples,", ko: "잇 워즈 릴리 크라우디드, 이스페셜리 윗 영 피플 앤 커플즈" },
          { en: "and everyone looked excited.", ko: "앤 에브리원 룩트 익사이티드" },
          { en: "Inside, there were lots of tables and chairs,", ko: "인사이드, 데어 워 랏츠어브 테이블즈 앤 체어즈" },
          { en: "along with menu boards and pictures on the walls,", ko: "얼롱 윗 메뉴 보즈 앤 픽처즈 온더 월즈" },
          { en: "which gave the place a fancy, modern feel.", ko: "위치 게이브 더 플레이스어 팬시, 모던 필" },
          { en: "What I liked most about it was the outdoor seating.", ko: "왓 아이 라익트 모스트 어바우릿 워즈 디 아웃도어 시팅" },
          { en: "Sitting at one of those tables,", ko: "시딩 앳 원어브 도즈 테이블즈" },
          { en: "I could enjoy a beautiful view of the street.", ko: "아이 쿠드 인조이어 뷰티풀 뷰 어브 더 스트릿" },
          { en: "Overall, it was a great place to be,", ko: "오버롤, 잇 워저 그레잇 플레이스 투비" },
          { en: "and that's why I still go there today.", ko: "앤 댓츠 와이 아이 스틸 고데어 투데이" }
        ],
        warnings: [
          { word: "huge", guide: "휴즈" },
          { word: "crowded", guide: "크라우디드" },
          { word: "especially", guide: "이스페셜리" },
          { word: "outdoor", guide: "아웃도어" },
          { word: "overall", guide: "오버롤" }
        ]
      },
      {
        id: 74,
        question: "Tell me about the first time going to a café. Were you a child or older? What happened?",
        translation: "카페에 처음 갔던 때에 대해 말해 주세요. 어릴 때였나요, 아니면 더 컸을 때였나요? 무슨 일이 있었나요?",
        type: "과거 경험",
        structure: ["대학생 때 처음 감", "그전엔 카페·커피 잘 몰랐음", "친구 루다가 데려가서 제안", "처음엔 지루+주문도 어려웠음", "커피 맛도 씀", "나중엔 재밌고 스트레스 풀림", "그날 이후 즐겨감 (주1회 이상)"],
        script: [
          { en: "I first went to a café when I was in college.", ko: "저는 대학생 때 카페를 처음 갔어요." },
          { en: "Before that, I didn't know much about cafés or coffee, and I didn't feel like I needed to learn about it.", ko: "그 전까지는 카페나 커피에 대해 잘 몰랐고, 딱히 배워야겠다는 생각도 없었어요." },
          { en: "One day, my best friend Looda took me to a café and suggested we get some coffee.", ko: "어느 날 가장 친한 친구 루다가 저를 카페에 데려가서 커피를 마시자고 제안했어요." },
          { en: "At first, I thought sitting at a café was boring, and even ordering felt difficult.", ko: "처음엔 카페에 앉아 있는 게 지루하다고 생각했고, 주문하는 것조차 어렵게 느껴졌어요." },
          { en: "Plus, the coffee tasted really bitter.", ko: "게다가 커피도 정말 썼어요." },
          { en: "But after a while, I was able to have fun and relieve stress.", ko: "하지만 시간이 좀 지나니까 재밌기도 하고 스트레스도 풀리더라고요." },
          { en: "Since that day, I've enjoyed going to cafés, and now I visit at least once a week.", ko: "그날 이후로 카페 가는 걸 즐기게 됐고, 지금은 적어도 일주일에 한 번은 가요." }
        ],
        pronunciation: [
          { en: "I first went to a café when I was in college.", ko: "아이 퍼스트 웬투어 카페 웬 아이 워즈 인 칼리지" },
          { en: "Before that, I didn't know much about cafés or coffee,", ko: "비포댓, 아이 디든 노우 머치 어바웃 카페즈 오어 커피" },
          { en: "and I didn't feel like I needed to learn about it.", ko: "앤 아이 디든 필 라이크 아이 니딧투 런 어바웃잇" },
          { en: "One day, my best friend Looda took me to a café", ko: "원 데이, 마이 베스트 프렌드 루다 툭미 투어 카페" },
          { en: "and suggested we get some coffee.", ko: "앤 서제스티드 위 겟 썸 커피" },
          { en: "At first, I thought sitting at a café was boring,", ko: "앳 퍼스트, 아이 쏫 시딩 앳어 카페 워즈 보링" },
          { en: "and even ordering felt difficult.", ko: "앤 이븐 오더링 펠트 디피컬트" },
          { en: "Plus, the coffee tasted really bitter.", ko: "플러스, 더 커피 테이스티드 릴리 비터" },
          { en: "But after a while, I was able to have fun and relieve stress.", ko: "벗 애프터러 와일, 아이 워즈 에이블투 해브 펀 앤 릴리브 스트레스" },
          { en: "Since that day, I've enjoyed going to cafés,", ko: "신스 댓 데이, 아이브 인조이드 고잉 투 카페즈" },
          { en: "and now I visit at least once a week.", ko: "앤 나우 아이 비짓 앳리스트 원스어 윅" }
        ],
        warnings: [
          { word: "college", guide: "칼리지" },
          { word: "bitter", guide: "비터" },
          { word: "relieve", guide: "릴리브" },
          { word: "since", guide: "신스" }
        ]
      },
      {
        id: 162,
        question: "Tell me about a time you went to a café that was memorable. Did something unusual or strange happen? Tell me all about that experience in detail.",
        translation: "카페에서 있었던 기억에 남는 경험을 말해 주세요. 특이하거나 이상한 일이 있었나요? 그 경험을 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["두 달 전, 집 근처 카페", "친구 성규와 감", "성규가 화장실 간 사이 혼자 커피 마심", "지나가던 여자가 테이블 쳐서 셔츠에 커피 쏟음", "화가 나서 계속 불평함", "친구 돌아옴 → 그 여자가 친구의 아내였음", "엄청 창피해서 계속 사과함", "그 후로 카페 갈 때마다 생각남"],
        script: [
          { en: "About two months ago, I had a really memorable time at a cafe.", ko: "저는 두 달 전쯤 카페에서 정말 기억에 남는 일이 있었어요." },
          { en: "I went to a cafe near my apartment with my best friend, Sunggyu.", ko: "저는 저희 집 근처 카페에 제일 친한 친구 성규랑 갔어요." },
          { en: "After a while, he went to the restroom, and I was just relaxing with my coffee, waiting for him.", ko: "잠시 후에 그가 화장실에 갔고, 저는 커피 마시면서 그를 기다리고 있었어요." },
          { en: "Suddenly, a woman walking by hit my table and spilled her coffee all over my shirt.", ko: "갑자기 지나가던 어떤 여자분이 제 테이블을 쳐서 커피를 제 셔츠에 다 쏟았어요." },
          { en: "My shirt got all wet, and I got really upset.", ko: "셔츠가 다 젖었고, 저는 정말 화가 났어요." },
          { en: "Even though she apologized, I kept complaining to her.", ko: "그녀가 사과했는데도, 저는 계속 그녀에게 불평했어요." },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "그런데 친구가 돌아왔을 때, 저는 완전 충격받았어요 — 그녀가 그의 아내였던 거예요!" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "저는 너무 창피했어요. 계속 그녀에게 사과하고 또 사과했어요." },
          { en: "Since then, I always remember it when I go to that cafe.", ko: "그 이후로, 저는 그 카페에 갈 때마다 항상 그 일이 생각나요." }
        ],
        pronunciation: [
          { en: "About two months ago, I had a really memorable time at a cafe.", ko: "어바웃 투 먼쓰어고, 아이 해더 릴리 메머러블 타임 앳어 카페" },
          { en: "I went to a cafe near my apartment with my best friend, Sunggyu.", ko: "아이웬투어 카페 니어마이 어파트먼트 윗마이 베스트프렌드, 성규" },
          { en: "After a while, he went to the restroom, and I was just relaxing with my coffee, waiting for him.", ko: "애프터러 와일, 히웬투더 레스트룸, 앤아이워즈 저스트 릴렉싱 윗마이 커피, 웨이팅퍼힘" },
          { en: "Suddenly, a woman walking by hit my table and spilled her coffee all over my shirt.", ko: "서든리, 어우먼 워킹바이 힛마이 테이블 앤 스필드허 커피 올오버 마이셔츠" },
          { en: "My shirt got all wet, and I got really upset.", ko: "마이셔츠 갓 올웻, 앤아이갓 릴리 업셋" },
          { en: "Even though she apologized, I kept complaining to her.", ko: "이븐도우 쉬 어팔러자이즈드, 아이켑트 컴플레이닝투허" },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "덴, 웬마이프렌드 케임백, 아이워즈 토탈리 샥트, 쉬워즈 히즈와이프" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "아이워즈 소우 임배러스트. 아이켑트 어팔러자이징투허 오버앤오버" },
          { en: "Since then, I always remember it when I go to that cafe.", ko: "신스덴, 아이 올웨이즈 리멤버릿 웬아이 고투댓 카페" }
        ],
        warnings: [
          { word: "apologized", guide: "어팔러자이즈드" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "incident", guide: "인시던트" },
          { word: "complaining", guide: "컴플레이닝" }
        ]
      }
    ]
  },
  {
    id: 25, emoji: "🏦", nameKo: "은행",
    category: "돌발주제",
    questions: [
      {
        id: 75,
        question: "Tell me what banks typically look like in your country.",
        translation: "당신 나라의 은행이 일반적으로 어떤 모습인지 말해 주세요.",
        type: "일반 설명",
        structure: ["한국 은행은 상업지역 위치", "KB·우리·신한 등 대형 은행", "좌석 많고 넓음", "가운데 대기공간", "ATM/창구/VIP라운지+상담실 구역 구분", "직원 친절", "따뜻한 분위기"],
        script: [
          { en: "Banks in Korea are usually located in commercial areas, and we have many major banks like KB, Woori, Shinhan, and so on.", ko: "한국 은행은 주로 상업 지역에 위치해 있고, KB, 우리, 신한 같은 대형 은행이 많아요." },
          { en: "These banks usually have a lot of seating, so you'd be surprised at how spacious Korean banks are.", ko: "이런 은행들은 좌석이 많아서 얼마나 넓은지 보면 놀랄 거예요." },
          { en: "When you enter a typical bank, you'll first see a waiting area in the middle.", ko: "일반적인 은행에 들어가면 먼저 가운데에 대기 공간이 보여요." },
          { en: "On one side, there are ATMs; on another, you'll find the service desks; and on the other side, there's a VIP lounge and customer rooms.", ko: "한쪽에는 ATM기가 있고, 다른 쪽에는 창구가 있고, 또 다른 쪽에는 VIP 라운지와 상담실이 있어요." },
          { en: "The staff always smiles and offers good service.", ko: "직원들은 항상 웃으며 좋은 서비스를 제공해요." },
          { en: "So, the overall atmosphere is very warm and friendly.", ko: "그래서 전체적인 분위기가 따뜻하고 친근해요." },
          { en: "So yeah, that's pretty much it.", ko: "네, 대략 이 정도예요." }
        ],
        pronunciation: [
          { en: "Banks in Korea are usually located in commercial areas,", ko: "뱅크스 인 코리아 아 유주얼리 로케이티드 인 커머셜 에리어즈" },
          { en: "and we have many major banks like KB, Woori, Shinhan, and so on.", ko: "앤 위 해브 메니 메이저 뱅크스 라이크 케이비, 우리, 신한, 앤 소온" },
          { en: "These banks usually have a lot of seating,", ko: "디즈 뱅크스 유주얼리 해버 라러브 시팅" },
          { en: "so you'd be surprised at how spacious Korean banks are.", ko: "소 유드비 서프라이즈드 앳 하우 스페이셔스 코리안 뱅크스 아" },
          { en: "When you enter a typical bank,", ko: "웬유 엔터러 티피컬 뱅크" },
          { en: "you'll first see a waiting area in the middle.", ko: "유일 퍼스트 씨어 웨이팅 에리아 인더 미들" },
          { en: "On one side, there are ATMs;", ko: "온 원 사이드, 데어라 에이티엠즈" },
          { en: "on another, you'll find the service desks;", ko: "온 어나더, 유일 파인더 서비스 데스크스" },
          { en: "and on the other side, there's a VIP lounge and customer rooms.", ko: "앤 온디 아더 사이드, 데어저 브이아이피 라운지 앤 커스터머 룸즈" },
          { en: "The staff always smiles and offers good service.", ko: "더 스태프 올웨이즈 스마일즈 앤 오퍼즈 굿 서비스" },
          { en: "So, the overall atmosphere is very warm and friendly.", ko: "소, 디 오버롤 앳모스피어 이즈 베리 웜 앤 프렌들리" },
          { en: "So yeah, that's pretty much it.", ko: "소 예, 댓츠 프리티 머치 잇" }
        ],
        warnings: [
          { word: "located", guide: "로케이티드" },
          { word: "commercial", guide: "커머셜" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "atmosphere", guide: "앳모스피어" }
        ]
      }
    ]
  },
  {
    id: 26, emoji: "🏨", nameKo: "호텔",
    category: "돌발주제",
    questions: [
      {
        id: 76,
        question: "Tell me what hotels typically look like in your country.",
        translation: "당신 나라의 호텔이 일반적으로 어떤 모습인지 말해 주세요.",
        type: "일반 설명",
        structure: ["한국 호텔은 상업지역 위치", "신라·롯데·포시즌스 등 대형 호텔", "객실 많고 넓음", "1층 로비+프런트+라운지", "2층 레스토랑/카페/헬스장/수영장", "3층부터 객실", "직원 친절+따뜻한 분위기"],
        script: [
          { en: "Hotels in Korea are usually located in commercial areas, and we have many major hotels like Shilla, Lotte, Four Seasons, and so on.", ko: "한국 호텔은 주로 상업 지역에 위치해 있고, 신라, 롯데, 포시즌스 같은 대형 호텔이 많아요." },
          { en: "These hotels usually have a lot of guest rooms, so you'd be surprised at how spacious Korean hotels are.", ko: "이런 호텔들은 객실이 많아서 얼마나 넓은지 보면 놀랄 거예요." },
          { en: "When you enter a typical hotel, you'll first see a lobby, with the front desk and a lounge on the first floor.", ko: "일반적인 호텔에 들어가면 먼저 로비가 보이는데, 1층에는 프런트 데스크와 라운지가 있어요." },
          { en: "On the second floor, you can find restaurants, cafes, a gym, a swimming pool, and so on.", ko: "2층에는 레스토랑, 카페, 헬스장, 수영장 등이 있어요." },
          { en: "From the third floor up, there are many guest rooms.", ko: "3층부터는 객실이 많이 있어요." },
          { en: "The staff always smiles and offers good service.", ko: "직원들은 항상 웃으며 좋은 서비스를 제공해요." },
          { en: "So, the overall atmosphere is very warm and friendly.", ko: "그래서 전체적인 분위기가 따뜻하고 친근해요." },
          { en: "So yeah, that's pretty much it.", ko: "네, 대략 이 정도예요." }
        ],
        pronunciation: [
          { en: "Hotels in Korea are usually located in commercial areas,", ko: "호텔즈 인 코리아 아 유주얼리 로케이티드 인 커머셜 에리어즈" },
          { en: "and we have many major hotels like Shilla, Lotte, Four Seasons, and so on.", ko: "앤 위 해브 메니 메이저 호텔즈 라이크 신라, 롯데, 포시즌즈, 앤 소온" },
          { en: "These hotels usually have a lot of guest rooms,", ko: "디즈 호텔즈 유주얼리 해버 라러브 게스트 룸즈" },
          { en: "so you'd be surprised at how spacious Korean hotels are.", ko: "소 유드비 서프라이즈드 앳 하우 스페이셔스 코리안 호텔즈 아" },
          { en: "When you enter a typical hotel,", ko: "웬유 엔터러 티피컬 호텔" },
          { en: "you'll first see a lobby, with the front desk and a lounge on the first floor.", ko: "유일 퍼스트 씨어 라비, 윗더 프런트 데스크 앤어 라운지 온더 퍼스트 플로어" },
          { en: "On the second floor, you can find restaurants, cafes, a gym, a swimming pool, and so on.", ko: "온더 세컨 플로어, 유캔 파인 레스터란츠, 카페즈, 어 짐, 어 스위밍풀, 앤 소온" },
          { en: "From the third floor up, there are many guest rooms.", ko: "프럼 더 써드 플로어 업, 데어라 메니 게스트 룸즈" },
          { en: "The staff always smiles and offers good service.", ko: "더 스태프 올웨이즈 스마일즈 앤 오퍼즈 굿 서비스" },
          { en: "So, the overall atmosphere is very warm and friendly.", ko: "소, 디 오버롤 앳모스피어 이즈 베리 웜 앤 프렌들리" },
          { en: "So yeah, that's pretty much it.", ko: "소 예, 댓츠 프리티 머치 잇" }
        ],
        warnings: [
          { word: "located", guide: "로케이티드" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "lobby", guide: "라비" },
          { word: "atmosphere", guide: "앳모스피어" }
        ]
      }
    ]
  },
  {
    id: 27, emoji: "🍺", nameKo: "술집",
    category: "선택주제",
    questions: [
      {
        id: 80,
        question: "Tell me what your favorite pub looks like.",
        translation: "가장 좋아하는 술집이 어떻게 생겼는지 말해 주세요.",
        type: "장소묘사 – 개인",
        structure: ["Star Bar, 서울 변두리", "100명 수용 가능", "도보 5분 거리", "교통비 거의 안듦", "시설 좋음(주차장/화장실/와이파이/인테리어)", "전반적으로 좋은 곳"],
        script: [
          { en: "The pub I go to most often is Star Bar, which is on the outskirts of Seoul.", ko: "Star Bar가 서울 변두리에 있는데, 제가 가장 자주 가는 술집이에요." },
          { en: "It's big enough to fit about a hundred people.", ko: "100명 정도 수용할 수 있을 만큼 넓어요." },
          { en: "There are a few reasons I like going there.", ko: "자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's really close to my place — it's only about a five-minute walk.", ko: "일단 집에서 진짜 가까워요 — 걸어서 5분 정도밖에 안 걸려요." },
          { en: "So I don't have to spend much on transportation.", ko: "그래서 교통비도 거의 안 들어요." },
          { en: "Also, the facilities are better than at other bars.", ko: "그리고 다른 술집보다 시설이 좋아요." },
          { en: "Like, it's got a big parking lot, clean restrooms, free Wi-Fi, a nice interior, stuff like that.", ko: "큰 주차장도 있고, 화장실도 깨끗하고, 와이파이도 무료고, 인테리어도 예쁘고, 뭐 그런 것들이요." },
          { en: "Overall, it's a great place to go.", ko: "전반적으로 가기 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The pub I go to most often is Star Bar,", ko: "더 펍 아이 고투 모스트 오픈 이즈 스타바" },
          { en: "which is on the outskirts of Seoul.", ko: "위치즈 온 디 아웃스커츠 어브 서울" },
          { en: "It's big enough to fit about a hundred people.", ko: "잇츠 빅 이너프 투 핏 어바웃어 헌드레드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라 퓨 리즌즈 아이 라익 고잉 데어" },
          { en: "First, it's really close to my place —", ko: "퍼스트, 잇츠 릴리 클로스 투 마이 플레이스" },
          { en: "it's only about a five-minute walk.", ko: "잇츠 온리 어바웃어 파이브미닛 웍" },
          { en: "So I don't have to spend much on transportation.", ko: "소 아이 돈 해브투 스펜드 머치 온 트랜스포테이션" },
          { en: "Also, the facilities are better than at other bars.", ko: "얼소, 더 퍼실러티즈 아 베러 댄 앳 아더 바즈" },
          { en: "Like, it's got a big parking lot, clean restrooms, free Wi-Fi, a nice interior, stuff like that.", ko: "라이크, 잇츠 가러 빅 파킹랏, 클린 레스트룸즈, 프리 와이파이, 어 나이스 인테리어, 스터프 라이크댓" },
          { en: "Overall, it's a great place to go.", ko: "오버롤, 잇츠어 그레잇 플레이스 투고" }
        ],
        warnings: [
          { word: "outskirts", guide: "아웃스커츠" },
          { word: "transportation", guide: "트랜스포테이션" },
          { word: "facilities", guide: "퍼실러티즈" },
          { word: "interior", guide: "인테리어" }
        ]
      },
      {
        id: 81,
        question: "Most bars and pubs have a special area to make drinks. Tell me what this area looks like at your favorite bar or pub.",
        translation: "대부분의 바나 술집에는 음료를 만드는 특별한 공간이 있어요. 가장 좋아하는 바/술집의 그 공간이 어떤 모습인지 말해 주세요.",
        type: "장소묘사 – 특정",
        structure: ["한국은 특별한 음료제조 공간 따로 없음", "대신 좋아하는 술집 소개", "Star Bar, 서울 변두리", "100명 수용", "도보5분+교통비 절약", "시설 좋음", "전반적으로 좋은 곳"],
        script: [
          { en: "Honestly, in Korea most bars don't really have a special area for making drinks, so I don't know much about that.", ko: "솔직히 한국은 대부분 술집에 음료 만드는 특별한 공간이 따로 없어서 잘 몰라요." },
          { en: "So let me just tell you about my favorite bar instead.", ko: "그래서 그냥 제가 좋아하는 술집에 대해 말씀드릴게요." },
          { en: "The pub I go to most often is Star Bar, which is on the outskirts of Seoul.", ko: "Star Bar가 서울 변두리에 있는데, 제가 가장 자주 가는 술집이에요." },
          { en: "It's big enough to fit about a hundred people.", ko: "100명 정도 수용할 수 있을 만큼 넓어요." },
          { en: "There are a few reasons I like going there.", ko: "자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's really close to my place — it's only about a five-minute walk.", ko: "일단 집에서 진짜 가까워요 — 걸어서 5분 정도밖에 안 걸려요." },
          { en: "So I don't have to spend much on transportation.", ko: "그래서 교통비도 거의 안 들어요." },
          { en: "Also, the facilities are better than at other bars.", ko: "그리고 다른 술집보다 시설이 좋아요." },
          { en: "Like, it's got a big parking lot, clean restrooms, free Wi-Fi, a nice interior, stuff like that.", ko: "큰 주차장도 있고, 화장실도 깨끗하고, 와이파이도 무료고, 인테리어도 예쁘고, 뭐 그런 것들이요." },
          { en: "Overall, it's a great place to go.", ko: "전반적으로 가기 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "Honestly, in Korea most bars don't really have a special area for making drinks,", ko: "아너슬리, 인 코리아 모스트 바즈 돈 릴리 해버 스페셜 에리아 퍼 메이킹 드링크스" },
          { en: "so I don't know much about that.", ko: "소 아이 돈 노우 머치 어바웃 댓" },
          { en: "So let me just tell you about my favorite bar instead.", ko: "소 렛미 저스트 텔유 어바웃 마이 페이버릿 바 인스테드" },
          { en: "The pub I go to most often is Star Bar,", ko: "더 펍 아이 고투 모스트 오픈 이즈 스타바" },
          { en: "which is on the outskirts of Seoul.", ko: "위치즈 온 디 아웃스커츠 어브 서울" },
          { en: "It's big enough to fit about a hundred people.", ko: "잇츠 빅 이너프 투 핏 어바웃어 헌드레드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라 퓨 리즌즈 아이 라익 고잉 데어" },
          { en: "First, it's really close to my place —", ko: "퍼스트, 잇츠 릴리 클로스 투 마이 플레이스" },
          { en: "it's only about a five-minute walk.", ko: "잇츠 온리 어바웃어 파이브미닛 웍" },
          { en: "So I don't have to spend much on transportation.", ko: "소 아이 돈 해브투 스펜드 머치 온 트랜스포테이션" },
          { en: "Also, the facilities are better than at other bars.", ko: "얼소, 더 퍼실러티즈 아 베러 댄 앳 아더 바즈" },
          { en: "Like, it's got a big parking lot, clean restrooms, free Wi-Fi, a nice interior, stuff like that.", ko: "라이크, 잇츠 가러 빅 파킹랏, 클린 레스트룸즈, 프리 와이파이, 어 나이스 인테리어, 스터프 라이크댓" },
          { en: "Overall, it's a great place to go.", ko: "오버롤, 잇츠어 그레잇 플레이스 투고" }
        ],
        warnings: [
          { word: "honestly", guide: "아너슬리" },
          { word: "instead", guide: "인스테드" },
          { word: "outskirts", guide: "아웃스커츠" },
          { word: "facilities", guide: "퍼실러티즈" }
        ]
      },
      {
        id: 82,
        question: "Tell me what you usually do to plan a night out at your favorite pub.",
        translation: "가장 좋아하는 술집에서 놀 계획을 어떻게 세우는지 말해 주세요.",
        type: "활동패턴 – 개인",
        structure: ["주1회 주말에 감", "평일엔 바빠서 못감", "친구 루다랑 (노는시간 비슷)", "가기전 전화로 계획", "도착하면 자리+메뉴 확인", "흑맥주+안주 주문", "이런저런 얘기하며 놀기", "특별친 않지만 항상 재밌음"],
        script: [
          { en: "I go to a bar about once a week, usually on weekends.", ko: "일주일에 한 번 정도, 보통 주말에 술집에 가요." },
          { en: "On weekdays I'm too busy with work, so I don't really have time for it.", ko: "평일에는 일하느라 바빠서 갈 시간이 잘 없어요." },
          { en: "I usually go with my best friend, Looda, since we tend to have the same free time.", ko: "보통 가장 친한 친구 루다랑 같이 가는데, 걔랑 저랑 노는 시간이 비슷하거든요." },
          { en: "Before we go, I'll call her and we'll figure out when to meet, where to go, what to drink.", ko: "가기 전에 전화해서 언제 만날지, 어디 갈지, 뭐 마실지 정해요." },
          { en: "Once we get there, we grab a table and look at the menu first.", ko: "가면 일단 자리 잡고 메뉴부터 봐요." },
          { en: "Then we order some drinks and snacks — I always go for dark beer.", ko: "그다음에 음료랑 안주 시키는데, 저는 항상 흑맥주 마셔요." },
          { en: "After that we just hang out, drinking and chatting about work, family, sports, movies, whatever.", ko: "그러고 나서 그냥 일이랑 가족, 스포츠, 영화 이런 거 얘기하면서 놀아요." },
          { en: "It's nothing too special, but I always have a good time.", ko: "특별할 건 없는데 항상 재밌어요." }
        ],
        pronunciation: [
          { en: "I go to a bar about once a week, usually on weekends.", ko: "아이 고투어 바 어바웃 원스어 윅, 유주얼리 온 위켄즈" },
          { en: "On weekdays I'm too busy with work,", ko: "온 위크데이즈 아임 투 비지 윗 워크" },
          { en: "so I don't really have time for it.", ko: "소 아이 돈 릴리 해브 타임 퍼릿" },
          { en: "I usually go with my best friend, Looda,", ko: "아이 유주얼리 고 윗마이 베스트 프렌드, 루다" },
          { en: "since we tend to have the same free time.", ko: "신스 위 텐투 해브 더 세임 프리타임" },
          { en: "Before we go, I'll call her", ko: "비포 위 고, 아일 콜허" },
          { en: "and we'll figure out when to meet, where to go, what to drink.", ko: "앤 위일 피겨아웃 웬투밋, 웨어투고, 왓투드링크" },
          { en: "Once we get there, we grab a table and look at the menu first.", ko: "원스 위 겟데어, 위 그래버 테이블 앤 루커랫 더 메뉴 퍼스트" },
          { en: "Then we order some drinks and snacks —", ko: "덴 위 오더 썸 드링크스 앤 스낵스" },
          { en: "I always go for dark beer.", ko: "아이 올웨이즈 고퍼 다크 비어" },
          { en: "After that we just hang out,", ko: "애프터댓 위 저스트 행아웃" },
          { en: "drinking and chatting about work, family, sports, movies, whatever.", ko: "드링킹 앤 채팅 어바웃 워크, 패밀리, 스포츠, 무비즈, 왓에버" },
          { en: "It's nothing too special, but I always have a good time.", ko: "잇츠 낫씽 투 스페셜, 벗 아이 올웨이즈 해버 굿 타임" }
        ],
        warnings: [
          { word: "figure out", guide: "피겨아웃" },
          { word: "dark beer", guide: "다크 비어" },
          { word: "hang out", guide: "행아웃" },
          { word: "nothing too special", guide: "낫씽 투 스페셜" }
        ]
      },
      {
        id: 83,
        question: "Tell me what bartenders usually do at your favorite pub or bar.",
        translation: "가장 좋아하는 술집/바에서 바텐더가 보통 무엇을 하는지 말해 주세요.",
        type: "활동패턴 – 특정",
        structure: ["바텐더가 뭐하는지 잘 모름", "대신 본인 루틴 소개", "주1회 주말", "친구 루다랑", "전화로 계획", "자리+메뉴확인", "흑맥주+안주", "얘기하며 놀기"],
        script: [
          { en: "Honestly, I don't really know much about what bartenders do, so let me just tell you about what I usually do at the pub instead.", ko: "솔직히 바텐더가 뭘 하는지는 잘 몰라서, 그냥 제가 술집에서 보통 뭘 하는지 말씀드릴게요." },
          { en: "I go to a bar about once a week, usually on weekends.", ko: "일주일에 한 번 정도, 보통 주말에 술집에 가요." },
          { en: "On weekdays I'm too busy with work, so I don't really have time for it.", ko: "평일에는 일하느라 바빠서 갈 시간이 잘 없어요." },
          { en: "I usually go with my best friend, Looda, since we tend to have the same free time.", ko: "보통 가장 친한 친구 루다랑 같이 가는데, 걔랑 저랑 노는 시간이 비슷하거든요." },
          { en: "Before we go, I'll call her and we'll figure out when to meet, where to go, what to drink.", ko: "가기 전에 전화해서 언제 만날지, 어디 갈지, 뭐 마실지 정해요." },
          { en: "Once we get there, we grab a table and look at the menu first.", ko: "가면 일단 자리 잡고 메뉴부터 봐요." },
          { en: "Then we order some drinks and snacks — I always go for dark beer.", ko: "그다음에 음료랑 안주 시키는데, 저는 항상 흑맥주 마셔요." },
          { en: "After that we just hang out, drinking and chatting about work, family, sports, movies, whatever.", ko: "그러고 나서 그냥 일이랑 가족, 스포츠, 영화 이런 거 얘기하면서 놀아요." },
          { en: "It's nothing too special, but I always have a good time.", ko: "특별할 건 없는데 항상 재밌어요." }
        ],
        pronunciation: [
          { en: "Honestly, I don't really know much about what bartenders do,", ko: "아너슬리, 아이 돈 릴리 노우 머치 어바웃 왓 바텐더즈 두" },
          { en: "so let me just tell you about what I usually do at the pub instead.", ko: "소 렛미 저스트 텔유 어바웃 왓 아이 유주얼리 두 앳더 펍 인스테드" },
          { en: "I go to a bar about once a week, usually on weekends.", ko: "아이 고투어 바 어바웃 원스어 윅, 유주얼리 온 위켄즈" },
          { en: "On weekdays I'm too busy with work,", ko: "온 위크데이즈 아임 투 비지 윗 워크" },
          { en: "so I don't really have time for it.", ko: "소 아이 돈 릴리 해브 타임 퍼릿" },
          { en: "I usually go with my best friend, Looda,", ko: "아이 유주얼리 고 윗마이 베스트 프렌드, 루다" },
          { en: "since we tend to have the same free time.", ko: "신스 위 텐투 해브 더 세임 프리타임" },
          { en: "Before we go, I'll call her", ko: "비포 위 고, 아일 콜허" },
          { en: "and we'll figure out when to meet, where to go, what to drink.", ko: "앤 위일 피겨아웃 웬투밋, 웨어투고, 왓투드링크" },
          { en: "Once we get there, we grab a table and look at the menu first.", ko: "원스 위 겟데어, 위 그래버 테이블 앤 루커랫 더 메뉴 퍼스트" },
          { en: "Then we order some drinks and snacks —", ko: "덴 위 오더 썸 드링크스 앤 스낵스" },
          { en: "I always go for dark beer.", ko: "아이 올웨이즈 고퍼 다크 비어" },
          { en: "After that we just hang out,", ko: "애프터댓 위 저스트 행아웃" },
          { en: "drinking and chatting about work, family, sports, movies, whatever.", ko: "드링킹 앤 채팅 어바웃 워크, 패밀리, 스포츠, 무비즈, 왓에버" },
          { en: "It's nothing too special, but I always have a good time.", ko: "잇츠 낫씽 투 스페셜, 벗 아이 올웨이즈 해버 굿 타임" }
        ],
        warnings: [
          { word: "bartenders", guide: "바텐더즈" },
          { word: "instead", guide: "인스테드" },
          { word: "figure out", guide: "피겨아웃" },
          { word: "dark beer", guide: "다크 비어" }
        ]
      },
      {
        id: 84,
        question: "Tell me about the last time you went to a pub.",
        translation: "최근에 술집에 갔던 때에 대해 말해 주세요.",
        type: "최근경험",
        structure: ["2주 전, 친구 진우", "Star Bar (서울 변두리)", "붐벼서 짜증남", "자리+메뉴 확인", "생맥주+안주 주문", "맛에 감명받음", "영화/가족/일 얘기", "좋은 시간이었음"],
        script: [
          { en: "The last time I went to a bar was about two weeks ago.", ko: "마지막으로 술집 간 게 한 2주 전이었어요." },
          { en: "My friend Jinwoo wanted to do something fun, so we decided to grab a drink together.", ko: "친구 진우가 뭔가 재밌는 거 하고 싶다 그래서, 같이 한잔하기로 했어요." },
          { en: "We went to Star Bar, out on the edge of Seoul.", ko: "서울 변두리에 있는 Star Bar에 갔는데," },
          { en: "It was packed that night, mostly with young people, so honestly, it was a little annoying.", ko: "그날따라 사람이 진짜 많았어요, 특히 젊은 사람들이 많아서 좀 짜증 났어요." },
          { en: "As soon as we got there, we grabbed a table and checked the menu.", ko: "도착하자마자 자리 잡고 메뉴 확인했어요." },
          { en: "Then we ordered some drinks and snacks — I got draft beer that time.", ko: "그다음에 음료랑 안주 시켰는데, 그날은 생맥주로 했어요." },
          { en: "It was so good! I was really impressed by the flavor.", ko: "맛이 진짜 좋더라고요! 풍미가 인상 깊었어요." },
          { en: "After that, we just drank and talked about movies, family, work, that kind of thing.", ko: "그러고 나서 영화, 가족, 일 이런 얘기하면서 술 마셨어요." },
          { en: "Yeah, it was such a good time.", ko: "네, 진짜 좋은 시간이었어요." }
        ],
        pronunciation: [
          { en: "The last time I went to a bar was about two weeks ago.", ko: "더 래스트 타임 아이 웬투어 바 워즈 어바웃 투 윅스 어고" },
          { en: "My friend Jinwoo wanted to do something fun,", ko: "마이 프렌드 진우 원티드 투두 썸씽 펀" },
          { en: "so we decided to grab a drink together.", ko: "소 위 디사이디드 투 그래버 드링크 투게더" },
          { en: "We went to Star Bar, out on the edge of Seoul.", ko: "위 웬투 스타바, 아웃 온디 엣지 어브 서울" },
          { en: "It was packed that night, mostly with young people,", ko: "잇 워즈 팩트 댓 나잇, 모슬리 윗 영 피플" },
          { en: "so honestly, it was a little annoying.", ko: "소 아너슬리, 잇 워저 리럴 어노잉" },
          { en: "As soon as we got there, we grabbed a table and checked the menu.", ko: "애즈 순애즈 위 갓데어, 위 그랩드어 테이블 앤 첵트 더 메뉴" },
          { en: "Then we ordered some drinks and snacks —", ko: "덴 위 오더드 썸 드링크스 앤 스낵스" },
          { en: "I got draft beer that time.", ko: "아이 갓 드래프트 비어 댓 타임" },
          { en: "It was so good!", ko: "잇 워즈 소 굿" },
          { en: "I was really impressed by the flavor.", ko: "아이 워즈 릴리 임프레스트 바이 더 플레이버" },
          { en: "After that, we just drank and talked about movies, family, work, that kind of thing.", ko: "애프터댓, 위 저스트 드랭크 앤 톡트 어바웃 무비즈, 패밀리, 워크, 댓 카인더브 씽" },
          { en: "Yeah, it was such a good time.", ko: "예, 잇 워즈 서치어 굿 타임" }
        ],
        warnings: [
          { word: "packed", guide: "팩트" },
          { word: "annoying", guide: "어노잉" },
          { word: "draft beer", guide: "드래프트 비어" },
          { word: "impressed", guide: "임프레스트" }
        ]
      },
      {
        id: 85,
        question: "Describe a pub when you first began going to. How has it changed over the years?",
        translation: "처음 다니기 시작한 술집을 묘사해 주세요. 세월이 지나며 어떻게 변했나요?",
        type: "과거 비교",
        structure: ["예전: 테이블+의자만", "작아서 사람 많이 못받음", "조용하고 차분한 분위기", "지금: 주차장+와이파이+다트+TV", "가게 자체 커짐", "다양한 사람들 옴", "활기차고 신나는 분위기"],
        script: [
          { en: "The bar I first started going to has changed a lot over the years.", ko: "제가 처음 다니기 시작한 술집이 시간이 지나면서 많이 변했어요." },
          { en: "Back then, it only had the basics — just tables and chairs, really.", ko: "그때는 그냥 기본적인 것만 있었어요 — 테이블이랑 의자 정도요." },
          { en: "Since it wasn't that big, it couldn't fit many people.", ko: "크기가 크지 않아서 사람도 많이 못 받았고요." },
          { en: "So naturally, the vibe was pretty calm and quiet.", ko: "그래서 자연스럽게 분위기가 좀 조용하고 차분했어요." },
          { en: "Now it's got way more — a bigger parking lot, free Wi-Fi, a dart machine, TV screens, stuff like that.", ko: "지금은 훨씬 많아졌어요 — 주차장도 커지고, 와이파이도 무료고, 다트 기계도 있고, TV도 있고요." },
          { en: "The place got a lot bigger too, so all kinds of people go there now.", ko: "가게 자체도 훨씬 커져서 이제는 다양한 사람들이 와요." },
          { en: "And these days, it's got a much livelier, more upbeat vibe.", ko: "요즘은 훨씬 활기차고 신나는 분위기예요." }
        ],
        pronunciation: [
          { en: "The bar I first started going to has changed a lot over the years.", ko: "더 바 아이 퍼스트 스타티드 고잉투 해즈 체인지드 얼라럿 오버 더 이어즈" },
          { en: "Back then, it only had the basics —", ko: "백덴, 잇 온리 해드 더 베이직스" },
          { en: "just tables and chairs, really.", ko: "저스트 테이블즈 앤 체어즈, 릴리" },
          { en: "Since it wasn't that big, it couldn't fit many people.", ko: "신스 잇 워즌트 댓 빅, 잇 쿠든 핏 메니 피플" },
          { en: "So naturally, the vibe was pretty calm and quiet.", ko: "소 내추럴리, 더 바이브 워즈 프리티 캄 앤 콰이엇" },
          { en: "Now it's got way more —", ko: "나우 잇츠 갓 웨이 모어" },
          { en: "a bigger parking lot, free Wi-Fi, a dart machine, TV screens, stuff like that.", ko: "어 비거 파킹랏, 프리 와이파이, 어 다트 머신, 티비 스크린즈, 스터프 라이크댓" },
          { en: "The place got a lot bigger too, so all kinds of people go there now.", ko: "더 플레이스 갓 얼라럿 비거 투, 소 올 카인즈 어브 피플 고데어 나우" },
          { en: "And these days, it's got a much livelier, more upbeat vibe.", ko: "앤 디즈 데이즈, 잇츠 갓어 머치 라이블리어, 모어 업비잇 바이브" }
        ],
        warnings: [
          { word: "basics", guide: "베이직스" },
          { word: "vibe", guide: "바이브" },
          { word: "livelier", guide: "라이블리어" },
          { word: "upbeat", guide: "업비잇" }
        ]
      }
    ]
  },
  {
    id: 28, emoji: "🌳", nameKo: "공원",
    category: "선택주제",
    questions: [
      {
        id: 91,
        question: "You indicated in the survey that you go to parks. Tell me about one of your favorite parks in detail. What does it look like?",
        translation: "설문에서 공원에 간다고 하셨는데요. 가장 좋아하는 공원에 대해 자세히 말해 주세요. 어떤 모습인가요?",
        type: "장소묘사",
        structure: ["자주 가는 곳: 스타파크 (서울 변두리)", "약 1,000명 수용 가능한 규모", "집에서 도보 10분 거리", "교통비 안 들어 좋음", "다른 공원보다 시설 좋음: 주차장/화장실/와이파이/조깅코스", "전반적으로 방문하기 좋은 곳"],
        script: [
          { en: "The park I often go to is Star Park, which is located on the outskirts of Seoul.", ko: "제가 자주 가는 공원은 서울 변두리에 있는 스타파크예요." },
          { en: "It's big enough to hold about a thousand people.", ko: "한 천 명 정도는 거뜬히 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I like going there.", ko: "제가 자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's really close to my house — it only takes about ten minutes on foot.", ko: "우선, 집에서 정말 가까워요 — 걸어서 10분 정도밖에 안 걸려요." },
          { en: "So I don't have to spend much on transportation.", ko: "그래서 교통비를 많이 쓸 필요가 없어요." },
          { en: "Also, it has better facilities than other parks.", ko: "또, 다른 공원보다 시설이 좋아요." },
          { en: "For example, there's a big parking lot, clean restrooms, free Wi-Fi, and a beautiful jogging trail.", ko: "예를 들면, 넓은 주차장, 깨끗한 화장실, 무료 와이파이, 그리고 예쁜 조깅 코스가 있어요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 방문하기 정말 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The park I often go to is Star Park,", ko: "더 파크 아이 오픈 고투 이즈 스타파크" },
          { en: "which is located on the outskirts of Seoul.", ko: "위치즈 로케이티드 온디 아웃스커츠 어브 서울" },
          { en: "It's big enough to hold about a thousand people.", ko: "잇츠 빅 이너프 투 홀드 어바웃어 싸우전드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라러 퓨 리즌즈 아이 라익 고잉데어" },
          { en: "First, it's really close to my house —", ko: "퍼스트, 잇츠 릴리 클로스투 마이 하우스" },
          { en: "it only takes about ten minutes on foot.", ko: "잇 온리 테익스 어바웃 텐 미닛츠 온풋" },
          { en: "So I don't have to spend much on transportation.", ko: "소 아이 돈트 해브투 스펜드 머치 온 트랜스포테이션" },
          { en: "Also, it has better facilities than other parks.", ko: "얼소, 잇 해즈 베러 퍼실리티즈 댄 아더 파크스" },
          { en: "there's a big parking lot, clean restrooms,", ko: "데어저 빅 파킹랏, 클린 레스트룸즈" },
          { en: "free Wi-Fi, and a beautiful jogging trail.", ko: "프리 와이파이, 앤어 뷰티풀 조깅 트레일" },
          { en: "Overall, it's a great place to visit.", ko: "오버롤, 잇처 그레잇 플레이스 투 비짓" }
        ],
        warnings: [
          { word: "outskirts", guide: "아웃스커츠" },
          { word: "transportation", guide: "트랜스포테이션" },
          { word: "facilities", guide: "퍼실리티즈" },
          { word: "restrooms", guide: "레스트룸즈" }
        ]
      },
      {
        id: 92,
        question: "Tell me about your typical day at the park. What do you usually do at the park when you visit it?",
        translation: "공원에서 보내는 전형적인 하루에 대해 말해 주세요. 공원에 가면 보통 무엇을 하나요?",
        type: "활동패턴",
        structure: ["보통 주말에 한 번 감", "평일엔 바빠서 못 감", "친구 루다랑 감 (자유시간 비슷)", "가기 전 전화로 상의", "도착하면 스트레칭부터", "이후 조깅 or 산책 약 2시간", "벤치에서 휴식+수다 (드라마/가족/일)", "특별친 않지만 항상 즐김"],
        script: [
          { en: "I usually go to the park once a week, mostly on weekends.", ko: "저는 보통 일주일에 한 번, 주로 주말에 공원에 가요." },
          { en: "On weekdays, I'm too busy with work, so I don't really have time to go.", ko: "평일에는 일하느라 바빠서 갈 시간이 별로 없어요." },
          { en: "I normally go with my best friend, Looda, since we tend to have the same free time.", ko: "보통 가장 친한 친구 루다랑 같이 가는데, 자유 시간이 비슷하거든요." },
          { en: "Before we go, I usually call her to talk about when to meet and what to do there.", ko: "가기 전에 보통 전화로 언제 만날지, 뭐 할지 얘기해요." },
          { en: "We like to work out when we're there.", ko: "가면 보통 운동을 하는 편이에요." },
          { en: "When we arrive, we start with some light stretching to warm up.", ko: "도착하면 먼저 가볍게 스트레칭으로 몸을 풀어요." },
          { en: "Then we go jogging or just take a walk for about two hours.", ko: "그러고 나서 한두 시간 정도 조깅하거나 그냥 산책을 해요." },
          { en: "After that, we rest on a bench and chat about dramas, family, work, stuff like that.", ko: "그 후엔 벤치에 앉아서 드라마, 가족, 일 이런 얘기하면서 쉬어요." },
          { en: "It's nothing too special, but I always enjoy it.", ko: "그렇게 특별하진 않지만 항상 즐거워요." }
        ],
        pronunciation: [
          { en: "I usually go to the park once a week,", ko: "아이 유주얼리 고투더 파크 원서 윅" },
          { en: "mostly on weekends.", ko: "모스틀리 온 위켄즈" },
          { en: "On weekdays, I'm too busy with work,", ko: "온 위크데이즈, 아임 투 비지 윗 워크" },
          { en: "so I don't really have time to go.", ko: "소 아이 돈트 릴리 해브 타임투고" },
          { en: "I normally go with my best friend, Looda,", ko: "아이 노멀리 고 윗마이 베스트 프렌드, 루다" },
          { en: "since we tend to have the same free time.", ko: "신스 위 텐투 해브더 세임 프리 타임" },
          { en: "Before we go, I usually call her", ko: "비포어 위고, 아이 유주얼리 콜허" },
          { en: "to talk about when to meet and what to do there.", ko: "투 토커바웃 웬투밋 앤 왓투두데어" },
          { en: "When we arrive, we start with some light stretching to warm up.", ko: "웬 위 어라이브, 위 스타트 윗섬 라잇 스트레칭 투 웜업" },
          { en: "Then we go jogging or just take a walk for about two hours.", ko: "덴 위고 조깅 오어 저스트 테이커 워크 퍼러바웃 투아워즈" },
          { en: "After that, we rest on a bench", ko: "애프터댓, 위 레스트 온어 벤치" },
          { en: "and chat about dramas, family, work, stuff like that.", ko: "앤 챗 어바웃 드라마즈, 패밀리, 워크, 스터프 라익댓" },
          { en: "It's nothing too special, but I always enjoy it.", ko: "잇츠 낫씽 투 스페셜, 벗 아이 올웨이즈 인조이잇" }
        ],
        warnings: [
          { word: "stretching", guide: "스트레칭" },
          { word: "usually", guide: "유주얼리" },
          { word: "friend", guide: "프렌드" },
          { word: "special", guide: "스페셜" }
        ]
      },
      {
        id: 90,
        question: "Tell me about the last time you went to the park. When was it? What did you do at the park? Tell me about your last visit to the park in as much detail as possible.",
        translation: "공원에 마지막으로 갔던 때에 대해 말해 주세요. 언제였나요? 공원에서 무엇을 했나요? 최대한 자세히 말해 주세요.",
        type: "최근경험",
        structure: ["2주 전, 친구 진우", "재미있는 거 하려고 운동 제안", "스타파크 (서울 변두리)", "붐벼서 짜증남", "도착 후 스트레칭", "2시간 조깅", "풍경/호수뷰에 감명", "벤치에서 휴식+수다", "좋은 시간이었음"],
        script: [
          { en: "The last time I went to a park was two weeks ago.", ko: "마지막으로 공원에 간 건 2주 전이었어요." },
          { en: "At that time, my friend 진우 wanted to do something fun, so we decided to go to a park and work out.", ko: "그때 친구 진우가 재미있는 걸 하고 싶어 해서, 공원에 가서 운동하기로 했어요." },
          { en: "We went to Star Park, which was located on the outskirts of Seoul.", ko: "서울 변두리에 있는 스타파크에 갔어요." },
          { en: "The park was very crowded, especially with many young people, so I was a bit annoyed.", ko: "공원이 굉장히 붐볐는데, 특히 젊은 사람들이 많아서 조금 짜증이 났어요." },
          { en: "As soon as we arrived there, we first did some stretches as warm-ups.", ko: "도착하자마자 먼저 준비운동으로 스트레칭을 좀 했어요." },
          { en: "Then, we went jogging for about two hours.", ko: "그러고 나서 약 두 시간 동안 조깅을 했어요." },
          { en: "The park scenery was awesome! I was especially impressed by the beautiful lake view.", ko: "공원 풍경이 정말 멋있었어요! 특히 아름다운 호수 전망에 감명받았어요." },
          { en: "After that, we got some rest on the bench, having a chat about movies, family, work, and so on.", ko: "그 후에는 벤치에서 쉬면서 영화, 가족, 일 이런 얘기를 했어요." },
          { en: "Well, it was such a great time!", ko: "정말 좋은 시간이었어요!" }
        ],
        pronunciation: [
          { en: "The last time I went to a park was two weeks ago.", ko: "더 래스트 타임 아이 웬투어 파크 워즈 투 윅스어고" },
          { en: "At that time, my friend 진우 wanted to do something fun,", ko: "앳댓 타임, 마이 프렌드 진우 원티드 투두 썸씽 펀" },
          { en: "so we decided to go to a park and work out.", ko: "소 위 디사이디드 투고투어 파크 앤 워크아웃" },
          { en: "We went to Star Park,", ko: "위 웬투 스타파크" },
          { en: "which was located on the outskirts of Seoul.", ko: "위치 워즈 로케이티드 온디 아웃스커츠 어브 서울" },
          { en: "The park was very crowded,", ko: "더 파크 워즈 베리 크라우디드" },
          { en: "especially with many young people, so I was a bit annoyed.", ko: "이스페셜리 윗 매니 영 피플, 소 아이 워저 빗 어노이드" },
          { en: "As soon as we arrived there,", ko: "애즈 순애즈 위 어라이브드" },
          { en: "we first did some stretches as warm-ups.", ko: "위 퍼스트 디드 썸 스트레치즈 애즈 웜업스" },
          { en: "Then, we went jogging for about two hours.", ko: "덴, 위 웬트 조깅 퍼러바웃 투아워즈" },
          { en: "The park scenery was awesome!", ko: "더 파크 씨너리 워즈 오섬" },
          { en: "I was especially impressed by the beautiful lake view.", ko: "아이 워즈 이스페셜리 임프레스트 바이더 뷰티풀 레이크 뷰" },
          { en: "After that, we got some rest on the bench,", ko: "애프터댓, 위 갓 썸 레스트 온더 벤치" },
          { en: "having a chat about movies, family, work, and so on.", ko: "해빙어 챗 어바웃 무비즈, 패밀리, 워크, 앤 소온" },
          { en: "Well, it was such a great time!", ko: "웰, 잇 워즈 서치어 그레잇 타임" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "scenery", guide: "씨너리" },
          { word: "impressed", guide: "임프레스트" },
          { word: "warm-ups", guide: "웜업스" }
        ]
      },
      {
        id: 93,
        question: "Tell me about a memorable event that happened in the park when you visited there. Start by telling me the background: when it was, where it was, and what you were doing. Then, tell me everything you remember related to that incident.",
        translation: "공원에 갔을 때 있었던 기억에 남는 일에 대해 말해 주세요. 언제였는지, 어디였는지, 무엇을 하고 있었는지부터 이야기해 주시고, 그 사건에 대해 기억나는 것을 전부 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년 전 동탄중앙공원", "혼자 조깅 중", "이상한 라이브 노랫소리 들림", "궁금해서 따라감", "직장 동료가 여친에게 노래 프러포즈", "당황+민망한 상황", "주변인들 웃음", "결국 프러포즈 성공", "공원 갈 때마다 생각남"],
        script: [
          { en: "About two years ago, I had a very memorable experience at Dongtan Central Park.", ko: "약 2년 전, 동탄 중앙공원에서 정말 기억에 남는 경험을 했어요." },
          { en: "At that time, I was jogging alone along the park trail.", ko: "그때 저는 공원 산책로를 따라 혼자 조깅하고 있었어요." },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "갑자기 끔찍한 라이브 노랫소리가 들렸어요." },
          { en: "It was so terrible that I couldn't stand it.", ko: "너무 끔찍해서 참을 수가 없었어요." },
          { en: "I was curious, so I followed the sound.", ko: "궁금해서 그 소리를 따라갔어요." },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "공원 한가운데서 누군가 여자친구에게 노래를 불러주고 있었어요." },
          { en: "And you know what? He was my colleague!", ko: "그런데 있잖아요? 그 사람은 제 직장 동료였어요!" },
          { en: "He was proposing to her by singing!", ko: "노래로 프러포즈를 하고 있었던 거예요!" },
          { en: "Poor her! She looked embarrassed, and I was very ashamed too.", ko: "불쌍한 그녀! 여자친구는 당황한 표정이었고, 저도 너무 민망했어요." },
          { en: "Some people around him were even laughing.", ko: "주변 사람들 중 몇몇은 웃기까지 했어요." },
          { en: "I didn't know why he chose singing as a proposal, but he got a 'yes' in the end.", ko: "왜 하필 노래를 프러포즈 방법으로 골랐는지는 모르겠지만, 결국 그는 '예스'를 받아냈어요." },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "그날 이후로 그 공원에 갈 때마다 그 재밌었던 순간이 떠올라요." }
        ],
        pronunciation: [
          { en: "About two years ago,", ko: "어바웃 투 이어즈어고" },
          { en: "I had a very memorable experience", ko: "아이 해더 베리 메머러블 익스피어리언스" },
          { en: "at Dongtan Central Park.", ko: "앳 동탄 센트럴 파크" },
          { en: "At that time, I was jogging alone", ko: "앳 댓 타임, 아이 워즈 조깅 얼론" },
          { en: "along the park trail.", ko: "얼롱 더 파크 트레일" },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "서든리, 아이 허더 테러블 라이브 뮤직 사운드" },
          { en: "It was so terrible that I couldn't stand it.", ko: "잇 워즈 소 테러블 댓 아이 쿠든트 스탠딧" },
          { en: "I was curious, so I followed the sound.", ko: "아이 워즈 큐리어스, 소 아이 팔로우드 더 사운드" },
          { en: "In the middle of the park,", ko: "인더 미들 어브더 파크" },
          { en: "someone was singing a song to his girlfriend.", ko: "썸원 워즈 싱잉어 송 투 히즈 걸프렌드" },
          { en: "And you know what?", ko: "앤 유 노우 왓" },
          { en: "He was my colleague!", ko: "히 워즈 마이 컬리그" },
          { en: "He was proposing to her by singing!", ko: "히 워즈 프러포징 투허 바이 싱잉" },
          { en: "Poor her!", ko: "푸어 허" },
          { en: "She looked embarrassed,", ko: "쉬 룩트 임배러스트" },
          { en: "and I was very ashamed too.", ko: "앤 아이 워즈 베리 어셰임드 투" },
          { en: "Some people around him were even laughing.", ko: "썸 피플 어라운드힘 워 이븐 래핑" },
          { en: "I didn't know why he chose singing as a proposal,", ko: "아이 디든 노우 와이 히 초우즈 싱잉 애저 프러포절" },
          { en: "but he got a 'yes' in the end.", ko: "벗 히 가더 예스 인디 엔드" },
          { en: "Since that day, whenever I visit the park,", ko: "신스 댓 데이, 웨네버 아이 비짓 더 파크" },
          { en: "I remember that funny moment.", ko: "아이 리멤버 댓 퍼니 모먼트" }
        ],
        warnings: [
          { word: "colleague", guide: "컬리그" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "ashamed", guide: "어셰임드" },
          { word: "proposing", guide: "프러포징" }
        ]
      }
    ]
  },
  {
    id: 29, emoji: "🏖️", nameKo: "해변",
    category: "선택주제",
    questions: [
      {
        id: 94,
        question: "Tell me about your favorite beach. What does it look like?",
        translation: "가장 좋아하는 해변에 대해 말해 주세요. 어떤 모습인가요?",
        type: "장소묘사",
        structure: ["자주 가는 곳: 만리포 해변(서해안)", "약 만 명 수용 가능한 규모", "집에서 차로 2시간 거리", "교통비 부담 적음", "다른 해변보다 시설 좋음: 주차장/화장실/와이파이/샤워시설", "전반적으로 방문하기 좋은 곳"],
        script: [
          { en: "The beach I often go to is Manripo Beach, which is located on the west coast of Korea.", ko: "제가 자주 가는 해변은 한국 서해안에 있는 만리포 해변이에요." },
          { en: "It's big enough to hold about ten thousand people.", ko: "만 명 정도는 거뜬히 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I like going there.", ko: "제가 자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's pretty close to my house — it only takes about two hours by car.", ko: "우선, 집에서 꽤 가까워요 — 차로 두 시간 정도밖에 안 걸려요." },
          { en: "So I don't have to spend that much on transportation.", ko: "그래서 교통비를 많이 쓸 필요가 없어요." },
          { en: "Also, it has better facilities than other beaches.", ko: "또, 다른 해변보다 시설이 좋아요." },
          { en: "For example, there's a big parking lot, clean restrooms, free Wi-Fi, and good shower facilities.", ko: "예를 들면, 넓은 주차장, 깨끗한 화장실, 무료 와이파이, 그리고 좋은 샤워 시설이 있어요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 방문하기 정말 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The beach I often go to is Manripo Beach,", ko: "더 비치 아이 오픈 고투 이즈 만리포 비치" },
          { en: "which is located on the west coast of Korea.", ko: "위치즈 로케이티드 온더 웨스트 코스트 어브 코리아" },
          { en: "It's big enough to hold about ten thousand people.", ko: "잇츠 빅 이너프 투 홀드 어바웃 텐 싸우전드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라러 퓨 리즌즈 아이 라익 고잉데어" },
          { en: "First, it's pretty close to my house —", ko: "퍼스트, 잇츠 프리티 클로스투 마이 하우스" },
          { en: "it only takes about two hours by car.", ko: "잇 온리 테익스 어바웃 투 아워즈 바이 카" },
          { en: "So I don't have to spend that much on transportation.", ko: "소 아이 돈트 해브투 스펜드 댓 머치 온 트랜스포테이션" },
          { en: "Also, it has better facilities than other beaches.", ko: "얼소, 잇 해즈 베러 퍼실리티즈 댄 아더 비치스" },
          { en: "there's a big parking lot, clean restrooms,", ko: "데어저 빅 파킹랏, 클린 레스트룸즈" },
          { en: "free Wi-Fi, and good shower facilities.", ko: "프리 와이파이, 앤 굿 샤워 퍼실리티즈" },
          { en: "Overall, it's a great place to visit.", ko: "오버롤, 잇처 그레잇 플레이스 투 비짓" }
        ],
        warnings: [
          { word: "facilities", guide: "퍼실리티즈" },
          { word: "transportation", guide: "트랜스포테이션" },
          { word: "restrooms", guide: "레스트룸즈" },
          { word: "located", guide: "로케이티드" }
        ]
      },
      {
        id: 95,
        question: "What kinds of activities do you like to do at the beach? What do you typically do when you go there?",
        translation: "해변에서 어떤 활동을 즐기나요? 해변에 가면 보통 뭘 하나요?",
        type: "활동묘사",
        structure: ["보통 휴가 때 감", "평소엔 바빠서 못감", "친구 루다랑 감(자유시간 비슷)", "가기전 전화로 상의", "도착하면 자리 잡고 짐 풀기", "바다수영/보트/모래성", "휴가 얘기하며 식사", "특별친 않지만 항상 즐김"],
        script: [
          { en: "I go to the beach once in a while, mostly during my vacations.", ko: "저는 가끔, 주로 휴가 때 해변에 가요." },
          { en: "On regular days, I'm too busy with work, so I don't really have time to go.", ko: "평소엔 일하느라 바빠서 갈 시간이 별로 없어요." },
          { en: "I normally go with my best friend, Looda, since we tend to have the same free time.", ko: "보통 가장 친한 친구 루다랑 같이 가는데, 자유 시간이 비슷하거든요." },
          { en: "Before we go, I usually call her to talk about when and where to go and what to do there.", ko: "가기 전에 보통 전화로 언제 어디로 갈지, 뭐 할지 얘기해요." },
          { en: "We like to swim in the ocean when we're there.", ko: "가면 보통 바다에서 수영하는 걸 좋아해요." },
          { en: "When we arrive, we first find a spot to rest and unpack.", ko: "도착하면 먼저 쉴 자리를 잡고 짐을 풀어요." },
          { en: "Then we enjoy swimming, riding a boat, and building sandcastles.", ko: "그러고 나서 수영도 하고, 보트도 타고, 모래성도 쌓으면서 놀아요." },
          { en: "After that, we grab some food and chat about our vacation.", ko: "그 후엔 뭐 좀 먹으면서 휴가 얘기를 해요." },
          { en: "It's nothing too special, but I always enjoy it.", ko: "그렇게 특별하진 않지만 항상 즐거워요." }
        ],
        pronunciation: [
          { en: "I go to the beach once in a while,", ko: "아이 고투더 비치 원신어 와일" },
          { en: "mostly during my vacations.", ko: "모스틀리 듀링 마이 베케이션즈" },
          { en: "On regular days, I'm too busy with work,", ko: "온 레귤러 데이즈, 아임 투 비지 윗 워크" },
          { en: "so I don't really have time to go.", ko: "소 아이 돈트 릴리 해브 타임투고" },
          { en: "I normally go with my best friend, Looda,", ko: "아이 노멀리 고 윗마이 베스트 프렌드, 루다" },
          { en: "since we tend to have the same free time.", ko: "신스 위 텐투 해브더 세임 프리 타임" },
          { en: "Before we go, I usually call her", ko: "비포어 위고, 아이 유주얼리 콜허" },
          { en: "to talk about when and where to go and what to do there.", ko: "투 토커바웃 웬앤웨어 투고 앤 왓투두데어" },
          { en: "We like to swim in the ocean when we're there.", ko: "위 라익투 스윔 인디 오션 웬위어데어" },
          { en: "When we arrive, we first find a spot to rest and unpack.", ko: "웬 위 어라이브, 위 퍼스트 파인더 스팟 투 레스트 앤 언팩" },
          { en: "Then we enjoy swimming, riding a boat, and building sandcastles.", ko: "덴 위 인조이 스위밍, 라이딩어 보트, 앤 빌딩 샌드캐슬즈" },
          { en: "After that, we grab some food and chat about our vacation.", ko: "애프터댓, 위 그랩 썸 푸드 앤 챗 어바웃 아워 베케이션" },
          { en: "It's nothing too special, but I always enjoy it.", ko: "잇츠 낫씽 투 스페셜, 벗 아이 올웨이즈 인조이잇" }
        ],
        warnings: [
          { word: "vacations", guide: "베케이션즈" },
          { word: "sandcastles", guide: "샌드캐슬즈" },
          { word: "unpack", guide: "언팩" },
          { word: "normally", guide: "노멀리" }
        ]
      },
      {
        id: 96,
        question: "Tell me about a beautiful or memorable beach you've been to. What was it like?",
        translation: "가보신 곳 중 아름답거나 기억에 남는 해변에 대해 말해 주세요. 어떤 모습이었나요?",
        type: "장소 과거 묘사",
        structure: ["10년 전 해운대 처음 방문", "가족과 여름휴가", "해변 규모에 놀람", "젊은사람+관광객으로 붐빔", "주변 카페/호텔/식당 화려함", "바닷가 카페가 제일 좋았음", "바다 전망 감상", "방문하기 좋은 곳이었음"],
        script: [
          { en: "I remember visiting Haeundae Beach for the first time about ten years ago.", ko: "10년쯤 전에 해운대 해변을 처음 갔던 게 기억나요." },
          { en: "At the time, my family wanted to enjoy our summer vacation, and we'd heard Haeundae was really popular.", ko: "그때 가족이 여름휴가를 즐기고 싶어 했는데, 해운대가 엄청 인기 있다고 들었거든요." },
          { en: "When we got there, we were surprised by how huge the beach was.", ko: "가보니 해변 규모가 엄청 커서 놀랐어요." },
          { en: "It was really long and wide.", ko: "정말 길고 넓었어요." },
          { en: "It was packed, especially with young people and tourists — everyone looked excited.", ko: "특히 젊은 사람들이랑 관광객들로 꽉 차 있었는데, 다들 신나 보였어요." },
          { en: "Along the beach, there were tons of cafes, hotels, and restaurants, all pretty fancy and modern.", ko: "해변 주변에는 카페, 호텔, 식당이 즐비했는데 다 화려하고 세련됐더라고요." },
          { en: "What I liked most about it was the seaside cafes.", ko: "제일 좋았던 건 바닷가 카페들이었어요." },
          { en: "I could enjoy the beautiful ocean view while sitting at one of them.", ko: "카페에 앉아서 아름다운 바다 전망을 즐길 수 있었어요." },
          { en: "Overall, Haeundae was an amazing place to visit.", ko: "전반적으로 정말 방문할 만한 곳이었어요." }
        ],
        pronunciation: [
          { en: "I remember visiting Haeundae Beach for the first time", ko: "아이 리멤버 비지팅 해운대 비치 퍼더 퍼스트 타임" },
          { en: "about ten years ago.", ko: "어바웃 텐 이어즈 어고" },
          { en: "At the time, my family wanted to enjoy our summer vacation,", ko: "앳더 타임, 마이 패밀리 원티드 투 인조이 아워 서머 베케이션" },
          { en: "and we'd heard Haeundae was really popular.", ko: "앤 위드 허드 해운대 워즈 릴리 파퓰러" },
          { en: "When we got there, we were surprised by how huge the beach was.", ko: "웬위 갓데어, 위 워 서프라이즈드 바이 하우 휴지 더 비치 워즈" },
          { en: "It was really long and wide.", ko: "잇 워즈 릴리 롱 앤 와이드" },
          { en: "It was packed, especially with young people and tourists —", ko: "잇 워즈 팩트, 이스페셜리 윗 영 피플 앤 투어리스츠" },
          { en: "everyone looked excited.", ko: "에브리원 룩트 익사이티드" },
          { en: "Along the beach, there were tons of cafes, hotels, and restaurants,", ko: "얼롱더 비치, 데어워 턴즈어브 카페이즈, 호텔즈, 앤 레스토랑츠" },
          { en: "all pretty fancy and modern.", ko: "올 프리티 팬시 앤 모던" },
          { en: "What I liked most about it was the seaside cafes.", ko: "왓아이 라익트 모스트 어바우릿 워즈 더 씨사이드 카페이즈" },
          { en: "I could enjoy the beautiful ocean view while sitting at one of them.", ko: "아이쿠드 인조이 더 뷰티풀 오션 뷰 와일 시딩앳 원어브뎀" },
          { en: "Overall, Haeundae was an amazing place to visit.", ko: "오버롤, 해운대 워저 어메이징 플레이스 투 비짓" }
        ],
        warnings: [
          { word: "popular", guide: "파퓰러" },
          { word: "tourists", guide: "투어리스츠" },
          { word: "excited", guide: "익사이티드" },
          { word: "amazing", guide: "어메이징" }
        ]
      },
      {
        id: 97,
        question: "Have you ever experienced a funny or interesting incident while you were at the beach? Tell me about the experience in detail.",
        translation: "해변에서 있었던 재미있거나 특이한 경험이 있나요? 그 경험을 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["두 달 전, 속초 해변", "친구 성규와 감", "성규가 화장실 간 사이 혼자 맥주 마심", "지나가던 여자가 부딪혀 셔츠에 커피 쏟음", "화가 나서 계속 뭐라 함", "친구 돌아옴 → 그 여자가 친구의 아내였음", "엄청 당황+계속 사과함", "그 후로 해변 갈 때마다 생각남"],
        script: [
          { en: "About two months ago, I had a really memorable time at the beach.", ko: "두 달쯤 전에 해변에서 정말 기억에 남는 일이 있었어요." },
          { en: "I went to Sokcho Beach with my best friend, Sunggyu.", ko: "가장 친한 친구 성규랑 속초 해변에 갔었어요." },
          { en: "After a while, he went to the restroom, and I was just relaxing with a beer, waiting for him.", ko: "잠시 후에 그가 화장실에 가서, 저는 맥주 마시면서 그를 기다리고 있었어요." },
          { en: "Suddenly, a woman bumped into me while walking by and spilled her coffee all over my shirt.", ko: "그런데 갑자기 지나가던 여자분이 저랑 부딪히면서 셔츠에 커피를 쏟았어요." },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "셔츠가 완전히 젖어서 정말 속상했어요." },
          { en: "Even though she apologized, I kept complaining to her.", ko: "그분이 사과했는데도 저는 계속 뭐라고 했어요." },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "그러다 친구가 돌아왔는데, 완전 충격이었어요 — 그 여자분이 친구 아내였던 거예요!" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "너무 당황해서 계속 사과했어요." },
          { en: "Since then, I always remember it when I go to that beach.", ko: "그 이후로, 저는 그 해변에 갈 때마다 항상 그 일이 생각나요." }
        ],
        pronunciation: [
          { en: "About two months ago, I had a really memorable time at the beach.", ko: "어바웃 투 먼쓰어고, 아이 해더 릴리 메머러블 타임 앳더 비치" },
          { en: "I went to Sokcho Beach with my best friend, Sunggyu.", ko: "아이 웬트 투 속초 비치 윗마이 베스트 프렌드, 성규" },
          { en: "After a while, he went to the restroom,", ko: "애프터러 와일, 히 웬트투더 레스트룸" },
          { en: "and I was just relaxing with a beer, waiting for him.", ko: "앤 아이 워즈 저스트 릴렉싱 위더 비어, 웨이팅 퍼힘" },
          { en: "Suddenly, a woman bumped into me while walking by", ko: "서든리, 어 우먼 범트인투미 와일 워킹바이" },
          { en: "and spilled her coffee all over my shirt.", ko: "앤 스필드 허 커피 올오버 마이 셔츠" },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "마이 셔츠 갓 컴플리틀리 소우크트, 앤 아이 갓 릴리 업셋" },
          { en: "Even though she apologized, I kept complaining to her.", ko: "이븐도우 쉬 어팔러자이즈드, 아이 켑트 컴플레이닝투허" },
          { en: "Then, when my friend came back, I was totally shocked —", ko: "덴, 웬마이 프렌드 케임백, 아이 워즈 토탈리 샥트" },
          { en: "she was his wife!", ko: "쉬 워즈 히즈 와이프" },
          { en: "I was so embarrassed.", ko: "아이 워즈 소우 임배러스트" },
          { en: "I kept apologizing to her over and over.", ko: "아이 켑트 어팔러자이징투허 오버앤오버" },
          { en: "Since then, I always remember it when I go to that beach.", ko: "신스덴, 아이 올웨이즈 리멤버릿 웬아이 고투댓 비치" }
        ],
        warnings: [
          { word: "apologized", guide: "어팔러자이즈드" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "incident", guide: "인시던트" },
          { word: "complaining", guide: "컴플레이닝" }
        ]
      }
    ]
  },
  {
    id: 30, emoji: "🧳", nameKo: "국내여행",
    category: "선택주제",
    questions: [
      {
        id: 98,
        question: "You indicated that you take vacations domestically. Tell me some places you like to travel to and why.",
        translation: "국내로 여행을 다니신다고 하셨는데요. 좋아하는 여행지와 그 이유를 말해 주세요.",
        type: "장소묘사",
        structure: ["자주 가는 곳: 만리포 해변(서해안)", "약 만 명 수용 가능한 규모", "집에서 차로 2시간 거리", "교통비 부담 적음", "다른 곳보다 시설 좋음: 호텔/식당/관광지/카페", "전반적으로 방문하기 좋은 곳"],
        script: [
          { en: "The place I often travel to domestically is Manripo Beach, on the west coast of Korea.", ko: "제가 국내 여행으로 자주 가는 곳은 한국 서해안에 있는 만리포 해변이에요." },
          { en: "It's big enough to hold about ten thousand people.", ko: "만 명 정도는 거뜬히 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I like going there.", ko: "제가 자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's pretty close to my house — only about two hours by car.", ko: "우선, 집에서 꽤 가까워요 — 차로 두 시간 정도밖에 안 걸려요." },
          { en: "So I don't need to spend much on transportation.", ko: "그래서 교통비를 많이 쓸 필요가 없어요." },
          { en: "Also, it has better facilities than other places.", ko: "또, 다른 곳보다 시설이 좋아요." },
          { en: "For example, there are nice hotels, good restaurants, famous attractions, and beautiful cafes.", ko: "예를 들면, 좋은 호텔, 맛있는 식당, 유명한 관광지, 예쁜 카페들이 있어요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 방문하기 정말 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The place I often travel to domestically", ko: "더 플레이스 아이 오픈 트래블 투 더메스티컬리" },
          { en: "is Manripo Beach, on the west coast of Korea.", ko: "이즈 만리포 비치, 온더 웨스트 코스트 어브 코리아" },
          { en: "It's big enough to hold about ten thousand people.", ko: "잇츠 빅 이너프 투 홀드 어바웃 텐 싸우전드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라러 퓨 리즌즈 아이 라익 고잉데어" },
          { en: "First, it's pretty close to my house —", ko: "퍼스트, 잇츠 프리티 클로스투 마이 하우스" },
          { en: "only about two hours by car.", ko: "온리 어바웃 투 아워즈 바이 카" },
          { en: "So I don't need to spend much on transportation.", ko: "소 아이 돈 니투 스펜드 머치 온 트랜스포테이션" },
          { en: "Also, it has better facilities than other places.", ko: "얼소, 잇 해즈 베러 퍼실리티즈 댄 아더 플레이시즈" },
          { en: "there are nice hotels, good restaurants,", ko: "데어라 나이스 호텔즈, 굿 레스토랑츠" },
          { en: "famous attractions, and beautiful cafes.", ko: "페이머스 어트랙션즈, 앤 뷰티풀 카페이즈" },
          { en: "Overall, it's a great place to visit.", ko: "오버롤, 잇처 그레잇 플레이스 투 비짓" }
        ],
        warnings: [
          { word: "domestically", guide: "더메스티컬리" },
          { word: "attractions", guide: "어트랙션즈" },
          { word: "transportation", guide: "트랜스포테이션" },
          { word: "facilities", guide: "퍼실리티즈" }
        ]
      },
      {
        id: 99,
        question: "Can you tell me all the things you do in order to prepare for a trip?",
        translation: "여행을 준비할 때 순서대로 어떤 걸 하는지 말해 주세요.",
        type: "활동묘사",
        structure: ["여러 단계로 순서대로 준비", "1단계: 목적지+일정 결정", "2단계: 인터넷으로 정보 검색(호텔/식당/관광지/교통)", "3단계: 호텔+교통편 예약(인터넷이 빠르고 확인 쉬움)", "4단계: 전날 짐 싸기(옷/속옷/재킷/우산/간식)", "마무리"],
        script: [
          { en: "When I get ready for a trip, I go through a few steps in order.", ko: "여행 갈 준비를 할 때는 몇 단계를 순서대로 거쳐요." },
          { en: "First, I decide on the destination and the itinerary.", ko: "먼저 목적지랑 일정을 정해요." },
          { en: "Once that's set, I search online for information about the place — nice hotels, good restaurants, famous attractions, and transportation.", ko: "그게 정해지면 인터넷으로 그 지역 정보를 찾아봐요 — 좋은 호텔, 맛있는 식당, 유명한 관광지, 교통편 같은 거요." },
          { en: "Then I book a hotel and transportation, usually online, since it's the fastest way and easy to confirm.", ko: "그다음엔 호텔이랑 교통편을 예약하는데, 보통 인터넷으로 해요, 제일 빠르고 확인하기도 쉽거든요." },
          { en: "The day before the trip, I pack my things — clothes, underwear, a light jacket, an umbrella, some snacks, and so on.", ko: "여행 전날에는 짐을 싸요 — 옷, 속옷, 얇은 재킷, 우산, 간식 이런 것들이요." },
          { en: "That's pretty much how I prepare for a trip.", ko: "이게 대략 제가 여행을 준비하는 방식이에요." }
        ],
        pronunciation: [
          { en: "When I get ready for a trip,", ko: "웬아이 겟 레디 퍼러 트립" },
          { en: "I go through a few steps in order.", ko: "아이 고 쓰루어 퓨 스텝스 인 오더" },
          { en: "First, I decide on the destination and the itinerary.", ko: "퍼스트, 아이 디사이드 온더 데스티네이션 앤디 아이티너레리" },
          { en: "Once that's set, I search online for information about the place —", ko: "원스 댓츠 셋, 아이 서치 온라인 퍼 인포메이션 어바웃더 플레이스" },
          { en: "nice hotels, good restaurants, famous attractions, and transportation.", ko: "나이스 호텔즈, 굿 레스토랑츠, 페이머스 어트랙션즈, 앤 트랜스포테이션" },
          { en: "Then I book a hotel and transportation, usually online,", ko: "덴 아이 북어 호텔 앤 트랜스포테이션, 유주얼리 온라인" },
          { en: "since it's the fastest way and easy to confirm.", ko: "신스 잇츠더 패스티스트 웨이 앤 이지투 컨펌" },
          { en: "The day before the trip, I pack my things —", ko: "더 데이 비포더 트립, 아이 팩 마이 씽즈" },
          { en: "clothes, underwear, a light jacket, an umbrella, some snacks, and so on.", ko: "클로즈, 언더웨어, 어 라잇 재킷, 언 엄브렐라, 썸 스낵스, 앤 소온" },
          { en: "That's pretty much how I prepare for a trip.", ko: "댓츠 프리티 머치 하우아이 프리페어 퍼러 트립" }
        ],
        warnings: [
          { word: "itinerary", guide: "아이티너레리" },
          { word: "destination", guide: "데스티네이션" },
          { word: "confirm", guide: "컨펌" },
          { word: "umbrella", guide: "엄브렐라" }
        ]
      },
      {
        id: 100,
        question: "Tell me about some of the trips you took in your youth. Where did you go, who with, and what did you do?",
        translation: "어릴 때 갔던 여행에 대해 말해 주세요. 어디로, 누구와 갔고, 뭘 했나요?",
        type: "과거 경험",
        structure: ["중학교 때 여행", "가족과 재밌는거 하려고", "속초 해변(동해안)", "커플들로 붐벼서 짜증", "도착 후 자리+짐정리", "수영/보트/모래성", "풍경+바다뷰에 감명", "먹으며 휴가 얘기", "좋은 시간이었음"],
        script: [
          { en: "I remember a trip I took back in middle school.", ko: "중학교 때 갔던 여행이 생각나요." },
          { en: "At the time, my family wanted to do something fun, so we decided to go to the beach.", ko: "그때 가족이 재미있는 걸 하고 싶어 해서 해변에 가기로 했어요." },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "한국 동해안에 있는 속초 해변에 갔어요." },
          { en: "It was really crowded, especially with couples, so I was a bit annoyed.", ko: "특히 커플들이 많아서 꽤 붐볐는데, 그래서 좀 짜증났어요." },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "도착하자마자 쉴 자리를 찾고 짐을 풀었어요." },
          { en: "Then we went swimming, rode a boat, and built some sandcastles.", ko: "그러고 나서 수영도 하고, 보트도 타고, 모래성도 쌓았어요." },
          { en: "The scenery was amazing — I was especially impressed by the beautiful ocean view.", ko: "풍경이 정말 멋있었는데, 특히 아름다운 바다 전망에 감명받았어요." },
          { en: "After that, we grabbed some food and talked about our vacation.", ko: "그 후에는 뭐 좀 먹으면서 휴가 얘기를 했어요." },
          { en: "Well, it was such a great time!", ko: "정말 좋은 시간이었어요!" }
        ],
        pronunciation: [
          { en: "I remember a trip I took back in middle school.", ko: "아이 리멤버러 트립 아이 툭 백인 미들 스쿨" },
          { en: "At the time, my family wanted to do something fun,", ko: "앳더 타임, 마이 패밀리 원티드투두 썸씽 펀" },
          { en: "so we decided to go to the beach.", ko: "소 위 디사이디드 투고투더 비치" },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "위 웬투 속초 비치, 온디 이스트 코스트 어브 코리아" },
          { en: "It was really crowded, especially with couples,", ko: "잇 워즈 릴리 크라우디드, 이스페셜리 윗 커플즈" },
          { en: "so I was a bit annoyed.", ko: "소 아이 워저 빗 어노이드" },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "애즈 순애즈 위 갓데어, 위 파운더 스팟 투 레스트 앤 언팩트" },
          { en: "Then we went swimming, rode a boat, and built some sandcastles.", ko: "덴 위 웬트 스위밍, 로더 보트, 앤 빌트 썸 샌드캐슬즈" },
          { en: "The scenery was amazing —", ko: "더 씨너리 워저 메이징" },
          { en: "I was especially impressed by the beautiful ocean view.", ko: "아이 워즈 이스페셜리 임프레스트 바이더 뷰티풀 오션 뷰" },
          { en: "After that, we grabbed some food and talked about our vacation.", ko: "애프터댓, 위 그랩드 썸 푸드 앤 톡트 어바웃 아워 베케이션" },
          { en: "Well, it was such a great time!", ko: "웰, 잇 워즈 서치어 그레잇 타임" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "scenery", guide: "씨너리" },
          { word: "impressed", guide: "임프레스트" },
          { word: "sandcastles", guide: "샌드캐슬즈" }
        ]
      },
      {
        id: 101,
        question: "You might have had an unexpected experience while traveling. Tell me about one unforgettable episode — when it happened, where you were, and who you were with.",
        translation: "여행 중 겪었던 예상치 못한 경험이 있을 거예요. 언제, 어디서, 누구와 있었는지부터 잊지 못할 에피소드 하나를 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["두 달 전, 속초 해변으로 간 여행", "친구 성규와 감", "성규가 화장실 간 사이 혼자 맥주 마심", "지나가던 여자가 부딪혀 셔츠에 커피 쏟음", "화가 나서 계속 뭐라 함", "친구 돌아옴 → 그 여자가 친구의 아내였음", "엄청 당황+계속 사과함", "그 후로 그 해변 생각날 때마다 떠오름"],
        script: [
          { en: "About two months ago, I had a really memorable time at the beach.", ko: "두 달쯤 전에 해변에서 정말 기억에 남는 일이 있었어요." },
          { en: "I went to Sokcho Beach with my best friend, Sunggyu.", ko: "가장 친한 친구 성규랑 속초 해변에 갔었어요." },
          { en: "After a while, he went to the restroom, and I was just relaxing with a beer, waiting for him.", ko: "잠시 후에 그가 화장실에 가서, 저는 맥주 마시면서 그를 기다리고 있었어요." },
          { en: "Suddenly, a woman bumped into me while walking by and spilled her coffee all over my shirt.", ko: "그런데 갑자기 지나가던 여자분이 저랑 부딪히면서 셔츠에 커피를 쏟았어요." },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "셔츠가 완전히 젖어서 정말 속상했어요." },
          { en: "Even though she apologized, I kept complaining to her.", ko: "그분이 사과했는데도 저는 계속 뭐라고 했어요." },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "그러다 친구가 돌아왔는데, 완전 충격이었어요 — 그 여자분이 친구 아내였던 거예요!" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "너무 당황해서 계속 사과했어요." },
          { en: "Since then, I always remember it when I think of that trip.", ko: "그 이후로, 저는 그 여행을 떠올릴 때마다 항상 그 일이 생각나요." }
        ],
        pronunciation: [
          { en: "About two months ago, I had a really memorable time at the beach.", ko: "어바웃 투 먼쓰어고, 아이 해더 릴리 메머러블 타임 앳더 비치" },
          { en: "I went to Sokcho Beach with my best friend, Sunggyu.", ko: "아이 웬트 투 속초 비치 윗마이 베스트 프렌드, 성규" },
          { en: "After a while, he went to the restroom,", ko: "애프터러 와일, 히 웬트투더 레스트룸" },
          { en: "and I was just relaxing with a beer, waiting for him.", ko: "앤 아이 워즈 저스트 릴렉싱 위더 비어, 웨이팅 퍼힘" },
          { en: "Suddenly, a woman bumped into me while walking by", ko: "서든리, 어 우먼 범트인투미 와일 워킹바이" },
          { en: "and spilled her coffee all over my shirt.", ko: "앤 스필드 허 커피 올오버 마이 셔츠" },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "마이 셔츠 갓 컴플리틀리 소우크트, 앤 아이 갓 릴리 업셋" },
          { en: "Even though she apologized, I kept complaining to her.", ko: "이븐도우 쉬 어팔러자이즈드, 아이 켑트 컴플레이닝투허" },
          { en: "Then, when my friend came back, I was totally shocked —", ko: "덴, 웬마이 프렌드 케임백, 아이 워즈 토탈리 샥트" },
          { en: "she was his wife!", ko: "쉬 워즈 히즈 와이프" },
          { en: "I was so embarrassed.", ko: "아이 워즈 소우 임배러스트" },
          { en: "I kept apologizing to her over and over.", ko: "아이 켑트 어팔러자이징투허 오버앤오버" },
          { en: "Since then, I always remember it when I think of that trip.", ko: "신스덴, 아이 올웨이즈 리멤버릿 웬아이 씽커브댓 트립" }
        ],
        warnings: [
          { word: "apologized", guide: "어팔러자이즈드" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "incident", guide: "인시던트" },
          { word: "complaining", guide: "컴플레이닝" }
        ]
      }
    ]
  },
  {
    id: 31, emoji: "🏡", nameKo: "집에서 보내는 휴가",
    category: "선택주제",
    questions: [
      {
        id: 102,
        question: "Tell me about a person or people you like to spend time with at home during your vacation.",
        translation: "휴가 때 집에서 함께 시간을 보내고 싶은 사람에 대해 말해 주세요.",
        type: "사람묘사",
        structure: ["옆집 사는 친구 성규 소개", "이사왔을때 만남, 20년지기라 편함", "공통점 많아서 휴가 함께 보냄", "공통관심사1: 건강식 요리해서 나눠먹음", "공통관심사2: 둘다 영화광, 취향비슷", "좋은 친구가 있어 행운이라는 마무리"],
        script: [
          { en: "I'd like to talk about my best friend, Sunggyu, who lives right next door to me.", ko: "옆집에 사는 제 가장 친한 친구 성규에 대해 말씀드릴게요." },
          { en: "I first met him when he moved into my neighborhood, and we've known each other for about twenty years now, so I feel really comfortable around him.", ko: "그가 저희 동네로 이사 왔을 때 처음 만났는데, 이제 알고 지낸 지 한 20년 정도 돼서 정말 편해요." },
          { en: "I like spending my vacations with him because we have a lot in common.", ko: "저는 그와 휴가를 함께 보내는 걸 좋아하는데, 공통점이 많거든요." },
          { en: "For one, we're both into staying fit and eating healthy, so we like cooking healthy meals together at home.", ko: "우선 둘 다 건강 관리랑 건강한 식습관에 관심이 많아서, 집에서 같이 건강한 음식을 요리해서 나눠 먹어요." },
          { en: "Also, we're both huge movie buffs — we have similar taste and usually agree on the story and characters.", ko: "또 둘 다 영화광이라서, 취향도 비슷하고 보통 스토리나 등장인물에 대한 의견도 비슷해요." },
          { en: "Overall, I feel really lucky to have such a great friend to spend time with at home.", ko: "전반적으로, 집에서 이렇게 시간을 보낼 수 있는 좋은 친구가 있다는 게 정말 행운이라고 생각해요." }
        ],
        pronunciation: [
          { en: "I'd like to talk about my best friend, Sunggyu,", ko: "아이드 라익투 톡 어바웃 마이 베스트 프렌드, 성규" },
          { en: "who lives right next door to me.", ko: "후 리브즈 라잇 넥스트 도어투미" },
          { en: "I first met him when he moved into my neighborhood,", ko: "아이 퍼스트 멧힘 웬히 무브드 인투마이 네이버후드" },
          { en: "and we've known each other for about twenty years now,", ko: "앤 위브 노운 이치아더 퍼러바웃 트웨니 이어즈 나우" },
          { en: "so I feel really comfortable around him.", ko: "소 아이 필 릴리 컴퍼러블 어라운드힘" },
          { en: "I like spending my vacations with him because we have a lot in common.", ko: "아이 라익 스펜딩 마이 베케이션즈 윗힘 비커즈 위 해버 랏인 커먼" },
          { en: "For one, we're both into staying fit and eating healthy,", ko: "퍼원, 위어 보쓰 인투 스테잉 핏 앤 이팅 헬씨" },
          { en: "so we like cooking healthy meals together at home.", ko: "소 위 라익 쿠킹 헬씨 밀즈 투게더 앳홈" },
          { en: "Also, we're both huge movie buffs —", ko: "얼소, 위어 보쓰 휴지 무비 버프스" },
          { en: "we have similar taste and usually agree on the story and characters.", ko: "위 해브 시밀러 테이스트 앤 유주얼리 어그리 온더 스토리 앤 캐릭터즈" },
          { en: "Overall, I feel really lucky to have such a great friend to spend time with at home.", ko: "오버롤, 아이 필 릴리 럭키투 해브 서치어 그레잇 프렌드 투 스펜타임 위댓 홈" }
        ],
        warnings: [
          { word: "neighborhood", guide: "네이버후드" },
          { word: "comfortable", guide: "컴퍼러블" },
          { word: "buffs", guide: "버프스" },
          { word: "characters", guide: "캐릭터즈" }
        ]
      },
      {
        id: 103,
        question: "Tell me about the things you like to do with that person during your vacation at home.",
        translation: "그 사람과 집에서 휴가를 보낼 때 주로 뭘 하는지 말해 주세요.",
        type: "활동묘사",
        structure: ["성규와 휴가보냄, 오라고 하면 기꺼이 옴", "같이 요리(건강식 레시피 찾음, 성규가 주 요리사)", "요리 후 최신 영화 고름", "밥 먹으면서 영화 같이 봄(가끔 몇시간씩)", "특별친않지만 항상 즐김"],
        script: [
          { en: "Like I said, I usually spend my vacations with my friend, Sunggyu.", ko: "말씀드렸듯이 저는 보통 친구 성규와 휴가를 보내요." },
          { en: "On my days off, I usually ask him to come over, and he's always happy to.", ko: "쉬는 날엔 보통 그한테 놀러 오라고 하는데, 항상 흔쾌히 와줘요." },
          { en: "When he comes, we usually cook something first — we look up healthy recipes and make them together.", ko: "그가 오면 보통 먼저 뭔가를 요리하는데, 건강한 레시피를 찾아서 같이 만들어요." },
          { en: "He's actually the main cook since he's really good at it, so I just help out.", ko: "사실 요리는 그가 잘해서 주로 그가 하고, 저는 그냥 거들어요." },
          { en: "After we finish cooking, we pick out one of the latest movies.", ko: "요리가 끝나면 최신 영화 중 하나를 골라요." },
          { en: "Then we enjoy the meal and the movie together — sometimes we end up watching several movies for hours.", ko: "그러고 나서 밥이랑 영화를 같이 즐기는데, 가끔은 몇 시간씩 여러 편을 보기도 해요." },
          { en: "Even though it's nothing too special, we always have a good time.", ko: "그렇게 특별한 건 아니지만 항상 즐거운 시간이에요." }
        ],
        pronunciation: [
          { en: "Like I said, I usually spend my vacations with my friend, Sunggyu.", ko: "라이카이 세드, 아이 유주얼리 스펜드 마이 베케이션즈 윗마이 프렌드, 성규" },
          { en: "On my days off, I usually ask him to come over,", ko: "온마이 데이즈오프, 아이 유주얼리 애스크힘투 컴오버" },
          { en: "and he's always happy to.", ko: "앤 히즈 올웨이즈 해피투" },
          { en: "When he comes, we usually cook something first —", ko: "웬히 컴즈, 위 유주얼리 쿡 썸씽 퍼스트" },
          { en: "we look up healthy recipes and make them together.", ko: "위 룩업 헬씨 레서피즈 앤 메익뎀 투게더" },
          { en: "He's actually the main cook since he's really good at it,", ko: "히즈 액츄얼리 더 메인 쿡 신스 히즈 릴리 굿앳잇" },
          { en: "so I just help out.", ko: "소 아이 저스트 헬프아웃" },
          { en: "After we finish cooking, we pick out one of the latest movies.", ko: "애프터위 피니쉬 쿠킹, 위 픽아웃 원어브더 레이티스트 무비즈" },
          { en: "Then we enjoy the meal and the movie together —", ko: "덴 위 인조이더 밀 앤더 무비 투게더" },
          { en: "sometimes we end up watching several movies for hours.", ko: "썸타임즈 위 엔덥 워칭 세버럴 무비즈 퍼 아워즈" },
          { en: "Even though it's nothing too special, we always have a good time.", ko: "이븐도우 잇츠 낫씽 투 스페셜, 위 올웨이즈 해버 굿 타임" }
        ],
        warnings: [
          { word: "recipes", guide: "레서피즈" },
          { word: "actually", guide: "액츄얼리" },
          { word: "latest", guide: "레이티스트" },
          { word: "several", guide: "세버럴" }
        ]
      },
      {
        id: 104,
        question: "Describe your last vacation at home from the first day to the last day.",
        translation: "가장 최근 집에서 보낸 휴가를 처음부터 끝까지 설명해 주세요.",
        type: "최근 경험",
        structure: ["2주전, 가족과 보냄", "아들 감기걸려서 못나감", "삼계탕 해주기로 결심", "장보기: 닭/쌀/인삼", "집와서 재료 헹구고 손질", "닭에 쌀+인삼 채움", "2시간 끓임", "아들이 맛+정성에 감동, 몸 나아짐", "멋진 저녁이었음"],
        script: [
          { en: "The last time I had a vacation at home was about two weeks ago, and I spent it with my family.", ko: "마지막으로 집에서 휴가를 보낸 건 2주 전쯤이었고, 가족이랑 같이 보냈어요." },
          { en: "At the time, my son had a really bad cold, so we couldn't go out for our vacation.", ko: "그때 아들이 감기가 심하게 걸려서 밖으로 휴가를 나갈 수가 없었어요." },
          { en: "Instead, I decided to make Korean-style chicken soup to help him get his strength back.", ko: "대신 아들 기력 회복에 도움이 되게 삼계탕을 해주기로 했어요." },
          { en: "I went to the grocery store and bought some ingredients — chicken, rice, and ginseng.", ko: "마트에 가서 닭, 쌀, 인삼 같은 재료를 샀어요." },
          { en: "As soon as I got home, I rinsed and prepped everything.", ko: "집에 도착하자마자 재료들을 씻고 손질했어요." },
          { en: "Then I stuffed the chicken with the rice and ginseng.", ko: "그러고 나서 닭 안에 쌀이랑 인삼을 채워 넣었어요." },
          { en: "After that, I boiled and simmered it for about two hours.", ko: "그 후에 두 시간 정도 끓이고 졸였어요." },
          { en: "It turned out amazing! My son was really touched by how good it tasted and how much effort I put in — and he said he was already feeling better.", ko: "결과가 정말 좋았어요! 아들이 맛이랑 제 정성에 정말 감동받았고, 벌써 몸이 좀 나아진 것 같다고 했어요." },
          { en: "Well, it was such a great dinner!", ko: "정말 뿌듯한 저녁이었어요!" }
        ],
        pronunciation: [
          { en: "The last time I had a vacation at home was about two weeks ago,", ko: "더 래스트 타임 아이 해더 베케이션 앳홈 워즈 어바웃 투 윅스어고" },
          { en: "and I spent it with my family.", ko: "앤 아이 스펜팃 윗마이 패밀리" },
          { en: "At the time, my son had a really bad cold,", ko: "앳더 타임, 마이 선 해더 릴리 배드 콜드" },
          { en: "so we couldn't go out for our vacation.", ko: "소 위 쿠든트 고아웃 퍼 아워 베케이션" },
          { en: "Instead, I decided to make Korean-style chicken soup", ko: "인스테드, 아이 디사이디드 투 메익 코리안스타일 치킨 수프" },
          { en: "to help him get his strength back.", ko: "투 헬프힘 겟히즈 스트렝스 백" },
          { en: "I went to the grocery store and bought some ingredients —", ko: "아이 웬투더 그로서리 스토어 앤 보웃 썸 인그리디언츠" },
          { en: "chicken, rice, and ginseng.", ko: "치킨, 라이스, 앤 진생" },
          { en: "As soon as I got home, I rinsed and prepped everything.", ko: "애즈 순애즈 아이 갓홈, 아이 린스드 앤 프렙트 에브리씽" },
          { en: "Then I stuffed the chicken with the rice and ginseng.", ko: "덴 아이 스터프트 더 치킨 위더 라이스 앤 진생" },
          { en: "After that, I boiled and simmered it for about two hours.", ko: "애프터댓, 아이 보일드 앤 시머드 잇 퍼러바웃 투 아워즈" },
          { en: "It turned out amazing!", ko: "잇 턴드아웃 어메이징" },
          { en: "My son was really touched by how good it tasted and how much effort I put in —", ko: "마이 선 워즈 릴리 터치트 바이 하우 굿잇 테이스티드 앤 하우 머치 에펏 아이 풋인" },
          { en: "and he said he was already feeling better.", ko: "앤 히 세드 히 워즈 올레디 필링 베러" },
          { en: "Well, it was such a great dinner!", ko: "웰, 잇 워즈 서치어 그레잇 디너" }
        ],
        warnings: [
          { word: "ingredients", guide: "인그리디언츠" },
          { word: "simmered", guide: "시머드" },
          { word: "strength", guide: "스트렝스" },
          { word: "touched", guide: "터치트" }
        ]
      },
      {
        id: 105,
        question: "Tell me about an interesting or unexpected memory you had at home during a vacation. What happened, and why was it so memorable?",
        translation: "휴가 중 집에서 있었던 재미있거나 예상치 못한 기억에 대해 말해 주세요. 무슨 일이 있었고, 왜 그렇게 기억에 남나요?",
        type: "기억에 남는 경험",
        structure: ["작년 크리스마스 이브 추억", "휴가 기간", "집에서 파티 계획 + 가족·친구 초대", "닭곰탕 요리 결심", "처음 요리라 순조로웠음", "마지막에 설탕/소금 실수", "수습 실패", "결국 피자+치킨 배달", "아쉬운 크리스마스"],
        script: [
          { en: "Let me tell you about a memory from last Christmas Eve.", ko: "지난 크리스마스 이브의 추억에 대해 말씀드릴게요." },
          { en: "It was during my vacation.", ko: "휴가 기간이었어요." },
          { en: "At that time, I wanted to have a Christmas party at home, so I invited all of my family and friends.", ko: "그때 집에서 크리스마스 파티를 하고 싶어서, 가족이랑 친구들을 다 초대했어요." },
          { en: "I decided to cook hot chicken soup for the party, since it was cold and the food would make everybody warm.", ko: "파티를 위해 얼큰한 닭곰탕 같은 걸 요리하기로 했어요, 날씨가 추워서 그 음식이 다들 몸을 따뜻하게 해줄 것 같았거든요." },
          { en: "It was my first time cooking hot chicken soup, but everything was okay at first.", ko: "그 음식을 요리하는 게 처음이었는데, 처음엔 다 괜찮았어요." },
          { en: "However, at the last stage, I put in a lot of sugar instead of salt.", ko: "그런데 마지막 단계에서, 소금 대신 설탕을 많이 넣어버렸어요." },
          { en: "So, I tried to add salt to the soup, but it didn't work.", ko: "그래서 소금을 넣어서 수습해보려고 했는데, 안 되더라고요." },
          { en: "The dish was a disaster, and as a result, we had to get pizza and fried chicken delivered.", ko: "결국 요리를 완전히 망쳐서, 결국 피자랑 치킨을 배달시켜야 했어요." },
          { en: "It was a disappointing Christmas dinner.", ko: "정말 아쉬운 크리스마스 저녁이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about a memory from last Christmas Eve.", ko: "렛미 텔유 어바웃 어 메머리 프럼 래스트 크리스마스 이브" },
          { en: "It was during my vacation.", ko: "잇 워즈 듀링 마이 베케이션" },
          { en: "At that time, I wanted to have a Christmas party at home,", ko: "앳 댓 타임, 아이 원티드 투 해브어 크리스마스 파리 앳홈" },
          { en: "so I invited all of my family and friends.", ko: "소 아이 인바이티드 올어브 마이 패밀리 앤 프렌즈" },
          { en: "I decided to cook hot chicken soup for the party,", ko: "아이 디사이디드 투 쿡 핫 치킨 수프 퍼더 파리" },
          { en: "since it was cold and the food would make everybody warm.", ko: "신스 잇 워즈 콜드 앤 더 푸드 우드 메이크 에브리바디 웜" },
          { en: "It was my first time cooking hot chicken soup,", ko: "잇 워즈 마이 퍼스트 타임 쿠킹 핫 치킨 수프" },
          { en: "but everything was okay at first.", ko: "벗 에브리씽 워즈 오케이 앳 퍼스트" },
          { en: "However, at the last stage,", ko: "하우에버, 앳더 래스트 스테이지" },
          { en: "I put in a lot of sugar instead of salt.", ko: "아이 풋인 얼라러브 슈거 인스테더브 솔트" },
          { en: "So, I tried to add salt to the soup,", ko: "소, 아이 트라이드 투 애드 솔트 투더 수프" },
          { en: "but it didn't work.", ko: "벗 잇 디든 워크" },
          { en: "The dish was a disaster,", ko: "더 디쉬 워저 디재스터" },
          { en: "and as a result, we had to get pizza and fried chicken delivered.", ko: "앤 애저 리절트, 위 해드투 겟 피자 앤 프라이드 치킨 딜리버드" },
          { en: "It was a disappointing Christmas dinner.", ko: "잇 워저 디서포인팅 크리스마스 디너" }
        ],
        warnings: [
          { word: "disaster", guide: "디재스터" },
          { word: "instead of", guide: "인스테더브" },
          { word: "delivered", guide: "딜리버드" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 32, emoji: "🪑", nameKo: "가구",
    category: "돌발주제",
    questions: [
      {
        id: 106,
        question: "Tell me about the furniture in your home. What kind of furniture do you have? What is your favorite piece of furniture?",
        translation: "집에 있는 가구에 대해 말해 주세요. 어떤 가구가 있나요? 가장 좋아하는 가구는 무엇인가요?",
        type: "사물묘사",
        structure: ["가족과 아파트 거주", "방마다 다른 가구", "침실: 침대+옷장", "아들방: 흰서랍+캐비닛", "부엌: 나무테이블+의자", "거실: 회색소파+티테이블(아내가 좋아함)", "가장 좋아하는 가구: 침실의 편안한 책상", "10년 사용, 생일선물", "새것도 최신도 아니지만 일상에 필수적"],
        script: [
          { en: "I live in an apartment with my family.", ko: "저는 가족과 아파트에 살아요." },
          { en: "In our apartment, we have different pieces of furniture in each room.", ko: "저희 아파트는 방마다 다른 가구들이 있어요." },
          { en: "Each bedroom is furnished with a bed and a closet.", ko: "침실마다 침대랑 옷장이 갖춰져 있어요." },
          { en: "My son has white drawers and a small cabinet for his toys in his room.", ko: "아들 방에는 흰색 서랍이랑 장난감 넣는 작은 캐비닛이 있어요." },
          { en: "In the kitchen, there's a wooden table with chairs.", ko: "부엌에는 의자가 있는 나무 테이블이 있어요." },
          { en: "In the living room, you can see a long grey sofa and a wooden tea table, which is my wife's favorite.", ko: "거실에는 긴 회색 소파랑 나무 티 테이블이 있는데, 아내가 제일 좋아하는 거예요." },
          { en: "My favorite piece of furniture is the big comfy desk in my bedroom.", ko: "제가 가장 좋아하는 가구는 침실에 있는 크고 편안한 책상이에요." },
          { en: "I've used it for about ten years, since I got it as a birthday present.", ko: "생일 선물로 받은 거라 한 10년 정도 썼어요." },
          { en: "It's pretty old, but still strong.", ko: "꽤 오래됐지만 여전히 튼튼해요." },
          { en: "Overall, the furniture in our apartment isn't very new or modern, but every piece is essential to our daily lives.", ko: "전반적으로 저희 집 가구가 새것이거나 세련되진 않았지만, 다 일상생활에 꼭 필요한 것들이에요." }
        ],
        pronunciation: [
          { en: "I live in an apartment with my family.", ko: "아이 리브 인언 어파트먼트 윗마이 패밀리" },
          { en: "In our apartment, we have different pieces of furniture in each room.", ko: "인 아워 어파트먼트, 위 해브 디퍼런트 피시즈 어브 퍼니처 인 이치룸" },
          { en: "Each bedroom is furnished with a bed and a closet.", ko: "이치 베드룸 이즈 퍼니쉬드 위더 베드 앤더 클로짓" },
          { en: "My son has white drawers and a small cabinet for his toys in his room.", ko: "마이 선 해즈 화이트 드로어즈 앤더 스몰 캐비닛 퍼히즈 토이즈 인히즈룸" },
          { en: "In the kitchen, there's a wooden table with chairs.", ko: "인더 키친, 데어저 우든 테이블 윗 체어즈" },
          { en: "In the living room, you can see a long grey sofa and a wooden tea table,", ko: "인더 리빙룸, 유캔 씨어 롱 그레이 소파 앤더 우든 티 테이블" },
          { en: "which is my wife's favorite.", ko: "위치즈 마이 와이프스 페이버릿" },
          { en: "My favorite piece of furniture is the big comfy desk in my bedroom.", ko: "마이 페이버릿 피스어브 퍼니처 이즈더 빅 컴피 데스크 인마이 베드룸" },
          { en: "I've used it for about ten years, since I got it as a birthday present.", ko: "아이브 유즈드잇 퍼러바웃 텐 이어즈, 신스아이 가릿 애저 버스데이 프레즌트" },
          { en: "It's pretty old, but still strong.", ko: "잇츠 프리티 올드, 벗 스틸 스트롱" },
          { en: "Overall, the furniture in our apartment isn't very new or modern,", ko: "오버롤, 더 퍼니처 인아워 어파트먼트 이즌 베리 뉴오어 모던" },
          { en: "but every piece is essential to our daily lives.", ko: "벗 에브리 피스이즈 이센셜 투아워 데일리 라이브즈" }
        ],
        warnings: [
          { word: "furniture", guide: "퍼니처" },
          { word: "essential", guide: "이센셜" },
          { word: "comfy", guide: "컴피" },
          { word: "drawers", guide: "드로어즈" }
        ]
      },
      {
        id: 107,
        question: "Tell me about the furniture in your childhood home. What was it like? Is it different from the furniture you have today?",
        translation: "어릴 때 살던 집의 가구에 대해 말해 주세요. 어땠나요? 지금 가구와는 다른가요?",
        type: "과거 비교",
        structure: ["어릴때 작은 아파트", "가구 별로 없음: 책상/서랍/옷장/캐비닛(다 나무, 안멋짐)", "침대없이 바닥잠 → 아침에 등 뻐근", "지금: 더 크고 화려한 아파트", "가구도 늘고 더 화려해짐", "침대 생김!", "붙박이 가구(워크인 클로젯/서랍)까지", "더 정돈되고 넓어보임"],
        script: [
          { en: "My family used to live in a small apartment when I was a child.", ko: "저희 가족은 제가 어릴 때 작은 아파트에 살았어요." },
          { en: "We didn't have many pieces of furniture at home.", ko: "집에 가구가 별로 없었어요." },
          { en: "We just had a desk, some drawers, closets, and cabinets.", ko: "그냥 책상이랑 서랍, 옷장, 캐비닛 정도가 다였어요." },
          { en: "All of them were made of wood and weren't that stylish.", ko: "다 나무로 만들어졌고 그렇게 세련되진 않았어요." },
          { en: "In my bedroom, I didn't have a bed, so I used to sleep on the floor.", ko: "제 방엔 침대가 없어서 바닥에서 자곤 했어요." },
          { en: "Then I'd wake up with a stiff back the next morning.", ko: "그러면 다음 날 아침에 등이 뻐근했죠." },
          { en: "Now, everything is different. I live in a bigger, fancier apartment.", ko: "지금은 모든 게 달라졌어요. 더 크고 화려한 아파트에 살아요." },
          { en: "We have more furniture now, and it looks a bit fancier too.", ko: "가구도 더 많아졌고 조금 더 화려해졌어요." },
          { en: "And guess what? We have beds now!", ko: "그리고 그거 아세요? 이제 침대가 있어요!" },
          { en: "Plus, we even have built-in furniture like walk-in closets and drawers.", ko: "게다가 워크인 클로젯이나 붙박이 서랍 같은 built-in 가구도 있어요." },
          { en: "So my apartment looks neater and wider now.", ko: "그래서 지금 저희 집은 더 정돈되고 넓어 보여요." }
        ],
        pronunciation: [
          { en: "My family used to live in a small apartment when I was a child.", ko: "마이 패밀리 유스투 리브 인어 스몰 어파트먼트 웨나이 워저 차일드" },
          { en: "We didn't have many pieces of furniture at home.", ko: "위 디든 해브 매니 피시즈어브 퍼니처 앳홈" },
          { en: "We just had a desk, some drawers, closets, and cabinets.", ko: "위 저스트 해더 데스크, 썸 드로어즈, 클로짓츠, 앤 캐비닛츠" },
          { en: "All of them were made of wood and weren't that stylish.", ko: "올어브뎀 워메이드어브 우드 앤 워런트 댓 스타일리쉬" },
          { en: "In my bedroom, I didn't have a bed, so I used to sleep on the floor.", ko: "인마이 베드룸, 아이 디든 해버 베드, 소 아이 유스투 슬립 온더 플로어" },
          { en: "Then I'd wake up with a stiff back the next morning.", ko: "덴 아이드 웨이컵 윗어 스티프 백 더 넥스트 모닝" },
          { en: "Now, everything is different. I live in a bigger, fancier apartment.", ko: "나우, 에브리씽 이즈 디퍼런트. 아이 리브 인어 비거, 팬시어 어파트먼트" },
          { en: "We have more furniture now, and it looks a bit fancier too.", ko: "위 해브 모어 퍼니처 나우, 앤 잇 룩스어 빗 팬시어 투" },
          { en: "And guess what? We have beds now!", ko: "앤 게스왓? 위 해브 베즈 나우" },
          { en: "Plus, we even have built-in furniture like walk-in closets and drawers.", ko: "플러스, 위 이븐 해브 빌트인 퍼니처 라익 워킨 클로짓츠 앤 드로어즈" },
          { en: "So my apartment looks neater and wider now.", ko: "소 마이 어파트먼트 룩스 니러 앤 와이더 나우" }
        ],
        warnings: [
          { word: "stylish", guide: "스타일리쉬" },
          { word: "stiff back", guide: "스티프백" },
          { word: "built-in", guide: "빌트인" },
          { word: "fancier", guide: "팬시어" }
        ]
      },
      {
        id: 108,
        question: "Problems arise related to furniture in your home. Sometimes furniture breaks, or fabrics get stains or ripped. Tell me about a time you had furniture with a problem. What happened, and how did you fix it?",
        translation: "가끔 가구에 문제가 생기기도 하죠. 가구가 망가지거나 천이 얼룩지거나 찢어지기도 해요. 가구에 문제가 있었던 경험을 말해 주세요. 무슨 일이 있었고 어떻게 해결했나요?",
        type: "문제 해결 경험",
        structure: ["2년 전 경험", "새 식탁 온라인 주문", "처음엔 기대감", "배송받아보니 나무판에 얼룩", "중고품 같아보임 + 다리 긁힘까지", "교환 시도 → 같은 모델 한달 대기해야함", "결국 환불받고 반품", "다음날 다른 온라인샵서 새 걸로 발견"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At that time, I needed a new dining table, so I ordered one online.", ko: "그때 새 식탁이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new table.", ko: "처음엔 다 괜찮아 보였어요. 새 식탁 받는 게 기대됐거든요." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무판에 얼룩이 좀 있었어요." },
          { en: "To make matters worse, it looked like a used one.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요." },
          { en: "Two of the legs even had scratches.", ko: "다리 두 개엔 긁힌 자국도 있었고요." },
          { en: "So I tried to get an exchange, but they said I'd have to wait another month for the same model.", ko: "그래서 교환하려고 했는데, 같은 모델은 한 달을 더 기다려야 한다더라고요." },
          { en: "As a result, I had to get a refund and return the table.", ko: "결국 환불받고 식탁을 반품했어요." },
          { en: "Luckily, I found a nice new one at another online shop the very next day.", ko: "다행히 다음 날 다른 온라인 쇼핑몰에서 괜찮은 새 걸 찾았어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투 이어즈어고" },
          { en: "At that time, I needed a new dining table, so I ordered one online.", ko: "앳댓타임, 아이 니디더 뉴 다이닝 테이블, 소 아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new table.", ko: "앳퍼스트, 에브리씽 씸드 파인. 아이워즈 익사이티드 투겟더 뉴 테이블" },
          { en: "However, when it was delivered, I found something wrong with it —", ko: "하우에버, 웬잇워즈 딜리버드, 아이 파운드 썸씽 롱 위딧" },
          { en: "the wooden board had some stains.", ko: "더 우든 보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one.", ko: "투 메익 매터즈 워스, 잇 룩트 라이커 유즈드원" },
          { en: "Two of the legs even had scratches.", ko: "투어브더 렉즈 이븐 해드 스크래치즈" },
          { en: "So I tried to get an exchange, but they said I'd have to wait another month for the same model.", ko: "소 아이 트라이투 게런 익스체인지, 벗 데이 세드 아이드 해브투 웨이트 어나더 먼쓰 퍼더 세임 모델" },
          { en: "As a result, I had to get a refund and return the table.", ko: "애저 리절트, 아이 해드투 게러 리펀드 앤 리턴더 테이블" },
          { en: "Luckily, I found a nice new one at another online shop the very next day.", ko: "럭킬리, 아이 파운더 나이스 뉴원 앳 어나더 온라인샵 더 베리 넥스트 데이" }
        ],
        warnings: [
          { word: "stains", guide: "스테인즈" },
          { word: "scratches", guide: "스크래치즈" },
          { word: "refund", guide: "리펀드" },
          { word: "delivered", guide: "딜리버드" }
        ]
      }
    ]
  },
  {
    id: 33, emoji: "📱", nameKo: "기술",
    category: "돌발주제",
    questions: [
      {
        id: 109,
        question: "Tell me about the recent technologies that are popular in your country. Which technology do people use the most? What is it used for?",
        translation: "당신 나라에서 인기 있는 최근 기술에 대해 말해 주세요. 사람들이 가장 많이 사용하는 기술은 무엇이고, 무엇에 쓰이나요?",
        type: "일반 설명",
        structure: ["가장 많이 쓰는 기술: 스마트폰", "약 85%가 사용, 초등학생도 소유", "모든 기능이 한 기기에", "전화뿐 아니라 인터넷/영화/음악/일정관리/쇼핑결제까지", "컴퓨터로 하던 일 다 가능", "편리해서 가장 많이 씀"],
        script: [
          { en: "Well, I'd say the recent technology that people use the most is the smartphone.", ko: "음, 요즘 사람들이 가장 많이 쓰는 기술은 스마트폰인 것 같아요." },
          { en: "According to a news article, about 85% of Korean people currently use smartphones — even elementary school students have their own.", ko: "뉴스 기사를 보니까 현재 한국 사람의 약 85%가 스마트폰을 쓰고 있대요 — 초등학생들도 자기 스마트폰이 있고요." },
          { en: "Smartphones pack all kinds of functions into one device.", ko: "스마트폰은 정말 다양한 기능을 하나의 기기에 다 담고 있어요." },
          { en: "Some people just use them to make calls, but most people use them for all sorts of things — surfing the internet, watching movies, listening to music, managing schedules, running their daily lives, and even paying for shopping.", ko: "그냥 전화만 쓰는 사람도 있지만, 대부분은 인터넷 서핑, 영화 감상, 음악 듣기, 일정 관리, 일상생활 관리, 심지어 쇼핑 결제까지 온갖 용도로 써요." },
          { en: "You can basically do everything you'd normally do on a computer, right from your smartphone.", ko: "컴퓨터로 하던 걸 사실상 다 스마트폰 하나로 할 수 있어요." },
          { en: "It's also super handy.", ko: "게다가 정말 편리하고요." },
          { en: "That's why smartphones are the most-used technology in my country.", ko: "그래서 우리나라에서 스마트폰이 제일 많이 쓰이는 기술이에요." }
        ],
        pronunciation: [
          { en: "Well, I'd say the recent technology that people use the most is the smartphone.", ko: "웰, 아이드 세이 더 리쓴트 테크놀러지 댓 피플 유즈 더모스트 이즈더 스마트폰" },
          { en: "According to a news article, about 85% of Korean people currently use smartphones —", ko: "어코딩투어 뉴스 아티클, 어바웃 에이티파이브 퍼센트어브 코리안 피플 커런틀리 유즈 스마트폰즈" },
          { en: "even elementary school students have their own.", ko: "이븐 엘리멘터리 스쿨 스튜던츠 해브 데어 오운" },
          { en: "Smartphones pack all kinds of functions into one device.", ko: "스마트폰즈 팩 올 카인즈어브 펑션즈 인투 원 디바이스" },
          { en: "Some people just use them to make calls, but most people use them for all sorts of things —", ko: "썸피플 저스트 유즈뎀 투메익 콜즈, 벗 모스트 피플 유즈뎀 퍼 올 소츠어브 씽즈" },
          { en: "surfing the internet, watching movies, listening to music, managing schedules, running their daily lives, and even paying for shopping.", ko: "서핑 디 인터넷, 워칭 무비즈, 리스닝투 뮤직, 매니징 스케줄즈, 러닝 데어 데일리 라이브즈, 앤 이븐 페잉퍼 샤핑" },
          { en: "You can basically do everything you'd normally do on a computer, right from your smartphone.", ko: "유캔 베이시컬리 두 에브리씽 유드 노멀리 두 온어 컴퓨터, 라잇 프럼유어 스마트폰" },
          { en: "It's also super handy.", ko: "잇츠 얼소 수퍼 핸디" },
          { en: "That's why smartphones are the most-used technology in my country.", ko: "댓츠와이 스마트폰즈알더 모스트유즈드 테크놀러지 인마이 컨트리" }
        ],
        warnings: [
          { word: "currently", guide: "커런틀리" },
          { word: "device", guide: "디바이스" },
          { word: "basically", guide: "베이시컬리" },
          { word: "handy", guide: "핸디" }
        ]
      },
      {
        id: 110,
        question: "Technology is advancing more rapidly than ever. Can you tell me about the way technology has changed? What changes have occurred over time?",
        translation: "기술이 그 어느 때보다 빠르게 발전하고 있어요. 기술이 어떻게 변했는지 말해 주세요. 시간이 지나면서 어떤 변화가 있었나요?",
        type: "과거 비교",
        structure: ["가장 큰 변화: 스마트폰", "5년 전엔 전화/문자/메신저/인터넷/이메일 정도", "컴퓨터로 하던 일 가능해서 더 발전 없을 줄 알았음", "그런데 사생활/보안 인식 커지고 편리함 원함", "결과: 지문센서/홍채인식/모바일결제 기능", "최근엔 방수기능까지", "앞으로도 계속 발전할 거라 기대"],
        script: [
          { en: "I think the biggest changes have happened with smartphones, so let me talk about that.", ko: "가장 큰 변화가 일어난 건 스마트폰인 것 같아서 그 얘기를 해볼게요." },
          { en: "In the past — say, just five years ago — people mainly used their smartphones to make calls, text, chat on free messengers, use the internet, or check email.", ko: "과거에는, 불과 5년 전만 해도, 사람들은 스마트폰으로 주로 전화 걸고, 문자 보내고, 무료 메신저로 채팅하고, 인터넷 쓰고, 이메일 확인하는 정도였어요." },
          { en: "They could already do what they used to do on a computer, so it seemed like there wasn't much room left for smartphones to improve.", ko: "컴퓨터로 하던 걸 이미 할 수 있어서, 스마트폰이 더 발전할 여지가 별로 없어 보였어요." },
          { en: "However, people started caring more about privacy and security, and as always, they wanted more convenience.", ko: "그런데 사람들이 사생활과 보안에 더 신경 쓰기 시작했고, 늘 그렇듯 더 큰 편리함도 원했어요." },
          { en: "As a result, smartphones now offer fingerprint sensors or iris scanners for extra security, and mobile payment functions.", ko: "그 결과, 이제 스마트폰은 보안 강화를 위한 지문 센서나 홍채 스캐너, 그리고 모바일 결제 기능까지 제공해요." },
          { en: "Recent smartphones even have waterproof features.", ko: "최근 스마트폰에는 방수 기능까지 있어요." },
          { en: "I expect smartphones to keep advancing even more in the future.", ko: "앞으로도 스마트폰이 계속 더 발전할 거라고 기대해요." }
        ],
        pronunciation: [
          { en: "I think the biggest changes have happened with smartphones, so let me talk about that.", ko: "아이 씽크더 비기스트 체인지즈 해브 해픈드 위드 스마트폰즈, 소 렛미 톡어바웃댓" },
          { en: "In the past — say, just five years ago —", ko: "인더 패스트, 세이, 저스트 파이브 이어즈어고" },
          { en: "people mainly used their smartphones to make calls, text, chat on free messengers, use the internet, or check email.", ko: "피플 메인리 유즈드데어 스마트폰즈 투메익 콜즈, 텍스트, 챗온 프리 메신저즈, 유즈디 인터넷, 오어 첵 이메일" },
          { en: "They could already do what they used to do on a computer,", ko: "데이 쿠드 올레디 두 왓데이 유즈투두 온어 컴퓨터" },
          { en: "so it seemed like there wasn't much room left for smartphones to improve.", ko: "소잇 씸드라익 데어워즌트 머치룸 레프트퍼 스마트폰즈투 임프루브" },
          { en: "However, people started caring more about privacy and security,", ko: "하우에버, 피플 스타티드 케어링 모어 어바웃 프라이버시 앤 시큐리티" },
          { en: "and as always, they wanted more convenience.", ko: "앤 애즈 올웨이즈, 데이 원티드 모어 컨비니언스" },
          { en: "As a result, smartphones now offer fingerprint sensors or iris scanners for extra security, and mobile payment functions.", ko: "애저 리절트, 스마트폰즈 나우 오퍼 핑거프린트 센서즈 오어 아이리스 스캐너즈 퍼 엑스트라 시큐리티, 앤 모바일 페이먼트 펑션즈" },
          { en: "Recent smartphones even have waterproof features.", ko: "리쓴트 스마트폰즈 이븐 해브 워터프루프 피처즈" },
          { en: "I expect smartphones to keep advancing even more in the future.", ko: "아이 익스펙트 스마트폰즈투 킵 어드밴싱 이븐모어 인더 퓨쳐" }
        ],
        warnings: [
          { word: "privacy", guide: "프라이버시" },
          { word: "security", guide: "시큐리티" },
          { word: "convenience", guide: "컨비니언스" },
          { word: "fingerprint", guide: "핑거프린트" }
        ]
      },
      {
        id: 111,
        question: "A new type of technology can be frustrating. Tell me about a time when you had trouble due to a new technology. What kind of problems did it give you? Why was it frustrating?",
        translation: "새로운 기술 때문에 답답했던 적이 있을 거예요. 신기술 때문에 어려움을 겪었던 경험을 말해 주세요. 어떤 문제가 있었고 왜 답답했나요?",
        type: "기억에 남는 경험",
        structure: ["2년 전 온라인으로 새 스마트폰 구매", "당시 지문인식 센서가 화제라 기대 컸음", "처음엔 잘 작동", "며칠 후 지문인식 계속 실패 → 로그인 불가", "센서 재설정해도 안됨", "AS센터 방문 → 기술적 결함으로 판명", "다행히 교환 받아서 잘 작동함", "지금은 문제없이 잘 씀"],
        script: [
          { en: "About two years ago, I bought a new smartphone online.", ko: "약 2년 전에 온라인으로 새 스마트폰을 샀어요." },
          { en: "At the time, the fingerprint sensor was a huge sensation, so I was really excited to use it.", ko: "그때 지문 인식 센서가 엄청 화제라서 써보는 게 기대됐어요." },
          { en: "At first, everything seemed fine — the sensor seemed to work properly.", ko: "처음엔 다 괜찮아 보였어요 — 센서도 제대로 작동하는 것 같았고요." },
          { en: "However, a few days later, I kept failing to use the sensor.", ko: "그런데 며칠 지나니까 센서 인식이 계속 실패하는 거예요." },
          { en: "The phone wouldn't read my fingerprint, so I couldn't even log in.", ko: "지문을 못 읽어서 로그인조차 안 됐어요." },
          { en: "I tried resetting the sensor and trying again, but it wasn't easy.", ko: "센서를 재설정하고 다시 해봤는데도 쉽지 않았어요." },
          { en: "As a result, I had to take it to the service center, and it turned out to be a technical problem with my phone.", ko: "결국 서비스 센터에 가져갔는데, 알고 보니 제 폰의 기술적 결함이었더라고요." },
          { en: "Luckily, I was able to get an exchange, and the new one worked well.", ko: "다행히 교환을 받았고, 새 걸로는 잘 작동했어요." },
          { en: "Now I use the sensor just fine, without any problems.", ko: "지금은 아무 문제 없이 센서를 잘 쓰고 있어요." }
        ],
        pronunciation: [
          { en: "About two years ago, I bought a new smartphone online.", ko: "어바웃 투 이어즈어고, 아이 보웃어 뉴 스마트폰 온라인" },
          { en: "At the time, the fingerprint sensor was a huge sensation,", ko: "앳더 타임, 더 핑거프린트 센서 워저 휴지 센세이션" },
          { en: "so I was really excited to use it.", ko: "소아이 워즈 릴리 익사이티드 투유즈잇" },
          { en: "At first, everything seemed fine — the sensor seemed to work properly.", ko: "앳퍼스트, 에브리씽 씸드파인, 더 센서 씸드투 워크 프라퍼리" },
          { en: "However, a few days later, I kept failing to use the sensor.", ko: "하우에버, 어퓨 데이즈 레이터, 아이 켑트 페일링 투유즈더 센서" },
          { en: "The phone wouldn't read my fingerprint, so I couldn't even log in.", ko: "더 폰 우든트 리드 마이 핑거프린트, 소 아이 쿠든트 이븐 로긴" },
          { en: "I tried resetting the sensor and trying again, but it wasn't easy.", ko: "아이 트라이드 리세팅더 센서 앤 트라잉어겐, 벗잇 워즌트 이지" },
          { en: "As a result, I had to take it to the service center, and it turned out to be a technical problem with my phone.", ko: "애저 리절트, 아이 해드투 테이킷투더 서비스 센터, 앤잇 턴드아웃투비어 테크니컬 프라블럼 위마이 폰" },
          { en: "Luckily, I was able to get an exchange, and the new one worked well.", ko: "럭킬리, 아이 워즈 에이블투 게런 익스체인지, 앤더 뉴원 워크트웰" },
          { en: "Now I use the sensor just fine, without any problems.", ko: "나우 아이 유즈더 센서 저스트 파인, 위다웃 애니 프라블럼즈" }
        ],
        warnings: [
          { word: "sensation", guide: "센세이션" },
          { word: "technical", guide: "테크니컬" },
          { word: "fingerprint", guide: "핑거프린트" },
          { word: "exchange", guide: "익스체인지" }
        ]
      }
    ]
  },
  {
    id: 34, emoji: "🎊", nameKo: "명절",
    category: "돌발주제",
    questions: [
      {
        id: 112,
        question: "Where do people usually have celebrations or parties for a holiday in your country? Is it where they work or where they live? Do they celebrate at home or at a park, or go somewhere else?",
        translation: "당신 나라에서는 명절 때 보통 어디서 기념행사나 파티를 하나요? 직장인가요, 사는 곳인가요? 집에서 하나요, 공원에서 하나요, 아니면 다른 곳에 가나요?",
        type: "일반 설명",
        structure: ["큰 명절(추석/설날)은 집에서", "종교 휴일(부처님오신날/크리스마스)은 예외 - 종교시설에서", "명절: 가족/친척이 한 곳에 모임 (연장자/조부모 집)", "종교휴일: 교회나 절에서 특별예배", "무교인 사람들은 집이나 식당/술집/놀이공원 등에서"],
        script: [
          { en: "I think in Korea, people usually celebrate holidays at home.", ko: "제 생각엔 한국에서는 보통 명절을 집에서 보내는 것 같아요." },
          { en: "For example, for holidays like Lunar New Year's Day or Korean Thanksgiving, people get together with family and relatives at home.", ko: "예를 들어 설날이나 추석 같은 명절엔 가족, 친척들이 집에 모여요." },
          { en: "Usually, family members come from all over the country for memorial rituals and gather in one place — wherever the eldest family member or the grandparents live.", ko: "보통 제사를 지내려고 전국 각지에서 가족들이 모이는데, 큰어른이나 조부모님이 계신 곳으로 모여요." },
          { en: "For religious holidays like Buddha's Birthday or Christmas, though, celebrations are often held at churches or temples instead.", ko: "그런데 부처님오신날이나 크리스마스 같은 종교 휴일엔 교회나 절에서 기념행사를 하는 경우가 많아요." },
          { en: "People have a special service or worship at those religious places.", ko: "그런 종교적인 장소에서 특별 예배나 법회를 드리죠." },
          { en: "And people with no religion just like to spend time with family or friends, either at home or somewhere else like restaurants, pubs, or amusement parks.", ko: "그리고 종교가 없는 사람들은 집에서든 식당, 술집, 놀이공원 같은 다른 곳에서든 그냥 가족이나 친구들과 시간을 보내는 걸 좋아해요." }
        ],
        pronunciation: [
          { en: "I think in Korea, people usually celebrate holidays at home.", ko: "아이 씽크 인 코리아, 피플 유주얼리 셀러브레이트 할러데이즈 앳홈" },
          { en: "For example, for holidays like Lunar New Year's Day or Korean Thanksgiving,", ko: "포어그잼플, 퍼 할러데이즈 라익 루너 뉴이어즈데이 오어 코리안 땡스기빙" },
          { en: "people get together with family and relatives at home.", ko: "피플 겟투게더 위드 패밀리 앤 렐러티브즈 앳홈" },
          { en: "Usually, family members come from all over the country for memorial rituals", ko: "유주얼리, 패밀리 멤버즈 컴 프럼 올오버더 컨트리 퍼 메모리얼 리추얼즈" },
          { en: "and gather in one place — wherever the eldest family member or the grandparents live.", ko: "앤 개더 인원 플레이스, 웨어에버디 엘디스트 패밀리 멤버 오어더 그랜페런츠 리브" },
          { en: "For religious holidays like Buddha's Birthday or Christmas, though,", ko: "퍼 릴리져스 할러데이즈 라익 부다스 버스데이 오어 크리스마스, 도우" },
          { en: "celebrations are often held at churches or temples instead.", ko: "셀러브레이션즈알 오픈 헬드앳 처치즈 오어 템플즈 인스테드" },
          { en: "People have a special service or worship at those religious places.", ko: "피플 해버 스페셜 서비스 오어 워쉽 앳도즈 릴리져스 플레이시즈" },
          { en: "And people with no religion just like to spend time with family or friends,", ko: "앤 피플 위드노 릴리전 저스트 라익투 스펜타임 위드 패밀리 오어 프렌즈" },
          { en: "either at home or somewhere else like restaurants, pubs, or amusement parks.", ko: "이더 앳홈 오어 썸웨어엘스 라익 레스토랑츠, 펍스, 오어 어뮤즈먼트 파크스" }
        ],
        warnings: [
          { word: "religious", guide: "릴리져스" },
          { word: "ritual", guide: "리추얼" },
          { word: "worship", guide: "워쉽" },
          { word: "relatives", guide: "렐러티브즈" }
        ]
      }
    ]
  },
  {
    id: 35, emoji: "🏠", nameKo: "거주지",
    category: "2Combo",
    questions: [
      {
        id: 113,
        question: "Homes today are very different from homes that were built in the past. Tell me how homes in your country have changed over the past few years in terms of trend, types of homes, or the housing that people live in.",
        translation: "요즘 집은 예전에 지어진 집과 많이 다르죠. 최근 몇 년간 당신 나라의 주택이 트렌드나 유형, 사람들이 사는 형태 면에서 어떻게 변했는지 말해 주세요.",
        type: "우리나라 주택의 변화",
        structure: ["과거: 단독주택, 방+부엌+화장실만", "가구 적음, 바닥에 침구/식사", "지금: 고층아파트 선호", "침실+거실+부엌+화장실+발코니", "침대 생김, 붙박이가구도", "더 넓고 정돈된 느낌"],
        script: [
          { en: "In the past, many Korean people used to live in small detached houses.", ko: "과거에는 많은 한국 사람들이 작은 단독 주택에 살았어요." },
          { en: "They just had bedrooms, a kitchen, and a bathroom, and didn't have many pieces of furniture.", ko: "그냥 침실, 부엌, 화장실 정도만 있었고, 가구도 별로 없었어요." },
          { en: "A few people had beds, but many just slept lying on the floor, and had meals sitting on the floor at a low table.", ko: "침대가 있는 집도 있었지만, 많은 사람들이 그냥 바닥에 누워 자고, 낮은 상에 앉아서 밥을 먹었어요." },
          { en: "Now, everything is different — many Korean people prefer high-rise apartments.", ko: "지금은 완전히 달라요 — 많은 한국 사람들이 고층 아파트를 선호해요." },
          { en: "These apartments have bedrooms, a living room, a kitchen, a bathroom, and even a balcony.", ko: "이런 아파트엔 침실, 거실, 부엌, 화장실, 심지어 발코니까지 있어요." },
          { en: "And guess what? Many people have beds now, plus built-in furniture like walk-in closets, so apartments look neater and more spacious than before.", ko: "그리고 그거 아세요? 이제 침대도 있고, 붙박이 워크인 클로젯 같은 가구도 있어서 아파트가 예전보다 더 정돈되고 넓어 보여요." }
        ],
        pronunciation: [
          { en: "In the past, many Korean people used to live in small detached houses.", ko: "인더 패스트, 매니 코리안 피플 유스투 리브 인 스몰 디태치드 하우시즈" },
          { en: "They just had bedrooms, a kitchen, and a bathroom, and didn't have many pieces of furniture.", ko: "데이 저스트 해드 베드룸즈, 어 키친, 앤더 배쓰룸, 앤 디든 해브 매니 피시즈어브 퍼니처" },
          { en: "A few people had beds, but many just slept lying on the floor, and had meals sitting on the floor at a low table.", ko: "어퓨 피플 해드 베즈, 벗 매니 저스트 슬렙트 라잉 온더 플로어, 앤 해드 밀즈 시딩 온더 플로어 앳어 로우 테이블" },
          { en: "Now, everything is different — many Korean people prefer high-rise apartments.", ko: "나우, 에브리씽 이즈 디퍼런트, 매니 코리안 피플 프리퍼 하이라이즈 어파트먼츠" },
          { en: "These apartments have bedrooms, a living room, a kitchen, a bathroom, and even a balcony.", ko: "디즈 어파트먼츠 해브 베드룸즈, 어 리빙룸, 어 키친, 어 배쓰룸, 앤 이븐 어 발코니" },
          { en: "And guess what? Many people have beds now, plus built-in furniture like walk-in closets, so apartments look neater and more spacious than before.", ko: "앤 게스왓? 매니 피플 해브 베즈 나우, 플러스 빌트인 퍼니처 라익 워킨 클로짓츠, 소 어파트먼츠 룩 니러 앤 모어 스페이셔스 댄 비포어" }
        ],
        warnings: [
          { word: "detached", guide: "디태치드" },
          { word: "apartments", guide: "어파트먼츠" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "balcony", guide: "발코니" }
        ]
      },
      {
        id: 114,
        question: "House is a topic that is often on the news. Tell me about things people in your city are discussing when it comes to homes and housing. Also, describe some of the ongoing problems or challenges people face regarding housing.",
        translation: "집은 뉴스에 자주 나오는 주제죠. 당신 도시 사람들이 집이나 주택 문제로 어떤 이야기를 나누는지 말해 주세요. 주택과 관련해서 사람들이 겪는 문제나 어려움도 설명해 주세요.",
        type: "주택 이슈",
        structure: ["이슈: 비싼 집값", "현상: 대도시 이주 많음 → 주택부족+가격상승", "예시(객관): 대도시 거주자 70%가 집 구하기 어려움 경험", "예시(주관): 3년전 서울서 아파트 찾다 변두리로 이사", "결론: 외곽에 주택 더 짓고 교통정비 필요"],
        script: [
          { en: "We have some housing issues in Korea because of high housing prices.", ko: "한국은 집값이 비싸서 주택 문제가 좀 있어요." },
          { en: "Many people have moved to big cities for work or education, and that's caused housing shortages and rising real estate prices.", ko: "많은 사람들이 직장이나 교육 때문에 대도시로 이사왔고, 그게 주택 부족이랑 부동산 가격 상승을 불러왔어요." },
          { en: "According to a survey, about 70% of people living in big cities say they've had trouble finding a good place to live.", ko: "한 설문조사에 따르면, 대도시에 사는 사람들 중 약 70%가 좋은 집을 구하는 데 어려움을 겪었다고 해요." },
          { en: "In my case, I tried to find a good apartment in Seoul about three years ago, but it wasn't easy, so I ended up moving to the outskirts of Seoul.", ko: "제 경우엔, 3년쯤 전에 서울에서 좋은 아파트를 구하려 했는데 쉽지 않아서 결국 서울 변두리로 이사했어요." },
          { en: "To handle this, I think we need to build more houses and apartments on the outskirts of big cities and improve the transportation system.", ko: "이 문제를 해결하려면 대도시 외곽에 주택을 더 짓고 교통 체계를 정비해야 한다고 생각해요." }
        ],
        pronunciation: [
          { en: "We have some housing issues in Korea because of high housing prices.", ko: "위 해브 썸 하우징 이슈즈 인 코리아 비커즈어브 하이 하우징 프라이시즈" },
          { en: "Many people have moved to big cities for work or education, and that's caused housing shortages and rising real estate prices.", ko: "매니 피플 해브 무브드투 빅 시티즈 퍼 워크오어 에듀케이션, 앤 댓츠 코즈드 하우징 쇼티지즈 앤 라이징 리얼에스테이트 프라이시즈" },
          { en: "According to a survey, about 70% of people living in big cities say they've had trouble finding a good place to live.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트 어브 피플 리빙인 빅시티즈 세이 데이브 해드 트러블 파인딩어 굿 플레이스투 리브" },
          { en: "In my case, I tried to find a good apartment in Seoul about three years ago, but it wasn't easy, so I ended up moving to the outskirts of Seoul.", ko: "인마이 케이스, 아이 트라이투 파인더 굿 어파트먼트 인서울 어바웃 쓰리 이어즈어고, 벗 잇워즌트 이지, 소 아이 엔디덥 무빙투 디 아웃스커츠어브 서울" },
          { en: "To handle this, I think we need to build more houses and apartments on the outskirts of big cities and improve the transportation system.", ko: "투 핸들디스, 아이씽크 위니투 빌드모어 하우시즈 앤 어파트먼츠 온디 아웃스커츠어브 빅시티즈 앤 임프루브더 트랜스포테이션 시스템" }
        ],
        warnings: [
          { word: "shortage", guide: "쇼티지" },
          { word: "real estate", guide: "리얼에스테이트" },
          { word: "outskirts", guide: "아웃스커츠" },
          { word: "transportation", guide: "트랜스포테이션" }
        ]
      }
    ]
  },
  {
    id: 36, emoji: "🎵", nameKo: "음악",
    category: "2Combo",
    questions: [
      {
        id: 115,
        question: "You indicated in the survey that you listen to music. Pick two different kinds of music or composers. Describe each in as much detail as possible, and then compare similarities and differences between them.",
        translation: "설문에서 음악을 듣는다고 하셨죠. 서로 다른 두 음악 장르나 작곡가를 골라서 최대한 자세히 설명하고, 둘의 공통점과 차이점을 비교해 주세요.",
        type: "음악 장르 비교",
        structure: ["댄스음악 vs 발라드음악 비교", "공통점: 둘다 한국서 인기", "차이1: 박자(댄스 빠름/발라드 느림)", "차이2: 듣는 상황(댄스=스트레스해소/발라드=휴식)", "차이3: 분위기(댄스가 더 신나고 경쾌)", "결론: 스트레스풀리고 마음 비워져서 댄스음악 더 좋아함"],
        script: [
          { en: "I'd like to compare dance music to ballad music.", ko: "댄스 음악이랑 발라드 음악을 비교해볼게요." },
          { en: "They have something in common in that they're both popular in Korea.", ko: "둘 다 한국에서 인기 있다는 공통점이 있어요." },
          { en: "As for differences, first, the beat is different — dance music has a fast-paced beat, while ballad music has a slow one.", ko: "차이점으론, 먼저 박자가 달라요 — 댄스 음악은 빠른 비트고, 발라드 음악은 느린 비트예요." },
          { en: "People usually listen to dance music to relieve stress, while they listen to ballad music to relax or calm down.", ko: "사람들은 보통 스트레스 풀 때 댄스 음악을 듣고, 긴장을 풀거나 차분해지고 싶을 때 발라드 음악을 들어요." },
          { en: "Compared to ballad music, dance music is more exciting, cheerful, and lively.", ko: "발라드 음악에 비해 댄스 음악은 더 신나고 경쾌하고 활기차요." },
          { en: "I like dance music better because it helps me relieve stress and clear my mind.", ko: "저는 댄스 음악을 들으면 스트레스도 풀리고 마음도 비워져서 그게 더 좋아요." }
        ],
        pronunciation: [
          { en: "I'd like to compare dance music to ballad music.", ko: "아이드 라익투 컴페어 댄스 뮤직투 발라드 뮤직" },
          { en: "They have something in common in that they're both popular in Korea.", ko: "데이 해브 썸씽인 커먼 인댓 데이알 보쓰 파퓰러 인코리아" },
          { en: "As for differences, first, the beat is different — dance music has a fast-paced beat, while ballad music has a slow one.", ko: "애즈퍼 디퍼런시즈, 퍼스트, 더 비잇 이즈 디퍼런트, 댄스 뮤직 해저 패스트페이스트 비잇, 와일 발라드 뮤직 해저 슬로우원" },
          { en: "People usually listen to dance music to relieve stress, while they listen to ballad music to relax or calm down.", ko: "피플 유주얼리 리슨투 댄스 뮤직투 릴리브 스트레스, 와일 데이 리슨투 발라드 뮤직투 릴랙스 오어 캄다운" },
          { en: "Compared to ballad music, dance music is more exciting, cheerful, and lively.", ko: "컴페어드투 발라드 뮤직, 댄스 뮤직이즈 모어 익사이팅, 치어풀, 앤 라이블리" },
          { en: "I like dance music better because it helps me relieve stress and clear my mind.", ko: "아이 라익 댄스 뮤직 베터 비커즈잇 헬프스미 릴리브 스트레스 앤 클리어 마이마인드" }
        ],
        warnings: [
          { word: "compare", guide: "컴페어" },
          { word: "cheerful", guide: "치어풀" },
          { word: "lively", guide: "라이블리" },
          { word: "relieve", guide: "릴리브" }
        ]
      },
      {
        id: 116,
        question: "What new electronic gadgets or equipment are people who like to listen to music interested in these days? What are they talking about? What new products excite them and why?",
        translation: "요즘 음악 애호가들이 관심 있어 하는 새로운 전자기기나 장비가 있나요? 어떤 얘기를 하나요? 어떤 신제품이 사람들을 설레게 하고, 왜 그런가요?",
        type: "음악 최신 기기",
        structure: ["이슈: 요즘 음악들을때 스마트폰 관심 많음", "이유: 스트리밍서비스로 다운로드/이동 불필요", "노래 검색해서 바로 재생 가능", "동시에 인터넷서핑 등 다른 일도 가능", "예시: 70%가 스마트폰이 편리하다고 응답", "결론: 그래서 스마트폰으로 음악듣기 선호"],
        script: [
          { en: "These days, people are really into using their smartphones to listen to music.", ko: "요즘 사람들은 음악을 들을 때 스마트폰 쓰는 걸 정말 좋아해요." },
          { en: "First, they can use music streaming services right on their smartphones — no need to download files to a computer and move them to a separate device like an MP3 player.", ko: "우선, 스마트폰으로 바로 음악 스트리밍 서비스를 쓸 수 있어요 — 컴퓨터에 파일을 다운받아서 MP3 플레이어 같은 별도 기기로 옮길 필요가 없어요." },
          { en: "Using a smartphone, they can just search for the song they want and play it right there.", ko: "스마트폰으로 원하는 노래를 검색해서 바로 재생할 수 있어요." },
          { en: "Plus, people can do other things, like surfing the internet, on the same device while listening to music.", ko: "게다가 같은 기기로 음악을 들으면서 인터넷 서핑 같은 다른 일도 할 수 있고요." },
          { en: "According to a survey, about 70% of people who listen to music say using a smartphone is convenient.", ko: "한 설문조사에 따르면, 음악을 듣는 사람들 중 약 70%가 스마트폰이 편리하다고 답했어요." },
          { en: "That's why people like using their smartphones to listen to music.", ko: "그래서 사람들이 스마트폰으로 음악 듣는 걸 좋아하는 거예요." }
        ],
        pronunciation: [
          { en: "These days, people are really into using their smartphones to listen to music.", ko: "디즈 데이즈, 피플알 릴리 인투 유징데어 스마트폰즈투 리슨투 뮤직" },
          { en: "First, they can use music streaming services right on their smartphones —", ko: "퍼스트, 데이캔 유즈 뮤직 스트리밍 서비시즈 라잇온 데어 스마트폰즈" },
          { en: "no need to download files to a computer and move them to a separate device like an MP3 player.", ko: "노 니투 다운로드 파일즈투어 컴퓨터 앤 무브뎀투어 세퍼레잇 디바이스 라이컨 엠피쓰리 플레이어" },
          { en: "Using a smartphone, they can just search for the song they want and play it right there.", ko: "유징어 스마트폰, 데이캔 저스트 서치퍼더 송 데이원트 앤 플레이잇 라잇데어" },
          { en: "Plus, people can do other things, like surfing the internet, on the same device while listening to music.", ko: "플러스, 피플캔 두 아더 씽즈, 라익 서핑디 인터넷, 온더 세임 디바이스 와일 리스닝투 뮤직" },
          { en: "According to a survey, about 70% of people who listen to music say using a smartphone is convenient.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플 후 리슨투 뮤직 세이 유징어 스마트폰이즈 컨비니언트" },
          { en: "That's why people like using their smartphones to listen to music.", ko: "댓츠와이 피플 라익 유징데어 스마트폰즈투 리슨투 뮤직" }
        ],
        warnings: [
          { word: "streaming", guide: "스트리밍" },
          { word: "separate", guide: "세퍼레잇" },
          { word: "device", guide: "디바이스" },
          { word: "convenient", guide: "컨비니언트" }
        ]
      }
    ]
  },
  {
    id: 37, emoji: "🧳", nameKo: "국내여행",
    category: "2Combo",
    questions: [
      {
        id: 117,
        question: "These days, most people say traveling became more difficult than the past few years. What do you think has changed? How do these changes affect travelers or traveling experiences?",
        translation: "요즘 사람들은 여행이 몇 년 전보다 더 어려워졌다고들 하죠. 뭐가 바뀌었다고 생각하세요? 이런 변화가 여행자나 여행 경험에 어떤 영향을 주나요?",
        type: "여행의 변화",
        structure: ["도입: 여행이 더 쉬워졌다고 생각", "과거: 해외여행 적음, 국내/집에 머뭄", "과거이유: 정보부족 → 여행사 방문/책/TV프로그램 검색해야함", "전환점: 인터넷 발달", "현재: 계획이 훨씬 쉬워짐, 해외여행 늘어남", "현재이유: 인터넷서 정보/저렴한 항공권/숙박 찾기 쉬움"],
        script: [
          { en: "Actually, I think differently — I think traveling has become easier than before.", ko: "사실 저는 다르게 생각해요 — 여행이 예전보다 더 쉬워졌다고 봐요." },
          { en: "In the past, not many people went abroad for vacation. They mostly just stayed home or traveled domestically.", ko: "과거에는 휴가로 해외에 가는 사람이 많지 않았어요. 그냥 집에 있거나 국내 여행만 했죠." },
          { en: "Back then, there wasn't much travel information, so planning a trip — especially overseas — took a lot of time and effort. People had to visit a travel agency in person, read books, or look for TV programs about traveling.", ko: "그때는 여행 정보가 많지 않아서 여행, 특히 해외여행을 계획하려면 시간과 노력이 많이 들었어요. 여행사를 직접 찾아가거나, 책을 읽거나, 여행 관련 TV 프로그램을 찾아봐야 했죠." },
          { en: "However, a lot has changed thanks to the internet.", ko: "하지만 인터넷 덕분에 많은 게 바뀌었어요." },
          { en: "Now, planning a trip is much easier than before, and a lot more people go abroad for vacation these days.", ko: "지금은 여행 계획이 훨씬 쉬워졌고, 요즘은 훨씬 많은 사람들이 휴가로 해외에 가요." },
          { en: "People can find any kind of travel information online, and even find cheap flights or accommodations. If you want to travel, you can just click, pack, and go.", ko: "인터넷에서 어떤 여행 정보든 찾을 수 있고, 저렴한 항공권이나 숙소도 구할 수 있어요. 여행 가고 싶으면 그냥 클릭하고, 짐 싸고, 떠나면 돼요." }
        ],
        pronunciation: [
          { en: "Actually, I think differently — I think traveling has become easier than before.", ko: "액츄얼리, 아이씽크 디퍼런틀리, 아이씽크 트래블링 해즈 비컴 이지어 댄 비포어" },
          { en: "In the past, not many people went abroad for vacation.", ko: "인더패스트, 낫매니 피플 웬트어브로드 퍼 베케이션" },
          { en: "They mostly just stayed home or traveled domestically.", ko: "데이 모스틀리 저스트 스테이드홈 오어 트래블드 더메스티컬리" },
          { en: "Back then, there wasn't much travel information, so planning a trip — especially overseas — took a lot of time and effort.", ko: "백덴, 데어워즌트 머치 트래블 인포메이션, 소 플래닝어 트립, 이스페셜리 오버시즈, 툭어랏어브 타임앤 에펏" },
          { en: "People had to visit a travel agency in person, read books, or look for TV programs about traveling.", ko: "피플 해드투 비짓어 트래블 에이전시 인펄슨, 리드 북스, 오어 룩퍼 티비 프로그램즈 어바웃 트래블링" },
          { en: "However, a lot has changed thanks to the internet.", ko: "하우에버, 어랏 해즈 체인지드 쌩스투디 인터넷" },
          { en: "Now, planning a trip is much easier than before, and a lot more people go abroad for vacation these days.", ko: "나우, 플래닝어 트립이즈 머치 이지어댄 비포어, 앤 어랏모어 피플 고 어브로드 퍼 베케이션 디즈데이즈" },
          { en: "People can find any kind of travel information online, and even find cheap flights or accommodations.", ko: "피플캔 파인드 애니카인드어브 트래블 인포메이션 온라인, 앤 이븐 파인드 칩 플라이츠 오어 어카머데이션즈" },
          { en: "If you want to travel, you can just click, pack, and go.", ko: "이퓨원투 트래블, 유캔 저스트 클릭, 팩, 앤고" }
        ],
        warnings: [
          { word: "domestically", guide: "더메스티컬리" },
          { word: "accommodations", guide: "어카머데이션즈" },
          { word: "agency", guide: "에이전시" },
          { word: "effort", guide: "에펏" }
        ]
      },
      {
        id: 118,
        question: "When people talk about travel, what do they usually talk about? What are some issues or topics being discussed or raised? What has been done to address this matter?",
        translation: "사람들이 여행 얘기를 할 때 보통 무슨 얘기를 하나요? 어떤 이슈나 화제가 논의되고 있나요? 이 문제를 위해 어떤 조치가 취해졌나요?",
        type: "여행 관련 이슈",
        structure: ["이슈: 여행이 얼마나 중요한지 얘기함", "현상: 건강+업무생산성 향상, 스트레스해소/행복/가족유대", "예시(객관): 70%가 여행후 스트레스해소 경험", "예시(주관): 작년 긴휴가후 업무집중 잘됨, 프로젝트 성공적", "결론: 회사/정부가 연차 늘릴 것을 권고"],
        script: [
          { en: "When people talk about traveling, they usually talk about how important it is.", ko: "사람들이 여행 얘기를 할 때, 보통 여행이 얼마나 중요한지에 대해 얘기해요." },
          { en: "Traveling can improve a person's health as well as their productivity at work — people usually relieve stress, feel happier, and bond more with family after a trip.", ko: "여행은 건강뿐 아니라 업무 생산성도 높여줘요 — 여행 후엔 보통 스트레스도 풀리고, 더 행복해지고, 가족 간의 유대감도 좋아져요." },
          { en: "According to a survey, about 70% of people who travel regularly say they've experienced stress relief after a trip.", ko: "한 설문조사에 따르면, 정기적으로 여행하는 사람들 중 약 70%가 여행 후 스트레스가 풀렸다고 답했어요." },
          { en: "In my case, I was able to focus much more on work after a long vacation last year, and the project I was working on turned out really successful.", ko: "제 경우엔, 작년에 긴 휴가를 다녀온 뒤 업무에 훨씬 더 집중할 수 있었고, 진행하던 프로젝트도 꽤 성공적으로 끝났어요." },
          { en: "Since traveling is so beneficial, a lot of companies and even the government have started recommending people take more vacation days every year.", ko: "여행이 이렇게 유익하다 보니, 많은 회사들이나 정부에서도 매년 휴가를 더 많이 쓰라고 권장하고 있어요." }
        ],
        pronunciation: [
          { en: "When people talk about traveling, they usually talk about how important it is.", ko: "웬 피플 톡어바웃 트래블링, 데이 유주얼리 톡어바웃 하우 임포턴트 잇이즈" },
          { en: "Traveling can improve a person's health as well as their productivity at work —", ko: "트래블링캔 임프루브어 펄슨스 헬쓰 애즈웰애즈 데어 프로덕티비티 앳워크" },
          { en: "people usually relieve stress, feel happier, and bond more with family after a trip.", ko: "피플 유주얼리 릴리브 스트레스, 필 해피어, 앤 반드모어 위드패밀리 애프터러 트립" },
          { en: "According to a survey, about 70% of people who travel regularly say they've experienced stress relief after a trip.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플 후 트래블 레귤러리 세이 데이브 익스피어리언스드 스트레스 릴리프 애프터러 트립" },
          { en: "In my case, I was able to focus much more on work after a long vacation last year,", ko: "인마이케이스, 아이워즈 에이블투 포커스 머치모어 온워크 애프터러 롱 베케이션 라스트이어" },
          { en: "and the project I was working on turned out really successful.", ko: "앤더 프로젝트 아이워즈 워킹온 턴드아웃 릴리 석세스풀" },
          { en: "Since traveling is so beneficial, a lot of companies and even the government have started recommending people take more vacation days every year.", ko: "신스 트래블링이즈 소우 베네피셜, 어랏어브 컴퍼니즈 앤 이븐더 거번먼트 해브 스타티드 레커멘딩 피플 테익 모어 베케이션 데이즈 에브리이어" }
        ],
        warnings: [
          { word: "productivity", guide: "프로덕티비티" },
          { word: "beneficial", guide: "베네피셜" },
          { word: "recommending", guide: "레커멘딩" },
          { word: "successful", guide: "석세스풀" }
        ]
      }
    ]
  },
  {
    id: 38, emoji: "🏡", nameKo: "집에서 보내는 휴가",
    category: "2Combo",
    questions: [
      {
        id: 119,
        question: "The way people take vacations changes over time. How are vacations people used to take in the past different from the ones they take today?",
        translation: "시간이 지나면서 사람들이 휴가를 보내는 방식도 변하죠. 예전에 사람들이 보내던 휴가와 요즘 휴가는 어떻게 다른가요?",
        type: "휴가 방식",
        structure: ["도입: 휴가 방식도 예전보다 쉬워졌다고 생각", "과거: 해외 잘 안감, 국내/집에 머뭄", "과거이유: 정보부족 → 여행사/책/TV로 알아봐야함", "전환점: 인터넷 발달", "현재: 계획 훨씬 쉬움, 해외로도 많이 감", "현재이유: 인터넷서 정보+저렴한 항공/숙박 찾기 쉬움"],
        script: [
          { en: "Actually, I think differently — I think this has become easier than before.", ko: "사실 저는 다르게 생각해요 — 이것도 예전보다 더 쉬워졌다고 봐요." },
          { en: "In the past, not many people went abroad for vacation. They mostly just stayed home or traveled domestically.", ko: "과거에는 휴가로 해외에 가는 사람이 많지 않았어요. 그냥 집에 있거나 국내 여행만 했죠." },
          { en: "Back then, there wasn't much travel information, so planning a vacation — especially overseas — took a lot of time and effort. People had to visit a travel agency in person, read books, or look for TV programs about it.", ko: "그때는 여행 정보가 많지 않아서 휴가 계획을, 특히 해외 쪽은 세우려면 시간과 노력이 많이 들었어요. 여행사를 직접 찾아가거나, 책을 읽거나, 관련 TV 프로그램을 찾아봐야 했죠." },
          { en: "However, a lot has changed thanks to the internet.", ko: "하지만 인터넷 덕분에 많은 게 바뀌었어요." },
          { en: "Now, planning a vacation is much easier than before, and a lot more people go abroad these days.", ko: "지금은 휴가 계획이 훨씬 쉬워졌고, 요즘은 훨씬 많은 사람들이 해외로 가요." },
          { en: "People can find any kind of information online, and even find cheap flights or accommodations. If you want a trip, you can just click, pack, and go.", ko: "인터넷에서 어떤 정보든 찾을 수 있고, 저렴한 항공권이나 숙소도 구할 수 있어요. 여행 가고 싶으면 그냥 클릭하고, 짐 싸고, 떠나면 돼요." }
        ],
        pronunciation: [
          { en: "Actually, I think differently — I think this has become easier than before.", ko: "액츄얼리, 아이씽크 디퍼런틀리, 아이씽크 디스 해즈 비컴 이지어 댄 비포어" },
          { en: "In the past, not many people went abroad for vacation.", ko: "인더패스트, 낫매니 피플 웬트어브로드 퍼 베케이션" },
          { en: "They mostly just stayed home or traveled domestically.", ko: "데이 모스틀리 저스트 스테이드홈 오어 트래블드 더메스티컬리" },
          { en: "Back then, there wasn't much travel information, so planning a vacation — especially overseas — took a lot of time and effort.", ko: "백덴, 데어워즌트 머치 트래블 인포메이션, 소 플래닝어 베케이션, 이스페셜리 오버시즈, 툭어랏어브 타임앤 에펏" },
          { en: "People had to visit a travel agency in person, read books, or look for TV programs about it.", ko: "피플 해드투 비짓어 트래블 에이전시 인펄슨, 리드 북스, 오어 룩퍼 티비 프로그램즈 어바웃잇" },
          { en: "However, a lot has changed thanks to the internet.", ko: "하우에버, 어랏 해즈 체인지드 쌩스투디 인터넷" },
          { en: "Now, planning a vacation is much easier than before, and a lot more people go abroad these days.", ko: "나우, 플래닝어 베케이션이즈 머치 이지어댄 비포어, 앤 어랏모어 피플 고 어브로드 디즈데이즈" },
          { en: "People can find any kind of information online, and even find cheap flights or accommodations.", ko: "피플캔 파인드 애니카인드어브 인포메이션 온라인, 앤 이븐 파인드 칩 플라이츠 오어 어카머데이션즈" },
          { en: "If you want a trip, you can just click, pack, and go.", ko: "이퓨원어 트립, 유캔 저스트 클릭, 팩, 앤고" }
        ],
        warnings: [
          { word: "domestically", guide: "더메스티컬리" },
          { word: "accommodations", guide: "어카머데이션즈" },
          { word: "agency", guide: "에이전시" },
          { word: "effort", guide: "에펏" }
        ]
      },
      {
        id: 120,
        question: "Do you think taking a vacation is important? Why? What kind of impact can a vacation have on one's health and work? How do you personally feel after a vacation?",
        translation: "휴가를 갖는 게 중요하다고 생각하나요? 왜죠? 휴가가 건강이나 일에 어떤 영향을 줄 수 있나요? 휴가 후엔 개인적으로 어떤 기분이 드나요?",
        type: "휴가의 중요성",
        structure: ["이슈: 휴가가 얼마나 중요한지 얘기함", "현상: 건강+업무생산성 향상, 스트레스해소/행복/가족유대", "예시(객관): 70%가 휴가후 스트레스해소 경험", "예시(주관): 작년 긴휴가후 업무집중 잘됨, 프로젝트 성공적", "결론: 회사/정부가 연차 늘릴 것을 권고"],
        script: [
          { en: "When people talk about having a vacation, they usually talk about how important it is.", ko: "사람들이 휴가 얘기를 할 때, 보통 휴가가 얼마나 중요한지 얘기해요." },
          { en: "Having a vacation can improve a person's health as well as their productivity at work — people usually relieve stress, feel happier, and bond more with family after a vacation.", ko: "휴가는 건강뿐 아니라 업무 생산성도 높여줘요 — 휴가 후엔 보통 스트레스도 풀리고, 더 행복해지고, 가족 간의 유대감도 좋아져요." },
          { en: "According to a survey, about 70% of people who take regular vacations say they've experienced stress relief afterward.", ko: "한 설문조사에 따르면, 정기적으로 휴가를 가는 사람들 중 약 70%가 휴가 후 스트레스가 풀렸다고 답했어요." },
          { en: "In my case, I was able to focus much more on work after a long vacation last year, and the project I was working on turned out really successful.", ko: "제 경우엔, 작년에 긴 휴가를 다녀온 뒤 업무에 훨씬 더 집중할 수 있었고, 진행하던 프로젝트도 꽤 성공적으로 끝났어요." },
          { en: "Since having a vacation is so beneficial, a lot of companies and even the government have started recommending people take more vacation days every year.", ko: "휴가가 이렇게 유익하다 보니, 많은 회사들이나 정부에서도 매년 휴가를 더 많이 쓰라고 권장하고 있어요." }
        ],
        pronunciation: [
          { en: "When people talk about having a vacation, they usually talk about how important it is.", ko: "웬 피플 톡어바웃 해빙어 베케이션, 데이 유주얼리 톡어바웃 하우 임포턴트 잇이즈" },
          { en: "Having a vacation can improve a person's health as well as their productivity at work —", ko: "해빙어 베케이션캔 임프루브어 펄슨스 헬쓰 애즈웰애즈 데어 프로덕티비티 앳워크" },
          { en: "people usually relieve stress, feel happier, and bond more with family after a vacation.", ko: "피플 유주얼리 릴리브 스트레스, 필 해피어, 앤 반드모어 위드패밀리 애프터러 베케이션" },
          { en: "According to a survey, about 70% of people who take regular vacations say they've experienced stress relief afterward.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플 후 테익 레귤러 베케이션즈 세이 데이브 익스피어리언스드 스트레스 릴리프 애프터워드" },
          { en: "In my case, I was able to focus much more on work after a long vacation last year,", ko: "인마이케이스, 아이워즈 에이블투 포커스 머치모어 온워크 애프터러 롱 베케이션 라스트이어" },
          { en: "and the project I was working on turned out really successful.", ko: "앤더 프로젝트 아이워즈 워킹온 턴드아웃 릴리 석세스풀" },
          { en: "Since having a vacation is so beneficial, a lot of companies and even the government have started recommending people take more vacation days every year.", ko: "신스 해빙어 베케이션이즈 소우 베네피셜, 어랏어브 컴퍼니즈 앤 이븐더 거번먼트 해브 스타티드 레커멘딩 피플 테익 모어 베케이션 데이즈 에브리이어" }
        ],
        warnings: [
          { word: "productivity", guide: "프로덕티비티" },
          { word: "beneficial", guide: "베네피셜" },
          { word: "recommending", guide: "레커멘딩" },
          { word: "afterward", guide: "애프터워드" }
        ]
      }
    ]
  },
  {
    id: 39, emoji: "🎬", nameKo: "영화",
    category: "2Combo",
    questions: [
      {
        id: 121,
        question: "Could you compare the movies made today to movies you saw in the past? How have movies changed over the years? What are the differences and similarities?",
        translation: "요즘 만들어지는 영화와 예전에 보셨던 영화를 비교해 주시겠어요? 영화가 몇 년간 어떻게 변했나요? 차이점과 공통점은 뭔가요?",
        type: "예전영화와 요즘영화 비교",
        structure: ["도입: 옛날영화 vs 요즘영화 비교", "공통점: 다양한 세대에게 사랑받음", "차이1: 인기장르 다름(과거=로맨스/드라마/액션, 지금=판타지/SF/애니)", "차이2: 요즘영화는 가상현실 소재 많이 다룸", "결론: 요즘영화가 상상력을 더 자극해서 더 좋아함"],
        script: [
          { en: "I'd like to compare old movies to current movies.", ko: "옛날 영화랑 요즘 영화를 비교해볼게요." },
          { en: "They have something in common in that they're both loved by people of all generations.", ko: "둘 다 다양한 세대에게 사랑받는다는 공통점이 있어요." },
          { en: "As for differences, the popular genres are different. In the past, directors didn't use much technology, so the popular genres were mostly romance, drama, or action, but now, thanks to technology, we see more fantasy, sci-fi, or animated movies, and those are the popular ones these days.", ko: "차이점으로는, 인기 장르가 달라요. 예전엔 감독들이 기술을 많이 안 써서 인기 장르가 주로 로맨스, 드라마, 액션이었는데, 지금은 기술 발전 덕분에 판타지, SF, 애니메이션 영화를 더 자주 볼 수 있고, 요즘은 그게 인기예요." },
          { en: "Also, compared to old movies, a lot of current movies deal with virtual reality in their stories.", ko: "그리고 옛날 영화에 비해 요즘 영화들은 이야기 속에서 가상현실을 많이 다뤄요." },
          { en: "I like current movies better because they stimulate my imagination much more than old movies did.", ko: "저는 요즘 영화가 옛날 영화보다 상상력을 훨씬 더 자극해서 더 좋아해요." }
        ],
        pronunciation: [
          { en: "I'd like to compare old movies to current movies.", ko: "아이드 라익투 컴페어 올드 무비즈투 커런트 무비즈" },
          { en: "They have something in common in that they're both loved by people of all generations.", ko: "데이 해브 썸씽인 커먼 인댓 데이알 보쓰 러브드바이 피플어브 올 제너레이션즈" },
          { en: "As for differences, the popular genres are different.", ko: "애즈퍼 디퍼런시즈, 더 파퓰러 장르즈알 디퍼런트" },
          { en: "In the past, directors didn't use much technology, so the popular genres were mostly romance, drama, or action,", ko: "인더패스트, 디렉터즈 디든 유즈 머치 테크놀러지, 소더 파퓰러 장르즈 워 모스틀리 로맨스, 드라마, 오어 액션" },
          { en: "but now, thanks to technology, we see more fantasy, sci-fi, or animated movies, and those are the popular ones these days.", ko: "벗나우, 쌩스투 테크놀러지, 위씨 모어 판타지, 사이파이, 오어 애니메이티드 무비즈, 앤 도우즈알더 파퓰러원즈 디즈데이즈" },
          { en: "Also, compared to old movies, a lot of current movies deal with virtual reality in their stories.", ko: "얼소, 컴페어드투 올드무비즈, 어랏어브 커런트 무비즈 딜위드 버추얼 리얼리티 인데어 스토리즈" },
          { en: "I like current movies better because they stimulate my imagination much more than old movies did.", ko: "아이라익 커런트 무비즈 베터 비커즈데이 스티뮬레이트 마이 이매지네이션 머치모어 댄 올드무비즈 디드" }
        ],
        warnings: [
          { word: "genres", guide: "장르즈" },
          { word: "virtual reality", guide: "버추얼리얼리티" },
          { word: "stimulate", guide: "스티뮬레이트" },
          { word: "imagination", guide: "이매지네이션" }
        ]
      },
      {
        id: 122,
        question: "When your friends talk about movies, what topics do they discuss? Why are these issues of interest or concern to you and your friends? Plus, what are some recent trends in the movie industry?",
        translation: "친구들과 영화 얘기할 때 어떤 주제를 얘기하나요? 왜 그게 당신과 친구들에게 관심사인가요? 그리고 최근 영화 업계 트렌드는 어떤가요?",
        type: "영화 관련 이슈",
        structure: ["이슈: 친구들과 불법다운로드 얘기함", "현상: 불법다운로드는 범죄가 될수있어 문제, 벌금 낸 친구도 있음", "예시(객관): 70%가 인터넷서 불법다운로드 경험", "결론: 정부가 엄격히 금지 → 요즘은 비용 지불하는 게 트렌드"],
        script: [
          { en: "These days, my friends and I talk about illegal downloading in the movie industry.", ko: "요즘 저랑 친구들은 영화 산업의 불법 다운로드 얘기를 해요." },
          { en: "A lot of people have tried downloading movies illegally, and that can be a real issue since it's actually a crime — some of my friends, along with plenty of other Koreans, have actually had to pay a hefty fine for it.", ko: "많은 사람들이 영화를 불법으로 다운로드하려고 하는데, 그게 범죄라서 문제가 될 수 있어요 — 제 친구들 몇 명을 포함해서 많은 한국 사람들이 실제로 그것 때문에 벌금을 낸 적도 있어요." },
          { en: "According to a survey, about 70% of people who watch movies say they've downloaded content illegally online.", ko: "한 설문조사에 따르면, 영화를 보는 사람들 중 약 70%가 인터넷에서 불법 다운로드를 해본 적이 있다고 답했어요." },
          { en: "To deal with this, the government has strictly banned illegal downloading, so nowadays people tend to pay for movie content, and that's becoming the trend.", ko: "이 문제를 해결하려고 정부가 불법 다운로드를 엄격히 금지했고, 그래서 요즘은 사람들이 영화 콘텐츠에 비용을 지불하는 게 트렌드가 되고 있어요." }
        ],
        pronunciation: [
          { en: "These days, my friends and I talk about illegal downloading in the movie industry.", ko: "디즈데이즈, 마이 프렌즈앤아이 톡어바웃 일리걸 다운로딩 인더 무비 인더스트리" },
          { en: "A lot of people have tried downloading movies illegally, and that can be a real issue since it's actually a crime —", ko: "어랏어브 피플 해브 트라이드 다운로딩 무비즈 일리걸리, 앤댓 캔비어 리얼 이슈 신스 잇츠 액츄얼리어 크라임" },
          { en: "some of my friends, along with plenty of other Koreans, have actually had to pay a hefty fine for it.", ko: "썸어브마이 프렌즈, 얼롱윗 플렌티어브 아더 코리안즈, 해브 액츄얼리 해투 페이어 헤프티 파인 퍼릿" },
          { en: "According to a survey, about 70% of people who watch movies say they've downloaded content illegally online.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플후 왓치 무비즈 세이 데이브 다운로디드 컨텐트 일리걸리 온라인" },
          { en: "To deal with this, the government has strictly banned illegal downloading, so nowadays people tend to pay for movie content, and that's becoming the trend.", ko: "투 딜위드디스, 더 거번먼트 해즈 스트릭틀리 밴드 일리걸 다운로딩, 소 나우어데이즈 피플 텐투 페이퍼 무비 컨텐트, 앤 댓츠 비커밍더 트렌드" }
        ],
        warnings: [
          { word: "illegal", guide: "일리걸" },
          { word: "industry", guide: "인더스트리" },
          { word: "hefty fine", guide: "헤프티파인" },
          { word: "strictly", guide: "스트릭틀리" }
        ]
      }
    ]
  },
  {
    id: 40, emoji: "🌳", nameKo: "공원",
    category: "2Combo",
    questions: [
      {
        id: 123,
        question: "How are park facilities for adults different from facilities for children? What do adults usually do at the park? How about children? Compare these two types of facilities and activities in the park in detail.",
        translation: "성인용 공원 시설과 아동용 시설은 어떻게 다른가요? 어른들은 공원에서 보통 뭘 하나요? 아이들은요? 두 유형의 시설과 활동을 자세히 비교해 주세요.",
        type: "공원 시설 및 활동 비교",
        structure: ["도입: 성인용 vs 아동용 시설 비교", "공통점: 둘다 공원에서 자주 쓰임", "차이: 성인=벤치/운동기구/산책로, 아동=놀이터(시소/미끄럼틀/그네/회전목마)+물놀이공간/운동장", "결론: 아동시설이 더 다양해서 성인시설도 확충되면 좋겠음"],
        script: [
          { en: "I'd like to compare facilities for adults to those for children.", ko: "성인용 시설이랑 아동용 시설을 비교해볼게요." },
          { en: "They have something in common in that they're both commonly used at the park.", ko: "둘 다 공원에서 자주 쓰인다는 공통점이 있어요." },
          { en: "As for differences, the kinds of facilities are different. For adults, there are benches, exercise machines, and walking trails, so they can relax on a bench, work out, or take a walk.", ko: "차이점으로는, 시설 종류가 달라요. 성인용으로는 벤치, 운동 기구, 산책로가 있어서 벤치에서 쉬거나 운동하거나 산책할 수 있어요." },
          { en: "For children, on the other hand, you'll see playgrounds with seesaws, slides, swing sets, merry-go-rounds, and so on, plus water-play areas and sports fields.", ko: "반면 아이들을 위해서는 시소, 미끄럼틀, 그네, 회전목마 같은 게 있는 놀이터가 있고, 물놀이 공간이랑 운동장도 있어요." },
          { en: "I think facilities for children are much more varied, so I hope facilities for adults can be expanded too, so adults can enjoy a wider range of activities at the park.", ko: "아동 시설이 훨씬 다양한 것 같아서, 성인 시설도 확충돼서 어른들도 공원에서 더 다양한 활동을 할 수 있으면 좋겠어요." }
        ],
        pronunciation: [
          { en: "I'd like to compare facilities for adults to those for children.", ko: "아이드 라익투 컴페어 퍼실리티즈 퍼 어덜츠투 도우즈퍼 칠드런" },
          { en: "They have something in common in that they're both commonly used at the park.", ko: "데이 해브 썸씽인 커먼 인댓 데이알 보쓰 커먼리 유즈드 앳더 파크" },
          { en: "As for differences, the kinds of facilities are different.", ko: "애즈퍼 디퍼런시즈, 더 카인즈어브 퍼실리티즈알 디퍼런트" },
          { en: "For adults, there are benches, exercise machines, and walking trails, so they can relax on a bench, work out, or take a walk.", ko: "포어 어덜츠, 데어라 벤치즈, 엑서사이즈 머신즈, 앤 워킹 트레일즈, 소 데이캔 릴랙스 온어벤치, 워크아웃, 오어 테이커워크" },
          { en: "For children, on the other hand, you'll see playgrounds with seesaws, slides, swing sets, merry-go-rounds, and so on, plus water-play areas and sports fields.", ko: "포어 칠드런, 온디 아더핸드, 유일씨 플레이그라운즈 위드 씨쏘즈, 슬라이즈, 스윙셋츠, 메리고라운즈, 앤소온, 플러스 워터플레이 에리어즈 앤 스포츠필즈" },
          { en: "I think facilities for children are much more varied, so I hope facilities for adults can be expanded too, so adults can enjoy a wider range of activities at the park.", ko: "아이씽크 퍼실리티즈퍼 칠드런알 머치모어 베어리드, 소아이 호프 퍼실리티즈퍼 어덜츠캔비 익스팬디드투, 소 어덜츠캔 인조이어 와이더레인지어브 액티비티즈 앳더 파크" }
        ],
        warnings: [
          { word: "facilities", guide: "퍼실리티즈" },
          { word: "merry-go-round", guide: "메리고라운드" },
          { word: "varied", guide: "베어리드" },
          { word: "expanded", guide: "익스팬디드" }
        ]
      },
      {
        id: 124,
        question: "Let's talk about the issues that parks are faced with these days. What do you think are the challenges faced by parks? What has caused these concerns? Tell me about the steps being taken to preserve parks in your country.",
        translation: "요즘 공원이 직면한 문제에 대해 얘기해볼까요? 공원이 겪는 어려움은 무엇이라고 생각하나요? 무엇이 이런 문제를 일으켰나요? 공원 보존을 위해 어떤 조치가 취해지고 있는지 말해 주세요.",
        type: "공원 보존 관련 이슈",
        structure: ["이슈: 흡연 때문에 공원 문제 있음", "현상: 공원내 흡연 → 간접흡연+대기오염", "예시(객관): 70%가 공원내 간접흡연 경험", "예시(주관): 지난주 친구랑 공원서 간접흡연으로 기침/재채기", "결론: 정부가 공원내 흡연 금지+환경개선 노력"],
        script: [
          { en: "We have some issues with parks in Korea because of smoking.", ko: "한국은 흡연 때문에 공원에 몇 가지 문제가 있어요." },
          { en: "A lot of people try to smoke inside parks, and that causes secondhand smoke and air pollution there.", ko: "많은 사람들이 공원 안에서 담배를 피우려고 하는데, 그게 간접흡연이랑 공기 오염을 일으켜요." },
          { en: "According to a survey, about 70% of people who visit parks in Korea say they've experienced secondhand smoke inside a park.", ko: "한 설문조사에 따르면, 한국에서 공원을 찾는 사람들 중 약 70%가 공원 안에서 간접흡연을 경험한 적이 있다고 답했어요." },
          { en: "In my case, I visited a park in my neighborhood with friends last week, but some people around us were smoking, and we kept coughing and sneezing — it was a pretty bad experience.", ko: "제 경우엔, 지난주에 동네 공원에 친구들이랑 갔는데 주변에서 담배 피우는 사람들이 있어서 계속 기침하고 재채기했어요 — 꽤 안 좋은 경험이었어요." },
          { en: "To handle this, the government has banned smoking in parks and has been trying to improve the park environment.", ko: "이 문제를 해결하려고 정부는 공원 내 흡연을 금지했고 공원 환경을 개선하려고 노력하고 있어요." }
        ],
        pronunciation: [
          { en: "We have some issues with parks in Korea because of smoking.", ko: "위 해브 썸 이슈즈 위드 파크스 인코리아 비커즈어브 스모킹" },
          { en: "A lot of people try to smoke inside parks, and that causes secondhand smoke and air pollution there.", ko: "어랏어브 피플 트라이투 스모크 인사이드 파크스, 앤댓 코지즈 세컨핸드 스모크 앤 에어 폴루션 데어" },
          { en: "According to a survey, about 70% of people who visit parks in Korea say they've experienced secondhand smoke inside a park.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플후 비짓 파크스인 코리아 세이 데이브 익스피어리언스드 세컨핸드 스모크 인사이더 파크" },
          { en: "In my case, I visited a park in my neighborhood with friends last week, but some people around us were smoking, and we kept coughing and sneezing —", ko: "인마이케이스, 아이 비지티드어 파크 인마이 네이버후드 위드 프렌즈 라스트윅, 벗 썸피플 어라운더스 워 스모킹, 앤위 켑트 커핑앤 스니징" },
          { en: "it was a pretty bad experience.", ko: "잇워저 프리티 배드 익스피어리언스" },
          { en: "To handle this, the government has banned smoking in parks and has been trying to improve the park environment.", ko: "투 핸들디스, 더 거번먼트 해즈 밴드 스모킹인 파크스 앤 해즈빈 트라잉투 임프루브더 파크 인바이런먼트" }
        ],
        warnings: [
          { word: "secondhand", guide: "세컨핸드" },
          { word: "pollution", guide: "폴루션" },
          { word: "coughing", guide: "커핑" },
          { word: "environment", guide: "인바이런먼트" }
        ]
      }
    ]
  },
  {
    id: 41, emoji: "🍺", nameKo: "술집",
    category: "2Combo",
    questions: [
      {
        id: 125,
        question: "How are bars or pubs in Korea different from what they used to be? What do people do there now that they didn't before?",
        translation: "한국의 술집이 예전과 어떻게 달라졌나요? 요즘 사람들이 예전엔 안 하던 뭘 하나요?",
        type: "술집에서 하는 일 변화",
        structure: ["도입: 술집 활동에 변화 있었음", "과거: 기본시설(테이블+의자)만, 규모 작음, 그냥 술마시며 대화만", "전환점: 접대시설 확충 시작", "현재: TV로 스포츠관람, 다트/당구, 와이파이로 스마트폰/인터넷", "결론: 술 안마셔도 다양한 활동 즐길수있어 만족"],
        script: [
          { en: "There have been some changes in what people do at bars or pubs in Korea.", ko: "한국 술집에서 사람들이 하는 활동에 변화가 좀 있었어요." },
          { en: "In the past, bars just had basic facilities like tables and chairs, and they weren't that big, so people mainly just went there to drink and chat.", ko: "예전엔 술집이 그냥 테이블이랑 의자 정도의 기본 시설만 있었고, 그렇게 크지도 않아서 사람들이 주로 술 마시면서 대화하러 가는 정도였어요." },
          { en: "However, bars started expanding their facilities to entertain customers more.", ko: "그런데 술집들이 손님들을 즐겁게 해주려고 시설을 확장하기 시작했어요." },
          { en: "Now, you can see a lot of people watching sports on TV screens at bars, playing darts or pool, or even using their smartphones and surfing the internet with free Wi-Fi.", ko: "요즘은 술집에서 TV로 스포츠 보는 사람들도 많고, 다트나 당구를 즐기기도 하고, 무료 와이파이로 스마트폰 하면서 인터넷 서핑도 해요." },
          { en: "I'm happy about these changes, since now we can enjoy all kinds of activities at bars even if we don't drink.", ko: "이런 변화가 마음에 들어요, 이제는 술을 안 마셔도 술집에서 다양한 활동을 즐길 수 있으니까요." }
        ],
        pronunciation: [
          { en: "There have been some changes in what people do at bars or pubs in Korea.", ko: "데어 해브빈 썸 체인지즈인 왓 피플 두 앳 바스오어 펍스 인코리아" },
          { en: "In the past, bars just had basic facilities like tables and chairs, and they weren't that big,", ko: "인더패스트, 바스 저스트 해드 베이직 퍼실리티즈 라익 테이블즈앤 체어즈, 앤 데이 워런트 댓빅" },
          { en: "so people mainly just went there to drink and chat.", ko: "소 피플 메인리 저스트 웬트데어 투드링크 앤 챗" },
          { en: "However, bars started expanding their facilities to entertain customers more.", ko: "하우에버, 바스 스타티드 익스팬딩 데어 퍼실리티즈 투 엔터테인 커스터머즈 모어" },
          { en: "Now, you can see a lot of people watching sports on TV screens at bars, playing darts or pool,", ko: "나우, 유캔씨 어랏어브 피플 워칭 스포츠 온 티비 스크린즈 앳바스, 플레잉 다츠오어 풀" },
          { en: "or even using their smartphones and surfing the internet with free Wi-Fi.", ko: "오어 이븐 유징데어 스마트폰즈 앤 서핑디 인터넷 위드 프리 와이파이" },
          { en: "I'm happy about these changes, since now we can enjoy all kinds of activities at bars even if we don't drink.", ko: "아임 해피 어바웃디즈 체인지즈, 신스나우 위캔 인조이 올카인즈어브 액티비티즈 앳바스 이븐이프위 돈트 드링크" }
        ],
        warnings: [
          { word: "entertain", guide: "엔터테인" },
          { word: "customers", guide: "커스터머즈" },
          { word: "expanding", guide: "익스팬딩" },
          { word: "facilities", guide: "퍼실리티즈" }
        ]
      },
      {
        id: 126,
        question: "The police sometimes have to raid bars for some reason. Tell me about a news story you saw or heard that involved both the police and a bar.",
        translation: "경찰이 가끔 어떤 이유로 술집을 단속하기도 하죠. 경찰과 술집이 관련된, 보거나 들었던 뉴스 얘기를 해 주세요.",
        type: "경찰 관련 술집 뉴스",
        structure: ["소개: 작년 술집관련 뉴스 기억남", "뉴스내용: 술집안 흡연으로 다툼→신고→경찰출동→흡연자에 딱지", "사회현상: 술집내 흡연 흔함, 간접흡연+공기오염으로 심각한 문제", "결론: 정부가 금지했지만 법 강화 필요"],
        script: [
          { en: "I remember a news story about a bar that I read last year.", ko: "작년에 읽었던 술집 관련 뉴스 기사가 하나 기억나요." },
          { en: "According to the news, some people were smoking inside a bar, and the people around them got irritated, and it eventually turned into a big fight.", ko: "뉴스에 따르면, 술집 안에서 담배 피우던 사람들이 있었고, 주변 사람들이 짜증이 나서 결국 큰 싸움으로 번졌대요." },
          { en: "Someone called the police, and some officers showed up right away, sorted out the situation, and gave the smokers a ticket.", ko: "누군가 경찰에 신고했고, 경찰관들이 바로 출동해서 상황을 정리하고 흡연자들한테 딱지를 끊었대요." },
          { en: "Not just those people — a lot of others in Korea have actually smoked inside bars or pubs too, and it's become a serious issue because it causes secondhand smoke and air pollution in those places.", ko: "그 사람들뿐 아니라 한국에서 실제로 술집 안에서 담배 피우는 사람들이 많은데, 그게 간접흡연이랑 공기 오염을 일으켜서 심각한 문제가 되고 있어요." },
          { en: "To handle this, the government has banned smoking inside bars and pubs, but I think we need stronger laws on this.", ko: "이 문제를 해결하려고 정부가 술집 내 흡연을 금지했는데, 저는 관련 법을 더 강화할 필요가 있다고 생각해요." }
        ],
        pronunciation: [
          { en: "I remember a news story about a bar that I read last year.", ko: "아이 리멤버러 뉴스 스토리 어바웃어 바 댓아이 리드 라스트이어" },
          { en: "According to the news, some people were smoking inside a bar, and the people around them got irritated, and it eventually turned into a big fight.", ko: "어코딩투더 뉴스, 썸피플 워 스모킹 인사이더바, 앤더 피플 어라운뎀 갓 이리테이티드, 앤잇 이벤추얼리 턴드인투어 빅파이트" },
          { en: "Someone called the police, and some officers showed up right away, sorted out the situation, and gave the smokers a ticket.", ko: "썸원 콜드더 폴리스, 앤 썸 오피서즈 쇼우드업 라잇어웨이, 소티드아웃더 시추에이션, 앤 게이브더 스모커즈어 티킷" },
          { en: "Not just those people — a lot of others in Korea have actually smoked inside bars or pubs too,", ko: "낫저스트 도우즈피플, 어랏어브 아더즈인 코리아 해브 액츄얼리 스목트 인사이드 바스오어 펍스투" },
          { en: "and it's become a serious issue because it causes secondhand smoke and air pollution in those places.", ko: "앤 잇츠 비컴어 시리어스 이슈 비커즈잇 코지즈 세컨핸드 스모크 앤 에어폴루션 인도우즈 플레이시즈" },
          { en: "To handle this, the government has banned smoking inside bars and pubs, but I think we need stronger laws on this.", ko: "투 핸들디스, 더거번먼트 해즈 밴드 스모킹 인사이드 바스앤펍스, 벗아이씽크 위니드 스트롱거 로즈온디스" }
        ],
        warnings: [
          { word: "irritated", guide: "이리테이티드" },
          { word: "officers", guide: "오피서즈" },
          { word: "serious", guide: "시리어스" },
          { word: "secondhand", guide: "세컨핸드" }
        ]
      }
    ]
  },
  {
    id: 42, emoji: "☕", nameKo: "카페",
    category: "2Combo",
    questions: [
      {
        id: 127,
        question: "As far as you remember, how have cafes in Korea changed over the years, in terms of facilities, size, and atmosphere?",
        translation: "기억하시는 한, 한국의 카페가 시설, 규모, 분위기 면에서 몇 년간 어떻게 변했나요?",
        type: "카페 변화",
        structure: ["도입: 카페에 변화 있었음", "과거: 젊을때 첫 방문, 테이블+의자만있는 기본시설", "과거(크기): 규모 작아서 사람 많이 못들어감", "과거(분위기): 차분+여유로운 느낌", "현재: 주차장/무료와이파이/회의실/키즈존 등 편리한 시설", "현재(크기): 훨씬 넓어져서 다양한 사람들 방문", "현재(분위기): 활기차고 쾌활함"],
        script: [
          { en: "As far as I remember, there have been some changes in cafes in Korea.", ko: "제가 기억하는 바로는, 한국 카페에 변화가 좀 있었어요." },
          { en: "When I first visited a café in my youth, it just had basic facilities for visitors, like tables and chairs.", ko: "제가 젊을 때 처음 카페에 갔을 땐, 그냥 테이블이랑 의자 정도의 기본 시설만 있었어요." },
          { en: "Since the cafes weren't that big back then, they couldn't hold many people, so naturally, the atmosphere was calm and relaxing.", ko: "그때는 카페 규모가 그렇게 크지 않아서 사람을 많이 수용할 수 없었고, 그래서 자연스럽게 분위기도 차분하고 여유로웠어요." },
          { en: "Now, cafes have more convenient and fun facilities, like parking lots, free Wi-Fi zones, meeting rooms, and kids' zones.", ko: "지금은 주차장, 무료 와이파이 존, 회의실, 키즈존 같은 더 편리하고 재미있는 시설들이 있어요." },
          { en: "Cafes have also become a lot more spacious, so all kinds of people visit them, and now they have a lively, cheerful atmosphere.", ko: "카페도 훨씬 넓어져서 다양한 사람들이 찾아오고, 지금은 활기차고 쾌활한 분위기예요." }
        ],
        pronunciation: [
          { en: "As far as I remember, there have been some changes in cafes in Korea.", ko: "애즈파애즈 아이리멤버, 데어 해브빈 썸 체인지즈인 카페이즈 인코리아" },
          { en: "When I first visited a café in my youth, it just had basic facilities for visitors, like tables and chairs.", ko: "웨나이 퍼스트 비지티더 카페 인마이 유쓰, 잇 저스트 해드 베이직 퍼실리티즈 퍼 비지터즈, 라익 테이블즈앤체어즈" },
          { en: "Since the cafes weren't that big back then, they couldn't hold many people,", ko: "신스더 카페이즈 워런트 댓빅 백덴, 데이 쿠든트 홀드 매니피플" },
          { en: "so naturally, the atmosphere was calm and relaxing.", ko: "소 내추럴리, 디 앳모스피어 워즈 캄앤 릴랙싱" },
          { en: "Now, cafes have more convenient and fun facilities, like parking lots, free Wi-Fi zones, meeting rooms, and kids' zones.", ko: "나우, 카페이즈 해브모어 컨비니언트 앤 펀 퍼실리티즈, 라익 파킹랏츠, 프리 와이파이 존즈, 미팅룸즈, 앤 키즈존즈" },
          { en: "Cafes have also become a lot more spacious, so all kinds of people visit them, and now they have a lively, cheerful atmosphere.", ko: "카페이즈 해브 얼소 비컴 어랏모어 스페이셔스, 소 올카인즈어브 피플 비짓뎀, 앤나우 데이 해버 라이블리, 치어풀 앳모스피어" }
        ],
        warnings: [
          { word: "atmosphere", guide: "앳모스피어" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "convenient", guide: "컨비니언트" },
          { word: "lively", guide: "라이블리" }
        ]
      },
      {
        id: 128,
        question: "These days, many cafes or coffee houses play many roles. They may serve as mobile offices, community gatherings, or artistic venues. What kinds of roles are coffee shops playing in your community?",
        translation: "요즘 카페나 커피숍은 다양한 역할을 하죠. 이동식 사무실, 커뮤니티 모임 장소, 예술 공간 역할도 해요. 당신 동네에서 커피숍은 어떤 역할을 하고 있나요?",
        type: "카페 사회적 역할",
        structure: ["이슈: 요즘 카페가 다양한 역할함", "현상: 학생들에겐 도서관같음(공부), 낮에는 각종모임+회의실, 어떤곳은 식당역할, 어린이카페/애완동물카페처럼 특정테마도", "예시(객관): 70%가 다른 용도로 여러 카페 방문", "결론: 사람들 필요에 맞게 변해가는 게 좋음"],
        script: [
          { en: "Yes, cafes and coffee shops today play a lot of different roles in our community.", ko: "네, 요즘 카페나 커피숍은 우리 사회에서 다양한 역할을 하고 있어요." },
          { en: "For some students, cafes are like libraries — they bring books and laptops and study there for tests or assignments.", ko: "어떤 학생들에겐 카페가 도서관 같아요 — 책이랑 노트북을 들고 와서 시험이나 과제를 준비하거든요." },
          { en: "If you go during the day, you'll see all kinds of social or community gatherings, and cafes even have spaces like meeting rooms for those.", ko: "낮에 가보면 각종 모임이나 커뮤니티 모임을 볼 수 있고, 카페에는 그런 모임을 위한 회의실 같은 공간도 있어요." },
          { en: "Some coffee shops serve as restaurants since they sell different kinds of food and snacks, and some others have specific themes, like kids' cafes or pet cafes.", ko: "어떤 커피숍은 다양한 음식이랑 간식을 팔아서 식당 역할도 하고, 어떤 곳들은 어린이 카페나 애완동물 카페처럼 특정한 테마를 가지고 있기도 해요." },
          { en: "According to a survey, about 70% of people who visit cafes in Korea say they visit different cafes for different purposes.", ko: "한 설문조사에 따르면, 한국에서 카페를 찾는 사람들 중 약 70%가 목적에 따라 다른 카페를 찾는다고 답했어요." },
          { en: "I like this about cafes, since these places are becoming more tailored to what people actually need.", ko: "저는 카페의 이런 점이 좋아요, 사람들이 필요로 하는 것에 맞게 카페들이 변해가고 있으니까요." }
        ],
        pronunciation: [
          { en: "Yes, cafes and coffee shops today play a lot of different roles in our community.", ko: "예스, 카페이즈 앤 커피샵스 투데이 플레이 어랏어브 디퍼런트 롤즈 인아워 커뮤니티" },
          { en: "For some students, cafes are like libraries — they bring books and laptops and study there for tests or assignments.", ko: "포섬 스튜던츠, 카페이즈알 라익 라이브러리즈, 데이 브링 북스앤 랩탑스 앤 스터디데어 퍼 테스츠오어 어사인먼츠" },
          { en: "If you go during the day, you'll see all kinds of social or community gatherings,", ko: "이퓨고 듀링더데이, 유일씨 올카인즈어브 소셜오어 커뮤니티 개더링즈" },
          { en: "and cafes even have spaces like meeting rooms for those.", ko: "앤 카페이즈 이븐해브 스페이시즈 라익 미팅룸즈 퍼도우즈" },
          { en: "Some coffee shops serve as restaurants since they sell different kinds of food and snacks,", ko: "썸 커피샵스 서브애즈 레스토랑츠 신스데이 셀 디퍼런트 카인즈어브 푸드앤 스낵스" },
          { en: "and some others have specific themes, like kids' cafes or pet cafes.", ko: "앤 썸 아더즈 해브 스퍼시픽 씸즈, 라익 키즈 카페이즈 오어 펫카페이즈" },
          { en: "According to a survey, about 70% of people who visit cafes in Korea say they visit different cafes for different purposes.", ko: "어코딩투어 서베이, 어바웃 세븐티퍼센트어브 피플 후 비짓 카페이즈인 코리아 세이 데이 비짓 디퍼런트 카페이즈 퍼 디퍼런트 퍼포시즈" },
          { en: "I like this about cafes, since these places are becoming more tailored to what people actually need.", ko: "아이라익 디스 어바웃 카페이즈, 신스디즈 플레이시즈알 비커밍모어 테일러드투 왓 피플 액츄얼리 니드" }
        ],
        warnings: [
          { word: "assignments", guide: "어사인먼츠" },
          { word: "gatherings", guide: "개더링즈" },
          { word: "specific", guide: "스퍼시픽" },
          { word: "tailored", guide: "테일러드" }
        ]
      }
    ]
  },
  {
    id: 43, emoji: "🎧", nameKo: "MP3 플레이어 구매",
    category: "롤플레이",
    questions: [
      {
        id: 129,
        question: "You want to buy a new MP3 player, and you have a friend who knows MP3 players very well. Call your friend and ask three or four questions to get all the information about buying an MP3 player.",
        translation: "새 MP3 플레이어를 사고 싶은데, MP3 플레이어를 잘 아는 친구가 있어요. 친구에게 전화해서 MP3 플레이어 구매에 필요한 정보를 얻기 위한 질문을 3~4개 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사: 안부 묻기", "목적: 새 MP3플레이어 사려는데 친구가 잘 안다고 들음", "질문1: 요즘 인기있는 종류+추천요청", "질문2: 새기능(블루투스 여부), 가벼울수록 좋음", "질문3: 가격대($200 예산)+할인처", "마무리: 정보 감사"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — I'm good.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 응, 좋아." },
          { en: "Well, I want to buy a new MP3 player because mine is too old, and I heard you know a lot about MP3 players.", ko: "음, 내 게 너무 오래돼서 새 MP3 플레이어를 사고 싶은데, 네가 MP3 플레이어에 대해 잘 안다고 들었어." },
          { en: "So, what kinds of MP3 players are popular these days? Can you give me any recommendations? — Oh good.", ko: "그래서 말인데, 요즘 어떤 MP3 플레이어가 인기 있어? 추천 좀 해줄래? — 오, 좋아." },
          { en: "What new functions do they have? I sometimes use Bluetooth headphones, so do you think they have Bluetooth? The lighter, the better. — Oh, that's great.", ko: "새로운 기능은 뭐가 있어? 나 가끔 블루투스 헤드폰 쓰는데, 블루투스 기능 있을까? 가벼울수록 좋아. — 오, 잘됐다." },
          { en: "What's the price range? I have a budget of $200 — where can I get a discount? — Awesome.", ko: "가격대는 어떻게 돼? 예산이 200달러 정도인데, 어디서 할인받을 수 있을까? — 신난다." },
          { en: "Thanks for the info. Bye!", ko: "정보 고마워, 안녕!" }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "Well, I want to buy a new MP3 player because mine is too old, and I heard you know a lot about MP3 players.", ko: "웰, 아이원투바이어 뉴 엠피쓰리 플레이어 비커즈 마인이즈 투올드, 앤아이허드 유노어랏 어바웃 엠피쓰리 플레이어즈" },
          { en: "So, what kinds of MP3 players are popular these days? Can you give me any recommendations?", ko: "소, 왓카인즈어브 엠피쓰리 플레이어즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What new functions do they have? I sometimes use Bluetooth headphones, so do you think they have Bluetooth?", ko: "왓 뉴 펑션즈두데이해브? 아이 썸타임즈 유즈 블루투스 헤드폰즈, 소두유씽크데이해브 블루투스?" },
          { en: "What's the price range? I have a budget of $200 — where can I get a discount?", ko: "왓츠더 프라이스 레인지? 아이해버 버짓어브 투헌드레드달러즈, 웨어캔아이 게러 디스카운트?" },
          { en: "Thanks for the info. Bye!", ko: "땡스퍼디 인포. 바이!" }
        ],
        warnings: [
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "Bluetooth", guide: "블루투스" },
          { word: "budget", guide: "버짓" },
          { word: "discount", guide: "디스카운트" }
        ]
      },
      {
        id: 130,
        question: "You borrowed your friend's MP3 player, but you broke it. Call your friend and explain how it broke and its current condition, then offer two or three options to get your friend a working MP3 player.",
        translation: "친구의 MP3 플레이어를 빌렸는데 망가뜨렸어요. 친구에게 전화해서 어떻게 망가졌는지, 지금 상태는 어떤지 설명하고, 제대로 작동하는 MP3 플레이어를 구해줄 방법을 두세 가지 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사: 안부 묻기", "목적: 지난주 빌린 MP3플레이어 때문에 전화함", "상황설명: 미안하지만 망가뜨림 - 손씻다 물에 빠뜨림, 저절로 켜졌다꺼짐", "대안1: 서비스센터서 고치기(일주일 소요)", "대안2: 새것 사주기(원하는 모델 물어보기)", "마무리: 이해해줘서 고마움"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — What's up.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 무슨 일이야." },
          { en: "I'm calling about your MP3 player that I borrowed last week.", ko: "지난주에 빌린 네 MP3 플레이어 때문에 전화했어." },
          { en: "I'm sorry, but I broke it — the thing is, I dropped it in the water while I was washing my hands. At first it worked fine, but now it's not working. It turns on and off by itself.", ko: "미안한데, 내가 그거 망가뜨렸어 — 사실은, 손 씻다가 물에 빠뜨렸거든. 처음엔 잘 됐는데 지금은 안 돼. 저절로 켜졌다 꺼졌다 해." },
          { en: "So, I wonder if I could get it fixed at the service center. By when do you need it? I think it'll take about a week. — That's too bad.", ko: "그래서 말인데, 서비스 센터에서 고칠 수 있을까? 언제까지 필요해? 고치는 데 일주일 정도 걸릴 것 같아. — 아, 그거 안됐네." },
          { en: "Or, can I just buy you a new one? I'll get you a better one — what model do you want? M2? Okay, great.", ko: "아니면 그냥 새 걸로 사줄까? 더 좋은 걸로 사줄게 — 어떤 모델 원해? M2? 좋아, 좋아." },
          { en: "Okay, thank you for understanding. Bye.", ko: "알았어, 이해해줘서 고마워. 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "I'm calling about your MP3 player that I borrowed last week.", ko: "아임 콜링어바웃 유어 엠피쓰리 플레이어 댓아이 보로우드 라스트윅" },
          { en: "I'm sorry, but I broke it — the thing is, I dropped it in the water while I was washing my hands.", ko: "아임 쏘리, 벗아이 브로우킷, 더씽이즈, 아이 드랍트잇 인더워러 와일아이워즈 워싱마이핸즈" },
          { en: "At first it worked fine, but now it's not working. It turns on and off by itself.", ko: "앳퍼스트 잇 웍트파인, 벗나우 잇츠낫 워킹. 잇턴즈 온앤오프 바이잇셀프" },
          { en: "So, I wonder if I could get it fixed at the service center. By when do you need it?", ko: "소, 아이원더이프 아이쿠드 게릿 픽스트앳더 서비스센터. 바이웬두유니딧?" },
          { en: "Or, can I just buy you a new one? I'll get you a better one — what model do you want?", ko: "오어, 캔아이 저스트 바이유어 뉴원? 아일 겟츄어 베러원, 왓모델두유원트?" },
          { en: "Okay, thank you for understanding. Bye.", ko: "오케이, 땡큐퍼 언더스탠딩. 바이" }
        ],
        warnings: [
          { word: "borrowed", guide: "보로우드" },
          { word: "service center", guide: "서비스센터" },
          { word: "understanding", guide: "언더스탠딩" },
          { word: "condition", guide: "컨디션" }
        ]
      },
      {
        id: 131,
        question: "Can you tell me about a situation where you had some kind of equipment that broke or didn't work properly? What happened? How did you resolve the problem? Give me the background to the result in detail.",
        translation: "장비가 망가지거나 제대로 작동하지 않았던 상황에 대해 말해 주세요. 무슨 일이 있었고, 어떻게 해결했나요? 배경부터 결과까지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년 전 경험", "새 스마트폰 온라인 주문", "처음엔 기대감", "받아보니 저절로 켜졌다꺼짐", "중고품처럼 모서리에 긁힌자국까지", "교환 시도했지만 쉽지않음", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "그때 스마트폰이 새로 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "처음엔 다 괜찮아 보였어요. 새 스마트폰 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "그런데 배송받아보니 문제가 있었어요 — 저절로 켜졌다 꺼졌다 하는 거예요." },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 모서리에 긁힌 자국도 있었고요." },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "그래서 교환해보려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to get a refund and return it. It was such a disappointing experience.", ko: "결국 환불받고 반품해야 했어요. 정말 실망스러운 경험이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 스마트폰, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟마이 뉴스마트폰" },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 잇턴드 온앤오프 바이잇셀프" },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 잇해드 썸 스크래치즈 온더 코너" },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "소아이 트라이투 게런 익스체인지, 벗잇 워즌트 이지" },
          { en: "As a result, I had to get a refund and return it.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴잇" },
          { en: "It was such a disappointing experience.", ko: "잇워즈 서치어 디서포인팅 익스피어리언스" }
        ],
        warnings: [
          { word: "delivered", guide: "딜리버드" },
          { word: "scratches", guide: "스크래치즈" },
          { word: "exchange", guide: "익스체인지" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 44, emoji: "🪑", nameKo: "가구 구매",
    category: "롤플레이",
    questions: [
      {
        id: 132,
        question: "You want to buy a piece of furniture for your room. Visit the furniture store and ask three or four questions about the furniture you'd like to buy.",
        translation: "방에 놓을 가구를 사고 싶어요. 가구점을 방문해서 사고 싶은 가구에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 새 책상 필요", "질문1: 요즘 인기 책상+추천", "질문2: 새기능(높이조절 여부)", "질문3: 가격($200예산)+할인", "마무리"],
        script: [
          { en: "Hi there, is this the furniture shop? — Oh good.", ko: "안녕하세요, 가구점 맞나요? — 오, 좋아요." },
          { en: "Well, my desk is too old, so I want a new one. I have some questions about it.", ko: "제 책상이 너무 오래돼서 새로 하나 사려고요. 몇 가지 여쭤볼게요." },
          { en: "What kinds of desks are popular these days? Can you give me any recommendations? — Oh, good.", ko: "요즘 어떤 책상이 인기 있나요? 추천해주실 수 있어요? — 오, 좋네요." },
          { en: "What new features do they have? I need a height-adjustable function — do you think they have that? The lighter, the better. — Oh, that's great.", ko: "어떤 새로운 기능이 있나요? 저는 높이 조절 기능이 필요한데, 그런 게 있을까요? 가벼울수록 좋고요. — 오, 좋네요." },
          { en: "What's the price? I have a budget of $200 — can I get a discount? — Awesome, that's the answer I wanted.", ko: "가격이 어떻게 되나요? 예산이 200달러인데 할인받을 수 있을까요? — 좋네요, 원하던 답이에요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there, is this the furniture shop?", ko: "하이데어, 이즈디스더 퍼니처샵?" },
          { en: "Well, my desk is too old, so I want a new one. I have some questions about it.", ko: "웰, 마이데스크이즈 투올드, 소아이원어 뉴원. 아이해브 썸 퀘스천즈 어바웃잇" },
          { en: "What kinds of desks are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 데스크스알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What new features do they have? I need a height-adjustable function — do you think they have that?", ko: "왓뉴 피처즈두데이해브? 아이니더 하이트어저스터블 펑션, 두유씽크데이해브댓?" },
          { en: "What's the price? I have a budget of $200 — can I get a discount?", ko: "왓츠더프라이스? 아이해버버짓어브 투헌드레드달러즈, 캔아이게러 디스카운트?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "height-adjustable", guide: "하이트어저스터블" },
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "budget", guide: "버짓" },
          { word: "features", guide: "피처즈" }
        ]
      },
      {
        id: 133,
        question: "You've been delivered the furniture you bought, but you found out there's something wrong with it. Call the store and explain the situation. Then discuss the options.",
        translation: "구매한 가구를 배송받았는데 문제가 있다는 걸 알게 됐어요. 가게에 전화해서 상황을 설명하고 가능한 선택지를 논의하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 지난주 산 책상 때문에 전화", "상황설명: 다리에 긁힌자국+중고품 같음", "대안1: 다른걸로 교환(마지막 재고라 안됨)", "대안2: 환불받기+반품방법 문의", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about my desk that I bought last week at your shop.", ko: "지난주에 그 가게에서 산 책상 때문에 전화드렸어요." },
          { en: "I think there's something wrong with the desk — it has some scratches on the leg and looks like a used one.", ko: "책상에 문제가 있는 것 같아요 — 다리에 긁힌 자국이 있고 중고품처럼 보여요." },
          { en: "So, I wonder if I could exchange it for another one. It's the last one? That's too bad.", ko: "그래서 말인데, 다른 걸로 교환할 수 있을까요? 마지막 재고라고요? 아쉽네요." },
          { en: "Or, can I get a refund? Oh, that's great. How can I return this desk? — Okay, please check and call me back.", ko: "아니면 환불받을 수 있을까요? 오, 잘됐네요. 이 책상을 어떻게 반품하면 될까요? — 네, 확인하고 다시 전화드릴게요." },
          { en: "Okay, thank you.", ko: "네, 감사합니다." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about my desk that I bought last week at your shop.", ko: "아임 콜링어바웃 마이데스크 댓아이 보웃 라스트윅 앳유어샵" },
          { en: "I think there's something wrong with the desk — it has some scratches on the leg and looks like a used one.", ko: "아이씽크 데어즈 썸씽롱 위더데스크, 잇해즈 썸 스크래치즈 온더렉 앤 룩스 라이커 유즈드원" },
          { en: "So, I wonder if I could exchange it for another one.", ko: "소, 아이원더이프 아이쿠드 익스체인지잇 퍼 어나더원" },
          { en: "Or, can I get a refund? How can I return this desk?", ko: "오어, 캔아이 게러 리펀드? 하우캔아이 리턴디스 데스크?" },
          { en: "Okay, thank you.", ko: "오케이, 땡큐" }
        ],
        warnings: [
          { word: "scratches", guide: "스크래치즈" },
          { word: "exchange", guide: "익스체인지" },
          { word: "refund", guide: "리펀드" },
          { word: "return", guide: "리턴" }
        ]
      },
      {
        id: 134,
        question: "Problems arise related to furniture in your home. Sometimes furniture breaks or fabrics get stains or ripped. Tell me about a time you had furniture with a problem. What happened? How did you fix it?",
        translation: "가끔 가구에 문제가 생기기도 하죠. 가구가 망가지거나 천이 얼룩지거나 찢어지기도 해요. 가구에 문제가 있었던 경험을 말해 주세요. 무슨 일이 있었고 어떻게 해결했나요?",
        type: "문제 해결 경험",
        structure: ["2년 전 경험", "새 책상 온라인 주문", "처음엔 기대감", "배송받아보니 나무판에 얼룩", "다리 두개 긁힌자국까지", "교환시도 → 같은모델 한달대기해야함", "결국 환불받고 반품"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At that time, I needed a new desk, so I ordered one online.", ko: "그때 새 책상이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "처음엔 다 괜찮아 보였어요. 새 책상 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무판에 얼룩이 있었어요." },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 다리 두 개에도 긁힌 자국이 있었고요." },
          { en: "So I tried to get an exchange, but they said I'd have to wait another month for the same model.", ko: "그래서 교환하려고 했는데, 같은 모델은 한 달을 더 기다려야 한다더라고요." },
          { en: "As a result, I had to get a refund and return the table. It was such a disappointing experience.", ko: "결국 환불받고 책상을 반품했어요. 정말 실망스러운 경험이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At that time, I needed a new desk, so I ordered one online.", ko: "앳댓타임, 아이 니디더 뉴 데스크, 소 아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "앳퍼스트, 에브리씽 씸드 파인. 아이워즈 익사이티드 투겟더 뉴 데스크" },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "하우에버, 웬잇워즈 딜리버드, 아이 파운드 썸씽 롱 위딧, 더 우든 보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "투 메익 매터즈 워스, 잇 룩트 라이커 유즈드원, 투어브더 렉즈 해드 스크래치즈투" },
          { en: "So I tried to get an exchange, but they said I'd have to wait another month for the same model.", ko: "소 아이 트라이투 게런 익스체인지, 벗 데이 세드 아이드 해브투 웨이트 어나더 먼쓰 퍼더 세임 모델" },
          { en: "As a result, I had to get a refund and return the table.", ko: "애저 리절트, 아이 해드투 게러 리펀드 앤 리턴더 테이블" },
          { en: "It was such a disappointing experience.", ko: "잇 워즈 서치어 디서포인팅 익스피어리언스" }
        ],
        warnings: [
          { word: "stains", guide: "스테인즈" },
          { word: "scratches", guide: "스크래치즈" },
          { word: "exchange", guide: "익스체인지" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 45, emoji: "📱", nameKo: "휴대폰 구매",
    category: "롤플레이",
    questions: [
      {
        id: 135,
        question: "You want to buy a new cell phone. Call the store and ask three or four questions to get information about new cellphones you're interested in.",
        translation: "새 휴대폰을 사고 싶어요. 가게에 전화해서 관심 있는 새 휴대폰에 대한 정보를 얻기 위해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 스마트폰 오래돼서 새로 사려함", "질문1: 인기모델+추천", "질문2: 블루투스기능여부, 가벼울수록좋음", "질문3: 가격($200)+할인", "마무리"],
        script: [
          { en: "Hi there, is this the cell phone shop? — Oh good.", ko: "안녕하세요, 휴대폰 가게 맞나요? — 오, 좋아요." },
          { en: "Well, I want to buy a smartphone because mine is too old. I have some questions about it.", ko: "제 폰이 너무 오래돼서 스마트폰을 새로 사려고요. 몇 가지 여쭤볼게요." },
          { en: "What kinds of smartphones are popular these days? Can you give me any recommendations? — Oh, good.", ko: "요즘 어떤 스마트폰이 인기 있나요? 추천해주실 수 있어요? — 오, 좋네요." },
          { en: "What new functions do they have? I sometimes use Bluetooth headphones — do you think they have Bluetooth? The lighter, the better. — Oh, that's great.", ko: "새로운 기능은 뭐가 있나요? 가끔 블루투스 헤드폰을 쓰는데, 블루투스 기능이 있을까요? 가벼울수록 좋고요. — 오, 좋네요." },
          { en: "What's the price? I have a budget of $200 — can I get a discount? — Awesome, that's the answer I wanted.", ko: "가격이 어떻게 되나요? 예산이 200달러인데 할인받을 수 있을까요? — 좋네요, 원하던 답이에요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there, is this the cell phone shop?", ko: "하이데어, 이즈디스더 셀폰샵?" },
          { en: "Well, I want to buy a smartphone because mine is too old. I have some questions about it.", ko: "웰, 아이원투바이어 스마트폰 비커즈 마인이즈투올드. 아이해브 썸퀘스천즈 어바웃잇" },
          { en: "What kinds of smartphones are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 스마트폰즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What new functions do they have? I sometimes use Bluetooth headphones — do you think they have Bluetooth?", ko: "왓뉴 펑션즈두데이해브? 아이썸타임즈 유즈 블루투스 헤드폰즈, 두유씽크데이해브 블루투스?" },
          { en: "What's the price? I have a budget of $200 — can I get a discount?", ko: "왓츠더프라이스? 아이해버버짓어브 투헌드레드달러즈, 캔아이게러 디스카운트?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "Bluetooth", guide: "블루투스" },
          { word: "budget", guide: "버짓" },
          { word: "discount", guide: "디스카운트" }
        ]
      },
      {
        id: 136,
        question: "You bought a new cell phone, but you've found out that it's not working. Call the after-service center, explain the situation, and discuss what you can do.",
        translation: "새 휴대폰을 샀는데 작동이 안 되는 걸 알게 됐어요. AS센터에 전화해서 상황을 설명하고 어떻게 할 수 있는지 논의하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사: AS센터 확인", "목적: 지난주 산 스마트폰 때문에 전화", "상황설명: 처음엔 잘됐는데 지금은 저절로 켜졌다꺼짐", "대안1: 센터서 고치기(이번주말까지 필요)", "대안2: 환불받기+반품방법", "마무리: 연락기다림"],
        script: [
          { en: "Hi there, is this the cell phone service center? — Okay.", ko: "안녕하세요, 휴대폰 서비스 센터 맞나요? — 네." },
          { en: "I'm calling about the smartphone I bought last week, your company's product.", ko: "지난주에 그 회사 제품으로 산 스마트폰 때문에 전화드렸어요." },
          { en: "I think there's something wrong with it — at first it worked well, but now it's not working. It turns on and off by itself.", ko: "뭔가 문제가 있는 것 같아요 — 처음엔 잘 됐는데 지금은 안 돼요. 저절로 켜졌다 꺼졌다 해요." },
          { en: "So, I wonder if I could get it fixed at your center. I need it by this weekend. — Oh, that's too bad.", ko: "그래서 말인데, 그쪽 센터에서 고칠 수 있을까요? 이번 주말까지 필요한데요. — 아, 아쉽네요." },
          { en: "Or, can I get a refund? Oh, that's great. How can I return this product? — Okay, please check and call me back.", ko: "아니면 환불받을 수 있을까요? 오, 잘됐네요. 이 제품을 어떻게 반품하면 될까요? — 네, 확인하고 다시 전화드릴게요." },
          { en: "Okay, thank you for the information. I'll wait for your call.", ko: "네, 정보 감사합니다. 연락 기다릴게요." }
        ],
        pronunciation: [
          { en: "Hi there, is this the cell phone service center?", ko: "하이데어, 이즈디스더 셀폰 서비스센터?" },
          { en: "I'm calling about the smartphone I bought last week, your company's product.", ko: "아임 콜링어바웃더 스마트폰 아이보웃 라스트윅, 유어 컴퍼니스 프로덕트" },
          { en: "I think there's something wrong with it — at first it worked well, but now it's not working.", ko: "아이씽크 데어즈 썸씽롱 위딧, 앳퍼스트 잇웍트웰, 벗나우 잇츠낫 워킹" },
          { en: "It turns on and off by itself.", ko: "잇턴즈 온앤오프 바이잇셀프" },
          { en: "So, I wonder if I could get it fixed at your center. I need it by this weekend.", ko: "소, 아이원더이프 아이쿠드 게릿 픽스트앳유어센터. 아이니딧 바이디스위켄드" },
          { en: "Or, can I get a refund? How can I return this product?", ko: "오어, 캔아이 게러 리펀드? 하우캔아이 리턴디스 프로덕트?" },
          { en: "Okay, thank you for the information. I'll wait for your call.", ko: "오케이, 땡큐퍼디 인포메이션. 아일 웨잇퍼 유어콜" }
        ],
        warnings: [
          { word: "refund", guide: "리펀드" },
          { word: "product", guide: "프로덕트" },
          { word: "service center", guide: "서비스센터" },
          { word: "itself", guide: "잇셀프" }
        ]
      },
      {
        id: 137,
        question: "That's the end of the situation. Have you ever been unhappy with something you bought or some service you received? What was the problem? How did you handle it? Tell me everything in detail.",
        translation: "상황극은 여기까지예요. 구매한 물건이나 받은 서비스가 마음에 안 들었던 적이 있나요? 문제가 뭐였고 어떻게 해결했나요? 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년 전 경험", "새 스마트폰 온라인 주문", "처음엔 기대감", "받아보니 저절로 켜졌다꺼짐", "중고품처럼 모서리에 긁힌자국까지", "교환 시도했지만 쉽지않음", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "그때 스마트폰이 새로 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "처음엔 다 괜찮아 보였어요. 새 스마트폰 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "그런데 배송받아보니 문제가 있었어요 — 저절로 켜졌다 꺼졌다 하는 거예요." },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 모서리에 긁힌 자국도 있었고요." },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "그래서 교환해보려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to get a refund and return it. It was such a disappointing experience.", ko: "결국 환불받고 반품해야 했어요. 정말 실망스러운 경험이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 스마트폰, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟마이 뉴스마트폰" },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 잇턴드 온앤오프 바이잇셀프" },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 잇해드 썸 스크래치즈 온더 코너" },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "소아이 트라이투 게런 익스체인지, 벗잇 워즌트 이지" },
          { en: "As a result, I had to get a refund and return it.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴잇" },
          { en: "It was such a disappointing experience.", ko: "잇워즈 서치어 디서포인팅 익스피어리언스" }
        ],
        warnings: [
          { word: "delivered", guide: "딜리버드" },
          { word: "scratches", guide: "스크래치즈" },
          { word: "exchange", guide: "익스체인지" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 46, emoji: "👕", nameKo: "옷 구매",
    category: "롤플레이",
    questions: [
      {
        id: 138,
        question: "You are at a clothing store and need to get some clothes. Ask the clerk three or four questions about the clothes you'd like to buy.",
        translation: "옷가게에 있고 옷을 사야 해요. 점원에게 사고 싶은 옷에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 오래된 티셔츠 대신 새로 사려함", "질문1: 요즘 인기 티셔츠+추천", "질문2: 새기능(방수여부)", "질문3: 가격($200예산)+할인", "마무리"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "Well, I want to buy a T-shirt because mine is too old. I have some questions about it.", ko: "제 티셔츠가 너무 오래돼서 새로 사려고요. 몇 가지 여쭤볼게요." },
          { en: "What kinds of T-shirts are popular these days? Can you give me any recommendations? — Oh, good.", ko: "요즘 어떤 티셔츠가 인기 있나요? 추천해주실 수 있어요? — 오, 좋네요." },
          { en: "What new features do they have? I want something waterproof — do you think they have that? — Oh, that's great.", ko: "어떤 새로운 기능이 있나요? 방수 기능이 있으면 좋겠는데, 그런 게 있을까요? — 오, 좋네요." },
          { en: "What's the price? I have a budget of $200 — can I get a discount? — Awesome, that's the answer I wanted.", ko: "가격이 어떻게 되나요? 예산이 200달러인데 할인받을 수 있을까요? — 좋네요, 원하던 답이에요." },
          { en: "Thank you for the information.", ko: "정보 감사합니다." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "Well, I want to buy a T-shirt because mine is too old. I have some questions about it.", ko: "웰, 아이원투바이어 티셔츠 비커즈 마인이즈투올드. 아이해브 썸퀘스천즈 어바웃잇" },
          { en: "What kinds of T-shirts are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 티셔츠알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What new features do they have? I want something waterproof — do you think they have that?", ko: "왓뉴 피처즈두데이해브? 아이원트 썸씽 워터프루프, 두유씽크데이해브댓?" },
          { en: "What's the price? I have a budget of $200 — can I get a discount?", ko: "왓츠더프라이스? 아이해버버짓어브 투헌드레드달러즈, 캔아이게러 디스카운트?" },
          { en: "Thank you for the information.", ko: "땡큐퍼디 인포메이션" }
        ],
        warnings: [
          { word: "waterproof", guide: "워터프루프" },
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "budget", guide: "버짓" },
          { word: "discount", guide: "디스카운트" }
        ]
      },
      {
        id: 139,
        question: "The clothes you ordered have arrived, but one of the shirts has a problem. Call the clothing store and explain the problem, then give two or three alternatives.",
        translation: "주문한 옷이 도착했는데, 셔츠 하나에 문제가 있어요. 옷가게에 전화해서 문제를 설명하고 두세 가지 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 지난주 산 티셔츠 때문에 전화", "상황설명: 소매에 얼룩+중고품 같음", "대안1: 다른걸로 교환(마지막 재고라 안됨)", "대안2: 환불받기, 오후2시까지 매장방문", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about the T-shirt I bought last week at your shop.", ko: "지난주에 그 가게에서 산 티셔츠 때문에 전화드렸어요." },
          { en: "I think there's something wrong with it — it has some stains on the sleeve and looks like a used one.", ko: "뭔가 문제가 있는 것 같아요 — 소매에 얼룩이 있고 중고품처럼 보여요." },
          { en: "So, I wonder if I could exchange it for another one. It's the last one? That's too bad.", ko: "그래서 말인데, 다른 걸로 교환할 수 있을까요? 마지막 재고라고요? 아쉽네요." },
          { en: "Or, can I get a refund? Oh, that's great. I'll come to your shop by 2 P.M. to return it.", ko: "아니면 환불받을 수 있을까요? 오, 잘됐네요. 오후 2시까지 매장으로 가서 반품할게요." },
          { en: "Okay, thank you, see you soon.", ko: "네, 감사합니다. 곧 뵐게요." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about the T-shirt I bought last week at your shop.", ko: "아임 콜링어바웃더 티셔츠 아이보웃 라스트윅 앳유어샵" },
          { en: "I think there's something wrong with it — it has some stains on the sleeve and looks like a used one.", ko: "아이씽크 데어즈 썸씽롱 위딧, 잇해즈 썸 스테인즈 온더 슬리브 앤 룩스 라이커 유즈드원" },
          { en: "So, I wonder if I could exchange it for another one.", ko: "소, 아이원더이프 아이쿠드 익스체인지잇 퍼 어나더원" },
          { en: "Or, can I get a refund? I'll come to your shop by 2 P.M. to return it.", ko: "오어, 캔아이 게러 리펀드? 아일컴투 유어샵 바이투피엠 투리턴잇" },
          { en: "Okay, thank you, see you soon.", ko: "오케이, 땡큐, 씨유순" }
        ],
        warnings: [
          { word: "stains", guide: "스테인즈" },
          { word: "sleeve", guide: "슬리브" },
          { word: "exchange", guide: "익스체인지" },
          { word: "refund", guide: "리펀드" }
        ]
      },
      {
        id: 140,
        question: "That's the end of the situation. Have you ever been unhappy with something you bought or some service you received? What was the problem? How did you handle it? Tell me everything in detail.",
        translation: "상황극은 여기까지예요. 구매한 물건이나 받은 서비스가 마음에 안 들었던 적이 있나요? 문제가 뭐였고 어떻게 해결했나요? 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년 전 경험", "새 스마트폰 온라인 주문", "처음엔 기대감", "받아보니 저절로 켜졌다꺼짐", "중고품처럼 모서리에 긁힌자국까지", "교환 시도했지만 쉽지않음", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "그때 스마트폰이 새로 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "처음엔 다 괜찮아 보였어요. 새 스마트폰 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "그런데 배송받아보니 문제가 있었어요 — 저절로 켜졌다 꺼졌다 하는 거예요." },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 모서리에 긁힌 자국도 있었고요." },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "그래서 교환해보려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to get a refund and return it. It was such a disappointing experience.", ko: "결국 환불받고 반품해야 했어요. 정말 실망스러운 경험이었죠." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new smartphone, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 스마트폰, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get my new smartphone.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟마이 뉴스마트폰" },
          { en: "However, when it was delivered, I found something wrong with it — it turned on and off by itself.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 잇턴드 온앤오프 바이잇셀프" },
          { en: "To make matters worse, it looked like a used one — it had some scratches on the corner.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 잇해드 썸 스크래치즈 온더 코너" },
          { en: "So I tried to get an exchange, but it wasn't easy.", ko: "소아이 트라이투 게런 익스체인지, 벗잇 워즌트 이지" },
          { en: "As a result, I had to get a refund and return it.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴잇" },
          { en: "It was such a disappointing experience.", ko: "잇워즈 서치어 디서포인팅 익스피어리언스" }
        ],
        warnings: [
          { word: "delivered", guide: "딜리버드" },
          { word: "scratches", guide: "스크래치즈" },
          { word: "exchange", guide: "익스체인지" },
          { word: "disappointing", guide: "디서포인팅" }
        ]
      }
    ]
  },
  {
    id: 47, emoji: "🍽️", nameKo: "저녁 초대",
    category: "롤플레이",
    questions: [
      {
        id: 141,
        question: "You want to invite your friend's couple to your home for dinner. Ask one of your family members three or four questions to find out the best day and time.",
        translation: "친구 부부를 집으로 초대해서 저녁을 대접하고 싶어요. 가족 중 한 명에게 가장 좋은 날짜와 시간을 알아보기 위해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사: 아내에게 얘기시간 있는지", "목적: 성규 부부 초대해서 저녁 대접하고 싶음", "질문1: 좋은 날짜(이번주 토요일)", "질문2: 시작시간(7시쯤)", "질문3: 준비할 음식(성규가 건강식 좋아함→닭곰탕)", "마무리: 고마움 표현"],
        script: [
          { en: "Hey, honey? Do you have time to talk?", ko: "자기야, 얘기할 시간 있어?" },
          { en: "Well, if you're okay with it, I'd like to invite Sunggyu's couple to our home for dinner. Last time he invited me and treated me really well, so I want to return the favor. — Oh, great.", ko: "괜찮으면 성규 부부를 저녁 식사에 초대하고 싶어. 지난번에 걔가 나 초대해서 잘 대접해줬거든, 이번엔 내가 갚고 싶어. — 오, 좋아." },
          { en: "When do you think is good for the dinner? How about this Saturday? I heard they're free that day too.", ko: "저녁 식사는 언제가 좋을까? 이번 주 토요일 어때? 그날 걔네도 한가하다고 들었어." },
          { en: "What time should we start? — Oh, that's late. I think around 7 is good. — Okay, that's good.", ko: "몇 시에 시작할까? — 아, 늦다. 7시쯤이 좋을 것 같아. — 좋아, 그러자." },
          { en: "What kind of food should we prepare? I heard Sunggyu really likes healthy dishes, so how about making hot chicken soup for his stamina?", ko: "무슨 음식을 준비할까? 성규가 건강식을 정말 좋아한다고 들었는데, 체력을 위해서 얼큰한 닭곰탕 만드는 건 어때?" },
          { en: "Thank you, you're the best!", ko: "고마워, 넌 최고야!" }
        ],
        pronunciation: [
          { en: "Hey, honey? Do you have time to talk?", ko: "헤이, 허니? 두유해브 타임투톡?" },
          { en: "Well, if you're okay with it, I'd like to invite Sunggyu's couple to our home for dinner.", ko: "웰, 이퓨어 오케이위딧, 아이드라익투 인바잇 성규스 커플투 아워홈 퍼디너" },
          { en: "Last time he invited me and treated me really well, so I want to return the favor.", ko: "라스트타임히 인바이티드미 앤 트리티드미 릴리웰, 소아이원투 리턴더 페이버" },
          { en: "When do you think is good for the dinner? How about this Saturday?", ko: "웬두유씽크이즈 굿퍼더디너? 하우어바웃 디스새터데이?" },
          { en: "What time should we start? I think around 7 is good.", ko: "왓타임슈드위스타트? 아이씽크 어라운드세븐이즈굿" },
          { en: "What kind of food should we prepare? I heard Sunggyu really likes healthy dishes, so how about making hot chicken soup for his stamina?", ko: "왓카인더브 푸드슈드위 프리페어? 아이허드 성규 릴리 라익스 헬씨 디쉬즈, 소하우어바웃 메이킹 핫치킨수프 퍼히즈 스태미너" },
          { en: "Thank you, you're the best!", ko: "땡큐, 유어더베스트!" }
        ],
        warnings: [
          { word: "invited", guide: "인바이티드" },
          { word: "favor", guide: "페이버" },
          { word: "stamina", guide: "스태미너" },
          { word: "prepare", guide: "프리페어" }
        ]
      },
      {
        id: 142,
        question: "On the day of your dinner party, one of your family members becomes ill. Call your friend and leave a message explaining what happened and propose a plan for dinner in the near future.",
        translation: "저녁 파티 당일에 가족 중 한 명이 아파요. 친구에게 전화해서 무슨 일이 있었는지 설명하는 메시지를 남기고, 가까운 시일 내에 다시 저녁을 함께할 계획을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 저녁파티 때문에 전화", "상황설명: 아내가 심한 두통+고열로 병원감, 심한감기 진단", "대안1: 날짜 재조정(다음주말)", "대안2: 오늘밤 그냥 외식(좋은식당 예약)", "마무리: 메시지 받으면 연락달라"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — What's up.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 무슨 일이야." },
          { en: "I'm calling about our dinner party tonight.", ko: "오늘 저녁 파티 때문에 전화했어." },
          { en: "I'm sorry, but we can't have dinner tonight because my wife is very sick — she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold and she needs rest. She's still in bed.", ko: "미안한데, 오늘 저녁을 못 할 것 같아, 아내가 많이 아파서 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라 쉬어야 한다고 했어. 아직 침대에 누워 있어." },
          { en: "So, I wonder if we could reschedule the dinner. How about next weekend? She'll be better by then.", ko: "그래서 말인데, 저녁 약속을 다시 잡을 수 있을까? 다음 주말은 어때? 그때쯤이면 아내도 나아질 거야." },
          { en: "Or, can we just eat out tonight? I know a good restaurant, and I can make a reservation if you're okay with that.", ko: "아니면 오늘 밤은 그냥 외식할까? 좋은 식당을 아는데, 괜찮으면 예약할게." },
          { en: "Well, please call me back when you get this message. Bye.", ko: "그럼, 이 메시지 받으면 다시 전화 줘. 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "I'm calling about our dinner party tonight.", ko: "아임 콜링어바웃 아워 디너파리 투나잇" },
          { en: "I'm sorry, but we can't have dinner tonight because my wife is very sick —", ko: "아임쏘리, 벗위 캔트 해브디너 투나잇 비커즈 마이와이프이즈 베리씩" },
          { en: "she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold and she needs rest.", ko: "쉬해저 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇처 배드콜드 앤쉬니즈 레스트" },
          { en: "So, I wonder if we could reschedule the dinner. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄더 디너. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just eat out tonight? I know a good restaurant, and I can make a reservation if you're okay with that.", ko: "오어, 캔위 저스트 잇아웃 투나잇? 아이노어 굿레스토랑, 앤아이캔 메이커 레저베이션 이퓨어오케이 위댓" },
          { en: "Well, please call me back when you get this message. Bye.", ko: "웰, 플리즈 콜미백 웬유겟디스 메시지. 바이" }
        ],
        warnings: [
          { word: "reschedule", guide: "리스케줄" },
          { word: "reservation", guide: "레저베이션" },
          { word: "fever", guide: "피버" },
          { word: "headache", guide: "헤데이크" }
        ]
      },
      {
        id: 143,
        question: "Has anything like that ever happened to you? Have you ever had to change your plan because a family member needed your help? Tell me the episode in detail — why you had to change your plans and what happened.",
        translation: "그런 일이 당신에게도 있었나요? 가족이 도움이 필요해서 계획을 바꿔야 했던 적이 있나요? 왜 계획을 바꿔야 했는지, 무슨 일이 있었는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구들과 해운대해변 여행 예정", "처음엔 신나고 기대됨", "그날 아내가 갑자기 아픔(두통+고열)→병원→심한감기 진단", "그녀를 돌볼 사람이 나밖에 없었음", "날짜 재조정 시도했지만 안됨", "결국 여행취소하고 아내와 있음", "그래도 도울 수 있어서 행복했음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "친구들이랑 해운대 해변으로 여행 가기로 되어 있었어요." },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "처음엔 다 괜찮아 보였어요. 해변 가서 재밌게 놀 생각에 신났었죠." },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "그런데 그날 갑자기 아내가 아팠어요 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어요." },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "엎친 데 덮친 격으로, 그때 그녀를 돌볼 수 있는 사람이 저밖에 없었어요." },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "그래서 여행 날짜를 다시 잡으려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "결국 여행을 취소하고 대신 아내와 함께 있어야 했어요." },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "그래도, 아내가 필요할 때 도와주고 곁에 있어줄 수 있어서 행복했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "아이워즈 서포즈드투 테이커 트립투 해운대비치 위드마이 프렌즈" },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드투고투더 비치앤 해브펀" },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "하우에버, 마이와이프 서든리 갓씩 댓데이, 쉬해더 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇워저 배드콜드" },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "투메익 매터즈워스, 아이워즈디온리원 후쿠드 테익케어러브허 앳더타임" },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "소아이 트라이투 리스케줄더 트립, 벗잇 워즌트이지" },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "애저리절트, 아이해드투 캔슬더 트립 앤 스테이위드마이와이프 인스테드" },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "네버덜레스, 아이워즈 해피투헬프 마이와이프 앤비위더 웬쉬 니디드미" }
        ],
        warnings: [
          { word: "headache", guide: "헤데이크" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "nevertheless", guide: "네버덜레스" },
          { word: "instead", guide: "인스테드" }
        ]
      }
    ]
  },
  {
    id: 48, emoji: "🌳", nameKo: "공원 약속",
    category: "롤플레이",
    questions: [
      {
        id: 144,
        question: "Imagine you want to go to the park in your neighborhood with your friend. Call your friend and ask three or four questions about going there together.",
        translation: "동네 공원에 친구랑 같이 가고 싶다고 상상해보세요. 친구에게 전화해서 함께 가는 것에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 같이 공원 가고싶음", "질문1: 좋은 날(토요일)", "질문2: 시작시간(7시쯤)", "질문3: 어느 공원(스타파크, 집에서 가까움)", "마무리: 토요일에 봐"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — Pretty good.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 꽤 좋아." },
          { en: "Well, if you're okay, I'd like to go to a park with you. — That's great.", ko: "괜찮으면 너랑 공원에 가고 싶은데. — 좋아." },
          { en: "When do you think is good to go to the park? How about this Saturday? — Good.", ko: "공원에 언제 가는 게 좋을까? 이번 주 토요일 어때? — 좋아." },
          { en: "What time should we start? — Oh, that's late. I think around 7 is good. — Okay, good.", ko: "몇 시에 시작할까? — 아, 늦다. 7시쯤이 좋을 것 같아. — 좋아, 그러자." },
          { en: "Which park is best for you? Star Park? I'm good with that — it's very close to my home.", ko: "어느 공원이 좋아? 스타파크? 나도 좋아 — 우리 집에서 아주 가깝거든." },
          { en: "Thank you, see you Saturday.", ko: "고마워, 토요일에 보자." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "Well, if you're okay, I'd like to go to a park with you.", ko: "웰, 이퓨어 오케이, 아이드라익투 고투어파크 위듀" },
          { en: "When do you think is good to go to the park? How about this Saturday?", ko: "웬두유씽크이즈 굿투고투더파크? 하우어바웃 디스새터데이?" },
          { en: "What time should we start? I think around 7 is good.", ko: "왓타임슈드위스타트? 아이씽크 어라운드세븐이즈굿" },
          { en: "Which park is best for you? Star Park? I'm good with that — it's very close to my home.", ko: "위치파크이즈 베스트퍼유? 스타파크? 아임굿위댓, 잇츠 베리클로스투 마이홈" },
          { en: "Thank you, see you Saturday.", ko: "땡큐, 씨유 새터데이" }
        ],
        warnings: [
          { word: "Saturday", guide: "새터데이" },
          { word: "close", guide: "클로스" },
          { word: "park", guide: "파크" },
          { word: "home", guide: "홈" }
        ]
      },
      {
        id: 145,
        question: "You're supposed to go to the park with your friend, but you've just found out the park is closed today for renovation. Call your friend to explain the situation, then offer some solutions.",
        translation: "친구랑 공원에 가기로 했는데, 오늘 공원이 보수공사로 문을 닫았다는 걸 방금 알게 됐어요. 친구에게 전화해서 상황을 설명하고 해결책을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 공원 일정 때문에 전화", "상황설명: 스타파크 오늘 보수공사로 휴무(아내한테 들음)", "대안1: 날짜 재조정(다음주말)", "대안2: 다른공원 가기(인터넷서 검색 후 다시연락)", "마무리"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — What's up.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 무슨 일이야." },
          { en: "I'm calling about our schedule for the park.", ko: "공원 일정 때문에 전화했어." },
          { en: "I'm sorry, but we can't go to Star Park — I didn't check it, but it's closed today for renovation. My wife told me.", ko: "미안한데, 스타파크에 못 갈 것 같아 — 확인을 못 했는데, 오늘 보수공사로 문을 닫았대. 아내한테 들었어." },
          { en: "So, I wonder if we could reschedule our plan. How about next weekend? — Oh, that's too bad.", ko: "그래서 말인데, 우리 계획을 다시 잡을 수 있을까? 다음 주말은 어때? — 아, 아쉽네." },
          { en: "Or, can we just go to another park? I'll look for information online and call you back.", ko: "아니면 그냥 다른 공원에 갈까? 인터넷으로 찾아보고 다시 전화할게." },
          { en: "Thank you for understanding. Bye.", ko: "이해해줘서 고마워. 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "I'm calling about our schedule for the park.", ko: "아임 콜링어바웃 아워 스케줄퍼더 파크" },
          { en: "I'm sorry, but we can't go to Star Park — I didn't check it, but it's closed today for renovation.", ko: "아임쏘리, 벗위캔트 고투 스타파크, 아이 디든첵잇, 벗잇츠 클로즈드 투데이 퍼 레노베이션" },
          { en: "My wife told me.", ko: "마이와이프 톨드미" },
          { en: "So, I wonder if we could reschedule our plan. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄아워플랜. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just go to another park? I'll look for information online and call you back.", ko: "오어, 캔위 저스트 고투 어나더파크? 아일 룩퍼 인포메이션 온라인 앤 콜유백" },
          { en: "Thank you for understanding. Bye.", ko: "땡큐퍼 언더스탠딩. 바이" }
        ],
        warnings: [
          { word: "renovation", guide: "레노베이션" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "understanding", guide: "언더스탠딩" },
          { word: "another", guide: "어나더" }
        ]
      },
      {
        id: 146,
        question: "You may have experienced a case where you couldn't go to the park because something happened. Tell me about a time you planned to go to the park but couldn't be there. Was it the weather, or did another kind of problem occur?",
        translation: "무슨 일이 생겨서 공원에 못 갔던 경우가 있을 거예요. 공원에 가려고 했는데 못 갔던 경험을 말해 주세요. 날씨 때문이었나요, 아니면 다른 문제가 있었나요?",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구들과 스타파크 가기로 함", "처음엔 신나고 기대됨", "그날 아내가 갑자기 아픔(두통+고열)→병원→심한감기 진단", "그녀를 돌볼 사람이 나밖에 없었음", "계획 재조정 시도했지만 안됨", "결국 계획취소하고 아내와 있음", "그래도 도울 수 있어서 행복했음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to go to Star Park with my friends.", ko: "친구들이랑 스타파크에 가기로 되어 있었어요." },
          { en: "At first, everything seemed fine. I was excited to go to the park and work out.", ko: "처음엔 다 괜찮아 보였어요. 공원 가서 운동할 생각에 신났었죠." },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "그런데 그날 갑자기 아내가 아팠어요 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어요." },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "엎친 데 덮친 격으로, 그때 그녀를 돌볼 수 있는 사람이 저밖에 없었어요." },
          { en: "So I tried to reschedule the plan, but it wasn't easy.", ko: "그래서 계획을 다시 잡으려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to cancel the plan and stay with my wife instead.", ko: "결국 계획을 취소하고 대신 아내와 함께 있어야 했어요." },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "그래도, 아내가 필요할 때 도와주고 곁에 있어줄 수 있어서 행복했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I was supposed to go to Star Park with my friends.", ko: "아이워즈 서포즈드투 고투 스타파크 위드마이 프렌즈" },
          { en: "At first, everything seemed fine. I was excited to go to the park and work out.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드투고투더 파크앤 워크아웃" },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "하우에버, 마이와이프 서든리 갓씩 댓데이, 쉬해더 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇워저 배드콜드" },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "투메익 매터즈워스, 아이워즈디온리원 후쿠드 테익케어러브허 앳더타임" },
          { en: "So I tried to reschedule the plan, but it wasn't easy.", ko: "소아이 트라이투 리스케줄더플랜, 벗잇 워즌트이지" },
          { en: "As a result, I had to cancel the plan and stay with my wife instead.", ko: "애저리절트, 아이해드투 캔슬더플랜 앤 스테이위드마이와이프 인스테드" },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "네버덜레스, 아이워즈 해피투헬프 마이와이프 앤비위더 웬쉬 니디드미" }
        ],
        warnings: [
          { word: "headache", guide: "헤데이크" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "nevertheless", guide: "네버덜레스" },
          { word: "instead", guide: "인스테드" }
        ]
      }
    ]
  },
  {
    id: 49, emoji: "🎭", nameKo: "공연 티켓",
    category: "롤플레이",
    questions: [
      {
        id: 147,
        question: "You want to get two tickets to see a performance during your vacation. Call the box office and ask three or four questions to get tickets.",
        translation: "휴가 중에 공연을 보려고 티켓 두 장을 구하고 싶어요. 매표소에 전화해서 티켓을 구하기 위한 질문을 3~4개 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 휴가중이라 이번주 공연보고싶음", "질문1: 인기공연+추천(라이온킹)", "질문2: 가능한시간(오후2시)", "질문3: 2명 좌석+가격/할인", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "Well, I'd like to watch a performance sometime this week, since it's during my vacation. I have some questions about it.", ko: "휴가 중이라 이번 주에 공연을 보고 싶은데, 몇 가지 여쭤볼게요." },
          { en: "What kinds of performances are popular these days? Can you give me any recommendations? — Lion King, good.", ko: "요즘 어떤 공연이 인기 있나요? 추천해주실 수 있어요? — 라이온킹이요, 좋네요." },
          { en: "What times are available? — Oh, I think 2 P.M. is good.", ko: "어떤 시간대가 가능한가요? — 아, 오후 2시가 좋을 것 같아요." },
          { en: "Do you have any available seats for two? — Oh, that's good. What's the price for these tickets, and can I get a discount?", ko: "두 명 자리가 있을까요? — 오, 좋네요. 티켓 가격은 어떻게 되고, 할인도 받을 수 있을까요?" },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "Well, I'd like to watch a performance sometime this week, since it's during my vacation. I have some questions about it.", ko: "웰, 아이드라익투 왓처 퍼포먼스 썸타임 디스윅, 신스잇츠 듀링마이 베케이션. 아이해브 썸퀘스천즈 어바웃잇" },
          { en: "What kinds of performances are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 퍼포먼시즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What times are available?", ko: "왓타임즈알 어베일러블?" },
          { en: "Do you have any available seats for two? What's the price for these tickets, and can I get a discount?", ko: "두유해브 애니 어베일러블 시츠퍼투? 왓츠더 프라이스퍼디즈 티킷츠, 앤캔아이 게러 디스카운트?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "performance", guide: "퍼포먼스" },
          { word: "available", guide: "어베일러블" },
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "discount", guide: "디스카운트" }
        ]
      },
      {
        id: 148,
        question: "On the day of the performance, you are sick. Call your friend and explain the situation. Offer two different options for resolving the situation.",
        translation: "공연 당일에 몸이 아파요. 친구에게 전화해서 상황을 설명하고, 해결을 위한 두 가지 다른 옵션을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 공연 때문에 전화", "상황설명: 본인이 심한 두통+고열로 병원감, 심한감기 진단", "대안1: 날짜 재조정(다음주말)", "대안2: 오늘밤 집에서 DVD영화(어벤져스)", "마무리"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you? — What's up.", ko: "안녕, 성규니? 나 동준이야. 잘 지내? — 무슨 일이야." },
          { en: "I'm calling about our performance today.", ko: "오늘 공연 때문에 전화했어." },
          { en: "I'm sorry, but I can't watch the performance because I'm very sick — I have a bad headache and a high fever, so I went to the doctor, and he said it's a bad cold and I need to rest. I'm still in bed.", ko: "미안한데, 오늘 공연을 못 볼 것 같아, 내가 많이 아파서 — 심한 두통이랑 고열이 있어서 병원에 갔는데, 의사가 심한 감기라 쉬어야 한다고 했어. 아직 침대에 누워 있어." },
          { en: "So, I wonder if we could reschedule the performance. How about next weekend? I'll be better by then.", ko: "그래서 말인데, 공연 일정을 다시 잡을 수 있을까? 다음 주말은 어때? 그때쯤이면 나도 나아질 거야." },
          { en: "Or, can we just watch a DVD at my place tonight? I picked up a DVD called Avengers yesterday.", ko: "아니면 오늘 밤 우리 집에서 그냥 DVD 볼까? 어제 어벤져스 DVD를 빌려왔거든." },
          { en: "Thank you for understanding. See you tonight, bye.", ko: "이해해줘서 고마워. 오늘 밤에 봐, 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "I'm calling about our performance today.", ko: "아임 콜링어바웃 아워 퍼포먼스 투데이" },
          { en: "I'm sorry, but I can't watch the performance because I'm very sick —", ko: "아임쏘리, 벗아이 캔트왓치더 퍼포먼스 비커즈 아임베리씩" },
          { en: "I have a bad headache and a high fever, so I went to the doctor, and he said it's a bad cold and I need to rest.", ko: "아이해버 배드헤데이크 앤어 하이피버, 소아이 웬투더 닥터, 앤히세드 잇처 배드콜드 앤아이 니투 레스트" },
          { en: "So, I wonder if we could reschedule the performance. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄더 퍼포먼스. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just watch a DVD at my place tonight? I picked up a DVD called Avengers yesterday.", ko: "오어, 캔위 저스트 왓처 디비디 앳마이플레이스 투나잇? 아이픽트업 어 디비디 콜드 어벤져스 예스터데이" },
          { en: "Thank you for understanding. See you tonight, bye.", ko: "땡큐퍼 언더스탠딩. 씨유투나잇, 바이" }
        ],
        warnings: [
          { word: "performance", guide: "퍼포먼스" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "fever", guide: "피버" },
          { word: "understanding", guide: "언더스탠딩" }
        ]
      },
      {
        id: 149,
        question: "Have you ever had a plan or tickets, and then found out that you cannot attend the performance? When was it? What happened? Tell me everything about that situation and what you did to resolve it.",
        translation: "계획이나 티켓이 있었는데 공연에 못 가게 된 적이 있나요? 언제였나요? 무슨 일이 있었나요? 그 상황과 해결 방법을 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구들과 라이온킹 공연 보기로 함", "처음엔 신나고 기대됨", "그날 아내가 갑자기 아픔(두통+고열)→병원→심한감기 진단", "그녀를 돌볼 사람이 나밖에 없었음", "공연 재조정 시도했지만 안됨", "결국 공연취소하고 아내와 있음", "그래도 도울 수 있어서 행복했음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to watch a performance called Lion King with my friends.", ko: "친구들이랑 라이온킹이라는 공연을 보기로 되어 있었어요." },
          { en: "At first, everything seemed fine. I was excited to watch the performance.", ko: "처음엔 다 괜찮아 보였어요. 공연 보러 갈 생각에 신났었죠." },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "그런데 그날 갑자기 아내가 아팠어요 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어요." },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "엎친 데 덮친 격으로, 그때 그녀를 돌볼 수 있는 사람이 저밖에 없었어요." },
          { en: "So I tried to reschedule the performance, but it wasn't easy.", ko: "그래서 공연 날짜를 다시 잡으려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to cancel the performance and stay with my wife instead.", ko: "결국 공연을 취소하고 대신 아내와 함께 있어야 했어요." },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "그래도, 아내가 필요할 때 도와주고 곁에 있어줄 수 있어서 행복했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I was supposed to watch a performance called Lion King with my friends.", ko: "아이워즈 서포즈드투 왓처 퍼포먼스 콜드 라이온킹 위드마이 프렌즈" },
          { en: "At first, everything seemed fine. I was excited to watch the performance.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드투 왓치더 퍼포먼스" },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "하우에버, 마이와이프 서든리 갓씩 댓데이, 쉬해더 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇워저 배드콜드" },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "투메익 매터즈워스, 아이워즈디온리원 후쿠드 테익케어러브허 앳더타임" },
          { en: "So I tried to reschedule the performance, but it wasn't easy.", ko: "소아이 트라이투 리스케줄더 퍼포먼스, 벗잇 워즌트이지" },
          { en: "As a result, I had to cancel the performance and stay with my wife instead.", ko: "애저리절트, 아이해드투 캔슬더 퍼포먼스 앤 스테이위드마이와이프 인스테드" },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "네버덜레스, 아이워즈 해피투헬프 마이와이프 앤비위더 웬쉬 니디드미" }
        ],
        warnings: [
          { word: "performance", guide: "퍼포먼스" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "nevertheless", guide: "네버덜레스" },
          { word: "instead", guide: "인스테드" }
        ]
      }
    ]
  },
  {
    id: 50, emoji: "🧳", nameKo: "여행 예약",
    category: "롤플레이",
    questions: [
      {
        id: 150,
        question: "You are planning a vacation with your friend. Call the travel agency and describe the kinds of vacation you and your friend are planning. Ask three or four questions to find out what you need to know.",
        translation: "친구와 휴가를 계획 중이에요. 여행사에 전화해서 계획 중인 휴가 종류를 설명하고, 필요한 정보를 알아보기 위한 질문을 3~4개 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사: 여행사 확인", "목적: 휴가로 여행가고 싶음", "질문1: 요즘 인기 여행지+추천", "질문2: 그 여행지 특징(바다에서 수영하고싶음, 해변있는지)", "질문3: 좋은 시기(지난주말)", "마무리"],
        script: [
          { en: "Hi there. Travel agency, right? — Yes.", ko: "안녕하세요. 여행사 맞죠? — 네." },
          { en: "Well, I'd like to take a trip on my vacation. I have some questions about it.", ko: "휴가 때 여행을 가고 싶은데, 몇 가지 여쭤볼게요." },
          { en: "What kinds of destinations are popular these days? Can you give me any recommendations?", ko: "요즘 어떤 여행지가 인기 있나요? 추천해주실 수 있어요?" },
          { en: "What features do those destinations have? In my case, I like to swim in the ocean — do you think they have a beach?", ko: "그 여행지들은 어떤 특징이 있나요? 저는 바다 수영을 좋아하는데, 해변이 있을까요?" },
          { en: "When do you think is good for a vacation? — Last weekend? Okay.", ko: "휴가는 언제가 좋을까요? — 지난 주말이요? 알겠어요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there. Travel agency, right?", ko: "하이데어. 트래블 에이전시, 라잇?" },
          { en: "Well, I'd like to take a trip on my vacation. I have some questions about it.", ko: "웰, 아이드라익투 테이커 트립 온마이 베케이션. 아이해브 썸퀘스천즈 어바웃잇" },
          { en: "What kinds of destinations are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 데스티네이션즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What features do those destinations have? In my case, I like to swim in the ocean — do you think they have a beach?", ko: "왓피처즈두도우즈 데스티네이션즈해브? 인마이케이스, 아이라익투 스윔인디오션, 두유씽크데이해버비치?" },
          { en: "When do you think is good for a vacation?", ko: "웬두유씽크이즈 굿퍼러 베케이션?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "agency", guide: "에이전시" },
          { word: "destinations", guide: "데스티네이션즈" },
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "ocean", guide: "오션" }
        ]
      },
      {
        id: 151,
        question: "The travel agent informs you that the vacation you want is not available for the date you want. Call your friend and leave a message explaining the situation and offer two or three alternatives.",
        translation: "여행사 직원이 원하는 날짜에 원하는 휴가 상품이 없다고 알려줘요. 친구에게 전화해서 상황을 설명하는 메시지를 남기고 두세 가지 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 휴가 때문에 전화", "상황설명: 여행사가 그 패키지 예약불가라고함", "대안1: 날짜 재조정(다음주말)", "대안2: 다른 여행지 찾아보기", "마무리"],
        script: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "안녕, 성규니? 나 동준이야. 잘 지내?" },
          { en: "I'm calling about our vacation.", ko: "우리 휴가 때문에 전화했어." },
          { en: "I'm sorry, but we can't go on the travel package for our vacation — the travel agency told me it's not available.", ko: "미안한데, 우리 휴가로 잡았던 여행 패키지를 못 갈 것 같아 — 여행사에서 예약이 안 된다고 하더라고." },
          { en: "So, I wonder if we could reschedule the vacation. How about next weekend?", ko: "그래서 말인데, 휴가 날짜를 다시 잡을 수 있을까? 다음 주말은 어때?" },
          { en: "Or, can we go somewhere else? I'll search for information about other destinations online.", ko: "아니면 다른 곳으로 갈까? 다른 여행지를 인터넷으로 찾아볼게." },
          { en: "Please call me back when you get this message, bye.", ko: "이 메시지 받으면 다시 전화해줘, 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Sunggyu? This is Dongjun. How are you?", ko: "헬로, 이즈디스 성규? 디스이즈 동준. 하우아유?" },
          { en: "I'm calling about our vacation.", ko: "아임 콜링어바웃 아워 베케이션" },
          { en: "I'm sorry, but we can't go on the travel package for our vacation — the travel agency told me it's not available.", ko: "아임쏘리, 벗위캔트 고온더 트래블패키지 퍼아워베케이션, 더 트래블에이전시 톨드미 잇츠낫 어베일러블" },
          { en: "So, I wonder if we could reschedule the vacation. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄더베케이션. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we go somewhere else? I'll search for information about other destinations online.", ko: "오어, 캔위 고 썸웨어엘스? 아일 서치퍼 인포메이션 어바웃 아더 데스티네이션즈 온라인" },
          { en: "Please call me back when you get this message, bye.", ko: "플리즈 콜미백 웬유겟디스 메시지, 바이" }
        ],
        warnings: [
          { word: "package", guide: "패키지" },
          { word: "available", guide: "어베일러블" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "destinations", guide: "데스티네이션즈" }
        ]
      },
      {
        id: 152,
        question: "Think about a time when you had a difficulty making a vacation plan. Tell me all about the details, what happened, and what you needed to do.",
        translation: "휴가 계획을 세우는 데 어려움을 겪었던 경험을 떠올려 보세요. 무슨 일이 있었고, 무엇을 해야 했는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구들과 해운대해변 여행 예정", "처음엔 신나고 기대됨", "그날 아내가 갑자기 아픔(두통+고열)→병원→심한감기 진단", "그녀를 돌볼 사람이 나밖에 없었음", "날짜 재조정 시도했지만 안됨", "결국 여행취소하고 아내와 있음", "그래도 도울 수 있어서 행복했음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "친구들이랑 해운대 해변으로 여행 가기로 되어 있었어요." },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "처음엔 다 괜찮아 보였어요. 해변 가서 재밌게 놀 생각에 신났었죠." },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "그런데 그날 갑자기 아내가 아팠어요 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어요." },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "엎친 데 덮친 격으로, 그때 그녀를 돌볼 수 있는 사람이 저밖에 없었어요." },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "그래서 여행 날짜를 다시 잡으려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "결국 여행을 취소하고 대신 아내와 함께 있어야 했어요." },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "그래도, 아내가 필요할 때 도와주고 곁에 있어줄 수 있어서 행복했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "아이워즈 서포즈드투 테이커 트립투 해운대비치 위드마이 프렌즈" },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드투고투더 비치앤 해브펀" },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "하우에버, 마이와이프 서든리 갓씩 댓데이, 쉬해더 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇워저 배드콜드" },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "투메익 매터즈워스, 아이워즈디온리원 후쿠드 테익케어러브허 앳더타임" },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "소아이 트라이투 리스케줄더 트립, 벗잇 워즌트이지" },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "애저리절트, 아이해드투 캔슬더 트립 앤 스테이위드마이와이프 인스테드" },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "네버덜레스, 아이워즈 해피투헬프 마이와이프 앤비위더 웬쉬 니디드미" }
        ],
        warnings: [
          { word: "headache", guide: "헤데이크" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "nevertheless", guide: "네버덜레스" },
          { word: "instead", guide: "인스테드" }
        ]
      }
    ]
  },
  {
    id: 51, emoji: "🏥", nameKo: "병원 예약",
    category: "롤플레이",
    questions: [
      {
        id: 153,
        question: "You need to make an appointment with your doctor. Call the doctor's office and describe what you need. Ask three or four questions to find out when the doctor is available.",
        translation: "병원 예약을 잡아야 해요. 병원에 전화해서 필요한 걸 설명하고, 의사가 언제 가능한지 알아보기 위해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 건강검진 받고싶어서 병원가려함", "질문1: 좋은 날(토요일)", "질문2: 가능한시간(7시쯤)", "질문3: 병원 위치 정보", "마무리"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "Well, I'd like to see a doctor for a health checkup.", ko: "건강검진을 받고 싶어서요." },
          { en: "When do you think is good to come in? Anyway, I'd like Saturday.", ko: "언제 오는 게 좋을까요? 아무튼 토요일이 좋겠어요." },
          { en: "What time is available? — Oh, I think around 7 is good.", ko: "몇 시가 가능한가요? — 아, 7시쯤이 좋을 것 같아요." },
          { en: "Where is your office? Can you give me the location information?", ko: "병원이 어디 있나요? 위치 정보를 좀 주시겠어요?" },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "Well, I'd like to see a doctor for a health checkup.", ko: "웰, 아이드라익투 씨어 닥터 퍼러 헬쓰 첵업" },
          { en: "When do you think is good to come in? Anyway, I'd like Saturday.", ko: "웬두유씽크이즈 굿투컴인? 애니웨이, 아이드라익 새터데이" },
          { en: "What time is available? I think around 7 is good.", ko: "왓타임이즈 어베일러블? 아이씽크 어라운드세븐이즈굿" },
          { en: "Where is your office? Can you give me the location information?", ko: "웨어이즈 유어오피스? 캔유기브미 더 로케이션 인포메이션" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "checkup", guide: "첵업" },
          { word: "available", guide: "어베일러블" },
          { word: "location", guide: "로케이션" },
          { word: "appointment", guide: "어포인트먼트" }
        ]
      },
      {
        id: 154,
        question: "On the day of your appointment, you think you are not able to make it. Call the doctor's office and explain your situation. Offer some alternatives to reschedule.",
        translation: "예약 당일에 갈 수 없을 것 같아요. 병원에 전화해서 상황을 설명하고, 일정을 다시 잡기 위한 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 예약 때문에 전화", "상황설명: 아내가 심한두통+고열로 병원감, 심한감기 진단", "대안1: 날짜 재조정(다음주말)", "대안2: 이번엔 취소, 시간되면 다시연락(다음분기쯤)", "마무리"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "I'm calling about our appointment.", ko: "저희 예약 때문에 전화드렸어요." },
          { en: "I can't come to your office because my wife is very sick — she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold and she needs rest. She's still in bed.", ko: "병원에 못 갈 것 같아요, 아내가 많이 아파서 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라 쉬어야 한다고 했어요. 아직 침대에 누워 있어요." },
          { en: "So, I wonder if we could reschedule the appointment. How about next weekend?", ko: "그래서 말인데, 예약을 다시 잡을 수 있을까요? 다음 주말은 어때요?" },
          { en: "Or, can we just cancel this time? If I have free time, I'll call back — maybe next quarter.", ko: "아니면 이번엔 그냥 취소할까요? 시간 되면 다시 전화드릴게요 — 아마 다음 분기쯤이요." },
          { en: "Thank you for understanding.", ko: "이해해주셔서 감사합니다." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "I'm calling about our appointment.", ko: "아임 콜링어바웃 아워 어포인트먼트" },
          { en: "I can't come to your office because my wife is very sick —", ko: "아이캔트 컴투유어오피스 비커즈 마이와이프이즈 베리씩" },
          { en: "she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold and she needs rest.", ko: "쉬해저 배드헤데이크 앤어 하이피버, 소아이 툭허투더닥터, 앤히세드 잇처 배드콜드 앤쉬니즈레스트" },
          { en: "So, I wonder if we could reschedule the appointment. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄디 어포인트먼트. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just cancel this time? If I have free time, I'll call back — maybe next quarter.", ko: "오어, 캔위 저스트 캔슬디스타임? 이프아이해브 프리타임, 아일콜백, 메이비 넥스트 쿼터" },
          { en: "Thank you for understanding.", ko: "땡큐퍼 언더스탠딩" }
        ],
        warnings: [
          { word: "appointment", guide: "어포인트먼트" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "quarter", guide: "쿼터" },
          { word: "understanding", guide: "언더스탠딩" }
        ]
      },
      {
        id: 155,
        question: "Think about a time when you had a difficulty making a plan. Tell me all about the details, what happened, and what you needed to do.",
        translation: "계획을 세우는 데 어려움을 겪었던 경험을 떠올려 보세요. 무슨 일이 있었고, 무엇을 해야 했는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구들과 해운대해변 여행 예정", "처음엔 신나고 기대됨", "그날 아내가 갑자기 아픔(두통+고열)→병원→심한감기 진단", "그녀를 돌볼 사람이 나밖에 없었음", "재조정 시도했지만 안됨", "결국 취소하고 아내와 있음", "그래도 도울 수 있어서 행복했음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "친구들이랑 해운대 해변으로 여행 가기로 되어 있었어요." },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "처음엔 다 괜찮아 보였어요. 해변 가서 재밌게 놀 생각에 신났었죠." },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "그런데 그날 갑자기 아내가 아팠어요 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어요." },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "엎친 데 덮친 격으로, 그때 그녀를 돌볼 수 있는 사람이 저밖에 없었어요." },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "그래서 여행 날짜를 다시 잡으려고 했는데 쉽지 않았어요." },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "결국 여행을 취소하고 대신 아내와 함께 있어야 했어요." },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "그래도, 아내가 필요할 때 도와주고 곁에 있어줄 수 있어서 행복했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I was supposed to take a trip to Haeundae Beach with my friends.", ko: "아이워즈 서포즈드투 테이커 트립투 해운대비치 위드마이 프렌즈" },
          { en: "At first, everything seemed fine. I was excited to go to the beach and have fun.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드투고투더 비치앤 해브펀" },
          { en: "However, my wife suddenly got sick that day — she had a bad headache and a high fever, so I took her to the doctor, and he said it was a bad cold.", ko: "하우에버, 마이와이프 서든리 갓씩 댓데이, 쉬해더 배드헤데이크 앤어 하이피버, 소아이 툭허투더 닥터, 앤히세드 잇워저 배드콜드" },
          { en: "To make matters worse, I was the only one who could take care of her at the time.", ko: "투메익 매터즈워스, 아이워즈디온리원 후쿠드 테익케어러브허 앳더타임" },
          { en: "So I tried to reschedule the trip, but it wasn't easy.", ko: "소아이 트라이투 리스케줄더 트립, 벗잇 워즌트이지" },
          { en: "As a result, I had to cancel the trip and stay with my wife instead.", ko: "애저리절트, 아이해드투 캔슬더 트립 앤 스테이위드마이와이프 인스테드" },
          { en: "Nevertheless, I was happy to help my wife and be with her when she needed me.", ko: "네버덜레스, 아이워즈 해피투헬프 마이와이프 앤비위더 웬쉬 니디드미" }
        ],
        warnings: [
          { word: "headache", guide: "헤데이크" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "nevertheless", guide: "네버덜레스" },
          { word: "instead", guide: "인스테드" }
        ]
      }
    ]
  },
  {
    id: 52, emoji: "🍝", nameKo: "식당",
    category: "롤플레이",
    questions: [
      {
        id: 156,
        question: "Your friend's family has opened a new restaurant recently. Call the restaurant and ask three or four questions about the restaurant and the food.",
        translation: "친구네 가족이 최근에 새 식당을 열었어요. 식당에 전화해서 식당과 음식에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사: 성규의 친한친구 동준이라고 소개", "목적: 오늘밤 가고싶음", "질문1: 어떤요리+추천(파스타/피자)", "질문2: 오픈기념 프로모션 여부", "질문3: 위치+주차장+배달여부", "마무리"],
        script: [
          { en: "Hello, I'm Dongjun, Sunggyu's best friend.", ko: "안녕하세요, 저는 성규의 가장 친한 친구 동준이라고 해요." },
          { en: "Well, I'd like to come to your restaurant tonight. I have some questions.", ko: "오늘 밤에 그쪽 식당에 가고 싶은데, 몇 가지 여쭤볼게요." },
          { en: "What kinds of dishes do you have? Can you give me any recommendations? — Pastas and pizzas. Oh, that's good.", ko: "어떤 요리가 있나요? 추천해주실 수 있어요? — 파스타랑 피자요. 오, 좋네요." },
          { en: "I wonder if you have any opening promotions going on. — Oh, that's great.", ko: "오픈 기념 프로모션이 있는지 궁금해요. — 오, 잘됐네요." },
          { en: "Where is the restaurant located, and do you have a parking lot? Do you offer delivery? — Awesome, it's very close to my home.", ko: "식당이 어디에 있나요? 주차장은 있나요? 배달도 되나요? — 좋네요, 저희 집에서 아주 가까워요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hello, I'm Dongjun, Sunggyu's best friend.", ko: "헬로, 아임 동준, 성규스 베스트 프렌드" },
          { en: "Well, I'd like to come to your restaurant tonight. I have some questions.", ko: "웰, 아이드라익투 컴투유어 레스토랑 투나잇. 아이해브 썸퀘스천즈" },
          { en: "What kinds of dishes do you have? Can you give me any recommendations?", ko: "왓카인즈어브 디쉬즈두유해브? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "I wonder if you have any opening promotions going on.", ko: "아이원더이프유해브 애니 오프닝 프로모션즈 고잉온" },
          { en: "Where is the restaurant located, and do you have a parking lot? Do you offer delivery?", ko: "웨어이즈더 레스토랑 로케이티드, 앤두유해버 파킹랏? 두유오퍼 딜리버리?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "promotions", guide: "프로모션즈" },
          { word: "delivery", guide: "딜리버리" },
          { word: "located", guide: "로케이티드" }
        ]
      },
      {
        id: 157,
        question: "You ordered lunch from the restaurant and had it delivered to your office for a business meeting, but you found out the food is not what you ordered. Call the restaurant, explain the situation, and suggest ways to resolve the problem.",
        translation: "식당에서 점심 메뉴를 주문해서 업무 회의 때문에 사무실로 배달시켰는데, 방금 주문하신 음식이 아니라는 걸 알게 됐어요. 식당에 전화해서 상황을 설명하고 문제를 해결할 방법을 몇 가지 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 주문한 점심 때문에 전화", "상황설명: 주문한 음식이 아님", "대안1: 최대한 빨리 재배달 요청", "대안2: 시간걸리면 빨리되는 걸로 변경(라면 추천받음)", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about the lunch I ordered from your restaurant.", ko: "그쪽 식당에서 주문한 점심 때문에 전화드렸어요." },
          { en: "I found out there's something wrong with the dishes — the food is not what I ordered.", ko: "음식에 문제가 있는 걸 알게 됐어요 — 제가 주문한 음식이 아니에요." },
          { en: "So, I wonder if you could deliver what I ordered as soon as possible. — Oh, that's bad.", ko: "그래서 말인데, 제가 주문한 걸 최대한 빨리 배달해주실 수 있을까요? — 아, 그거 곤란하네요." },
          { en: "If it would take long, I'd like to order something that comes fast. What would you suggest? — Ramen? Oh, good.", ko: "시간이 오래 걸린다면, 빨리 되는 걸로 주문하고 싶어요. 뭐가 좋을까요? — 라면이요? 오, 좋네요." },
          { en: "Thank you, I'll wait for my lunch.", ko: "감사합니다, 점심 기다릴게요." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about the lunch I ordered from your restaurant.", ko: "아임 콜링어바웃더 런치 아이오더드 프럼 유어 레스토랑" },
          { en: "I found out there's something wrong with the dishes — the food is not what I ordered.", ko: "아이파운드아웃 데어즈 썸씽롱 위더 디쉬즈, 더푸드이즈 낫왓아이 오더드" },
          { en: "So, I wonder if you could deliver what I ordered as soon as possible.", ko: "소, 아이원더이프유쿠드 딜리버 왓아이 오더드 애즈순애즈 파서블" },
          { en: "If it would take long, I'd like to order something that comes fast. What would you suggest?", ko: "이핏우드테익롱, 아이드라익투 오더 썸씽댓 컴즈패스트. 왓우쥬 서제스트?" },
          { en: "Thank you, I'll wait for my lunch.", ko: "땡큐, 아일 웨잇퍼마이 런치" }
        ],
        warnings: [
          { word: "delivered", guide: "딜리버드" },
          { word: "possible", guide: "파서블" },
          { word: "suggest", guide: "서제스트" },
          { word: "ordered", guide: "오더드" }
        ]
      }
    ]
  },
  {
    id: 53, emoji: "🗺️", nameKo: "지리 (친구 방문)",
    category: "롤플레이",
    questions: [
      {
        id: 158,
        question: "You're planning to visit your friend who lives in a different country. Call your friend and ask three or four questions about the geography of your friend's country.",
        translation: "다른 나라에 사는 친구를 방문할 계획이에요. 친구에게 전화해서 친구 나라의 지리에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 그쪽 나라 가려는데 지리 궁금함", "질문1: 나라 생김새(한국이랑 비슷?)", "질문2: 산/강/해변 많은지(수영좋아함)", "질문3: 특별한 관광지 추천(만리장성)", "마무리"],
        script: [
          { en: "Hello, is this Looda? It's me, Dongjun. What's up?", ko: "안녕, 루다니? 나 동준이야. 잘 지내?" },
          { en: "Well, I'm going to your country, and I have some questions about the geography.", ko: "네 나라에 가려고 하는데, 지리에 대해 몇 가지 물어볼게." },
          { en: "What does the country look like? — Oh, looks like Korea, good.", ko: "그 나라는 어떻게 생겼어? — 오, 한국이랑 비슷하구나, 좋네." },
          { en: "Are there many mountains, rivers, and beaches? — Oh, many beaches? I like swimming in the sea, that's good.", ko: "산이나 강, 해변이 많아? — 오, 해변이 많다고? 나 바다수영 좋아하는데 잘됐다." },
          { en: "What's the most unique or special area I could visit? Can you give me any recommendations? — Awesome, the Great Wall, that sounds good.", ko: "가장 독특하거나 특별한 곳이 있을까? 추천해줄 수 있어? — 좋다, 만리장성이라니, 괜찮은데." },
          { en: "Thank you for the information. Bye.", ko: "정보 고마워, 안녕." }
        ],
        pronunciation: [
          { en: "Hello, is this Looda? It's me, Dongjun. What's up?", ko: "헬로, 이즈디스 루다? 잇츠미, 동준. 왓츠업?" },
          { en: "Well, I'm going to your country, and I have some questions about the geography.", ko: "웰, 아임고잉투 유어 컨트리, 앤아이해브 썸퀘스천즈 어바웃더 지오그래피" },
          { en: "What does the country look like?", ko: "왓더즈더 컨트리 룩라익?" },
          { en: "Are there many mountains, rivers, and beaches?", ko: "알데어 매니 마운튼즈, 리버즈, 앤 비치즈?" },
          { en: "What's the most unique or special area I could visit? Can you give me any recommendations?", ko: "왓츠더 모스트 유닉오어 스페셜 에리어 아이쿠드비짓? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "geography", guide: "지오그래피" },
          { word: "unique", guide: "유닉" },
          { word: "mountains", guide: "마운튼즈" },
          { word: "recommendations", guide: "레커멘데이션즈" }
        ]
      },
      {
        id: 159,
        question: "On the day before the trip, you notice you're not able to visit your friend. Call your friend and explain why, offering two or three alternatives to visit in the near future.",
        translation: "여행 전날, 친구를 방문할 수 없다는 걸 알게 됐어요. 친구에게 전화해서 이유를 설명하고, 가까운 시일 내에 방문할 수 있는 두세 가지 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 내일 가려던 여행 때문에 전화", "상황설명: 아내가 아파서(두통+고열, 심한감기) 못감", "대안1: 방문일정 재조정(다음달)", "대안2: 스케줄확인후 언제괜찮은지 알려달라", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about the trip I was going to take tomorrow.", ko: "내일 가려던 여행 때문에 전화했어." },
          { en: "I'm sorry, I can't go on the trip because my wife got sick — she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold.", ko: "미안한데, 아내가 아파서 여행을 못 갈 것 같아 — 심한 두통이랑 고열이 있어서 병원에 데려갔는데, 의사가 심한 감기라고 했어." },
          { en: "So, I wonder if you could reschedule my visit. How about next month? — Oh, that's bad, you're busy.", ko: "그래서 말인데, 방문 일정을 다시 잡아줄 수 있을까? 다음 달은 어때? — 아, 안됐네, 너 바쁘구나." },
          { en: "Or, would you let me know when you're available after checking your schedule? — Okay, I'll wait for your call again.", ko: "아니면 스케줄 확인해보고 언제 괜찮은지 알려줄래? — 알겠어, 다시 연락 기다릴게." },
          { en: "Thank you for understanding.", ko: "이해해줘서 고마워." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about the trip I was going to take tomorrow.", ko: "아임 콜링어바웃더 트립 아이워즈고잉투 테익 투머로우" },
          { en: "I'm sorry, I can't go on the trip because my wife got sick —", ko: "아임쏘리, 아이캔트 고온더트립 비커즈 마이와이프 갓씩" },
          { en: "she has a bad headache and a high fever, so I took her to the doctor, and he said it's a bad cold.", ko: "쉬해저 배드헤데이크 앤어 하이피버, 소아이 툭허투더닥터, 앤히세드 잇처 배드콜드" },
          { en: "So, I wonder if you could reschedule my visit. How about next month?", ko: "소, 아이원더이프유쿠드 리스케줄마이비짓. 하우어바웃 넥스트먼쓰?" },
          { en: "Or, would you let me know when you're available after checking your schedule?", ko: "오어, 우쥬 렛미노우 웬유어 어베일러블 애프터 체킹유어 스케줄?" },
          { en: "Thank you for understanding.", ko: "땡큐퍼 언더스탠딩" }
        ],
        warnings: [
          { word: "reschedule", guide: "리스케줄" },
          { word: "available", guide: "어베일러블" },
          { word: "schedule", guide: "스케줄" },
          { word: "understanding", guide: "언더스탠딩" }
        ]
      }
    ]
  },
  {
    id: 54, emoji: "🧥", nameKo: "날씨와 옷차림",
    category: "롤플레이",
    questions: [
      {
        id: 160,
        question: "You want to have a vacation abroad. Call your hotel and ask three or four questions about the weather in that country and what kinds of clothes you should bring.",
        translation: "해외로 휴가를 가고 싶어요. 호텔에 전화해서 그 나라 날씨와 어떤 옷을 챙겨야 할지 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 호텔예약하려는데 나라에대해 궁금함", "질문1: 요즘 날씨(여름철)", "질문2: 비 많이오는지", "질문3: 어떤옷 챙겨야하는지, 밤에 자켓필요한지", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "Well, I want to book your hotel, and I have some questions about the country.", ko: "그쪽 호텔을 예약하고 싶은데, 그 나라에 대해 몇 가지 여쭤볼게요." },
          { en: "What's the weather like there these days? — Oh, summer season, okay.", ko: "요즘 그쪽 날씨는 어떤가요? — 아, 여름철이군요, 알겠어요." },
          { en: "Does it rain a lot? — Oh okay, I'll check it.", ko: "비가 많이 오나요? — 아, 알겠어요, 확인해볼게요." },
          { en: "What kinds of clothes should I bring? Do I need a jacket at night? — Awesome, that sounds good.", ko: "어떤 옷을 챙겨야 할까요? 밤에는 재킷이 필요할까요? — 좋네요, 괜찮은데요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "Well, I want to book your hotel, and I have some questions about the country.", ko: "웰, 아이원투북 유어호텔, 앤아이해브 썸퀘스천즈 어바웃더 컨트리" },
          { en: "What's the weather like there these days?", ko: "왓츠더웨더 라익데어 디즈데이즈?" },
          { en: "Does it rain a lot?", ko: "더짓 레인어랏?" },
          { en: "What kinds of clothes should I bring? Do I need a jacket at night?", ko: "왓카인즈어브 클로즈 슈다이브링? 두아이니더 재킷 앳나잇?" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "weather", guide: "웨더" },
          { word: "jacket", guide: "재킷" },
          { word: "season", guide: "시즌" },
          { word: "bring", guide: "브링" }
        ]
      },
      {
        id: 161,
        question: "When you arrive, you realize you've brought the wrong clothes for the weather. Call the clothing store and explain the situation, then make arrangements to purchase new clothes.",
        translation: "도착해서 보니 날씨에 안 맞는 옷을 가져왔다는 걸 깨달아요. 옷가게에 전화해서 상황을 설명하고, 새 옷을 살 수 있도록 준비하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 그 가게 옷 때문에 전화", "상황설명: 반팔티만 있음, 날씨를 몰랐음", "대안1: 오늘 얇은자켓 구매(어떤종류있는지)", "대안2: 카드결제 가능여부+배달여부(직접방문하기로함)", "마무리"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about the clothes at your shop.", ko: "그쪽 가게 옷 때문에 전화드렸어요." },
          { en: "I only have short-sleeve T-shirts — I didn't know the weather here. The thing is, I need more clothes.", ko: "반팔 티셔츠밖에 없어서요 — 여기 날씨를 몰랐거든요. 그래서 옷이 더 필요해요." },
          { en: "So, I wonder if I can get a light jacket there today. What kinds of jackets do you have? — Oh, that sounds good.", ko: "그래서 말인데, 오늘 얇은 재킷을 살 수 있을까요? 어떤 종류가 있나요? — 오, 괜찮네요." },
          { en: "Can I pay by credit card? — Awesome. Do you offer delivery service? — Oh, okay, I'll just come to your shop.", ko: "신용카드로 결제할 수 있나요? — 좋네요. 배달 서비스도 되나요? — 아, 알겠어요, 그냥 매장으로 갈게요." },
          { en: "Thank you for the information, bye.", ko: "정보 감사합니다, 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about the clothes at your shop.", ko: "아임 콜링어바웃더 클로즈 앳유어샵" },
          { en: "I only have short-sleeve T-shirts — I didn't know the weather here.", ko: "아이온리해브 숏슬리브 티셔츠, 아이 디든노우 더웨더 히어" },
          { en: "The thing is, I need more clothes.", ko: "더씽이즈, 아이니드모어 클로즈" },
          { en: "So, I wonder if I can get a light jacket there today. What kinds of jackets do you have?", ko: "소, 아이원더이프아이캔 게러 라잇재킷 데어 투데이. 왓카인즈어브 재킷츠 두유해브?" },
          { en: "Can I pay by credit card? Do you offer delivery service?", ko: "캔아이페이바이 크레딧카드? 두유오퍼 딜리버리서비스?" },
          { en: "Thank you for the information, bye.", ko: "땡큐퍼디 인포메이션, 바이" }
        ],
        warnings: [
          { word: "jacket", guide: "재킷" },
          { word: "delivery", guide: "딜리버리" },
          { word: "credit card", guide: "크레딧카드" },
          { word: "weather", guide: "웨더" }
        ]
      }
    ]
  },
];

// 만능 패턴 72문장 (출처: 강지완오픽 「오픽 만능패턴 72문장」)
// 빈칸(뭐뭐/...) 있는 템플릿 문장 + 소재를 채운 example. 섹션 순서/번호 그대로 유지.
const PATTERNS = [
  {
    section: "01", title: "자유시간 & 취미 활동",
    subtitle: "음악감상, 카페, 헬스장, 영화감상 등 여가 시간 활용 표현",
    patterns: [
      { idx: 1, label: "선호 표현", kr: "저는 자유 시간에 뭐뭐 하는 걸 정말 좋아해요.", en: "I really enjoy ... in my free time.",
        example: { en: "I really enjoy watching Netflix in my free time.", ko: "저는 자유 시간에 넷플릭스 보는 걸 정말 좋아해요." } },
      { idx: 2, label: "최애 활동", kr: "제가 가장 좋아하는 활동 중 하나는 뭐뭐 하는 거예요.", en: "One of my favorite activities is ... .",
        example: { en: "One of my favorite activities is hiking on weekends.", ko: "제가 가장 좋아하는 활동 중 하나는 주말에 등산하는 거예요." } },
      { idx: 3, label: "평소 습관", kr: "저는 시간이 있을 때 보통 뭐뭐 해요.", en: "I usually ... when I have free time.",
        example: { en: "I usually listen to music when I have free time.", ko: "저는 시간이 있을 때 보통 음악을 들어요." } },
      { idx: 4, label: "주말 습관", kr: "저는 주말에 뭐뭐 하는 편이에요.", en: "I often ... on weekends.",
        example: { en: "I often go to the gym on weekends.", ko: "저는 주말에 헬스장에 가는 편이에요." } },
      { idx: 5, label: "동반 활동", kr: "가끔 친구들이랑 같이 뭐뭐 하기도 해요.", en: "Sometimes I ... with my friends.",
        example: { en: "Sometimes I grab a coffee with my friends.", ko: "가끔 친구들이랑 같이 커피 마시러 가기도 해요." } },
      { idx: 6, label: "혼자 활동", kr: "대부분은 혼자 뭐뭐 하는 편이에요.", en: "Most of the time I ... alone.",
        example: { en: "Most of the time I go for a walk alone.", ko: "대부분은 혼자 산책하는 편이에요." } },
      { idx: 7, label: "스트레스 해소", kr: "저는 특히 뭐뭐 하는 걸 좋아하는데 스트레스가 풀리거든요.", en: "I especially like ... because it helps me relax.",
        example: { en: "I especially like taking a hot shower because it helps me relax.", ko: "저는 특히 따뜻한 물로 샤워하는 걸 좋아하는데 스트레스가 풀리거든요." } },
      { idx: 8, label: "장점 설명", kr: "뭐뭐 하기 정말 좋은 방법이에요.", en: "It's a great way to ... .",
        example: { en: "It's a great way to clear your mind.", ko: "머리를 비우기 정말 좋은 방법이에요." } },
      { idx: 9, label: "감정/기분", kr: "그걸 하면 뭐뭐 한 기분이 들어요.", en: "It makes me feel ... .",
        example: { en: "It makes me feel refreshed.", ko: "그걸 하면 상쾌한 기분이 들어요." } },
      { idx: 10, label: "장소 묘사", kr: "집 근처에 제가 뭐뭐 하는 좋은 장소가 있어요.", en: "There is a great place near my house where I ... .",
        example: { en: "There is a great place near my house where I can go jogging.", ko: "집 근처에 제가 조깅하는 좋은 장소가 있어요." } }
    ]
  },
  {
    section: "02", title: "경험, 장소 & 추억",
    subtitle: "기억에 남는 경험, 재미있는 일, 예상치 못한 사건 묘사",
    patterns: [
      { idx: 11, label: "위치 설명", kr: "뭐뭐(은)는 제가 사는 곳에서 멀지 않은 곳에 있어요.", en: "... is located not far from where I live.",
        example: { en: "The park is located not far from where I live.", ko: "그 공원은 제가 사는 곳에서 멀지 않은 곳에 있어요." } },
      { idx: 12, label: "기억나는 경험", kr: "제가 뭐뭐 했을 때 기억에 남는 경험이 있어요.", en: "I remember one memorable experience when I ... .",
        example: { en: "I remember one memorable experience when I traveled to Jeju Island.", ko: "제가 제주도로 여행 갔을 때 기억에 남는 경험이 있어요." } },
      { idx: 13, label: "재미있는 일", kr: "제가 뭐뭐 했을 때 재미있는 일이 있었어요.", en: "Something interesting happened when I ... .",
        example: { en: "Something interesting happened when I visited my hometown last year.", ko: "제가 작년에 고향을 방문했을 때 재미있는 일이 있었어요." } },
      { idx: 14, label: "최고의 순간", kr: "제가 뭐뭐 했을 때 가장 기억에 남는 순간 중 하나였어요.", en: "It was one of the most memorable moments when I ... .",
        example: { en: "It was one of the most memorable moments when I graduated from college.", ko: "제가 대학교를 졸업했을 때 가장 기억에 남는 순간 중 하나였어요." } },
      { idx: 15, label: "문제 발생", kr: "그런데 제가 뭐뭐 했을 때 한 번 문제가 있었어요.", en: "However, I once had a problem when I ... .",
        example: { en: "However, I once had a problem when I went camping with my family.", ko: "그런데 제가 가족과 캠핑을 갔을 때 한 번 문제가 있었어요." } },
      { idx: 16, label: "돌발 상황", kr: "제가 뭐뭐 했을 때 예상치 못한 일이 있었어요.", en: "Something unexpected happened when I ... .",
        example: { en: "Something unexpected happened when I was driving home.", ko: "제가 집에 운전해서 가고 있을 때 예상치 못한 일이 있었어요." } },
      { idx: 17, label: "과거 비교", kr: "예전에 비하면 요즘 사람들은 뭐뭐 훨씬 더 많이 해요.", en: "Compared to the past, people ... much more these days.",
        example: { en: "Compared to the past, people order food delivery much more these days.", ko: "예전에 비하면 요즘 사람들은 배달 음식을 훨씬 더 많이 시켜요." } },
      { idx: 18, label: "요즘 트렌드", kr: "요즘 더 많은 사람들이 뭐뭐 하는 걸 즐겨요.", en: "These days more people enjoy ... .",
        example: { en: "These days more people enjoy working out at home.", ko: "요즘 더 많은 사람들이 집에서 운동하는 걸 즐겨요." } },
      { idx: 19, label: "선호 이유", kr: "그래서 저는 뭐뭐 하는 걸 정말 좋아해요.", en: "That's why I enjoy ... so much.",
        example: { en: "That's why I enjoy cooking on weekends so much.", ko: "그래서 저는 주말에 요리하는 걸 정말 좋아해요." } },
      { idx: 20, label: "삶의 일부", kr: "그래서 뭐뭐 하는 게 제 삶의 중요한 부분이 됐어요.", en: "That's why ... has become an important part of my life.",
        example: { en: "That's why exercising regularly has become an important part of my life.", ko: "그래서 규칙적으로 운동하는 게 제 삶의 중요한 부분이 됐어요." } }
    ]
  },
  {
    section: "03", title: "빈도 · 선호 & 과거 비교",
    subtitle: "현재의 습관, 과거와 현재의 비교, 선호하는 활동 이유",
    patterns: [
      { idx: 21, label: "빈도 감소", kr: "저는 예전만큼 뭐뭐 하지는 않아요.", en: "I don't ... as often as before.",
        example: { en: "I don't go to the movies as often as before.", ko: "저는 예전만큼 영화관에 가지는 않아요." } },
      { idx: 22, label: "여전한 선호", kr: "그래도 기회가 있으면 여전히 뭐뭐 하는 걸 즐겨요.", en: "But I still enjoy ... whenever I have the chance.",
        example: { en: "But I still enjoy reading books whenever I have the chance.", ko: "그래도 기회가 있으면 여전히 책 읽는 걸 즐겨요." } },
      { idx: 23, label: "전반적 선호", kr: "전반적으로 저는 뭐뭐 하는 걸 정말 좋아해요.", en: "Overall, I really enjoy ... .",
        example: { en: "Overall, I really enjoy spending time outdoors.", ko: "전반적으로 저는 야외에서 시간을 보내는 걸 정말 좋아해요." } },
      { idx: 24, label: "휴식 방법", kr: "저에게 뭐뭐 하는 건 정말 좋은 휴식 방법이에요.", en: "For me, ... is a great way to relax.",
        example: { en: "For me, taking a walk in the park is a great way to relax.", ko: "저에게 공원에서 산책하는 건 정말 좋은 휴식 방법이에요." } },
      { idx: 25, label: "사회 이슈", kr: "요즘 사람들은 뭐뭐 에 대해 많이 이야기해요.", en: "These days people talk a lot about ... .",
        example: { en: "These days people talk a lot about work-life balance.", ko: "요즘 사람들은 워라밸에 대해 많이 이야기해요." } },
      { idx: 26, label: "중요성", kr: "저는 뭐뭐 이 우리 삶에서 매우 중요하다고 생각해요.", en: "I think ... is very important in our lives.",
        example: { en: "I think technology is very important in our lives.", ko: "저는 기술이 우리 삶에서 매우 중요하다고 생각해요." } },
      { idx: 27, label: "일상 사용", kr: "많은 사람들이 일상에서 뭐뭐 을 사용해요.", en: "Many people use ... in their daily lives.",
        example: { en: "Many people use smartphones in their daily lives.", ko: "많은 사람들이 일상에서 스마트폰을 사용해요." } },
      { idx: 28, label: "장점", kr: "뭐뭐 의 장점 중 하나는 편리함이에요.", en: "One advantage of ... is convenience.",
        example: { en: "One advantage of online shopping is convenience.", ko: "온라인 쇼핑의 장점 중 하나는 편리함이에요." } },
      { idx: 29, label: "단점", kr: "하지만 뭐뭐 에도 단점이 있어요.", en: "However, ... also has some disadvantages.",
        example: { en: "However, social media also has some disadvantages.", ko: "하지만 소셜 미디어에도 단점이 있어요." } },
      { idx: 30, label: "예시 들기", kr: "뭐뭐 의 한 가지 예는 ... 입니다.", en: "One example of ... is ... .",
        example: { en: "One example of public transportation is the subway.", ko: "대중교통의 한 가지 예는 지하철입니다." } }
    ]
  },
  {
    section: "04", title: "변화 · 예시 & 교훈",
    subtitle: "사회적 변화, 구체적인 예시 들기, 경험을 통해 배운 점",
    patterns: [
      { idx: 31, label: "추가 예시", kr: "뭐뭐의 또 다른 예는 뭐뭐 입니다.", en: "Another example of ... is ... .",
        example: { en: "Another example of public transportation is buses.", ko: "대중교통의 또 다른 예는 버스입니다." } },
      { idx: 32, label: "과거 비교", kr: "예전에 비하면 뭐뭐 는 많이 바뀌었어요.", en: "Compared to the past, ... has changed a lot.",
        example: { en: "Compared to the past, the way people communicate has changed a lot.", ko: "예전에 비하면 사람들이 소통하는 방식은 많이 바뀌었어요." } },
      { idx: 33, label: "긍정 효과", kr: "뭐뭐 덕분에 우리의 삶은 더 편리해졌어요.", en: "Because of ..., our lives have become more convenient.",
        example: { en: "Because of smartphones, our lives have become more convenient.", ko: "스마트폰 덕분에 우리의 삶은 더 편리해졌어요." } },
      { idx: 34, label: "우려 사항", kr: "하지만 어떤 사람들은 뭐뭐 에 대해 걱정하기도 해요.", en: "However, some people worry about ... .",
        example: { en: "However, some people worry about privacy issues.", ko: "하지만 어떤 사람들은 개인정보 문제에 대해 걱정하기도 해요." } },
      { idx: 35, label: "관련 경험", kr: "저는 뭐뭐 와 관련된 경험이 하나 기억나요.", en: "I remember an experience related to ... .",
        example: { en: "I remember an experience related to using public transportation abroad.", ko: "저는 해외에서 대중교통을 이용했던 것과 관련된 경험이 하나 기억나요." } },
      { idx: 36, label: "돌발 상황", kr: "제가 뭐뭐 를 경험했을 때 예상치 못한 일이 있었어요.", en: "Something unexpected happened when I experienced ... .",
        example: { en: "Something unexpected happened when I experienced a flight delay.", ko: "제가 비행기 연착을 경험했을 때 예상치 못한 일이 있었어요." } },
      { idx: 37, label: "난관 봉착", kr: "처음에는 뭐뭐 를 어떻게 해결해야 할지 몰랐어요.", en: "At first, I didn't know how to handle ... .",
        example: { en: "At first, I didn't know how to handle the situation.", ko: "처음에는 그 상황을 어떻게 해결해야 할지 몰랐어요." } },
      { idx: 38, label: "해결책 발견", kr: "하지만 결국 뭐뭐 에 대한 해결책을 찾았어요.", en: "But eventually, I found a solution for ... .",
        example: { en: "But eventually, I found a solution for the problem.", ko: "하지만 결국 그 문제에 대한 해결책을 찾았어요." } },
      { idx: 39, label: "해결 완료", kr: "결국 뭐뭐 는 잘 해결됐어요.", en: "In the end, everything worked out well with ... .",
        example: { en: "In the end, everything worked out well with the situation.", ko: "결국 그 상황은 잘 해결됐어요." } },
      { idx: 40, label: "교훈", kr: "그 경험을 통해 저는 뭐뭐 를 배웠어요.", en: "Because of that experience, I learned ... .",
        example: { en: "Because of that experience, I learned to stay calm under pressure.", ko: "그 경험을 통해 저는 침착하게 대처하는 법을 배웠어요." } }
    ]
  },
  {
    section: "05", title: "미래 전망 & 중요성",
    subtitle: "앞으로의 변화 예측, 현대 사회에서의 중요성 강조",
    patterns: [
      { idx: 41, label: "미래 예측", kr: "앞으로 뭐뭐는 더 흔해질 것 같아요.", en: "In the future, I think ... will become more common.",
        example: { en: "In the future, I think remote work will become more common.", ko: "앞으로 재택근무는 더 흔해질 것 같아요." } },
      { idx: 42, label: "사용 전망", kr: "앞으로 더 많은 사람들이 뭐뭐를 사용할 것 같아요.", en: "More people will probably use ... in the future.",
        example: { en: "More people will probably use electric cars in the future.", ko: "앞으로 더 많은 사람들이 전기차를 사용할 것 같아요." } },
      { idx: 43, label: "지속 발전", kr: "저는 뭐뭐가 계속 발전할 거라고 생각해요.", en: "I believe ... will continue to grow.",
        example: { en: "I believe AI technology will continue to grow.", ko: "저는 인공지능 기술이 계속 발전할 거라고 생각해요." } },
      { idx: 44, label: "중요성 강조", kr: "그래서 뭐뭐는 현대 사회에서 중요해요.", en: "That's why ... is important in modern society.",
        example: { en: "That's why digital literacy is important in modern society.", ko: "그래서 디지털 활용 능력은 현대 사회에서 중요해요." } }
    ]
  },
  {
    section: "06", title: "롤플레이: 문의 · 예약 · 해결",
    subtitle: "전화 문의, 예약 하기/변경/취소, 문제 상황 설명 및 해결, 감사 표현",
    patterns: [
      { idx: 45, label: "문의 목적", kr: "뭐뭐에 대해 문의가 있어서 전화했습니다.", en: "Hi, I'm calling because I have a question about ... .",
        example: { en: "Hi, I'm calling because I have a question about my gym membership.", ko: "헬스장 회원권에 대해 문의가 있어서 전화했습니다." } },
      { idx: 46, label: "문의 요청", kr: "뭐뭐에 대해 문의드리고 싶습니다.", en: "I'd like to ask about ... .",
        example: { en: "I'd like to ask about the return policy.", ko: "환불 정책에 대해 문의드리고 싶습니다." } },
      { idx: 47, label: "정보 요청", kr: "뭐뭐에 대해 정보를 알려주실 수 있을까요?", en: "Could you give me some information about ... ?",
        example: { en: "Could you give me some information about the class schedule?", ko: "수업 일정에 대해 정보를 알려주실 수 있을까요?" } },
      { idx: 48, label: "예약 요청", kr: "뭐뭐을(를) 예약하고 싶습니다.", en: "I'd like to make a reservation for ... .",
        example: { en: "I'd like to make a reservation for a table for two.", ko: "두 명 자리를 예약하고 싶습니다." } },
      { idx: 49, label: "예약 변경", kr: "뭐뭐 예약을 변경하고 싶습니다.", en: "I'd like to change my reservation for ... .",
        example: { en: "I'd like to change my reservation for this Friday.", ko: "이번 주 금요일 예약을 변경하고 싶습니다." } },
      { idx: 50, label: "예약 취소", kr: "뭐뭐 예약을 취소해야 할 것 같습니다.", en: "I need to cancel my reservation for ... .",
        example: { en: "I need to cancel my reservation for tomorrow evening.", ko: "내일 저녁 예약을 취소해야 할 것 같습니다." } },
      { idx: 51, label: "예약 확인", kr: "뭐뭐 예약을 확인하고 싶습니다.", en: "I'd like to confirm my reservation for ... .",
        example: { en: "I'd like to confirm my reservation for next Monday.", ko: "다음 주 월요일 예약을 확인하고 싶습니다." } },
      { idx: 52, label: "가능 여부", kr: "뭐뭐가 가능한지 궁금합니다.", en: "I was wondering if ... is available.",
        example: { en: "I was wondering if a window seat is available.", ko: "창가 자리가 가능한지 궁금합니다." } },
      { idx: 53, label: "변경 문의", kr: "뭐뭐를 변경할 수 있을까요?", en: "Is it possible to change ... ?",
        example: { en: "Is it possible to change the delivery date?", ko: "배송 날짜를 변경할 수 있을까요?" } },
      { idx: 54, label: "내일 예약", kr: "내일 뭐뭐 예약할 수 있을까요?", en: "Could I make a reservation for ... tomorrow?",
        example: { en: "Could I make a reservation for two people tomorrow?", ko: "내일 두 명 예약할 수 있을까요?" } },
      { idx: 55, label: "시간 문의", kr: "뭐뭐는 몇 시에 시작하나요?", en: "What time does ... start?",
        example: { en: "What time does the movie start?", ko: "영화는 몇 시에 시작하나요?" } },
      { idx: 56, label: "가격 문의", kr: "뭐뭐 가격이 얼마인가요?", en: "How much does ... cost?",
        example: { en: "How much does the monthly membership cost?", ko: "월간 회원권 가격이 얼마인가요?" } },
      { idx: 57, label: "추천 요청", kr: "뭐뭐에 대해 추천해 주실 게 있나요?", en: "Do you have any recommendations for ... ?",
        example: { en: "Do you have any recommendations for a good restaurant nearby?", ko: "근처 좋은 식당에 대해 추천해 주실 게 있나요?" } },
      { idx: 58, label: "추천 요청", kr: "뭐뭐를 추천해 주실 수 있을까요?", en: "Could you recommend ... ?",
        example: { en: "Could you recommend a popular dish?", ko: "인기 있는 메뉴를 추천해 주실 수 있을까요?" } },
      { idx: 59, label: "의견 구하기", kr: "뭐뭐에는 어떤 걸 추천하시나요?", en: "What would you recommend for ... ?",
        example: { en: "What would you recommend for a first-time visitor?", ko: "처음 방문하는 사람에게는 어떤 걸 추천하시나요?" } },
      { idx: 60, label: "문제 발생", kr: "뭐뭐에 문제가 있습니다.", en: "I have a problem with ... .",
        example: { en: "I have a problem with my order.", ko: "제 주문에 문제가 있습니다." } },
      { idx: 61, label: "문제 발생", kr: "뭐뭐에 문제가 생긴 것 같습니다.", en: "Something went wrong with ... .",
        example: { en: "Something went wrong with my reservation.", ko: "제 예약에 문제가 생긴 것 같습니다." } },
      { idx: 62, label: "도움 요청", kr: "뭐뭐를 도와주실 수 있을까요?", en: "Could you help me with ... ?",
        example: { en: "Could you help me with this issue?", ko: "이 문제를 도와주실 수 있을까요?" } },
      { idx: 63, label: "해결 방법", kr: "뭐뭐를 어떻게 해야 할지 모르겠습니다.", en: "I'm not sure what to do about ... .",
        example: { en: "I'm not sure what to do about the broken item.", ko: "고장 난 물건을 어떻게 해야 할지 모르겠습니다." } },
      { idx: 64, label: "상세 설명", kr: "뭐뭐에 대해 자세히 설명해 주실 수 있을까요?", en: "Could you explain the details of ... ?",
        example: { en: "Could you explain the details of the refund process?", ko: "환불 절차에 대해 자세히 설명해 주실 수 있을까요?" } },
      { idx: 65, label: "동의/수락", kr: "뭐뭐로 하면 괜찮을 것 같습니다.", en: "That sounds good for ... .",
        example: { en: "That sounds good for the new schedule.", ko: "새 일정으로 하면 괜찮을 것 같습니다." } },
      { idx: 66, label: "강한 긍정", kr: "뭐뭐로 하면 좋겠습니다.", en: "That would be great for ... .",
        example: { en: "That would be great for next week.", ko: "다음 주로 하면 좋겠습니다." } },
      { idx: 67, label: "감사 표현", kr: "뭐뭐를 도와주셔서 정말 감사합니다.", en: "I really appreciate your help with ... .",
        example: { en: "I really appreciate your help with this matter.", ko: "이 일을 도와주셔서 정말 감사합니다." } },
      { idx: 68, label: "도움 인정", kr: "뭐뭐를 해결하는 데 정말 도움이 됐습니다.", en: "That really helped with ... .",
        example: { en: "That really helped with my problem.", ko: "제 문제를 해결하는 데 정말 도움이 됐습니다." } },
      { idx: 69, label: "이해 표현", kr: "이제 뭐뭐를 더 잘 이해했습니다.", en: "Now I understand ... better.",
        example: { en: "Now I understand the process better.", ko: "이제 그 절차를 더 잘 이해했습니다." } },
      { idx: 70, label: "안도/해결", kr: "뭐뭐를 해결해서 다행입니다.", en: "I'm glad we solved ... .",
        example: { en: "I'm glad we solved this issue.", ko: "이 문제를 해결해서 다행입니다." } },
      { idx: 71, label: "거듭 감사", kr: "뭐뭐를 도와주셔서 다시 한번 감사합니다.", en: "Thanks again for helping with ... .",
        example: { en: "Thanks again for helping with my reservation.", ko: "제 예약을 도와주셔서 다시 한번 감사합니다." } },
      { idx: 72, label: "도움 인정", kr: "뭐뭐에 정말 많은 도움이 됐습니다.", en: "That was very helpful for ... .",
        example: { en: "That was very helpful for me.", ko: "저에게 정말 많은 도움이 됐습니다." } }
    ]
  }
];

// 표현 노트: 구문 + 뉘앙스/사용법 설명 (자유롭게 계속 추가)
// 필드는 expression만 필수이고 나머지(meaning/description/nuance/example)는 있는 것만 채우면 됨
const EXPRESSIONS = [
  {
    expression: "which is kind of ~",
    description: "앞 문장 전체를 부드럽게 평가/설명할 때 사용",
    example: "I forgot her birthday, which is kind of embarrassing.",
    nuance: "kind of = 단정적이지 않게 완화하는 뉘앙스"
  },
  {
    expression: "things are a bit different",
    meaning: "상황이/사정이 좀 달라",
    description: "변화가 있었음을 완곡하게 표현할 때"
  },
  {
    expression: "don't get to + 동사",
    nuance: "단순 \"안 한다\"가 아니라 \"기회/여유가 없어서 못 한다\"는 뉘앙스",
    example: "we don't get to spend much time together"
  },
  {
    expression: "지각동사 구문 (hear/see/feel + 목적어 + V-ing/동사원형)",
    meaning: "그 대상이 ~하는 걸 (듣다/보다/느끼다)",
    nuance: "V-ing: 행동이 진행 중인 느낌 (더 흔하게 쓰임) / 동사원형: 행동을 처음부터 끝까지 강조",
    example: [
      "I saw him crossing the street.",
      "We heard footsteps stomping upstairs.",
      "I felt someone tapping my shoulder."
    ]
  },
  {
    expression: "사물주어 + bother/annoy + 사람목적어",
    description: "한국어는 사람이 주어(\"내가 신경쓰인다\"), 영어는 사물이 주어(\"그것이 나를 신경쓰이게 한다\")",
    example: ["This bothers me.", "That annoys me.", "It surprised us."]
  },
  {
    expression: "make a big deal out of it",
    description: "관용표현: 그것을 크게 문제 삼다 / 과장하다",
    example: "Let's not make a big deal out of this."
  },
  {
    expression: "필러(시간 끌기) 표현: you know, I mean, well, actually",
    description: "문장 시작이나 전환할 때 한 번씩만 자연스럽게 사용",
    nuance: "추천 조합: Well(시작) + you know(중간) + so(전환)"
  }
];

// 위기 대응 표현 (출처: 「동공 지진으로부터 그대를 구해줄 표현들」)
const SURVIVAL_PHRASES = [
  {
    emoji: "⏳", title: "잠깐 시간이 필요한 경우",
    desc: "할 말은 생각나는데 시간을 끌 때 유용해요. 인트로에 자신 없을 땐 질문을 되물어보세요.",
    phrases: [
      { tag: "시간끌기", en: "Well, let me think.", ko: "음, 생각 좀 해볼게요" },
      { tag: "시간끌기", en: "Give me a second.", ko: "잠깐만 시간을 주세요" },
      { tag: "시간끌기", en: "Hold on, I am thinking, I am thinking.", ko: "잠시만요, 지금 생각 중이에요" },
      { tag: "시간끌기", en: "I don't know.", ko: "글쎄요" },
      { tag: "질문 되묻기", en: "What do I do before going to the movies? I do just like what others do.", ko: "제가 영화 보러 가기 전에 무엇을 하냐고요? 다른 사람들이 하는 걸 하지요" }
    ]
  },
  {
    emoji: "😅", title: "어려운 문제가 출제된 경우",
    desc: "어렵거나 돌발적인 문제로 당황했다면, 살짝 투정 부리거나 감정에 호소해 보세요.",
    phrases: [
      { tag: "투정", en: "Why do you ask me this kind of question?", ko: "왜 제게 이런 질문을 하는 거죠?" },
      { tag: "투정", en: "Are you kidding me?", ko: "장난해요?" },
      { tag: "투정", en: "Do you really think I remember? Seriously, I can't remember.", ko: "제가 진짜 기억할 거라고 생각하는 거예요? 진짜로 기억이 안 나요" },
      { tag: "감정호소", en: "Wow, this is way too tough for me.", ko: "와, 이건 진짜 저에겐 너무 어렵네요" },
      { tag: "감정호소", en: "Gee... I have not thought about it at all.", ko: "아이고, 이런 건 전혀 생각해 본 적이 없어요" },
      { tag: "재도전", en: "Umm... this is a tricky question, but let me give it a try.", ko: "음, 이건 좀 까다로운 문제네요, 하지만 한번 해볼게요" }
    ]
  },
  {
    emoji: "🔄", title: "준비해 간 답변과 딱 맞지 않는 경우",
    desc: "다른 사람 습관을 물어보면 주어를 '나'로 바꿔서 답하고, 도저히 답할 수 없으면 준비한 답변 중 가장 비슷한 걸로 대신하세요.",
    phrases: [
      { tag: "주어 바꾸기", en: "Well, I do not know about other people, but in my case, I try to eat healthy food.", ko: "글쎄요, 다른 사람들에 대해선 잘 모르겠고요, 제 경우에는요, 건강한 음식을 먹으려 해요" },
      { tag: "답변 대체", en: "Instead of going to the movies, can I tell you about the concert that I recently went to? Cause I did not get a chance to watch a movie lately.", ko: "영화 보러 가는 얘기 대신 최근에 다녀온 콘서트에 대해서 말해도 될까요? 왜냐면 최근에 영화 볼 기회가 없었거든요" }
    ]
  },
  {
    emoji: "⏭️", title: "다음 문제로 넘어가고 싶은 경우",
    desc: "다음 문제로 넘기기 전에 답하려고 노력했다는 인상을 주는 게 좋아요. 1, 2번 표현을 먼저 말한 후 넘어가는 것도 좋은 방법이에요.",
    phrases: [
      { tag: "패스하기", en: "You know what? I have not seriously given a thought about it. I will have to pass this one.", ko: "있잖아요, 이것에 대해서는 심각하게 생각해 본 적이 없어요. 이 문제는 넘겨야겠네요" },
      { tag: "핑계대기", en: "Omg, it is really noisy around me. I could not hear your question, can I move on?", ko: "세상에, 제 주위가 너무 시끄럽네요. 질문을 못 들었어요. 다음 질문으로 넘어가도 될까요?" },
      { tag: "역질문", en: "You know what? I guess I have been really fortunate. No, I have never had any similar experiences before. Well, have you ever experienced anything like this?", ko: "있잖아요, 아마 제가 참 운이 좋았나 봐요. 아뇨, 저는 전에 그런 비슷한 경험을 해본 적이 없어요. 음, 혹시 당신은 그런 비슷한 경험이 있나요?" }
    ]
  }
];

const COMBO_TEMPLATES = [
  {
    emoji: "⚖️", title: "비교형",
    desc: "두 대상(장르·시대·유형 등)을 비교하는 유형이에요. 도입 → 공통점 → 차이점 → 마무리 순서로 답하세요.",
    skeleton: [
      { label: "도입", en: "I'd like to compare [A] to(=with) [B]." },
      { label: "공통점", en: "They have something in common in that [공통점]." },
      { label: "차이점", en: "As for differences, first, [차이점 1]. For example, [A]는 ~하지만 [B]는 ~해요." },
      { label: "차이점 대조", en: "Also, / On the other hand, [차이점 2]." },
      { label: "마무리", en: "I like [A] better because [이유]." }
    ]
  },
  {
    emoji: "📰", title: "이슈/트렌드형",
    desc: "사회적 이슈나 요즘 트렌드에 대한 의견을 묻는 유형이에요. 이슈 → 현상 설명 → 예시 → 결론 순서로 답하세요.",
    skeleton: [
      { label: "이슈", en: "We have some issues of [주제] due to [원인]. / [주제] play(s) many roles these days." },
      { label: "현상 설명", en: "[왜/어떻게 이런 일이 생기는지 1~2문장]" },
      { label: "예시(객관)", en: "According to a survey, about 70% of people who [관련 행동] report that [관련 결과]." },
      { label: "예시(주관, 선택)", en: "In my case, [개인 경험 1~2문장]." },
      { label: "결론", en: "To handle the issues, [해결책/전망]. / That's why [결론]." }
    ]
  },
  {
    emoji: "🔄", title: "변화형",
    desc: "예전과 지금을 비교하며 변화를 설명하는 유형이에요. 과거 → 전환 → 현재 순서로 답하세요.",
    skeleton: [
      { label: "도입", en: "[As far as I remember / In the past], [주제]는 [과거 상태]." },
      { label: "과거 세부", en: "[과거 세부사항 1~2개]" },
      { label: "전환", en: "Now, / However, [전환]." },
      { label: "현재", en: "[현재 상태 + 과거 대비 개선점]" }
    ]
  }
];
