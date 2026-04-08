import { GoogleGenAI, Type, Schema } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const categories = [
  {
    id: "1",
    title: "企業活動と情報処理",
    subcategories: [
      {
        id: "1-c",
        title: "情報モラル",
        terms: ["公表権", "氏名表示権", "同一性保持権", "上演権", "譲渡権", "貸与権", "複製権", "著作隣接権", "著作隣接権者", "産業財産権", "特許権", "実用新案権", "意匠権", "商標権"]
      }
    ]
  },
  {
    id: "2",
    title: "コンピュータシステムと情報通信ネットワーク",
    subcategories: [
      {
        id: "2-a",
        title: "コンピュータシステムの概要",
        terms: ["コード", "ANSI", "ASCIIコード", "ISO", "JIS", "JISコード", "シフトJISコード", "Unicode", "16進数", "基数変換", "補数", "コア", "プロセッサ", "シングルコアプロセッサ", "MPU", "マルチコアプロセッサ", "キャッシュメモリ", "シリンダ", "トラック", "セクタ", "ドライブ", "ディスクキャッシュ", "スループット", "レスポンスタイム", "ターンアラウンドタイム", "ディレクトリ", "サブディレクトリ", "ルートディレクトリ", "ワイルドカード", "AVI", "BMP", "JPEG", "GIF", "PNG", "MPEG", "MP3", "MIDI", "WAV", "CSV", "PDF", "CD-R", "CD-ROM", "CD-RW", "DVD-R", "DVD-ROM", "DVD-RW", "BD-R", "BD-ROM", "BD-RW"]
      },
      {
        id: "2-b",
        title: "情報通信ネットワークの仕組みと構成",
        terms: ["パケット", "パケット交換", "TCP/IP", "ネットワークアドレス", "ホストアドレス", "サブネットマスク", "グローバルIPアドレス", "プライベートIPアドレス", "DHCP", "MACアドレス", "ESSID", "SSID", "通信速度", "伝送効率", "転送時間", "bps", "テザリング", "Cookie", "XML", "HTTP", "IMAP4", "IMAPサーバ", "POP3", "POPサーバ", "SMTP", "SMTPサーバ", "ファイルサーバ", "プリントサーバ", "FTP", "ネットワークインタフェースカード", "ハブ", "スイッチングハブ", "ルータ", "ブロードバンド", "ブロードバンドルータ", "ONU", "プロキシサーバ", "オンラインストレージ", "NAS"]
      },
      {
        id: "2-c",
        title: "情報通信ネットワークの活用",
        terms: ["ファイル共有ソフトウェア", "ファイル交換ソフトウェア", "グループウェア", "圧縮率", "可逆圧縮", "非可逆圧縮", "ZIP形式", "オンデマンド", "ストリーミング", "オンライン", "オンライン処理", "オンラインシステム", "リアルタイム処理", "バッチ処理", "クライアントサーバシステム", "オンライントランザクション処理", "集中処理", "分散処理", "並列処理", "シンプレックスシステム", "デュプレックスシステム", "デュアルシステム"]
      },
      {
        id: "2-d",
        title: "情報セキュリティの確保と法規",
        terms: ["物理的脅威", "人的脅威", "技術的脅威", "内部不正", "ボット", "マクロウイルス", "DDoS攻撃", "DoS攻撃", "キーロガー", "ガンブラー", "クラッキング", "ソーシャルエンジニアリング", "盗み見", "生体認証", "顔認証", "虹彩認証", "静脈パターン認証", "網膜認証", "声紋認証", "多要素認証", "多段階認証", "他人受入率", "本人拒否率", "ファイアウォール", "DMZ", "VPN", "アクセスログ", "共通鍵暗号方式", "公開鍵暗号方式", "セッション鍵方式", "デジタル署名", "電子署名", "認証局", "電子証明書", "電子認証", "電子すかし", "ディスク暗号化", "HTTPS", "SSL/TLS", "サイバー空間"]
      }
    ]
  },
  {
    id: "3",
    title: "情報の集計と分析",
    subcategories: [
      {
        id: "3-b",
        title: "表・グラフの作成と情報の分析",
        terms: ["ブック", "ワークシート", "メニューバー", "セル", "行", "行高", "列幅", "セルの表示形式", "文字位置", "文字方向", "セル結合", "複写", "移動", "罫線", "比較演算子", "算術演算子", "文字列演算子", "セル番地", "相対参照", "絶対参照", "複合参照", "再計算", "並べ替え", "キー項目", "昇順", "降順", "関数", "引数", "入れ子", "シリアル値", "適切な表の構成", "適切なグラフの作成", "タイトル", "軸ラベル", "軸の反転", "凡例", "行と列の切り替え", "SUM", "AVERAGE", "MAX", "MIN", "RANK", "IF", "COUNT", "COUNTA", "ROUND", "ROUNDUP", "ROUNDDOWN", "LEN", "LEFT", "RIGHT", "MID", "VALUE", "NOW", "TODAY", "HLOOKUP", "VLOOKUP", "INT", "MOD", "AND", "OR", "NOT", "集合棒グラフ", "積み上げ棒グラフ", "100%積み上げ棒グラフ", "折れ線グラフ", "円グラフ", "切り離し円グラフ", "レーダーチャート"]
      }
    ]
  },
  {
    id: "5",
    title: "プレゼンテーション",
    subcategories: [
      {
        id: "5-a",
        title: "プレゼンテーションの技法及びビジネスにおけるプレゼンテーション",
        terms: ["話し方の基本", "ノンバーバルコミュニケーション", "序論", "本論", "結論", "トップダウン方式", "ボトムアップ方式", "プレゼンテーションの目的", "プレゼンテーションの形態"]
      }
    ]
  }
];

