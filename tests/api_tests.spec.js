import { test, expect } from '@playwright/test';

test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status(), 'DELETE status should be 204').toBe(200);
});

test('API PUT request', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    json: {
      userId: 1,
      title: 'Updated title',
      body: 'Updated body',
    },
  });

  expect(response.status(), 'PUT status should be 200').toBe(200);

  const body = await response.json();
  // Just log and assert it has 'id'
  console.log('PUT response:', body);
  expect(body).toHaveProperty('id', 1); // minimal assertion
});


test('API POST request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        json: {
            userId: 1,
            title: 'Test title',
            body: 'Test body',
        },
    });

    expect(response.status(), 'POST status should be 201').toBe(201);

    const body = await response.json();

    // Only "id" is returned, so assert that
    expect(body).toHaveProperty('id');
    console.log('POST response:', body);
});

test('API GET request', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status(), 'GET status should be 200').toBe(200);

    const body = await response.json();
    //expect(body?.data?.first_name).toBe('Janet');
    console.log('GET response:', body);
});
