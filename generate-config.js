// Vercel 빌드 시 실행됩니다.
// 환경변수를 읽어 브라우저가 사용할 config.js 를 생성합니다.
// 키는 Vercel 환경변수에만 저장되고, 저장소(GitHub)에는 커밋되지 않습니다.
const fs = require("fs");

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

if (!url || !key) {
  console.warn(
    "[generate-config] 경고: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 가 비어 있습니다. " +
      "Vercel 프로젝트의 Environment Variables 설정을 확인하세요."
  );
}

const content =
  "// 이 파일은 Vercel 빌드 시 generate-config.js 가 자동 생성합니다. 직접 수정하지 마세요.\n" +
  "window.ENV = {\n" +
  `  NEXT_PUBLIC_SUPABASE_URL: ${JSON.stringify(url)},\n` +
  `  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: ${JSON.stringify(key)},\n` +
  "};\n";

fs.writeFileSync("config.js", content, "utf8");
console.log("[generate-config] config.js 생성 완료");
