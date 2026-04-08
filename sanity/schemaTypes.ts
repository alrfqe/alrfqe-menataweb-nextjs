import { type SchemaTypeDefinition } from 'sanity';
import { articleType } from './schemas/article';
import { localizedPortableTextType } from './schemas/localizedPortableText';
import { localizedStringType } from './schemas/localizedString';
import { localizedTextType } from './schemas/localizedText';
import { pricingPackageType } from './schemas/pricingPackage';
import { portfolioItemType } from './schemas/portfolioItem';
import { productSolutionType } from './schemas/productSolution';

export const schemaTypes: SchemaTypeDefinition[] = [
  localizedStringType,
  localizedTextType,
  localizedPortableTextType,
  articleType,
  pricingPackageType,
  portfolioItemType,
  productSolutionType,
];
