let BASE_URL = 'https://community-forum-api.now.sh';
if (window.location.hostname === 'localhost') {
  BASE_URL = 'http://localhost:3000';
}

const API_URL = `${BASE_URL}/api/v1/`;

export async function getAllCategories() {
  const response = await fetch(`${API_URL}categories`);
  return response.json();
}

export async function createCategory(category) {
  const response = await fetch(`${API_URL}categories`, {
    method: 'POST',
    body: JSON.stringify(category),
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${localStorage.token}`,
    },
  });
  return response.json();
}