const schema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      name: { type: Type.STRING },
      descriptions: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "3つの異なる説明文（真面目な解説）"
      },
      rarity: { 
        type: Type.STRING,
        description: "C, R, SR, UR のいずれか。重要度や難易度に応じて設定。"
      },
      flavorTexts: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "3つのフレーバーテキスト（少しユーモアのある、カードゲーム風のテキスト）"
      }
    },
    required: ["name", "descriptions", "rarity", "flavorTexts"]
  }
};

async function generateTerms(terms: string[], subcategoryTitle: string) {
  const prompt = `
全商情報処理検定「情報処理」の用語集を作成しています。
以下の用語リストについて、それぞれJSON形式でデータを生成してください。
単元名: ${subcategoryTitle}
用語リスト: ${terms.join(', ')}

各用語について、以下の4つを含めてください。
1. name: 用語名（リストの通り）
2. descriptions: 辞書的な真面目な説明文を3つ（それぞれ異なる切り口で、1文〜2文程度）
3. rarity: C, R, SR, UR のいずれか（Cが約50%, Rが約30%, SRが約15%, URが約5%になるようなバランスで。基礎用語はC、重要概念はSRやUR）
4. flavorTexts: カードゲームのフレーバーテキストのような、少しユーモアや比喩を交えたテキストを3つ
`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: schema,
      temperature: 0.7,
    }
  });

  return JSON.parse(response.text || "[]");
}

async function main() {
  let output = `export type Rarity = 'C' | 'R' | 'SR' | 'UR';

export interface TermData {
  name: string;
  descriptions: string[];
  rarity: Rarity;
  flavorTexts: string[];
}

export interface Subcategory {
  id: string;
  title: string;
  terms: TermData[];
}

export interface Category {
  id: string;
  title: string;
  subcategories: Subcategory[];
}

export const quizCategories: Category[] = [\n`;

  for (const category of categories) {
    output += `  {\n    id: "${category.id}",\n    title: "${category.title}",\n    subcategories: [\n`;
    for (const sub of category.subcategories) {
      console.log(`Processing subcategory: ${sub.title} (${sub.terms.length} terms)`);
      output += `      {\n        id: "${sub.id}",\n        title: "${sub.title}",\n        terms: [\n`;
      
      const batchSize = 15;
      for (let i = 0; i < sub.terms.length; i += batchSize) {
        const batch = sub.terms.slice(i, i + batchSize);
        console.log(`  Generating batch ${i / batchSize + 1}...`);
        let generatedTerms: any[] = [];
        try {
          generatedTerms = await generateTerms(batch, sub.title);
        } catch (e) {
          console.error(`Error generating batch:`, e);
          console.log(`  Retrying batch...`);
          generatedTerms = await generateTerms(batch, sub.title);
        }
        
        for (const term of generatedTerms) {
          output += `          ${JSON.stringify(term)},\n`;
        }
      }
      output += `        ]\n      },\n`;
    }
    output += `    ]\n  },\n`;
  }
  
  output += `];\n\n`;
  
  output += `
export const allTermsMap = new Map<string, TermData>();
export const allTerms: TermData[] = [];

quizCategories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    subcategory.terms.forEach(term => {
      allTermsMap.set(term.name, term);
      allTerms.push(term);
    });
  });
});
`;

  fs.writeFileSync('./src/data/quizData.ts', output);
  console.log('Successfully generated quizData.ts');
}

main().catch(console.error);
