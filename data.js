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
          { en: "Well, my family really enjoys spending time together at home.", ko: "저희 가족은 집에서 함께 시간 보내는 걸 정말 좋아해요." },
          { en: "On weekdays, we're usually busy with work and school, so we don't get to spend much time together.", ko: "평일에는 보통 일과 학교 때문에 바빠서, 함께 시간을 많이 못 보내요." },
          { en: "After dinner, we sometimes watch TV or talk about our day, which is kind of our small routine.", ko: "저녁 먹고 나서 가끔 TV를 보거나 하루 얘기를 나누는데, 그게 저희만의 작은 루틴 같은 거예요." },
          { en: "But on weekends, things are a bit different because we have more free time.", ko: "근데 주말에는 좀 다른데, 자유 시간이 더 많거든요." },
          { en: "I usually play Pokémon on the Nintendo Switch or Minecraft with my son, and honestly, those moments feel really special to me.", ko: "저는 보통 닌텐도 스위치로 포켓몬이나 마인크래프트를 아들이랑 하는데, 솔직히 그 순간들이 저한테는 정말 특별하게 느껴져요." },
          { en: "Anyway, I think that's the happiest time of my week.", ko: "아무튼, 그게 제 한 주 중 가장 행복한 시간인 것 같아요." }
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
          { en: "Anyway, I think that's the happiest time of my week.", ko: "애니웨이, 아이 씽크 댓츠 더 해피어스트 타임어브 마이 윅" }
        ],
        warnings: [
          { word: "usually", guide: "유주얼리" }, { word: "get to", guide: "겟투" },
          { word: "kind of", guide: "카인더브" }, { word: "happiest", guide: "해피어스트" }
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
          { en: "I live with my wife and my son.", ko: "저는 아내와 아들과 함께 살고 있어요." },
          { en: "We're all busy, so we don't have much time together.", ko: "다들 바빠서 함께 보내는 시간이 많지 않아요." },
          { en: "We barely have dinner or watch TV together.", ko: "저녁 식사도 같이 하거나 TV를 같이 보는 일도 거의 없어요." },
          { en: "However, on weekends, we try to split the household chores.", ko: "하지만 주말에는 집안일을 나눠서 하려고 해요." },
          { en: "Actually, my wife does most of the household chores.", ko: "사실 집안일 대부분은 아내가 하고 있어요." },
          { en: "For example, she makes meals, does the dishes, cleans up the house, and so on.", ko: "예를 들면 아내가 식사를 준비하고, 설거지하고, 집 청소를 하는 등의 일을 해요." },
          { en: "So, she always feels tired and exhausted.", ko: "그래서 아내는 항상 피곤하고 지쳐 있어요." },
          { en: "I try to help her by taking out the garbage and recycling.", ko: "저는 쓰레기 버리기랑 분리수거를 하면서 아내를 도우려고 해요." },
          { en: "Sometimes, I want to skip them because they're a hassle.", ko: "가끔은 귀찮아서 건너뛰고 싶을 때도 있어요." },
          { en: "But when I think of my wife, I have to do them.", ko: "하지만 아내를 생각하면 해야만 해요." },
          { en: "My son has to put his toys away.", ko: "아들은 장난감을 정리해야 해요." },
          { en: "Sometimes, doing household chores is tiring, but it's worth it.", ko: "가끔 집안일이 힘들 때도 있지만, 그럴 만한 가치가 있어요." }
        ],
        pronunciation: [
          { en: "I live with my wife and my son.", ko: "아이 리브 윗 마이 와이프 앤 마이 선" },
          { en: "We're all busy, so we don't have much time together.", ko: "위어 올 비지, 소 위 돈 해브 머치 타임 투게더" },
          { en: "We barely have dinner or watch TV together.", ko: "위 베얼리 해브 디너 오어 왓치 티비 투게더" },
          { en: "However, on weekends, we try to split the household chores.", ko: "하우에버, 온 위켄즈, 위 트라이 투 스플릿 더 하우스홀드 초어즈" },
          { en: "Actually, my wife does most of the household chores.", ko: "액츄얼리, 마이 와이프 더즈 모스트 어브더 하우스홀드 초어즈" },
          { en: "For example, she makes meals, does the dishes,", ko: "퍼 이그잼플, 쉬 메익스 밀즈, 더즈더 디쉬즈" },
          { en: "cleans up the house, and so on.", ko: "클린즈업 더 하우스, 앤 소온" },
          { en: "So, she always feels tired and exhausted.", ko: "소, 쉬 올웨이즈 필즈 타이어드 앤 이그저스티드" },
          { en: "I try to help her by taking out the garbage and recycling.", ko: "아이 트라이 투 헬프허 바이 테이킹아웃 더 가비지 앤 리사이클링" },
          { en: "Sometimes, I want to skip them because they're a hassle.", ko: "썸타임즈, 아이 원투 스킵뎀 비커즈 데이어 어 해슬" },
          { en: "But when I think of my wife, I have to do them.", ko: "벗 웬 아이 씽커브 마이 와이프, 아이 해브투 두뎀" },
          { en: "My son has to put his toys away.", ko: "마이 선 해즈투 풋 히즈 토이즈 어웨이" },
          { en: "Sometimes, doing household chores is tiring, but it's worth it.", ko: "썸타임즈, 두잉 하우스홀드 초어즈 이즈 타이어링, 벗 잇츠 워쓰잇" }
        ],
        warnings: [
          { word: "household chores", guide: "하우스홀드 초어즈" },
          { word: "exhausted", guide: "이그저스티드" },
          { word: "hassle", guide: "해슬" },
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
      },
      {
        id: 164,
        question: "Banks have changed over time. Tell me about a bank you remember from your childhood. How is it different from the bank you visit now?",
        translation: "은행도 시간이 지나며 많이 변했죠. 어릴 때 기억나는 은행에 대해 말해 주세요. 지금 다니는 은행과 어떻게 다른가요?",
        type: "과거 비교",
        structure: ["도입: 은행도 많이 변함", "과거: 줄 서서 기다림, ATM 없음, 토요일까지 영업", "과거: 잔돈 없으면 불편", "현재: 평일만 영업하지만 ATM 24시간, 모바일뱅킹", "현재: 대기공간도 편해짐(커피/잡지)", "마무리"],
        script: [
          { en: "There have been quite a few changes in banks over the years.", ko: "은행도 시간이 지나면서 꽤 많이 바뀌었어요." },
          { en: "When I was a kid, I remember standing in a long line whenever I went to the bank with my mom.", ko: "어릴 때 엄마랑 은행에 가면 줄을 길게 서서 기다렸던 기억이 나요." },
          { en: "Back then, there were no ATMs, so people had to go inside the bank for even simple things like withdrawing money.", ko: "그때는 ATM기가 없어서 돈 찾는 것 같은 간단한 일도 은행 안에 들어가야 했어요." },
          { en: "Also, banks used to be open until Saturday.", ko: "그리고 예전엔 토요일까지 영업했어요." },
          { en: "Now, banks are only open on weekdays, but ATMs are available 24 hours a day.", ko: "지금은 평일에만 영업하지만, ATM은 24시간 이용할 수 있어요." },
          { en: "Plus, people can do most of their banking on their phones, so they don't even need to visit in person.", ko: "게다가 요즘은 휴대폰으로 대부분의 은행 업무를 볼 수 있어서 직접 갈 필요도 없어요." },
          { en: "The waiting area has changed too — now you can grab a coffee or read a magazine while you wait.", ko: "대기 공간도 달라졌어요 — 이제는 기다리는 동안 커피를 마시거나 잡지를 읽을 수 있어요." },
          { en: "Overall, banks feel a lot more convenient these days.", ko: "전반적으로 요즘 은행이 훨씬 편리해진 것 같아요." }
        ],
        pronunciation: [
          { en: "There have been quite a few changes in banks over the years.", ko: "데어브빈 콰이러 퓨 체인지즈 인뱅크스 오버더 이어즈" },
          { en: "When I was a kid, I remember standing in a long line whenever I went to the bank with my mom.", ko: "웬아이워저 키드, 아이리멤버 스탠딩 인어 롱라인 웬에버 아이웬투더뱅크 위드마이 맘" },
          { en: "Back then, there were no ATMs, so people had to go inside the bank for even simple things like withdrawing money.", ko: "백덴, 데어워노 에이티엠즈, 소피플 해투고 인사이더 뱅크 퍼 이븐 심플씽즈 라익 위드로잉 머니" },
          { en: "Also, banks used to be open until Saturday.", ko: "얼소, 뱅크스 유즈투비 오픈 언틸 새터데이" },
          { en: "Now, banks are only open on weekdays, but ATMs are available 24 hours a day.", ko: "나우, 뱅크스아 온리오픈 온 위크데이즈, 벗 에이티엠즈아 어베일러블 트웨니포 아워즈어데이" },
          { en: "Plus, people can do most of their banking on their phones, so they don't even need to visit in person.", ko: "플러스, 피플캔 두모스트어브데어 뱅킹 온데어 폰즈, 소데이돈 이븐니드 투비짓 인퍼슨" },
          { en: "The waiting area has changed too — now you can grab a coffee or read a magazine while you wait.", ko: "더웨이팅에리아 해즈체인지드 투, 나우유캔 그래버커피 오어 리더 매거진 와일유웨이트" },
          { en: "Overall, banks feel a lot more convenient these days.", ko: "오버롤, 뱅크스필 어랏모어 컨비니언트 디즈데이즈" }
        ],
        warnings: [
          { word: "convenient", guide: "컨비니언트" },
          { word: "available", guide: "어베일러블" },
          { word: "withdrawing", guide: "위드로잉" },
          { word: "magazine", guide: "매거진" }
        ]
      },
      {
        id: 165,
        question: "Sometimes, problems arise when dealing with the bank. Tell me about a time when you had a problem related to your bank.",
        translation: "은행 관련해서 가끔 문제가 생기기도 하죠. 은행과 관련해서 문제를 겪었던 때에 대해 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["약 1년 전, 공항 ATM에서 카드 인출 시도", "비행기 탑승 직전이었음", "카드 넣자마자 화면 멈춤, 카드 안 나옴", "은행에 전화했지만 응답 늦음", "결국 카드 없이 탑승, 여행 내내 현금만 사용", "마무리"],
        script: [
          { en: "About a year ago, I had a frustrating problem with my bank card.", ko: "약 1년 전에 은행 카드 때문에 짜증나는 일이 있었어요." },
          { en: "I was at the airport, waiting to board a flight, so I quickly stopped by an ATM to withdraw some cash.", ko: "비행기 탑승을 기다리다가 공항에서 잠깐 ATM에 들러 현금을 좀 찾으려고 했어요." },
          { en: "As soon as I inserted my card, the screen suddenly froze, and my card wouldn't come back out.", ko: "카드를 넣자마자 화면이 갑자기 멈추더니 카드가 다시 나오지 않았어요." },
          { en: "I called the bank right away, but I was put on hold for a long time.", ko: "바로 은행에 전화했는데, 오랫동안 대기해야 했어요." },
          { en: "Since I couldn't wait any longer, I had no choice but to board the flight without my card.", ko: "더 기다릴 수가 없어서 결국 카드 없이 비행기를 타야 했어요." },
          { en: "As a result, I had to get by with only cash for the entire trip.", ko: "그 결과 여행 내내 현금으로만 버텨야 했어요." },
          { en: "It was such an inconvenient experience, and now I always carry a backup card when I travel.", ko: "정말 불편한 경험이었고, 그 이후로는 여행 갈 때 항상 예비 카드를 챙겨요." }
        ],
        pronunciation: [
          { en: "About a year ago, I had a frustrating problem with my bank card.", ko: "어바우러 이어어고, 아이해더 프러스트레이팅 프라블럼 위드마이 뱅크카드" },
          { en: "I was at the airport, waiting to board a flight, so I quickly stopped by an ATM to withdraw some cash.", ko: "아이워즈앳디 에어포트, 웨이팅투보더 플라잇, 소아이 퀴클리 스탑드바이언 에이티엠 투위드로 썸캐시" },
          { en: "As soon as I inserted my card, the screen suddenly froze, and my card wouldn't come back out.", ko: "애즈순애즈 아이인서티드마이카드, 더스크린 서든리 프로즈, 앤마이카드 우든컴백아웃" },
          { en: "I called the bank right away, but I was put on hold for a long time.", ko: "아이콜드더뱅크 라잇어웨이, 벗아이워즈 풋온홀드 퍼러롱타임" },
          { en: "Since I couldn't wait any longer, I had no choice but to board the flight without my card.", ko: "신스아이쿠든 웨이트애니롱거, 아이해드노초이스 벗투보더 플라잇 위다웃마이카드" },
          { en: "As a result, I had to get by with only cash for the entire trip.", ko: "애저리절트, 아이해투겟바이 위드온리캐시 퍼디 인타이어 트립" },
          { en: "It was such an inconvenient experience, and now I always carry a backup card when I travel.", ko: "잇워즈 서치언 인컨비니언트 익스피어리언스, 앤나우아이올웨이즈 캐리어 백업카드 웬아이트래블" }
        ],
        warnings: [
          { word: "frustrating", guide: "프러스트레이팅" },
          { word: "inserted", guide: "인서티드" },
          { word: "inconvenient", guide: "인컨비니언트" },
          { word: "backup", guide: "백업" }
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
      },
      {
        id: 163,
        question: "Tell me what beaches typically look like in your country. What do they look like?",
        translation: "당신 나라의 해변이 일반적으로 어떤 모습인지 말해 주세요.",
        type: "일반 설명",
        structure: ["한국 해변은 해안가 위치", "해운대·광안리·경포대 등 유명 해변", "백사장 넓음", "파라솔·비치의자 대여소", "편의점·매점", "해변 근처 카페", "안전요원 + 안전한 분위기"],
        script: [
          { en: "Beaches in Korea are usually located along the coast, close to the sea.", ko: "한국의 해변은 보통 바다와 가까운 해안가를 따라 위치해 있어요." },
          { en: "We have many famous beaches like Haeundae, Gwangalli, and Gyeongpo Beach.", ko: "해운대, 광안리, 경포대 같은 유명한 해변들이 많아요." },
          { en: "These beaches usually have really wide, sandy shores, so you'll be surprised at how spacious they are.", ko: "이런 해변들은 보통 백사장이 정말 넓어서, 얼마나 넓은지 보면 놀랄 거예요." },
          { en: "When you arrive at a typical beach, you'll first see rental shops where you can rent parasols and beach chairs.", ko: "일반적인 해변에 도착하면 먼저 파라솔이랑 비치 의자를 빌릴 수 있는 대여소가 보여요." },
          { en: "Near the rental shops, there are convenience stores and small stands selling snacks.", ko: "대여소 근처에는 편의점이랑 간식을 파는 작은 매점들이 있어요." },
          { en: "You can also find cafes along the beach.", ko: "해변을 따라 카페들도 찾을 수 있어요." },
          { en: "Lifeguards are always watching the water and helping people, so the overall atmosphere feels very safe and friendly.", ko: "안전요원들이 항상 물을 지켜보면서 사람들을 도와줘서 전체적인 분위기가 안전하고 친근하게 느껴져요." }
        ],
        pronunciation: [
          { en: "Beaches in Korea are usually located along the coast, close to the sea.", ko: "비치즈 인 코리아 아 유주얼리 로케이티드 얼롱더 코스트, 클로스투더 씨" },
          { en: "We have many famous beaches like Haeundae, Gwangalli, and Gyeongpo Beach.", ko: "위 해브 메니 페이머스 비치즈 라이크 해운대, 광안리, 앤 경포 비치" },
          { en: "These beaches usually have really wide, sandy shores,", ko: "디즈 비치즈 유주얼리 해브 릴리 와이드, 샌디 쇼어즈" },
          { en: "so you'll be surprised at how spacious they are.", ko: "소 유일비 서프라이즈드 앳 하우 스페이셔스 데이 아" },
          { en: "When you arrive at a typical beach,", ko: "웬유 어라이브 앳어 티피컬 비치" },
          { en: "you'll first see rental shops where you can rent parasols and beach chairs.", ko: "유일 퍼스트 씨 렌탈 샵스 웨어 유캔 렌트 패러솔즈 앤 비치 체어즈" },
          { en: "Near the rental shops, there are convenience stores and small stands selling snacks.", ko: "니어더 렌탈 샵스, 데어라 컨비니언스 스토어즈 앤 스몰 스탠즈 셀링 스낵스" },
          { en: "You can also find cafes along the beach.", ko: "유캔 얼소 파인 카페이즈 얼롱더 비치" },
          { en: "Lifeguards are always watching the water and helping people,", ko: "라이프가즈 아 올웨이즈 워칭더 워러 앤 헬핑 피플" },
          { en: "so the overall atmosphere feels very safe and friendly.", ko: "소 디 오버롤 앳모스피어 필즈 베리 세이프 앤 프렌들리" }
        ],
        warnings: [
          { word: "located", guide: "로케이티드" },
          { word: "spacious", guide: "스페이셔스" },
          { word: "convenience", guide: "컨비니언스" },
          { word: "lifeguards", guide: "라이프가즈" }
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
        structure: ["자주 가는 곳: 만리포 해변(서해안)", "약 만 명 수용 가능한 규모", "집에서 차로 2시간 거리", "교통비 부담 적음", "다른 해변보다 시설 좋음: 호텔/식당/관광지/카페", "전반적으로 방문하기 좋은 곳"],
        script: [
          { en: "The place I often travel to domestically is Manripo Beach, on the west coast of Korea.", ko: "제가 국내 여행으로 자주 가는 곳은 한국 서해안에 있는 만리포 해변이에요." },
          { en: "It's big enough to hold about ten thousand people.", ko: "만 명 정도는 거뜬히 수용할 수 있을 만큼 커요." },
          { en: "There are a few reasons I like going there.", ko: "제가 자주 가는 데는 몇 가지 이유가 있어요." },
          { en: "First, it's pretty close to my place.", ko: "우선, 제가 사는 곳에서 꽤 가까워요." },
          { en: "It takes about two hours by car, so I don't need to spend much money on transportation.", ko: "차로 두 시간 정도 걸려서, 교통비를 많이 쓸 필요가 없어요." },
          { en: "Also, it has better facilities than other beaches.", ko: "또, 다른 해변들보다 시설이 좋아요." },
          { en: "For example, there are nice hotels, good restaurants, famous attractions, and beautiful cafes.", ko: "예를 들면, 좋은 호텔, 맛있는 식당, 유명한 관광지, 예쁜 카페들이 있어요." },
          { en: "Overall, it's a great place to visit.", ko: "전반적으로 방문하기 정말 좋은 곳이에요." }
        ],
        pronunciation: [
          { en: "The place I often travel to domestically", ko: "더 플레이스 아이 오픈 트래블 투 더메스티컬리" },
          { en: "is Manripo Beach, on the west coast of Korea.", ko: "이즈 만리포 비치, 온더 웨스트 코스트 어브 코리아" },
          { en: "It's big enough to hold about ten thousand people.", ko: "잇츠 빅 이너프 투 홀드 어바웃 텐 싸우전드 피플" },
          { en: "There are a few reasons I like going there.", ko: "데어라러 퓨 리즌즈 아이 라익 고잉데어" },
          { en: "First, it's pretty close to my place.", ko: "퍼스트, 잇츠 프리티 클로스 투 마이 플레이스" },
          { en: "It takes about two hours by car,", ko: "잇 테익스 어바웃 투 아워즈 바이 카" },
          { en: "so I don't need to spend much money on transportation.", ko: "소 아이 돈 니투 스펜드 머치 머니 온 트랜스포테이션" },
          { en: "Also, it has better facilities than other beaches.", ko: "얼소, 잇 해즈 베러 퍼실리티즈 댄 아더 비치즈" },
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
        structure: ["정해진 루틴을 따름", "1단계: 목적지+계획 결정", "2단계: 인터넷으로 정보 검색(호텔/식당/관광지/교통)", "3단계: 호텔+교통편 예약(인터넷이 빠르고 편리함)", "4단계: 출발 전 짐 싸기(옷/속옷/재킷/간식)", "마무리"],
        script: [
          { en: "When I get ready for a trip, I usually follow a certain routine.", ko: "여행 준비를 할 때, 저는 보통 정해진 루틴을 따라요." },
          { en: "First, I decide on the destination and the plan.", ko: "첫째, 목적지와 계획을 정해요." },
          { en: "After that, I search online for information about the place — nice hotels, good restaurants, famous attractions, and transportation.", ko: "그다음엔, 온라인으로 그 장소에 대한 정보를 찾아봐요 — 좋은 호텔, 맛있는 식당, 유명한 관광지, 교통편이요." },
          { en: "Then I book a hotel and transportation, usually online, because it's fast and convenient.", ko: "그다음엔 호텔이랑 교통편을 예약해요, 보통 온라인으로요. 빠르고 편리하니까요." },
          { en: "Before I leave, I pack my things — clothes, underwear, a light jacket, and some snacks.", ko: "떠나기 전에, 짐을 싸요 — 옷, 속옷, 가벼운 자켓, 간식 등등이요." },
          { en: "And that's basically my routine before a trip.", ko: "그게 기본적으로 제 여행 준비 루틴이에요." }
        ],
        pronunciation: [
          { en: "When I get ready for a trip,", ko: "웬아이 겟 레디 퍼러 트립" },
          { en: "I usually follow a certain routine.", ko: "아이 유주얼리 팔로우 어 서튼 루틴" },
          { en: "First, I decide on the destination and the plan.", ko: "퍼스트, 아이 디사이드 온더 데스티네이션 앤더 플랜" },
          { en: "After that, I search online for information about the place —", ko: "애프터댓, 아이 서치 온라인 퍼 인포메이션 어바웃더 플레이스" },
          { en: "nice hotels, good restaurants, famous attractions, and transportation.", ko: "나이스 호텔즈, 굿 레스토랑츠, 페이머스 어트랙션즈, 앤 트랜스포테이션" },
          { en: "Then I book a hotel and transportation, usually online,", ko: "덴 아이 북어 호텔 앤 트랜스포테이션, 유주얼리 온라인" },
          { en: "because it's fast and convenient.", ko: "비커즈 잇츠 패스트 앤 컨비니언트" },
          { en: "Before I leave, I pack my things —", ko: "비포 아이 리브, 아이 팩 마이 씽즈" },
          { en: "clothes, underwear, a light jacket, and some snacks.", ko: "클로즈, 언더웨어, 어 라잇 재킷, 앤 썸 스낵스" },
          { en: "And that's basically my routine before a trip.", ko: "앤 댓츠 베이시컬리 마이 루틴 비포러 트립" }
        ],
        warnings: [
          { word: "destination", guide: "데스티네이션" },
          { word: "transportation", guide: "트랜스포테이션" },
          { word: "convenient", guide: "컨비니언트" }
        ]
      },
      {
        id: 100,
        question: "Tell me about some of the trips you took in your youth. Where did you go, who with, and what did you do?",
        translation: "어릴 때 갔던 여행에 대해 말해 주세요. 어디로, 누구와 갔고, 뭘 했나요?",
        type: "과거 경험",
        structure: ["중학교 때 여행", "가족과 재밌는거 하려고", "속초 해변(동해안)", "커플들로 붐벼서 짜증", "도착 후 자리+짐정리", "수영/보트/아이스크림", "풍경+바다뷰에 감명", "먹으며 하루 얘기", "좋은 시간이었음"],
        script: [
          { en: "When I was in middle school, I had a memorable experience with a trip.", ko: "중학교 때, 여행에서 기억에 남는 경험이 있었어요." },
          { en: "At the time, my family wanted to do something fun, so we decided to go to the beach.", ko: "그때 가족이 뭔가 재밌는 걸 하고 싶어서 해변에 가기로 했어요." },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "한국 동해안에 있는 속초 해수욕장에 갔어요." },
          { en: "It was really crowded, especially with couples, so I was a bit annoyed.", ko: "정말 붐볐는데, 특히 커플들이 많아서 좀 짜증났어요." },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "도착하자마자 쉴 자리를 찾고 짐을 풀었어요." },
          { en: "Then we went swimming, rode a boat, and got some ice cream.", ko: "그다음엔 수영하고, 보트도 타고, 아이스크림도 먹었어요." },
          { en: "The scenery was amazing — I was especially impressed by the beautiful ocean view.", ko: "경치가 정말 좋았어요 — 특히 아름다운 바다 풍경에 감명받았어요." },
          { en: "After that, we grabbed some food and talked about our day.", ko: "그다음엔 뭔가 먹으면서 그날 하루에 대해 얘기했어요." },
          { en: "Well, it was such a great time!", ko: "정말 좋은 시간이었어요!" }
        ],
        pronunciation: [
          { en: "When I was in middle school,", ko: "웬 아이 워즈 인 미들 스쿨" },
          { en: "I had a memorable experience with a trip.", ko: "아이 해더 메모러블 익스피리언스 위더 트립" },
          { en: "At the time, my family wanted to do something fun,", ko: "앳더 타임, 마이 패밀리 원티드투두 썸씽 펀" },
          { en: "so we decided to go to the beach.", ko: "소 위 디사이디드 투고투더 비치" },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "위 웬투 속초 비치, 온디 이스트 코스트 어브 코리아" },
          { en: "It was really crowded, especially with couples,", ko: "잇 워즈 릴리 크라우디드, 이스페셜리 윗 커플즈" },
          { en: "so I was a bit annoyed.", ko: "소 아이 워저 빗 어노이드" },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "애즈 순애즈 위 갓데어, 위 파운더 스팟 투 레스트 앤 언팩트" },
          { en: "Then we went swimming, rode a boat, and got some ice cream.", ko: "덴 위 웬트 스위밍, 로더 보트, 앤 갓 썸 아이스크림" },
          { en: "The scenery was amazing —", ko: "더 씨너리 워저 메이징" },
          { en: "I was especially impressed by the beautiful ocean view.", ko: "아이 워즈 이스페셜리 임프레스트 바이더 뷰티풀 오션 뷰" },
          { en: "After that, we grabbed some food and talked about our day.", ko: "애프터댓, 위 그랩드 썸 푸드 앤 톡트 어바웃 아워 데이" },
          { en: "Well, it was such a great time!", ko: "웰, 잇 워즈 서치어 그레잇 타임" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "memorable", guide: "메모러블" },
          { word: "scenery", guide: "씨너리" },
          { word: "impressed", guide: "임프레스트" }
        ]
      },
      {
        id: 101,
        question: "You might have had an unexpected experience while traveling. Tell me about one unforgettable episode — when it happened, where you were, and who you were with.",
        translation: "여행 중 겪었던 예상치 못한 경험이 있을 거예요. 언제, 어디서, 누구와 있었는지부터 잊지 못할 에피소드 하나를 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["얼마 전 여행중 쇼핑몰서 있었던 일", "아내와 방문, 아내 화장실감", "문이 고장나서 머리 부딪힘", "화나서 직원에게 항의", "머리 아파서 병원감", "다행히 심각하지 않음", "지점장이 병원비+사과선물", "그날 하루 별로였음"],
        script: [
          { en: "Let me tell you about something that happened at a mall while I was on a trip a while ago.", ko: "얼마 전 여행 갔을 때 쇼핑몰에서 있었던 일을 말씀드릴게요." },
          { en: "I went there with my wife, and while we were looking around, she went to the restroom.", ko: "아내랑 같이 갔는데, 둘러보다가 아내가 화장실에 갔어요." },
          { en: "A few minutes later, when she came back, she looked really upset — the door was broken and had hit her on the head.", ko: "몇 분 후 아내가 돌아왔을 때 얼굴이 울상이었어요 — 문이 고장 나서 머리를 맞았대요." },
          { en: "So I got upset too, and I went straight to the staff and complained.", ko: "그래서 저도 화가 나서 바로 직원한테 항의했어요." },
          { en: "Since her head really hurt, we had to see a doctor.", ko: "아내 머리가 많이 아파서 병원에 가봐야 했어요." },
          { en: "Luckily, it wasn't too serious.", ko: "다행히 심각하진 않았어요." },
          { en: "After that, the manager paid the hospital bill and gave us a gift as an apology.", ko: "그 후에 지점장님이 병원비도 내주고 미안하다고 선물도 줬어요." },
          { en: "Still, it just wasn't a good day after that.", ko: "그래도 그 이후로 그날 하루가 별로였어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about something that happened at a mall", ko: "렛미 텔유 어바웃 썸씽 댓 해펀드 애러 몰" },
          { en: "while I was on a trip a while ago.", ko: "와일 아이워즈 온어 트립 어와일어고" },
          { en: "I went there with my wife, and while we were looking around,", ko: "아이 웬트 데어 윗마이 와이프, 앤 와일위워 룩킹어라운드" },
          { en: "she went to the restroom.", ko: "쉬 웬트투더 레스트룸" },
          { en: "A few minutes later, when she came back, she looked really upset —", ko: "어퓨 미닛츠 레이터, 웬쉬 케임백, 쉬 룩트 릴리 업셋" },
          { en: "the door was broken and had hit her on the head.", ko: "더 도어 워즈 브로큰 앤 해드 힛허 온더 헤드" },
          { en: "So I got upset too, and I went straight to the staff and complained.", ko: "소 아이 갓 업셋 투, 앤 아이 웬트 스트레이트 투더 스태프 앤 컴플레인드" },
          { en: "Since her head really hurt, we had to see a doctor.", ko: "신스 허 헤드 릴리 헛, 위 해드투 씨어 닥터" },
          { en: "Luckily, it wasn't too serious.", ko: "럭킬리, 잇 워즌트 투 시리어스" },
          { en: "After that, the manager paid the hospital bill", ko: "애프터댓, 더 매니저 페이드 더 하스피틀 빌" },
          { en: "and gave us a gift as an apology.", ko: "앤 게이버스 어 기프트 애즈언 어팔러지" },
          { en: "Still, it just wasn't a good day after that.", ko: "스틸, 잇 저스트 워즌트어 굿데이 애프터댓" }
        ],
        warnings: [
          { word: "broken", guide: "브로큰" },
          { word: "complained", guide: "컴플레인드" },
          { word: "hospital", guide: "하스피틀" },
          { word: "apology", guide: "어팔러지" }
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
        structure: ["옆집 사는 친구 허종 소개", "20년지기라 편함", "공통점 많아서 휴가 함께 보냄", "공통관심사: 야구 좋아함, 같은 팀에서 뜀(1루수/3루수)", "집에서 야구 경기 같이 봄", "좋은 친구가 있어 행운이라는 마무리"],
        script: [
          { en: "I'd like to talk about my best friend, Heo Jong, who lives right next door to me.", ko: "옆집에 사는 제 가장 친한 친구 허종에 대해 말씀드릴게요." },
          { en: "We've known each other for about twenty years now, ever since he moved into my neighborhood, so I feel really comfortable around him.", ko: "그가 저희 동네로 이사 왔을 때부터 알고 지낸 지 이제 한 20년 정도 됐는데, 그래서 정말 편해요." },
          { en: "I really enjoy spending my vacations with him since we have a lot in common.", ko: "저는 그와 휴가를 함께 보내는 게 정말 좋은데, 공통점이 많거든요." },
          { en: "For one, we both love baseball, so we actually play on the same team — I play first base, and he plays third base.", ko: "우선 둘 다 야구를 정말 좋아해서, 실제로 같은 팀에서 뛰어요 — 저는 1루수고, 그는 3루수예요." },
          { en: "We also love watching baseball games together at home, so overall I feel really lucky to have such a great friend.", ko: "또 집에서 같이 야구 경기 보는 것도 좋아하는데, 전반적으로 이런 좋은 친구가 있다는 게 정말 행운이라고 생각해요." }
        ],
        pronunciation: [
          { en: "I'd like to talk about my best friend, Heo Jong,", ko: "아이드 라익투 톡 어바웃 마이 베스트 프렌드, 허종" },
          { en: "who lives right next door to me.", ko: "후 리브즈 라잇 넥스트 도어투미" },
          { en: "We've known each other for about twenty years now,", ko: "위브 노운 이치아더 퍼러바웃 트웨니 이어즈 나우" },
          { en: "ever since he moved into my neighborhood,", ko: "에버 신스 히 무브드 인투마이 네이버후드" },
          { en: "so I feel really comfortable around him.", ko: "소 아이 필 릴리 컴퍼러블 어라운드힘" },
          { en: "I really enjoy spending my vacations with him since we have a lot in common.", ko: "아이 릴리 인조이 스펜딩 마이 베케이션즈 윗힘 신스 위 해버 랏인 커먼" },
          { en: "For one, we both love baseball,", ko: "퍼원, 위 보쓰 러브 베이스볼" },
          { en: "so we actually play on the same team —", ko: "소 위 액츄얼리 플레이 온더 세임 팀" },
          { en: "I play first base, and he plays third base.", ko: "아이 플레이 퍼스트 베이스, 앤히 플레이즈 써드 베이스" },
          { en: "We also love watching baseball games together at home,", ko: "위 얼소 러브 워칭 베이스볼 게임즈 투게더 앳홈" },
          { en: "so overall I feel really lucky to have such a great friend.", ko: "소 오버롤 아이 필 릴리 럭키투 해브 서치어 그레잇 프렌드" }
        ],
        warnings: [
          { word: "neighborhood", guide: "네이버후드" },
          { word: "comfortable", guide: "컴퍼러블" },
          { word: "actually", guide: "액츄얼리" },
          { word: "vacations", guide: "베케이션즈" }
        ]
      },
      {
        id: 103,
        question: "Tell me about the things you like to do with that person during your vacation at home.",
        translation: "그 사람과 집에서 휴가를 보낼 때 주로 뭘 하는지 말해 주세요.",
        type: "활동묘사",
        structure: ["허종과 휴가보냄, 오라고 하면 기꺼이 옴", "같이 요리(건강식 레시피 찾음, 허종이 주 요리사)", "요리 후 볼 영화 고름", "밥 먹으면서 영화 같이 봄(가끔 몇시간씩)", "특별친않지만 항상 즐김"],
        script: [
          { en: "Like I said, I usually spend my vacations with my friend, Heo Jong.", ko: "말씀드렸듯이 저는 보통 친구 허종과 휴가를 보내요." },
          { en: "On my days off, I usually ask him to come over, and he's always happy to.", ko: "쉬는 날엔 보통 그한테 놀러 오라고 하는데, 항상 흔쾌히 와줘요." },
          { en: "When he comes, we usually cook something first — we look up healthy recipes and make them together.", ko: "그가 오면 보통 먼저 뭔가를 요리하는데, 건강한 레시피를 찾아서 같이 만들어요." },
          { en: "He's actually the main cook since he's really good at it, so I just help out.", ko: "사실 요리는 그가 잘해서 주로 그가 하고, 저는 그냥 거들어요." },
          { en: "After we finish cooking, we pick a movie to watch.", ko: "요리가 끝나면 같이 볼 영화를 골라요." },
          { en: "Then we enjoy the meal and the movie together — sometimes we end up watching several movies for hours.", ko: "그러고 나서 밥이랑 영화를 같이 즐기는데, 가끔은 몇 시간씩 여러 편을 보기도 해요." },
          { en: "Even though it's nothing too special, we always have a good time.", ko: "그렇게 특별한 건 아니지만 항상 즐거운 시간이에요." }
        ],
        pronunciation: [
          { en: "Like I said, I usually spend my vacations with my friend, Heo Jong.", ko: "라이카이 세드, 아이 유주얼리 스펜드 마이 베케이션즈 윗마이 프렌드, 허종" },
          { en: "On my days off, I usually ask him to come over,", ko: "온마이 데이즈오프, 아이 유주얼리 애스크힘투 컴오버" },
          { en: "and he's always happy to.", ko: "앤 히즈 올웨이즈 해피투" },
          { en: "When he comes, we usually cook something first —", ko: "웬히 컴즈, 위 유주얼리 쿡 썸씽 퍼스트" },
          { en: "we look up healthy recipes and make them together.", ko: "위 룩업 헬씨 레서피즈 앤 메익뎀 투게더" },
          { en: "He's actually the main cook since he's really good at it,", ko: "히즈 액츄얼리 더 메인 쿡 신스 히즈 릴리 굿앳잇" },
          { en: "so I just help out.", ko: "소 아이 저스트 헬프아웃" },
          { en: "After we finish cooking, we pick a movie to watch.", ko: "애프터위 피니쉬 쿠킹, 위 픽어 무비 투 왓치" },
          { en: "Then we enjoy the meal and the movie together —", ko: "덴 위 인조이더 밀 앤더 무비 투게더" },
          { en: "sometimes we end up watching several movies for hours.", ko: "썸타임즈 위 엔덥 워칭 세버럴 무비즈 퍼 아워즈" },
          { en: "Even though it's nothing too special, we always have a good time.", ko: "이븐도우 잇츠 낫씽 투 스페셜, 위 올웨이즈 해버 굿 타임" }
        ],
        warnings: [
          { word: "recipes", guide: "레서피즈" },
          { word: "actually", guide: "액츄얼리" },
          { word: "vacations", guide: "베케이션즈" },
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
        structure: ["가장 많이 쓰는 기술: 스마트폰", "없이는 못 삼", "약 85%가 사용(어린애들도)", "전화/문자/인터넷 서핑 가능", "업무/은행/쇼핑에도 사용", "이제 컴퓨터랑 비슷함"],
        script: [
          { en: "Most people in Korea use smartphones.", ko: "한국 사람들 대부분이 스마트폰을 써요." },
          { en: "Honestly, people can't really live without it.", ko: "솔직히, 사람들이 그거 없이는 정말 못 살아요." },
          { en: "About 85% of Koreans use one, even young kids.", ko: "한국인의 약 85%가 쓰는데, 어린 애들도 다 있어요." },
          { en: "You can easily call, text, and surf the internet.", ko: "쉽게 전화하고, 문자하고, 인터넷 서핑도 할 수 있어요." },
          { en: "I personally use it for work, banking, even shopping.", ko: "저는 개인적으로 그걸 일, 은행일, 쇼핑 같은 데 써요." },
          { en: "Overall, it's pretty similar to a computer now.", ko: "전반적으로, 이제 컴퓨터랑 꽤 비슷해요." }
        ],
        pronunciation: [
          { en: "Most people in Korea use smartphones.", ko: "모스트 피플 인코리아 유즈 스마트폰즈" },
          { en: "Honestly, people can't really live without it.", ko: "아너슬리, 피플 캔트 릴리 리브 위다웃잇" },
          { en: "About 85% of Koreans use one, even young kids.", ko: "어바웃 에이티파이브 퍼센트어브 코리언즈 유즈원, 이븐 영키즈" },
          { en: "You can easily call, text, and surf the internet.", ko: "유캔 이질리 콜, 텍스트, 앤 서프디 인터넷" },
          { en: "I personally use it for work, banking, even shopping.", ko: "아이 퍼스널리 유짓 퍼 워크, 뱅킹, 이븐 샤핑" },
          { en: "Overall, it's pretty similar to a computer now.", ko: "오버롤, 잇츠 프리티 시밀러투어 컴퓨터 나우" }
        ],
        warnings: [
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "similar", guide: "시밀러" },
          { word: "easily", guide: "이질리" }
        ]
      },
      {
        id: 110,
        question: "Technology is advancing more rapidly than ever. Can you tell me about the way technology has changed? What changes have occurred over time?",
        translation: "기술이 그 어느 때보다 빠르게 발전하고 있어요. 기술이 어떻게 변했는지 말해 주세요. 시간이 지나면서 어떤 변화가 있었나요?",
        type: "과거 비교",
        structure: ["몇 년 전엔 전화/문자/이메일 정도", "그땐 더 좋아질 수 없을 것 같았음", "결국 사생활/보안/편리함 원함", "지문센서/홍채스캐너/모바일결제 생김", "최근엔 완전 방수까지", "앞으로도 계속 발전할 것"],
        script: [
          { en: "Let me tell you how smartphones have changed.", ko: "스마트폰이 어떻게 변했는지 말씀드릴게요." },
          { en: "A few years ago, people mainly just used smartphones to call, text, and check email.", ko: "몇 년 전에는, 사람들이 그냥 주로 전화, 문자, 이메일 확인에 스마트폰을 썼어요." },
          { en: "Back then, it seemed like smartphones couldn't get much better than that.", ko: "그때는, 스마트폰이 그거보다 더 좋아질 수 없을 것 같았어요." },
          { en: "But eventually, people wanted even more privacy, security, and convenience.", ko: "근데 결국, 사람들은 훨씬 더 큰 사생활 보호, 보안, 편리함을 원했어요." },
          { en: "So now, smartphones actually have fingerprint sensors, iris scanners, and mobile payments.", ko: "그래서 이제 스마트폰은 실제로 지문 센서, 홍채 스캐너, 모바일 결제가 있어요." },
          { en: "Recent smartphones are even completely waterproof.", ko: "최근 스마트폰은 완전히 방수 기능까지 있어요." },
          { en: "Honestly, I think smartphones will just keep improving.", ko: "솔직히, 스마트폰은 그냥 계속 발전할 거라고 생각해요." }
        ],
        pronunciation: [
          { en: "Let me tell you how smartphones have changed.", ko: "렛미 텔유 하우 스마트폰즈 해브 체인지드" },
          { en: "A few years ago, people mainly just used smartphones to call, text, and check email.", ko: "어퓨 이어즈어고, 피플 메인리 저스트 유즈드 스마트폰즈 투콜, 텍스트, 앤첵 이메일" },
          { en: "Back then, it seemed like smartphones couldn't get much better than that.", ko: "백덴, 잇 씸드라익 스마트폰즈 쿠든트 겟 머치 베러댄댓" },
          { en: "But eventually, people wanted even more privacy, security, and convenience.", ko: "벗 이벤츄얼리, 피플 원티드 이븐모어 프라이버시, 시큐리티, 앤 컨비니언스" },
          { en: "So now, smartphones actually have fingerprint sensors, iris scanners, and mobile payments.", ko: "소나우, 스마트폰즈 액츄얼리 해브 핑거프린트 센서즈, 아이리스 스캐너즈, 앤 모바일 페이먼츠" },
          { en: "Recent smartphones are even completely waterproof.", ko: "리쓴트 스마트폰즈알 이븐 컴플리틀리 워터프루프" },
          { en: "Honestly, I think smartphones will just keep improving.", ko: "아너슬리, 아이씽크 스마트폰즈 윌 저스트 킵 임프루빙" }
        ],
        warnings: [
          { word: "eventually", guide: "이벤츄얼리" },
          { word: "convenience", guide: "컨비니언스" },
          { word: "fingerprint", guide: "핑거프린트" },
          { word: "waterproof", guide: "워터프루프" }
        ]
      },
      {
        id: 111,
        question: "A new type of technology can be frustrating. Tell me about a time when you had trouble due to a new technology. What kind of problems did it give you? Why was it frustrating?",
        translation: "새로운 기술 때문에 답답했던 적이 있을 거예요. 신기술 때문에 어려움을 겪었던 경험을 말해 주세요. 어떤 문제가 있었고 왜 답답했나요?",
        type: "기억에 남는 경험",
        structure: ["2년전, 새 스마트폰 사고 진우랑 카페감", "진우 화장실간사이 혼자 기다림", "지나가던 여자가 부딪혀 커피 쏟음", "방수기능 없어서 폰 고장남", "여자 사과했지만 계속 불평함", "친구 돌아옴→그 여자가 친구 아내였음", "엄청 당황+계속 사과함", "폰이 방수였으면 좋았을거란 아쉬움"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "2년 전쯤 있었던 일을 말씀드릴게요." },
          { en: "At that time, I bought a new smartphone, and I went to a cafe with my friend Jinwoo.", ko: "그때 새 스마트폰을 샀는데, 친구 진우랑 카페에 갔어요." },
          { en: "He went to the restroom, and I waited for him.", ko: "친구가 화장실에 갔고, 저는 기다리고 있었어요." },
          { en: "Suddenly, a woman walking by hit my table, and her coffee spilled all over my smartphone.", ko: "갑자기 지나가던 여자가 제 테이블에 부딪혔고, 커피가 제 스마트폰에 다 쏟아졌어요." },
          { en: "At that time, my phone didn't have a waterproof feature, so my phone got broken.", ko: "그때 제 폰은 방수 기능이 없어서, 폰이 고장 났어요." },
          { en: "The woman apologized to me, but I kept complaining to her.", ko: "여자가 사과했지만, 저는 계속 불평했어요." },
          { en: "But after that, my friend came back, and I was really shocked because she was my friend's wife.", ko: "그런데 그 후에 친구가 돌아왔고, 알고 보니 그 여자가 친구 아내라서 정말 놀랐어요." },
          { en: "Oh, I was really embarrassed.", ko: "아, 너무 창피했어요." },
          { en: "I kept apologizing to her over and over.", ko: "계속 사과하고 또 사과했어요." },
          { en: "I wish my phone had been waterproof.", ko: "제 폰이 방수였으면 좋았을 텐데." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At that time, I bought a new smartphone, and I went to a cafe with my friend Jinwoo.", ko: "앳댓타임, 아이 보우터 뉴 스마트폰, 앤아이웬투어 카페 위드마이 프렌드 진우" },
          { en: "He went to the restroom, and I waited for him.", ko: "히웬투더 레스트룸, 앤아이 웨이티드퍼힘" },
          { en: "Suddenly, a woman walking by hit my table, and her coffee spilled all over my smartphone.", ko: "서든리, 어우먼 워킹바이 힛 마이테이블, 앤 허 커피 스필드 올오버 마이 스마트폰" },
          { en: "At that time, my phone didn't have a waterproof feature, so my phone got broken.", ko: "앳댓타임, 마이폰 디든해버 워터프루프 피처, 소마이폰 갓 브로큰" },
          { en: "The woman apologized to me, but I kept complaining to her.", ko: "더 우먼 어팔러자이즈드투미, 벗아이 켑트 컴플레이닝투허" },
          { en: "But after that, my friend came back, and I was really shocked because she was my friend's wife.", ko: "벗 애프터댓, 마이프렌드 케임백, 앤아이워즈 릴리 샥트 비커즈 쉬워즈 마이프렌즈 와이프" },
          { en: "Oh, I was really embarrassed.", ko: "오, 아이워즈 릴리 임배러스트" },
          { en: "I kept apologizing to her over and over.", ko: "아이켑트 어팔러자이징투허 오버앤오버" },
          { en: "I wish my phone had been waterproof.", ko: "아이위시 마이폰 해드빈 워터프루프" }
        ],
        warnings: [
          { word: "embarrassed", guide: "임배러스트" },
          { word: "apologized", guide: "어팔러자이즈드" },
          { word: "waterproof", guide: "워터프루프" },
          { word: "complaining", guide: "컴플레이닝" }
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
        structure: ["큰 명절은 집에서", "가족/친척 다 한곳에 모임", "설날/추석엔 전국서 이동", "큰어른 계신 곳으로 감", "매년 부모님과 보냄", "가족과 함께하는 따뜻한 시간"],
        script: [
          { en: "Most people in Korea celebrate holidays at home.", ko: "한국 사람들 대부분이 명절을 집에서 보내요." },
          { en: "Honestly, family and relatives all gather in one place.", ko: "솔직히, 가족이랑 친척들이 다 한 곳에 모여요." },
          { en: "About Lunar New Year or Chuseok, people travel from all over the country.", ko: "설날이나 추석 때는, 사람들이 전국 각지에서 이동해요." },
          { en: "You usually go to wherever the eldest family member lives.", ko: "보통 큰어른이 계신 곳으로 가요." },
          { en: "I personally spend it with my parents every year.", ko: "저는 개인적으로 매년 부모님이랑 같이 보내요." },
          { en: "Overall, it's a warm time with family.", ko: "전반적으로, 가족이랑 함께하는 따뜻한 시간이에요." }
        ],
        pronunciation: [
          { en: "Most people in Korea celebrate holidays at home.", ko: "모스트 피플 인코리아 셀러브레이트 할러데이즈 앳홈" },
          { en: "Honestly, family and relatives all gather in one place.", ko: "아너슬리, 패밀리 앤 렐러티브즈 올 개더 인원 플레이스" },
          { en: "About Lunar New Year or Chuseok, people travel from all over the country.", ko: "어바웃 루너 뉴이어 오어 추석, 피플 트래블 프럼 올오버더 컨트리" },
          { en: "You usually go to wherever the eldest family member lives.", ko: "유 유주얼리 고투 웨어에버디 엘디스트 패밀리멤버 리브즈" },
          { en: "I personally spend it with my parents every year.", ko: "아이 퍼스널리 스펜딧 위드마이 페어런츠 에브리이어" },
          { en: "Overall, it's a warm time with family.", ko: "오버롤, 잇처 웜타임 위드패밀리" }
        ],
        warnings: [
          { word: "relatives", guide: "렐러티브즈" },
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "eldest", guide: "엘디스트" }
        ]
      },
      {
        id: 166,
        question: "Tell me about the last holiday celebration or gathering that you had. Where did you go? What kind of celebration was it? How did you celebrate it?",
        translation: "최근에 했던 명절 모임이나 행사에 대해 말해 주세요. 어디로 갔나요? 어떤 행사였나요? 어떻게 기념했나요?",
        type: "최근경험",
        structure: ["최근 설날 얘기", "가족과 영화보기로함('Hope')", "부모님댁 근처 메가박스", "가족단위 많아 붐빔", "티켓+간식 사고 관람(약2시간)", "외계인 만나는 내용, 특수효과 인상적", "집와서 영화얘기 나눔", "정말 좋은 명절이었음"],
        script: [
          { en: "The last holiday I remember was Lunar New Year.", ko: "제가 기억하는 최근 명절은 설날이었어요." },
          { en: "My family wanted to do something fun together, so we decided to watch a movie titled 'Hope.'", ko: "가족이 다 같이 재미있는 걸 하고 싶어 해서, 'Hope'라는 영화를 보기로 했어요." },
          { en: "We went to Megabox near my parents' house.", ko: "부모님 댁 근처 메가박스에 갔어요." },
          { en: "It was pretty crowded that day, especially with families, so I was a bit surprised.", ko: "그날 꽤 붐볐는데, 특히 가족 단위가 많아서 좀 놀랐어요." },
          { en: "As soon as we arrived, we got tickets and some snacks.", ko: "도착하자마자 티켓이랑 간식을 샀어요." },
          { en: "Then we watched the movie for about two hours.", ko: "그러고 나서 약 두 시간 동안 영화를 봤어요." },
          { en: "It was about people who encounter aliens.", ko: "외계인을 만나는 사람들 얘기였어요." },
          { en: "The movie was awesome — I was especially impressed by the special effects.", ko: "영화가 정말 좋았어요 — 특히 특수효과가 인상 깊었어요." },
          { en: "After that, we relaxed at home and chatted about the movie together.", ko: "그 후엔 집에서 쉬면서 영화 얘기를 나눴어요." },
          { en: "It was such a great holiday.", ko: "정말 좋은 명절이었어요." }
        ],
        pronunciation: [
          { en: "The last holiday I remember was Lunar New Year.", ko: "더 라스트 할러데이 아이 리멤버 워즈 루너뉴이어" },
          { en: "My family wanted to do something fun together, so we decided to watch a movie titled 'Hope.'", ko: "마이패밀리 원티드투두 썸씽 펀 투게더, 소위디사이디드투 왓처 무비 타이틀드 호프" },
          { en: "We went to Megabox near my parents' house.", ko: "위웬투 메가박스 니어 마이 페어런츠 하우스" },
          { en: "It was pretty crowded that day, especially with families, so I was a bit surprised.", ko: "잇워즈 프리티 크라우디드 댓데이, 이스페셜리 위드 패밀리즈, 소아이워저 비트 서프라이즈드" },
          { en: "As soon as we arrived, we got tickets and some snacks.", ko: "애즈순애즈 위어라이브드, 위갓 티킷츠 앤썸 스낵스" },
          { en: "Then we watched the movie for about two hours.", ko: "덴 위왓치트더무비 퍼어바웃 투아워즈" },
          { en: "It was about people who encounter aliens.", ko: "잇워즈어바웃 피플 후엔카운터 에일리언즈" },
          { en: "The movie was awesome — I was especially impressed by the special effects.", ko: "더무비워즈 어썸, 아이워즈 이스페셜리 임프레스트바이더 스페셜 이펙츠" },
          { en: "After that, we relaxed at home and chatted about the movie together.", ko: "애프터댓, 위릴랙스트앳홈 앤채티드어바웃더무비 투게더" },
          { en: "It was such a great holiday.", ko: "잇워즈 서치어 그레잇 할러데이" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "impressed", guide: "임프레스트" },
          { word: "aliens", guide: "에일리언즈" },
          { word: "effects", guide: "이펙츠" }
        ]
      },
      {
        id: 167,
        question: "Tell me about a memorable or difficult experience related to a holiday celebration. What happened, and how did you deal with it?",
        translation: "명절 행사와 관련해서 기억에 남거나 힘들었던 경험에 대해 말해 주세요. 무슨 일이 있었고, 어떻게 해결했나요?",
        type: "기억에 남는 경험",
        structure: ["작년 크리스마스이브, 집에서 파티", "가족/친구 초대", "날씨추워 닭곰탕 요리결심", "처음 해보는 요리, 처음엔 괜찮아보임", "마지막에 실수로 설탕 넣음(소금대신)", "소금 더넣어 고치려했지만 실패", "요리 망쳐서 피자+치킨 주문", "아쉬운 크리스마스 저녁이었음"],
        script: [
          { en: "Let me tell you about something that happened last Christmas Eve.", ko: "작년 크리스마스 이브에 있었던 일을 말씀드릴게요." },
          { en: "I wanted to have a party at home, so I invited my family and friends.", ko: "집에서 파티를 하고 싶어서, 가족이랑 친구들을 초대했어요." },
          { en: "I decided to cook hot chicken soup, since it was cold and I thought it would warm everybody up.", ko: "날씨가 추워서 다들 따뜻해질 것 같아 닭곰탕을 요리하기로 했어요." },
          { en: "It was my first time cooking it, and everything seemed fine at first.", ko: "처음 해보는 요리였는데, 처음엔 다 괜찮아 보였어요." },
          { en: "But at the last stage, I put in a lot of sugar instead of salt by mistake.", ko: "그런데 마지막 단계에서 실수로 소금 대신 설탕을 많이 넣었어요." },
          { en: "I tried to fix it by adding salt, but it didn't work.", ko: "소금을 더 넣어서 고쳐보려고 했는데, 안 됐어요." },
          { en: "The whole dish was ruined, so we ended up ordering pizza and fried chicken instead.", ko: "요리를 완전히 망쳐서, 결국 피자랑 치킨을 시켰어요." },
          { en: "It was such a disappointing Christmas dinner.", ko: "정말 아쉬운 크리스마스 저녁이었어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about something that happened last Christmas Eve.", ko: "렛미텔유 어바웃 썸씽댓 해픈드 라스트 크리스마스이브" },
          { en: "I wanted to have a party at home, so I invited my family and friends.", ko: "아이원티드투 해버 파티앳홈, 소아이 인바이티드 마이패밀리앤프렌즈" },
          { en: "I decided to cook hot chicken soup, since it was cold and I thought it would warm everybody up.", ko: "아이디사이디드투 쿡 핫치킨수프, 신스잇워즈콜드 앤아이쏫잇우드 웜에브리바디업" },
          { en: "It was my first time cooking it, and everything seemed fine at first.", ko: "잇워즈마이 퍼스트타임 쿠킹잇, 앤에브리씽 씸드파인앳퍼스트" },
          { en: "But at the last stage, I put in a lot of sugar instead of salt by mistake.", ko: "벗앳더 라스트스테이지, 아이풋인어랏어브 슈거 인스테드어브솔트 바이미스테이크" },
          { en: "I tried to fix it by adding salt, but it didn't work.", ko: "아이트라이투 픽스잇바이 애딩솔트, 벗잇디든워크" },
          { en: "The whole dish was ruined, so we ended up ordering pizza and fried chicken instead.", ko: "더홀디쉬 워즈루인드, 소위엔디드업 오더링 피자앤프라이드치킨 인스테드" },
          { en: "It was such a disappointing Christmas dinner.", ko: "잇워즈서치어 디서포인팅 크리스마스디너" }
        ],
        warnings: [
          { word: "disappointing", guide: "디서포인팅" },
          { word: "mistake", guide: "미스테이크" },
          { word: "instead", guide: "인스테드" },
          { word: "ruined", guide: "루인드" }
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
        structure: ["2년전 경험", "새 책상 온라인 주문", "처음엔 기대감", "배송받아보니 상판에 얼룩", "다리에 긁힌자국까지, 중고품 같음", "교환 시도했지만 한달 더 걸린다함", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "그때 새 책상이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "처음엔 다 괜찮아 보였어요. 새 책상 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무 상판에 얼룩이 있었어요." },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 다리 두 개에도 긁힌 자국이 있었고요." },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "그래서 교환해보려고 했는데, 한 달이 더 걸린다고 했어요." },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "결국 환불받고 책상을 반품해야 했어요. 정말 실망스러웠어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 데스크, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟더 뉴데스크" },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 더 우든보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 투어브더 렉스 해드 스크래치즈 투" },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "소아이 트라이투 게런 익스체인지, 벗데이세드 잇우드테익 어나더먼쓰" },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴더 데스크. 잇워즈 릴리 디서포인팅" }
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
        structure: ["2년전 경험", "새 책상 온라인 주문", "처음엔 기대감", "배송받아보니 상판에 얼룩", "다리에 긁힌자국까지, 중고품 같음", "교환 시도했지만 한달 더 걸린다함", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "그때 새 책상이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "처음엔 다 괜찮아 보였어요. 새 책상 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무 상판에 얼룩이 있었어요." },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 다리 두 개에도 긁힌 자국이 있었고요." },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "그래서 교환해보려고 했는데, 한 달이 더 걸린다고 했어요." },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "결국 환불받고 책상을 반품해야 했어요. 정말 실망스러웠어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 데스크, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟더 뉴데스크" },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 더 우든보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 투어브더 렉스 해드 스크래치즈 투" },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "소아이 트라이투 게런 익스체인지, 벗데이세드 잇우드테익 어나더먼쓰" },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴더 데스크. 잇워즈 릴리 디서포인팅" }
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
        structure: ["인사", "목적: 폰 오래돼서 새로 사려함", "질문1: 인기모델+추천", "질문2: 기능", "질문3: 가격+할인", "마무리"],
        script: [
          { en: "Hey, Sunggyu? It's me, DJ.", ko: "안녕 성규야? 나 DJ야." },
          { en: "Do you have time to talk?", ko: "얘기할 시간 있어?" },
          { en: "I want to buy a new phone because my phone is too old.", ko: "내 폰이 너무 오래돼서 새 폰을 사고 싶어." },
          { en: "What kinds of phones are popular these days? Can you give me any recommendations? — Oh, good.", ko: "요즘 어떤 폰이 인기 있어? 추천해줄 수 있어? — 오, 좋다." },
          { en: "What features does it have? — Oh, awesome.", ko: "어떤 기능이 있어? — 오, 멋지다." },
          { en: "What's the price? Do you have any discounts? — Sounds good.", ko: "가격은 얼마야? 할인 있어? — 좋다." },
          { en: "Thank you for the information. Bye.", ko: "정보 고마워. 안녕." }
        ],
        pronunciation: [
          { en: "Hey, Sunggyu? It's me, DJ.", ko: "헤이, 성규? 잇츠미, 디제이" },
          { en: "Do you have time to talk?", ko: "두유 해브 타임투톡?" },
          { en: "I want to buy a new phone because my phone is too old.", ko: "아이원투바이어 뉴폰 비커즈 마이폰이즈 투올드" },
          { en: "What kinds of phones are popular these days? Can you give me any recommendations? Oh, good.", ko: "왓카인즈어브 폰즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈? 오, 굿" },
          { en: "What features does it have? Oh, awesome.", ko: "왓 피처스 더짓해브? 오, 어썸" },
          { en: "What's the price? Do you have any discounts? Sounds good.", ko: "왓츠더 프라이스? 두유해브 애니 디스카운츠? 사운즈굿" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "features", guide: "피처스" },
          { word: "discounts", guide: "디스카운츠" },
          { word: "price", guide: "프라이스" }
        ]
      },
      {
        id: 136,
        question: "You bought a new cell phone, but you've found out that it's not working. Call the after-service center, explain the situation, and discuss what you can do.",
        translation: "새 휴대폰을 샀는데 작동이 안 되는 걸 알게 됐어요. AS센터에 전화해서 상황을 설명하고 어떻게 할 수 있는지 논의하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 지난주 산 휴대폰 문제로 전화", "상황설명: 저절로 켜졌다꺼짐", "대안1: 다른걸로 교환", "대안2: 환불(선택함)", "마무리: 연락요청"],
        script: [
          { en: "Hello.", ko: "여보세요." },
          { en: "I'm calling about the mobile phone I bought last week.", ko: "지난주에 산 휴대폰 때문에 전화드렸어요." },
          { en: "I think there's something wrong with it — it turns on and off by itself.", ko: "뭔가 문제가 있는 것 같아요 — 저절로 켜졌다 꺼졌다 해요." },
          { en: "So, I wonder if I could exchange it for another one.", ko: "그래서 말인데, 다른 걸로 교환할 수 있을까요?" },
          { en: "Or, can I get a refund? — Okay, I'll take a refund.", ko: "아니면 환불받을 수 있을까요? — 네, 환불로 할게요." },
          { en: "Please call me back. Thank you.", ko: "다시 전화 주세요. 감사합니다." }
        ],
        pronunciation: [
          { en: "Hello.", ko: "헬로" },
          { en: "I'm calling about the mobile phone I bought last week.", ko: "아임 콜링어바웃더 모바일폰 아이보웃 라스트윅" },
          { en: "I think there's something wrong with it — it turns on and off by itself.", ko: "아이씽크 데어즈 썸씽롱 위딧, 잇턴즈 온앤오프 바이잇셀프" },
          { en: "So, I wonder if I could exchange it for another one.", ko: "소, 아이원더이프아이쿠드 익스체인지잇 퍼어나더원" },
          { en: "Or, can I get a refund? Okay, I'll take a refund.", ko: "오어, 캔아이 게러 리펀드? 오케이, 아일 테이커 리펀드" },
          { en: "Please call me back. Thank you.", ko: "플리즈 콜미백. 땡큐" }
        ],
        warnings: [
          { word: "exchange", guide: "익스체인지" },
          { word: "refund", guide: "리펀드" },
          { word: "itself", guide: "잇셀프" },
          { word: "mobile", guide: "모바일" }
        ]
      },
      {
        id: 137,
        question: "That's the end of the situation. Have you ever been unhappy with something you bought or some service you received? What was the problem? How did you handle it? Tell me everything in detail.",
        translation: "상황극은 여기까지예요. 구매한 물건이나 받은 서비스가 마음에 안 들었던 적이 있나요? 문제가 뭐였고 어떻게 해결했나요? 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "새 책상 온라인 주문", "처음엔 기대감", "배송받아보니 상판에 얼룩", "다리에 긁힌자국까지, 중고품 같음", "교환 시도했지만 한달 더 걸린다함", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "그때 새 책상이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "처음엔 다 괜찮아 보였어요. 새 책상 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무 상판에 얼룩이 있었어요." },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 다리 두 개에도 긁힌 자국이 있었고요." },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "그래서 교환해보려고 했는데, 한 달이 더 걸린다고 했어요." },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "결국 환불받고 책상을 반품해야 했어요. 정말 실망스러웠어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 데스크, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟더 뉴데스크" },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 더 우든보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 투어브더 렉스 해드 스크래치즈 투" },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "소아이 트라이투 게런 익스체인지, 벗데이세드 잇우드테익 어나더먼쓰" },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴더 데스크. 잇워즈 릴리 디서포인팅" }
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
    id: 46, emoji: "👕", nameKo: "옷 구매",
    category: "롤플레이",
    questions: [
      {
        id: 138,
        question: "You are at a clothing store and need to get some clothes. Ask the clerk three or four questions about the clothes you'd like to buy.",
        translation: "옷가게에 있고 옷을 사야 해요. 점원에게 사고 싶은 옷에 대해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사", "목적: 셔츠 오래돼서 새로 사려함", "질문1: 인기셔츠+추천", "질문2: 기능", "질문3: 가격+할인", "마무리"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "I'd like to buy a shirt because mine is too old.", ko: "제 셔츠가 너무 오래돼서 새로 사고 싶어요." },
          { en: "What kinds of shirts are popular these days? Can you give me any recommendations?", ko: "요즘 어떤 셔츠가 인기 있나요? 추천해주실 수 있어요?" },
          { en: "What features does it have?", ko: "어떤 기능이 있나요?" },
          { en: "What's the price? Do you have any discounts?", ko: "가격이 어떻게 되나요? 할인 있나요?" },
          { en: "Thank you for the information.", ko: "정보 감사합니다." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "I'd like to buy a shirt because mine is too old.", ko: "아이드 라익투 바이어 셔츠 비커즈 마인이즈 투올드" },
          { en: "What kinds of shirts are popular these days? Can you give me any recommendations?", ko: "왓카인즈어브 셔츠알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈?" },
          { en: "What features does it have?", ko: "왓 피처스 더짓해브?" },
          { en: "What's the price? Do you have any discounts?", ko: "왓츠더 프라이스? 두유해브 애니 디스카운츠?" },
          { en: "Thank you for the information.", ko: "땡큐퍼디 인포메이션" }
        ],
        warnings: [
          { word: "recommendations", guide: "레커멘데이션즈" },
          { word: "features", guide: "피처스" },
          { word: "discounts", guide: "디스카운츠" },
          { word: "shirt", guide: "셔츠" }
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
        structure: ["2년전 경험", "새 책상 온라인 주문", "처음엔 기대감", "배송받아보니 상판에 얼룩", "다리에 긁힌자국까지, 중고품 같음", "교환 시도했지만 한달 더 걸린다함", "결국 환불받고 반품", "실망스러운 경험이었음"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "그때 새 책상이 필요해서 온라인으로 하나 주문했어요." },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "처음엔 다 괜찮아 보였어요. 새 책상 받는 게 기대됐죠." },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "그런데 배송받아보니 문제가 있었어요 — 나무 상판에 얼룩이 있었어요." },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "엎친 데 덮친 격으로 중고품처럼 보이기까지 했어요 — 다리 두 개에도 긁힌 자국이 있었고요." },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "그래서 교환해보려고 했는데, 한 달이 더 걸린다고 했어요." },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "결국 환불받고 책상을 반품해야 했어요. 정말 실망스러웠어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, I needed a new desk, so I ordered one online.", ko: "앳더타임, 아이니디더 뉴 데스크, 소아이 오더드원 온라인" },
          { en: "At first, everything seemed fine. I was excited to get the new desk.", ko: "앳퍼스트, 에브리씽 씸드파인. 아이워즈 익사이티드 투겟더 뉴데스크" },
          { en: "However, when it was delivered, I found something wrong with it — the wooden board had some stains.", ko: "하우에버, 웬잇워즈 딜리버드, 아이파운드 썸씽롱 위딧, 더 우든보드 해드 썸 스테인즈" },
          { en: "To make matters worse, it looked like a used one — two of the legs had scratches too.", ko: "투메익 매터즈워스, 잇룩트 라이커 유즈드원, 투어브더 렉스 해드 스크래치즈 투" },
          { en: "So I tried to get an exchange, but they said it would take another month.", ko: "소아이 트라이투 게런 익스체인지, 벗데이세드 잇우드테익 어나더먼쓰" },
          { en: "As a result, I had to get a refund and return the desk. It was really disappointing.", ko: "애저 리절트, 아이해드투 게러 리펀드 앤 리턴더 데스크. 잇워즈 릴리 디서포인팅" }
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
    id: 47, emoji: "🍽️", nameKo: "저녁 초대",
    category: "롤플레이",
    questions: [
      {
        id: 141,
        question: "You want to invite your friend's couple to your home for dinner. Ask one of your family members three or four questions to find out the best day and time.",
        translation: "친구 부부를 집으로 초대해서 저녁을 대접하고 싶어요. 가족 중 한 명에게 가장 좋은 날짜와 시간을 알아보기 위해 3~4가지 질문을 해보세요.",
        type: "롤플레이 · 질문하기",
        structure: ["인사: 아내에게 얘기시간 있는지", "목적: 친구 부부 초대해서 저녁 대접하고 싶음", "질문1: 좋은 날(일요일)", "질문2: 시작시간(7시쯤)", "질문3: 준비할 음식(샐러드 추가)", "마무리: 최고라고 칭찬"],
        script: [
          { en: "Hey, honey. Do you have time to talk?", ko: "자기야, 얘기할 시간 있어?" },
          { en: "I'd like to invite my friend's couple for dinner.", ko: "친구 부부를 저녁 식사에 초대하고 싶어." },
          { en: "What day is good for you? — Sunday sounds good.", ko: "무슨 날이 좋을까? — 일요일 좋아." },
          { en: "What time is good? — About 7 is fine.", ko: "몇 시가 좋을까? — 7시쯤이 좋겠다." },
          { en: "What should we prepare for dinner? — I think adding some salad is fantastic.", ko: "저녁에 뭘 준비할까? — 샐러드 좀 추가하면 딱일 것 같아." },
          { en: "You're the best!", ko: "자기가 최고야!" }
        ],
        pronunciation: [
          { en: "Hey, honey. Do you have time to talk?", ko: "헤이, 허니. 두유 해브 타임투톡?" },
          { en: "I'd like to invite my friend's couple for dinner.", ko: "아이드 라익투 인바잇 마이 프렌즈 커플 퍼 디너" },
          { en: "What day is good for you? Sunday sounds good.", ko: "왓데이 이즈 굿퍼유? 선데이 사운즈 굿" },
          { en: "What time is good? About 7 is fine.", ko: "왓타임 이즈굿? 어바웃 세븐이즈 파인" },
          { en: "What should we prepare for dinner? I think adding some salad is fantastic.", ko: "왓슈드위 프리페어 퍼디너? 아이씽크 애딩썸 샐러드이즈 팬태스틱" },
          { en: "You're the best!", ko: "유어더 베스트!" }
        ],
        warnings: [
          { word: "invite", guide: "인바잇" },
          { word: "prepare", guide: "프리페어" },
          { word: "fantastic", guide: "팬태스틱" },
          { word: "sounds", guide: "사운즈" }
        ]
      },
      {
        id: 142,
        question: "On the day of your dinner party, one of your family members becomes ill. Call your friend and leave a message explaining what happened and propose a plan for dinner in the near future.",
        translation: "저녁 파티 당일에 가족 중 한 명이 아파요. 친구에게 전화해서 무슨 일이 있었는지 설명하는 메시지를 남기고, 가까운 시일 내에 다시 저녁을 함께할 계획을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 저녁파티 때문에 전화", "상황설명: 못갈것같음, 아내가 감기로 쉬어야함", "대안1: 날짜 재조정", "대안2: 오늘밤 그냥 외식(좋은곳 예약)", "마무리: 다시 전화달라"],
        script: [
          { en: "Hey, Sunggyu, it's me, DJ.", ko: "안녕 성규야, 나 DJ야." },
          { en: "I'm calling about our dinner party tonight.", ko: "오늘 저녁 파티 때문에 전화했어." },
          { en: "I'm sorry, we can't make it because my wife isn't feeling well — she has a bad cold and needs to rest.", ko: "미안한데, 우리 못 갈 것 같아 — 아내가 심한 감기에 걸려서 쉬어야 해." },
          { en: "So, I wonder if we could reschedule.", ko: "그래서 말인데, 일정을 다시 잡을 수 있을까 해서." },
          { en: "Or, if you're up for it, we could just eat out tonight? I know a good place, and I can make a reservation.", ko: "아니면, 괜찮으면 오늘 밤은 그냥 외식할까? 좋은 곳을 아는데, 예약할 수 있어." },
          { en: "Please call me back. Thanks.", ko: "다시 전화 줘. 고마워." }
        ],
        pronunciation: [
          { en: "Hey, Sunggyu, it's me, DJ.", ko: "헤이, 성규, 잇츠미, 디제이" },
          { en: "I'm calling about our dinner party tonight.", ko: "아임 콜링어바웃 아워 디너파리 투나잇" },
          { en: "I'm sorry, we can't make it because my wife isn't feeling well —", ko: "아임쏘리, 위캔트 메이킷 비커즈 마이와이프 이즌트 필링웰" },
          { en: "she has a bad cold and needs to rest.", ko: "쉬해저 배드콜드 앤 니즈투레스트" },
          { en: "So, I wonder if we could reschedule.", ko: "소, 아이원더이프위쿠드 리스케줄" },
          { en: "Or, if you're up for it, we could just eat out tonight? I know a good place, and I can make a reservation.", ko: "오어, 이퓨어 업퍼릿, 위쿠드 저스트 잇아웃 투나잇? 아이노어 굿플레이스, 앤아이캔 메이커 레저베이션" },
          { en: "Please call me back. Thanks.", ko: "플리즈 콜미백. 땡스" }
        ],
        warnings: [
          { word: "feeling", guide: "필링" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "reservation", guide: "레저베이션" },
          { word: "tonight", guide: "투나잇" }
        ]
      },
      {
        id: 143,
        question: "Has anything like that ever happened to you? Have you ever had to change your plan because a family member needed your help? Tell me the episode in detail — why you had to change your plans and what happened.",
        translation: "그런 일이 당신에게도 있었나요? 가족이 도움이 필요해서 계획을 바꿔야 했던 적이 있나요? 왜 계획을 바꿔야 했는지, 무슨 일이 있었는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["3년전 경험", "친구와 휴가 예정이었으나 아들이 아파서 병원감", "그것 때문에 여행 못가고 집에 있음", "아들 위해 삼계탕 요리 결심", "처음 만들었지만 맛있었음", "여행 못갔지만 집에서 좋은 시간 보냄"],
        script: [
          { en: "Let me tell you about my experience from about three years ago.", ko: "약 3년 전에 있었던 일을 말씀드릴게요." },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "그때 친구랑 휴가를 가기로 되어 있었는데, 아들이 몸이 안 좋아서 병원에 가야 했어요." },
          { en: "Because of that, we couldn't go on a trip and had to stay home instead.", ko: "그것 때문에 여행을 못 가고 대신 집에 있어야 했어요." },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "그래서 아들을 위해 삼계탕을 만들기로 했어요, 아들한테 좋을 것 같아서요." },
          { en: "It was my first time making it, but it was really good.", ko: "처음 만들어보는 거였는데, 정말 맛있었어요." },
          { en: "Although we couldn't go on a trip, we had a really good time at home.", ko: "여행은 못 갔지만, 집에서 정말 좋은 시간을 보냈어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about three years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 쓰리이어즈어고" },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "앳더타임, 위워 서포즈드투 고온어 베케이션 위드마이 프렌드, 벗마이썬 워즌트 필링웰, 소히 해드투 씨어닥터" },
          { en: "Because of that, we couldn't go on a trip and had to stay home instead.", ko: "비커즈어브댓, 위쿠든 고온어 트립 앤 해드투 스테이홈 인스테드" },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "소, 아이디사이디드투 쿡 코리안 치킨수프 퍼마이썬, 비커즈 아이쏫잇 우드비 굿퍼힘" },
          { en: "It was my first time making it, but it was really good.", ko: "잇워즈 마이퍼스트타임 메이킹잇, 벗잇워즈 릴리굿" },
          { en: "Although we couldn't go on a trip, we had a really good time at home.", ko: "얼도우 위쿠든 고온어 트립, 위해더 릴리 굿타임 앳홈" }
        ],
        warnings: [
          { word: "vacation", guide: "베케이션" },
          { word: "decided", guide: "디사이디드" },
          { word: "instead", guide: "인스테드" },
          { word: "although", guide: "얼도우" }
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
        structure: ["인사", "목적: 주말에 공원 같이 가고싶음", "질문1: 요일(일요일)", "질문2: 시간(2시)", "질문3: 장소(센트럴파크)", "마무리: 변동시 연락요청"],
        script: [
          { en: "Hey, Ruda? It's me, Dongjun.", ko: "안녕, 루다? 나 동준이야." },
          { en: "Do you have time to talk?", ko: "얘기할 시간 있어?" },
          { en: "I'd like to go to the park with you this weekend. Are you free? — Great, Sunday sounds good.", ko: "이번 주말에 너랑 공원에 가고 싶은데. 시간 돼? — 좋아, 일요일 괜찮아." },
          { en: "What time is good for you? — Two o'clock is fine.", ko: "몇 시가 좋아? — 2시가 좋아." },
          { en: "Where do you want to go? — Central Park sounds good.", ko: "어디로 갈까? — 센트럴 파크 좋아." },
          { en: "Please call me back if there's any changes. Thank you.", ko: "혹시 변동 있으면 다시 전화 줘. 고마워." }
        ],
        pronunciation: [
          { en: "Hey, Ruda? It's me, Dongjun.", ko: "헤이, 루다? 잇츠미, 동준" },
          { en: "Do you have time to talk?", ko: "두유 해브 타임투톡?" },
          { en: "I'd like to go to the park with you this weekend. Are you free? Great, Sunday sounds good.", ko: "아이드 라익투 고투더 파크 위듀 디스위켄드. 알유프리? 그레이트, 선데이 사운즈굿" },
          { en: "What time is good for you? Two o'clock is fine.", ko: "왓타임 이즈굿퍼유? 투어클락 이즈파인" },
          { en: "Where do you want to go? Central Park sounds good.", ko: "웨어두유 원투고? 센트럴 파크 사운즈굿" },
          { en: "Please call me back if there's any changes. Thank you.", ko: "플리즈 콜미백 이프데얼즈 애니 체인지즈. 땡큐" }
        ],
        warnings: [
          { word: "weekend", guide: "위켄드" },
          { word: "changes", guide: "체인지즈" },
          { word: "o'clock", guide: "어클락" },
          { word: "central", guide: "센트럴" }
        ]
      },
      {
        id: 145,
        question: "You're supposed to go to the park with your friend, but you've just found out the park is closed today for renovation. Call your friend to explain the situation, then offer some solutions.",
        translation: "친구랑 공원에 가기로 했는데, 오늘 공원이 보수공사로 문을 닫았다는 걸 방금 알게 됐어요. 친구에게 전화해서 상황을 설명하고 해결책을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 공원 일정 때문에 전화", "상황설명: 공원 보수공사로 휴무", "대안1: 날짜 재조정", "대안2: 다른공원(웨스트파크)", "마무리: 거기서 보자"],
        script: [
          { en: "Hey, Ruda? It's me, Dongjun.", ko: "안녕, 루다? 나 동준이야." },
          { en: "I'm calling about our plan to go to the park today.", ko: "오늘 공원 가기로 한 계획 때문에 전화했어." },
          { en: "I'm sorry, but I heard the park is closed for renovation.", ko: "미안한데, 공원이 보수공사로 문 닫았다고 들었어." },
          { en: "So, I wonder if we could reschedule, or can we just go to another park?", ko: "그래서 말인데, 일정을 다시 잡을 수 있을까, 아니면 그냥 다른 공원으로 갈까?" },
          { en: "I know a good place — West Park. Sounds good?", ko: "좋은 곳을 아는데 — 웨스트 파크. 괜찮아?" },
          { en: "Great, see you there soon!", ko: "좋아, 거기서 곧 보자!" }
        ],
        pronunciation: [
          { en: "Hey, Ruda? It's me, Dongjun.", ko: "헤이, 루다? 잇츠미, 동준" },
          { en: "I'm calling about our plan to go to the park today.", ko: "아임 콜링어바웃 아워 플랜투 고투더 파크 투데이" },
          { en: "I'm sorry, but I heard the park is closed for renovation.", ko: "아임쏘리, 벗아이허드 더파크 이즈 클로즈드퍼 레노베이션" },
          { en: "So, I wonder if we could reschedule, or can we just go to another park?", ko: "소, 아이원더이프위쿠드 리스케줄, 오어 캔위 저스트 고투 어나더파크?" },
          { en: "I know a good place — West Park. Sounds good?", ko: "아이노어 굿플레이스, 웨스트파크. 사운즈굿?" },
          { en: "Great, see you there soon!", ko: "그레잇, 씨유데어 순!" }
        ],
        warnings: [
          { word: "renovation", guide: "레노베이션" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "another", guide: "어나더" },
          { word: "sounds", guide: "사운즈" }
        ]
      },
      {
        id: 146,
        question: "You may have experienced a case where you couldn't go to the park because something happened. Tell me about a time you planned to go to the park but couldn't be there. Was it the weather, or did another kind of problem occur?",
        translation: "무슨 일이 생겨서 공원에 못 갔던 경우가 있을 거예요. 공원에 가려고 했는데 못 갔던 경험을 말해 주세요. 날씨 때문이었나요, 아니면 다른 문제가 있었나요?",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구와 공원 가기로 했으나 아들이 아파서 병원감", "그것 때문에 공원 못가고 집에 있음", "아들 위해 삼계탕 요리 결심", "처음 만들었지만 맛있었음", "공원 못갔지만 집에서 좋은 시간 보냄"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전에 있었던 일을 말씀드릴게요." },
          { en: "At the time, we were supposed to go to the park with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "그때 친구랑 공원에 가기로 되어 있었는데, 아들이 몸이 안 좋아서 병원에 가야 했어요." },
          { en: "Because of that, we couldn't go to the park and had to stay home instead.", ko: "그것 때문에 공원에 못 가고 대신 집에 있어야 했어요." },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "그래서 아들을 위해 삼계탕을 만들기로 했어요, 아들한테 좋을 것 같아서요." },
          { en: "It was my first time making it, but it was really good.", ko: "처음 만들어보는 거였는데, 정말 맛있었어요." },
          { en: "Although we couldn't go to the park, we had a really good time at home.", ko: "공원은 못 갔지만, 집에서 정말 좋은 시간을 보냈어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, we were supposed to go to the park with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "앳더타임, 위워 서포즈드투 고투더 파크 위드마이 프렌드, 벗마이썬 워즌트 필링웰, 소히 해드투 씨어닥터" },
          { en: "Because of that, we couldn't go to the park and had to stay home instead.", ko: "비커즈어브댓, 위쿠든 고투더 파크 앤 해드투 스테이홈 인스테드" },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "소, 아이디사이디드투 쿡 코리안 치킨수프 퍼마이썬, 비커즈 아이쏫잇 우드비 굿퍼힘" },
          { en: "It was my first time making it, but it was really good.", ko: "잇워즈 마이퍼스트타임 메이킹잇, 벗잇워즈 릴리굿" },
          { en: "Although we couldn't go to the park, we had a really good time at home.", ko: "얼도우 위쿠든 고투더 파크, 위해더 릴리 굿타임 앳홈" }
        ],
        warnings: [
          { word: "decided", guide: "디사이디드" },
          { word: "instead", guide: "인스테드" },
          { word: "although", guide: "얼도우" },
          { word: "feeling", guide: "필링" }
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
        structure: ["인사", "목적: 공연 티켓 2장 구하고싶음", "질문1: 가능시간(7시/9시중 7시선택)", "질문2: 가격+할인/쿠폰여부", "질문3: 주차장여부", "마무리"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "I'd like to get two tickets to a performance.", ko: "공연 티켓 두 장을 구하고 싶은데요." },
          { en: "What times are available? — 7 PM or 9 PM? I'll take 7 PM.", ko: "몇 시가 가능한가요? — 7시나 9시요? 7시로 할게요." },
          { en: "How much are the tickets? Do you have any discounts or coupons?", ko: "티켓은 얼마인가요? 할인이나 쿠폰 있나요?" },
          { en: "Do you have parking? — Oh, sounds good.", ko: "주차장 있나요? — 오, 좋네요." },
          { en: "Thank you for the information. Bye.", ko: "정보 감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "I'd like to get two tickets to a performance.", ko: "아이드 라익투 겟 투 티킷츠 투어 퍼포먼스" },
          { en: "What times are available? 7 PM or 9 PM? I'll take 7 PM.", ko: "왓타임즈알 어베일러블? 세븐피엠 오어 나인피엠? 아일 테익 세븐피엠" },
          { en: "How much are the tickets? Do you have any discounts or coupons?", ko: "하우머치알더 티킷츠? 두유해브 애니 디스카운츠 오어 쿠폰즈?" },
          { en: "Do you have parking? Oh, sounds good.", ko: "두유해브 파킹? 오, 사운즈굿" },
          { en: "Thank you for the information. Bye.", ko: "땡큐퍼디 인포메이션. 바이" }
        ],
        warnings: [
          { word: "performance", guide: "퍼포먼스" },
          { word: "discounts", guide: "디스카운츠" },
          { word: "coupons", guide: "쿠폰즈" },
          { word: "available", guide: "어베일러블" }
        ]
      },
      {
        id: 148,
        question: "On the day of the performance, you are sick. Call your friend and explain the situation. Offer two different options for resolving the situation.",
        translation: "공연 당일에 몸이 아파요. 친구에게 전화해서 상황을 설명하고, 해결을 위한 두 가지 다른 옵션을 제안하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 공연 때문에 전화", "상황설명: 몸이 안좋아서 병원감", "대안1: 날짜 재조정(다음주말)", "대안2: 집에서 야구경기 보기", "마무리: 다시 전화달라"],
        script: [
          { en: "Hey, Sunggyu, I'm DJ.", ko: "안녕 성규야, 나 DJ야." },
          { en: "I'm calling about our performance today.", ko: "오늘 공연 때문에 전화했어." },
          { en: "I'm sorry, I'm not feeling well, so I had to see a doctor.", ko: "미안한데, 몸이 안 좋아서 병원에 가야 했어." },
          { en: "So, I wonder if we could reschedule. How about next weekend?", ko: "그래서 말인데, 일정을 다시 잡을 수 있을까? 다음 주말은 어때?" },
          { en: "Or, can we just stay home and watch a baseball game?", ko: "아니면 그냥 집에서 야구 경기 볼까?" },
          { en: "Please call me back. Thanks.", ko: "다시 전화 줘. 고마워." }
        ],
        pronunciation: [
          { en: "Hey, Sunggyu, I'm DJ.", ko: "헤이 성규, 아임 디제이" },
          { en: "I'm calling about our performance today.", ko: "아임 콜링어바웃 아워 퍼포먼스 투데이" },
          { en: "I'm sorry, I'm not feeling well, so I had to see a doctor.", ko: "아임쏘리, 아임낫 필링웰, 소아이 해드투 씨어 닥터" },
          { en: "So, I wonder if we could reschedule. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just stay home and watch a baseball game?", ko: "오어, 캔위 저스트 스테이홈 앤 왓처 베이스볼 게임?" },
          { en: "Please call me back. Thanks.", ko: "플리즈 콜미백. 땡스" }
        ],
        warnings: [
          { word: "performance", guide: "퍼포먼스" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "feeling", guide: "필링" },
          { word: "baseball", guide: "베이스볼" }
        ]
      },
      {
        id: 149,
        question: "Have you ever had a plan or tickets, and then found out that you cannot attend the performance? When was it? What happened? Tell me everything about that situation and what you did to resolve it.",
        translation: "계획이나 티켓이 있었는데 공연에 못 가게 된 적이 있나요? 언제였나요? 무슨 일이 있었나요? 그 상황과 해결 방법을 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "동탄 센트럴파크서 혼자 조깅", "이상한 음악소리 들려서 따라감", "공원 한가운데서 남자가 여친에게 노래로 프러포즈", "알고보니 회사 동료였음", "여친도 당황+본인도 민망", "주변사람 웃기도 했지만 결국 성공(예스)", "그 이후로 공원가면 그 순간 떠오름"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I went to Dongtan Central Park, and I was jogging alone along the park trail.", ko: "동탄 센트럴 파크에 가서 혼자 산책로를 따라 조깅하고 있었어요." },
          { en: "Suddenly, I heard a terrible sound like music.", ko: "그런데 갑자기 음악 같은 끔찍한 소리가 들렸어요." },
          { en: "It was so terrible I couldn't stand it.", ko: "너무 끔찍해서 참을 수가 없었어요." },
          { en: "I was curious, so I followed the sound.", ko: "궁금해서 그 소리를 따라가 봤어요." },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "공원 한가운데서, 누군가 여자친구한테 노래를 불러주고 있었어요." },
          { en: "And you know what? He was my colleague!", ko: "근데 있잖아요? 그 사람이 제 회사 동료였어요!" },
          { en: "He was proposing to her by singing.", ko: "노래로 프러포즈를 하고 있었던 거예요." },
          { en: "She looked embarrassed, and I was ashamed too.", ko: "여자친구는 당황한 표정이었고, 저도 민망했어요." },
          { en: "Some people around him were even laughing, but he got a yes in the end.", ko: "주변 사람들 중에는 웃는 사람도 있었지만, 결국 그는 예스를 받아냈어요." },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "그날 이후로, 공원에 갈 때마다 그 재밌었던 순간이 떠올라요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "I went to Dongtan Central Park, and I was jogging alone along the park trail.", ko: "아이웬투 동탄 센트럴파크, 앤아이워즈 조깅 얼론 얼롱더 파크트레일" },
          { en: "Suddenly, I heard a terrible sound like music.", ko: "서든리, 아이허더 테러블 사운드 라익 뮤직" },
          { en: "It was so terrible I couldn't stand it.", ko: "잇워즈소 테러블 아이쿠든 스탠딧" },
          { en: "I was curious, so I followed the sound.", ko: "아이워즈 큐리어스, 소아이 팔로드더 사운드" },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "인더미들어브더 파크, 썸원워즈 씽어송 투히즈 걸프렌드" },
          { en: "And you know what? He was my colleague!", ko: "앤유노왓? 히워즈마이 컬리그!" },
          { en: "He was proposing to her by singing.", ko: "히워즈 프러포징투허 바이 씽잉" },
          { en: "She looked embarrassed, and I was ashamed too.", ko: "쉬룩트 임배러스트, 앤아이워즈 어셰임드투" },
          { en: "Some people around him were even laughing, but he got a yes in the end.", ko: "썸피플 어라운드힘 워이븐 래핑, 벗히갓어예스 인디엔드" },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "신스댓데이, 웬에버아이 비짓더파크, 아이리멤버댓 퍼니모먼트" }
        ],
        warnings: [
          { word: "embarrassed", guide: "임배러스트" },
          { word: "colleague", guide: "컬리그" },
          { word: "proposing", guide: "프러포징" },
          { word: "curious", guide: "큐리어스" }
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
        structure: ["인사: 여행사 확인", "목적: 휴가 예약하고싶음", "질문1: 인기여행지+추천(도쿄)", "질문2: 가격($2000예산)+할인/프로모션", "질문3: 가능시기(다음달)", "마무리: 도쿄행 2장 확정요청"],
        script: [
          { en: "Hi there, is this the travel agency? — Yes.", ko: "안녕하세요, 여행사 맞나요? — 네." },
          { en: "I'd like to make a reservation for our vacation.", ko: "저희 휴가 예약을 하고 싶어요." },
          { en: "What destinations are popular these days? Can you give me any recommendations? — Tokyo? Oh, that sounds good.", ko: "요즘 어떤 여행지가 인기 있나요? 추천해주실 수 있어요? — 도쿄요? 오, 좋네요." },
          { en: "How much is it? — I have a budget of $2,000. Do you have any discounts or promotions?", ko: "얼마인가요? — 예산이 2,000달러 정도인데. 할인이나 프로모션 있나요?" },
          { en: "When can I go? — Next month? Okay, sounds good.", ko: "언제 갈 수 있나요? — 다음 달이요? 좋아요, 괜찮네요." },
          { en: "So, please confirm two tickets to Tokyo for next month.", ko: "그럼 다음 달 도쿄행 티켓 두 장으로 확정해주세요." },
          { en: "Please call me back. Thank you.", ko: "다시 전화 주세요. 감사합니다." }
        ],
        pronunciation: [
          { en: "Hi there, is this the travel agency? Yes.", ko: "하이데어, 이즈디스더 트래블에이전시? 예스" },
          { en: "I'd like to make a reservation for our vacation.", ko: "아이드 라익투 메이커 레저베이션 퍼아워 베케이션" },
          { en: "What destinations are popular these days? Can you give me any recommendations? Tokyo? Oh, that sounds good.", ko: "왓 데스티네이션즈알 파퓰러 디즈데이즈? 캔유기브미 애니 레커멘데이션즈? 도쿄? 오, 댓 사운즈굿" },
          { en: "How much is it? I have a budget of $2,000. Do you have any discounts or promotions?", ko: "하우머치이즈잇? 아이해버 버짓어브 투싸우전드달러즈. 두유해브 애니 디스카운츠오어 프로모션즈?" },
          { en: "When can I go? Next month? Okay, sounds good.", ko: "웬캔아이고? 넥스트먼쓰? 오케이, 사운즈굿" },
          { en: "So, please confirm two tickets to Tokyo for next month.", ko: "소, 플리즈 컨펌 투 티킷츠투 도쿄 퍼 넥스트먼쓰" },
          { en: "Please call me back. Thank you.", ko: "플리즈 콜미백. 땡큐" }
        ],
        warnings: [
          { word: "reservation", guide: "레저베이션" },
          { word: "destinations", guide: "데스티네이션즈" },
          { word: "promotions", guide: "프로모션즈" },
          { word: "confirm", guide: "컨펌" }
        ]
      },
      {
        id: 151,
        question: "The travel agent informs you that the vacation you want is not available for the date you want. Call your friend and leave a message explaining the situation and offer two or three alternatives.",
        translation: "여행사 직원이 원하는 날짜에 원하는 휴가 상품이 없다고 알려줘요. 친구에게 전화해서 상황을 설명하는 메시지를 남기고 두세 가지 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 휴가 때문에 전화", "상황설명: 예약이 안됨", "대안1: 날짜 재조정(다음달)", "대안2: 다른 여행지(삿포로/홍콩)", "마무리: 다시 전화달라"],
        script: [
          { en: "Hey, Jinwoo? It's me, DJ.", ko: "안녕 진우야? 나 DJ야." },
          { en: "I'm calling about our vacation.", ko: "우리 휴가 때문에 전화했어." },
          { en: "I'm sorry, we can't make it because our reservation isn't available.", ko: "미안한데, 예약이 안 돼서 못 갈 것 같아." },
          { en: "So, I wonder if we could reschedule — about next month.", ko: "그래서 말인데, 일정을 다시 잡을 수 있을까 해서 — 다음 달쯤으로." },
          { en: "Or, if you're up for it, we could go to another destination. How about Sapporo or Hong Kong?", ko: "아니면, 괜찮으면 다른 여행지로 갈까? 삿포로나 홍콩 어때?" },
          { en: "Please call me back. Bye.", ko: "다시 전화 줘. 안녕." }
        ],
        pronunciation: [
          { en: "Hey, Jinwoo? It's me, DJ.", ko: "헤이, 진우? 잇츠미, 디제이" },
          { en: "I'm calling about our vacation.", ko: "아임 콜링어바웃 아워 베케이션" },
          { en: "I'm sorry, we can't make it because our reservation isn't available.", ko: "아임쏘리, 위캔트 메이킷 비커즈 아워 레저베이션 이즌트 어베일러블" },
          { en: "So, I wonder if we could reschedule — about next month.", ko: "소, 아이원더이프위쿠드 리스케줄, 어바웃 넥스트먼쓰" },
          { en: "Or, if you're up for it, we could go to another destination. How about Sapporo or Hong Kong?", ko: "오어, 이퓨어 업퍼릿, 위쿠드 고투 어나더 데스티네이션. 하우어바웃 삿포로 오어 홍콩?" },
          { en: "Please call me back. Bye.", ko: "플리즈 콜미백. 바이" }
        ],
        warnings: [
          { word: "reservation", guide: "레저베이션" },
          { word: "available", guide: "어베일러블" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "destination", guide: "데스티네이션" }
        ]
      },
      {
        id: 152,
        question: "Think about a time when you had a difficulty making a vacation plan. Tell me all about the details, what happened, and what you needed to do.",
        translation: "휴가 계획을 세우는 데 어려움을 겪었던 경험을 떠올려 보세요. 무슨 일이 있었고, 무엇을 해야 했는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구와 휴가 예정이었으나 아들이 아파서 병원감", "그것 때문에 여행 못가고 집에 있음", "아들 위해 삼계탕 요리 결심", "처음 만들었지만 맛있었음", "여행 못갔지만 집에서 좋은 시간 보냄"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전에 있었던 일을 말씀드릴게요." },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "그때 친구랑 휴가를 가기로 되어 있었는데, 아들이 몸이 안 좋아서 병원에 가야 했어요." },
          { en: "Because of that, we couldn't go on the trip and had to stay home instead.", ko: "그것 때문에 여행을 못 가고 대신 집에 있어야 했어요." },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "그래서 아들을 위해 삼계탕을 만들기로 했어요, 아들한테 좋을 것 같아서요." },
          { en: "It was my first time making it, but it was really good.", ko: "처음 만들어보는 거였는데, 정말 맛있었어요." },
          { en: "Although we couldn't go on the trip, we had a really good time at home.", ko: "여행은 못 갔지만, 집에서 정말 좋은 시간을 보냈어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "앳더타임, 위워 서포즈드투 고온어 베케이션 위드마이 프렌드, 벗마이썬 워즌트 필링웰, 소히 해드투 씨어닥터" },
          { en: "Because of that, we couldn't go on the trip and had to stay home instead.", ko: "비커즈어브댓, 위쿠든 고온더 트립 앤 해드투 스테이홈 인스테드" },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "소, 아이디사이디드투 쿡 코리안 치킨수프 퍼마이썬, 비커즈 아이쏫잇 우드비 굿퍼힘" },
          { en: "It was my first time making it, but it was really good.", ko: "잇워즈 마이퍼스트타임 메이킹잇, 벗잇워즈 릴리굿" },
          { en: "Although we couldn't go on the trip, we had a really good time at home.", ko: "얼도우 위쿠든 고온더 트립, 위해더 릴리 굿타임 앳홈" }
        ],
        warnings: [
          { word: "vacation", guide: "베케이션" },
          { word: "decided", guide: "디사이디드" },
          { word: "instead", guide: "인스테드" },
          { word: "although", guide: "얼도우" }
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
        structure: ["인사", "목적: 건강검진 받고싶어서 병원가려함", "질문1: 좋은 날(월요일)", "질문2: 가능한시간(오후7시)", "질문3: 주차장여부", "마무리: 예약 확정요청"],
        script: [
          { en: "Hi there.", ko: "안녕하세요." },
          { en: "Well, I'd like to see a doctor for a health checkup.", ko: "건강검진을 받고 싶어서요." },
          { en: "When do you think is good to come in? — Monday? Okay.", ko: "언제 오는 게 좋을까요? — 월요일이요? 알겠어요." },
          { en: "What time is available? — Seven PM? Okay, good.", ko: "몇 시가 가능한가요? — 오후 7시요? 네, 좋아요." },
          { en: "Do you have a parking lot? — Awesome, great.", ko: "주차장 있나요? — 좋네요, 잘됐어요." },
          { en: "Thank you for the information.", ko: "정보 감사합니다." },
          { en: "So, please confirm my appointment for Monday at seven PM.", ko: "그럼 월요일 오후 7시로 예약 확정해주세요." },
          { en: "Thank you. Bye.", ko: "감사합니다. 안녕히 계세요." }
        ],
        pronunciation: [
          { en: "Hi there.", ko: "하이데어" },
          { en: "Well, I'd like to see a doctor for a health checkup.", ko: "웰, 아이드라익투 씨어 닥터 퍼러 헬쓰 첵업" },
          { en: "When do you think is good to come in? Monday? Okay.", ko: "웬두유씽크이즈 굿투컴인? 먼데이? 오케이" },
          { en: "What time is available? Seven PM? Okay, good.", ko: "왓타임이즈 어베일러블? 세븐피엠? 오케이, 굿" },
          { en: "Do you have a parking lot? Awesome, great.", ko: "두유해버 파킹랏? 어썸, 그레잇" },
          { en: "Thank you for the information.", ko: "땡큐퍼디 인포메이션" },
          { en: "So, please confirm my appointment for Monday at seven PM.", ko: "소, 플리즈 컨펌 마이 어포인트먼트 퍼 먼데이 앳 세븐피엠" },
          { en: "Thank you. Bye.", ko: "땡큐. 바이" }
        ],
        warnings: [
          { word: "checkup", guide: "첵업" },
          { word: "available", guide: "어베일러블" },
          { word: "confirm", guide: "컨펌" },
          { word: "appointment", guide: "어포인트먼트" }
        ]
      },
      {
        id: 154,
        question: "On the day of your appointment, you think you are not able to make it. Call the doctor's office and explain your situation. Offer some alternatives to reschedule.",
        translation: "예약 당일에 갈 수 없을 것 같아요. 병원에 전화해서 상황을 설명하고, 일정을 다시 잡기 위한 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 오늘 예약 때문에 전화", "상황설명: 아내가 감기로 쉬어야함", "대안1: 날짜 재조정(다음주말)", "대안2: 이번엔 취소", "마무리: 다시 전화달라"],
        script: [
          { en: "Hi there, it's Dongjun.", ko: "안녕하세요, 저 동준이에요." },
          { en: "I'm calling about our appointment today.", ko: "오늘 예약 때문에 전화드렸어요." },
          { en: "I'm sorry, we can't make it because my wife isn't feeling well — she has a bad cold and needs to rest.", ko: "죄송한데, 저희 못 갈 것 같아요 — 아내가 몸이 안 좋아서 심한 감기라 쉬어야 해서요." },
          { en: "So, I wonder if we could reschedule. How about next weekend?", ko: "그래서 말인데, 일정을 다시 잡을 수 있을까요? 다음 주말은 어때요?" },
          { en: "Or, can we just cancel this time?", ko: "아니면 이번엔 그냥 취소할 수 있을까요?" },
          { en: "Please call me back. Thanks.", ko: "다시 전화 주세요. 감사합니다." }
        ],
        pronunciation: [
          { en: "Hi there, it's Dongjun.", ko: "하이데어, 잇츠 동준" },
          { en: "I'm calling about our appointment today.", ko: "아임 콜링어바웃 아워 어포인트먼트 투데이" },
          { en: "I'm sorry, we can't make it because my wife isn't feeling well — she has a bad cold and needs to rest.", ko: "아임쏘리, 위캔트 메이킷 비커즈 마이와이프 이즌트 필링웰, 쉬해저 배드콜드 앤 니즈투레스트" },
          { en: "So, I wonder if we could reschedule. How about next weekend?", ko: "소, 아이원더이프위쿠드 리스케줄. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can we just cancel this time?", ko: "오어, 캔위 저스트 캔슬디스타임?" },
          { en: "Please call me back. Thanks.", ko: "플리즈 콜미백. 땡스" }
        ],
        warnings: [
          { word: "appointment", guide: "어포인트먼트" },
          { word: "feeling", guide: "필링" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "cancel", guide: "캔슬" }
        ]
      },
      {
        id: 155,
        question: "Think about a time when you had a difficulty making a plan. Tell me all about the details, what happened, and what you needed to do.",
        translation: "계획을 세우는 데 어려움을 겪었던 경험을 떠올려 보세요. 무슨 일이 있었고, 무엇을 해야 했는지 자세히 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전 경험", "친구와 휴가 계획했으나 아들이 아파서 병원감", "그것 때문에 여행 못가고 집에 있음", "아들 위해 삼계탕 요리 결심", "처음 만들었지만 맛있었음", "여행 못갔지만 집에서 좋은 시간 보냄"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전에 있었던 일을 말씀드릴게요." },
          { en: "At the time, we planned to go on a vacation with my friend.", ko: "그때 친구랑 휴가를 가기로 계획했었어요." },
          { en: "However, my son wasn't feeling well, so he had to see a doctor.", ko: "그런데 아들이 몸이 안 좋아서 병원에 가야 했어요." },
          { en: "Because of that, we couldn't go on the trip and had to stay home instead.", ko: "그것 때문에 여행을 못 가고 대신 집에 있어야 했어요." },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "그래서 아들을 위해 삼계탕을 만들기로 했어요, 아들한테 좋을 것 같아서요." },
          { en: "It was my first time making it, but it was really good.", ko: "처음 만들어보는 거였는데, 정말 맛있었어요." },
          { en: "Although we couldn't go on the trip, we had a good time at home.", ko: "여행은 못 갔지만, 집에서 좋은 시간을 보냈어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 어바웃 투이어즈어고" },
          { en: "At the time, we planned to go on a vacation with my friend.", ko: "앳더타임, 위플랜드투 고온어 베케이션 위드마이 프렌드" },
          { en: "However, my son wasn't feeling well, so he had to see a doctor.", ko: "하우에버, 마이썬 워즌트 필링웰, 소히 해드투 씨어닥터" },
          { en: "Because of that, we couldn't go on the trip and had to stay home instead.", ko: "비커즈어브댓, 위쿠든 고온더 트립 앤 해드투 스테이홈 인스테드" },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "소, 아이디사이디드투 쿡 코리안 치킨수프 퍼마이썬, 비커즈 아이쏫잇 우드비 굿퍼힘" },
          { en: "It was my first time making it, but it was really good.", ko: "잇워즈 마이퍼스트타임 메이킹잇, 벗잇워즈 릴리굿" },
          { en: "Although we couldn't go on the trip, we had a good time at home.", ko: "얼도우 위쿠든 고온더 트립, 위해더 굿타임 앳홈" }
        ],
        warnings: [
          { word: "planned", guide: "플랜드" },
          { word: "instead", guide: "인스테드" },
          { word: "decided", guide: "디사이디드" },
          { word: "although", guide: "얼도우" }
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
        structure: ["인사", "목적: 곧 그 나라 방문 예정", "질문1: 추천 명소", "질문2: 근처 좋은 호텔", "질문3: 좋은 쇼핑몰", "마무리: 정보 고마움"],
        script: [
          { en: "Hey, Ruda? I'm Dongjun.", ko: "안녕, 루다? 나 동준이야." },
          { en: "Do you have time to talk?", ko: "얘기할 시간 있어?" },
          { en: "I'd like to visit your country soon.", ko: "곧 네 나라에 방문하고 싶어." },
          { en: "Do you recommend any landmarks? — Great, sounds good.", ko: "추천할 만한 명소 있어? — 좋아, 괜찮네." },
          { en: "Is there a good hotel nearby? — Sounds good.", ko: "근처에 괜찮은 호텔 있어? — 좋아." },
          { en: "Where's a good shopping mall? — Awesome, okay.", ko: "쇼핑몰은 어디가 좋아? — 좋다, 알겠어." },
          { en: "Thank you for the information.", ko: "정보 고마워." }
        ],
        pronunciation: [
          { en: "Hey, Ruda? I'm Dongjun.", ko: "헤이, 루다? 아임 동준" },
          { en: "Do you have time to talk?", ko: "두유 해브 타임투톡?" },
          { en: "I'd like to visit your country soon.", ko: "아이드 라익투 비짓 유어 컨트리 순" },
          { en: "Do you recommend any landmarks? Great, sounds good.", ko: "두유 레커멘드 애니 랜드마크스? 그레이트, 사운즈굿" },
          { en: "Is there a good hotel nearby? Sounds good.", ko: "이즈데어 어 굿호텔 니어바이? 사운즈굿" },
          { en: "Where's a good shopping mall? Awesome, okay.", ko: "웨어즈어 굿 샤핑몰? 어썸, 오케이" },
          { en: "Thank you for the information.", ko: "땡큐퍼디 인포메이션" }
        ],
        warnings: [
          { word: "landmarks", guide: "랜드마크스" },
          { word: "recommend", guide: "레커멘드" },
          { word: "nearby", guide: "니어바이" },
          { word: "shopping", guide: "샤핑" }
        ]
      },
      {
        id: 159,
        question: "On the day before the trip, you notice you're not able to visit your friend. Call your friend and explain why, offering two or three alternatives to visit in the near future.",
        translation: "여행 전날, 친구를 방문할 수 없다는 걸 알게 됐어요. 친구에게 전화해서 이유를 설명하고, 가까운 시일 내에 방문할 수 있는 두세 가지 대안을 제시하세요.",
        type: "롤플레이 · 해결하기",
        structure: ["인사", "목적: 내일 여행 때문에 전화", "상황설명: 몸이 안좋아서 병원가야함", "대안1: 날짜 재조정(다음주말)", "대안2: 가능한때 알려달라 요청", "마무리"],
        script: [
          { en: "Hey, Ruda? I'm Dongjun.", ko: "안녕, 루다? 나 동준이야." },
          { en: "I'm calling about my trip tomorrow.", ko: "내일 가려던 여행 때문에 전화했어." },
          { en: "I'm sorry, I can't make it because I'm not feeling well, so I had to see a doctor.", ko: "미안한데, 몸이 안 좋아서 병원에 가야 해서 못 갈 것 같아." },
          { en: "I wonder if we could reschedule. How about next weekend?", ko: "일정을 다시 잡을 수 있을까 해서. 다음 주말은 어때?" },
          { en: "Or, can you let me know when you're available?", ko: "아니면 언제 괜찮은지 알려줄래?" },
          { en: "Please call me back. Thanks.", ko: "다시 전화 줘. 고마워." }
        ],
        pronunciation: [
          { en: "Hey, Ruda? I'm Dongjun.", ko: "헤이, 루다? 아임 동준" },
          { en: "I'm calling about my trip tomorrow.", ko: "아임 콜링어바웃 마이트립 투머로우" },
          { en: "I'm sorry, I can't make it because I'm not feeling well, so I had to see a doctor.", ko: "아임쏘리, 아이캔트 메이킷 비커즈 아임낫 필링웰, 소아이 해드투 씨어닥터" },
          { en: "I wonder if we could reschedule. How about next weekend?", ko: "아이원더이프위쿠드 리스케줄. 하우어바웃 넥스트위켄드?" },
          { en: "Or, can you let me know when you're available?", ko: "오어, 캔유 렛미노우 웬유어 어베일러블?" },
          { en: "Please call me back. Thanks.", ko: "플리즈 콜미백. 땡스" }
        ],
        warnings: [
          { word: "feeling", guide: "필링" },
          { word: "reschedule", guide: "리스케줄" },
          { word: "available", guide: "어베일러블" },
          { word: "tomorrow", guide: "투머로우" }
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
  {
    id: 55, emoji: "🎪", nameKo: "지역 행사",
    category: "돌발주제",
    questions: [
      {
        id: 168,
        question: "Tell me about some of the gatherings or celebrations that happen in your neighborhood.",
        translation: "동네에서 열리는 모임이나 행사에 대해 말해 주세요.",
        type: "일반 설명",
        structure: ["동네 지역행사는 센트럴파크에서", "게임축제가 최대 축제(매년 여름)", "천명정도 수용가능한 규모", "게임부스→포장마차(팝콘/간식)→공연 순", "정말 재밌는 행사"],
        script: [
          { en: "Local events in my neighborhood are usually held at Central Park.", ko: "저희 동네 지역행사는 보통 센트럴파크에서 열려요." },
          { en: "The game festival is one of the biggest festivals, held every summer.", ko: "게임 축제가 제일 큰 축제 중 하나인데, 매년 여름에 열려요." },
          { en: "It's big enough to accommodate about a thousand people.", ko: "천 명 정도 수용할 수 있을 만큼 커요." },
          { en: "When you go, you'll first see game booths, then food stalls selling popcorn and snacks, then performances.", ko: "가면, 먼저 게임 부스가 보이고, 그다음엔 팝콘이랑 간식 파는 포장마차, 그다음엔 공연도 있어요." },
          { en: "It's a really fun event.", ko: "정말 재밌는 행사예요." }
        ],
        pronunciation: [
          { en: "Local events in my neighborhood are usually held at Central Park.", ko: "로컬이벤츠 인마이 네이버후드알 유주얼리 헬드앳 센트럴파크" },
          { en: "The game festival is one of the biggest festivals, held every summer.", ko: "더게임 페스티벌이즈 원어브더 비기스트 페스티벌즈, 헬드에브리 서머" },
          { en: "It's big enough to accommodate about a thousand people.", ko: "잇츠빅이너프 투어커모데이트 어바웃어싸우전드 피플" },
          { en: "When you go, you'll first see game booths, then food stalls selling popcorn and snacks, then performances.", ko: "웬유고, 유일 퍼스트씨 게임부스, 덴 푸드스톨즈 셀링팝콘앤스낵스, 덴 퍼포먼시즈" },
          { en: "It's a really fun event.", ko: "잇처 릴리펀 이벤트" }
        ],
        warnings: [
          { word: "accommodate", guide: "어커모데이트" },
          { word: "festival", guide: "페스티벌" },
          { word: "booths", guide: "부스" },
          { word: "performances", guide: "퍼포먼시즈" }
        ]
      },
      {
        id: 169,
        question: "Tell me about a gathering or celebration that was held in the area where you live. Where was it held, what was the purpose, who was there, and what happened?",
        translation: "사시는 지역에서 열렸던 모임이나 행사에 대해 말해 주세요. 어디서 열렸고, 목적이 무엇이었고, 누가 있었고, 무슨 일이 있었나요?",
        type: "기억에 남는 경험",
        structure: ["2년전, 가족과 게임축제(센트럴파크) 가기로함", "아들이 갑자기 감기심해져 못감", "대신 삼계탕 해주기로 결심", "닭/쌀/인삼 구매", "재료 채워 2시간 끓임", "결과 좋았음, 아들 감동+몸 나아짐"],
        script: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "약 2년 전 있었던 일을 말씀드릴게요." },
          { en: "I was supposed to go to the game festival at Central Park with my family.", ko: "가족이랑 센트럴파크에서 열리는 게임 축제에 가기로 되어 있었어요." },
          { en: "However, my son suddenly got a bad cold, so we couldn't go.", ko: "그런데 아들이 갑자기 감기가 심하게 걸려서 못 갔어요." },
          { en: "Instead, I decided to make Korean-style chicken soup to help him get his strength back.", ko: "대신 아들 기력 회복에 도움이 되게 삼계탕을 해주기로 했어요." },
          { en: "I went to the store and bought chicken, rice, and ginseng.", ko: "마트에 가서 닭, 쌀, 인삼을 샀어요." },
          { en: "I stuffed the chicken with the rice and ginseng, then boiled it for about two hours.", ko: "닭 안에 쌀이랑 인삼을 채워 넣고, 두 시간 정도 끓였어요." },
          { en: "It turned out amazing! My son was really touched by how good it tasted, and he said he was already feeling better.", ko: "결과가 정말 좋았어요! 아들이 맛있다고 정말 감동받았고, 벌써 몸이 좀 나아진 것 같다고 했어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from about two years ago.", ko: "렛미텔유 어바웃 마이익스피어리언스 프럼어바웃 투이어즈어고" },
          { en: "I was supposed to go to the game festival at Central Park with my family.", ko: "아이워즈 서포즈드투 고투더게임 페스티벌 앳센트럴파크 위드마이패밀리" },
          { en: "However, my son suddenly got a bad cold, so we couldn't go.", ko: "하우에버, 마이썬 서든리갓어 배드콜드, 소위쿠든고" },
          { en: "Instead, I decided to make Korean-style chicken soup to help him get his strength back.", ko: "인스테드, 아이디사이디드투 메익 코리안스타일 치킨수프 투헬프힘 겟히즈 스태미너백" },
          { en: "I went to the store and bought chicken, rice, and ginseng.", ko: "아이웬투더 스토어 앤보웃 치킨, 라이스, 앤진생" },
          { en: "I stuffed the chicken with the rice and ginseng, then boiled it for about two hours.", ko: "아이스터프트더 치킨위드더 라이스앤진생, 덴보일드잇 퍼어바웃 투아워즈" },
          { en: "It turned out amazing! My son was really touched by how good it tasted, and he said he was already feeling better.", ko: "잇턴다웃 어메이징! 마이썬 워즈 릴리터치트바이 하우굿잇 테이스티드, 앤히세드 히워즈 올레디 필링 베러" }
        ],
        warnings: [
          { word: "instead", guide: "인스테드" },
          { word: "stuffed", guide: "스터프트" },
          { word: "ginseng", guide: "진생" },
          { word: "amazing", guide: "어메이징" }
        ]
      },
      {
        id: 170,
        question: "Sometimes, unexpected things happen at local gatherings or events. Tell me about something unexpected that happened at an event in your area.",
        translation: "지역 행사에서 가끔 예상치 못한 일이 생기기도 하죠. 사는 지역 행사에서 있었던 예상치 못한 일에 대해 말해 주세요.",
        type: "기억에 남는 경험",
        structure: ["2년전, 센트럴파크서 기억에 남는 경험", "혼자 산책로 조깅중", "끔찍한 라이브 노랫소리 들려서 따라감", "공원 한가운데서 남자가 여친에게 노래 프러포즈", "알고보니 직장 동료였음", "여친 당황+본인도 민망", "주변사람 웃기도 함", "결국 예스 받아냄", "그 이후 공원가면 그 순간 떠오름"],
        script: [
          { en: "About two years ago, I had a very memorable experience at Central Park.", ko: "약 2년 전, 센트럴파크에서 정말 기억에 남는 경험을 했어요." },
          { en: "At that time, I was jogging alone along the park trail.", ko: "그때 저는 공원 산책로를 따라 혼자 조깅하고 있었어요." },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "갑자기 끔찍한 라이브 노랫소리가 들렸어요." },
          { en: "It was so terrible that I couldn't stand it.", ko: "너무 끔찍해서 참을 수가 없었어요." },
          { en: "I was curious, so I followed the sound.", ko: "궁금해서 그 소리를 따라갔어요." },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "공원 한가운데서 누군가 여자친구에게 노래를 불러주고 있었어요." },
          { en: "And you know what? He was my colleague!", ko: "그런데 있잖아요? 그 사람은 제 직장 동료였어요!" },
          { en: "He was proposing to her by singing!", ko: "노래로 프러포즈를 하고 있었던 거예요!" },
          { en: "Poor her!", ko: "불쌍한 그녀!" },
          { en: "She looked embarrassed, and I was very ashamed too.", ko: "여자친구는 당황한 표정이었고, 저도 너무 민망했어요." },
          { en: "Some people around him were even laughing.", ko: "주변 사람들 중 몇몇은 웃기까지 했어요." },
          { en: "I didn't know why he chose singing as a proposal, but he got a 'yes' in the end.", ko: "왜 하필 노래를 프러포즈 방법으로 골랐는지는 모르겠지만, 결국 그는 '예스'를 받아냈어요." },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "그날 이후로 그 공원에 갈 때마다 그 재밌었던 순간이 떠올라요." }
        ],
        pronunciation: [
          { en: "About two years ago, I had a very memorable experience at Central Park.", ko: "어바웃 투이어즈어고, 아이해더 베리 메머러블 익스피어리언스 앳센트럴파크" },
          { en: "At that time, I was jogging alone along the park trail.", ko: "앳댓타임, 아이워즈 조깅얼론 얼롱더 파크트레일" },
          { en: "Suddenly, I heard a terrible live music sound.", ko: "서든리, 아이허더 테러블 라이브뮤직 사운드" },
          { en: "It was so terrible that I couldn't stand it.", ko: "잇워즈소테러블 댓아이쿠든 스탠딧" },
          { en: "I was curious, so I followed the sound.", ko: "아이워즈 큐리어스, 소아이 팔로드더사운드" },
          { en: "In the middle of the park, someone was singing a song to his girlfriend.", ko: "인더미들어브더파크, 썸원워즈 씽어송 투히즈걸프렌드" },
          { en: "And you know what? He was my colleague!", ko: "앤유노왓? 히워즈 마이컬리그!" },
          { en: "He was proposing to her by singing!", ko: "히워즈 프러포징투허 바이씽잉!" },
          { en: "Poor her!", ko: "푸어허!" },
          { en: "She looked embarrassed, and I was very ashamed too.", ko: "쉬룩트 임배러스트, 앤아이워즈 베리 어셰임드투" },
          { en: "Some people around him were even laughing.", ko: "썸피플 어라운드힘 워이븐 래핑" },
          { en: "I didn't know why he chose singing as a proposal, but he got a 'yes' in the end.", ko: "아이디든노우 와이히초즈 씽잉애저 프러포절, 벗히갓어 예스 인디엔드" },
          { en: "Since that day, whenever I visit the park, I remember that funny moment.", ko: "신스댓데이, 웬에버아이비짓더파크, 아이리멤버댓 퍼니모먼트" }
        ],
        warnings: [
          { word: "embarrassed", guide: "임배러스트" },
          { word: "colleague", guide: "컬리그" },
          { word: "curious", guide: "큐리어스" },
          { word: "ashamed", guide: "어셰임드" }
        ]
      }
    ]
  },
  {
    id: 56, emoji: "🚌", nameKo: "교통수단",
    category: "돌발주제",
    questions: [
      {
        id: 171,
        question: "Tell me about how people typically get around in your country. Do people drive their own cars? Do they use trains or buses? What are some typical means of transportation?",
        translation: "당신 나라 사람들이 보통 어떻게 이동하는지 말해 주세요. 자가용을 운전하나요? 기차나 버스를 이용하나요? 일반적인 교통수단은 무엇인가요?",
        type: "일반 설명",
        structure: ["대중교통(버스/지하철) 많이씀", "저렴하고 편리함", "버스 전용차선있어 정체없음", "출퇴근때도 어디든 가능", "개인적으로 주로 지하철탐", "전반적으로 편리함"],
        script: [
          { en: "Most people in Korea use public transportation, like buses and subways.", ko: "한국 사람들 대부분이 버스나 지하철 같은 대중교통을 이용해요." },
          { en: "Honestly, it's pretty cheap and convenient.", ko: "솔직히, 꽤 저렴하고 편리해요." },
          { en: "Buses have a special lane, so no traffic.", ko: "버스는 전용 차선이 있어서, 정체가 없어요." },
          { en: "You can get almost anywhere, especially during rush hour.", ko: "출퇴근 시간에도 거의 어디든 갈 수 있어요." },
          { en: "I personally take the subway most of the time.", ko: "저는 개인적으로 대부분 지하철을 타요." },
          { en: "Overall, it's really convenient here.", ko: "전반적으로, 여기는 정말 편리해요." }
        ],
        pronunciation: [
          { en: "Most people in Korea use public transportation, like buses and subways.", ko: "모스트 피플 인코리아 유즈 퍼블릭 트랜스포테이션, 라익 버시즈앤 서브웨이즈" },
          { en: "Honestly, it's pretty cheap and convenient.", ko: "아너슬리, 잇츠 프리티 칩 앤 컨비니언트" },
          { en: "Buses have a special lane, so no traffic.", ko: "버시즈해버 스페셜레인, 소노 트래픽" },
          { en: "You can get almost anywhere, especially during rush hour.", ko: "유캔겟 올모스트 애니웨어, 이스페셜리 듀어링 러쉬아워" },
          { en: "I personally take the subway most of the time.", ko: "아이 퍼스널리 테익더 서브웨이 모스트어브더타임" },
          { en: "Overall, it's really convenient here.", ko: "오버롤, 잇츠 릴리 컨비니언트 히어" }
        ],
        warnings: [
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "convenient", guide: "컨비니언트" },
          { word: "especially", guide: "이스페셜리" }
        ]
      },
      {
        id: 172,
        question: "Tell me about the kinds of transportation you use on a typical day. Where do you usually go, and how do you get there?",
        translation: "평소에 어떤 교통수단을 이용하는지 말해 주세요. 보통 어디로 가고, 어떻게 가나요?",
        type: "활동묘사",
        structure: ["평일엔 차로 출근(회사엔 대중교통없음)", "주말엔 가족과 버스탐", "서울갈때 버스가 주차/체증 피하기 좋음", "한시간정도, 하루얘기나눔", "특별친않지만 항상 즐거운 시간"],
        script: [
          { en: "On weekdays, I usually get to work by car.", ko: "평일에는 보통 차로 출근해요." },
          { en: "Because there's no public transportation to my company.", ko: "회사까지 오는 대중교통이 없어서요." },
          { en: "On weekends, though, everything is different. I usually take the bus with my family.", ko: "주말엔, 근데, 다 달라요. 보통 가족이랑 버스를 타요." },
          { en: "We have a lot of free time, and taking the bus helps us avoid parking and traffic when we go to Seoul.", ko: "저희는 자유 시간이 많고, 버스를 타면 서울 갈 때 주차랑 교통체증을 피할 수 있어요." },
          { en: "It takes about an hour, and we talk about our day. It's nothing special, but I always enjoy that time on the bus.", ko: "한 시간 정도 걸리는데, 그동안 오늘 하루 얘기를 해요. 특별한 건 아니지만, 버스에서 그 시간이 항상 즐거워요." }
        ],
        pronunciation: [
          { en: "On weekdays, I usually get to work by car.", ko: "온위크데이즈, 아이 유주얼리 겟투워크 바이카" },
          { en: "Because there's no public transportation to my company.", ko: "비커즈 데얼즈노 퍼블릭 트랜스포테이션 투마이 컴퍼니" },
          { en: "On weekends, though, everything is different. I usually take the bus with my family.", ko: "온위켄즈, 도우, 에브리씽이즈 디퍼런트. 아이유주얼리 테익더버스 위드마이패밀리" },
          { en: "We have a lot of free time, and taking the bus helps us avoid parking and traffic when we go to Seoul.", ko: "위해버 라러브 프리타임, 앤테이킹더버스 헬프스어스 어보이드 파킹앤트래픽 웬위고투 서울" },
          { en: "It takes about an hour, and we talk about our day. It's nothing special, but I always enjoy that time on the bus.", ko: "잇테익스어바운언아워, 앤위톡어바웃 아워데이. 잇츠낫씽스페셜, 벗아이올웨이즈 인조이댓타임 온더버스" }
        ],
        warnings: [
          { word: "avoid", guide: "어보이드" },
          { word: "parking", guide: "파킹" },
          { word: "traffic", guide: "트래픽" },
          { word: "special", guide: "스페셜" }
        ]
      },
      {
        id: 173,
        question: "How did you travel when you were a child? Were the kinds of transportation different back then? Describe how people used to get around in your city.",
        translation: "어릴 때는 어떻게 이동했나요? 그때는 교통수단이 지금과 달랐나요? 그 당시 사람들이 어떻게 이동했는지 설명해 주세요.",
        type: "과거 비교",
        structure: ["교통수단 많이 변함", "어릴땐 지하철노선 적었음", "예전엔 매번 현금결제", "지금은 교통카드로 결제", "지하철역에 스크린도어 생겨 안전", "전반적으로 훨씬 편리해짐"],
        script: [
          { en: "Most things about transportation have changed a lot over the years.", ko: "교통수단은 대부분 몇 년 동안 많이 변했어요." },
          { en: "Honestly, when I was a kid, there were only a few subway lines.", ko: "솔직히, 제가 어릴 때는 지하철 노선이 몇 개 없었어요." },
          { en: "About payment, people used to pay in cash every time.", ko: "결제는, 사람들이 매번 현금으로 냈어요." },
          { en: "Now, you can just tap a transportation card instead.", ko: "지금은, 그냥 교통카드를 대면 돼요." },
          { en: "I personally think subway stations are much safer now, with screen doors.", ko: "저는 개인적으로 지하철역에 스크린도어가 생겨서 훨씬 안전해진 것 같아요." },
          { en: "Overall, it's way more convenient these days.", ko: "전반적으로, 요즘은 훨씬 편리해요." }
        ],
        pronunciation: [
          { en: "Most things about transportation have changed a lot over the years.", ko: "모스트씽즈 어바웃 트랜스포테이션 해브 체인지드 어랏 오버디이어즈" },
          { en: "Honestly, when I was a kid, there were only a few subway lines.", ko: "아너슬리, 웬아이워저 키드, 데어워 온리어퓨 서브웨이라인즈" },
          { en: "About payment, people used to pay in cash every time.", ko: "어바웃 페이먼트, 피플 유즈투 페이인캐시 에브리타임" },
          { en: "Now, you can just tap a transportation card instead.", ko: "나우, 유캔저스트 탭어 트랜스포테이션카드 인스테드" },
          { en: "I personally think subway stations are much safer now, with screen doors.", ko: "아이퍼스널리 씽크 서브웨이 스테이션즈알 머치 세이퍼나우, 위드 스크린도어즈" },
          { en: "Overall, it's way more convenient these days.", ko: "오버롤, 잇츠웨이모어 컨비니언트 디즈데이즈" }
        ],
        warnings: [
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "safer", guide: "세이퍼" },
          { word: "convenient", guide: "컨비니언트" }
        ]
      }
    ]
  },
  {
    id: 57, emoji: "⛅", nameKo: "날씨",
    category: "돌발주제",
    questions: [
      {
        id: 174,
        question: "Tell me about the weather in your country. How are the seasons? What is the weather like in each season?",
        translation: "당신 나라의 날씨에 대해 말해 주세요. 계절은 어떤가요? 각 계절의 날씨는 어떤가요?",
        type: "일반 설명",
        structure: ["뚜렷한 4계절", "봄가을 지내기 좋음", "여름은 35도 넘기도함", "겨울은 매섭게 추움(스키/스노보드)", "개인적으로 단풍때문에 가을 좋아함", "모든 계절 다 좋음"],
        script: [
          { en: "Most people in Korea experience four clear seasons.", ko: "한국 사람들 대부분이 뚜렷한 네 계절을 경험해요." },
          { en: "Honestly, spring and fall are pretty nice and comfortable.", ko: "솔직히, 봄이랑 가을은 꽤 좋고 지내기 좋아요." },
          { en: "About summer, it gets really hot, sometimes above 35 degrees.", ko: "여름은, 정말 더운데, 가끔 35도를 넘기도 해요." },
          { en: "Winter is freezing cold. Some people like skiing or snowboarding then.", ko: "겨울은 매섭게 추워요. 그때 스키나 스노보드 좋아하는 사람들도 있어요." },
          { en: "I personally like fall the most, because of the colorful leaves.", ko: "저는 개인적으로 단풍 때문에 가을을 제일 좋아해요." },
          { en: "Overall, I like all kinds of seasons.", ko: "전반적으로, 저는 모든 계절이 다 좋아요." }
        ],
        pronunciation: [
          { en: "Most people in Korea experience four clear seasons.", ko: "모스트 피플 인코리아 익스피어리언스 포 클리어 시즌즈" },
          { en: "Honestly, spring and fall are pretty nice and comfortable.", ko: "아너슬리, 스프링앤폴알 프리티 나이스앤 컴퍼러블" },
          { en: "About summer, it gets really hot, sometimes above 35 degrees.", ko: "어바웃 서머, 잇겟츠 릴리핫, 썸타임즈 어보브 써리파이브 디그리즈" },
          { en: "Winter is freezing cold. Some people like skiing or snowboarding then.", ko: "윈터이즈 프리징콜드. 썸피플 라익 스킹오어 스노보딩 덴" },
          { en: "I personally like fall the most, because of the colorful leaves.", ko: "아이 퍼스널리 라익 폴더모스트, 비커즈어브더 컬러풀 리브즈" },
          { en: "Overall, I like all kinds of seasons.", ko: "오버롤, 아이라익 올카인즈어브 시즌즈" }
        ],
        warnings: [
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "degrees", guide: "디그리즈" },
          { word: "freezing", guide: "프리징" }
        ]
      },
      {
        id: 175,
        question: "How has the weather in your country changed over time? Is the weather different from what it used to be?",
        translation: "당신 나라의 날씨는 시간이 지나면서 어떻게 변했나요? 예전과 지금 날씨가 다른가요?",
        type: "과거 비교",
        structure: ["계절 많이 변함(특히 여름/겨울)", "여름 더 길고 더워짐", "겨울도 더 추워짐(영하10도)", "계절이 더 극단적으로 느껴짐", "변화가 확실히 느껴짐"],
        script: [
          { en: "The seasons have changed a lot, especially summer and winter.", ko: "계절들이 많이 변했어요, 특히 여름이랑 겨울이요." },
          { en: "Honestly, summer is getting longer and hotter.", ko: "솔직히, 여름이 더 길어지고 더 더워지고 있어요." },
          { en: "About winter, it's the same story — it's colder now.", ko: "겨울도, 마찬가지예요 — 지금은 더 추워요." },
          { en: "It gets really cold, like minus 10.", ko: "정말 추워져요, 영하 10도쯤이요." },
          { en: "I personally think the seasons feel more extreme than before.", ko: "저는 개인적으로 계절이 예전보다 더 극단적으로 느껴지는 것 같아요." },
          { en: "Overall, I really feel the change.", ko: "전반적으로, 변화가 정말 느껴져요." }
        ],
        pronunciation: [
          { en: "The seasons have changed a lot, especially summer and winter.", ko: "더 시즌즈해브 체인지드 어랏, 이스페셜리 서머앤윈터" },
          { en: "Honestly, summer is getting longer and hotter.", ko: "아너슬리, 서머이즈 게링 롱거앤 하러" },
          { en: "About winter, it's the same story — it's colder now.", ko: "어바웃 윈터, 잇츠더 세임스토리, 잇츠 콜더나우" },
          { en: "It gets really cold, like minus 10.", ko: "잇겟츠 릴리콜드, 라익 마이너스텐" },
          { en: "I personally think the seasons feel more extreme than before.", ko: "아이퍼스널리 씽크더 시즌즈 필모어 익스트림 댄비포" },
          { en: "Overall, I really feel the change.", ko: "오버롤, 아이릴리 필더체인지" }
        ],
        warnings: [
          { word: "extreme", guide: "익스트림" },
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "minus", guide: "마이너스" }
        ]
      },
      {
        id: 176,
        question: "Tell me about a memorable experience related to severe weather. Maybe there was a heatwave or a storm. What made that experience unforgettable?",
        translation: "심한 날씨와 관련해서 기억에 남는 경험에 대해 말해 주세요. 폭염이나 폭풍이었을 수도 있어요. 그 경험이 왜 잊을 수 없었나요?",
        type: "기억에 남는 경험",
        structure: ["작년 여름, 정말 더웠음", "친구와 휴가 예정이었으나 아들이 아파서 병원감", "그것 때문에 여행 못가고 집에 있음", "아들 위해 삼계탕 요리 결심", "처음 만들었지만 맛있었음", "여행 못갔지만 집에서 좋은 시간 보냄"],
        script: [
          { en: "Let me tell you about my experience from last summer.", ko: "작년 여름에 있었던 일을 말씀드릴게요." },
          { en: "It was really hot.", ko: "정말 더웠어요." },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "그때 친구랑 여행을 가기로 되어 있었는데, 아들이 몸이 안 좋아서 병원에 가야 했어요." },
          { en: "Because of that, we couldn't go on a trip and had to stay home instead.", ko: "그래서 여행을 못 가고 대신 집에 있어야 했어요." },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "그래서 아들한테 좋을 것 같아서 삼계탕을 해주기로 했어요." },
          { en: "It was my first time making it, but it was really good.", ko: "처음 만들어보는 거였는데, 정말 맛있었어요." },
          { en: "Although we couldn't go on a trip, we had a really good time at home.", ko: "여행은 못 갔지만, 집에서 정말 좋은 시간을 보냈어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about my experience from last summer.", ko: "렛미 텔유 어바웃 마이 익스피어리언스 프럼 라스트 서머" },
          { en: "It was really hot.", ko: "잇워즈 릴리 핫" },
          { en: "At the time, we were supposed to go on a vacation with my friend, but my son wasn't feeling well, so he had to see a doctor.", ko: "앳더타임, 위워 서포즈드투 고온어 베케이션 위드마이 프렌드, 벗마이썬 워즌트 필링웰, 소히 해드투 씨어닥터" },
          { en: "Because of that, we couldn't go on a trip and had to stay home instead.", ko: "비커즈어브댓, 위쿠든 고온어 트립 앤 해드투 스테이홈 인스테드" },
          { en: "So, I decided to cook Korean chicken soup for my son, because I thought it would be good for him.", ko: "소, 아이디사이디드투 쿡 코리안 치킨수프 퍼마이썬, 비커즈 아이쏫잇 우드비 굿퍼힘" },
          { en: "It was my first time making it, but it was really good.", ko: "잇워즈 마이퍼스트타임 메이킹잇, 벗잇워즈 릴리굿" },
          { en: "Although we couldn't go on a trip, we had a really good time at home.", ko: "얼도우 위쿠든 고온어 트립, 위해더 릴리 굿타임 앳홈" }
        ],
        warnings: [
          { word: "vacation", guide: "베케이션" },
          { word: "decided", guide: "디사이디드" },
          { word: "instead", guide: "인스테드" },
          { word: "although", guide: "얼도우" }
        ]
      }
    ]
  },
  {
    id: 58, emoji: "⛰️", nameKo: "지형",
    category: "돌발주제",
    questions: [
      {
        id: 177,
        question: "Describe your country's geography. Are there many mountains, lakes, or rivers? What is your country like?",
        translation: "당신 나라의 지형을 설명해 주세요. 산, 호수, 강이 많나요? 나라가 어떤 모습인가요?",
        type: "일반 설명",
        structure: ["한국 지형 다양(산/강/해변)", "서울엔 남산", "한강 뷰 좋음", "제주도 유명 관광지", "개인적으로 고향 해변 좋아함", "온갖 지형 다 있음"],
        script: [
          { en: "Most of Korea's geography is really varied — mountains, rivers, and beaches.", ko: "한국 지형은 정말 다양해요 — 산, 강, 해변까지요." },
          { en: "Honestly, in Seoul, there's a famous mountain called Namsan.", ko: "솔직히, 서울에는 남산이라는 유명한 산이 있어요." },
          { en: "About rivers, the Han River has a really nice view.", ko: "강은, 한강이 정말 좋은 뷰를 가지고 있어요." },
          { en: "You can also visit Jeju Island, which is a famous tourist spot.", ko: "유명한 관광지인 제주도도 갈 수 있어요." },
          { en: "I personally love the beach in my hometown.", ko: "저는 개인적으로 제 고향에 있는 해변을 제일 좋아해요." },
          { en: "Overall, Korea has all kinds of geography.", ko: "전반적으로, 한국은 온갖 종류의 지형이 다 있어요." }
        ],
        pronunciation: [
          { en: "Most of Korea's geography is really varied — mountains, rivers, and beaches.", ko: "모스트 어브 코리아즈 지오그래피이즈 릴리 베리드, 마운튼즈, 리버즈, 앤비치즈" },
          { en: "Honestly, in Seoul, there's a famous mountain called Namsan.", ko: "아너슬리, 인서울, 데얼저 페이머스 마운튼콜드 남산" },
          { en: "About rivers, the Han River has a really nice view.", ko: "어바웃 리버즈, 더 한리버해저 릴리 나이스뷰" },
          { en: "You can also visit Jeju Island, which is a famous tourist spot.", ko: "유캔올소 비짓 제주아일랜드, 위치이저 페이머스 투어리스트스팟" },
          { en: "I personally love the beach in my hometown.", ko: "아이퍼스널리 러브더 비치 인마이 홈타운" },
          { en: "Overall, Korea has all kinds of geography.", ko: "오버롤, 코리아 해즈 올카인즈어브 지오그래피" }
        ],
        warnings: [
          { word: "geography", guide: "지오그래피" },
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "tourist", guide: "투어리스트" }
        ]
      },
      {
        id: 178,
        question: "Describe an early memory you have of your country's geography. Did you visit a special place or an important natural landmark?",
        translation: "당신 나라의 지형과 관련해서 어릴 때 기억을 설명해 주세요. 특별한 장소나 중요한 자연 명소를 방문했었나요?",
        type: "과거 경험",
        structure: ["중학교 때 여행", "가족과 재밌는거 하려고", "속초 해변(동해안)", "커플들로 붐벼서 짜증", "도착 후 자리+짐정리", "수영/보트/아이스크림", "풍경+바다뷰에 감명", "먹으며 하루 얘기", "좋은 시간이었음"],
        script: [
          { en: "When I was in middle school, I had a memorable experience with a trip.", ko: "중학교 때, 여행에서 기억에 남는 경험이 있었어요." },
          { en: "At the time, my family wanted to do something fun, so we decided to go to the beach.", ko: "그때 가족이 뭔가 재밌는 걸 하고 싶어서 해변에 가기로 했어요." },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "한국 동해안에 있는 속초 해수욕장에 갔어요." },
          { en: "It was really crowded, especially with couples, so I was a bit annoyed.", ko: "정말 붐볐는데, 특히 커플들이 많아서 좀 짜증났어요." },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "도착하자마자 쉴 자리를 찾고 짐을 풀었어요." },
          { en: "Then we went swimming, rode a boat, and got some ice cream.", ko: "그다음엔 수영하고, 보트도 타고, 아이스크림도 먹었어요." },
          { en: "The scenery was amazing — I was especially impressed by the beautiful ocean view.", ko: "경치가 정말 좋았어요 — 특히 아름다운 바다 풍경에 감명받았어요." },
          { en: "After that, we grabbed some food and talked about our day.", ko: "그다음엔 뭔가 먹으면서 그날 하루에 대해 얘기했어요." },
          { en: "Well, it was such a great time!", ko: "정말 좋은 시간이었어요!" }
        ],
        pronunciation: [
          { en: "When I was in middle school,", ko: "웬 아이 워즈 인 미들 스쿨" },
          { en: "I had a memorable experience with a trip.", ko: "아이 해더 메모러블 익스피리언스 위더 트립" },
          { en: "At the time, my family wanted to do something fun,", ko: "앳더 타임, 마이 패밀리 원티드투두 썸씽 펀" },
          { en: "so we decided to go to the beach.", ko: "소 위 디사이디드 투고투더 비치" },
          { en: "We went to Sokcho Beach, on the east coast of Korea.", ko: "위 웬투 속초 비치, 온디 이스트 코스트 어브 코리아" },
          { en: "It was really crowded, especially with couples,", ko: "잇 워즈 릴리 크라우디드, 이스페셜리 윗 커플즈" },
          { en: "so I was a bit annoyed.", ko: "소 아이 워저 빗 어노이드" },
          { en: "As soon as we got there, we found a spot to rest and unpacked.", ko: "애즈 순애즈 위 갓데어, 위 파운더 스팟 투 레스트 앤 언팩트" },
          { en: "Then we went swimming, rode a boat, and got some ice cream.", ko: "덴 위 웬트 스위밍, 로더 보트, 앤 갓 썸 아이스크림" },
          { en: "The scenery was amazing —", ko: "더 씨너리 워저 메이징" },
          { en: "I was especially impressed by the beautiful ocean view.", ko: "아이 워즈 이스페셜리 임프레스트 바이더 뷰티풀 오션 뷰" },
          { en: "After that, we grabbed some food and talked about our day.", ko: "애프터댓, 위 그랩드 썸 푸드 앤 톡트 어바웃 아워 데이" },
          { en: "Well, it was such a great time!", ko: "웰, 잇 워즈 서치어 그레잇 타임" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "memorable", guide: "메모러블" },
          { word: "scenery", guide: "씨너리" },
          { word: "impressed", guide: "임프레스트" }
        ]
      },
      {
        id: 179,
        question: "Tell me about a memorable time you visited a natural place in your country. You might have climbed a mountain or swum at a beautiful beach.",
        translation: "당신 나라의 자연 명소를 방문했던 기억에 남는 경험에 대해 말해 주세요. 유명한 산을 등산했거나 아름다운 해변에서 수영했을 수도 있어요.",
        type: "기억에 남는 경험",
        structure: ["얼마 전 해변 갔을 때 있었던 일", "아내와 방문, 아내 화장실감", "문이 고장나서 머리 부딪힘", "화나서 직원에게 항의", "머리 아파서 병원감", "다행히 심각하지 않음", "지점장이 병원비+사과선물", "그날 하루 별로였음"],
        script: [
          { en: "Let me tell you about something that happened at the beach a while ago.", ko: "얼마 전 해변에 갔을 때 있었던 일을 말씀드릴게요." },
          { en: "I went there with my wife, and while we were looking around, she went to the restroom.", ko: "아내랑 같이 갔는데, 둘러보다가 아내가 화장실에 갔어요." },
          { en: "A few minutes later, when she came back, she looked really upset — the door was broken and had hit her on the head.", ko: "몇 분 후 아내가 돌아왔을 때 얼굴이 울상이었어요 — 문이 고장 나서 머리를 맞았대요." },
          { en: "So I got upset too, and I went straight to the staff and complained.", ko: "그래서 저도 화가 나서 바로 직원한테 항의했어요." },
          { en: "Since her head really hurt, we had to see a doctor.", ko: "아내 머리가 많이 아파서 병원에 가봐야 했어요." },
          { en: "Luckily, it wasn't too serious.", ko: "다행히 심각하진 않았어요." },
          { en: "After that, the manager paid the hospital bill and gave us a gift as an apology.", ko: "그 후에 지점장님이 병원비도 내주고 미안하다고 선물도 줬어요." },
          { en: "Still, it just wasn't a good day after that.", ko: "그래도 그 이후로 그날 하루가 별로였어요." }
        ],
        pronunciation: [
          { en: "Let me tell you about something that happened at the beach a while ago.", ko: "렛미 텔유 어바웃 썸씽 댓 해펀드 앳더 비치 어와일어고" },
          { en: "I went there with my wife, and while we were looking around,", ko: "아이 웬트 데어 윗마이 와이프, 앤 와일위워 룩킹어라운드" },
          { en: "she went to the restroom.", ko: "쉬 웬트투더 레스트룸" },
          { en: "A few minutes later, when she came back, she looked really upset —", ko: "어퓨 미닛츠 레이터, 웬쉬 케임백, 쉬 룩트 릴리 업셋" },
          { en: "the door was broken and had hit her on the head.", ko: "더 도어 워즈 브로큰 앤 해드 힛허 온더 헤드" },
          { en: "So I got upset too, and I went straight to the staff and complained.", ko: "소 아이 갓 업셋 투, 앤 아이 웬트 스트레이트 투더 스태프 앤 컴플레인드" },
          { en: "Since her head really hurt, we had to see a doctor.", ko: "신스 허 헤드 릴리 헛, 위 해드투 씨어 닥터" },
          { en: "Luckily, it wasn't too serious.", ko: "럭킬리, 잇 워즌트 투 시리어스" },
          { en: "After that, the manager paid the hospital bill", ko: "애프터댓, 더 매니저 페이드 더 하스피틀 빌" },
          { en: "and gave us a gift as an apology.", ko: "앤 게이버스 어 기프트 애즈언 어팔러지" },
          { en: "Still, it just wasn't a good day after that.", ko: "스틸, 잇 저스트 워즌트어 굿데이 애프터댓" }
        ],
        warnings: [
          { word: "broken", guide: "브로큰" },
          { word: "complained", guide: "컴플레인드" },
          { word: "hospital", guide: "하스피틀" },
          { word: "apology", guide: "어팔러지" }
        ]
      }
    ]
  },
  {
    id: 59, emoji: "🎡", nameKo: "여가시간",
    category: "돌발주제",
    questions: [
      {
        id: 180,
        question: "Tell me about popular places that people in your country like to visit in their free time.",
        translation: "당신 나라 사람들이 여가시간에 즐겨 찾는 인기 있는 장소에 대해 말해 주세요.",
        type: "일반 설명",
        structure: ["짧은 여가: 근처(공원/영화관/쇼핑몰)", "긴 여가: 여행(산/해변)"],
        script: [
          { en: "There are a lot of places people like to visit in their free time in Korea.", ko: "한국 사람들이 여가시간에 즐겨 찾는 장소가 많아요." },
          { en: "If people only have a short amount of free time, they usually go somewhere close by, like a park, a movie theater, or a shopping mall.", ko: "짧은 여가시간만 있으면 보통 공원, 영화관, 쇼핑몰 같이 가까운 곳으로 가요." },
          { en: "These places tend to be pretty crowded since they're usually on busy streets, so the atmosphere is lively.", ko: "이런 곳들은 보통 번화가에 있다 보니 사람이 많아서 분위기가 활기차요." },
          { en: "If people have longer free time, like a weekend or vacation, they often travel domestically.", ko: "주말이나 휴가처럼 긴 여가시간이 있으면 국내 여행을 가는 경우가 많아요." },
          { en: "They usually head to the mountains or the beach, since Korea has so many beautiful ones.", ko: "한국에는 아름다운 산이랑 해변이 많아서 보통 그쪽으로 가요." },
          { en: "Since Korea is surrounded by ocean on three sides, people can enjoy all kinds of beaches with their family or friends.", ko: "한국은 삼면이 바다라서 가족이나 친구들이랑 다양한 해변을 즐길 수 있어요." }
        ],
        pronunciation: [
          { en: "There are a lot of places people like to visit in their free time in Korea.", ko: "데어라 라러브 플레이시즈 피플라익투비짓 인데어프리타임 인코리아" },
          { en: "If people only have a short amount of free time, they usually go somewhere close by, like a park, a movie theater, or a shopping mall.", ko: "이프피플온리해버 숏어마운트어브 프리타임, 데이유주얼리고 썸웨어클로스바이, 라이커파크, 어무비씨어터, 오어어샤핑몰" },
          { en: "These places tend to be pretty crowded since they're usually on busy streets, so the atmosphere is lively.", ko: "디즈플레이시즈텐투비 프리티크라우디드 신스데얼 유주얼리온비지스트리츠, 소디앳모스피어이즈 라이블리" },
          { en: "If people have longer free time, like a weekend or vacation, they often travel domestically.", ko: "이프피플해브 롱거프리타임, 라이커위켄드오어 베케이션, 데이오픈 트래블 더메스티컬리" },
          { en: "They usually head to the mountains or the beach, since Korea has so many beautiful ones.", ko: "데이유주얼리 헤투더마운튼즈오어더비치, 신스코리아해즈 소메니 뷰티풀원즈" },
          { en: "Since Korea is surrounded by ocean on three sides, people can enjoy all kinds of beaches with their family or friends.", ko: "신스코리아이즈 서라운디드바이오션 온쓰리사이즈, 피플캔인조이 올카인즈어브비치즈 위드데어패밀리오어프렌즈" }
        ],
        warnings: [
          { word: "crowded", guide: "크라우디드" },
          { word: "atmosphere", guide: "앳모스피어" },
          { word: "domestically", guide: "더메스티컬리" },
          { word: "surrounded", guide: "서라운디드" }
        ]
      },
      {
        id: 181,
        question: "What do people like to do in their free time? Tell me kinds of activities that people usually do.",
        translation: "사람들은 여가시간에 뭘 하는 걸 좋아하나요? 사람들이 보통 하는 활동의 종류를 말해 주세요.",
        type: "활동패턴",
        structure: ["공원: 피크닉/운동", "영화관: 영화보고 리뷰", "카페/술집: 수다", "산: 등산", "해변: 수영"],
        script: [
          { en: "People in Korea do all kinds of activities in their free time.", ko: "한국 사람들은 여가시간에 정말 다양한 활동을 해요." },
          { en: "At the park, they usually have a picnic or just relax with family or friends, and some people go jogging or walking.", ko: "공원에서는 보통 피크닉을 하거나 가족, 친구들이랑 그냥 쉬고, 조깅이나 산책을 하는 사람들도 있어요." },
          { en: "At the movie theater, people watch movies and then talk about them afterward.", ko: "영화관에서는 영화를 보고 나서 그 영화에 대해 얘기해요." },
          { en: "Some people prefer to hang out at cafes or pubs, just chatting and enjoying drinks.", ko: "카페나 술집에서 그냥 수다 떨면서 음료를 즐기는 걸 더 좋아하는 사람들도 있어요." },
          { en: "If they go to the mountains, people usually go hiking, especially in fall when the leaves change color.", ko: "산에 가면 보통 등산을 하는데, 특히 단풍이 드는 가을에 많이 가요." },
          { en: "And in summer, a lot of people head to the beach to swim or just relax and cool off from the heat.", ko: "그리고 여름에는 많은 사람들이 더위를 식히려고 해변에 가서 수영하거나 그냥 쉬어요." }
        ],
        pronunciation: [
          { en: "People in Korea do all kinds of activities in their free time.", ko: "피플인코리아 두올카인즈어브 액티비티즈 인데어프리타임" },
          { en: "At the park, they usually have a picnic or just relax with family or friends, and some people go jogging or walking.", ko: "앳더파크, 데이유주얼리해버 피크닉오어저스트릴랙스 위드패밀리오어프렌즈, 앤썸피플고 조깅오어워킹" },
          { en: "At the movie theater, people watch movies and then talk about them afterward.", ko: "앳더무비씨어터, 피플왓치무비즈 앤덴톡어바웃뎀 애프터워드" },
          { en: "Some people prefer to hang out at cafes or pubs, just chatting and enjoying drinks.", ko: "썸피플프리퍼투 행아웃앳카페이즈오어펍스, 저스트채팅앤 인조잉드링스" },
          { en: "If they go to the mountains, people usually go hiking, especially in fall when the leaves change color.", ko: "이프데이고투더마운튼즈, 피플유주얼리 고하이킹, 이스페셜리인폴 웬더리브스체인지컬러" },
          { en: "And in summer, a lot of people head to the beach to swim or just relax and cool off from the heat.", ko: "앤인서머, 어랏어브피플 헤투더비치투스윔 오어저스트릴랙스앤 쿨오프프럼더히트" }
        ],
        warnings: [
          { word: "activities", guide: "액티비티즈" },
          { word: "afterward", guide: "애프터워드" },
          { word: "especially", guide: "이스페셜리" },
          { word: "relax", guide: "릴랙스" }
        ]
      },
      {
        id: 182,
        question: "Do you have more or less free time than you did in the past? How has your free time changed over time?",
        translation: "예전보다 여가시간이 더 많아졌나요, 아니면 줄었나요? 여가시간이 시간이 지나면서 어떻게 변했나요?",
        type: "과거 비교",
        structure: ["예전: 주6일 근무, 일요일만 쉼", "예전: 집안일로 대부분 시간씀", "현재: 주5일 근무", "현재: 주말에 공원/영화/여행 등 활용", "가전제품 덕분에 시간 아낌"],
        script: [
          { en: "I think I have more free time now than I used to.", ko: "예전보다 지금 여가시간이 더 많아진 것 같아요." },
          { en: "In the past, I had to work six days a week, so I only had Sundays off.", ko: "예전에는 주 6일 일해야 해서 일요일에만 쉴 수 있었어요." },
          { en: "Even on Sundays, I couldn't fully enjoy my free time because I had to help around the house and take care of my son.", ko: "일요일에도 집안일을 도와야 하고 아들을 돌봐야 해서 여가시간을 제대로 즐기지 못했어요." },
          { en: "However, the government started encouraging companies to shorten the work week for better work-life balance.", ko: "그런데 정부가 일과 삶의 균형을 위해 회사들이 근무일을 줄이도록 권장하기 시작했어요." },
          { en: "Now, I work five days a week, so on weekends, my family and I can go to the park, watch a movie, or even take a short trip.", ko: "지금은 주 5일 근무해서 주말엔 가족이랑 공원에 가거나 영화를 보거나 짧은 여행도 갈 수 있어요." },
          { en: "Also, thanks to appliances like a washing machine and a dishwasher, I save a lot of time on chores.", ko: "그리고 세탁기나 식기세척기 같은 가전제품 덕분에 집안일에 드는 시간도 많이 아껴요." },
          { en: "So overall, I get to enjoy my free time a lot more than I used to.", ko: "그래서 전반적으로 예전보다 여가시간을 훨씬 더 즐길 수 있게 됐어요." }
        ],
        pronunciation: [
          { en: "I think I have more free time now than I used to.", ko: "아이씽크아이해브 모어프리타임나우 댄아이유즈투" },
          { en: "In the past, I had to work six days a week, so I only had Sundays off.", ko: "인더패스트, 아이해투워크 식스데이저위크, 소아이온리해드 선데이즈오프" },
          { en: "Even on Sundays, I couldn't fully enjoy my free time because I had to help around the house and take care of my son.", ko: "이븐온선데이즈, 아이쿠든 풀리인조이 마이프리타임 비커즈아이해투헬프 어라운드더하우스 앤테익케어어브마이선" },
          { en: "However, the government started encouraging companies to shorten the work week for better work-life balance.", ko: "하우에버, 더거번먼트 스타티드 인커리징 컴퍼니즈투 숏은더워크위크 퍼베러 워크라이프밸런스" },
          { en: "Now, I work five days a week, so on weekends, my family and I can go to the park, watch a movie, or even take a short trip.", ko: "나우, 아이워크 파이브데이저위크, 소온위켄즈, 마이패밀리앤아이캔 고투더파크, 왓처무비, 오어이븐테익어숏트립" },
          { en: "Also, thanks to appliances like a washing machine and a dishwasher, I save a lot of time on chores.", ko: "얼소, 쌩스투 어플라이언시즈라익어 워싱머신앤어디쉬워셔, 아이세이브 어랏어브타임온초어즈" },
          { en: "So overall, I get to enjoy my free time a lot more than I used to.", ko: "소오버롤, 아이겟투인조이 마이프리타임 어랏모어댄아이유즈투" }
        ],
        warnings: [
          { word: "encouraging", guide: "인커리징" },
          { word: "appliances", guide: "어플라이언시즈" },
          { word: "balance", guide: "밸런스" },
          { word: "chores", guide: "초어즈" }
        ]
      }
    ]
  },
  {
    id: 60, emoji: "👗", nameKo: "옷차림",
    category: "돌발주제",
    questions: [
      {
        id: 183,
        question: "What kinds of clothes do people in your country typically wear? Are there different kinds of clothes for work or for play?",
        translation: "당신 나라 사람들은 보통 어떤 옷을 입나요? 일할 때랑 놀 때 입는 옷이 다른가요?",
        type: "일반 설명",
        structure: ["회사는 정장 기대", "남자는 셔츠+정장바지", "여자는 짧은치마/슬리퍼 피함", "회사밖에선 자유(청바지등)", "개인적으로 여름엔 반팔반바지", "근무복/평상복 차이 큼"],
        script: [
          { en: "Most companies in Korea still expect employees to dress formally.", ko: "한국 회사들 대부분이 여전히 직원들이 정장 입기를 기대해요." },
          { en: "Honestly, for men, that usually means a dress shirt and slacks.", ko: "솔직히, 남자는 보통 셔츠에 정장 바지를 입어야 해요." },
          { en: "About women, they're expected to avoid short skirts or flip-flops.", ko: "여자는, 짧은 치마나 슬리퍼는 피해야 해요." },
          { en: "You can wear whatever you want outside of work. For example, jeans, comfy clothes, anything.", ko: "회사 밖에서는 뭐든 원하는 대로 입을 수 있어요. 예를 들면, 청바지, 편한 옷, 뭐든지요." },
          { en: "I personally like wearing t-shirts and shorts in summer.", ko: "저는 개인적으로 여름엔 반팔이랑 반바지 입는 걸 좋아해요." },
          { en: "Overall, work clothes and casual clothes are pretty different here.", ko: "전반적으로, 여기는 근무복이랑 평상복이 꽤 달라요." }
        ],
        pronunciation: [
          { en: "Most companies in Korea still expect employees to dress formally.", ko: "모스트 컴퍼니즈 인코리아 스틸 익스펙트 임플로이즈투 드레스 포멀리" },
          { en: "Honestly, for men, that usually means a dress shirt and slacks.", ko: "아너슬리, 퍼멘, 댓 유주얼리 민즈어 드레스셔츠 앤슬랙스" },
          { en: "About women, they're expected to avoid short skirts or flip-flops.", ko: "어바웃 위민, 데이알 익스펙티드투 어보이드 숏스커츠 오어 플립플랍스" },
          { en: "You can wear whatever you want outside of work. For example, jeans, comfy clothes, anything.", ko: "유캔웨어 왓에버유원트 아웃사이드어브 워크. 포어그잼플, 진즈, 컴피클로즈, 애니씽" },
          { en: "I personally like wearing t-shirts and shorts in summer.", ko: "아이퍼스널리 라익 웨어링 티셔츠앤 숏츠인 서머" },
          { en: "Overall, work clothes and casual clothes are pretty different here.", ko: "오버롤, 워크클로즈앤 캐주얼클로즈알 프리티 디퍼런트 히어" }
        ],
        warnings: [
          { word: "formally", guide: "포멀리" },
          { word: "honestly", guide: "아너슬리" },
          { word: "personally", guide: "퍼스널리" },
          { word: "casual", guide: "캐주얼" }
        ]
      },
      {
        id: 184,
        question: "Fashion trends are always changing. What kinds of fashions were popular when you were younger? What's popular now?",
        translation: "패션 트렌드는 항상 변하죠. 어릴 때는 어떤 패션이 유행했나요? 지금은 뭐가 인기 있나요?",
        type: "과거 비교",
        structure: ["어릴 땐 패션 다 비슷했음", "정보가 TV뿐이었음", "지금은 온라인에서 다양하게 찾음", "다들 스타일 다름", "하나의 큰 트렌드 없음"],
        script: [
          { en: "When I was young, fashion was different.", ko: "제가 어릴 때는, 패션이 달랐어요." },
          { en: "At that time, people's fashion was similar.", ko: "그때는, 사람들 패션이 다 비슷했어요." },
          { en: "They didn't have much fashion information — they only got it from TV.", ko: "사람들은 패션 정보가 별로 없었어요 — TV에서만 얻었어요." },
          { en: "Now, people can find all kinds of fashion online.", ko: "지금은, 사람들이 온라인에서 온갖 패션을 다 찾을 수 있어요." },
          { en: "Now, everyone's fashion style is so different.", ko: "지금은, 다들 패션 스타일이 완전히 달라요." },
          { en: "So there's no one big trend anymore.", ko: "그래서 이제 하나의 큰 트렌드는 없어요." }
        ],
        pronunciation: [
          { en: "When I was young, fashion was different.", ko: "웬아이워즈 영, 패션워즈 디퍼런트" },
          { en: "At that time, people's fashion was similar.", ko: "앳댓타임, 피플즈 패션워즈 시밀러" },
          { en: "They didn't have much fashion information — they only got it from TV.", ko: "데이디든 해브머치 패션 인포메이션, 데이온리 갓잇 프럼티비" },
          { en: "Now, people can find all kinds of fashion online.", ko: "나우, 피플캔 파인드 올카인즈어브 패션 온라인" },
          { en: "Now, everyone's fashion style is so different.", ko: "나우, 에브리원즈 패션스타일이즈 소 디퍼런트" },
          { en: "So there's no one big trend anymore.", ko: "소데얼즈 노원빅 트렌드 애니모어" }
        ],
        warnings: [
          { word: "similar", guide: "시밀러" },
          { word: "information", guide: "인포메이션" },
          { word: "trend", guide: "트렌드" },
          { word: "fashion", guide: "패션" }
        ]
      },
      {
        id: 185,
        question: "Tell me about a time you had to get an important piece of clothing ready in a hurry. What happened, and how did you handle it?",
        translation: "중요한 옷을 급하게 준비해야 했던 경험에 대해 말해 주세요. 무슨 일이 있었고, 어떻게 해결했나요?",
        type: "기억에 남는 경험",
        structure: ["두달전, 카페서 있었던 일", "친구 진우와 감", "진우 화장실간사이 혼자 기다림", "지나가던 여자가 부딪혀 셔츠에 커피 쏟음", "화가 나서 계속 뭐라 함", "친구 돌아옴→그 여자가 친구 아내였음", "엄청 당황+계속 사과함", "그 후로 카페 갈 때마다 생각남"],
        script: [
          { en: "About two months ago, I had a really memorable time at a cafe.", ko: "두 달쯤 전에 카페에서 정말 기억에 남는 일이 있었어요." },
          { en: "I went there with my best friend, Jinwoo.", ko: "가장 친한 친구 진우랑 카페에 갔었어요." },
          { en: "After a while, he went to the restroom, and I was just relaxing, waiting for him.", ko: "잠시 후에 그가 화장실에 가서, 저는 그냥 쉬면서 그를 기다리고 있었어요." },
          { en: "Suddenly, a woman bumped into me while walking by and spilled her coffee all over my shirt.", ko: "그런데 갑자기 지나가던 여자분이 저랑 부딪히면서 셔츠에 커피를 쏟았어요." },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "셔츠가 완전히 젖어서 정말 속상했어요." },
          { en: "Even though she apologized, I kept complaining to her.", ko: "그분이 사과했는데도 저는 계속 뭐라고 했어요." },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "그러다 친구가 돌아왔는데, 완전 충격이었어요 — 그 여자분이 친구 아내였던 거예요!" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "너무 당황해서 계속 사과했어요." },
          { en: "Since then, I always remember it when I go to that cafe.", ko: "그 이후로, 저는 그 카페에 갈 때마다 항상 그 일이 생각나요." }
        ],
        pronunciation: [
          { en: "About two months ago, I had a really memorable time at a cafe.", ko: "어바웃 투 먼쓰어고, 아이 해더 릴리 메머러블 타임 앳어 카페" },
          { en: "I went there with my best friend, Jinwoo.", ko: "아이 웬트 데어 윗마이 베스트 프렌드, 진우" },
          { en: "After a while, he went to the restroom, and I was just relaxing, waiting for him.", ko: "애프터러 와일, 히 웬트투더 레스트룸, 앤 아이 워즈 저스트 릴렉싱, 웨이팅 퍼힘" },
          { en: "Suddenly, a woman bumped into me while walking by and spilled her coffee all over my shirt.", ko: "서든리, 어 우먼 범트인투미 와일 워킹바이 앤 스필드 허 커피 올오버 마이 셔츠" },
          { en: "My shirt got completely soaked, and I got really upset.", ko: "마이 셔츠 갓 컴플리틀리 소우크트, 앤 아이 갓 릴리 업셋" },
          { en: "Even though she apologized, I kept complaining to her.", ko: "이븐도우 쉬 어팔러자이즈드, 아이 켑트 컴플레이닝투허" },
          { en: "Then, when my friend came back, I was totally shocked — she was his wife!", ko: "덴, 웬마이 프렌드 케임백, 아이 워즈 토탈리 샥트, 쉬 워즈 히즈 와이프!" },
          { en: "I was so embarrassed. I kept apologizing to her over and over.", ko: "아이 워즈 소우 임배러스트. 아이 켑트 어팔러자이징투허 오버앤오버" },
          { en: "Since then, I always remember it when I go to that cafe.", ko: "신스덴, 아이 올웨이즈 리멤버릿 웬아이 고투댓 카페" }
        ],
        warnings: [
          { word: "apologized", guide: "어팔러자이즈드" },
          { word: "embarrassed", guide: "임배러스트" },
          { word: "soaked", guide: "소우크트" },
          { word: "complaining", guide: "컴플레이닝" }
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
  },
  {
    expression: "corner store",
    meaning: "동네 골목 어귀에 있는 작은 편의점/구멍가게 (미국식 표현)",
    description: "영국식은 corner shop, 좀 더 일반적/공식적인 표현은 convenience store",
    example: "There's a small corner store near my house where I sometimes grab snacks."
  },
  {
    expression: "너무 좋고 만족스럽다",
    description: "기본형 → 구어체 → 완성형 순으로 강도/격식을 조절해서 쓸 수 있음",
    example: [
      "I really love it and I'm very satisfied with it.",
      "I'm extremely happy with it.",
      "It makes me really satisfied.",
      "I'm super happy with it.",
      "I couldn't be happier with it.",
      "It really hits the spot.",
      "I really love it, and honestly, it makes me feel very satisfied every time I use it."
    ]
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
