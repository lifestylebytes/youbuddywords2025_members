// discover-databases.js
// 이 스크립트는 Youbuddy 통합이 접근할 수 있는 "데이터베이스"들의 ID와 제목을 출력합니다.

require("dotenv").config();

// ✅ Node 18+면 fetch 전역, 아니면 node-fetch 사용
const fetchFn =
  typeof fetch === "function"
    ? fetch
    : (...args) =>
        import("node-fetch").then(({ default: f }) => f(...args));

const NOTION_SECRET = process.env.NOTION_SECRET;

if (!NOTION_SECRET) {
  console.error("❌ .env에 NOTION_SECRET가 없습니다.");
  process.exit(1);
}

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

async function discoverDatabases() {
  console.log("📡 이 통합이 볼 수 있는 데이터베이스를 검색 중...");

  const res = await fetchFn(`${NOTION_API_BASE}/search`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_SECRET}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page_size: 100,
      filter: {
        property: "object",
        value: "database",
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion Search 오류: ${res.status} ${res.statusText}\n${text}`);
  }

  const data = await res.json();

  const results = data.results || [];
  if (!results.length) {
    console.log("⚠️ 이 통합이 접근할 수 있는 데이터베이스가 없습니다.");
    return;
  }

  console.log(`\n✅ 총 ${results.length}개의 데이터베이스를 찾았습니다.\n`);
  results.forEach((db, idx) => {
    const title =
      (db.title || [])
        .map((t) => t.plain_text || "")
        .join("")
        .trim() || "(제목 없음)";

    // 노션이 내부적으로 쓰는 순수 ID (하이픈 없이 32자리)
    const rawId = db.id.replace(/-/g, "");

    console.log(
      [
        `#${idx + 1}`,
        `제목: ${title}`,
        `표시용 ID(하이픈 포함): ${db.id}`,
        `ENV에 넣을 ID(하이픈 제거): ${rawId}`,
      ].join("\n")
    );
    console.log("--------------------------------------------------");
  });

  console.log(
    "\n👉 위 목록에서 '유버디 단어장' 데이터베이스를 찾아서, " +
      "그 줄에 적힌 'ENV에 넣을 ID' 값을 NOTION_DATABASE_ID로 사용하세요."
  );
}

discoverDatabases().catch((err) => {
  console.error("❌ 검색 중 에러:", err);
  process.exit(1);
});
