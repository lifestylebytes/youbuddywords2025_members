// questions.js

const QUESTIONS = [
  {
    answer: "by any chance",
    prefix: "Do you have time to look at this",
    suffix: "?",
    meaning: "혹시",
    translation: "혹시 이거 한 번 봐줄 시간 있어?"
  },
  {
    answer: "with a caveat",
    prefix: "This is approved",
    suffix: "",
    meaning: "단, 한 가지 조건이 있는데",
    translation: "조건부 승인입니다."
  },
  {
    answer: "hectic",
    prefix: "It’s been very",
    suffix: ", but I’m really happy that our team has been super supportive.",
    meaning: "바쁜, 정신없는",
    translation: "요즘 정말 정신없었는데, 그래도 팀이 정말 많이 도와줘서 진짜 고마워"
  },
  {
    answer: "I doubt about it",
    prefix: "I hope they’ll just let us do things as usual, but",
    suffix: ".",
    meaning: "그럴 리가 없지… 🙄",
    translation: "이번에는 좀 조용했으면 좋겠는데… 그럴 리는 없지"
  },
  {
    answer: "down the line",
    prefix: "I’m a bit concerned that this might cause bigger issues",
    suffix: "",
    meaning: "나중에, 추후에",
    translation: "이게 나중에 더 큰 문제를 불러올까 봐 조금 걱정돼."
  },
  {
    answer: "a second pair of eyes",
    prefix: "If anyone has a minute, I’d love",
    suffix: "on this",
    meaning: "다른 사람이 다시 확인해주는 것 (추가확인)",
    translation: "누구 가능하면, 추가 확인 좀 해주세요."
  },
  {
    answer: "hive mind",
    prefix: "I have an optimization question for the",
    suffix: ".",
    meaning: "여기 계신 분들께… /집단 지성",
    translation: "여기 계신 분들께, 최적화에 대한 질문이 있습니다."
  },
  {
    answer: "on your end",
    prefix: "Everything okay",
    suffix: "?",
    meaning: "당신쪽에서는",
    translation: "당신 쪽에서는 문제 없나요?"
  },
  {
    answer: "second nature",
    prefix: "I know this stuff is",
    suffix: "to y’all, but you really gotta explain this stuff like I’m five.",
    meaning: "기본 중의 기본 (몸에 밴 것 / 너무 익숙한 것 / 자동으로 하는 것)",
    translation: "이거 여러분한텐 기본 중의 기본인 거 아는데… 저한테는 어린아이 설명하듯이 설명해주셔야 해요."
  },
  {
    answer: "our very own",
    prefix: "Tomorrow’s session will be led by",
    suffix: "Buddy You!",
    meaning: "자랑스러운 우리의~",
    translation: "내일 세션은 우리 자랑스러운 버디님이 진행해주실 예정입니다."
  },
  {
    answer: "moving pieces",
    prefix: "A lot of",
    suffix: "and was sure I had communicated it with you.",
    meaning: "여러 가지가 동시에 돌아가는 상황",
    translation: "여러 가지가 동시에 돌아가는 상황이었고, 나는 그걸 너에게 이미 전달했다고 확신했었어."
  },
  {
    answer: "low hanging fruit",
    prefix: "We have some",
    suffix: "that would be great to harvest",
    meaning: "쉽게 바로 처리할 수 있는 작업들",
    translation: "쉽게 바로 처리할 수 있는 작업들이 몇 가지 있어서 지금 처리하면 좋을 것 같아요."
  },
  {
    answer: "edge case",
    prefix: "Hi team, wanted to share a discovered",
    suffix: "related to…",
    meaning: "특이 케이스 / 예외 상황 / 특수한 경우",
    translation: "팀 여러분, …와 관련해서 발견된 예외 케이스를 공유드리려고 합니다"
  },
  {
    answer: "quick win",
    prefix: "This could be a",
    suffix: "for the team.",
    meaning: "빠르게 성과가 나는 일",
    translation: "팀이 바로 성과 낼 수 있는 작업일 수 있어요."
  },
  {
    answer: "circling back",
    prefix: "Just",
    suffix: "on this — any updates on your side?",
    meaning: "다시 얘기 꺼냅니다 / 다시 연락드립니다",
    translation: "다시 한번 확인차 연락드려요. 혹시 진행 상황 있을까요?"
  },
  {
    answer: "touch base",
    prefix: "We had a quick",
    suffix: "on resolving this issue",
    meaning: "간단히 이야기하다 / 짧게 의견 맞추다 / 잠깐 체크하다",
    translation: "이 문제 해결 관련해서 간단히 얘기 나눴어요."
  },
  {
    answer: "signing off",
    prefix: "I’m",
    suffix: "as well",
    meaning: "로그아웃 할게요",
    translation: "저도 이제 로그아웃할게요"
  },
  {
    answer: "TL;DR",
    prefix: "",
    suffix: ": All good to proceed",
    meaning: "요약하자면..",
    translation: "요약하자면, 진행해도 괜찮습니다."
  },
  {
    answer: "get ahead of",
    prefix: "Yeah, thanks! Let’s",
    suffix: "this.",
    meaning: "미리 선제적으로 / 일이 커지기 전에 먼저 대응하자",
    translation: "네 고마워요, 이거 미리 선제적으로 잡아두죠."
  },
  {
    answer: "quick sanity check",
    prefix: "Could you do a",
    suffix: "on this? Just making sure I'm not missing anything.",
    meaning: "빠르게 한 번 확인해주는 것",
    translation: "혹시 내가 놓친 게 없는지 가볍게 한 번만 확인해줄 수 있을까요?"
  },
  {
    answer: "High level view",
    prefix: "",
    suffix: "for week of Nov. 3rd",
    meaning: "전체적인 개요 / 큰 흐름 / 핵심만 짚는 요약",
    translation: "11월 3일 주간의 전체적인 개요입니다."
  },
  {
    answer: "bandwidth",
    prefix: "Could you look into this if you have the",
    suffix: "?",
    meaning: "여유 시간",
    translation: "혹시 여유 있으면 이것 좀 봐줄 수 있을까요?"
  },
  {
    answer: "have the cycles",
    prefix: "I don’t",
    suffix: "for a deep dive right now, but I can skim it.",
    meaning: "여유/정신이 있다",
    translation: "지금 자세히 볼 여유는 없는데, 대략 훑어보는 건 가능해."
  },
  {
    answer: "keep an eye on",
    prefix: "I’ll",
    suffix: "it and update you if anything changes.",
    meaning: "계속 주시하다 / 상황을 지켜보다",
    translation: "지켜보고 있다가 변경되면 업데이트할게요."
  },
  {
    answer: "swamped",
    prefix: "Let me know when you’re less",
    suffix: ".",
    meaning: "엄청 바쁘다 / 일이 밀려있다",
    translation: "좀 덜 바빠지면 알려줘."
  },
  {
    answer: "on my radar",
    prefix: "Yeap, it’s",
    suffix: ".",
    meaning: "인지하고 있어요(알고 있어요)",
    translation: "네, 인지하고 있어요."
  },
  {
    answer: "in flight",
    prefix: "Let me close out a few",
    suffix: "tasks first",
    meaning: "현재 진행 중인",
    translation: "지금 진행 중인 작업 몇 개만 마무리하고 갈게요."
  },
  {
    answer: "table it for now",
    prefix: "We can revisit it later, but let’s",
    suffix: ".",
    meaning: "보류하다",
    translation: "나중에 다시 보자. 지금은 보류하자."
  },
  {
    answer: "move the needle",
    prefix: "We need solutions that actually",
    suffix: "",
    meaning: "실질적인 변화를 만들다 / 눈에 띄는 개선을 만들다",
    translation: "실제 변화를 만드는 해결책이 필요해."
  },
  {
    answer: "dialed in",
    prefix: "Let’s get",
    suffix: "before we proceed.",
    meaning: "(사람) 컨디션 좋다 / (상황) 작업이 정교하게 맞춰진",
    translation: "진행하기 전에 컨디션/세팅을 제대로 맞추자."
  },
  {
    answer: "hunch",
    prefix: "I have a",
    suffix: "that the client might change the request.",
    meaning: "직감, 촉, 느낌",
    translation: "느낌상 클라이언트가 요구 바꿀 것 같다"
  },
  {
    answer: "dial down",
    prefix: "We may need to",
    suffix: "the scope.",
    meaning: "강도·속도·레벨을 낮추다 / 조절해서 줄이다",
    translation: "범위를 좀 줄여야 할 것 같아요."
  },
  {
    answer: "rumor mill",
    prefix: "The",
    suffix: "says the schedule might get pushed.",
    meaning: "정체불명의 소문, 가십",
    translation: "소문에 따르면 일정이 미뤄질 수도 있대."
  },
  {
    answer: "soft commit",
    prefix: "This is a",
    suffix: "for now,  I’ll confirm once I have more clarity.",
    meaning: "임시 확정",
    translation: "지금은 임시 확정이고, 좀 더 명확해지면 확답 드릴게요"
  },
  {
    answer: "pencil it in",
    prefix: "Let’s",
    suffix: "for Thursday and confirm later.",
    meaning: "일단 임시로 잡아두다",
    translation: "목요일로 일단 잡아두고 나중에 확정하죠"
  },
  {
    answer: "off track",
    prefix: "The project is",
    suffix: "due to unexpected delays.",
    meaning: "계획·일정·목표에서 벗어난 상태",
    translation: "예상치 못한 지연 때문에 프로젝트가 일정에서 벗어났어요."
  },
  {
    answer: "take ownership",
    prefix: "I can",
    suffix: "of this and follow it through.",
    meaning: "주도적으로 맡다 / 책임지고 끝까지 챙기다",
    translation: "제가 이건 맡아서 끝까지 챙길게요."
  },
  {
    answer: "in flux",
    prefix: "The timeline is still",
    suffix: ", so nothing is confirmed yet.",
    meaning: "아직 확정되지 않은",
    translation: "일정이 아직 계속 변동 중이라 확정된 건 없어요."
  },
  {
    answer: "time-bound",
    prefix: "This task is",
    suffix: ", so we can’t delay it.",
    meaning: "명확한 기한이 정해진",
    translation: "이 업무는 기한이 정해져 있어서 미룰 수 없어요."
  },
  {
    answer: "ducks in a row",
    prefix: "Let’s get our",
    suffix: "before the meeting.",
    meaning: "사전에 준비를 다 끝내다",
    translation: "미팅 전에 준비를 다 정리해두죠."
  },
  {
    answer: "corporate jargon",
    prefix: "Let’s avoid too much",
    suffix: "in this email.",
    meaning: "회사에서만 쓰는 전문 용어",
    translation: "이 메일에서는 회사식 용어를 너무 많이 쓰지 맙시다."
  },
  {
    answer: "at face value",
    prefix: "Let’s not take this feedback",
    suffix: ".",
    meaning: "겉으로 보이는 대로 / 깊이 따지지 않고",
    translation: "이 피드백을 그대로만 받아들이지는 맙시다."
  },
  {
    answer: "raise a red flag",
    prefix: "We can’t start until we get approval, which",
    suffix: "for the timeline.",
    meaning: "문제 가능성을 알리다 / 경고 신호를 보내다",
    translation: "승인이 나와야 시작할 수 있어서 일정에 문제가 생길 수 있어요."
  },
  {
    answer: "iron out",
    prefix: "We need to",
    suffix: "a few details first.",
    meaning: "세부 문제를 해결하다",
    translation: "몇 가지 세부사항을 먼저 정리해야 해요."
  },
  {
    answer: "on the back burner",
    prefix: "We’ll keep this",
    suffix: "for now.",
    meaning: "우선순위를 낮춰두다 / 당장은 안 하는 상태로 두다",
    translation: "이건 당분간 우선순위 낮춰두죠."
  },
  {
    answer: "ahead of the curve",
    prefix: "This approach puts us",
    suffix: ".",
    meaning: "한발 앞선",
    translation: "이 접근법 덕분에 우리가 한발 앞서가요."
  },
  {
    answer: "in the pipeline",
    prefix: "We have a few updates",
    suffix: "",
    meaning: "이미 계획돼 있거나 진행 예정인",
    translation: "곧 나올 업데이트들이 몇 개 있어요"
  },
  {
    answer: "bumping up",
    prefix: "I’m",
    suffix: "due to the deadline.",
    meaning: "중요도를 높이다 / 일정 앞당기다",
    translation: "마감 때문에 이걸 우선순위로 올릴게요."
  },
  {
    answer: "play it by ear",
    prefix: "Let’s",
    suffix: "and adjust as needed.",
    meaning: "상황 보면서 결정하다",
    translation: "상황 보면서 필요하면 조정하죠."
  },
  {
    answer: "put a pin in it",
    prefix: "We need to",
    suffix: "and revisit it tomorrow.",
    meaning: "일단 멈추고 나중에 다시 다루다",
    translation: "이건 일단 여기까지 하고 나중에 다시 보죠."
  }
];
