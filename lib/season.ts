/**
 * 時期によって変わるトップページの文言（「11月からでも」など）
 *
 * 日本時間の「今の月」で自動的に切り替わります（トップページは1時間ごとに作り直し）。
 * 12/1 0:00 を過ぎると、遅くとも1時間以内に12月の文言に変わります。
 * 月を足したいときは SEASONS に1件足すだけです。登録のない月は FALLBACK を使います。
 */

export type RoadmapStep = {
  /** 丸い番号の下に出る時期のラベル（例：11月、12月前半） */
  label: string
  title: string
  /** PC版の見出しで改行を入れる位置（title をこの文字列の直後で改行） */
  breakAfter?: string
  body: string
}

export type SeasonCopy = {
  /** 「11月から」「12月から」など。見出し・タイトルに入る */
  start: string
  /** ページのタイトル（検索結果・SNSに出る） */
  metaTitle: string
  /** 学習計画の見本の見出し（例：11月第2週） */
  weeklyPlanLabel: string
  /** 中間の申込ボタンの上の見出し */
  ctaQuestion: string
  /** ロードマップの導入文の2行目 */
  roadmapLead: string
  steps: [RoadmapStep, RoadmapStep, RoadmapStep]
}

const STEP_ESSAY_PRACTICE: RoadmapStep = {
  label: '12月',
  title: '他学部の過去問を活用し、実践力を養う',
  breakAfter: '活用し、',
  body: 'SFCの過去問へ本格的に入る前に、慶應経済学部などの小論文に取り組みます。時間配分を意識し、本番に近い形式で練習することで、確かな実践力を鍛えます。',
}

const STEP_SFC_PAST: RoadmapStep = {
  label: '1月〜入試直前',
  title: 'SFCの過去問演習で、どんな出題にも対応できる力を',
  breakAfter: '過去問演習で、',
  body: '残り期間はSFCの過去問演習に集中します。同じ問題でも切り口を変えて複数の答案を作成し、あらゆるテーマに対応できる柔軟な思考力を身につけます。',
}

const NOVEMBER: SeasonCopy = {
  start: '11月から',
  metaTitle: '【11月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾',
  weeklyPlanLabel: '11月第2週',
  ctaQuestion: '「11月からのスタートで、本当にSFCに間に合うのか？」と不安な方へ。',
  roadmapLead: '11月以降の残り約3ヶ月で大逆転するための、極限まで無駄を省いた「冬の学習スケジュール」です。',
  steps: [
    {
      label: '11月',
      title: '基礎を固め、あなただけの「視点」を見つける',
      breakAfter: 'あなただけの',
      body: '「残り3ヶ月」という時間を考慮し、基礎固めとあなたならではの「視点（武器）」の発見を、最大毎日の超短期添削ラリーで一気に終わらせます。',
    },
    STEP_ESSAY_PRACTICE,
    STEP_SFC_PAST,
  ],
}

const DECEMBER: SeasonCopy = {
  start: '12月から',
  metaTitle: '【12月からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾',
  weeklyPlanLabel: '12月第1週',
  ctaQuestion: '「12月からのスタートで、本当にSFCに間に合うのか？」と不安な方へ。',
  roadmapLead: '12月からの残り約2ヶ月半で大逆転するための、極限まで無駄を省いた「冬の学習スケジュール」です。',
  steps: [
    {
      label: '12月前半',
      title: '基礎を固め、あなただけの「視点」を見つける',
      breakAfter: 'あなただけの',
      body: '「残り約2ヶ月半」という時間を考慮し、基礎固めとあなたならではの「視点（武器）」の発見を、最大毎日の超短期添削ラリーで一気に終わらせます。',
    },
    { ...STEP_ESSAY_PRACTICE, label: '12月後半' },
    STEP_SFC_PAST,
  ],
}

/** 登録のない月（1月以降など）。月を名指ししない文言 */
const FALLBACK: SeasonCopy = {
  start: '今から',
  metaTitle: '【直前期からのSFC小論文】慶應SFC専門塾｜圧倒的添削量で逆転合格 - 佐藤塾',
  weeklyPlanLabel: '直前期のある1週間',
  ctaQuestion: '「今からのスタートで、本当にSFCに間に合うのか？」と不安な方へ。',
  roadmapLead: '入試までの残り期間で大逆転するための、極限まで無駄を省いた「直前期の学習スケジュール」です。',
  steps: [
    {
      label: 'スタート直後',
      title: '基礎を固め、あなただけの「視点」を見つける',
      breakAfter: 'あなただけの',
      body: '残り期間を考慮し、基礎固めとあなたならではの「視点（武器）」の発見を、最大毎日の超短期添削ラリーで一気に終わらせます。',
    },
    { ...STEP_ESSAY_PRACTICE, label: '中盤' },
    { ...STEP_SFC_PAST, label: '入試直前' },
  ],
}

/** キーは月（1〜12） */
const SEASONS: Partial<Record<number, SeasonCopy>> = {
  11: NOVEMBER,
  12: DECEMBER,
}

/** 日本時間の月（1〜12） */
export function jstMonth(now: Date = new Date()): number {
  return Number(
    new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tokyo', month: 'numeric' }).format(now),
  )
}

/** 表示に使う月。確認用：環境変数 SEASON_MONTH=12 でビルドすると12月として表示できる（本番では設定しない） */
export function effectiveMonth(now: Date = new Date()): number {
  const forced = Number(process.env.SEASON_MONTH)
  return forced >= 1 && forced <= 12 ? forced : jstMonth(now)
}

export function getSeason(now: Date = new Date()): SeasonCopy {
  return SEASONS[effectiveMonth(now)] ?? FALLBACK
}
