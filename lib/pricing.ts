import { effectiveMonth } from './season'

/**
 * 料金（サイトの料金表の数字のもと）
 *
 * 月額プランは 2026/12/1 0:00（日本時間）から 88,000円 → 98,000円（11/28 塾長が決定）。
 * 11月までに申し込んだ人は、これまでどおり 88,000円の月額＋入塾金（塾長の方針）。
 */
export const ENROLLMENT_FEE = 50_000
export const MONTHLY_FEE_OLD = 88_000
export const MONTHLY_FEE_NEW = 98_000
export const PRICE_CHANGE_AT = new Date('2026-12-01T00:00:00+09:00')

/** 確認用に SEASON_MONTH を付けてビルドしたときは、11月以外なら改定後として表示する */
function isAfterPriceChange(now: Date): boolean {
  if (process.env.SEASON_MONTH) return effectiveMonth(now) !== 11
  return now.getTime() >= PRICE_CHANGE_AT.getTime()
}

export function getMonthlyFee(now: Date = new Date()): number {
  return isAfterPriceChange(now) ? MONTHLY_FEE_NEW : MONTHLY_FEE_OLD
}

/**
 * 直前期パック（今年度の一般入試を受ける人向け。入試日まで・入塾金込みの総額）
 *
 * 総額 ＝ 88,000円 × 始めた月から入試月（2月）までの月数 ＋ 入塾金
 * （11月までに月額プランで申し込んだ人と同じ総額。先に申し込んだ人が損をしないため）
 * 12月・1月・2月だけ料金表に出る。
 */
const PACK_MONTHS: Partial<Record<number, { months: number; start: string; period: string }>> = {
  12: { months: 3, start: '12月', period: '12月〜2月' },
  1: { months: 2, start: '1月', period: '1月〜2月' },
  2: { months: 1, start: '2月', period: '2月' },
}

export type Pack = {
  start: string
  period: string
  months: number
  total: number
  /** 同じ期間を今の月額プランで受けた場合の総額（入塾金込み） */
  monthlyTotal: number
  saving: number
  /** お得な割合（%）。大きく見せないよう小数第1位で切り捨て */
  savingPercent: number
}

export function getPack(now: Date = new Date()): Pack | null {
  const p = PACK_MONTHS[effectiveMonth(now)]
  if (!p) return null
  const total = MONTHLY_FEE_OLD * p.months + ENROLLMENT_FEE
  const monthlyTotal = getMonthlyFee(now) * p.months + ENROLLMENT_FEE
  const saving = monthlyTotal - total
  const savingPercent = Math.floor((saving / monthlyTotal) * 1000) / 10
  return { ...p, total, monthlyTotal, saving, savingPercent }
}

export const yen = (n: number) => n.toLocaleString('ja-JP')
