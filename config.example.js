// Supabase 설정 템플릿입니다.
// 이 파일을 복사해서 같은 폴더에 config.js 로 저장한 뒤 실제 값을 채워 넣으세요.
//   (PowerShell)  Copy-Item config.example.js config.js
//
// 주의: config.js 는 .gitignore 에 등록되어 커밋되지 않습니다.
// 아래 PUBLISHABLE_KEY 는 공개(anon)용 키라 브라우저에 노출되어도 되는 키입니다.
// 보안은 Supabase 의 RLS(Row Level Security) 정책으로 처리합니다.
// service_role 등 secret 키는 절대 여기에 넣지 마세요.

window.ENV = {
  // Supabase 프로젝트 URL (예: https://xxxxxxxx.supabase.co)
  NEXT_PUBLIC_SUPABASE_URL: "여기에_SUPABASE_PROJECT_URL",

  // Supabase Publishable (anon public) key
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: "여기에_PUBLISHABLE_KEY",
};
