export interface Character {
  id?: number;
  name?: string;
  description?: string;
  resourceURI?: string;
  urls?: { type: string; url: string }[];
  thumbnail?: string;
  comics?: {
    available: number;
    items: { name: string }[];
  };
  stories?: {
    available: number;
    items: { name: string }[];
  };
  events?: {
    available: number;
    items: { name: string }[];
  };
  series?: {
    available: number;
    items: { name: string }[];
  };
}
