import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { BOOKING_URL } from '@/lib/site-config'

const FROM_ADDRESS = '佐藤塾 <noreply@mail.sfc-satojuku.com>'
const ADMIN_ADDRESS = 'sohta0116@gmail.com'

const escapeHtml = (v: string) =>
  String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function POST(request: NextRequest) {
  try {
    // Resendクライアントはリクエスト時に初期化（ビルド時の評価を避ける）
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'メール送信の設定が完了していません' },
        { status: 500 }
      )
    }
    const resend = new Resend(apiKey)

    const body = await request.json()
    const { name, email, phone, respondent, grade, plan, message } = body

    // Validate required fields
    if (!name || !email || !phone || !respondent || !grade || !plan) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      )
    }

    const respondentLabel = respondent === 'guardian' ? '保護者' : '生徒本人'

    // Send email using Resend to admin
    const result = await resend.emails.send({
      from: FROM_ADDRESS,
      to: ADMIN_ADDRESS,
      subject: `【佐藤塾】新しい相談申し込みが届きました - ${name}様より`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #002147; border-bottom: 2px solid #800000; padding-bottom: 10px;">新しい相談申し込みがありました</h2>
          
          <div style="margin: 20px 0; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong style="color: #002147;">お名前:</strong> ${name}</p>
            <p><strong style="color: #002147;">メールアドレス:</strong> ${email}</p>
            <p><strong style="color: #002147;">電話番号:</strong> ${phone}</p>
            <p><strong style="color: #002147;">入力した人:</strong> ${respondentLabel}</p>
            <p><strong style="color: #002147;">学年:</strong> ${grade}</p>
            <p><strong style="color: #002147;">ご希望のプラン:</strong> ${plan}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #800000;">ご質問・ご相談内容</h3>
            <div style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 3px solid #800000;">
              ${message || '（入力なし）'}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">このメールはお問い合わせフォームから自動送信されています。</p>
        </div>
      `,
      replyTo: email,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      )
    }


    // 申込者への自動返信（失敗しても申込み自体は成功扱い）
    try {
      const safeName = escapeHtml(name)
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        replyTo: ADMIN_ADDRESS,
        subject: '【佐藤塾】お申し込みを受け付けました（面談日時をお選びください）',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #333; max-width: 560px;">
            <p>${safeName} 様</p>
            <p>この度は佐藤塾の無料個別面談にお申し込みいただき、ありがとうございます。お申し込みを受け付けました。</p>
            <p>面談の日時は、下のボタンから<strong>保護者の方と一緒に</strong>お選びください（まだお選びでない場合のご案内です）。<br />お申し込みが生徒さんご本人の場合は、このメールを保護者の方に転送してください。</p>
            <p style="margin: 28px 0;">
              <a href="${BOOKING_URL}" style="background-color: #800000; color: #ffffff; padding: 14px 32px; border-radius: 999px; text-decoration: none; font-weight: bold;">面談の日時を選ぶ</a>
            </p>
            <p style="font-size: 13px; color: #666;">日時を選ぶと、Google Meet のリンク入りの予約確定メールが届きます。<strong>そのメールに、日時と保護者の方のご同席をご確認のうえ、ご返信ください。</strong>（すでにお選びいただいた方は、このメールは読み飛ばしてください。）</p>
            <p>ご都合のよい日時が見つからない場合は、このメールにそのままご返信ください。日程を調整いたします。<br />面談は無料で、面談後にご入塾を迫ることはありません。</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">このメールはお問い合わせフォームから自動送信されています。</p>
        </div>
      `,
      replyTo: email,
    })

    if (result.error) {
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      )
    }


    // 申込者への自動返信（失敗しても申込み自体は成功扱い）
    try {
      const safeName = escapeHtml(name)
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        replyTo: ADMIN_ADDRESS,
        subject: '【佐藤塾】お申し込みを受け付けました（面談日時をお選びください）',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #333; max-width: 560px;">
            <p>${safeName} 様</p>
            <p>この度は佐藤塾の無料個別面談にお申し込みいただき、ありがとうございます。<br />お申し込みを受け付けました。</p>
            <p><strong>面談の日時は、下のボタンからお選びください。</strong><br />保護者の方のご同席が必須です。生徒さんと保護者の方、お二人でご参加ください。</p>
            <p style="margin: 28px 0;">
              <a href="${BOOKING_URL}" style="background-color: #800000; color: #ffffff; padding: 14px 32px; border-radius: 999px; text-decoration: none; font-weight: bold;">面談の日時を選ぶ</a>
            </p>
            <p style="font-size: 13px; color: #666;">ボタンが開けない場合は、次のURLをブラウザに貼り付けてください。<br />${BOOKING_URL}</p>
            <h3 style="color: #002147; border-bottom: 1px solid #ddd; padding-bottom: 6px;">今後の流れ</h3>
            <ol>
              <li>面談の日時をお選びください（予約確定のメールが届きます）</li>
              <li>オンライン（Google Meet）で無料の個別面談（約60分）</li>
              <li>1週間の「お試し添削」で指導内容をご体験いただきます</li>
              <li>ご納得いただけた場合のみ、ご入塾となります</li>
            </ol>
            <p>ご都合のよい日時が見つからない場合は、このメールにそのままご返信ください。日程を調整いたします。</p>
            <p>面談後にご入塾を迫ることはありません。まずはお気軽にご相談ください。</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
            <p style="font-size: 13px; color: #666;">佐藤塾（慶應SFC専門のオンライン塾）<br />https://www.sfc-satojuku.com/</p>
          </div>
        `,
      })
    } catch (autoReplyError) {
      console.error('Auto-reply error:', autoReplyError)
    }

    return NextResponse.json(
      { success: true, message: '送信が完了しました！' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}
