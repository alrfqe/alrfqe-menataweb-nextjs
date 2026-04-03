import { defineArrayMember, defineField, defineType } from 'sanity';

const blockArray = [
  defineArrayMember({
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'Quote', value: 'blockquote' },
    ],
    lists: [{ title: 'Bullet', value: 'bullet' }, { title: 'Numbered', value: 'number' }],
  }),
];

export const localizedPortableTextType = defineType({
  name: 'localizedPortableText',
  title: 'Localized Portable Text',
  type: 'object',
  fields: [
    defineField({ name: 'id', title: 'Indonesia', type: 'array', of: blockArray, validation: (rule) => rule.required() }),
    defineField({ name: 'en', title: 'English', type: 'array', of: blockArray, validation: (rule) => rule.required() }),
  ],
});
