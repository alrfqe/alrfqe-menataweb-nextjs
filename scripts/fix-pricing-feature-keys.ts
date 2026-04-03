import { getCliClient } from 'sanity/cli';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ubwoe1c4';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

const client = getCliClient({
  apiVersion: '2025-08-15',
  projectId,
  dataset,
  useCdn: false,
});

function randomKey() {
  return Math.random().toString(36).slice(2, 11);
}

async function main() {
  const packages = await client.fetch<
    Array<{
      _id: string;
      features?: Array<{
        _key?: string;
        _type: 'localizedString';
        id?: string;
        en?: string;
      }>;
    }>
  >(`*[_type == "pricingPackage"]{_id, features}`);

  for (const pkg of packages) {
    const features = (pkg.features ?? []).map((feature) => ({
      ...feature,
      _key: feature._key ?? randomKey(),
    }));

    await client.patch(pkg._id).set({ features }).commit();
    console.log(`Fixed feature keys for ${pkg._id}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
