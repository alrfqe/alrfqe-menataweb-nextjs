import { defineField, defineType } from 'sanity';

export const localizedTextType = defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({ name: 'id', title: 'Indonesia', type: 'text', rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3, validation: (rule) => rule.required() }),
  ],
});
