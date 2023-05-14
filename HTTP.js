class HTTP {
  static async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  static async post(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }

  static async put(url, body) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return data;
  }

  static async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }
}
