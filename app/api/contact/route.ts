import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, plan, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !plan) {
      return NextResponse.json(
        { error: '必須項目が入力されていません' },
        { status: 400 }
      )
    }

    // Email content for admin
    const adminEmailContent = `
新しいお問い合わせが届きました。

【お客様情報】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone}
ご希望のプラン: ${plan}

【ご質問・ご相談】
${message || 'なし'}

---
このメールは自動送信です。お客様からのご返信はご遠慮ください。
    `

    // Email content for customer
    const customerEmailContent = `
${name}様

いつもお問い合わせいただきありがとうございます。

本メールは、ご登録いただいたメールアドレスへの送信確認です。
以下の内容でお問い合わせを受け付けました。

【お客様情報】
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone}
ご希望のプラン: ${plan}

【ご質問・ご相談】
${message || 'なし'}

---
近日中に、担当者よりご連絡させていただきます。
何かご不明な点がございましたら、お気軽にお問い合わせください。

佐藤塾 一同
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'sohta0116@gmail.com',
      subject: `【佐藤塾】新しいお問い合わせ - ${name}様`,
      text: adminEmailContent,
    })

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: '【佐藤塾】お問い合わせを受け付けました',
      text: customerEmailContent,
    })

    return NextResponse.json(
      { message: '送信が完了しました。担当者より追ってご連絡いたします。' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました。しばらく時間をおいてからお試しください。' },
      { status: 500 }
    )
  }
}
