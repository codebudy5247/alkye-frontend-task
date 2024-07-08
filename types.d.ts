type Article = {
  id: number;
  title: string;
  created_at: string; // ISO 8601 date string
  prompt: string;
  short_description: string;
  content: string;
  image_url: string;
};

type User = {
  token: string;
  user_id: number;
};

type Customer = {
  id: number;
  customer_name: string;
  emailAdd: string;
  password: string;
};
