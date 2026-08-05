const TOPICS = [
  {
    id: 1, emoji: "🏠", nameKo: "집",
    questions: [
      {
        id: 1,
        updated: true,
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
        updated: true,
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
    questions: [
      {
        id: 43,
        updated: true,
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
        updated: true,
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
        updated: true,
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
          { en: "These cafes usually have a lot of seating, so you'll be surprised at how spacious Korean cafes are.", ko: "이런 카페들은 좌석이 많아서 얼마나 넓은지 보면 놀랄 거예요." },
          { en: "When you enter a typical cafe, you'll first see the counter where you can order and pick up your coffee.", ko: "일반적인 카페에 들어가면 먼저 주문하고 픽업할 수 있는 카운터가 보여요." },
          { en: "Behind the counter, there are menu boards on the wall.", ko: "카운터 뒤에는 메뉴판이 벽에 걸려 있어요." },
          { en: "Next to the counter, you can find some desserts and snacks.", ko: "카운터 옆에는 디저트와 스낵도 있어요." },
          { en: "The staff always smiles and offers good service, so the overall atmosphere is very warm and friendly.", ko: "직원들이 항상 웃으며 좋은 서비스를 제공해서 전체적인 분위기가 따뜻하고 친근해요." }
        ],
        pronunciation: [
          { en: "Cafes in Korea are usually located in commercial areas.", ko: "카페즈 인 코리아 아 유주얼리 로케이티드 인 커머셜 에리어즈" },
          { en: "We have many major coffee chains like Starbucks, Coffee Bean, and Tom N Toms.", ko: "위 해브 메니 메이저 커피 체인즈 라이크 스타벅스, 커피빈, 앤 탐앤탐스" },
          { en: "These cafes usually have a lot of seating,", ko: "디즈 카페즈 유주얼리 해버 라러브 시팅" },
          { en: "so you'll be surprised at how spacious Korean cafes are.", ko: "소 유일비 서프라이즈드 앳 하우 스페이셔스 코리안 카페즈 아" },
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
          { en: "The café I often go to is Starbucks, located near my house.", ko: "제가 자주 가는 카페는 집 근처 스타벅스예요." },
          { en: "It's big enough to accommodate about 100 people.", ko: "100명 정도 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I keep going there.", ko: "자주 가는 이유가 몇 가지 있어요." },
          { en: "First, it's only about a 10-minute walk from my house.", ko: "첫째, 집에서 걸어서 10분밖에 안 걸려요." },
          { en: "Also, the facilities are better than other cafes — clean restrooms, a big parking lot, free Wi-Fi, and a nice interior.", ko: "다른 카페보다 시설도 좋아요. 깨끗한 화장실, 넓은 주차장, 무료 와이파이, 예쁜 인테리어가 있어요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 가기 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The café I often go to is Starbucks,", ko: "더 카페 아이 오픈 고투 이즈 스타벅스" },
          { en: "located near my house.", ko: "로케이티드 니어 마이 하우스" },
          { en: "It's big enough to accommodate about 100 people.", ko: "잇츠 빅 이너프 투 어카머데이트 어바웃 원헌드레드 피플" },
          { en: "There are a few reasons I keep going there.", ko: "데어라 퓨 리즌즈 아이 킵 고잉 데어" },
          { en: "First, it's only about a 10-minute walk from my house.", ko: "퍼스트, 잇츠 온리 어바웃어 텐미닛 웍 프럼 마이 하우스" },
          { en: "Also, the facilities are better than other cafes —", ko: "얼소, 더 퍼실러티즈 아 베러 댄 아더 카페즈" },
          { en: "clean restrooms, a big parking lot, free Wi-Fi, and a nice interior.", ko: "클린 레스트룸즈, 어 빅 파킹랏, 프리 와이파이, 앤어 나이스 인테리어" },
          { en: "Overall, it's a great place to visit.", ko: "오버롤, 잇츠어 그레잇 플레이스 투 비짓" }
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
          { en: "Before that, I didn't know much about cafés or coffee, and I never felt the need to learn.", ko: "그 전까지는 카페나 커피에 대해 잘 몰랐고, 알아야 할 필요성도 못 느꼈어요." },
          { en: "One day, my best friend Looda took me to a café and suggested we get some coffee.", ko: "어느 날 가장 친한 친구 루다가 저를 카페에 데려가서 커피를 마시자고 제안했어요." },
          { en: "At first, I thought sitting at a café was boring, and even ordering felt difficult.", ko: "처음엔 카페에 앉아 있는 게 지루하다고 생각했고, 주문하는 것조차 어렵게 느껴졌어요." },
          { en: "On top of that, the coffee I drank tasted really bitter.", ko: "게다가 마신 커피도 정말 썼어요." },
          { en: "But later on, I ended up having fun and relieving stress while chatting with my friend.", ko: "하지만 나중에는 친구와 이야기하면서 재미있고 스트레스도 풀리더라고요." },
          { en: "Since that day, I've enjoyed going to cafés, and now I visit at least once a week.", ko: "그날 이후로 카페 가는 걸 즐기게 됐고, 지금은 적어도 일주일에 한 번은 가요." }
        ],
        pronunciation: [
          { en: "I first went to a café when I was in college.", ko: "아이 퍼스트 웬투어 카페 웬 아이 워즈 인 칼리지" },
          { en: "Before that, I didn't know much about cafés or coffee,", ko: "비포댓, 아이 디든 노우 머치 어바웃 카페즈 오어 커피" },
          { en: "and I never felt the need to learn.", ko: "앤 아이 네버 펠트 더 니투런" },
          { en: "One day, my best friend Looda took me to a café", ko: "원 데이, 마이 베스트 프렌드 루다 툭미 투어 카페" },
          { en: "and suggested we get some coffee.", ko: "앤 서제스티드 위 겟 썸 커피" },
          { en: "At first, I thought sitting at a café was boring,", ko: "앳 퍼스트, 아이 쏫 시딩 앳어 카페 워즈 보링" },
          { en: "and even ordering felt difficult.", ko: "앤 이븐 오더링 펠트 디피컬트" },
          { en: "On top of that, the coffee I drank tasted really bitter.", ko: "온탑 어브 댓, 더 커피 아이 드랭크 테이스티드 릴리 비터" },
          { en: "But later on, I ended up having fun and relieving stress", ko: "벗 레이러 온, 아이 엔디덥 해빙 펀 앤 릴리빙 스트레스" },
          { en: "while chatting with my friend.", ko: "와일 채링 윗마이 프렌드" },
          { en: "Since that day, I've enjoyed going to cafés,", ko: "신스 댓 데이, 아이브 인조이드 고잉 투 카페즈" },
          { en: "and now I visit at least once a week.", ko: "앤 나우 아이 비짓 앳리스트 원스어 윅" }
        ],
        warnings: [
          { word: "college", guide: "칼리지" },
          { word: "bitter", guide: "비터" },
          { word: "relieving", guide: "릴리빙" },
          { word: "since", guide: "신스" }
        ]
      }
    ]
  },
  {
    id: 25, emoji: "🏦", nameKo: "은행",
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
