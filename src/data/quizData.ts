export type Rarity = 'C' | 'R' | 'SR' | 'UR';

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

import { category1 } from './category1';
import { category2_1 } from './category2_1';
import { category2_2 } from './category2_2';
import { category2_3 } from './category2_3';
import { category2_4 } from './category2_4';
import { category3 } from './category3';
import { category5 } from './category5';

export const quizCategories: Category[] = [
  {
    id: "1_3_5",
    title: "企業活動と情報処理・情報の集計と分析・プレゼンテーション",
    subcategories: [
      ...category1.subcategories,
      ...category3.subcategories,
      ...category5.subcategories
    ]
  },
  {
    id: "2",
    title: "コンピュータシステムと情報通信ネットワーク",
    subcategories: [
      category2_1,
      category2_2,
      category2_3,
      category2_4
    ]
  }
];

export const allTermsMap: Record<string, TermData> = {};
export const allTerms: string[] = [];

quizCategories.forEach(category => {
  category.subcategories.forEach(subcategory => {
    subcategory.terms.forEach(term => {
      allTermsMap[term.name] = term;
      allTerms.push(term.name);
    });
  });
});
