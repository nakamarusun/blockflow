import { handleResponse } from "./apiUtils";

const baseUrl = process.env.API_URL;
const noteUrl = baseUrl + "/notes/";
const authorUrl = baseUrl + "/authors/";

// Note API

export function getNotes(): Promise<unknown> {
  return fetch(noteUrl)
    .then(handleResponse);
}

export function getNote(id: string): Promise<unknown> {
  return fetch(noteUrl + id)
    .then(handleResponse);
}

// Author API

export function getAuthors(): Promise<unknown> {
  return fetch(authorUrl)
    .then(handleResponse);
}