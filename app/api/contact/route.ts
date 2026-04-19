import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, plan, message } = body

    // Validate required fields
    if (!name || !email || !phone || !plan) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      )
    }

    // Send email using Resend to admin
    const result = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: 'sohta0116@gmail.com',
      subject: `【佐藤塾】新しい相談申し込みが届きました - ${name}様より`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #002147; border-bottom: 2px solid #800000; padding-bottom: 10px;">新しい相談申し込みがありました</h2>
          
          <div style="margin: 20px 0; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <p><strong style="color: #002147;">お名前:</strong> ${name}</p>
            <p><strong style="color: #002147;">メールアドレス:</strong> ${email}</p>
            <p><strong style="color: #002147;">電話番号:</strong> ${phone}</p>
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
