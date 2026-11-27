import { effectiveMonth } from './season'

/**
 * 料金（サイトの料金表の数字のもと）
 * 月額と入塾金を変えるときは、ここと app/home-client.tsx の月額プランの表示をそろえる。
 */
export const MONTHLY_FEE = 88_000
export const ENROLLMENT_FEE = 50_000

/**
 * 直前期パック（今年度の一般入試を受ける人向け。入試日まで・入塾金込みの総額）
 *
 * 総額 ＝ 月額 × 始めた月から入試月（2月）までの月数 ＋ 入塾金
 * 月額プランで同じ期間を受けた場合と同じ額にしている（11月までに申し込んだ人との公平のため）。
 * 12月・1月・2月だけ料金表に出る。それ以外の月は出ない。
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
}

export function getPack(now: Date = new Date()): Pack | null {
  const p = PACK_MONTHS[effectiveMonth(now)]
  if (!p) return null
  return { ...p, total: MONTHLY_FEE * p.months + ENROLLMENT_FEE }
}

export const yen = (n: number) => n.toLocaleString('ja-JP')
