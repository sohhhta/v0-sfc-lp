import { Metadata } from "next";
import {
  ArticleH2,
  ArticleCTA,
  TableOfContents,
  AuthorBox,
  ArticleNavigation,
  ArticleHighlight,
  ArticleHeader,
  ArticleContainer,
} from "@/components/article-ui";

export const metadata: Metadata = {
  title: "慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠",
  description: "「ニュースで見るような大きな社会問題じゃないと合格できない？」そんな不安を解き、SFCの教授陣が本当に求めている「内発的な動機」を見つけるための具体的なステップと、陥りがちな思考の罠を解説します。",
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent("慶應SFCの志望理由書に「立派な社会問題」は不要。自分だけの研究テーマを見つける3ステップと思考の罠")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const tocItems = [
  { id: "section-1", label: "SFCが求める「問題解決」に対する、受験生の致命的な誤解" },
  { id: "section-2", label: "今日からできる！自分だけの「テーマ」を掘り起こす3ステップ" },
  { id: "section-3", label: "【壁】一人で考えると必ず陥る「思考のループ」と限界" },
  { id: "section-4", label: "佐藤塾の「AI壁打ち×魂の1on1」が、テーマを覚醒させる理由" },
];

export default function AoThemePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <ArticleContainer>

        <ArticleHeader
          theme="ao"
          category="SFC AO入試 対策ガイド"
          title={<>【テーマ設定編】自分だけの<br className="hidden md:block" />研究テーマを見つける3ステップ</>}
          readTime={6}
        />

        <div className="p-8 md:p-12 text-slate-800">
          <p className="mb-8 leading-relaxed text-slate-700 md:text-lg">
            SFC受験生と保護者様が最も悩み、そして誤解しやすいのが「テーマ設定」です。「ニュースで見るような大きな社会課題や、最新のITテクノロジーなど、社会的に意義のある立派なテーマを掲げないと合格できないのではないか？」と不安に思う方も多いでしょう。<br />
            しかし、SFCの教授陣が本当に求めているのは、ニュースから借りてきた社会問題ではありません。この記事では、自分自身の内側から湧き上がる「内発的な動機」を見つけ出し、SFCでの研究テーマへと昇華させる具体的なステップと、その過程で陥りがちな罠について解説します。
          </p>

          <TableOfContents items={tocItems} />

          <ArticleH2 id="section-1">
            SFCが求める「問題解決」に対する、受験生の致命的な誤解
          </ArticleH2>

          <p className="mb-6 leading-relaxed">SFCは「問題発見・解決の大学」です。だからこそ、多くの受験生が「社会的に評価されそうなテーマ」を探そうとします。SDGs、環境問題、教育格差、AIの倫理問題など、入り口は様々です。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>しかし、ニュースや教科書から借りてきた「正解」のようなテーマは、面接ですぐに見抜かれます。</ArticleHighlight></p>
          <p className="mb-6 leading-relaxed">なぜなら、そこには「あなた自身の血の通った体験」が欠けているからです。どんなに論理的で立派な解決策であっても、第三者的な視点で作られた書類には熱が宿りません。</p>
          <p className="mb-6 leading-relaxed">SFCの教授陣が見極めようとしているのは、課題のスケール（大きさ）ではありません。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>「なぜ、他の誰でもない『あなた』が、大学の4年間（あるいはその先の人生）をかけてその問題に取り組むのか」という圧倒的な必然性です。</ArticleHighlight></p>

          <ArticleH2 id="section-2">
            今日からできる！自分だけの「テーマ」を掘り起こす3ステップ
          </ArticleH2>

          <p className="mb-6 leading-relaxed">では、どうすれば自分だけのテーマが見つかるのでしょうか。特別な実績や海外経験は全く不要です。以下の3つのステップで、自分の内面を掘り下げてみましょう。</p>

          <h3 className="text-lg font-bold text-[#002147] mb-3 mt-8">Step1. 日常の中で見過ごせない「違和感」や「偏愛」を書き出す</h3>
          <p className="mb-6 leading-relaxed">まずは、日々の生活の中で感じる些細な「不便さ」や「怒り」、あるいは時間を忘れて没頭してしまう「好きなこと（偏愛）」をノートに書き出してみてください。「なぜあのシステムは使いにくいのか」「なぜこの地域の伝統は廃れていくのか」といった、等身大の気づきが最高のスタート地点になります。</p>

          <h3 className="text-lg font-bold text-[#002147] mb-3 mt-8">Step2. 「なぜ？」を繰り返し、個人的な想いの根源を探る</h3>
          <p className="mb-6 leading-relaxed">次に、書き出した違和感に対して「なぜそう感じるのか？」を5回繰り返します。自分自身の過去の体験（原体験）を丁寧に紐解き、表面的な興味の奥にある「自分自身の価値観の根源」にアクセスするプロセスです。</p>

          <h3 className="text-lg font-bold text-[#002147] mb-3 mt-8">Step3. 個人的なモヤモヤを「社会の課題」へと接続する</h3>
          <p className="mb-10 leading-relaxed">個人的な想いの解像度が上がったら、それを社会構造の視点から捉え直します。「自分のこの悩みは、実は社会のシステムやテクノロジーの欠陥から生じているのではないか？」と考えることで、単なる「個人の感想」が「研究テーマ」の種へと変化し始めます。</p>

          <ArticleH2 id="section-3">
            【壁】一人で考えると必ず陥る「思考のループ」と限界
          </ArticleH2>

          <p className="mb-6 leading-relaxed">ここまでのステップを頭で理解できても、いざ一人で机に向かって実践しようとすると、多くの受験生が厚い壁にぶつかります。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>「想いは見えてきたけれど、それがSFCのアカデミア（学問）とどう結びつくのかわからない」という壁です。</ArticleHighlight></p>
          <p className="mb-6 leading-relaxed">高校生が一人で考えていても、想いを学術的なアプローチに変換するための「語彙力」や「先行研究の知識」が圧倒的に不足しています。</p>
          <p className="mb-6 leading-relaxed">ネットで検索を重ねても、どこかで見たようなありきたりな言葉や、他人の論文のつぎはぎしか出てきません。結果として、思考が堂々巡りになり、時間だけが過ぎていく「思考のループ」に陥ってしまうのです。</p>

          <ArticleH2 id="section-4">
            佐藤塾の「AI壁打ち×魂の1on1」が、テーマを覚醒させる理由
          </ArticleH2>

          <p className="mb-6 leading-relaxed">この苦しい「思考のループ」を破壊し、テーマを爆発的に進化させるのが、佐藤塾が提供する独自の伴走環境です。</p>
          <p className="mb-6 leading-relaxed">まず、<ArticleHighlight>24時間稼働のSFC特化AI</ArticleHighlight>に、あなたのまとまらないモヤモヤや思考の断片をそのままぶつけてください。AIはあなたの言葉を瞬時に読み解き、関連する先行研究、SFCの教授陣の知見、そしてアカデミックな切り口へと「翻訳」して返してくれます。一人では何日もかかる調査と思考の整理が、圧倒的なスピードで進みます。</p>
          <p className="mb-10 leading-relaxed text-lg"><ArticleHighlight>しかし、AIが出力したものはあくまで「質の高い素材」に過ぎません。最後に必要不可欠なのが、塾長である私との「1on1対話」です。</ArticleHighlight></p>
          <p className="mb-6 leading-relaxed">��それは本当に君がやりたいことなのか？」「SFCのこの教授の元で学ぶ必然性はどこにあるのか？」——容赦のない、しかし本質的な問いを投げかけます。</p>
          <p className="mb-6 leading-relaxed">この泥臭い対話の往復を通じて、AIが整えた綺麗なロジックに「あなた自身の血」が通い始めます。こうして出来上がったテーマこそが、いかなる面接官の鋭い質問も跳ね返す、最強の「本気の覚悟」へと昇華されるのです。</p>

          <ArticleNavigation
            prev={{
              title: "��二刀流戦略】一般入試とAO入試の相乗効果",
              href: "/ao-guide/strategy",
            }}
            back={{ title: "AO入試 対策記事一覧に戻る", href: "/ao-guide/articles" }}
          />

          <AuthorBox />

          <ArticleCTA />
        </div>
      </ArticleContainer>
    </main>
  );
}
