/**
 * 新規受入人数の管理（ここだけを更新すれば、サイト内の「残りN名」表示がすべて変わります）
 *
 * - capacity: 今年度の新規受入の上限人数
 * - enrolled: 現在の入塾（受入済み）人数 ← 入塾が決まったらこの数字だけを変更する
 *
 * 表示は実際の入塾数から計算されるため、事実と異なる残枠表示になりません。
 * 残りが0名になった場合の表示は未定義（要件は残り1名になった時点で再検討）。
 */
export const SEATS = {
  capacity: 4,
  enrolled: 1,
} as const

export const remainingSeats = SEATS.capacity - SEATS.enrolled

// 面談予約ページ（Googleカレンダー予約スケジュール）
export const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1UvqGMa3NE-cXOfcZpNwqtsabGlQWHsj-zirEPMqVhvLIE1MQYLL1eM_fA9AL7R1RCMe9wT92J'
