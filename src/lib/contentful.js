//Inhalt von contentful.js
import * as contentful from 'contentful';
import { PUBLIC_CONTENTFUL_SPACE_ID, PUBLIC_CONTENTFUL_ACCESS_TOKEN } from '$env/static/public'

export const client = contentful.createClient({
    space: PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: PUBLIC_CONTENTFUL_ACCESS_TOKEN
});
