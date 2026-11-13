// Vercel 빌드 시 실행됩니다.
// 환경변수를 읽어 브라우저가 사용할 config.js 를 생성합니다.
// 키는 Vercel 환경변수에만 저장되고, 저장소(GitHub)에는 커밋되지 않습니다.
//
// 환경변수 이름은 두 가지를 모두 지원합니다(먼저 발견되는 값 사용):
//   1) 접두사 없는 이름:  SUPABASE_URL / SUPABASE_PUBLISHABLE_KEY   (권장: Vercel 의 NEXT_PUBLIC_ 제약 회피)
//   2) 접두사 있는 이름:  NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
const fs = require("fs");

const url =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "";
const key =
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "";

// 진단 로그: 어떤 변수에서 값을 읽었는지, 비었는지 빌드 로그에서 바로 확인
console.log("[generate-config] 환경변수 감지:");
console.log("  SUPABASE_URL set:                 " + Boolean(process.env.SUPABASE_URL));
console.log("  NEXT_PUBLIC_SUPABASE_URL set:      " + Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL));
console.log("  SUPABASE_PUBLISHABLE_KEY set:      " + Boolean(process.env.SUPABASE_PUBLISHABLE_KEY));
console.log("  NEXT_PUBLIC_..._KEY set:           " + Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY));

if (!url || !key) {
  console.error(
    "[generate-config] 오류: Supabase URL/KEY 환경변수가 비어 있습니다. " +
      "Vercel 프로젝트 Settings > Environment Variables 에 " +
      "SUPABASE_URL 과 SUPABASE_PUBLISHABLE_KEY (또는 NEXT_PUBLIC_ 접두사 버전) 를 추가한 뒤 Redeploy 하세요."
  );
}

// 브라우저(index.html)는 window.ENV.NEXT_PUBLIC_* 를 읽으므로 출력 키 이름은 그대로 유지합니다.
const content =
  "// 이 파일은 Vercel 빌드 시 generate-config.js 가 자동 생성합니다. 직접 수정하지 마세요.\n" +
  "window.ENV = {\n" +
  `  NEXT_PUBLIC_SUPABASE_URL: ${JSON.stringify(url)},\n` +
  `  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: ${JSON.stringify(key)},\n` +
  "};\n";

fs.writeFileSync("config.js", content, "utf8");
console.log("[generate-config] config.js 생성 완료 (url 채움: " + Boolean(url) + ", key 채움: " + Boolean(key) + ")");
