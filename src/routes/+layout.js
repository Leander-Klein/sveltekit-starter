import { client } from "../lib/contentful";

export const load = async () => {
    const res = await client.getEntries({ content_type: 'element' })
        .catch((error) => {
            console.log(`Error fetching content: ${error.message}`);
        });
    return res
};

